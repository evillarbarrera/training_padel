import Foundation
import CoreMotion
import Combine
import WatchKit

public enum PadelStroke: String, CaseIterable, Identifiable {
    case smash = "Smash"
    case bandeja = "Bandeja"
    case vibora = "Víbora"
    case drive = "Drive"
    case reves = "Revés"
    case volea = "Volea"
    case globo = "Globo"

    public var id: String { self.rawValue }

    public var icon: String {
        switch self {
        case .smash: return "bolt.fill"
        case .bandeja: return "tornado"
        case .vibora: return "flame.fill"
        case .drive: return "figure.tennis"
        case .reves: return "arrow.uturn.backward"
        case .volea: return "shield.fill"
        case .globo: return "arrow.up.forward.circle.fill"
        }
    }
}

public struct StrokeEvent: Identifiable {
    public let id = UUID()
    public let stroke: PadelStroke
    public let speedKmh: Double
    public let peakG: Double
    public let timestamp: Date
}

public class MotionClassifier: ObservableObject {
    private let motionManager = CMMotionManager()
    private let queue = OperationQueue()

    @Published public var isRunning: Bool = false
    @Published public var lastStroke: StrokeEvent?
    @Published public var strokeCounts: [PadelStroke: Int] = [
        .smash: 0, .bandeja: 0, .vibora: 0,
        .drive: 0, .reves: 0, .volea: 0, .globo: 0
    ]
    @Published public var totalStrokes: Int = 0
    @Published public var maxSpeedKmh: Double = 0.0
    @Published public var avgSpeedKmh: Double = 0.0
    @Published public var recentStrokes: [StrokeEvent] = []

    public var isRightHanded: Bool = true
    private var lastStrokeTime: Date = Date.distantPast
    private var speedAccumulator: Double = 0.0

    public init() {
        queue.qualityOfService = .userInteractive
    }

    public func startTracking(rightHanded: Bool = true) {
        self.isRightHanded = rightHanded
        guard motionManager.isDeviceMotionAvailable else {
            print("CoreMotion DeviceMotion no disponible en este dispositivo")
            return
        }

        resetStats()
        motionManager.deviceMotionUpdateInterval = 1.0 / 100.0 // 100Hz
        isRunning = true

        motionManager.startDeviceMotionUpdates(using: .xArbitraryZVertical, to: queue) { [weak self] motion, error in
            guard let self = self, let motion = motion, error == nil else { return }
            self.processMotionData(motion)
        }
    }

    public func stopTracking() {
        motionManager.stopDeviceMotionUpdates()
        DispatchQueue.main.async {
            self.isRunning = false
        }
    }

    public func resetStats() {
        DispatchQueue.main.async {
            self.totalStrokes = 0
            self.maxSpeedKmh = 0.0
            self.avgSpeedKmh = 0.0
            self.speedAccumulator = 0.0
            self.lastStroke = nil
            self.recentStrokes.removeAll()
            for s in PadelStroke.allCases {
                self.strokeCounts[s] = 0
            }
        }
    }

    private func processMotionData(_ motion: CMDeviceMotion) {
        let userAcc = motion.userAcceleration
        let rotRate = motion.rotationRate

        // Magnitud de la aceleración en Gs
        let accMagnitude = sqrt(userAcc.x * userAcc.x + userAcc.y * userAcc.y + userAcc.z * userAcc.z)
        // Magnitud de la velocidad de rotación angular (rad/s)
        let rotMagnitude = sqrt(rotRate.x * rotRate.x + rotRate.y * rotRate.y + rotRate.z * rotRate.z)

        // Umbral de impacto de pádel: mínimo 3.8G y rotación angular > 6.0 rad/s
        guard accMagnitude > 3.8 && rotMagnitude > 6.0 else { return }

        let now = Date()
        // Ventana de refracción entre golpes (al menos 350ms para evitar doble conteo de un mismo swing)
        guard now.timeIntervalSince(lastStrokeTime) > 0.35 else { return }
        lastStrokeTime = now

        // Estimación de velocidad tangencial de la pala: v = ω * r (radio estimado brazo + pala = 0.85m)
        let estimatedRadius = 0.85
        let rawSpeedKmh = (rotMagnitude * estimatedRadius + accMagnitude * 1.8) * 3.6
        // Calibrar límites realistas de pádel (30 km/h a 170 km/h)
        let speedKmh = min(max(rawSpeedKmh, 35.0), 165.0)

        let detectedStroke = classifyStroke(userAcc: userAcc, rotRate: rotRate, speedKmh: speedKmh)

        DispatchQueue.main.async {
            self.totalStrokes += 1
            self.strokeCounts[detectedStroke, default: 0] += 1
            self.speedAccumulator += speedKmh
            self.avgSpeedKmh = self.speedAccumulator / Double(self.totalStrokes)
            if speedKmh > self.maxSpeedKmh {
                self.maxSpeedKmh = speedKmh
            }

            let event = StrokeEvent(stroke: detectedStroke, speedKmh: speedKmh, peakG: accMagnitude, timestamp: now)
            self.lastStroke = event
            self.recentStrokes.insert(event, at: 0)
            if self.recentStrokes.count > 30 {
                self.recentStrokes.removeLast()
            }

            // Notificación háptica sutil para feedback inmediato
            if detectedStroke == .smash {
                WKInterfaceDevice.current().play(.directionUp)
            } else {
                WKInterfaceDevice.current().play(.click)
            }
        }
    }

    private func classifyStroke(userAcc: CMAcceleration, rotRate: CMRotationRate, speedKmh: Double) -> PadelStroke {
        let yAcc = userAcc.y // Aceleración vertical / longitudinal del brazo
        let zAcc = userAcc.z // Aceleración hacia adelante/atrás de la pala
        let xRot = rotRate.x // Rotación de muñeca arriba/abajo
        let zRot = isRightHanded ? rotRate.z : -rotRate.z // Pronación / Supinación

        // 1. Smash / Remate: Gran aceleración vertical descendente + pronación rápida + alta velocidad
        if (yAcc > 3.0 || zAcc > 4.0) && speedKmh > 85.0 && xRot < -4.0 {
            return .smash
        }

        // 2. Bandeja / Víbora: Swing alto cortado con rotación lateral pronunciada
        if yAcc > 2.0 && abs(zRot) > 5.0 {
            if zRot > 6.0 {
                return .vibora
            } else {
                return .bandeja
            }
        }

        // 3. Globo: Impulso ascendente suave con bajo pico de velocidad
        if yAcc > 2.5 && speedKmh < 65.0 && xRot > 2.0 {
            return .globo
        }

        // 4. Voleas: Aceleración frontal brusca sin arco de rotación largo
        if abs(zAcc) > 3.5 && abs(rotRate.y) < 5.0 && speedKmh < 80.0 {
            return .volea
        }

        // 5. Drive vs Revés: Clasificación por dirección angular de swing horizontal
        if zRot > 0 {
            return .drive
        } else {
            return .reves
        }
    }
}

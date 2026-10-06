import Foundation
import Combine
import WatchKit
import AVFoundation

public struct ScoreState {
    public var pointsT1: Int = 0 // 0, 1, 2, 3 (0, 15, 30, 40)
    public var pointsT2: Int = 0
    public var gamesT1: [Int] = [0] // Games por set
    public var gamesT2: [Int] = [0]
    public var currentSet: Int = 0
    public var isGoldenPoint: Bool = false
    public var isTieBreak: Bool = false
    public var isBreakPoint: Bool = false
    public var isSetPoint: Bool = false
    public var isMatchPoint: Bool = false
    public var servingTeam: Int = 1 // 1 o 2
    public var serveSide: String = "Derecha" // "Derecha" o "Izquierda"
    public var matchWinner: Int? = nil
}

public class MatchScoreManager: NSObject, ObservableObject, AVSpeechSynthesizerDelegate {
    @Published public var state = ScoreState()
    @Published public var team1Name: String = "Pareja 1"
    @Published public var team2Name: String = "Pareja 2"
    @Published public var useGoldenPoint: Bool = true
    @Published public var totalSets: Int = 3
    @Published public var matchHistory: [ScoreState] = []
    @Published public var activeAlertMessage: String? = nil
    @Published public var voiceAnnouncementsEnabled: Bool = true

    private let speechSynthesizer = AVSpeechSynthesizer()

    public override init() {
        super.init()
        speechSynthesizer.delegate = self
    }

    public var displayPointsT1: String {
        if state.isTieBreak { return "\(state.pointsT1)" }
        switch state.pointsT1 {
        case 0: return "0"
        case 1: return "15"
        case 2: return "30"
        case 3: return "40"
        case 4: return useGoldenPoint ? "ORO" : "AD"
        default: return "40"
        }
    }

    public var displayPointsT2: String {
        if state.isTieBreak { return "\(state.pointsT2)" }
        switch state.pointsT2 {
        case 0: return "0"
        case 1: return "15"
        case 2: return "30"
        case 3: return "40"
        case 4: return useGoldenPoint ? "ORO" : "AD"
        default: return "40"
        }
    }

    public func resetMatch(t1: String = "Pareja 1", t2: String = "Pareja 2", goldenPoint: Bool = true, sets: Int = 3) {
        team1Name = t1
        team2Name = t2
        useGoldenPoint = goldenPoint
        totalSets = sets
        state = ScoreState()
        matchHistory.removeAll()
        activeAlertMessage = nil
        updateServeSide()
    }

    public func addPoint(toTeam team: Int) {
        guard state.matchWinner == nil else { return }
        saveStateForUndo()

        if state.isTieBreak {
            handleTieBreakPoint(team: team)
        } else {
            handleStandardPoint(team: team)
        }

        updateServeSide()
        evaluateSpecialPoints()
    }

    public func undoLastPoint() {
        guard let prevState = matchHistory.popLast() else { return }
        state = prevState
        activeAlertMessage = nil
        WKInterfaceDevice.current().play(.directionDown)
    }

    private func saveStateForUndo() {
        matchHistory.append(state)
        if matchHistory.count > 25 {
            matchHistory.removeFirst()
        }
    }

    private func handleStandardPoint(team: Int) {
        if team == 1 {
            if state.pointsT1 == 3 && state.pointsT2 < 3 {
                winGame(team: 1)
            } else if state.pointsT1 == 3 && state.pointsT2 == 3 {
                if useGoldenPoint {
                    winGame(team: 1) // Punto de Oro directo
                } else {
                    state.pointsT1 = 4 // Ventaja
                    triggerHaptic(.click)
                }
            } else if state.pointsT1 == 4 {
                winGame(team: 1)
            } else if state.pointsT2 == 4 {
                state.pointsT2 = 3 // De vuelta a iguales
                triggerHaptic(.click)
            } else {
                state.pointsT1 += 1
                triggerHaptic(.click)
            }
        } else {
            if state.pointsT2 == 3 && state.pointsT1 < 3 {
                winGame(team: 2)
            } else if state.pointsT2 == 3 && state.pointsT1 == 3 {
                if useGoldenPoint {
                    winGame(team: 2) // Punto de Oro directo
                } else {
                    state.pointsT2 = 4 // Ventaja
                    triggerHaptic(.click)
                }
            } else if state.pointsT2 == 4 {
                winGame(team: 2)
            } else if state.pointsT1 == 4 {
                state.pointsT1 = 3 // De vuelta a iguales
                triggerHaptic(.click)
            } else {
                state.pointsT2 += 1
                triggerHaptic(.click)
            }
        }

        state.isGoldenPoint = (useGoldenPoint && state.pointsT1 == 3 && state.pointsT2 == 3)
        if state.isGoldenPoint {
            showAlert("⭐ PUNTO DE ORO", haptic: .notification)
            speak("Punto de Oro")
        }
    }

    private func handleTieBreakPoint(team: Int) {
        if team == 1 {
            state.pointsT1 += 1
        } else {
            state.pointsT2 += 1
        }

        triggerHaptic(.click)

        let totalPts = state.pointsT1 + state.pointsT2
        // Cambio de saque cada 2 puntos en tie-break
        if totalPts % 2 == 1 {
            state.servingTeam = (state.servingTeam == 1) ? 2 : 1
        }

        // Cambio de lado cada 6 puntos en tie-break
        if totalPts % 6 == 0 && totalPts > 0 {
            showAlert("🔄 CAMBIO DE LADO", haptic: .directionUp)
            speak("Cambio de lado")
        }

        // Ganar Tie Break (al menos 7 puntos y diferencia de 2)
        let target = 7
        if (state.pointsT1 >= target && state.pointsT1 - state.pointsT2 >= 2) {
            winSet(team: 1)
        } else if (state.pointsT2 >= target && state.pointsT2 - state.pointsT1 >= 2) {
            winSet(team: 2)
        }
    }

    private func winGame(team: Int) {
        state.pointsT1 = 0
        state.pointsT2 = 0
        state.isGoldenPoint = false
        state.isBreakPoint = false

        let setIdx = state.currentSet
        if team == 1 {
            state.gamesT1[setIdx] += 1
        } else {
            state.gamesT2[setIdx] += 1
        }

        let g1 = state.gamesT1[setIdx]
        let g2 = state.gamesT2[setIdx]
        let totalGamesInSet = g1 + g2

        triggerHaptic(.success)

        // Cambiar turno de saque
        state.servingTeam = (state.servingTeam == 1) ? 2 : 1

        // Alerta de Cambio de Lado (suma de games impar: 1, 3, 5, 7...)
        if totalGamesInSet % 2 == 1 && g1 != 6 && g2 != 6 {
            showAlert("🔄 CAMBIO DE LADO", haptic: .directionUp)
            speak("Juego. \(g1) a \(g2). Cambio de lado")
        } else {
            speak("Juego. \(g1) a \(g2)")
        }

        // Verificar si entra a Tie-Break (6-6)
        if g1 == 6 && g2 == 6 {
            state.isTieBreak = true
            showAlert("🔥 TIE-BREAK A 7", haptic: .notification)
            speak("Tie-break")
            return
        }

        // Verificar si se gana el set (6 games y dif >= 2, o 7-5)
        if (g1 >= 6 && g1 - g2 >= 2) || g1 == 7 {
            winSet(team: 1)
        } else if (g2 >= 6 && g2 - g1 >= 2) || g2 == 7 {
            winSet(team: 2)
        }
    }

    private func winSet(team: Int) {
        state.isTieBreak = false
        state.pointsT1 = 0
        state.pointsT2 = 0

        var setsWonT1 = 0
        var setsWonT2 = 0
        for i in 0...state.currentSet {
            let g1 = state.gamesT1[i]
            let g2 = state.gamesT2[i]
            if g1 > g2 { setsWonT1 += 1 }
            else if g2 > g1 { setsWonT2 += 1 }
        }

        let setsNeeded = (totalSets == 3) ? 2 : 1
        if setsWonT1 >= setsNeeded {
            state.matchWinner = 1
            showAlert("🏆 VICTORIA \(team1Name.uppercased())", haptic: .success)
            speak("Partido finalizado. Ganador: \(team1Name)")
        } else if setsWonT2 >= setsNeeded {
            state.matchWinner = 2
            showAlert("🏆 VICTORIA \(team2Name.uppercased())", haptic: .success)
            speak("Partido finalizado. Ganador: \(team2Name)")
        } else {
            // Avanzar al siguiente set
            state.currentSet += 1
            state.gamesT1.append(0)
            state.gamesT2.append(0)
            showAlert("🏁 SET FINALIZADO (SET \(state.currentSet + 1))", haptic: .notification)
            speak("Set finalizado. Comienza set \(state.currentSet + 1)")
        }
    }

    private func evaluateSpecialPoints() {
        guard state.matchWinner == nil else { return }

        // Break point detection (receiving team is 1 point away from winning game)
        let isReceivingTeamPoint = (state.servingTeam == 1 && state.pointsT2 >= 3 && state.pointsT2 > state.pointsT1) ||
                                   (state.servingTeam == 2 && state.pointsT1 >= 3 && state.pointsT1 > state.pointsT2)
        state.isBreakPoint = isReceivingTeamPoint

        if state.isBreakPoint && !state.isGoldenPoint {
            showAlert("⚠️ PUNTO DE BREAK", haptic: .directionDown)
        }
    }

    private func updateServeSide() {
        let totalGamePoints = state.pointsT1 + state.pointsT2
        state.serveSide = (totalGamePoints % 2 == 0) ? "Derecha" : "Izquierda"
    }

    private func triggerHaptic(_ type: WKHapticType) {
        WKInterfaceDevice.current().play(type)
    }

    private func showAlert(_ msg: String, haptic: WKHapticType) {
        activeAlertMessage = msg
        triggerHaptic(haptic)

        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) { [weak self] in
            if self?.activeAlertMessage == msg {
                self?.activeAlertMessage = nil
            }
        }
    }

    public func speak(_ text: String) {
        guard voiceAnnouncementsEnabled else { return }
        let utterance = AVSpeechUtterance(string: text)
        utterance.voice = AVSpeechSynthesisVoice(language: "es-ES") ?? AVSpeechSynthesisVoice(language: "es-MX")
        utterance.rate = 0.52
        utterance.volume = 0.9
        speechSynthesizer.speak(utterance)
    }
}


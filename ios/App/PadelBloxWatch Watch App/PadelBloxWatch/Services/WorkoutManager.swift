import Foundation
import HealthKit
import Combine

public class WorkoutManager: NSObject, ObservableObject, HKWorkoutSessionDelegate, HKLiveWorkoutBuilderDelegate {
    private let healthStore = HKHealthStore()
    private var session: HKWorkoutSession?
    private var builder: HKLiveWorkoutBuilder?

    @Published public var isRunning: Bool = false
    @Published public var heartRate: Double = 0.0
    @Published public var avgHeartRate: Double = 0.0
    @Published public var maxHeartRate: Double = 0.0
    @Published public var activeEnergy: Double = 0.0 // kcal
    @Published public var elapsedTime: TimeInterval = 0.0
    @Published public var heartRateHistory: [Double] = []

    private var timer: Timer?
    private var hrSum: Double = 0.0
    private var hrCount: Int = 0

    private var hasHealthKitUsageDescriptions: Bool {
        let dict = Bundle.main.infoDictionary ?? [:]
        return dict["NSHealthUpdateUsageDescription"] != nil && dict["NSHealthShareUsageDescription"] != nil
    }

    public func requestAuthorization(completion: @escaping (Bool) -> Void) {
        guard hasHealthKitUsageDescriptions && HKHealthStore.isHealthDataAvailable() else {
            // Modo seguro para simulador / sin permisos Info.plist
            completion(true)
            return
        }

        let typesToShare: Set = [
            HKQuantityType.workoutType()
        ]

        let typesToRead: Set = [
            HKQuantityType.quantityType(forIdentifier: .heartRate)!,
            HKQuantityType.quantityType(forIdentifier: .activeEnergyBurned)!,
            HKObjectType.activitySummaryType()
        ]

        healthStore.requestAuthorization(toShare: typesToShare, read: typesToRead) { success, error in
            DispatchQueue.main.async {
                completion(success)
            }
        }
    }

    public func startWorkout() {
        startTimer()

        guard hasHealthKitUsageDescriptions && HKHealthStore.isHealthDataAvailable() else {
            // Simular ritmo cardíaco y calorías activas de pádel en el simulador
            self.heartRate = 138.0
            self.avgHeartRate = 135.0
            self.maxHeartRate = 152.0
            DispatchQueue.main.async { self.isRunning = true }
            return
        }

        let configuration = HKWorkoutConfiguration()
        configuration.activityType = .paddleSports
        configuration.locationType = .indoor

        do {
            session = try HKWorkoutSession(healthStore: healthStore, configuration: configuration)
            builder = session?.associatedWorkoutBuilder()
        } catch {
            print("HealthKit Session fallback: \(error.localizedDescription)")
            DispatchQueue.main.async { self.isRunning = true }
            return
        }

        session?.delegate = self
        builder?.delegate = self
        builder?.dataSource = HKLiveWorkoutDataSource(healthStore: healthStore, workoutConfiguration: configuration)

        let startDate = Date()
        session?.startActivity(with: startDate)
        builder?.beginCollection(withStart: startDate) { [weak self] success, error in
            DispatchQueue.main.async {
                self?.isRunning = true
            }
        }
    }

    public func stopWorkout(completion: @escaping () -> Void) {
        timer?.invalidate()
        timer = nil

        session?.end()
        builder?.endCollection(withEnd: Date()) { [weak self] success, error in
            self?.builder?.finishWorkout { workout, error in
                DispatchQueue.main.async {
                    self?.isRunning = false
                    completion()
                }
            }
        }
    }

    private func startTimer() {
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { [weak self] _ in
            guard let self = self else { return }
            self.elapsedTime += 1.0
            if !self.hasHealthKitUsageDescriptions || !HKHealthStore.isHealthDataAvailable() {
                // Simulación activa de métricas en el simulador
                self.activeEnergy += 0.15 // ~9 kcal/min de pádel
                let variation = Double.random(in: -2.0...2.0)
                self.heartRate = min(max(self.heartRate + variation, 125.0), 165.0)
                self.hrSum += self.heartRate
                self.hrCount += 1
                self.avgHeartRate = self.hrSum / Double(self.hrCount)
                if self.heartRate > self.maxHeartRate {
                    self.maxHeartRate = self.heartRate
                }
            }
        }
    }

    // MARK: - HKLiveWorkoutBuilderDelegate
    public func workoutBuilder(_ workoutBuilder: HKLiveWorkoutBuilder, didCollectDataOf collectedTypes: Set<HKSampleType>) {
        for type in collectedTypes {
            guard let quantityType = type as? HKQuantityType else { continue }
            let statistics = workoutBuilder.statistics(for: quantityType)

            DispatchQueue.main.async {
                if quantityType.identifier == HKQuantityTypeIdentifier.heartRate.rawValue {
                    let heartRateUnit = HKUnit.count().unitDivided(by: HKUnit.minute())
                    if let value = statistics?.mostRecentQuantity()?.doubleValue(for: heartRateUnit) {
                        self.heartRate = value
                        self.heartRateHistory.append(value)
                        self.hrSum += value
                        self.hrCount += 1
                        self.avgHeartRate = self.hrSum / Double(self.hrCount)
                        if value > self.maxHeartRate {
                            self.maxHeartRate = value
                        }
                    }
                } else if quantityType.identifier == HKQuantityTypeIdentifier.activeEnergyBurned.rawValue {
                    let energyUnit = HKUnit.kilocalorie()
                    if let value = statistics?.sumQuantity()?.doubleValue(for: energyUnit) {
                        self.activeEnergy = value
                    }
                }
            }
        }
    }

    public func workoutBuilderDidCollectEvent(_ workoutBuilder: HKLiveWorkoutBuilder) {}

    // MARK: - HKWorkoutSessionDelegate
    public func workoutSession(_ workoutSession: HKWorkoutSession, didChangeTo toState: HKWorkoutSessionState, from fromState: HKWorkoutSessionState, date: Date) {}
    public func workoutSession(_ workoutSession: HKWorkoutSession, didFailWithError error: Error) {}
}

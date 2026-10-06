import SwiftUI
import WatchKit

@main
struct PadelBloxWatchApp: App {
    @StateObject private var scoreManager = MatchScoreManager()
    @StateObject private var motionClassifier = MotionClassifier()
    @StateObject private var workoutManager = WorkoutManager()
    @StateObject private var sessionManager = WatchSessionManager.shared

    @State private var selectedTab: Int = 0
    @State private var isMatchActive: Bool = false
    @State private var showSplash: Bool = true
    @State private var isRightHanded: Bool = true
    @State private var isGoldenPoint: Bool = true

    var body: some Scene {
        WindowGroup {
            ZStack {
                if showSplash {
                    SplashView {
                        withAnimation(.easeInOut(duration: 0.35)) {
                            showSplash = false
                        }
                    }
                    .transition(.opacity)
                } else if isMatchActive {
                    TabView(selection: $selectedTab) {
                        ScoreboardView(
                            scoreManager: scoreManager,
                            motionClassifier: motionClassifier,
                            workoutManager: workoutManager
                        )
                        .tag(0)

                        LiveStatsView(
                            motionClassifier: motionClassifier,
                            workoutManager: workoutManager
                        )
                        .tag(1)

                        SummaryView(
                            scoreManager: scoreManager,
                            motionClassifier: motionClassifier,
                            workoutManager: workoutManager,
                            onFinishAndSync: finishAndSyncMatch
                        )
                        .tag(2)
                    }
                    .tabViewStyle(PageTabViewStyle())
                    .transition(.opacity)
                } else {
                    HomeLauncherView(
                        scoreManager: scoreManager,
                        motionClassifier: motionClassifier,
                        sessionManager: sessionManager,
                        rightHanded: $isRightHanded,
                        goldenPoint: $isGoldenPoint,
                        onStartMatch: { match in
                            startMatch(with: match)
                        }
                    )
                    .transition(.opacity)
                }
            }
            .animation(.easeInOut(duration: 0.3), value: showSplash)
            .animation(.easeInOut(duration: 0.3), value: isMatchActive)
            .onAppear {
                setupSessionListeners()
            }
        }
    }

    private func startMatch(with match: ScheduledMatch?) {
        if let m = match {
            isGoldenPoint = m.puntoOro
            scoreManager.useGoldenPoint = m.puntoOro
            scoreManager.resetMatch(t1: m.pareja1, t2: m.pareja2, goldenPoint: m.puntoOro, sets: m.sets)
        } else {
            scoreManager.useGoldenPoint = isGoldenPoint
            scoreManager.resetMatch()
        }

        workoutManager.requestAuthorization { _ in
            workoutManager.startWorkout()
        }
        motionClassifier.startTracking(rightHanded: isRightHanded)
        isMatchActive = true
        selectedTab = 0
    }

    private func finishAndSyncMatch() {
        motionClassifier.stopTracking()
        workoutManager.stopWorkout {
            var summary: [String: Any] = [
                "duracion_segundos": Int(workoutManager.elapsedTime),
                "calorias_quemadas": workoutManager.activeEnergy,
                "fc_promedio": Int(workoutManager.avgHeartRate),
                "fc_maxima": Int(workoutManager.maxHeartRate),
                "total_golpes": motionClassifier.totalStrokes,
                "smash_count": motionClassifier.strokeCounts[.smash] ?? 0,
                "bandeja_count": motionClassifier.strokeCounts[.bandeja] ?? 0,
                "vibora_count": motionClassifier.strokeCounts[.vibora] ?? 0,
                "drive_count": motionClassifier.strokeCounts[.drive] ?? 0,
                "reves_count": motionClassifier.strokeCounts[.reves] ?? 0,
                "volea_count": motionClassifier.strokeCounts[.volea] ?? 0,
                "globo_count": motionClassifier.strokeCounts[.globo] ?? 0,
                "velocidad_max_kmh": motionClassifier.maxSpeedKmh,
                "velocidad_media_kmh": motionClassifier.avgSpeedKmh,
                "marcador_final_t1": "\(scoreManager.state.gamesT1)",
                "marcador_final_t2": "\(scoreManager.state.gamesT2)",
                "equipo_ganador": scoreManager.state.matchWinner ?? 0
            ]

            if let activeMatch = sessionManager.selectedMatch {
                if let rId = activeMatch.reservaId { summary["reserva_id"] = rId }
                if let lId = activeMatch.ligaPartidoId { summary["liga_partido_id"] = lId }
                summary["cancha_nombre"] = activeMatch.canchaNombre
                summary["club_nombre"] = activeMatch.clubNombre
            }

            sessionManager.sendWorkoutFinished(summary: summary)
            isMatchActive = false
            selectedTab = 0
        }
    }

    private func setupSessionListeners() {
        sessionManager.onStartMatchReceived = { payload in
            let p1 = payload["pareja1"] as? String ?? "Pareja 1"
            let p2 = payload["pareja2"] as? String ?? "Pareja 2"
            let gp = payload["punto_oro"] as? Bool ?? true
            let sets = payload["sets"] as? Int ?? 3
            let mano = payload["mano_reloj"] as? String ?? "derecha"
            let rId = payload["reserva_id"] as? Int
            let lId = payload["liga_partido_id"] as? Int
            let club = payload["club_nombre"] as? String ?? "Club PadelBlox"
            let cancha = payload["cancha_nombre"] as? String ?? "Cancha 1"

            if rId != nil || lId != nil {
                sessionManager.selectedMatch = ScheduledMatch(
                    id: "remote_\(rId ?? lId ?? 0)",
                    reservaId: rId,
                    ligaPartidoId: lId,
                    tipoLabel: "Sincronizado desde iPhone",
                    clubNombre: club,
                    canchaNombre: cancha,
                    canchaTipo: "Pádel",
                    horarioTexto: "En vivo",
                    pareja1: p1,
                    pareja2: p2,
                    puntoOro: gp,
                    sets: sets,
                    esHoy: true
                )
            }

            isGoldenPoint = gp
            isRightHanded = (mano == "derecha")
            scoreManager.resetMatch(t1: p1, t2: p2, goldenPoint: gp, sets: sets)
            workoutManager.startWorkout()
            motionClassifier.startTracking(rightHanded: isRightHanded)
            showSplash = false
            isMatchActive = true
            selectedTab = 0
        }

        sessionManager.onStopMatchReceived = {
            finishAndSyncMatch()
        }
    }
}

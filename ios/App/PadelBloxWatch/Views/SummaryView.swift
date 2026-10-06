import SwiftUI
import WatchKit

struct SummaryView: View {
    @ObservedObject var scoreManager: MatchScoreManager
    @ObservedObject var motionClassifier: MotionClassifier
    @ObservedObject var workoutManager: WorkoutManager
    var onFinishAndSync: () -> Void

    var body: some View {
        ScrollView {
            VStack(spacing: 8) {
                // Ganador del Partido
                if let winner = scoreManager.state.matchWinner {
                    HStack(spacing: 4) {
                        Image(systemName: "trophy.fill")
                            .font(.system(size: 11))
                            .foregroundColor(PadelBloxTheme.goldenAmber)
                        Text("Ganador: \(winner == 1 ? scoreManager.team1Name : scoreManager.team2Name)")
                            .font(.system(size: 11.5, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.goldenAmber)
                    }
                    .padding(.vertical, 3)
                }

                // Resumen Biométrico (Card Slate 800)
                HStack {
                    VStack(spacing: 1) {
                        Text("Tiempo")
                            .font(.system(size: 8.5, weight: .bold, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                        Text(formatTime(workoutManager.elapsedTime))
                            .font(.system(size: 12, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textPrimary)
                    }
                    Spacer()
                    VStack(spacing: 1) {
                        Text("FC Media")
                            .font(.system(size: 8.5, weight: .bold, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                        Text("\(Int(workoutManager.avgHeartRate)) bpm")
                            .font(.system(size: 12, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.roseRed)
                    }
                    Spacer()
                    VStack(spacing: 1) {
                        Text("Calorías")
                            .font(.system(size: 8.5, weight: .bold, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                        Text("\(Int(workoutManager.activeEnergy))")
                            .font(.system(size: 12, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.sunsetOrange)
                    }
                }
                .padding(8)
                .background(PadelBloxTheme.bgCard)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(PadelBloxTheme.borderSubtle, lineWidth: 1)
                )
                .cornerRadius(12)

                // Resumen de Golpes y Velocidad
                VStack(spacing: 4) {
                    HStack {
                        Text("Total Golpes:")
                            .font(.system(size: 10.5, weight: .medium, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                        Spacer()
                        Text("\(motionClassifier.totalStrokes)")
                            .font(.system(size: 11, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textPrimary)
                    }
                    HStack {
                        Text("Récord Smash:")
                            .font(.system(size: 10.5, weight: .medium, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                        Spacer()
                        Text("\(Int(motionClassifier.maxSpeedKmh)) km/h")
                            .font(.system(size: 11, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.neonVolt)
                    }
                }
                .padding(8)
                .background(PadelBloxTheme.bgCard)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(PadelBloxTheme.borderSubtle, lineWidth: 1)
                )
                .cornerRadius(12)

                // Botón Guardar y Sincronizar (Volt Neon Gradient)
                Button(action: {
                    WKInterfaceDevice.current().play(.click)
                    onFinishAndSync()
                }) {
                    HStack(spacing: 4) {
                        Image(systemName: "arrow.triangle.2.circlepath")
                            .font(.system(size: 12, weight: .heavy))
                        Text("Guardar y Sincronizar")
                            .font(.system(size: 12, weight: .heavy, design: .rounded))
                    }
                    .foregroundColor(.black)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 10)
                    .background(PadelBloxTheme.neonGradient)
                    .cornerRadius(12)
                    .shadow(color: PadelBloxTheme.neonVolt.opacity(0.3), radius: 6, x: 0, y: 2)
                }
                .buttonStyle(PlainButtonStyle())
            }
            .padding(.horizontal, 4)
        }
        .background(PadelBloxTheme.bgDark.ignoresSafeArea())
    }

    private func formatTime(_ seconds: TimeInterval) -> String {
        let mins = Int(seconds) / 60
        let secs = Int(seconds) % 60
        return String(format: "%02d:%02d", mins, secs)
    }
}

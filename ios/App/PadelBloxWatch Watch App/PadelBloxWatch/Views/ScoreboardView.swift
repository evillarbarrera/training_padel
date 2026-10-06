import SwiftUI
import WatchKit

struct ScoreboardView: View {
    @ObservedObject var scoreManager: MatchScoreManager
    @ObservedObject var motionClassifier: MotionClassifier
    @ObservedObject var workoutManager: WorkoutManager
    @State private var crownAccumulator: Double = 0

    var body: some View {
        VStack(spacing: 4) {
            // Header: Sets, Games y Alerta de Punto de Oro / Tie-Break
            HStack {
                if let alert = scoreManager.activeAlertMessage {
                    Text(alert)
                        .font(.system(size: 9, weight: .black, design: .rounded))
                        .foregroundColor(PadelBloxTheme.neonVolt)
                        .padding(.horizontal, 6)
                        .padding(.vertical, 2)
                        .background(PadelBloxTheme.neonVolt.opacity(0.18))
                        .cornerRadius(5)
                        .transition(.scale.combined(with: .opacity))
                } else if scoreManager.state.isGoldenPoint {
                    HStack(spacing: 2) {
                        Image(systemName: "star.fill")
                            .font(.system(size: 8))
                        Text("PUNTO DE ORO")
                            .font(.system(size: 9, weight: .black, design: .rounded))
                    }
                    .foregroundColor(PadelBloxTheme.goldenAmber)
                    .padding(.horizontal, 5)
                    .padding(.vertical, 2)
                    .background(PadelBloxTheme.goldenAmber.opacity(0.18))
                    .cornerRadius(5)
                } else if scoreManager.state.isTieBreak {
                    HStack(spacing: 2) {
                        Image(systemName: "flame.fill")
                            .font(.system(size: 8))
                        Text("TIE-BREAK")
                            .font(.system(size: 9, weight: .black, design: .rounded))
                    }
                    .foregroundColor(PadelBloxTheme.sunsetOrange)
                    .padding(.horizontal, 5)
                    .padding(.vertical, 2)
                    .background(PadelBloxTheme.sunsetOrange.opacity(0.18))
                    .cornerRadius(5)
                } else {
                    Text("SET \(scoreManager.state.currentSet + 1)")
                        .font(.system(size: 10, weight: .black, design: .rounded))
                        .foregroundColor(PadelBloxTheme.textSecondary)
                }

                Spacer()

                // Toggle de Voz / Audio
                Button(action: {
                    scoreManager.voiceAnnouncementsEnabled.toggle()
                    WKInterfaceDevice.current().play(.click)
                }) {
                    Image(systemName: scoreManager.voiceAnnouncementsEnabled ? "speaker.wave.2.fill" : "speaker.slash.fill")
                        .font(.system(size: 8.5))
                        .foregroundColor(scoreManager.voiceAnnouncementsEnabled ? PadelBloxTheme.neonVolt : PadelBloxTheme.textMuted)
                }
                .buttonStyle(PlainButtonStyle())
                .padding(.trailing, 2)

                // Indicador de Saque con Volt Neon
                HStack(spacing: 3) {
                    Image(systemName: "tennisball.fill")
                        .font(.system(size: 8))
                        .foregroundColor(PadelBloxTheme.neonVolt)
                    Text("T\(scoreManager.state.servingTeam) (\(scoreManager.state.serveSide.prefix(3)))")
                        .font(.system(size: 9, weight: .heavy, design: .rounded))
                        .foregroundColor(PadelBloxTheme.neonVolt)
                }
                .padding(.horizontal, 5)
                .padding(.vertical, 2)
                .background(PadelBloxTheme.neonVolt.opacity(0.12))
                .cornerRadius(5)
            }
            .padding(.horizontal, 4)

            // Marcador Táctil Principal (+1 al tocar el bloque)
            HStack(spacing: 6) {
                // Bloque Equipo 1 (Cyber Cyan)
                Button(action: {
                    scoreManager.addPoint(toTeam: 1)
                    syncScore()
                }) {
                    VStack(spacing: 1) {
                        Text(scoreManager.team1Name.prefix(8))
                            .font(.system(size: 9.5, weight: .bold, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                            .lineLimit(1)

                        Text(scoreManager.displayPointsT1)
                            .font(.system(size: 32, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.cyberCyan)

                        Text("G: \(scoreManager.state.gamesT1[scoreManager.state.currentSet])")
                            .font(.system(size: 10, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textPrimary)
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                    .background(PadelBloxTheme.team1CardFill)
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .stroke(
                                scoreManager.state.servingTeam == 1 ? PadelBloxTheme.cyberCyan : PadelBloxTheme.borderSubtle,
                                lineWidth: scoreManager.state.servingTeam == 1 ? 2 : 1
                            )
                    )
                    .cornerRadius(12)
                }
                .buttonStyle(PlainButtonStyle())

                // Bloque Equipo 2 (Sunset Orange)
                Button(action: {
                    scoreManager.addPoint(toTeam: 2)
                    syncScore()
                }) {
                    VStack(spacing: 1) {
                        Text(scoreManager.team2Name.prefix(8))
                            .font(.system(size: 9.5, weight: .bold, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                            .lineLimit(1)

                        Text(scoreManager.displayPointsT2)
                            .font(.system(size: 32, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.sunsetOrange)

                        Text("G: \(scoreManager.state.gamesT2[scoreManager.state.currentSet])")
                            .font(.system(size: 10, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textPrimary)
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                    .background(PadelBloxTheme.team2CardFill)
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .stroke(
                                scoreManager.state.servingTeam == 2 ? PadelBloxTheme.sunsetOrange : PadelBloxTheme.borderSubtle,
                                lineWidth: scoreManager.state.servingTeam == 2 ? 2 : 1
                            )
                    )
                    .cornerRadius(12)
                }
                .buttonStyle(PlainButtonStyle())
            }
            .frame(height: 78)

            // Mini barra inferior: Deshacer, BPM y Golpe detectado
            HStack {
                Button(action: {
                    scoreManager.undoLastPoint()
                    syncScore()
                }) {
                    Image(systemName: "arrow.uturn.backward.circle.fill")
                        .font(.system(size: 15))
                        .foregroundColor(PadelBloxTheme.textSecondary)
                }
                .buttonStyle(PlainButtonStyle())

                Spacer()

                // Ritmo cardíaco
                HStack(spacing: 3) {
                    Image(systemName: "heart.fill")
                        .font(.system(size: 9))
                        .foregroundColor(PadelBloxTheme.roseRed)
                    Text("\(Int(workoutManager.heartRate))")
                        .font(.system(size: 10, weight: .heavy, design: .rounded))
                        .foregroundColor(PadelBloxTheme.textPrimary)
                }
                .padding(.horizontal, 6)
                .padding(.vertical, 2)
                .background(PadelBloxTheme.bgCard)
                .cornerRadius(6)

                Spacer()

                // Último golpe clasificado con Volt Neon
                if let last = motionClassifier.lastStroke {
                    HStack(spacing: 3) {
                        Image(systemName: last.stroke.icon)
                            .font(.system(size: 9))
                            .foregroundColor(PadelBloxTheme.neonVolt)
                        Text("\(last.stroke.rawValue.prefix(3)) \(Int(last.speedKmh))k")
                            .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.neonVolt)
                    }
                    .padding(.horizontal, 6)
                    .padding(.vertical, 2)
                    .background(PadelBloxTheme.bgCard)
                    .cornerRadius(6)
                } else {
                    Text("\(motionClassifier.totalStrokes) g")
                        .font(.system(size: 9.5, weight: .bold, design: .rounded))
                        .foregroundColor(PadelBloxTheme.textMuted)
                        .padding(.horizontal, 6)
                        .padding(.vertical, 2)
                        .background(PadelBloxTheme.bgCard)
                        .cornerRadius(6)
                }
            }
            .padding(.horizontal, 4)
            .padding(.top, 1)
        }
        .padding(4)
        .focusable()
        .digitalCrownRotation($crownAccumulator, from: -100.0, through: 100.0, by: 1.0, sensitivity: .low, isContinuous: true)
        .onChange(of: crownAccumulator) { newVal in
            if newVal < -3.0 {
                // Girar corona hacia atrás -> Deshacer
                scoreManager.undoLastPoint()
                syncScore()
                crownAccumulator = 0
            }
        }
        .background(PadelBloxTheme.bgDark.ignoresSafeArea())
    }

    private func syncScore() {
        let setIdx = scoreManager.state.currentSet
        let g1 = scoreManager.state.gamesT1[setIdx]
        let g2 = scoreManager.state.gamesT2[setIdx]

        var s1 = 0
        var s2 = 0
        for i in 0...setIdx {
            if scoreManager.state.gamesT1[i] > scoreManager.state.gamesT2[i] { s1 += 1 }
            else if scoreManager.state.gamesT2[i] > scoreManager.state.gamesT1[i] { s2 += 1 }
        }

        WatchSessionManager.shared.sendScoreChanged(
            t1: scoreManager.displayPointsT1,
            t2: scoreManager.displayPointsT2,
            g1: g1,
            g2: g2,
            s1: s1,
            s2: s2
        )
    }
}

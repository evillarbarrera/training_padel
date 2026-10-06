import SwiftUI
import WatchKit

struct HomeLauncherView: View {
    @ObservedObject var scoreManager: MatchScoreManager
    @ObservedObject var motionClassifier: MotionClassifier
    @ObservedObject var sessionManager: WatchSessionManager

    @Binding var rightHanded: Bool
    @Binding var goldenPoint: Bool
    var onStartMatch: (ScheduledMatch?) -> Void

    @State private var showingMatchPicker: Bool = false

    var body: some View {
        ScrollView {
            VStack(spacing: 7) {
                // Header con Marca y Estado de Sincronización
                HStack {
                    HStack(spacing: 0) {
                        Text("Padel")
                            .font(.system(size: 13, weight: .black, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textPrimary)
                        Text("Blox")
                            .font(.system(size: 13, weight: .black, design: .rounded))
                            .foregroundColor(PadelBloxTheme.neonVolt)
                    }

                    Spacer()

                    // Indicador de Conexión en vivo con el iPhone
                    HStack(spacing: 4) {
                        Circle()
                            .fill(sessionManager.isReachable ? PadelBloxTheme.emeraldGreen : PadelBloxTheme.textMuted)
                            .frame(width: 6, height: 6)
                        Text(sessionManager.isReachable ? "Sync" : "Solo")
                            .font(.system(size: 8.5, weight: .bold, design: .rounded))
                            .foregroundColor(sessionManager.isReachable ? PadelBloxTheme.emeraldGreen : PadelBloxTheme.textSecondary)
                    }
                    .padding(.horizontal, 6)
                    .padding(.vertical, 2.5)
                    .background(PadelBloxTheme.bgCard)
                    .overlay(
                        RoundedRectangle(cornerRadius: 8)
                            .stroke(PadelBloxTheme.borderSubtle, lineWidth: 1)
                    )
                    .cornerRadius(8)
                }
                .padding(.horizontal, 4)

                // TARJETA DE CANCHA Y PARTIDO RESERVADO
                if let match = sessionManager.selectedMatch {
                    VStack(alignment: .leading, spacing: 3) {
                        HStack {
                            Text(match.tipoLabel.uppercased())
                                .font(.system(size: 8, weight: .black, design: .rounded))
                                .foregroundColor(PadelBloxTheme.neonVolt)
                                .padding(.horizontal, 4)
                                .padding(.vertical, 1)
                                .background(PadelBloxTheme.neonVolt.opacity(0.18))
                                .cornerRadius(4)

                            Spacer()

                            Text(match.horarioTexto)
                                .font(.system(size: 8.5, weight: .bold, design: .rounded))
                                .foregroundColor(PadelBloxTheme.textSecondary)
                        }

                        // Cancha y Club
                        HStack(spacing: 3) {
                            Image(systemName: "sportscourt.fill")
                                .foregroundColor(PadelBloxTheme.cyberCyan)
                                .font(.system(size: 10))
                            Text(match.canchaNombre)
                                .font(.system(size: 11.5, weight: .heavy, design: .rounded))
                                .foregroundColor(PadelBloxTheme.cyberCyan)
                                .lineLimit(1)
                        }

                        Text(match.clubNombre)
                            .font(.system(size: 9, weight: .medium, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                            .lineLimit(1)

                        // Parejas
                        HStack(spacing: 3) {
                            Image(systemName: "person.2.fill")
                                .foregroundColor(PadelBloxTheme.textMuted)
                                .font(.system(size: 8))
                            Text("\(match.pareja1) vs \(match.pareja2)")
                                .font(.system(size: 8.5, weight: .semibold, design: .rounded))
                                .foregroundColor(PadelBloxTheme.textPrimary)
                                .lineLimit(1)
                        }
                        .padding(.top, 1)
                    }
                    .padding(7)
                    .background(PadelBloxTheme.bgCard)
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .stroke(PadelBloxTheme.cyberCyan.opacity(0.4), lineWidth: 1)
                    )
                    .cornerRadius(10)
                }

                // Botón Principal de Acción (Jugar / Iniciar Partido)
                Button(action: {
                    WKInterfaceDevice.current().play(.click)
                    onStartMatch(sessionManager.selectedMatch)
                }) {
                    HStack(spacing: 4) {
                        Image(systemName: "play.fill")
                            .font(.system(size: 12))
                        Text(sessionManager.selectedMatch != nil ? "Jugar este Partido" : "Iniciar Partido")
                            .font(.system(size: 12.5, weight: .heavy, design: .rounded))
                    }
                    .foregroundColor(.black)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 9)
                    .background(PadelBloxTheme.neonGradient)
                    .cornerRadius(11)
                    .shadow(color: PadelBloxTheme.neonVolt.opacity(0.3), radius: 5, x: 0, y: 2)
                }
                .buttonStyle(PlainButtonStyle())
                .padding(.top, 1)

                // Botón Cambiar Cancha / Partido
                Button(action: {
                    WKInterfaceDevice.current().play(.click)
                    showingMatchPicker = true
                }) {
                    HStack(spacing: 4) {
                        Image(systemName: "arrow.triangle.2.circlepath")
                            .font(.system(size: 9.5))
                            .foregroundColor(PadelBloxTheme.cyberCyan)
                        Text(sessionManager.selectedMatch != nil ? "Cambiar Cancha / Partido" : "Seleccionar Cancha")
                            .font(.system(size: 10, weight: .bold, design: .rounded))
                            .foregroundColor(PadelBloxTheme.cyberCyan)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 5)
                    .background(PadelBloxTheme.cyberCyan.opacity(0.12))
                    .cornerRadius(8)
                }
                .buttonStyle(PlainButtonStyle())

                // Ajustes Rápidos en Cancha
                VStack(spacing: 5) {
                    // Mano de la Pala
                    Button(action: {
                        rightHanded.toggle()
                        WKInterfaceDevice.current().play(.click)
                    }) {
                        HStack {
                            Image(systemName: "hand.raised.fill")
                                .foregroundColor(PadelBloxTheme.neonVolt)
                                .font(.system(size: 10))
                            Text("Mano pala")
                                .font(.system(size: 10, weight: .medium, design: .rounded))
                                .foregroundColor(PadelBloxTheme.textSecondary)
                            Spacer()
                            Text(rightHanded ? "Diestro" : "Zurdo")
                                .font(.system(size: 10, weight: .heavy, design: .rounded))
                                .foregroundColor(PadelBloxTheme.neonVolt)
                        }
                        .padding(7)
                        .background(PadelBloxTheme.bgCard)
                        .overlay(
                            RoundedRectangle(cornerRadius: 9)
                                .stroke(PadelBloxTheme.borderSubtle, lineWidth: 1)
                        )
                        .cornerRadius(9)
                    }
                    .buttonStyle(PlainButtonStyle())

                    // Punto de Oro
                    Button(action: {
                        goldenPoint.toggle()
                        scoreManager.useGoldenPoint = goldenPoint
                        WKInterfaceDevice.current().play(.click)
                    }) {
                        HStack {
                            Image(systemName: "star.fill")
                                .foregroundColor(PadelBloxTheme.goldenAmber)
                                .font(.system(size: 10))
                            Text("Punto de Oro")
                                .font(.system(size: 10, weight: .medium, design: .rounded))
                                .foregroundColor(PadelBloxTheme.textSecondary)
                            Spacer()
                            Text(goldenPoint ? "SÍ" : "NO")
                                .font(.system(size: 10, weight: .heavy, design: .rounded))
                                .foregroundColor(goldenPoint ? PadelBloxTheme.goldenAmber : PadelBloxTheme.textMuted)
                        }
                        .padding(7)
                        .background(PadelBloxTheme.bgCard)
                        .overlay(
                            RoundedRectangle(cornerRadius: 9)
                                .stroke(PadelBloxTheme.borderSubtle, lineWidth: 1)
                        )
                        .cornerRadius(9)
                    }
                    .buttonStyle(PlainButtonStyle())
                }

                // Micro Banner Récord Personal
                if motionClassifier.maxSpeedKmh > 0 {
                    HStack(spacing: 4) {
                        Image(systemName: "bolt.fill")
                            .font(.system(size: 9))
                            .foregroundColor(PadelBloxTheme.goldenAmber)
                        Text("Récord: \(Int(motionClassifier.maxSpeedKmh)) km/h")
                            .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textPrimary)
                        Spacer()
                    }
                    .padding(.horizontal, 6)
                    .padding(.top, 1)
                }
            }
            .padding(.horizontal, 4)
        }
        .background(PadelBloxTheme.bgDark.ignoresSafeArea())
        .sheet(isPresented: $showingMatchPicker) {
            MatchPickerView(
                sessionManager: sessionManager,
                selectedMatch: $sessionManager.selectedMatch,
                onMatchSelected: { match in
                    if let m = match {
                        goldenPoint = m.puntoOro
                        scoreManager.useGoldenPoint = m.puntoOro
                    }
                }
            )
        }
    }
}

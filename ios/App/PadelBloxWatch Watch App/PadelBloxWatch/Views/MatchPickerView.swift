import SwiftUI
import WatchKit

struct MatchPickerView: View {
    @ObservedObject var sessionManager: WatchSessionManager
    @Binding var selectedMatch: ScheduledMatch?
    @Environment(\.presentationMode) var presentationMode

    var onMatchSelected: (ScheduledMatch?) -> Void

    var body: some View {
        ScrollView {
            VStack(spacing: 8) {
                // Header
                HStack {
                    Image(systemName: "calendar.badge.clock")
                        .foregroundColor(PadelBloxTheme.neonVolt)
                        .font(.system(size: 12))
                    Text("Selecciona tu Cancha")
                        .font(.system(size: 11.5, weight: .heavy, design: .rounded))
                        .foregroundColor(PadelBloxTheme.textPrimary)
                    Spacer()
                }
                .padding(.horizontal, 4)
                .padding(.top, 2)

                // Lista de Partidos Programados
                let matches = sessionManager.scheduledMatches.isEmpty ? [ScheduledMatch.sampleDefault] : sessionManager.scheduledMatches

                ForEach(matches) { match in
                    Button(action: {
                        WKInterfaceDevice.current().play(.click)
                        selectedMatch = match
                        onMatchSelected(match)
                        presentationMode.wrappedValue.dismiss()
                    }) {
                        VStack(alignment: .leading, spacing: 3) {
                            HStack {
                                Text(match.tipoLabel.uppercased())
                                    .font(.system(size: 8, weight: .black, design: .rounded))
                                    .foregroundColor(PadelBloxTheme.neonVolt)
                                    .padding(.horizontal, 4)
                                    .padding(.vertical, 1)
                                    .background(PadelBloxTheme.neonVolt.opacity(0.15))
                                    .cornerRadius(4)

                                Spacer()

                                Text(match.horarioTexto)
                                    .font(.system(size: 8.5, weight: .bold, design: .rounded))
                                    .foregroundColor(PadelBloxTheme.textSecondary)
                            }

                            Text(match.canchaNombre)
                                .font(.system(size: 12, weight: .heavy, design: .rounded))
                                .foregroundColor(PadelBloxTheme.cyberCyan)

                            Text(match.clubNombre)
                                .font(.system(size: 9.5, weight: .medium, design: .rounded))
                                .foregroundColor(PadelBloxTheme.textSecondary)

                            HStack(spacing: 3) {
                                Image(systemName: "person.2.fill")
                                    .font(.system(size: 8))
                                    .foregroundColor(PadelBloxTheme.textMuted)
                                Text("\(match.pareja1) vs \(match.pareja2)")
                                    .font(.system(size: 8.5, weight: .semibold, design: .rounded))
                                    .foregroundColor(PadelBloxTheme.textPrimary)
                                    .lineLimit(1)
                            }
                            .padding(.top, 1)
                        }
                        .padding(8)
                        .background(
                            (selectedMatch?.id == match.id) ?
                            PadelBloxTheme.team1CardFill :
                            LinearGradient(colors: [PadelBloxTheme.bgCard, PadelBloxTheme.bgCard], startPoint: .top, endPoint: .bottom)
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 10)
                                .stroke(
                                    (selectedMatch?.id == match.id) ? PadelBloxTheme.neonVolt : PadelBloxTheme.borderSubtle,
                                    lineWidth: (selectedMatch?.id == match.id) ? 1.5 : 1
                                )
                        )
                        .cornerRadius(10)
                    }
                    .buttonStyle(PlainButtonStyle())
                }

                // Opción de Partido Rápido / Libre
                Button(action: {
                    WKInterfaceDevice.current().play(.click)
                    selectedMatch = nil
                    onMatchSelected(nil)
                    presentationMode.wrappedValue.dismiss()
                }) {
                    HStack(spacing: 6) {
                        Image(systemName: "bolt.horizontal.fill")
                            .foregroundColor(PadelBloxTheme.goldenAmber)
                            .font(.system(size: 11))
                        VStack(alignment: .leading, spacing: 1) {
                            Text("Partido Libre / Amistoso")
                                .font(.system(size: 11, weight: .heavy, design: .rounded))
                                .foregroundColor(PadelBloxTheme.textPrimary)
                            Text("Sin reserva ni liga vinculada")
                                .font(.system(size: 8, weight: .medium))
                                .foregroundColor(PadelBloxTheme.textMuted)
                        }
                        Spacer()
                    }
                    .padding(8)
                    .background(PadelBloxTheme.bgCard)
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .stroke(PadelBloxTheme.borderSubtle, lineWidth: 1)
                    )
                    .cornerRadius(10)
                }
                .buttonStyle(PlainButtonStyle())
            }
            .padding(.horizontal, 4)
        }
        .background(PadelBloxTheme.bgDark.ignoresSafeArea())
    }
}

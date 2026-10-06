import SwiftUI

struct LiveStatsView: View {
    @ObservedObject var motionClassifier: MotionClassifier
    @ObservedObject var workoutManager: WorkoutManager

    var body: some View {
        ScrollView {
            VStack(spacing: 8) {
                // Tarjeta Velocidad Máxima y Calorías
                HStack {
                    VStack(alignment: .leading, spacing: 1) {
                        Text("VEL. MÁX")
                            .font(.system(size: 8.5, weight: .bold, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                        Text("\(Int(motionClassifier.maxSpeedKmh)) km/h")
                            .font(.system(size: 16, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.neonVolt)
                    }
                    Spacer()
                    VStack(alignment: .trailing, spacing: 1) {
                        Text("CALORÍAS")
                            .font(.system(size: 8.5, weight: .bold, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                        Text("\(Int(workoutManager.activeEnergy)) kcal")
                            .font(.system(size: 16, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.roseRed)
                    }
                }
                .padding(8)
                .background(PadelBloxTheme.bgCard)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(PadelBloxTheme.borderSubtle, lineWidth: 1)
                )
                .cornerRadius(12)

                // Desglose de Golpes
                VStack(spacing: 5) {
                    HStack {
                        Text("DISTRIBUCIÓN DE GOLPES")
                            .font(.system(size: 8.5, weight: .black, design: .rounded))
                            .foregroundColor(PadelBloxTheme.textSecondary)
                        Spacer()
                        Text("\(motionClassifier.totalStrokes)")
                            .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                            .foregroundColor(PadelBloxTheme.neonVolt)
                    }

                    ForEach(PadelStroke.allCases) { stroke in
                        let count = motionClassifier.strokeCounts[stroke] ?? 0
                        HStack {
                            Image(systemName: stroke.icon)
                                .font(.system(size: 10))
                                .foregroundColor(count > 0 ? PadelBloxTheme.neonVolt : PadelBloxTheme.textMuted)
                                .frame(width: 16)

                            Text(stroke.rawValue)
                                .font(.system(size: 10.5, weight: .medium, design: .rounded))
                                .foregroundColor(PadelBloxTheme.textPrimary)

                            Spacer()

                            Text("\(count)")
                                .font(.system(size: 11, weight: .heavy, design: .rounded))
                                .foregroundColor(count > 0 ? PadelBloxTheme.neonVolt : PadelBloxTheme.textMuted)
                        }
                        .padding(.vertical, 1)
                    }
                }
                .padding(8)
                .background(PadelBloxTheme.bgCard)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(PadelBloxTheme.borderSubtle, lineWidth: 1)
                )
                .cornerRadius(12)
            }
            .padding(.horizontal, 4)
        }
        .background(PadelBloxTheme.bgDark.ignoresSafeArea())
    }
}

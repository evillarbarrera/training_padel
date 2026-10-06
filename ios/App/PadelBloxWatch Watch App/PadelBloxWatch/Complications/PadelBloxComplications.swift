import WidgetKit
import SwiftUI

// MARK: - Entry Model for PadelBlox Complications
public struct PadelComplicationEntry: TimelineEntry {
    public let date: Date
    public let clubNombre: String
    public let canchaNombre: String
    public let horario: String
    public let esHoy: Bool
    public let esPartidoActivo: Bool
    public let marcador: String
    public let smashMax: Int
    public let totalGolpes: Int
}

// MARK: - Timeline Provider for Complications
public struct PadelComplicationProvider: TimelineProvider {
    public typealias Entry = PadelComplicationEntry

    public func placeholder(in context: Context) -> PadelComplicationEntry {
        PadelComplicationEntry(
            date: Date(),
            clubNombre: "Club Padel Center",
            canchaNombre: "C#2 Cristal",
            horario: "19:30",
            esHoy: true,
            esPartidoActivo: false,
            marcador: "6-4 3-2",
            smashMax: 124,
            totalGolpes: 148
        )
    }

    public func getSnapshot(in context: Context, completion: @escaping (PadelComplicationEntry) -> Void) {
        let entry = getCurrentEntry()
        completion(entry)
    }

    public func getTimeline(in context: Context, completion: @escaping (Timeline<PadelComplicationEntry>) -> Void) {
        let currentEntry = getCurrentEntry()
        // Refresh every 15 minutes or on demand
        let nextUpdate = Calendar.current.date(byAdding: .minute, value: 15, to: Date()) ?? Date().addingTimeInterval(900)
        let timeline = Timeline(entries: [currentEntry], policy: .after(nextUpdate))
        completion(timeline)
    }

    private func getCurrentEntry() -> PadelComplicationEntry {
        // Read from shared UserDefaults if available, or fallback to default
        let defaults = UserDefaults.standard
        let club = defaults.string(forKey: "padelblox_complication_club") ?? "Club PadelBlox"
        let cancha = defaults.string(forKey: "padelblox_complication_cancha") ?? "Cancha 2 Cristal"
        let horario = defaults.string(forKey: "padelblox_complication_horario") ?? "19:30"
        let activo = defaults.bool(forKey: "padelblox_match_active")
        let marcador = defaults.string(forKey: "padelblox_live_score") ?? "6-4 4-2"
        let smash = defaults.integer(forKey: "padelblox_max_smash") > 0 ? defaults.integer(forKey: "padelblox_max_smash") : 124
        let golpes = defaults.integer(forKey: "padelblox_total_strokes") > 0 ? defaults.integer(forKey: "padelblox_total_strokes") : 142

        return PadelComplicationEntry(
            date: Date(),
            clubNombre: club,
            canchaNombre: cancha,
            horario: horario,
            esHoy: true,
            esPartidoActivo: activo,
            marcador: marcador,
            smashMax: smash,
            totalGolpes: golpes
        )
    }
}

// MARK: - Complication Views for different watch face families
public struct PadelBloxComplicationView: View {
    @Environment(\.widgetFamily) var family
    public var entry: PadelComplicationEntry

    public init(entry: PadelComplicationEntry) {
        self.entry = entry
    }

    public var body: some View {
        switch family {
        case .accessoryCircular:
            circularView
        case .accessoryRectangular:
            rectangularView
        case .accessoryInline:
            inlineView
        case .accessoryCorner:
            cornerView
        default:
            circularView
        }
    }

    // MARK: - Accessory Circular (Dial Watch Faces)
    private var circularView: some View {
        ZStack {
            AccessoryWidgetBackground()
            VStack(spacing: 1) {
                Image(systemName: "tennisball.fill")
                    .font(.system(size: 13, weight: .bold))
                    .foregroundColor(PadelBloxTheme.neonVolt)
                Text(entry.horario)
                    .font(.system(size: 11, weight: .black, design: .rounded))
                    .foregroundColor(.white)
                    .minimumScaleFactor(0.8)
                Text(entry.canchaNombre.replacingOccurrences(of: "Cancha ", with: "C#"))
                    .font(.system(size: 8, weight: .bold))
                    .foregroundColor(PadelBloxTheme.cyberCyan)
                    .lineLimit(1)
            }
            .padding(2)
        }
    }

    // MARK: - Accessory Rectangular (Modular / Ultra Faces)
    private var rectangularView: some View {
        VStack(alignment: .leading, spacing: 2) {
            HStack(spacing: 4) {
                Image(systemName: "tennisball.fill")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundColor(PadelBloxTheme.neonVolt)
                Text("PADELBLOX")
                    .font(.system(size: 10, weight: .black, design: .rounded))
                    .foregroundColor(PadelBloxTheme.neonVolt)
                Spacer()
                Text(entry.horario)
                    .font(.system(size: 10, weight: .bold))
                    .foregroundColor(.white)
            }

            if entry.esPartidoActivo {
                HStack(spacing: 4) {
                    Text("EN VIVO:")
                        .font(.system(size: 11, weight: .black))
                        .foregroundColor(PadelBloxTheme.cyberCyan)
                    Text(entry.marcador)
                        .font(.system(size: 12, weight: .black, design: .rounded))
                        .foregroundColor(.white)
                }
                Text("⚡ Max \(entry.smashMax) km/h · \(entry.totalGolpes) golpes")
                    .font(.system(size: 9, weight: .medium))
                    .foregroundColor(.gray)
                    .lineLimit(1)
            } else {
                Text(entry.canchaNombre)
                    .font(.system(size: 12, weight: .bold))
                    .foregroundColor(.white)
                    .lineLimit(1)
                Text(entry.clubNombre)
                    .font(.system(size: 9, weight: .medium))
                    .foregroundColor(.gray)
                    .lineLimit(1)
            }
        }
        .padding(2)
    }

    // MARK: - Accessory Inline (Top strip of Infograph / Modular)
    private var inlineView: some View {
        HStack(spacing: 3) {
            Image(systemName: "tennisball.fill")
            Text("🎾 \(entry.horario) · \(entry.canchaNombre.replacingOccurrences(of: "Cancha ", with: "C#"))")
        }
    }

    // MARK: - Accessory Corner (Infograph Corners)
    private var cornerView: some View {
        VStack {
            Image(systemName: "tennisball.fill")
                .foregroundColor(PadelBloxTheme.neonVolt)
            Text(entry.horario)
                .font(.system(size: 10, weight: .bold, design: .rounded))
        }
        .widgetLabel {
            Text("\(entry.canchaNombre) · PadelBlox")
        }
    }
}

// MARK: - Complication Widget Definition
public struct PadelBloxComplicationWidget: Widget {
    public let kind: String = "PadelBloxComplicationWidget"

    public init() {}

    public var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: PadelComplicationProvider()) { entry in
            PadelBloxComplicationView(entry: entry)
        }
        .configurationDisplayName("PadelBlox")
        .description("Acceso rápido a tu próximo partido y estadísticas en vivo.")
        .supportedFamilies([
            .accessoryCircular,
            .accessoryRectangular,
            .accessoryInline,
            .accessoryCorner
        ])
    }
}

import Foundation

// MARK: - Modelo de Partido / Reserva Programada para Apple Watch
public struct ScheduledMatch: Identifiable, Codable, Hashable {
    public var id: String
    public var reservaId: Int?
    public var ligaPartidoId: Int?
    public var tipoLabel: String
    public var clubNombre: String
    public var canchaNombre: String
    public var canchaTipo: String
    public var horarioTexto: String
    public var pareja1: String
    public var pareja2: String
    public var puntoOro: Bool
    public var sets: Int
    public var esHoy: Bool

    public init(
        id: String,
        reservaId: Int? = nil,
        ligaPartidoId: Int? = nil,
        tipoLabel: String = "Cancha Reservada",
        clubNombre: String = "PadelBlox Club",
        canchaNombre: String = "Cancha 3 Panorámica",
        canchaTipo: String = "Cristal Pro",
        horarioTexto: String = "19:30 - 21:00",
        pareja1: String = "Mi Pareja",
        pareja2: String = "Pareja Rival",
        puntoOro: Bool = true,
        sets: Int = 3,
        esHoy: Bool = true
    ) {
        self.id = id
        self.reservaId = reservaId
        self.ligaPartidoId = ligaPartidoId
        self.tipoLabel = tipoLabel
        self.clubNombre = clubNombre
        self.canchaNombre = canchaNombre
        self.canchaTipo = canchaTipo
        self.horarioTexto = horarioTexto
        self.pareja1 = pareja1
        self.pareja2 = pareja2
        self.puntoOro = puntoOro
        self.sets = sets
        self.esHoy = esHoy
    }

    public static var sampleDefault: ScheduledMatch {
        ScheduledMatch(
            id: "res_sample_1",
            reservaId: 101,
            ligaPartidoId: nil,
            tipoLabel: "Cancha Reservada",
            clubNombre: "Club Padel Center",
            canchaNombre: "Cancha 2 Cristal",
            canchaTipo: "Panorámica",
            horarioTexto: "Hoy 19:30 - 21:00",
            pareja1: "Emmanuel Villar / Partner",
            pareja2: "Lucas / Diego",
            puntoOro: true,
            sets: 3,
            esHoy: true
        )
    }
}

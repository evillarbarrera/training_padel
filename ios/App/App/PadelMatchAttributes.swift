import Foundation
import ActivityKit

// MARK: - ActivityAttributes para Live Activity y Dynamic Island de PadelBlox
@available(iOS 16.1, *)
public struct PadelMatchAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        public var puntosT1: String
        public var puntosT2: String
        public var gamesT1: Int
        public var gamesT2: Int
        public var setsT1: Int
        public var setsT2: Int
        public var servingTeam: Int
        public var isGoldenPoint: Bool
        public var isBreakPoint: Bool
        public var maxSmashSpeed: Double

        public init(
            puntosT1: String = "0",
            puntosT2: String = "0",
            gamesT1: Int = 0,
            gamesT2: Int = 0,
            setsT1: Int = 0,
            setsT2: Int = 0,
            servingTeam: Int = 1,
            isGoldenPoint: Bool = false,
            isBreakPoint: Bool = false,
            maxSmashSpeed: Double = 0.0
        ) {
            self.puntosT1 = puntosT1
            self.puntosT2 = puntosT2
            self.gamesT1 = gamesT1
            self.gamesT2 = gamesT2
            self.setsT1 = setsT1
            self.setsT2 = setsT2
            self.servingTeam = servingTeam
            self.isGoldenPoint = isGoldenPoint
            self.isBreakPoint = isBreakPoint
            self.maxSmashSpeed = maxSmashSpeed
        }
    }

    public var matchId: String
    public var clubNombre: String
    public var canchaNombre: String
    public var pareja1: String
    public var pareja2: String

    public init(
        matchId: String,
        clubNombre: String = "Club PadelBlox",
        canchaNombre: String = "Cancha 1",
        pareja1: String = "Mi Pareja",
        pareja2: String = "Rivales"
    ) {
        self.matchId = matchId
        self.clubNombre = clubNombre
        self.canchaNombre = canchaNombre
        self.pareja1 = pareja1
        self.pareja2 = pareja2
    }
}

import Foundation
import Combine
import WatchKit

public struct ScoreState {
    public var pointsT1: Int = 0 // 0, 1, 2, 3 (0, 15, 30, 40)
    public var pointsT2: Int = 0
    public var gamesT1: [Int] = [0] // Games por set
    public var gamesT2: [Int] = [0]
    public var currentSet: Int = 0
    public var isGoldenPoint: Bool = false
    public var isTieBreak: Bool = false
    public var servingTeam: Int = 1 // 1 o 2
    public var serveSide: String = "Derecha" // "Derecha" o "Izquierda"
    public var matchWinner: Int? = nil
}

public class MatchScoreManager: ObservableObject {
    @Published public var state = ScoreState()
    @Published public var team1Name: String = "Pareja 1"
    @Published public var team2Name: String = "Pareja 2"
    @Published public var useGoldenPoint: Bool = true
    @Published public var totalSets: Int = 3
    @Published public var matchHistory: [ScoreState] = []

    public var displayPointsT1: String {
        if state.isTieBreak { return "\(state.pointsT1)" }
        switch state.pointsT1 {
        case 0: return "0"
        case 1: return "15"
        case 2: return "30"
        case 3: return "40"
        case 4: return useGoldenPoint ? "ORO" : "AD"
        default: return "40"
        }
    }

    public var displayPointsT2: String {
        if state.isTieBreak { return "\(state.pointsT2)" }
        switch state.pointsT2 {
        case 0: return "0"
        case 1: return "15"
        case 2: return "30"
        case 3: return "40"
        case 4: return useGoldenPoint ? "ORO" : "AD"
        default: return "40"
        }
    }

    public func resetMatch(t1: String = "Pareja 1", t2: String = "Pareja 2", goldenPoint: Bool = true, sets: Int = 3) {
        team1Name = t1
        team2Name = t2
        useGoldenPoint = goldenPoint
        totalSets = sets
        state = ScoreState()
        matchHistory.removeAll()
        updateServeSide()
    }

    public func addPoint(toTeam team: Int) {
        guard state.matchWinner == nil else { return }
        saveStateForUndo()

        if state.isTieBreak {
            handleTieBreakPoint(team: team)
        } else {
            handleStandardPoint(team: team)
        }

        updateServeSide()
    }

    public func undoLastPoint() {
        guard let prevState = matchHistory.popLast() else { return }
        state = prevState
        WKInterfaceDevice.current().play(.directionDown)
    }

    private func saveStateForUndo() {
        matchHistory.append(state)
        if matchHistory.count > 25 {
            matchHistory.removeFirst()
        }
    }

    private func handleStandardPoint(team: Int) {
        if team == 1 {
            if state.pointsT1 == 3 && state.pointsT2 < 3 {
                winGame(team: 1)
            } else if state.pointsT1 == 3 && state.pointsT2 == 3 {
                if useGoldenPoint {
                    winGame(team: 1) // Punto de Oro directo
                } else {
                    state.pointsT1 = 4 // Ventaja
                    WKInterfaceDevice.current().play(.click)
                }
            } else if state.pointsT1 == 4 {
                winGame(team: 1)
            } else if state.pointsT2 == 4 {
                state.pointsT2 = 3 // De vuelta a iguales
                WKInterfaceDevice.current().play(.click)
            } else {
                state.pointsT1 += 1
                WKInterfaceDevice.current().play(.click)
            }
        } else {
            if state.pointsT2 == 3 && state.pointsT1 < 3 {
                winGame(team: 2)
            } else if state.pointsT2 == 3 && state.pointsT1 == 3 {
                if useGoldenPoint {
                    winGame(team: 2) // Punto de Oro directo
                } else {
                    state.pointsT2 = 4 // Ventaja
                    WKInterfaceDevice.current().play(.click)
                }
            } else if state.pointsT2 == 4 {
                winGame(team: 2)
            } else if state.pointsT1 == 4 {
                state.pointsT1 = 3 // De vuelta a iguales
                WKInterfaceDevice.current().play(.click)
            } else {
                state.pointsT2 += 1
                WKInterfaceDevice.current().play(.click)
            }
        }

        state.isGoldenPoint = (useGoldenPoint && state.pointsT1 == 3 && state.pointsT2 == 3)
    }

    private func handleTieBreakPoint(team: Int) {
        if team == 1 {
            state.pointsT1 += 1
        } else {
            state.pointsT2 += 1
        }

        WKInterfaceDevice.current().play(.click)

        let totalPts = state.pointsT1 + state.pointsT2
        // Cambio de saque cada 2 puntos en tie-break
        if totalPts % 2 == 1 {
            state.servingTeam = (state.servingTeam == 1) ? 2 : 1
        }

        // Ganar Tie Break (al menos 7 puntos y diferencia de 2)
        let target = 7
        if (state.pointsT1 >= target && state.pointsT1 - state.pointsT2 >= 2) {
            winSet(team: 1)
        } else if (state.pointsT2 >= target && state.pointsT2 - state.pointsT1 >= 2) {
            winSet(team: 2)
        }
    }

    private func winGame(team: Int) {
        state.pointsT1 = 0
        state.pointsT2 = 0
        state.isGoldenPoint = false

        let setIdx = state.currentSet
        if team == 1 {
            state.gamesT1[setIdx] += 1
        } else {
            state.gamesT2[setIdx] += 1
        }

        WKInterfaceDevice.current().play(.success)

        // Cambiar turno de saque
        state.servingTeam = (state.servingTeam == 1) ? 2 : 1

        let g1 = state.gamesT1[setIdx]
        let g2 = state.gamesT2[setIdx]

        // Verificar si entra a Tie-Break (6-6)
        if g1 == 6 && g2 == 6 {
            state.isTieBreak = true
            return
        }

        // Verificar si se gana el set (6 games y dif >= 2, o 7-5)
        if (g1 >= 6 && g1 - g2 >= 2) || g1 == 7 {
            winSet(team: 1)
        } else if (g2 >= 6 && g2 - g1 >= 2) || g2 == 7 {
            winSet(team: 2)
        }
    }

    private func winSet(team: Int) {
        state.isTieBreak = false
        state.pointsT1 = 0
        state.pointsT2 = 0

        var setsWonT1 = 0
        var setsWonT2 = 0
        for i in 0...state.currentSet {
            let g1 = state.gamesT1[i]
            let g2 = state.gamesT2[i]
            if g1 > g2 { setsWonT1 += 1 }
            else if g2 > g1 { setsWonT2 += 1 }
        }

        let setsNeeded = (totalSets == 3) ? 2 : 1
        if setsWonT1 >= setsNeeded {
            state.matchWinner = 1
            WKInterfaceDevice.current().play(.success)
        } else if setsWonT2 >= setsNeeded {
            state.matchWinner = 2
            WKInterfaceDevice.current().play(.success)
        } else {
            // Avanzar al siguiente set
            state.currentSet += 1
            state.gamesT1.append(0)
            state.gamesT2.append(0)
            WKInterfaceDevice.current().play(.notification)
        }
    }

    private func updateServeSide() {
        let totalGamePoints = state.pointsT1 + state.pointsT2
        state.serveSide = (totalGamePoints % 2 == 0) ? "Derecha" : "Izquierda"
    }
}

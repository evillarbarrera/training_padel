import Foundation
import Capacitor
import WatchConnectivity
import ActivityKit

@objc(PadelBloxWatchPlugin)
public class PadelBloxWatchPlugin: CAPPlugin, WCSessionDelegate {

    private var session: WCSession?
    private var currentLiveActivity: Any? = nil

    public override func load() {
        super.load()
        if WCSession.isSupported() {
            session = WCSession.default
            session?.delegate = self
            session?.activate()
        }
    }

    @objc func isWatchConnected(_ call: CAPPluginCall) {
        guard let session = session, WCSession.isSupported() else {
            call.resolve([
                "supported": false,
                "isPaired": false,
                "isWatchAppInstalled": false,
                "isReachable": false
            ])
            return
        }

        call.resolve([
            "supported": true,
            "isPaired": session.isPaired,
            "isWatchAppInstalled": session.isWatchAppInstalled,
            "isReachable": session.isReachable
        ])
    }

    @objc func syncUpcomingMatches(_ call: CAPPluginCall) {
        guard let session = session, session.activationState == .activated else {
            call.reject("WatchConnectivity no está activo")
            return
        }

        let matches = call.getArray("proximos_partidos") ?? []
        let userName = call.getString("usuario_nombre") ?? "Jugador PadelBlox"

        let payload: [String: Any] = [
            "action": "SYNC_MATCHES",
            "usuario_nombre": userName,
            "proximos_partidos": matches,
            "timestamp": Date().timeIntervalSince1970
        ]

        if session.isReachable {
            session.sendMessage(payload, replyHandler: { reply in
                call.resolve(["success": true, "synced": true])
            }, errorHandler: { _ in
                try? session.updateApplicationContext(payload)
                call.resolve(["success": true, "contextUpdated": true])
            })
        } else {
            do {
                try session.updateApplicationContext(payload)
                call.resolve(["success": true, "contextUpdated": true])
            } catch {
                call.reject("Error al sincronizar partidos con Watch: \(error.localizedDescription)")
            }
        }
    }

    @objc func startMatchSession(_ call: CAPPluginCall) {
        guard let session = session, session.activationState == .activated else {
            call.reject("WatchConnectivity no está activo")
            return
        }

        let tipo = call.getString("tipo_actividad") ?? "partido"
        let p1Name = call.getString("pareja1") ?? "Equipo 1"
        let p2Name = call.getString("pareja2") ?? "Equipo 2"
        let goldenPoint = call.getBool("punto_oro") ?? true
        let manoReloj = call.getString("mano_reloj") ?? "derecha"
        let partidoId = call.getInt("partido_id") ?? 0
        let reservaId = call.getInt("reserva_id") ?? 0
        let ligaPartidoId = call.getInt("liga_partido_id") ?? 0
        let clubNombre = call.getString("club_nombre") ?? "Club PadelBlox"
        let canchaNombre = call.getString("cancha_nombre") ?? "Cancha 1"
        let sets = call.getInt("sets") ?? 3

        var payload: [String: Any] = [
            "action": "START_MATCH",
            "tipo_actividad": tipo,
            "pareja1": p1Name,
            "pareja2": p2Name,
            "punto_oro": goldenPoint,
            "mano_reloj": manoReloj,
            "sets": sets,
            "club_nombre": clubNombre,
            "cancha_nombre": canchaNombre,
            "timestamp": Date().timeIntervalSince1970
        ]

        if reservaId > 0 { payload["reserva_id"] = reservaId }
        if ligaPartidoId > 0 { payload["liga_partido_id"] = ligaPartidoId }
        if partidoId > 0 { payload["partido_id"] = partidoId }

        startLiveActivity(club: clubNombre, cancha: canchaNombre, p1: p1Name, p2: p2Name)

        if session.isReachable {
            session.sendMessage(payload, replyHandler: { reply in
                call.resolve(["success": true, "reply": reply])
            }, errorHandler: { error in
                call.reject("Error enviando datos al Watch: \(error.localizedDescription)")
            })
        } else {
            do {
                try session.updateApplicationContext(payload)
                call.resolve(["success": true, "contextUpdated": true])
            } catch {
                call.reject("No se pudo actualizar el contexto del Watch: \(error.localizedDescription)")
            }
        }
    }

    @objc func updateScore(_ call: CAPPluginCall) {
        guard let session = session, session.activationState == .activated else {
            call.reject("WatchConnectivity inactivo")
            return
        }

        let p1 = call.getString("puntos_t1") ?? "0"
        let p2 = call.getString("puntos_t2") ?? "0"
        let g1 = call.getInt("games_t1") ?? 0
        let g2 = call.getInt("games_t2") ?? 0
        let s1 = call.getInt("sets_t1") ?? 0
        let s2 = call.getInt("sets_t2") ?? 0
        let sq = call.getInt("saque_equipo") ?? 1
        let lado = call.getString("saque_lado") ?? "derecha"

        let payload: [String: Any] = [
            "action": "UPDATE_SCORE",
            "puntos_t1": p1,
            "puntos_t2": p2,
            "games_t1": g1,
            "games_t2": g2,
            "sets_t1": s1,
            "sets_t2": s2,
            "saque_equipo": sq,
            "saque_lado": lado
        ]

        updateLiveActivity(puntosT1: p1, puntosT2: p2, g1: g1, g2: g2, s1: s1, s2: s2, servingTeam: sq, isGoldenPoint: false, isBreakPoint: false)

        if session.isReachable {
            session.sendMessage(payload, replyHandler: nil, errorHandler: nil)
        }
        call.resolve(["success": true])
    }

    @objc func stopMatchSession(_ call: CAPPluginCall) {
        endLiveActivity()
        guard let session = session, session.activationState == .activated else {
            call.reject("WatchConnectivity inactivo")
            return
        }

        let payload: [String: Any] = ["action": "STOP_MATCH"]
        if session.isReachable {
            session.sendMessage(payload, replyHandler: { reply in
                call.resolve(["success": true, "summary": reply])
            }, errorHandler: { error in
                call.reject("Error al detener partido en Watch: \(error.localizedDescription)")
            })
        } else {
            call.resolve(["success": true, "note": "Watch fuera de alcance directo"])
        }
    }

    // MARK: - ActivityKit Live Activity Lifecycle (iOS 16.2+)

    private func startLiveActivity(club: String, cancha: String, p1: String, p2: String) {
        if #available(iOS 16.2, *) {
            let attributes = PadelMatchAttributes(matchId: UUID().uuidString, clubNombre: club, canchaNombre: cancha, pareja1: p1, pareja2: p2)
            let initialContent = PadelMatchAttributes.ContentState()
            do {
                let activity = try Activity<PadelMatchAttributes>.request(attributes: attributes, content: .init(state: initialContent, staleDate: nil))
                self.currentLiveActivity = activity
            } catch {
                print("Error requesting Live Activity: \(error)")
            }
        }
    }

    private func updateLiveActivity(puntosT1: String, puntosT2: String, g1: Int, g2: Int, s1: Int, s2: Int, servingTeam: Int, isGoldenPoint: Bool, isBreakPoint: Bool) {
        if #available(iOS 16.2, *) {
            guard let activity = self.currentLiveActivity as? Activity<PadelMatchAttributes> else { return }
            let updatedState = PadelMatchAttributes.ContentState(
                puntosT1: puntosT1,
                puntosT2: puntosT2,
                gamesT1: g1,
                gamesT2: g2,
                setsT1: s1,
                setsT2: s2,
                servingTeam: servingTeam,
                isGoldenPoint: isGoldenPoint,
                isBreakPoint: isBreakPoint,
                maxSmashSpeed: 0.0
            )
            Task {
                await activity.update(.init(state: updatedState, staleDate: nil))
            }
        }
    }

    private func endLiveActivity() {
        if #available(iOS 16.2, *) {
            guard let activity = self.currentLiveActivity as? Activity<PadelMatchAttributes> else { return }
            Task {
                await activity.end(nil, dismissalPolicy: .immediate)
                self.currentLiveActivity = nil
            }
        }
    }

    // MARK: - WCSessionDelegate Handlers

    public func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
        self.notifyListeners("watchActivationState", data: ["state": activationState.rawValue])
    }

    public func sessionDidBecomeInactive(_ session: WCSession) {}
    public func sessionDidDeactivate(_ session: WCSession) {
        session.activate()
    }

    public func session(_ session: WCSession, didReceiveMessage message: [String : Any]) {
        DispatchQueue.main.async {
            guard let action = message["action"] as? String else { return }

            switch action {
            case "SCORE_CHANGED":
                let t1 = message["puntos_t1"] as? String ?? "0"
                let t2 = message["puntos_t2"] as? String ?? "0"
                let g1 = message["games_t1"] as? Int ?? 0
                let g2 = message["games_t2"] as? Int ?? 0
                let s1 = message["sets_t1"] as? Int ?? 0
                let s2 = message["sets_t2"] as? Int ?? 0
                let sq = message["saque_equipo"] as? Int ?? 1
                let gp = message["is_golden_point"] as? Bool ?? false
                let bp = message["is_break_point"] as? Bool ?? false

                self.updateLiveActivity(puntosT1: t1, puntosT2: t2, g1: g1, g2: g2, s1: s1, s2: s2, servingTeam: sq, isGoldenPoint: gp, isBreakPoint: bp)
                self.notifyListeners("scoreChanged", data: message)

            case "STROKE_DETECTED":
                self.notifyListeners("strokeDetected", data: message)

            case "HEART_RATE_SAMPLE":
                self.notifyListeners("heartRateSample", data: message)

            case "WORKOUT_FINISHED":
                self.endLiveActivity()
                self.notifyListeners("workoutFinished", data: message)

            default:
                self.notifyListeners("watchMessage", data: message)
            }
        }
    }

    public func session(_ session: WCSession, didReceiveUserInfo userInfo: [String : Any] = [:]) {
        DispatchQueue.main.async {
            self.notifyListeners("watchUserInfo", data: userInfo)
        }
    }
}


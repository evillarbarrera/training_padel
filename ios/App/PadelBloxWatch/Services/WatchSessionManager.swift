import Foundation
import WatchConnectivity
import Combine

public class WatchSessionManager: NSObject, ObservableObject, WCSessionDelegate {
    public static let shared = WatchSessionManager()

    @Published public var isReachable: Bool = false
    @Published public var playerName: String = "Jugador PadelBlox"
    @Published public var scheduledMatches: [ScheduledMatch] = []
    @Published public var selectedMatch: ScheduledMatch? = nil

    public var onStartMatchReceived: (([String: Any]) -> Void)?
    public var onStopMatchReceived: (() -> Void)?
    public var onScoreUpdatedReceived: (([String: Any]) -> Void)?

    private override init() {
        super.init()
        loadCachedData()
        if WCSession.isSupported() {
            let session = WCSession.default
            session.delegate = self
            session.activate()
        }
    }

    public func loadCachedData() {
        let defaults = UserDefaults.standard
        if let name = defaults.string(forKey: "padelblox_user_name"), !name.isEmpty {
            self.playerName = name
        }
        if let data = defaults.data(forKey: "padelblox_cached_scheduled_matches"),
           let cached = try? JSONDecoder().decode([ScheduledMatch].self, from: data) {
            self.scheduledMatches = cached
            self.selectedMatch = cached.first
        }
    }

    public func requestMatchesFromPhone() {
        if WCSession.default.activationState == .activated && WCSession.default.isReachable {
            WCSession.default.sendMessage(["action": "GET_UPCOMING_MATCHES"], replyHandler: { [weak self] reply in
                DispatchQueue.main.async {
                    self?.handleMatchesPayload(reply)
                }
            }, errorHandler: { [weak self] error in
                print("[Watch] Error solicitando partidos al iPhone: \(error.localizedDescription)")
                self?.fetchMatchesDirectFromBackend()
            })
        } else {
            fetchMatchesDirectFromBackend()
        }
    }

    public func fetchMatchesDirectFromBackend() {
        let defaults = UserDefaults.standard
        let uid = defaults.integer(forKey: "padelblox_user_id")
        guard uid > 0 else { return }

        var urlComponents = URLComponents(string: "https://padelblox.cl/api/smartwatch/get_proximos_partidos.php")
        urlComponents?.queryItems = [URLQueryItem(name: "usuario_id", value: String(uid))]
        guard let url = urlComponents?.url else { return }

        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        if let token = defaults.string(forKey: "padelblox_auth_token"), !token.isEmpty {
            request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }

        URLSession.shared.dataTask(with: request) { [weak self] data, response, error in
            guard let data = data, error == nil else { return }
            do {
                if let json = try JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let success = json["success"] as? Bool, success {
                    DispatchQueue.main.async {
                        self?.handleMatchesPayload(json)
                    }
                }
            } catch {
                print("[Watch] Error decodificando partidos en directo: \(error)")
            }
        }.resume()
    }

    public func sendScoreChanged(t1: String, t2: String, g1: Int, g2: Int, s1: Int, s2: Int) {
        guard WCSession.default.activationState == .activated else { return }
        let payload: [String: Any] = [
            "action": "SCORE_CHANGED",
            "puntos_t1": t1,
            "puntos_t2": t2,
            "games_t1": g1,
            "games_t2": g2,
            "sets_t1": s1,
            "sets_t2": s2,
            "timestamp": Date().timeIntervalSince1970
        ]
        if WCSession.default.isReachable {
            WCSession.default.sendMessage(payload, replyHandler: nil, errorHandler: nil)
        }
    }

    public func sendStrokeDetected(stroke: String, speedKmh: Double, peakG: Double) {
        guard WCSession.default.activationState == .activated else { return }
        let payload: [String: Any] = [
            "action": "STROKE_DETECTED",
            "golpe": stroke,
            "velocidad_kmh": speedKmh,
            "fuerza_g": peakG,
            "timestamp": Date().timeIntervalSince1970
        ]
        if WCSession.default.isReachable {
            WCSession.default.sendMessage(payload, replyHandler: nil, errorHandler: nil)
        }
    }

    public func sendWorkoutFinished(summary: [String: Any]) {
        guard WCSession.default.activationState == .activated else { return }
        var payload = summary
        payload["action"] = "WORKOUT_FINISHED"

        if let sm = selectedMatch {
            if let rId = sm.reservaId { payload["reserva_id"] = rId }
            if let lId = sm.ligaPartidoId { payload["liga_partido_id"] = lId }
            payload["cancha_nombre"] = sm.canchaNombre
            payload["club_nombre"] = sm.clubNombre
        }

        if WCSession.default.isReachable {
            WCSession.default.sendMessage(payload, replyHandler: nil, errorHandler: nil)
        } else {
            do {
                try WCSession.default.updateApplicationContext(payload)
            } catch {
                print("Error guardando contexto de resumen: \(error)")
            }
        }
    }

    private func handleMatchesPayload(_ payload: [String: Any]) {
        let defaults = UserDefaults.standard

        if let name = payload["usuario_nombre"] as? String, !name.isEmpty {
            self.playerName = name
            defaults.set(name, forKey: "padelblox_user_name")
        }
        if let uid = payload["usuario_id"] as? Int, uid > 0 {
            defaults.set(uid, forKey: "padelblox_user_id")
        }
        if let token = payload["auth_token"] as? String, !token.isEmpty {
            defaults.set(token, forKey: "padelblox_auth_token")
        }

        if let list = payload["proximos_partidos"] as? [[String: Any]] {
            var parsed: [ScheduledMatch] = []
            for item in list {
                let id = item["id"] as? String ?? UUID().uuidString
                let rId = item["reserva_id"] as? Int
                let lId = item["liga_partido_id"] as? Int
                let tipo = item["tipo_label"] as? String ?? "Reserva"
                let club = item["club_nombre"] as? String ?? "Club PadelBlox"
                let cancha = item["cancha_nombre"] as? String ?? "Cancha"
                let cTipo = item["cancha_tipo"] as? String ?? "Pádel Cristal"
                let hor = item["horario_texto"] as? String ?? "Hoy"
                let p1 = item["pareja1"] as? String ?? "Mi Pareja"
                let p2 = item["pareja2"] as? String ?? "Rivales"
                let gp = item["punto_oro"] as? Bool ?? true
                let st = item["sets"] as? Int ?? 3
                let eh = item["es_hoy"] as? Bool ?? true

                parsed.append(ScheduledMatch(
                    id: id,
                    reservaId: rId,
                    ligaPartidoId: lId,
                    tipoLabel: tipo,
                    clubNombre: club,
                    canchaNombre: cancha,
                    canchaTipo: cTipo,
                    horarioTexto: hor,
                    pareja1: p1,
                    pareja2: p2,
                    puntoOro: gp,
                    sets: st,
                    esHoy: eh
                ))
            }

            self.scheduledMatches = parsed
            self.selectedMatch = parsed.first

            // Persistir partidos decodificados en el reloj
            if let data = try? JSONEncoder().encode(parsed) {
                defaults.set(data, forKey: "padelblox_cached_scheduled_matches")
            } else if parsed.isEmpty {
                defaults.removeObject(forKey: "padelblox_cached_scheduled_matches")
            }

            // Actualizar Complications de watchOS
            if let nextMatch = parsed.first {
                defaults.set(nextMatch.clubNombre, forKey: "padelblox_complication_club")
                defaults.set(nextMatch.canchaNombre, forKey: "padelblox_complication_cancha")
                defaults.set(nextMatch.horarioTexto, forKey: "padelblox_complication_horario")
            } else {
                defaults.removeObject(forKey: "padelblox_complication_club")
                defaults.removeObject(forKey: "padelblox_complication_cancha")
                defaults.removeObject(forKey: "padelblox_complication_horario")
            }
        }
    }

    // MARK: - WCSessionDelegate
    public func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
        DispatchQueue.main.async {
            self.isReachable = session.isReachable
            if session.isReachable {
                self.requestMatchesFromPhone()
            }
        }
    }

    public func sessionReachabilityDidChange(_ session: WCSession) {
        DispatchQueue.main.async {
            self.isReachable = session.isReachable
            if session.isReachable {
                self.requestMatchesFromPhone()
            }
        }
    }

    public func session(_ session: WCSession, didReceiveMessage message: [String : Any]) {
        DispatchQueue.main.async {
            guard let action = message["action"] as? String else { return }
            if action == "START_MATCH" {
                self.onStartMatchReceived?(message)
            } else if action == "STOP_MATCH" {
                self.onStopMatchReceived?()
            } else if action == "UPDATE_SCORE" {
                self.onScoreUpdatedReceived?(message)
            } else if action == "SYNC_MATCHES" {
                self.handleMatchesPayload(message)
            }
        }
    }

    public func session(_ session: WCSession, didReceiveApplicationContext applicationContext: [String : Any]) {
        DispatchQueue.main.async {
            guard let action = applicationContext["action"] as? String else { return }
            if action == "START_MATCH" {
                self.onStartMatchReceived?(applicationContext)
            } else if action == "SYNC_MATCHES" {
                self.handleMatchesPayload(applicationContext)
            }
        }
    }
}

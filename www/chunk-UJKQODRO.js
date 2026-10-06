import {
  environment
} from "./chunk-LEH7FWY4.js";
import {
  HttpClient,
  HttpHeaders,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VZCO22FC.js";

// src/app/services/mysql.service.ts
var _MysqlService = class _MysqlService {
  constructor(http) {
    this.http = http;
    this.api = environment.apiUrl;
  }
  getHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : "",
      "X-Authorization": token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    });
  }
  getUser() {
    return this.http.get(`${this.api}/get_user.php`, { headers: this.getHeaders() });
  }
  login(usuario, password) {
    return this.http.post(`${this.api}/auth/login.php`, {
      usuario,
      password
    });
  }
  register(nombre, email, password, rol) {
    return this.http.post(`${this.api}/auth/register.php`, {
      nombre,
      email,
      password,
      rol
    }, { headers: this.getHeaders() });
  }
  googleCheck(email) {
    return this.http.post(`${this.api}/auth/google_auth.php`, { email }, { headers: this.getHeaders() });
  }
  appleCheck(email, appleUser, nombre = "") {
    return this.http.post(`${this.api}/auth/apple_auth.php`, {
      email,
      user: appleUser,
      nombre
    }, { headers: this.getHeaders() });
  }
  googleRegister(nombre, email, rol) {
    return this.http.post(`${this.api}/auth/google_register.php`, {
      nombre,
      email,
      rol
    }, { headers: this.getHeaders() });
  }
  getReservasJugador(jugadorId) {
    return this.http.get(`${this.api}/alumno/get_reservas.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }
  getEntrenamientosGrupales(jugadorId) {
    return this.http.get(`${this.api}/alumno/get_entrenamientos_grupales.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }
  getHomeStats(jugadorId) {
    return this.http.get(`${this.api}/alumno/get_home_stats.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }
  checkPendientesEntrenador(jugadorId, entrenadorId) {
    return this.http.get(`${this.api}/alumno/check_pendientes_entrenador.php?jugador_id=${jugadorId}&entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  getDailyTipAI() {
    return this.http.get(`${this.api}/ia/get_tip_frontend.php`, { headers: this.getHeaders() });
  }
  getEntrenadorAgenda(entrenadorId) {
    return this.http.get(`${this.api}/entrenador/get_agenda.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  getPacksGrupalesEntrenador(entrenadorId) {
    return this.http.get(`${this.api}/entrenador/get_packs_grupales.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  cancelarReserva(reservaId) {
    return this.http.post(`${this.api}/entrenador/cancelar_reserva.php`, { reserva_id: reservaId }, { headers: this.getHeaders() });
  }
  cancelarReservaClub(reservaId) {
    return this.http.post(`${this.api}/clubes/cancel_reserva.php`, { reserva_id: reservaId }, { headers: this.getHeaders() });
  }
  cancelarReservaJugador(reservaId, jugadorId) {
    const payload = {
      reserva_id: reservaId,
      jugador_id: jugadorId
    };
    return this.http.post(`${this.api}/alumno/cancelar_reserva.php`, JSON.stringify(payload), { headers: this.getHeaders() });
  }
  getPerfil(userId) {
    const uId = userId || Number(localStorage.getItem("userId")) || Number(localStorage.getItem("user_id")) || 0;
    const q = uId ? `?user_id=${uId}` : "";
    return this.http.get(`${this.api}/user/get_perfil.php${q}`, { headers: this.getHeaders() });
  }
  updatePerfil(data) {
    return this.http.post(`${this.api}/user/update_perfil.php`, data, { headers: this.getHeaders() });
  }
  subirFoto(userId, file) {
    const formData = new FormData();
    formData.append("user_id", userId.toString());
    formData.append("foto", file);
    const token = localStorage.getItem("token");
    const uploadHeaders = new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : "",
      "X-Authorization": token ? `Bearer ${token}` : ""
    });
    return this.http.post(`${this.api}/user/subir_foto.php`, formData, {
      headers: uploadHeaders
    });
  }
  inscribirseGrupal(packId, jugadorId) {
    return this.http.post(`${this.api}/packs/inscribir_grupal.php`, { pack_id: packId, jugador_id: jugadorId }, { headers: this.getHeaders() });
  }
  cancelarInscripcionGrupal(inscripcionId, jugadorId) {
    return this.http.post(`${this.api}/alumno/cancelar_inscripcion_grupal.php`, { inscripcion_id: inscripcionId, jugador_id: jugadorId }, { headers: this.getHeaders() });
  }
  getInscripcionesGrupales(packId) {
    return this.http.get(`${this.api}/packs/get_inscripciones_grupales.php?pack_id=${packId}`, { headers: this.getHeaders() });
  }
  guardarTokenFCM(userId, token) {
    return this.http.post(`${this.api}/notifications/notificaciones.php?action=guardar_token`, { user_id: userId, token }, { headers: this.getHeaders() });
  }
  enviarNotificacion(data) {
    return this.http.post(`${this.api}/notifications/notificaciones.php?action=enviar`, data, { headers: this.getHeaders() });
  }
  programarRecordatorio(data) {
    return this.http.post(`${this.api}/notifications/notificaciones.php?action=programar_recordatorio`, data, { headers: this.getHeaders() });
  }
  notificarHorariosDisponibles(data) {
    return this.http.post(`${this.api}/notifications/notificaciones.php?action=horarios_nuevos`, data, { headers: this.getHeaders() });
  }
  getAllPacks(entrenadorId) {
    let url = `${this.api}/packs/get_all_packs.php`;
    if (entrenadorId) {
      url += `?entrenador_id=${entrenadorId}`;
    }
    return this.http.get(url, { headers: this.getHeaders() });
  }
  recoverPassword(email) {
    return this.http.post(`${this.api}/auth/recover-password.php`, { email }, { headers: this.getHeaders() });
  }
  getAlumnos(entrenadorId) {
    return this.http.get(`${this.api}/alumno/get_alumno.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  crearAlumno(data) {
    return this.http.post(`${this.api}/alumno/create_alumno.php`, data, {
      headers: this.getHeaders()
    });
  }
  getLogros(jugadorId) {
    return this.http.get(`${this.api}/logros/get_logros.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }
  // Clubes & Reservas (Playtomic Style)
  getClubes() {
    return this.http.get(`${this.api}/clubes/get_clubes.php`, { headers: this.getHeaders() });
  }
  getCanchas(clubId) {
    return this.http.get(`${this.api}/clubes/get_canchas.php?club_id=${clubId}`, { headers: this.getHeaders() });
  }
  getDisponibilidadCancha(canchaId, fecha) {
    return this.http.get(`${this.api}/clubes/get_disponibilidad.php?cancha_id=${canchaId}&fecha=${fecha}`, { headers: this.getHeaders() });
  }
  getDisponibilidadClub(clubId, fecha) {
    return this.http.get(`${this.api}/clubes/get_disponibilidad.php?club_id=${clubId}&fecha=${fecha}`, { headers: this.getHeaders() });
  }
  addReservaClub(reserva) {
    return this.http.post(`${this.api}/clubes/add_reserva.php`, reserva, { headers: this.getHeaders() });
  }
  getTorneosPublicos(region, comuna) {
    let url = `${this.api}/torneos/get_torneos_public.php`;
    const params = [];
    if (region)
      params.push(`region=${region}`);
    if (comuna)
      params.push(`comuna=${comuna}`);
    if (params.length > 0)
      url += `?${params.join("&")}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  getLigas(clubId) {
    let url = `${this.api}/ligas/obtener_liga.php`;
    if (clubId)
      url += `?club_id=${clubId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  saveMatchResult(data) {
    return this.http.post(`${this.api}/clubes/save_match_result.php`, data, { headers: this.getHeaders() });
  }
  getMisPartidos(clubId) {
    let url = `${this.api}/clubes/get_mis_partidos.php`;
    if (clubId)
      url += `?club_id=${clubId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  enrollInTournament(data) {
    return this.http.post(`${this.api}/torneos/join_torneo.php`, data, { headers: this.getHeaders() });
  }
  enrollInTournamentV2(data) {
    return this.http.post(`${this.api}/torneos/join_torneo_v2.php`, data, { headers: this.getHeaders() });
  }
  enrollInLiga(data) {
    return this.http.post(`${this.api}/ligas/inscribir_pareja.php`, data, { headers: this.getHeaders() });
  }
  getLigaDetalle(ligaId) {
    return this.http.get(`${this.api}/ligas/obtener_liga.php?id=${ligaId}`, { headers: this.getHeaders() });
  }
  getTorneoCategorias(torneo_id) {
    return this.http.get(`${this.api}/torneos/get_categorias.php?torneo_id=${torneo_id}`, { headers: this.getHeaders() });
  }
  getUsuarios(search) {
    return this.http.get(`${this.api}/user/get_users.php?search=${search}`, { headers: this.getHeaders() });
  }
  updateReserva(data) {
    return this.http.post(`${this.api}/clubes/update_reserva.php`, data, { headers: this.getHeaders() });
  }
  getMisTorneosCompleto(userId) {
    let uId = userId || Number(localStorage.getItem("userId")) || Number(localStorage.getItem("user_id")) || 0;
    if (!uId) {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = atob(token);
          const parts = decoded.split("|");
          if (parts.length >= 2 && !isNaN(Number(parts[0]))) {
            uId = Number(parts[0]);
          }
        } catch (e) {
        }
      }
    }
    const q = uId ? `?user_id=${uId}` : "";
    return this.http.get(`${this.api}/torneos/get_mis_torneos_completo.php${q}`, { headers: this.getHeaders() });
  }
  getMyTournaments(userId) {
    let uId = userId || Number(localStorage.getItem("userId")) || Number(localStorage.getItem("user_id")) || 0;
    if (!uId) {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = atob(token);
          const parts = decoded.split("|");
          if (parts.length >= 2 && !isNaN(Number(parts[0]))) {
            uId = Number(parts[0]);
          }
        } catch (e) {
        }
      }
    }
    const q = uId ? `?user_id=${uId}` : "";
    return this.http.get(`${this.api}/torneos/get_user_tournaments.php${q}`, { headers: this.getHeaders() });
  }
  getCompeticionDetalle(id, tipo) {
    return this.http.get(`${this.api}/torneos/get_competicion_detalle.php?id=${id}&tipo=${tipo}`, { headers: this.getHeaders() });
  }
  getWallet(userId) {
    return this.http.get(`${this.api}/wallet/get_wallet.php?user_id=${userId}`, { headers: this.getHeaders() });
  }
  getWalletTransactions(userId) {
    return this.http.get(`${this.api}/wallet/get_transactions.php?user_id=${userId}`, { headers: this.getHeaders() });
  }
  generateQRCode(userId, clubId = 0) {
    return this.http.post(`${this.api}/wallet/generate_qr.php`, { user_id: userId, club_id: clubId }, { headers: this.getHeaders() });
  }
  buyPoints(userId, packageId) {
    return this.http.post(`${this.api}/wallet/buy_points.php`, { user_id: userId, package_id: packageId }, { headers: this.getHeaders() });
  }
  redeemCoupon(userId, rewardId, clubId = 0) {
    return this.http.post(`${this.api}/wallet/redeem_coupon.php`, { user_id: userId, reward_id: rewardId, club_id: clubId }, { headers: this.getHeaders() });
  }
  getUserCoupons(userId) {
    return this.http.get(`${this.api}/wallet/get_user_coupons.php?user_id=${userId}`, { headers: this.getHeaders() });
  }
  processClubRedemption(couponCode, action) {
    return this.http.post(`${this.api}/wallet/process_club_redemption.php`, { coupon_code: couponCode, action }, { headers: this.getHeaders() });
  }
};
_MysqlService.\u0275fac = function MysqlService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MysqlService)(\u0275\u0275inject(HttpClient));
};
_MysqlService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MysqlService, factory: _MysqlService.\u0275fac, providedIn: "root" });
var MysqlService = _MysqlService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MysqlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MysqlService
};
//# sourceMappingURL=chunk-UJKQODRO.js.map

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

// src/app/services/entrenamiento.service.ts
var _EntrenamientoService = class _EntrenamientoService {
  constructor(http) {
    this.http = http;
    this.api = environment.apiUrl;
  }
  getHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    });
  }
  getPacksJugador() {
    return this.http.get(`${this.api}/packs/jugador`, { headers: this.getHeaders() });
  }
  getHorariosProfesor(profesorId) {
    return this.http.get(`${this.api}/profesores/${profesorId}/horarios`, { headers: this.getHeaders() });
  }
  agendarEntrenamiento(data) {
    return this.http.post(`${this.api}/entrenamientos/agendar`, data, { headers: this.getHeaders() });
  }
  addDisponibilidad(data) {
    return this.http.post(`${this.api}/disponibilidad/add.php`, data, { headers: this.getHeaders() });
  }
  getEntrenadorPorJugador(jugadorId) {
    return this.http.get(`${this.api}/alumno/get_pack.php?jugador_id=${jugadorId}&t=${(/* @__PURE__ */ new Date()).getTime()}`, { headers: this.getHeaders() });
  }
  getDisponibilidadEntrenador(entrenadorId, packId, clubId) {
    let url = `${this.api}/entrenador/get_disponibilidad.php?entrenador_id=${entrenadorId}`;
    if (packId) {
      url += `&pack_id=${packId}`;
    }
    if (clubId) {
      url += `&club_id=${clubId}`;
    }
    return this.http.get(url, { headers: this.getHeaders() });
  }
  crearReserva(payload) {
    return this.http.post(`${this.api}/disponibilidad/reservas.php`, payload, { headers: this.getHeaders() });
  }
  getDisponibilidad(entrenadorId, clubId) {
    let url = `${this.api}/disponibilidad/get.php?entrenador_id=${entrenadorId}`;
    if (clubId)
      url += `&club_id=${clubId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  getReservasEntrenador(entrenadorId) {
    return this.http.get(`${this.api}/entrenador/get_agenda.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  syncDisponibilidad(payload) {
    return this.http.post(`${this.api}/disponibilidad/sync.php`, payload, { headers: this.getHeaders() });
  }
  getMisAlumnos(entrenadorId) {
    return this.http.get(`${this.api}/entrenador/get_mis_alumnos.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  getAlumnosGlobales(entrenadorId) {
    return this.http.get(`${this.api}/alumno/get_alumno.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  getDefaultConfig(entrenadorId) {
    return this.http.get(`${this.api}/disponibilidad/get_config.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  saveDefaultConfig(payload) {
    return this.http.post(`${this.api}/disponibilidad/save_config.php`, payload, { headers: this.getHeaders() });
  }
  getFinanzas(entrenadorId) {
    return this.http.get(`${this.api}/entrenador/get_finanzas.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  applyDefaultConfig(payload) {
    return this.http.post(`${this.api}/disponibilidad/apply_config.php`, payload, { headers: this.getHeaders() });
  }
  getDashboardStats(entrenadorId) {
    return this.http.get(`${this.api}/entrenador/get_dashboard_stats.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  getClubes() {
    return this.http.get(`${this.api}/clubes/get_clubes.php`, { headers: this.getHeaders() });
  }
  addClub(payload) {
    return this.http.post(`${this.api}/clubes/add_club.php`, payload, { headers: this.getHeaders() });
  }
  migrateAvailability(entrenadorId, clubId) {
    const payload = { entrenador_id: entrenadorId, club_id: clubId };
    return this.http.post(`${this.api}/disponibilidad/migrate_to_club.php`, payload, { headers: this.getHeaders() });
  }
  // --- CUPONES ---
  getCupones(entrenadorId) {
    return this.http.get(`${this.api}/entrenador/get_cupones.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  saveCupon(payload) {
    return this.http.post(`${this.api}/entrenador/save_cupon.php`, payload, { headers: this.getHeaders() });
  }
  deleteCupon(payload) {
    return this.http.post(`${this.api}/entrenador/delete_cupon.php`, payload, { headers: this.getHeaders() });
  }
  validateCupon(codigo, entrenadorId, jugadorId, packId) {
    let url = `${this.api}/packs/validate_cupon.php?codigo=${codigo}&entrenador_id=${entrenadorId}`;
    if (jugadorId)
      url += `&jugador_id=${jugadorId}`;
    if (packId)
      url += `&pack_id=${packId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  getMisPacks(entrenadorId) {
    return this.http.get(`${this.api}/packs/get_mis_packs.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  searchAlumnos(term) {
    return this.http.get(`${this.api}/user/get_users.php?rol=jugador&search=${term}&limit=10`, { headers: this.getHeaders() });
  }
  // --- MALLAS Y SEGUIMIENTO ---
  getMallas(entrenadorId) {
    return this.http.get(`${this.api}/mallas/get_mallas.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  asignarMalla(data) {
    return this.http.post(`${this.api}/mallas/asignar_malla.php`, data, { headers: this.getHeaders() });
  }
  // --- PACKS DEL ENTRENADOR ---
  getPacks(entrenadorId) {
    return this.http.get(`${this.api}/alumno/get_pack.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }
  insertPack(data) {
    return this.http.post(`${this.api}/alumno/insert_pack.php`, data, { headers: this.getHeaders() });
  }
  cancelarReserva(reservaId, jugadorId) {
    const payload = { id: reservaId };
    if (jugadorId)
      payload.jugador_id = jugadorId;
    return this.http.post(`${this.api}/disponibilidad/cancelar_reserva.php`, payload, { headers: this.getHeaders() });
  }
  updateReservaTecnica(payload) {
    return this.http.post(`${this.api}/disponibilidad/update_reserva_tecnica.php`, payload, {
      headers: this.getHeaders()
    });
  }
  getMallaById(mallaId) {
    return this.http.get(`${this.api}/mallas/get_mallas.php?id=${mallaId}`, {
      headers: this.getHeaders()
    });
  }
  getPacksAlumno(jugadorId, entrenadorId) {
    let url = `${this.api}/alumno/get_mis_packs_alumno.php?jugador_id=${jugadorId}`;
    if (entrenadorId) {
      url += `&entrenador_id=${entrenadorId}`;
    }
    return this.http.get(url, { headers: this.getHeaders() });
  }
  addJugadorAPack(packId, jugadorId) {
    return this.http.post(`${this.api}/entrenador/add_jugador_pack.php`, { pack_id: packId, jugador_id: jugadorId }, {
      headers: this.getHeaders()
    });
  }
  addJugadorAReserva(reservaId, jugadorId) {
    return this.http.post(`${this.api}/entrenador/add_jugador_reserva.php`, { reserva_id: reservaId, jugador_id: jugadorId }, {
      headers: this.getHeaders()
    });
  }
};
_EntrenamientoService.\u0275fac = function EntrenamientoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EntrenamientoService)(\u0275\u0275inject(HttpClient));
};
_EntrenamientoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntrenamientoService, factory: _EntrenamientoService.\u0275fac, providedIn: "root" });
var EntrenamientoService = _EntrenamientoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenamientoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EntrenamientoService
};
//# sourceMappingURL=chunk-DEYW32VP.js.map

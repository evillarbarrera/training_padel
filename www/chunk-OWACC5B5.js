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

// src/app/services/pack_alumno.service.ts
var _PackAlumnoService = class _PackAlumnoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/alumno`;
  }
  getHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    });
  }
  insertPackAlumno(data) {
    return this.http.post(`${this.apiUrl}/insert_pack.php`, data, { headers: this.getHeaders() });
  }
  initTransaction(data) {
    const paymentUrl = this.apiUrl.replace("/alumno", "/pagos");
    return this.http.post(`${paymentUrl}/init_transaction.php`, data, {
      headers: this.getHeaders()
    });
  }
  getAlumnosProfesor(entrenador_id) {
    return this.http.get(`${this.apiUrl}/get_alumno.php?entrenador_id=${entrenador_id}`, { headers: this.getHeaders() });
  }
  inscribirseGrupal(packId, jugadorId) {
    return this.http.post(`${this.apiUrl}/inscribir_grupal.php`, { pack_id: packId, jugador_id: jugadorId }, { headers: this.getHeaders() });
  }
  // --- CORRECCIÓN SEGURIDAD: Usar ruta /alumno/ y enviar jugador_id ---
  cancelarInscripcionGrupal(inscripcionId, jugadorId) {
    return this.http.post(`${this.apiUrl}/cancelar_inscripcion_grupal.php`, { inscripcion_id: inscripcionId, jugador_id: jugadorId }, { headers: this.getHeaders() });
  }
  getInscripcionesGrupales(packId) {
    return this.http.get(`${this.apiUrl.replace("/alumno", "")}/packs/get_inscripciones_grupales.php?pack_id=${packId}`, { headers: this.getHeaders() });
  }
  getMisPacks(jugadorId) {
    return this.http.get(`${this.apiUrl}/get_mis_packs_alumno.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }
  invitarJugador(packJugadoresId, emailInvitado) {
    return this.http.post(`${this.apiUrl}/invitar_jugador_pack.php`, { pack_jugadores_id: packJugadoresId, email_invitado: emailInvitado }, { headers: this.getHeaders() });
  }
};
_PackAlumnoService.\u0275fac = function PackAlumnoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PackAlumnoService)(\u0275\u0275inject(HttpClient));
};
_PackAlumnoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PackAlumnoService, factory: _PackAlumnoService.\u0275fac, providedIn: "root" });
var PackAlumnoService = _PackAlumnoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackAlumnoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PackAlumnoService
};
//# sourceMappingURL=chunk-OWACC5B5.js.map

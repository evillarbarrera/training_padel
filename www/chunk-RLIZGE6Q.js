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

// src/app/services/evaluacion.service.ts
var _EvaluacionService = class _EvaluacionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/evaluaciones`;
  }
  getHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    });
  }
  crearEvaluacion(data) {
    return this.http.post(`${this.apiUrl}/create_evaluacion.php`, data, { headers: this.getHeaders() });
  }
  getEvaluaciones(jugadorId, entrenadorId) {
    let url = `${this.apiUrl}/get_evaluaciones.php?jugador_id=${jugadorId}`;
    if (entrenadorId)
      url += `&entrenador_id=${entrenadorId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  getVideos(jugadorId, entrenadorId) {
    let url = `${environment.apiUrl}/entrenador/get_videos.php?jugador_id=${jugadorId}`;
    if (entrenadorId)
      url += `&entrenador_id=${entrenadorId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  uploadVideo(formData) {
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : ""
    });
    return this.http.post(`${environment.apiUrl}/entrenador/add_video.php`, formData, { headers });
  }
  deleteVideo(videoId) {
    const body = { video_id: videoId };
    return this.http.post(`${environment.apiUrl}/entrenador/delete_video.php`, body, { headers: this.getHeaders() });
  }
};
_EvaluacionService.\u0275fac = function EvaluacionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EvaluacionService)(\u0275\u0275inject(HttpClient));
};
_EvaluacionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvaluacionService, factory: _EvaluacionService.\u0275fac, providedIn: "root" });
var EvaluacionService = _EvaluacionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvaluacionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EvaluacionService
};
//# sourceMappingURL=chunk-RLIZGE6Q.js.map

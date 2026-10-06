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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/services/pack.service.ts
var _PacksService = class _PacksService {
  // Token en Base64
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/packs`;
  }
  getHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    });
  }
  getMisPacks() {
    const userId = Number(localStorage.getItem("userId"));
    return this.http.get(`${this.apiUrl}/get_mis_packs.php?entrenador_id=${userId}`, { headers: this.getHeaders() });
  }
  getAllPacks(lat, lng, rad, region, comuna) {
    let url = `${this.apiUrl}/get_all_packs.php`;
    const params = [];
    if (lat)
      params.push(`lat=${lat}`);
    if (lng)
      params.push(`lng=${lng}`);
    if (rad)
      params.push(`rad=${rad}`);
    if (region)
      params.push(`region=${region}`);
    if (comuna)
      params.push(`comuna=${comuna}`);
    if (params.length > 0) {
      url += `?${params.join("&")}`;
    }
    return this.http.get(url, { headers: this.getHeaders() });
  }
  crearPack(pack) {
    const userId = Number(localStorage.getItem("userId"));
    const packConId = __spreadProps(__spreadValues({}, pack), { entrenador_id: userId });
    return this.http.post(`${this.apiUrl}/create_pack.php`, packConId, { headers: this.getHeaders() });
  }
  // Editar pack
  editarPack(pack) {
    const userId = Number(localStorage.getItem("userId"));
    const packConId = __spreadProps(__spreadValues({}, pack), { entrenador_id: userId });
    return this.http.post(`${this.apiUrl}/editar_pack.php`, packConId, { headers: this.getHeaders() });
  }
  // Eliminar pack
  eliminarPack(id) {
    return this.http.post(`${this.apiUrl}/eliminar_pack.php`, { id }, { headers: this.getHeaders() });
  }
};
_PacksService.\u0275fac = function PacksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PacksService)(\u0275\u0275inject(HttpClient));
};
_PacksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PacksService, factory: _PacksService.\u0275fac, providedIn: "root" });
var PacksService = _PacksService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PacksService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PacksService
};
//# sourceMappingURL=chunk-UA6B4IIY.js.map

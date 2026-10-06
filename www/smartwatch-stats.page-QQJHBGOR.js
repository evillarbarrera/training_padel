import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonSpinner,
  IonTitle,
  IonToolbar,
  IonicModule
} from "./chunk-LFXGPXMG.js";
import {
  environment
} from "./chunk-LEH7FWY4.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  FormsModule,
  HttpClient,
  HttpHeaders,
  Injectable,
  NavController,
  NgForOf,
  NgIf,
  Subject,
  UpperCasePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VZCO22FC.js";
import "./chunk-VS5QNFP6.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5HNVOF53.js";
import "./chunk-LSHAV5YA.js";
import "./chunk-KDIH5JCH.js";
import "./chunk-SYGHPWCO.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-2WF3DFKV.js";
import "./chunk-SHSGKJXT.js";
import "./chunk-HPZMEZGM.js";
import "./chunk-LQMW4QLB.js";
import "./chunk-AUIO7APK.js";
import "./chunk-5SBEZBIH.js";
import "./chunk-WWC7MCPX.js";
import "./chunk-F3JJ4YWB.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-CTA72TSG.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-G77KIGOI.js";
import "./chunk-62L7LOGO.js";
import "./chunk-RFMCWVQV.js";
import "./chunk-JLLM6G4B.js";
import "./chunk-EHXOAUIK.js";
import "./chunk-KAOERKNB.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/services/smartwatch.service.ts
var PadelBloxWatch = registerPlugin("PadelBloxWatch");
var _SmartwatchService = class _SmartwatchService {
  constructor(http) {
    this.http = http;
    this.api = environment.apiUrl;
    this.status$ = new BehaviorSubject({
      supported: false,
      isPaired: false,
      isWatchAppInstalled: false,
      isReachable: false
    });
    this.isMatchActive$ = new BehaviorSubject(false);
    this.lastStroke$ = new Subject();
    this.currentHeartRate$ = new BehaviorSubject(0);
    this.sessionCompleted$ = new Subject();
    this.initPluginListeners();
  }
  getHeaders() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Authorization": token ? `Bearer ${token}` : "",
      "X-Authorization": token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    });
  }
  initPluginListeners() {
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === "ios") {
      try {
        PadelBloxWatch.addListener("scoreChanged", (data) => {
          console.log("[Smartwatch] Marcador actualizado desde Watch:", data);
        });
        PadelBloxWatch.addListener("strokeDetected", (data) => {
          this.lastStroke$.next(data);
        });
        PadelBloxWatch.addListener("heartRateSample", (data) => {
          if (data && data.heart_rate) {
            this.currentHeartRate$.next(data.heart_rate);
          }
        });
        PadelBloxWatch.addListener("workoutFinished", (summary) => {
          this.isMatchActive$.next(false);
          this.sessionCompleted$.next(summary);
        });
        this.checkWatchConnection();
      } catch (err) {
        console.warn("[Smartwatch] No se pudo inicializar listeners del plugin:", err);
      }
    }
  }
  checkWatchConnection() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === "ios") {
        try {
          const res = yield PadelBloxWatch.isWatchConnected();
          this.status$.next(res);
          return res;
        } catch (e) {
          console.error("Error comprobando conexi\xF3n con Apple Watch:", e);
        }
      }
      const fallback = {
        supported: false,
        isPaired: false,
        isWatchAppInstalled: false,
        isReachable: false
      };
      this.status$.next(fallback);
      return fallback;
    });
  }
  startMatch(config) {
    return __async(this, null, function* () {
      this.isMatchActive$.next(true);
      if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === "ios") {
        try {
          yield PadelBloxWatch.startMatchSession(config);
          return true;
        } catch (err) {
          console.error("Error iniciando sesi\xF3n en Watch:", err);
        }
      }
      return true;
    });
  }
  updateScore(puntosT1, puntosT2, g1, g2, s1, s2, saqueEquipo = 1) {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === "ios") {
        try {
          yield PadelBloxWatch.updateScore({
            puntos_t1: puntosT1,
            puntos_t2: puntosT2,
            games_t1: g1,
            games_t2: g2,
            sets_t1: s1,
            sets_t2: s2,
            saque_equipo: saqueEquipo
          });
        } catch (e) {
          console.error("Error enviando marcador al Watch:", e);
        }
      }
    });
  }
  stopMatch() {
    return __async(this, null, function* () {
      this.isMatchActive$.next(false);
      if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === "ios") {
        try {
          return yield PadelBloxWatch.stopMatchSession();
        } catch (err) {
          console.error("Error deteniendo sesi\xF3n en Watch:", err);
        }
      }
      return { success: true };
    });
  }
  // --- API Backend Sync ---
  syncSession(session) {
    const url = `${this.api}/smartwatch/sync_session.php`;
    return this.http.post(url, session, { headers: this.getHeaders() });
  }
  getUserStats(userId, limit = 20) {
    const url = `${this.api}/smartwatch/get_stats.php?usuario_id=${userId}&limit=${limit}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  getMatchStats(ligaPartidoId) {
    const url = `${this.api}/smartwatch/get_stats.php?liga_partido_id=${ligaPartidoId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  getSessionDetail(sesionId) {
    const url = `${this.api}/smartwatch/get_stats.php?sesion_id=${sesionId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
};
_SmartwatchService.\u0275fac = function SmartwatchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmartwatchService)(\u0275\u0275inject(HttpClient));
};
_SmartwatchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartwatchService, factory: _SmartwatchService.\u0275fac, providedIn: "root" });
var SmartwatchService = _SmartwatchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartwatchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/smartwatch-stats/smartwatch-stats.page.ts
function SmartwatchStatsPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "ion-spinner", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando datos del Smartwatch...");
    \u0275\u0275elementEnd()();
  }
}
function SmartwatchStatsPage_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19);
    \u0275\u0275text(4, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20)(6, "span", 21);
    \u0275\u0275text(7, "R\xC9CORD DE VELOCIDAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11, "km/h");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 23);
    \u0275\u0275text(13, "Smash m\xE1s potente registrado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 24)(15, "div", 19);
    \u0275\u0275text(16, "\u{1F525}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 20)(18, "span", 21);
    \u0275\u0275text(19, "CALOR\xCDAS ACTIVAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 22);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementStart(23, "small");
    \u0275\u0275text(24, "kcal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "span", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 25)(28, "div", 19);
    \u0275\u0275text(29, "\u2764\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 20)(31, "span", 21);
    \u0275\u0275text(32, "FC PROMEDIO / M\xC1X");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 22);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementStart(36, "small");
    \u0275\u0275text(37, "bpm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 23);
    \u0275\u0275text(39, "Intensidad en partido");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 26)(41, "div", 19);
    \u0275\u0275text(42, "\u{1F3BE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 20)(44, "span", 21);
    \u0275\u0275text(45, "TOTAL DE GOLPES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 22);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 23);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 27)(51, "div", 28)(52, "h3");
    \u0275\u0275text(53, "\u{1F3AF} Distribuci\xF3n T\xE9cnica de Golpes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 29);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 30)(57, "div", 31)(58, "div", 32)(59, "span", 33);
    \u0275\u0275text(60, "\u26A1 Smash / Remate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 34);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 35);
    \u0275\u0275element(64, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 31)(66, "div", 32)(67, "span", 33);
    \u0275\u0275text(68, "\u{1F32A}\uFE0F Bandeja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 34);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 35);
    \u0275\u0275element(72, "div", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 31)(74, "div", 32)(75, "span", 33);
    \u0275\u0275text(76, "\u{1F525} V\xEDbora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 34);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 35);
    \u0275\u0275element(80, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 31)(82, "div", 32)(83, "span", 33);
    \u0275\u0275text(84, "\u{1F6E1}\uFE0F Voleas (Red)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 34);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 35);
    \u0275\u0275element(88, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 31)(90, "div", 32)(91, "span", 33);
    \u0275\u0275text(92, "\u{1F3BE} Drive (Derecha)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 34);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 35);
    \u0275\u0275element(96, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 31)(98, "div", 32)(99, "span", 33);
    \u0275\u0275text(100, "\u21A9\uFE0F Rev\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 34);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 35);
    \u0275\u0275element(104, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 31)(106, "div", 32)(107, "span", 33);
    \u0275\u0275text(108, "\u2601\uFE0F Globo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span", 34);
    \u0275\u0275text(110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 35);
    \u0275\u0275element(112, "div", 42);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.record_velocidad_kmh) || 0, " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 36, (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_calorias) || 0, "1.0-0"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.formatDuration(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_segundos_jugados), " en pista");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(35, 39, (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.fc_promedio_general) || 0, "1.0-0"), " / ", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.fc_maxima_historica) || 0, " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate((ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("En ", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_sesiones) || 0, " sesiones sincronizadas");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes) || 0, " golpes");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_smash) || 0, " (", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_smash, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_smash, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_bandejas) || 0, " (", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_bandejas, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_bandejas, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_viboras) || 0, " (", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_viboras, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_viboras, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_voleas) || 0, " (", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_voleas, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_voleas, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_drives) || 0, " (", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_drives, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_drives, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_reves) || 0, " (", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_reves, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_reves, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", (ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_globos) || 0, " (", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_globos, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getStrokePercentage(ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_globos, ctx_r0.resumenAcumulado == null ? null : ctx_r0.resumenAcumulado.total_golpes), "%");
  }
}
function SmartwatchStatsPage_div_19_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275text(2, "\u231A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sin partidos registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Inicia un partido desde tu Apple Watch para medir tus golpes, velocidad y tanteador en vivo.");
    \u0275\u0275elementEnd()();
  }
}
function SmartwatchStatsPage_div_19_div_2_div_2_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", s_r3.club_nombre);
  }
}
function SmartwatchStatsPage_div_19_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function SmartwatchStatsPage_div_19_div_2_div_2_Template_div_click_0_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.verDetalle(s_r3));
    });
    \u0275\u0275elementStart(1, "div", 48)(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 51)(9, "div", 52)(10, "span", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 54);
    \u0275\u0275text(13, "Golpes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 52)(15, "span", 55);
    \u0275\u0275text(16);
    \u0275\u0275elementStart(17, "small");
    \u0275\u0275text(18, "km/h");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 54);
    \u0275\u0275text(20, "Vel. M\xE1x");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 52)(22, "span", 53);
    \u0275\u0275text(23);
    \u0275\u0275elementStart(24, "small");
    \u0275\u0275text(25, "bpm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "span", 54);
    \u0275\u0275text(27, "FC Media");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 52)(29, "span", 53);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 54);
    \u0275\u0275text(33, "Kcal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 56)(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, SmartwatchStatsPage_div_19_div_2_div_2_span_37_Template, 2, 1, "span", 12);
    \u0275\u0275elementStart(38, "span", 57);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, s_r3.tipo_actividad));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, s_r3.fecha_inicio, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r3.total_golpes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", s_r3.velocidad_max_kmh, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", s_r3.fc_promedio, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 14, s_r3.calorias_quemadas, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u23F1\uFE0F ", ctx_r0.formatDuration(s_r3.duracion_segundos));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r3.club_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u231A ", s_r3.dispositivo_modelo || "Apple Watch");
  }
}
function SmartwatchStatsPage_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, SmartwatchStatsPage_div_19_div_2_div_1_Template, 7, 0, "div", 43)(2, SmartwatchStatsPage_div_19_div_2_div_2_Template, 40, 17, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sesiones.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sesiones);
  }
}
function SmartwatchStatsPage_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 58)(2, "div", 59);
    \u0275\u0275element(3, "ion-icon", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Apple Watch & Padelblox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 61);
    \u0275\u0275text(7, "Sincroniza tus partidos, anota los puntos con vibraci\xF3n h\xE1ptica y analiza tu t\xE9cnica con sensores CoreMotion.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 62)(9, "div", 63)(10, "span");
    \u0275\u0275text(11, "Soporte de Smartwatch:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 63)(15, "span");
    \u0275\u0275text(16, "Reloj Enlazado (Bluetooth):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 64);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 63)(20, "span");
    \u0275\u0275text(21, "App PadelBlox Watch:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 64);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 65)(25, "h4");
    \u0275\u0275text(26, "\u{1F4CC} Instrucciones de Uso en Cancha:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ol")(28, "li");
    \u0275\u0275text(29, "Coloca el Apple Watch en la ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31, "mano dominante (mano de la pala)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " para una m\xE1xima precisi\xF3n en la detecci\xF3n de golpes y velocidad.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Abre ");
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36, "PadelBlox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " en tu Apple Watch e inicia el partido.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275text(39, "Toca en la pantalla para sumar puntos (+1) o usa el marcador de Punto de Oro.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "Al finalizar, presiona ");
    \u0275\u0275elementStart(42, "strong");
    \u0275\u0275text(43, "Guardar y Sincronizar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " para ver tu informe completo aqu\xED y en el club.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "button", 66);
    \u0275\u0275listener("click", function SmartwatchStatsPage_div_19_div_3_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.checkStatus());
    });
    \u0275\u0275text(46, " \u{1F504} Comprobar Conexi\xF3n con Apple Watch ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("badge-ok", ctx_r0.watchStatus.supported)("badge-warn", !ctx_r0.watchStatus.supported);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.watchStatus.supported ? "\u2713 Soportado" : "Simulador / Web", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-ok", ctx_r0.watchStatus.isPaired)("badge-warn", !ctx_r0.watchStatus.isPaired);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.watchStatus.isPaired ? "\u2713 Emparejado" : "No detectado", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-ok", ctx_r0.watchStatus.isWatchAppInstalled)("badge-warn", !ctx_r0.watchStatus.isWatchAppInstalled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.watchStatus.isWatchAppInstalled ? "\u2713 Instalada" : "Pendiente", " ");
  }
}
function SmartwatchStatsPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, SmartwatchStatsPage_div_19_div_1_Template, 113, 42, "div", 15)(2, SmartwatchStatsPage_div_19_div_2_Template, 3, 2, "div", 15)(3, SmartwatchStatsPage_div_19_div_3_Template, 47, 15, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "resumen");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "historial");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "conexion");
  }
}
var _SmartwatchStatsPage = class _SmartwatchStatsPage {
  constructor(smartwatchService, navCtrl) {
    this.smartwatchService = smartwatchService;
    this.navCtrl = navCtrl;
    this.watchStatus = {
      supported: false,
      isPaired: false,
      isWatchAppInstalled: false,
      isReachable: false
    };
    this.currentUser = null;
    this.loading = true;
    this.resumenAcumulado = null;
    this.sesiones = [];
    this.selectedSession = null;
    this.activeTab = "resumen";
  }
  ngOnInit() {
    this.loadUser();
    this.checkStatus();
    this.loadData();
  }
  loadUser() {
    const raw = localStorage.getItem("currentUser");
    if (raw) {
      try {
        this.currentUser = JSON.parse(raw);
      } catch (e) {
        console.error("Error parsing currentUser", e);
      }
    }
  }
  checkStatus() {
    return __async(this, null, function* () {
      this.watchStatus = yield this.smartwatchService.checkWatchConnection();
    });
  }
  loadData() {
    if (!this.currentUser || !this.currentUser.id) {
      this.loading = false;
      return;
    }
    this.loading = true;
    this.smartwatchService.getUserStats(this.currentUser.id, 25).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.resumenAcumulado = res.resumen_acumulado;
          this.sesiones = res.sesiones || [];
          if (this.sesiones.length > 0) {
            this.selectedSession = this.sesiones[0];
          }
        }
      },
      error: (err) => {
        this.loading = false;
        console.error("Error cargando estad\xEDsticas de Smartwatch:", err);
      }
    });
  }
  verDetalle(s) {
    this.selectedSession = s;
    this.activeTab = "resumen";
  }
  volver() {
    this.navCtrl.back();
  }
  formatDuration(seconds) {
    if (!seconds)
      return "0 min";
    const mins = Math.floor(seconds / 60);
    const hours = Math.floor(mins / 60);
    const remMins = mins % 60;
    if (hours > 0) {
      return `${hours}h ${remMins}m`;
    }
    return `${mins} min`;
  }
  getStrokePercentage(count, total) {
    if (!total || total === 0)
      return 0;
    return Math.round(count / total * 100);
  }
};
_SmartwatchStatsPage.\u0275fac = function SmartwatchStatsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmartwatchStatsPage)(\u0275\u0275directiveInject(SmartwatchService), \u0275\u0275directiveInject(NavController));
};
_SmartwatchStatsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartwatchStatsPage, selectors: [["app-smartwatch-stats"]], decls: 20, vars: 10, consts: [[1, "ion-no-border"], [1, "custom-toolbar"], ["slot", "start"], [1, "btn-back", 3, "click"], ["name", "arrow-back-outline"], ["slot", "end"], [3, "click", "disabled"], ["name", "refresh-outline"], [1, "tabs-bar"], [3, "click"], [1, "smartwatch-content"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], ["name", "crescent", "color", "primary"], ["class", "tab-content animate-fade", 4, "ngIf"], [1, "tab-content", "animate-fade"], [1, "kpi-grid"], [1, "kpi-card", "speed-card"], [1, "kpi-icon"], [1, "kpi-info"], [1, "label"], [1, "value"], [1, "subtext"], [1, "kpi-card", "calories-card"], [1, "kpi-card", "hr-card"], [1, "kpi-card", "strokes-card"], [1, "section-card"], [1, "section-header"], [1, "badge-total"], [1, "strokes-breakdown"], [1, "stroke-item"], [1, "stroke-info"], [1, "name"], [1, "count"], [1, "progress-bar"], [1, "progress-fill", "smash-fill"], [1, "progress-fill", "bandeja-fill"], [1, "progress-fill", "vibora-fill"], [1, "progress-fill", "volea-fill"], [1, "progress-fill", "drive-fill"], [1, "progress-fill", "reves-fill"], [1, "progress-fill", "globo-fill"], ["class", "empty-state", 4, "ngIf"], ["class", "match-session-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "empty-state"], [1, "icon"], [1, "match-session-card", 3, "click"], [1, "card-header"], [1, "activity-type"], [1, "date"], [1, "card-body"], [1, "stat-col"], [1, "val"], [1, "lbl"], [1, "val", "highlight"], [1, "card-footer"], [1, "device-tag"], [1, "watch-connection-card"], [1, "watch-icon-wrapper"], ["name", "watch-outline", 1, "watch-big-icon"], [1, "subtitle"], [1, "status-list"], [1, "status-row"], [1, "badge"], [1, "instructions-box"], [1, "btn-refresh-watch", 3, "click"]], template: function SmartwatchStatsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-button", 3);
    \u0275\u0275listener("click", function SmartwatchStatsPage_Template_ion_button_click_3_listener() {
      return ctx.volver();
    });
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6, "\u231A Apple Watch & Smartwatch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-buttons", 5)(8, "ion-button", 6);
    \u0275\u0275listener("click", function SmartwatchStatsPage_Template_ion_button_click_8_listener() {
      return ctx.loadData();
    });
    \u0275\u0275element(9, "ion-icon", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
    \u0275\u0275listener("click", function SmartwatchStatsPage_Template_button_click_11_listener() {
      return ctx.activeTab = "resumen";
    });
    \u0275\u0275text(12, " \u{1F4CA} Rendimiento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function SmartwatchStatsPage_Template_button_click_13_listener() {
      return ctx.activeTab = "historial";
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 9);
    \u0275\u0275listener("click", function SmartwatchStatsPage_Template_button_click_15_listener() {
      return ctx.activeTab = "conexion";
    });
    \u0275\u0275text(16, " \u2699\uFE0F Reloj ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "ion-content", 10);
    \u0275\u0275template(18, SmartwatchStatsPage_div_18_Template, 4, 0, "div", 11)(19, SmartwatchStatsPage_div_19_Template, 4, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.activeTab === "resumen");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeTab === "historial");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4C5} Partidos (", ctx.sesiones.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.activeTab === "conexion");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonSpinner, IonTitle, IonToolbar, UpperCasePipe, DecimalPipe, DatePipe], styles: ["\n\n.custom-toolbar[_ngcontent-%COMP%] {\n  --background: #0f172a;\n  --color: #ffffff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.custom-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: -0.3px;\n}\n.custom-toolbar[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  --color: #ffffff;\n  font-size: 1.2rem;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  background: #1e293b;\n  padding: 6px 12px;\n  gap: 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.tabs-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  padding: 8px 10px;\n  border-radius: 8px;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.tabs-bar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #06b6d4;\n  color: #0f172a;\n  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.3);\n}\n.smartwatch-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: #f8fafc;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-bottom: 6px;\n}\n.kpi-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 0.5px;\n}\n.kpi-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 900;\n  color: #ffffff;\n  margin: 2px 0;\n}\n.kpi-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.kpi-card[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.kpi-card.speed-card[_ngcontent-%COMP%] {\n  border-color: rgba(6, 182, 212, 0.3);\n}\n.kpi-card.speed-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #22d3ee;\n}\n.kpi-card.calories-card[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.kpi-card.calories-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.kpi-card.hr-card[_ngcontent-%COMP%] {\n  border-color: rgba(244, 63, 94, 0.3);\n}\n.kpi-card.hr-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #fb7185;\n}\n.kpi-card.strokes-card[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.kpi-card.strokes-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 18px;\n  padding: 18px;\n  margin-bottom: 20px;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .badge-total[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #22d3ee;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  border: 1px solid rgba(6, 182, 212, 0.2);\n}\n.strokes-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .stroke-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .stroke-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .stroke-info[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #0f172a;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.smash-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #ef4444);\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.bandeja-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #06b6d4,\n      #3b82f6);\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.vibora-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #f43f5e);\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.volea-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #059669);\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.drive-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.reves-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #d946ef);\n}\n.strokes-breakdown[_ngcontent-%COMP%]   .stroke-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.globo-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #64748b,\n      #94a3b8);\n}\n.match-session-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 16px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: transform 0.2s ease, border-color 0.2s ease;\n}\n.match-session-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(6, 182, 212, 0.4);\n}\n.match-session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .activity-type[_ngcontent-%COMP%] {\n  color: #22d3ee;\n  background: rgba(6, 182, 212, 0.15);\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.match-session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .stat-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .stat-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #ffffff;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .stat-col[_ngcontent-%COMP%]   .val.highlight[_ngcontent-%COMP%] {\n  color: #22d3ee;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .stat-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #94a3b8;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .stat-col[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.match-session-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .device-tag[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.watch-connection-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 24px;\n  text-align: center;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .watch-icon-wrapper[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  background: rgba(6, 182, 212, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .watch-icon-wrapper[_ngcontent-%COMP%]   .watch-big-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #22d3ee;\n}\n.watch-connection-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #ffffff;\n  margin: 0 0 6px;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.4;\n  margin-bottom: 20px;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .status-list[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .status-list[_ngcontent-%COMP%]   .status-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #cbd5e1;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .status-list[_ngcontent-%COMP%]   .status-row[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 800;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .status-list[_ngcontent-%COMP%]   .status-row[_ngcontent-%COMP%]   .badge.badge-ok[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #4ade80;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .status-list[_ngcontent-%COMP%]   .status-row[_ngcontent-%COMP%]   .badge.badge-warn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fbbf24;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .instructions-box[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border-radius: 12px;\n  padding: 16px;\n  text-align: left;\n  margin-bottom: 20px;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .instructions-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #22d3ee;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .instructions-box[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #94a3b8;\n  line-height: 1.4;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .instructions-box[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .btn-refresh-watch[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #3b82f6 100%);\n  color: #ffffff;\n  border: none;\n  padding: 14px;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.3);\n  transition: all 0.2s ease;\n}\n.watch-connection-card[_ngcontent-%COMP%]   .btn-refresh-watch[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0 0 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.4;\n  margin: 0;\n}\n.animate-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=smartwatch-stats.page.css.map */"] });
var SmartwatchStatsPage = _SmartwatchStatsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartwatchStatsPage, [{
    type: Component,
    args: [{ selector: "app-smartwatch-stats", standalone: true, imports: [CommonModule, FormsModule, IonicModule], template: `<ion-header class="ion-no-border">
  <ion-toolbar class="custom-toolbar">
    <ion-buttons slot="start">
      <ion-button (click)="volver()" class="btn-back">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>\u231A Apple Watch & Smartwatch</ion-title>
    <ion-buttons slot="end">
      <ion-button (click)="loadData()" [disabled]="loading">
        <ion-icon name="refresh-outline"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>

  <!-- Sub-Tabs -->
  <div class="tabs-bar">
    <button [class.active]="activeTab === 'resumen'" (click)="activeTab = 'resumen'">
      \u{1F4CA} Rendimiento
    </button>
    <button [class.active]="activeTab === 'historial'" (click)="activeTab = 'historial'">
      \u{1F4C5} Partidos ({{ sesiones.length }})
    </button>
    <button [class.active]="activeTab === 'conexion'" (click)="activeTab = 'conexion'">
      \u2699\uFE0F Reloj
    </button>
  </div>
</ion-header>

<ion-content class="smartwatch-content">
  <div *ngIf="loading" class="loading-state">
    <ion-spinner name="crescent" color="primary"></ion-spinner>
    <p>Cargando datos del Smartwatch...</p>
  </div>

  <div *ngIf="!loading">
    <!-- TAB 1: RESUMEN Y GOLPES -->
    <div *ngIf="activeTab === 'resumen'" class="tab-content animate-fade">
      <!-- Tarjeta de R\xE9cord y M\xE9tricas Clave -->
      <div class="kpi-grid">
        <div class="kpi-card speed-card">
          <div class="kpi-icon">\u26A1</div>
          <div class="kpi-info">
            <span class="label">R\xC9CORD DE VELOCIDAD</span>
            <span class="value">{{ resumenAcumulado?.record_velocidad_kmh || 0 }} <small>km/h</small></span>
            <span class="subtext">Smash m\xE1s potente registrado</span>
          </div>
        </div>

        <div class="kpi-card calories-card">
          <div class="kpi-icon">\u{1F525}</div>
          <div class="kpi-info">
            <span class="label">CALOR\xCDAS ACTIVAS</span>
            <span class="value">{{ resumenAcumulado?.total_calorias || 0 | number:'1.0-0' }} <small>kcal</small></span>
            <span class="subtext">{{ formatDuration(resumenAcumulado?.total_segundos_jugados) }} en pista</span>
          </div>
        </div>

        <div class="kpi-card hr-card">
          <div class="kpi-icon">\u2764\uFE0F</div>
          <div class="kpi-info">
            <span class="label">FC PROMEDIO / M\xC1X</span>
            <span class="value">{{ resumenAcumulado?.fc_promedio_general || 0 | number:'1.0-0' }} / {{ resumenAcumulado?.fc_maxima_historica || 0 }} <small>bpm</small></span>
            <span class="subtext">Intensidad en partido</span>
          </div>
        </div>

        <div class="kpi-card strokes-card">
          <div class="kpi-icon">\u{1F3BE}</div>
          <div class="kpi-info">
            <span class="label">TOTAL DE GOLPES</span>
            <span class="value">{{ resumenAcumulado?.total_golpes || 0 }}</span>
            <span class="subtext">En {{ resumenAcumulado?.total_sesiones || 0 }} sesiones sincronizadas</span>
          </div>
        </div>
      </div>

      <!-- Desglose T\xE9cnico de Golpes de P\xE1del -->
      <div class="section-card">
        <div class="section-header">
          <h3>\u{1F3AF} Distribuci\xF3n T\xE9cnica de Golpes</h3>
          <span class="badge-total">{{ resumenAcumulado?.total_golpes || 0 }} golpes</span>
        </div>

        <div class="strokes-breakdown">
          <!-- SMASH -->
          <div class="stroke-item">
            <div class="stroke-info">
              <span class="name">\u26A1 Smash / Remate</span>
              <span class="count">{{ resumenAcumulado?.total_smash || 0 }} ({{ getStrokePercentage(resumenAcumulado?.total_smash, resumenAcumulado?.total_golpes) }}%)</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill smash-fill" [style.width.%]="getStrokePercentage(resumenAcumulado?.total_smash, resumenAcumulado?.total_golpes)"></div>
            </div>
          </div>

          <!-- BANDEJA -->
          <div class="stroke-item">
            <div class="stroke-info">
              <span class="name">\u{1F32A}\uFE0F Bandeja</span>
              <span class="count">{{ resumenAcumulado?.total_bandejas || 0 }} ({{ getStrokePercentage(resumenAcumulado?.total_bandejas, resumenAcumulado?.total_golpes) }}%)</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill bandeja-fill" [style.width.%]="getStrokePercentage(resumenAcumulado?.total_bandejas, resumenAcumulado?.total_golpes)"></div>
            </div>
          </div>

          <!-- V\xCDBORA -->
          <div class="stroke-item">
            <div class="stroke-info">
              <span class="name">\u{1F525} V\xEDbora</span>
              <span class="count">{{ resumenAcumulado?.total_viboras || 0 }} ({{ getStrokePercentage(resumenAcumulado?.total_viboras, resumenAcumulado?.total_golpes) }}%)</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill vibora-fill" [style.width.%]="getStrokePercentage(resumenAcumulado?.total_viboras, resumenAcumulado?.total_golpes)"></div>
            </div>
          </div>

          <!-- VOLEAS -->
          <div class="stroke-item">
            <div class="stroke-info">
              <span class="name">\u{1F6E1}\uFE0F Voleas (Red)</span>
              <span class="count">{{ resumenAcumulado?.total_voleas || 0 }} ({{ getStrokePercentage(resumenAcumulado?.total_voleas, resumenAcumulado?.total_golpes) }}%)</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill volea-fill" [style.width.%]="getStrokePercentage(resumenAcumulado?.total_voleas, resumenAcumulado?.total_golpes)"></div>
            </div>
          </div>

          <!-- DRIVE -->
          <div class="stroke-item">
            <div class="stroke-info">
              <span class="name">\u{1F3BE} Drive (Derecha)</span>
              <span class="count">{{ resumenAcumulado?.total_drives || 0 }} ({{ getStrokePercentage(resumenAcumulado?.total_drives, resumenAcumulado?.total_golpes) }}%)</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill drive-fill" [style.width.%]="getStrokePercentage(resumenAcumulado?.total_drives, resumenAcumulado?.total_golpes)"></div>
            </div>
          </div>

          <!-- REV\xC9S -->
          <div class="stroke-item">
            <div class="stroke-info">
              <span class="name">\u21A9\uFE0F Rev\xE9s</span>
              <span class="count">{{ resumenAcumulado?.total_reves || 0 }} ({{ getStrokePercentage(resumenAcumulado?.total_reves, resumenAcumulado?.total_golpes) }}%)</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill reves-fill" [style.width.%]="getStrokePercentage(resumenAcumulado?.total_reves, resumenAcumulado?.total_golpes)"></div>
            </div>
          </div>

          <!-- GLOBO -->
          <div class="stroke-item">
            <div class="stroke-info">
              <span class="name">\u2601\uFE0F Globo</span>
              <span class="count">{{ resumenAcumulado?.total_globos || 0 }} ({{ getStrokePercentage(resumenAcumulado?.total_globos, resumenAcumulado?.total_golpes) }}%)</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill globo-fill" [style.width.%]="getStrokePercentage(resumenAcumulado?.total_globos, resumenAcumulado?.total_golpes)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: HISTORIAL DE PARTIDOS -->
    <div *ngIf="activeTab === 'historial'" class="tab-content animate-fade">
      <div *ngIf="sesiones.length === 0" class="empty-state">
        <div class="icon">\u231A</div>
        <h3>Sin partidos registrados</h3>
        <p>Inicia un partido desde tu Apple Watch para medir tus golpes, velocidad y tanteador en vivo.</p>
      </div>

      <div *ngFor="let s of sesiones" class="match-session-card" (click)="verDetalle(s)">
        <div class="card-header">
          <span class="activity-type">{{ s.tipo_actividad | uppercase }}</span>
          <span class="date">{{ s.fecha_inicio | date:'dd/MM/yyyy HH:mm' }}</span>
        </div>

        <div class="card-body">
          <div class="stat-col">
            <span class="val">{{ s.total_golpes }}</span>
            <span class="lbl">Golpes</span>
          </div>
          <div class="stat-col">
            <span class="val highlight">{{ s.velocidad_max_kmh }} <small>km/h</small></span>
            <span class="lbl">Vel. M\xE1x</span>
          </div>
          <div class="stat-col">
            <span class="val">{{ s.fc_promedio }} <small>bpm</small></span>
            <span class="lbl">FC Media</span>
          </div>
          <div class="stat-col">
            <span class="val">{{ s.calorias_quemadas | number:'1.0-0' }}</span>
            <span class="lbl">Kcal</span>
          </div>
        </div>

        <div class="card-footer">
          <span>\u23F1\uFE0F {{ formatDuration(s.duracion_segundos) }}</span>
          <span *ngIf="s.club_nombre">\u{1F4CD} {{ s.club_nombre }}</span>
          <span class="device-tag">\u231A {{ s.dispositivo_modelo || 'Apple Watch' }}</span>
        </div>
      </div>
    </div>

    <!-- TAB 3: ESTADO DEL RELOJ & CONEXI\xD3N -->
    <div *ngIf="activeTab === 'conexion'" class="tab-content animate-fade">
      <div class="watch-connection-card">
        <div class="watch-icon-wrapper">
          <ion-icon name="watch-outline" class="watch-big-icon"></ion-icon>
        </div>

        <h2>Apple Watch & Padelblox</h2>
        <p class="subtitle">Sincroniza tus partidos, anota los puntos con vibraci\xF3n h\xE1ptica y analiza tu t\xE9cnica con sensores CoreMotion.</p>

        <div class="status-list">
          <div class="status-row">
            <span>Soporte de Smartwatch:</span>
            <span class="badge" [class.badge-ok]="watchStatus.supported" [class.badge-warn]="!watchStatus.supported">
              {{ watchStatus.supported ? '\u2713 Soportado' : 'Simulador / Web' }}
            </span>
          </div>

          <div class="status-row">
            <span>Reloj Enlazado (Bluetooth):</span>
            <span class="badge" [class.badge-ok]="watchStatus.isPaired" [class.badge-warn]="!watchStatus.isPaired">
              {{ watchStatus.isPaired ? '\u2713 Emparejado' : 'No detectado' }}
            </span>
          </div>

          <div class="status-row">
            <span>App PadelBlox Watch:</span>
            <span class="badge" [class.badge-ok]="watchStatus.isWatchAppInstalled" [class.badge-warn]="!watchStatus.isWatchAppInstalled">
              {{ watchStatus.isWatchAppInstalled ? '\u2713 Instalada' : 'Pendiente' }}
            </span>
          </div>
        </div>

        <div class="instructions-box">
          <h4>\u{1F4CC} Instrucciones de Uso en Cancha:</h4>
          <ol>
            <li>Coloca el Apple Watch en la <strong>mano dominante (mano de la pala)</strong> para una m\xE1xima precisi\xF3n en la detecci\xF3n de golpes y velocidad.</li>
            <li>Abre <strong>PadelBlox</strong> en tu Apple Watch e inicia el partido.</li>
            <li>Toca en la pantalla para sumar puntos (+1) o usa el marcador de Punto de Oro.</li>
            <li>Al finalizar, presiona <strong>Guardar y Sincronizar</strong> para ver tu informe completo aqu\xED y en el club.</li>
          </ol>
        </div>

        <button class="btn-refresh-watch" (click)="checkStatus()">
          \u{1F504} Comprobar Conexi\xF3n con Apple Watch
        </button>
      </div>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/smartwatch-stats/smartwatch-stats.page.scss */\n.custom-toolbar {\n  --background: #0f172a;\n  --color: #ffffff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.custom-toolbar ion-title {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: -0.3px;\n}\n.custom-toolbar .btn-back {\n  --color: #ffffff;\n  font-size: 1.2rem;\n}\n.tabs-bar {\n  display: flex;\n  background: #1e293b;\n  padding: 6px 12px;\n  gap: 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.tabs-bar button {\n  flex: 1;\n  background: transparent;\n  border: none;\n  padding: 8px 10px;\n  border-radius: 8px;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.tabs-bar button.active {\n  background: #06b6d4;\n  color: #0f172a;\n  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.3);\n}\n.smartwatch-content {\n  --background: #0b1120;\n  --color: #f8fafc;\n}\n.tab-content {\n  padding: 16px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n.kpi-card .kpi-icon {\n  font-size: 1.4rem;\n  margin-bottom: 6px;\n}\n.kpi-card .label {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 0.5px;\n}\n.kpi-card .value {\n  font-size: 1.35rem;\n  font-weight: 900;\n  color: #ffffff;\n  margin: 2px 0;\n}\n.kpi-card .value small {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.kpi-card .subtext {\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.kpi-card.speed-card {\n  border-color: rgba(6, 182, 212, 0.3);\n}\n.kpi-card.speed-card .value {\n  color: #22d3ee;\n}\n.kpi-card.calories-card {\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.kpi-card.calories-card .value {\n  color: #f87171;\n}\n.kpi-card.hr-card {\n  border-color: rgba(244, 63, 94, 0.3);\n}\n.kpi-card.hr-card .value {\n  color: #fb7185;\n}\n.kpi-card.strokes-card {\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.kpi-card.strokes-card .value {\n  color: #4ade80;\n}\n.section-card {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 18px;\n  padding: 18px;\n  margin-bottom: 20px;\n}\n.section-card .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-card .section-header h3 {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0;\n}\n.section-card .section-header .badge-total {\n  background: #0f172a;\n  color: #22d3ee;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  border: 1px solid rgba(6, 182, 212, 0.2);\n}\n.strokes-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.strokes-breakdown .stroke-item .stroke-info {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.strokes-breakdown .stroke-item .stroke-info .name {\n  color: #e2e8f0;\n}\n.strokes-breakdown .stroke-item .stroke-info .count {\n  color: #94a3b8;\n}\n.strokes-breakdown .stroke-item .progress-bar {\n  height: 8px;\n  background: #0f172a;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.strokes-breakdown .stroke-item .progress-bar .progress-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.strokes-breakdown .stroke-item .progress-bar .progress-fill.smash-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #ef4444);\n}\n.strokes-breakdown .stroke-item .progress-bar .progress-fill.bandeja-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #06b6d4,\n      #3b82f6);\n}\n.strokes-breakdown .stroke-item .progress-bar .progress-fill.vibora-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #f43f5e);\n}\n.strokes-breakdown .stroke-item .progress-bar .progress-fill.volea-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #059669);\n}\n.strokes-breakdown .stroke-item .progress-bar .progress-fill.drive-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n}\n.strokes-breakdown .stroke-item .progress-bar .progress-fill.reves-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #d946ef);\n}\n.strokes-breakdown .stroke-item .progress-bar .progress-fill.globo-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #64748b,\n      #94a3b8);\n}\n.match-session-card {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 16px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: transform 0.2s ease, border-color 0.2s ease;\n}\n.match-session-card:hover {\n  transform: translateY(-2px);\n  border-color: rgba(6, 182, 212, 0.4);\n}\n.match-session-card .card-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n.match-session-card .card-header .activity-type {\n  color: #22d3ee;\n  background: rgba(6, 182, 212, 0.15);\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.match-session-card .card-header .date {\n  color: #94a3b8;\n}\n.match-session-card .card-body {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.match-session-card .card-body .stat-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.match-session-card .card-body .stat-col .val {\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #ffffff;\n}\n.match-session-card .card-body .stat-col .val.highlight {\n  color: #22d3ee;\n}\n.match-session-card .card-body .stat-col .val small {\n  font-size: 0.7rem;\n  color: #94a3b8;\n}\n.match-session-card .card-body .stat-col .lbl {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.match-session-card .card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.match-session-card .card-footer .device-tag {\n  color: #cbd5e1;\n}\n.watch-connection-card {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 24px;\n  text-align: center;\n}\n.watch-connection-card .watch-icon-wrapper {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  background: rgba(6, 182, 212, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.watch-connection-card .watch-icon-wrapper .watch-big-icon {\n  font-size: 2rem;\n  color: #22d3ee;\n}\n.watch-connection-card h2 {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #ffffff;\n  margin: 0 0 6px;\n}\n.watch-connection-card .subtitle {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.4;\n  margin-bottom: 20px;\n}\n.watch-connection-card .status-list {\n  background: #0f172a;\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n.watch-connection-card .status-list .status-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #cbd5e1;\n}\n.watch-connection-card .status-list .status-row .badge {\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 800;\n}\n.watch-connection-card .status-list .status-row .badge.badge-ok {\n  background: rgba(34, 197, 94, 0.2);\n  color: #4ade80;\n}\n.watch-connection-card .status-list .status-row .badge.badge-warn {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fbbf24;\n}\n.watch-connection-card .instructions-box {\n  background: #0f172a;\n  border-radius: 12px;\n  padding: 16px;\n  text-align: left;\n  margin-bottom: 20px;\n}\n.watch-connection-card .instructions-box h4 {\n  margin: 0 0 10px;\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #22d3ee;\n}\n.watch-connection-card .instructions-box ol {\n  margin: 0;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #94a3b8;\n  line-height: 1.4;\n}\n.watch-connection-card .instructions-box ol strong {\n  color: #e2e8f0;\n}\n.watch-connection-card .btn-refresh-watch {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #3b82f6 100%);\n  color: #ffffff;\n  border: none;\n  padding: 14px;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.3);\n  transition: all 0.2s ease;\n}\n.watch-connection-card .btn-refresh-watch:active {\n  transform: scale(0.98);\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n}\n.empty-state .icon {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.empty-state h3 {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0 0 6px;\n}\n.empty-state p {\n  font-size: 0.85rem;\n  line-height: 1.4;\n  margin: 0;\n}\n.animate-fade {\n  animation: fadeIn 0.3s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=smartwatch-stats.page.css.map */\n"] }]
  }], () => [{ type: SmartwatchService }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartwatchStatsPage, { className: "SmartwatchStatsPage", filePath: "src/app/pages/smartwatch-stats/smartwatch-stats.page.ts", lineNumber: 14 });
})();
export {
  SmartwatchStatsPage
};
//# sourceMappingURL=smartwatch-stats.page-QQJHBGOR.js.map

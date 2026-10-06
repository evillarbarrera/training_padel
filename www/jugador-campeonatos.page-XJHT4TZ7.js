import {
  HapticFeedbackService
} from "./chunk-U2YS67XA.js";
import "./chunk-2FGXCAFF.js";
import {
  AlertController,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  LoadingController,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  addCircleOutline,
  addIcons,
  arrowBack,
  arrowForwardOutline,
  calendarOutline,
  chatbubbleEllipsesOutline,
  checkmarkCircleOutline,
  checkmarkOutline,
  chevronDown,
  chevronForward,
  closeCircleOutline,
  closeOutline,
  eyeOutline,
  flameOutline,
  flashOutline,
  gitCompareOutline,
  heartOutline,
  listOutline,
  locationOutline,
  logoWhatsapp,
  mapOutline,
  peopleOutline,
  personAddOutline,
  personOutline,
  podiumOutline,
  ribbonOutline,
  searchOutline,
  shareOutline,
  shieldCheckmarkOutline,
  star,
  statsChartOutline,
  tennisballOutline,
  timeOutline,
  trophyOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import {
  environment
} from "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  Router,
  SelectControlValueAccessor,
  UpperCasePipe,
  setClassMetadata,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VZCO22FC.js";
import "./chunk-DMH43HQY.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-2WF3DFKV.js";
import "./chunk-62L7LOGO.js";
import "./chunk-RFMCWVQV.js";
import "./chunk-JLLM6G4B.js";
import "./chunk-EHXOAUIK.js";
import "./chunk-KAOERKNB.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/pages/jugador-campeonatos/jugador-campeonatos.page.ts
var _c0 = () => [0, 0.5, 0.85, 1];
var _c1 = () => [0, 0.5, 0.75, 1];
var _c2 = () => [0, 0.5, 0.8, 1];
var _c3 = () => [1, 2, 3];
function JugadorCampeonatosPage_div_3_div_20_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "div", 29);
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275element(4, "div", 31)(5, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275element(7, "div", 34)(8, "div", 35);
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_3_div_20_div_1_div_1_Template, 9, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c3));
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No est\xE1s inscrito en ning\xFAn torneo a\xFAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.mainView = "buscar");
    });
    \u0275\u0275text(5, "Buscar Torneos");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.misTorneosActivos.length);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.misTorneosHistorial.length);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_1_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.misTab = "historial");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Ver Historial de Torneos (", ctx_r1.misTorneosHistorial.length, ") ");
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_1_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.mainView = "buscar");
    });
    \u0275\u0275text(1, " Buscar Torneos ");
    \u0275\u0275elementEnd();
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "ion-icon", 40);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No tienes torneos en curso actualmente");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_1_button_4_Template, 2, 1, "button", 48)(5, JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_1_button_5_Template, 2, 0, "button", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.misTorneosHistorial.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.misTorneosHistorial.length === 0);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", t_r8.nombre_pareja);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 \u{1F3F7}\uFE0F ", t_r8.categoria_nombre || t_r8.categoria);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_2_Template_div_click_0_listener() {
      const t_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openMiTorneo(t_r8));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275element(10, "ion-icon", 56);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_2_span_14_Template, 2, 1, "span", 57)(15, JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_2_span_15_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 59)(17, "div", 60);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 61);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "ion-icon", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("animation-delay", i_r9 * 0.08 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("americano", t_r8.tipo_torneo === "americano" || t_r8.tipo_torneo === "Americano" || t_r8.tipo === "Americano")("liga", t_r8.tipo_torneo === "liga" || t_r8.tipo_torneo === "Liga" || t_r8.tipo === "Liga")("oficial", t_r8.tipo_torneo === "oficial");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r8.tipo_torneo === "americano" || t_r8.tipo_torneo === "Americano" || t_r8.tipo === "Americano" ? "AM" : t_r8.tipo_torneo === "liga" || t_r8.tipo_torneo === "Liga" || t_r8.tipo === "Liga" ? "LIGA" : "OF", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r8.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.club_nombre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 16, t_r8.fecha, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r8.nombre_pareja);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r8.categoria_nombre || t_r8.categoria);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTorneoStatusLabel(t_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (t_r8.partidos == null ? null : t_r8.partidos.length) || 0, " partidos");
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_1_Template, 6, 2, "div", 23)(2, JugadorCampeonatosPage_div_3_div_20_div_3_div_18_div_2_Template, 22, 19, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.misTorneosActivos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.misTorneosActivos);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "ion-icon", 43);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "A\xFAn no tienes torneos en el historial");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", t_r11.nombre_pareja);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 \u{1F3F7}\uFE0F ", t_r11.categoria_nombre || t_r11.categoria);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_2_Template_div_click_0_listener() {
      const t_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openMiTorneo(t_r11));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275element(10, "ion-icon", 56);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_2_span_14_Template, 2, 1, "span", 57)(15, JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_2_span_15_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 59)(17, "div", 68);
    \u0275\u0275text(18, "Finalizado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 61);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "ion-icon", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r12 * 0.08 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("americano", t_r11.tipo_torneo === "americano" || t_r11.tipo_torneo === "Americano" || t_r11.tipo === "Americano")("liga", t_r11.tipo_torneo === "liga" || t_r11.tipo_torneo === "Liga" || t_r11.tipo === "Liga")("oficial", t_r11.tipo_torneo === "oficial");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r11.tipo_torneo === "americano" || t_r11.tipo_torneo === "Americano" || t_r11.tipo === "Americano" ? "AM" : t_r11.tipo_torneo === "liga" || t_r11.tipo_torneo === "Liga" || t_r11.tipo === "Liga" ? "LIGA" : "OF", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r11.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r11.club_nombre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 15, t_r11.fecha, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r11.nombre_pareja);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r11.categoria_nombre || t_r11.categoria);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (t_r11.partidos == null ? null : t_r11.partidos.length) || 0, " partidos");
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "button", 70);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.loadMoreHistory());
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "ion-icon", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Ver m\xE1s historial (", ctx_r1.misTorneosHistorial.length - ctx_r1.historyLimit, " restantes) ");
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_1_Template, 4, 0, "div", 23)(2, JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_2_Template, 22, 18, "div", 65)(3, JugadorCampeonatosPage_div_3_div_20_div_3_div_19_div_3_Template, 4, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.misTorneosHistorial.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedHistorial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.historyLimit < ctx_r1.misTorneosHistorial.length);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_20_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", t_r15.nombre_pareja);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_20_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 \u{1F3F7}\uFE0F ", t_r15.categoria_nombre || t_r15.categoria);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_div_20_div_1_Template_div_click_0_listener() {
      const t_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openMiTorneo(t_r15));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275element(10, "ion-icon", 56);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JugadorCampeonatosPage_div_3_div_20_div_3_div_20_div_1_span_14_Template, 2, 1, "span", 57)(15, JugadorCampeonatosPage_div_3_div_20_div_3_div_20_div_1_span_15_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 59)(17, "div", 73);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 61);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "ion-icon", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("animation-delay", i_r16 * 0.08 + "s");
    \u0275\u0275classProp("historial", !ctx_r1.isTorneoActivo(t_r15));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("americano", t_r15.tipo_torneo === "americano" || t_r15.tipo_torneo === "Americano" || t_r15.tipo === "Americano")("liga", t_r15.tipo_torneo === "liga" || t_r15.tipo_torneo === "Liga" || t_r15.tipo === "Liga")("oficial", t_r15.tipo_torneo === "oficial");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r15.tipo_torneo === "americano" || t_r15.tipo_torneo === "Americano" || t_r15.tipo === "Americano" ? "AM" : t_r15.tipo_torneo === "liga" || t_r15.tipo_torneo === "Liga" || t_r15.tipo === "Liga" ? "LIGA" : "OF", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r15.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r15.club_nombre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 22, t_r15.fecha, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r15.nombre_pareja);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r15.categoria_nombre || t_r15.categoria);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("activo", ctx_r1.isTorneoActivo(t_r15))("cerrado", !ctx_r1.isTorneoActivo(t_r15));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isTorneoActivo(t_r15) ? ctx_r1.getTorneoStatusLabel(t_r15) : "Finalizado", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (t_r15.partidos == null ? null : t_r15.partidos.length) || 0, " partidos");
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_3_div_20_div_3_div_20_div_1_Template, 22, 25, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.misTorneos);
  }
}
function JugadorCampeonatosPage_div_3_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 38)(2, "div", 39);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.misTab = "activos");
    });
    \u0275\u0275element(3, "ion-icon", 40);
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5, "En Curso");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, JugadorCampeonatosPage_div_3_div_20_div_3_span_6_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.misTab = "historial");
    });
    \u0275\u0275element(8, "ion-icon", 43);
    \u0275\u0275elementStart(9, "span", 41);
    \u0275\u0275text(10, "Historial");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, JugadorCampeonatosPage_div_3_div_20_div_3_span_11_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 39);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_20_div_3_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.misTab = "todos");
    });
    \u0275\u0275element(13, "ion-icon", 20);
    \u0275\u0275elementStart(14, "span", 41);
    \u0275\u0275text(15, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 44);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, JugadorCampeonatosPage_div_3_div_20_div_3_div_18_Template, 3, 2, "div", 45)(19, JugadorCampeonatosPage_div_3_div_20_div_3_div_19_Template, 4, 3, "div", 45)(20, JugadorCampeonatosPage_div_3_div_20_div_3_div_20_Template, 2, 1, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.misTab === "activos");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.misTorneosActivos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.misTab === "historial");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.misTorneosHistorial.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.misTab === "todos");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.misTorneos.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.misTab === "activos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.misTab === "historial");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.misTab === "todos");
  }
}
function JugadorCampeonatosPage_div_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_3_div_20_div_1_Template, 2, 2, "div", 22)(2, JugadorCampeonatosPage_div_3_div_20_div_2_Template, 6, 0, "div", 23)(3, JugadorCampeonatosPage_div_3_div_20_div_3_Template, 21, 12, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingMisTorneos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingMisTorneos && ctx_r1.misTorneos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingMisTorneos && ctx_r1.misTorneos.length > 0);
  }
}
function JugadorCampeonatosPage_div_3_div_21_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r18 = ctx.$implicit;
    \u0275\u0275property("value", r_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r18);
  }
}
function JugadorCampeonatosPage_div_3_div_21_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("value", c_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19);
  }
}
function JugadorCampeonatosPage_div_3_div_21_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "div", 92)(2, "div", 93)(3, "div", 94);
    \u0275\u0275elementEnd();
  }
}
function JugadorCampeonatosPage_div_3_div_21_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_3_div_21_div_42_div_1_Template, 4, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c3));
  }
}
function JugadorCampeonatosPage_div_3_div_21_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "ion-icon", 96);
    \u0275\u0275elementStart(2, "p", 97);
    \u0275\u0275text(3, "No hay clubes con competiciones activas en esta selecci\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_3_div_21_div_44_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u{1F3C6} ", club_r21.numTorneos, " ", club_r21.numTorneos === 1 ? "Torneo" : "Torneos");
  }
}
function JugadorCampeonatosPage_div_3_div_21_div_44_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u{1F3C5} ", club_r21.numLigas, " ", club_r21.numLigas === 1 ? "Liga" : "Ligas");
  }
}
function JugadorCampeonatosPage_div_3_div_21_div_44_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u{1F3BE} ", club_r21.numAmericanos, " ", club_r21.numAmericanos === 1 ? "Americano" : "Americanos");
  }
}
function JugadorCampeonatosPage_div_3_div_21_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_21_div_44_Template_div_click_0_listener() {
      const club_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSelectClub(club_r21));
    });
    \u0275\u0275elementStart(1, "div", 99);
    \u0275\u0275element(2, "div", 100);
    \u0275\u0275elementStart(3, "div", 101)(4, "span", 102);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 103)(7, "div", 104)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 105);
    \u0275\u0275element(11, "ion-icon", 106);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "4.9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "p", 107);
    \u0275\u0275element(15, "ion-icon", 81);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 108);
    \u0275\u0275template(18, JugadorCampeonatosPage_div_3_div_21_div_44_span_18_Template, 2, 2, "span", 109)(19, JugadorCampeonatosPage_div_3_div_21_div_44_span_19_Template, 2, 2, "span", 110)(20, JugadorCampeonatosPage_div_3_div_21_div_44_span_20_Template, 2, 2, "span", 111);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const club_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + club_r21.logoUrl + ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" \u26A1 ", club_r21.totalCompeticiones, " ", club_r21.totalCompeticiones === 1 ? "ACTIVA" : "ACTIVAS", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(club_r21.nombre);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", club_r21.direccion, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", club_r21.numTorneos > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", club_r21.numLigas > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", club_r21.numAmericanos > 0);
  }
}
function JugadorCampeonatosPage_div_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 74)(2, "div", 75);
    \u0275\u0275element(3, "ion-icon", 76);
    \u0275\u0275elementStart(4, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCampeonatosPage_div_3_div_21_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedRegion, $event) || (ctx_r1.selectedRegion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function JugadorCampeonatosPage_div_3_div_21_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(5, "option", 78);
    \u0275\u0275text(6, "Regiones");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, JugadorCampeonatosPage_div_3_div_21_option_7_Template, 2, 2, "option", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "ion-icon", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 75);
    \u0275\u0275element(10, "ion-icon", 81);
    \u0275\u0275elementStart(11, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCampeonatosPage_div_3_div_21_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedComuna, $event) || (ctx_r1.selectedComuna = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function JugadorCampeonatosPage_div_3_div_21_Template_select_change_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(12, "option", 78);
    \u0275\u0275text(13, "Comunas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JugadorCampeonatosPage_div_3_div_21_option_14_Template, 2, 2, "option", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "ion-icon", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 82)(17, "div", 83);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_21_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedCompetitionFilter = "todos");
    });
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Todos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 83);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_21_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedCompetitionFilter = "torneo");
    });
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Torneos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 83);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_21_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedCompetitionFilter = "americano");
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "\u{1F3BE}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Americ. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 83);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_div_21_Template_div_click_29_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedCompetitionFilter = "liga");
    });
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "\u{1F3C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Ligas ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 84);
    \u0275\u0275element(34, "ion-icon", 21);
    \u0275\u0275elementStart(35, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCampeonatosPage_div_3_div_21_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 86)(37, "span");
    \u0275\u0275text(38, "CLUBES DISPONIBLES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 87);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 88);
    \u0275\u0275template(42, JugadorCampeonatosPage_div_3_div_21_div_42_Template, 2, 2, "div", 22)(43, JugadorCampeonatosPage_div_3_div_21_div_43_Template, 4, 0, "div", 89)(44, JugadorCampeonatosPage_div_3_div_21_div_44_Template, 21, 9, "div", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedRegion);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.regiones);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedComuna);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.comunas);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.selectedCompetitionFilter === "todos");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.selectedCompetitionFilter === "torneo");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.selectedCompetitionFilter === "americano");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.selectedCompetitionFilter === "liga");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.filteredClubes.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.filteredClubes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredClubes);
  }
}
function JugadorCampeonatosPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "div", 9);
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "p", 12);
    \u0275\u0275text(6, "DESCUBRE Y COMPITE,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 13);
    \u0275\u0275text(8, "CAMPEONATOS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15);
    \u0275\u0275element(11, "img", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18)(14, "div", 19);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_Template_div_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mainView = "mis-torneos");
    });
    \u0275\u0275element(15, "ion-icon", 20);
    \u0275\u0275text(16, " MIS TORNEOS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 19);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_3_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mainView = "buscar");
    });
    \u0275\u0275element(18, "ion-icon", 21);
    \u0275\u0275text(19, " BUSCAR ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, JugadorCampeonatosPage_div_3_div_20_Template, 4, 3, "div", 2)(21, JugadorCampeonatosPage_div_3_div_21_Template, 45, 17, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r1.heroBackground + ")");
    \u0275\u0275advance(10);
    \u0275\u0275property("src", ctx_r1.userPhoto, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.mainView === "mis-torneos");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.mainView === "buscar");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.mainView === "mis-torneos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mainView === "buscar");
  }
}
function JugadorCampeonatosPage_div_4_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F3BE} Tu Pareja: ", ctx_r1.getEnrolledPartnerName(), " ");
  }
}
function JugadorCampeonatosPage_div_4_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F3F7}\uFE0F ", ctx_r1.getEnrolledCategoryName(), " ");
  }
}
function JugadorCampeonatosPage_div_4_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_23_div_3_Template_div_click_0_listener() {
      const idx_r24 = \u0275\u0275restoreView(_r23).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectedCategoryIdx = idx_r24;
      return \u0275\u0275resetView(ctx_r1.selectedJornadaIdx = 0);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r25 = ctx.$implicit;
    const idx_r24 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.selectedCategoryIdx === idx_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r25.nombre || cat_r25.categoria || "Cat " + (idx_r24 + 1), " ");
  }
}
function JugadorCampeonatosPage_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "span", 144);
    \u0275\u0275text(2, "Categor\xEDas:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, JugadorCampeonatosPage_div_4_div_23_div_3_Template, 2, 3, "div", 145);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.displayCategorias);
  }
}
function JugadorCampeonatosPage_div_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147)(1, "div")(2, "span", 148);
    \u0275\u0275text(3, "Inscripciones Abiertas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 149);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 150)(7, "button", 151);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEnrollment(ctx_r1.selectedCompeticionDetail));
    });
    \u0275\u0275text(8, " \u26A1 Inscribirme ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompeticionDetail.precio > 0 ? ctx_r1.formatPrecio(ctx_r1.selectedCompeticionDetail.precio) + " / Pareja" : "Inscripci\xF3n Disponible");
  }
}
function JugadorCampeonatosPage_div_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "h3", 153);
    \u0275\u0275element(2, "ion-icon", 154);
    \u0275\u0275text(3, " Descripci\xF3n y Reglas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompeticionDetail.descripcion);
  }
}
function JugadorCampeonatosPage_div_4_div_26_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 173);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F3F7}\uFE0F ", ctx_r1.miTorneoProximo.categoria_nombre || ctx_r1.miTorneoProximo.categoria, " ");
  }
}
function JugadorCampeonatosPage_div_4_div_26_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CC} ", ctx_r1.miTorneoProximo.jornada_nombre || ctx_r1.miTorneoProximo.grupo_nombre || "Ronda " + ctx_r1.miTorneoProximo.ronda, " ");
  }
}
function JugadorCampeonatosPage_div_4_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 156)(1, "div", 157);
    \u0275\u0275element(2, "ion-icon", 158);
    \u0275\u0275text(3, " MI PR\xD3XIMO PARTIDO ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 159);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_26_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openH2HModal(ctx_r1.miTorneoProximo, "match"));
    });
    \u0275\u0275elementStart(5, "div", 160);
    \u0275\u0275template(6, JugadorCampeonatosPage_div_4_div_26_span_6_Template, 2, 1, "span", 161)(7, JugadorCampeonatosPage_div_4_div_26_span_7_Template, 2, 1, "span", 162);
    \u0275\u0275elementStart(8, "span", 163);
    \u0275\u0275text(9, " \u2694\uFE0F Ver H2H ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 164)(11, "div", 165)(12, "span", 166);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 167);
    \u0275\u0275text(15, "VS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 165)(17, "span", 166);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 168)(20, "div", 169)(21, "span", 170);
    \u0275\u0275element(22, "ion-icon", 56);
    \u0275\u0275text(23, " FECHA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 171);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 169)(27, "span", 170);
    \u0275\u0275element(28, "ion-icon", 43);
    \u0275\u0275text(29, " HORA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 171);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 172)(33, "span", 170);
    \u0275\u0275element(34, "ion-icon", 81);
    \u0275\u0275text(35, " CANCHA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 171);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.miTorneoProximo.categoria_nombre || ctx_r1.miTorneoProximo.categoria);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.miTorneoProximo.jornada_nombre || ctx_r1.miTorneoProximo.grupo_nombre || ctx_r1.miTorneoProximo.ronda);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getMatchTeamNames(ctx_r1.miTorneoProximo).team1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getMatchTeamNames(ctx_r1.miTorneoProximo).team2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getMatchFechaDisplay(ctx_r1.miTorneoProximo));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getMatchHoraDisplay(ctx_r1.miTorneoProximo));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getMatchCanchaDisplay(ctx_r1.miTorneoProximo));
  }
}
function JugadorCampeonatosPage_div_4_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentDetailCategory.inscritos.length);
  }
}
function JugadorCampeonatosPage_div_4_div_41_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getBuscandoParejaList().length);
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 186)(1, "div", 187)(2, "div", 188);
    \u0275\u0275text(3, "\u{1F91D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 189)(5, "h4");
    \u0275\u0275text(6, "\xBFNo tienes pareja para jugar?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Reg\xEDstrate como Agente Libre o haz dupla con un jugador disponible.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 190);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_div_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.inscribirComoAgenteLibre());
    });
    \u0275\u0275text(10, " + Anotarme ");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275element(1, "ion-icon", 197);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "A\xFAn no hay parejas inscritas confirmadas en esta categor\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_16_div_5_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 206);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u{1F3BE} ", p_r31.jugador1 || p_r31.p1_nom, " ", p_r31.jugador2 || p_r31.p2_nom ? " / " + (p_r31.jugador2 || p_r31.p2_nom) : "");
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_16_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 200);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_div_16_div_5_div_1_Template_div_click_0_listener() {
      const p_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openH2HModal(p_r31, "standing"));
    });
    \u0275\u0275elementStart(1, "div", 201);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 202)(4, "h4", 203);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, JugadorCampeonatosPage_div_4_div_41_div_16_div_5_div_1_p_6_Template, 2, 2, "p", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 205)(8, "span");
    \u0275\u0275text(9, "\u2694\uFE0F H2H");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("animation-delay", i_r32 * 0.04 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", (ctx_r1.paginaInscritosDetail - 1) * ctx_r1.itemsPorPaginaInscritosDetail + i_r32 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInscritoPairName(p_r31));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r31.jugador1 || p_r31.p1_nom);
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 198);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_4_div_41_div_16_div_5_div_1_Template, 10, 5, "div", 199);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.inscritosPaginadosDetail);
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 207)(1, "span", 208);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 209)(4, "button", 210);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_div_16_div_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cambiarPaginaInscritosDetail(ctx_r1.paginaInscritosDetail - 1));
    });
    \u0275\u0275text(5, " \u25C4 Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 210);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_div_16_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cambiarPaginaInscritosDetail(ctx_r1.paginaInscritosDetail + 1));
    });
    \u0275\u0275text(7, " Siguiente \u25BA ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r1.paginaInscritosDetail, " de ", ctx_r1.totalPaginasInscritosDetail);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.paginaInscritosDetail === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.paginaInscritosDetail === ctx_r1.totalPaginasInscritosDetail);
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 191);
    \u0275\u0275element(2, "ion-icon", 192);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, JugadorCampeonatosPage_div_4_div_41_div_16_div_4_Template, 4, 0, "div", 193)(5, JugadorCampeonatosPage_div_4_div_41_div_16_div_5_Template, 2, 1, "div", 194)(6, JugadorCampeonatosPage_div_4_div_41_div_16_div_6_Template, 8, 4, "div", 195);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" PAREJAS CONFIRMADAS (", (ctx_r1.currentDetailCategory == null ? null : ctx_r1.currentDetailCategory.nombre) || "General", ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscritosPaginadosDetail.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscritosPaginadosDetail.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPaginasInscritosDetail > 1);
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 214)(1, "div", 215);
    \u0275\u0275element(2, "ion-icon", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Sin jugadores en espera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No hay jugadores buscando compa\xF1ero por ahora. Si quieres jugar este torneo, an\xF3tate como Agente Libre para que otros te inviten.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 216);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_div_17_div_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.inscribirComoAgenteLibre());
    });
    \u0275\u0275element(8, "ion-icon", 217);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Anotarme en Busco Pareja");
    \u0275\u0275elementEnd()()();
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 234);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ag_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', ag_r35.mensaje, '"');
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 235);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ag_r35 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.unirseConAgenteLibre(ag_r35));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u{1F91D} Hacer Dupla e Inscribirnos");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 236)(1, "span", 237);
    \u0275\u0275text(2, "\u2705 Tu publicaci\xF3n activa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 238);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_div_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r37);
      const ag_r35 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.eliminarRegistroAgenteLibre(ag_r35));
    });
    \u0275\u0275element(4, "ion-icon", 239);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 220)(1, "div", 221)(2, "div", 222);
    \u0275\u0275element(3, "img", 223);
    \u0275\u0275elementStart(4, "div", 224)(5, "h4", 225);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 226)(8, "span", 227);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 228);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "span", 229);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_p_14_Template, 2, 1, "p", 230);
    \u0275\u0275elementStart(15, "div", 231);
    \u0275\u0275template(16, JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_button_16_Template, 3, 0, "button", 232)(17, JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_div_17_Template, 7, 0, "div", 233);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ag_r35 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ag_r35.avatar || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ag_r35.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Nivel ", ag_r35.nivel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F3BE} ", ag_r35.posicion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ag_r35.tiempo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ag_r35.mensaje);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isEnrolledInSelectedComp && !ag_r35.esUsuarioActual);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ag_r35.esUsuarioActual);
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 218);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_4_div_41_div_17_div_6_div_1_Template, 18, 8, "div", 219);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getBuscandoParejaList());
  }
}
function JugadorCampeonatosPage_div_4_div_41_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 191);
    \u0275\u0275element(2, "ion-icon", 211);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JugadorCampeonatosPage_div_4_div_41_div_17_div_5_Template, 11, 0, "div", 212)(6, JugadorCampeonatosPage_div_4_div_41_div_17_div_6_Template, 2, 1, "div", 213);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" JUGADORES DISPONIBLES EN ", \u0275\u0275pipeBind1(4, 3, (ctx_r1.currentDetailCategory == null ? null : ctx_r1.currentDetailCategory.nombre) || "ESTA CATEGOR\xCDA"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getBuscandoParejaList().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getBuscandoParejaList().length > 0);
  }
}
function JugadorCampeonatosPage_div_4_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 177)(2, "button", 178);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.subTabInscritos = "parejas");
    });
    \u0275\u0275elementStart(3, "span", 179);
    \u0275\u0275text(4, "\u{1F3BE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 180);
    \u0275\u0275text(6, "Parejas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 181);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 182);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_41_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.subTabInscritos = "busco_pareja");
    });
    \u0275\u0275elementStart(10, "span", 179);
    \u0275\u0275text(11, "\u{1F64B}\u200D\u2642\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 180);
    \u0275\u0275text(13, "Busco Pareja");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JugadorCampeonatosPage_div_4_div_41_span_14_Template, 2, 1, "span", 183);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, JugadorCampeonatosPage_div_4_div_41_div_15_Template, 11, 0, "div", 184)(16, JugadorCampeonatosPage_div_4_div_41_div_16_Template, 7, 4, "div", 24)(17, JugadorCampeonatosPage_div_4_div_41_div_17_Template, 7, 5, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.subTabInscritos === "parejas");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.listInscritosCategoryDetail.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.subTabInscritos === "busco_pareja");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.getBuscandoParejaList().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEnrolledInSelectedComp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subTabInscritos === "parejas");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subTabInscritos === "busco_pareja");
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 245)(1, "button", 246);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_42_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.soloMisPartidosFixture = true);
    });
    \u0275\u0275text(2, " Mis Partidos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 246);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_42_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.soloMisPartidosFixture = false);
    });
    \u0275\u0275text(4, " Ver Todos ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.soloMisPartidosFixture);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", !ctx_r1.soloMisPartidosFixture);
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 249);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_42_div_6_div_1_Template_div_click_0_listener() {
      const jIdx_r40 = \u0275\u0275restoreView(_r39).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectedJornadaIdx = jIdx_r40);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r41 = ctx.$implicit;
    const jIdx_r40 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.selectedJornadaIdx === jIdx_r40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", j_r41.nombre || "Semana " + (j_r41.numero_jornada || jIdx_r40 + 1), " ");
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 247);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_4_div_42_div_6_div_1_Template, 2, 3, "div", 248);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentDetailJornadas);
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_7_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No tienes partidos programados en esta jornada.");
    \u0275\u0275elementEnd();
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_7_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No hay partidos programados para esta fecha/jornada.");
    \u0275\u0275elementEnd();
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_7_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 251);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_42_div_7_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.soloMisPartidosFixture = false);
    });
    \u0275\u0275text(1, " \u{1F441}\uFE0F Ver todos los partidos de la jornada ");
    \u0275\u0275elementEnd();
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_4_div_42_div_7_p_1_Template, 2, 0, "p", 24)(2, JugadorCampeonatosPage_div_4_div_42_div_7_p_2_Template, 2, 0, "p", 24)(3, JugadorCampeonatosPage_div_4_div_42_div_7_button_3_Template, 2, 0, "button", 250);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.soloMisPartidosFixture && (ctx_r1.currentDetailJornada == null ? null : ctx_r1.currentDetailJornada.partidos == null ? null : ctx_r1.currentDetailJornada.partidos.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.soloMisPartidosFixture || !(ctx_r1.currentDetailJornada == null ? null : ctx_r1.currentDetailJornada.partidos) || ctx_r1.currentDetailJornada.partidos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.soloMisPartidosFixture && (ctx_r1.currentDetailJornada == null ? null : ctx_r1.currentDetailJornada.partidos == null ? null : ctx_r1.currentDetailJornada.partidos.length) > 0);
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_8_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 265);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r44 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMatchScore(m_r44), " ");
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_8_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 266);
    \u0275\u0275text(1, " VS ");
    \u0275\u0275elementEnd();
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 254);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_42_div_8_div_1_Template_div_click_0_listener() {
      const m_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openH2HModal(m_r44, "match"));
    });
    \u0275\u0275elementStart(1, "div", 255);
    \u0275\u0275element(2, "div", 256);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 257)(4, "div", 258)(5, "span", 259);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, JugadorCampeonatosPage_div_4_div_42_div_8_div_1_span_7_Template, 2, 1, "span", 260)(8, JugadorCampeonatosPage_div_4_div_42_div_8_div_1_span_8_Template, 2, 0, "span", 261);
    \u0275\u0275elementStart(9, "span", 262);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 263)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 264)(19, "span");
    \u0275\u0275text(20, "\u2694\uFE0F H2H");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const m_r44 = ctx.$implicit;
    const i_r45 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("animation-delay", i_r45 * 0.05 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("jugado", m_r44.estado === "Jugado" || m_r44.estado === "Walkover");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getMatchTeamNames(m_r44).team1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r44.estado === "Jugado" || m_r44.estado === "Walkover" || m_r44.resultado_t1 !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r44.estado !== "Jugado" && m_r44.estado !== "Walkover" && m_r44.resultado_t1 === null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getMatchTeamNames(m_r44).team2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r1.getMatchCanchaDisplay(m_r44));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", ctx_r1.getMatchFechaDisplay(m_r44));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u23F0 ", ctx_r1.getMatchHoraDisplay(m_r44));
    \u0275\u0275advance();
    \u0275\u0275classProp("win", m_r44.estado === "Jugado");
  }
}
function JugadorCampeonatosPage_div_4_div_42_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 252);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_4_div_42_div_8_div_1_Template, 21, 13, "div", 253);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredDetailJornadaPartidos);
  }
}
function JugadorCampeonatosPage_div_4_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 240)(2, "div", 191);
    \u0275\u0275element(3, "ion-icon", 241);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JugadorCampeonatosPage_div_4_div_42_div_5_Template, 5, 4, "div", 242);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, JugadorCampeonatosPage_div_4_div_42_div_6_Template, 2, 1, "div", 243)(7, JugadorCampeonatosPage_div_4_div_42_div_7_Template, 4, 3, "div", 193)(8, JugadorCampeonatosPage_div_4_div_42_div_8_Template, 2, 1, "div", 244);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" FIXTURE - ", (ctx_r1.currentDetailCategory == null ? null : ctx_r1.currentDetailCategory.nombre) || "General", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEnrolledInSelectedComp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentDetailJornadas.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredDetailJornadaPartidos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredDetailJornadaPartidos.length > 0);
  }
}
function JugadorCampeonatosPage_div_4_div_43_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "p");
    \u0275\u0275text(2, "No se han registrado posiciones a\xFAn para esta categor\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_4_div_43_div_5_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 277);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_div_43_div_5_tr_19_Template_tr_click_0_listener() {
      const pos_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openH2HModal(pos_r47, "standing"));
    });
    \u0275\u0275elementStart(1, "td", 271)(2, "span", 278);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 272)(5, "span", 279);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 273);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 280);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 281);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 274);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 275);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pos_r47 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("gold", pos_r47.posicion === 1)("silver", pos_r47.posicion === 2)("bronze", pos_r47.posicion === 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pos_r47.posicion === 1 ? "\u{1F947}" : pos_r47.posicion === 2 ? "\u{1F948}" : pos_r47.posicion === 3 ? "\u{1F949}" : pos_r47.posicion, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getStandingPairName(pos_r47));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pos_r47.pj);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pos_r47.pg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pos_r47.pp);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pos_r47.puntos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pos_r47.dif_games > 0 ? "+" + pos_r47.dif_games : pos_r47.dif_games);
  }
}
function JugadorCampeonatosPage_div_4_div_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 269)(1, "table", 270)(2, "thead")(3, "tr")(4, "th", 271);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 272);
    \u0275\u0275text(7, "Pareja / Jugador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 273);
    \u0275\u0275text(9, "PJ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 273);
    \u0275\u0275text(11, "PG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 273);
    \u0275\u0275text(13, "PP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 274);
    \u0275\u0275text(15, "PTS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 275);
    \u0275\u0275text(17, "DIF G");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, JugadorCampeonatosPage_div_4_div_43_div_5_tr_19_Template, 17, 13, "tr", 276);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.currentDetailCategory.tabla_posiciones);
  }
}
function JugadorCampeonatosPage_div_4_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 191);
    \u0275\u0275element(2, "ion-icon", 267);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, JugadorCampeonatosPage_div_4_div_43_div_4_Template, 3, 0, "div", 193)(5, JugadorCampeonatosPage_div_4_div_43_div_5_Template, 20, 1, "div", 268);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" TABLA DE POSICIONES - ", (ctx_r1.currentDetailCategory == null ? null : ctx_r1.currentDetailCategory.nombre) || "General", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.currentDetailCategory == null ? null : ctx_r1.currentDetailCategory.tabla_posiciones) || ctx_r1.currentDetailCategory.tabla_posiciones.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentDetailCategory == null ? null : ctx_r1.currentDetailCategory.tabla_posiciones) && ctx_r1.currentDetailCategory.tabla_posiciones.length > 0);
  }
}
function JugadorCampeonatosPage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 115);
    \u0275\u0275element(2, "div", 116);
    \u0275\u0275elementStart(3, "div", 117)(4, "div", 118)(5, "div", 119)(6, "span", 120);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 121)(9, "button", 122);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareCompeticionDetalle());
    });
    \u0275\u0275element(10, "ion-icon", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 124);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(12, "ion-icon", 125);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "h1");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 126);
    \u0275\u0275template(18, JugadorCampeonatosPage_div_4_span_18_Template, 2, 1, "span", 127)(19, JugadorCampeonatosPage_div_4_span_19_Template, 2, 1, "span", 128);
    \u0275\u0275elementStart(20, "span", 129);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 130);
    \u0275\u0275template(23, JugadorCampeonatosPage_div_4_div_23_Template, 4, 1, "div", 131)(24, JugadorCampeonatosPage_div_4_div_24_Template, 9, 1, "div", 132)(25, JugadorCampeonatosPage_div_4_div_25_Template, 6, 1, "div", 133)(26, JugadorCampeonatosPage_div_4_div_26_Template, 38, 7, "div", 134);
    \u0275\u0275elementStart(27, "div", 135)(28, "div", 136);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_Template_div_click_28_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.compDetailTab = "inscritos");
    });
    \u0275\u0275element(29, "ion-icon", 137);
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "INSCRITOS");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, JugadorCampeonatosPage_div_4_span_32_Template, 2, 1, "span", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 136);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.compDetailTab = "fixture");
    });
    \u0275\u0275element(34, "ion-icon", 56);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "FIXTURE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 136);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_4_Template_div_click_37_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.compDetailTab = "posiciones");
    });
    \u0275\u0275element(38, "ion-icon", 139);
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "POSICIONES");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, JugadorCampeonatosPage_div_4_div_41_Template, 18, 9, "div", 140)(42, JugadorCampeonatosPage_div_4_div_42_Template, 9, 5, "div", 140)(43, JugadorCampeonatosPage_div_4_div_43_Template, 6, 3, "div", 140);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("americano", ctx_r1.selectedCompeticionDetail.tipo === "americano" || ctx_r1.selectedCompeticionDetail.tipo === "Americano")("liga", ctx_r1.selectedCompeticionDetail.tipo === "liga" || ctx_r1.selectedCompeticionDetail.tipo === "Liga");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCompeticionDetail.tipo === "americano" || ctx_r1.selectedCompeticionDetail.tipo === "Americano" ? "AMERICANO" : ctx_r1.selectedCompeticionDetail.tipo === "liga" || ctx_r1.selectedCompeticionDetail.tipo === "Liga" ? "LIGA DE P\xC1DEL" : "TORNEO OFICIAL", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompeticionDetail.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u{1F4CD} ", ctx_r1.selectedCompeticionDetail.club_nombre, " \u2022 \u{1F4C5} ", ctx_r1.selectedCompeticionDetail.fecha_display);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEnrolledInSelectedComp && ctx_r1.getEnrolledPartnerName());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getEnrolledCategoryName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F465} ", ctx_r1.getInscritosDisplay(ctx_r1.selectedCompeticionDetail), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.displayCategorias && ctx_r1.displayCategorias.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEnrolledInSelectedComp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCompeticionDetail.descripcion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEnrolledInSelectedComp && ctx_r1.selectedMiTorneo && ctx_r1.miTorneoProximo);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.compDetailTab === "inscritos");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentDetailCategory == null ? null : ctx_r1.currentDetailCategory.inscritos);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.compDetailTab === "fixture");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.compDetailTab === "posiciones");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.compDetailTab === "inscritos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.compDetailTab === "fixture");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.compDetailTab === "posiciones");
  }
}
function JugadorCampeonatosPage_div_5_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "ion-icon", 40);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No hay americanos programados");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_5_div_19_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 310);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r50 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatPrecio(t_r50.precio));
  }
}
function JugadorCampeonatosPage_div_5_div_19_div_7_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 311);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r50 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3F7}\uFE0F ", t_r50.categoria || t_r50.categoria_nombre);
  }
}
function JugadorCampeonatosPage_div_5_div_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 296)(1, "div", 297)(2, "div", 298)(3, "span", 299);
    \u0275\u0275text(4, "AMERICANO");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JugadorCampeonatosPage_div_5_div_19_div_7_span_5_Template, 2, 1, "span", 300);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4", 301);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 302);
    \u0275\u0275template(9, JugadorCampeonatosPage_div_5_div_19_div_7_span_9_Template, 2, 1, "span", 303);
    \u0275\u0275elementStart(10, "span", 304);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 305)(13, "div", 306);
    \u0275\u0275element(14, "ion-icon", 56);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 307)(19, "button", 308);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_div_19_div_7_Template_button_click_19_listener() {
      const t_r50 = \u0275\u0275restoreView(_r49).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCompeticionDetail(t_r50));
    });
    \u0275\u0275text(20, "DETALLES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 309);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_div_19_div_7_Template_button_click_21_listener() {
      const t_r50 = \u0275\u0275restoreView(_r49).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEnrollment(t_r50));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r50 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.formatPrecio(t_r50.precio));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r50.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r50.categoria || t_r50.categoria_nombre);
    \u0275\u0275advance();
    \u0275\u0275classProp("full", ctx_r1.isCompFull(t_r50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F465} ", ctx_r1.getInscritosDisplay(t_r50), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(17, 14, t_r50.fecha, "dd MMM, yyyy"), " \u2022 ", (t_r50.hora_inicio || "00:00").slice(0, 5), " HRS");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("opacity", ctx_r1.isEnrolledInComp(t_r50) || ctx_r1.isCompFull(t_r50) ? "0.5" : "1")("cursor", ctx_r1.isEnrolledInComp(t_r50) || ctx_r1.isCompFull(t_r50) ? "not-allowed" : "pointer");
    \u0275\u0275property("disabled", ctx_r1.isEnrolledInComp(t_r50) || ctx_r1.isCompFull(t_r50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEnrolledInComp(t_r50) ? "INSCRITO" : ctx_r1.isCompFull(t_r50) ? "LLENO" : "INSCRIPCI\xD3N", " ");
  }
}
function JugadorCampeonatosPage_div_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 292);
    \u0275\u0275text(2, "PR\xD3XIMOS AMERICANOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 293);
    \u0275\u0275text(4, "Inscr\xEDbete y compite en el formato m\xE1s din\xE1mico");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JugadorCampeonatosPage_div_5_div_19_div_5_Template, 4, 0, "div", 23);
    \u0275\u0275elementStart(6, "div", 294);
    \u0275\u0275template(7, JugadorCampeonatosPage_div_5_div_19_div_7_Template, 23, 17, "div", 295);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.americanosList.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.americanosList);
  }
}
function JugadorCampeonatosPage_div_5_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No hay torneos activos para inscripci\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_5_div_20_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 314);
  }
  if (rf & 2) {
    const t_r52 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-image", "url(" + (t_r52.poster_url || t_r52.imagen_url) + ")");
  }
}
function JugadorCampeonatosPage_div_5_div_20_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 310);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r52 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatPrecio(t_r52.precio));
  }
}
function JugadorCampeonatosPage_div_5_div_20_div_7_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 311);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r52 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3F7}\uFE0F ", t_r52.categoria_nombre || t_r52.categoria);
  }
}
function JugadorCampeonatosPage_div_5_div_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 296);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_5_div_20_div_7_div_1_Template, 1, 2, "div", 312);
    \u0275\u0275elementStart(2, "div", 297)(3, "div", 298)(4, "span", 313);
    \u0275\u0275text(5, "TORNEO");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, JugadorCampeonatosPage_div_5_div_20_div_7_span_6_Template, 2, 1, "span", 300);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 301);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 302);
    \u0275\u0275template(10, JugadorCampeonatosPage_div_5_div_20_div_7_span_10_Template, 2, 1, "span", 303);
    \u0275\u0275elementStart(11, "span", 304);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 305)(14, "div", 306);
    \u0275\u0275element(15, "ion-icon", 56);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 307)(21, "button", 308);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_div_20_div_7_Template_button_click_21_listener() {
      const t_r52 = \u0275\u0275restoreView(_r51).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCompeticionDetail(t_r52));
    });
    \u0275\u0275text(22, "DETALLES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 309);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_div_20_div_7_Template_button_click_23_listener() {
      const t_r52 = \u0275\u0275restoreView(_r51).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEnrollment(t_r52));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r52 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r52.poster_url || t_r52.imagen_url);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.formatPrecio(t_r52.precio));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r52.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r52.categoria_nombre || t_r52.categoria);
    \u0275\u0275advance();
    \u0275\u0275classProp("full", ctx_r1.isCompFull(t_r52));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F465} ", ctx_r1.getInscritosDisplay(t_r52), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r52.fecha_display || \u0275\u0275pipeBind2(18, 14, t_r52.fecha_inicio, "dd MMM") + " - " + \u0275\u0275pipeBind2(19, 17, t_r52.fecha_fin, "dd MMM"));
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("opacity", ctx_r1.isEnrolledInComp(t_r52) || ctx_r1.isCompFull(t_r52) ? "0.5" : "1")("cursor", ctx_r1.isEnrolledInComp(t_r52) || ctx_r1.isCompFull(t_r52) ? "not-allowed" : "pointer");
    \u0275\u0275property("disabled", ctx_r1.isEnrolledInComp(t_r52) || ctx_r1.isCompFull(t_r52));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEnrolledInComp(t_r52) ? "INSCRITO" : ctx_r1.isCompFull(t_r52) ? "LLENO" : "INSCRIPCI\xD3N", " ");
  }
}
function JugadorCampeonatosPage_div_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 292);
    \u0275\u0275text(2, "TORNEOS OFICIALES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 293);
    \u0275\u0275text(4, "Suma puntos para el ranking de la academia");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JugadorCampeonatosPage_div_5_div_20_div_5_Template, 4, 0, "div", 23);
    \u0275\u0275elementStart(6, "div", 294);
    \u0275\u0275template(7, JugadorCampeonatosPage_div_5_div_20_div_7_Template, 25, 20, "div", 295);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.torneosList.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.torneosList);
  }
}
function JugadorCampeonatosPage_div_5_div_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "ion-icon", 315);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No hay ligas activas para inscripci\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_div_5_div_21_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 314);
  }
  if (rf & 2) {
    const l_r54 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-image", "url(" + (l_r54.imagen_url || l_r54.imagen || l_r54.poster_url) + ")");
  }
}
function JugadorCampeonatosPage_div_5_div_21_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 310);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r54 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatPrecio(l_r54.precio));
  }
}
function JugadorCampeonatosPage_div_5_div_21_div_7_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 311);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r54 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3F7}\uFE0F ", l_r54.categoria_nombre || l_r54.categoria);
  }
}
function JugadorCampeonatosPage_div_5_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 296);
    \u0275\u0275template(1, JugadorCampeonatosPage_div_5_div_21_div_7_div_1_Template, 1, 2, "div", 312);
    \u0275\u0275elementStart(2, "div", 297)(3, "div", 298)(4, "span", 316);
    \u0275\u0275text(5, "LIGA");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, JugadorCampeonatosPage_div_5_div_21_div_7_span_6_Template, 2, 1, "span", 300);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 301);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 302);
    \u0275\u0275template(10, JugadorCampeonatosPage_div_5_div_21_div_7_span_10_Template, 2, 1, "span", 303);
    \u0275\u0275elementStart(11, "span", 304);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 305)(14, "div", 306);
    \u0275\u0275element(15, "ion-icon", 56);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 307)(21, "button", 308);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_div_21_div_7_Template_button_click_21_listener() {
      const l_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCompeticionDetail(l_r54));
    });
    \u0275\u0275text(22, "DETALLES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 309);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_div_21_div_7_Template_button_click_23_listener() {
      const l_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEnrollment(l_r54));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const l_r54 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", l_r54.imagen_url || l_r54.imagen || l_r54.poster_url);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.formatPrecio(l_r54.precio));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r54.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", l_r54.categoria_nombre || l_r54.categoria);
    \u0275\u0275advance();
    \u0275\u0275classProp("full", ctx_r1.isCompFull(l_r54));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F465} ", ctx_r1.getInscritosDisplay(l_r54), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(l_r54.fecha_display || \u0275\u0275pipeBind2(18, 14, l_r54.fecha_inicio, "dd MMM") + " - " + \u0275\u0275pipeBind2(19, 17, l_r54.fecha_fin, "dd MMM"));
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("opacity", ctx_r1.isEnrolledInComp(l_r54) || ctx_r1.isCompFull(l_r54) ? "0.5" : "1")("cursor", ctx_r1.isEnrolledInComp(l_r54) || ctx_r1.isCompFull(l_r54) ? "not-allowed" : "pointer");
    \u0275\u0275property("disabled", ctx_r1.isEnrolledInComp(l_r54) || ctx_r1.isCompFull(l_r54));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEnrolledInComp(l_r54) ? "INSCRITO" : ctx_r1.isCompFull(l_r54) ? "LLENO" : "INSCRIPCI\xD3N", " ");
  }
}
function JugadorCampeonatosPage_div_5_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 292);
    \u0275\u0275text(2, "LIGAS DE P\xC1DEL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 293);
    \u0275\u0275text(4, "Compite semana a semana y clasifica a Playoffs");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JugadorCampeonatosPage_div_5_div_21_div_5_Template, 4, 0, "div", 23);
    \u0275\u0275elementStart(6, "div", 294);
    \u0275\u0275template(7, JugadorCampeonatosPage_div_5_div_21_div_7_Template, 25, 20, "div", 295);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.ligasClubList.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.ligasClubList);
  }
}
function JugadorCampeonatosPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 282);
    \u0275\u0275element(2, "div", 283);
    \u0275\u0275elementStart(3, "div", 284);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(4, "ion-icon", 285);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 286)(6, "div", 287)(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-icon", 288);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_Template_ion_icon_click_9_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareClub());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 289);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 290)(13, "div", 291);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedTab = "americanos");
    });
    \u0275\u0275text(14, " AMERICANOS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 291);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedTab = "torneos");
    });
    \u0275\u0275text(16, " TORNEOS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 291);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_div_5_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedTab = "ligas");
    });
    \u0275\u0275text(18, " LIGAS ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, JugadorCampeonatosPage_div_5_div_19_Template, 8, 2, "div", 2)(20, JugadorCampeonatosPage_div_5_div_20_Template, 8, 2, "div", 2)(21, JugadorCampeonatosPage_div_5_div_21_Template, 8, 2, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + (ctx_r1.selectedClub.logoUrl || ctx_r1.defaultClubImage) + "), url(assets/fondo-cancha.png)");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedClub.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedClub.direccion);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedTab === "americanos");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedTab === "torneos");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedTab === "ligas");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "americanos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "torneos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "ligas");
  }
}
function JugadorCampeonatosPage_ng_template_7_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "div", 344)(2, "span", 345);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 346);
    \u0275\u0275text(5, "Balance Hist\xF3rico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 347);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 348);
    \u0275\u0275element(9, "div", 349);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 350)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedH2HData.myWinRate, "% Victorias");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedH2HData.rivalWinRate, "% Victorias");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.selectedH2HData.myWinRate + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedH2HData.myGames, " Games ganados");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedH2HData.rivalGames, " Games ganados");
  }
}
function JugadorCampeonatosPage_ng_template_7_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 351)(1, "div", 338);
    \u0275\u0275text(2, " \u{1F4CA} Rendimiento del Rival en esta Categor\xEDa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 352)(4, "div", 353)(5, "span", 354);
    \u0275\u0275text(6, "PUESTO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 355);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 353)(10, "span", 354);
    \u0275\u0275text(11, "JUGADOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 355);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 353)(15, "span", 354);
    \u0275\u0275text(16, "GANADOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 356);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 353)(20, "span", 354);
    \u0275\u0275text(21, "PERDIDOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 357);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 353)(25, "span", 354);
    \u0275\u0275text(26, "DIF G");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 358);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("#", ctx_r1.selectedH2HData.standing.posicion);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedH2HData.standing.pj);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedH2HData.standing.pg);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedH2HData.standing.pp);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedH2HData.standing.dif_games);
  }
}
function JugadorCampeonatosPage_ng_template_7_div_1_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 361)(1, "div")(2, "div", 362);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 363);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 364)(7, "span", 365);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 366);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const hm_r56 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hm_r56.torneo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u{1F4C5} ", hm_r56.fecha, " \u2022 \u23F1\uFE0F ", hm_r56.duracion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hm_r56.resultado);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", hm_r56.ganador === "myTeam" ? "#059669" : "#dc2626");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", hm_r56.ganador === "myTeam" ? "\u2713 Victoria" : "\u2717 Derrota", " ");
  }
}
function JugadorCampeonatosPage_ng_template_7_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 359);
    \u0275\u0275template(1, JugadorCampeonatosPage_ng_template_7_div_1_div_35_div_1_Template, 11, 7, "div", 360);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedH2HData.historialMatches);
  }
}
function JugadorCampeonatosPage_ng_template_7_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 367)(1, "span", 368);
    \u0275\u0275text(2, "\u2694\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 369);
    \u0275\u0275text(4, "Primer Duelo Directo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 370);
    \u0275\u0275text(6, " No registran partidos previos jugados entre s\xED en esta competici\xF3n. ");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCampeonatosPage_ng_template_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 319);
    \u0275\u0275element(1, "div", 320);
    \u0275\u0275elementStart(2, "div", 321)(3, "div", 121)(4, "span", 322);
    \u0275\u0275text(5, "\u2694\uFE0F HEAD TO HEAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 323);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-icon", 324);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_7_div_1_Template_ion_icon_click_8_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeH2HModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 325)(10, "div", 326)(11, "div", 327)(12, "div", 328);
    \u0275\u0275text(13, " \u{1F3BE} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h4", 329);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 330);
    \u0275\u0275text(17, "Tu Dupla");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 331)(19, "span", 332);
    \u0275\u0275text(20, "VS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 333);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 327)(24, "div", 334);
    \u0275\u0275text(25, " \u2694\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h4", 335);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 330);
    \u0275\u0275text(29, "Rivales");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(30, JugadorCampeonatosPage_ng_template_7_div_1_div_30_Template, 15, 6, "div", 336)(31, JugadorCampeonatosPage_ng_template_7_div_1_div_31_Template, 29, 5, "div", 337);
    \u0275\u0275elementStart(32, "div")(33, "div", 338);
    \u0275\u0275text(34, " \u{1F3BE} Enfrentamientos Previos ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, JugadorCampeonatosPage_ng_template_7_div_1_div_35_Template, 2, 1, "div", 339)(36, JugadorCampeonatosPage_ng_template_7_div_1_div_36_Template, 7, 0, "div", 340);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 341)(38, "button", 342);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_7_div_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeH2HModal());
    });
    \u0275\u0275text(39, " Entendido ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedH2HData.categoria);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedH2HData.myTeam);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedH2HData.h2hWins, " - ", ctx_r1.selectedH2HData.h2hLosses);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedH2HData.rivalTeam);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedH2HData.h2hTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedH2HData.standing);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedH2HData.historialMatches && ctx_r1.selectedH2HData.historialMatches.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedH2HData.historialMatches || ctx_r1.selectedH2HData.historialMatches.length === 0);
  }
}
function JugadorCampeonatosPage_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 317);
    \u0275\u0275template(1, JugadorCampeonatosPage_ng_template_7_div_1_Template, 40, 9, "div", 318);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedH2HData);
  }
}
function JugadorCampeonatosPage_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 317)(1, "div", 371);
    \u0275\u0275element(2, "div", 320);
    \u0275\u0275elementStart(3, "div", 321)(4, "h2", 372);
    \u0275\u0275text(5, '\u{1F64B}\u200D\u2642\uFE0F Inscribirme en "Busco Pareja"');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-icon", 324);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_9_Template_ion_icon_click_6_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAgenteLibreModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 373)(8, "span", 374);
    \u0275\u0275text(9, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 375);
    \u0275\u0275text(11, " Tu perfil quedar\xE1 visible en la pesta\xF1a ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, '"Buscan Pareja"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " de este torneo para que otros jugadores te inviten a competir. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 376)(16, "label", 377);
    \u0275\u0275text(17, "\xBFEn qu\xE9 lado de la pista juegas?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 378)(19, "button", 379);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_9_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.agenteLibrePosicion = "Drive");
    });
    \u0275\u0275text(20, " \u{1F3BE} Drive ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 379);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.agenteLibrePosicion = "Rev\xE9s");
    });
    \u0275\u0275text(22, " \u{1F3BE} Rev\xE9s ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 379);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_9_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.agenteLibrePosicion = "Ambos");
    });
    \u0275\u0275text(24, " \u26A1 Ambos ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 351)(26, "label", 377);
    \u0275\u0275text(27, "Mensaje o disponibilidad (opcional):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "textarea", 380);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCampeonatosPage_ng_template_9_Template_textarea_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.agenteLibreMensaje, $event) || (ctx_r1.agenteLibreMensaje = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 381);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_9_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmarRegistroAgenteLibre());
    });
    \u0275\u0275text(30, " \u2713 Publicar en Busco Pareja ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275styleProp("background", ctx_r1.agenteLibrePosicion === "Drive" ? "#0f172a" : "#f1f5f9")("color", ctx_r1.agenteLibrePosicion === "Drive" ? "#ccff00" : "#475569");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.agenteLibrePosicion === "Rev\xE9s" ? "#0f172a" : "#f1f5f9")("color", ctx_r1.agenteLibrePosicion === "Rev\xE9s" ? "#ccff00" : "#475569");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.agenteLibrePosicion === "Ambos" ? "#0f172a" : "#f1f5f9")("color", ctx_r1.agenteLibrePosicion === "Ambos" ? "#ccff00" : "#475569");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.agenteLibreMensaje);
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 388);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_3_div_6_Template_div_click_0_listener() {
      const cat_r60 = \u0275\u0275restoreView(_r59).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCategory(cat_r60.id));
    });
    \u0275\u0275elementStart(1, "div", 389);
    \u0275\u0275element(2, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 390)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 391);
    \u0275\u0275text(7, "Toque para seleccionar");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "ion-icon", 392);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r61 * 0.05 + "s");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(cat_r60.nombre);
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 384)(2, "h2");
    \u0275\u0275text(3, "Elegir Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-icon", 385);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_3_Template_ion_icon_click_4_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPartnerModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 386);
    \u0275\u0275template(6, JugadorCampeonatosPage_ng_template_11_ng_container_3_div_6_Template, 9, 3, "div", 387);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.availableCategorias);
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_4_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 405);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_4_ion_icon_3_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enrollmentStep = "category");
    });
    \u0275\u0275elementEnd();
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 406);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_4_div_18_Template_div_click_0_listener() {
      const user_r65 = \u0275\u0275restoreView(_r64).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectPartner(user_r65));
    });
    \u0275\u0275element(1, "img", 407);
    \u0275\u0275elementStart(2, "div", 408)(3, "span", 409);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 410);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "ion-icon", 217);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r65 = ctx.$implicit;
    const i_r66 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r66 * 0.05 + "s");
    \u0275\u0275advance();
    \u0275\u0275property("src", user_r65.foto_perfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r65.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Nivel: ", user_r65.nivel || "N/A");
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_4_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 411);
    \u0275\u0275text(1, " No se encontraron jugadores ");
    \u0275\u0275elementEnd();
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 384)(2, "div", 393);
    \u0275\u0275template(3, JugadorCampeonatosPage_ng_template_11_ng_container_4_ion_icon_3_Template, 1, 0, "ion-icon", 394);
    \u0275\u0275elementStart(4, "h2", 395);
    \u0275\u0275text(5, "Elegir Pareja");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-icon", 385);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_4_Template_ion_icon_click_6_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPartnerModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 396);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_4_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.showPartnerModal = false;
      return \u0275\u0275resetView(ctx_r1.inscribirComoAgenteLibre());
    });
    \u0275\u0275elementStart(8, "div", 121)(9, "span", 397);
    \u0275\u0275text(10, "\u{1F64B}\u200D\u2642\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 398);
    \u0275\u0275text(12, "\xBFNo tienes pareja? An\xF3tate como Agente Libre");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "ion-icon", 399);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 400);
    \u0275\u0275element(15, "ion-icon", 21);
    \u0275\u0275elementStart(16, "input", 401);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCampeonatosPage_ng_template_11_ng_container_4_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r62);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.partnerSearchTerm, $event) || (ctx_r1.partnerSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function JugadorCampeonatosPage_ng_template_11_ng_container_4_Template_input_input_16_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPartnerSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 402);
    \u0275\u0275template(18, JugadorCampeonatosPage_ng_template_11_ng_container_4_div_18_Template, 8, 5, "div", 403)(19, JugadorCampeonatosPage_ng_template_11_ng_container_4_div_19_Template, 2, 0, "div", 404);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.selectedTournament == null ? null : ctx_r1.selectedTournament.table_source) === "v2" || (ctx_r1.selectedTournament == null ? null : ctx_r1.selectedTournament.table_source) === "liga");
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.partnerSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.partnerResults);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.partnerSearchTerm.length >= 3 && ctx_r1.partnerResults.length === 0);
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 422)(1, "button", 423);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r68);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.agregarRestriccionLiga());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" + Agregar Restricci\xF3n (", 2 - ctx_r1.restriccionesLiga.length, " disponible) ");
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_div_1_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 438);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_div_1_button_10_Template_button_click_0_listener() {
      const d_r72 = \u0275\u0275restoreView(_r71).$implicit;
      const r_r73 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(r_r73.dia = d_r72);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r72 = ctx.$implicit;
    const r_r73 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", r_r73.dia === d_r72);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getShortDay(d_r72), " ");
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 426)(1, "div", 427)(2, "span", 428);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 429);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_div_1_Template_button_click_4_listener() {
      const i_r70 = \u0275\u0275restoreView(_r69).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.eliminarRestriccionLiga(i_r70));
    });
    \u0275\u0275text(5, " \u2715 Eliminar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 430)(7, "label", 431);
    \u0275\u0275text(8, "D\xEDa no disponible:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 432);
    \u0275\u0275template(10, JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_div_1_button_10_Template, 2, 3, "button", 433);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 434)(12, "div", 435)(13, "label");
    \u0275\u0275text(14, "Desde:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 436);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_div_1_Template_input_ngModelChange_15_listener($event) {
      const r_r73 = \u0275\u0275restoreView(_r69).$implicit;
      \u0275\u0275twoWayBindingSet(r_r73.hora_inicio, $event) || (r_r73.hora_inicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 437);
    \u0275\u0275text(17, "a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 435)(19, "label");
    \u0275\u0275text(20, "Hasta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 436);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_div_1_Template_input_ngModelChange_21_listener($event) {
      const r_r73 = \u0275\u0275restoreView(_r69).$implicit;
      \u0275\u0275twoWayBindingSet(r_r73.hora_fin, $event) || (r_r73.hora_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const r_r73 = ctx.$implicit;
    const i_r70 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Restricci\xF3n #", i_r70 + 1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.diasSemana);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", r_r73.hora_inicio);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", r_r73.hora_fin);
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 424);
    \u0275\u0275template(1, JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_div_1_Template, 22, 4, "div", 425);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.restriccionesLiga);
  }
}
function JugadorCampeonatosPage_ng_template_11_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 384)(2, "div", 412)(3, "ion-icon", 413);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_5_Template_ion_icon_click_3_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.enrollmentStep = "partner");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Restricciones Horarias");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-icon", 414);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_5_Template_ion_icon_click_6_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPartnerModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 415)(8, "div", 416)(9, "span", 417);
    \u0275\u0275text(10, "\u{1F5D3}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Indica hasta 2 d\xEDas/horarios donde ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "NO puedan jugar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " para la programaci\xF3n autom\xE1tica de partidos.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, JugadorCampeonatosPage_ng_template_11_ng_container_5_div_16_Template, 3, 1, "div", 418)(17, JugadorCampeonatosPage_ng_template_11_ng_container_5_div_17_Template, 2, 1, "div", 419);
    \u0275\u0275elementStart(18, "div", 420)(19, "button", 421);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_ng_template_11_ng_container_5_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmEnrollment());
    });
    \u0275\u0275text(20, " Confirmar Inscripci\xF3n ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r1.restriccionesLiga.length < 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.restriccionesLiga.length > 0);
  }
}
function JugadorCampeonatosPage_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 317)(1, "div", 382);
    \u0275\u0275element(2, "div", 383);
    \u0275\u0275template(3, JugadorCampeonatosPage_ng_template_11_ng_container_3_Template, 7, 1, "ng-container", 24)(4, JugadorCampeonatosPage_ng_template_11_ng_container_4_Template, 20, 4, "ng-container", 24)(5, JugadorCampeonatosPage_ng_template_11_ng_container_5_Template, 21, 2, "ng-container", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.enrollmentStep === "category");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enrollmentStep === "partner");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enrollmentStep === "restrictions");
  }
}
var _JugadorCampeonatosPage = class _JugadorCampeonatosPage {
  // Helper to resolve authenticated user ID from multiple storages or JWT/Session token
  getStoredUserId() {
    let uId = Number(localStorage.getItem("userId")) || Number(localStorage.getItem("user_id")) || Number(localStorage.getItem("id")) || this.userId || 0;
    if (!uId) {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = atob(token);
          const parts = decoded.split("|");
          if (parts.length >= 2 && !isNaN(Number(parts[0]))) {
            uId = Number(parts[0]);
            if (uId > 0) {
              this.userId = uId;
              localStorage.setItem("userId", String(uId));
            }
          }
        } catch (e) {
          console.warn("Token decode error in getStoredUserId", e);
        }
      }
    }
    return uId;
  }
  formatPrecio(precio) {
    if (precio === null || precio === void 0 || precio === "" || precio === 0 || precio === "0" || precio === "0.00" || precio === 0) {
      return "";
    }
    let val = typeof precio === "number" ? precio : parseFloat(String(precio).replace(/[^0-9.]/g, ""));
    if (isNaN(val) || val <= 0) {
      return "";
    }
    if (val > 0 && val < 1e3) {
      val = val * 1e3;
    }
    return "$" + Math.round(val).toLocaleString("es-CL");
  }
  getShortDay(day) {
    const map = {
      "Lunes": "Lun",
      "Martes": "Mar",
      "Mi\xE9rcoles": "Mi\xE9",
      "Jueves": "Jue",
      "Viernes": "Vie",
      "S\xE1bado": "S\xE1b",
      "Domingo": "Dom"
    };
    return map[day] || day;
  }
  agregarRestriccionLiga() {
    if (this.restriccionesLiga.length < 2) {
      this.restriccionesLiga.push({ dia: "Lunes", hora_inicio: "18:00", hora_fin: "20:00" });
    }
  }
  eliminarRestriccionLiga(index) {
    this.restriccionesLiga.splice(index, 1);
  }
  // Capacity and enrolled counters
  getInscritosCount(comp) {
    if (!comp)
      return 0;
    if (comp.inscritos !== void 0 && comp.inscritos !== null && !isNaN(Number(comp.inscritos))) {
      return Number(comp.inscritos);
    }
    if (comp.total_parejas !== void 0 && comp.total_parejas !== null && !isNaN(Number(comp.total_parejas))) {
      return Number(comp.total_parejas);
    }
    if (comp.parejas && Array.isArray(comp.parejas)) {
      return comp.parejas.length;
    }
    if (comp.categorias && Array.isArray(comp.categorias)) {
      let sum = 0;
      for (const cat of comp.categorias) {
        if (cat.inscritos && Array.isArray(cat.inscritos))
          sum += cat.inscritos.length;
        else if (cat.parejas && Array.isArray(cat.parejas))
          sum += cat.parejas.length;
      }
      if (sum > 0)
        return sum;
    }
    return 0;
  }
  getMaxParejas(comp) {
    if (!comp)
      return 0;
    const max = Number(comp.max_parejas || comp.cupos_maximos || comp.cupo_maximo || comp.max_jugadores || 0);
    return isNaN(max) ? 0 : max;
  }
  getInscritosDisplay(comp) {
    if (!comp)
      return "";
    const inscritos = this.getInscritosCount(comp);
    const max = this.getMaxParejas(comp);
    if (max > 0) {
      if (inscritos >= max) {
        return `${inscritos}/${max} Parejas (Completo)`;
      }
      return `${inscritos}/${max} Parejas`;
    }
    if (inscritos > 0) {
      return `${inscritos} ${inscritos === 1 ? "Pareja" : "Parejas"}`;
    }
    return "Cupos Disponibles";
  }
  isCompFull(comp) {
    const max = this.getMaxParejas(comp);
    if (max <= 0)
      return false;
    return this.getInscritosCount(comp) >= max;
  }
  get paginatedHistorial() {
    return this.misTorneosHistorial.slice(0, this.historyLimit);
  }
  loadMoreHistory() {
    this.historyLimit += this.historyPageSize;
  }
  isTorneoActivo(t) {
    if (!t)
      return false;
    const estado = (t.estado || "").toLowerCase().trim();
    if (estado === "cerrado" || estado === "finalizado" || estado === "terminado" || estado === "cancelado") {
      return false;
    }
    if (estado === "activo" || estado === "en curso" || estado === "en_curso" || estado === "en progreso" || estado === "iniciado" || estado === "jugando" || estado === "abierto" || estado === "publicado" || estado === "inscripciones_abiertas" || estado === "programado" || estado === "disponible") {
      return true;
    }
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("sv");
    const fecha = t.fecha || t.fecha_inicio || "";
    const fechaFin = t.fecha_fin && t.fecha_fin !== "0000-00-00" ? t.fecha_fin : fecha;
    if (!fechaFin)
      return true;
    return fechaFin >= today;
  }
  get misTorneosActivos() {
    return (this.misTorneos || []).filter((t) => this.isTorneoActivo(t));
  }
  get misTorneosHistorial() {
    return (this.misTorneos || []).filter((t) => !this.isTorneoActivo(t));
  }
  ionViewWillEnter() {
    this.loadUserProfile();
    this.loadMisTorneos();
    this.loadClubesConTorneos();
  }
  openCompeticionDetail(comp) {
    return __async(this, null, function* () {
      if (!comp)
        return;
      const tipo = (comp.table_source || comp.tipo_torneo || comp.tipo || "v2").toLowerCase();
      const id = Number(comp.id || comp.torneo_id || comp.liga_id);
      const compTipo = tipo;
      const enrolledMatch = (this.misTorneos || []).find((t) => {
        const tId = Number(t.id || t.torneo_id || t.liga_id);
        const tTipo = (t.tipo || t.tipo_torneo || t.table_source || "").toLowerCase();
        if (tId === id) {
          if (compTipo.includes("liga") && tTipo.includes("liga"))
            return true;
          if (compTipo.includes("americano") && tTipo.includes("americano"))
            return true;
          if (!compTipo.includes("liga") && !compTipo.includes("americano") && !tTipo.includes("liga") && !tTipo.includes("americano"))
            return true;
        }
        return false;
      });
      this.selectedMiTorneo = enrolledMatch || (comp.pareja_id || comp.inscripcion_id ? comp : null);
      const loader = yield this.loadingCtrl.create({ message: "Cargando informaci\xF3n..." });
      yield loader.present();
      this.loadingCompDetail = true;
      this.mysql.getCompeticionDetalle(id, tipo).subscribe({
        next: (res) => {
          loader.dismiss();
          this.loadingCompDetail = false;
          if (res.success && res.competicion) {
            this.selectedCompeticionDetail = res.competicion;
            this.compDetailTab = "inscritos";
            this.soloMisPartidosFixture = false;
            let targetIdx = 0;
            if (res.competicion.categorias && res.competicion.categorias.length > 0) {
              const enrolledCat = this.getEnrolledCategoryObj(res.competicion);
              if (enrolledCat) {
                const foundIdx = res.competicion.categorias.findIndex((c) => Number(c.id) === Number(enrolledCat.id));
                if (foundIdx !== -1)
                  targetIdx = foundIdx;
              } else {
                const originCatId = Number(comp.categoria_id || comp.id_categoria || this.selectedMiTorneo?.categoria_id);
                const originCatName = (comp.categoria_nombre || comp.categoria || this.selectedMiTorneo?.categoria_nombre || "").toLowerCase().trim();
                if (originCatId) {
                  const foundIdx = res.competicion.categorias.findIndex((c) => Number(c.id) === originCatId || Number(c.categoria_id) === originCatId);
                  if (foundIdx !== -1)
                    targetIdx = foundIdx;
                } else if (originCatName) {
                  const foundIdx = res.competicion.categorias.findIndex((c) => (c.nombre || "").toLowerCase().trim() === originCatName);
                  if (foundIdx !== -1)
                    targetIdx = foundIdx;
                }
              }
            }
            this.selectedCategoryIdx = targetIdx;
            this.selectedJornadaIdx = 0;
          } else {
            this.presentAlert("Aviso", res.error || "No se pudo obtener el detalle de la competici\xF3n.");
          }
        },
        error: (err) => {
          loader.dismiss();
          this.loadingCompDetail = false;
          this.presentAlert("Error", "Error de conexi\xF3n con el servidor.");
        }
      });
    });
  }
  get displayCategorias() {
    if (!this.selectedCompeticionDetail?.categorias)
      return [];
    return this.selectedCompeticionDetail.categorias;
  }
  getEnrolledCategoryObj(comp) {
    if (!comp || !comp.categorias || !Array.isArray(comp.categorias) || comp.categorias.length === 0)
      return null;
    const enrolledComp = this.selectedMiTorneo || this.misTorneos?.find((t) => {
      const compId = Number(comp.id);
      const tId = Number(t.id);
      const compTipo = (comp.tipo || comp.tipo_torneo || comp.table_source || "").toLowerCase();
      const tTipo = (t.tipo || t.tipo_torneo || t.table_source || "").toLowerCase();
      if (tId === compId) {
        if (compTipo.includes("liga") && tTipo.includes("liga"))
          return true;
        if (compTipo.includes("americano") && tTipo.includes("americano"))
          return true;
        if (!compTipo.includes("liga") && !compTipo.includes("americano") && !tTipo.includes("liga") && !tTipo.includes("americano"))
          return true;
      }
      return false;
    });
    const targetCatId = Number(enrolledComp?.categoria_id || enrolledComp?.id_categoria || comp.categoria_id || comp.id_categoria);
    const targetCatName = (enrolledComp?.categoria_nombre || enrolledComp?.categoria || comp.categoria_nombre || "").toLowerCase().trim();
    const targetParejaId = Number(enrolledComp?.pareja_id || comp.pareja_id);
    const targetParejaName = (enrolledComp?.nombre_pareja || comp.nombre_pareja || "").toLowerCase().trim();
    const uId = this.getStoredUserId();
    for (const cat of comp.categorias) {
      if (targetCatId && (Number(cat.id) === targetCatId || Number(cat.categoria_id) === targetCatId)) {
        return cat;
      }
      if (targetCatName && cat.nombre && (cat.nombre.toLowerCase().trim() === targetCatName || cat.nombre.toLowerCase().includes(targetCatName) || targetCatName.includes(cat.nombre.toLowerCase()))) {
        return cat;
      }
    }
    for (const cat of comp.categorias) {
      const list = [...cat.parejas || [], ...cat.inscritos || [], ...cat.tabla_posiciones || []];
      for (const p of list) {
        if (targetParejaId && (Number(p.id) === targetParejaId || Number(p.pareja_id) === targetParejaId)) {
          return cat;
        }
        if (targetParejaName && p.nombre_pareja && p.nombre_pareja.toLowerCase().trim() === targetParejaName) {
          return cat;
        }
        if (uId && (Number(p.jugador1_id) === uId || Number(p.jugador2_id) === uId || Number(p.p1_j1_id) === uId || Number(p.p1_j2_id) === uId || Number(p.p2_j1_id) === uId || Number(p.p2_j2_id) === uId || Number(p.usuario_id) === uId)) {
          return cat;
        }
      }
    }
    for (const cat of comp.categorias) {
      const partidos = [...cat.partidos || []];
      if (cat.jornadas && Array.isArray(cat.jornadas)) {
        cat.jornadas.forEach((j) => {
          if (j.partidos && Array.isArray(j.partidos))
            partidos.push(...j.partidos);
        });
      }
      for (const m of partidos) {
        if (this.isUserInMatch(m, enrolledComp || comp)) {
          return cat;
        }
      }
    }
    return comp.categorias[0] || null;
  }
  get currentDetailCategory() {
    const cats = this.displayCategorias;
    if (!cats || cats.length === 0)
      return null;
    return cats[this.selectedCategoryIdx] || cats[0] || null;
  }
  get listInscritosCategoryDetail() {
    if (!this.currentDetailCategory)
      return [];
    return this.currentDetailCategory.inscritos || this.currentDetailCategory.parejas || [];
  }
  get totalPaginasInscritosDetail() {
    return Math.ceil(this.listInscritosCategoryDetail.length / this.itemsPorPaginaInscritosDetail) || 1;
  }
  get inscritosPaginadosDetail() {
    const inicio = (this.paginaInscritosDetail - 1) * this.itemsPorPaginaInscritosDetail;
    return this.listInscritosCategoryDetail.slice(inicio, inicio + this.itemsPorPaginaInscritosDetail);
  }
  cambiarPaginaInscritosDetail(pag) {
    if (pag >= 1 && pag <= this.totalPaginasInscritosDetail) {
      this.paginaInscritosDetail = pag;
    }
  }
  get currentDetailJornadas() {
    return this.currentDetailCategory?.jornadas || [];
  }
  get currentDetailJornada() {
    const jornadas = this.currentDetailJornadas;
    return jornadas[this.selectedJornadaIdx] || jornadas[0] || null;
  }
  get filteredDetailJornadaPartidos() {
    const rawPartidos = this.currentDetailJornada?.partidos || [];
    if (!this.soloMisPartidosFixture) {
      return rawPartidos;
    }
    return rawPartidos.filter((m) => this.isUserInMatch(m, this.selectedMiTorneo || this.selectedCompeticionDetail));
  }
  isUserInMatch(match, torneo) {
    if (!match)
      return false;
    const torneoContext = torneo || this.selectedMiTorneo || this.selectedCompeticionDetail;
    if (torneoContext?.pareja_id) {
      const pId = Number(torneoContext.pareja_id);
      if (Number(match.pareja1_id) === pId || Number(match.pareja2_id) === pId)
        return true;
    }
    if (torneoContext?.nombre_pareja) {
      const myPairName = torneoContext.nombre_pareja.trim().toLowerCase();
      const p1Name = (match.pareja1_nombre || "").trim().toLowerCase();
      const p2Name = (match.pareja2_nombre || "").trim().toLowerCase();
      if (p1Name && (p1Name.includes(myPairName) || myPairName.includes(p1Name)))
        return true;
      if (p2Name && (p2Name.includes(myPairName) || myPairName.includes(p2Name)))
        return true;
    }
    const userId = this.getStoredUserId();
    if (userId) {
      if (Number(match.jugador1_id) === userId || Number(match.jugador2_id) === userId || Number(match.jugador3_id) === userId || Number(match.jugador4_id) === userId || Number(match.p1_j1_id) === userId || Number(match.p1_j2_id) === userId || Number(match.p2_j1_id) === userId || Number(match.p2_j2_id) === userId) {
        return true;
      }
    }
    const myNameWords = (this.userName || "").toLowerCase().split(" ").filter((w) => w.length >= 3);
    if (myNameWords.length > 0) {
      const fullMatchStr = `${match.pareja1_nombre || ""} ${match.pareja2_nombre || ""} ${match.jugador1_nombre || ""} ${match.jugador2_nombre || ""} ${match.jugador3_nombre || ""} ${match.jugador4_nombre || ""}`.toLowerCase();
      if (myNameWords.some((w) => fullMatchStr.includes(w)))
        return true;
    }
    return false;
  }
  isEnrolledInComp(comp) {
    if (!comp)
      return false;
    const compId = Number(comp.id || comp.torneo_id || comp.liga_id);
    const compTipo = (comp.tipo || comp.tipo_torneo || comp.table_source || "").toLowerCase();
    return (this.misTorneos || []).some((t) => {
      const tId = Number(t.id || t.torneo_id || t.liga_id);
      const tTipo = (t.tipo || t.tipo_torneo || t.table_source || "").toLowerCase();
      if (tId === compId) {
        if (compTipo.includes("liga") && tTipo.includes("liga"))
          return true;
        if (compTipo.includes("americano") && tTipo.includes("americano"))
          return true;
        if (!compTipo.includes("liga") && !compTipo.includes("americano") && !tTipo.includes("liga") && !tTipo.includes("americano"))
          return true;
      }
      return false;
    });
  }
  get isEnrolledInSelectedComp() {
    if (this.selectedMiTorneo && (this.selectedMiTorneo.pareja_id || this.selectedMiTorneo.inscripcion_id || this.selectedMiTorneo.tipo_torneo)) {
      return true;
    }
    if (!this.selectedCompeticionDetail)
      return false;
    return this.isEnrolledInComp(this.selectedCompeticionDetail);
  }
  getEnrolledPartnerName() {
    if (this.selectedMiTorneo?.nombre_pareja) {
      return this.selectedMiTorneo.nombre_pareja;
    }
    const uId = this.getStoredUserId();
    const enrolledCat = this.getEnrolledCategoryObj(this.selectedCompeticionDetail);
    if (enrolledCat) {
      const list = [...enrolledCat.parejas || [], ...enrolledCat.inscritos || []];
      const found = list.find((p) => Number(p.jugador1_id) === uId || Number(p.jugador2_id) === uId || Number(p.p1_j1_id) === uId || Number(p.p1_j2_id) === uId || Number(p.p2_j1_id) === uId || Number(p.p2_j2_id) === uId || Number(p.usuario_id) === uId);
      if (found?.nombre_pareja)
        return found.nombre_pareja;
    }
    return "";
  }
  getEnrolledCategoryName() {
    const enrolledCat = this.getEnrolledCategoryObj(this.selectedCompeticionDetail);
    if (enrolledCat?.nombre) {
      return enrolledCat.nombre;
    }
    if (this.selectedMiTorneo?.categoria_nombre || this.selectedMiTorneo?.categoria) {
      return this.selectedMiTorneo.categoria_nombre || this.selectedMiTorneo.categoria;
    }
    if (this.selectedCompeticionDetail) {
      const compId = Number(this.selectedCompeticionDetail.id);
      const compTipo = (this.selectedCompeticionDetail.tipo || this.selectedCompeticionDetail.tipo_torneo || "").toLowerCase();
      const found = (this.misTorneos || []).find((t) => {
        const tId = Number(t.id);
        const tTipo = (t.tipo || t.tipo_torneo || t.table_source || "").toLowerCase();
        if (tId === compId) {
          if (compTipo.includes("liga") && tTipo.includes("liga"))
            return true;
          if (compTipo.includes("americano") && tTipo.includes("americano"))
            return true;
          if (!compTipo.includes("liga") && !compTipo.includes("americano") && !tTipo.includes("liga") && !tTipo.includes("americano"))
            return true;
        }
        return false;
      });
      if (found?.categoria_nombre || found?.categoria)
        return found.categoria_nombre || found.categoria;
    }
    return "";
  }
  shareClub() {
    return __async(this, null, function* () {
      if (!this.selectedClub)
        return;
      const club = this.selectedClub;
      const text = `\u{1F3C6} \xA1Mira las competiciones y torneos en ${club.nombre}! \u{1F3BE}
\u{1F4CD} ${club.direccion || ""}
\xA1Inscr\xEDbete y compite en Padelblox!`;
      const shareUrl = window.location.href;
      if (navigator.share) {
        try {
          yield navigator.share({
            title: club.nombre,
            text,
            url: shareUrl
          });
        } catch (err) {
          if (err.name !== "AbortError") {
            console.warn("Error sharing club:", err);
          }
        }
      } else {
        if (navigator.clipboard) {
          try {
            yield navigator.clipboard.writeText(`${text}
${shareUrl}`);
          } catch (e) {
          }
        }
        const toast = yield this.toastCtrl.create({
          message: "\xA1Enlace del club copiado al portapapeles!",
          duration: 2500,
          position: "top",
          color: "success"
        });
        yield toast.present();
      }
    });
  }
  shareCompeticionDetalle() {
    return __async(this, null, function* () {
      if (!this.selectedCompeticionDetail)
        return;
      const comp = this.selectedCompeticionDetail;
      const tipo = comp.tipo === "americano" || comp.tipo === "Americano" ? "Americano" : comp.tipo === "liga" || comp.tipo === "Liga" ? "Liga de P\xE1del" : "Torneo";
      const isEnrolled = this.isEnrolledInSelectedComp;
      const partner = this.getEnrolledPartnerName();
      const cat = this.getEnrolledCategoryName();
      const nextMatch = this.miTorneoProximo;
      let text = `\u{1F3BE} *${comp.nombre}* (${tipo})
\u{1F4CD} Club: ${comp.club_nombre}
\u{1F4C5} Fecha: ${comp.fecha_display || comp.fecha || ""}
`;
      if (isEnrolled) {
        text += `
\u2705 *Mi Participaci\xF3n:*`;
        if (cat)
          text += `
\u{1F3F7}\uFE0F Categor\xEDa: ${cat}`;
        if (partner)
          text += `
\u{1F465} Pareja: ${partner}`;
        if (nextMatch) {
          text += `
\u23F0 *Pr\xF3ximo Partido:* ${this.getMatchHoraDisplay(nextMatch)} en ${this.getMatchCanchaDisplay(nextMatch)}`;
          text += `
\u2694\uFE0F vs ${this.getMatchTeamNames(nextMatch).team2}`;
        }
      } else {
        text += `
\u26A1 *Inscripciones Abiertas:* ${this.getInscritosDisplay(comp)}`;
        if (comp.precio > 0)
          text += ` \u2022 ${this.formatPrecio(comp.precio)}/pareja`;
      }
      text += `

\u{1F4F2} \xA1Sigue los resultados en vivo y \xFAnete en Padelblox!`;
      const shareUrl = window.location.href;
      if (navigator.share) {
        try {
          yield navigator.share({
            title: comp.nombre,
            text,
            url: shareUrl
          });
        } catch (err) {
          if (err.name !== "AbortError") {
            console.warn("Error sharing competition:", err);
          }
        }
      } else {
        if (navigator.clipboard) {
          try {
            yield navigator.clipboard.writeText(`${text}
${shareUrl}`);
          } catch (e) {
          }
        }
        const toast = yield this.toastCtrl.create({
          message: "\xA1Resumen del torneo copiado al portapapeles para WhatsApp!",
          duration: 2500,
          position: "top",
          color: "success"
        });
        yield toast.present();
      }
    });
  }
  // BUSCO PAREJA & AGENTES LIBRES
  getBuscandoParejaList(comp) {
    const compObj = comp || this.selectedCompeticionDetail;
    if (!compObj)
      return [];
    const compId = compObj.id || 0;
    const saved = localStorage.getItem(`busco_pareja_${compId}`);
    let list = [];
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          list = parsed.filter((item) => item && item.id !== 99101 && item.id !== 99102 && item.nombre !== "Mat\xEDas Silva" && item.nombre !== "Rodrigo Fuentes");
        }
      } catch (e) {
        list = [];
      }
    }
    return list;
  }
  eliminarRegistroAgenteLibre(agente) {
    return __async(this, null, function* () {
      const comp = this.selectedCompeticionDetail || this.selectedTournament;
      if (!comp)
        return;
      const compId = comp.id || 0;
      const currentList = this.getBuscandoParejaList(comp);
      const updated = currentList.filter((a) => a.id !== agente.id);
      localStorage.setItem(`busco_pareja_${compId}`, JSON.stringify(updated));
      const toast = yield this.toastCtrl.create({
        message: "Has cancelado tu publicaci\xF3n en Busco Pareja.",
        duration: 2500,
        position: "top",
        color: "medium"
      });
      yield toast.present();
    });
  }
  inscribirComoAgenteLibre(torneo) {
    this.selectedTournament = torneo || this.selectedCompeticionDetail;
    this.agenteLibrePosicion = "Ambos";
    this.agenteLibreMensaje = "";
    this.showAgenteLibreModal = true;
  }
  confirmarRegistroAgenteLibre() {
    return __async(this, null, function* () {
      if (!this.selectedTournament)
        return;
      const compId = this.selectedTournament.id || 0;
      const myName = this.userName || "Jugador";
      const myId = this.getStoredUserId();
      const newAgente = {
        id: myId || Date.now(),
        nombre: myName,
        avatar: this.userPhoto,
        nivel: "4.0",
        categoria: this.currentDetailCategory?.nombre || "Categor\xEDa \xDAnica",
        posicion: this.agenteLibrePosicion,
        mensaje: this.agenteLibreMensaje || "Buscando compa\xF1ero motivado para jugar este torneo!",
        tiempo: "Reci\xE9n publicado",
        esUsuarioActual: true
      };
      const currentList = this.getBuscandoParejaList(this.selectedTournament);
      const updated = [newAgente, ...currentList.filter((a) => a.id !== myId)];
      localStorage.setItem(`busco_pareja_${compId}`, JSON.stringify(updated));
      this.showAgenteLibreModal = false;
      this.subTabInscritos = "busco_pareja";
      const toast = yield this.toastCtrl.create({
        message: "\xA1Te registraste como Agente Libre! Otros jugadores podr\xE1n invitarte a formar dupla.",
        duration: 3500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  unirseConAgenteLibre(agente) {
    if (!agente)
      return;
    const comp = this.selectedCompeticionDetail || this.selectedTournament;
    this.selectedTournament = comp;
    this.selectedPartner = {
      id: agente.id,
      nombre: agente.nombre,
      foto_perfil: agente.avatar,
      nivel: agente.nivel
    };
    this.confirmEnrollment();
  }
  // HEAD TO HEAD (H2H) MODAL - DATOS 100% REALES
  openH2HModal(item, type = "standing") {
    let myTeamDisplay = (this.userName || "T\xFA").trim();
    const partnerRaw = (this.getEnrolledPartnerName() || "").trim();
    if (partnerRaw) {
      if (partnerRaw.includes("/")) {
        myTeamDisplay = partnerRaw;
      } else if (partnerRaw.toLowerCase() !== myTeamDisplay.toLowerCase()) {
        myTeamDisplay = `${myTeamDisplay} / ${partnerRaw}`;
      }
    }
    let rivalName = "Pareja Rival";
    let matchScore = "";
    let matchEstado = "";
    let posData = null;
    if (type === "match") {
      const teams = this.getMatchTeamNames(item);
      rivalName = teams.team2;
      matchScore = this.getMatchScore(item);
      matchEstado = item.estado || "Programado";
    } else {
      rivalName = this.getStandingPairName(item) || this.getInscritoPairName(item) || "Pareja Rival";
      posData = item;
    }
    const tabla = this.currentDetailCategory?.tabla_posiciones || [];
    if (!posData && tabla.length > 0 && rivalName) {
      const normRival2 = rivalName.toLowerCase().replace(/[^a-z0-9]/g, "");
      posData = tabla.find((t) => {
        const tName = this.getStandingPairName(t).toLowerCase().replace(/[^a-z0-9]/g, "");
        return tName.includes(normRival2) || normRival2.includes(tName);
      });
    }
    const directMatches = [];
    const allMatches = [];
    const allJornadas = this.currentDetailCategory?.jornadas || [];
    allJornadas.forEach((j) => {
      if (Array.isArray(j.partidos)) {
        j.partidos.forEach((p) => {
          allMatches.push(__spreadProps(__spreadValues({}, p), { jornadaLabel: j.nombre || `Jornada ${j.jornada || ""}` }));
        });
      }
    });
    if (Array.isArray(this.currentDetailCategory?.partidos)) {
      this.currentDetailCategory.partidos.forEach((p) => {
        allMatches.push(p);
      });
    }
    let h2hWins = 0;
    let h2hLosses = 0;
    let myGames = 0;
    let rivalGames = 0;
    const normRival = (rivalName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    allMatches.forEach((m) => {
      if (!this.isUserInMatch(m))
        return;
      const isUserT2 = this.isUserInTeam2(m);
      const mRivalName = isUserT2 ? this.formatMatchTeam(m, 1) : this.formatMatchTeam(m, 2);
      const normMRival = (mRivalName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      if (normMRival && normRival && (normMRival.includes(normRival) || normRival.includes(normMRival))) {
        const totalGamesInMatch = Number(m.set1_p1 || 0) + Number(m.set1_p2 || 0) + Number(m.set2_p1 || 0) + Number(m.set2_p2 || 0) + Number(m.set3_p1 || 0) + Number(m.set3_p2 || 0) + Number(m.resultado_t1 || 0) + Number(m.resultado_t2 || 0);
        const statusStr = (m.estado || "").toLowerCase();
        const isFinished = (statusStr === "finalizado" || statusStr === "jugado" || statusStr === "terminado" || totalGamesInMatch > 0) && totalGamesInMatch > 0;
        if (isFinished) {
          let mySetsWon = 0;
          let rivalSetsWon = 0;
          let matchMyGames = 0;
          let matchRivalGames = 0;
          const scoreParts = [];
          if (m.set1_p1 !== null && m.set1_p1 !== void 0 && m.set1_p1 !== "") {
            const myS1 = isUserT2 ? Number(m.set1_p2 || 0) : Number(m.set1_p1 || 0);
            const rivS1 = isUserT2 ? Number(m.set1_p1 || 0) : Number(m.set1_p2 || 0);
            if (myS1 > 0 || rivS1 > 0) {
              scoreParts.push(`${myS1}-${rivS1}`);
              matchMyGames += myS1;
              matchRivalGames += rivS1;
              if (myS1 > rivS1)
                mySetsWon++;
              else if (rivS1 > myS1)
                rivalSetsWon++;
            }
          }
          if (m.set2_p1 !== null && m.set2_p1 !== void 0 && m.set2_p1 !== "") {
            const myS2 = isUserT2 ? Number(m.set2_p2 || 0) : Number(m.set2_p1 || 0);
            const rivS2 = isUserT2 ? Number(m.set2_p1 || 0) : Number(m.set2_p2 || 0);
            if (myS2 > 0 || rivS2 > 0) {
              scoreParts.push(`${myS2}-${rivS2}`);
              matchMyGames += myS2;
              matchRivalGames += rivS2;
              if (myS2 > rivS2)
                mySetsWon++;
              else if (rivS2 > myS2)
                rivalSetsWon++;
            }
          }
          if (m.set3_p1 !== null && m.set3_p1 !== void 0 && m.set3_p1 !== "" && (Number(m.set3_p1) > 0 || Number(m.set3_p2) > 0)) {
            const myS3 = isUserT2 ? Number(m.set3_p2 || 0) : Number(m.set3_p1 || 0);
            const rivS3 = isUserT2 ? Number(m.set3_p1 || 0) : Number(m.set3_p2 || 0);
            if (myS3 > 0 || rivS3 > 0) {
              scoreParts.push(`${myS3}-${rivS3}`);
              matchMyGames += myS3;
              matchRivalGames += rivS3;
              if (myS3 > rivS3)
                mySetsWon++;
              else if (rivS3 > myS3)
                rivalSetsWon++;
            }
          }
          if (scoreParts.length === 0 && m.resultado_t1 !== null && m.resultado_t1 !== void 0 && m.resultado_t1 !== "") {
            const r1 = Number(m.resultado_t1 || 0);
            const r2 = Number(m.resultado_t2 || 0);
            if (r1 > 0 || r2 > 0) {
              const myR = isUserT2 ? r2 : r1;
              const rivR = isUserT2 ? r1 : r2;
              scoreParts.push(`${myR}-${rivR}`);
              matchMyGames += myR;
              matchRivalGames += rivR;
              if (myR > rivR)
                mySetsWon++;
              else if (rivR > myR)
                rivalSetsWon++;
            }
          }
          if (scoreParts.length > 0 && (matchMyGames > 0 || matchRivalGames > 0)) {
            myGames += matchMyGames;
            rivalGames += matchRivalGames;
            let ganador = "myTeam";
            if (mySetsWon < rivalSetsWon) {
              ganador = "rivalTeam";
              h2hLosses++;
            } else if (mySetsWon > rivalSetsWon) {
              ganador = "myTeam";
              h2hWins++;
            } else if (matchMyGames !== matchRivalGames) {
              ganador = matchMyGames > matchRivalGames ? "myTeam" : "rivalTeam";
              if (ganador === "myTeam")
                h2hWins++;
              else
                h2hLosses++;
            } else {
              ganador = "myTeam";
            }
            directMatches.push({
              torneo: m.jornadaLabel || this.selectedCompeticionDetail?.nombre || "Competici\xF3n",
              fecha: this.getMatchFechaDisplay(m),
              resultado: scoreParts.join(", ") || this.getMatchScore(m),
              ganador,
              duracion: m.duracion ? `${m.duracion} min` : "Oficial"
            });
          }
        }
      }
    });
    const h2hTotal = h2hWins + h2hLosses;
    const myWinRate = h2hTotal > 0 ? Math.round(h2hWins / h2hTotal * 100) : 50;
    const rivalWinRate = h2hTotal > 0 ? 100 - myWinRate : 50;
    this.selectedH2HData = {
      myTeam: myTeamDisplay,
      rivalTeam: rivalName,
      categoria: this.currentDetailCategory?.nombre || "Categor\xEDa General",
      torneo: this.selectedCompeticionDetail?.nombre || "Competici\xF3n",
      h2hWins,
      h2hLosses,
      h2hTotal,
      myGames,
      rivalGames,
      myWinRate,
      rivalWinRate,
      matchScore,
      matchEstado,
      standing: posData ? {
        posicion: posData.posicion || posData.puesto || "-",
        pj: Number(posData.pj ?? posData.partidos_jugados ?? 0),
        pg: Number(posData.pg ?? posData.partidos_ganados ?? 0),
        pp: Number(posData.pp ?? posData.partidos_perdidos ?? 0),
        puntos: Number(posData.puntos ?? posData.pts ?? 0),
        dif_games: (Number(posData.dif_games ?? posData.dg ?? posData.dif_sets ?? 0) > 0 ? "+" : "") + String(posData.dif_games ?? posData.dg ?? posData.dif_sets ?? 0)
      } : null,
      historialMatches: directMatches
    };
    this.showH2HModal = true;
  }
  closeH2HModal() {
    this.showH2HModal = false;
    this.selectedH2HData = null;
  }
  goBack() {
    if (this.selectedCompeticionDetail) {
      this.selectedCompeticionDetail = null;
      this.selectedMiTorneo = null;
    } else if (this.selectedMiTorneo) {
      this.selectedMiTorneo = null;
    } else if (this.selectedClub) {
      this.selectedClub = null;
    } else {
      const role = localStorage.getItem("userRole");
      if (role === "entrenador") {
        this.router.navigate(["/entrenador-home"]);
      } else {
        this.router.navigate(["/jugador-home"]);
      }
    }
  }
  constructor(mysql, router, alertCtrl, loadingCtrl, toastCtrl, haptics) {
    this.mysql = mysql;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.haptics = haptics;
    this.clubes = [];
    this.torneos = [];
    this.selectedClub = null;
    this.selectedTab = "americanos";
    this.loading = true;
    this.userId = 0;
    this.userName = "";
    this.searchTerm = "";
    this.userRegion = "";
    this.userPhoto = "assets/avatar.png";
    this.americanosList = [];
    this.torneosList = [];
    this.ligasClubList = [];
    this.selectedCompetitionFilter = "todos";
    this.selectedRegion = "";
    this.selectedComuna = "";
    this.regiones = [];
    this.comunas = [];
    this.allComunas = [];
    this.showPartnerModal = false;
    this.partnerSearchTerm = "";
    this.partnerResults = [];
    this.selectedPartner = null;
    this.selectedTournament = null;
    this.selectedCategoriaId = 0;
    this.enrollmentStep = "partner";
    this.availableCategorias = [];
    this.subTabInscritos = "parejas";
    this.agenteLibrePosicion = "Ambos";
    this.agenteLibreMensaje = "";
    this.showAgenteLibreModal = false;
    this.showH2HModal = false;
    this.selectedH2HData = null;
    this.restriccionesLiga = [];
    this.diasSemana = ["Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado", "Domingo"];
    this.defaultClubImage = "assets/fondo-cancha.png";
    this.heroBackground = "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop";
    this.mainView = "mis-torneos";
    this.misTab = "activos";
    this.misTorneos = [];
    this.loadingMisTorneos = false;
    this.selectedMiTorneo = null;
    this.miTorneoPartidos = [];
    this.miTorneoProximo = null;
    this.miTorneoHistorial = [];
    this.historyLimit = 5;
    this.historyPageSize = 5;
    this.selectedCompeticionDetail = null;
    this.loadingCompDetail = false;
    this.compDetailTab = "inscritos";
    this.selectedCategoryIdx = 0;
    this.selectedJornadaIdx = 0;
    this.paginaInscritosDetail = 1;
    this.itemsPorPaginaInscritosDetail = 8;
    this.soloMisPartidosFixture = true;
    addIcons({
      locationOutline,
      searchOutline,
      trophyOutline,
      arrowBack,
      heartOutline,
      shareOutline,
      chevronForward,
      addCircleOutline,
      closeOutline,
      personAddOutline,
      star,
      tennisballOutline,
      calendarOutline,
      chevronDown,
      peopleOutline,
      mapOutline,
      ribbonOutline,
      timeOutline,
      checkmarkCircleOutline,
      closeCircleOutline,
      arrowForwardOutline,
      podiumOutline,
      listOutline,
      personOutline,
      logoWhatsapp,
      flameOutline,
      statsChartOutline,
      flashOutline,
      eyeOutline,
      checkmarkOutline,
      chatbubbleEllipsesOutline,
      shieldCheckmarkOutline,
      gitCompareOutline
    });
  }
  ngOnInit() {
    this.loadUserProfile();
    this.loadMisTorneos();
    this.loadClubesConTorneos();
  }
  doRefresh(event) {
    this.loadMisTorneos();
    this.loadClubesConTorneos();
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
  loadMisTorneos() {
    const userId = this.getStoredUserId();
    this.userId = userId;
    this.loadingMisTorneos = true;
    this.historyLimit = this.historyPageSize;
    this.mysql.getMisTorneosCompleto(userId || void 0).subscribe({
      next: (res) => {
        const list = Array.isArray(res) ? res : [];
        if (list.length > 0) {
          this.misTorneos = list;
          this.loadingMisTorneos = false;
          if (this.misTorneosActivos.length === 0 && this.misTorneosHistorial.length > 0 && this.misTab === "activos") {
            this.misTab = "historial";
          }
        } else {
          this.fallbackLoadLegacyTorneos(userId);
        }
      },
      error: (err) => {
        console.warn("Error en getMisTorneosCompleto, intentando getMyTournaments...", err);
        this.fallbackLoadLegacyTorneos(userId);
      }
    });
  }
  fallbackLoadLegacyTorneos(userId) {
    if (!userId) {
      this.misTorneos = [];
      this.loadingMisTorneos = false;
      return;
    }
    this.mysql.getMyTournaments(userId).subscribe({
      next: (legacyRes) => {
        const rawList = Array.isArray(legacyRes) ? legacyRes : [];
        if (rawList.length > 0) {
          this.misTorneos = rawList.map((t) => __spreadProps(__spreadValues({}, t), {
            tipo_torneo: t.tipo_torneo || "americano",
            table_source: t.table_source || "americanos",
            tipo: t.tipo || "Americano",
            partidos: t.partidos || []
          }));
        } else {
          this.misTorneos = [];
        }
        this.loadingMisTorneos = false;
        if (this.misTorneosActivos.length === 0 && this.misTorneosHistorial.length > 0 && this.misTab === "activos") {
          this.misTab = "historial";
        }
      },
      error: (err) => {
        console.error("Error loading legacy tournaments", err);
        this.misTorneos = [];
        this.loadingMisTorneos = false;
      }
    });
  }
  getMatchTimestamp(match) {
    if (!match)
      return Infinity;
    const rawStr = match.fecha_hora || match.fecha;
    if (!rawStr)
      return Infinity;
    const datePart = rawStr.includes(" ") ? rawStr.split(" ")[0] : rawStr;
    if (!datePart.match(/^\d{4}-\d{2}-\d{2}$/))
      return Infinity;
    const [y, m, d] = datePart.split("-").map((v) => parseInt(v, 10));
    let hour = 0, min = 0;
    const horaStr = match.hora || (rawStr.includes(" ") ? rawStr.split(" ")[1] : "");
    if (horaStr && horaStr.includes(":")) {
      const parts = horaStr.split(":");
      hour = parseInt(parts[0], 10) || 0;
      min = parseInt(parts[1], 10) || 0;
    }
    return new Date(y, m - 1, d, hour, min).getTime();
  }
  openMiTorneo(torneo) {
    this.selectedMiTorneo = torneo;
    const userId = this.getStoredUserId();
    const partidos = torneo.partidos || [];
    this.miTorneoHistorial = partidos.filter((p) => p.resultado_t1 !== null && p.resultado_t2 !== null);
    const pendientes = partidos.filter((p) => p.resultado_t1 === null || p.resultado_t2 === null);
    if (pendientes.length > 0) {
      pendientes.sort((a, b) => this.getMatchTimestamp(a) - this.getMatchTimestamp(b));
    }
    this.miTorneoProximo = pendientes.length > 0 ? pendientes[0] : null;
    this.miTorneoPartidos = partidos;
    this.openCompeticionDetail(torneo);
  }
  getMatchResult(match) {
    if (match.resultado_t1 === null || match.resultado_t2 === null)
      return "pending";
    const userId = this.getStoredUserId();
    if (this.selectedMiTorneo?.tipo_torneo === "americano") {
      const isTeam1 = match.jugador1_id == userId || match.jugador2_id == userId;
      const r1 = Number(match.resultado_t1);
      const r2 = Number(match.resultado_t2);
      if (r1 === r2)
        return "draw";
      if (isTeam1)
        return r1 > r2 ? "win" : "loss";
      return r2 > r1 ? "win" : "loss";
    } else {
      if (match.gane !== void 0)
        return match.gane ? "win" : "loss";
      const r1 = Number(match.resultado_t1);
      const r2 = Number(match.resultado_t2);
      if (r1 === r2)
        return "draw";
      return "pending";
    }
  }
  isUserInTeam2(match, torneo) {
    if (!match)
      return false;
    const torneoContext = torneo || this.selectedMiTorneo || this.selectedCompeticionDetail;
    const userId = this.getStoredUserId();
    if (torneoContext?.pareja_id && match.pareja2_id && Number(match.pareja2_id) === Number(torneoContext.pareja_id)) {
      return true;
    }
    if (torneoContext?.pareja_id && match.pareja1_id && Number(match.pareja1_id) === Number(torneoContext.pareja_id)) {
      return false;
    }
    if (torneoContext?.nombre_pareja) {
      const myPairName = torneoContext.nombre_pareja.trim().toLowerCase();
      const p1Name = (match.pareja1_nombre || "").trim().toLowerCase();
      const p2Name = (match.pareja2_nombre || "").trim().toLowerCase();
      if (p2Name && (p2Name.includes(myPairName) || myPairName.includes(p2Name)))
        return true;
      if (p1Name && (p1Name.includes(myPairName) || myPairName.includes(p1Name)))
        return false;
    }
    if (userId) {
      if (Number(match.jugador3_id) === userId || Number(match.jugador4_id) === userId)
        return true;
      if (Number(match.p2_j1_id) === userId || Number(match.p2_j2_id) === userId)
        return true;
      if (Number(match.jugador1_id) === userId || Number(match.jugador2_id) === userId)
        return false;
      if (Number(match.p1_j1_id) === userId || Number(match.p1_j2_id) === userId)
        return false;
    }
    const p2Str = `${match.pareja2_nombre || ""} ${match.jugador3_nombre || ""} ${match.jugador4_nombre || ""}`.toLowerCase();
    const p1Str = `${match.pareja1_nombre || ""} ${match.jugador1_nombre || ""} ${match.jugador2_nombre || ""}`.toLowerCase();
    const myFirstName = (this.userName || "").split(" ")[0].trim().toLowerCase();
    if (myFirstName && myFirstName.length >= 3) {
      if (p2Str.includes(myFirstName) && !p1Str.includes(myFirstName))
        return true;
      if (p1Str.includes(myFirstName))
        return false;
    }
    return false;
  }
  getStandingPairName(pos) {
    if (!pos)
      return "Pareja";
    const p1 = (pos.p1_nombre || pos.jugador1 || pos.jugador1_nombre || pos.nombre_externo1 || "").trim();
    const p2 = (pos.p2_nombre || pos.jugador2 || pos.jugador2_nombre || pos.nombre_externo2 || "").trim();
    if (p1 && p2 && p1 !== "Jugador 1" && p2 !== "Jugador 2") {
      return `${p1} / ${p2}`;
    }
    if (pos.nombre_pareja && pos.nombre_pareja !== "Pareja" && pos.nombre_pareja !== "Jugador 1 / Jugador 2") {
      return pos.nombre_pareja;
    }
    if (p1 && p2) {
      return `${p1} / ${p2}`;
    }
    if (p1)
      return p1;
    if (p2)
      return p2;
    return pos.nombre_pareja || "Pareja";
  }
  getInscritoPairName(p) {
    if (!p)
      return "Pareja";
    const p1 = (p.jugador1 || p.p1_nom || p.jugador1_nombre || p.nombre_externo1 || "").trim();
    const p2 = (p.jugador2 || p.p2_nom || p.jugador2_nombre || p.nombre_externo2 || "").trim();
    if (p1 && p2 && p1 !== "Jugador 1" && p2 !== "Jugador 2") {
      return `${p1} / ${p2}`;
    }
    if (p.nombre_pareja && p.nombre_pareja !== "Pareja" && p.nombre_pareja !== "Jugador 1 / Jugador 2") {
      return p.nombre_pareja;
    }
    if (p1 && p2) {
      return `${p1} / ${p2}`;
    }
    if (p1)
      return p1;
    if (p2)
      return p2;
    return p.nombre_pareja || "Pareja";
  }
  formatMatchTeam(match, teamIndex) {
    if (!match)
      return `Pareja ${teamIndex}`;
    let name = (teamIndex === 1 ? match.pareja1_nombre || match.pareja1 || match.p1_nombre || "" : match.pareja2_nombre || match.pareja2 || match.p2_nombre || "").trim();
    const pId = teamIndex === 1 ? match.pareja1_id || match.p1_id || match.id_pareja1 : match.pareja2_id || match.p2_id || match.id_pareja2;
    const n1 = (teamIndex === 1 ? match.p1_j1_nom || match.p1_u1_nom || match.jugador1_nombre || match.p1_nom || match.pareja1_jugador1 || "" : match.p2_j1_nom || match.p2_u1_nom || match.jugador3_nombre || match.p3_nom || match.pareja2_jugador1 || "").trim();
    const n2 = (teamIndex === 1 ? match.p1_j2_nom || match.p1_u2_nom || match.jugador2_nombre || match.p2_nom || match.pareja1_jugador2 || "" : match.p2_j2_nom || match.p2_u2_nom || match.jugador4_nombre || match.p4_nom || match.pareja2_jugador2 || "").trim();
    name = name.replace(/^[\s\/\-]+|[\s\/\-]+$/g, "").trim();
    if (pId && this.selectedCompeticionDetail?.categorias) {
      for (const cat of this.selectedCompeticionDetail.categorias) {
        const list = [...cat.parejas || [], ...cat.inscritos || []];
        const found = list.find((p) => Number(p.id) === Number(pId) || Number(p.pareja_id) === Number(pId));
        if (found) {
          const resolved = this.getInscritoPairName(found);
          if (resolved && !resolved.includes("Jugador 1") && !resolved.includes("Jugador 2") && resolved !== "Pareja") {
            return resolved.replace(/^[\s\/\-]+|[\s\/\-]+$/g, "").trim();
          }
        }
      }
    }
    if (n1 && n2 && n1 !== "Jugador 1" && n2 !== "Jugador 2" && n1 !== "J1" && n2 !== "J2" && n1 !== "J3" && n2 !== "J4") {
      return `${n1} / ${n2}`;
    }
    if (name) {
      if (name.includes("/") || name.includes("-")) {
        const parts = name.includes("/") ? name.split("/") : name.split("-");
        let part1 = parts[0]?.trim() || "";
        let part2 = parts[1]?.trim() || "";
        if (part1 === "Jugador 1" || part1 === "Jugador" || part1 === "J1" || part1 === "J3" || !part1) {
          part1 = n1 && n1 !== "Jugador 1" && n1 !== "J1" && n1 !== "J3" ? n1 : "";
        }
        if (part2 === "Jugador 2" || part2 === "Jugador" || part2 === "J2" || part2 === "J4" || !part2) {
          part2 = n2 && n2 !== "Jugador 2" && n2 !== "J2" && n2 !== "J4" ? n2 : "";
        }
        if (part1 && part2)
          return `${part1} / ${part2}`;
        if (part1)
          return part1;
        if (part2)
          return part2;
      }
      if (name !== "Pareja 1" && name !== "Pareja 2" && name !== "Pareja" && name !== "Jugador 1 / Jugador 2") {
        return name;
      }
    }
    if (n1 && n2)
      return `${n1} / ${n2}`;
    if (n1)
      return n1;
    if (n2)
      return n2;
    return `Pareja ${teamIndex}`;
  }
  getMatchTeamNames(match) {
    if (!match)
      return { team1: "Pareja 1", team2: "Pareja 2" };
    let t1 = this.formatMatchTeam(match, 1);
    let t2 = this.formatMatchTeam(match, 2);
    if (this.selectedMiTorneo?.tipo_torneo === "americano" || this.selectedCompeticionDetail?.tipo === "americano") {
      t1 = `${match.jugador1_nombre || "J1"} / ${match.jugador2_nombre || "J2"}`;
      t2 = `${match.jugador3_nombre || "J3"} / ${match.jugador4_nombre || "J4"}`;
    }
    if (this.isUserInTeam2(match)) {
      return { team1: t2, team2: t1 };
    }
    return { team1: t1, team2: t2 };
  }
  getMatchScore(match) {
    if (!match)
      return "Pendiente";
    if (match.set1_p1 !== null && match.set1_p1 !== void 0 && match.set1_p1 !== "") {
      const flip2 = this.isUserInTeam2(match);
      const s1_1 = flip2 ? match.set1_p2 : match.set1_p1;
      const s1_2 = flip2 ? match.set1_p1 : match.set1_p2;
      let scoreStr = `${s1_1}-${s1_2}`;
      if (match.set2_p1 !== null && match.set2_p1 !== void 0 && match.set2_p1 !== "") {
        const s2_1 = flip2 ? match.set2_p2 : match.set2_p1;
        const s2_2 = flip2 ? match.set2_p1 : match.set2_p2;
        scoreStr += `, ${s2_1}-${s2_2}`;
      }
      if (match.set3_p1 !== null && match.set3_p1 !== void 0 && match.set3_p1 !== "" && (Number(match.set3_p1) > 0 || Number(match.set3_p2) > 0)) {
        const s3_1 = flip2 ? match.set3_p2 : match.set3_p1;
        const s3_2 = flip2 ? match.set3_p1 : match.set3_p2;
        scoreStr += `, ${s3_1}-${s3_2}`;
      }
      return scoreStr;
    }
    if (match.resultado_t1 === null || match.resultado_t1 === void 0)
      return "Pendiente";
    const flip = this.isUserInTeam2(match);
    const r1 = flip ? match.resultado_t2 : match.resultado_t1;
    const r2 = flip ? match.resultado_t1 : match.resultado_t2;
    return `${r1} - ${r2}`;
  }
  getMatchFechaDisplay(match) {
    if (!match)
      return "Por programar";
    const rawStr = match.fecha_hora || match.fecha;
    if (!rawStr)
      return "Por programar";
    try {
      const datePart = rawStr.includes(" ") ? rawStr.split(" ")[0] : rawStr;
      const days = ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"];
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      if (datePart.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [yStr, mStr, dStr] = datePart.split("-");
        const y = parseInt(yStr, 10);
        const m = parseInt(mStr, 10);
        const d = parseInt(dStr, 10);
        const dt = new Date(y, m - 1, d);
        const dayName = days[dt.getDay()];
        const monthName = months[m - 1] || mStr;
        return `${dayName}, ${d} ${monthName} ${y}`;
      }
      if (datePart.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        const [dStr, mStr, yStr] = datePart.split("/");
        const y = parseInt(yStr, 10);
        const m = parseInt(mStr, 10);
        const d = parseInt(dStr, 10);
        const dt = new Date(y, m - 1, d);
        const dayName = days[dt.getDay()];
        const monthName = months[m - 1] || mStr;
        return `${dayName}, ${d} ${monthName} ${y}`;
      }
      const textMatch = String(rawStr).trim().match(/^(\d{1,2})\s+([A-Za-záéíóúÁÉÍÓÚ]+)\s+(\d{4})/);
      if (textMatch) {
        const d = parseInt(textMatch[1], 10);
        const mNameRaw = textMatch[2].toLowerCase();
        const y = parseInt(textMatch[3], 10);
        const monthIdx = months.findIndex((m) => mNameRaw.startsWith(m.toLowerCase()));
        if (monthIdx !== -1) {
          const dt = new Date(y, monthIdx, d);
          const dayName = days[dt.getDay()];
          return `${dayName}, ${d} ${months[monthIdx]} ${y}`;
        }
      }
      return datePart;
    } catch (e) {
      return rawStr;
    }
  }
  getMatchHoraDisplay(match) {
    if (!match)
      return "Por definir";
    if (match.hora && match.hora !== "00:00:00" && match.hora !== "00:00") {
      return match.hora.substring(0, 5) + " hrs";
    }
    if (match.fecha_hora && match.fecha_hora.includes(" ")) {
      const timePart = match.fecha_hora.split(" ")[1];
      if (timePart && timePart !== "00:00:00" && timePart !== "00:00") {
        return timePart.substring(0, 5) + " hrs";
      }
    }
    return "Por definir";
  }
  getMatchCanchaDisplay(match) {
    if (!match)
      return "Por asignar";
    const cName = match.cancha_nombre || match.cancha;
    if (cName && String(cName).trim() !== "") {
      return String(cName);
    }
    return "Por asignar";
  }
  getTorneoStatusClass(torneo) {
    const estado = (torneo.estado || "").toLowerCase();
    if (estado === "cerrado" || estado === "finalizado")
      return "cerrado";
    return "activo";
  }
  getTorneoStatusLabel(torneo) {
    const estado = (torneo.estado || "").toLowerCase();
    if (estado === "cerrado" || estado === "finalizado")
      return "Finalizado";
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("sv");
    const fecha = torneo.fecha || torneo.fecha_inicio || "";
    if (fecha > today)
      return "Inscrito";
    return "En Juego";
  }
  loadUserProfile() {
    const userId = this.getStoredUserId();
    this.userId = userId;
    this.userName = (localStorage.getItem("userNombre") || localStorage.getItem("userName") || "").trim();
    if (userId) {
      this.mysql.getPerfil(userId).subscribe((res) => {
        if (res.success && res.user) {
          const profileName = `${res.user.nombre || ""} ${res.user.apellido || ""}`.trim();
          if (profileName) {
            this.userName = profileName;
            localStorage.setItem("userNombre", profileName);
          }
          const region = res.direccion?.region || res.user?.region;
          if (region && !this.selectedRegion) {
            this.selectedRegion = region;
            this.onFilterChange();
          }
          const photo = res.user.foto_perfil || res.user.foto;
          if (photo) {
            const cleanApiUrl = environment.apiUrl.replace("/dev", "").replace("/prd", "").replace("/torneos", "");
            this.userPhoto = photo.startsWith("http") ? photo : `${cleanApiUrl}/prd/${photo}`;
          }
          this.sortClubes();
        }
      });
    }
  }
  loadClubesConTorneos() {
    this.loading = true;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.mysql.getTorneosPublicos().subscribe((allTorneos) => {
      const rawList = Array.isArray(allTorneos) ? allTorneos : [];
      const activeTorneos = rawList.filter((t) => {
        const estado = (t.estado || "").toLowerCase().trim();
        if (estado === "cerrado" || estado === "finalizado" || estado === "cancelado" || estado === "oculto") {
          return false;
        }
        if (t.table_source === "americanos") {
          return t.fecha >= today;
        }
        return true;
      });
      const americanosMap = /* @__PURE__ */ new Map();
      const otrosTorneos = [];
      for (const t of activeTorneos) {
        if (t.table_source === "americanos") {
          const key = `${t.club_id || ""}_${(t.nombre || "").toLowerCase().trim()}_${t.fecha}`;
          const existing = americanosMap.get(key);
          if (!existing) {
            americanosMap.set(key, t);
          } else {
            const currentIsAbierto = (t.estado || "").toLowerCase() === "abierto";
            const existingIsAbierto = (existing.estado || "").toLowerCase() === "abierto";
            if (currentIsAbierto && !existingIsAbierto) {
              americanosMap.set(key, t);
            } else if (currentIsAbierto === existingIsAbierto && Number(t.id) > Number(existing.id)) {
              americanosMap.set(key, t);
            }
          }
        } else {
          otrosTorneos.push(t);
        }
      }
      this.torneos = [...Array.from(americanosMap.values()), ...otrosTorneos];
      this.mysql.getLigas().subscribe({
        next: (resLigas) => {
          const ligasArr = resLigas?.ligas || (Array.isArray(resLigas) ? resLigas : []);
          if (Array.isArray(ligasArr) && ligasArr.length > 0) {
            const existingIds = new Set(this.torneos.filter((t) => t.table_source === "liga").map((t) => Number(t.id)));
            for (const l of ligasArr) {
              if (!existingIds.has(Number(l.id))) {
                this.torneos.push(__spreadProps(__spreadValues({}, l), {
                  table_source: "liga",
                  tipo: "Liga",
                  club_id: Number(l.club_id) > 0 ? Number(l.club_id) : 21,
                  imagen: l.imagen_url || "",
                  imagen_display: l.imagen_url || "",
                  fecha_display: l.fecha_inicio || "",
                  fecha: l.fecha_inicio || "",
                  inscritos: l.total_parejas || 0
                }));
              }
            }
          }
          this.processClubesList();
        },
        error: () => {
          this.processClubesList();
        }
      });
    });
  }
  processClubesList() {
    this.mysql.getClubes().subscribe((res) => {
      const allClubs = Array.isArray(res) ? res : [];
      this.clubes = allClubs.map((c) => {
        const clubId = Number(c.id);
        const cNom = (c.nombre || "").toLowerCase();
        const clubTorneos = this.torneos.filter((t) => {
          const tClubId = Number(t.club_id);
          if (tClubId === clubId)
            return true;
          if (tClubId <= 1 || !tClubId)
            return true;
          return false;
        });
        c.numAmericanos = clubTorneos.filter((t) => t.table_source === "americanos").length;
        c.numTorneos = clubTorneos.filter((t) => t.table_source === "v2").length;
        c.numLigas = clubTorneos.filter((t) => t.table_source === "liga").length;
        c.totalCompeticiones = c.numAmericanos + c.numTorneos + c.numLigas;
        if (c.logo && c.logo.trim() !== "" && c.logo !== "null") {
          const cleanApiUrl = environment.apiUrl.replace("/dev", "").replace("/prd", "").replace("/torneos", "");
          c.logoUrl = c.logo.startsWith("http") ? c.logo : `${cleanApiUrl}/prd/${c.logo}`;
        } else {
          c.logoUrl = this.defaultClubImage;
        }
        return c;
      }).filter((c) => c.totalCompeticiones > 0);
      this.regiones = [...new Set(this.clubes.map((c) => c.region).filter((r) => r))].sort();
      this.allComunas = [...new Set(this.clubes.map((c) => c.comuna).filter((c) => c))].sort();
      this.comunas = [...this.allComunas];
      this.sortClubes();
      this.loading = false;
    });
  }
  sortClubes() {
    if (this.clubes.length === 0)
      return;
    this.clubes.sort((a, b) => {
      if (this.selectedRegion) {
        const aInR = a.region === this.selectedRegion ? 1 : 0;
        const bInR = b.region === this.selectedRegion ? 1 : 0;
        if (aInR !== bInR)
          return bInR - aInR;
      }
      if (this.userRegion && !this.selectedRegion) {
        const aInUserR = a.region === this.userRegion ? 1 : 0;
        const bInUserR = b.region === this.userRegion ? 1 : 0;
        if (aInUserR !== bInUserR)
          return bInUserR - aInUserR;
      }
      return a.nombre.localeCompare(b.nombre);
    });
  }
  onFilterChange() {
    if (this.selectedRegion) {
      this.comunas = [...new Set(this.clubes.filter((c) => c.region === this.selectedRegion).map((c) => c.comuna).filter((cm) => cm))].sort();
      if (!this.comunas.includes(this.selectedComuna)) {
        this.selectedComuna = "";
      }
    } else {
      this.comunas = [...this.allComunas];
    }
    this.sortClubes();
  }
  get filteredClubes() {
    let filtered = this.clubes;
    if (this.selectedCompetitionFilter === "torneo") {
      filtered = filtered.filter((c) => c.numTorneos > 0);
    } else if (this.selectedCompetitionFilter === "liga") {
      filtered = filtered.filter((c) => c.numLigas > 0);
    } else if (this.selectedCompetitionFilter === "americano") {
      filtered = filtered.filter((c) => c.numAmericanos > 0);
    }
    if (this.selectedRegion) {
      filtered = filtered.filter((c) => c.region === this.selectedRegion);
    }
    if (this.selectedComuna) {
      filtered = filtered.filter((c) => c.comuna === this.selectedComuna);
    }
    if (this.searchTerm && this.searchTerm.trim() !== "") {
      const term = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter((c) => c.nombre && c.nombre.toLowerCase().includes(term) || c.direccion && c.direccion.toLowerCase().includes(term));
    }
    return filtered;
  }
  get filteredCompeticiones() {
    let list = this.torneos;
    if (this.selectedCompetitionFilter === "torneo") {
      list = list.filter((t) => t.table_source === "v2");
    } else if (this.selectedCompetitionFilter === "liga") {
      list = list.filter((t) => t.table_source === "liga");
    } else if (this.selectedCompetitionFilter === "americano") {
      list = list.filter((t) => t.table_source === "americanos");
    }
    if (this.selectedRegion) {
      list = list.filter((t) => !t.club_region || t.club_region === this.selectedRegion);
    }
    if (this.selectedComuna) {
      list = list.filter((t) => !t.club_comuna || t.club_comuna === this.selectedComuna);
    }
    if (this.searchTerm && this.searchTerm.trim() !== "") {
      const term = this.searchTerm.toLowerCase().trim();
      list = list.filter((t) => t.nombre && t.nombre.toLowerCase().includes(term) || t.club_nombre && t.club_nombre.toLowerCase().includes(term));
    }
    return list;
  }
  onSelectClub(club) {
    this.selectedClub = club;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const clubId = Number(club.id);
    const allForClub = this.torneos.filter((t) => {
      const tClubId = Number(t.club_id);
      if (tClubId === clubId || tClubId <= 1 || !tClubId)
        return true;
      return false;
    });
    this.americanosList = allForClub.filter((t) => t.table_source === "americanos" && t.fecha >= today);
    this.torneosList = allForClub.filter((t) => t.table_source === "v2");
    this.ligasClubList = allForClub.filter((t) => t.table_source === "liga");
    this.mysql.getLigas(club.id).subscribe({
      next: (res) => {
        const fetchedLigas = res?.ligas || (Array.isArray(res) ? res : []);
        if (Array.isArray(fetchedLigas) && fetchedLigas.length > 0) {
          const ligasFormateadas = fetchedLigas.map((l) => __spreadProps(__spreadValues({}, l), {
            table_source: "liga",
            tipo: "Liga",
            club_id: l.club_id || club.id,
            imagen: l.imagen_url || "",
            imagen_display: l.imagen_url || "",
            fecha_display: l.fecha_inicio || "",
            fecha: l.fecha_inicio || "",
            inscritos: l.total_parejas || 0
          }));
          const existingIds = new Set(this.ligasClubList.map((l) => Number(l.id)));
          for (const fl of ligasFormateadas) {
            if (!existingIds.has(Number(fl.id))) {
              this.ligasClubList.push(fl);
            }
          }
        } else {
          this.mysql.getLigas().subscribe((resAll) => {
            const allLigas = resAll?.ligas || (Array.isArray(resAll) ? resAll : []);
            if (Array.isArray(allLigas) && allLigas.length > 0) {
              const ligasFormateadas = allLigas.map((l) => __spreadProps(__spreadValues({}, l), {
                table_source: "liga",
                tipo: "Liga",
                club_id: club.id,
                imagen: l.imagen_url || "",
                imagen_display: l.imagen_url || "",
                fecha_display: l.fecha_inicio || "",
                fecha: l.fecha_inicio || "",
                inscritos: l.total_parejas || 0
              }));
              const existingIds = new Set(this.ligasClubList.map((l) => Number(l.id)));
              for (const fl of ligasFormateadas) {
                if (!existingIds.has(Number(fl.id))) {
                  this.ligasClubList.push(fl);
                }
              }
            }
          });
        }
      },
      error: () => {
        this.mysql.getLigas().subscribe((resAll) => {
          const allLigas = resAll?.ligas || (Array.isArray(resAll) ? resAll : []);
          if (Array.isArray(allLigas) && allLigas.length > 0) {
            const ligasFormateadas = allLigas.map((l) => __spreadProps(__spreadValues({}, l), {
              table_source: "liga",
              tipo: "Liga",
              club_id: club.id,
              imagen: l.imagen_url || "",
              imagen_display: l.imagen_url || "",
              fecha_display: l.fecha_inicio || "",
              fecha: l.fecha_inicio || "",
              inscritos: l.total_parejas || 0
            }));
            const existingIds = new Set(this.ligasClubList.map((l) => Number(l.id)));
            for (const fl of ligasFormateadas) {
              if (!existingIds.has(Number(fl.id))) {
                this.ligasClubList.push(fl);
              }
            }
          }
        });
      }
    });
    if (this.selectedCompetitionFilter === "torneo") {
      this.selectedTab = "torneos";
    } else if (this.selectedCompetitionFilter === "liga") {
      this.selectedTab = "ligas";
    } else if (this.selectedCompetitionFilter === "americano") {
      this.selectedTab = "americanos";
    } else {
      if (this.americanosList.length > 0)
        this.selectedTab = "americanos";
      else if (this.torneosList.length > 0)
        this.selectedTab = "torneos";
      else if (this.ligasClubList.length > 0)
        this.selectedTab = "ligas";
      else
        this.selectedTab = "americanos";
    }
  }
  openEnrollment(torneo) {
    return __async(this, null, function* () {
      if (!torneo)
        return;
      this.selectedTournament = torneo;
      this.selectedPartner = null;
      this.partnerSearchTerm = "";
      this.partnerResults = [];
      this.restriccionesLiga = [];
      const tSource = (torneo.table_source || torneo.tipo_torneo || torneo.tipo || "").toLowerCase();
      if (torneo.categorias && Array.isArray(torneo.categorias) && torneo.categorias.length > 0) {
        this.availableCategorias = torneo.categorias;
        this.enrollmentStep = "category";
        this.showPartnerModal = true;
        return;
      }
      if (tSource.includes("v2") || tSource.includes("oficial") || tSource.includes("torneo")) {
        const loader = yield this.loadingCtrl.create({ message: "Cargando..." });
        yield loader.present();
        this.mysql.getTorneoCategorias(torneo.id).subscribe((categorias) => __async(this, null, function* () {
          loader.dismiss();
          if (!categorias || categorias.length === 0) {
            this.presentAlert("Aviso", "Este torneo a\xFAn no tiene categor\xEDas disponibles.");
            return;
          }
          this.availableCategorias = categorias;
          this.enrollmentStep = "category";
          this.showPartnerModal = true;
        }), (err) => {
          loader.dismiss();
          this.presentAlert("Error", "No se pudieron cargar las categor\xEDas");
        });
      } else if (tSource.includes("liga")) {
        const loader = yield this.loadingCtrl.create({ message: "Cargando categor\xEDas de la liga..." });
        yield loader.present();
        this.mysql.getLigaDetalle(torneo.id).subscribe({
          next: (res) => {
            loader.dismiss();
            const categorias = res?.liga?.categorias || res?.competicion?.categorias || [];
            if (categorias.length === 0) {
              this.presentAlert("Aviso", "Esta liga a\xFAn no tiene categor\xEDas disponibles.");
              return;
            }
            this.availableCategorias = categorias;
            this.enrollmentStep = "category";
            this.showPartnerModal = true;
          },
          error: (err) => {
            loader.dismiss();
            this.presentAlert("Error", "No se pudieron cargar las categor\xEDas de la liga");
          }
        });
      } else {
        this.enrollmentStep = "partner";
        this.showPartnerModal = true;
      }
    });
  }
  selectCategory(catId) {
    this.selectedCategoriaId = catId;
    this.enrollmentStep = "partner";
  }
  onPartnerSearch() {
    if (this.partnerSearchTerm.length < 3) {
      this.partnerResults = [];
      return;
    }
    this.mysql.getUsuarios(this.partnerSearchTerm).subscribe((res) => {
      const myId = this.getStoredUserId();
      this.partnerResults = res.filter((u) => u.id != myId);
    });
  }
  selectPartner(partner) {
    this.selectedPartner = partner;
    if (this.selectedTournament?.table_source === "liga") {
      this.enrollmentStep = "restrictions";
    } else {
      this.confirmEnrollment();
    }
  }
  confirmEnrollment() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Confirmar Inscripci\xF3n",
        message: `\xBFDeseas inscribirte al ${this.selectedTournament.tipo || "campeonato"} "${this.selectedTournament.nombre}" junto a ${this.selectedPartner.nombre}?`,
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Confirmar",
            handler: () => this.executeEnrollment()
          }
        ],
        mode: "ios"
      });
      yield alert.present();
    });
  }
  executeEnrollment() {
    return __async(this, null, function* () {
      const loader = yield this.loadingCtrl.create({ message: "Procesando inscripci\xF3n..." });
      yield loader.present();
      const myId = this.getStoredUserId();
      if (this.selectedTournament.table_source === "v2") {
        const myName = localStorage.getItem("userNombre") || "Jugador";
        const dataV2 = {
          torneo_id: Number(this.selectedTournament.id),
          categoria_id: this.selectedCategoriaId,
          jugador1_id: myId,
          jugador2_id: Number(this.selectedPartner.id),
          nombre_pareja: `${myName} / ${this.selectedPartner.nombre}`
        };
        this.mysql.enrollInTournamentV2(dataV2).subscribe({
          next: (res) => {
            loader.dismiss();
            if (res.success) {
              this.toastCtrl.create({
                message: res.mensaje || "\xA1Inscripci\xF3n realizada con \xE9xito!",
                duration: 3e3,
                color: "success",
                position: "top"
              }).then((t) => t.present());
              this.showPartnerModal = false;
              this.selectedClub = null;
              this.selectedMiTorneo = null;
              this.mainView = "mis-torneos";
              this.misTab = "activos";
              this.loadMisTorneos();
            } else {
              this.presentAlert("Atenci\xF3n", res.error || "No se pudo completar la inscripci\xF3n.");
            }
          },
          error: (err) => {
            loader.dismiss();
            console.error("Enrollment error:", err);
            const msg = err.error?.error || err.error?.mensaje || "Error de conexi\xF3n con el servidor.";
            this.presentAlert("Error", msg);
          }
        });
      } else if (this.selectedTournament.table_source === "liga") {
        const myName = localStorage.getItem("userNombre") || "Jugador";
        const dataLiga = {
          categoria_id: this.selectedCategoriaId,
          jugador1_id: myId,
          jugador2_id: Number(this.selectedPartner.id),
          nombre_pareja: `${myName} / ${this.selectedPartner.nombre}`,
          restricciones_horarias: this.restriccionesLiga
        };
        this.mysql.enrollInLiga(dataLiga).subscribe({
          next: (res) => {
            loader.dismiss();
            if (res.success) {
              this.toastCtrl.create({
                message: res.mensaje || "\xA1Inscripci\xF3n a la Liga realizada con \xE9xito!",
                duration: 3e3,
                color: "success",
                position: "top"
              }).then((t) => t.present());
              this.showPartnerModal = false;
              this.selectedClub = null;
              this.selectedMiTorneo = null;
              this.mainView = "mis-torneos";
              this.misTab = "activos";
              this.loadMisTorneos();
            } else {
              this.presentAlert("Atenci\xF3n", res.error || "No se pudo completar la inscripci\xF3n.");
            }
          },
          error: (err) => {
            loader.dismiss();
            console.error("League enrollment error:", err);
            const msg = err.error?.error || "Error de conexi\xF3n con el servidor.";
            this.presentAlert("Error", msg);
          }
        });
      } else {
        const data = {
          torneo_id: Number(this.selectedTournament.id),
          jugador1_id: myId,
          jugador2_id: Number(this.selectedPartner.id)
        };
        this.mysql.enrollInTournament(data).subscribe({
          next: (res) => {
            loader.dismiss();
            if (res.success) {
              this.toastCtrl.create({
                message: "\xA1Inscripci\xF3n realizada con \xE9xito!",
                duration: 3e3,
                color: "success",
                position: "top"
              }).then((t) => t.present());
              this.showPartnerModal = false;
              this.selectedClub = null;
              this.selectedMiTorneo = null;
              this.mainView = "mis-torneos";
              this.misTab = "activos";
              this.loadMisTorneos();
            } else {
              this.presentAlert("Atenci\xF3n", res.error || "No se pudo completar la inscripci\xF3n.");
            }
          },
          error: (err) => {
            loader.dismiss();
            console.error("Enrollment error:", err);
            const msg = err.error?.error || "Error de conexi\xF3n con el servidor.";
            this.presentAlert("Error", msg);
          }
        });
      }
    });
  }
  presentAlert(title, message) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: title,
        message,
        buttons: ["OK"],
        mode: "ios"
      });
      yield alert.present();
    });
  }
};
_JugadorCampeonatosPage.\u0275fac = function JugadorCampeonatosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JugadorCampeonatosPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(HapticFeedbackService));
};
_JugadorCampeonatosPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JugadorCampeonatosPage, selectors: [["app-jugador-campeonatos"]], decls: 15, vars: 16, consts: [[3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], ["class", "animate-up", 4, "ngIf"], [3, "didDismiss", "isOpen", "initialBreakpoint", "breakpoints"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 2, "margin-bottom", "25px", "margin-right", "20px"], [1, "back-fab-v7", 3, "click"], ["name", "arrow-back"], [1, "animate-up"], [1, "header-v2-discovery"], [1, "h-overlay"], [1, "h-content"], [1, "h-left"], [1, "h-pre"], [1, "h-title"], [1, "h-right"], [1, "h-avatar-mini"], ["alt", "Avatar", 3, "src"], [1, "discovery-body-v6"], [1, "main-switch-tabs"], [1, "switch-tab", 3, "click"], ["name", "trophy-outline"], ["name", "search-outline"], ["class", "skeleton-list animate-up", 4, "ngIf"], ["class", "empty-state-v6", 4, "ngIf"], [4, "ngIf"], [1, "skeleton-list", "animate-up"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "skeleton-row"], [1, "skeleton-box", "skeleton-circle", 2, "width", "44px", "height", "44px", "flex-shrink", "0"], [2, "flex", "1", "display", "flex", "flex-direction", "column", "gap", "8px"], [1, "skeleton-box", 2, "height", "16px", "width", "65%"], [1, "skeleton-box", 2, "height", "12px", "width", "40%"], [1, "skeleton-row", 2, "margin-top", "4px"], [1, "skeleton-box", 2, "height", "12px", "width", "35%"], [1, "skeleton-box", 2, "height", "12px", "width", "25%", "margin-left", "auto"], [1, "empty-state-v6"], [1, "cta-search", 3, "click"], [1, "mis-sub-tabs"], [1, "sub-tab", 3, "click"], ["name", "tennisball-outline"], [1, "tab-label"], ["class", "sub-count", 4, "ngIf"], ["name", "time-outline"], [1, "sub-count"], ["class", "mis-torneos-list", 4, "ngIf"], [1, "mis-torneos-list"], ["class", "mi-torneo-card animate-up", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], ["class", "cta-search", "style", "margin-top: 10px;", 3, "click", 4, "ngIf"], [1, "cta-search", 2, "margin-top", "10px", 3, "click"], [1, "mi-torneo-card", "animate-up", 3, "click"], [1, "mt-left"], [1, "mt-type-badge"], [1, "mt-center"], [1, "mt-club"], [1, "mt-meta"], ["name", "calendar-outline"], ["class", "mt-pareja", 4, "ngIf"], ["class", "mt-categoria", "style", "color: #6366f1; font-weight: 800;", 4, "ngIf"], [1, "mt-right"], [1, "mt-status", "activo"], [1, "mt-matches-count"], ["name", "chevron-forward"], [1, "mt-pareja"], [1, "mt-categoria", 2, "color", "#6366f1", "font-weight", "800"], ["class", "mi-torneo-card animate-up historial", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], ["class", "load-more-container", 4, "ngIf"], [1, "mi-torneo-card", "animate-up", "historial", 3, "click"], [1, "mt-status", "cerrado"], [1, "load-more-container"], [1, "load-more-btn", 3, "click"], ["name", "chevron-down"], ["class", "mi-torneo-card animate-up", 3, "historial", "animation-delay", "click", 4, "ngFor", "ngForOf"], [1, "mt-status"], [1, "filters-row-v6"], [1, "filter-item-v6"], ["name", "map-outline"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "chevron-down-outline", 1, "arrow-down"], ["name", "location-outline"], [1, "comp-filter-grid"], [1, "comp-chip", 3, "click"], [1, "search-bar-v6"], ["type", "text", "placeholder", "Buscar por club o competici\xF3n...", 3, "ngModelChange", "ngModel"], [1, "section-title-v6", 2, "margin-top", "15px", "margin-bottom", "12px", "display", "flex", "align-items", "center", "justify-content", "space-between"], [1, "badge-count-pill"], [1, "club-discovery-list", 2, "padding-bottom", "10px"], ["class", "empty-state-v6", "style", "padding: 20px; text-align: center;", 4, "ngIf"], ["class", "club-card-v5 animate-up", "style", "margin-bottom: 16px;", 3, "click", 4, "ngFor", "ngForOf"], [3, "value"], [1, "skeleton-box", 2, "height", "120px", "width", "100%", "border-radius", "16px", "margin-bottom", "6px"], [1, "skeleton-box", 2, "height", "18px", "width", "60%", "margin-top", "4px"], [1, "skeleton-box", 2, "height", "12px", "width", "40%", "margin-top", "2px"], [1, "empty-state-v6", 2, "padding", "20px", "text-align", "center"], ["name", "location-outline", 2, "font-size", "32px", "opacity", "0.6"], [2, "margin-top", "8px", "color", "#888"], [1, "club-card-v5", "animate-up", 2, "margin-bottom", "16px", 3, "click"], [1, "card-image-v5"], [1, "card-overlay-v5"], [1, "club-badges-v5"], [1, "badge-v5", "premium", 2, "background", "#ccff00", "color", "#000", "font-weight", "800"], [1, "card-info-v5"], [1, "info-header"], [1, "rating-v5"], ["name", "star"], [1, "address-v5"], [1, "club-comp-breakdown", 2, "display", "flex", "gap", "6px", "margin-top", "8px", "flex-wrap", "wrap"], ["style", "background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; color: #ccff00;", 4, "ngIf"], ["style", "background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; color: #30d158;", 4, "ngIf"], ["style", "background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; color: #0a84ff;", 4, "ngIf"], [2, "background", "rgba(255,255,255,0.08)", "padding", "3px 8px", "border-radius", "6px", "font-size", "11px", "font-weight", "600", "color", "#ccff00"], [2, "background", "rgba(255,255,255,0.08)", "padding", "3px 8px", "border-radius", "6px", "font-size", "11px", "font-weight", "600", "color", "#30d158"], [2, "background", "rgba(255,255,255,0.08)", "padding", "3px 8px", "border-radius", "6px", "font-size", "11px", "font-weight", "600", "color", "#0a84ff"], [1, "mi-torneo-detail-header"], [1, "mtd-overlay"], [1, "mtd-content"], [1, "mtd-info"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "8px"], [1, "mtd-badge"], [2, "display", "flex", "align-items", "center", "gap", "8px"], ["title", "Compartir Torneo", 2, "background", "rgba(37, 211, 102, 0.25)", "border", "1px solid rgba(37, 211, 102, 0.4)", "color", "#25d366", "border-radius", "50%", "width", "36px", "height", "36px", "display", "flex", "align-items", "center", "justify-content", "center", "cursor", "pointer", "backdrop-filter", "blur(8px)", "transition", "transform 0.2s", 3, "click"], ["name", "share-outline", 2, "font-size", "20px"], [2, "background", "rgba(255,255,255,0.15)", "border", "none", "color", "white", "border-radius", "50%", "width", "36px", "height", "36px", "display", "flex", "align-items", "center", "justify-content", "center", "cursor", "pointer", 3, "click"], ["name", "close-outline", 2, "font-size", "22px"], [1, "mtd-badges-row"], ["class", "mtd-tag pareja", 4, "ngIf"], ["class", "mtd-tag categoria", 4, "ngIf"], [1, "mtd-tag", "inscritos"], [1, "mi-torneo-detail-body"], ["class", "cat-selector-container", 4, "ngIf"], ["style", "background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 14px 16px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(15,23,42,0.15);", 4, "ngIf"], ["class", "comp-desc-card", "style", "background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 14px 16px; margin-bottom: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.02);", 4, "ngIf"], ["class", "section-block", "style", "margin-bottom: 20px;", 4, "ngIf"], [1, "comp-detail-tabs"], [1, "cd-tab", 3, "click"], ["name", "people-outline"], ["class", "cd-badge", 4, "ngIf"], ["name", "podium-outline"], ["class", "tab-pane animate-up", 4, "ngIf"], [1, "mtd-tag", "pareja"], [1, "mtd-tag", "categoria"], [1, "cat-selector-container"], [1, "cat-selector-label"], ["class", "cat-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "cat-pill", 3, "click"], [2, "background", "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", "border-radius", "16px", "padding", "14px 16px", "margin-bottom", "16px", "display", "flex", "align-items", "center", "justify-content", "space-between", "border", "1px solid rgba(255,255,255,0.08)", "box-shadow", "0 4px 15px rgba(15,23,42,0.15)"], [2, "color", "#ccff00", "font-weight", "900", "font-size", "10.5px", "text-transform", "uppercase", "letter-spacing", "0.5px", "display", "block"], [2, "color", "#ffffff", "font-weight", "800", "font-size", "13.5px"], [2, "display", "flex", "gap", "8px"], [2, "background", "#ccff00", "color", "#000", "font-weight", "900", "font-size", "11.5px", "padding", "9px 14px", "border-radius", "12px", "border", "none", "text-transform", "uppercase", "letter-spacing", "0.5px", "cursor", "pointer", "box-shadow", "0 4px 12px rgba(204,255,0,0.3)", 3, "click"], [1, "comp-desc-card", 2, "background", "#ffffff", "border", "1px solid #e2e8f0", "border-radius", "16px", "padding", "14px 16px", "margin-bottom", "16px", "box-shadow", "0 2px 10px rgba(0,0,0,0.02)"], [2, "margin", "0 0 6px 0", "font-size", "12px", "font-weight", "900", "color", "#0f172a", "display", "flex", "align-items", "center", "gap", "6px", "text-transform", "uppercase", "letter-spacing", "0.5px"], ["name", "list-outline", 2, "font-size", "16px", "color", "#6366f1"], [2, "margin", "0", "font-size", "12.5px", "color", "#475569", "line-height", "1.4", "white-space", "pre-line"], [1, "section-block", 2, "margin-bottom", "20px"], [1, "section-label", 2, "font-size", "13px", "font-weight", "800", "color", "#6366f1", "margin-bottom", "8px", "text-transform", "uppercase", "letter-spacing", "0.5px", "display", "flex", "align-items", "center", "gap", "6px"], ["name", "time-outline", 2, "font-size", "16px", "color", "#6366f1"], [1, "next-match-card", 2, "cursor", "pointer", 3, "click"], [1, "nm-header-badges"], ["class", "nm-badge-pill category", 4, "ngIf"], ["class", "nm-badge-pill", 4, "ngIf"], [1, "nm-badge-pill", "status", 2, "background", "rgba(99, 102, 241, 0.15)", "color", "#6366f1"], [1, "nm-teams"], [1, "nm-team"], [1, "nm-name"], [1, "nm-vs"], [1, "nm-meta-grid"], [1, "meta-box"], [1, "meta-label"], [1, "meta-value"], [1, "meta-box", "cancha-box"], [1, "nm-badge-pill", "category"], [1, "nm-badge-pill"], [1, "cd-badge"], [1, "tab-pane", "animate-up"], [1, "inscritos-sub-tabs"], [1, "ist-btn", 3, "click"], [1, "ist-icon"], [1, "ist-label"], [1, "ist-badge"], [1, "ist-btn", "busco-pareja-btn", 3, "click"], ["class", "ist-badge green", 4, "ngIf"], ["class", "agente-libre-callout", 4, "ngIf"], [1, "ist-badge", "green"], [1, "agente-libre-callout"], [1, "alc-left"], [1, "alc-icon"], [1, "alc-text"], [1, "alc-btn", 3, "click"], [1, "section-label"], ["name", "people-outline", 2, "color", "#6366f1"], ["class", "empty-matches", 4, "ngIf"], ["class", "inscritos-grid", 4, "ngIf"], ["class", "pagination-bar-mobile", 4, "ngIf"], [1, "empty-matches"], ["name", "people-outline", 2, "font-size", "32px", "color", "#94a3b8", "margin-bottom", "8px"], [1, "inscritos-grid"], ["class", "inscrito-card animate-up", "style", "cursor: pointer;", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], [1, "inscrito-card", "animate-up", 2, "cursor", "pointer", 3, "click"], [1, "ins-num"], [1, "ins-info"], [1, "ins-name"], ["class", "ins-sub", 4, "ngIf"], [1, "ins-badge", 2, "display", "flex", "align-items", "center", "gap", "4px"], [1, "ins-sub"], [1, "pagination-bar-mobile"], [1, "p-page-info"], [1, "p-btn-group"], [1, "p-nav-btn", 3, "click", "disabled"], ["name", "person-add-outline", 2, "color", "#059669"], ["class", "empty-agentes-box animate-up", 4, "ngIf"], ["class", "agentes-grid", 4, "ngIf"], [1, "empty-agentes-box", "animate-up"], [1, "eab-icon-circle"], [1, "eab-cta-btn", 3, "click"], ["name", "person-add-outline"], [1, "agentes-grid"], ["class", "agente-card animate-up", 4, "ngFor", "ngForOf"], [1, "agente-card", "animate-up"], [1, "ag-top-row"], [1, "ag-left-profile"], ["alt", "Avatar", 1, "ag-avatar", 3, "src"], [1, "ag-name-col"], [1, "ag-name"], [1, "ag-tags-row"], [1, "ag-tag", "nivel"], [1, "ag-tag", "pos"], [1, "ag-time"], ["class", "ag-msg", 4, "ngIf"], [1, "ag-actions-row"], ["class", "ag-dupla-btn", 3, "click", 4, "ngIf"], ["class", "ag-my-badge-wrap", 4, "ngIf"], [1, "ag-msg"], [1, "ag-dupla-btn", 3, "click"], [1, "ag-my-badge-wrap"], [1, "ag-active-pill"], ["title", "Cancelar publicaci\xF3n", 1, "ag-delete-btn", 3, "click"], ["name", "trash-outline"], [1, "fixture-header-row"], ["name", "calendar-outline", 2, "color", "#6366f1"], ["class", "fixture-filter-toggle", 4, "ngIf"], ["class", "jornadas-scroll", 4, "ngIf"], ["class", "match-history-list", 4, "ngIf"], [1, "fixture-filter-toggle"], ["type", "button", 3, "click"], [1, "jornadas-scroll"], ["class", "jornada-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "jornada-chip", 3, "click"], ["class", "btn-show-all-jornada", 3, "click", 4, "ngIf"], [1, "btn-show-all-jornada", 3, "click"], [1, "match-history-list"], ["class", "mh-card animate-up", "style", "cursor: pointer;", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], [1, "mh-card", "animate-up", 2, "cursor", "pointer", 3, "click"], [1, "mh-indicator"], [1, "mh-dot"], [1, "mh-content"], [1, "mh-teams"], [1, "mh-t1"], ["class", "mh-score", 4, "ngIf"], ["class", "mh-score pending", 4, "ngIf"], [1, "mh-t2"], [1, "mh-meta"], [1, "mh-result-label", 2, "display", "inline-flex", "align-items", "center", "gap", "4px"], [1, "mh-score"], [1, "mh-score", "pending"], ["name", "podium-outline", 2, "color", "#6366f1"], ["class", "standings-table-container", 4, "ngIf"], [1, "standings-table-container"], [1, "standings-table"], [1, "col-pos"], [1, "col-team"], [1, "col-stat"], [1, "col-stat", "col-pts"], [1, "col-stat", "col-dif"], ["style", "cursor: pointer;", "title", "Tocar para ver Head to Head", 3, "click", 4, "ngFor", "ngForOf"], ["title", "Tocar para ver Head to Head", 2, "cursor", "pointer", 3, "click"], [1, "pos-badge"], [1, "team-name"], [1, "col-stat", "win-stat"], [1, "col-stat", "loss-stat"], [1, "detail-hero-v6"], [1, "hero-overlay-v6"], [1, "fab-back-v6", "right", 3, "click"], ["name", "close-outline"], [1, "detail-content-card"], [1, "club-info-header"], ["name", "share-outline", 1, "fav-icon-btn", 3, "click"], [1, "address-text"], [1, "nike-tabs-v6"], [1, "tab-item", 3, "click"], [1, "section-title-v6"], [1, "section-desc-v6"], [1, "tournament-list-v6"], ["class", "t-card-v6 animate-up", "style", "margin-bottom: 16px;", 4, "ngFor", "ngForOf"], [1, "t-card-v6", "animate-up", 2, "margin-bottom", "16px"], [1, "t-body"], [1, "t-header-row"], [1, "comp-badge", "americano"], ["class", "p-amount-pill", 4, "ngIf"], [1, "comp-title"], [1, "t-cat-row", 2, "margin-bottom", "8px", "display", "flex", "align-items", "center", "justify-content", "space-between", "flex-wrap", "wrap", "gap", "6px"], ["style", "background: rgba(99, 102, 241, 0.1); color: #6366f1; font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 8px;", 4, "ngIf"], [1, "t-capacity-pill"], [1, "t-footer-row"], [1, "t-meta"], [1, "btn-group-row"], [1, "view-detail-btn-v6", 3, "click"], [1, "join-btn-v6", 3, "click", "disabled"], [1, "p-amount-pill"], [2, "background", "rgba(99, 102, 241, 0.1)", "color", "#6366f1", "font-size", "11px", "font-weight", "800", "padding", "2px 8px", "border-radius", "8px"], ["class", "t-poster", 3, "background-image", 4, "ngIf"], [1, "comp-badge", "oficial"], [1, "t-poster"], ["name", "ribbon-outline"], [1, "comp-badge", "liga"], [1, "ion-padding-bottom"], ["class", "h2h-modal-body", "style", "padding: 24px 20px 40px; background: #ffffff;", 4, "ngIf"], [1, "h2h-modal-body", 2, "padding", "24px 20px 40px", "background", "#ffffff"], [1, "grab-handle", 2, "width", "44px", "height", "5px", "background", "#cbd5e1", "border-radius", "4px", "margin", "0 auto 18px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "16px"], [2, "background", "rgba(99, 102, 241, 0.12)", "color", "#6366f1", "padding", "4px 10px", "border-radius", "8px", "font-size", "11px", "font-weight", "900", "letter-spacing", "0.5px"], [2, "font-size", "12px", "font-weight", "700", "color", "#64748b"], ["name", "close-outline", 2, "font-size", "24px", "color", "#64748b", "cursor", "pointer", 3, "click"], [1, "h2h-vs-header", 2, "background", "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", "border-radius", "20px", "padding", "20px 16px", "color", "white", "margin-bottom", "20px", "box-shadow", "0 10px 25px rgba(15,23,42,0.2)"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "flex", "1", "text-align", "center"], [2, "width", "50px", "height", "50px", "border-radius", "50%", "background", "#ccff00", "color", "#000", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "20px", "font-weight", "900", "margin", "0 auto 8px", "border", "3px solid rgba(255,255,255,0.2)"], [2, "margin", "0", "font-size", "13px", "font-weight", "900", "color", "#ccff00", "line-height", "1.2"], [2, "font-size", "11px", "color", "rgba(255,255,255,0.7)"], [2, "padding", "0 12px", "text-align", "center"], [2, "background", "rgba(255,255,255,0.15)", "padding", "5px 10px", "border-radius", "12px", "font-size", "11px", "font-weight", "900", "letter-spacing", "1px"], [2, "font-size", "16px", "font-weight", "950", "color", "#ffffff", "margin-top", "6px"], [2, "width", "50px", "height", "50px", "border-radius", "50%", "background", "#6366f1", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "20px", "font-weight", "900", "margin", "0 auto 8px", "border", "3px solid rgba(255,255,255,0.2)"], [2, "margin", "0", "font-size", "13px", "font-weight", "900", "color", "#ffffff", "line-height", "1.2"], ["style", "background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 14px 16px; margin-bottom: 20px;", 4, "ngIf"], ["style", "margin-bottom: 20px;", 4, "ngIf"], [1, "section-label", 2, "font-size", "12px", "font-weight", "800", "color", "#0f172a", "margin-bottom", "8px", "text-transform", "uppercase"], ["style", "display: flex; flex-direction: column; gap: 8px;", 4, "ngIf"], ["style", "background: #f8fafc; border: 1.5px dashed #cbd5e1; border-radius: 16px; padding: 20px 16px; text-align: center;", 4, "ngIf"], [2, "margin-top", "24px"], [2, "width", "100%", "background", "#0f172a", "color", "#ffffff", "padding", "14px", "border-radius", "14px", "font-weight", "900", "font-size", "13px", "border", "none", "cursor", "pointer", "text-transform", "uppercase", "letter-spacing", "0.5px", 3, "click"], [2, "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "16px", "padding", "14px 16px", "margin-bottom", "20px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "8px", "font-size", "12px", "font-weight", "800"], [2, "color", "#059669"], [2, "color", "#64748b"], [2, "color", "#6366f1"], [2, "height", "10px", "border-radius", "6px", "background", "#6366f1", "display", "flex", "overflow", "hidden"], [2, "background", "#10b981", "height", "100%"], [2, "display", "flex", "justify-content", "space-between", "margin-top", "8px", "font-size", "11px", "color", "#64748b", "font-weight", "700"], [2, "margin-bottom", "20px"], [2, "display", "grid", "grid-template-columns", "repeat(5, 1fr)", "gap", "6px"], [2, "background", "#f1f5f9", "padding", "10px 4px", "border-radius", "12px", "text-align", "center"], [2, "font-size", "9.5px", "color", "#64748b", "font-weight", "800", "display", "block"], [2, "font-size", "15px", "font-weight", "950", "color", "#0f172a"], [2, "font-size", "15px", "font-weight", "950", "color", "#10b981"], [2, "font-size", "15px", "font-weight", "950", "color", "#ef4444"], [2, "font-size", "15px", "font-weight", "950", "color", "#6366f1"], [2, "display", "flex", "flex-direction", "column", "gap", "8px"], ["style", "background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;", 4, "ngFor", "ngForOf"], [2, "background", "#ffffff", "border", "1px solid #e2e8f0", "border-radius", "12px", "padding", "10px 14px", "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "font-size", "12.5px", "font-weight", "800", "color", "#0f172a"], [2, "font-size", "11px", "color", "#64748b"], [2, "text-align", "right"], [2, "font-size", "13.5px", "font-weight", "900", "color", "#0f172a", "display", "block"], [2, "font-size", "10.5px", "font-weight", "800", "text-transform", "uppercase"], [2, "background", "#f8fafc", "border", "1.5px dashed #cbd5e1", "border-radius", "16px", "padding", "20px 16px", "text-align", "center"], [2, "font-size", "26px", "display", "block", "margin-bottom", "6px"], [2, "font-size", "13px", "font-weight", "850", "color", "#0f172a", "display", "block"], [2, "font-size", "11.5px", "color", "#64748b", "margin", "4px 0 0", "line-height", "1.4"], [2, "padding", "24px 20px 40px", "background", "#ffffff"], [2, "margin", "0", "font-size", "18px", "font-weight", "950", "color", "#0f172a"], [2, "background", "rgba(16, 185, 129, 0.1)", "border-radius", "14px", "padding", "12px", "margin-bottom", "18px", "display", "flex", "gap", "10px", "align-items", "center"], [2, "font-size", "20px"], [2, "margin", "0", "font-size", "12px", "color", "#047857", "line-height", "1.3"], [2, "margin-bottom", "16px"], [2, "display", "block", "font-size", "12px", "font-weight", "800", "color", "#0f172a", "margin-bottom", "8px"], [2, "display", "grid", "grid-template-columns", "repeat(3, 1fr)", "gap", "8px"], ["type", "button", 2, "padding", "10px", "border-radius", "10px", "border", "none", "font-weight", "800", "font-size", "12px", "cursor", "pointer", 3, "click"], ["placeholder", "Ej: Juego 5ta, motivado para competir y darlo todo...", "rows", "3", 2, "width", "100%", "border", "1px solid #cbd5e1", "border-radius", "12px", "padding", "10px 12px", "font-size", "13px", "outline", "none", "font-family", "inherit", "resize", "none", 3, "ngModelChange", "ngModel"], [2, "width", "100%", "background", "#059669", "color", "white", "padding", "14px", "border-radius", "14px", "font-weight", "900", "font-size", "13px", "border", "none", "cursor", "pointer", "text-transform", "uppercase", "letter-spacing", "0.5px", "box-shadow", "0 4px 15px rgba(5,150,105,0.3)", 3, "click"], [1, "partner-modal"], [1, "grab-handle"], [1, "p-header"], ["name", "close-outline", 3, "click"], [1, "p-results", "cat-list"], ["class", "cat-card animate-up", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], [1, "cat-card", "animate-up", 3, "click"], [1, "cat-icon"], [1, "cat-info"], [1, "cat-meta"], ["name", "chevron-forward-outline", 1, "go-icon"], [2, "display", "flex", "align-items", "center", "gap", "10px"], ["name", "arrow-back-outline", "style", "font-size: 24px; color: var(--nike-navy); opacity: 0.8;", 3, "click", 4, "ngIf"], [2, "margin", "0"], [2, "background", "rgba(16, 185, 129, 0.12)", "border", "1px solid rgba(16, 185, 129, 0.3)", "border-radius", "14px", "padding", "10px 14px", "margin", "10px 16px 14px", "display", "flex", "align-items", "center", "justify-content", "space-between", 3, "click"], [2, "font-size", "18px"], [2, "font-size", "12px", "font-weight", "800", "color", "#047857"], ["name", "chevron-forward-outline", 2, "color", "#059669", "font-size", "16px"], [1, "p-search"], ["type", "text", "placeholder", "Nombre de tu compa\xF1ero...", 3, "ngModelChange", "input", "ngModel"], [1, "p-results"], ["class", "p-item animate-up", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], ["class", "empty-res", 4, "ngIf"], ["name", "arrow-back-outline", 2, "font-size", "24px", "color", "var(--nike-navy)", "opacity", "0.8", 3, "click"], [1, "p-item", "animate-up", 3, "click"], [3, "src"], [1, "p-info"], [1, "n"], [1, "r"], [1, "empty-res"], [1, "back-title-group"], ["name", "arrow-back-outline", 1, "back-btn-icon", 3, "click"], ["name", "close-outline", 1, "close-btn-icon", 3, "click"], [1, "restrictions-container"], [1, "info-callout"], [1, "callout-icon"], ["class", "add-action-wrapper", 4, "ngIf"], ["class", "restrictions-list", 4, "ngIf"], [1, "confirm-btn-wrapper"], [1, "btn-confirm-enrollment", 3, "click"], [1, "add-action-wrapper"], ["type", "button", 1, "btn-add-restriction-mobile", 3, "click"], [1, "restrictions-list"], ["class", "restriction-item-card animate-up", 4, "ngFor", "ngForOf"], [1, "restriction-item-card", "animate-up"], [1, "item-header"], [1, "item-title"], ["type", "button", 1, "btn-delete-restriction", 3, "click"], [1, "item-inputs"], [1, "day-picker-label"], [1, "day-chips-grid"], ["type", "button", "class", "day-chip-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "time-range-group"], [1, "time-input-box"], ["type", "time", 1, "input-time", 3, "ngModelChange", "ngModel"], [1, "sep-text"], ["type", "button", 1, "day-chip-btn", 3, "click"]], template: function JugadorCampeonatosPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-refresher", 1);
    \u0275\u0275listener("ionRefresh", function JugadorCampeonatosPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      return ctx.doRefresh($event);
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, JugadorCampeonatosPage_div_3_Template, 22, 9, "div", 2)(4, JugadorCampeonatosPage_div_4_Template, 44, 25, "div", 2)(5, JugadorCampeonatosPage_div_5_Template, 22, 13, "div", 2);
    \u0275\u0275elementStart(6, "ion-modal", 3);
    \u0275\u0275listener("didDismiss", function JugadorCampeonatosPage_Template_ion_modal_didDismiss_6_listener() {
      return ctx.closeH2HModal();
    });
    \u0275\u0275template(7, JugadorCampeonatosPage_ng_template_7_Template, 2, 1, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-modal", 3);
    \u0275\u0275listener("didDismiss", function JugadorCampeonatosPage_Template_ion_modal_didDismiss_8_listener() {
      return ctx.showAgenteLibreModal = false;
    });
    \u0275\u0275template(9, JugadorCampeonatosPage_ng_template_9_Template, 31, 13, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-modal", 3);
    \u0275\u0275listener("didDismiss", function JugadorCampeonatosPage_Template_ion_modal_didDismiss_10_listener() {
      return ctx.showPartnerModal = false;
    });
    \u0275\u0275template(11, JugadorCampeonatosPage_ng_template_11_Template, 6, 3, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-fab", 4)(13, "ion-fab-button", 5);
    \u0275\u0275listener("click", function JugadorCampeonatosPage_Template_ion_fab_button_click_13_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(14, "ion-icon", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.selectedClub && !ctx.selectedCompeticionDetail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedCompeticionDetail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedClub && !ctx.selectedCompeticionDetail);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showH2HModal)("initialBreakpoint", 0.85)("breakpoints", \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.showAgenteLibreModal)("initialBreakpoint", 0.75)("breakpoints", \u0275\u0275pureFunction0(14, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.showPartnerModal)("initialBreakpoint", 0.8)("breakpoints", \u0275\u0275pureFunction0(15, _c2));
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  IonContent,
  IonIcon,
  IonModal,
  IonFab,
  IonFabButton,
  IonRefresher,
  IonRefresherContent,
  UpperCasePipe,
  DatePipe
], styles: ['\n\n[_nghost-%COMP%] {\n  --nike-black: #000000;\n  --nike-white: #ffffff;\n  --nike-gray: #f8f8fa;\n  --nike-text-gray: #8e8e93;\n  --nike-neon: #ccff00;\n  --nike-border: #f1f1f7;\n  --nike-navy: #0f172a;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: var(--nike-black);\n  font-family: "Outfit", sans-serif;\n}\n.main-switch-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 20px;\n  padding: 5px;\n  margin-bottom: 25px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);\n  border: 1px solid var(--nike-border);\n}\n.main-switch-tabs[_ngcontent-%COMP%]   .switch-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px 10px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  color: var(--nike-text-gray);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.main-switch-tabs[_ngcontent-%COMP%]   .switch-tab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.main-switch-tabs[_ngcontent-%COMP%]   .switch-tab.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.3);\n}\n.mis-sub-tabs[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: 1fr 1fr !important;\n  gap: 10px !important;\n  padding: 0 !important;\n  margin: 0 0 18px 0 !important;\n  width: 100% !important;\n  box-sizing: border-box !important;\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab[_ngcontent-%COMP%] {\n  width: 100% !important;\n  min-width: 0 !important;\n  box-sizing: border-box !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 6px !important;\n  padding: 11px 4px !important;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-radius: 20px;\n  color: var(--nike-text-gray);\n  font-size: 13px;\n  font-weight: 800;\n  white-space: nowrap;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  transition: transform 0.3s ease;\n  flex-shrink: 0 !important;\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab[_ngcontent-%COMP%]   .tab-label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 800;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab[_ngcontent-%COMP%]   .sub-count[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  color: #64748b;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 900;\n  margin-left: 2px;\n  flex-shrink: 0 !important;\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: white;\n  border-color: var(--nike-navy);\n  box-shadow: 0 6px 16px rgba(5, 12, 28, 0.2);\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab.active[_ngcontent-%COMP%]   .tab-label[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.mis-sub-tabs[_ngcontent-%COMP%]   .sub-tab.active[_ngcontent-%COMP%]   .sub-count[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.25);\n  color: var(--nike-neon);\n}\n.mi-torneo-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 18px;\n  margin-bottom: 14px;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s ease;\n}\n.mi-torneo-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.mi-torneo-card.historial[_ngcontent-%COMP%] {\n  opacity: 0.85;\n  background: #fbfbfb;\n}\n.mi-torneo-card.historial[_ngcontent-%COMP%]   .mt-type-badge[_ngcontent-%COMP%] {\n  filter: grayscale(0.4);\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-left[_ngcontent-%COMP%]   .mt-type-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 950;\n  letter-spacing: 0.5px;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-left[_ngcontent-%COMP%]   .mt-type-badge.americano[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.2);\n  color: var(--nike-navy);\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-left[_ngcontent-%COMP%]   .mt-type-badge.oficial[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: #6366f1;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-left[_ngcontent-%COMP%]   .mt-type-badge.liga[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.15);\n  color: #0284c7;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-center[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-center[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-center[_ngcontent-%COMP%]   .mt-club[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-center[_ngcontent-%COMP%]   .mt-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-center[_ngcontent-%COMP%]   .mt-meta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-center[_ngcontent-%COMP%]   .mt-meta[_ngcontent-%COMP%]   .mt-pareja[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-center[_ngcontent-%COMP%]   .mt-meta[_ngcontent-%COMP%]   .mt-categoria[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n  padding: 2px 7px;\n  border-radius: 6px;\n  font-weight: 800;\n  display: inline-flex;\n  align-items: center;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-right[_ngcontent-%COMP%]   .mt-status[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 950;\n  letter-spacing: 0.5px;\n  padding: 4px 10px;\n  border-radius: 10px;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-right[_ngcontent-%COMP%]   .mt-status.activo[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-right[_ngcontent-%COMP%]   .mt-status.cerrado[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-right[_ngcontent-%COMP%]   .mt-matches-count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--nike-text-gray);\n}\n.mi-torneo-card[_ngcontent-%COMP%]   .mt-right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--nike-text-gray);\n  opacity: 0.4;\n}\n.load-more-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 10px 0 30px;\n}\n.load-more-container[_ngcontent-%COMP%]   .load-more-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: white;\n  color: var(--nike-navy);\n  padding: 14px 24px;\n  border-radius: 22px;\n  font-size: 13px;\n  font-weight: 800;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);\n  transition: all 0.2s ease;\n}\n.load-more-container[_ngcontent-%COMP%]   .load-more-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--nike-text-gray);\n}\n.load-more-container[_ngcontent-%COMP%]   .load-more-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n  background: var(--nike-gray);\n}\n.cta-search[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  padding: 14px 28px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  border: none;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 70px 25px 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 60%,\n      #334155 100%);\n  overflow: hidden;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.03) 0px,\n      rgba(255, 255, 255, 0.03) 2px,\n      transparent 2px,\n      transparent 10px);\n  opacity: 0.5;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-back[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-back[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   .mtd-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 950;\n  letter-spacing: 1px;\n  background: rgba(204, 255, 0, 0.2);\n  color: var(--nike-neon);\n  margin-bottom: 12px;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   .mtd-badge.americano[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.3);\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   .mtd-badge.liga[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.25);\n  color: #38bdf8;\n  border: 1px solid rgba(56, 189, 248, 0.4);\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   .mtd-badges-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   .mtd-badges-row[_ngcontent-%COMP%]   .mtd-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 800;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   .mtd-badges-row[_ngcontent-%COMP%]   .mtd-tag.pareja[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.15);\n  color: #ccff00;\n  border: 1px solid rgba(204, 255, 0, 0.35);\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   .mtd-badges-row[_ngcontent-%COMP%]   .mtd-tag.categoria[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.25);\n  color: #ffffff;\n  border: 1px solid rgba(99, 102, 241, 0.45);\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 28px;\n  font-weight: 950;\n  color: #fff;\n  letter-spacing: -1px;\n  line-height: 1.1;\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n}\n.mi-torneo-detail-header[_ngcontent-%COMP%]   .mtd-info[_ngcontent-%COMP%]   .mtd-pareja[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n  color: var(--nike-neon) !important;\n  font-weight: 800 !important;\n}\n.mi-torneo-detail-body[_ngcontent-%COMP%] {\n  background: #f4f7fa;\n  border-radius: 30px 30px 0 0;\n  margin-top: -20px;\n  position: relative;\n  z-index: 10;\n  padding: 30px 20px 120px;\n  min-height: 400px;\n}\n.cat-selector-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  padding: 4px 0;\n}\n.cat-selector-container[_ngcontent-%COMP%]   .cat-selector-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 850;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-right: 2px;\n}\n.cat-selector-container[_ngcontent-%COMP%]   .cat-pill[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 800;\n  cursor: pointer;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.cat-selector-container[_ngcontent-%COMP%]   .cat-pill[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.cat-selector-container[_ngcontent-%COMP%]   .cat-pill.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy) !important;\n  color: var(--nike-neon) !important;\n  border-color: var(--nike-navy) !important;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25) !important;\n}\n.section-block[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  font-weight: 950;\n  letter-spacing: 1.5px;\n  color: var(--nike-navy);\n  margin-bottom: 15px;\n}\n.section-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.6;\n}\n.next-match-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  border-radius: 20px;\n  padding: 20px 18px;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-header-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-header-badges[_ngcontent-%COMP%]   .nm-badge-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  font-size: 11px;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-header-badges[_ngcontent-%COMP%]   .nm-badge-pill.category[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-header-badges[_ngcontent-%COMP%]   .nm-badge-pill.status[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.15);\n  color: #ccff00;\n  border: 1px solid rgba(204, 255, 0, 0.3);\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-teams[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 6px 0 16px 0;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-teams[_ngcontent-%COMP%]   .nm-team[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-teams[_ngcontent-%COMP%]   .nm-team[_ngcontent-%COMP%]   .nm-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.3;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-teams[_ngcontent-%COMP%]   .nm-vs[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 950;\n  color: #ccff00;\n  padding: 6px 14px;\n  background: rgba(204, 255, 0, 0.12);\n  border: 1px solid rgba(204, 255, 0, 0.3);\n  border-radius: 12px;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-meta-grid[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px dashed rgba(255, 255, 255, 0.12);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-meta-grid[_ngcontent-%COMP%]   .meta-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 10px 8px;\n  text-align: center;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-meta-grid[_ngcontent-%COMP%]   .meta-box.cancha-box[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-meta-grid[_ngcontent-%COMP%]   .meta-box.cancha-box[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-meta-grid[_ngcontent-%COMP%]   .meta-box.cancha-box[_ngcontent-%COMP%]   .meta-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: right;\n  max-width: 65%;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-meta-grid[_ngcontent-%COMP%]   .meta-box[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-meta-grid[_ngcontent-%COMP%]   .meta-box[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ccff00;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-meta-grid[_ngcontent-%COMP%]   .meta-box[_ngcontent-%COMP%]   .meta-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-info[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding-top: 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.next-match-card[_ngcontent-%COMP%]   .nm-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.05);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.all-played-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #166534;\n  padding: 14px 20px;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 800;\n  margin-bottom: 25px;\n}\n.all-played-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.comp-detail-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 4px;\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 4px;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  width: 100%;\n  box-sizing: border-box;\n}\n.comp-detail-tabs[_ngcontent-%COMP%]   .cd-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 11px 4px;\n  border-radius: 14px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.3px;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  white-space: nowrap;\n  min-width: 0;\n}\n.comp-detail-tabs[_ngcontent-%COMP%]   .cd-tab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.comp-detail-tabs[_ngcontent-%COMP%]   .cd-tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11px;\n}\n.comp-detail-tabs[_ngcontent-%COMP%]   .cd-tab[_ngcontent-%COMP%]   .cd-badge[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 1px 5px;\n  border-radius: 8px;\n  font-size: 9.5px;\n  font-weight: 950;\n  flex-shrink: 0;\n  line-height: 1.4;\n}\n.comp-detail-tabs[_ngcontent-%COMP%]   .cd-tab[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.comp-detail-tabs[_ngcontent-%COMP%]   .cd-tab.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25);\n}\n.comp-detail-tabs[_ngcontent-%COMP%]   .cd-tab.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--nike-neon);\n}\n.comp-detail-tabs[_ngcontent-%COMP%]   .cd-tab.active[_ngcontent-%COMP%]   .cd-badge[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.25);\n  color: var(--nike-neon);\n}\n.inscritos-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.inscritos-grid[_ngcontent-%COMP%]   .inscrito-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #ffffff;\n  padding: 14px 16px;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.02);\n  transition: all 0.2s ease;\n}\n.inscritos-grid[_ngcontent-%COMP%]   .inscrito-card[_ngcontent-%COMP%]   .ins-num[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: var(--nike-navy);\n  font-weight: 950;\n  font-size: 13px;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n}\n.inscritos-grid[_ngcontent-%COMP%]   .inscrito-card[_ngcontent-%COMP%]   .ins-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.inscritos-grid[_ngcontent-%COMP%]   .inscrito-card[_ngcontent-%COMP%]   .ins-info[_ngcontent-%COMP%]   .ins-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14.5px;\n  font-weight: 850;\n  color: var(--nike-navy);\n  line-height: 1.35;\n  word-break: break-word;\n}\n.inscritos-grid[_ngcontent-%COMP%]   .inscrito-card[_ngcontent-%COMP%]   .ins-info[_ngcontent-%COMP%]   .ins-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 600;\n  word-break: break-word;\n}\n.inscritos-grid[_ngcontent-%COMP%]   .inscrito-card[_ngcontent-%COMP%]   .ins-badge[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  padding: 5px 11px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 850;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pagination-bar-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 18px;\n  background: #ffffff;\n  padding: 12px 16px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);\n}\n.pagination-bar-mobile[_ngcontent-%COMP%]   .p-page-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #475569;\n}\n.pagination-bar-mobile[_ngcontent-%COMP%]   .p-btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.pagination-bar-mobile[_ngcontent-%COMP%]   .p-btn-group[_ngcontent-%COMP%]   .p-nav-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: var(--nike-navy);\n  font-size: 12px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);\n}\n.pagination-bar-mobile[_ngcontent-%COMP%]   .p-btn-group[_ngcontent-%COMP%]   .p-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-bar-mobile[_ngcontent-%COMP%]   .p-btn-group[_ngcontent-%COMP%]   .p-nav-btn[_ngcontent-%COMP%]:not(:disabled):active {\n  transform: scale(0.96);\n  background: #f1f5f9;\n}\n.fixture-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.fixture-header-row[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.fixture-header-row[_ngcontent-%COMP%]   .fixture-filter-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  background: #f1f5f9;\n  padding: 3px;\n  border-radius: 12px;\n}\n.fixture-header-row[_ngcontent-%COMP%]   .fixture-filter-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 11px;\n  font-weight: 800;\n  border-radius: 9px;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.fixture-header-row[_ngcontent-%COMP%]   .fixture-filter-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n}\n.jornadas-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding: 2px 2px 14px;\n  margin-bottom: 18px;\n  scrollbar-width: none;\n  -webkit-overflow-scrolling: touch;\n}\n.jornadas-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.jornadas-scroll[_ngcontent-%COMP%]   .jornada-chip[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 12.5px;\n  white-space: nowrap;\n  cursor: pointer;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s ease;\n}\n.jornadas-scroll[_ngcontent-%COMP%]   .jornada-chip[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.jornadas-scroll[_ngcontent-%COMP%]   .jornada-chip.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-color: var(--nike-navy);\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25);\n}\n.btn-show-all-jornada[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 12px;\n  font-weight: 800;\n  background: var(--nike-navy);\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-show-all-jornada[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.match-history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mh-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 14px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 16px 18px;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s ease;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-indicator[_ngcontent-%COMP%] {\n  width: 4px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-indicator[_ngcontent-%COMP%]   .mh-dot[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background: #e2e8f0;\n}\n.mh-card.win[_ngcontent-%COMP%]   .mh-indicator[_ngcontent-%COMP%]   .mh-dot[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.mh-card.loss[_ngcontent-%COMP%]   .mh-indicator[_ngcontent-%COMP%]   .mh-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.mh-card.draw[_ngcontent-%COMP%]   .mh-indicator[_ngcontent-%COMP%]   .mh-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-teams[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-teams[_ngcontent-%COMP%]   .mh-t1[_ngcontent-%COMP%], \n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-teams[_ngcontent-%COMP%]   .mh-t2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13.5px;\n  font-weight: 850;\n  color: var(--nike-navy);\n  line-height: 1.35;\n  word-break: break-word;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-teams[_ngcontent-%COMP%]   .mh-t2[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-teams[_ngcontent-%COMP%]   .mh-score[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  padding: 6px 12px;\n  background: #f1f5f9;\n  border-radius: 12px;\n  flex-shrink: 0;\n  min-width: 50px;\n  text-align: center;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n  background: var(--nike-gray);\n  padding: 4px 9px;\n  border-radius: 8px;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-meta[_ngcontent-%COMP%]   .mh-result-label[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-meta[_ngcontent-%COMP%]   .mh-result-label.win[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-meta[_ngcontent-%COMP%]   .mh-result-label.loss[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mh-card[_ngcontent-%COMP%]   .mh-content[_ngcontent-%COMP%]   .mh-meta[_ngcontent-%COMP%]   .mh-result-label.draw[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mh-card.other[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.standings-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 12px 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);\n  scrollbar-width: none;\n}\n.standings-table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  table-layout: auto;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #f1f5f9;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 4px;\n  font-size: 10.5px;\n  text-transform: uppercase;\n  font-weight: 900;\n  letter-spacing: 0.3px;\n  color: #64748b;\n  white-space: nowrap;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.col-pos[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 24px;\n  padding-left: 6px;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.col-team[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.col-stat[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 3px;\n  width: 24px;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.col-pts[_ngcontent-%COMP%] {\n  color: var(--nike-navy);\n  font-weight: 950;\n  font-size: 11px;\n  width: 28px;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.col-dif[_ngcontent-%COMP%] {\n  font-weight: 800;\n  width: 34px;\n  padding-right: 6px;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f8fafc;\n  transition: background 0.15s ease;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:active {\n  background: #f8fafc;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 4px;\n  font-size: 12.5px;\n  vertical-align: middle;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.col-pos[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 900;\n  font-size: 13px;\n  padding-left: 6px;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.col-team[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--nike-navy);\n  line-height: 1.3;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.col-team[_ngcontent-%COMP%]   .team-name[_ngcontent-%COMP%] {\n  display: block;\n  word-break: break-word;\n  font-size: 12.5px;\n  font-weight: 800;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.col-stat[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #64748b;\n  font-weight: 700;\n  font-size: 12px;\n  padding: 12px 3px;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.col-stat.win-stat[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 800;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.col-stat.loss-stat[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 700;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.col-stat.col-pts[_ngcontent-%COMP%] {\n  color: var(--nike-navy);\n  font-weight: 950;\n  font-size: 13.5px;\n}\n.standings-table-container[_ngcontent-%COMP%]   .standings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.col-stat.col-dif[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 11.5px;\n  padding-right: 6px;\n}\n.empty-matches[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 20px;\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n}\n.empty-matches[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n  margin: 0;\n}\n.header-v2-discovery[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 80px 25px 100px;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n.header-v2-discovery[_ngcontent-%COMP%]   .h-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.95) 0%,\n      rgba(15, 23, 42, 0.6) 100%);\n  z-index: 1;\n}\n.header-v2-discovery[_ngcontent-%COMP%]   .h-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.header-v2-discovery[_ngcontent-%COMP%]   .h-content[_ngcontent-%COMP%]   .h-left[_ngcontent-%COMP%]   .h-pre[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 950;\n  color: var(--nike-neon);\n  letter-spacing: 2px;\n  margin-bottom: 6px;\n}\n.header-v2-discovery[_ngcontent-%COMP%]   .h-content[_ngcontent-%COMP%]   .h-left[_ngcontent-%COMP%]   .h-title[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 950;\n  color: #fff;\n  letter-spacing: -1.5px;\n  margin: 0;\n  line-height: 1;\n}\n.header-v2-discovery[_ngcontent-%COMP%]   .h-content[_ngcontent-%COMP%]   .h-avatar-mini[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 2px solid var(--nike-neon);\n  overflow: hidden;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.header-v2-discovery[_ngcontent-%COMP%]   .h-content[_ngcontent-%COMP%]   .h-avatar-mini[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.discovery-body-v6[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  position: relative;\n  z-index: 10;\n  background: #f4f7fa;\n  border-radius: 40px 40px 0 0;\n  padding: 30px 18px 100px;\n  min-height: 500px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .comp-filter-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 6px;\n  margin-bottom: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .comp-filter-grid[_ngcontent-%COMP%]   .comp-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 10px 4px;\n  border-radius: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  font-size: 11px;\n  font-weight: 800;\n  color: #475569;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  text-align: center;\n  min-width: 0;\n  white-space: nowrap;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .comp-filter-grid[_ngcontent-%COMP%]   .comp-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .comp-filter-grid[_ngcontent-%COMP%]   .comp-chip[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .comp-filter-grid[_ngcontent-%COMP%]   .comp-chip.active[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #ccff00;\n  border-color: #0f172a;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .filters-row-v6[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n  margin-bottom: 12px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .filters-row-v6[_ngcontent-%COMP%]   .filter-item-v6[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n  min-width: 0;\n  box-sizing: border-box;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .filters-row-v6[_ngcontent-%COMP%]   .filter-item-v6[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .filters-row-v6[_ngcontent-%COMP%]   .filter-item-v6[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .filters-row-v6[_ngcontent-%COMP%]   .filter-item-v6[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-size: 11.5px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  outline: none;\n  appearance: none;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: inherit;\n  padding-right: 2px;\n  min-width: 0;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .search-bar-v6[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  padding: 12px 14px;\n  gap: 10px;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);\n  width: 100%;\n  box-sizing: border-box;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .search-bar-v6[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .search-bar-v6[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--nike-navy);\n  outline: none;\n  font-family: inherit;\n  min-width: 0;\n}\n.discovery-body-v6[_ngcontent-%COMP%]   .search-bar-v6[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-weight: 500;\n}\n.club-discovery-list[_ngcontent-%COMP%] {\n  padding: 10px 0 120px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 28px;\n  overflow: hidden;\n  margin-bottom: 25px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);\n  transition: all 0.3s ease;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-image-v5[_ngcontent-%COMP%] {\n  height: 200px;\n  background-image:\n    linear-gradient(\n      180deg,\n      #f8fafc,\n      #f1f5f9);\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-image-v5[_ngcontent-%COMP%]   .card-overlay-v5[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(15, 23, 42, 0.5));\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-image-v5[_ngcontent-%COMP%]   .club-badges-v5[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-image-v5[_ngcontent-%COMP%]   .club-badges-v5[_ngcontent-%COMP%]   .badge-v5[_ngcontent-%COMP%] {\n  background: var(--nike-neon);\n  color: var(--nike-navy);\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-info-v5[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-info-v5[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-info-v5[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  letter-spacing: -0.5px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-info-v5[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .rating-v5[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-info-v5[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .rating-v5[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 16px;\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-info-v5[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .rating-v5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 14px;\n  color: var(--nike-navy);\n}\n.club-discovery-list[_ngcontent-%COMP%]   .club-card-v5[_ngcontent-%COMP%]   .card-info-v5[_ngcontent-%COMP%]   .address-v5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.detail-hero-v6[_ngcontent-%COMP%] {\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.detail-hero-v6[_ngcontent-%COMP%]   .hero-overlay-v6[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(15, 23, 42, 0.7),\n      transparent);\n}\n.detail-hero-v6[_ngcontent-%COMP%]   .fab-back-v6.right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  right: 20px;\n  z-index: 100;\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  color: var(--nike-navy);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.detail-content-card[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  background: white;\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: relative;\n  z-index: 10;\n  padding: 30px 25px 120px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .club-info-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .club-info-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.detail-content-card[_ngcontent-%COMP%]   .club-info-header[_ngcontent-%COMP%]   .fav-icon-btn[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--nike-navy);\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 50%;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.detail-content-card[_ngcontent-%COMP%]   .club-info-header[_ngcontent-%COMP%]   .fav-icon-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.88);\n  background: rgba(0, 0, 0, 0.06);\n}\n.detail-content-card[_ngcontent-%COMP%]   .address-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .nike-tabs-v6[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  border-bottom: 1px solid var(--nike-border);\n  margin-bottom: 30px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .nike-tabs-v6[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%] {\n  padding: 12px 5px;\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--nike-text-gray);\n}\n.detail-content-card[_ngcontent-%COMP%]   .nike-tabs-v6[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%] {\n  color: var(--nike-navy);\n  border-bottom: 3px solid var(--nike-navy);\n}\n.detail-content-card[_ngcontent-%COMP%]   .section-title-v6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin-bottom: 6px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .section-desc-v6[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  margin-bottom: 25px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .empty-state-v6[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 20px;\n  color: var(--nike-text-gray);\n}\n.detail-content-card[_ngcontent-%COMP%]   .empty-state-v6[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 15px;\n  opacity: 0.3;\n}\n.detail-content-card[_ngcontent-%COMP%]   .empty-state-v6[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.badge-count-pill[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #ffffff;\n  font-size: 11px;\n  font-weight: 900;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.t-capacity-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n  font-size: 11px;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 8px;\n  letter-spacing: 0.2px;\n}\n.t-capacity-pill.full[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 18px;\n  margin-bottom: 16px;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);\n  transition: all 0.2s ease;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .t-poster[_ngcontent-%COMP%] {\n  height: 140px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 14px;\n  margin-bottom: 14px;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .t-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .t-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .comp-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 950;\n  letter-spacing: 0.8px;\n  padding: 4px 10px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .comp-badge.liga[_ngcontent-%COMP%] {\n  background: #00f0ff;\n  color: #0b0f19;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .comp-badge.americano[_ngcontent-%COMP%] {\n  background: #ccff00;\n  color: #0b0f19;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .comp-badge.oficial[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .p-amount-pill[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  background: var(--nike-gray);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .comp-title[_ngcontent-%COMP%] {\n  margin: 2px 0 2px 0;\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  line-height: 1.25;\n  letter-spacing: -0.3px;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .comp-club[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .t-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 1px solid #f1f5f9;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .t-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .t-meta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #2563eb;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .btn-group-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .view-detail-btn-v6[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #0f172a;\n  padding: 9px 14px;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 11px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  letter-spacing: 0.5px;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .view-detail-btn-v6[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: #e2e8f0;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .join-btn-v6[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  color: #ffffff;\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.8px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);\n  transition: all 0.2s ease;\n}\n.tournament-list-v6[_ngcontent-%COMP%]   .t-card-v6[_ngcontent-%COMP%]   .join-btn-v6[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.partner-modal[_ngcontent-%COMP%] {\n  padding: 20px 25px 40px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.partner-modal[_ngcontent-%COMP%]   .grab-handle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 0 auto 20px;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.partner-modal[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--nike-navy);\n  opacity: 0.5;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-search[_ngcontent-%COMP%] {\n  background: var(--nike-gray);\n  border-radius: 16px;\n  padding: 12px 18px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 25px;\n  border: 1px solid var(--nike-border);\n}\n.partner-modal[_ngcontent-%COMP%]   .p-search[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--nike-text-gray);\n}\n.partner-modal[_ngcontent-%COMP%]   .p-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 100%;\n  outline: none;\n  font-weight: 700;\n  color: var(--nike-navy);\n}\n.partner-modal[_ngcontent-%COMP%]   .p-results[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-results[_ngcontent-%COMP%]   .p-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--nike-border);\n}\n.partner-modal[_ngcontent-%COMP%]   .p-results[_ngcontent-%COMP%]   .p-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-results[_ngcontent-%COMP%]   .p-item[_ngcontent-%COMP%]   .p-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-results[_ngcontent-%COMP%]   .p-item[_ngcontent-%COMP%]   .p-info[_ngcontent-%COMP%]   .n[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  display: block;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-results[_ngcontent-%COMP%]   .p-item[_ngcontent-%COMP%]   .p-info[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--nike-text-gray);\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-results[_ngcontent-%COMP%]   .p-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--nike-navy);\n  font-size: 20px;\n}\n.partner-modal[_ngcontent-%COMP%]   .p-results[_ngcontent-%COMP%]   .empty-res[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--nike-text-gray);\n  font-weight: 700;\n}\n.partner-modal[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-top: 5px;\n}\n.partner-modal[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--nike-border);\n  border-radius: 16px;\n  padding: 16px;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  transition: all 0.2s ease;\n}\n.partner-modal[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  background: var(--nike-gray);\n}\n.partner-modal[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]   .cat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(204, 255, 0, 0.2);\n  color: var(--nike-navy);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.partner-modal[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]   .cat-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.partner-modal[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]   .cat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 16px;\n  font-weight: 900;\n  color: var(--nike-navy);\n}\n.partner-modal[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]   .cat-info[_ngcontent-%COMP%]   .cat-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n}\n.partner-modal[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]   .go-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--nike-text-gray);\n  opacity: 0.5;\n}\n.partner-modal[_ngcontent-%COMP%]   .back-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.partner-modal[_ngcontent-%COMP%]   .back-title-group[_ngcontent-%COMP%]   .back-btn-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--nike-navy);\n  cursor: pointer;\n}\n.partner-modal[_ngcontent-%COMP%]   .back-title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.partner-modal[_ngcontent-%COMP%]   .close-btn-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--nike-navy);\n  opacity: 0.5;\n  cursor: pointer;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%] {\n  padding: 10px 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .info-callout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  border-radius: 14px;\n  padding: 12px 14px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .info-callout[_ngcontent-%COMP%]   .callout-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .info-callout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  line-height: 1.4;\n  color: #0369a1;\n  font-weight: 600;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .info-callout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0c4a6e;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .add-action-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .btn-add-restriction-mobile[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n  border: 1px solid #7dd3fc;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 100%;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .btn-add-restriction-mobile[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  background: #bae6fd;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restrictions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--nike-border);\n  border-radius: 16px;\n  padding: 14px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .btn-delete-restriction[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n  border: 1px solid #fca5a5;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .day-picker-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 2px;\n  display: block;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .day-chips-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 6px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .day-chips-grid[_ngcontent-%COMP%]   .day-chip-btn[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 8px 0;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .day-chips-grid[_ngcontent-%COMP%]   .day-chip-btn.selected[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #ffffff;\n  border-color: #0f172a;\n  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.25);\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .day-chips-grid[_ngcontent-%COMP%]   .day-chip-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.94);\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .time-range-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .time-range-group[_ngcontent-%COMP%]   .time-input-box[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .time-range-group[_ngcontent-%COMP%]   .time-input-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .time-range-group[_ngcontent-%COMP%]   .input-time[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 8px;\n  border-radius: 10px;\n  border: 1.5px solid #cbd5e1;\n  background: #f8fafc;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  text-align: center;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .time-range-group[_ngcontent-%COMP%]   .input-time[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #ffffff;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .restriction-item-card[_ngcontent-%COMP%]   .item-inputs[_ngcontent-%COMP%]   .time-range-group[_ngcontent-%COMP%]   .sep-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  color: #94a3b8;\n  margin-top: 14px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .confirm-btn-wrapper[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .btn-confirm-enrollment[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  color: #ffffff;\n  padding: 16px;\n  border-radius: 16px;\n  font-size: 15px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.25);\n  transition: all 0.2s ease;\n}\n.partner-modal[_ngcontent-%COMP%]   .restrictions-container[_ngcontent-%COMP%]   .btn-confirm-enrollment[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_up {\n  from {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.back-fab-v7[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --color: #0f172a;\n  --border-radius: 50%;\n  --box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  width: 58px;\n  height: 58px;\n  border: 1.5px solid #e2e8f0;\n}\n.back-fab-v7[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #0f172a;\n}\n.back-fab-v7[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 6px;\n  margin-bottom: 18px;\n  background: #f1f5f9;\n  padding: 4px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n  width: 100%;\n  box-sizing: border-box;\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 6px;\n  border: none;\n  border-radius: 12px;\n  background: transparent;\n  color: #64748b;\n  font-weight: 800;\n  font-size: 11.5px;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  min-width: 0;\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn[_ngcontent-%COMP%]   .ist-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn[_ngcontent-%COMP%]   .ist-label[_ngcontent-%COMP%] {\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11.5px;\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn[_ngcontent-%COMP%]   .ist-badge[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n  font-size: 10px;\n  font-weight: 900;\n  padding: 1px 6px;\n  border-radius: 8px;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  line-height: 1.4;\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn[_ngcontent-%COMP%]   .ist-badge.green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #059669;\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.18);\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn.active[_ngcontent-%COMP%]   .ist-label[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn.active[_ngcontent-%COMP%]   .ist-badge[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.2);\n  color: var(--nike-neon);\n}\n.inscritos-sub-tabs[_ngcontent-%COMP%]   .ist-btn.active[_ngcontent-%COMP%]   .ist-badge.green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\n.agente-libre-callout[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #ecfdf5 100%);\n  border: 1.5px dashed #6ee7b7;\n  border-radius: 18px;\n  padding: 13px 15px;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.05);\n}\n.agente-libre-callout[_ngcontent-%COMP%]   .alc-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.agente-libre-callout[_ngcontent-%COMP%]   .alc-left[_ngcontent-%COMP%]   .alc-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: rgba(16, 185, 129, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.agente-libre-callout[_ngcontent-%COMP%]   .alc-left[_ngcontent-%COMP%]   .alc-text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.agente-libre-callout[_ngcontent-%COMP%]   .alc-left[_ngcontent-%COMP%]   .alc-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12.5px;\n  font-weight: 900;\n  color: #065f46;\n  line-height: 1.2;\n}\n.agente-libre-callout[_ngcontent-%COMP%]   .alc-left[_ngcontent-%COMP%]   .alc-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: #047857;\n  line-height: 1.3;\n}\n.agente-libre-callout[_ngcontent-%COMP%]   .alc-btn[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #ffffff;\n  border: none;\n  padding: 9px 14px;\n  border-radius: 12px;\n  font-weight: 900;\n  font-size: 11.5px;\n  white-space: nowrap;\n  cursor: pointer;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);\n  transition: all 0.2s ease;\n}\n.agente-libre-callout[_ngcontent-%COMP%]   .alc-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.empty-agentes-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 36px 20px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n  margin-top: 6px;\n}\n.empty-agentes-box[_ngcontent-%COMP%]   .eab-icon-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin: 0 auto 16px;\n}\n.empty-agentes-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 16px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.empty-agentes-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto 20px;\n  font-size: 12.5px;\n  line-height: 1.45;\n  color: #64748b;\n  max-width: 320px;\n  font-weight: 600;\n}\n.empty-agentes-box[_ngcontent-%COMP%]   .eab-cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #059669;\n  color: #ffffff;\n  border: none;\n  padding: 12px 22px;\n  border-radius: 14px;\n  font-size: 12.5px;\n  font-weight: 900;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);\n  transition: all 0.2s ease;\n}\n.empty-agentes-box[_ngcontent-%COMP%]   .eab-cta-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.empty-agentes-box[_ngcontent-%COMP%]   .eab-cta-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.agentes-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 6px;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 16px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%]   .ag-left-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%]   .ag-left-profile[_ngcontent-%COMP%]   .ag-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #059669;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%]   .ag-left-profile[_ngcontent-%COMP%]   .ag-name-col[_ngcontent-%COMP%]   .ag-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 900;\n  color: var(--nike-navy);\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%]   .ag-left-profile[_ngcontent-%COMP%]   .ag-name-col[_ngcontent-%COMP%]   .ag-tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 3px;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%]   .ag-left-profile[_ngcontent-%COMP%]   .ag-name-col[_ngcontent-%COMP%]   .ag-tags-row[_ngcontent-%COMP%]   .ag-tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 6px;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%]   .ag-left-profile[_ngcontent-%COMP%]   .ag-name-col[_ngcontent-%COMP%]   .ag-tags-row[_ngcontent-%COMP%]   .ag-tag.nivel[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%]   .ag-left-profile[_ngcontent-%COMP%]   .ag-name-col[_ngcontent-%COMP%]   .ag-tags-row[_ngcontent-%COMP%]   .ag-tag.pos[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-top-row[_ngcontent-%COMP%]   .ag-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-msg[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 12.5px;\n  color: #475569;\n  font-style: italic;\n  line-height: 1.4;\n  background: #f8fafc;\n  padding: 8px 12px;\n  border-radius: 10px;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-actions-row[_ngcontent-%COMP%]   .ag-dupla-btn[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border: none;\n  padding: 9px 16px;\n  border-radius: 12px;\n  font-weight: 900;\n  font-size: 11.5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);\n  transition: all 0.2s ease;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-actions-row[_ngcontent-%COMP%]   .ag-dupla-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-actions-row[_ngcontent-%COMP%]   .ag-my-badge-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-actions-row[_ngcontent-%COMP%]   .ag-my-badge-wrap[_ngcontent-%COMP%]   .ag-active-pill[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #059669;\n  font-size: 11px;\n  font-weight: 850;\n  padding: 5px 10px;\n  border-radius: 8px;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-actions-row[_ngcontent-%COMP%]   .ag-my-badge-wrap[_ngcontent-%COMP%]   .ag-delete-btn[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n  padding: 5px 10px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.2s ease;\n}\n.agentes-grid[_ngcontent-%COMP%]   .agente-card[_ngcontent-%COMP%]   .ag-actions-row[_ngcontent-%COMP%]   .ag-my-badge-wrap[_ngcontent-%COMP%]   .ag-delete-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n/*# sourceMappingURL=jugador-campeonatos.page.css.map */'] });
var JugadorCampeonatosPage = _JugadorCampeonatosPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JugadorCampeonatosPage, [{
    type: Component,
    args: [{ selector: "app-jugador-campeonatos", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonIcon,
      IonButton,
      IonModal,
      IonSpinner,
      IonFab,
      IonFabButton,
      IonRefresher,
      IonRefresherContent
    ], template: `<ion-content [fullscreen]="true">
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <!-- TOP-LEVEL TABS: MIS TORNEOS vs BUSCAR -->
  <div *ngIf="!selectedClub && !selectedCompeticionDetail" class="animate-up">
    <!-- Header -->
    <div class="header-v2-discovery" [style.background-image]="'url(' + heroBackground + ')'">
      <div class="h-overlay"></div>
      <div class="h-content">
        <div class="h-left">
          <p class="h-pre">DESCUBRE Y COMPITE,</p>
          <h1 class="h-title">CAMPEONATOS</h1>
        </div>
        <div class="h-right">
          <div class="h-avatar-mini">
            <img [src]="userPhoto" alt="Avatar">
          </div>
        </div>
      </div>
    </div>

    <div class="discovery-body-v6">
      <!-- Main Tabs: Mis Torneos / Buscar Torneos -->
      <div class="main-switch-tabs">
        <div class="switch-tab" [class.active]="mainView === 'mis-torneos'" (click)="mainView = 'mis-torneos'">
          <ion-icon name="trophy-outline"></ion-icon>
          MIS TORNEOS
        </div>
        <div class="switch-tab" [class.active]="mainView === 'buscar'" (click)="mainView = 'buscar'">
          <ion-icon name="search-outline"></ion-icon>
          BUSCAR
        </div>
      </div>

      <!-- ====================== -->
      <!-- MIS TORNEOS VIEW -->
      <!-- ====================== -->
      <div *ngIf="mainView === 'mis-torneos'" class="animate-up">
        <!-- SKELETON SHIMMER LOADING -->
        <div *ngIf="loadingMisTorneos" class="skeleton-list animate-up">
          <div class="skeleton-card" *ngFor="let s of [1, 2, 3]">
            <div class="skeleton-row">
              <div class="skeleton-box skeleton-circle" style="width: 44px; height: 44px; flex-shrink: 0;"></div>
              <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                <div class="skeleton-box" style="height: 16px; width: 65%;"></div>
                <div class="skeleton-box" style="height: 12px; width: 40%;"></div>
              </div>
            </div>
            <div class="skeleton-row" style="margin-top: 4px;">
              <div class="skeleton-box" style="height: 12px; width: 35%;"></div>
              <div class="skeleton-box" style="height: 12px; width: 25%; margin-left: auto;"></div>
            </div>
          </div>
        </div>

        <div *ngIf="!loadingMisTorneos && misTorneos.length === 0" class="empty-state-v6">
          <ion-icon name="trophy-outline"></ion-icon>
          <p>No est\xE1s inscrito en ning\xFAn torneo a\xFAn</p>
          <button class="cta-search" (click)="mainView = 'buscar'">Buscar Torneos</button>
        </div>

        <div *ngIf="!loadingMisTorneos && misTorneos.length > 0">
          <!-- Sub-tabs: En Curso / Historial / Todos -->
          <div class="mis-sub-tabs">
            <div class="sub-tab" [class.active]="misTab === 'activos'" (click)="misTab = 'activos'">
              <ion-icon name="tennisball-outline"></ion-icon>
              <span class="tab-label">En Curso</span>
              <span class="sub-count" *ngIf="misTorneosActivos.length > 0">{{ misTorneosActivos.length }}</span>
            </div>
            <div class="sub-tab" [class.active]="misTab === 'historial'" (click)="misTab = 'historial'">
              <ion-icon name="time-outline"></ion-icon>
              <span class="tab-label">Historial</span>
              <span class="sub-count" *ngIf="misTorneosHistorial.length > 0">{{ misTorneosHistorial.length }}</span>
            </div>
            <div class="sub-tab" [class.active]="misTab === 'todos'" (click)="misTab = 'todos'">
              <ion-icon name="trophy-outline"></ion-icon>
              <span class="tab-label">Todos</span>
              <span class="sub-count">{{ misTorneos.length }}</span>
            </div>
          </div>

          <!-- EN CURSO LIST -->
          <div class="mis-torneos-list" *ngIf="misTab === 'activos'">
            <div *ngIf="misTorneosActivos.length === 0" class="empty-state-v6">
              <ion-icon name="tennisball-outline"></ion-icon>
              <p>No tienes torneos en curso actualmente</p>
              <button class="cta-search" *ngIf="misTorneosHistorial.length > 0" (click)="misTab = 'historial'" style="margin-top: 10px;">
                Ver Historial de Torneos ({{ misTorneosHistorial.length }})
              </button>
              <button class="cta-search" *ngIf="misTorneosHistorial.length === 0" (click)="mainView = 'buscar'" style="margin-top: 10px;">
                Buscar Torneos
              </button>
            </div>
            <div class="mi-torneo-card animate-up" *ngFor="let t of misTorneosActivos; let i = index" 
                 [style.animation-delay]="i * 0.08 + 's'" (click)="openMiTorneo(t)">
              <div class="mt-left">
                <div class="mt-type-badge" [class.americano]="t.tipo_torneo === 'americano' || t.tipo_torneo === 'Americano' || t.tipo === 'Americano'" [class.liga]="t.tipo_torneo === 'liga' || t.tipo_torneo === 'Liga' || t.tipo === 'Liga'" [class.oficial]="t.tipo_torneo === 'oficial'">
                  {{ (t.tipo_torneo === 'americano' || t.tipo_torneo === 'Americano' || t.tipo === 'Americano') ? 'AM' : ((t.tipo_torneo === 'liga' || t.tipo_torneo === 'Liga' || t.tipo === 'Liga') ? 'LIGA' : 'OF') }}
                </div>
              </div>
              <div class="mt-center">
                <h4>{{ t.nombre }}</h4>
                <p class="mt-club">{{ t.club_nombre }}</p>
                <div class="mt-meta">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>{{ t.fecha | date:'dd MMM yyyy' }}</span>
                  <span class="mt-pareja" *ngIf="t.nombre_pareja">\u2022 {{ t.nombre_pareja }}</span>
                  <span class="mt-categoria" *ngIf="t.categoria_nombre || t.categoria" style="color: #6366f1; font-weight: 800;">\u2022 \u{1F3F7}\uFE0F {{ t.categoria_nombre || t.categoria }}</span>
                </div>
              </div>
              <div class="mt-right">
                <div class="mt-status activo">{{ getTorneoStatusLabel(t) }}</div>
                <div class="mt-matches-count">{{ t.partidos?.length || 0 }} partidos</div>
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
            </div>
          </div>

          <!-- HISTORIAL LIST -->
          <div class="mis-torneos-list" *ngIf="misTab === 'historial'">
            <div *ngIf="misTorneosHistorial.length === 0" class="empty-state-v6">
              <ion-icon name="time-outline"></ion-icon>
              <p>A\xFAn no tienes torneos en el historial</p>
            </div>
            
            <div class="mi-torneo-card animate-up historial" *ngFor="let t of paginatedHistorial; let i = index" 
                 [style.animation-delay]="i * 0.08 + 's'" (click)="openMiTorneo(t)">
              <div class="mt-left">
                <div class="mt-type-badge" [class.americano]="t.tipo_torneo === 'americano' || t.tipo_torneo === 'Americano' || t.tipo === 'Americano'" [class.liga]="t.tipo_torneo === 'liga' || t.tipo_torneo === 'Liga' || t.tipo === 'Liga'" [class.oficial]="t.tipo_torneo === 'oficial'">
                  {{ (t.tipo_torneo === 'americano' || t.tipo_torneo === 'Americano' || t.tipo === 'Americano') ? 'AM' : ((t.tipo_torneo === 'liga' || t.tipo_torneo === 'Liga' || t.tipo === 'Liga') ? 'LIGA' : 'OF') }}
                </div>
              </div>
              <div class="mt-center">
                <h4>{{ t.nombre }}</h4>
                <p class="mt-club">{{ t.club_nombre }}</p>
                <div class="mt-meta">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>{{ t.fecha | date:'dd MMM yyyy' }}</span>
                  <span class="mt-pareja" *ngIf="t.nombre_pareja">\u2022 {{ t.nombre_pareja }}</span>
                  <span class="mt-categoria" *ngIf="t.categoria_nombre || t.categoria" style="color: #6366f1; font-weight: 800;">\u2022 \u{1F3F7}\uFE0F {{ t.categoria_nombre || t.categoria }}</span>
                </div>
              </div>
              <div class="mt-right">
                <div class="mt-status cerrado">Finalizado</div>
                <div class="mt-matches-count">{{ t.partidos?.length || 0 }} partidos</div>
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
            </div>

            <!-- LOAD MORE BUTTON -->
            <div class="load-more-container" *ngIf="historyLimit < misTorneosHistorial.length">
              <button class="load-more-btn" (click)="loadMoreHistory()">
                Ver m\xE1s historial ({{ misTorneosHistorial.length - historyLimit }} restantes)
                <ion-icon name="chevron-down"></ion-icon>
              </button>
            </div>
          </div>

          <!-- TODOS LIST -->
          <div class="mis-torneos-list" *ngIf="misTab === 'todos'">
            <div class="mi-torneo-card animate-up" *ngFor="let t of misTorneos; let i = index" 
                 [class.historial]="!isTorneoActivo(t)"
                 [style.animation-delay]="i * 0.08 + 's'" (click)="openMiTorneo(t)">
              <div class="mt-left">
                <div class="mt-type-badge" [class.americano]="t.tipo_torneo === 'americano' || t.tipo_torneo === 'Americano' || t.tipo === 'Americano'" [class.liga]="t.tipo_torneo === 'liga' || t.tipo_torneo === 'Liga' || t.tipo === 'Liga'" [class.oficial]="t.tipo_torneo === 'oficial'">
                  {{ (t.tipo_torneo === 'americano' || t.tipo_torneo === 'Americano' || t.tipo === 'Americano') ? 'AM' : ((t.tipo_torneo === 'liga' || t.tipo_torneo === 'Liga' || t.tipo === 'Liga') ? 'LIGA' : 'OF') }}
                </div>
              </div>
              <div class="mt-center">
                <h4>{{ t.nombre }}</h4>
                <p class="mt-club">{{ t.club_nombre }}</p>
                <div class="mt-meta">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>{{ t.fecha | date:'dd MMM yyyy' }}</span>
                  <span class="mt-pareja" *ngIf="t.nombre_pareja">\u2022 {{ t.nombre_pareja }}</span>
                  <span class="mt-categoria" *ngIf="t.categoria_nombre || t.categoria" style="color: #6366f1; font-weight: 800;">\u2022 \u{1F3F7}\uFE0F {{ t.categoria_nombre || t.categoria }}</span>
                </div>
              </div>
              <div class="mt-right">
                <div class="mt-status" [class.activo]="isTorneoActivo(t)" [class.cerrado]="!isTorneoActivo(t)">
                  {{ isTorneoActivo(t) ? getTorneoStatusLabel(t) : 'Finalizado' }}
                </div>
                <div class="mt-matches-count">{{ t.partidos?.length || 0 }} partidos</div>
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ====================== -->
      <!-- ====================== -->
      <!-- BUSCAR TORNEOS VIEW -->
      <!-- ====================== -->
      <div *ngIf="mainView === 'buscar'" class="animate-up">
        <div class="filters-row-v6">
          <div class="filter-item-v6">
            <ion-icon name="map-outline"></ion-icon>
            <select [(ngModel)]="selectedRegion" (change)="onFilterChange()">
              <option value="">Regiones</option>
              <option *ngFor="let r of regiones" [value]="r">{{ r }}</option>
            </select>
            <ion-icon name="chevron-down-outline" class="arrow-down"></ion-icon>
          </div>
          <div class="filter-item-v6">
            <ion-icon name="location-outline"></ion-icon>
            <select [(ngModel)]="selectedComuna" (change)="onFilterChange()">
              <option value="">Comunas</option>
              <option *ngFor="let c of comunas" [value]="c">{{ c }}</option>
            </select>
            <ion-icon name="chevron-down-outline" class="arrow-down"></ion-icon>
          </div>
        </div>


        <div class="comp-filter-grid">
          <div class="comp-chip" [class.active]="selectedCompetitionFilter === 'todos'" (click)="selectedCompetitionFilter = 'todos'">
            <span>\u26A1</span> Todos
          </div>
          <div class="comp-chip" [class.active]="selectedCompetitionFilter === 'torneo'" (click)="selectedCompetitionFilter = 'torneo'">
            <span>\u{1F3C6}</span> Torneos
          </div>
          <div class="comp-chip" [class.active]="selectedCompetitionFilter === 'americano'" (click)="selectedCompetitionFilter = 'americano'">
            <span>\u{1F3BE}</span> Americ.
          </div>
          <div class="comp-chip" [class.active]="selectedCompetitionFilter === 'liga'" (click)="selectedCompetitionFilter = 'liga'">
            <span>\u{1F3C5}</span> Ligas
          </div>
        </div>

        <div class="search-bar-v6">
          <ion-icon name="search-outline"></ion-icon>
          <input type="text" [(ngModel)]="searchTerm" placeholder="Buscar por club o competici\xF3n...">
        </div>

        <!-- 1. PRIMERO: CLUBES DISPONIBLES -->
        <div class="section-title-v6" style="margin-top: 15px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
          <span>CLUBES DISPONIBLES</span>
          <span class="badge-count-pill">{{ filteredClubes.length }}</span>
        </div>

        <div class="club-discovery-list" style="padding-bottom: 10px;">
          <!-- SKELETON SHIMMER LOADING CLUBES -->
          <div *ngIf="loading" class="skeleton-list animate-up">
            <div class="skeleton-card" *ngFor="let s of [1, 2, 3]">
              <div class="skeleton-box" style="height: 120px; width: 100%; border-radius: 16px; margin-bottom: 6px;"></div>
              <div class="skeleton-box" style="height: 18px; width: 60%; margin-top: 4px;"></div>
              <div class="skeleton-box" style="height: 12px; width: 40%; margin-top: 2px;"></div>
            </div>
          </div>

          <div *ngIf="!loading && filteredClubes.length === 0" class="empty-state-v6" style="padding: 20px; text-align: center;">
            <ion-icon name="location-outline" style="font-size: 32px; opacity: 0.6;"></ion-icon>
            <p style="margin-top: 8px; color: #888;">No hay clubes con competiciones activas en esta selecci\xF3n</p>
          </div>

          <div class="club-card-v5 animate-up" *ngFor="let club of filteredClubes" (click)="onSelectClub(club)" style="margin-bottom: 16px;">
            <div class="card-image-v5" [style.background-image]="'url(' + club.logoUrl + ')'">
              <div class="card-overlay-v5"></div>
              <div class="club-badges-v5">
                <span class="badge-v5 premium" style="background: #ccff00; color: #000; font-weight: 800;">
                  \u26A1 {{ club.totalCompeticiones }} {{ club.totalCompeticiones === 1 ? 'ACTIVA' : 'ACTIVAS' }}
                </span>
              </div>
            </div>
            <div class="card-info-v5">
              <div class="info-header">
                <h3>{{ club.nombre }}</h3>
                <div class="rating-v5">
                  <ion-icon name="star"></ion-icon>
                  <span>4.9</span>
                </div>
              </div>
              <p class="address-v5">
                <ion-icon name="location-outline"></ion-icon>
                {{ club.direccion }}
              </p>
              <div class="club-comp-breakdown" style="display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap;">
                <span *ngIf="club.numTorneos > 0" style="background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; color: #ccff00;">\u{1F3C6} {{ club.numTorneos }} {{ club.numTorneos === 1 ? 'Torneo' : 'Torneos' }}</span>
                <span *ngIf="club.numLigas > 0" style="background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; color: #30d158;">\u{1F3C5} {{ club.numLigas }} {{ club.numLigas === 1 ? 'Liga' : 'Ligas' }}</span>
                <span *ngIf="club.numAmericanos > 0" style="background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; color: #0a84ff;">\u{1F3BE} {{ club.numAmericanos }} {{ club.numAmericanos === 1 ? 'Americano' : 'Americanos' }}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <!-- ========================================== -->
  <!-- ========================================== -->
  <!-- COMPETICI\xD3N DETAIL VIEW (Inscritos, Fixture Semanal, Posiciones) -->
  <!-- ========================================== -->
  <div *ngIf="selectedCompeticionDetail" class="animate-up">
    <div class="mi-torneo-detail-header">
      <div class="mtd-overlay"></div>
      <div class="mtd-content">
        <div class="mtd-info">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span class="mtd-badge" [class.americano]="selectedCompeticionDetail.tipo === 'americano' || selectedCompeticionDetail.tipo === 'Americano'" [class.liga]="selectedCompeticionDetail.tipo === 'liga' || selectedCompeticionDetail.tipo === 'Liga'">
              {{ (selectedCompeticionDetail.tipo === 'americano' || selectedCompeticionDetail.tipo === 'Americano') ? 'AMERICANO' : ((selectedCompeticionDetail.tipo === 'liga' || selectedCompeticionDetail.tipo === 'Liga') ? 'LIGA DE P\xC1DEL' : 'TORNEO OFICIAL') }}
            </span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <button (click)="shareCompeticionDetalle()" style="background: rgba(37, 211, 102, 0.25); border: 1px solid rgba(37, 211, 102, 0.4); color: #25d366; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(8px); transition: transform 0.2s;" title="Compartir Torneo">
                <ion-icon name="share-outline" style="font-size: 20px;"></ion-icon>
              </button>
              <button (click)="goBack()" style="background: rgba(255,255,255,0.15); border: none; color: white; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                <ion-icon name="close-outline" style="font-size: 22px;"></ion-icon>
              </button>
            </div>
          </div>
          <h1>{{ selectedCompeticionDetail.nombre }}</h1>
          <p>\u{1F4CD} {{ selectedCompeticionDetail.club_nombre }} \u2022 \u{1F4C5} {{ selectedCompeticionDetail.fecha_display }}</p>
          <div class="mtd-badges-row">
            <span class="mtd-tag pareja" *ngIf="isEnrolledInSelectedComp && getEnrolledPartnerName()">
              \u{1F3BE} Tu Pareja: {{ getEnrolledPartnerName() }}
            </span>
            <span class="mtd-tag categoria" *ngIf="getEnrolledCategoryName()">
              \u{1F3F7}\uFE0F {{ getEnrolledCategoryName() }}
            </span>
            <span class="mtd-tag inscritos">
              \u{1F465} {{ getInscritosDisplay(selectedCompeticionDetail) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="mi-torneo-detail-body">

      <!-- CATEGORY SELECTOR (if > 1 category) -->
      <div class="cat-selector-container" *ngIf="displayCategorias && displayCategorias.length > 1">
        <span class="cat-selector-label">Categor\xEDas:</span>
        <div class="cat-pill" *ngFor="let cat of displayCategorias; let idx = index"
             [class.active]="selectedCategoryIdx === idx" (click)="selectedCategoryIdx = idx; selectedJornadaIdx = 0;">
          {{ cat.nombre || cat.categoria || ('Cat ' + (idx + 1)) }}
        </div>
      </div>

      <!-- BANNER DE INSCRIPCI\xD3N SI EL JUGADOR NO EST\xC1 INSCRITO -->
      <div *ngIf="!isEnrolledInSelectedComp" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 14px 16px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(15,23,42,0.15);">
        <div>
          <span style="color: #ccff00; font-weight: 900; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.5px; display: block;">Inscripciones Abiertas</span>
          <span style="color: #ffffff; font-weight: 800; font-size: 13.5px;">{{ selectedCompeticionDetail.precio > 0 ? (formatPrecio(selectedCompeticionDetail.precio) + ' / Pareja') : 'Inscripci\xF3n Disponible' }}</span>
        </div>
        <div style="display: flex; gap: 8px;">
          <button (click)="openEnrollment(selectedCompeticionDetail)" style="background: #ccff00; color: #000; font-weight: 900; font-size: 11.5px; padding: 9px 14px; border-radius: 12px; border: none; text-transform: uppercase; letter-spacing: 0.5px; cursor: pointer; box-shadow: 0 4px 12px rgba(204,255,0,0.3);">
            \u26A1 Inscribirme
          </button>
        </div>
      </div>

      <!-- DESCRIPCI\xD3N Y REGLAS SI EXISTE -->
      <div class="comp-desc-card" *ngIf="selectedCompeticionDetail.descripcion" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 14px 16px; margin-bottom: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
        <h3 style="margin: 0 0 6px 0; font-size: 12px; font-weight: 900; color: #0f172a; display: flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
          <ion-icon name="list-outline" style="font-size: 16px; color: #6366f1;"></ion-icon>
          Descripci\xF3n y Reglas
        </h3>
        <p style="margin: 0; font-size: 12.5px; color: #475569; line-height: 1.4; white-space: pre-line;">{{ selectedCompeticionDetail.descripcion }}</p>
      </div>

      <!-- PR\xD3XIMO PARTIDO DEL JUGADOR INSCRITO -->
      <div class="section-block" *ngIf="isEnrolledInSelectedComp && selectedMiTorneo && miTorneoProximo" style="margin-bottom: 20px;">
        <div class="section-label" style="font-size: 13px; font-weight: 800; color: #6366f1; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px;">
          <ion-icon name="time-outline" style="font-size: 16px; color: #6366f1;"></ion-icon>
          MI PR\xD3XIMO PARTIDO
        </div>
        <div class="next-match-card" (click)="openH2HModal(miTorneoProximo, 'match')" style="cursor: pointer;">
          <div class="nm-header-badges">
            <span class="nm-badge-pill category" *ngIf="miTorneoProximo.categoria_nombre || miTorneoProximo.categoria">
              \u{1F3F7}\uFE0F {{ miTorneoProximo.categoria_nombre || miTorneoProximo.categoria }}
            </span>
            <span class="nm-badge-pill" *ngIf="miTorneoProximo.jornada_nombre || miTorneoProximo.grupo_nombre || miTorneoProximo.ronda">
              \u{1F4CC} {{ miTorneoProximo.jornada_nombre || miTorneoProximo.grupo_nombre || ('Ronda ' + miTorneoProximo.ronda) }}
            </span>
            <span class="nm-badge-pill status" style="background: rgba(99, 102, 241, 0.15); color: #6366f1;">
              \u2694\uFE0F Ver H2H
            </span>
          </div>

          <div class="nm-teams">
            <div class="nm-team">
              <span class="nm-name">{{ getMatchTeamNames(miTorneoProximo).team1 }}</span>
            </div>
            <div class="nm-vs">VS</div>
            <div class="nm-team">
              <span class="nm-name">{{ getMatchTeamNames(miTorneoProximo).team2 }}</span>
            </div>
          </div>

          <div class="nm-meta-grid">
            <div class="meta-box">
              <span class="meta-label">
                <ion-icon name="calendar-outline"></ion-icon>
                FECHA
              </span>
              <span class="meta-value">{{ getMatchFechaDisplay(miTorneoProximo) }}</span>
            </div>
            <div class="meta-box">
              <span class="meta-label">
                <ion-icon name="time-outline"></ion-icon>
                HORA
              </span>
              <span class="meta-value">{{ getMatchHoraDisplay(miTorneoProximo) }}</span>
            </div>
            <div class="meta-box cancha-box">
              <span class="meta-label">
                <ion-icon name="location-outline"></ion-icon>
                CANCHA
              </span>
              <span class="meta-value">{{ getMatchCanchaDisplay(miTorneoProximo) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN DETAIL TABS: INSCRITOS | FIXTURE SEMANAL | POSICIONES -->
      <div class="comp-detail-tabs">
        <div class="cd-tab" [class.active]="compDetailTab === 'inscritos'" (click)="compDetailTab = 'inscritos'">
          <ion-icon name="people-outline"></ion-icon>
          <span>INSCRITOS</span>
          <span class="cd-badge" *ngIf="currentDetailCategory?.inscritos">{{ currentDetailCategory.inscritos.length }}</span>
        </div>
        <div class="cd-tab" [class.active]="compDetailTab === 'fixture'" (click)="compDetailTab = 'fixture'">
          <ion-icon name="calendar-outline"></ion-icon>
          <span>FIXTURE</span>
        </div>
        <div class="cd-tab" [class.active]="compDetailTab === 'posiciones'" (click)="compDetailTab = 'posiciones'">
          <ion-icon name="podium-outline"></ion-icon>
          <span>POSICIONES</span>
        </div>
      </div>

      <!-- ==================== TAB 1: INSCRITOS ==================== -->
      <div *ngIf="compDetailTab === 'inscritos'" class="tab-pane animate-up">
        
        <!-- SUB-TABS: Parejas vs Busco Pareja -->
        <div class="inscritos-sub-tabs">
          <button class="ist-btn" [class.active]="subTabInscritos === 'parejas'" (click)="subTabInscritos = 'parejas'">
            <span class="ist-icon">\u{1F3BE}</span>
            <span class="ist-label">Parejas</span>
            <span class="ist-badge">{{ listInscritosCategoryDetail.length }}</span>
          </button>
          <button class="ist-btn busco-pareja-btn" [class.active]="subTabInscritos === 'busco_pareja'" (click)="subTabInscritos = 'busco_pareja'">
            <span class="ist-icon">\u{1F64B}\u200D\u2642\uFE0F</span>
            <span class="ist-label">Busco Pareja</span>
            <span class="ist-badge green" *ngIf="getBuscandoParejaList().length > 0">{{ getBuscandoParejaList().length }}</span>
          </button>
        </div>

        <!-- CALLOUT BUSCO PAREJA (Si no est\xE1 inscrito) -->
        <div class="agente-libre-callout" *ngIf="!isEnrolledInSelectedComp">
          <div class="alc-left">
            <div class="alc-icon">\u{1F91D}</div>
            <div class="alc-text">
              <h4>\xBFNo tienes pareja para jugar?</h4>
              <p>Reg\xEDstrate como Agente Libre o haz dupla con un jugador disponible.</p>
            </div>
          </div>
          <button class="alc-btn" (click)="inscribirComoAgenteLibre()">
            + Anotarme
          </button>
        </div>

        <!-- LISTA 1: PAREJAS CONFIRMADAS -->
        <div *ngIf="subTabInscritos === 'parejas'">
          <div class="section-label">
            <ion-icon name="people-outline" style="color: #6366f1;"></ion-icon>
            PAREJAS CONFIRMADAS ({{ currentDetailCategory?.nombre || 'General' }})
          </div>

          <div *ngIf="inscritosPaginadosDetail.length === 0" class="empty-matches">
            <ion-icon name="people-outline" style="font-size: 32px; color: #94a3b8; margin-bottom: 8px;"></ion-icon>
            <p>A\xFAn no hay parejas inscritas confirmadas en esta categor\xEDa.</p>
          </div>

          <div class="inscritos-grid" *ngIf="inscritosPaginadosDetail.length > 0">
            <div class="inscrito-card animate-up" *ngFor="let p of inscritosPaginadosDetail; let i = index" [style.animation-delay]="i * 0.04 + 's'" (click)="openH2HModal(p, 'standing')" style="cursor: pointer;">
              <div class="ins-num">
                #{{ (paginaInscritosDetail - 1) * itemsPorPaginaInscritosDetail + i + 1 }}
              </div>
              <div class="ins-info">
                <h4 class="ins-name">{{ getInscritoPairName(p) }}</h4>
                <p class="ins-sub" *ngIf="p.jugador1 || p.p1_nom">\u{1F3BE} {{ p.jugador1 || p.p1_nom }} {{ (p.jugador2 || p.p2_nom) ? ' / ' + (p.jugador2 || p.p2_nom) : '' }}</p>
              </div>
              <div class="ins-badge" style="display: flex; align-items: center; gap: 4px;">
                <span>\u2694\uFE0F H2H</span>
              </div>
            </div>
          </div>

          <!-- CONTROLES DE PAGINACI\xD3N INSCRITOS MOBILE -->
          <div class="pagination-bar-mobile" *ngIf="totalPaginasInscritosDetail > 1">
            <span class="p-page-info">P\xE1gina {{ paginaInscritosDetail }} de {{ totalPaginasInscritosDetail }}</span>
            <div class="p-btn-group">
              <button class="p-nav-btn" [disabled]="paginaInscritosDetail === 1" (click)="cambiarPaginaInscritosDetail(paginaInscritosDetail - 1)">
                \u25C4 Anterior
              </button>
              <button class="p-nav-btn" [disabled]="paginaInscritosDetail === totalPaginasInscritosDetail" (click)="cambiarPaginaInscritosDetail(paginaInscritosDetail + 1)">
                Siguiente \u25BA
              </button>
            </div>
          </div>
        </div>

        <!-- LISTA 2: JUGADORES BUSCANDO PAREJA (AGENTES LIBRES) -->
        <div *ngIf="subTabInscritos === 'busco_pareja'">
          <div class="section-label">
            <ion-icon name="person-add-outline" style="color: #059669;"></ion-icon>
            JUGADORES DISPONIBLES EN {{ (currentDetailCategory?.nombre || 'ESTA CATEGOR\xCDA') | uppercase }}
          </div>

          <!-- Empty State Elegante -->
          <div *ngIf="getBuscandoParejaList().length === 0" class="empty-agentes-box animate-up">
            <div class="eab-icon-circle">
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <h4>Sin jugadores en espera</h4>
            <p>No hay jugadores buscando compa\xF1ero por ahora. Si quieres jugar este torneo, an\xF3tate como Agente Libre para que otros te inviten.</p>
            <button class="eab-cta-btn" (click)="inscribirComoAgenteLibre()">
              <ion-icon name="person-add-outline"></ion-icon>
              <span>Anotarme en Busco Pareja</span>
            </button>
          </div>

          <!-- Lista de Agentes Libres Reales -->
          <div class="agentes-grid" *ngIf="getBuscandoParejaList().length > 0">
            <div class="agente-card animate-up" *ngFor="let ag of getBuscandoParejaList(); let i = index">
              <div class="ag-top-row">
                <div class="ag-left-profile">
                  <img [src]="ag.avatar || 'assets/avatar.png'" alt="Avatar" class="ag-avatar">
                  <div class="ag-name-col">
                    <h4 class="ag-name">{{ ag.nombre }}</h4>
                    <div class="ag-tags-row">
                      <span class="ag-tag nivel">Nivel {{ ag.nivel }}</span>
                      <span class="ag-tag pos">\u{1F3BE} {{ ag.posicion }}</span>
                    </div>
                  </div>
                </div>
                <span class="ag-time">{{ ag.tiempo }}</span>
              </div>
              <p *ngIf="ag.mensaje" class="ag-msg">"{{ ag.mensaje }}"</p>
              <div class="ag-actions-row">
                <button *ngIf="!isEnrolledInSelectedComp && !ag.esUsuarioActual" (click)="unirseConAgenteLibre(ag)" class="ag-dupla-btn">
                  <span>\u{1F91D} Hacer Dupla e Inscribirnos</span>
                </button>
                <div *ngIf="ag.esUsuarioActual" class="ag-my-badge-wrap">
                  <span class="ag-active-pill">\u2705 Tu publicaci\xF3n activa</span>
                  <button (click)="eliminarRegistroAgenteLibre(ag)" class="ag-delete-btn" title="Cancelar publicaci\xF3n">
                    <ion-icon name="trash-outline"></ion-icon>
                    <span>Eliminar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ==================== TAB 2: FIXTURE ==================== -->
      <div *ngIf="compDetailTab === 'fixture'" class="tab-pane animate-up">
        <div class="fixture-header-row">
          <div class="section-label">
            <ion-icon name="calendar-outline" style="color: #6366f1;"></ion-icon>
            FIXTURE - {{ currentDetailCategory?.nombre || 'General' }}
          </div>
          <!-- FILTER TOGGLE (visible when user is enrolled) -->
          <div *ngIf="isEnrolledInSelectedComp" class="fixture-filter-toggle">
            <button type="button" [class.active]="soloMisPartidosFixture" (click)="soloMisPartidosFixture = true">
              Mis Partidos
            </button>
            <button type="button" [class.active]="!soloMisPartidosFixture" (click)="soloMisPartidosFixture = false">
              Ver Todos
            </button>
          </div>
        </div>

        <!-- JORNADAS / WEEKS BAR -->
        <div class="jornadas-scroll" *ngIf="currentDetailJornadas.length > 0">
          <div class="jornada-chip" *ngFor="let j of currentDetailJornadas; let jIdx = index"
               [class.active]="selectedJornadaIdx === jIdx" (click)="selectedJornadaIdx = jIdx">
            {{ j.nombre || ('Semana ' + (j.numero_jornada || jIdx + 1)) }}
          </div>
        </div>

        <div *ngIf="filteredDetailJornadaPartidos.length === 0" class="empty-matches">
          <p *ngIf="soloMisPartidosFixture && currentDetailJornada?.partidos?.length > 0">No tienes partidos programados en esta jornada.</p>
          <p *ngIf="!soloMisPartidosFixture || !currentDetailJornada?.partidos || currentDetailJornada.partidos.length === 0">No hay partidos programados para esta fecha/jornada.</p>
          <button class="btn-show-all-jornada" *ngIf="soloMisPartidosFixture && currentDetailJornada?.partidos?.length > 0" (click)="soloMisPartidosFixture = false">
            \u{1F441}\uFE0F Ver todos los partidos de la jornada
          </button>
        </div>
        <!-- MATCHES LIST FOR SELECTED JORNADA -->
        <div class="match-history-list" *ngIf="filteredDetailJornadaPartidos.length > 0">
          <div class="mh-card animate-up" *ngFor="let m of filteredDetailJornadaPartidos; let i = index" [style.animation-delay]="i * 0.05 + 's'" (click)="openH2HModal(m, 'match')" style="cursor: pointer;">
            <div class="mh-indicator">
              <div class="mh-dot" [class.jugado]="m.estado === 'Jugado' || m.estado === 'Walkover'"></div>
            </div>
            <div class="mh-content">
              <div class="mh-teams">
                <span class="mh-t1">{{ getMatchTeamNames(m).team1 }}</span>
                <span class="mh-score" *ngIf="m.estado === 'Jugado' || m.estado === 'Walkover' || m.resultado_t1 !== null">
                  {{ getMatchScore(m) }}
                </span>
                <span class="mh-score pending" *ngIf="m.estado !== 'Jugado' && m.estado !== 'Walkover' && m.resultado_t1 === null">
                  VS
                </span>
                <span class="mh-t2">{{ getMatchTeamNames(m).team2 }}</span>
              </div>
              <div class="mh-meta">
                <span>\u{1F4CD} {{ getMatchCanchaDisplay(m) }}</span>
                <span>\u{1F4C5} {{ getMatchFechaDisplay(m) }}</span>
                <span>\u23F0 {{ getMatchHoraDisplay(m) }}</span>
                <span class="mh-result-label" [class.win]="m.estado === 'Jugado'" style="display: inline-flex; align-items: center; gap: 4px;">
                  <span>\u2694\uFE0F H2H</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== TAB 3: TABLA DE POSICIONES ==================== -->
      <div *ngIf="compDetailTab === 'posiciones'" class="tab-pane animate-up">
        <div class="section-label">
          <ion-icon name="podium-outline" style="color: #6366f1;"></ion-icon>
          TABLA DE POSICIONES - {{ currentDetailCategory?.nombre || 'General' }}
        </div>

        <div *ngIf="!currentDetailCategory?.tabla_posiciones || currentDetailCategory.tabla_posiciones.length === 0" class="empty-matches">
          <p>No se han registrado posiciones a\xFAn para esta categor\xEDa.</p>
        </div>

        <div class="standings-table-container" *ngIf="currentDetailCategory?.tabla_posiciones && currentDetailCategory.tabla_posiciones.length > 0">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="col-pos">#</th>
                <th class="col-team">Pareja / Jugador</th>
                <th class="col-stat">PJ</th>
                <th class="col-stat">PG</th>
                <th class="col-stat">PP</th>
                <th class="col-stat col-pts">PTS</th>
                <th class="col-stat col-dif">DIF G</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let pos of currentDetailCategory.tabla_posiciones" (click)="openH2HModal(pos, 'standing')" style="cursor: pointer;" title="Tocar para ver Head to Head">
                <td class="col-pos">
                  <span class="pos-badge" [class.gold]="pos.posicion === 1" [class.silver]="pos.posicion === 2" [class.bronze]="pos.posicion === 3">
                    {{ pos.posicion === 1 ? '\u{1F947}' : (pos.posicion === 2 ? '\u{1F948}' : (pos.posicion === 3 ? '\u{1F949}' : pos.posicion)) }}
                  </span>
                </td>
                <td class="col-team">
                  <span class="team-name">{{ getStandingPairName(pos) }}</span>
                </td>
                <td class="col-stat">{{ pos.pj }}</td>
                <td class="col-stat win-stat">{{ pos.pg }}</td>
                <td class="col-stat loss-stat">{{ pos.pp }}</td>
                <td class="col-stat col-pts">{{ pos.puntos }}</td>
                <td class="col-stat col-dif">{{ pos.dif_games > 0 ? '+' + pos.dif_games : pos.dif_games }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>

  <!-- ======================= -->
  <!-- 2. CLUB DETAIL VIEW -->
  <!-- ======================= -->
  <div *ngIf="selectedClub && !selectedCompeticionDetail" class="animate-up">
    <div class="detail-hero-v6" [style.background-image]="'url(' + (selectedClub.logoUrl || defaultClubImage) + '), url(assets/fondo-cancha.png)'">
      <div class="hero-overlay-v6"></div>
      <div class="fab-back-v6 right" (click)="goBack()">
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
    
    <div class="detail-content-card">
      <div class="club-info-header">
        <h2>{{ selectedClub.nombre }}</h2>
        <ion-icon name="share-outline" class="fav-icon-btn" (click)="shareClub()"></ion-icon>
      </div>
      <p class="address-text">{{ selectedClub.direccion }}</p>

      <!-- TABS -->
      <div class="nike-tabs-v6">
        <div class="tab-item" [class.active]="selectedTab === 'americanos'" (click)="selectedTab = 'americanos'">
          AMERICANOS
        </div>
        <div class="tab-item" [class.active]="selectedTab === 'torneos'" (click)="selectedTab = 'torneos'">
          TORNEOS
        </div>
        <div class="tab-item" [class.active]="selectedTab === 'ligas'" (click)="selectedTab = 'ligas'">
          LIGAS
        </div>
      </div>

      <!-- AMERICANOS LIST -->
      <div *ngIf="selectedTab === 'americanos'" class="animate-up">
        <div class="section-title-v6">PR\xD3XIMOS AMERICANOS</div>
        <div class="section-desc-v6">Inscr\xEDbete y compite en el formato m\xE1s din\xE1mico</div>

        <div *ngIf="americanosList.length === 0" class="empty-state-v6">
          <ion-icon name="tennisball-outline"></ion-icon>
          <p>No hay americanos programados</p>
        </div>

        <div class="tournament-list-v6">
          <div class="t-card-v6 animate-up" *ngFor="let t of americanosList" style="margin-bottom: 16px;">
            <div class="t-body">
              <div class="t-header-row">
                <span class="comp-badge americano">AMERICANO</span>
                <span class="p-amount-pill" *ngIf="formatPrecio(t.precio)">{{ formatPrecio(t.precio) }}</span>
              </div>

              <h4 class="comp-title">{{ t.nombre }}</h4>
              <div class="t-cat-row" style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
                <span *ngIf="t.categoria || t.categoria_nombre" style="background: rgba(99, 102, 241, 0.1); color: #6366f1; font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 8px;">\u{1F3F7}\uFE0F {{ t.categoria || t.categoria_nombre }}</span>
                <span class="t-capacity-pill" [class.full]="isCompFull(t)">
                  \u{1F465} {{ getInscritosDisplay(t) }}
                </span>
              </div>

              <div class="t-footer-row">
                <div class="t-meta">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>{{ t.fecha | date:'dd MMM, yyyy' }} \u2022 {{ (t.hora_inicio || '00:00').slice(0,5) }} HRS</span>
                </div>
                <div class="btn-group-row">
                  <button class="view-detail-btn-v6" (click)="openCompeticionDetail(t)">DETALLES</button>
                  <button class="join-btn-v6" (click)="openEnrollment(t)" [disabled]="isEnrolledInComp(t) || isCompFull(t)" [style.opacity]="(isEnrolledInComp(t) || isCompFull(t)) ? '0.5' : '1'" [style.cursor]="(isEnrolledInComp(t) || isCompFull(t)) ? 'not-allowed' : 'pointer'">
                    {{ isEnrolledInComp(t) ? 'INSCRITO' : (isCompFull(t) ? 'LLENO' : 'INSCRIPCI\xD3N') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TORNEOS LIST -->
      <div *ngIf="selectedTab === 'torneos'" class="animate-up">
        <div class="section-title-v6">TORNEOS OFICIALES</div>
        <div class="section-desc-v6">Suma puntos para el ranking de la academia</div>

        <div *ngIf="torneosList.length === 0" class="empty-state-v6">
          <ion-icon name="trophy-outline"></ion-icon>
          <p>No hay torneos activos para inscripci\xF3n</p>
        </div>

        <div class="tournament-list-v6">
          <div class="t-card-v6 animate-up" *ngFor="let t of torneosList" style="margin-bottom: 16px;">
             <div class="t-poster" *ngIf="t.poster_url || t.imagen_url" [style.background-image]="'url(' + (t.poster_url || t.imagen_url) + ')'"></div>
             <div class="t-body">
                <div class="t-header-row">
                  <span class="comp-badge oficial">TORNEO</span>
                  <span class="p-amount-pill" *ngIf="formatPrecio(t.precio)">{{ formatPrecio(t.precio) }}</span>
                </div>
                <h4 class="comp-title">{{ t.nombre }}</h4>
                <div class="t-cat-row" style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
                  <span *ngIf="t.categoria_nombre || t.categoria" style="background: rgba(99, 102, 241, 0.1); color: #6366f1; font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 8px;">\u{1F3F7}\uFE0F {{ t.categoria_nombre || t.categoria }}</span>
                  <span class="t-capacity-pill" [class.full]="isCompFull(t)">
                    \u{1F465} {{ getInscritosDisplay(t) }}
                  </span>
                </div>
                <div class="t-footer-row">
                  <div class="t-meta">
                    <ion-icon name="calendar-outline"></ion-icon>
                    <span>{{ t.fecha_display || ((t.fecha_inicio | date:'dd MMM') + ' - ' + (t.fecha_fin | date:'dd MMM')) }}</span>
                  </div>
                  <div class="btn-group-row">
                    <button class="view-detail-btn-v6" (click)="openCompeticionDetail(t)">DETALLES</button>
                    <button class="join-btn-v6" (click)="openEnrollment(t)" [disabled]="isEnrolledInComp(t) || isCompFull(t)" [style.opacity]="(isEnrolledInComp(t) || isCompFull(t)) ? '0.5' : '1'" [style.cursor]="(isEnrolledInComp(t) || isCompFull(t)) ? 'not-allowed' : 'pointer'">
                      {{ isEnrolledInComp(t) ? 'INSCRITO' : (isCompFull(t) ? 'LLENO' : 'INSCRIPCI\xD3N') }}
                    </button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <!-- LIGAS LIST -->
      <div *ngIf="selectedTab === 'ligas'" class="animate-up">
        <div class="section-title-v6">LIGAS DE P\xC1DEL</div>
        <div class="section-desc-v6">Compite semana a semana y clasifica a Playoffs</div>

        <div *ngIf="ligasClubList.length === 0" class="empty-state-v6">
          <ion-icon name="ribbon-outline"></ion-icon>
          <p>No hay ligas activas para inscripci\xF3n</p>
        </div>

        <div class="tournament-list-v6">
          <div class="t-card-v6 animate-up" *ngFor="let l of ligasClubList" style="margin-bottom: 16px;">
             <div class="t-poster" *ngIf="l.imagen_url || l.imagen || l.poster_url" [style.background-image]="'url(' + (l.imagen_url || l.imagen || l.poster_url) + ')'"></div>
             <div class="t-body">
                <div class="t-header-row">
                  <span class="comp-badge liga">LIGA</span>
                  <span class="p-amount-pill" *ngIf="formatPrecio(l.precio)">{{ formatPrecio(l.precio) }}</span>
                </div>
                <h4 class="comp-title">{{ l.nombre }}</h4>
                <div class="t-cat-row" style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
                  <span *ngIf="l.categoria_nombre || l.categoria" style="background: rgba(99, 102, 241, 0.1); color: #6366f1; font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 8px;">\u{1F3F7}\uFE0F {{ l.categoria_nombre || l.categoria }}</span>
                  <span class="t-capacity-pill" [class.full]="isCompFull(l)">
                    \u{1F465} {{ getInscritosDisplay(l) }}
                  </span>
                </div>
                <div class="t-footer-row">
                  <div class="t-meta">
                    <ion-icon name="calendar-outline"></ion-icon>
                    <span>{{ l.fecha_display || ((l.fecha_inicio | date:'dd MMM') + ' - ' + (l.fecha_fin | date:'dd MMM')) }}</span>
                  </div>
                  <div class="btn-group-row">
                    <button class="view-detail-btn-v6" (click)="openCompeticionDetail(l)">DETALLES</button>
                    <button class="join-btn-v6" (click)="openEnrollment(l)" [disabled]="isEnrolledInComp(l) || isCompFull(l)" [style.opacity]="(isEnrolledInComp(l) || isCompFull(l)) ? '0.5' : '1'" [style.cursor]="(isEnrolledInComp(l) || isCompFull(l)) ? 'not-allowed' : 'pointer'">
                      {{ isEnrolledInComp(l) ? 'INSCRITO' : (isCompFull(l) ? 'LLENO' : 'INSCRIPCI\xD3N') }}
                    </button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ============================================== -->
  <!-- MODAL 1: HEAD TO HEAD (H2H) & FICHA DE RIVAL -->
  <!-- ============================================== -->
  <ion-modal [isOpen]="showH2HModal" (didDismiss)="closeH2HModal()" [initialBreakpoint]="0.85" [breakpoints]="[0, 0.5, 0.85, 1]">
    <ng-template>
      <ion-content class="ion-padding-bottom">
        <div class="h2h-modal-body" *ngIf="selectedH2HData" style="padding: 24px 20px 40px; background: #ffffff;">
          <div class="grab-handle" style="width: 44px; height: 5px; background: #cbd5e1; border-radius: 4px; margin: 0 auto 18px;"></div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="background: rgba(99, 102, 241, 0.12); color: #6366f1; padding: 4px 10px; border-radius: 8px; font-size: 11px; font-weight: 900; letter-spacing: 0.5px;">\u2694\uFE0F HEAD TO HEAD</span>
              <span style="font-size: 12px; font-weight: 700; color: #64748b;">{{ selectedH2HData.categoria }}</span>
            </div>
            <ion-icon name="close-outline" (click)="closeH2HModal()" style="font-size: 24px; color: #64748b; cursor: pointer;"></ion-icon>
          </div>

          <!-- DUEL HEADER VS -->
          <div class="h2h-vs-header" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 20px; padding: 20px 16px; color: white; margin-bottom: 20px; box-shadow: 0 10px 25px rgba(15,23,42,0.2);">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              
              <!-- TEAM 1 (USER) -->
              <div style="flex: 1; text-align: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: #ccff00; color: #000; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900; margin: 0 auto 8px; border: 3px solid rgba(255,255,255,0.2);">
                  \u{1F3BE}
                </div>
                <h4 style="margin: 0; font-size: 13px; font-weight: 900; color: #ccff00; line-height: 1.2;">{{ selectedH2HData.myTeam }}</h4>
                <span style="font-size: 11px; color: rgba(255,255,255,0.7);">Tu Dupla</span>
              </div>

              <!-- VS BADGE -->
              <div style="padding: 0 12px; text-align: center;">
                <span style="background: rgba(255,255,255,0.15); padding: 5px 10px; border-radius: 12px; font-size: 11px; font-weight: 900; letter-spacing: 1px;">VS</span>
                <div style="font-size: 16px; font-weight: 950; color: #ffffff; margin-top: 6px;">{{ selectedH2HData.h2hWins }} - {{ selectedH2HData.h2hLosses }}</div>
              </div>

              <!-- TEAM 2 (RIVAL) -->
              <div style="flex: 1; text-align: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: #6366f1; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900; margin: 0 auto 8px; border: 3px solid rgba(255,255,255,0.2);">
                  \u2694\uFE0F
                </div>
                <h4 style="margin: 0; font-size: 13px; font-weight: 900; color: #ffffff; line-height: 1.2;">{{ selectedH2HData.rivalTeam }}</h4>
                <span style="font-size: 11px; color: rgba(255,255,255,0.7);">Rivales</span>
              </div>

            </div>
          </div>

          <!-- BALANCE & WINRATE BAR (Solo si hay enfrentamientos previos reales) -->
          <div *ngIf="selectedH2HData.h2hTotal > 0" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 14px 16px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px; font-weight: 800;">
              <span style="color: #059669;">{{ selectedH2HData.myWinRate }}% Victorias</span>
              <span style="color: #64748b;">Balance Hist\xF3rico</span>
              <span style="color: #6366f1;">{{ selectedH2HData.rivalWinRate }}% Victorias</span>
            </div>
            <!-- Progress comparison bar -->
            <div style="height: 10px; border-radius: 6px; background: #6366f1; display: flex; overflow: hidden;">
              <div [style.width]="selectedH2HData.myWinRate + '%'" style="background: #10b981; height: 100%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 11px; color: #64748b; font-weight: 700;">
              <span>{{ selectedH2HData.myGames }} Games ganados</span>
              <span>{{ selectedH2HData.rivalGames }} Games ganados</span>
            </div>
          </div>

          <!-- ESTAD\xCDSTICAS EN EL TORNEO ACTUAL SI EXISTEN (DATOS REALES) -->
          <div *ngIf="selectedH2HData.standing" style="margin-bottom: 20px;">
            <div class="section-label" style="font-size: 12px; font-weight: 800; color: #0f172a; margin-bottom: 8px; text-transform: uppercase;">
              \u{1F4CA} Rendimiento del Rival en esta Categor\xEDa
            </div>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px;">
              <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 12px; text-align: center;">
                <span style="font-size: 9.5px; color: #64748b; font-weight: 800; display: block;">PUESTO</span>
                <span style="font-size: 15px; font-weight: 950; color: #0f172a;">#{{ selectedH2HData.standing.posicion }}</span>
              </div>
              <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 12px; text-align: center;">
                <span style="font-size: 9.5px; color: #64748b; font-weight: 800; display: block;">JUGADOS</span>
                <span style="font-size: 15px; font-weight: 950; color: #0f172a;">{{ selectedH2HData.standing.pj }}</span>
              </div>
              <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 12px; text-align: center;">
                <span style="font-size: 9.5px; color: #64748b; font-weight: 800; display: block;">GANADOS</span>
                <span style="font-size: 15px; font-weight: 950; color: #10b981;">{{ selectedH2HData.standing.pg }}</span>
              </div>
              <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 12px; text-align: center;">
                <span style="font-size: 9.5px; color: #64748b; font-weight: 800; display: block;">PERDIDOS</span>
                <span style="font-size: 15px; font-weight: 950; color: #ef4444;">{{ selectedH2HData.standing.pp }}</span>
              </div>
              <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 12px; text-align: center;">
                <span style="font-size: 9.5px; color: #64748b; font-weight: 800; display: block;">DIF G</span>
                <span style="font-size: 15px; font-weight: 950; color: #6366f1;">{{ selectedH2HData.standing.dif_games }}</span>
              </div>
            </div>
          </div>

          <!-- HISTORIAL DE ENFRENTAMIENTOS PREVIOS (DATOS 100% REALES) -->
          <div>
            <div class="section-label" style="font-size: 12px; font-weight: 800; color: #0f172a; margin-bottom: 8px; text-transform: uppercase;">
              \u{1F3BE} Enfrentamientos Previos
            </div>
            
            <!-- Lista si existen partidos jugados -->
            <div *ngIf="selectedH2HData.historialMatches && selectedH2HData.historialMatches.length > 0" style="display: flex; flex-direction: column; gap: 8px;">
              <div *ngFor="let hm of selectedH2HData.historialMatches" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-size: 12.5px; font-weight: 800; color: #0f172a;">{{ hm.torneo }}</div>
                  <div style="font-size: 11px; color: #64748b;">\u{1F4C5} {{ hm.fecha }} \u2022 \u23F1\uFE0F {{ hm.duracion }}</div>
                </div>
                <div style="text-align: right;">
                  <span style="font-size: 13.5px; font-weight: 900; color: #0f172a; display: block;">{{ hm.resultado }}</span>
                  <span [style.color]="hm.ganador === 'myTeam' ? '#059669' : '#dc2626'" style="font-size: 10.5px; font-weight: 800; text-transform: uppercase;">
                    {{ hm.ganador === 'myTeam' ? '\u2713 Victoria' : '\u2717 Derrota' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Estado vac\xEDo ver\xEDdico si es el primer duelo -->
            <div *ngIf="!selectedH2HData.historialMatches || selectedH2HData.historialMatches.length === 0" style="background: #f8fafc; border: 1.5px dashed #cbd5e1; border-radius: 16px; padding: 20px 16px; text-align: center;">
              <span style="font-size: 26px; display: block; margin-bottom: 6px;">\u2694\uFE0F</span>
              <span style="font-size: 13px; font-weight: 850; color: #0f172a; display: block;">Primer Duelo Directo</span>
              <p style="font-size: 11.5px; color: #64748b; margin: 4px 0 0; line-height: 1.4;">
                No registran partidos previos jugados entre s\xED en esta competici\xF3n.
              </p>
            </div>
          </div>

          <!-- BOT\xD3N CERRAR -->
          <div style="margin-top: 24px;">
            <button (click)="closeH2HModal()" style="width: 100%; background: #0f172a; color: #ffffff; padding: 14px; border-radius: 14px; font-weight: 900; font-size: 13px; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;">
              Entendido
            </button>
          </div>

        </div>
      </ion-content>
    </ng-template>
  </ion-modal>

  <!-- ============================================== -->
  <!-- MODAL 2: REGISTRO COMO AGENTE LIBRE (BUSCO PAREJA) -->
  <!-- ============================================== -->
  <ion-modal [isOpen]="showAgenteLibreModal" (didDismiss)="showAgenteLibreModal = false" [initialBreakpoint]="0.75" [breakpoints]="[0, 0.5, 0.75, 1]">
    <ng-template>
      <ion-content class="ion-padding-bottom">
        <div style="padding: 24px 20px 40px; background: #ffffff;">
          <div class="grab-handle" style="width: 44px; height: 5px; background: #cbd5e1; border-radius: 4px; margin: 0 auto 18px;"></div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <h2 style="margin: 0; font-size: 18px; font-weight: 950; color: #0f172a;">\u{1F64B}\u200D\u2642\uFE0F Inscribirme en "Busco Pareja"</h2>
            <ion-icon name="close-outline" (click)="showAgenteLibreModal = false" style="font-size: 24px; color: #64748b; cursor: pointer;"></ion-icon>
          </div>

          <div style="background: rgba(16, 185, 129, 0.1); border-radius: 14px; padding: 12px; margin-bottom: 18px; display: flex; gap: 10px; align-items: center;">
            <span style="font-size: 20px;">\u{1F4A1}</span>
            <p style="margin: 0; font-size: 12px; color: #047857; line-height: 1.3;">
              Tu perfil quedar\xE1 visible en la pesta\xF1a <strong>"Buscan Pareja"</strong> de este torneo para que otros jugadores te inviten a competir.
            </p>
          </div>

          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 12px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">\xBFEn qu\xE9 lado de la pista juegas?</label>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
              <button type="button" [style.background]="agenteLibrePosicion === 'Drive' ? '#0f172a' : '#f1f5f9'" [style.color]="agenteLibrePosicion === 'Drive' ? '#ccff00' : '#475569'" (click)="agenteLibrePosicion = 'Drive'" style="padding: 10px; border-radius: 10px; border: none; font-weight: 800; font-size: 12px; cursor: pointer;">
                \u{1F3BE} Drive
              </button>
              <button type="button" [style.background]="agenteLibrePosicion === 'Rev\xE9s' ? '#0f172a' : '#f1f5f9'" [style.color]="agenteLibrePosicion === 'Rev\xE9s' ? '#ccff00' : '#475569'" (click)="agenteLibrePosicion = 'Rev\xE9s'" style="padding: 10px; border-radius: 10px; border: none; font-weight: 800; font-size: 12px; cursor: pointer;">
                \u{1F3BE} Rev\xE9s
              </button>
              <button type="button" [style.background]="agenteLibrePosicion === 'Ambos' ? '#0f172a' : '#f1f5f9'" [style.color]="agenteLibrePosicion === 'Ambos' ? '#ccff00' : '#475569'" (click)="agenteLibrePosicion = 'Ambos'" style="padding: 10px; border-radius: 10px; border: none; font-weight: 800; font-size: 12px; cursor: pointer;">
                \u26A1 Ambos
              </button>
            </div>
          </div>

          <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 12px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Mensaje o disponibilidad (opcional):</label>
            <textarea [(ngModel)]="agenteLibreMensaje" placeholder="Ej: Juego 5ta, motivado para competir y darlo todo..." rows="3" style="width: 100%; border: 1px solid #cbd5e1; border-radius: 12px; padding: 10px 12px; font-size: 13px; outline: none; font-family: inherit; resize: none;"></textarea>
          </div>

          <button (click)="confirmarRegistroAgenteLibre()" style="width: 100%; background: #059669; color: white; padding: 14px; border-radius: 14px; font-weight: 900; font-size: 13px; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(5,150,105,0.3);">
            \u2713 Publicar en Busco Pareja
          </button>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>

  <!-- ENROLLMENT MODAL -->
  <ion-modal [isOpen]="showPartnerModal" (didDismiss)="showPartnerModal = false" [initialBreakpoint]="0.8" [breakpoints]="[0, 0.5, 0.8, 1]">
    <ng-template>
      <ion-content class="ion-padding-bottom">
        <div class="partner-modal">
          <div class="grab-handle"></div>
          
          <!-- STEP 1: CATEGORY -->
          <ng-container *ngIf="enrollmentStep === 'category'">
            <div class="p-header">
              <h2>Elegir Categor\xEDa</h2>
              <ion-icon name="close-outline" (click)="showPartnerModal = false"></ion-icon>
            </div>
            <div class="p-results cat-list">
              <div class="cat-card animate-up" *ngFor="let cat of availableCategorias; let i = index" [style.animation-delay]="i * 0.05 + 's'" (click)="selectCategory(cat.id)">
                <div class="cat-icon">
                  <ion-icon name="trophy-outline"></ion-icon>
                </div>
                <div class="cat-info">
                  <h3>{{ cat.nombre }}</h3>
                  <span class="cat-meta">Toque para seleccionar</span>
                </div>
                <ion-icon name="chevron-forward-outline" class="go-icon"></ion-icon>
              </div>
            </div>
          </ng-container>

          <!-- STEP 2: PARTNER -->
          <ng-container *ngIf="enrollmentStep === 'partner'">
            <div class="p-header">
              <div style="display: flex; align-items: center; gap: 10px;">
                <ion-icon name="arrow-back-outline" *ngIf="selectedTournament?.table_source === 'v2' || selectedTournament?.table_source === 'liga'" (click)="enrollmentStep = 'category'" style="font-size: 24px; color: var(--nike-navy); opacity: 0.8;"></ion-icon>
                <h2 style="margin: 0;">Elegir Pareja</h2>
              </div>
              <ion-icon name="close-outline" (click)="showPartnerModal = false"></ion-icon>
            </div>

            <!-- OPINION BUSCO PAREJA DENTRO DEL MODAL -->
            <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 14px; padding: 10px 14px; margin: 10px 16px 14px; display: flex; align-items: center; justify-content: space-between;" (click)="showPartnerModal = false; inscribirComoAgenteLibre()">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 18px;">\u{1F64B}\u200D\u2642\uFE0F</span>
                <span style="font-size: 12px; font-weight: 800; color: #047857;">\xBFNo tienes pareja? An\xF3tate como Agente Libre</span>
              </div>
              <ion-icon name="chevron-forward-outline" style="color: #059669; font-size: 16px;"></ion-icon>
            </div>

            <div class="p-search">
              <ion-icon name="search-outline"></ion-icon>
              <input type="text" [(ngModel)]="partnerSearchTerm" (input)="onPartnerSearch()" placeholder="Nombre de tu compa\xF1ero...">
            </div>
            <div class="p-results">
              <div class="p-item animate-up" *ngFor="let user of partnerResults; let i = index" [style.animation-delay]="i * 0.05 + 's'" (click)="selectPartner(user)">
                <img [src]="user.foto_perfil || 'assets/avatar.png'">
                <div class="p-info">
                  <span class="n">{{ user.nombre }}</span>
                  <span class="r">Nivel: {{ user.nivel || 'N/A' }}</span>
                </div>
                <ion-icon name="person-add-outline"></ion-icon>
              </div>
              <div *ngIf="partnerSearchTerm.length >= 3 && partnerResults.length === 0" class="empty-res">
                No se encontraron jugadores
              </div>
            </div>
          </ng-container>

          <!-- STEP 3: TIME RESTRICTIONS FOR LEAGUE -->
          <ng-container *ngIf="enrollmentStep === 'restrictions'">
            <div class="p-header">
              <div class="back-title-group">
                <ion-icon name="arrow-back-outline" (click)="enrollmentStep = 'partner'" class="back-btn-icon"></ion-icon>
                <h2>Restricciones Horarias</h2>
              </div>
              <ion-icon name="close-outline" (click)="showPartnerModal = false" class="close-btn-icon"></ion-icon>
            </div>
            
            <div class="restrictions-container">
              <div class="info-callout">
                <span class="callout-icon">\u{1F5D3}\uFE0F</span>
                <p>Indica hasta 2 d\xEDas/horarios donde <strong>NO puedan jugar</strong> para la programaci\xF3n autom\xE1tica de partidos.</p>
              </div>

              <div class="add-action-wrapper" *ngIf="restriccionesLiga.length < 2">
                <button type="button" class="btn-add-restriction-mobile" (click)="agregarRestriccionLiga()">
                  + Agregar Restricci\xF3n ({{ 2 - restriccionesLiga.length }} disponible)
                </button>
              </div>

              <div class="restrictions-list" *ngIf="restriccionesLiga.length > 0">
                <div *ngFor="let r of restriccionesLiga; let i = index" class="restriction-item-card animate-up">
                  <div class="item-header">
                    <span class="item-title">Restricci\xF3n #{{ i + 1 }}</span>
                    <button type="button" class="btn-delete-restriction" (click)="eliminarRestriccionLiga(i)">
                      \u2715 Eliminar
                    </button>
                  </div>
                  <div class="item-inputs">
                    <label class="day-picker-label">D\xEDa no disponible:</label>
                    <div class="day-chips-grid">
                      <button 
                        type="button" 
                        *ngFor="let d of diasSemana" 
                        class="day-chip-btn" 
                        [class.selected]="r.dia === d" 
                        (click)="r.dia = d">
                        {{ getShortDay(d) }}
                      </button>
                    </div>

                    <div class="time-range-group">
                      <div class="time-input-box">
                        <label>Desde:</label>
                        <input type="time" [(ngModel)]="r.hora_inicio" class="input-time" />
                      </div>
                      <span class="sep-text">a</span>
                      <div class="time-input-box">
                        <label>Hasta:</label>
                        <input type="time" [(ngModel)]="r.hora_fin" class="input-time" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="confirm-btn-wrapper">
                <button class="btn-confirm-enrollment" (click)="confirmEnrollment()">
                  Confirmar Inscripci\xF3n
                </button>
              </div>
            </div>
          </ng-container>

        </div>
      </ion-content>
    </ng-template>
  </ion-modal>

  <!-- FLOATING BACK BUTTON (Consistent navigation) -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed" style="margin-bottom: 25px; margin-right: 20px;">
    <ion-fab-button (click)="goBack()" class="back-fab-v7">
      <ion-icon name="arrow-back"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>
`, styles: ['/* src/app/pages/jugador-campeonatos/jugador-campeonatos.page.scss */\n:host {\n  --nike-black: #000000;\n  --nike-white: #ffffff;\n  --nike-gray: #f8f8fa;\n  --nike-text-gray: #8e8e93;\n  --nike-neon: #ccff00;\n  --nike-border: #f1f1f7;\n  --nike-navy: #0f172a;\n}\nion-content {\n  --background: #fff;\n  --color: var(--nike-black);\n  font-family: "Outfit", sans-serif;\n}\n.main-switch-tabs {\n  display: flex;\n  background: #fff;\n  border-radius: 20px;\n  padding: 5px;\n  margin-bottom: 25px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);\n  border: 1px solid var(--nike-border);\n}\n.main-switch-tabs .switch-tab {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px 10px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  color: var(--nike-text-gray);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.main-switch-tabs .switch-tab ion-icon {\n  font-size: 16px;\n}\n.main-switch-tabs .switch-tab.active {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.3);\n}\n.mis-sub-tabs {\n  display: grid !important;\n  grid-template-columns: 1fr 1fr !important;\n  gap: 10px !important;\n  padding: 0 !important;\n  margin: 0 0 18px 0 !important;\n  width: 100% !important;\n  box-sizing: border-box !important;\n}\n.mis-sub-tabs .sub-tab {\n  width: 100% !important;\n  min-width: 0 !important;\n  box-sizing: border-box !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 6px !important;\n  padding: 11px 4px !important;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-radius: 20px;\n  color: var(--nike-text-gray);\n  font-size: 13px;\n  font-weight: 800;\n  white-space: nowrap;\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n}\n.mis-sub-tabs .sub-tab ion-icon {\n  font-size: 16px !important;\n  transition: transform 0.3s ease;\n  flex-shrink: 0 !important;\n}\n.mis-sub-tabs .sub-tab .tab-label {\n  font-size: 12.5px;\n  font-weight: 800;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mis-sub-tabs .sub-tab .sub-count {\n  background: rgba(0, 0, 0, 0.06);\n  color: #64748b;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 900;\n  margin-left: 2px;\n  flex-shrink: 0 !important;\n}\n.mis-sub-tabs .sub-tab:active {\n  transform: scale(0.97);\n}\n.mis-sub-tabs .sub-tab.active {\n  background: var(--nike-navy);\n  color: white;\n  border-color: var(--nike-navy);\n  box-shadow: 0 6px 16px rgba(5, 12, 28, 0.2);\n}\n.mis-sub-tabs .sub-tab.active ion-icon {\n  transform: scale(1.05);\n}\n.mis-sub-tabs .sub-tab.active .tab-label {\n  color: #ffffff;\n}\n.mis-sub-tabs .sub-tab.active .sub-count {\n  background: rgba(204, 255, 0, 0.25);\n  color: var(--nike-neon);\n}\n.mi-torneo-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 18px;\n  margin-bottom: 14px;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s ease;\n}\n.mi-torneo-card:active {\n  transform: scale(0.97);\n}\n.mi-torneo-card.historial {\n  opacity: 0.85;\n  background: #fbfbfb;\n}\n.mi-torneo-card.historial .mt-type-badge {\n  filter: grayscale(0.4);\n}\n.mi-torneo-card .mt-left .mt-type-badge {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 950;\n  letter-spacing: 0.5px;\n}\n.mi-torneo-card .mt-left .mt-type-badge.americano {\n  background: rgba(204, 255, 0, 0.2);\n  color: var(--nike-navy);\n}\n.mi-torneo-card .mt-left .mt-type-badge.oficial {\n  background: rgba(99, 102, 241, 0.15);\n  color: #6366f1;\n}\n.mi-torneo-card .mt-left .mt-type-badge.liga {\n  background: rgba(14, 165, 233, 0.15);\n  color: #0284c7;\n}\n.mi-torneo-card .mt-center {\n  flex: 1;\n  min-width: 0;\n}\n.mi-torneo-card .mt-center h4 {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mi-torneo-card .mt-center .mt-club {\n  margin: 0 0 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.mi-torneo-card .mt-center .mt-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.mi-torneo-card .mt-center .mt-meta ion-icon {\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.mi-torneo-card .mt-center .mt-meta .mt-pareja {\n  opacity: 0.7;\n}\n.mi-torneo-card .mt-center .mt-meta .mt-categoria {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n  padding: 2px 7px;\n  border-radius: 6px;\n  font-weight: 800;\n  display: inline-flex;\n  align-items: center;\n}\n.mi-torneo-card .mt-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n}\n.mi-torneo-card .mt-right .mt-status {\n  font-size: 9px;\n  font-weight: 950;\n  letter-spacing: 0.5px;\n  padding: 4px 10px;\n  border-radius: 10px;\n}\n.mi-torneo-card .mt-right .mt-status.activo {\n  background: #dcfce7;\n  color: #166534;\n}\n.mi-torneo-card .mt-right .mt-status.cerrado {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mi-torneo-card .mt-right .mt-matches-count {\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--nike-text-gray);\n}\n.mi-torneo-card .mt-right ion-icon {\n  font-size: 16px;\n  color: var(--nike-text-gray);\n  opacity: 0.4;\n}\n.load-more-container {\n  display: flex;\n  justify-content: center;\n  padding: 10px 0 30px;\n}\n.load-more-container .load-more-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: white;\n  color: var(--nike-navy);\n  padding: 14px 24px;\n  border-radius: 22px;\n  font-size: 13px;\n  font-weight: 800;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);\n  transition: all 0.2s ease;\n}\n.load-more-container .load-more-btn ion-icon {\n  font-size: 18px;\n  color: var(--nike-text-gray);\n}\n.load-more-container .load-more-btn:active {\n  transform: scale(0.96);\n  background: var(--nike-gray);\n}\n.cta-search {\n  margin-top: 15px;\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  padding: 14px 28px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  border: none;\n}\n.mi-torneo-detail-header {\n  position: relative;\n  padding: 70px 25px 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 60%,\n      #334155 100%);\n  overflow: hidden;\n}\n.mi-torneo-detail-header .mtd-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.03) 0px,\n      rgba(255, 255, 255, 0.03) 2px,\n      transparent 2px,\n      transparent 10px);\n  opacity: 0.5;\n}\n.mi-torneo-detail-header .mtd-content {\n  position: relative;\n  z-index: 2;\n}\n.mi-torneo-detail-header .mtd-back {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.mi-torneo-detail-header .mtd-back ion-icon {\n  color: #fff;\n  font-size: 20px;\n}\n.mi-torneo-detail-header .mtd-info .mtd-badge {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 950;\n  letter-spacing: 1px;\n  background: rgba(204, 255, 0, 0.2);\n  color: var(--nike-neon);\n  margin-bottom: 12px;\n}\n.mi-torneo-detail-header .mtd-info .mtd-badge.americano {\n  background: rgba(204, 255, 0, 0.3);\n}\n.mi-torneo-detail-header .mtd-info .mtd-badge.liga {\n  background: rgba(14, 165, 233, 0.25);\n  color: #38bdf8;\n  border: 1px solid rgba(56, 189, 248, 0.4);\n}\n.mi-torneo-detail-header .mtd-info .mtd-badges-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.mi-torneo-detail-header .mtd-info .mtd-badges-row .mtd-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 800;\n}\n.mi-torneo-detail-header .mtd-info .mtd-badges-row .mtd-tag.pareja {\n  background: rgba(204, 255, 0, 0.15);\n  color: #ccff00;\n  border: 1px solid rgba(204, 255, 0, 0.35);\n}\n.mi-torneo-detail-header .mtd-info .mtd-badges-row .mtd-tag.categoria {\n  background: rgba(99, 102, 241, 0.25);\n  color: #ffffff;\n  border: 1px solid rgba(99, 102, 241, 0.45);\n}\n.mi-torneo-detail-header .mtd-info h1 {\n  margin: 0 0 8px;\n  font-size: 28px;\n  font-weight: 950;\n  color: #fff;\n  letter-spacing: -1px;\n  line-height: 1.1;\n}\n.mi-torneo-detail-header .mtd-info p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n}\n.mi-torneo-detail-header .mtd-info .mtd-pareja {\n  margin-top: 8px !important;\n  color: var(--nike-neon) !important;\n  font-weight: 800 !important;\n}\n.mi-torneo-detail-body {\n  background: #f4f7fa;\n  border-radius: 30px 30px 0 0;\n  margin-top: -20px;\n  position: relative;\n  z-index: 10;\n  padding: 30px 20px 120px;\n  min-height: 400px;\n}\n.cat-selector-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  padding: 4px 0;\n}\n.cat-selector-container .cat-selector-label {\n  font-size: 11px;\n  font-weight: 850;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-right: 2px;\n}\n.cat-selector-container .cat-pill {\n  padding: 7px 14px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 800;\n  cursor: pointer;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.cat-selector-container .cat-pill:active {\n  transform: scale(0.96);\n}\n.cat-selector-container .cat-pill.active {\n  background: var(--nike-navy) !important;\n  color: var(--nike-neon) !important;\n  border-color: var(--nike-navy) !important;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25) !important;\n}\n.section-block {\n  margin-bottom: 30px;\n}\n.section-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  font-weight: 950;\n  letter-spacing: 1.5px;\n  color: var(--nike-navy);\n  margin-bottom: 15px;\n}\n.section-label ion-icon {\n  font-size: 16px;\n  opacity: 0.6;\n}\n.next-match-card {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  border-radius: 20px;\n  padding: 20px 18px;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.next-match-card .nm-header-badges {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.next-match-card .nm-header-badges .nm-badge-pill {\n  background: rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  font-size: 11px;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.next-match-card .nm-header-badges .nm-badge-pill.category {\n  background: rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.next-match-card .nm-header-badges .nm-badge-pill.status {\n  background: rgba(204, 255, 0, 0.15);\n  color: #ccff00;\n  border: 1px solid rgba(204, 255, 0, 0.3);\n}\n.next-match-card .nm-teams {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 6px 0 16px 0;\n}\n.next-match-card .nm-teams .nm-team {\n  flex: 1;\n  text-align: center;\n}\n.next-match-card .nm-teams .nm-team .nm-name {\n  font-size: 14px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.3;\n}\n.next-match-card .nm-teams .nm-vs {\n  font-size: 13px;\n  font-weight: 950;\n  color: #ccff00;\n  padding: 6px 14px;\n  background: rgba(204, 255, 0, 0.12);\n  border: 1px solid rgba(204, 255, 0, 0.3);\n  border-radius: 12px;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n}\n.next-match-card .nm-meta-grid {\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px dashed rgba(255, 255, 255, 0.12);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.next-match-card .nm-meta-grid .meta-box {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 10px 8px;\n  text-align: center;\n}\n.next-match-card .nm-meta-grid .meta-box.cancha-box {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n}\n.next-match-card .nm-meta-grid .meta-box.cancha-box .meta-label {\n  margin-bottom: 0;\n}\n.next-match-card .nm-meta-grid .meta-box.cancha-box .meta-value {\n  font-size: 12px;\n  text-align: right;\n  max-width: 65%;\n}\n.next-match-card .nm-meta-grid .meta-box .meta-label {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n.next-match-card .nm-meta-grid .meta-box .meta-label ion-icon {\n  font-size: 12px;\n  color: #ccff00;\n}\n.next-match-card .nm-meta-grid .meta-box .meta-value {\n  font-size: 12px;\n  font-weight: 800;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.next-match-card .nm-info {\n  margin-top: 15px;\n  padding-top: 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.next-match-card .nm-info span {\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.05);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.all-played-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #166534;\n  padding: 14px 20px;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 800;\n  margin-bottom: 25px;\n}\n.all-played-badge ion-icon {\n  font-size: 18px;\n}\n.comp-detail-tabs {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 4px;\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 4px;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  width: 100%;\n  box-sizing: border-box;\n}\n.comp-detail-tabs .cd-tab {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 11px 4px;\n  border-radius: 14px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.3px;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  white-space: nowrap;\n  min-width: 0;\n}\n.comp-detail-tabs .cd-tab ion-icon {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.comp-detail-tabs .cd-tab span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11px;\n}\n.comp-detail-tabs .cd-tab .cd-badge {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 1px 5px;\n  border-radius: 8px;\n  font-size: 9.5px;\n  font-weight: 950;\n  flex-shrink: 0;\n  line-height: 1.4;\n}\n.comp-detail-tabs .cd-tab:active {\n  transform: scale(0.97);\n}\n.comp-detail-tabs .cd-tab.active {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25);\n}\n.comp-detail-tabs .cd-tab.active span {\n  color: var(--nike-neon);\n}\n.comp-detail-tabs .cd-tab.active .cd-badge {\n  background: rgba(204, 255, 0, 0.25);\n  color: var(--nike-neon);\n}\n.inscritos-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.inscritos-grid .inscrito-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #ffffff;\n  padding: 14px 16px;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.02);\n  transition: all 0.2s ease;\n}\n.inscritos-grid .inscrito-card .ins-num {\n  background: #f8fafc;\n  color: var(--nike-navy);\n  font-weight: 950;\n  font-size: 13px;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n}\n.inscritos-grid .inscrito-card .ins-info {\n  flex: 1;\n  min-width: 0;\n}\n.inscritos-grid .inscrito-card .ins-info .ins-name {\n  margin: 0;\n  font-size: 14.5px;\n  font-weight: 850;\n  color: var(--nike-navy);\n  line-height: 1.35;\n  word-break: break-word;\n}\n.inscritos-grid .inscrito-card .ins-info .ins-sub {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 600;\n  word-break: break-word;\n}\n.inscritos-grid .inscrito-card .ins-badge {\n  background: #dcfce7;\n  color: #166534;\n  padding: 5px 11px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 850;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pagination-bar-mobile {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 18px;\n  background: #ffffff;\n  padding: 12px 16px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);\n}\n.pagination-bar-mobile .p-page-info {\n  font-size: 13px;\n  font-weight: 800;\n  color: #475569;\n}\n.pagination-bar-mobile .p-btn-group {\n  display: flex;\n  gap: 8px;\n}\n.pagination-bar-mobile .p-btn-group .p-nav-btn {\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: var(--nike-navy);\n  font-size: 12px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);\n}\n.pagination-bar-mobile .p-btn-group .p-nav-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-bar-mobile .p-btn-group .p-nav-btn:not(:disabled):active {\n  transform: scale(0.96);\n  background: #f1f5f9;\n}\n.fixture-header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.fixture-header-row .section-label {\n  margin-bottom: 0;\n}\n.fixture-header-row .fixture-filter-toggle {\n  display: flex;\n  gap: 3px;\n  background: #f1f5f9;\n  padding: 3px;\n  border-radius: 12px;\n}\n.fixture-header-row .fixture-filter-toggle button {\n  padding: 5px 10px;\n  font-size: 11px;\n  font-weight: 800;\n  border-radius: 9px;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.fixture-header-row .fixture-filter-toggle button.active {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n}\n.jornadas-scroll {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding: 2px 2px 14px;\n  margin-bottom: 18px;\n  scrollbar-width: none;\n  -webkit-overflow-scrolling: touch;\n}\n.jornadas-scroll::-webkit-scrollbar {\n  display: none;\n}\n.jornadas-scroll .jornada-chip {\n  padding: 8px 16px;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 12.5px;\n  white-space: nowrap;\n  cursor: pointer;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s ease;\n}\n.jornadas-scroll .jornada-chip:active {\n  transform: scale(0.96);\n}\n.jornadas-scroll .jornada-chip.active {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-color: var(--nike-navy);\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25);\n}\n.btn-show-all-jornada {\n  margin-top: 12px;\n  font-size: 12px;\n  font-weight: 800;\n  background: var(--nike-navy);\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-show-all-jornada:active {\n  transform: scale(0.96);\n}\n.match-history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mh-card {\n  display: flex;\n  align-items: stretch;\n  gap: 14px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 16px 18px;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s ease;\n}\n.mh-card .mh-indicator {\n  width: 4px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.mh-card .mh-indicator .mh-dot {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background: #e2e8f0;\n}\n.mh-card.win .mh-indicator .mh-dot {\n  background: #10b981;\n}\n.mh-card.loss .mh-indicator .mh-dot {\n  background: #ef4444;\n}\n.mh-card.draw .mh-indicator .mh-dot {\n  background: #f59e0b;\n}\n.mh-card .mh-content {\n  flex: 1;\n  min-width: 0;\n}\n.mh-card .mh-content .mh-teams {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.mh-card .mh-content .mh-teams .mh-t1,\n.mh-card .mh-content .mh-teams .mh-t2 {\n  flex: 1;\n  font-size: 13.5px;\n  font-weight: 850;\n  color: var(--nike-navy);\n  line-height: 1.35;\n  word-break: break-word;\n}\n.mh-card .mh-content .mh-teams .mh-t2 {\n  text-align: right;\n}\n.mh-card .mh-content .mh-teams .mh-score {\n  font-size: 15px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  padding: 6px 12px;\n  background: #f1f5f9;\n  border-radius: 12px;\n  flex-shrink: 0;\n  min-width: 50px;\n  text-align: center;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.mh-card .mh-content .mh-meta {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.mh-card .mh-content .mh-meta span {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n  background: var(--nike-gray);\n  padding: 4px 9px;\n  border-radius: 8px;\n}\n.mh-card .mh-content .mh-meta .mh-result-label {\n  font-weight: 900;\n}\n.mh-card .mh-content .mh-meta .mh-result-label.win {\n  background: #dcfce7;\n  color: #166534;\n}\n.mh-card .mh-content .mh-meta .mh-result-label.loss {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mh-card .mh-content .mh-meta .mh-result-label.draw {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mh-card.other {\n  opacity: 0.5;\n}\n.standings-table-container {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 12px 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);\n  scrollbar-width: none;\n}\n.standings-table-container::-webkit-scrollbar {\n  display: none;\n}\n.standings-table-container .standings-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  table-layout: auto;\n}\n.standings-table-container .standings-table thead tr {\n  border-bottom: 2px solid #f1f5f9;\n}\n.standings-table-container .standings-table thead tr th {\n  padding: 10px 4px;\n  font-size: 10.5px;\n  text-transform: uppercase;\n  font-weight: 900;\n  letter-spacing: 0.3px;\n  color: #64748b;\n  white-space: nowrap;\n}\n.standings-table-container .standings-table thead tr th.col-pos {\n  text-align: center;\n  width: 24px;\n  padding-left: 6px;\n}\n.standings-table-container .standings-table thead tr th.col-team {\n  min-width: 110px;\n}\n.standings-table-container .standings-table thead tr th.col-stat {\n  text-align: center;\n  padding: 10px 3px;\n  width: 24px;\n}\n.standings-table-container .standings-table thead tr th.col-pts {\n  color: var(--nike-navy);\n  font-weight: 950;\n  font-size: 11px;\n  width: 28px;\n}\n.standings-table-container .standings-table thead tr th.col-dif {\n  font-weight: 800;\n  width: 34px;\n  padding-right: 6px;\n}\n.standings-table-container .standings-table tbody tr {\n  border-bottom: 1px solid #f8fafc;\n  transition: background 0.15s ease;\n}\n.standings-table-container .standings-table tbody tr:last-child {\n  border-bottom: none;\n}\n.standings-table-container .standings-table tbody tr:active {\n  background: #f8fafc;\n}\n.standings-table-container .standings-table tbody tr td {\n  padding: 12px 4px;\n  font-size: 12.5px;\n  vertical-align: middle;\n}\n.standings-table-container .standings-table tbody tr td.col-pos {\n  text-align: center;\n  font-weight: 900;\n  font-size: 13px;\n  padding-left: 6px;\n}\n.standings-table-container .standings-table tbody tr td.col-team {\n  font-weight: 800;\n  color: var(--nike-navy);\n  line-height: 1.3;\n}\n.standings-table-container .standings-table tbody tr td.col-team .team-name {\n  display: block;\n  word-break: break-word;\n  font-size: 12.5px;\n  font-weight: 800;\n}\n.standings-table-container .standings-table tbody tr td.col-stat {\n  text-align: center;\n  color: #64748b;\n  font-weight: 700;\n  font-size: 12px;\n  padding: 12px 3px;\n}\n.standings-table-container .standings-table tbody tr td.col-stat.win-stat {\n  color: #16a34a;\n  font-weight: 800;\n}\n.standings-table-container .standings-table tbody tr td.col-stat.loss-stat {\n  color: #dc2626;\n  font-weight: 700;\n}\n.standings-table-container .standings-table tbody tr td.col-stat.col-pts {\n  color: var(--nike-navy);\n  font-weight: 950;\n  font-size: 13.5px;\n}\n.standings-table-container .standings-table tbody tr td.col-stat.col-dif {\n  font-weight: 700;\n  font-size: 11.5px;\n  padding-right: 6px;\n}\n.empty-matches {\n  text-align: center;\n  padding: 32px 20px;\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n}\n.empty-matches p {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n  margin: 0;\n}\n.header-v2-discovery {\n  position: relative;\n  padding: 80px 25px 100px;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n.header-v2-discovery .h-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.95) 0%,\n      rgba(15, 23, 42, 0.6) 100%);\n  z-index: 1;\n}\n.header-v2-discovery .h-content {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.header-v2-discovery .h-content .h-left .h-pre {\n  font-size: 10px;\n  font-weight: 950;\n  color: var(--nike-neon);\n  letter-spacing: 2px;\n  margin-bottom: 6px;\n}\n.header-v2-discovery .h-content .h-left .h-title {\n  font-size: 34px;\n  font-weight: 950;\n  color: #fff;\n  letter-spacing: -1.5px;\n  margin: 0;\n  line-height: 1;\n}\n.header-v2-discovery .h-content .h-avatar-mini {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 2px solid var(--nike-neon);\n  overflow: hidden;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.header-v2-discovery .h-content .h-avatar-mini img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.discovery-body-v6 {\n  margin-top: -40px;\n  position: relative;\n  z-index: 10;\n  background: #f4f7fa;\n  border-radius: 40px 40px 0 0;\n  padding: 30px 18px 100px;\n  min-height: 500px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.discovery-body-v6 .comp-filter-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 6px;\n  margin-bottom: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.discovery-body-v6 .comp-filter-grid .comp-chip {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 10px 4px;\n  border-radius: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  font-size: 11px;\n  font-weight: 800;\n  color: #475569;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  text-align: center;\n  min-width: 0;\n  white-space: nowrap;\n}\n.discovery-body-v6 .comp-filter-grid .comp-chip span {\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.discovery-body-v6 .comp-filter-grid .comp-chip:active {\n  transform: scale(0.96);\n}\n.discovery-body-v6 .comp-filter-grid .comp-chip.active {\n  background: #0f172a;\n  color: #ccff00;\n  border-color: #0f172a;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);\n}\n.discovery-body-v6 .filters-row-v6 {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n  margin-bottom: 12px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.discovery-body-v6 .filters-row-v6 .filter-item-v6 {\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n  min-width: 0;\n  box-sizing: border-box;\n}\n.discovery-body-v6 .filters-row-v6 .filter-item-v6 ion-icon {\n  color: #2563eb;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.discovery-body-v6 .filters-row-v6 .filter-item-v6 .arrow-down {\n  color: #94a3b8;\n  font-size: 13px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.discovery-body-v6 .filters-row-v6 .filter-item-v6 select {\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-size: 11.5px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  outline: none;\n  appearance: none;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: inherit;\n  padding-right: 2px;\n  min-width: 0;\n}\n.discovery-body-v6 .search-bar-v6 {\n  background: #ffffff;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  padding: 12px 14px;\n  gap: 10px;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);\n  width: 100%;\n  box-sizing: border-box;\n}\n.discovery-body-v6 .search-bar-v6 ion-icon {\n  color: #64748b;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.discovery-body-v6 .search-bar-v6 input {\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--nike-navy);\n  outline: none;\n  font-family: inherit;\n  min-width: 0;\n}\n.discovery-body-v6 .search-bar-v6 input::placeholder {\n  color: #94a3b8;\n  font-weight: 500;\n}\n.club-discovery-list {\n  padding: 10px 0 120px;\n}\n.club-discovery-list .loading-state {\n  text-align: center;\n  padding: 40px;\n}\n.club-discovery-list .club-card-v5 {\n  background: white;\n  border-radius: 28px;\n  overflow: hidden;\n  margin-bottom: 25px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);\n  transition: all 0.3s ease;\n}\n.club-discovery-list .club-card-v5:active {\n  transform: scale(0.97);\n}\n.club-discovery-list .club-card-v5 .card-image-v5 {\n  height: 200px;\n  background-image:\n    linear-gradient(\n      180deg,\n      #f8fafc,\n      #f1f5f9);\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.club-discovery-list .club-card-v5 .card-image-v5 .card-overlay-v5 {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(15, 23, 42, 0.5));\n}\n.club-discovery-list .club-card-v5 .card-image-v5 .club-badges-v5 {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n.club-discovery-list .club-card-v5 .card-image-v5 .club-badges-v5 .badge-v5 {\n  background: var(--nike-neon);\n  color: var(--nike-navy);\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n}\n.club-discovery-list .club-card-v5 .card-info-v5 {\n  padding: 20px 22px;\n}\n.club-discovery-list .club-card-v5 .card-info-v5 .info-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.club-discovery-list .club-card-v5 .card-info-v5 .info-header h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  letter-spacing: -0.5px;\n}\n.club-discovery-list .club-card-v5 .card-info-v5 .info-header .rating-v5 {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.club-discovery-list .club-card-v5 .card-info-v5 .info-header .rating-v5 ion-icon {\n  color: #f59e0b;\n  font-size: 16px;\n}\n.club-discovery-list .club-card-v5 .card-info-v5 .info-header .rating-v5 span {\n  font-weight: 800;\n  font-size: 14px;\n  color: var(--nike-navy);\n}\n.club-discovery-list .club-card-v5 .card-info-v5 .address-v5 {\n  margin: 0;\n  font-size: 13px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.detail-hero-v6 {\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.detail-hero-v6 .hero-overlay-v6 {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(15, 23, 42, 0.7),\n      transparent);\n}\n.detail-hero-v6 .fab-back-v6.right {\n  position: absolute;\n  top: 50px;\n  right: 20px;\n  z-index: 100;\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  color: var(--nike-navy);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.detail-content-card {\n  margin-top: -30px;\n  background: white;\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: relative;\n  z-index: 10;\n  padding: 30px 25px 120px;\n}\n.detail-content-card .club-info-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.detail-content-card .club-info-header h2 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.detail-content-card .club-info-header .fav-icon-btn {\n  font-size: 24px;\n  color: var(--nike-navy);\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 50%;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.detail-content-card .club-info-header .fav-icon-btn:active {\n  transform: scale(0.88);\n  background: rgba(0, 0, 0, 0.06);\n}\n.detail-content-card .address-text {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n.detail-content-card .nike-tabs-v6 {\n  display: flex;\n  gap: 25px;\n  border-bottom: 1px solid var(--nike-border);\n  margin-bottom: 30px;\n}\n.detail-content-card .nike-tabs-v6 .tab-item {\n  padding: 12px 5px;\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--nike-text-gray);\n}\n.detail-content-card .nike-tabs-v6 .tab-item.active {\n  color: var(--nike-navy);\n  border-bottom: 3px solid var(--nike-navy);\n}\n.detail-content-card .section-title-v6 {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin-bottom: 6px;\n}\n.detail-content-card .section-desc-v6 {\n  font-size: 13px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  margin-bottom: 25px;\n}\n.detail-content-card .empty-state-v6 {\n  text-align: center;\n  padding: 50px 20px;\n  color: var(--nike-text-gray);\n}\n.detail-content-card .empty-state-v6 ion-icon {\n  font-size: 40px;\n  margin-bottom: 15px;\n  opacity: 0.3;\n}\n.detail-content-card .empty-state-v6 p {\n  font-weight: 600;\n  font-size: 14px;\n}\n.badge-count-pill {\n  background: #0f172a;\n  color: #ffffff;\n  font-size: 11px;\n  font-weight: 900;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.t-capacity-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n  font-size: 11px;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 8px;\n  letter-spacing: 0.2px;\n}\n.t-capacity-pill.full {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.tournament-list-v6 .t-card-v6 {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 18px;\n  margin-bottom: 16px;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);\n  transition: all 0.2s ease;\n}\n.tournament-list-v6 .t-card-v6:active {\n  transform: scale(0.98);\n}\n.tournament-list-v6 .t-card-v6 .t-poster {\n  height: 140px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 14px;\n  margin-bottom: 14px;\n}\n.tournament-list-v6 .t-card-v6 .t-body {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tournament-list-v6 .t-card-v6 .t-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.tournament-list-v6 .t-card-v6 .comp-badge {\n  font-size: 10px;\n  font-weight: 950;\n  letter-spacing: 0.8px;\n  padding: 4px 10px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.tournament-list-v6 .t-card-v6 .comp-badge.liga {\n  background: #00f0ff;\n  color: #0b0f19;\n}\n.tournament-list-v6 .t-card-v6 .comp-badge.americano {\n  background: #ccff00;\n  color: #0b0f19;\n}\n.tournament-list-v6 .t-card-v6 .comp-badge.oficial {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.tournament-list-v6 .t-card-v6 .p-amount-pill {\n  font-size: 13px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  background: var(--nike-gray);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.tournament-list-v6 .t-card-v6 .comp-title {\n  margin: 2px 0 2px 0;\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  line-height: 1.25;\n  letter-spacing: -0.3px;\n}\n.tournament-list-v6 .t-card-v6 .comp-club {\n  margin: 0 0 6px 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.tournament-list-v6 .t-card-v6 .t-footer-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 1px solid #f1f5f9;\n}\n.tournament-list-v6 .t-card-v6 .t-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.tournament-list-v6 .t-card-v6 .t-meta ion-icon {\n  font-size: 15px;\n  color: #2563eb;\n}\n.tournament-list-v6 .t-card-v6 .btn-group-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tournament-list-v6 .t-card-v6 .view-detail-btn-v6 {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #0f172a;\n  padding: 9px 14px;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 11px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  letter-spacing: 0.5px;\n}\n.tournament-list-v6 .t-card-v6 .view-detail-btn-v6:active {\n  transform: scale(0.95);\n  background: #e2e8f0;\n}\n.tournament-list-v6 .t-card-v6 .join-btn-v6 {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  color: #ffffff;\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.8px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);\n  transition: all 0.2s ease;\n}\n.tournament-list-v6 .t-card-v6 .join-btn-v6:active {\n  transform: scale(0.95);\n}\n.partner-modal {\n  padding: 20px 25px 40px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.partner-modal .grab-handle {\n  width: 40px;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 0 auto 20px;\n}\n.partner-modal .p-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.partner-modal .p-header h2 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.partner-modal .p-header ion-icon {\n  font-size: 24px;\n  color: var(--nike-navy);\n  opacity: 0.5;\n}\n.partner-modal .p-search {\n  background: var(--nike-gray);\n  border-radius: 16px;\n  padding: 12px 18px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 25px;\n  border: 1px solid var(--nike-border);\n}\n.partner-modal .p-search ion-icon {\n  color: var(--nike-text-gray);\n}\n.partner-modal .p-search input {\n  background: transparent;\n  border: none;\n  width: 100%;\n  outline: none;\n  font-weight: 700;\n  color: var(--nike-navy);\n}\n.partner-modal .p-results {\n  flex: 1;\n  overflow-y: auto;\n}\n.partner-modal .p-results .p-item {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--nike-border);\n}\n.partner-modal .p-results .p-item img {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.partner-modal .p-results .p-item .p-info {\n  flex: 1;\n}\n.partner-modal .p-results .p-item .p-info .n {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  display: block;\n}\n.partner-modal .p-results .p-item .p-info .r {\n  font-size: 11px;\n  color: var(--nike-text-gray);\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.partner-modal .p-results .p-item ion-icon {\n  color: var(--nike-navy);\n  font-size: 20px;\n}\n.partner-modal .p-results .empty-res {\n  text-align: center;\n  padding: 40px;\n  color: var(--nike-text-gray);\n  font-weight: 700;\n}\n.partner-modal .cat-list {\n  flex: 1;\n  overflow-y: auto;\n  padding-top: 5px;\n}\n.partner-modal .cat-list .cat-card {\n  background: white;\n  border: 1px solid var(--nike-border);\n  border-radius: 16px;\n  padding: 16px;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  transition: all 0.2s ease;\n}\n.partner-modal .cat-list .cat-card:active {\n  transform: scale(0.97);\n  background: var(--nike-gray);\n}\n.partner-modal .cat-list .cat-card .cat-icon {\n  width: 44px;\n  height: 44px;\n  background: rgba(204, 255, 0, 0.2);\n  color: var(--nike-navy);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.partner-modal .cat-list .cat-card .cat-info {\n  flex: 1;\n}\n.partner-modal .cat-list .cat-card .cat-info h3 {\n  margin: 0 0 4px;\n  font-size: 16px;\n  font-weight: 900;\n  color: var(--nike-navy);\n}\n.partner-modal .cat-list .cat-card .cat-info .cat-meta {\n  font-size: 12px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n}\n.partner-modal .cat-list .cat-card .go-icon {\n  font-size: 20px;\n  color: var(--nike-text-gray);\n  opacity: 0.5;\n}\n.partner-modal .back-title-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.partner-modal .back-title-group .back-btn-icon {\n  font-size: 22px;\n  color: var(--nike-navy);\n  cursor: pointer;\n}\n.partner-modal .back-title-group h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.partner-modal .close-btn-icon {\n  font-size: 24px;\n  color: var(--nike-navy);\n  opacity: 0.5;\n  cursor: pointer;\n}\n.partner-modal .restrictions-container {\n  padding: 10px 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.partner-modal .restrictions-container .info-callout {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  border-radius: 14px;\n  padding: 12px 14px;\n}\n.partner-modal .restrictions-container .info-callout .callout-icon {\n  font-size: 18px;\n}\n.partner-modal .restrictions-container .info-callout p {\n  margin: 0;\n  font-size: 12px;\n  line-height: 1.4;\n  color: #0369a1;\n  font-weight: 600;\n}\n.partner-modal .restrictions-container .info-callout p strong {\n  color: #0c4a6e;\n}\n.partner-modal .restrictions-container .add-action-wrapper {\n  display: flex;\n  justify-content: flex-start;\n}\n.partner-modal .restrictions-container .btn-add-restriction-mobile {\n  background: #e0f2fe;\n  color: #0284c7;\n  border: 1px solid #7dd3fc;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 100%;\n}\n.partner-modal .restrictions-container .btn-add-restriction-mobile:active {\n  transform: scale(0.97);\n  background: #bae6fd;\n}\n.partner-modal .restrictions-container .restrictions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.partner-modal .restrictions-container .restriction-item-card {\n  background: #ffffff;\n  border: 1px solid var(--nike-border);\n  border-radius: 16px;\n  padding: 14px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n}\n.partner-modal .restrictions-container .restriction-item-card .item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-header .item-title {\n  font-size: 12px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-header .btn-delete-restriction {\n  background: #fee2e2;\n  color: #ef4444;\n  border: 1px solid #fca5a5;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .day-picker-label {\n  font-size: 11px;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 2px;\n  display: block;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .day-chips-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 6px;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .day-chips-grid .day-chip-btn {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 8px 0;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .day-chips-grid .day-chip-btn.selected {\n  background: #0f172a;\n  color: #ffffff;\n  border-color: #0f172a;\n  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.25);\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .day-chips-grid .day-chip-btn:active {\n  transform: scale(0.94);\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .time-range-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .time-range-group .time-input-box {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .time-range-group .time-input-box label {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .time-range-group .input-time {\n  width: 100%;\n  padding: 10px 8px;\n  border-radius: 10px;\n  border: 1.5px solid #cbd5e1;\n  background: #f8fafc;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  text-align: center;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .time-range-group .input-time:focus {\n  border-color: #2563eb;\n  background: #ffffff;\n}\n.partner-modal .restrictions-container .restriction-item-card .item-inputs .time-range-group .sep-text {\n  font-size: 12px;\n  font-weight: 800;\n  color: #94a3b8;\n  margin-top: 14px;\n}\n.partner-modal .restrictions-container .confirm-btn-wrapper {\n  margin-top: 10px;\n}\n.partner-modal .restrictions-container .btn-confirm-enrollment {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  color: #ffffff;\n  padding: 16px;\n  border-radius: 16px;\n  font-size: 15px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.25);\n  transition: all 0.2s ease;\n}\n.partner-modal .restrictions-container .btn-confirm-enrollment:active {\n  transform: scale(0.97);\n}\n.animate-up {\n  animation: up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes up {\n  from {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.back-fab-v7 {\n  --background: #ffffff;\n  --color: #0f172a;\n  --border-radius: 50%;\n  --box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  width: 58px;\n  height: 58px;\n  border: 1.5px solid #e2e8f0;\n}\n.back-fab-v7 ion-icon {\n  font-size: 24px;\n  color: #0f172a;\n}\n.back-fab-v7:active {\n  transform: scale(0.92);\n}\n.inscritos-sub-tabs {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 6px;\n  margin-bottom: 18px;\n  background: #f1f5f9;\n  padding: 4px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n  width: 100%;\n  box-sizing: border-box;\n}\n.inscritos-sub-tabs .ist-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 6px;\n  border: none;\n  border-radius: 12px;\n  background: transparent;\n  color: #64748b;\n  font-weight: 800;\n  font-size: 11.5px;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  min-width: 0;\n}\n.inscritos-sub-tabs .ist-btn .ist-icon {\n  font-size: 13px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.inscritos-sub-tabs .ist-btn .ist-label {\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11.5px;\n}\n.inscritos-sub-tabs .ist-btn .ist-badge {\n  background: #e2e8f0;\n  color: #475569;\n  font-size: 10px;\n  font-weight: 900;\n  padding: 1px 6px;\n  border-radius: 8px;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  line-height: 1.4;\n}\n.inscritos-sub-tabs .ist-btn .ist-badge.green {\n  background: rgba(16, 185, 129, 0.15);\n  color: #059669;\n}\n.inscritos-sub-tabs .ist-btn:active {\n  transform: scale(0.97);\n}\n.inscritos-sub-tabs .ist-btn.active {\n  background: var(--nike-navy);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.18);\n}\n.inscritos-sub-tabs .ist-btn.active .ist-label {\n  color: #ffffff;\n}\n.inscritos-sub-tabs .ist-btn.active .ist-badge {\n  background: rgba(204, 255, 0, 0.2);\n  color: var(--nike-neon);\n}\n.inscritos-sub-tabs .ist-btn.active .ist-badge.green {\n  background: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\n.agente-libre-callout {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #ecfdf5 100%);\n  border: 1.5px dashed #6ee7b7;\n  border-radius: 18px;\n  padding: 13px 15px;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.05);\n}\n.agente-libre-callout .alc-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.agente-libre-callout .alc-left .alc-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: rgba(16, 185, 129, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.agente-libre-callout .alc-left .alc-text {\n  min-width: 0;\n}\n.agente-libre-callout .alc-left .alc-text h4 {\n  margin: 0;\n  font-size: 12.5px;\n  font-weight: 900;\n  color: #065f46;\n  line-height: 1.2;\n}\n.agente-libre-callout .alc-left .alc-text p {\n  margin: 2px 0 0 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: #047857;\n  line-height: 1.3;\n}\n.agente-libre-callout .alc-btn {\n  background: #059669;\n  color: #ffffff;\n  border: none;\n  padding: 9px 14px;\n  border-radius: 12px;\n  font-weight: 900;\n  font-size: 11.5px;\n  white-space: nowrap;\n  cursor: pointer;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);\n  transition: all 0.2s ease;\n}\n.agente-libre-callout .alc-btn:active {\n  transform: scale(0.95);\n}\n.empty-agentes-box {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 36px 20px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n  margin-top: 6px;\n}\n.empty-agentes-box .eab-icon-circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin: 0 auto 16px;\n}\n.empty-agentes-box h4 {\n  margin: 0 0 8px;\n  font-size: 16px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.empty-agentes-box p {\n  margin: 0 auto 20px;\n  font-size: 12.5px;\n  line-height: 1.45;\n  color: #64748b;\n  max-width: 320px;\n  font-weight: 600;\n}\n.empty-agentes-box .eab-cta-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #059669;\n  color: #ffffff;\n  border: none;\n  padding: 12px 22px;\n  border-radius: 14px;\n  font-size: 12.5px;\n  font-weight: 900;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);\n  transition: all 0.2s ease;\n}\n.empty-agentes-box .eab-cta-btn ion-icon {\n  font-size: 16px;\n}\n.empty-agentes-box .eab-cta-btn:active {\n  transform: scale(0.96);\n}\n.agentes-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 6px;\n}\n.agentes-grid .agente-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 16px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n}\n.agentes-grid .agente-card .ag-top-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.agentes-grid .agente-card .ag-top-row .ag-left-profile {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.agentes-grid .agente-card .ag-top-row .ag-left-profile .ag-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #059669;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.agentes-grid .agente-card .ag-top-row .ag-left-profile .ag-name-col .ag-name {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 900;\n  color: var(--nike-navy);\n}\n.agentes-grid .agente-card .ag-top-row .ag-left-profile .ag-name-col .ag-tags-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 3px;\n}\n.agentes-grid .agente-card .ag-top-row .ag-left-profile .ag-name-col .ag-tags-row .ag-tag {\n  font-size: 10.5px;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 6px;\n}\n.agentes-grid .agente-card .ag-top-row .ag-left-profile .ag-name-col .ag-tags-row .ag-tag.nivel {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.agentes-grid .agente-card .ag-top-row .ag-left-profile .ag-name-col .ag-tags-row .ag-tag.pos {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n.agentes-grid .agente-card .ag-top-row .ag-time {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.agentes-grid .agente-card .ag-msg {\n  margin: 0 0 12px 0;\n  font-size: 12.5px;\n  color: #475569;\n  font-style: italic;\n  line-height: 1.4;\n  background: #f8fafc;\n  padding: 8px 12px;\n  border-radius: 10px;\n}\n.agentes-grid .agente-card .ag-actions-row {\n  display: flex;\n  justify-content: flex-end;\n}\n.agentes-grid .agente-card .ag-actions-row .ag-dupla-btn {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border: none;\n  padding: 9px 16px;\n  border-radius: 12px;\n  font-weight: 900;\n  font-size: 11.5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);\n  transition: all 0.2s ease;\n}\n.agentes-grid .agente-card .ag-actions-row .ag-dupla-btn:active {\n  transform: scale(0.96);\n}\n.agentes-grid .agente-card .ag-actions-row .ag-my-badge-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.agentes-grid .agente-card .ag-actions-row .ag-my-badge-wrap .ag-active-pill {\n  background: rgba(16, 185, 129, 0.15);\n  color: #059669;\n  font-size: 11px;\n  font-weight: 850;\n  padding: 5px 10px;\n  border-radius: 8px;\n}\n.agentes-grid .agente-card .ag-actions-row .ag-my-badge-wrap .ag-delete-btn {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n  padding: 5px 10px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.2s ease;\n}\n.agentes-grid .agente-card .ag-actions-row .ag-my-badge-wrap .ag-delete-btn:active {\n  transform: scale(0.95);\n}\n/*# sourceMappingURL=jugador-campeonatos.page.css.map */\n'] }]
  }], () => [{ type: MysqlService }, { type: Router }, { type: AlertController }, { type: LoadingController }, { type: ToastController }, { type: HapticFeedbackService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JugadorCampeonatosPage, { className: "JugadorCampeonatosPage", filePath: "src/app/pages/jugador-campeonatos/jugador-campeonatos.page.ts", lineNumber: 38 });
})();
export {
  JugadorCampeonatosPage
};
//# sourceMappingURL=jugador-campeonatos.page-XJHT4TZ7.js.map

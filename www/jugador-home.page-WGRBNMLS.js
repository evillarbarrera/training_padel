import {
  ActionSheetController,
  AlertController,
  IonBadge,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  LoadingController
} from "./chunk-5YKSH3EK.js";
import {
  addIcons,
  albumsOutline,
  arrowForward,
  barChartOutline,
  barbellOutline,
  calendarNumberOutline,
  calendarOutline,
  cardOutline,
  chevronDownOutline,
  chevronForwardOutline,
  close,
  closeOutline,
  homeOutline,
  locationOutline,
  lockClosedOutline,
  logOutOutline,
  notificationsOutline,
  personOutline,
  ribbonOutline,
  settingsOutline,
  sparklesOutline,
  timeOutline,
  trophyOutline,
  videocamOutline
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
  HttpClient,
  NgForOf,
  NgIf,
  NgZone,
  Router,
  ViewChild,
  setClassMetadata,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-VZCO22FC.js";
import "./chunk-DMH43HQY.js";
import "./chunk-T5LCTCQ6.js";
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/pages/jugador-home/jugador-home.page.ts
var _c0 = ["videoInput"];
var _c1 = () => [0, 0.45, 0.65, 0.9];
var _c2 = () => [0, 0.6, 0.9];
var _c3 = () => [0, 0.5, 0.75, 0.95];
var _c4 = () => [1, 2, 3, 4, 5];
function JugadorHomePage_ng_container_5_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_5_div_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNotificaciones());
    });
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275elementStart(2, "ion-badge", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getNotificacionesCount());
  }
}
function JugadorHomePage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "div", 17)(6, "img", 18);
    \u0275\u0275listener("error", function JugadorHomePage_ng_container_5_Template_img_error_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImgError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "p", 20);
    \u0275\u0275text(9, "CONTINUAR ENTRENANDO,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, JugadorHomePage_ng_container_5_div_12_Template, 4, 1, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r2.fotoPerfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.jugadorNombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getNotificacionesCount() > 0);
  }
}
function JugadorHomePage_ng_container_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
function JugadorHomePage_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 26)(2, "div", 27)(3, "p");
    \u0275\u0275text(4, "Hola, de vuelta a la cancha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9, "\u{1F44B}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 30)(11, "div", 31);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_6_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNotificaciones());
    });
    \u0275\u0275element(12, "ion-icon", 24);
    \u0275\u0275template(13, JugadorHomePage_ng_container_6_div_13_Template, 1, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33)(15, "img", 18);
    \u0275\u0275listener("error", function JugadorHomePage_ng_container_6_Template_img_error_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImgError($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.jugadorNombre);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.getNotificacionesCount() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.fotoPerfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
  }
}
function JugadorHomePage_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_7_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToMisClases());
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275element(2, "ion-icon", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "div", 66);
    \u0275\u0275text(5, "SIGUIENTE SESI\xD3N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 67);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 68);
    \u0275\u0275element(10, "ion-icon", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "ion-icon", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(8, 3, ctx_r2.proximaClase.fecha, "d MMM"), " \u2022 ", ctx_r2.proximaClase.hora_inicio.slice(0, 5), " HRS");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.proximaClase.entrenador || "Tu Entrenamiento");
  }
}
function JugadorHomePage_ng_container_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71);
    \u0275\u0275element(2, "ion-icon", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "span", 74);
    \u0275\u0275text(5, "TIP DEL COACH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.dailyTip.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dailyTip.mensaje);
  }
}
function JugadorHomePage_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275template(2, JugadorHomePage_ng_container_7_div_2_Template, 13, 6, "div", 36);
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_7_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.abrirModalProgreso());
    });
    \u0275\u0275elementStart(4, "div", 38)(5, "div", 39)(6, "div", 40);
    \u0275\u0275element(7, "ion-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 42)(9, "h3");
    \u0275\u0275text(10, "Revisar tu progreso y entrenamiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Habilidades, nivel y sesiones activas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(13, "ion-icon", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, JugadorHomePage_ng_container_7_div_14_Template, 10, 2, "div", 44);
    \u0275\u0275elementStart(15, "div", 45)(16, "div", 46)(17, "h4", 47);
    \u0275\u0275text(18, "Centro de Mando");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 49)(21, "div", 50);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_7_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToAgenda());
    });
    \u0275\u0275elementStart(22, "div", 51);
    \u0275\u0275element(23, "ion-icon", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 53);
    \u0275\u0275text(25, "Agendar Clase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 50);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_7_Template_div_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToMisClases());
    });
    \u0275\u0275elementStart(27, "div", 51);
    \u0275\u0275element(28, "ion-icon", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 53);
    \u0275\u0275text(30, "Mi Agenda");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 55)(32, "div", 56);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_7_Template_div_click_32_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToReservarCancha());
    });
    \u0275\u0275elementStart(33, "div", 57)(34, "div", 58);
    \u0275\u0275text(35, "\u{1F3BE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 59)(37, "h3");
    \u0275\u0275text(38, "Reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40, "Clubes y Disponibilidad");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(41, "ion-icon", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 61);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_7_Template_div_click_42_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToCampeonatos());
    });
    \u0275\u0275elementStart(43, "div", 57)(44, "div", 62);
    \u0275\u0275text(45, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 59)(47, "h3");
    \u0275\u0275text(48, "Campeonatos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, "Torneos y Americanos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(51, "ion-icon", 60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.proximaClase);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.dailyTip);
  }
}
function JugadorHomePage_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275element(2, "ion-icon", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 100)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.dailyTip.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dailyTip.mensaje);
  }
}
function JugadorHomePage_ng_container_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_div_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirModalPacks());
    });
    \u0275\u0275elementStart(2, "div", 103)(3, "span", 104);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "ion-icon", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 106);
    \u0275\u0275text(7, "CLASES");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, "PENDIENTES");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 107);
    \u0275\u0275elementStart(11, "div", 108)(12, "span", 104);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 106);
    \u0275\u0275text(15, "Cr\xE9ditos");
    \u0275\u0275element(16, "br");
    \u0275\u0275text(17, "Disponibles");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 107);
    \u0275\u0275elementStart(19, "div", 108)(20, "span", 104);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 106);
    \u0275\u0275text(23, "Pr\xF3ximas");
    \u0275\u0275element(24, "br");
    \u0275\u0275text(25, "Reservas");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.clasesPendientes);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.clasesDisponibles);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.clasesReservadas);
  }
}
function JugadorHomePage_ng_container_8_div_4_div_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1, "\u{1F512}");
    \u0275\u0275elementEnd();
  }
}
function JugadorHomePage_ng_container_8_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "span", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, JugadorHomePage_ng_container_8_div_4_div_11_span_3_Template, 2, 0, "span", 123);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const logro_r11 = ctx.$implicit;
    \u0275\u0275styleProp("--badge-color", logro_r11.color_badge);
    \u0275\u0275classProp("unlocked", logro_r11.desbloqueado)("locked", !logro_r11.desbloqueado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(logro_r11.icono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !logro_r11.desbloqueado);
  }
}
function JugadorHomePage_ng_container_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToLogros());
    });
    \u0275\u0275elementStart(1, "div", 110)(2, "div", 111);
    \u0275\u0275element(3, "ion-icon", 112);
    \u0275\u0275elementStart(4, "span", 113);
    \u0275\u0275text(5, "MIS LOGROS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 114)(7, "span", 115);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "ion-icon", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 117);
    \u0275\u0275template(11, JugadorHomePage_ng_container_8_div_4_div_11_Template, 4, 8, "div", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 119);
    \u0275\u0275element(13, "div", 120);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r2.logrosDesbloqueados, "/", ctx_r2.logrosTotal);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.logros);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.logrosPorcentaje, "%");
  }
}
function JugadorHomePage_ng_container_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToMisClases());
    });
    \u0275\u0275elementStart(1, "div", 126)(2, "div", 127);
    \u0275\u0275element(3, "ion-icon", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128)(5, "span", 129);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 130);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "ion-icon", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("SIGUIENTE SESI\xD3N", ctx_r2.proximaClase.entrenador ? " \u2014 " + ctx_r2.proximaClase.entrenador : "", ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 3, ctx_r2.proximaClase.fecha, "d MMM"), " \u2022 ", ctx_r2.proximaClase.hora_inicio.slice(0, 5), " HRS");
  }
}
function JugadorHomePage_ng_container_8_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 133);
    \u0275\u0275text(2, "CAPACIDADES AI: EXPERIMENTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 134);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_div_64_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.analizarVideo());
    });
    \u0275\u0275elementStart(4, "div", 135)(5, "div", 136);
    \u0275\u0275element(6, "ion-icon", 72);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "GEMINI PRO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 137);
    \u0275\u0275text(10, "BETA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 138)(12, "div", 139)(13, "h3");
    \u0275\u0275text(14, "AN\xC1LISIS DE VIDEO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Sube tu video y recibe correcciones t\xE9cnicas impulsadas por Inteligencia Artificial.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 140);
    \u0275\u0275element(18, "ion-icon", 141);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "ANALIZAR");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(21, "div", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h2", 143);
    \u0275\u0275text(23, "Coach Tips & Clips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 144)(25, "div", 145)(26, "div", 146);
    \u0275\u0275element(27, "ion-icon", 147);
    \u0275\u0275elementStart(28, "div", 148)(29, "span", 149);
    \u0275\u0275text(30, "Coach Mu\xF1oz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 150);
    \u0275\u0275text(32, "Tip: El Remate de Potencia");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 151)(34, "ion-button", 152);
    \u0275\u0275element(35, "ion-icon", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ion-button", 152);
    \u0275\u0275element(37, "ion-icon", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ion-button", 155);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_div_64_Template_ion_button_click_38_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToAgenda());
    });
    \u0275\u0275text(39, "AGENDAR");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "h2", 143);
    \u0275\u0275text(41, "Retos de la Semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 156)(43, "div", 157);
    \u0275\u0275element(44, "ion-icon", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 159)(46, "h3");
    \u0275\u0275text(47, "20 BANDEJAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p");
    \u0275\u0275text(49, "Sube tu video y gana 50 puntos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 160);
    \u0275\u0275element(51, "div", 161);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "ion-button", 162);
    \u0275\u0275text(53, "UNI\xC9NDOME");
    \u0275\u0275elementEnd()()();
  }
}
function JugadorHomePage_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 75);
    \u0275\u0275template(2, JugadorHomePage_ng_container_8_div_2_Template, 8, 2, "div", 76)(3, JugadorHomePage_ng_container_8_div_3_Template, 26, 3, "div", 77)(4, JugadorHomePage_ng_container_8_div_4_Template, 14, 5, "div", 78)(5, JugadorHomePage_ng_container_8_div_5_Template, 11, 6, "div", 79);
    \u0275\u0275elementStart(6, "div", 80)(7, "div", 81);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToMisClases());
    });
    \u0275\u0275element(8, "img", 82);
    \u0275\u0275elementStart(9, "div", 83)(10, "div", 84)(11, "h3");
    \u0275\u0275text(12, "Mis Clases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14, "Consulta tus reservas y asistencias");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "ion-icon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 86);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToAgenda());
    });
    \u0275\u0275element(17, "img", 87);
    \u0275\u0275elementStart(18, "div", 83)(19, "div", 84)(20, "h3");
    \u0275\u0275text(21, "Agendar Clase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Reserva tu pr\xF3ximo entrenamiento");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "ion-icon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 86);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToReservarCancha());
    });
    \u0275\u0275element(26, "img", 87);
    \u0275\u0275elementStart(27, "div", 83)(28, "div", 84)(29, "h3");
    \u0275\u0275text(30, "Reservar Cancha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "Busca clubes y reserva tu pista");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "ion-icon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 88);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToCampeonatos());
    });
    \u0275\u0275element(35, "img", 82);
    \u0275\u0275elementStart(36, "div", 83)(37, "div", 84)(38, "h3");
    \u0275\u0275text(39, "Campeonatos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41, "Torneos, Americanos y Partidos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "ion-icon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 89);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_Template_div_click_43_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.misHabilidades());
    });
    \u0275\u0275element(44, "img", 90);
    \u0275\u0275elementStart(45, "div", 83)(46, "div", 84)(47, "h3");
    \u0275\u0275text(48, "Mis Habilidades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, "Seguimiento de tu progreso t\xE9cnico");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "ion-icon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 91);
    \u0275\u0275listener("click", function JugadorHomePage_ng_container_8_Template_div_click_52_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSmartwatch());
    });
    \u0275\u0275elementStart(53, "div", 92);
    \u0275\u0275text(54, " \u231A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 83)(56, "div", 84)(57, "h3", 93);
    \u0275\u0275text(58, " Apple Watch & Stats ");
    \u0275\u0275elementStart(59, "span", 94);
    \u0275\u0275text(60, "PRO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "p");
    \u0275\u0275text(62, "Marcador en vivo, velocidad y golpes");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(63, "ion-icon", 95);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(64, JugadorHomePage_ng_container_8_div_64_Template, 54, 0, "div", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.dailyTip);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clasesPagadas > 0 || ctx_r2.clasesReservadas > 0 || ctx_r2.clasesDisponibles > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.logros.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.proximaClase);
    \u0275\u0275advance(59);
    \u0275\u0275property("ngIf", ctx_r2.isDev);
  }
}
function JugadorHomePage_div_9_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181)(1, "div", 182)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 183);
    \u0275\u0275element(7, "div", 184);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r15.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r15.value, "/10");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", m_r15.value * 10 + "%");
  }
}
function JugadorHomePage_div_9_li_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tip_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tip_r16);
  }
}
function JugadorHomePage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 163)(1, "div", 164)(2, "div", 165)(3, "div", 166);
    \u0275\u0275element(4, "ion-icon", 99);
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-button", 167);
    \u0275\u0275listener("click", function JugadorHomePage_div_9_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aiResult = null);
    });
    \u0275\u0275element(8, "ion-icon", 168);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 169)(10, "div", 170)(11, "div", 171)(12, "span", 172);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 173);
    \u0275\u0275text(15, "%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 174);
    \u0275\u0275text(17, "MATCH T\xC9CNICO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 175)(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 176);
    \u0275\u0275template(22, JugadorHomePage_div_9_div_22_Template, 8, 4, "div", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 178)(24, "h4");
    \u0275\u0275text(25, "TIPS DE MEJORA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul");
    \u0275\u0275template(27, JugadorHomePage_div_9_li_27_Template, 2, 1, "li", 179);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-button", 180);
    \u0275\u0275listener("click", function JugadorHomePage_div_9_Template_ion_button_click_28_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aiResult = null);
    });
    \u0275\u0275text(29, " ENTENDIDO ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r2.aiResult);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.aiResult.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.aiResult.score);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.aiResult.feedback);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.aiResult.metrics);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.aiResult.tips);
  }
}
function JugadorHomePage_ng_template_14_div_7_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 207);
  }
  if (rf & 2) {
    const pack_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", pack_r17.entrenador_foto.startsWith("http") ? pack_r17.entrenador_foto : "https://api.padelmanager.cl/" + pack_r17.entrenador_foto, \u0275\u0275sanitizeUrl);
  }
}
function JugadorHomePage_ng_template_14_div_7_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 208);
    \u0275\u0275text(1, "\u{1F3BE}");
    \u0275\u0275elementEnd();
  }
}
function JugadorHomePage_ng_template_14_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192)(1, "div", 193)(2, "div", 194);
    \u0275\u0275template(3, JugadorHomePage_ng_template_14_div_7_div_1_img_3_Template, 1, 1, "img", 195)(4, JugadorHomePage_ng_template_14_div_7_div_1_span_4_Template, 2, 0, "span", 196);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 197)(6, "span", 198);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 199);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 200)(11, "div", 201)(12, "span", 202);
    \u0275\u0275text(13, "Sesiones Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 203);
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "span", 204);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 205);
    \u0275\u0275element(19, "div", 206);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pack_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", pack_r17.entrenador_foto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pack_r17.entrenador_foto);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pack_r17.entrenador_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pack_r17.nombre);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", pack_r17.pendientes, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", pack_r17.total);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", pack_r17.total > 0 ? pack_r17.pendientes / pack_r17.total * 100 : 0, "%");
  }
}
function JugadorHomePage_ng_template_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190);
    \u0275\u0275template(1, JugadorHomePage_ng_template_14_div_7_div_1_Template, 20, 8, "div", 191);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.packsDetalle);
  }
}
function JugadorHomePage_ng_template_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275element(1, "ion-icon", 210);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No tienes packs activos.");
    \u0275\u0275elementEnd()();
  }
}
function JugadorHomePage_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185)(1, "div", 186);
    \u0275\u0275element(2, "div", 187);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Clases Disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Desglose por entrenador");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, JugadorHomePage_ng_template_14_div_7_Template, 2, 1, "div", 188)(8, JugadorHomePage_ng_template_14_div_8_Template, 4, 0, "div", 189);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.packsDetalle.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.packsDetalle.length === 0);
  }
}
function JugadorHomePage_ng_template_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 220);
    \u0275\u0275listener("click", function JugadorHomePage_ng_template_16_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onNotifClick("perfil"));
    });
    \u0275\u0275elementStart(1, "div", 221);
    \u0275\u0275element(2, "ion-icon", 222);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 223)(4, "h4");
    \u0275\u0275text(5, "Configura tu Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Agrega tu direcci\xF3n en tu perfil para encontrar entrenadores cerca de ti.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 224)(9, "ion-button", 225);
    \u0275\u0275text(10, "Ir al Perfil");
    \u0275\u0275elementEnd()()()();
  }
}
function JugadorHomePage_ng_template_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 226);
    \u0275\u0275listener("click", function JugadorHomePage_ng_template_16_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onNotifClick("tips"));
    });
    \u0275\u0275elementStart(1, "div", 221);
    \u0275\u0275element(2, "ion-icon", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 223)(4, "h4");
    \u0275\u0275text(5, "\xA1Consejos Diarios!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Cada d\xEDa recibir\xE1s nuevos consejos de p\xE1del impulsados por IA para mejorar tu t\xE9cnica.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 224)(9, "ion-button", 227);
    \u0275\u0275text(10, "Entendido");
    \u0275\u0275elementEnd()()()();
  }
}
function JugadorHomePage_ng_template_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275element(1, "ion-icon", 229);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No tienes notificaciones pendientes.");
    \u0275\u0275elementEnd()();
  }
}
function JugadorHomePage_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 211);
    \u0275\u0275element(1, "div", 212);
    \u0275\u0275elementStart(2, "div", 213)(3, "h2");
    \u0275\u0275text(4, "NOTIFICACIONES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 214);
    \u0275\u0275listener("click", function JugadorHomePage_ng_template_16_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNotificaciones());
    });
    \u0275\u0275element(6, "ion-icon", 215);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 216);
    \u0275\u0275template(8, JugadorHomePage_ng_template_16_div_8_Template, 11, 0, "div", 217)(9, JugadorHomePage_ng_template_16_div_9_Template, 11, 0, "div", 218)(10, JugadorHomePage_ng_template_16_div_10_Template, 4, 0, "div", 219);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.sinDireccion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showTipsInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getNotificacionesCount() === 0);
  }
}
function JugadorHomePage_ng_template_18_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 265)(1, "span", 266);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const logro_r22 = ctx.$implicit;
    \u0275\u0275styleProp("--badge-color", logro_r22.color_badge || "#e5e5ea");
    \u0275\u0275classProp("locked", logro_r22.desbloqueado === false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(logro_r22.icono || "\u{1F512}");
  }
}
function JugadorHomePage_ng_template_18_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 267);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r2.logros.length - 5);
  }
}
function JugadorHomePage_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 230);
    \u0275\u0275element(1, "div", 212);
    \u0275\u0275elementStart(2, "div", 231)(3, "div", 232)(4, "span", 233);
    \u0275\u0275text(5, "RENDIMIENTO DEPORTIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Tu Progreso");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 234);
    \u0275\u0275listener("click", function JugadorHomePage_ng_template_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalProgreso());
    });
    \u0275\u0275element(9, "ion-icon", 235);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 236)(11, "div", 237);
    \u0275\u0275listener("click", function JugadorHomePage_ng_template_18_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToLogros());
    });
    \u0275\u0275elementStart(12, "div", 238)(13, "div", 239);
    \u0275\u0275text(14, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 240)(16, "span", 241);
    \u0275\u0275text(17, "Rango Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 242)(21, "span");
    \u0275\u0275text(22, "Ver Logros");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "ion-icon", 243);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 244)(25, "div", 245);
    \u0275\u0275listener("click", function JugadorHomePage_ng_template_18_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.abrirModalPacks());
    });
    \u0275\u0275elementStart(26, "div", 246);
    \u0275\u0275element(27, "ion-icon", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 247);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 248);
    \u0275\u0275text(31, "Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 249);
    \u0275\u0275element(33, "ion-icon", 243);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 250)(35, "div", 251)(36, "span", 248);
    \u0275\u0275text(37, "Cr\xE9ditos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 247);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 251)(41, "span", 248);
    \u0275\u0275text(42, "Reservadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 247);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 252);
    \u0275\u0275listener("click", function JugadorHomePage_ng_template_18_Template_div_click_45_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToLogros());
    });
    \u0275\u0275elementStart(46, "div", 253)(47, "h4");
    \u0275\u0275text(48, "Logros e Insignias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 254);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 255)(52, "div", 256);
    \u0275\u0275element(53, "div", 257);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 258);
    \u0275\u0275template(55, JugadorHomePage_ng_template_18_div_55_Template, 3, 5, "div", 259)(56, JugadorHomePage_ng_template_18_div_56_Template, 2, 1, "div", 260);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "button", 261);
    \u0275\u0275listener("click", function JugadorHomePage_ng_template_18_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.misHabilidades());
    });
    \u0275\u0275elementStart(58, "div", 262);
    \u0275\u0275element(59, "ion-icon", 263);
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61, "Habilidades y Nivel");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(62, "ion-icon", 264);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1("Nivel ", ctx_r2.logrosDesbloqueados > 0 ? ctx_r2.logrosDesbloqueados : 1);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.clasesPendientes);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.clasesDisponibles);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.clasesReservadas);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.logrosPorcentaje, "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.logrosPorcentaje, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.logros.length ? ctx_r2.logros.slice(0, 5) : \u0275\u0275pureFunction0(9, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.logros.length > 5);
  }
}
function JugadorHomePage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 268);
    \u0275\u0275listener("click", function JugadorHomePage_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismissAchievementToast());
    });
    \u0275\u0275elementStart(1, "div", 269);
    \u0275\u0275element(2, "div", 270);
    \u0275\u0275elementStart(3, "div", 271)(4, "div", 272);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 273)(7, "span", 274);
    \u0275\u0275text(8, "\xA1LOGRO DESBLOQUEADO!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 275);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 276);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(13, "div", 277);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("--toast-color", (ctx_r2.achievementToast == null ? null : ctx_r2.achievementToast.color_badge) || "#CCFF00");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.achievementToast == null ? null : ctx_r2.achievementToast.icono);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.achievementToast == null ? null : ctx_r2.achievementToast.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.achievementToast == null ? null : ctx_r2.achievementToast.descripcion);
  }
}
var _JugadorHomePage = class _JugadorHomePage {
  constructor(router, actionSheetCtrl, loadingCtrl, alertCtrl, ngZone, mysqlService, http) {
    this.router = router;
    this.actionSheetCtrl = actionSheetCtrl;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.ngZone = ngZone;
    this.mysqlService = mysqlService;
    this.http = http;
    this.jugadorNombre = "...";
    this.fotoPerfil = "";
    this.clasesPagadas = 0;
    this.clasesReservadas = 0;
    this.clasesDisponibles = 0;
    this.clasesPendientes = 0;
    this.clasesGrupales = 0;
    this.packsDetalle = [];
    this.proximaClase = null;
    this.isDev = true;
    this.aiResult = null;
    this.dailyTip = null;
    this.sinDireccion = false;
    this.showTipsInfo = true;
    this.isNotificacionesOpen = false;
    this.logros = [];
    this.logrosDesbloqueados = 0;
    this.logrosTotal = 0;
    this.logrosPorcentaje = 0;
    this.showAchievementToast = false;
    this.achievementToast = null;
    this.modalPacksOpen = false;
    this.isProgresoModalOpen = false;
    addIcons({
      "settings-outline": settingsOutline,
      "home-outline": homeOutline,
      "calendar-outline": calendarOutline,
      "log-out-outline": logOutOutline,
      "albums-outline": albumsOutline,
      "barbell-outline": barbellOutline,
      "person-outline": personOutline,
      "close": close,
      "calendar-number-outline": calendarNumberOutline,
      "trophy-outline": trophyOutline,
      "bar-chart-outline": barChartOutline,
      "sparkles-outline": sparklesOutline,
      "sparkles": sparklesOutline,
      // Fallback
      "videocam-outline": videocamOutline,
      "chevron-down-outline": chevronDownOutline,
      "location-outline": locationOutline,
      "notifications-outline": notificationsOutline,
      "close-outline": closeOutline,
      "ribbon-outline": ribbonOutline,
      "lock-closed-outline": lockClosedOutline,
      "chevron-forward-outline": chevronForwardOutline,
      "arrow-forward": arrowForward,
      "time-outline": timeOutline,
      "card-outline": cardOutline
    });
  }
  ngOnInit() {
    this.cargarStats();
  }
  ionViewWillEnter() {
    const savedFoto = localStorage.getItem("userFoto") || localStorage.getItem("foto_perfil");
    if (savedFoto) {
      this.fotoPerfil = this.getProfileImage(savedFoto);
    }
    this.cargarStats();
  }
  cargarStats() {
    const userId = Number(localStorage.getItem("userId"));
    if (!userId) {
      this.router.navigate(["/login"]);
      return;
    }
    this.mysqlService.getHomeStats(userId).subscribe({
      next: (res) => {
        this.jugadorNombre = res.nombre;
        const fotoRaw = res.foto_perfil || res.foto;
        if (fotoRaw) {
          localStorage.setItem("userFoto", fotoRaw);
          localStorage.setItem("foto_perfil", fotoRaw);
          this.fotoPerfil = this.getProfileImage(fotoRaw);
        }
        if (res.estadisticas && res.estadisticas.packs) {
          this.clasesPagadas = res.estadisticas.packs.pagadas;
          this.clasesReservadas = res.estadisticas.packs.reservadas;
          this.clasesDisponibles = res.estadisticas.packs.disponibles;
          this.clasesPendientes = res.estadisticas.packs.pendientes || 0;
          this.clasesGrupales = res.estadisticas.packs.grupales || 0;
          this.packsDetalle = res.estadisticas.packs.detalle || [];
        }
        if (res.prox_clase) {
          this.proximaClase = res.prox_clase;
        } else {
          this.proximaClase = null;
        }
      },
      error: (err) => {
        console.error("Error al cargar estad\xEDsticas:", err);
      }
    });
    this.mysqlService.getPerfil(userId).subscribe({
      next: (res) => {
        if (res && res.user) {
          const user = res.user;
          const userFoto = user.foto_perfil || user.foto;
          if (userFoto) {
            this.fotoPerfil = this.getProfileImage(userFoto);
          }
          this.sinDireccion = !user.direccion || typeof user.direccion === "string" && user.direccion.trim().length < 3;
        }
      }
    });
    this.mysqlService.getLogros(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.logros = res.logros || [];
          this.logrosDesbloqueados = res.desbloqueados || 0;
          this.logrosTotal = res.total || 0;
          this.logrosPorcentaje = res.porcentaje || 0;
        }
      },
      error: (err) => console.error("Error loading logros:", err)
    });
    this.mysqlService.getDailyTipAI().subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.dailyTip = res;
        }
      },
      error: (err) => console.error("Error loading AI tip:", err)
    });
  }
  handleRefresh(event) {
    this.cargarStats();
    setTimeout(() => {
      event.target.complete();
    }, 1e3);
  }
  getSaldoPercent() {
    if (this.clasesPagadas === 0)
      return 0;
    const pct = this.clasesDisponibles / this.clasesPagadas * 100;
    return Math.min(100, Math.max(0, pct));
  }
  agendar() {
    this.router.navigate(["/jugador-reservas"]);
  }
  goToReservarCancha() {
    this.router.navigate(["/clubes-reservar"]);
  }
  comprarPack() {
    this.alertCtrl.create({
      header: "Informaci\xF3n",
      message: 'Para adquirir un nuevo pack, debes seleccionar un horario en "Agendar Clase" una vez hayas completado tus clases actuales.',
      buttons: ["OK"]
    }).then((a) => a.present());
  }
  misHabilidades() {
    this.cerrarModalProgreso();
    this.router.navigate(["/mis-habilidades"]);
  }
  goToSmartwatch() {
    this.cerrarModalProgreso();
    this.router.navigate(["/smartwatch-stats"]);
  }
  abrirModalPacks() {
    this.cerrarModalProgreso();
    this.modalPacksOpen = true;
  }
  cerrarModalPacks() {
    this.modalPacksOpen = false;
  }
  abrirModalProgreso() {
    this.isProgresoModalOpen = true;
  }
  cerrarModalProgreso() {
    this.isProgresoModalOpen = false;
    const modal = document.getElementById("progreso-entrenamiento-modal");
    if (modal) {
      modal.dismiss();
    }
  }
  analizarVideo() {
    this.videoInput.nativeElement.click();
  }
  onVideoSelected(event) {
    return __async(this, null, function* () {
      const file = event.target.files[0];
      if (!file)
        return;
      const loading = yield this.loadingCtrl.create({
        message: "Gemini analizando t\xE9cnica (esto puede tardar 1 min)...",
        spinner: "dots",
        mode: "ios",
        cssClass: "ai-loading-custom"
      });
      yield loading.present();
      const userId = localStorage.getItem("userId") || "0";
      const formData = new FormData();
      formData.append("video", file);
      formData.append("jugador_id", userId);
      this.http.post(`${environment.apiUrl}/ia/gemini_analyze.php`, formData).subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.success) {
            this.aiResult = res.analysis;
            if (res.nuevos_logros && res.nuevos_logros.length > 0) {
              res.nuevos_logros.forEach((l) => {
                this.showAchievementUnlocked(l);
              });
            }
          }
        },
        error: (err) => {
          loading.dismiss();
          console.error("AI Analysis Error:", err);
        }
      });
    });
  }
  goToHome() {
    this.router.navigate(["/jugador-home"]);
  }
  goToAgenda() {
    this.router.navigate(["/jugador-reservas"], { queryParams: { view: "agendar" } });
  }
  goToMisClases() {
    this.router.navigate(["/jugador-reservas"], { queryParams: { view: "mis-entrenamientos" } });
  }
  goToCampeonatos() {
    this.router.navigate(["/jugador-campeonatos"]);
  }
  logout() {
    console.log("Logging out player...");
    localStorage.clear();
    this.ngZone.run(() => {
      this.router.navigate(["/login"], { replaceUrl: true });
    });
  }
  goToMisPacks() {
    this.router.navigate(["/alumno-mis-packs"]);
  }
  openSettings() {
    return __async(this, null, function* () {
      const actionSheet = yield this.actionSheetCtrl.create({
        header: "Ajustes del Jugador",
        buttons: [
          {
            text: "Mi Perfil",
            icon: "person-outline",
            handler: () => {
              this.router.navigate(["/perfil"]);
            }
          },
          /* {
            text: 'Tarjeta Digital',
            icon: 'card-outline',
            handler: () => {
              this.router.navigate(['/tarjeta-digital']);
            }
          }, */
          {
            text: "Cerrar sesi\xF3n",
            icon: "log-out-outline",
            role: "destructive",
            handler: () => {
              this.logout();
            }
          },
          {
            text: "Cancelar",
            icon: "close",
            role: "cancel"
          }
        ]
      });
      yield actionSheet.present();
    });
  }
  goToPerfil() {
    this.isNotificacionesOpen = false;
    setTimeout(() => {
      this.router.navigate(["/perfil"]);
    }, 100);
  }
  onNotifClick(type) {
    if (type === "perfil") {
      this.goToPerfil();
    } else if (type === "tips") {
      this.dismissTipsInfo();
    }
  }
  dismissTipsInfo() {
    this.showTipsInfo = false;
    this.isNotificacionesOpen = false;
  }
  getNotificacionesCount() {
    let count = 0;
    if (this.sinDireccion)
      count++;
    if (this.showTipsInfo)
      count++;
    return count;
  }
  openNotificaciones() {
    this.isNotificacionesOpen = true;
  }
  closeNotificaciones() {
    this.isNotificacionesOpen = false;
  }
  goToLogros() {
    this.cerrarModalProgreso();
    this.router.navigate(["/mis-logros"]);
  }
  showAchievementUnlocked(logro) {
    this.achievementToast = logro;
    this.showAchievementToast = true;
    setTimeout(() => {
      this.showAchievementToast = false;
      this.achievementToast = null;
    }, 4500);
  }
  dismissAchievementToast() {
    this.showAchievementToast = false;
    this.achievementToast = null;
  }
  getProfileImage(url) {
    if (!url || url === "null" || url === "undefined" || typeof url !== "string") {
      return "assets/avatar.png";
    }
    const cleanUrl = url.trim();
    if (!cleanUrl || cleanUrl === "" || cleanUrl.includes("imagen_defecto") || cleanUrl.includes("default_avatar")) {
      return "assets/avatar.png";
    }
    if (cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://") || cleanUrl.startsWith("data:image")) {
      return cleanUrl;
    }
    if (cleanUrl.startsWith("assets/")) {
      return cleanUrl;
    }
    const path = cleanUrl.startsWith("/") ? cleanUrl.substring(1) : cleanUrl;
    if (path.startsWith("prd/") || path.startsWith("api_training/")) {
      return `https://api.padelmanager.cl/${path}`;
    }
    if (path.startsWith("uploads/")) {
      return `https://api.padelmanager.cl/${path}`;
    }
    return `https://api.padelmanager.cl/api_training/${path}`;
  }
  onImgError(event) {
    if (event && event.target) {
      const currentSrc = event.target.src || "";
      if (currentSrc.includes("api.padelmanager.cl/uploads/")) {
        event.target.src = currentSrc.replace("api.padelmanager.cl/uploads/", "api.padelmanager.cl/api_training/uploads/");
      } else if (currentSrc.includes("/api_training/uploads/")) {
        event.target.src = currentSrc.replace("/api_training/uploads/", "/prd/uploads/");
      } else {
        event.target.src = "assets/avatar.png";
      }
    }
  }
};
_JugadorHomePage.\u0275fac = function JugadorHomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JugadorHomePage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActionSheetController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(HttpClient));
};
_JugadorHomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JugadorHomePage, selectors: [["app-jugador-home"]], viewQuery: function JugadorHomePage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoInput = _t.first);
  }
}, decls: 20, vars: 16, consts: [["videoInput", ""], [3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], ["type", "file", "accept", "video/*", 2, "display", "none", 3, "change"], [4, "ngIf"], ["class", "ai-results-overlay", 3, "show", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", 3, "click"], ["name", "person-outline"], ["initialBreakpoint", "0.65", "handleBehavior", "cycle", "cssClass", "bottom-sheet-modal", 3, "didDismiss", "isOpen", "breakpoints"], ["initialBreakpoint", "0.6", 1, "custom-bottom-sheet", 3, "didDismiss", "isOpen", "breakpoints"], ["id", "progreso-entrenamiento-modal", "initialBreakpoint", "0.75", 1, "custom-bottom-sheet", 3, "didDismiss", "isOpen", "breakpoints"], ["class", "achievement-toast-overlay", 3, "click", 4, "ngIf"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content-wrapper"], [1, "header-left-info"], [1, "avatar-circle"], ["alt", "Avatar", 3, "error", "src"], [1, "header-text"], [1, "welcome-pre"], [1, "header-title"], ["class", "notifications-btn", 3, "click", 4, "ngIf"], [1, "notifications-btn", 3, "click"], ["name", "notifications-outline"], ["color", "danger", 1, "notif-badge"], [1, "header-v2", "animate-fade"], [1, "h-text"], [1, "h-title-row"], [1, "h-wave"], [1, "h-actions"], [1, "h-notif", 3, "click"], ["class", "h-dot", 4, "ngIf"], [1, "h-avatar"], [1, "h-dot"], [1, "dashboard-v2", "animate-up"], ["class", "next-class-v2", 3, "click", 4, "ngIf"], [1, "progreso-trigger-container", 3, "click"], [1, "progreso-trigger-content"], [1, "pt-left"], [1, "pt-icon-badge"], ["name", "bar-chart-outline"], [1, "pt-text"], ["name", "chevron-forward", 1, "pt-arrow"], ["class", "daily-tip-v2 delay-1", 4, "ngIf"], [1, "actions-v2-card", "delay-1"], [1, "v2-card-header"], [1, "v2-subtitle"], [1, "v2-status-dot", "pulse"], [1, "actions-grid-v2", 2, "margin-bottom", "25px"], [1, "action-btn-v2", 3, "click"], [1, "a-icon", "bg-soft"], ["name", "calendar-outline"], [1, "a-label"], ["name", "time-outline"], [1, "hero-actions-grid"], [1, "hero-booking-action", "animate-pulse", 3, "click"], [1, "hero-btn-content"], [1, "hero-icon-wrap"], [1, "hero-text-wrap"], ["name", "arrow-forward"], [1, "hero-booking-action", "tournament-hero", "animate-pop", "delay-1", 3, "click"], [1, "hero-icon-wrap", "trophy"], [1, "next-class-v2", 3, "click"], [1, "nc-icon-badge"], [1, "nc-content"], [1, "nc-tag"], [1, "nc-date"], [1, "nc-coach"], ["name", "chevron-forward", 1, "nc-arrow"], [1, "daily-tip-v2", "delay-1"], [1, "t-icon"], ["name", "sparkles-outline"], [1, "t-content"], [1, "t-badge"], [1, "dashboard-container"], ["class", "daily-tip-card animate-up", 4, "ngIf"], ["class", "metrics-dashboard animate-up", 4, "ngIf"], ["class", "logros-widget animate-up", 3, "click", 4, "ngIf"], ["class", "next-session-row animate-up delay-1", 3, "click", 4, "ngIf"], [1, "modules-column", "animate-up", 2, "animation-delay", "0.1s"], [1, "nike-card", "module-card", "animate-pop", "delay-2", 3, "click"], ["src", "/assets/mod-packs.jpg", 1, "module-img"], [1, "module-body"], [1, "module-text"], ["name", "chevron-forward-outline", 1, "module-arrow"], [1, "nike-card", "module-card", "animate-pop", "delay-3", 3, "click"], ["src", "/assets/reserva-bg.jpg", 1, "module-img"], [1, "nike-card", "module-card", "animate-pop", "delay-4", 3, "click"], [1, "nike-card", "module-card", "animate-pop", "delay-5", 3, "click"], ["src", "/assets/mod-alumnos.jpg", 1, "module-img"], [1, "nike-card", "module-card", "animate-pop", "delay-5", 2, "border", "1px solid rgba(6, 182, 212, 0.4)", "background", "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)", 3, "click"], [2, "font-size", "2.2rem", "padding", "12px 14px", "display", "flex", "align-items", "center", "justify-content", "center", "background", "rgba(6, 182, 212, 0.15)", "border-radius", "14px", "margin", "8px"], [2, "color", "#22d3ee", "display", "flex", "align-items", "center", "gap", "6px"], [2, "font-size", "0.65rem", "background", "#06b6d4", "color", "#0f172a", "padding", "2px 6px", "border-radius", "4px", "font-weight", "900"], ["name", "chevron-forward-outline", 1, "module-arrow", 2, "color", "#22d3ee"], ["class", "social-dev-section animate-up", "style", "animation-delay: 0.2s; margin-top: 40px;", 4, "ngIf"], [1, "daily-tip-card", "animate-up"], [1, "tip-icon"], ["name", "sparkles"], [1, "tip-content"], [1, "metrics-dashboard", "animate-up"], [1, "metric-item", "highlight", "animate-pulse", "clickable-metric", 3, "click"], [1, "metric-top"], [1, "metric-value"], ["name", "chevron-down-outline", 1, "btn-chevron"], [1, "metric-label"], [1, "metric-divider"], [1, "metric-item"], [1, "logros-widget", "animate-up", 3, "click"], [1, "logros-header"], [1, "logros-title-group"], ["name", "ribbon-outline"], [1, "logros-title"], [1, "logros-meta"], [1, "logros-count"], ["name", "chevron-forward-outline", 1, "logros-arrow"], [1, "logros-scroll"], ["class", "logro-badge", 3, "unlocked", "locked", "--badge-color", 4, "ngFor", "ngForOf"], [1, "logros-progress-bar"], [1, "logros-progress-fill"], [1, "logro-badge"], [1, "logro-icono"], ["class", "logro-lock", 4, "ngIf"], [1, "logro-lock"], [1, "next-session-row", "animate-up", "delay-1", 3, "click"], [1, "row-main"], [1, "row-icon", "float-element"], [1, "row-text"], [1, "label"], [1, "value"], ["name", "chevron-forward-outline", 1, "row-arrow"], [1, "social-dev-section", "animate-up", 2, "animation-delay", "0.2s", "margin-top", "40px"], [1, "section-badge-dev"], [1, "nike-card", "ai-feature-card", 3, "click"], [1, "ai-header"], [1, "gemini-badge"], [1, "ai-status"], [1, "ai-body"], [1, "ai-main-text"], [1, "ai-action"], ["name", "videocam-outline"], [1, "ai-visual-effect"], [1, "nike-title-lg", 2, "margin", "30px 0 20px 5px", "color", "var(--nike-black)"], [1, "video-feed-container"], [1, "video-card-dev"], [1, "video-placeholder"], ["name", "play-circle-outline"], [1, "video-overlay-text"], [1, "coach-tag"], [1, "video-title"], [1, "video-actions-dev"], ["fill", "clear", "color", "dark"], ["name", "heart-outline"], ["name", "chatbubble-outline"], ["fill", "solid", 1, "nike-btn-mini", 3, "click"], [1, "nike-card", "challenge-card-dev"], [1, "challenge-icon"], ["name", "trophy-outline"], [1, "challenge-info"], [1, "progress-bar-dev"], [1, "progress-fill-dev"], ["fill", "outline", "color", "dark", "size", "small"], [1, "ai-results-overlay"], [1, "ai-results-card", "animate-up"], [1, "results-header"], [1, "header-main"], ["fill", "clear", "color", "light", 3, "click"], ["name", "close"], [1, "results-body"], [1, "score-section"], [1, "score-circle"], [1, "score-val"], [1, "score-pct"], [1, "score-label"], [1, "feedback-text"], [1, "metrics-grid"], ["class", "metric-progress", 4, "ngFor", "ngForOf"], [1, "tips-section"], [4, "ngFor", "ngForOf"], ["expand", "block", 1, "nike-btn-black", 3, "click"], [1, "metric-progress"], [1, "metric-info"], [1, "progress-bg"], [1, "progress-fill"], [1, "modal-desglose-container"], [1, "modal-desglose-header"], [1, "handle"], ["class", "packs-breakdown modal-view", 4, "ngIf"], ["class", "empty-state-modal", 4, "ngIf"], [1, "packs-breakdown", "modal-view"], ["class", "pack-styled-card", 4, "ngFor", "ngForOf"], [1, "pack-styled-card"], [1, "pack-coach-row"], [1, "pack-avatar"], ["alt", "Coach", 3, "src", 4, "ngIf"], ["class", "avatar-fallback", 4, "ngIf"], [1, "pack-text"], [1, "coach-name"], [1, "pack-label"], [1, "pack-bar-group"], [1, "pack-bar-header"], [1, "bar-label"], [1, "pack-count"], [1, "total"], [1, "pack-bar"], [1, "pack-bar-fill"], ["alt", "Coach", 3, "src"], [1, "avatar-fallback"], [1, "empty-state-modal"], ["name", "albums-outline"], [1, "notifications-content"], [1, "drag-handle"], [1, "modal-header-notit"], ["fill", "clear", 1, "close-btn", 3, "click"], ["name", "close", "slot", "icon-only"], [1, "notifications-list"], ["class", "notification-card-home warning animate-pop", 3, "click", 4, "ngIf"], ["class", "notification-card-home success animate-pop", 3, "click", 4, "ngIf"], ["class", "empty-notifications", 4, "ngIf"], [1, "notification-card-home", "warning", "animate-pop", 3, "click"], [1, "card-icon"], ["name", "location-outline"], [1, "card-body"], [1, "card-actions"], ["fill", "solid", 1, "action-btn-notit"], [1, "notification-card-home", "success", "animate-pop", 3, "click"], ["fill", "clear", "color", "medium"], [1, "empty-notifications"], ["name", "notifications-off-outline"], [1, "progreso-modal-content"], [1, "pm-header"], [1, "pm-title-group"], [1, "pm-tag"], [1, "pm-close-btn", 3, "click"], ["name", "close-outline"], [1, "pm-body"], [1, "pm-level-hero", 3, "click"], [1, "lh-left"], [1, "lh-icon-badge"], [1, "lh-text"], [1, "lh-sub"], [1, "lh-action-btn"], ["name", "chevron-forward"], [1, "pm-metrics-grid"], [1, "pm-metric-card", "pending-card", 3, "click"], [1, "mc-icon"], [1, "mc-value"], [1, "mc-label"], [1, "mc-arrow"], [1, "pm-metrics-subgrid"], [1, "pm-metric-card", "mini-card"], [1, "pm-section-card", 3, "click"], [1, "pm-section-header"], [1, "pm-section-pct"], [1, "pm-progress-container"], [1, "pm-progress-bar"], [1, "pm-progress-fill"], [1, "pm-badges-row"], ["class", "pm-mini-badge", 3, "locked", "--badge-color", 4, "ngFor", "ngForOf"], ["class", "pm-mini-badge-more", 4, "ngIf"], [1, "pm-action-button", 3, "click"], [1, "ab-content"], ["name", "ribbon-outline", 1, "ab-icon"], ["name", "chevron-forward-outline", 1, "ab-arrow"], [1, "pm-mini-badge"], [1, "pm-badge-emoji"], [1, "pm-mini-badge-more"], [1, "achievement-toast-overlay", 3, "click"], [1, "achievement-toast"], [1, "toast-glow"], [1, "toast-content"], [1, "toast-badge-icon"], [1, "toast-text"], [1, "toast-label"], [1, "toast-name"], [1, "toast-desc"], [1, "toast-progress"]], template: function JugadorHomePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 1)(1, "ion-refresher", 2);
    \u0275\u0275listener("ionRefresh", function JugadorHomePage_Template_ion_refresher_ionRefresh_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleRefresh($event));
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 3, 0);
    \u0275\u0275listener("change", function JugadorHomePage_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onVideoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JugadorHomePage_ng_container_5_Template, 13, 3, "ng-container", 4)(6, JugadorHomePage_ng_container_6_Template, 16, 3, "ng-container", 4)(7, JugadorHomePage_ng_container_7_Template, 52, 2, "ng-container", 4)(8, JugadorHomePage_ng_container_8_Template, 65, 5, "ng-container", 4)(9, JugadorHomePage_div_9_Template, 30, 7, "div", 5);
    \u0275\u0275elementStart(10, "ion-fab", 6)(11, "ion-fab-button", 7);
    \u0275\u0275listener("click", function JugadorHomePage_Template_ion_fab_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openSettings());
    });
    \u0275\u0275element(12, "ion-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-modal", 9);
    \u0275\u0275listener("didDismiss", function JugadorHomePage_Template_ion_modal_didDismiss_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cerrarModalPacks());
    });
    \u0275\u0275template(14, JugadorHomePage_ng_template_14_Template, 9, 2, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-modal", 10);
    \u0275\u0275listener("didDismiss", function JugadorHomePage_Template_ion_modal_didDismiss_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeNotificaciones());
    });
    \u0275\u0275template(16, JugadorHomePage_ng_template_16_Template, 11, 3, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-modal", 11);
    \u0275\u0275listener("didDismiss", function JugadorHomePage_Template_ion_modal_didDismiss_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cerrarModalProgreso());
    });
    \u0275\u0275template(18, JugadorHomePage_ng_template_18_Template, 63, 10, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, JugadorHomePage_div_19_Template, 14, 5, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx.isDev);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isDev);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isDev);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isDev);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.aiResult);
    \u0275\u0275advance(4);
    \u0275\u0275property("isOpen", ctx.modalPacksOpen)("breakpoints", \u0275\u0275pureFunction0(13, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.isNotificacionesOpen)("breakpoints", \u0275\u0275pureFunction0(14, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.isProgresoModalOpen)("breakpoints", \u0275\u0275pureFunction0(15, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showAchievementToast);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonRefresher,
  IonRefresherContent,
  IonModal,
  IonBadge,
  DatePipe
], styles: ['@charset "UTF-8";\n\n\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n}\n.header-content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 60px;\n  left: 30px;\n  right: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-left-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  flex: 1;\n  overflow: hidden;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .welcome-pre[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .notifications-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .notifications-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .notifications-btn[_ngcontent-%COMP%]   .notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  font-size: 10px;\n  font-weight: 800;\n  border-radius: 50%;\n  padding: 4px 6px;\n  min-width: 20px;\n  line-height: 1;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 0 20px 100px;\n  background: white;\n  border-radius: 40px 40px 0 0;\n  position: relative;\n  z-index: 10;\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%] {\n  background: #f8f8fa;\n  border-radius: 18px;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  transition: all 0.2s ease;\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%]   .row-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%]   .row-main[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%]   .row-main[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #000;\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%]   .row-main[_ngcontent-%COMP%]   .row-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%]   .row-main[_ngcontent-%COMP%]   .row-text[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 950;\n  color: #8e8e93;\n  letter-spacing: 1px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%]   .row-main[_ngcontent-%COMP%]   .row-text[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #000;\n  margin-top: 1px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%]   .row-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #ddd;\n}\n.dashboard-container[_ngcontent-%COMP%]   .next-session-row[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  background: #f2f2f7;\n}\n.notifications-home-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-top: 25px;\n}\n.notification-card-home[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  padding: 20px;\n  border-radius: 20px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n}\n.notification-card-home[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.notification-card-home[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notification-card-home[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 800;\n  color: #000;\n}\n.notification-card-home[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #64748b;\n}\n.notification-card-home[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n.notification-card-home[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  height: 30px;\n}\n.notification-card-home.warning[_ngcontent-%COMP%] {\n  background: #fff9e6;\n  border-color: #ffeeba;\n}\n.notification-card-home.warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: #fdf5d3;\n  color: #856404;\n}\n.notification-card-home.warning[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #856404;\n}\n.notification-card-home.warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #856404;\n  opacity: 0.8;\n}\n.notification-card-home.success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #dcfce7;\n}\n.notification-card-home.success[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.notification-card-home.success[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.notification-card-home.success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #166534;\n  opacity: 0.8;\n}\n.hero-actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 25px;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%] {\n  background: #ccff00;\n  background:\n    linear-gradient(\n      135deg,\n      #ccff00 0%,\n      #a8e600 100%);\n  padding: 16px 12px;\n  border-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 145px;\n  box-shadow: 0 12px 30px rgba(204, 255, 0, 0.25);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n  box-shadow: 0 5px 15px rgba(204, 255, 0, 0.15);\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-icon-wrap.trophy[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #000;\n  font-weight: 950;\n  font-size: 13.5px;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  line-height: 1.15;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 9.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  line-height: 1.2;\n  white-space: normal;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   ion-icon[name=arrow-forward][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 12px;\n  color: #000;\n  font-size: 18px;\n  opacity: 0.4;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%] {\n  background: #111;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%]   .hero-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  font-size: 22px;\n  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05);\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%]   ion-icon[name=arrow-forward][_ngcontent-%COMP%] {\n  color: #ccff00;\n  opacity: 1;\n}\n.actions-grid-v2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 15px 5px;\n  border-radius: 24px;\n  background: #fff;\n  border: 1px solid #f1f1f7;\n  transition: all 0.2s;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]:active {\n  background: #f8f8fa;\n  transform: scale(0.95);\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #f8f8fa;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: #1e293b;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metrics-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  padding: 24px 20px;\n  background: #ffffff;\n  border-radius: 28px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  margin-bottom: 25px;\n  margin-top: 10px;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 6px 4px;\n  border-radius: 20px;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item.clickable-metric[_ngcontent-%COMP%] {\n  background: #fdfdfd;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  position: relative;\n  overflow: hidden;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item.clickable-metric[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: #ccff00;\n  opacity: 0.8;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item.clickable-metric[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n  background: #f8f8fa;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item.clickable-metric[_ngcontent-%COMP%]   .metric-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 2px;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item.clickable-metric[_ngcontent-%COMP%]   .metric-top[_ngcontent-%COMP%]   .btn-chevron[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ccff00;\n  background: #000;\n  border-radius: 50%;\n  padding: 2px;\n  margin-top: 2px;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  color: #000;\n  line-height: 1;\n  margin-bottom: 4px;\n  letter-spacing: -1px;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 950;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 1.2;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #f2f2f7;\n  margin: 15px 5px;\n}\n.daily-tip-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #111 0%,\n      #222 100%);\n  border-radius: 28px;\n  padding: 22px;\n  margin-bottom: 30px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.daily-tip-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50px;\n  right: -50px;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(204, 255, 0, 0.2) 0%,\n      transparent 70%);\n  filter: blur(15px);\n}\n.daily-tip-card[_ngcontent-%COMP%]   .tip-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  background: rgba(204, 255, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.daily-tip-card[_ngcontent-%COMP%]   .tip-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ccff00;\n  animation: _ngcontent-%COMP%_pulse-ai 2s infinite;\n}\n.daily-tip-card[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.daily-tip-card[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 5px 0;\n  color: #ccff00;\n  font-size: 13px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.daily-tip-card[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 13.5px;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.modules-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.module-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 32px;\n  overflow: hidden;\n  padding: 0;\n  margin-bottom: 0;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.module-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.module-card[_ngcontent-%COMP%]   .module-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  border-radius: 0 !important;\n}\n.module-card[_ngcontent-%COMP%]   .module-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  gap: 12px;\n}\n.module-card[_ngcontent-%COMP%]   .module-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n  color: #000;\n  text-transform: uppercase;\n}\n.module-card[_ngcontent-%COMP%]   .module-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 14px;\n  color: #8e8e93;\n  font-weight: 600;\n  text-transform: none;\n}\n.module-card[_ngcontent-%COMP%]   .module-arrow[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #c7c7cc;\n}\nion-modal.bottom-sheet-modal[_ngcontent-%COMP%] {\n  --border-radius: 45px 45px 0 0;\n  --box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.3);\n  --backdrop-opacity: 0.7;\n}\nion-modal.bottom-sheet-modal[_ngcontent-%COMP%]::part(content) {\n  background: #ffffff;\n}\nion-modal.bottom-sheet-modal[_ngcontent-%COMP%]::part(backdrop) {\n  background: #000;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.modal-desglose-container[_ngcontent-%COMP%] {\n  padding: 15px 25px 50px;\n}\n.modal-desglose-container[_ngcontent-%COMP%]   .modal-desglose-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 35px;\n}\n.modal-desglose-container[_ngcontent-%COMP%]   .modal-desglose-header[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 5px;\n  background: #e5e5ea;\n  border-radius: 10px;\n  margin: 0 auto 25px;\n}\n.modal-desglose-container[_ngcontent-%COMP%]   .modal-desglose-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: -1.5px;\n  margin: 0;\n}\n.modal-desglose-container[_ngcontent-%COMP%]   .modal-desglose-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #8e8e93;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 30px;\n  padding: 25px;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-coach-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-coach-row[_ngcontent-%COMP%]   .pack-avatar[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  border-radius: 20px;\n  background: #000;\n  overflow: hidden;\n  border: 2px solid #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-coach-row[_ngcontent-%COMP%]   .pack-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-coach-row[_ngcontent-%COMP%]   .pack-avatar[_ngcontent-%COMP%]   .avatar-fallback[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-coach-row[_ngcontent-%COMP%]   .pack-text[_ngcontent-%COMP%]   .coach-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -0.3px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-coach-row[_ngcontent-%COMP%]   .pack-text[_ngcontent-%COMP%]   .pack-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-bar-group[_ngcontent-%COMP%]   .pack-bar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 8px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-bar-group[_ngcontent-%COMP%]   .pack-bar-header[_ngcontent-%COMP%]   .bar-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: #8e8e93;\n  text-transform: uppercase;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-bar-group[_ngcontent-%COMP%]   .pack-bar-header[_ngcontent-%COMP%]   .pack-count[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 950;\n  color: #000;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-bar-group[_ngcontent-%COMP%]   .pack-bar-header[_ngcontent-%COMP%]   .pack-count[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #aeaeb2;\n  font-weight: 700;\n  margin-left: 2px;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-bar-group[_ngcontent-%COMP%]   .pack-bar[_ngcontent-%COMP%] {\n  height: 12px;\n  background: #f2f2f7;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-bar-group[_ngcontent-%COMP%]   .pack-bar[_ngcontent-%COMP%]   .pack-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ccff00,\n      #a8e600);\n  border-radius: 6px;\n  position: relative;\n}\n.packs-breakdown.modal-view[_ngcontent-%COMP%]   .pack-styled-card[_ngcontent-%COMP%]   .pack-bar-group[_ngcontent-%COMP%]   .pack-bar[_ngcontent-%COMP%]   .pack-bar-fill[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.5),\n      transparent);\n  animation: _ngcontent-%COMP%_bar-shine 2.5s infinite linear;\n}\n.empty-state-modal[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 0;\n}\n.empty-state-modal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #d1d1d6;\n  margin-bottom: 15px;\n}\n.empty-state-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #aeaeb2;\n}\n@keyframes _ngcontent-%COMP%_pulse-ai {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bar-shine {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(40px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: #000;\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ccff00;\n}\nion-fab[vertical=bottom][_ngcontent-%COMP%] {\n  bottom: 12px;\n  right: 12px;\n}\n.nike-card[_ngcontent-%COMP%] {\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.animate-pop[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_popIn 0.5s cubic-bezier(0.26, 1.36, 0.74, 1.1) both;\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  0% {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.delay-1[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.delay-2[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n.delay-3[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n.delay-4[_ngcontent-%COMP%] {\n  animation-delay: 0.4s;\n}\nion-modal.custom-bottom-sheet[_ngcontent-%COMP%] {\n  --border-radius: 36px 36px 0 0;\n  --box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);\n}\n.notifications-content[_ngcontent-%COMP%] {\n  --background: #fdfdfd;\n  --padding-bottom: 30px;\n}\n.notifications-content[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 6px;\n  background: #e2e2e2;\n  border-radius: 10px;\n  margin: 12px auto 25px;\n}\n.notifications-content[_ngcontent-%COMP%]   .modal-header-notit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 0 20px;\n}\n.notifications-content[_ngcontent-%COMP%]   .modal-header-notit[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.notifications-content[_ngcontent-%COMP%]   .modal-header-notit[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  height: 40px;\n  width: 40px;\n  --border-radius: 50%;\n  background: #f2f2f5;\n  color: #555;\n}\n.notifications-content[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 15px 20px;\n}\n.notifications-content[_ngcontent-%COMP%]   .action-btn-notit[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 14px;\n  font-size: 13px;\n  font-weight: 800;\n  height: 40px;\n  margin-top: 10px;\n}\n.notifications-content[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 20px;\n  color: #999;\n}\n.notifications-content[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 54px;\n  opacity: 0.4;\n  margin-bottom: 20px;\n}\n.notifications-content[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.logros-widget[_ngcontent-%COMP%] {\n  background: #f8f8fa;\n  border-radius: 24px;\n  padding: 14px 16px;\n  margin-bottom: 15px;\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.logros-widget[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-header[_ngcontent-%COMP%]   .logros-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-header[_ngcontent-%COMP%]   .logros-title-group[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #000;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-header[_ngcontent-%COMP%]   .logros-title-group[_ngcontent-%COMP%]   .logros-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 950;\n  letter-spacing: 1.5px;\n  color: #000;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-header[_ngcontent-%COMP%]   .logros-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-header[_ngcontent-%COMP%]   .logros-meta[_ngcontent-%COMP%]   .logros-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #8e8e93;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-header[_ngcontent-%COMP%]   .logros-meta[_ngcontent-%COMP%]   .logros-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #c7c7cc;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding: 4px 0 12px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.logros-widget[_ngcontent-%COMP%]   .logro-badge[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.logros-widget[_ngcontent-%COMP%]   .logro-badge[_ngcontent-%COMP%]   .logro-icono[_ngcontent-%COMP%] {\n  font-size: 18px;\n  z-index: 1;\n}\n.logros-widget[_ngcontent-%COMP%]   .logro-badge[_ngcontent-%COMP%]   .logro-lock[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  font-size: 10px;\n  z-index: 2;\n}\n.logros-widget[_ngcontent-%COMP%]   .logro-badge.unlocked[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  border: 2px solid var(--badge-color, #CCFF00);\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05), inset 0 0 8px rgba(255, 255, 255, 0.3);\n  animation: _ngcontent-%COMP%_badgeGlow 3s ease-in-out infinite;\n}\n.logros-widget[_ngcontent-%COMP%]   .logro-badge.unlocked[_ngcontent-%COMP%]   .logro-icono[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_badgePulse 3s ease-in-out infinite;\n}\n.logros-widget[_ngcontent-%COMP%]   .logro-badge.locked[_ngcontent-%COMP%] {\n  background: #ededed;\n  border: 2px solid #e0e0e0;\n  opacity: 0.5;\n}\n.logros-widget[_ngcontent-%COMP%]   .logro-badge.locked[_ngcontent-%COMP%]   .logro-icono[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n  opacity: 0.4;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #e5e5ea;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.logros-widget[_ngcontent-%COMP%]   .logros-progress-bar[_ngcontent-%COMP%]   .logros-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ccff00,\n      #a8e600);\n  border-radius: 2px;\n  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_badgeGlow {\n  0%, 100% {\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);\n  }\n  50% {\n    box-shadow: 0 0 16px var(--badge-color, rgba(204, 255, 0, 0.4));\n  }\n}\n@keyframes _ngcontent-%COMP%_badgePulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.08);\n  }\n}\n.achievement-toast-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  padding: 60px 20px 0;\n  pointer-events: all;\n  animation: _ngcontent-%COMP%_toastSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.achievement-toast[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #111 0%,\n      #1a1a2e 100%);\n  border-radius: 24px;\n  padding: 20px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px var(--toast-color, rgba(204, 255, 0, 0.2));\n  position: relative;\n  overflow: hidden;\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  right: -30px;\n  width: 100px;\n  height: 100px;\n  background:\n    radial-gradient(\n      circle,\n      var(--toast-color, rgba(204, 255, 0, 0.3)) 0%,\n      transparent 70%);\n  filter: blur(20px);\n  animation: _ngcontent-%COMP%_glowPulse 2s ease-in-out infinite;\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n  z-index: 1;\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]   .toast-badge-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 2px solid var(--toast-color, #CCFF00);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_iconBounce 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;\n  animation-delay: 0.3s;\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]   .toast-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]   .toast-text[_ngcontent-%COMP%]   .toast-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 950;\n  letter-spacing: 2px;\n  color: var(--toast-color, #CCFF00);\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]   .toast-text[_ngcontent-%COMP%]   .toast-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -0.3px;\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]   .toast-text[_ngcontent-%COMP%]   .toast-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-progress[_ngcontent-%COMP%] {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  margin-top: 16px;\n  overflow: hidden;\n  position: relative;\n}\n.achievement-toast[_ngcontent-%COMP%]   .toast-progress[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: var(--toast-color, #CCFF00);\n  animation: _ngcontent-%COMP%_progressShrink 4.5s linear both;\n}\n@keyframes _ngcontent-%COMP%_toastSlideDown {\n  from {\n    transform: translateY(-120%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_glowPulse {\n  0%, 100% {\n    opacity: 0.6;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.3);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_progressShrink {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n.header-v2[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 80px 20px 100px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  z-index: 1;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  overflow: hidden;\n}\n.header-v2[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.4) 100%);\n  z-index: 0;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%], \n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 11px;\n  color: #CCFF00;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   .h-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   .h-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(20px, 5.5vw, 26px);\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  color: #fff;\n  line-height: 1.15;\n  white-space: normal;\n  word-break: break-word;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   .h-title-row[_ngcontent-%COMP%]   .h-wave[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-notif[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-notif[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #fff;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-notif[_ngcontent-%COMP%]   .h-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  width: 8px;\n  height: 8px;\n  background: #ff3b30;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: #000;\n  border: 2px solid #CCFF00;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.dashboard-v2[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  padding: 20px 16px 120px;\n  background: #f4f7fa;\n  min-height: 100%;\n  position: relative;\n  z-index: 10;\n  border-radius: 40px 40px 0 0;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  padding: 22px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  border: 1px solid #f1f5f9;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-card.delay-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_up 0.5s ease both 0.1s;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-card.delay-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_up 0.5s ease both 0.2s;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-card-header-main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-card-header-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: 1px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-card-header-main[_ngcontent-%COMP%]   .v2-badge-btn[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 800;\n  color: #2563eb;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-card-header-main[_ngcontent-%COMP%]   .v2-pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #22c55e;\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .next-class-v2-premium[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 16px 20px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);\n}\n.dashboard-v2[_ngcontent-%COMP%]   .next-class-v2-premium[_ngcontent-%COMP%]   .nc-icon-circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: #eff6ff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .next-class-v2-premium[_ngcontent-%COMP%]   .nc-icon-circle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 20px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .next-class-v2-premium[_ngcontent-%COMP%]   .nc-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .next-class-v2-premium[_ngcontent-%COMP%]   .nc-info[_ngcontent-%COMP%]   .nc-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: #64748b;\n  letter-spacing: 0.5px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .next-class-v2-premium[_ngcontent-%COMP%]   .nc-info[_ngcontent-%COMP%]   .nc-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #000;\n  text-transform: capitalize;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .next-class-v2-premium[_ngcontent-%COMP%]   .nc-arrow[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 18px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .next-class-v2-premium[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  background: #f8fafc;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 25px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-metrics-grid[_ngcontent-%COMP%]   .v2-metric[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 5px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-metrics-grid[_ngcontent-%COMP%]   .v2-metric[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 900;\n  color: #94a3b8;\n  letter-spacing: 0.5px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-metrics-grid[_ngcontent-%COMP%]   .v2-metric[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -1px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-metrics-grid[_ngcontent-%COMP%]   .v2-metric[_ngcontent-%COMP%]:active {\n  background: #f8fafc;\n  border-radius: 12px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #64748b;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-header[_ngcontent-%COMP%]   .v2-pct[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 950;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-bar[_ngcontent-%COMP%]   .v2-l-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 4px;\n  transition: width 1s ease;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-badges[_ngcontent-%COMP%]   .v2-mini-badge[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--bc);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  border: 2px solid #fff;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-badges[_ngcontent-%COMP%]   .v2-mini-badge.locked[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  filter: grayscale(1);\n}\n.dashboard-v2[_ngcontent-%COMP%]   .v2-progress-section[_ngcontent-%COMP%]   .v2-l-badges[_ngcontent-%COMP%]   .v2-mini-badge-more[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 950;\n  color: #94a3b8;\n  align-self: center;\n  margin-left: 5px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .daily-tip-v2-premium[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  position: relative;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .daily-tip-v2-premium[_ngcontent-%COMP%]   .t-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: #fffbeb;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .daily-tip-v2-premium[_ngcontent-%COMP%]   .t-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 22px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .daily-tip-v2-premium[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .daily-tip-v2-premium[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   .t-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 950;\n  color: #f59e0b;\n  letter-spacing: 1px;\n  margin-bottom: 4px;\n  display: block;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .daily-tip-v2-premium[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 900;\n  color: #000;\n  line-height: 1.2;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .daily-tip-v2-premium[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.5;\n  font-weight: 600;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .daily-tip-v2-premium[_ngcontent-%COMP%]   .t-arrow[_ngcontent-%COMP%] {\n  align-self: center;\n  color: #cbd5e1;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 25px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px;\n  border-radius: 20px;\n  transition: all 0.2s;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero[_ngcontent-%COMP%]   .ch-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero[_ngcontent-%COMP%]   .ch-left[_ngcontent-%COMP%]   .ch-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  background: #fff;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero[_ngcontent-%COMP%]   .ch-left[_ngcontent-%COMP%]   .ch-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 950;\n  color: #fff;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero[_ngcontent-%COMP%]   .ch-left[_ngcontent-%COMP%]   .ch-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero.booking[_ngcontent-%COMP%] {\n  background: #2563eb;\n  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero.tournament[_ngcontent-%COMP%] {\n  background: #0f172a;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.2);\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .command-grid[_ngcontent-%COMP%]   .command-hero[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  opacity: 0.9;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .sec-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 15px 5px;\n  border-radius: 18px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .sec-btn[_ngcontent-%COMP%]   .s-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .sec-btn[_ngcontent-%COMP%]   .s-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .sec-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: #1e293b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n.dashboard-v2[_ngcontent-%COMP%]   .command-center-card[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .sec-btn[_ngcontent-%COMP%]:active {\n  background: #f1f5f9;\n  transform: scale(0.95);\n}\n@keyframes _ngcontent-%COMP%_up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);\n  }\n}\n.v2-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  color: #000;\n  margin: 0;\n}\n.v2-title.section-mt[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 15px;\n  padding-left: 5px;\n}\n.next-class-v2[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  border-left: 5px solid #CCFF00;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.next-class-v2[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-icon-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(204, 255, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-icon-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #99eb00;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%]   .nc-tag[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 950;\n  color: #8e8e93;\n  letter-spacing: 1.5px;\n  margin-bottom: 4px;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%]   .nc-date[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 900;\n  color: #000;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%]   .nc-coach[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8e8e93;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%]   .nc-coach[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #c7c7cc;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #c7c7cc;\n  padding-left: 5px;\n}\n.progress-v2[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  margin-bottom: 24px;\n  position: relative;\n}\n.progress-v2[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(204, 255, 0, 0.03) 0%,\n      transparent 100%);\n  border-radius: 24px 24px 0 0;\n  pointer-events: none;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   .p-pts[_ngcontent-%COMP%] {\n  background: #CCFF00;\n  color: #000;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 900;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f8f8fa;\n  border-radius: 16px;\n  padding: 12px 5px;\n  text-align: center;\n  transition: all 0.2s ease;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item.highlight[_ngcontent-%COMP%] {\n  background: #000;\n  color: #CCFF00;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item.highlight[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  color: #CCFF00;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item.highlight[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 950;\n  line-height: 1;\n  margin-bottom: 6px;\n  color: #000;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  line-height: 1.2;\n  color: #8e8e93;\n  text-transform: uppercase;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f2f2f7;\n  margin: 0 -20px 20px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0;\n  padding: 0;\n  transition: transform 0.2s ease;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  margin-bottom: 8px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #e5e5ea;\n  border-radius: 2px;\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-bar[_ngcontent-%COMP%]   .p-l-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #CCFF00,\n      #99eb00);\n  border-radius: 2px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-badges[_ngcontent-%COMP%]   .mini-badge[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.03);\n  border: 1px solid var(--bc);\n  font-size: 14px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-badges[_ngcontent-%COMP%]   .mini-badge.locked[_ngcontent-%COMP%] {\n  background: #ededed;\n  border-color: #e0e0e0;\n  opacity: 0.5;\n  filter: grayscale(100%);\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-badges[_ngcontent-%COMP%]   .mini-badge-more[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: #e5e5ea;\n  color: #8e8e93;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 800;\n}\n.actions-v2-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  margin-bottom: 24px;\n  position: relative;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .v2-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .v2-card-header[_ngcontent-%COMP%]   .v2-subtitle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin: 0;\n  opacity: 0.8;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .v2-card-header[_ngcontent-%COMP%]   .v2-status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #CCFF00;\n  border-radius: 50%;\n  box-shadow: 0 0 10px #CCFF00;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .v2-card-header[_ngcontent-%COMP%]   .v2-status-dot.pulse[_ngcontent-%COMP%] {\n  animation: dot-pulse 2s infinite;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .hero-actions-grid[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.actions-grid-v2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8f8fa;\n  border-radius: 16px;\n  padding: 12px 14px;\n  width: 100%;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n  background: rgba(0, 0, 0, 0.05);\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  background: rgba(204, 255, 0, 0.12);\n  flex-shrink: 0;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #99eb00 !important;\n  --color: #99eb00 !important;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 850;\n  color: #000;\n  letter-spacing: -0.2px;\n  text-align: left;\n}\n.daily-tip-v2[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  background: white;\n  border-radius: 24px;\n  padding: 24px;\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: #CCFF00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 5px 15px rgba(204, 255, 0, 0.2);\n  position: relative;\n  z-index: 5;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #000 !important;\n  --color: #000 !important;\n  position: relative;\n  display: block;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   .t-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 950;\n  color: #99eb00;\n  letter-spacing: 1.5px;\n  margin-bottom: 4px;\n  display: block;\n  opacity: 1;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 13px;\n  font-weight: 800;\n  color: #000;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #8e8e93;\n  line-height: 1.35;\n  font-weight: 500;\n}\n.p-nivel-btn-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n}\n.p-nivel-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background: #000;\n  color: #CCFF00;\n  border: none;\n  padding: 14px 20px;\n  border-radius: 16px;\n  font-weight: 850;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n.p-nivel-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  opacity: 0.9;\n}\n.p-nivel-btn[_ngcontent-%COMP%]   .btn-content-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.p-nivel-btn[_ngcontent-%COMP%]   .btn-content-left[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #CCFF00;\n  --color: #CCFF00;\n}\n.p-nivel-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #CCFF00;\n  --color: #CCFF00;\n}\n.progreso-trigger-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n}\n.progreso-trigger-container[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  background: #f8f8fa;\n}\n.progreso-trigger-container[_ngcontent-%COMP%]   .progreso-trigger-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  gap: 16px;\n}\n.progreso-trigger-container[_ngcontent-%COMP%]   .progreso-trigger-content[_ngcontent-%COMP%]   .pt-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n  min-width: 0;\n}\n.progreso-trigger-container[_ngcontent-%COMP%]   .progreso-trigger-content[_ngcontent-%COMP%]   .pt-left[_ngcontent-%COMP%]   .pt-icon-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.progreso-trigger-container[_ngcontent-%COMP%]   .progreso-trigger-content[_ngcontent-%COMP%]   .pt-left[_ngcontent-%COMP%]   .pt-icon-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000;\n}\n.progreso-trigger-container[_ngcontent-%COMP%]   .progreso-trigger-content[_ngcontent-%COMP%]   .pt-left[_ngcontent-%COMP%]   .pt-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 850;\n  color: #000;\n  letter-spacing: -0.2px;\n}\n.progreso-trigger-container[_ngcontent-%COMP%]   .progreso-trigger-content[_ngcontent-%COMP%]   .pt-left[_ngcontent-%COMP%]   .pt-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: #8e8e93;\n}\n.progreso-trigger-container[_ngcontent-%COMP%]   .progreso-trigger-content[_ngcontent-%COMP%]   .pt-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #c7c7cc;\n}\n.progreso-modal-content[_ngcontent-%COMP%] {\n  --background: #f4f7fa;\n  background: #f4f7fa;\n}\n.progreso-modal-content[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 4px;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  margin: 12px auto 0;\n}\n.pm-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 20px 16px;\n  background: transparent;\n}\n.pm-header[_ngcontent-%COMP%]   .pm-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pm-header[_ngcontent-%COMP%]   .pm-title-group[_ngcontent-%COMP%]   .pm-tag[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 950;\n  color: #99eb00;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.pm-header[_ngcontent-%COMP%]   .pm-title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -0.5px;\n}\n.pm-header[_ngcontent-%COMP%]   .pm-close-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.05);\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.pm-header[_ngcontent-%COMP%]   .pm-close-btn[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.1);\n}\n.pm-header[_ngcontent-%COMP%]   .pm-close-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000;\n}\n.pm-body[_ngcontent-%COMP%] {\n  padding: 0 16px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.pm-level-hero[_ngcontent-%COMP%] {\n  background: #000;\n  border-radius: 24px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.pm-level-hero[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.pm-level-hero[_ngcontent-%COMP%]   .lh-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.pm-level-hero[_ngcontent-%COMP%]   .lh-left[_ngcontent-%COMP%]   .lh-icon-badge[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n.pm-level-hero[_ngcontent-%COMP%]   .lh-left[_ngcontent-%COMP%]   .lh-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pm-level-hero[_ngcontent-%COMP%]   .lh-left[_ngcontent-%COMP%]   .lh-text[_ngcontent-%COMP%]   .lh-sub[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 850;\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.pm-level-hero[_ngcontent-%COMP%]   .lh-left[_ngcontent-%COMP%]   .lh-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 18px;\n  font-weight: 900;\n  color: #CCFF00;\n}\n.pm-level-hero[_ngcontent-%COMP%]   .lh-action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 6px 12px;\n  border-radius: 12px;\n}\n.pm-level-hero[_ngcontent-%COMP%]   .lh-action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  color: #fff;\n}\n.pm-level-hero[_ngcontent-%COMP%]   .lh-action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #fff;\n}\n.pm-metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: 12px;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.pending-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ccff00 0%,\n      #a8e600 100%);\n  box-shadow: 0 10px 25px rgba(204, 255, 0, 0.25);\n  cursor: pointer;\n  min-height: 110px;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.pending-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.pending-card[_ngcontent-%COMP%]   .mc-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.pending-card[_ngcontent-%COMP%]   .mc-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #000;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.pending-card[_ngcontent-%COMP%]   .mc-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 950;\n  color: #000;\n  line-height: 1;\n  margin-top: 10px;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.pending-card[_ngcontent-%COMP%]   .mc-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 4px;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.pending-card[_ngcontent-%COMP%]   .mc-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.3);\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.mini-card[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 12px 10px;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.mini-card[_ngcontent-%COMP%]   .mc-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metric-card.mini-card[_ngcontent-%COMP%]   .mc-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 950;\n  color: #000;\n  line-height: 1;\n}\n.pm-metrics-grid[_ngcontent-%COMP%]   .pm-metrics-subgrid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.pm-section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.pm-section-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 850;\n  color: #000;\n  letter-spacing: -0.1px;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-section-header[_ngcontent-%COMP%]   .pm-section-pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 950;\n  color: #99eb00;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-progress-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-progress-container[_ngcontent-%COMP%]   .pm-progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f0f0f4;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-progress-container[_ngcontent-%COMP%]   .pm-progress-bar[_ngcontent-%COMP%]   .pm-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #CCFF00 0%,\n      #99eb00 100%);\n  border-radius: 3px;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-badges-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-badges-row[_ngcontent-%COMP%]   .pm-mini-badge[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.03);\n  border: 1px solid var(--badge-color);\n  transition: all 0.2s ease;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-badges-row[_ngcontent-%COMP%]   .pm-mini-badge.locked[_ngcontent-%COMP%] {\n  background: #f0f0f4;\n  border-color: #e5e5ea;\n  opacity: 0.4;\n  filter: grayscale(100%);\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-badges-row[_ngcontent-%COMP%]   .pm-mini-badge[_ngcontent-%COMP%]   .pm-badge-emoji[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pm-section-card[_ngcontent-%COMP%]   .pm-badges-row[_ngcontent-%COMP%]   .pm-mini-badge-more[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background: #e5e5ea;\n  color: #8e8e93;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 900;\n}\n.pm-action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background: #000;\n  border: none;\n  padding: 16px 20px;\n  border-radius: 18px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.pm-action-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  opacity: 0.9;\n}\n.pm-action-button[_ngcontent-%COMP%]   .ab-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.pm-action-button[_ngcontent-%COMP%]   .ab-content[_ngcontent-%COMP%]   .ab-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #CCFF00;\n}\n.pm-action-button[_ngcontent-%COMP%]   .ab-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 850;\n  color: #CCFF00;\n  letter-spacing: -0.2px;\n}\n.pm-action-button[_ngcontent-%COMP%]   .ab-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #CCFF00;\n}\n/*# sourceMappingURL=jugador-home.page.css.map */'] });
var JugadorHomePage = _JugadorHomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JugadorHomePage, [{
    type: Component,
    args: [{ selector: "app-jugador-home", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonFab,
      IonFabButton,
      IonIcon,
      IonButton,
      IonRefresher,
      IonRefresherContent,
      IonModal,
      IonBadge
    ], template: `<ion-content [fullscreen]="true">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
  <!-- Hidden File Input for Video -->
  <input type="file" #videoInput (change)="onVideoSelected($event)" accept="video/*" style="display: none;">

  <!-- Hero Header -->
  <ng-container *ngIf="!isDev">
    <div class="header-nike">
      <div class="header-overlay"></div>
      <div class="header-content-wrapper">
        <div class="header-left-info">
          <div class="avatar-circle">
            <img [src]="fotoPerfil || 'assets/avatar.png'" (error)="onImgError($event)" alt="Avatar" />
          </div>
          <div class="header-text">
            <p class="welcome-pre">CONTINUAR ENTRENANDO,</p>
            <h1 class="header-title">{{ jugadorNombre }}</h1>
          </div>
        </div>

        <!-- Notifications Button -->
        <div class="notifications-btn" (click)="openNotificaciones()" *ngIf="getNotificacionesCount() > 0">
          <ion-icon name="notifications-outline"></ion-icon>
          <ion-badge color="danger" class="notif-badge">{{ getNotificacionesCount() }}</ion-badge>
        </div>
      </div>
    </div>
  </ng-container>

  <!-- V2 Header (Professional / Minimalist) -->
  <ng-container *ngIf="isDev">
    <div class="header-v2 animate-fade">
      <div class="h-text">
        <p>Hola, de vuelta a la cancha</p>
        <div class="h-title-row">
          <h1>{{ jugadorNombre }}</h1>
          <span class="h-wave">\u{1F44B}</span>
        </div>
      </div>
      
      <div class="h-actions">
        <!-- Notificaciones Minimalista -->
        <div class="h-notif" (click)="openNotificaciones()">
          <ion-icon name="notifications-outline"></ion-icon>
          <div class="h-dot" *ngIf="getNotificacionesCount() > 0"></div>
        </div>
        <!-- Avatar -->
        <div class="h-avatar">
          <img [src]="fotoPerfil || 'assets/avatar.png'" (error)="onImgError($event)" alt="Avatar" />
        </div>
      </div>
    </div>
  </ng-container>

  <ng-container *ngIf="isDev">
    <div class="dashboard-v2 animate-up">
      
      <!-- PR\xD3XIMA CLASE V2 -->
      <div class="next-class-v2" *ngIf="proximaClase" (click)="goToMisClases()">
        <div class="nc-icon-badge">
          <ion-icon name="calendar-outline"></ion-icon>
        </div>
        <div class="nc-content">
          <div class="nc-tag">SIGUIENTE SESI\xD3N</div>
          <div class="nc-date">{{ proximaClase.fecha | date:'d MMM' }} \u2022 {{ proximaClase.hora_inicio.slice(0,5) }} HRS</div>
          <div class="nc-coach"><ion-icon name="person-outline"></ion-icon> {{ proximaClase.entrenador || 'Tu Entrenamiento' }}</div>
        </div>
        <ion-icon name="chevron-forward" class="nc-arrow"></ion-icon>
      </div>

      <!-- BOT\xD3N VER PROGRESO Y ENTRENAMIENTO -->
      <div class="progreso-trigger-container" (click)="abrirModalProgreso()">
        <div class="progreso-trigger-content">
          <div class="pt-left">
            <div class="pt-icon-badge">
              <ion-icon name="bar-chart-outline"></ion-icon>
            </div>
            <div class="pt-text">
              <h3>Revisar tu progreso y entrenamiento</h3>
              <p>Habilidades, nivel y sesiones activas</p>
            </div>
          </div>
          <ion-icon name="chevron-forward" class="pt-arrow"></ion-icon>
        </div>
      </div>

      <!-- 1. DAILY TIP V2 (TIP DEL COACH) -->
      <div class="daily-tip-v2 delay-1" *ngIf="dailyTip">
         <div class="t-icon"><ion-icon name="sparkles-outline"></ion-icon></div>
         <div class="t-content">
            <span class="t-badge">TIP DEL COACH</span>
            <h4>{{ dailyTip.titulo }}</h4>
            <p>{{ dailyTip.mensaje }}</p>
         </div>
      </div>

      <!-- 2. ACCIONES R\xC1PIDAS V2 (ORDEN PREMIUM UX - CENTRO DE MANDO) -->
      <div class="actions-v2-card delay-1">
         <div class="v2-card-header">
            <h4 class="v2-subtitle">Centro de Mando</h4>
            <span class="v2-status-dot pulse"></span>
         </div>
         
         <div class="actions-grid-v2" style="margin-bottom: 25px;">
             <!-- BOT\xD3N SECUNDARIO (AGENDAR CLASE) -->
             <div class="action-btn-v2" (click)="goToAgenda()">
                <div class="a-icon bg-soft"><ion-icon name="calendar-outline"></ion-icon></div>
                <span class="a-label">Agendar Clase</span>
             </div>
             
             <div class="action-btn-v2" (click)="goToMisClases()">
                <div class="a-icon bg-soft"><ion-icon name="time-outline"></ion-icon></div>
                <span class="a-label">Mi Agenda</span>
             </div>
          </div>

          <!-- HERO BUTTONS GRID -->
          <div class="hero-actions-grid">
             <!-- HERO 1: RESERVA -->
             <div class="hero-booking-action animate-pulse" (click)="goToReservarCancha()">
                <div class="hero-btn-content">
                  <div class="hero-icon-wrap">\u{1F3BE}</div>
                  <div class="hero-text-wrap">
                    <h3>Reserva</h3>
                    <p>Clubes y Disponibilidad</p>
                  </div>
                </div>
                <ion-icon name="arrow-forward"></ion-icon>
             </div>
 
             <!-- HERO 2: CAMPEONATOS -->
             <div class="hero-booking-action tournament-hero animate-pop delay-1" (click)="goToCampeonatos()">
                <div class="hero-btn-content">
                  <div class="hero-icon-wrap trophy">\u{1F3C6}</div>
                  <div class="hero-text-wrap">
                    <h3>Campeonatos</h3>
                    <p>Torneos y Americanos</p>
                  </div>
                </div>
                <ion-icon name="arrow-forward"></ion-icon>
             </div>
          </div>
      </div>



    </div>
  </ng-container>

  <!-- Main Content -->
  <ng-container *ngIf="!isDev">
    <div class="dashboard-container">

    <!-- AI Daily Tip -->
    <div class="daily-tip-card animate-up" *ngIf="dailyTip">
      <div class="tip-icon">
        <ion-icon name="sparkles"></ion-icon>
      </div>
      <div class="tip-content">
        <h4>{{ dailyTip.titulo }}</h4>
        <p>{{ dailyTip.mensaje }}</p>
      </div>
    </div>

    <!-- Integrated Metrics Summary -->
    <div class="metrics-dashboard animate-up"
      *ngIf="clasesPagadas > 0 || clasesReservadas > 0 || clasesDisponibles > 0">
      <div class="metric-item highlight animate-pulse clickable-metric" (click)="abrirModalPacks()">
        <div class="metric-top">
          <span class="metric-value">{{ clasesPendientes }}</span>
          <ion-icon name="chevron-down-outline" class="btn-chevron"></ion-icon>
        </div>
        <span class="metric-label">CLASES<br>PENDIENTES</span>
      </div>
      <div class="metric-divider"></div>
      <div class="metric-item">
        <span class="metric-value">{{ clasesDisponibles }}</span>
        <span class="metric-label">Cr\xE9ditos<br>Disponibles</span>
      </div>
      <div class="metric-divider"></div>
      <div class="metric-item">
        <span class="metric-value">{{ clasesReservadas }}</span>
        <span class="metric-label">Pr\xF3ximas<br>Reservas</span>
      </div>
    </div>

    <!-- \u{1F3C5} Achievements Widget -->
    <div class="logros-widget animate-up" *ngIf="logros.length > 0" (click)="goToLogros()">
      <div class="logros-header">
        <div class="logros-title-group">
          <ion-icon name="ribbon-outline"></ion-icon>
          <span class="logros-title">MIS LOGROS</span>
        </div>
        <div class="logros-meta">
          <span class="logros-count">{{ logrosDesbloqueados }}/{{ logrosTotal }}</span>
          <ion-icon name="chevron-forward-outline" class="logros-arrow"></ion-icon>
        </div>
      </div>
      <div class="logros-scroll">
        <div class="logro-badge"
          *ngFor="let logro of logros"
          [class.unlocked]="logro.desbloqueado"
          [class.locked]="!logro.desbloqueado"
          [style.--badge-color]="logro.color_badge">
          <span class="logro-icono">{{ logro.icono }}</span>
          <span class="logro-lock" *ngIf="!logro.desbloqueado">\u{1F512}</span>
        </div>
      </div>
      <div class="logros-progress-bar">
        <div class="logros-progress-fill" [style.width.%]="logrosPorcentaje"></div>
      </div>
    </div>

    <!-- Desglose de Packs por Entrenador (MIGRADO A MODAL ABAJO) -->

    <!-- PR\xD3XIMA CLASE: Minimalista, una sola fila -->
    <div class="next-session-row animate-up delay-1" *ngIf="proximaClase" (click)="goToMisClases()">
      <div class="row-main">
        <div class="row-icon float-element">
          <ion-icon name="calendar-outline"></ion-icon>
        </div>
        <div class="row-text">
          <span class="label">SIGUIENTE SESI\xD3N{{ proximaClase.entrenador ? ' \u2014 ' + proximaClase.entrenador : ''
            }}:</span>
          <span class="value">{{ proximaClase.fecha | date:'d MMM' }} \u2022 {{ proximaClase.hora_inicio.slice(0,5) }}
            HRS</span>
        </div>
      </div>
      <ion-icon name="chevron-forward-outline" class="row-arrow"></ion-icon>
    </div>

    <!-- Modules Grid -->
    <div class="modules-column animate-up" style="animation-delay: 0.1s;">

      <!-- Mis Clases Card (Moved from hidden settings) -->
      <div class="nike-card module-card animate-pop delay-2" (click)="goToMisClases()">
        <img src="/assets/mod-packs.jpg" class="module-img" />
        <div class="module-body">
          <div class="module-text">
            <h3>Mis Clases</h3>
            <p>Consulta tus reservas y asistencias</p>
          </div>
          <ion-icon name="chevron-forward-outline" class="module-arrow"></ion-icon>
        </div>
      </div>

      <!-- Agenda Card -->
      <div class="nike-card module-card animate-pop delay-3" (click)="goToAgenda()">
        <img src="/assets/reserva-bg.jpg" class="module-img" />
        <div class="module-body">
          <div class="module-text">
            <h3>Agendar Clase</h3>
            <p>Reserva tu pr\xF3ximo entrenamiento</p>
          </div>
          <ion-icon name="chevron-forward-outline" class="module-arrow"></ion-icon>
        </div>
      </div>


      <!-- Reservar Cancha Card -->
      <div class="nike-card module-card animate-pop delay-3" (click)="goToReservarCancha()">
        <img src="/assets/reserva-bg.jpg" class="module-img" />
        <div class="module-body">
          <div class="module-text">
            <h3>Reservar Cancha</h3>
            <p>Busca clubes y reserva tu pista</p>
          </div>
          <ion-icon name="chevron-forward-outline" class="module-arrow"></ion-icon>
        </div>
      </div>

      <!-- Campeonatos Card -->
      <div class="nike-card module-card animate-pop delay-4" (click)="goToCampeonatos()">
        <img src="/assets/mod-packs.jpg" class="module-img" />
        <div class="module-body">
          <div class="module-text">
            <h3>Campeonatos</h3>
            <p>Torneos, Americanos y Partidos</p>
          </div>
          <ion-icon name="chevron-forward-outline" class="module-arrow"></ion-icon>
        </div>
      </div>

      <!-- Skills Card -->
      <div class="nike-card module-card animate-pop delay-5" (click)="misHabilidades()">
        <img src="/assets/mod-alumnos.jpg" class="module-img" />
        <div class="module-body">
          <div class="module-text">
            <h3>Mis Habilidades</h3>
            <p>Seguimiento de tu progreso t\xE9cnico</p>
          </div>
          <ion-icon name="chevron-forward-outline" class="module-arrow"></ion-icon>
        </div>
      </div>

      <!-- Smartwatch & Apple Watch Card -->
      <div class="nike-card module-card animate-pop delay-5" (click)="goToSmartwatch()" style="border: 1px solid rgba(6, 182, 212, 0.4); background: linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%);">
        <div style="font-size: 2.2rem; padding: 12px 14px; display: flex; align-items: center; justify-content: center; background: rgba(6, 182, 212, 0.15); border-radius: 14px; margin: 8px;">
          \u231A
        </div>
        <div class="module-body">
          <div class="module-text">
            <h3 style="color: #22d3ee; display: flex; align-items: center; gap: 6px;">
              Apple Watch & Stats
              <span style="font-size: 0.65rem; background: #06b6d4; color: #0f172a; padding: 2px 6px; border-radius: 4px; font-weight: 900;">PRO</span>
            </h3>
            <p>Marcador en vivo, velocidad y golpes</p>
          </div>
          <ion-icon name="chevron-forward-outline" class="module-arrow" style="color: #22d3ee;"></ion-icon>
        </div>
      </div>

    </div>

    <!-- DEVELOPMENT SOCIAL FEATURES (Only visible in Dev) -->
    <div class="social-dev-section animate-up" *ngIf="isDev" style="animation-delay: 0.2s; margin-top: 40px;">

      <div class="section-badge-dev">CAPACIDADES AI: EXPERIMENTAL</div>

      <!-- Gemini AI Card -->
      <div class="nike-card ai-feature-card" (click)="analizarVideo()">
        <div class="ai-header">
          <div class="gemini-badge">
            <ion-icon name="sparkles-outline"></ion-icon>
            <span>GEMINI PRO</span>
          </div>
          <div class="ai-status">BETA</div>
        </div>
        <div class="ai-body">
          <div class="ai-main-text">
            <h3>AN\xC1LISIS DE VIDEO</h3>
            <p>Sube tu video y recibe correcciones t\xE9cnicas impulsadas por Inteligencia Artificial.</p>
          </div>
          <div class="ai-action">
            <ion-icon name="videocam-outline"></ion-icon>
            <span>ANALIZAR</span>
          </div>
        </div>
        <div class="ai-visual-effect"></div>
      </div>

      <h2 class="nike-title-lg" style="margin: 30px 0 20px 5px; color: var(--nike-black);">Coach Tips & Clips</h2>

      <!-- Video Feed Placeholder -->
      <div class="video-feed-container">
        <div class="video-card-dev">
          <div class="video-placeholder">
            <ion-icon name="play-circle-outline"></ion-icon>
            <div class="video-overlay-text">
              <span class="coach-tag">Coach Mu\xF1oz</span>
              <span class="video-title">Tip: El Remate de Potencia</span>
            </div>
          </div>
          <div class="video-actions-dev">
            <ion-button fill="clear" color="dark"><ion-icon name="heart-outline"></ion-icon></ion-button>
            <ion-button fill="clear" color="dark"><ion-icon name="chatbubble-outline"></ion-icon></ion-button>
            <ion-button fill="solid" class="nike-btn-mini" (click)="goToAgenda()">AGENDAR</ion-button>
          </div>
        </div>
      </div>

      <!-- Challenges Placeholder -->
      <h2 class="nike-title-lg" style="margin: 30px 0 20px 5px; color: var(--nike-black);">Retos de la Semana</h2>
      <div class="nike-card challenge-card-dev">
        <div class="challenge-icon">
          <ion-icon name="trophy-outline"></ion-icon>
        </div>
        <div class="challenge-info">
          <h3>20 BANDEJAS</h3>
          <p>Sube tu video y gana 50 puntos</p>
      <div class="progress-bar-dev">
            <div class="progress-fill-dev"></div>
          </div>
        </div>
        <ion-button fill="outline" color="dark" size="small">UNI\xC9NDOME</ion-button>
      </div>

    </div>
  </div>
  </ng-container>

  <!-- Gemini Analysis Results Modal (Semi-overlay) -->
  <div class="ai-results-overlay" *ngIf="aiResult" [class.show]="aiResult">
    <div class="ai-results-card animate-up">
      <div class="results-header">
        <div class="header-main">
          <ion-icon name="sparkles"></ion-icon>
          <h3>{{ aiResult.title }}</h3>
        </div>
        <ion-button fill="clear" color="light" (click)="aiResult = null">
          <ion-icon name="close"></ion-icon>
        </ion-button>
      </div>

      <div class="results-body">
        <div class="score-section">
          <div class="score-circle">
            <span class="score-val">{{ aiResult.score }}</span>
            <span class="score-pct">%</span>
          </div>
          <p class="score-label">MATCH T\xC9CNICO</p>
        </div>

        <div class="feedback-text">
          <p>{{ aiResult.feedback }}</p>
        </div>

        <div class="metrics-grid">
          <div class="metric-progress" *ngFor="let m of aiResult.metrics">
            <div class="metric-info">
              <span>{{ m.label }}</span>
              <span>{{ m.value }}/10</span>
            </div>
            <div class="progress-bg">
              <div class="progress-fill" [style.width]="(m.value * 10) + '%'"></div>
            </div>
          </div>
        </div>

        <div class="tips-section">
          <h4>TIPS DE MEJORA</h4>
          <ul>
            <li *ngFor="let tip of aiResult.tips">{{ tip }}</li>
          </ul>
        </div>

        <ion-button expand="block" class="nike-btn-black" (click)="aiResult = null">
          ENTENDIDO
        </ion-button>
      </div>
    </div>
  </div>

  <!-- Settings FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab" (click)="openSettings()">
      <ion-icon name="person-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- Bottom Sheet Modal para ver desglose de Packs -->
  <ion-modal [isOpen]="modalPacksOpen" (didDismiss)="cerrarModalPacks()" initialBreakpoint="0.65"
    [breakpoints]="[0, 0.45, 0.65, 0.9]" handleBehavior="cycle" cssClass="bottom-sheet-modal">
    <ng-template>
      <div class="modal-desglose-container">
        <div class="modal-desglose-header">
          <div class="handle"></div>
          <h3>Clases Disponibles</h3>
          <p>Desglose por entrenador</p>
        </div>

        <div class="packs-breakdown modal-view" *ngIf="packsDetalle.length > 0">
          <div class="pack-styled-card" *ngFor="let pack of packsDetalle">
            <div class="pack-coach-row">
              <div class="pack-avatar">
                <img *ngIf="pack.entrenador_foto"
                  [src]="pack.entrenador_foto.startsWith('http') ? pack.entrenador_foto : 'https://api.padelmanager.cl/' + pack.entrenador_foto"
                  alt="Coach" />
                <span *ngIf="!pack.entrenador_foto" class="avatar-fallback">\u{1F3BE}</span>
              </div>
              <div class="pack-text">
                <span class="coach-name">{{ pack.entrenador_nombre }}</span>
                <span class="pack-label">{{ pack.nombre }}</span>
              </div>
            </div>
            <div class="pack-bar-group">
              <div class="pack-bar-header">
                <span class="bar-label">Sesiones Pendientes</span>
                <span class="pack-count">
                  {{ pack.pendientes }} <span class="total">/ {{ pack.total }}</span>
                </span>
              </div>
              <div class="pack-bar">
                <div class="pack-bar-fill" [style.width.%]="pack.total > 0 ? (pack.pendientes / pack.total) * 100 : 0">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="packsDetalle.length === 0" class="empty-state-modal">
          <ion-icon name="albums-outline"></ion-icon>
          <p>No tienes packs activos.</p>
        </div>

      </div>
    </ng-template>
  </ion-modal>

  <!-- Notifications Modal -->
  <ion-modal class="custom-bottom-sheet" [isOpen]="isNotificacionesOpen" (didDismiss)="closeNotificaciones()"
    initialBreakpoint="0.6" [breakpoints]="[0, 0.6, 0.9]">
    <ng-template>
      <ion-content class="notifications-content">
        <div class="drag-handle"></div>
        <div class="modal-header-notit">
          <h2>NOTIFICACIONES</h2>
          <ion-button fill="clear" (click)="closeNotificaciones()" class="close-btn">
            <ion-icon name="close" slot="icon-only"></ion-icon>
          </ion-button>
        </div>

        <div class="notifications-list">
          <!-- Missing Address Alert -->
          <div class="notification-card-home warning animate-pop" *ngIf="sinDireccion" (click)="onNotifClick('perfil')">
            <div class="card-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div class="card-body">
              <h4>Configura tu Ubicaci\xF3n</h4>
              <p>Agrega tu direcci\xF3n en tu perfil para encontrar entrenadores cerca de ti.</p>
              <div class="card-actions">
                <ion-button fill="solid" class="action-btn-notit">Ir al Perfil</ion-button>
              </div>
            </div>
          </div>

          <!-- Daily Tips Announcement -->
          <div class="notification-card-home success animate-pop" *ngIf="showTipsInfo" (click)="onNotifClick('tips')">
            <div class="card-icon">
              <ion-icon name="sparkles-outline"></ion-icon>
            </div>
            <div class="card-body">
              <h4>\xA1Consejos Diarios!</h4>
              <p>Cada d\xEDa recibir\xE1s nuevos consejos de p\xE1del impulsados por IA para mejorar tu t\xE9cnica.</p>
              <div class="card-actions">
                <ion-button fill="clear" color="medium">Entendido</ion-button>
              </div>
            </div>
          </div>

          <div class="empty-notifications" *ngIf="getNotificacionesCount() === 0">
            <ion-icon name="notifications-off-outline"></ion-icon>
            <p>No tienes notificaciones pendientes.</p>
          </div>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>

  <!-- Modal Progreso y Entrenamiento (Bottom Sheet) -->
  <ion-modal id="progreso-entrenamiento-modal" [isOpen]="isProgresoModalOpen" (didDismiss)="cerrarModalProgreso()" initialBreakpoint="0.75"
    [breakpoints]="[0, 0.5, 0.75, 0.95]" class="custom-bottom-sheet">
    <ng-template>
      <ion-content class="progreso-modal-content">
        <div class="drag-handle"></div>
        
        <div class="pm-header">
          <div class="pm-title-group">
            <span class="pm-tag">RENDIMIENTO DEPORTIVO</span>
            <h2>Tu Progreso</h2>
          </div>
          <button (click)="cerrarModalProgreso()" class="pm-close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <div class="pm-body">
          
          <!-- LEVEL SECTION HERO -->
          <div class="pm-level-hero" (click)="goToLogros()">
            <div class="lh-left">
              <div class="lh-icon-badge">\u{1F3C6}</div>
              <div class="lh-text">
                <span class="lh-sub">Rango Actual</span>
                <h3>Nivel {{ logrosDesbloqueados > 0 ? logrosDesbloqueados : 1 }}</h3>
              </div>
            </div>
            <div class="lh-action-btn">
              <span>Ver Logros</span>
              <ion-icon name="chevron-forward"></ion-icon>
            </div>
          </div>

          <!-- METRICS GRID -->
          <div class="pm-metrics-grid">
            <div class="pm-metric-card pending-card" (click)="abrirModalPacks()">
              <div class="mc-icon"><ion-icon name="time-outline"></ion-icon></div>
              <div class="mc-value">{{ clasesPendientes }}</div>
              <div class="mc-label">Pendientes</div>
              <div class="mc-arrow"><ion-icon name="chevron-forward"></ion-icon></div>
            </div>
            
            <div class="pm-metrics-subgrid">
              <div class="pm-metric-card mini-card">
                <span class="mc-label">Cr\xE9ditos</span>
                <span class="mc-value">{{ clasesDisponibles }}</span>
              </div>
              <div class="pm-metric-card mini-card">
                <span class="mc-label">Reservadas</span>
                <span class="mc-value">{{ clasesReservadas }}</span>
              </div>
            </div>
          </div>

          <!-- BADGES SECTION -->
          <div class="pm-section-card" (click)="goToLogros()">
            <div class="pm-section-header">
              <h4>Logros e Insignias</h4>
              <span class="pm-section-pct">{{ logrosPorcentaje }}%</span>
            </div>
            
            <!-- Progress Bar -->
            <div class="pm-progress-container">
              <div class="pm-progress-bar">
                <div class="pm-progress-fill" [style.width.%]="logrosPorcentaje"></div>
              </div>
            </div>

            <!-- Mini Badges Row -->
            <div class="pm-badges-row">
              <div class="pm-mini-badge" *ngFor="let logro of (logros.length ? logros.slice(0, 5) : [1,2,3,4,5])" 
                   [class.locked]="logro.desbloqueado === false" 
                   [style.--badge-color]="logro.color_badge || '#e5e5ea'">
                <span class="pm-badge-emoji">{{ logro.icono || '\u{1F512}' }}</span>
              </div>
              <div class="pm-mini-badge-more" *ngIf="logros.length > 5">+{{ logros.length - 5 }}</div>
            </div>
          </div>

          <!-- LEVEL UP BUTTON -->
          <button class="pm-action-button" (click)="misHabilidades()">
            <div class="ab-content">
              <ion-icon name="ribbon-outline" class="ab-icon"></ion-icon>
              <span>Habilidades y Nivel</span>
            </div>
            <ion-icon name="chevron-forward-outline" class="ab-arrow"></ion-icon>
          </button>

        </div>
      </ion-content>
    </ng-template>
  </ion-modal>


  <!-- \u{1F3C5} Achievement Unlocked Toast -->
  <div class="achievement-toast-overlay" *ngIf="showAchievementToast" (click)="dismissAchievementToast()">
    <div class="achievement-toast" [style.--toast-color]="achievementToast?.color_badge || '#CCFF00'">
      <div class="toast-glow"></div>
      <div class="toast-content">
        <div class="toast-badge-icon">{{ achievementToast?.icono }}</div>
        <div class="toast-text">
          <span class="toast-label">\xA1LOGRO DESBLOQUEADO!</span>
          <span class="toast-name">{{ achievementToast?.nombre }}</span>
          <span class="toast-desc">{{ achievementToast?.descripcion }}</span>
        </div>
      </div>
      <div class="toast-progress"></div>
    </div>
  </div>

</ion-content>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/jugador-home/jugador-home.page.scss */\nion-content {\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n.header-nike {\n  position: relative;\n  height: 250px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n}\n.header-content-wrapper {\n  position: absolute;\n  bottom: 60px;\n  left: 30px;\n  right: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.header-content-wrapper .header-left-info {\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  flex: 1;\n  overflow: hidden;\n}\n.header-content-wrapper .avatar-circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper .avatar-circle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper .header-text .welcome-pre {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper .header-text .header-title {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.header-content-wrapper .notifications-btn {\n  position: relative;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.header-content-wrapper .notifications-btn ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.header-content-wrapper .notifications-btn .notif-badge {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  font-size: 10px;\n  font-weight: 800;\n  border-radius: 50%;\n  padding: 4px 6px;\n  min-width: 20px;\n  line-height: 1;\n}\n.dashboard-container {\n  padding: 0 20px 100px;\n  background: white;\n  border-radius: 40px 40px 0 0;\n  position: relative;\n  z-index: 10;\n}\n.dashboard-container .next-session-row {\n  background: #f8f8fa;\n  border-radius: 18px;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  transition: all 0.2s ease;\n}\n.dashboard-container .next-session-row .row-main {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.dashboard-container .next-session-row .row-main .row-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.dashboard-container .next-session-row .row-main .row-icon ion-icon {\n  font-size: 18px;\n  color: #000;\n}\n.dashboard-container .next-session-row .row-main .row-text {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-container .next-session-row .row-main .row-text .label {\n  font-size: 8px;\n  font-weight: 950;\n  color: #8e8e93;\n  letter-spacing: 1px;\n}\n.dashboard-container .next-session-row .row-main .row-text .value {\n  font-size: 13px;\n  font-weight: 800;\n  color: #000;\n  margin-top: 1px;\n}\n.dashboard-container .next-session-row .row-arrow {\n  font-size: 16px;\n  color: #ddd;\n}\n.dashboard-container .next-session-row:active {\n  transform: scale(0.98);\n  background: #f2f2f7;\n}\n.notifications-home-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-top: 25px;\n}\n.notification-card-home {\n  display: flex;\n  gap: 15px;\n  padding: 20px;\n  border-radius: 20px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n}\n.notification-card-home .card-icon {\n  width: 45px;\n  height: 45px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.notification-card-home .card-body {\n  flex: 1;\n}\n.notification-card-home .card-body h4 {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 800;\n  color: #000;\n}\n.notification-card-home .card-body p {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #64748b;\n}\n.notification-card-home .card-body .card-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n.notification-card-home .card-body .card-actions ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  height: 30px;\n}\n.notification-card-home.warning {\n  background: #fff9e6;\n  border-color: #ffeeba;\n}\n.notification-card-home.warning .card-icon {\n  background: #fdf5d3;\n  color: #856404;\n}\n.notification-card-home.warning h4 {\n  color: #856404;\n}\n.notification-card-home.warning p {\n  color: #856404;\n  opacity: 0.8;\n}\n.notification-card-home.success {\n  background: #f0fdf4;\n  border-color: #dcfce7;\n}\n.notification-card-home.success .card-icon {\n  background: #dcfce7;\n  color: #166534;\n}\n.notification-card-home.success h4 {\n  color: #166534;\n}\n.notification-card-home.success p {\n  color: #166534;\n  opacity: 0.8;\n}\n.hero-actions-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 25px;\n}\n.hero-actions-grid .hero-booking-action {\n  background: #ccff00;\n  background:\n    linear-gradient(\n      135deg,\n      #ccff00 0%,\n      #a8e600 100%);\n  padding: 16px 12px;\n  border-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 145px;\n  box-shadow: 0 12px 30px rgba(204, 255, 0, 0.25);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n}\n.hero-actions-grid .hero-booking-action:active {\n  transform: scale(0.96);\n  box-shadow: 0 5px 15px rgba(204, 255, 0, 0.15);\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-icon-wrap {\n  width: 42px;\n  height: 42px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-icon-wrap.trophy {\n  background: rgba(255, 255, 255, 0.1);\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-text-wrap {\n  margin-top: 14px;\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-text-wrap h3 {\n  margin: 0;\n  color: #000;\n  font-weight: 950;\n  font-size: 13.5px;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  line-height: 1.15;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-text-wrap p {\n  margin: 3px 0 0;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 9.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  line-height: 1.2;\n  white-space: normal;\n}\n.hero-actions-grid .hero-booking-action ion-icon[name=arrow-forward] {\n  position: absolute;\n  top: 16px;\n  right: 12px;\n  color: #000;\n  font-size: 18px;\n  opacity: 0.4;\n}\n.hero-actions-grid .hero-booking-action.tournament-hero {\n  background: #111;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);\n}\n.hero-actions-grid .hero-booking-action.tournament-hero .hero-icon-wrap {\n  background: rgba(255, 255, 255, 0.1);\n  font-size: 22px;\n  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05);\n}\n.hero-actions-grid .hero-booking-action.tournament-hero .hero-text-wrap h3 {\n  color: #ffffff !important;\n}\n.hero-actions-grid .hero-booking-action.tournament-hero .hero-text-wrap p {\n  color: #94a3b8 !important;\n}\n.hero-actions-grid .hero-booking-action.tournament-hero ion-icon[name=arrow-forward] {\n  color: #ccff00;\n  opacity: 1;\n}\n.actions-grid-v2 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.actions-grid-v2 .action-btn-v2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 15px 5px;\n  border-radius: 24px;\n  background: #fff;\n  border: 1px solid #f1f1f7;\n  transition: all 0.2s;\n}\n.actions-grid-v2 .action-btn-v2:active {\n  background: #f8f8fa;\n  transform: scale(0.95);\n}\n.actions-grid-v2 .action-btn-v2 .a-icon {\n  width: 48px;\n  height: 48px;\n  background: #f8f8fa;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.actions-grid-v2 .action-btn-v2 .a-icon ion-icon {\n  font-size: 20px;\n  color: #000;\n}\n.actions-grid-v2 .action-btn-v2 .a-label {\n  font-size: 10px;\n  font-weight: 900;\n  color: #1e293b;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metrics-dashboard {\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  padding: 24px 20px;\n  background: #ffffff;\n  border-radius: 28px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  margin-bottom: 25px;\n  margin-top: 10px;\n}\n.metrics-dashboard .metric-item {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 6px 4px;\n  border-radius: 20px;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.metrics-dashboard .metric-item.clickable-metric {\n  background: #fdfdfd;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  position: relative;\n  overflow: hidden;\n}\n.metrics-dashboard .metric-item.clickable-metric::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: #ccff00;\n  opacity: 0.8;\n}\n.metrics-dashboard .metric-item.clickable-metric:active {\n  transform: scale(0.96);\n  background: #f8f8fa;\n}\n.metrics-dashboard .metric-item.clickable-metric .metric-top {\n  display: flex;\n  align-items: flex-start;\n  gap: 2px;\n}\n.metrics-dashboard .metric-item.clickable-metric .metric-top .btn-chevron {\n  font-size: 12px;\n  color: #ccff00;\n  background: #000;\n  border-radius: 50%;\n  padding: 2px;\n  margin-top: 2px;\n}\n.metrics-dashboard .metric-item .metric-value {\n  font-size: 24px;\n  font-weight: 950;\n  color: #000;\n  line-height: 1;\n  margin-bottom: 4px;\n  letter-spacing: -1px;\n}\n.metrics-dashboard .metric-item .metric-label {\n  font-size: 9px;\n  font-weight: 950;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 1.2;\n}\n.metrics-dashboard .metric-divider {\n  width: 1px;\n  background: #f2f2f7;\n  margin: 15px 5px;\n}\n.daily-tip-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #111 0%,\n      #222 100%);\n  border-radius: 28px;\n  padding: 22px;\n  margin-bottom: 30px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.daily-tip-card::before {\n  content: "";\n  position: absolute;\n  top: -50px;\n  right: -50px;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(204, 255, 0, 0.2) 0%,\n      transparent 70%);\n  filter: blur(15px);\n}\n.daily-tip-card .tip-icon {\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  background: rgba(204, 255, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.daily-tip-card .tip-icon ion-icon {\n  font-size: 24px;\n  color: #ccff00;\n  animation: pulse-ai 2s infinite;\n}\n.daily-tip-card .tip-content {\n  flex: 1;\n}\n.daily-tip-card .tip-content h4 {\n  margin: 0 0 5px 0;\n  color: #ccff00;\n  font-size: 13px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.daily-tip-card .tip-content p {\n  margin: 0;\n  color: #fff;\n  font-size: 13.5px;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.modules-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.module-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 32px;\n  overflow: hidden;\n  padding: 0;\n  margin-bottom: 0;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.module-card:active {\n  transform: scale(0.97);\n}\n.module-card .module-img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  border-radius: 0 !important;\n}\n.module-card .module-body {\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  gap: 12px;\n}\n.module-card .module-text h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n  color: #000;\n  text-transform: uppercase;\n}\n.module-card .module-text p {\n  margin: 4px 0 0;\n  font-size: 14px;\n  color: #8e8e93;\n  font-weight: 600;\n  text-transform: none;\n}\n.module-card .module-arrow {\n  font-size: 24px;\n  color: #c7c7cc;\n}\nion-modal.bottom-sheet-modal {\n  --border-radius: 45px 45px 0 0;\n  --box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.3);\n  --backdrop-opacity: 0.7;\n}\nion-modal.bottom-sheet-modal::part(content) {\n  background: #ffffff;\n}\nion-modal.bottom-sheet-modal::part(backdrop) {\n  background: #000;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.modal-desglose-container {\n  padding: 15px 25px 50px;\n}\n.modal-desglose-container .modal-desglose-header {\n  text-align: center;\n  margin-bottom: 35px;\n}\n.modal-desglose-container .modal-desglose-header .handle {\n  width: 45px;\n  height: 5px;\n  background: #e5e5ea;\n  border-radius: 10px;\n  margin: 0 auto 25px;\n}\n.modal-desglose-container .modal-desglose-header h3 {\n  font-size: 28px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: -1.5px;\n  margin: 0;\n}\n.modal-desglose-container .modal-desglose-header p {\n  font-size: 14px;\n  color: #8e8e93;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.packs-breakdown.modal-view {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.packs-breakdown.modal-view .pack-styled-card {\n  background: #ffffff;\n  border-radius: 30px;\n  padding: 25px;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-coach-row {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-coach-row .pack-avatar {\n  width: 55px;\n  height: 55px;\n  border-radius: 20px;\n  background: #000;\n  overflow: hidden;\n  border: 2px solid #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-coach-row .pack-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-coach-row .pack-avatar .avatar-fallback {\n  font-size: 28px;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-coach-row .pack-text .coach-name {\n  font-size: 17px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -0.3px;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-coach-row .pack-text .pack-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-bar-group .pack-bar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 8px;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-bar-group .pack-bar-header .bar-label {\n  font-size: 10px;\n  font-weight: 900;\n  color: #8e8e93;\n  text-transform: uppercase;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-bar-group .pack-bar-header .pack-count {\n  font-size: 16px;\n  font-weight: 950;\n  color: #000;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-bar-group .pack-bar-header .pack-count .total {\n  font-size: 12px;\n  color: #aeaeb2;\n  font-weight: 700;\n  margin-left: 2px;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-bar-group .pack-bar {\n  height: 12px;\n  background: #f2f2f7;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-bar-group .pack-bar .pack-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ccff00,\n      #a8e600);\n  border-radius: 6px;\n  position: relative;\n}\n.packs-breakdown.modal-view .pack-styled-card .pack-bar-group .pack-bar .pack-bar-fill::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.5),\n      transparent);\n  animation: bar-shine 2.5s infinite linear;\n}\n.empty-state-modal {\n  text-align: center;\n  padding: 60px 0;\n}\n.empty-state-modal ion-icon {\n  font-size: 64px;\n  color: #d1d1d6;\n  margin-bottom: 15px;\n}\n.empty-state-modal p {\n  font-size: 15px;\n  font-weight: 700;\n  color: #aeaeb2;\n}\n@keyframes pulse-ai {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 1;\n  }\n}\n@keyframes bar-shine {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.animate-up {\n  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(40px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.nike-fab {\n  --background: #000;\n}\n.nike-fab ion-icon {\n  color: #ccff00;\n}\nion-fab[vertical=bottom] {\n  bottom: 12px;\n  right: 12px;\n}\n.nike-card {\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.animate-pop {\n  animation: popIn 0.5s cubic-bezier(0.26, 1.36, 0.74, 1.1) both;\n}\n@keyframes popIn {\n  0% {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.delay-1 {\n  animation-delay: 0.1s;\n}\n.delay-2 {\n  animation-delay: 0.2s;\n}\n.delay-3 {\n  animation-delay: 0.3s;\n}\n.delay-4 {\n  animation-delay: 0.4s;\n}\nion-modal.custom-bottom-sheet {\n  --border-radius: 36px 36px 0 0;\n  --box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);\n}\n.notifications-content {\n  --background: #fdfdfd;\n  --padding-bottom: 30px;\n}\n.notifications-content .drag-handle {\n  width: 45px;\n  height: 6px;\n  background: #e2e2e2;\n  border-radius: 10px;\n  margin: 12px auto 25px;\n}\n.notifications-content .modal-header-notit {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 0 20px;\n}\n.notifications-content .modal-header-notit h2 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.notifications-content .modal-header-notit .close-btn {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  height: 40px;\n  width: 40px;\n  --border-radius: 50%;\n  background: #f2f2f5;\n  color: #555;\n}\n.notifications-content .notifications-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 15px 20px;\n}\n.notifications-content .action-btn-notit {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 14px;\n  font-size: 13px;\n  font-weight: 800;\n  height: 40px;\n  margin-top: 10px;\n}\n.notifications-content .empty-notifications {\n  text-align: center;\n  padding: 50px 20px;\n  color: #999;\n}\n.notifications-content .empty-notifications ion-icon {\n  font-size: 54px;\n  opacity: 0.4;\n  margin-bottom: 20px;\n}\n.notifications-content .empty-notifications p {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.logros-widget {\n  background: #f8f8fa;\n  border-radius: 24px;\n  padding: 14px 16px;\n  margin-bottom: 15px;\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.logros-widget:active {\n  transform: scale(0.97);\n}\n.logros-widget .logros-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.logros-widget .logros-header .logros-title-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.logros-widget .logros-header .logros-title-group ion-icon {\n  font-size: 18px;\n  color: #000;\n}\n.logros-widget .logros-header .logros-title-group .logros-title {\n  font-size: 11px;\n  font-weight: 950;\n  letter-spacing: 1.5px;\n  color: #000;\n}\n.logros-widget .logros-header .logros-meta {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.logros-widget .logros-header .logros-meta .logros-count {\n  font-size: 13px;\n  font-weight: 800;\n  color: #8e8e93;\n}\n.logros-widget .logros-header .logros-meta .logros-arrow {\n  font-size: 16px;\n  color: #c7c7cc;\n}\n.logros-widget .logros-scroll {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding: 4px 0 12px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.logros-widget .logros-scroll::-webkit-scrollbar {\n  display: none;\n}\n.logros-widget .logro-badge {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.logros-widget .logro-badge .logro-icono {\n  font-size: 18px;\n  z-index: 1;\n}\n.logros-widget .logro-badge .logro-lock {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  font-size: 10px;\n  z-index: 2;\n}\n.logros-widget .logro-badge.unlocked {\n  background: rgba(0, 0, 0, 0.06);\n  border: 2px solid var(--badge-color, #CCFF00);\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05), inset 0 0 8px rgba(255, 255, 255, 0.3);\n  animation: badgeGlow 3s ease-in-out infinite;\n}\n.logros-widget .logro-badge.unlocked .logro-icono {\n  animation: badgePulse 3s ease-in-out infinite;\n}\n.logros-widget .logro-badge.locked {\n  background: #ededed;\n  border: 2px solid #e0e0e0;\n  opacity: 0.5;\n}\n.logros-widget .logro-badge.locked .logro-icono {\n  filter: grayscale(100%);\n  opacity: 0.4;\n}\n.logros-widget .logros-progress-bar {\n  height: 4px;\n  background: #e5e5ea;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.logros-widget .logros-progress-bar .logros-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ccff00,\n      #a8e600);\n  border-radius: 2px;\n  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes badgeGlow {\n  0%, 100% {\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);\n  }\n  50% {\n    box-shadow: 0 0 16px var(--badge-color, rgba(204, 255, 0, 0.4));\n  }\n}\n@keyframes badgePulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.08);\n  }\n}\n.achievement-toast-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  padding: 60px 20px 0;\n  pointer-events: all;\n  animation: toastSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.achievement-toast {\n  background:\n    linear-gradient(\n      135deg,\n      #111 0%,\n      #1a1a2e 100%);\n  border-radius: 24px;\n  padding: 20px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px var(--toast-color, rgba(204, 255, 0, 0.2));\n  position: relative;\n  overflow: hidden;\n}\n.achievement-toast .toast-glow {\n  position: absolute;\n  top: -30px;\n  right: -30px;\n  width: 100px;\n  height: 100px;\n  background:\n    radial-gradient(\n      circle,\n      var(--toast-color, rgba(204, 255, 0, 0.3)) 0%,\n      transparent 70%);\n  filter: blur(20px);\n  animation: glowPulse 2s ease-in-out infinite;\n}\n.achievement-toast .toast-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n  z-index: 1;\n}\n.achievement-toast .toast-content .toast-badge-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 2px solid var(--toast-color, #CCFF00);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  flex-shrink: 0;\n  animation: iconBounce 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;\n  animation-delay: 0.3s;\n}\n.achievement-toast .toast-content .toast-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.achievement-toast .toast-content .toast-text .toast-label {\n  font-size: 9px;\n  font-weight: 950;\n  letter-spacing: 2px;\n  color: var(--toast-color, #CCFF00);\n}\n.achievement-toast .toast-content .toast-text .toast-name {\n  font-size: 18px;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -0.3px;\n}\n.achievement-toast .toast-content .toast-text .toast-desc {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n}\n.achievement-toast .toast-progress {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  margin-top: 16px;\n  overflow: hidden;\n  position: relative;\n}\n.achievement-toast .toast-progress::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: var(--toast-color, #CCFF00);\n  animation: progressShrink 4.5s linear both;\n}\n@keyframes toastSlideDown {\n  from {\n    transform: translateY(-120%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes glowPulse {\n  0%, 100% {\n    opacity: 0.6;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n@keyframes iconBounce {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.3);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes progressShrink {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n.header-v2 {\n  position: relative;\n  padding: 80px 20px 100px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  z-index: 1;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  overflow: hidden;\n}\n.header-v2::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.4) 100%);\n  z-index: 0;\n}\n.header-v2 .h-text,\n.header-v2 .h-actions {\n  position: relative;\n  z-index: 2;\n}\n.header-v2 .h-text {\n  flex: 1;\n}\n.header-v2 .h-text p {\n  margin: 0 0 6px;\n  font-size: 11px;\n  color: #CCFF00;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.header-v2 .h-text .h-title-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n}\n.header-v2 .h-text .h-title-row h1 {\n  margin: 0;\n  font-size: clamp(20px, 5.5vw, 26px);\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  color: #fff;\n  line-height: 1.15;\n  white-space: normal;\n  word-break: break-word;\n}\n.header-v2 .h-text .h-title-row .h-wave {\n  font-size: 20px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.header-v2 .h-actions {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.header-v2 .h-actions .h-notif {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-v2 .h-actions .h-notif ion-icon {\n  font-size: 22px;\n  color: #fff;\n}\n.header-v2 .h-actions .h-notif .h-dot {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  width: 8px;\n  height: 8px;\n  background: #ff3b30;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);\n}\n.header-v2 .h-actions .h-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: #000;\n  border: 2px solid #CCFF00;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n.header-v2 .h-actions .h-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.dashboard-v2 {\n  margin-top: -40px;\n  padding: 20px 16px 120px;\n  background: #f4f7fa;\n  min-height: 100%;\n  position: relative;\n  z-index: 10;\n  border-radius: 40px 40px 0 0;\n}\n.dashboard-v2 .v2-card {\n  background: #fff;\n  border-radius: 24px;\n  padding: 22px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  border: 1px solid #f1f5f9;\n}\n.dashboard-v2 .v2-card.delay-1 {\n  animation: up 0.5s ease both 0.1s;\n}\n.dashboard-v2 .v2-card.delay-2 {\n  animation: up 0.5s ease both 0.2s;\n}\n.dashboard-v2 .v2-card-header-main {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.dashboard-v2 .v2-card-header-main h3 {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: 1px;\n}\n.dashboard-v2 .v2-card-header-main .v2-badge-btn {\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 800;\n  color: #2563eb;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dashboard-v2 .v2-card-header-main .v2-pulse-dot {\n  width: 8px;\n  height: 8px;\n  background: #22c55e;\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);\n  animation: pulse 2s infinite;\n}\n.dashboard-v2 .next-class-v2-premium {\n  background: #fff;\n  border-radius: 20px;\n  padding: 16px 20px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);\n}\n.dashboard-v2 .next-class-v2-premium .nc-icon-circle {\n  width: 44px;\n  height: 44px;\n  background: #eff6ff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-v2 .next-class-v2-premium .nc-icon-circle ion-icon {\n  color: #2563eb;\n  font-size: 20px;\n}\n.dashboard-v2 .next-class-v2-premium .nc-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dashboard-v2 .next-class-v2-premium .nc-info .nc-label {\n  font-size: 10px;\n  font-weight: 900;\n  color: #64748b;\n  letter-spacing: 0.5px;\n}\n.dashboard-v2 .next-class-v2-premium .nc-info .nc-value {\n  font-size: 14px;\n  font-weight: 800;\n  color: #000;\n  text-transform: capitalize;\n}\n.dashboard-v2 .next-class-v2-premium .nc-arrow {\n  color: #cbd5e1;\n  font-size: 18px;\n}\n.dashboard-v2 .next-class-v2-premium:active {\n  transform: scale(0.98);\n  background: #f8fafc;\n}\n.dashboard-v2 .v2-metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 25px;\n}\n.dashboard-v2 .v2-metrics-grid .v2-metric {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 5px;\n}\n.dashboard-v2 .v2-metrics-grid .v2-metric .m-lbl {\n  font-size: 9px;\n  font-weight: 900;\n  color: #94a3b8;\n  letter-spacing: 0.5px;\n}\n.dashboard-v2 .v2-metrics-grid .v2-metric .m-val {\n  font-size: 22px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -1px;\n}\n.dashboard-v2 .v2-metrics-grid .v2-metric:active {\n  background: #f8fafc;\n  border-radius: 12px;\n}\n.dashboard-v2 .v2-progress-section .v2-l-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.dashboard-v2 .v2-progress-section .v2-l-header span {\n  font-size: 11px;\n  font-weight: 800;\n  color: #64748b;\n}\n.dashboard-v2 .v2-progress-section .v2-l-header .v2-pct {\n  color: #000;\n  font-weight: 950;\n}\n.dashboard-v2 .v2-progress-section .v2-l-bar {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n.dashboard-v2 .v2-progress-section .v2-l-bar .v2-l-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 4px;\n  transition: width 1s ease;\n}\n.dashboard-v2 .v2-progress-section .v2-l-badges {\n  display: flex;\n  gap: 8px;\n}\n.dashboard-v2 .v2-progress-section .v2-l-badges .v2-mini-badge {\n  width: 34px;\n  height: 34px;\n  background: var(--bc);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  border: 2px solid #fff;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.dashboard-v2 .v2-progress-section .v2-l-badges .v2-mini-badge.locked {\n  opacity: 0.3;\n  filter: grayscale(1);\n}\n.dashboard-v2 .v2-progress-section .v2-l-badges .v2-mini-badge-more {\n  font-size: 11px;\n  font-weight: 950;\n  color: #94a3b8;\n  align-self: center;\n  margin-left: 5px;\n}\n.dashboard-v2 .daily-tip-v2-premium {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  position: relative;\n}\n.dashboard-v2 .daily-tip-v2-premium .t-icon-wrap {\n  width: 44px;\n  height: 44px;\n  background: #fffbeb;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-v2 .daily-tip-v2-premium .t-icon-wrap ion-icon {\n  color: #f59e0b;\n  font-size: 22px;\n}\n.dashboard-v2 .daily-tip-v2-premium .t-content {\n  flex: 1;\n}\n.dashboard-v2 .daily-tip-v2-premium .t-content .t-badge {\n  font-size: 9px;\n  font-weight: 950;\n  color: #f59e0b;\n  letter-spacing: 1px;\n  margin-bottom: 4px;\n  display: block;\n}\n.dashboard-v2 .daily-tip-v2-premium .t-content h4 {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 900;\n  color: #000;\n  line-height: 1.2;\n}\n.dashboard-v2 .daily-tip-v2-premium .t-content p {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.5;\n  font-weight: 600;\n}\n.dashboard-v2 .daily-tip-v2-premium .t-arrow {\n  align-self: center;\n  color: #cbd5e1;\n}\n.dashboard-v2 .command-center-card .command-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 25px;\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px;\n  border-radius: 20px;\n  transition: all 0.2s;\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero .ch-left {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero .ch-left .ch-icon {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  background: #fff;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero .ch-left .ch-text h4 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 950;\n  color: #fff;\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero .ch-left .ch-text p {\n  margin: 2px 0 0;\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero ion-icon {\n  color: #fff;\n  font-size: 20px;\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero.booking {\n  background: #2563eb;\n  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero.tournament {\n  background: #0f172a;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.2);\n}\n.dashboard-v2 .command-center-card .command-grid .command-hero:active {\n  transform: scale(0.97);\n  opacity: 0.9;\n}\n.dashboard-v2 .command-center-card .secondary-actions {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.dashboard-v2 .command-center-card .secondary-actions .sec-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 15px 5px;\n  border-radius: 18px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n}\n.dashboard-v2 .command-center-card .secondary-actions .sec-btn .s-icon {\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-v2 .command-center-card .secondary-actions .sec-btn .s-icon ion-icon {\n  color: #000;\n  font-size: 18px;\n}\n.dashboard-v2 .command-center-card .secondary-actions .sec-btn span {\n  font-size: 10px;\n  font-weight: 900;\n  color: #1e293b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n.dashboard-v2 .command-center-card .secondary-actions .sec-btn:active {\n  background: #f1f5f9;\n  transform: scale(0.95);\n}\n@keyframes up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);\n  }\n}\n.v2-title {\n  font-size: 16px;\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  color: #000;\n  margin: 0;\n}\n.v2-title.section-mt {\n  margin-top: 30px;\n  margin-bottom: 15px;\n  padding-left: 5px;\n}\n.next-class-v2 {\n  background: #fff;\n  border-radius: 24px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  border-left: 5px solid #CCFF00;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.next-class-v2:active {\n  transform: scale(0.98);\n}\n.next-class-v2 .nc-icon-badge {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(204, 255, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.next-class-v2 .nc-icon-badge ion-icon {\n  font-size: 20px;\n  color: #99eb00;\n}\n.next-class-v2 .nc-content {\n  flex: 1;\n  min-width: 0;\n}\n.next-class-v2 .nc-content .nc-tag {\n  font-size: 9px;\n  font-weight: 950;\n  color: #8e8e93;\n  letter-spacing: 1.5px;\n  margin-bottom: 4px;\n}\n.next-class-v2 .nc-content .nc-date {\n  font-size: 15px;\n  font-weight: 900;\n  color: #000;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n}\n.next-class-v2 .nc-content .nc-coach {\n  font-size: 12px;\n  color: #8e8e93;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.next-class-v2 .nc-content .nc-coach ion-icon {\n  color: #c7c7cc;\n}\n.next-class-v2 .nc-arrow {\n  font-size: 18px;\n  color: #c7c7cc;\n  padding-left: 5px;\n}\n.progress-v2 {\n  background: #fff;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  margin-bottom: 24px;\n  position: relative;\n}\n.progress-v2::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(204, 255, 0, 0.03) 0%,\n      transparent 100%);\n  border-radius: 24px 24px 0 0;\n  pointer-events: none;\n}\n.progress-v2 .p-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.progress-v2 .p-header .p-pts {\n  background: #CCFF00;\n  color: #000;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 900;\n}\n.progress-v2 .p-metrics {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.progress-v2 .p-metrics .p-metric-item {\n  flex: 1;\n  background: #f8f8fa;\n  border-radius: 16px;\n  padding: 12px 5px;\n  text-align: center;\n  transition: all 0.2s ease;\n}\n.progress-v2 .p-metrics .p-metric-item.highlight {\n  background: #000;\n  color: #CCFF00;\n}\n.progress-v2 .p-metrics .p-metric-item.highlight .m-val {\n  color: #CCFF00;\n}\n.progress-v2 .p-metrics .p-metric-item.highlight .m-lbl {\n  color: rgba(255, 255, 255, 0.7);\n}\n.progress-v2 .p-metrics .p-metric-item .m-val {\n  font-size: 20px;\n  font-weight: 950;\n  line-height: 1;\n  margin-bottom: 6px;\n  color: #000;\n}\n.progress-v2 .p-metrics .p-metric-item .m-lbl {\n  font-size: 10px;\n  font-weight: 800;\n  line-height: 1.2;\n  color: #8e8e93;\n  text-transform: uppercase;\n}\n.progress-v2 .p-divider {\n  height: 1px;\n  background: #f2f2f7;\n  margin: 0 -20px 20px;\n}\n.progress-v2 .p-logros-section {\n  background: transparent;\n  border-radius: 0;\n  padding: 0;\n  transition: transform 0.2s ease;\n}\n.progress-v2 .p-logros-section:active {\n  transform: scale(0.98);\n}\n.progress-v2 .p-logros-section .p-l-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  margin-bottom: 8px;\n}\n.progress-v2 .p-logros-section .p-l-bar {\n  height: 4px;\n  background: #e5e5ea;\n  border-radius: 2px;\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.progress-v2 .p-logros-section .p-l-bar .p-l-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #CCFF00,\n      #99eb00);\n  border-radius: 2px;\n}\n.progress-v2 .p-logros-section .p-l-badges {\n  display: flex;\n  gap: 6px;\n}\n.progress-v2 .p-logros-section .p-l-badges .mini-badge {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.03);\n  border: 1px solid var(--bc);\n  font-size: 14px;\n}\n.progress-v2 .p-logros-section .p-l-badges .mini-badge.locked {\n  background: #ededed;\n  border-color: #e0e0e0;\n  opacity: 0.5;\n  filter: grayscale(100%);\n}\n.progress-v2 .p-logros-section .p-l-badges .mini-badge-more {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: #e5e5ea;\n  color: #8e8e93;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 800;\n}\n.actions-v2-card {\n  background: #fff;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  margin-bottom: 24px;\n  position: relative;\n}\n.actions-v2-card .v2-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.actions-v2-card .v2-card-header .v2-subtitle {\n  font-size: 11px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin: 0;\n  opacity: 0.8;\n}\n.actions-v2-card .v2-card-header .v2-status-dot {\n  width: 8px;\n  height: 8px;\n  background: #CCFF00;\n  border-radius: 50%;\n  box-shadow: 0 0 10px #CCFF00;\n}\n.actions-v2-card .v2-card-header .v2-status-dot.pulse {\n  animation: dot-pulse 2s infinite;\n}\n.actions-v2-card .hero-actions-grid {\n  margin-bottom: 0 !important;\n}\n.actions-v2-card .hero-actions-grid .hero-booking-action {\n  border-radius: 20px;\n}\n.actions-grid-v2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.actions-grid-v2 .action-btn-v2 {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8f8fa;\n  border-radius: 16px;\n  padding: 12px 14px;\n  width: 100%;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.actions-grid-v2 .action-btn-v2:active {\n  transform: scale(0.96);\n  background: rgba(0, 0, 0, 0.05);\n}\n.actions-grid-v2 .action-btn-v2 .a-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  background: rgba(204, 255, 0, 0.12);\n  flex-shrink: 0;\n}\n.actions-grid-v2 .action-btn-v2 .a-icon ion-icon {\n  font-size: 20px;\n  color: #99eb00 !important;\n  --color: #99eb00 !important;\n}\n.actions-grid-v2 .action-btn-v2 span {\n  font-size: 13px;\n  font-weight: 850;\n  color: #000;\n  letter-spacing: -0.2px;\n  text-align: left;\n}\n.daily-tip-v2 {\n  margin-bottom: 24px;\n  background: white;\n  border-radius: 24px;\n  padding: 24px;\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.daily-tip-v2 .t-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: #CCFF00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 5px 15px rgba(204, 255, 0, 0.2);\n  position: relative;\n  z-index: 5;\n}\n.daily-tip-v2 .t-icon ion-icon {\n  font-size: 24px;\n  color: #000 !important;\n  --color: #000 !important;\n  position: relative;\n  display: block;\n}\n.daily-tip-v2 .t-content .t-badge {\n  font-size: 9px;\n  font-weight: 950;\n  color: #99eb00;\n  letter-spacing: 1.5px;\n  margin-bottom: 4px;\n  display: block;\n  opacity: 1;\n}\n.daily-tip-v2 .t-content h4 {\n  margin: 0 0 4px;\n  font-size: 13px;\n  font-weight: 800;\n  color: #000;\n}\n.daily-tip-v2 .t-content p {\n  margin: 0;\n  font-size: 12px;\n  color: #8e8e93;\n  line-height: 1.35;\n  font-weight: 500;\n}\n.p-nivel-btn-container {\n  margin-top: 20px;\n  width: 100%;\n}\n.p-nivel-btn {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background: #000;\n  color: #CCFF00;\n  border: none;\n  padding: 14px 20px;\n  border-radius: 16px;\n  font-weight: 850;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n.p-nivel-btn:active {\n  transform: scale(0.97);\n  opacity: 0.9;\n}\n.p-nivel-btn .btn-content-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.p-nivel-btn .btn-content-left ion-icon {\n  font-size: 20px;\n  color: #CCFF00;\n  --color: #CCFF00;\n}\n.p-nivel-btn .btn-arrow {\n  font-size: 16px;\n  color: #CCFF00;\n  --color: #CCFF00;\n}\n.progreso-trigger-container {\n  background: #fff;\n  border-radius: 24px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n}\n.progreso-trigger-container:active {\n  transform: scale(0.98);\n  background: #f8f8fa;\n}\n.progreso-trigger-container .progreso-trigger-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  gap: 16px;\n}\n.progreso-trigger-container .progreso-trigger-content .pt-left {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n  min-width: 0;\n}\n.progreso-trigger-container .progreso-trigger-content .pt-left .pt-icon-badge {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.progreso-trigger-container .progreso-trigger-content .pt-left .pt-icon-badge ion-icon {\n  font-size: 20px;\n  color: #000;\n}\n.progreso-trigger-container .progreso-trigger-content .pt-left .pt-text h3 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 850;\n  color: #000;\n  letter-spacing: -0.2px;\n}\n.progreso-trigger-container .progreso-trigger-content .pt-left .pt-text p {\n  margin: 2px 0 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: #8e8e93;\n}\n.progreso-trigger-container .progreso-trigger-content .pt-arrow {\n  font-size: 18px;\n  color: #c7c7cc;\n}\n.progreso-modal-content {\n  --background: #f4f7fa;\n  background: #f4f7fa;\n}\n.progreso-modal-content .drag-handle {\n  width: 36px;\n  height: 4px;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  margin: 12px auto 0;\n}\n.pm-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 20px 16px;\n  background: transparent;\n}\n.pm-header .pm-title-group {\n  display: flex;\n  flex-direction: column;\n}\n.pm-header .pm-title-group .pm-tag {\n  font-size: 9px;\n  font-weight: 950;\n  color: #99eb00;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.pm-header .pm-title-group h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -0.5px;\n}\n.pm-header .pm-close-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.05);\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.pm-header .pm-close-btn:active {\n  background: rgba(0, 0, 0, 0.1);\n}\n.pm-header .pm-close-btn ion-icon {\n  font-size: 20px;\n  color: #000;\n}\n.pm-body {\n  padding: 0 16px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.pm-level-hero {\n  background: #000;\n  border-radius: 24px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.pm-level-hero:active {\n  transform: scale(0.98);\n}\n.pm-level-hero .lh-left {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.pm-level-hero .lh-left .lh-icon-badge {\n  width: 48px;\n  height: 48px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n.pm-level-hero .lh-left .lh-text {\n  display: flex;\n  flex-direction: column;\n}\n.pm-level-hero .lh-left .lh-text .lh-sub {\n  font-size: 9px;\n  font-weight: 850;\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.pm-level-hero .lh-left .lh-text h3 {\n  margin: 2px 0 0;\n  font-size: 18px;\n  font-weight: 900;\n  color: #CCFF00;\n}\n.pm-level-hero .lh-action-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 6px 12px;\n  border-radius: 12px;\n}\n.pm-level-hero .lh-action-btn span {\n  font-size: 11px;\n  font-weight: 900;\n  color: #fff;\n}\n.pm-level-hero .lh-action-btn ion-icon {\n  font-size: 12px;\n  color: #fff;\n}\n.pm-metrics-grid {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: 12px;\n}\n.pm-metrics-grid .pm-metric-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.pm-metrics-grid .pm-metric-card.pending-card {\n  background:\n    linear-gradient(\n      135deg,\n      #ccff00 0%,\n      #a8e600 100%);\n  box-shadow: 0 10px 25px rgba(204, 255, 0, 0.25);\n  cursor: pointer;\n  min-height: 110px;\n}\n.pm-metrics-grid .pm-metric-card.pending-card:active {\n  transform: scale(0.97);\n}\n.pm-metrics-grid .pm-metric-card.pending-card .mc-icon {\n  width: 32px;\n  height: 32px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pm-metrics-grid .pm-metric-card.pending-card .mc-icon ion-icon {\n  font-size: 18px;\n  color: #000;\n}\n.pm-metrics-grid .pm-metric-card.pending-card .mc-value {\n  font-size: 28px;\n  font-weight: 950;\n  color: #000;\n  line-height: 1;\n  margin-top: 10px;\n}\n.pm-metrics-grid .pm-metric-card.pending-card .mc-label {\n  font-size: 11px;\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 4px;\n}\n.pm-metrics-grid .pm-metric-card.pending-card .mc-arrow {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.3);\n}\n.pm-metrics-grid .pm-metric-card.mini-card {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 12px 10px;\n}\n.pm-metrics-grid .pm-metric-card.mini-card .mc-label {\n  font-size: 10px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.pm-metrics-grid .pm-metric-card.mini-card .mc-value {\n  font-size: 20px;\n  font-weight: 950;\n  color: #000;\n  line-height: 1;\n}\n.pm-metrics-grid .pm-metrics-subgrid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.pm-section-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.pm-section-card:active {\n  transform: scale(0.98);\n}\n.pm-section-card .pm-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.pm-section-card .pm-section-header h4 {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 850;\n  color: #000;\n  letter-spacing: -0.1px;\n}\n.pm-section-card .pm-section-header .pm-section-pct {\n  font-size: 12px;\n  font-weight: 950;\n  color: #99eb00;\n}\n.pm-section-card .pm-progress-container {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.pm-section-card .pm-progress-container .pm-progress-bar {\n  height: 6px;\n  background: #f0f0f4;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.pm-section-card .pm-progress-container .pm-progress-bar .pm-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #CCFF00 0%,\n      #99eb00 100%);\n  border-radius: 3px;\n}\n.pm-section-card .pm-badges-row {\n  display: flex;\n  gap: 8px;\n}\n.pm-section-card .pm-badges-row .pm-mini-badge {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.03);\n  border: 1px solid var(--badge-color);\n  transition: all 0.2s ease;\n}\n.pm-section-card .pm-badges-row .pm-mini-badge.locked {\n  background: #f0f0f4;\n  border-color: #e5e5ea;\n  opacity: 0.4;\n  filter: grayscale(100%);\n}\n.pm-section-card .pm-badges-row .pm-mini-badge .pm-badge-emoji {\n  font-size: 16px;\n}\n.pm-section-card .pm-badges-row .pm-mini-badge-more {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background: #e5e5ea;\n  color: #8e8e93;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 900;\n}\n.pm-action-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background: #000;\n  border: none;\n  padding: 16px 20px;\n  border-radius: 18px;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.pm-action-button:active {\n  transform: scale(0.97);\n  opacity: 0.9;\n}\n.pm-action-button .ab-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.pm-action-button .ab-content .ab-icon {\n  font-size: 22px;\n  color: #CCFF00;\n}\n.pm-action-button .ab-content span {\n  font-size: 14px;\n  font-weight: 850;\n  color: #CCFF00;\n  letter-spacing: -0.2px;\n}\n.pm-action-button .ab-arrow {\n  font-size: 16px;\n  color: #CCFF00;\n}\n/*# sourceMappingURL=jugador-home.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: ActionSheetController }, { type: LoadingController }, { type: AlertController }, { type: NgZone }, { type: MysqlService }, { type: HttpClient }], { videoInput: [{
    type: ViewChild,
    args: ["videoInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JugadorHomePage, { className: "JugadorHomePage", filePath: "src/app/pages/jugador-home/jugador-home.page.ts", lineNumber: 49 });
})();
export {
  JugadorHomePage
};
//# sourceMappingURL=jugador-home.page-WGRBNMLS.js.map

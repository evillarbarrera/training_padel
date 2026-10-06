import {
  AlertController,
  IonButton,
  IonContent,
  IonIcon,
  IonModal,
  LoadingController,
  ToastController
} from "./chunk-5YKSH3EK.js";
import "./chunk-LFXGPXMG.js";
import {
  add,
  addIcons,
  addOutline,
  arrowBack,
  barChartOutline,
  calendarClearOutline,
  calendarOutline,
  checkmarkCircle,
  checkmarkCircleOutline,
  chevronDown,
  chevronForward,
  closeOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  locationOutline,
  lockClosedOutline,
  pencilOutline,
  peopleOutline,
  personAddOutline,
  ribbon,
  shareOutline,
  sparklesOutline,
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
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  NavController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VZCO22FC.js";
import "./chunk-VS5QNFP6.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5HNVOF53.js";
import "./chunk-LSHAV5YA.js";
import "./chunk-KDIH5JCH.js";
import "./chunk-SYGHPWCO.js";
import "./chunk-DMH43HQY.js";
import "./chunk-T5LCTCQ6.js";
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
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/pages/jugador-partidos/jugador-partidos.page.ts
var _c0 = () => [1, 2, 3, 4];
function JugadorPartidosPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.proximos.length);
  }
}
function JugadorPartidosPage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendientes.length);
  }
}
function JugadorPartidosPage_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " No tienes partidos programados ");
    \u0275\u0275elementEnd();
  }
}
function JugadorPartidosPage_div_36_div_2_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 42);
  }
}
function JugadorPartidosPage_div_36_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.cancha_icono);
  }
}
function JugadorPartidosPage_div_36_div_2_div_23_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
  }
  if (rf & 2) {
    const i_r4 = \u0275\u0275nextContext().$implicit;
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getProfileImage(p_r3["jugador" + i_r4 + "_foto"]), \u0275\u0275sanitizeUrl);
  }
}
function JugadorPartidosPage_div_36_div_2_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "ion-icon", 49);
    \u0275\u0275elementEnd();
  }
}
function JugadorPartidosPage_div_36_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, JugadorPartidosPage_div_36_div_2_div_23_img_1_Template, 1, 1, "img", 45)(2, JugadorPartidosPage_div_36_div_2_div_23_div_2_Template, 2, 0, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3["jugador" + i_r4 + "_foto"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r3["jugador" + i_r4 + "_foto"]);
  }
}
function JugadorPartidosPage_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function JugadorPartidosPage_div_36_div_2_Template_div_click_0_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/partido-detalle", p_r3.id]));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 33)(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 34);
    \u0275\u0275template(14, JugadorPartidosPage_div_36_div_2_ion_icon_14_Template, 1, 0, "ion-icon", 35)(15, JugadorPartidosPage_div_36_div_2_span_15_Template, 2, 1, "span", 36);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "ion-icon", 37);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 38)(22, "div", 39);
    \u0275\u0275template(23, JugadorPartidosPage_div_36_div_2_div_23_Template, 3, 2, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 41);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 9, p_r3.fecha, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, \u0275\u0275pipeBind2(8, 12, p_r3.fecha, "MMM")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.club_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !p_r3.cancha_icono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.cancha_icono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.cancha_nombre || "Cancha por asignar");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r3.hora_inicio.slice(0, 5), " HRS");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(17, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isMatchComplete(p_r3) ? "Completo" : "Faltan " + ctx_r0.getMissingPlayersCount(p_r3), " ");
  }
}
function JugadorPartidosPage_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, JugadorPartidosPage_div_36_div_1_Template, 2, 0, "div", 25)(2, JugadorPartidosPage_div_36_div_2_Template, 26, 18, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.proximos.length === 0 && !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.proximos);
  }
}
function JugadorPartidosPage_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " No tienes partidos pendientes de resultado. ");
    \u0275\u0275elementEnd();
  }
}
function JugadorPartidosPage_div_37_div_2_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 42);
  }
}
function JugadorPartidosPage_div_37_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6.cancha_icono);
  }
}
function JugadorPartidosPage_div_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 29)(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 33)(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 34);
    \u0275\u0275template(14, JugadorPartidosPage_div_37_div_2_ion_icon_14_Template, 1, 0, "ion-icon", 35)(15, JugadorPartidosPage_div_37_div_2_span_15_Template, 2, 1, "span", 36);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "ion-icon", 37);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 38)(22, "div", 52)(23, "ion-button", 53);
    \u0275\u0275listener("click", function JugadorPartidosPage_div_37_div_2_Template_ion_button_click_23_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openResultModal(p_r6));
    });
    \u0275\u0275text(24, " REGISTRAR RESULTADO ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 7, p_r6.fecha, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, \u0275\u0275pipeBind2(8, 10, p_r6.fecha, "MMM")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r6.club_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !p_r6.cancha_icono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r6.cancha_icono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.cancha_nombre || "Cancha por asignar");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r6.hora_inicio.slice(0, 5), " HRS");
  }
}
function JugadorPartidosPage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, JugadorPartidosPage_div_37_div_1_Template, 2, 0, "div", 25)(2, JugadorPartidosPage_div_37_div_2_Template, 25, 15, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendientes.length === 0 && !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.pendientes);
  }
}
function JugadorPartidosPage_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " A\xFAn no tienes historial de partidos ");
    \u0275\u0275elementEnd();
  }
}
function JugadorPartidosPage_div_38_div_2_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 42);
  }
}
function JugadorPartidosPage_div_38_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.cancha_icono);
  }
}
function JugadorPartidosPage_div_38_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.marcador);
  }
}
function JugadorPartidosPage_div_38_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "ion-button", 60);
    \u0275\u0275listener("click", function JugadorPartidosPage_div_38_div_2_div_23_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openResultModal(p_r7));
    });
    \u0275\u0275text(2, "Ingresar Resultado");
    \u0275\u0275elementEnd()();
  }
}
function JugadorPartidosPage_div_38_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("win", ctx_r0.isWinner(p_r7))("loss", !ctx_r0.isWinner(p_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isWinner(p_r7) ? "Victoria" : "Derrota", " ");
  }
}
function JugadorPartidosPage_div_38_div_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, " Sin resultado ");
    \u0275\u0275elementEnd();
  }
}
function JugadorPartidosPage_div_38_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 29)(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 33)(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 34);
    \u0275\u0275template(14, JugadorPartidosPage_div_38_div_2_ion_icon_14_Template, 1, 0, "ion-icon", 35)(15, JugadorPartidosPage_div_38_div_2_span_15_Template, 2, 1, "span", 36);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "ion-icon", 55);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 38);
    \u0275\u0275template(22, JugadorPartidosPage_div_38_div_2_div_22_Template, 3, 1, "div", 56)(23, JugadorPartidosPage_div_38_div_2_div_23_Template, 3, 0, "div", 56)(24, JugadorPartidosPage_div_38_div_2_div_24_Template, 2, 5, "div", 57)(25, JugadorPartidosPage_div_38_div_2_div_25_Template, 2, 0, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 11, p_r7.fecha, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 17, \u0275\u0275pipeBind2(8, 14, p_r7.fecha, "MMM")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r7.club_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !p_r7.cancha_icono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.cancha_icono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.cancha_nombre || "Cancha por asignar");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.categoria || "Open");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r7.marcador);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r7.marcador);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.marcador);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r7.marcador);
  }
}
function JugadorPartidosPage_div_38_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "button", 63);
    \u0275\u0275listener("click", function JugadorPartidosPage_div_38_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275element(2, "ion-icon", 21);
    \u0275\u0275text(3, " ANTERIOR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 66);
    \u0275\u0275text(8, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 68);
    \u0275\u0275listener("click", function JugadorPartidosPage_div_38_div_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(12, " SIGUIENTE ");
    \u0275\u0275element(13, "ion-icon", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.currentPage);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
function JugadorPartidosPage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, JugadorPartidosPage_div_38_div_1_Template, 2, 0, "div", 25)(2, JugadorPartidosPage_div_38_div_2_Template, 26, 19, "div", 50)(3, JugadorPartidosPage_div_38_div_3_Template, 14, 4, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatedJugados.length === 0 && !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.paginatedJugados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages > 1);
  }
}
function JugadorPartidosPage_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "h2");
    \u0275\u0275text(3, "Registrar Marcador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 72);
    \u0275\u0275listener("click", function JugadorPartidosPage_ng_template_40_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showResultModal = false);
    });
    \u0275\u0275element(5, "ion-icon", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 74)(7, "div", 75)(8, "label");
    \u0275\u0275text(9, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 76)(11, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorPartidosPage_ng_template_40_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.categoria, $event) || (ctx_r0.categoria = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 78);
    \u0275\u0275text(13, "Amistoso (Pr\xE1ctica)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 79);
    \u0275\u0275text(15, "Iniciaci\xF3n (Principiante)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 80);
    \u0275\u0275text(17, "Intermedio (Amateur)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 81);
    \u0275\u0275text(19, "Competitivo (Avanzado)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 82);
    \u0275\u0275text(21, "Open (Libre / Pro)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "ion-icon", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 84)(24, "div", 85);
    \u0275\u0275element(25, "div", 86);
    \u0275\u0275elementStart(26, "div", 87);
    \u0275\u0275text(27, "S1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 87);
    \u0275\u0275text(29, "S2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 87);
    \u0275\u0275text(31, "S3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 88)(33, "div", 89);
    \u0275\u0275text(34, "T\xFA / Eq.1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 90)(36, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorPartidosPage_ng_template_40_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.set1A, $event) || (ctx_r0.set1A = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 90)(38, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorPartidosPage_ng_template_40_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.set2A, $event) || (ctx_r0.set2A = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 90)(40, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorPartidosPage_ng_template_40_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.set3A, $event) || (ctx_r0.set3A = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 92)(42, "div", 89);
    \u0275\u0275text(43, "Rivales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 90)(45, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorPartidosPage_ng_template_40_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.set1B, $event) || (ctx_r0.set1B = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 90)(47, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorPartidosPage_ng_template_40_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.set2B, $event) || (ctx_r0.set2B = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 90)(49, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorPartidosPage_ng_template_40_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.set3B, $event) || (ctx_r0.set3B = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "div", 93)(51, "button", 94);
    \u0275\u0275listener("click", function JugadorPartidosPage_ng_template_40_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveResult());
    });
    \u0275\u0275text(52, " GUARDAR RESULTADO ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.categoria);
    \u0275\u0275advance(25);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.set1A);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.set2A);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.set3A);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.set1B);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.set2B);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.set3B);
  }
}
var _JugadorPartidosPage = class _JugadorPartidosPage {
  constructor(mysqlService, router, alertCtrl, toastCtrl, loadingCtrl, navCtrl) {
    this.mysqlService = mysqlService;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.navCtrl = navCtrl;
    this.partidos = [];
    this.jugados = [];
    this.proximos = [];
    this.pendientes = [];
    this.loading = true;
    this.userId = Number(localStorage.getItem("userId"));
    this.totalJugados = 0;
    this.victorias = 0;
    this.derrotas = 0;
    this.categoriaMasJugada = "N/A";
    this.selectedTab = "proximos";
    this.filterClub = "";
    this.filterCategoria = "";
    this.filterFecha = "";
    this.clubesList = [];
    this.showResultModal = false;
    this.showDetailModal = false;
    this.selectedMatch = null;
    this.categoria = "";
    this.set1A = null;
    this.set1B = null;
    this.set2A = null;
    this.set2B = null;
    this.set3A = null;
    this.set3B = null;
    this.paginatedJugados = [];
    this.currentPage = 1;
    this.pageSize = 5;
    this.totalPages = 1;
    this.idGanador = null;
    this.showSearchModal = false;
    this.playerSearchTerm = "";
    this.playerResults = [];
    this.activeSlot = 2;
    this.fotoPerfil = "";
    addIcons({
      arrowBack,
      trophyOutline,
      calendarOutline,
      locationOutline,
      checkmarkCircleOutline,
      addOutline,
      barChartOutline,
      chevronForward,
      sparklesOutline,
      peopleOutline,
      lockClosedOutline,
      checkmarkCircle,
      ellipsisVertical,
      shareOutline,
      pencilOutline,
      ribbon,
      calendarClearOutline,
      ellipsisHorizontal,
      add,
      chevronDown,
      personAddOutline,
      closeOutline,
      timeOutline
    });
  }
  ngOnInit() {
    this.loadPartidos();
  }
  loadPartidos(event) {
    this.loading = true;
    this.mysqlService.getMisPartidos().subscribe({
      next: (res) => {
        this.partidos = (res || []).filter((p) => p.estado !== "Cancelada" && p.estado !== "Cancelado");
        this.updateLists();
        this.calculateStats();
        const cMap = /* @__PURE__ */ new Map();
        res.forEach((p) => {
          if (p.club_id && !cMap.has(p.club_id)) {
            cMap.set(p.club_id, p.club_nombre);
          }
        });
        this.clubesList = Array.from(cMap.entries()).map(([id, nombre]) => ({ id, nombre }));
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading matches:", err);
        this.loading = false;
      }
    });
    this.mysqlService.getPerfil(this.userId).subscribe((res) => {
      if (res.success && res.user.foto_perfil) {
        this.fotoPerfil = this.getProfileImage(res.user.foto_perfil);
      }
    });
  }
  getProfileImage(url) {
    if (!url || url === "null")
      return "assets/avatar.png";
    if (url.startsWith("http"))
      return url;
    const cleanApiUrl = environment.apiUrl.replace("/dev", "").replace("/prd", "").replace("/torneos", "");
    return `${cleanApiUrl}/prd/${url}`;
  }
  updateLists() {
    this.proximos = this.partidos.filter((p) => !p.jugado).sort((a, b) => a.fecha.localeCompare(b.fecha));
    const now = /* @__PURE__ */ new Date();
    let tempJugados = [];
    this.pendientes = [];
    this.partidos.filter((p) => p.jugado).forEach((p) => {
      if (!p.resultado_registrado) {
        const matchDateStr = p.fecha + "T" + (p.hora_fin || "00:00:00");
        const matchDate = new Date(matchDateStr);
        const diffDays = (now.getTime() - matchDate.getTime()) / (1e3 * 3600 * 24);
        if (diffDays <= 2) {
          this.pendientes.push(p);
        } else {
          tempJugados.push(p);
        }
      } else {
        tempJugados.push(p);
      }
    });
    this.pendientes.sort((a, b) => b.fecha.localeCompare(a.fecha));
    tempJugados.sort((a, b) => b.fecha.localeCompare(a.fecha));
    this.jugados = tempJugados;
    if (this.filterClub) {
      this.jugados = this.jugados.filter((p) => p.club_id == this.filterClub);
    }
    if (this.filterCategoria) {
      this.jugados = this.jugados.filter((p) => p.categoria === this.filterCategoria);
    }
    if (this.filterFecha) {
      this.jugados = this.jugados.filter((p) => p.fecha === this.filterFecha);
    }
    this.totalPages = Math.ceil(this.jugados.length / this.pageSize);
    this.paginate();
  }
  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedJugados = this.jugados.slice(start, end);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }
  calculateStats() {
    this.totalJugados = this.jugados.length;
    this.victorias = this.jugados.filter((p) => p.id_ganador && (p.id_ganador == 1 && (p.usuario_id == this.userId || p.jugador2_id == this.userId) || p.id_ganador == 2 && (p.jugador3_id == this.userId || p.jugador4_id == this.userId))).length;
    this.derrotas = this.jugados.filter((p) => p.resultado_registrado && !this.isWinner(p)).length;
    const cats = this.jugados.filter((p) => p.categoria).map((p) => p.categoria);
    if (cats.length > 0) {
      const counts = {};
      cats.forEach((c) => counts[c] = (counts[c] || 0) + 1);
      this.categoriaMasJugada = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    } else {
      this.categoriaMasJugada = "N/A";
    }
  }
  isWinner(p) {
    if (!p.id_ganador)
      return false;
    const isTeam1 = p.usuario_id == this.userId || p.jugador2_id == this.userId;
    const isTeam2 = p.jugador3_id == this.userId || p.jugador4_id == this.userId;
    return p.id_ganador == 1 && isTeam1 || p.id_ganador == 2 && isTeam2;
  }
  openResultModal(match) {
    this.selectedMatch = match;
    this.categoria = match.categoria || "Amistoso";
    this.set1A = null;
    this.set1B = null;
    this.set2A = null;
    this.set2B = null;
    this.set3A = null;
    this.set3B = null;
    this.idGanador = null;
    this.showResultModal = true;
  }
  openMatchDetail(match) {
    this.selectedMatch = match;
    this.categoria = match.categoria || "Todos";
    this.showDetailModal = true;
  }
  goToReservar() {
    return __async(this, null, function* () {
      this.navCtrl.navigateForward("/clubes-reservar");
    });
  }
  isMatchComplete(p) {
    return !!(p.jugador1_id && p.jugador2_id && p.jugador3_id && p.jugador4_id);
  }
  getMissingPlayersCount(p) {
    let count = 0;
    if (!p.jugador2_id)
      count++;
    if (!p.jugador3_id)
      count++;
    if (!p.jugador4_id)
      count++;
    return count;
  }
  isUserWinner(p) {
    if (!p.resultado_registrado || !p.id_ganador)
      return false;
    return p.id_ganador === 1;
  }
  shareMatch() {
    return __async(this, null, function* () {
      if (!this.selectedMatch)
        return;
      const text = `\xA1Mira mi pr\xF3ximo partido de P\xE1del! \u{1F3BE}
\u{1F4C5} ${this.selectedMatch.fecha}
\u{1F552} ${this.selectedMatch.hora_inicio}
\u{1F4CD} En Training Padel Academy`;
      if (navigator.share) {
        try {
          yield navigator.share({
            title: "Partido de P\xE1del",
            text,
            url: window.location.href
          });
        } catch (err) {
          console.log("Error sharing:", err);
        }
      } else {
        const toast = yield this.toastCtrl.create({
          message: "Copiado al portapapeles",
          duration: 2e3,
          position: "top"
        });
        toast.present();
      }
    });
  }
  updateGanadorManual() {
    let winsA = 0;
    let winsB = 0;
    if (this.set1A !== null && this.set1B !== null) {
      if (this.set1A > this.set1B)
        winsA++;
      else if (this.set1B > this.set1A)
        winsB++;
    }
    if (this.set2A !== null && this.set2B !== null) {
      if (this.set2A > this.set2B)
        winsA++;
      else if (this.set2B > this.set2A)
        winsB++;
    }
    if (this.set3A !== null && this.set3B !== null) {
      if (this.set3A > this.set3B)
        winsA++;
      else if (this.set3B > this.set3A)
        winsB++;
    }
    if (winsA > winsB)
      this.idGanador = 1;
    else if (winsB > winsA)
      this.idGanador = 2;
    else
      this.idGanador = null;
  }
  saveResult() {
    return __async(this, null, function* () {
      this.updateGanadorManual();
      if (this.set1A === null || this.set1B === null || !this.categoria || !this.idGanador) {
        const toast = yield this.toastCtrl.create({
          message: "Al menos el primer set y la categor\xEDa son obligatorios",
          duration: 2e3,
          position: "top",
          color: "warning"
        });
        toast.present();
        return;
      }
      const loader = yield this.loadingCtrl.create({ message: "Guardando marcador..." });
      yield loader.present();
      let marcadorStr = `${this.set1A}-${this.set1B}`;
      if (this.set2A !== null && this.set2B !== null)
        marcadorStr += ` ${this.set2A}-${this.set2B}`;
      if (this.set3A !== null && this.set3B !== null)
        marcadorStr += ` ${this.set3A}-${this.set3B}`;
      const payload = {
        reserva_id: this.selectedMatch.id,
        marcador: marcadorStr,
        categoria: this.categoria,
        id_ganador: this.idGanador
      };
      this.mysqlService.saveMatchResult(payload).subscribe({
        next: () => {
          loader.dismiss();
          this.showResultModal = false;
          this.loadPartidos();
          this.showSuccessToast(this.idGanador === 1);
        },
        error: (err) => {
          loader.dismiss();
          console.error("Error saving result:", err);
        }
      });
    });
  }
  showSuccessToast(won = true) {
    return __async(this, null, function* () {
      const title = won ? "\xA1VICTORIA! \u{1F3C6}" : "\xA1A SEGUIR ENTRENANDO! \u{1F4AA}";
      const msg = won ? "\xA1Felicitaciones! Has sumado puntos importantes a tu historial." : "\xA1\xC1nimo! Registraste el partido, a prepararse para la revancha.";
      const alert = yield this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: [{
          text: "Continuar",
          role: "confirm",
          cssClass: won ? "btn-success-alert" : "btn-dark-alert"
        }],
        cssClass: "premium-feedback-alert"
      });
      yield alert.present();
    });
  }
  goBack() {
    const role = localStorage.getItem("userRole");
    if (role === "entrenador") {
      this.router.navigate(["/entrenador-home"]);
    } else {
      this.router.navigate(["/jugador-home"]);
    }
  }
  // PLAYER SEARCH LOGIC
  openSearch(slot) {
    this.activeSlot = slot;
    this.playerSearchTerm = "";
    this.playerResults = [];
    this.showSearchModal = true;
  }
  onPlayerSearch() {
    if (this.playerSearchTerm.length < 3) {
      this.playerResults = [];
      return;
    }
    this.mysqlService.getUsuarios(this.playerSearchTerm).subscribe((res) => {
      this.playerResults = res.filter((u) => u.id != this.userId);
    });
  }
  selectPlayer(player) {
    return __async(this, null, function* () {
      const loader = yield this.loadingCtrl.create({ message: "Agregando jugador..." });
      yield loader.present();
      const payload = __spreadValues({}, this.selectedMatch);
      payload[`jugador${this.activeSlot}_id`] = player.id;
      this.mysqlService.updateReserva(payload).subscribe({
        next: () => {
          loader.dismiss();
          this.showSearchModal = false;
          this.loadPartidos();
          const updated = this.partidos.find((p) => p.id === this.selectedMatch.id);
          if (updated)
            this.selectedMatch = updated;
          this.toastCtrl.create({
            message: `${player.nombre} agregado al partido`,
            duration: 2e3,
            color: "success"
          }).then((t) => t.present());
        },
        error: (err) => {
          loader.dismiss();
          console.error("Error updating player:", err);
        }
      });
    });
  }
};
_JugadorPartidosPage.\u0275fac = function JugadorPartidosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JugadorPartidosPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(NavController));
};
_JugadorPartidosPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JugadorPartidosPage, selectors: [["app-jugador-partidos"]], decls: 43, vars: 19, consts: [[3, "fullscreen"], [1, "stats-hero"], [1, "hero-bg-image"], ["src", "assets/fondo-cancha.png", "alt", "Padel Background"], [1, "hero-overlay"], [1, "hero-content"], [1, "page-title"], [1, "stats-grid"], [1, "stat-card"], [1, "s-val"], [1, "s-lbl"], [1, "stat-card", "highlight"], [1, "nike-tabs-container"], [1, "nike-tabs-row"], [1, "tab-item", 3, "click"], ["class", "tab-badge", 4, "ngIf"], ["class", "tab-badge", "style", "background: #ef4444;", 4, "ngIf"], [1, "matches-list"], ["class", "animate-up", 4, "ngIf"], [1, "premium-result-modal", 3, "didDismiss", "isOpen"], [1, "fab-back-v8", 3, "click"], ["name", "chevron-back-outline"], [1, "tab-badge"], [1, "tab-badge", 2, "background", "#ef4444"], [1, "animate-up"], ["style", "text-align: center; padding: 40px; color: #8e8e93;", 4, "ngIf"], ["class", "match-card-v8", 3, "click", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "padding", "40px", "color", "#8e8e93"], [1, "match-card-v8", 3, "click"], [1, "m-header"], [1, "m-date"], [1, "d-num"], [1, "d-mon"], [1, "m-info"], [1, "m-meta"], ["name", "location-outline", 4, "ngIf"], ["style", "font-size: 13px; margin-right: 2px;", 4, "ngIf"], ["name", "time-outline", 2, "margin-left", "10px"], [1, "m-footer"], [1, "player-stack"], ["class", "p-avatar", 4, "ngFor", "ngForOf"], [1, "status-badge"], ["name", "location-outline"], [2, "font-size", "13px", "margin-right", "2px"], [1, "p-avatar"], [3, "src", 4, "ngIf"], ["class", "p-avatar placeholder", 4, "ngIf"], [3, "src"], [1, "p-avatar", "placeholder"], ["name", "add"], ["class", "match-card-v8", 4, "ngFor", "ngForOf"], [1, "match-card-v8"], [1, "player-stack", 2, "flex", "1"], ["size", "small", "fill", "solid", 2, "--background", "#ccff00", "--color", "#0f172a", "font-weight", "900", "--border-radius", "8px", "margin", "0", "width", "100%", "box-shadow", "none", 3, "click"], ["class", "pagination-pills-container", 4, "ngIf"], ["name", "trophy-outline", 2, "margin-left", "10px"], ["class", "player-stack", 4, "ngIf"], ["class", "status-badge", 3, "win", "loss", 4, "ngIf"], ["class", "status-badge", "style", "background: #eee; color: #888;", 4, "ngIf"], [2, "font-size", "14px", "font-weight", "950", "color", "#000"], ["size", "small", "fill", "clear", 2, "--color", "#000", "font-weight", "700", "--padding-start", "0", "margin", "0", "height", "25px", 3, "click"], [1, "status-badge", 2, "background", "#eee", "color", "#888"], [1, "pagination-pills-container"], [1, "page-pill", "prev", 3, "click", "disabled"], [1, "page-indicator"], [1, "current"], [1, "divider"], [1, "total"], [1, "page-pill", "next", 3, "click", "disabled"], ["name", "chevron-forward-outline"], [1, "result-modal-container"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["name", "close-outline"], [1, "modal-body"], [1, "category-selector"], [1, "select-wrapper"], [3, "ngModelChange", "ngModel"], ["value", "Amistoso"], ["value", "Iniciacion"], ["value", "Intermedio"], ["value", "Competitivo"], ["value", "Open"], ["name", "chevron-down-outline"], [1, "scoreboard-container"], [1, "sb-header-row"], [1, "sb-col", "empty"], [1, "sb-col"], [1, "sb-row"], [1, "team-label"], [1, "score-input"], ["type", "number", "placeholder", "-", 3, "ngModelChange", "ngModel"], [1, "sb-row", "mt-3"], [1, "modal-footer"], [1, "btn-save-result", 3, "click"]], template: function JugadorPartidosPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3)(4, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "h1", 6);
    \u0275\u0275text(7, "MIS PARTIDOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13, "PARTIDOS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "span", 9);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 10);
    \u0275\u0275text(18, "VICTORIAS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 8)(20, "span", 9);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 10);
    \u0275\u0275text(24, "EFICIENCIA");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "div", 12)(26, "div", 13)(27, "div", 14);
    \u0275\u0275listener("click", function JugadorPartidosPage_Template_div_click_27_listener() {
      return ctx.selectedTab = "proximos";
    });
    \u0275\u0275text(28, " PR\xD3XIMOS ");
    \u0275\u0275template(29, JugadorPartidosPage_div_29_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 14);
    \u0275\u0275listener("click", function JugadorPartidosPage_Template_div_click_30_listener() {
      return ctx.selectedTab = "pendientes";
    });
    \u0275\u0275text(31, " EVALUAR ");
    \u0275\u0275template(32, JugadorPartidosPage_div_32_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 14);
    \u0275\u0275listener("click", function JugadorPartidosPage_Template_div_click_33_listener() {
      return ctx.selectedTab = "historial";
    });
    \u0275\u0275text(34, " HISTORIAL ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 17);
    \u0275\u0275template(36, JugadorPartidosPage_div_36_Template, 3, 2, "div", 18)(37, JugadorPartidosPage_div_37_Template, 3, 2, "div", 18)(38, JugadorPartidosPage_div_38_Template, 4, 3, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ion-modal", 19);
    \u0275\u0275listener("didDismiss", function JugadorPartidosPage_Template_ion_modal_didDismiss_39_listener() {
      return ctx.showResultModal = false;
    });
    \u0275\u0275template(40, JugadorPartidosPage_ng_template_40_Template, 53, 7, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 20);
    \u0275\u0275listener("click", function JugadorPartidosPage_Template_div_click_41_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(42, "ion-icon", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.totalJugados);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.victorias);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx.victorias > 0 ? \u0275\u0275pipeBind2(22, 16, ctx.victorias / ctx.totalJugados * 100, "1.0-0") : 0, "%");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx.selectedTab === "proximos");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.proximos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.selectedTab === "pendientes");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.pendientes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.selectedTab === "historial");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.selectedTab === "proximos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTab === "pendientes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTab === "historial");
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showResultModal);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  IonContent,
  IonIcon,
  IonButton,
  IonModal,
  UpperCasePipe,
  DecimalPipe,
  DatePipe
], styles: ['\n\n[_nghost-%COMP%] {\n  --nike-black: #000000;\n  --nike-white: #ffffff;\n  --nike-gray: #f8f8fa;\n  --nike-text-gray: #8e8e93;\n  --nike-neon: #ccff00;\n  --nike-border: #f1f1f7;\n  --nike-navy: #0f172a;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: var(--nike-black);\n  font-family: "Outfit", sans-serif;\n}\n.stats-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 25px 40px;\n  background: var(--nike-navy);\n  color: white;\n  overflow: hidden;\n}\n.stats-hero[_ngcontent-%COMP%]   .hero-bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0.2;\n}\n.stats-hero[_ngcontent-%COMP%]   .hero-bg-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.stats-hero[_ngcontent-%COMP%]   .hero-bg-image[_ngcontent-%COMP%]   .hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      var(--nike-navy));\n}\n.stats-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n}\n.stats-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 950;\n  letter-spacing: -1.5px;\n  margin: 0 0 30px;\n  text-transform: uppercase;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 15px;\n  margin-bottom: 30px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 15px;\n  border-radius: 20px;\n  text-align: center;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .s-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  color: white;\n  display: block;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .s-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n  margin-top: 5px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card.highlight[_ngcontent-%COMP%] {\n  background: var(--nike-neon);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card.highlight[_ngcontent-%COMP%]   .s-val[_ngcontent-%COMP%], \n.stats-grid[_ngcontent-%COMP%]   .stat-card.highlight[_ngcontent-%COMP%]   .s-lbl[_ngcontent-%COMP%] {\n  color: var(--nike-navy);\n}\n.nike-tabs-container[_ngcontent-%COMP%] {\n  padding: 25px 20px 10px;\n  background: white;\n  margin-top: -30px;\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: relative;\n  z-index: 10;\n}\n.nike-tabs-container[_ngcontent-%COMP%]   .nike-tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--nike-border);\n  gap: 5px;\n}\n.nike-tabs-container[_ngcontent-%COMP%]   .nike-tabs-row[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 0;\n  font-size: 12px;\n  font-weight: 900;\n  color: var(--nike-text-gray);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.nike-tabs-container[_ngcontent-%COMP%]   .nike-tabs-row[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%] {\n  color: var(--nike-navy);\n}\n.nike-tabs-container[_ngcontent-%COMP%]   .nike-tabs-row[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 15%;\n  width: 70%;\n  height: 3px;\n  background: var(--nike-navy);\n  border-radius: 3px 3px 0 0;\n}\n.nike-tabs-container[_ngcontent-%COMP%]   .nike-tabs-row[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: white;\n  font-size: 10px;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 12px;\n  min-width: 18px;\n  display: flex;\n  justify-content: center;\n}\n.matches-list[_ngcontent-%COMP%] {\n  padding: 10px 25px 120px;\n}\n.match-card-v8[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 22px;\n  margin-bottom: 20px;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 20px;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-date[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 60px;\n  background: var(--nike-gray);\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-date[_ngcontent-%COMP%]   .d-num[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-date[_ngcontent-%COMP%]   .d-mon[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  color: var(--nike-text-gray);\n  text-transform: uppercase;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--nike-navy);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-info[_ngcontent-%COMP%]   .m-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--nike-text-gray);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-info[_ngcontent-%COMP%]   .m-meta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 18px;\n  border-top: 1px solid var(--nike-border);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .player-stack[_ngcontent-%COMP%] {\n  display: flex;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .player-stack[_ngcontent-%COMP%]   .p-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  margin-right: -10px;\n  background: var(--nike-gray);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .player-stack[_ngcontent-%COMP%]   .p-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .player-stack[_ngcontent-%COMP%]   .p-avatar.placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--nike-text-gray);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  color: #2563eb;\n  background: #eff6ff;\n  padding: 6px 12px;\n  border-radius: 10px;\n  text-transform: uppercase;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .status-badge.win[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .status-badge.loss[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.pagination-pills-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  padding-bottom: 50px;\n}\n.pagination-pills-container[_ngcontent-%COMP%]   .page-pill[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-radius: 14px;\n  padding: 14px 20px;\n  font-size: 11px;\n  font-weight: 950;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  letter-spacing: 0.5px;\n}\n.pagination-pills-container[_ngcontent-%COMP%]   .page-pill[_ngcontent-%COMP%]:disabled {\n  background: var(--nike-gray);\n  color: var(--nike-text-gray);\n  opacity: 0.5;\n}\n.pagination-pills-container[_ngcontent-%COMP%]   .page-pill[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.pagination-pills-container[_ngcontent-%COMP%]   .page-pill[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pagination-pills-container[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-family: "Outfit", sans-serif;\n}\n.pagination-pills-container[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.pagination-pills-container[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n}\n.pagination-pills-container[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 800;\n}\n.fab-back-v8[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 100;\n  width: 60px;\n  height: 60px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  color: black;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_up {\n  from {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.premium-result-modal[_ngcontent-%COMP%] {\n  --height: auto;\n  --max-height: 90vh;\n  --border-radius: 24px 24px 0 0;\n  align-items: flex-end;\n  --modal-bg: #f8f8fa;\n  --modal-white: #ffffff;\n  --modal-text-dark: #0f172a;\n  --modal-text-gray: #8e8e93;\n  --modal-border: #e2e8f0;\n  --modal-input-bg: #f1f5f9;\n  --modal-btn-bg: #0f172a;\n  --modal-btn-text: #ccff00;\n}\n.result-modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  min-height: 50vh;\n  display: flex;\n  flex-direction: column;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 24px 10px;\n  background: var(--modal-white);\n  border-radius: 24px 24px 0 0;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 950;\n  color: var(--modal-text-dark);\n  letter-spacing: -0.5px;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--modal-input-bg);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--modal-text-dark);\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  flex: 1;\n  background: var(--modal-white);\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-selector[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--modal-text-gray);\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-selector[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-selector[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: 1px solid var(--modal-border);\n  border-radius: 16px;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--modal-text-dark);\n  appearance: none;\n  background: var(--modal-input-bg);\n  outline: none;\n  display: block;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-selector[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: var(--modal-text-gray);\n  pointer-events: none;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%] {\n  background: var(--modal-white);\n  border: 1px solid var(--modal-border);\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 15px;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-header-row[_ngcontent-%COMP%]   .sb-col[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--modal-text-gray);\n  text-transform: uppercase;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-header-row[_ngcontent-%COMP%]   .sb-col.empty[_ngcontent-%COMP%] {\n  flex: 1.5;\n  text-align: left;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-row.mt-3[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-row[_ngcontent-%COMP%]   .team-label[_ngcontent-%COMP%] {\n  flex: 1.5;\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--modal-text-dark);\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-row[_ngcontent-%COMP%]   .score-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 4px;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-row[_ngcontent-%COMP%]   .score-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 0;\n  text-align: center;\n  border: 1px solid var(--modal-border);\n  background: var(--modal-input-bg);\n  border-radius: 12px;\n  font-size: 20px;\n  font-weight: 950;\n  color: var(--modal-text-dark);\n  outline: none;\n  transition: all 0.2s ease;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-row[_ngcontent-%COMP%]   .score-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: var(--modal-white);\n  border-color: var(--modal-text-dark);\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .scoreboard-container[_ngcontent-%COMP%]   .sb-row[_ngcontent-%COMP%]   .score-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 24px 30px;\n  background: var(--modal-white);\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-save-result[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px;\n  background: var(--modal-btn-bg);\n  color: var(--modal-btn-text);\n  border: none;\n  border-radius: 16px;\n  font-size: 15px;\n  font-weight: 950;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);\n  transition: transform 0.2s;\n}\n.result-modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-save-result[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=jugador-partidos.page.css.map */'] });
var JugadorPartidosPage = _JugadorPartidosPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JugadorPartidosPage, [{
    type: Component,
    args: [{ selector: "app-jugador-partidos", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonIcon,
      IonButton,
      IonModal
    ], template: `<ion-content [fullscreen]="true">
  
  <div class="stats-hero">
    <div class="hero-bg-image">
       <img src="assets/fondo-cancha.png" alt="Padel Background">
       <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
        <h1 class="page-title">MIS PARTIDOS</h1>
        <div class="stats-grid">
          <div class="stat-card">
            <span class="s-val">{{ totalJugados }}</span>
            <span class="s-lbl">PARTIDOS</span>
          </div>
          <div class="stat-card highlight">
            <span class="s-val">{{ victorias }}</span>
            <span class="s-lbl">VICTORIAS</span>
          </div>
          <div class="stat-card">
            <span class="s-val">{{ victorias > 0 ? (victorias / totalJugados * 100 | number:'1.0-0') : 0 }}%</span>
            <span class="s-lbl">EFICIENCIA</span>
          </div>
        </div>
    </div>
  </div>

  <div class="nike-tabs-container">
    <div class="nike-tabs-row">
      <div class="tab-item" [class.active]="selectedTab === 'proximos'" (click)="selectedTab = 'proximos'">
        PR\xD3XIMOS
        <div class="tab-badge" *ngIf="proximos.length > 0">{{ proximos.length }}</div>
      </div>
      <div class="tab-item" [class.active]="selectedTab === 'pendientes'" (click)="selectedTab = 'pendientes'">
        EVALUAR
        <div class="tab-badge" *ngIf="pendientes.length > 0" style="background: #ef4444;">{{ pendientes.length }}</div>
      </div>
      <div class="tab-item" [class.active]="selectedTab === 'historial'" (click)="selectedTab = 'historial'">
        HISTORIAL
      </div>
    </div>
  </div>

  <div class="matches-list">
    
    <!-- PR\xD3XIMOS -->
    <div *ngIf="selectedTab === 'proximos'" class="animate-up">
      <div *ngIf="proximos.length === 0 && !loading" style="text-align: center; padding: 40px; color: #8e8e93;">
        No tienes partidos programados
      </div>

      <div class="match-card-v8" *ngFor="let p of proximos" (click)="router.navigate(['/partido-detalle', p.id])">
        <div class="m-header">
          <div class="m-date">
            <span class="d-num">{{ p.fecha | date:'dd' }}</span>
            <span class="d-mon">{{ p.fecha | date:'MMM' | uppercase }}</span>
          </div>
          <div class="m-info">
            <h3>{{ p.club_nombre }}</h3>
            <div class="m-meta">
              <ion-icon name="location-outline" *ngIf="!p.cancha_icono"></ion-icon>
              <span *ngIf="p.cancha_icono" style="font-size: 13px; margin-right: 2px;">{{ p.cancha_icono }}</span>
              <span>{{ p.cancha_nombre || 'Cancha por asignar' }}</span>
              <ion-icon name="time-outline" style="margin-left: 10px;"></ion-icon>
              <span>{{ p.hora_inicio.slice(0,5) }} HRS</span>
            </div>
          </div>
        </div>
        <div class="m-footer">
          <div class="player-stack">
            <div class="p-avatar" *ngFor="let i of [1,2,3,4]">
               <img *ngIf="p['jugador' + i + '_foto']" [src]="getProfileImage(p['jugador' + i + '_foto'])">
               <div *ngIf="!p['jugador' + i + '_foto']" class="p-avatar placeholder"><ion-icon name="add"></ion-icon></div>
            </div>
          </div>
          <div class="status-badge">
            {{ isMatchComplete(p) ? 'Completo' : 'Faltan ' + getMissingPlayersCount(p) }}
          </div>
        </div>
      </div>
    </div>

    <!-- POR EVALUAR (PENDIENTES) -->
    <div *ngIf="selectedTab === 'pendientes'" class="animate-up">
      <div *ngIf="pendientes.length === 0 && !loading" style="text-align: center; padding: 40px; color: #8e8e93;">
        No tienes partidos pendientes de resultado.
      </div>

      <div class="match-card-v8" *ngFor="let p of pendientes">
        <div class="m-header">
          <div class="m-date">
            <span class="d-num">{{ p.fecha | date:'dd' }}</span>
            <span class="d-mon">{{ p.fecha | date:'MMM' | uppercase }}</span>
          </div>
          <div class="m-info">
            <h3>{{ p.club_nombre }}</h3>
            <div class="m-meta">
              <ion-icon name="location-outline" *ngIf="!p.cancha_icono"></ion-icon>
              <span *ngIf="p.cancha_icono" style="font-size: 13px; margin-right: 2px;">{{ p.cancha_icono }}</span>
              <span>{{ p.cancha_nombre || 'Cancha por asignar' }}</span>
              <ion-icon name="time-outline" style="margin-left: 10px;"></ion-icon>
              <span>{{ p.hora_inicio.slice(0,5) }} HRS</span>
            </div>
          </div>
        </div>
        <div class="m-footer">
          <div class="player-stack" style="flex: 1;">
             <ion-button size="small" fill="solid" (click)="openResultModal(p)" style="--background: #ccff00; --color: #0f172a; font-weight: 900; --border-radius: 8px; margin: 0; width: 100%; box-shadow: none;">
                REGISTRAR RESULTADO
             </ion-button>
          </div>
        </div>
      </div>
    </div>

    <!-- HISTORIAL -->
    <div *ngIf="selectedTab === 'historial'" class="animate-up">
      <div *ngIf="paginatedJugados.length === 0 && !loading" style="text-align: center; padding: 40px; color: #8e8e93;">
        A\xFAn no tienes historial de partidos
      </div>

      <div class="match-card-v8" *ngFor="let p of paginatedJugados">
        <div class="m-header">
          <div class="m-date">
            <span class="d-num">{{ p.fecha | date:'dd' }}</span>
            <span class="d-mon">{{ p.fecha | date:'MMM' | uppercase }}</span>
          </div>
          <div class="m-info">
            <h3>{{ p.club_nombre }}</h3>
            <div class="m-meta">
              <ion-icon name="location-outline" *ngIf="!p.cancha_icono"></ion-icon>
              <span *ngIf="p.cancha_icono" style="font-size: 13px; margin-right: 2px;">{{ p.cancha_icono }}</span>
              <span>{{ p.cancha_nombre || 'Cancha por asignar' }}</span>
              <ion-icon name="trophy-outline" style="margin-left: 10px;"></ion-icon>
              <span>{{ p.categoria || 'Open' }}</span>
            </div>
          </div>
        </div>
        <div class="m-footer">
          <div class="player-stack" *ngIf="p.marcador">
             <span style="font-size: 14px; font-weight: 950; color: #000;">{{ p.marcador }}</span>
          </div>
          <div class="player-stack" *ngIf="!p.marcador">
             <ion-button size="small" fill="clear" (click)="openResultModal(p)" style="--color: #000; font-weight: 700; --padding-start: 0; margin: 0; height: 25px;">Ingresar Resultado</ion-button>
          </div>
          <div class="status-badge" [class.win]="isWinner(p)" [class.loss]="!isWinner(p)" *ngIf="p.marcador">
            {{ isWinner(p) ? 'Victoria' : 'Derrota' }}
          </div>
          <div class="status-badge" style="background: #eee; color: #888;" *ngIf="!p.marcador">
            Sin resultado
          </div>
        </div>
      </div>

      <!-- PAGINATION CONTROLS (NIKE PREMIUM) -->
      <div class="pagination-pills-container" *ngIf="totalPages > 1">
        <button class="page-pill prev" (click)="prevPage()" [disabled]="currentPage === 1">
          <ion-icon name="chevron-back-outline"></ion-icon>
          ANTERIOR
        </button>
        
        <div class="page-indicator">
          <span class="current">{{ currentPage }}</span>
          <span class="divider">/</span>
          <span class="total">{{ totalPages }}</span>
        </div>

        <button class="page-pill next" (click)="nextPage()" [disabled]="currentPage === totalPages">
          SIGUIENTE
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>

  </div>

  <!-- RESULT MODAL -->
  <ion-modal [isOpen]="showResultModal" (didDismiss)="showResultModal = false" class="premium-result-modal">
    <ng-template>
      <div class="result-modal-container">
        
        <div class="modal-header">
          <h2>Registrar Marcador</h2>
          <div class="close-btn" (click)="showResultModal = false">
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>

        <div class="modal-body">
          <div class="category-selector">
            <label>Categor\xEDa</label>
            <div class="select-wrapper">
              <select [(ngModel)]="categoria">
                <option value="Amistoso">Amistoso (Pr\xE1ctica)</option>
                <option value="Iniciacion">Iniciaci\xF3n (Principiante)</option>
                <option value="Intermedio">Intermedio (Amateur)</option>
                <option value="Competitivo">Competitivo (Avanzado)</option>
                <option value="Open">Open (Libre / Pro)</option>
              </select>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </div>

          <div class="scoreboard-container">
            <div class="sb-header-row">
              <div class="sb-col empty"></div>
              <div class="sb-col">S1</div>
              <div class="sb-col">S2</div>
              <div class="sb-col">S3</div>
            </div>

            <!-- Nosotros -->
            <div class="sb-row">
              <div class="team-label">T\xFA / Eq.1</div>
              <div class="score-input"><input type="number" [(ngModel)]="set1A" placeholder="-"></div>
              <div class="score-input"><input type="number" [(ngModel)]="set2A" placeholder="-"></div>
              <div class="score-input"><input type="number" [(ngModel)]="set3A" placeholder="-"></div>
            </div>

            <!-- Rivales -->
            <div class="sb-row mt-3">
              <div class="team-label">Rivales</div>
              <div class="score-input"><input type="number" [(ngModel)]="set1B" placeholder="-"></div>
              <div class="score-input"><input type="number" [(ngModel)]="set2B" placeholder="-"></div>
              <div class="score-input"><input type="number" [(ngModel)]="set3B" placeholder="-"></div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-save-result" (click)="saveResult()">
            GUARDAR RESULTADO
          </button>
        </div>
      </div>
    </ng-template>
  </ion-modal>

  <!-- FLOATING BACK BUTTON -->
  <div class="fab-back-v8" (click)="goBack()">
    <ion-icon name="chevron-back-outline"></ion-icon>
  </div>

</ion-content>
`, styles: ['/* src/app/pages/jugador-partidos/jugador-partidos.page.scss */\n:host {\n  --nike-black: #000000;\n  --nike-white: #ffffff;\n  --nike-gray: #f8f8fa;\n  --nike-text-gray: #8e8e93;\n  --nike-neon: #ccff00;\n  --nike-border: #f1f1f7;\n  --nike-navy: #0f172a;\n}\nion-content {\n  --background: #fff;\n  --color: var(--nike-black);\n  font-family: "Outfit", sans-serif;\n}\n.stats-hero {\n  position: relative;\n  padding: 60px 25px 40px;\n  background: var(--nike-navy);\n  color: white;\n  overflow: hidden;\n}\n.stats-hero .hero-bg-image {\n  position: absolute;\n  inset: 0;\n  opacity: 0.2;\n}\n.stats-hero .hero-bg-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.stats-hero .hero-bg-image .hero-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      var(--nike-navy));\n}\n.stats-hero .hero-content {\n  position: relative;\n  z-index: 5;\n}\n.stats-hero .hero-content .page-title {\n  font-size: 32px;\n  font-weight: 950;\n  letter-spacing: -1.5px;\n  margin: 0 0 30px;\n  text-transform: uppercase;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 15px;\n  margin-bottom: 30px;\n}\n.stats-grid .stat-card {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 15px;\n  border-radius: 20px;\n  text-align: center;\n}\n.stats-grid .stat-card .s-val {\n  font-size: 22px;\n  font-weight: 950;\n  color: white;\n  display: block;\n}\n.stats-grid .stat-card .s-lbl {\n  font-size: 9px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n  margin-top: 5px;\n}\n.stats-grid .stat-card.highlight {\n  background: var(--nike-neon);\n}\n.stats-grid .stat-card.highlight .s-val,\n.stats-grid .stat-card.highlight .s-lbl {\n  color: var(--nike-navy);\n}\n.nike-tabs-container {\n  padding: 25px 20px 10px;\n  background: white;\n  margin-top: -30px;\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: relative;\n  z-index: 10;\n}\n.nike-tabs-container .nike-tabs-row {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--nike-border);\n  gap: 5px;\n}\n.nike-tabs-container .nike-tabs-row .tab-item {\n  flex: 1;\n  padding: 14px 0;\n  font-size: 12px;\n  font-weight: 900;\n  color: var(--nike-text-gray);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.nike-tabs-container .nike-tabs-row .tab-item.active {\n  color: var(--nike-navy);\n}\n.nike-tabs-container .nike-tabs-row .tab-item.active::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 15%;\n  width: 70%;\n  height: 3px;\n  background: var(--nike-navy);\n  border-radius: 3px 3px 0 0;\n}\n.nike-tabs-container .nike-tabs-row .tab-item .tab-badge {\n  background: var(--nike-navy);\n  color: white;\n  font-size: 10px;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 12px;\n  min-width: 18px;\n  display: flex;\n  justify-content: center;\n}\n.matches-list {\n  padding: 10px 25px 120px;\n}\n.match-card-v8 {\n  background: white;\n  border-radius: 24px;\n  padding: 22px;\n  margin-bottom: 20px;\n  border: 1px solid var(--nike-border);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n}\n.match-card-v8 .m-header {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 20px;\n}\n.match-card-v8 .m-header .m-date {\n  width: 50px;\n  height: 60px;\n  background: var(--nike-gray);\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.match-card-v8 .m-header .m-date .d-num {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.match-card-v8 .m-header .m-date .d-mon {\n  font-size: 9px;\n  font-weight: 800;\n  color: var(--nike-text-gray);\n  text-transform: uppercase;\n}\n.match-card-v8 .m-header .m-info {\n  flex: 1;\n}\n.match-card-v8 .m-header .m-info h3 {\n  margin: 0 0 6px;\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--nike-navy);\n}\n.match-card-v8 .m-header .m-info .m-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--nike-text-gray);\n}\n.match-card-v8 .m-header .m-info .m-meta ion-icon {\n  font-size: 14px;\n}\n.match-card-v8 .m-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 18px;\n  border-top: 1px solid var(--nike-border);\n}\n.match-card-v8 .m-footer .player-stack {\n  display: flex;\n}\n.match-card-v8 .m-footer .player-stack .p-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  margin-right: -10px;\n  background: var(--nike-gray);\n}\n.match-card-v8 .m-footer .player-stack .p-avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.match-card-v8 .m-footer .player-stack .p-avatar.placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--nike-text-gray);\n}\n.match-card-v8 .m-footer .status-badge {\n  font-size: 11px;\n  font-weight: 900;\n  color: #2563eb;\n  background: #eff6ff;\n  padding: 6px 12px;\n  border-radius: 10px;\n  text-transform: uppercase;\n}\n.match-card-v8 .m-footer .status-badge.win {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.match-card-v8 .m-footer .status-badge.loss {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.pagination-pills-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  padding-bottom: 50px;\n}\n.pagination-pills-container .page-pill {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-radius: 14px;\n  padding: 14px 20px;\n  font-size: 11px;\n  font-weight: 950;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  letter-spacing: 0.5px;\n}\n.pagination-pills-container .page-pill:disabled {\n  background: var(--nike-gray);\n  color: var(--nike-text-gray);\n  opacity: 0.5;\n}\n.pagination-pills-container .page-pill:active {\n  transform: scale(0.95);\n}\n.pagination-pills-container .page-pill ion-icon {\n  font-size: 14px;\n}\n.pagination-pills-container .page-indicator {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-family: "Outfit", sans-serif;\n}\n.pagination-pills-container .page-indicator .current {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.pagination-pills-container .page-indicator .divider {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n}\n.pagination-pills-container .page-indicator .total {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 800;\n}\n.fab-back-v8 {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 100;\n  width: 60px;\n  height: 60px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  color: black;\n}\n.animate-up {\n  animation: up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes up {\n  from {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.premium-result-modal {\n  --height: auto;\n  --max-height: 90vh;\n  --border-radius: 24px 24px 0 0;\n  align-items: flex-end;\n  --modal-bg: #f8f8fa;\n  --modal-white: #ffffff;\n  --modal-text-dark: #0f172a;\n  --modal-text-gray: #8e8e93;\n  --modal-border: #e2e8f0;\n  --modal-input-bg: #f1f5f9;\n  --modal-btn-bg: #0f172a;\n  --modal-btn-text: #ccff00;\n}\n.result-modal-container {\n  background: var(--modal-bg);\n  min-height: 50vh;\n  display: flex;\n  flex-direction: column;\n}\n.result-modal-container .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 24px 10px;\n  background: var(--modal-white);\n  border-radius: 24px 24px 0 0;\n}\n.result-modal-container .modal-header h2 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 950;\n  color: var(--modal-text-dark);\n  letter-spacing: -0.5px;\n}\n.result-modal-container .modal-header .close-btn {\n  width: 36px;\n  height: 36px;\n  background: var(--modal-input-bg);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.result-modal-container .modal-header .close-btn ion-icon {\n  font-size: 20px;\n  color: var(--modal-text-dark);\n}\n.result-modal-container .modal-body {\n  padding: 20px 24px;\n  flex: 1;\n  background: var(--modal-white);\n}\n.result-modal-container .modal-body .category-selector {\n  margin-bottom: 25px;\n}\n.result-modal-container .modal-body .category-selector label {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--modal-text-gray);\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.result-modal-container .modal-body .category-selector .select-wrapper {\n  position: relative;\n}\n.result-modal-container .modal-body .category-selector .select-wrapper select {\n  width: 100%;\n  padding: 16px;\n  border: 1px solid var(--modal-border);\n  border-radius: 16px;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--modal-text-dark);\n  appearance: none;\n  background: var(--modal-input-bg);\n  outline: none;\n  display: block;\n}\n.result-modal-container .modal-body .category-selector .select-wrapper ion-icon {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: var(--modal-text-gray);\n  pointer-events: none;\n}\n.result-modal-container .modal-body .scoreboard-container {\n  background: var(--modal-white);\n  border: 1px solid var(--modal-border);\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n}\n.result-modal-container .modal-body .scoreboard-container .sb-header-row {\n  display: flex;\n  margin-bottom: 15px;\n}\n.result-modal-container .modal-body .scoreboard-container .sb-header-row .sb-col {\n  flex: 1;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--modal-text-gray);\n  text-transform: uppercase;\n}\n.result-modal-container .modal-body .scoreboard-container .sb-header-row .sb-col.empty {\n  flex: 1.5;\n  text-align: left;\n}\n.result-modal-container .modal-body .scoreboard-container .sb-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.result-modal-container .modal-body .scoreboard-container .sb-row.mt-3 {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n.result-modal-container .modal-body .scoreboard-container .sb-row .team-label {\n  flex: 1.5;\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--modal-text-dark);\n}\n.result-modal-container .modal-body .scoreboard-container .sb-row .score-input {\n  flex: 1;\n  padding: 0 4px;\n}\n.result-modal-container .modal-body .scoreboard-container .sb-row .score-input input {\n  width: 100%;\n  padding: 12px 0;\n  text-align: center;\n  border: 1px solid var(--modal-border);\n  background: var(--modal-input-bg);\n  border-radius: 12px;\n  font-size: 20px;\n  font-weight: 950;\n  color: var(--modal-text-dark);\n  outline: none;\n  transition: all 0.2s ease;\n}\n.result-modal-container .modal-body .scoreboard-container .sb-row .score-input input:focus {\n  background: var(--modal-white);\n  border-color: var(--modal-text-dark);\n}\n.result-modal-container .modal-body .scoreboard-container .sb-row .score-input input::placeholder {\n  color: #aaa;\n}\n.result-modal-container .modal-footer {\n  padding: 20px 24px 30px;\n  background: var(--modal-white);\n}\n.result-modal-container .modal-footer .btn-save-result {\n  width: 100%;\n  padding: 18px;\n  background: var(--modal-btn-bg);\n  color: var(--modal-btn-text);\n  border: none;\n  border-radius: 16px;\n  font-size: 15px;\n  font-weight: 950;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);\n  transition: transform 0.2s;\n}\n.result-modal-container .modal-footer .btn-save-result:active {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=jugador-partidos.page.css.map */\n'] }]
  }], () => [{ type: MysqlService }, { type: Router }, { type: AlertController }, { type: ToastController }, { type: LoadingController }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JugadorPartidosPage, { className: "JugadorPartidosPage", filePath: "src/app/pages/jugador-partidos/jugador-partidos.page.ts", lineNumber: 35 });
})();
export {
  JugadorPartidosPage
};
//# sourceMappingURL=jugador-partidos.page-LRCNEUUZ.js.map

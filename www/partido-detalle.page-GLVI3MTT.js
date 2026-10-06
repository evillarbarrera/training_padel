import {
  es_default
} from "./chunk-IJINKETP.js";
import {
  AlertController,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonSpinner,
  LoadingController,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  add,
  addIcons,
  checkmarkCircle,
  chevronBackOutline,
  chevronForwardOutline,
  closeOutline,
  informationCircle,
  lockClosedOutline,
  personOutline,
  searchOutline,
  tennisballOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import {
  environment
} from "./chunk-LEH7FWY4.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  NavController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  registerLocaleData,
  setClassMetadata,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/pages/partido-detalle/partido-detalle.page.ts
function PartidoDetallePage_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.match.cancha_icono);
  }
}
function PartidoDetallePage_ion_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 30);
  }
}
function PartidoDetallePage_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind4(2, 3, ctx_r0.match.fecha, "EEEE, d MMMM", "", "es"), " ", ctx_r0.formatTime(ctx_r0.match.hora_inicio), " - ", ctx_r0.formatTime(ctx_r0.match.hora_fin), " ");
  }
}
function PartidoDetallePage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h3");
    \u0275\u0275text(3, "Competitivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "El resultado de este partido afectar\xE1 al nivel");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "ion-icon", 34);
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_div_38_img_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getProfileImage(ctx_r0.match.jugador2_foto), \u0275\u0275sanitizeUrl);
  }
}
function PartidoDetallePage_div_38_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_div_38_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.match.jugador2_nombre);
  }
}
function PartidoDetallePage_div_38_span_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275listener("click", function PartidoDetallePage_div_38_span_16_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openInvite(2));
    });
    \u0275\u0275text(1, "Invitar");
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_div_38_img_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getProfileImage(ctx_r0.match.jugador3_foto), \u0275\u0275sanitizeUrl);
  }
}
function PartidoDetallePage_div_38_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_div_38_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.match.jugador3_nombre);
  }
}
function PartidoDetallePage_div_38_span_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275listener("click", function PartidoDetallePage_div_38_span_26_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openInvite(3));
    });
    \u0275\u0275text(1, "Invitar");
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_div_38_img_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getProfileImage(ctx_r0.match.jugador4_foto), \u0275\u0275sanitizeUrl);
  }
}
function PartidoDetallePage_div_38_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_div_38_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.match.jugador4_nombre);
  }
}
function PartidoDetallePage_div_38_span_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275listener("click", function PartidoDetallePage_div_38_span_32_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openInvite(4));
    });
    \u0275\u0275text(1, "Invitar");
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "div", 39);
    \u0275\u0275element(6, "img", 40);
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275text(8, "2,5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 38)(12, "div", 43);
    \u0275\u0275listener("click", function PartidoDetallePage_div_38_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openInvite(2));
    });
    \u0275\u0275template(13, PartidoDetallePage_div_38_img_13_Template, 1, 1, "img", 44)(14, PartidoDetallePage_div_38_div_14_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PartidoDetallePage_div_38_span_15_Template, 2, 1, "span", 46)(16, PartidoDetallePage_div_38_span_16_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 48);
    \u0275\u0275elementStart(18, "div", 36)(19, "span", 37);
    \u0275\u0275text(20, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 38)(22, "div", 43);
    \u0275\u0275listener("click", function PartidoDetallePage_div_38_Template_div_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openInvite(3));
    });
    \u0275\u0275template(23, PartidoDetallePage_div_38_img_23_Template, 1, 1, "img", 44)(24, PartidoDetallePage_div_38_div_24_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, PartidoDetallePage_div_38_span_25_Template, 2, 1, "span", 46)(26, PartidoDetallePage_div_38_span_26_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 38)(28, "div", 43);
    \u0275\u0275listener("click", function PartidoDetallePage_div_38_Template_div_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openInvite(4));
    });
    \u0275\u0275template(29, PartidoDetallePage_div_38_img_29_Template, 1, 1, "img", 44)(30, PartidoDetallePage_div_38_div_30_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, PartidoDetallePage_div_38_span_31_Template, 2, 1, "span", 46)(32, PartidoDetallePage_div_38_span_32_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r0.getProfileImage(ctx_r0.match.jugador1_foto), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.match.jugador1_nombre || "T\xFA");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.match.jugador2_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.match.jugador2_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.match.jugador2_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.match.jugador2_id);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.match.jugador3_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.match.jugador3_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.match.jugador3_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.match.jugador3_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.match.jugador4_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.match.jugador4_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.match.jugador4_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.match.jugador4_id);
  }
}
function PartidoDetallePage_div_39_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 55);
    \u0275\u0275listener("click", function PartidoDetallePage_div_39_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmarCancelacion());
    });
    \u0275\u0275text(1, " Cancelar Reserva de Cancha ");
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "ion-icon", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Para cancelar esta cancha debes hacerlo con al menos 12 horas de anticipaci\xF3n. De lo contrario, tendr\xE1s que comunicarte con el club.");
    \u0275\u0275elementEnd()();
  }
}
function PartidoDetallePage_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, PartidoDetallePage_div_39_ion_button_1_Template, 2, 0, "ion-button", 53)(2, PartidoDetallePage_div_39_div_2_Template, 4, 0, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canCancel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.canCancel());
  }
}
function PartidoDetallePage_ng_template_41_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function PartidoDetallePage_ng_template_41_div_10_Template_div_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectPlayer(p_r9));
    });
    \u0275\u0275element(1, "img", 69);
    \u0275\u0275elementStart(2, "div", 70)(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r9.foto_perfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r9.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.rol === "coach" ? "Entrenador" : "Jugador");
    \u0275\u0275advance();
    \u0275\u0275classProp("r-coach", p_r9.rol === "coach");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9.rol === "coach" ? "PRO" : "LVL 2.5", " ");
  }
}
function PartidoDetallePage_ng_template_41_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "ion-spinner", 75);
    \u0275\u0275elementEnd();
  }
}
function PartidoDetallePage_ng_template_41_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275element(2, "ion-icon", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Busca a tu equipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Encuentra jugadores o entrenadores inscritos para unirse al partido.");
    \u0275\u0275elementEnd()();
  }
}
function PartidoDetallePage_ng_template_41_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275element(2, "ion-icon", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sin resultados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1('No pudimos encontrar a "', ctx_r0.playerSearchTerm, '".');
  }
}
function PartidoDetallePage_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "div", 59)(3, "h2");
    \u0275\u0275text(4, "Invitar Jugador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-icon", 60);
    \u0275\u0275listener("click", function PartidoDetallePage_ng_template_41_Template_ion_icon_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showSearchModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61);
    \u0275\u0275element(7, "ion-icon", 62);
    \u0275\u0275elementStart(8, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function PartidoDetallePage_ng_template_41_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.playerSearchTerm, $event) || (ctx_r0.playerSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function PartidoDetallePage_ng_template_41_Template_input_input_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 64);
    \u0275\u0275template(10, PartidoDetallePage_ng_template_41_div_10_Template, 9, 6, "div", 65)(11, PartidoDetallePage_ng_template_41_div_11_Template, 2, 0, "div", 66)(12, PartidoDetallePage_ng_template_41_div_12_Template, 7, 0, "div", 67)(13, PartidoDetallePage_ng_template_41_div_13_Template, 7, 1, "div", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.playerSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.playerResults);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.searching);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.searching && ctx_r0.playerSearchTerm.length < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.searching && ctx_r0.playerSearchTerm.length >= 3 && ctx_r0.playerResults.length === 0);
  }
}
registerLocaleData(es_default);
var _PartidoDetallePage = class _PartidoDetallePage {
  constructor(route, router, mysql, loadingCtrl, toastCtrl, alertCtrl, navCtrl) {
    this.route = route;
    this.router = router;
    this.mysql = mysql;
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.navCtrl = navCtrl;
    this.matchId = null;
    this.match = null;
    this.loading = true;
    this.userId = Number(localStorage.getItem("userId"));
    this.showSearchModal = false;
    this.playerSearchTerm = "";
    this.playerResults = [];
    this.activeSlot = 2;
    this.searching = false;
    addIcons({
      chevronBackOutline,
      tennisballOutline,
      informationCircle,
      lockClosedOutline,
      checkmarkCircle,
      chevronForwardOutline,
      add,
      searchOutline,
      closeOutline,
      personOutline
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.matchId = Number(id);
      this.loadMatch();
    }
  }
  getProfileImage(url) {
    if (!url || url === "null")
      return "assets/avatar.png";
    if (url.startsWith("http"))
      return url;
    const cleanApiUrl = environment.apiUrl.replace("/dev", "").replace("/prd", "").replace("/torneos", "");
    return `${cleanApiUrl}/prd/${url}`;
  }
  loadMatch() {
    return __async(this, null, function* () {
      if (!this.matchId)
        return;
      this.loading = true;
      this.mysql.getMisPartidos().subscribe({
        next: (res) => {
          this.match = res.find((p) => p.id === this.matchId);
          if (!this.match) {
            this.match = {
              id: this.matchId,
              fecha: /* @__PURE__ */ new Date(),
              hora_inicio: "20:30",
              hora_fin: "22:00",
              club_nombre: "Training Padel",
              precio: "5.250"
            };
          }
          this.loading = false;
        },
        error: () => this.loading = false
      });
    });
  }
  formatTime(time) {
    if (!time)
      return "";
    return time.slice(0, 5);
  }
  goBack() {
    this.navCtrl.back();
  }
  openInvite(slot) {
    this.activeSlot = slot;
    this.playerSearchTerm = "";
    this.playerResults = [];
    this.showSearchModal = true;
  }
  onSearch() {
    if (this.playerSearchTerm.length < 3) {
      this.playerResults = [];
      return;
    }
    this.searching = true;
    this.mysql.getUsuarios(this.playerSearchTerm).subscribe({
      next: (res) => {
        this.playerResults = res.filter((u) => u.id != this.userId);
        this.searching = false;
      },
      error: () => this.searching = false
    });
  }
  selectPlayer(player) {
    return __async(this, null, function* () {
      const loader = yield this.loadingCtrl.create({ message: "Agregando al partido..." });
      yield loader.present();
      const payload = __spreadProps(__spreadValues({}, this.match), {
        jugador_id: this.match.usuario_id
        // Important: API uses jugador_id for usuario_id
      });
      payload[`jugador${this.activeSlot}_id`] = player.id;
      this.mysql.updateReserva(payload).subscribe({
        next: () => {
          this.match[`jugador${this.activeSlot}_id`] = player.id;
          this.match[`jugador${this.activeSlot}_nombre`] = player.nombre;
          this.match[`jugador${this.activeSlot}_foto`] = player.foto_perfil;
          loader.dismiss();
          this.showSearchModal = false;
          this.notifyPlayer(player);
          this.toastCtrl.create({
            message: `${player.nombre} agregado al partido`,
            duration: 2e3,
            color: "success",
            position: "top"
          }).then((t) => t.present());
        },
        error: (err) => {
          loader.dismiss();
          console.error("Error updating player:", err);
        }
      });
    });
  }
  notifyPlayer(player) {
    const notification = {
      user_id: player.id,
      titulo: "\xA1Has sido invitado!",
      mensaje: `Has sido agregado a un partido de P\xE1del para el ${this.match.fecha} a las ${this.formatTime(this.match.hora_inicio)}.`,
      data: {
        action: "partido-detalle",
        match_id: this.match.id
      }
    };
    this.mysql.enviarNotificacion(notification).subscribe();
  }
  isOwner() {
    return this.match && Number(this.match.usuario_id) === this.userId;
  }
  canCancel() {
    if (!this.match || !this.match.fecha || !this.match.hora_inicio)
      return false;
    if (!this.isOwner())
      return false;
    try {
      const timeStr = this.match.hora_inicio.includes(":") ? this.match.hora_inicio : "00:00:00";
      const matchDateTime = /* @__PURE__ */ new Date(`${this.match.fecha}T${timeStr}`);
      const now = /* @__PURE__ */ new Date();
      const diffMs = matchDateTime.getTime() - now.getTime();
      const diffHours = diffMs / (1e3 * 60 * 60);
      return diffHours >= 12;
    } catch (e) {
      console.error("Error calculating canCancel:", e);
      return false;
    }
  }
  confirmarCancelacion() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Cancelar Reserva",
        message: "\xBFEst\xE1s seguro de que deseas cancelar la reserva de esta cancha? Esta acci\xF3n no se puede deshacer y liberar\xE1 la pista.",
        buttons: [
          {
            text: "Volver",
            role: "cancel"
          },
          {
            text: "S\xED, Cancelar",
            handler: () => {
              this.ejecutarCancelacion();
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  ejecutarCancelacion() {
    return __async(this, null, function* () {
      if (!this.match || !this.match.id)
        return;
      const loader = yield this.loadingCtrl.create({ message: "Cancelando reserva..." });
      yield loader.present();
      this.mysql.cancelarReservaClub(this.match.id).subscribe({
        next: () => {
          loader.dismiss();
          this.toastCtrl.create({
            message: "Reserva cancelada exitosamente",
            duration: 2e3,
            color: "success",
            position: "top"
          }).then((t) => t.present());
          this.goBack();
        },
        error: (err) => {
          loader.dismiss();
          console.error("Error al cancelar reserva:", err);
          const errMsg = err.error?.error || "No se pudo cancelar la reserva";
          this.alertCtrl.create({
            header: "Error",
            message: errMsg,
            buttons: ["OK"]
          }).then((a) => a.present());
        }
      });
    });
  }
};
_PartidoDetallePage.\u0275fac = function PartidoDetallePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PartidoDetallePage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(NavController));
};
_PartidoDetallePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartidoDetallePage, selectors: [["app-partido-detalle"]], decls: 45, vars: 17, consts: [[3, "fullscreen"], [1, "match-hero-v7"], [1, "main-scroll-container", "animate-up"], [1, "match-main-card"], [1, "status-alert-pill"], ["name", "information-circle"], [1, "match-type-header"], ["style", "font-size: 22px; margin-right: 8px;", 4, "ngIf"], ["name", "tennisball-outline", 4, "ngIf"], ["class", "match-date-full", 4, "ngIf"], [1, "meta-details-row"], [1, "meta-item"], [1, "m-label"], [1, "m-val"], [1, "info-strip-card"], [1, "i-left"], ["name", "lock-closed-outline"], [1, "i-right"], ["name", "checkmark-circle"], ["class", "competitive-card", 4, "ngIf"], [1, "players-section"], [1, "p-header"], ["href", "javascript:void(0)", 1, "edit-link"], ["class", "players-grid-v7", 4, "ngIf"], ["class", "cancellation-card", 4, "ngIf"], [3, "didDismiss", "isOpen"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 2, "margin-bottom", "5px", "margin-right", "15px"], [1, "back-fab-v7", 3, "click"], ["name", "chevron-back-outline"], [2, "font-size", "22px", "margin-right", "8px"], ["name", "tennisball-outline"], [1, "match-date-full"], [1, "competitive-card"], [1, "c-content"], ["name", "chevron-forward-outline"], [1, "players-grid-v7"], [1, "team-column"], [1, "team-label"], [1, "player-slot-v7"], [1, "avatar-wrap"], [3, "src"], [1, "lvl-badge"], [1, "p-name"], [1, "avatar-wrap", 3, "click"], [3, "src", 4, "ngIf"], ["class", "plus-btn", 4, "ngIf"], ["class", "p-name", 4, "ngIf"], ["class", "inv-btn", 3, "click", 4, "ngIf"], [1, "divider-v"], [1, "plus-btn"], ["name", "add"], [1, "inv-btn", 3, "click"], [1, "cancellation-card"], ["expand", "block", "fill", "outline", "color", "danger", "class", "btn-cancel-reserva", 3, "click", 4, "ngIf"], ["class", "cancel-warning-box", 4, "ngIf"], ["expand", "block", "fill", "outline", "color", "danger", 1, "btn-cancel-reserva", 3, "click"], [1, "cancel-warning-box"], [1, "search-modal-container"], [1, "grab-handle"], [1, "s-header"], ["name", "close-outline", 1, "close-btn", 3, "click"], [1, "search-input-wrap"], ["name", "search-outline"], ["type", "text", "placeholder", "Nombre, email o entrenador...", 3, "ngModelChange", "input", "ngModel"], [1, "results-list"], ["class", "res-item animate-up", 3, "click", 4, "ngFor", "ngForOf"], ["style", "text-align: center; padding: 20px;", 4, "ngIf"], ["class", "modal-empty-state animate-up", 4, "ngIf"], [1, "res-item", "animate-up", 3, "click"], [1, "r-avatar", 3, "src"], [1, "r-info"], [1, "r-name"], [1, "r-role"], [1, "r-badge"], [2, "text-align", "center", "padding", "20px"], ["name", "crescent", "color", "dark"], [1, "modal-empty-state", "animate-up"], [1, "empty-icon-circle"], ["name", "person-outline"]], template: function PartidoDetallePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "ion-icon", 5);
    \u0275\u0275text(6, " Est\xE1s inscrito a este partido ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, PartidoDetallePage_span_8_Template, 2, 1, "span", 7)(9, PartidoDetallePage_ion_icon_9_Template, 1, 0, "ion-icon", 8);
    \u0275\u0275elementStart(10, "h2");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, PartidoDetallePage_span_12_Template, 3, 8, "span", 9);
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 11)(20, "span", 12);
    \u0275\u0275text(21, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 13);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 14)(25, "div", 15);
    \u0275\u0275element(26, "ion-icon", 16);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 17);
    \u0275\u0275element(29, "ion-icon", 18);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, PartidoDetallePage_div_31_Template, 7, 0, "div", 19);
    \u0275\u0275elementStart(32, "div", 20)(33, "div", 21)(34, "h2");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "a", 22);
    \u0275\u0275text(37, "Editar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, PartidoDetallePage_div_38_Template, 33, 14, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, PartidoDetallePage_div_39_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ion-modal", 25);
    \u0275\u0275listener("didDismiss", function PartidoDetallePage_Template_ion_modal_didDismiss_40_listener() {
      return ctx.showSearchModal = false;
    });
    \u0275\u0275template(41, PartidoDetallePage_ng_template_41_Template, 14, 5, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ion-fab", 26)(43, "ion-fab-button", 27);
    \u0275\u0275listener("click", function PartidoDetallePage_Template_ion_fab_button_click_43_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(44, "ion-icon", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/fondo-cancha.png)");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.match == null ? null : ctx.match.cancha_icono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.match == null ? null : ctx.match.cancha_icono));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx.match == null ? null : ctx.match.cancha_categoria) && (ctx.match == null ? null : ctx.match.cancha_categoria) !== "cancha_padel" && (ctx.match == null ? null : ctx.match.cancha_categoria) !== "cancha_pickleball" ? (ctx.match == null ? null : ctx.match.cancha_nombre) || "ARRIENDO" : "P\xC1DEL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.match);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx.match == null ? null : ctx.match.cancha_categoria) && (ctx.match == null ? null : ctx.match.cancha_categoria) !== "cancha_padel" && (ctx.match == null ? null : ctx.match.cancha_categoria) !== "cancha_pickleball" ? "Espacio" : "Cancha");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx.match == null ? null : ctx.match.cancha_nombre) || "Por asignar");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", (ctx.match == null ? null : ctx.match.precio) || "5.250");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx.match == null ? null : ctx.match.cancha_categoria) && (ctx.match == null ? null : ctx.match.cancha_categoria) !== "cancha_padel" && (ctx.match == null ? null : ctx.match.cancha_categoria) !== "cancha_pickleball" ? "Arriendo Privado" : "Partido Privado", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx.match == null ? null : ctx.match.cancha_categoria) && (ctx.match == null ? null : ctx.match.cancha_categoria) !== "cancha_padel" && (ctx.match == null ? null : ctx.match.cancha_categoria) !== "cancha_pickleball" ? "Espacio reservado" : "Pista reservada", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.match == null ? null : ctx.match.cancha_categoria) || (ctx.match == null ? null : ctx.match.cancha_categoria) === "cancha_padel" || (ctx.match == null ? null : ctx.match.cancha_categoria) === "cancha_pickleball");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(!(ctx.match == null ? null : ctx.match.cancha_categoria) || (ctx.match == null ? null : ctx.match.cancha_categoria) === "cancha_padel" || (ctx.match == null ? null : ctx.match.cancha_categoria) === "cancha_pickleball" ? "Jugadores" : "Participantes / Acompa\xF1antes");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.match);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isOwner());
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showSearchModal);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IonContent, IonIcon, IonFab, IonFabButton, IonModal, IonSpinner, IonButton, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  --nike-black: #000000;\n  --nike-white: #ffffff;\n  --nike-gray: #f8f8fa;\n  --nike-text-gray: #8e8e93;\n  --nike-neon: #ccff00;\n  --nike-border: #f1f1f7;\n  --nike-navy: #0f172a;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #f4f5f9;\n  --color: var(--nike-black);\n  font-family: "Outfit", sans-serif;\n}\n.match-hero-v7[_ngcontent-%COMP%] {\n  height: 220px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.match-hero-v7[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.4) 0%,\n      transparent 60%);\n}\n.main-scroll-container[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  border-radius: 40px 40px 0 0;\n  background: #f4f5f9;\n  position: relative;\n  z-index: 10;\n  padding: 25px 20px 120px;\n}\n.match-main-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  padding: 30px 25px;\n  margin-bottom: 20px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);\n}\n.match-main-card[_ngcontent-%COMP%]   .status-alert-pill[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  border-radius: 12px;\n  padding: 12px 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 25px;\n  width: 100%;\n}\n.match-main-card[_ngcontent-%COMP%]   .status-alert-pill[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.match-main-card[_ngcontent-%COMP%]   .match-type-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 12px;\n}\n.match-main-card[_ngcontent-%COMP%]   .match-type-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--nike-navy);\n}\n.match-main-card[_ngcontent-%COMP%]   .match-type-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: -1px;\n  color: var(--nike-navy);\n}\n.match-main-card[_ngcontent-%COMP%]   .match-date-full[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  margin-bottom: 25px;\n  display: block;\n}\n.match-main-card[_ngcontent-%COMP%]   .meta-details-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 20px;\n  border-top: 1px solid var(--nike-border);\n}\n.match-main-card[_ngcontent-%COMP%]   .meta-details-row[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.match-main-card[_ngcontent-%COMP%]   .meta-details-row[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .m-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--nike-text-gray);\n  text-transform: uppercase;\n  margin-bottom: 6px;\n  display: block;\n}\n.match-main-card[_ngcontent-%COMP%]   .meta-details-row[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.info-strip-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 18px 25px;\n  margin-bottom: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n}\n.info-strip-card[_ngcontent-%COMP%]   .i-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--nike-navy);\n}\n.info-strip-card[_ngcontent-%COMP%]   .i-left[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.7;\n}\n.info-strip-card[_ngcontent-%COMP%]   .i-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #10b981;\n}\n.info-strip-card[_ngcontent-%COMP%]   .i-right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.competitive-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 22px 25px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n}\n.competitive-card[_ngcontent-%COMP%]   .c-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.competitive-card[_ngcontent-%COMP%]   .c-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 12px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n}\n.competitive-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--nike-text-gray);\n}\n.players-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  padding: 30px 25px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);\n}\n.players-section[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.players-section[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.players-section[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #2563eb;\n  text-decoration: none;\n}\n.players-grid-v7[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1px 1fr;\n  gap: 20px;\n  align-items: stretch;\n}\n.players-grid-v7[_ngcontent-%COMP%]   .divider-v[_ngcontent-%COMP%] {\n  background: var(--nike-border);\n  width: 1px;\n  height: 100%;\n}\n.players-grid-v7[_ngcontent-%COMP%]   .team-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.players-grid-v7[_ngcontent-%COMP%]   .team-column[_ngcontent-%COMP%]   .team-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin-bottom: 15px;\n  display: block;\n}\n.player-slot-v7[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n}\n.player-slot-v7[_ngcontent-%COMP%]   .avatar-wrap[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: var(--nike-gray);\n  border: 2px solid white;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: visible;\n}\n.player-slot-v7[_ngcontent-%COMP%]   .avatar-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.player-slot-v7[_ngcontent-%COMP%]   .avatar-wrap[_ngcontent-%COMP%]   .lvl-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -5px;\n  right: -5px;\n  background: var(--nike-neon);\n  color: var(--nike-navy);\n  font-size: 10px;\n  font-weight: 950;\n  padding: 3px 6px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n.player-slot-v7[_ngcontent-%COMP%]   .avatar-wrap[_ngcontent-%COMP%]   .plus-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 2px dashed #cbd5e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  color: #94a3b8;\n}\n.player-slot-v7[_ngcontent-%COMP%]   .p-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 80px;\n}\n.player-slot-v7[_ngcontent-%COMP%]   .p-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--nike-text-gray);\n}\n.player-slot-v7[_ngcontent-%COMP%]   .inv-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  color: #2563eb;\n  margin-top: -5px;\n}\n.back-fab-v7[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --color: #000000;\n  --border-radius: 50%;\n  --box-shadow: 0 10px 30px rgba(0,0,0,0.15);\n  width: 60px;\n  height: 60px;\n}\n.back-fab-v7[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_up {\n  from {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\nion-modal[_ngcontent-%COMP%] {\n  --border-radius: 40px 40px 0 0;\n  --height: 60%;\n  --background: #ffffff;\n}\n.search-modal-container[_ngcontent-%COMP%] {\n  padding: 15px 25px 30px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.search-modal-container[_ngcontent-%COMP%]   .grab-handle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 0 auto 20px;\n}\n.search-modal-container[_ngcontent-%COMP%]   .s-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-modal-container[_ngcontent-%COMP%]   .s-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  letter-spacing: -0.5px;\n}\n.search-modal-container[_ngcontent-%COMP%]   .s-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--nike-navy);\n  opacity: 0.5;\n}\n.search-modal-container[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%] {\n  background: var(--nike-gray);\n  border-radius: 16px;\n  padding: 12px 18px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  border: 1px solid var(--nike-border);\n}\n.search-modal-container[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--nike-text-gray);\n}\n.search-modal-container[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 700;\n  outline: none;\n  color: var(--nike-navy);\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .res-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px 0;\n  border-bottom: 1px solid var(--nike-border);\n  transition: all 0.2s ease;\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .res-item[_ngcontent-%COMP%]:active {\n  opacity: 0.6;\n  transform: translateX(5px);\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .res-item[_ngcontent-%COMP%]   .r-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid white;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .res-item[_ngcontent-%COMP%]   .r-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .res-item[_ngcontent-%COMP%]   .r-info[_ngcontent-%COMP%]   .r-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  display: block;\n  margin-bottom: 2px;\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .res-item[_ngcontent-%COMP%]   .r-info[_ngcontent-%COMP%]   .r-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n  text-transform: uppercase;\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .res-item[_ngcontent-%COMP%]   .r-badge[_ngcontent-%COMP%] {\n  background: var(--nike-neon);\n  color: var(--nike-navy);\n  font-size: 10px;\n  font-weight: 950;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n.search-modal-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .res-item[_ngcontent-%COMP%]   .r-coach[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n}\n.search-modal-container[_ngcontent-%COMP%]   .modal-empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-modal-container[_ngcontent-%COMP%]   .modal-empty-state[_ngcontent-%COMP%]   .empty-icon-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: var(--nike-gray);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.search-modal-container[_ngcontent-%COMP%]   .modal-empty-state[_ngcontent-%COMP%]   .empty-icon-circle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--nike-text-gray);\n}\n.search-modal-container[_ngcontent-%COMP%]   .modal-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin: 0 0 10px;\n}\n.search-modal-container[_ngcontent-%COMP%]   .modal-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  line-height: 1.5;\n  margin: 0;\n}\n.cancellation-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.cancellation-card[_ngcontent-%COMP%]   .btn-cancel-reserva[_ngcontent-%COMP%] {\n  --border-color: #ef4444;\n  --color: #ef4444;\n  --border-radius: 16px;\n  font-weight: 800;\n  font-size: 14px;\n  text-transform: none;\n  letter-spacing: normal;\n  height: 50px;\n}\n.cancellation-card[_ngcontent-%COMP%]   .cancel-warning-box[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  border: 1px solid #fee2e2;\n  border-radius: 20px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cancellation-card[_ngcontent-%COMP%]   .cancel-warning-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.cancellation-card[_ngcontent-%COMP%]   .cancel-warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  font-weight: 600;\n  color: #991b1b;\n}\n/*# sourceMappingURL=partido-detalle.page.css.map */'] });
var PartidoDetallePage = _PartidoDetallePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartidoDetallePage, [{
    type: Component,
    args: [{ selector: "app-partido-detalle", standalone: true, imports: [CommonModule, FormsModule, IonContent, IonIcon, IonFab, IonFabButton, IonModal, IonSpinner, IonButton], template: `<ion-content [fullscreen]="true">
  
  <!-- HERO HEADER -->
  <div class="match-hero-v7" [style.background-image]="'url(assets/fondo-cancha.png)'"></div>

  <div class="main-scroll-container animate-up">
    
    <!-- MAIN MATCH CARD -->
    <div class="match-main-card">
        <div class="status-alert-pill">
            <ion-icon name="information-circle"></ion-icon>
            Est\xE1s inscrito a este partido
        </div>

        <div class="match-type-header">
            <span style="font-size: 22px; margin-right: 8px;" *ngIf="match?.cancha_icono">{{ match.cancha_icono }}</span>
            <ion-icon name="tennisball-outline" *ngIf="!match?.cancha_icono"></ion-icon>
            <h2>{{ (match?.cancha_categoria && match?.cancha_categoria !== 'cancha_padel' && match?.cancha_categoria !== 'cancha_pickleball') ? (match?.cancha_nombre || 'ARRIENDO') : 'P\xC1DEL' }}</h2>
        </div>
        <span class="match-date-full" *ngIf="match">
            {{ match.fecha | date:'EEEE, d MMMM' : '' : 'es' }} {{ formatTime(match.hora_inicio) }} - {{ formatTime(match.hora_fin) }}
        </span>

        <div class="meta-details-row">
            <div class="meta-item">
                <span class="m-label">{{ (match?.cancha_categoria && match?.cancha_categoria !== 'cancha_padel' && match?.cancha_categoria !== 'cancha_pickleball') ? 'Espacio' : 'Cancha' }}</span>
                <span class="m-val">{{ match?.cancha_nombre || 'Por asignar' }}</span>
            </div>
            <div class="meta-item">
                <span class="m-label">Precio</span>
                <span class="m-val">\${{ match?.precio || '5.250' }}</span>
            </div>
        </div>
    </div>

    <!-- STATUS STRIPS -->
    <div class="info-strip-card">
        <div class="i-left">
            <ion-icon name="lock-closed-outline"></ion-icon>
            {{ (match?.cancha_categoria && match?.cancha_categoria !== 'cancha_padel' && match?.cancha_categoria !== 'cancha_pickleball') ? 'Arriendo Privado' : 'Partido Privado' }}
        </div>
        <div class="i-right">
            <ion-icon name="checkmark-circle"></ion-icon>
            {{ (match?.cancha_categoria && match?.cancha_categoria !== 'cancha_padel' && match?.cancha_categoria !== 'cancha_pickleball') ? 'Espacio reservado' : 'Pista reservada' }}
        </div>
    </div>

    <div class="competitive-card" *ngIf="!match?.cancha_categoria || match?.cancha_categoria === 'cancha_padel' || match?.cancha_categoria === 'cancha_pickleball'">
        <div class="c-content">
            <h3>Competitivo</h3>
            <p>El resultado de este partido afectar\xE1 al nivel</p>
        </div>
        <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>

    <!-- PLAYERS SECTION -->
    <div class="players-section">
        <div class="p-header">
            <h2>{{ (!match?.cancha_categoria || match?.cancha_categoria === 'cancha_padel' || match?.cancha_categoria === 'cancha_pickleball') ? 'Jugadores' : 'Participantes / Acompa\xF1antes' }}</h2>
            <a href="javascript:void(0)" class="edit-link">Editar</a>
        </div>

        <div class="players-grid-v7" *ngIf="match">
            <div class="team-column">
                <span class="team-label">A</span>
                <div class="player-slot-v7">
                    <div class="avatar-wrap">
                        <img [src]="getProfileImage(match.jugador1_foto)">
                        <div class="lvl-badge">2,5</div>
                    </div>
                    <span class="p-name">{{ match.jugador1_nombre || 'T\xFA' }}</span>
                </div>
                <div class="player-slot-v7">
                    <div class="avatar-wrap" (click)="openInvite(2)">
                        <img *ngIf="match.jugador2_id" [src]="getProfileImage(match.jugador2_foto)">
                        <div class="plus-btn" *ngIf="!match.jugador2_id">
                            <ion-icon name="add"></ion-icon>
                        </div>
                    </div>
                    <span class="p-name" *ngIf="match.jugador2_id">{{ match.jugador2_nombre }}</span>
                    <span class="inv-btn" *ngIf="!match.jugador2_id" (click)="openInvite(2)">Invitar</span>
                </div>
            </div>

            <div class="divider-v"></div>

            <div class="team-column">
                <span class="team-label">B</span>
                <div class="player-slot-v7">
                    <div class="avatar-wrap" (click)="openInvite(3)">
                        <img *ngIf="match.jugador3_id" [src]="getProfileImage(match.jugador3_foto)">
                        <div class="plus-btn" *ngIf="!match.jugador3_id">
                            <ion-icon name="add"></ion-icon>
                        </div>
                    </div>
                    <span class="p-name" *ngIf="match.jugador3_id">{{ match.jugador3_nombre }}</span>
                    <span class="inv-btn" *ngIf="!match.jugador3_id" (click)="openInvite(3)">Invitar</span>
                </div>
                <div class="player-slot-v7">
                    <div class="avatar-wrap" (click)="openInvite(4)">
                        <img *ngIf="match.jugador4_id" [src]="getProfileImage(match.jugador4_foto)">
                        <div class="plus-btn" *ngIf="!match.jugador4_id">
                            <ion-icon name="add"></ion-icon>
                        </div>
                    </div>
                    <span class="p-name" *ngIf="match.jugador4_id">{{ match.jugador4_nombre }}</span>
                    <span class="inv-btn" *ngIf="!match.jugador4_id" (click)="openInvite(4)">Invitar</span>
                </div>
            </div>
        </div>
    </div>

    <!-- CANCELLATION CARD -->
    <div class="cancellation-card" *ngIf="isOwner()">
        <ion-button *ngIf="canCancel()" expand="block" fill="outline" color="danger" class="btn-cancel-reserva" (click)="confirmarCancelacion()">
            Cancelar Reserva de Cancha
        </ion-button>
        
        <div *ngIf="!canCancel()" class="cancel-warning-box">
            <ion-icon name="information-circle"></ion-icon>
            <p>Para cancelar esta cancha debes hacerlo con al menos 12 horas de anticipaci\xF3n. De lo contrario, tendr\xE1s que comunicarte con el club.</p>
        </div>
    </div>
  </div>

  <!-- SEARCH MODAL -->
  <ion-modal [isOpen]="showSearchModal" (didDismiss)="showSearchModal = false">
    <ng-template>
      <div class="search-modal-container">
        <div class="grab-handle"></div>
        <div class="s-header">
          <h2>Invitar Jugador</h2>
          <ion-icon name="close-outline" class="close-btn" (click)="showSearchModal = false"></ion-icon>
        </div>

        <div class="search-input-wrap">
          <ion-icon name="search-outline"></ion-icon>
          <input type="text" [(ngModel)]="playerSearchTerm" (input)="onSearch()" placeholder="Nombre, email o entrenador...">
        </div>

        <div class="results-list">
          <div class="res-item animate-up" *ngFor="let p of playerResults" (click)="selectPlayer(p)">
            <img [src]="p.foto_perfil || 'assets/avatar.png'" class="r-avatar">
            <div class="r-info">
              <span class="r-name">{{ p.nombre }}</span>
              <span class="r-role">{{ p.rol === 'coach' ? 'Entrenador' : 'Jugador' }}</span>
            </div>
            <div class="r-badge" [class.r-coach]="p.rol === 'coach'">
              {{ p.rol === 'coach' ? 'PRO' : 'LVL 2.5' }}
            </div>
          </div>

          <div *ngIf="searching" style="text-align: center; padding: 20px;">
            <ion-spinner name="crescent" color="dark"></ion-spinner>
          </div>

          <!-- INITIAL / EMPTY STATE (EXPERT UX) -->
          <div *ngIf="!searching && playerSearchTerm.length < 3" class="modal-empty-state animate-up">
            <div class="empty-icon-circle">
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <h3>Busca a tu equipo</h3>
            <p>Encuentra jugadores o entrenadores inscritos para unirse al partido.</p>
          </div>

          <!-- NO RESULTS -->
          <div *ngIf="!searching && playerSearchTerm.length >= 3 && playerResults.length === 0" class="modal-empty-state animate-up">
            <div class="empty-icon-circle">
                <ion-icon name="person-outline"></ion-icon>
            </div>
            <h3>Sin resultados</h3>
            <p>No pudimos encontrar a "{{ playerSearchTerm }}".</p>
          </div>
        </div>
      </div>
    </ng-template>
  </ion-modal>

  <!-- FLOATING BACK BUTTON -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed" style="margin-bottom: 5px; margin-right: 15px;">
    <ion-fab-button (click)="goBack()" class="back-fab-v7">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>
`, styles: ['/* src/app/pages/partido-detalle/partido-detalle.page.scss */\n:host {\n  --nike-black: #000000;\n  --nike-white: #ffffff;\n  --nike-gray: #f8f8fa;\n  --nike-text-gray: #8e8e93;\n  --nike-neon: #ccff00;\n  --nike-border: #f1f1f7;\n  --nike-navy: #0f172a;\n}\nion-content {\n  --background: #f4f5f9;\n  --color: var(--nike-black);\n  font-family: "Outfit", sans-serif;\n}\n.match-hero-v7 {\n  height: 220px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.match-hero-v7::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.4) 0%,\n      transparent 60%);\n}\n.main-scroll-container {\n  margin-top: -40px;\n  border-radius: 40px 40px 0 0;\n  background: #f4f5f9;\n  position: relative;\n  z-index: 10;\n  padding: 25px 20px 120px;\n}\n.match-main-card {\n  background: white;\n  border-radius: 32px;\n  padding: 30px 25px;\n  margin-bottom: 20px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);\n}\n.match-main-card .status-alert-pill {\n  background: #eff6ff;\n  color: #2563eb;\n  border-radius: 12px;\n  padding: 12px 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 25px;\n  width: 100%;\n}\n.match-main-card .status-alert-pill ion-icon {\n  font-size: 18px;\n}\n.match-main-card .match-type-header {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 12px;\n}\n.match-main-card .match-type-header ion-icon {\n  font-size: 24px;\n  color: var(--nike-navy);\n}\n.match-main-card .match-type-header h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: -1px;\n  color: var(--nike-navy);\n}\n.match-main-card .match-date-full {\n  font-size: 15px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  margin-bottom: 25px;\n  display: block;\n}\n.match-main-card .meta-details-row {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 20px;\n  border-top: 1px solid var(--nike-border);\n}\n.match-main-card .meta-details-row .meta-item {\n  text-align: center;\n  flex: 1;\n}\n.match-main-card .meta-details-row .meta-item .m-label {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--nike-text-gray);\n  text-transform: uppercase;\n  margin-bottom: 6px;\n  display: block;\n}\n.match-main-card .meta-details-row .meta-item .m-val {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.info-strip-card {\n  background: white;\n  border-radius: 20px;\n  padding: 18px 25px;\n  margin-bottom: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n}\n.info-strip-card .i-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--nike-navy);\n}\n.info-strip-card .i-left ion-icon {\n  font-size: 18px;\n  opacity: 0.7;\n}\n.info-strip-card .i-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #10b981;\n}\n.info-strip-card .i-right ion-icon {\n  font-size: 16px;\n}\n.competitive-card {\n  background: white;\n  border-radius: 24px;\n  padding: 22px 25px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n}\n.competitive-card .c-content h3 {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.competitive-card .c-content p {\n  margin: 5px 0 0;\n  font-size: 12px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n}\n.competitive-card ion-icon {\n  font-size: 20px;\n  color: var(--nike-text-gray);\n}\n.players-section {\n  background: white;\n  border-radius: 32px;\n  padding: 30px 25px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);\n}\n.players-section .p-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.players-section .p-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.players-section .p-header .edit-link {\n  font-size: 14px;\n  font-weight: 800;\n  color: #2563eb;\n  text-decoration: none;\n}\n.players-grid-v7 {\n  display: grid;\n  grid-template-columns: 1fr 1px 1fr;\n  gap: 20px;\n  align-items: stretch;\n}\n.players-grid-v7 .divider-v {\n  background: var(--nike-border);\n  width: 1px;\n  height: 100%;\n}\n.players-grid-v7 .team-column {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.players-grid-v7 .team-column .team-label {\n  font-size: 16px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin-bottom: 15px;\n  display: block;\n}\n.player-slot-v7 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n}\n.player-slot-v7 .avatar-wrap {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: var(--nike-gray);\n  border: 2px solid white;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: visible;\n}\n.player-slot-v7 .avatar-wrap img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.player-slot-v7 .avatar-wrap .lvl-badge {\n  position: absolute;\n  bottom: -5px;\n  right: -5px;\n  background: var(--nike-neon);\n  color: var(--nike-navy);\n  font-size: 10px;\n  font-weight: 950;\n  padding: 3px 6px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n.player-slot-v7 .avatar-wrap .plus-btn {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 2px dashed #cbd5e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  color: #94a3b8;\n}\n.player-slot-v7 .p-name {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 80px;\n}\n.player-slot-v7 .p-status {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--nike-text-gray);\n}\n.player-slot-v7 .inv-btn {\n  font-size: 12px;\n  font-weight: 800;\n  color: #2563eb;\n  margin-top: -5px;\n}\n.back-fab-v7 {\n  --background: #ffffff;\n  --color: #000000;\n  --border-radius: 50%;\n  --box-shadow: 0 10px 30px rgba(0,0,0,0.15);\n  width: 60px;\n  height: 60px;\n}\n.back-fab-v7 ion-icon {\n  font-size: 24px;\n}\n.animate-up {\n  animation: up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes up {\n  from {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\nion-modal {\n  --border-radius: 40px 40px 0 0;\n  --height: 60%;\n  --background: #ffffff;\n}\n.search-modal-container {\n  padding: 15px 25px 30px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.search-modal-container .grab-handle {\n  width: 40px;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 0 auto 20px;\n}\n.search-modal-container .s-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-modal-container .s-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  letter-spacing: -0.5px;\n}\n.search-modal-container .s-header .close-btn {\n  font-size: 24px;\n  color: var(--nike-navy);\n  opacity: 0.5;\n}\n.search-modal-container .search-input-wrap {\n  background: var(--nike-gray);\n  border-radius: 16px;\n  padding: 12px 18px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  border: 1px solid var(--nike-border);\n}\n.search-modal-container .search-input-wrap ion-icon {\n  font-size: 18px;\n  color: var(--nike-text-gray);\n}\n.search-modal-container .search-input-wrap input {\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 700;\n  outline: none;\n  color: var(--nike-navy);\n}\n.search-modal-container .results-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.search-modal-container .results-list .res-item {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px 0;\n  border-bottom: 1px solid var(--nike-border);\n  transition: all 0.2s ease;\n}\n.search-modal-container .results-list .res-item:active {\n  opacity: 0.6;\n  transform: translateX(5px);\n}\n.search-modal-container .results-list .res-item .r-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid white;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.search-modal-container .results-list .res-item .r-info {\n  flex: 1;\n}\n.search-modal-container .results-list .res-item .r-info .r-name {\n  font-size: 15px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  display: block;\n  margin-bottom: 2px;\n}\n.search-modal-container .results-list .res-item .r-info .r-role {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n  text-transform: uppercase;\n}\n.search-modal-container .results-list .res-item .r-badge {\n  background: var(--nike-neon);\n  color: var(--nike-navy);\n  font-size: 10px;\n  font-weight: 950;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n.search-modal-container .results-list .res-item .r-coach {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n}\n.search-modal-container .modal-empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-modal-container .modal-empty-state .empty-icon-circle {\n  width: 80px;\n  height: 80px;\n  background: var(--nike-gray);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.search-modal-container .modal-empty-state .empty-icon-circle ion-icon {\n  font-size: 32px;\n  color: var(--nike-text-gray);\n}\n.search-modal-container .modal-empty-state h3 {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin: 0 0 10px;\n}\n.search-modal-container .modal-empty-state p {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  line-height: 1.5;\n  margin: 0;\n}\n.cancellation-card {\n  margin-top: 20px;\n}\n.cancellation-card .btn-cancel-reserva {\n  --border-color: #ef4444;\n  --color: #ef4444;\n  --border-radius: 16px;\n  font-weight: 800;\n  font-size: 14px;\n  text-transform: none;\n  letter-spacing: normal;\n  height: 50px;\n}\n.cancellation-card .cancel-warning-box {\n  background: #fff5f5;\n  border: 1px solid #fee2e2;\n  border-radius: 20px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cancellation-card .cancel-warning-box ion-icon {\n  font-size: 24px;\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.cancellation-card .cancel-warning-box p {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  font-weight: 600;\n  color: #991b1b;\n}\n/*# sourceMappingURL=partido-detalle.page.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: MysqlService }, { type: LoadingController }, { type: ToastController }, { type: AlertController }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartidoDetallePage, { className: "PartidoDetallePage", filePath: "src/app/pages/partido-detalle/partido-detalle.page.ts", lineNumber: 29 });
})();
export {
  PartidoDetallePage
};
//# sourceMappingURL=partido-detalle.page-GLVI3MTT.js.map

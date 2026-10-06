import {
  AlertController,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonTitle,
  IonToolbar,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  addIcons,
  checkmarkCircleOutline,
  chevronBackOutline,
  chevronForwardOutline,
  closeOutline,
  giftOutline,
  locationOutline,
  pricetagOutline,
  pricetagsOutline,
  timeOutline,
  walletOutline
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
  FormsModule,
  NavController,
  NgForOf,
  NgIf,
  Router,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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

// src/app/pages/mis-clubes-puntos/mis-clubes-puntos.page.ts
function MisClubesPuntosPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h2");
    \u0275\u0275text(2, "Mis Billeteras de Puntos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Selecciona un club para ver tus puntos acumulados, canjear sus premios disponibles y generar tu c\xF3digo QR de canje.");
    \u0275\u0275elementEnd()();
  }
}
function MisClubesPuntosPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "ion-spinner", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando tus clubes...");
    \u0275\u0275elementEnd()();
  }
}
function MisClubesPuntosPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sin puntos acumulados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "A\xFAn no has acumulado puntos en ning\xFAn club. \xA1Participa en torneos y partidos para sumar tus primeros puntos!");
    \u0275\u0275elementEnd()();
  }
}
function MisClubesPuntosPage_div_14_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Global");
    \u0275\u0275elementEnd();
  }
}
function MisClubesPuntosPage_div_14_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Club de P\xE1del");
    \u0275\u0275elementEnd();
  }
}
function MisClubesPuntosPage_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function MisClubesPuntosPage_div_14_div_1_Template_div_click_0_listener() {
      const club_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectClub(club_r2));
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MisClubesPuntosPage_div_14_div_1_span_7_Template, 2, 0, "span", 28)(8, MisClubesPuntosPage_div_14_div_1_span_8_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 29)(10, "span", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 31);
    \u0275\u0275text(14, "PTS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 32)(16, "span");
    \u0275\u0275text(17, "Ver premios y tarjeta QR");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "ion-icon", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const club_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", club_r2.club_logo || "assets/pelota.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(club_r2.club_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", club_r2.club_id === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", club_r2.club_id > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, club_r2.balance));
  }
}
function MisClubesPuntosPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, MisClubesPuntosPage_div_14_div_1_Template, 19, 7, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.clubBalances);
  }
}
function MisClubesPuntosPage_div_15_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Categor\xEDa: ", ctx_r2.profile.categoria);
  }
}
function MisClubesPuntosPage_div_15_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "Categor\xEDa: Cuarta");
    \u0275\u0275elementEnd();
  }
}
function MisClubesPuntosPage_div_15_img_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 78);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.qrCodeUrl, \u0275\u0275sanitizeUrl);
  }
}
function MisClubesPuntosPage_div_15_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "ion-spinner", 17);
    \u0275\u0275elementEnd();
  }
}
function MisClubesPuntosPage_div_15_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275element(2, "img", 82);
    \u0275\u0275elementStart(3, "span", 83);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 84)(6, "h5", 85);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 86);
    \u0275\u0275listener("click", function MisClubesPuntosPage_div_15_div_51_Template_button_click_8_listener() {
      const reward_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirPopupCanje(reward_r6));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reward_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", reward_r6.image, \u0275\u0275sanitizeUrl)("alt", reward_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", reward_r6.cost, " PTS");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reward_r6.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.selectedClub.balance < reward_r6.cost);
    \u0275\u0275property("disabled", ctx_r2.selectedClub.balance < reward_r6.cost);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedClub.balance < reward_r6.cost ? "Faltan pts" : "Canjear", " ");
  }
}
function MisClubesPuntosPage_div_15_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "div", 90);
    \u0275\u0275elementStart(2, "div", 91)(3, "div", 92)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 94);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 95)(12, "span", 96);
    \u0275\u0275text(13, "C\xD3DIGO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 97);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 98);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupon_r7 = ctx.$implicit;
    \u0275\u0275classProp("used", coupon_r7.status === "used");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(coupon_r7.reward_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", coupon_r7.points_cost, " PTS");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Canjeado: ", \u0275\u0275pipeBind2(10, 11, coupon_r7.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(coupon_r7.coupon_code);
    \u0275\u0275advance();
    \u0275\u0275classProp("pending", coupon_r7.status === "pending")("used", coupon_r7.status === "used");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", coupon_r7.status === "pending" ? "PENDIENTE" : "ENTREGADO", " ");
  }
}
function MisClubesPuntosPage_div_15_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275template(1, MisClubesPuntosPage_div_15_div_56_div_1_Template, 18, 14, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getFilteredCoupons());
  }
}
function MisClubesPuntosPage_div_15_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "p");
    \u0275\u0275text(2, "No has canjeado premios para este club todav\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
function MisClubesPuntosPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "button", 37);
    \u0275\u0275listener("click", function MisClubesPuntosPage_div_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetails());
    });
    \u0275\u0275element(3, "ion-icon", 38);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Volver a Clubes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 39)(7, "div", 40);
    \u0275\u0275element(8, "div", 41);
    \u0275\u0275elementStart(9, "div", 42)(10, "div", 43);
    \u0275\u0275element(11, "img", 44);
    \u0275\u0275elementStart(12, "span", 45);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 47)(17, "div", 48);
    \u0275\u0275element(18, "img", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 50)(20, "h3", 51);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, MisClubesPuntosPage_div_15_span_22_Template, 2, 1, "span", 52)(23, MisClubesPuntosPage_div_15_span_23_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 53)(25, "span", 54);
    \u0275\u0275text(26, "MIS PUNTOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 55)(28, "span", 56);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 57);
    \u0275\u0275text(32, "PTS");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 58)(34, "div", 59);
    \u0275\u0275element(35, "div", 60)(36, "div", 61)(37, "div", 62)(38, "div", 63);
    \u0275\u0275elementStart(39, "div", 64);
    \u0275\u0275template(40, MisClubesPuntosPage_div_15_img_40_Template, 1, 1, "img", 65)(41, MisClubesPuntosPage_div_15_div_41_Template, 2, 0, "div", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 67);
    \u0275\u0275element(43, "ion-icon", 68);
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(46, "div", 69)(47, "h4", 70);
    \u0275\u0275element(48, "ion-icon", 71);
    \u0275\u0275text(49, " Premios Canjeables en este Club ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 72);
    \u0275\u0275template(51, MisClubesPuntosPage_div_15_div_51_Template, 10, 8, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 69)(53, "h4", 70);
    \u0275\u0275element(54, "ion-icon", 74);
    \u0275\u0275text(55, " Mis Cupones en este Club ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, MisClubesPuntosPage_div_15_div_56_Template, 2, 1, "div", 75)(57, MisClubesPuntosPage_div_15_div_57_Template, 3, 0, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx_r2.selectedClub.club_logo || "assets/pelota.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedClub.club_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.profile.rol === "entrenador" || ctx_r2.profile.rol === "entrenador_padel" ? "PRO COACH" : "PLAYER PASS");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.profile.foto_perfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.profile.nombre || "Jugador");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.profile.categoria);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.profile.categoria);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 15, ctx_r2.selectedClub.balance));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.qrCodeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.qrCodeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("C\xF3digo din\xE1mico ", ctx_r2.selectedClub.club_name, " (", ctx_r2.qrTimeLeft, "s)");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.rewardsList);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.getFilteredCoupons().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getFilteredCoupons().length === 0);
  }
}
function MisClubesPuntosPage_ng_template_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109);
    \u0275\u0275element(2, "img", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 112);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 113)(8, "div", 114)(9, "span", 115);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 116);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 117)(15, "span", 115);
    \u0275\u0275text(16, "Puntos a Canjear:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 116);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "div", 118);
    \u0275\u0275elementStart(21, "div", 119)(22, "span", 115);
    \u0275\u0275text(23, "Puntos Restantes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 116);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.selectedReward.image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedReward.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedReward.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedReward.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Mis Puntos en ", ctx_r2.selectedClub.club_name, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 8, ctx_r2.selectedClub.balance), " pts");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(19, 10, ctx_r2.selectedReward.cost), " pts");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(26, 12, ctx_r2.remainingPoints), " pts");
  }
}
function MisClubesPuntosPage_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "h3");
    \u0275\u0275text(3, "Confirmar Canje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 102);
    \u0275\u0275listener("click", function MisClubesPuntosPage_ng_template_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarPopupCanje());
    });
    \u0275\u0275element(5, "ion-icon", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MisClubesPuntosPage_ng_template_17_div_6_Template, 27, 14, "div", 104);
    \u0275\u0275elementStart(7, "div", 105)(8, "button", 106);
    \u0275\u0275listener("click", function MisClubesPuntosPage_ng_template_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarPopupCanje());
    });
    \u0275\u0275text(9, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 107);
    \u0275\u0275listener("click", function MisClubesPuntosPage_ng_template_17_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmarCanjeModal());
    });
    \u0275\u0275text(11, "Canjear");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.selectedReward);
  }
}
var _MisClubesPuntosPage = class _MisClubesPuntosPage {
  constructor(mysqlService, navCtrl, toastCtrl, alertCtrl, router) {
    this.mysqlService = mysqlService;
    this.navCtrl = navCtrl;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.userId = Number(localStorage.getItem("userId"));
    this.loading = false;
    this.clubBalances = [];
    this.userCoupons = [];
    this.selectedClub = null;
    this.profile = {
      nombre: "",
      rol: "",
      categoria: "",
      foto_perfil: ""
    };
    this.qrCodeUrl = "";
    this.qrTimeLeft = 30;
    this.qrTimerInterval = null;
    this.isRedeemModalOpen = false;
    this.selectedReward = null;
    this.remainingPoints = 0;
    this.rewardsList = [
      {
        id: 1,
        name: "Bebida Isot\xF3nica",
        cost: 150,
        image: "assets/isotonic_drink.png",
        description: "Bebida isot\xF3nica VoltMax con electrolitos esenciales para rehidratarte y recuperar energ\xEDa r\xE1pidamente durante el juego."
      },
      {
        id: 2,
        name: "Tubo Pelotas Head Pro",
        cost: 400,
        image: "assets/padel_balls.png",
        description: "Tubo de 3 pelotas oficiales Head Tour Padel Pro. M\xE1ximo control, durabilidad y rebote \xF3ptimo en todo tipo de canchas."
      },
      {
        id: 3,
        name: "Mochila PadelBlox",
        cost: 1500,
        image: "assets/padel_backpack.png",
        description: "Mochila deportiva ergon\xF3mica con compartimiento especial acolchado para palas, zapatillas y accesorios."
      },
      {
        id: 4,
        name: "Pala de P\xE1del Pro",
        cost: 1e4,
        image: "assets/padel_racket.png",
        description: "Pala de fibra de carbono de alta gama. Balance medio-alto, n\xFAcleo de goma EVA Soft para m\xE1xima potencia y precisi\xF3n."
      }
    ];
    addIcons({
      chevronBackOutline,
      giftOutline,
      walletOutline,
      pricetagOutline,
      pricetagsOutline,
      timeOutline,
      locationOutline,
      chevronForwardOutline,
      checkmarkCircleOutline,
      closeOutline
    });
  }
  ngOnInit() {
    this.loadProfile();
    this.loadData();
  }
  ionViewWillLeave() {
    this.stopQRFlow();
  }
  ngOnDestroy() {
    this.stopQRFlow();
  }
  loadProfile() {
    if (!this.userId)
      return;
    this.mysqlService.getPerfil(this.userId).subscribe({
      next: (res) => {
        if (res.success && res.user) {
          const p1 = res.user.foto_perfil;
          const p2 = res.user.foto;
          let fotoRaw = p1 || p2;
          let finalFoto = "";
          if (fotoRaw && fotoRaw.length > 5 && !fotoRaw.includes("imagen_defecto")) {
            finalFoto = fotoRaw.startsWith("http") ? fotoRaw : `${environment.apiUrl}/${fotoRaw.startsWith("/") ? fotoRaw.substring(1) : fotoRaw}`;
          }
          this.profile = __spreadProps(__spreadValues(__spreadValues({}, this.profile), res.user), { foto_perfil: finalFoto });
        }
      },
      error: (err) => console.error("Error loading profile in club wallet page:", err)
    });
  }
  loadData() {
    if (!this.userId)
      return;
    this.loading = true;
    this.mysqlService.getWallet(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.balances_by_club) {
          this.clubBalances = res.balances_by_club;
          if (this.selectedClub) {
            const updated = this.clubBalances.find((c) => c.club_id === this.selectedClub.club_id);
            if (updated) {
              this.selectedClub = updated;
            }
          }
        }
        this.loadCoupons();
      },
      error: (err) => {
        this.loading = false;
        console.error("Error loading wallet club balances:", err);
      }
    });
  }
  loadCoupons() {
    this.mysqlService.getUserCoupons(this.userId).subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success && res.coupons) {
          this.userCoupons = res.coupons;
        }
      },
      error: (err) => {
        this.loading = false;
        console.error("Error loading user coupons:", err);
      }
    });
  }
  handleRefresh(event) {
    this.loadProfile();
    this.loadData();
    setTimeout(() => {
      if (event && event.target) {
        event.target.complete();
      }
    }, 1e3);
  }
  selectClub(club) {
    this.selectedClub = club;
    this.qrCodeUrl = "";
    this.qrTimeLeft = 30;
    this.startQRFlow();
  }
  closeDetails() {
    this.selectedClub = null;
    this.stopQRFlow();
  }
  startQRFlow() {
    this.generateQR();
    if (this.qrTimerInterval) {
      clearInterval(this.qrTimerInterval);
    }
    this.qrTimerInterval = setInterval(() => {
      if (this.qrTimeLeft > 1) {
        this.qrTimeLeft--;
      } else {
        this.qrTimeLeft = 30;
        this.generateQR();
      }
    }, 1e3);
  }
  stopQRFlow() {
    if (this.qrTimerInterval) {
      clearInterval(this.qrTimerInterval);
      this.qrTimerInterval = null;
    }
  }
  generateQR() {
    if (!this.userId || !this.selectedClub)
      return;
    this.mysqlService.generateQRCode(this.userId, this.selectedClub.club_id).subscribe({
      next: (res) => {
        if (res && res.success && res.qr_payload) {
          this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(res.qr_payload)}`;
          this.qrTimeLeft = 30;
        }
      },
      error: (err) => console.error("Error generating club QR payload:", err)
    });
  }
  getFilteredCoupons() {
    if (!this.selectedClub)
      return [];
    return this.userCoupons.filter((c) => c.club_id === this.selectedClub.club_id);
  }
  abrirPopupCanje(reward) {
    return __async(this, null, function* () {
      if (!this.selectedClub)
        return;
      if (this.selectedClub.balance < reward.cost) {
        const alert = yield this.alertCtrl.create({
          header: "Puntos Insuficientes",
          message: `Necesitas ${reward.cost} puntos para canjear "${reward.name}" en este club. Actualmente tienes ${this.selectedClub.balance} puntos.`,
          buttons: ["Entendido"]
        });
        yield alert.present();
        return;
      }
      this.selectedReward = reward;
      this.remainingPoints = this.selectedClub.balance - reward.cost;
      this.isRedeemModalOpen = true;
    });
  }
  cerrarPopupCanje() {
    this.isRedeemModalOpen = false;
    this.selectedReward = null;
  }
  confirmarCanjeModal() {
    if (!this.selectedReward)
      return;
    const reward = this.selectedReward;
    this.cerrarPopupCanje();
    this.ejecutarCanje(reward);
  }
  ejecutarCanje(reward) {
    if (!this.userId || !this.selectedClub)
      return;
    this.loading = true;
    this.mysqlService.redeemCoupon(this.userId, reward.id, this.selectedClub.club_id).subscribe({
      next: (res) => __async(this, null, function* () {
        if (res && res.success) {
          this.loadData();
          const alert = yield this.alertCtrl.create({
            header: "\xA1Canje Exitoso! \u{1F389}",
            message: `Has obtenido tu cup\xF3n para "${res.reward_name}".

C\xF3digo: ${res.coupon_code}

Presenta este c\xF3digo en recepci\xF3n para recibir tu premio en "${this.selectedClub.club_name}".`,
            buttons: ["Entendido"]
          });
          yield alert.present();
        }
      }),
      error: (err) => __async(this, null, function* () {
        this.loading = false;
        console.error("Error redeeming coupon:", err);
        const errMsg = err.error?.message || "Error en el servidor al realizar el canje.";
        const toast = yield this.toastCtrl.create({
          message: `\u274C ${errMsg}`,
          duration: 3e3,
          color: "danger"
        });
        toast.present();
      })
    });
  }
  goBack() {
    this.navCtrl.back();
  }
};
_MisClubesPuntosPage.\u0275fac = function MisClubesPuntosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MisClubesPuntosPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(Router));
};
_MisClubesPuntosPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisClubesPuntosPage, selectors: [["app-mis-clubes-puntos"]], decls: 18, vars: 6, consts: [[1, "ion-no-border"], [1, "nike-toolbar"], ["slot", "start"], [3, "click"], ["name", "chevron-back-outline", "slot", "icon-only", "color", "dark"], [1, "nike-title"], [1, "clubes-puntos-content"], ["slot", "fixed", 3, "ionRefresh"], [1, "dashboard-container"], ["class", "header-intro", 4, "ngIf"], ["class", "loading-center", 4, "ngIf"], ["class", "empty-state-container", 4, "ngIf"], ["class", "club-grid animate-up", 4, "ngIf"], ["class", "club-details-panel animate-up", 4, "ngIf"], [1, "redeem-confirmation-modal", 3, "didDismiss", "isOpen"], [1, "header-intro"], [1, "loading-center"], ["name", "crescent", "color", "success"], [1, "empty-state-container"], [1, "empty-icon-wrapper"], ["name", "pricetags-outline"], [1, "club-grid", "animate-up"], ["class", "club-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "club-card", 3, "click"], [1, "club-header"], [1, "club-avatar"], ["onerror", "this.src='assets/pelota.png'", "alt", "Club Logo", 3, "src"], [1, "club-info"], ["class", "club-type", 4, "ngIf"], [1, "club-points-badge"], [1, "points-num"], [1, "points-lbl"], [1, "club-card-footer"], ["name", "chevron-forward-outline"], [1, "club-type"], [1, "club-details-panel", "animate-up"], [1, "panel-header"], [1, "back-list-btn", 3, "click"], ["name", "chevron-back-outline"], [1, "loyalty-card-container", "compact"], [1, "glass-loyalty-card", "small-card"], [1, "card-glow"], [1, "card-header"], [1, "logo-wrapper"], ["onerror", "this.src='assets/pelota.png'", "alt", "Club Logo", 1, "card-logo-img", 3, "src"], [1, "card-logo-text"], [1, "card-type-badge"], [1, "card-holder-row"], [1, "player-avatar-wrapper"], ["alt", "Foto Perfil", 1, "player-avatar-img", 3, "src"], [1, "player-info"], [1, "player-name"], ["class", "player-category", 4, "ngIf"], [1, "wallet-badge-section"], [1, "balance-title"], [1, "balance-value-wrapper"], [1, "balance-value"], [1, "pts-label"], [1, "scan-zone"], [1, "qr-scanner-frame"], [1, "corner", "top-left"], [1, "corner", "top-right"], [1, "corner", "bottom-left"], [1, "corner", "bottom-right"], [1, "qr-box"], ["class", "qr-image", "alt", "QR Code", 3, "src", 4, "ngIf"], ["class", "qr-placeholder", 4, "ngIf"], [1, "qr-timer-badge"], ["name", "time-outline"], [1, "details-section"], [1, "section-subtitle"], ["name", "gift-outline"], [1, "rewards-grid"], ["class", "reward-square-card animate-up", 4, "ngFor", "ngForOf"], ["name", "pricetag-outline"], ["class", "coupons-container", 4, "ngIf"], ["class", "empty-section-message", 4, "ngIf"], [1, "player-category"], ["alt", "QR Code", 1, "qr-image", 3, "src"], [1, "qr-placeholder"], [1, "reward-square-card", "animate-up"], [1, "reward-img-container"], [1, "reward-product-img", 3, "src", "alt"], [1, "reward-cost-badge"], [1, "reward-info-container"], [1, "reward-title"], [1, "redeem-action-btn-square", 3, "click", "disabled"], [1, "coupons-container"], ["class", "ticket-coupon", 3, "used", 4, "ngFor", "ngForOf"], [1, "ticket-coupon"], [1, "ticket-stripe"], [1, "ticket-content"], [1, "ticket-left"], [1, "cost"], [1, "date"], [1, "ticket-right"], [1, "code-title"], [1, "code-value"], [1, "status-pill"], [1, "empty-section-message"], [1, "modal-wrapper"], [1, "modal-header"], [1, "modal-close-btn", 3, "click"], ["name", "close-outline"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "modal-btn", "cancel", 3, "click"], [1, "modal-btn", "confirm", 3, "click"], [1, "modal-body"], [1, "modal-product-img-wrapper"], [1, "modal-product-img", 3, "src", "alt"], [1, "modal-product-title"], [1, "modal-product-description"], [1, "points-calculation-card"], [1, "calc-row"], [1, "calc-label"], [1, "calc-val"], [1, "calc-row", "discount"], [1, "calc-divider"], [1, "calc-row", "total"]], template: function MisClubesPuntosPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-button", 3);
    \u0275\u0275listener("click", function MisClubesPuntosPage_Template_ion_button_click_3_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title", 5);
    \u0275\u0275text(6, "PUNTOS POR CLUB");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 6)(8, "ion-refresher", 7);
    \u0275\u0275listener("ionRefresh", function MisClubesPuntosPage_Template_ion_refresher_ionRefresh_8_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(9, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275template(11, MisClubesPuntosPage_div_11_Template, 5, 0, "div", 9)(12, MisClubesPuntosPage_div_12_Template, 4, 0, "div", 10)(13, MisClubesPuntosPage_div_13_Template, 7, 0, "div", 11)(14, MisClubesPuntosPage_div_14_Template, 2, 1, "div", 12)(15, MisClubesPuntosPage_div_15_Template, 58, 17, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-modal", 14);
    \u0275\u0275listener("didDismiss", function MisClubesPuntosPage_Template_ion_modal_didDismiss_16_listener() {
      return ctx.cerrarPopupCanje();
    });
    \u0275\u0275template(17, MisClubesPuntosPage_ng_template_17_Template, 12, 1, "ng-template");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx.selectedClub);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading && ctx.clubBalances.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.clubBalances.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.clubBalances.length > 0 && !ctx.selectedClub);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedClub);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.isRedeemModalOpen);
  }
}, dependencies: [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonSpinner,
  IonRefresher,
  IonRefresherContent,
  IonButtons,
  IonModal,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  DecimalPipe,
  DatePipe
], styles: ["\n\nion-content.clubes-puntos-content[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n}\n.nike-toolbar[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --color: #000000;\n  border-bottom: 1px solid #f1f5f9;\n}\n.nike-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 14px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #000000;\n  text-align: center;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.header-intro[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.header-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: #0f172a;\n  margin: 0 0 6px 0;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n}\n.header-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 0;\n  color: #64748b;\n}\n.loading-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.empty-state-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 20px;\n  text-align: center;\n  background: white;\n  border-radius: 28px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.02);\n}\n.empty-state-container[_ngcontent-%COMP%]   .empty-icon-wrapper[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #f1f5f9;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.empty-state-container[_ngcontent-%COMP%]   .empty-icon-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #64748b;\n}\n.empty-state-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0 0 6px 0;\n}\n.empty-state-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.4;\n  max-width: 250px;\n}\n.club-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.club-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid #f1f5f9;\n  padding: 16px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.club-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.club-card[_ngcontent-%COMP%]   .club-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.club-card[_ngcontent-%COMP%]   .club-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.club-card[_ngcontent-%COMP%]   .club-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.club-card[_ngcontent-%COMP%]   .club-info[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.club-card[_ngcontent-%COMP%]   .club-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0 0 2px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.club-card[_ngcontent-%COMP%]   .club-info[_ngcontent-%COMP%]   .club-type[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.club-card[_ngcontent-%COMP%]   .club-points-badge[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #f8fafc;\n  padding: 6px 12px;\n  border-radius: 12px;\n  border: 1px solid #f1f5f9;\n}\n.club-card[_ngcontent-%COMP%]   .club-points-badge[_ngcontent-%COMP%]   .points-num[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 900;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.club-card[_ngcontent-%COMP%]   .club-points-badge[_ngcontent-%COMP%]   .points-lbl[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 900;\n  color: #00b050;\n  letter-spacing: 0.5px;\n}\n.club-card[_ngcontent-%COMP%]   .club-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  padding-top: 10px;\n  border-top: 1px solid #f8fafc;\n  font-size: 11px;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.club-card[_ngcontent-%COMP%]   .club-card-footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n}\n.club-details-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.club-details-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.club-details-panel[_ngcontent-%COMP%]   .back-list-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #00b050;\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  padding: 0;\n}\n.club-details-panel[_ngcontent-%COMP%]   .back-list-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.club-details-panel[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 28px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);\n}\n.club-details-panel[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #64748b;\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.club-details-panel[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n}\n.loyalty-card-container[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 20, 20, 0.98) 0%,\n      rgba(38, 38, 38, 0.98) 100%);\n  border-radius: 32px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.25);\n  color: white;\n  overflow: hidden;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 255, 127, 0.22) 0%,\n      rgba(0, 255, 127, 0) 70%);\n  z-index: 0;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_rotateGlow 10s linear infinite;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  max-width: 70%;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .card-logo-img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  object-fit: cover;\n  filter: drop-shadow(0 2px 6px rgba(0, 255, 127, 0.5));\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .card-logo-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-type-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 127, 0.08);\n  color: #00ff7f;\n  border: 1px solid rgba(0, 255, 127, 0.25);\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 14px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-avatar-wrapper[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 2px solid #00ff7f;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.3);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-avatar-wrapper[_ngcontent-%COMP%]   .player-avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 900;\n  margin: 0;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .player-category[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  margin-top: 2px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-title[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.4);\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-value-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 3px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-value-wrapper[_ngcontent-%COMP%]   .balance-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  color: #ffffff;\n  text-shadow: 0 0 15px rgba(0, 255, 127, 0.35);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-value-wrapper[_ngcontent-%COMP%]   .pts-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: #00ff7f;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border: 3px solid #00ff7f;\n  pointer-events: none;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner.top-left[_ngcontent-%COMP%] {\n  top: 8px;\n  left: 8px;\n  border-right: none;\n  border-bottom: none;\n  border-top-left-radius: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner.top-right[_ngcontent-%COMP%] {\n  top: 8px;\n  right: 8px;\n  border-left: none;\n  border-bottom: none;\n  border-top-right-radius: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner.bottom-left[_ngcontent-%COMP%] {\n  bottom: 8px;\n  left: 8px;\n  border-right: none;\n  border-top: none;\n  border-bottom-left-radius: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner.bottom-right[_ngcontent-%COMP%] {\n  bottom: 8px;\n  right: 8px;\n  border-left: none;\n  border-top: none;\n  border-bottom-right-radius: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  background: white;\n  border-radius: 16px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-timer-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(0, 255, 127, 0.08);\n  color: #00ff7f;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 10px;\n  font-weight: 800;\n  margin-top: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n  max-width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-timer-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-timer-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@keyframes _ngcontent-%COMP%_rotateGlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rewards-catalog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.reward-catalog-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 12px;\n  border: 1px solid #f1f5f9;\n}\n.reward-catalog-item[_ngcontent-%COMP%]   .reward-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 40px;\n  height: 40px;\n  background: #ffffff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);\n}\n.reward-catalog-item[_ngcontent-%COMP%]   .reward-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reward-catalog-item[_ngcontent-%COMP%]   .reward-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0 0 2px 0;\n}\n.reward-catalog-item[_ngcontent-%COMP%]   .reward-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #00b050;\n  font-weight: 750;\n  margin: 0;\n}\n.reward-catalog-item[_ngcontent-%COMP%]   .redeem-action-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 14px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  background: #00ff7f;\n  color: #000000;\n  box-shadow: 0 4px 10px rgba(0, 255, 127, 0.25);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.reward-catalog-item[_ngcontent-%COMP%]   .redeem-action-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: #00dd6f;\n}\n.reward-catalog-item[_ngcontent-%COMP%]   .redeem-action-btn.disabled[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.coupons-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ticket-coupon[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n  display: flex;\n}\n.ticket-coupon.used[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  filter: grayscale(1);\n}\n.ticket-coupon.used[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #64748b;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-stripe[_ngcontent-%COMP%] {\n  width: 4px;\n  background: #00ff7f;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  padding: 14px 16px;\n  align-items: center;\n  justify-content: space-between;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-left[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-left[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #00b050;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-left[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 3px;\n  padding-left: 12px;\n  border-left: 1px dashed #e2e8f0;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-right[_ngcontent-%COMP%]   .code-title[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 900;\n  color: #94a3b8;\n  letter-spacing: 0.8px;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-right[_ngcontent-%COMP%]   .code-value[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 14px;\n  font-weight: 900;\n  color: #0f172a;\n  background: #f8fafc;\n  padding: 3px 6px;\n  border-radius: 6px;\n  letter-spacing: 0.5px;\n  border: 1px solid #f1f5f9;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-right[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  font-size: 7px;\n  font-weight: 950;\n  padding: 1px 5px;\n  border-radius: 6px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-right[_ngcontent-%COMP%]   .status-pill.pending[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 127, 0.1);\n  color: #00b050;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n}\n.ticket-coupon[_ngcontent-%COMP%]   .ticket-right[_ngcontent-%COMP%]   .status-pill.used[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.empty-section-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 16px;\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px dashed #e2e8f0;\n}\n.empty-section-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 24px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .card-logo-img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .card-logo-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-type-badge[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  font-size: 8px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  border-radius: 16px;\n  gap: 8px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-avatar-wrapper[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .player-category[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-title[_ngcontent-%COMP%] {\n  font-size: 7px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-value-wrapper[_ngcontent-%COMP%]   .balance-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-value-wrapper[_ngcontent-%COMP%]   .pts-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 20px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-width: 2px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n.glass-loyalty-card.small-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-timer-badge[_ngcontent-%COMP%] {\n  font-size: 8px;\n  padding: 4px 10px;\n  margin-top: 8px;\n}\n.rewards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-top: 10px;\n}\n.reward-square-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n  transition: all 0.25s ease;\n}\n.reward-square-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.reward-square-card[_ngcontent-%COMP%]   .reward-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-top: 100%;\n  background: #f8fafc;\n  border-bottom: 1px solid #f1f5f9;\n  overflow: hidden;\n}\n.reward-square-card[_ngcontent-%COMP%]   .reward-img-container[_ngcontent-%COMP%]   .reward-product-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 8px;\n  transition: transform 0.3s ease;\n}\n.reward-square-card[_ngcontent-%COMP%]   .reward-img-container[_ngcontent-%COMP%]   .reward-cost-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background: rgba(0, 176, 80, 0.95);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 8px;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 6px rgba(0, 176, 80, 0.3);\n}\n.reward-square-card[_ngcontent-%COMP%]:hover   .reward-product-img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.reward-square-card[_ngcontent-%COMP%]   .reward-info-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  gap: 8px;\n}\n.reward-square-card[_ngcontent-%COMP%]   .reward-info-container[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  height: 32px;\n}\n.reward-square-card[_ngcontent-%COMP%]   .reward-info-container[_ngcontent-%COMP%]   .redeem-action-btn-square[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 32px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  background: #00ff7f;\n  color: #000000;\n  box-shadow: 0 4px 10px rgba(0, 255, 127, 0.15);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.reward-square-card[_ngcontent-%COMP%]   .reward-info-container[_ngcontent-%COMP%]   .redeem-action-btn-square[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: #00dd6f;\n}\n.reward-square-card[_ngcontent-%COMP%]   .reward-info-container[_ngcontent-%COMP%]   .redeem-action-btn-square.disabled[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%] {\n  --height: auto;\n  --max-height: 90%;\n  --width: 90%;\n  --border-radius: 28px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n  align-items: center;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]::part(content) {\n  background: #ffffff;\n  border: 1px solid #f1f5f9;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background: #ffffff;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n  color: #0f172a;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #0f172a;\n  margin: 0;\n  padding: 0;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-product-img-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  border-radius: 20px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-product-img-wrapper[_ngcontent-%COMP%]   .modal-product-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 10px;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-product-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 900;\n  color: #0f172a;\n  margin: 4px 0 0 0;\n  text-align: center;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-product-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  text-align: center;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .points-calculation-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  border-radius: 20px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  box-sizing: border-box;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .points-calculation-card[_ngcontent-%COMP%]   .calc-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .points-calculation-card[_ngcontent-%COMP%]   .calc-row[_ngcontent-%COMP%]   .calc-val[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #0f172a;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .points-calculation-card[_ngcontent-%COMP%]   .calc-row.discount[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .points-calculation-card[_ngcontent-%COMP%]   .calc-row.discount[_ngcontent-%COMP%]   .calc-val[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .points-calculation-card[_ngcontent-%COMP%]   .calc-row.total[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 850;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .points-calculation-card[_ngcontent-%COMP%]   .calc-row.total[_ngcontent-%COMP%]   .calc-val[_ngcontent-%COMP%] {\n  color: #00b050;\n  font-size: 14px;\n  font-weight: 900;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .points-calculation-card[_ngcontent-%COMP%]   .calc-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 20px;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 44px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .modal-btn.cancel[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .modal-btn.confirm[_ngcontent-%COMP%] {\n  background: #00ff7f;\n  color: #000000;\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.25);\n}\n.redeem-confirmation-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .modal-btn.confirm[_ngcontent-%COMP%]:active {\n  background: #00dd6f;\n}\n/*# sourceMappingURL=mis-clubes-puntos.page.css.map */"] });
var MisClubesPuntosPage = _MisClubesPuntosPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisClubesPuntosPage, [{
    type: Component,
    args: [{ selector: "app-mis-clubes-puntos", standalone: true, imports: [
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButton,
      IonIcon,
      IonSpinner,
      IonRefresher,
      IonRefresherContent,
      IonButtons,
      IonModal,
      CommonModule,
      FormsModule
    ], template: `<ion-header class="ion-no-border">
  <ion-toolbar class="nike-toolbar">
    <ion-buttons slot="start">
      <ion-button (click)="goBack()">
        <ion-icon name="chevron-back-outline" slot="icon-only" color="dark"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title class="nike-title">PUNTOS POR CLUB</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="clubes-puntos-content">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <div class="dashboard-container">
    <div class="header-intro" *ngIf="!selectedClub">
      <h2>Mis Billeteras de Puntos</h2>
      <p>Selecciona un club para ver tus puntos acumulados, canjear sus premios disponibles y generar tu c\xF3digo QR de canje.</p>
    </div>

    <!-- Loading Spinner -->
    <div class="loading-center" *ngIf="loading && clubBalances.length === 0">
      <ion-spinner name="crescent" color="success"></ion-spinner>
      <p>Cargando tus clubes...</p>
    </div>

    <!-- Empty State -->
    <div class="empty-state-container" *ngIf="!loading && clubBalances.length === 0">
      <div class="empty-icon-wrapper">
        <ion-icon name="pricetags-outline"></ion-icon>
      </div>
      <h3>Sin puntos acumulados</h3>
      <p>A\xFAn no has acumulado puntos en ning\xFAn club. \xA1Participa en torneos y partidos para sumar tus primeros puntos!</p>
    </div>

    <!-- Club Balances Grid/List (Only show if no club selected) -->
    <div class="club-grid animate-up" *ngIf="clubBalances.length > 0 && !selectedClub">
      <div class="club-card" *ngFor="let club of clubBalances" (click)="selectClub(club)">
        <div class="club-header">
          <div class="club-avatar">
            <img [src]="club.club_logo || 'assets/pelota.png'" onerror="this.src='assets/pelota.png'" alt="Club Logo" />
          </div>
          <div class="club-info">
            <h3>{{ club.club_name }}</h3>
            <span class="club-type" *ngIf="club.club_id === 0">Global</span>
            <span class="club-type" *ngIf="club.club_id > 0">Club de P\xE1del</span>
          </div>
          <div class="club-points-badge">
            <span class="points-num">{{ club.balance | number }}</span>
            <span class="points-lbl">PTS</span>
          </div>
        </div>
        <div class="club-card-footer">
          <span>Ver premios y tarjeta QR</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </div>

    <!-- Club Details Section (Shown when a club is selected) -->
    <div class="club-details-panel animate-up" *ngIf="selectedClub">
      <div class="panel-header">
        <button class="back-list-btn" (click)="closeDetails()">
          <ion-icon name="chevron-back-outline"></ion-icon>
          <span>Volver a Clubes</span>
        </button>
      </div>

      <!-- DIGITAL CARD INSIDE PANEL (Club-Specific - Compact) -->
      <div class="loyalty-card-container compact">
        <div class="glass-loyalty-card small-card">
          <div class="card-glow"></div>
          
          <!-- Card Header (Branding & Membership Type) -->
          <div class="card-header">
            <div class="logo-wrapper">
              <img [src]="selectedClub.club_logo || 'assets/pelota.png'" onerror="this.src='assets/pelota.png'" class="card-logo-img" alt="Club Logo" />
              <span class="card-logo-text">{{ selectedClub.club_name }}</span>
            </div>
            <span class="card-type-badge">{{ profile.rol === 'entrenador' || profile.rol === 'entrenador_padel' ? 'PRO COACH' : 'PLAYER PASS' }}</span>
          </div>

          <!-- Card Holder Profile Row -->
          <div class="card-holder-row">
            <div class="player-avatar-wrapper">
              <img [src]="profile.foto_perfil || 'assets/avatar.png'" class="player-avatar-img" alt="Foto Perfil" />
            </div>
            <div class="player-info">
              <h3 class="player-name">{{ profile.nombre || 'Jugador' }}</h3>
              <span class="player-category" *ngIf="profile.categoria">Categor\xEDa: {{ profile.categoria }}</span>
              <span class="player-category" *ngIf="!profile.categoria">Categor\xEDa: Cuarta</span>
            </div>
            <div class="wallet-badge-section">
              <span class="balance-title">MIS PUNTOS</span>
              <div class="balance-value-wrapper">
                <span class="balance-value">{{ selectedClub.balance | number }}</span>
                <span class="pts-label">PTS</span>
              </div>
            </div>
          </div>

          <!-- Scan Zone (Centered QR Code with scanner framing) -->
          <div class="scan-zone">
            <div class="qr-scanner-frame">
              <div class="corner top-left"></div>
              <div class="corner top-right"></div>
              <div class="corner bottom-left"></div>
              <div class="corner bottom-right"></div>
              
              <div class="qr-box">
                <img *ngIf="qrCodeUrl" [src]="qrCodeUrl" class="qr-image" alt="QR Code" />
                <div *ngIf="!qrCodeUrl" class="qr-placeholder">
                  <ion-spinner name="crescent" color="success"></ion-spinner>
                </div>
              </div>
            </div>
            
            <div class="qr-timer-badge">
              <ion-icon name="time-outline"></ion-icon>
              <span>C\xF3digo din\xE1mico {{ selectedClub.club_name }} ({{ qrTimeLeft }}s)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section: Cat\xE1logo de Premios -->
      <div class="details-section">
        <h4 class="section-subtitle">
          <ion-icon name="gift-outline"></ion-icon>
          Premios Canjeables en este Club
        </h4>
        <div class="rewards-grid">
          <div class="reward-square-card animate-up" *ngFor="let reward of rewardsList">
            <div class="reward-img-container">
              <img [src]="reward.image" class="reward-product-img" [alt]="reward.name" />
              <span class="reward-cost-badge">{{ reward.cost }} PTS</span>
            </div>
            <div class="reward-info-container">
              <h5 class="reward-title">{{ reward.name }}</h5>
              <button 
                class="redeem-action-btn-square"
                [class.disabled]="selectedClub.balance < reward.cost"
                [disabled]="selectedClub.balance < reward.cost"
                (click)="abrirPopupCanje(reward)">
                {{ selectedClub.balance < reward.cost ? 'Faltan pts' : 'Canjear' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Section: Mis Cupones en este Club -->
      <div class="details-section">
        <h4 class="section-subtitle">
          <ion-icon name="pricetag-outline"></ion-icon>
          Mis Cupones en este Club
        </h4>
        
        <div class="coupons-container" *ngIf="getFilteredCoupons().length > 0">
          <div class="ticket-coupon" *ngFor="let coupon of getFilteredCoupons()" [class.used]="coupon.status === 'used'">
            <div class="ticket-stripe"></div>
            <div class="ticket-content">
              <div class="ticket-left">
                <h5>{{ coupon.reward_name }}</h5>
                <span class="cost">{{ coupon.points_cost }} PTS</span>
                <span class="date">Canjeado: {{ coupon.created_at | date:'dd/MM/yyyy' }}</span>
              </div>
              <div class="ticket-right">
                <span class="code-title">C\xD3DIGO</span>
                <span class="code-value">{{ coupon.coupon_code }}</span>
                <span class="status-pill" [class.pending]="coupon.status === 'pending'" [class.used]="coupon.status === 'used'">
                  {{ coupon.status === 'pending' ? 'PENDIENTE' : 'ENTREGADO' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="empty-section-message" *ngIf="getFilteredCoupons().length === 0">
          <p>No has canjeado premios para este club todav\xEDa.</p>
        </div>
      </div>

    </div>

  </div>

  <!-- DYNAMIC CONFIRMATION MODAL -->
  <ion-modal [isOpen]="isRedeemModalOpen" (didDismiss)="cerrarPopupCanje()" class="redeem-confirmation-modal">
    <ng-template>
      <div class="modal-wrapper">
        <div class="modal-header">
          <h3>Confirmar Canje</h3>
          <button class="modal-close-btn" (click)="cerrarPopupCanje()">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        
        <div class="modal-body" *ngIf="selectedReward">
          <!-- Product image -->
          <div class="modal-product-img-wrapper">
            <img [src]="selectedReward.image" class="modal-product-img" [alt]="selectedReward.name" />
          </div>
          
          <!-- Product info -->
          <h4 class="modal-product-title">{{ selectedReward.name }}</h4>
          <p class="modal-product-description">{{ selectedReward.description }}</p>
          
          <!-- Points math container -->
          <div class="points-calculation-card">
            <div class="calc-row">
              <span class="calc-label">Mis Puntos en {{ selectedClub.club_name }}:</span>
              <span class="calc-val">{{ selectedClub.balance | number }} pts</span>
            </div>
            <div class="calc-row discount">
              <span class="calc-label">Puntos a Canjear:</span>
              <span class="calc-val">-{{ selectedReward.cost | number }} pts</span>
            </div>
            <div class="calc-divider"></div>
            <div class="calc-row total">
              <span class="calc-label">Puntos Restantes:</span>
              <span class="calc-val">{{ remainingPoints | number }} pts</span>
            </div>
          </div>
        </div>
        
        <div class="modal-footer">
          <button class="modal-btn cancel" (click)="cerrarPopupCanje()">Cancelar</button>
          <button class="modal-btn confirm" (click)="confirmarCanjeModal()">Canjear</button>
        </div>
      </div>
    </ng-template>
  </ion-modal>

</ion-content>
`, styles: ["/* src/app/pages/mis-clubes-puntos/mis-clubes-puntos.page.scss */\nion-content.clubes-puntos-content {\n  --background: #f8fafc;\n}\n.nike-toolbar {\n  --background: #ffffff;\n  --color: #000000;\n  border-bottom: 1px solid #f1f5f9;\n}\n.nike-title {\n  font-weight: 900;\n  font-size: 14px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #000000;\n  text-align: center;\n}\n.dashboard-container {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.header-intro {\n  margin-bottom: 8px;\n}\n.header-intro h2 {\n  font-size: 20px;\n  font-weight: 900;\n  color: #0f172a;\n  margin: 0 0 6px 0;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n}\n.header-intro p {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.loading-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 0;\n  color: #64748b;\n}\n.loading-center p {\n  margin-top: 12px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.empty-state-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 20px;\n  text-align: center;\n  background: white;\n  border-radius: 28px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.02);\n}\n.empty-state-container .empty-icon-wrapper {\n  width: 64px;\n  height: 64px;\n  background: #f1f5f9;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.empty-state-container .empty-icon-wrapper ion-icon {\n  font-size: 28px;\n  color: #64748b;\n}\n.empty-state-container h3 {\n  font-size: 16px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0 0 6px 0;\n}\n.empty-state-container p {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.4;\n  max-width: 250px;\n}\n.club-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.club-card {\n  background: #ffffff;\n  border-radius: 24px;\n  border: 1px solid #f1f5f9;\n  padding: 16px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.club-card:active {\n  transform: scale(0.98);\n}\n.club-card .club-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.club-card .club-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.club-card .club-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.club-card .club-info {\n  flex: 1;\n  overflow: hidden;\n}\n.club-card .club-info h3 {\n  font-size: 14px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0 0 2px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.club-card .club-info .club-type {\n  font-size: 10px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.club-card .club-points-badge {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #f8fafc;\n  padding: 6px 12px;\n  border-radius: 12px;\n  border: 1px solid #f1f5f9;\n}\n.club-card .club-points-badge .points-num {\n  font-size: 16px;\n  font-weight: 900;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.club-card .club-points-badge .points-lbl {\n  font-size: 8px;\n  font-weight: 900;\n  color: #00b050;\n  letter-spacing: 0.5px;\n}\n.club-card .club-card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  padding-top: 10px;\n  border-top: 1px solid #f8fafc;\n  font-size: 11px;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.club-card .club-card-footer ion-icon {\n  font-size: 14px;\n  color: #0f172a;\n}\n.club-details-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.club-details-panel .panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.club-details-panel .back-list-btn {\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #00b050;\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  padding: 0;\n}\n.club-details-panel .back-list-btn ion-icon {\n  font-size: 18px;\n}\n.club-details-panel .details-section {\n  background: #ffffff;\n  border-radius: 28px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);\n}\n.club-details-panel .section-subtitle {\n  font-size: 11px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #64748b;\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.club-details-panel .section-subtitle ion-icon {\n  font-size: 14px;\n  color: #0f172a;\n}\n.loyalty-card-container {\n  margin-bottom: 4px;\n}\n.glass-loyalty-card {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 20, 20, 0.98) 0%,\n      rgba(38, 38, 38, 0.98) 100%);\n  border-radius: 32px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.25);\n  color: white;\n  overflow: hidden;\n}\n.glass-loyalty-card .card-glow {\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 255, 127, 0.22) 0%,\n      rgba(0, 255, 127, 0) 70%);\n  z-index: 0;\n  pointer-events: none;\n  animation: rotateGlow 10s linear infinite;\n}\n.glass-loyalty-card .card-header {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.glass-loyalty-card .card-header .logo-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  max-width: 70%;\n}\n.glass-loyalty-card .card-header .logo-wrapper .card-logo-img {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  object-fit: cover;\n  filter: drop-shadow(0 2px 6px rgba(0, 255, 127, 0.5));\n}\n.glass-loyalty-card .card-header .logo-wrapper .card-logo-text {\n  font-size: 15px;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.glass-loyalty-card .card-header .card-type-badge {\n  background: rgba(0, 255, 127, 0.08);\n  color: #00ff7f;\n  border: 1px solid rgba(0, 255, 127, 0.25);\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.glass-loyalty-card .card-holder-row {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 14px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.glass-loyalty-card .card-holder-row .player-avatar-wrapper {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 2px solid #00ff7f;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.3);\n}\n.glass-loyalty-card .card-holder-row .player-avatar-wrapper .player-avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.glass-loyalty-card .card-holder-row .player-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.glass-loyalty-card .card-holder-row .player-info .player-name {\n  font-size: 15px;\n  font-weight: 900;\n  margin: 0;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.glass-loyalty-card .card-holder-row .player-info .player-category {\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  margin-top: 2px;\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section .balance-title {\n  font-size: 8px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.4);\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section .balance-value-wrapper {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 3px;\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section .balance-value-wrapper .balance-value {\n  font-size: 22px;\n  font-weight: 950;\n  color: #ffffff;\n  text-shadow: 0 0 15px rgba(0, 255, 127, 0.35);\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section .balance-value-wrapper .pts-label {\n  font-size: 10px;\n  font-weight: 900;\n  color: #00ff7f;\n}\n.glass-loyalty-card .scan-zone {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame {\n  position: relative;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border: 3px solid #00ff7f;\n  pointer-events: none;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner.top-left {\n  top: 8px;\n  left: 8px;\n  border-right: none;\n  border-bottom: none;\n  border-top-left-radius: 12px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner.top-right {\n  top: 8px;\n  right: 8px;\n  border-left: none;\n  border-bottom: none;\n  border-top-right-radius: 12px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner.bottom-left {\n  bottom: 8px;\n  left: 8px;\n  border-right: none;\n  border-top: none;\n  border-bottom-left-radius: 12px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner.bottom-right {\n  bottom: 8px;\n  right: 8px;\n  border-left: none;\n  border-top: none;\n  border-bottom-right-radius: 12px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .qr-box {\n  width: 140px;\n  height: 140px;\n  background: white;\n  border-radius: 16px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .qr-box .qr-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.glass-loyalty-card .scan-zone .qr-timer-badge {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(0, 255, 127, 0.08);\n  color: #00ff7f;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 10px;\n  font-weight: 800;\n  margin-top: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n  max-width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.glass-loyalty-card .scan-zone .qr-timer-badge ion-icon {\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.glass-loyalty-card .scan-zone .qr-timer-badge span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@keyframes rotateGlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rewards-catalog {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.reward-catalog-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 12px;\n  border: 1px solid #f1f5f9;\n}\n.reward-catalog-item .reward-icon {\n  font-size: 22px;\n  width: 40px;\n  height: 40px;\n  background: #ffffff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);\n}\n.reward-catalog-item .reward-details {\n  flex: 1;\n}\n.reward-catalog-item .reward-details h5 {\n  font-size: 13px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0 0 2px 0;\n}\n.reward-catalog-item .reward-details p {\n  font-size: 11px;\n  color: #00b050;\n  font-weight: 750;\n  margin: 0;\n}\n.reward-catalog-item .redeem-action-btn {\n  height: 32px;\n  padding: 0 14px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  background: #00ff7f;\n  color: #000000;\n  box-shadow: 0 4px 10px rgba(0, 255, 127, 0.25);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.reward-catalog-item .redeem-action-btn:active {\n  transform: scale(0.95);\n  background: #00dd6f;\n}\n.reward-catalog-item .redeem-action-btn.disabled {\n  background: #e2e8f0;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.coupons-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ticket-coupon {\n  position: relative;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n  display: flex;\n}\n.ticket-coupon.used {\n  opacity: 0.6;\n  filter: grayscale(1);\n}\n.ticket-coupon.used .status-pill {\n  background: #e2e8f0;\n  color: #64748b;\n}\n.ticket-coupon .ticket-stripe {\n  width: 4px;\n  background: #00ff7f;\n}\n.ticket-coupon .ticket-content {\n  display: flex;\n  flex: 1;\n  padding: 14px 16px;\n  align-items: center;\n  justify-content: space-between;\n}\n.ticket-coupon .ticket-left {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ticket-coupon .ticket-left h5 {\n  font-size: 13px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0;\n}\n.ticket-coupon .ticket-left .cost {\n  font-size: 11px;\n  font-weight: 700;\n  color: #00b050;\n}\n.ticket-coupon .ticket-left .date {\n  font-size: 9px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.ticket-coupon .ticket-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 3px;\n  padding-left: 12px;\n  border-left: 1px dashed #e2e8f0;\n}\n.ticket-coupon .ticket-right .code-title {\n  font-size: 8px;\n  font-weight: 900;\n  color: #94a3b8;\n  letter-spacing: 0.8px;\n}\n.ticket-coupon .ticket-right .code-value {\n  font-family: monospace;\n  font-size: 14px;\n  font-weight: 900;\n  color: #0f172a;\n  background: #f8fafc;\n  padding: 3px 6px;\n  border-radius: 6px;\n  letter-spacing: 0.5px;\n  border: 1px solid #f1f5f9;\n}\n.ticket-coupon .ticket-right .status-pill {\n  font-size: 7px;\n  font-weight: 950;\n  padding: 1px 5px;\n  border-radius: 6px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.ticket-coupon .ticket-right .status-pill.pending {\n  background: rgba(0, 255, 127, 0.1);\n  color: #00b050;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n}\n.ticket-coupon .ticket-right .status-pill.used {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.empty-section-message {\n  text-align: center;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 16px;\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px dashed #e2e8f0;\n}\n.empty-section-message p {\n  margin: 0;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-up {\n  animation: slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.glass-loyalty-card.small-card {\n  padding: 16px;\n  border-radius: 24px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);\n}\n.glass-loyalty-card.small-card .card-header {\n  margin-bottom: 12px;\n}\n.glass-loyalty-card.small-card .card-header .logo-wrapper .card-logo-img {\n  width: 24px;\n  height: 24px;\n}\n.glass-loyalty-card.small-card .card-header .logo-wrapper .card-logo-text {\n  font-size: 13px;\n}\n.glass-loyalty-card.small-card .card-header .card-type-badge {\n  padding: 3px 8px;\n  font-size: 8px;\n}\n.glass-loyalty-card.small-card .card-holder-row {\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  border-radius: 16px;\n  gap: 8px;\n}\n.glass-loyalty-card.small-card .card-holder-row .player-avatar-wrapper {\n  width: 38px;\n  height: 38px;\n}\n.glass-loyalty-card.small-card .card-holder-row .player-info .player-name {\n  font-size: 12px;\n}\n.glass-loyalty-card.small-card .card-holder-row .player-info .player-category {\n  font-size: 9px;\n}\n.glass-loyalty-card.small-card .card-holder-row .wallet-badge-section .balance-title {\n  font-size: 7px;\n}\n.glass-loyalty-card.small-card .card-holder-row .wallet-badge-section .balance-value-wrapper .balance-value {\n  font-size: 16px;\n}\n.glass-loyalty-card.small-card .card-holder-row .wallet-badge-section .balance-value-wrapper .pts-label {\n  font-size: 8px;\n}\n.glass-loyalty-card.small-card .scan-zone .qr-scanner-frame {\n  padding: 10px;\n  border-radius: 20px;\n}\n.glass-loyalty-card.small-card .scan-zone .qr-scanner-frame .corner {\n  width: 12px;\n  height: 12px;\n  border-width: 2px;\n}\n.glass-loyalty-card.small-card .scan-zone .qr-scanner-frame .qr-box {\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n.glass-loyalty-card.small-card .scan-zone .qr-timer-badge {\n  font-size: 8px;\n  padding: 4px 10px;\n  margin-top: 8px;\n}\n.rewards-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-top: 10px;\n}\n.reward-square-card {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n  transition: all 0.25s ease;\n}\n.reward-square-card:active {\n  transform: scale(0.97);\n}\n.reward-square-card .reward-img-container {\n  position: relative;\n  width: 100%;\n  padding-top: 100%;\n  background: #f8fafc;\n  border-bottom: 1px solid #f1f5f9;\n  overflow: hidden;\n}\n.reward-square-card .reward-img-container .reward-product-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 8px;\n  transition: transform 0.3s ease;\n}\n.reward-square-card .reward-img-container .reward-cost-badge {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background: rgba(0, 176, 80, 0.95);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 8px;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 6px rgba(0, 176, 80, 0.3);\n}\n.reward-square-card:hover .reward-product-img {\n  transform: scale(1.05);\n}\n.reward-square-card .reward-info-container {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  gap: 8px;\n}\n.reward-square-card .reward-info-container .reward-title {\n  font-size: 12px;\n  font-weight: 850;\n  color: #0f172a;\n  margin: 0;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  height: 32px;\n}\n.reward-square-card .reward-info-container .redeem-action-btn-square {\n  width: 100%;\n  height: 32px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  background: #00ff7f;\n  color: #000000;\n  box-shadow: 0 4px 10px rgba(0, 255, 127, 0.15);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.reward-square-card .reward-info-container .redeem-action-btn-square:active {\n  transform: scale(0.95);\n  background: #00dd6f;\n}\n.reward-square-card .reward-info-container .redeem-action-btn-square.disabled {\n  background: #e2e8f0;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.redeem-confirmation-modal {\n  --height: auto;\n  --max-height: 90%;\n  --width: 90%;\n  --border-radius: 28px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n  align-items: center;\n}\n.redeem-confirmation-modal::part(content) {\n  background: #ffffff;\n  border: 1px solid #f1f5f9;\n}\n.redeem-confirmation-modal .modal-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background: #ffffff;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n  color: #0f172a;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-header .modal-close-btn {\n  background: #f1f5f9;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #0f172a;\n  margin: 0;\n  padding: 0;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-header .modal-close-btn ion-icon {\n  font-size: 18px;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .modal-product-img-wrapper {\n  width: 100%;\n  height: 160px;\n  border-radius: 20px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .modal-product-img-wrapper .modal-product-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 10px;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .modal-product-title {\n  font-size: 16px;\n  font-weight: 900;\n  color: #0f172a;\n  margin: 4px 0 0 0;\n  text-align: center;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .modal-product-description {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  text-align: center;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .points-calculation-card {\n  width: 100%;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  border-radius: 20px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  box-sizing: border-box;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .points-calculation-card .calc-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .points-calculation-card .calc-row .calc-val {\n  font-weight: 800;\n  color: #0f172a;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .points-calculation-card .calc-row.discount {\n  color: #ef4444;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .points-calculation-card .calc-row.discount .calc-val {\n  color: #ef4444;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .points-calculation-card .calc-row.total {\n  color: #0f172a;\n  font-size: 14px;\n  font-weight: 850;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .points-calculation-card .calc-row.total .calc-val {\n  color: #00b050;\n  font-size: 14px;\n  font-weight: 900;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-body .points-calculation-card .calc-divider {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-footer {\n  display: flex;\n  gap: 12px;\n  margin-top: 20px;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-footer .modal-btn {\n  flex: 1;\n  height: 44px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-footer .modal-btn:active {\n  transform: scale(0.97);\n}\n.redeem-confirmation-modal .modal-wrapper .modal-footer .modal-btn.cancel {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.redeem-confirmation-modal .modal-wrapper .modal-footer .modal-btn.confirm {\n  background: #00ff7f;\n  color: #000000;\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.25);\n}\n.redeem-confirmation-modal .modal-wrapper .modal-footer .modal-btn.confirm:active {\n  background: #00dd6f;\n}\n/*# sourceMappingURL=mis-clubes-puntos.page.css.map */\n"] }]
  }], () => [{ type: MysqlService }, { type: NavController }, { type: ToastController }, { type: AlertController }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisClubesPuntosPage, { className: "MisClubesPuntosPage", filePath: "src/app/pages/mis-clubes-puntos/mis-clubes-puntos.page.ts", lineNumber: 58 });
})();
export {
  MisClubesPuntosPage
};
//# sourceMappingURL=mis-clubes-puntos.page-JTAF3WJJ.js.map

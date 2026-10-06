import {
  EntrenamientoService
} from "./chunk-DEYW32VP.js";
import {
  createUserWithEmailAndPassword,
  doc,
  getAuth,
  getDoc,
  getFirestore,
  setDoc,
  signInWithEmailAndPassword
} from "./chunk-HSNO643M.js";
import {
  IonBadge,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal
} from "./chunk-5YKSH3EK.js";
import {
  firebaseConfig,
  initializeApp
} from "./chunk-DBDG6EJI.js";
import {
  ActionSheetController
} from "./chunk-LFXGPXMG.js";
import {
  add,
  addCircleOutline,
  addIcons,
  alertCircleOutline,
  barcodeOutline,
  calendarOutline,
  cardOutline,
  checkmarkDoneCircleOutline,
  chevronDownOutline,
  chevronForward,
  chevronUpOutline,
  close,
  closeOutline,
  flashOutline,
  gift,
  giftOutline,
  homeOutline,
  informationCircleOutline,
  locationOutline,
  logOutOutline,
  logoWhatsapp,
  notificationsOutline,
  personOutline,
  pricetagsOutline,
  settingsOutline,
  statsChartOutline,
  tennisballOutline,
  timeOutline,
  trophyOutline,
  warningOutline
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
  CurrencyPipe,
  Injectable,
  NgForOf,
  NgIf,
  NgZone,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
  }
  register(email, password, nombre, rol) {
    return __async(this, null, function* () {
      const userCredential = yield createUserWithEmailAndPassword(this.auth, email, password);
      const uid = userCredential.user.uid;
      yield setDoc(doc(this.db, "users", uid), {
        email,
        nombre,
        rol
      });
      return userCredential;
    });
  }
  login(email, password) {
    return __async(this, null, function* () {
      return signInWithEmailAndPassword(this.auth, email, password);
    });
  }
  getUser(uid) {
    return __async(this, null, function* () {
      const docRef = doc(this.db, "users", uid);
      const docSnap = yield getDoc(docRef);
      return docSnap.exists() ? docSnap.data() : null;
    });
  }
  logout() {
    return __async(this, null, function* () {
      yield this.auth.signOut();
    });
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/entrenador-home/entrenador-home.page.ts
var _c0 = () => [0, 0.85, 1];
var _c1 = () => [0, 0.9];
var _c2 = () => [0, 0.6, 0.8];
function EntrenadorHomePage_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "img", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.coachFoto, \u0275\u0275sanitizeUrl);
  }
}
function EntrenadorHomePage_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_1_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openNotificaciones());
    });
    \u0275\u0275element(1, "ion-icon", 19);
    \u0275\u0275elementStart(2, "ion-badge", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getNotificacionesCount());
  }
}
function EntrenadorHomePage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275template(5, EntrenadorHomePage_ng_container_1_div_5_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(6, "div", 12)(7, "p", 13);
    \u0275\u0275text(8, "BIENVENIDO,");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, EntrenadorHomePage_ng_container_1_div_11_Template, 4, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.coachFoto);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.coachNombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getNotificacionesCount() > 0);
  }
}
function EntrenadorHomePage_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
}
function EntrenadorHomePage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22)(3, "p");
    \u0275\u0275text(4, "\xA1Buen entrenamiento hoy!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23)(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9, "\u{1F44B}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 25)(11, "div", 26);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_2_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openNotificaciones());
    });
    \u0275\u0275element(12, "ion-icon", 19);
    \u0275\u0275template(13, EntrenadorHomePage_ng_container_2_div_13_Template, 1, 0, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_2_Template_div_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPerfil());
    });
    \u0275\u0275element(15, "img", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.coachNombre);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.getNotificacionesCount() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.coachFoto || "assets/avatar.png", \u0275\u0275sanitizeUrl);
  }
}
function EntrenadorHomePage_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_3_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToAgenda());
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275element(2, "span", 57);
    \u0275\u0275text(3, " LIVE: CLASE EN CURSO ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58)(5, "div", 59)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 60)(11, "ion-button", 61);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_3_div_2_Template_ion_button_click_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.marcarAsistenciaLive();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(12, "ion-icon", 62);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.claseActual.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.claseActual.subtitulo, " (", ctx_r0.claseActual.hora, ")");
  }
}
function EntrenadorHomePage_ng_container_3_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_3_div_28_div_7_Template_div_click_0_listener() {
      const a_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendWhatsAppReminder(a_r7));
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275element(2, "ion-icon", 71);
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 73)(6, "span", 74);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "ion-icon", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r7.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r7.clases_disponibles);
  }
}
function EntrenadorHomePage_ng_container_3_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "h4", 65);
    \u0275\u0275text(3, "RENOVAR PACKS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-badge", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 67);
    \u0275\u0275template(7, EntrenadorHomePage_ng_container_3_div_28_div_7_Template, 9, 2, "div", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.alumnosRecordatorioList.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.alumnosRecordatorioList);
  }
}
function EntrenadorHomePage_ng_container_3_ion_badge_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.clasesHoyList.length);
  }
}
function EntrenadorHomePage_ng_container_3_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "span", 81);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 83)(7, "span", 84);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 85);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const clase_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tomorrow", clase_r8.diaLabel === "Ma\xF1ana");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(clase_r8.diaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clase_r8.hora);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(clase_r8.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clase_r8.subtitulo);
  }
}
function EntrenadorHomePage_ng_container_3_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, EntrenadorHomePage_ng_container_3_div_37_div_1_Template, 11, 6, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.clasesHoyList);
  }
}
function EntrenadorHomePage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275template(2, EntrenadorHomePage_ng_container_3_div_2_Template, 13, 3, "div", 32);
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_3_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAgenda());
    });
    \u0275\u0275elementStart(5, "div", 35)(6, "span", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 37);
    \u0275\u0275text(9, "CLASES");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, "PENDIENTES");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 38);
    \u0275\u0275elementStart(13, "div", 39)(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 37);
    \u0275\u0275text(17, "Alumnos");
    \u0275\u0275element(18, "br");
    \u0275\u0275text(19, "Activos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "div", 38);
    \u0275\u0275elementStart(21, "div", 39)(22, "span", 36);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 37);
    \u0275\u0275text(25, "Clases");
    \u0275\u0275element(26, "br");
    \u0275\u0275text(27, "del Mes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, EntrenadorHomePage_ng_container_3_div_28_Template, 8, 2, "div", 40);
    \u0275\u0275elementStart(29, "div", 41)(30, "div", 42);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_3_Template_div_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isClassesExpanded = !ctx_r0.isClassesExpanded);
    });
    \u0275\u0275elementStart(31, "div", 43)(32, "h3", 44);
    \u0275\u0275text(33, "Pr\xF3ximas Clases");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, EntrenadorHomePage_ng_container_3_ion_badge_34_Template, 2, 1, "ion-badge", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ion-button", 46);
    \u0275\u0275element(36, "ion-icon", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, EntrenadorHomePage_ng_container_3_div_37_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 49)(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 50)(42, "div", 51);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_3_Template_div_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAgenda());
    });
    \u0275\u0275element(43, "img", 52);
    \u0275\u0275elementStart(44, "div", 53)(45, "h3");
    \u0275\u0275text(46, "Mi Agenda");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "ion-icon", 54);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.claseActual);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats.clases_pendientes || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.total_alumnos);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.clases_mes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.alumnosRecordatorioList.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.clasesHoyList.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r0.isClassesExpanded ? "chevron-up-outline" : "chevron-down-outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.clasesHoyList.length > 0 && ctx_r0.isClassesExpanded);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('"', ctx_r0.iaTip, '"');
  }
}
function EntrenadorHomePage_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToAgenda());
    });
    \u0275\u0275elementStart(1, "div", 124);
    \u0275\u0275element(2, "ion-icon", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 125)(4, "div", 126);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 127);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 128);
    \u0275\u0275element(9, "ion-icon", 129);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "ion-icon", 130);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r0.claseActual ? "flash-outline" : "calendar-outline");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.claseActual ? "CLASE EN CURSO" : "PR\xD3XIMA SESI\xD3N");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.claseActual ? ctx_r0.claseActual.hora : ctx_r0.clasesHoyList[0].hora, " HRS \u2022 ", ctx_r0.claseActual ? ctx_r0.claseActual.titulo : ctx_r0.clasesHoyList[0].titulo, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.claseActual ? ctx_r0.claseActual.lugar : ctx_r0.clasesHoyList[0].lugar) || "Club de P\xE1del", " ");
  }
}
function EntrenadorHomePage_ng_container_4_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132);
    \u0275\u0275element(2, "ion-icon", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 134)(4, "span", 135);
    \u0275\u0275text(5, "TIP DEL COACHING IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.iaTip.split(":")[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.iaTip.split(":")[1] || ctx_r0.iaTip);
  }
}
function EntrenadorHomePage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275template(2, EntrenadorHomePage_ng_container_4_div_2_Template, 12, 5, "div", 87);
    \u0275\u0275elementStart(3, "div", 88)(4, "div", 89)(5, "h3", 90);
    \u0275\u0275text(6, "Resumen Mensual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 91);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openFinance());
    });
    \u0275\u0275text(8, "Ingresos ");
    \u0275\u0275element(9, "ion-icon", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 93)(11, "div", 94);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAgenda());
    });
    \u0275\u0275elementStart(12, "div", 95);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 96);
    \u0275\u0275text(15, "Pendientes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 97);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAlumnos());
    });
    \u0275\u0275elementStart(17, "div", 95);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 96);
    \u0275\u0275text(20, "Alumnos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 97);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAgenda());
    });
    \u0275\u0275elementStart(22, "div", 95);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 96);
    \u0275\u0275text(25, "Clases Mes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(26, "div", 98);
    \u0275\u0275elementStart(27, "div", 99);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openFinance());
    });
    \u0275\u0275elementStart(28, "div", 100)(29, "span");
    \u0275\u0275text(30, "TOTAL RECAUDADO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 101);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, EntrenadorHomePage_ng_container_4_div_34_Template, 10, 2, "div", 102);
    \u0275\u0275elementStart(35, "div", 103)(36, "div", 104)(37, "h4", 105);
    \u0275\u0275text(38, "Centro de Mando");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 107)(41, "div", 108);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAgenda());
    });
    \u0275\u0275elementStart(42, "div", 109);
    \u0275\u0275element(43, "ion-icon", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Mi Agenda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 111);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_46_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAlumnos());
    });
    \u0275\u0275elementStart(47, "div", 112);
    \u0275\u0275element(48, "ion-icon", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Alumnos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 111);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_51_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAgendar());
    });
    \u0275\u0275elementStart(52, "div", 112);
    \u0275\u0275element(53, "ion-icon", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Agendar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 115)(57, "div", 116);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_57_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToReservas());
    });
    \u0275\u0275elementStart(58, "div", 117)(59, "div", 118);
    \u0275\u0275text(60, "\u{1F3BE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 119)(62, "h3");
    \u0275\u0275text(63, "Reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p");
    \u0275\u0275text(65, "Clubes y Disponibilidad");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(66, "ion-icon", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 121);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_container_4_Template_div_click_67_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToTorneos());
    });
    \u0275\u0275elementStart(68, "div", 117)(69, "div", 122);
    \u0275\u0275text(70, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 119)(72, "h3");
    \u0275\u0275text(73, "Mis Torneos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p");
    \u0275\u0275text(75, "Torneos y Americanos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(76, "ion-icon", 120);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.claseActual || ctx_r0.clasesHoyList.length > 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.clases_pendientes || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats.total_alumnos);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats.clases_mes || 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(33, 6, ctx_r0.ingresosRecaudados, "CLP", "$", "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.iaTip);
  }
}
function EntrenadorHomePage_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 136);
    \u0275\u0275element(1, "div", 137);
    \u0275\u0275elementStart(2, "div", 138)(3, "h2");
    \u0275\u0275text(4, "CENTRO DE CONTROL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "GESTI\xD3N DEL ENTRENADOR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 139)(8, "div", 140);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/perfil"));
    });
    \u0275\u0275elementStart(9, "div", 141);
    \u0275\u0275element(10, "ion-icon", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Mi Perfil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 142);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/entrenador-agendar"));
    });
    \u0275\u0275elementStart(14, "div", 143);
    \u0275\u0275element(15, "ion-icon", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Agendar Clase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 140);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/disponibilidad-entrenador"));
    });
    \u0275\u0275elementStart(19, "div", 144);
    \u0275\u0275element(20, "ion-icon", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Mi Disponibilidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 140);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/clubes-reservar"));
    });
    \u0275\u0275elementStart(24, "div", 143);
    \u0275\u0275element(25, "ion-icon", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Reservar Cancha");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 140);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_28_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/jugador-campeonatos"));
    });
    \u0275\u0275elementStart(29, "div", 141);
    \u0275\u0275element(30, "ion-icon", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Mis Torneos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 142);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/alumnos?filter=renovacion"));
    });
    \u0275\u0275elementStart(34, "div", 148);
    \u0275\u0275element(35, "ion-icon", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Renovaciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 140);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_38_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/entrenador-packs"));
    });
    \u0275\u0275elementStart(39, "div", 150);
    \u0275\u0275element(40, "ion-icon", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Mis Packs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 140);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_43_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/entrenador-cupones"));
    });
    \u0275\u0275elementStart(44, "div", 150);
    \u0275\u0275element(45, "ion-icon", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "Cupones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 142);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_48_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/canje-club"));
    });
    \u0275\u0275elementStart(49, "div", 153);
    \u0275\u0275element(50, "ion-icon", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52, "Canjear Puntos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 140);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_53_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("/entrenador-mi-plan"));
    });
    \u0275\u0275elementStart(54, "div", 155);
    \u0275\u0275element(55, "ion-icon", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57, "Mi Plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 157);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_9_Template_div_click_58_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onControlItemClick("logout"));
    });
    \u0275\u0275elementStart(59, "div", 158);
    \u0275\u0275element(60, "ion-icon", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "Cerrar Sesi\xF3n");
    \u0275\u0275elementEnd()()()();
  }
}
function EntrenadorHomePage_ng_template_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_11_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNotifClick("perfil"));
    });
    \u0275\u0275elementStart(1, "div", 169);
    \u0275\u0275element(2, "ion-icon", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 170)(4, "h4");
    \u0275\u0275text(5, "Configura tu Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Agrega tu direcci\xF3n en tu perfil para que tus alumnos te encuentren m\xE1s f\xE1cil.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 171)(9, "ion-button", 172);
    \u0275\u0275text(10, "Ir al Perfil");
    \u0275\u0275elementEnd()()();
  }
}
function EntrenadorHomePage_ng_template_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_11_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNotifClick("plan"));
    });
    \u0275\u0275elementStart(1, "div", 169);
    \u0275\u0275element(2, "ion-icon", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 170)(4, "h4");
    \u0275\u0275text(5, "Periodo de Prueba Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Tu plan gratuito est\xE1 activo. Te quedan ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " de prueba.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 171)(12, "ion-button", 172);
    \u0275\u0275text(13, "Ver Mi Plan");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r0.planTrialDays, " d\xEDas");
  }
}
function EntrenadorHomePage_ng_template_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_11_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNotifClick("perfil"));
    });
    \u0275\u0275elementStart(1, "div", 169);
    \u0275\u0275element(2, "ion-icon", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 170)(4, "h4");
    \u0275\u0275text(5, "Configura tus Pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Para recibir pagos autom\xE1ticos, vincula tu cuenta de Mercado Pago en tu perfil.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 171)(9, "ion-button", 176);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_11_div_10_Template_ion_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.dismissMPReminder();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(10, "Ignorar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-button", 172);
    \u0275\u0275text(12, "Ir al Perfil");
    \u0275\u0275elementEnd()()();
  }
}
function EntrenadorHomePage_ng_template_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177);
    \u0275\u0275element(1, "ion-icon", 178);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No tienes notificaciones pendientes.");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorHomePage_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 160);
    \u0275\u0275element(1, "div", 137);
    \u0275\u0275elementStart(2, "div", 161)(3, "h2");
    \u0275\u0275text(4, "NOTIFICACIONES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 162);
    \u0275\u0275listener("click", function EntrenadorHomePage_ng_template_11_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeNotificaciones());
    });
    \u0275\u0275element(6, "ion-icon", 163);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 164);
    \u0275\u0275template(8, EntrenadorHomePage_ng_template_11_div_8_Template, 11, 0, "div", 165)(9, EntrenadorHomePage_ng_template_11_div_9_Template, 14, 1, "div", 166)(10, EntrenadorHomePage_ng_template_11_div_10_Template, 13, 0, "div", 165)(11, EntrenadorHomePage_ng_template_11_div_11_Template, 4, 0, "div", 167);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.sinDireccion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.planTrialActivo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showMPReminder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getNotificacionesCount() === 0);
  }
}
function EntrenadorHomePage_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 179);
    \u0275\u0275element(1, "div", 137);
    \u0275\u0275elementStart(2, "div", 138)(3, "h2", 180);
    \u0275\u0275text(4, "RESUMEN MENSUAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 181);
    \u0275\u0275text(6, "INGRESOS CONFIRMADOS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 182)(8, "div", 183)(9, "div", 184)(10, "div", 185)(11, "span", 186);
    \u0275\u0275text(12, "Recaudado este mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 187);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "p", 188);
    \u0275\u0275element(17, "ion-icon", 189);
    \u0275\u0275text(18, " Ingresos confirmados por packs activos. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 1, ctx_r0.ingresosRecaudados, "CLP", "$", "1.0-0"));
  }
}
var _EntrenadorHomePage = class _EntrenadorHomePage {
  constructor(router, mysqlService, authService, entrenamientoService, actionSheetCtrl, ngZone) {
    this.router = router;
    this.mysqlService = mysqlService;
    this.authService = authService;
    this.entrenamientoService = entrenamientoService;
    this.actionSheetCtrl = actionSheetCtrl;
    this.ngZone = ngZone;
    this.coachNombre = "Coach";
    this.isDev = true;
    this.coachFoto = null;
    this.isLoading = false;
    this.clasesHoyList = [];
    this.isClassesExpanded = false;
    this.stats = {
      total_alumnos: 0,
      clases_mes: 0,
      clases_grupales_mes: 0,
      clases_hoy: 0
    };
    this.showMPReminder = false;
    this.isNotificacionesOpen = false;
    this.isControlCenterOpen = false;
    this.sinDireccion = false;
    this.planTrialDays = 0;
    this.planTrialActivo = false;
    this.claseActual = null;
    this.alumnosRecordatorioList = [];
    this.ingresosProyectados = 0;
    this.ingresosRecaudados = 0;
    this.iaTip = "Cargando consejo del d\xEDa...";
    this.isFinanceOpen = false;
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      logOutOutline,
      personOutline,
      addCircleOutline,
      add,
      checkmarkDoneCircleOutline,
      chevronDownOutline,
      chevronUpOutline,
      giftOutline,
      notificationsOutline,
      warningOutline,
      gift,
      close,
      closeOutline,
      locationOutline,
      cardOutline,
      flashOutline,
      logoWhatsapp,
      timeOutline,
      alertCircleOutline,
      pricetagsOutline,
      statsChartOutline,
      informationCircleOutline,
      tennisballOutline,
      trophyOutline,
      chevronForward,
      barcodeOutline
    });
  }
  getNotificacionesCount() {
    let count = 0;
    if (this.planTrialActivo)
      count++;
    if (this.showMPReminder)
      count++;
    if (this.sinDireccion)
      count++;
    return count;
  }
  openNotificaciones() {
    this.isNotificacionesOpen = true;
  }
  closeNotificaciones() {
    this.isNotificacionesOpen = false;
  }
  onNotifClick(type) {
    if (type === "perfil") {
      this.closeNotificaciones();
      setTimeout(() => {
        this.router.navigate(["/perfil"]);
      }, 100);
    }
    if (type === "plan") {
      this.closeNotificaciones();
      setTimeout(() => {
        this.router.navigate(["/entrenador-mi-plan"]);
      }, 100);
    }
  }
  ionViewWillEnter() {
    this.loadProfile();
  }
  loadProfile() {
    const userId = Number(localStorage.getItem("userId"));
    if (!userId)
      return;
    const token = localStorage.getItem("token");
    fetch(`${environment.apiUrl}/subscriptions/get_subscription_status.php?coach_id=${userId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-Authorization": `Bearer ${token}`
      }
    }).then((res) => res.json()).then((subRes) => {
      if (subRes.days_remaining && subRes.days_remaining > 0) {
        this.planTrialActivo = true;
        this.planTrialDays = subRes.days_remaining;
      } else {
        this.planTrialActivo = false;
        this.planTrialDays = 0;
      }
      if (subRes.status === "inactive" || subRes.status === "past_due") {
        this.actionSheetCtrl.create({
          header: "Plan Inactivo",
          subHeader: "Tu suscripci\xF3n no se encuentra activa.",
          buttons: [
            {
              text: "Ver Mi Plan",
              icon: "card-outline",
              handler: () => {
                this.ngZone.run(() => this.router.navigate(["/entrenador-mi-plan"]));
              }
            },
            {
              text: "Cerrar sesi\xF3n",
              icon: "log-out-outline",
              handler: () => {
                this.logout();
              }
            }
          ],
          backdropDismiss: false
        }).then((a) => a.present());
        return;
      }
      this.fetchProfileData(userId);
    }).catch((err) => {
      console.error("Error checking subscription", err);
      this.fetchProfileData(userId);
    });
  }
  fetchProfileData(userId) {
    this.isLoading = true;
    this.mysqlService.getPerfil(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.coachNombre = res.user.nombre || "Coach";
          let foto = res.user.foto_perfil || res.user.link_foto || res.user.foto;
          if (foto) {
            localStorage.setItem("userFoto", foto);
            localStorage.setItem("foto_perfil", foto);
            this.coachFoto = this.getProfileImage(foto);
          }
          const hideReminder = localStorage.getItem("hideMPReminder");
          if (!res.user.mp_collector_id && hideReminder !== "true") {
            this.showMPReminder = true;
          } else {
            this.showMPReminder = false;
          }
          const dir = res.direccion;
          if (dir && dir.calle && dir.calle.trim().length > 2 && dir.comuna && dir.comuna.trim().length > 2) {
            this.sinDireccion = false;
          } else {
            this.sinDireccion = true;
          }
        }
        this.loadDashboardStats(userId);
        this.loadAgenda();
        this.checkClaseActual();
        this.loadPaymentAlerts(userId);
        this.generateIATip();
      },
      error: (err) => {
        console.error("Error loading profile:", err);
        this.isLoading = false;
      }
    });
  }
  fetchRevenue(userId) {
    this.entrenamientoService.getFinanzas(userId).subscribe({
      next: (res) => {
        if (res) {
          this.ingresosRecaudados = res.recaudado || 0;
          this.ingresosProyectados = res.proyectado || 0;
        }
      },
      error: (err) => console.warn("Error fetching finances:", err)
    });
  }
  generateIATip() {
    const token = localStorage.getItem("token");
    fetch(`${environment.apiUrl}/ia/get_tip_frontend.php`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-Authorization": `Bearer ${token}`
      }
    }).then((res) => res.json()).then((res) => {
      if (res && res.tips && res.tips.length > 0) {
        const mainTip = res.tips[0];
        this.iaTip = `${mainTip.titulo}: ${mainTip.mensaje}`;
      } else if (res && res.mensaje) {
        this.iaTip = `${res.titulo}: ${res.mensaje}`;
      }
    }).catch((err) => {
      console.warn("Error fetching IA tip:", err);
      const fallbacks = [
        "El clima est\xE1 h\xFAmedo hoy, recuerda a tus alumnos que la bola pesar\xE1 m\xE1s en el rev\xE9s.",
        "Excelente d\xEDa para trabajar voleas bajas, la superficie est\xE1 r\xE1pida.",
        "Tip: El 70% de los errores no forzados en alumnos nivel medio vienen de mala posici\xF3n de pies."
      ];
      this.iaTip = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    });
  }
  loadDashboardStats(userId) {
    this.entrenamientoService.getDashboardStats(userId).subscribe({
      next: (res) => {
        this.stats = res;
        this.fetchRevenue(userId);
      },
      error: (err) => console.error("Error loading stats:", err)
    });
  }
  loadAgenda() {
    const userId = Number(localStorage.getItem("userId"));
    if (!userId)
      return;
    this.entrenamientoService.getReservasEntrenador(userId).subscribe({
      next: (res) => {
        const today = /* @__PURE__ */ new Date();
        const tomorrow = /* @__PURE__ */ new Date();
        tomorrow.setDate(today.getDate() + 1);
        const formatDate = (date) => {
          const yyyy = date.getFullYear();
          const mm = String(date.getMonth() + 1).padStart(2, "0");
          const dd = String(date.getDate()).padStart(2, "0");
          return `${yyyy}-${mm}-${dd}`;
        };
        const fechaHoy = formatDate(today);
        const fechaManana = formatDate(tomorrow);
        const diaSemanaHoy = today.getDay() === 0 ? 7 : today.getDay();
        const diaSemanaManana = tomorrow.getDay() === 0 ? 7 : tomorrow.getDay();
        let clases = [];
        if (res.reservas_tradicionales) {
          const proximas = res.reservas_tradicionales.filter((r) => r.fecha === fechaHoy || r.fecha === fechaManana);
          clases.push(...proximas.map((r) => ({
            fecha: r.fecha,
            diaLabel: r.fecha === fechaHoy ? "Hoy" : "Ma\xF1ana",
            hora: r.hora_inicio.substring(0, 5),
            tipo: r.tipo === "pack_grupal" || r.tipo === "grupal" ? "Grupal" : r.tipo?.toLowerCase() === "multijugador" || r.cantidad_personas && r.cantidad_personas > 1 || r.pack_nombre?.toLowerCase()?.includes("duo") || r.pack_nombre?.toLowerCase()?.includes("dupla") || r.pack_nombre?.toLowerCase()?.includes("pareja") ? "Multijugador" : "Individual",
            titulo: r.jugador_nombre || "Clase Grupal",
            subtitulo: r.pack_nombre,
            lugar: r.club_nombre,
            estado: r.estado
          })));
        }
        if (res.packs_grupales) {
          const grupHoy = res.packs_grupales.filter((g) => Number(g.dia_semana) === diaSemanaHoy && !clases.some((c) => c.fecha === fechaHoy && c.hora === g.hora_inicio.substring(0, 5)));
          const grupManana = res.packs_grupales.filter((g) => Number(g.dia_semana) === diaSemanaManana && !clases.some((c) => c.fecha === fechaManana && c.hora === g.hora_inicio.substring(0, 5)));
          clases.push(...grupHoy.map((g) => ({
            fecha: fechaHoy,
            diaLabel: "Hoy",
            hora: g.hora_inicio.substring(0, 5),
            tipo: "Grupal",
            titulo: g.pack_nombre,
            subtitulo: `${g.inscritos_confirmados || 0} inscritos`,
            lugar: g.club_nombre,
            estado: "activo"
          })));
          clases.push(...grupManana.map((g) => ({
            fecha: fechaManana,
            diaLabel: "Ma\xF1ana",
            hora: g.hora_inicio.substring(0, 5),
            tipo: "Grupal",
            titulo: g.pack_nombre,
            subtitulo: `${g.inscritos_confirmados || 0} inscritos`,
            lugar: g.club_nombre,
            estado: "activo"
          })));
        }
        clases.sort((a, b) => {
          if (a.fecha !== b.fecha)
            return a.fecha.localeCompare(b.fecha);
          return a.hora.localeCompare(b.hora);
        });
        const now = /* @__PURE__ */ new Date();
        const currentHHmm = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        this.clasesHoyList = clases.filter((c) => {
          if (c.diaLabel === "Hoy") {
            return c.hora >= currentHHmm;
          }
          return true;
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error loading agenda:", err);
        this.isLoading = false;
      }
    });
  }
  handleRefresh(event) {
    this.loadProfile();
    setTimeout(() => {
      event.target.complete();
    }, 1e3);
  }
  goToPacks() {
    this.router.navigate(["/entrenador-packs"]);
  }
  goToAgenda() {
    this.router.navigate(["/entrenador-entrenamientos"]);
  }
  goToAlumnos() {
    this.router.navigate(["/alumnos"]);
  }
  goToAgendar() {
    this.router.navigate(["/entrenador-agendar"]);
  }
  goToCupones() {
    this.router.navigate(["/entrenador-cupones"]);
  }
  goToConfig() {
    this.router.navigate(["/entrenador-config"]);
  }
  goToPerfil() {
    this.router.navigate(["/perfil"]);
  }
  goToReservas() {
    this.router.navigate(["/clubes-reservar"]);
  }
  goToTorneos() {
    this.router.navigate(["/jugador-campeonatos"]);
  }
  openFinance() {
    this.isControlCenterOpen = false;
    setTimeout(() => {
      this.isFinanceOpen = true;
    }, 400);
  }
  logout() {
    return __async(this, null, function* () {
      console.log("Logging out trainer...");
      localStorage.clear();
      this.authService.logout().catch((err) => console.warn("AuthService logout error:", err));
      this.ngZone.run(() => {
        this.router.navigate(["/login"], { replaceUrl: true });
      });
    });
  }
  goToHome() {
    this.router.navigate(["/entrenador-home"]);
  }
  dismissMPReminder() {
    this.showMPReminder = false;
    localStorage.setItem("hideMPReminder", "true");
  }
  openSettings() {
    return __async(this, null, function* () {
      const actionSheet = yield this.actionSheetCtrl.create({
        header: "Ajustes del Entrenador",
        buttons: [
          {
            text: "Mi Perfil",
            icon: "person-outline",
            handler: () => {
              this.router.navigate(["/perfil"]);
            }
          },
          {
            text: "Tarjeta Digital",
            icon: "card-outline",
            handler: () => {
              this.router.navigate(["/tarjeta-digital"]);
            }
          },
          {
            text: "Canjear Puntos Club",
            icon: "barcode-outline",
            handler: () => {
              this.router.navigate(["/canje-club"]);
            }
          },
          {
            text: "Mis Cupones",
            icon: "gift-outline",
            handler: () => {
              this.router.navigate(["/entrenador-cupones"]);
            }
          },
          {
            text: "Mi Plan",
            icon: "card-outline",
            handler: () => {
              this.router.navigate(["/entrenador-mi-plan"]);
            }
          },
          {
            text: "Horarios disponibles",
            icon: "time-outline",
            handler: () => {
              this.router.navigate(["/disponibilidad-entrenador"]);
            }
          },
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
  // --- FEATURE LOGIC ---
  checkClaseActual() {
    const now = /* @__PURE__ */ new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const timeStr = `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
    const hoy = this.clasesHoyList.filter((c) => c.diaLabel === "Hoy");
    const active = hoy.find((c) => {
      const cTime = c.hora;
      const [cHour, cMin] = cTime.split(":").map(Number);
      const cDate = /* @__PURE__ */ new Date();
      cDate.setHours(cHour, cMin, 0);
      const diffMs = now.getTime() - cDate.getTime();
      const diffMins = diffMs / 6e4;
      return diffMins >= -5 && diffMins <= 55;
    });
    this.claseActual = active || null;
  }
  loadPaymentAlerts(userId) {
    this.mysqlService.getAlumnos(userId).subscribe({
      next: (res) => {
        if (res && Array.isArray(res)) {
          this.alumnosRecordatorioList = res.filter((a) => a.tiene_pack == 1 && Number(a.clases_disponibles) <= 1).slice(0, 5);
        }
      }
    });
  }
  onControlItemClick(action) {
    this.isControlCenterOpen = false;
    setTimeout(() => {
      if (action === "logout") {
        this.logout();
      } else {
        this.router.navigateByUrl(action);
      }
    }, 150);
  }
  sendWhatsAppReminder(alumno) {
    const msg = `Hola ${alumno.nombre}, te escribo de Padel Academy. Notamos que te quedan ${alumno.clases_disponibles} clases en tu pack. \xA1No olvides renovar para asegurar tu horario! \u{1F3BE}`;
    window.open(`https://wa.me/${alumno.telefono}?text=${encodeURIComponent(msg)}`, "_blank");
  }
  marcarAsistenciaLive() {
    if (this.claseActual) {
      console.log("Marcar asistencia para:", this.claseActual.titulo);
    }
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
_EntrenadorHomePage.\u0275fac = function EntrenadorHomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EntrenadorHomePage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(EntrenamientoService), \u0275\u0275directiveInject(ActionSheetController), \u0275\u0275directiveInject(NgZone));
};
_EntrenadorHomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrenadorHomePage, selectors: [["app-entrenador-home"]], decls: 14, vars: 13, consts: [[4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", 3, "click"], ["name", "add"], ["initialBreakpoint", "0.85", 1, "control-center-modal", 3, "didDismiss", "isOpen", "breakpoints"], ["initialBreakpoint", "0.9", 1, "notifications-modal", 3, "didDismiss", "isOpen", "breakpoints"], ["initialBreakpoint", "0.6", 1, "finance-modal", 3, "didDismiss", "isOpen", "breakpoints"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "coach-profile-brief"], ["class", "profile-img-container", 4, "ngIf"], [1, "title-details"], [1, "welcome-pre"], [1, "header-title"], ["class", "notifications-btn", 3, "click", 4, "ngIf"], [1, "profile-img-container"], [1, "coach-img", 3, "src"], [1, "notifications-btn", 3, "click"], ["name", "notifications-outline"], ["color", "danger", 1, "notif-badge"], [1, "header-v2", "animate-fade"], [1, "h-text"], [1, "h-title-row"], [1, "h-wave"], [1, "h-actions"], [1, "h-notif", 3, "click"], ["class", "h-dot", 4, "ngIf"], [1, "h-avatar", 3, "click"], ["alt", "Coach", 3, "src"], [1, "h-dot"], [1, "dashboard-container"], ["class", "live-class-banner animate-up", 3, "click", 4, "ngIf"], [1, "metrics-dashboard", "animate-up"], [1, "metric-item", "highlight", "animate-pulse", "clickable-metric", 3, "click"], [1, "metric-top"], [1, "metric-value"], [1, "metric-label"], [1, "metric-divider"], [1, "metric-item"], ["class", "payment-reminders-section animate-up", "style", "animation-delay: 0.1s;", 4, "ngIf"], [1, "next-classes-section", "animate-up", 2, "animation-delay", "0.1s"], [1, "section-header", 3, "click"], [1, "header-left"], [1, "section-title"], ["color", "dark", 4, "ngIf"], ["fill", "clear", "color", "dark", 1, "toggle-btn"], [3, "name"], ["class", "classes-container", 4, "ngIf"], [1, "ia-tip-banner", "animate-up"], [1, "modules-column", "animate-up", 2, "animation-delay", "0.2s"], [1, "nike-card", "module-card", 3, "click"], ["src", "/assets/reserva-bg.jpg", 1, "module-img"], [1, "module-body"], ["name", "chevron-forward-outline"], [1, "live-class-banner", "animate-up", 3, "click"], [1, "live-status"], [1, "pulse-dot"], [1, "live-body"], [1, "live-info"], [1, "live-actions"], ["fill", "clear", "color", "dark", 1, "action-circle", 3, "click"], ["name", "checkmark-done-circle-outline"], [1, "payment-reminders-section", "animate-up", 2, "animation-delay", "0.1s"], [1, "section-header-compact"], [1, "mini-title"], ["color", "danger", 1, "mini-badge"], [1, "reminders-scroll"], ["class", "reminder-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "reminder-chip", 3, "click"], [1, "chip-left"], ["name", "alert-circle-outline", 1, "alert-icon"], [1, "name"], [1, "chip-right"], [1, "count"], ["name", "logo-whatsapp", 1, "wa-icon"], ["color", "dark"], [1, "classes-container"], ["class", "class-card-mini", 4, "ngFor", "ngForOf"], [1, "class-card-mini"], [1, "time-col"], [1, "day-label"], [1, "hour"], [1, "info-col"], [1, "title"], [1, "subtitle"], [1, "dashboard-v2", "animate-up"], ["class", "next-class-v2", 3, "click", 4, "ngIf"], [1, "progress-v2", "delay-1"], [1, "p-header"], [1, "v2-title"], [1, "p-pts", 3, "click"], ["name", "chevron-forward"], [1, "p-metrics"], [1, "p-metric-item", "highlight", 3, "click"], [1, "m-val"], [1, "m-lbl"], [1, "p-metric-item", 3, "click"], [1, "p-divider"], [1, "p-recaudado-section", 3, "click"], [1, "p-l-header"], [1, "p-total-value"], ["class", "daily-tip-v2 delay-1", "id", "trainer-tip-v2", 4, "ngIf"], ["id", "trainer-menu-v2", 1, "actions-v2-card", "delay-2"], [1, "v2-card-header"], [1, "v2-subtitle"], [1, "v2-status-dot", "pulse"], [1, "actions-grid-v2"], [1, "action-btn-v2", "hero-action", 3, "click"], [1, "a-icon", "bg-hero"], ["name", "calendar-outline"], [1, "action-btn-v2", 3, "click"], [1, "a-icon", "bg-soft"], ["name", "person-outline"], ["name", "add-circle-outline"], [1, "hero-actions-grid"], [1, "hero-booking-action", "animate-pulse", 3, "click"], [1, "hero-btn-content"], [1, "hero-icon-wrap"], [1, "hero-text-wrap"], ["name", "arrow-forward"], [1, "hero-booking-action", "tournament-hero", "animate-pop", "delay-1", 3, "click"], [1, "hero-icon-wrap", "trophy"], [1, "next-class-v2", 3, "click"], [1, "nc-icon-badge"], [1, "nc-content"], [1, "nc-tag"], [1, "nc-date"], [1, "nc-coach"], ["name", "location-outline"], ["name", "chevron-forward", 1, "nc-arrow"], ["id", "trainer-tip-v2", 1, "daily-tip-v2", "delay-1"], [1, "t-icon"], ["name", "flash-outline"], [1, "t-content"], [1, "t-badge"], [1, "control-center-content"], [1, "drag-handle"], [1, "modal-header-nike"], [1, "control-grid"], [1, "grid-item", 3, "click"], [1, "icon-circle", "profile"], [1, "grid-item", "highlights", 3, "click"], [1, "icon-circle", "calendar"], [1, "icon-circle", "time"], ["name", "time-outline"], ["name", "tennisball-outline"], ["name", "trophy-outline"], [1, "icon-circle", "renovaciones"], ["name", "alert-circle-outline"], [1, "icon-circle", "coupon"], ["name", "pricetags-outline"], ["name", "gift-outline"], [1, "icon-circle", "renovaciones", 2, "background", "rgba(0, 255, 127, 0.1)", "color", "#00b050"], ["name", "barcode-outline"], [1, "icon-circle", "plan"], ["name", "card-outline"], [1, "grid-item", "danger", 3, "click"], [1, "icon-circle", "logout"], ["name", "log-out-outline"], [1, "notifications-content"], [1, "modal-header"], ["fill", "clear", 1, "close-btn", 3, "click"], ["name", "close", "slot", "icon-only"], [1, "notifications-list", 2, "padding-bottom", "30px"], ["class", "notification-card warning-card animate-pop", 3, "click", 4, "ngIf"], ["class", "notification-card success-card animate-pop", 3, "click", 4, "ngIf"], ["class", "empty-notifications", 4, "ngIf"], [1, "notification-card", "warning-card", "animate-pop", 3, "click"], [1, "icon-box"], [1, "card-text"], [1, "card-actions"], ["fill", "solid", 1, "action-btn"], [1, "notification-card", "success-card", "animate-pop", 3, "click"], ["name", "gift"], ["name", "wallet"], ["fill", "clear", "color", "medium", 3, "click"], [1, "empty-notifications"], ["name", "notifications-off-outline"], [1, "finance-content"], [1, "premium-title"], [1, "premium-subtitle"], [1, "finance-section", "static"], [1, "finance-card-premium"], [1, "finance-header"], [1, "main-stat", 2, "width", "100%", "text-align", "center"], [1, "label"], [1, "value", "main-value", 2, "font-size", "38px"], [1, "finance-disclaimer"], ["name", "information-circle-outline"]], template: function EntrenadorHomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content");
    \u0275\u0275template(1, EntrenadorHomePage_ng_container_1_Template, 12, 3, "ng-container", 0)(2, EntrenadorHomePage_ng_container_2_Template, 16, 3, "ng-container", 0)(3, EntrenadorHomePage_ng_container_3_Template, 48, 9, "ng-container", 0)(4, EntrenadorHomePage_ng_container_4_Template, 77, 11, "ng-container", 0);
    \u0275\u0275elementStart(5, "ion-fab", 1)(6, "ion-fab-button", 2);
    \u0275\u0275listener("click", function EntrenadorHomePage_Template_ion_fab_button_click_6_listener() {
      return ctx.isControlCenterOpen = true;
    });
    \u0275\u0275element(7, "ion-icon", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-modal", 4);
    \u0275\u0275listener("didDismiss", function EntrenadorHomePage_Template_ion_modal_didDismiss_8_listener() {
      return ctx.isControlCenterOpen = false;
    });
    \u0275\u0275template(9, EntrenadorHomePage_ng_template_9_Template, 63, 0, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-modal", 5);
    \u0275\u0275listener("didDismiss", function EntrenadorHomePage_Template_ion_modal_didDismiss_10_listener() {
      return ctx.closeNotificaciones();
    });
    \u0275\u0275template(11, EntrenadorHomePage_ng_template_11_Template, 12, 4, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-modal", 6);
    \u0275\u0275listener("didDismiss", function EntrenadorHomePage_Template_ion_modal_didDismiss_12_listener() {
      return ctx.isFinanceOpen = false;
    });
    \u0275\u0275template(13, EntrenadorHomePage_ng_template_13_Template, 19, 6, "ng-template");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isDev);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isDev);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isDev);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isDev);
    \u0275\u0275advance(4);
    \u0275\u0275property("isOpen", ctx.isControlCenterOpen)("breakpoints", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.isNotificacionesOpen)("breakpoints", \u0275\u0275pureFunction0(11, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.isFinanceOpen)("breakpoints", \u0275\u0275pureFunction0(12, _c2));
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
  IonBadge,
  IonModal,
  CurrencyPipe
], styles: ['\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.7));\n}\n.header-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 65px;\n  left: 35px;\n  right: 35px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  z-index: 2;\n}\n.header-content[_ngcontent-%COMP%]   .coach-profile-brief[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n.header-content[_ngcontent-%COMP%]   .coach-profile-brief[_ngcontent-%COMP%]   .profile-img-container[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  flex-shrink: 0;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n}\n.header-content[_ngcontent-%COMP%]   .coach-profile-brief[_ngcontent-%COMP%]   .profile-img-container[_ngcontent-%COMP%]   .coach-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content[_ngcontent-%COMP%]   .coach-profile-brief[_ngcontent-%COMP%]   .title-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.header-content[_ngcontent-%COMP%]   .coach-profile-brief[_ngcontent-%COMP%]   .title-details[_ngcontent-%COMP%]   .welcome-pre[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.75);\n  letter-spacing: 3px;\n  margin-bottom: 6px;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.header-content[_ngcontent-%COMP%]   .coach-profile-brief[_ngcontent-%COMP%]   .title-details[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  color: #fff;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);\n}\n.header-content[_ngcontent-%COMP%]   .notifications-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%]   .notifications-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .notifications-btn[_ngcontent-%COMP%]   .notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: -2px;\n  font-size: 10px;\n  font-weight: 800;\n  border-radius: 50%;\n  padding: 4px 6px;\n  min-width: 20px;\n  line-height: 1;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 0 20px 100px;\n  position: relative;\n  z-index: 10;\n  background: white;\n  border-radius: 30px 30px 0 0;\n  margin-top: -30px;\n}\n.finance-section[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.finance-section[_ngcontent-%COMP%]   .finance-card[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border: 1px solid #f2f2f7;\n  border-radius: 20px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n}\n.finance-section[_ngcontent-%COMP%]   .finance-card[_ngcontent-%COMP%]   .divider-v[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: #e5e5ea;\n}\n.finance-section[_ngcontent-%COMP%]   .finance-card[_ngcontent-%COMP%]   .finance-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.finance-section[_ngcontent-%COMP%]   .finance-card[_ngcontent-%COMP%]   .finance-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.finance-section[_ngcontent-%COMP%]   .finance-card[_ngcontent-%COMP%]   .finance-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: #000;\n}\n.finance-section[_ngcontent-%COMP%]   .finance-card[_ngcontent-%COMP%]   .finance-item[_ngcontent-%COMP%]   .value.recaudado[_ngcontent-%COMP%] {\n  color: #2ecc71;\n}\n.finance-section[_ngcontent-%COMP%]   .finance-card[_ngcontent-%COMP%]   .finance-item[_ngcontent-%COMP%]   .value.proyectado[_ngcontent-%COMP%] {\n  color: #007aff;\n}\n.ia-tip-banner[_ngcontent-%COMP%] {\n  margin: 15px 20px 25px;\n}\n.ia-tip-banner[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #111 0%,\n      #222 100%);\n  border-radius: 24px;\n  padding: 20px;\n  border: 1px solid rgba(204, 255, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.ia-tip-banner[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(204, 255, 0, 0.05) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.ia-tip-banner[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]   .tip-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.ia-tip-banner[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]   .tip-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ccff00;\n  font-size: 18px;\n}\n.ia-tip-banner[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]   .tip-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 950;\n  color: #ccff00;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.ia-tip-banner[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 600;\n  font-style: italic;\n}\n.live-class-banner[_ngcontent-%COMP%] {\n  background: #ccff00;\n  border-radius: 24px;\n  padding: 20px;\n  margin: 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  box-shadow: 0 15px 30px rgba(204, 255, 0, 0.25);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n}\n.live-class-banner[_ngcontent-%COMP%]   .live-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 10px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n.live-class-banner[_ngcontent-%COMP%]   .live-status[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #ff3b30;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse-red 1.5s infinite;\n}\n.live-class-banner[_ngcontent-%COMP%]   .live-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.live-class-banner[_ngcontent-%COMP%]   .live-body[_ngcontent-%COMP%]   .live-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 900;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n}\n.live-class-banner[_ngcontent-%COMP%]   .live-body[_ngcontent-%COMP%]   .live-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.6);\n}\n.live-class-banner[_ngcontent-%COMP%]   .live-body[_ngcontent-%COMP%]   .action-circle[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 44px;\n  height: 44px;\n  --background: rgba(0, 0, 0, 0.1);\n  --border-radius: 50%;\n  --box-shadow: none;\n}\n.live-class-banner[_ngcontent-%COMP%]   .live-body[_ngcontent-%COMP%]   .action-circle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #000;\n}\n@keyframes _ngcontent-%COMP%_pulse-red {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.7);\n  }\n  70% {\n    transform: scale(1.1);\n    box-shadow: 0 0 0 8px rgba(255, 59, 48, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);\n  }\n}\n.mp-reminder-alert[_ngcontent-%COMP%] {\n  background: #fff9e6;\n  border: 1px solid #ffeeba;\n  border-radius: 20px;\n  padding: 20px;\n  margin: 20px 0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.mp-reminder-alert[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: flex-start;\n  margin-bottom: 15px;\n}\n.mp-reminder-alert[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.mp-reminder-alert[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%]   .reminder-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 800;\n  color: #856404;\n}\n.mp-reminder-alert[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%]   .reminder-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #856404;\n}\n.mp-reminder-alert[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.mp-reminder-alert[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 15px;\n  --padding-end: 15px;\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  margin: 0;\n}\n.mp-reminder-alert[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 12px;\n}\n.finance-modal[_ngcontent-%COMP%] {\n  --border-radius: 35px 35px 0 0;\n  --box-shadow: 0 -10px 40px rgba(0,0,0,0.1);\n}\n.finance-modal[_ngcontent-%COMP%]::part(content) {\n  background: #fff;\n}\n.finance-content[_ngcontent-%COMP%] {\n  --background: #fff;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-section.static[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 0 20px;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #f2f2f7;\n  border-radius: 32px;\n  padding: 30px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 30px;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-header[_ngcontent-%COMP%]   .main-stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #8e8e93;\n  font-weight: 800;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 6px;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-header[_ngcontent-%COMP%]   .main-stat[_ngcontent-%COMP%]   .main-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -1px;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-header[_ngcontent-%COMP%]   .percentage-badge[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2ecc71;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 900;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  height: 12px;\n  background: #f2f2f7;\n  border-radius: 6px;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2ecc71 0%,\n      #27ae60 100%);\n  border-radius: 6px;\n  transition: width 1s ease-in-out;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-footer-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-footer-stats[_ngcontent-%COMP%]   .sub-stat[_ngcontent-%COMP%]   .sub-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8e8e93;\n  font-weight: 700;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-footer-stats[_ngcontent-%COMP%]   .sub-stat[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 850;\n  color: #000;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-footer-stats[_ngcontent-%COMP%]   .sub-stat[_ngcontent-%COMP%]   .sub-value.pending[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-card-premium[_ngcontent-%COMP%]   .finance-footer-stats[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-disclaimer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 11px;\n  color: #8e8e93;\n  font-weight: 600;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.finance-content[_ngcontent-%COMP%]   .finance-disclaimer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.metrics-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 30px 0;\n  border-bottom: 1px solid #f2f2f7;\n  margin-bottom: 25px;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 950;\n  color: #000;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  line-height: 1.3;\n}\n.metrics-dashboard[_ngcontent-%COMP%]   .metric-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 35px;\n  background: #f2f2f7;\n}\n.payment-reminders-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .section-header-compact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .section-header-compact[_ngcontent-%COMP%]   .mini-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 950;\n  color: #8e8e93;\n  letter-spacing: 1.5px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .section-header-compact[_ngcontent-%COMP%]   .mini-badge[_ngcontent-%COMP%] {\n  --background: #ff3b30;\n  --color: #fff;\n  font-size: 10px;\n  font-weight: 900;\n  border-radius: 6px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding: 8px 4px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%] {\n  background: #fdfdfd;\n  border: 1px solid #f2f2f7;\n  border-radius: 18px;\n  padding: 12px 18px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  min-width: fit-content;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-left[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  color: #ff9500;\n  font-size: 20px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-left[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 850;\n  color: #111;\n  letter-spacing: -0.2px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-right[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: #ccff00;\n  color: #000;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 950;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-right[_ngcontent-%COMP%]   .wa-icon[_ngcontent-%COMP%] {\n  color: #25d366;\n  font-size: 22px;\n}\n.quick-actions-nike[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.quick-actions-nike[_ngcontent-%COMP%]   .action-bubble[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #000;\n  padding: 18px 12px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s;\n}\n.quick-actions-nike[_ngcontent-%COMP%]   .action-bubble[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.quick-actions-nike[_ngcontent-%COMP%]   .action-bubble[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--ion-color-secondary);\n}\n.quick-actions-nike[_ngcontent-%COMP%]   .action-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.next-classes-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.next-classes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  color: #111;\n  letter-spacing: -0.5px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 4px 8px;\n  font-weight: 800;\n  font-size: 11px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 24px;\n  margin: 0;\n  font-size: 20px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .classes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 65px;\n  padding-right: 15px;\n  border-right: 1px solid #f2f2f7;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: var(--ion-color-primary);\n  margin-bottom: 2px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   .day-label.tomorrow[_ngcontent-%COMP%] {\n  color: #888;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #111;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow: hidden;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #111;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  font-weight: 500;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .location-mini[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #555;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 2px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .location-mini[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #111;\n}\n.next-classes-section[_ngcontent-%COMP%]   .class-card-mini[_ngcontent-%COMP%]   .type-col[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  text-transform: uppercase;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.next-classes-section[_ngcontent-%COMP%]   .empty-classes[_ngcontent-%COMP%], \n.next-classes-section[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n  background: #f9f9f9;\n  border-radius: 18px;\n  border: 1px dashed #eee;\n  color: #8e8e93;\n}\n.next-classes-section[_ngcontent-%COMP%]   .empty-classes[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.next-classes-section[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.next-classes-section[_ngcontent-%COMP%]   .empty-classes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.next-classes-section[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0;\n}\n.modules-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.module-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  margin-bottom: 0;\n  display: flex;\n  flex-direction: column;\n  background: #f9f9f9;\n  border: 1px solid #f2f2f7;\n  border-radius: 26px;\n}\n.module-card[_ngcontent-%COMP%]   .module-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  border-radius: 0 !important;\n}\n.module-card[_ngcontent-%COMP%]   .module-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.module-card[_ngcontent-%COMP%]   .module-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n}\n.module-card[_ngcontent-%COMP%]   .module-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 14px;\n  color: #8e8e93;\n  font-weight: 500;\n}\n.module-card[_ngcontent-%COMP%]   .module-arrow[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #c7c7cc;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --background-activated: var(--ion-color-primary-shade);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab-mini[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: #111;\n  --box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n}\n.nike-fab-mini.action-agenda[_ngcontent-%COMP%] {\n  --background: #ccff00;\n  --color: #000;\n}\n.nike-fab-mini.action-perfil[_ngcontent-%COMP%] {\n  --background: #111;\n  --color: #fff;\n}\n.nike-fab-mini[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nion-modal.notifications-modal[_ngcontent-%COMP%] {\n  --border-radius: 30px 30px 0 0;\n  --box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.12);\n}\n.notifications-content[_ngcontent-%COMP%] {\n  --background: #fdfdfd;\n  --padding-bottom: 30px;\n}\n.notifications-content[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 6px;\n  background: #e2e2e2;\n  border-radius: 10px;\n  margin: 12px auto 25px;\n}\n@media (min-width: 768px) {\n  .notifications-content[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.notifications-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 0 20px;\n}\n.notifications-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.notifications-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  height: 40px;\n  width: 40px;\n  --border-radius: 50%;\n  background: #f2f2f5;\n  color: #555;\n}\n.notifications-content[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 15px 40px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.notifications-content[_ngcontent-%COMP%]   .notification-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 26px;\n  padding: 22px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.notifications-content[_ngcontent-%COMP%]   .notification-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 24px;\n}\n.notifications-content[_ngcontent-%COMP%]   .notification-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.notifications-content[_ngcontent-%COMP%]   .notification-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 16px;\n  font-weight: 800;\n}\n.notifications-content[_ngcontent-%COMP%]   .notification-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  color: #777;\n}\n.notifications-content[_ngcontent-%COMP%]   .notification-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n}\n.notifications-content[_ngcontent-%COMP%]   .notification-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 14px;\n  font-size: 13px;\n  font-weight: 800;\n  margin: 0;\n  height: 40px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.notifications-content[_ngcontent-%COMP%]   .notification-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  --background: #111;\n  --color: #fff;\n}\n.notifications-content[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background: rgba(52, 199, 89, 0.12);\n  color: #34c759;\n}\n.notifications-content[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #248a3e;\n}\n.notifications-content[_ngcontent-%COMP%]   .warning-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background: rgba(255, 204, 0, 0.12);\n  color: #d4a000;\n}\n.notifications-content[_ngcontent-%COMP%]   .warning-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #aa8000;\n}\n.notifications-content[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 20px;\n  color: #999;\n}\n.notifications-content[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 54px;\n  opacity: 0.4;\n  margin-bottom: 20px;\n}\n.notifications-content[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(40px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.control-center-modal[_ngcontent-%COMP%] {\n  --border-radius: 35px 35px 0 0;\n  --box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.1);\n}\n.control-center-modal[_ngcontent-%COMP%]::part(content) {\n  border-radius: 35px 35px 0 0;\n  background: #fdfdfd;\n}\n.control-center-content[_ngcontent-%COMP%] {\n  --background: #fdfdfd;\n  --padding-bottom: 50px;\n}\n.control-center-content[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 4px;\n  background: #e2e2e2;\n  border-radius: 4px;\n  margin: 8px auto 14px;\n}\n.control-center-content[_ngcontent-%COMP%]   .modal-header-nike[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin-bottom: 16px;\n}\n.control-center-content[_ngcontent-%COMP%]   .modal-header-nike[_ngcontent-%COMP%]   h2.premium-title[_ngcontent-%COMP%], \n.control-center-content[_ngcontent-%COMP%]   .modal-header-nike[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 950;\n  color: #000 !important;\n  letter-spacing: -1px;\n  text-transform: uppercase;\n  position: relative;\n  display: inline-block;\n}\n.control-center-content[_ngcontent-%COMP%]   .modal-header-nike[_ngcontent-%COMP%]   h2.premium-title[_ngcontent-%COMP%]::after, \n.control-center-content[_ngcontent-%COMP%]   .modal-header-nike[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 32px;\n  height: 3px;\n  background: #ccff00;\n  border-radius: 2px;\n}\n.control-center-content[_ngcontent-%COMP%]   .modal-header-nike[_ngcontent-%COMP%]   p.premium-subtitle[_ngcontent-%COMP%], \n.control-center-content[_ngcontent-%COMP%]   .modal-header-nike[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 10px;\n  font-weight: 800;\n  color: #8e8e93;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px 10px;\n  padding: 0 16px 50px;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 0;\n  transition: transform 0.2s;\n  cursor: pointer;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background: #fff;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #000;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.profile[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.profile[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #2ecc71;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.calendar[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.15);\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.calendar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.time[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.time[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.renovaciones[_ngcontent-%COMP%] {\n  background: rgba(255, 59, 48, 0.1);\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.renovaciones[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ff3b30;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.coupon[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.coupon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #e67e22;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.plan[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.plan[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #9b59b6;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.logout[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  border-color: #ffd6d6;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon-circle.logout[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  font-weight: 850;\n  color: #555;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  line-height: 1.1;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item.highlights[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item.highlights[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 900;\n}\n.control-center-content[_ngcontent-%COMP%]   .control-grid[_ngcontent-%COMP%]   .grid-item.danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-weight: 900;\n}\n@media (prefers-color-scheme: dark) {\n  .control-center-modal[_ngcontent-%COMP%]::part(content) {\n    background: #111;\n  }\n  .control-center-content[_ngcontent-%COMP%] {\n    --background: #111;\n  }\n  .control-center-content[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n    background: #1a1a1a;\n    border-color: #222;\n  }\n  .control-center-content[_ngcontent-%COMP%]   .modal-header-nike[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #fff;\n  }\n  .control-center-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #8e8e93;\n  }\n}\n.header-v2[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 20px 80px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  z-index: 1;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  overflow: hidden;\n}\n.header-v2[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.4) 100%);\n  z-index: 0;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%], \n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 11px;\n  color: #CCFF00;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   .h-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   .h-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(20px, 5.5vw, 26px);\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  color: #fff;\n  line-height: 1.15;\n  white-space: normal;\n  word-break: break-word;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   .h-title-row[_ngcontent-%COMP%]   .h-wave[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-notif[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-notif[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #fff;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-notif[_ngcontent-%COMP%]   .h-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  width: 8px;\n  height: 8px;\n  background: #ff3b30;\n  border-radius: 50%;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #CCFF00;\n}\n.header-v2[_ngcontent-%COMP%]   .h-actions[_ngcontent-%COMP%]   .h-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.dashboard-v2[_ngcontent-%COMP%] {\n  padding: 0 15px 160px;\n  margin-top: -40px;\n  position: relative;\n  z-index: 10;\n}\nion-fab[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  margin-right: 12px;\n  --box-shadow: 0 8px 30px rgba(0,0,0,0.3);\n}\nion-fab[_ngcontent-%COMP%]   .nike-fab[_ngcontent-%COMP%] {\n  --background: #000;\n  --background-activated: #222;\n  --color: #CCFF00;\n}\n.next-class-v2[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 24px;\n  padding: 18px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s;\n}\n.next-class-v2[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-icon-badge[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 18px;\n  background: rgba(204, 255, 0, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-icon-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #99eb00;\n  --color: #99eb00;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%]   .nc-tag[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 900;\n  color: #8e8e93;\n  letter-spacing: 1.5px;\n  margin-bottom: 4px;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%]   .nc-date[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 850;\n  color: #000;\n  letter-spacing: -0.3px;\n}\n.next-class-v2[_ngcontent-%COMP%]   .nc-content[_ngcontent-%COMP%]   .nc-coach[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8e8e93;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.progress-v2[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 32px;\n  padding: 24px;\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.06);\n  margin-bottom: 30px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.progress-v2[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   .v2-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 950;\n  color: #000;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   .p-pts[_ngcontent-%COMP%] {\n  background: #CCFF00;\n  color: #000;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 900;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f8f8fa;\n  border-radius: 18px;\n  padding: 14px 5px;\n  text-align: center;\n  transition: all 0.2s;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item.highlight[_ngcontent-%COMP%] {\n  background: #000;\n  color: #CCFF00;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item.highlight[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  color: #CCFF00;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item.highlight[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  margin-bottom: 4px;\n  display: block;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-metrics[_ngcontent-%COMP%]   .p-metric-item[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f2f2f7;\n  margin: 0 -24px 20px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-recaudado-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-recaudado-section[_ngcontent-%COMP%]   .p-l-header[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 950;\n  color: #8e8e93;\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-recaudado-section[_ngcontent-%COMP%]   .p-total-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -1px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  font-weight: 850;\n  color: #8e8e93;\n  margin-bottom: 8px;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e5e5ea;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-v2[_ngcontent-%COMP%]   .p-logros-section[_ngcontent-%COMP%]   .p-l-bar[_ngcontent-%COMP%]   .p-l-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #CCFF00;\n  border-radius: 3px;\n}\n.actions-v2-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 32px;\n  padding: 24px;\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  margin-bottom: 30px;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .v2-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n  padding: 0 4px;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .v2-card-header[_ngcontent-%COMP%]   .v2-subtitle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin: 0;\n  opacity: 0.8;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .v2-card-header[_ngcontent-%COMP%]   .v2-status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #CCFF00;\n  border-radius: 50%;\n  box-shadow: 0 0 10px #CCFF00;\n}\n.actions-v2-card[_ngcontent-%COMP%]   .v2-card-header[_ngcontent-%COMP%]   .v2-status-dot.pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dot-pulse 2s infinite;\n}\n.actions-grid-v2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  row-gap: 25px;\n  margin-bottom: 10px;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  transition: all 0.2s ease;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]:active   .a-icon[_ngcontent-%COMP%] {\n  transform: scale(0.92);\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon.bg-hero[_ngcontent-%COMP%] {\n  background: #CCFF00;\n  box-shadow: 0 8px 20px rgba(204, 255, 0, 0.3);\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon.bg-hero[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon.bg-soft[_ngcontent-%COMP%] {\n  background: #f8f8fa;\n  border: 1px solid #f1f1f7;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon.bg-soft[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   .a-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2.hero-action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 950;\n}\n.actions-grid-v2[_ngcontent-%COMP%]   .action-btn-v2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #555;\n  letter-spacing: -0.2px;\n  text-align: center;\n  text-transform: uppercase;\n}\n.daily-tip-v2[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  background: white;\n  border-radius: 28px;\n  padding: 24px;\n  display: flex;\n  gap: 18px;\n  align-items: flex-start;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.03);\n  position: relative;\n  overflow: hidden;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: #CCFF00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 5px 15px rgba(204, 255, 0, 0.2);\n  position: relative;\n  z-index: 10;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #000 !important;\n  --color: #000 !important;\n  display: block;\n  position: relative;\n  z-index: 20;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   .t-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 950;\n  color: #99eb00;\n  letter-spacing: 1.5px;\n  margin-bottom: 4px;\n  display: block;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 15px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: -0.3px;\n}\n.daily-tip-v2[_ngcontent-%COMP%]   .t-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #555;\n  line-height: 1.45;\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_dot-pulse {\n  0% {\n    transform: scale(0.9);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.9);\n    opacity: 0.5;\n  }\n}\n.hero-actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 30px;\n  padding-top: 30px;\n  border-top: 1px solid #f2f2f7;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%] {\n  background: #ccff00;\n  background:\n    linear-gradient(\n      135deg,\n      #ccff00 0%,\n      #a8e600 100%);\n  padding: 16px 12px;\n  border-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 145px;\n  box-shadow: 0 12px 30px rgba(204, 255, 0, 0.25);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n  box-shadow: 0 5px 15px rgba(204, 255, 0, 0.15);\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-icon-wrap.trophy[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #000;\n  font-weight: 950;\n  font-size: 13.5px;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  line-height: 1.15;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   .hero-btn-content[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 9.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  line-height: 1.2;\n  white-space: normal;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action[_ngcontent-%COMP%]   ion-icon[name=arrow-forward][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 12px;\n  color: #000;\n  font-size: 18px;\n  opacity: 0.4;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%] {\n  background: #111;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%]   .hero-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  font-size: 22px;\n  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05);\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%]   .hero-text-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n.hero-actions-grid[_ngcontent-%COMP%]   .hero-booking-action.tournament-hero[_ngcontent-%COMP%]   ion-icon[name=arrow-forward][_ngcontent-%COMP%] {\n  color: #ccff00;\n  opacity: 1;\n}\n/*# sourceMappingURL=entrenador-home.page.css.map */'] });
var EntrenadorHomePage = _EntrenadorHomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenadorHomePage, [{
    type: Component,
    args: [{ selector: "app-entrenador-home", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonFab,
      IonFabButton,
      IonIcon,
      IonButton,
      IonBadge,
      IonModal
    ], template: `<ion-content>

  <!-- Hero Header -->
  <ng-container *ngIf="!isDev">
    <div class="header-nike">
      <div class="header-overlay"></div>
      <div class="header-content">
        <div class="coach-profile-brief">
          <div class="profile-img-container" *ngIf="coachFoto">
            <img [src]="coachFoto" class="coach-img" />
          </div>
          <div class="title-details">
            <p class="welcome-pre">BIENVENIDO,</p>
            <h1 class="header-title">{{ coachNombre }}</h1>
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

  <!-- V2 Header (Minimalist) -->
  <ng-container *ngIf="isDev">
    <div class="header-v2 animate-fade">
      <div class="h-text">
        <p>\xA1Buen entrenamiento hoy!</p>
        <div class="h-title-row">
          <h1>{{ coachNombre }}</h1>
          <span class="h-wave">\u{1F44B}</span>
        </div>
      </div>
      
      <div class="h-actions">
        <div class="h-notif" (click)="openNotificaciones()">
          <ion-icon name="notifications-outline"></ion-icon>
          <div class="h-dot" *ngIf="getNotificacionesCount() > 0"></div>
        </div>
        <div class="h-avatar" (click)="goToPerfil()">
          <img [src]="coachFoto || 'assets/avatar.png'" alt="Coach" />
        </div>
      </div>
    </div>
  </ng-container>

  <!-- Content V1 -->
  <ng-container *ngIf="!isDev">
    <div class="dashboard-container">

      <!-- LIVE CLASS BANNER (Feature 2) -->
      <div class="live-class-banner animate-up" *ngIf="claseActual" (click)="goToAgenda()">
        <div class="live-status">
          <span class="pulse-dot"></span>
          LIVE: CLASE EN CURSO
        </div>
        <div class="live-body">
          <div class="live-info">
            <h3>{{ claseActual.titulo }}</h3>
            <p>{{ claseActual.subtitulo }} ({{ claseActual.hora }})</p>
          </div>
          <div class="live-actions">
             <ion-button fill="clear" color="dark" class="action-circle" (click)="marcarAsistenciaLive(); $event.stopPropagation()">
               <ion-icon name="checkmark-done-circle-outline"></ion-icon>
             </ion-button>
          </div>
        </div>
      </div>

      <!-- Performance Summary -->
      <div class="metrics-dashboard animate-up">
        <div class="metric-item highlight animate-pulse clickable-metric" (click)="goToAgenda()">
          <div class="metric-top">
            <span class="metric-value">{{ stats.clases_pendientes || 0 }}</span>
          </div>
          <span class="metric-label">CLASES<br>PENDIENTES</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric-item">
          <span class="metric-value">{{ stats.total_alumnos }}</span>
          <span class="metric-label">Alumnos<br>Activos</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric-item">
          <span class="metric-value">{{ stats.clases_mes }}</span>
          <span class="metric-label">Clases<br>del Mes</span>
        </div>
      </div>

      <!-- PAYMENT REMINDERS (Feature 3) -->
      <div class="payment-reminders-section animate-up" style="animation-delay: 0.1s;" *ngIf="alumnosRecordatorioList.length > 0">
        <div class="section-header-compact">
          <h4 class="mini-title">RENOVAR PACKS</h4>
          <ion-badge color="danger" class="mini-badge">{{ alumnosRecordatorioList.length }}</ion-badge>
        </div>
        <div class="reminders-scroll">
          <div class="reminder-chip" *ngFor="let a of alumnosRecordatorioList" (click)="sendWhatsAppReminder(a)">
             <div class="chip-left">
               <ion-icon name="alert-circle-outline" class="alert-icon"></ion-icon>
               <span class="name">{{ a.nombre }}</span>
             </div>
             <div class="chip-right">
               <span class="count">{{ a.clases_disponibles }}</span>
               <ion-icon name="logo-whatsapp" class="wa-icon"></ion-icon>
             </div>
          </div>
        </div>
      </div>

      <!-- Pr\xF3ximas Clases Section -->
      <div class="next-classes-section animate-up" style="animation-delay: 0.1s;">
        <div class="section-header" (click)="isClassesExpanded = !isClassesExpanded">
          <div class="header-left">
            <h3 class="section-title">Pr\xF3ximas Clases</h3>
            <ion-badge color="dark" *ngIf="clasesHoyList.length > 0">{{ clasesHoyList.length }}</ion-badge>
          </div>
          <ion-button fill="clear" color="dark" class="toggle-btn">
            <ion-icon [name]="isClassesExpanded ? 'chevron-up-outline' : 'chevron-down-outline'"></ion-icon>
          </ion-button>
        </div>

        <div class="classes-container" *ngIf="clasesHoyList.length > 0 && isClassesExpanded">
          <div class="class-card-mini" *ngFor="let clase of clasesHoyList">
            <div class="time-col">
              <span class="day-label" [class.tomorrow]="clase.diaLabel === 'Ma\xF1ana'">{{ clase.diaLabel }}</span>
              <span class="hour">{{ clase.hora }}</span>
            </div>
            <div class="info-col">
              <span class="title">{{ clase.titulo }}</span>
              <span class="subtitle">{{ clase.subtitulo }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- IA Tip -->
      <div class="ia-tip-banner animate-up">
        <p>"{{ iaTip }}"</p>
      </div>

      <!-- Modules Grid -->
      <div class="modules-column animate-up" style="animation-delay: 0.2s;">
        <div class="nike-card module-card" (click)="goToAgenda()">
          <img src="/assets/reserva-bg.jpg" class="module-img" />
          <div class="module-body">
            <h3>Mi Agenda</h3>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  </ng-container>

  <!-- Content V2 (Nike Minimalist Style) -->
  <ng-container *ngIf="isDev">
    <div class="dashboard-v2 animate-up">
      
      <!-- PR\xD3XIMA CLASE V2 (Sleek Card) -->
      <div class="next-class-v2" *ngIf="claseActual || clasesHoyList.length > 0" (click)="goToAgenda()">
        <div class="nc-icon-badge">
          <ion-icon [name]="claseActual ? 'flash-outline' : 'calendar-outline'"></ion-icon>
        </div>
        <div class="nc-content">
          <div class="nc-tag">{{ claseActual ? 'CLASE EN CURSO' : 'PR\xD3XIMA SESI\xD3N' }}</div>
          <div class="nc-date">
             {{ (claseActual ? claseActual.hora : clasesHoyList[0].hora) }} HRS \u2022 
             {{ (claseActual ? claseActual.titulo : clasesHoyList[0].titulo) }}
          </div>
          <div class="nc-coach">
            <ion-icon name="location-outline"></ion-icon> 
            {{ (claseActual ? claseActual.lugar : clasesHoyList[0].lugar) || 'Club de P\xE1del' }}
          </div>
        </div>
        <ion-icon name="chevron-forward" class="nc-arrow"></ion-icon>
      </div>

      <!-- 1. RESUMEN MENSUAL V2 (EL REY PARA EL PRO) -->
      <div class="progress-v2 delay-1">
        <div class="p-header">
           <h3 class="v2-title">Resumen Mensual</h3>
           <div class="p-pts" (click)="openFinance()">Ingresos <ion-icon name="chevron-forward"></ion-icon></div>
        </div>
        
        <div class="p-metrics">
           <div class="p-metric-item highlight" (click)="goToAgenda()">
             <div class="m-val">{{ stats.clases_pendientes || 0 }}</div>
             <div class="m-lbl">Pendientes</div>
           </div>
           <div class="p-metric-item" (click)="goToAlumnos()">
             <div class="m-val">{{ stats.total_alumnos }}</div>
             <div class="m-lbl">Alumnos</div>
           </div>
           <div class="p-metric-item" (click)="goToAgenda()">
             <div class="m-val">{{ stats.clases_mes || 0 }}</div>
             <div class="m-lbl">Clases Mes</div>
           </div>
        </div>

        <div class="p-divider"></div>

        <div class="p-recaudado-section" (click)="openFinance()">
           <div class="p-l-header">
             <span>TOTAL RECAUDADO</span>
           </div>
           <div class="p-total-value">
             {{ ingresosRecaudados | currency:'CLP':'$':'1.0-0' }}
           </div>
        </div>
      </div>

      <!-- 2. IA COACHING TIP V2 (INSIGHTS) -->
      <!-- UI Sync ID: 88721-V2 -->
      <div class="daily-tip-v2 delay-1" id="trainer-tip-v2" *ngIf="iaTip">
         <div class="t-icon"><ion-icon name="flash-outline"></ion-icon></div>
         <div class="t-content">
            <span class="t-badge">TIP DEL COACHING IA</span>
            <h4>{{ iaTip.split(':')[0] }}</h4>
            <p>{{ iaTip.split(':')[1] || iaTip }}</p>
         </div>
      </div>

      <!-- 3. CENTRO DE MANDO V2 (ENMARCADO EXPERTO) -->
      <div class="actions-v2-card delay-2" id="trainer-menu-v2">
         <div class="v2-card-header">
            <h4 class="v2-subtitle">Centro de Mando</h4>
            <span class="v2-status-dot pulse"></span>
         </div>
         
         <div class="actions-grid-v2">
            <!-- HERO ACTION (MI AGENDA) -->
            <div class="action-btn-v2 hero-action" (click)="goToAgenda()">
               <div class="a-icon bg-hero"><ion-icon name="calendar-outline"></ion-icon></div>
               <span>Mi Agenda</span>
            </div>
            
            <div class="action-btn-v2" (click)="goToAlumnos()">
               <div class="a-icon bg-soft"><ion-icon name="person-outline"></ion-icon></div>
               <span>Alumnos</span>
            </div>
            
            <div class="action-btn-v2" (click)="goToAgendar()">
               <div class="a-icon bg-soft"><ion-icon name="add-circle-outline"></ion-icon></div>
               <span>Agendar</span>
            </div>
         </div>

         <!-- HERO BUTTONS GRID (Player Style) -->
         <div class="hero-actions-grid">
            <!-- HERO 1: RESERVAR CANCHA -->
            <div class="hero-booking-action animate-pulse" (click)="goToReservas()">
               <div class="hero-btn-content">
                 <div class="hero-icon-wrap">\u{1F3BE}</div>
                 <div class="hero-text-wrap">
                   <h3>Reserva</h3>
                   <p>Clubes y Disponibilidad</p>
                 </div>
               </div>
               <ion-icon name="arrow-forward"></ion-icon>
            </div>

            <!-- HERO 2: MIS TORNEOS -->
            <div class="hero-booking-action tournament-hero animate-pop delay-1" (click)="goToTorneos()">
               <div class="hero-btn-content">
                 <div class="hero-icon-wrap trophy">\u{1F3C6}</div>
                 <div class="hero-text-wrap">
                   <h3>Mis Torneos</h3>
                   <p>Torneos y Americanos</p>
                 </div>
               </div>
               <ion-icon name="arrow-forward"></ion-icon>
            </div>
         </div>
      </div>

    </div>
  </ng-container>


  <!-- Settings FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab" (click)="isControlCenterOpen = true">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- Control Center Modal (Feature Improvement) -->
  <ion-modal [isOpen]="isControlCenterOpen" (didDismiss)="isControlCenterOpen = false" 
    initialBreakpoint="0.85" [breakpoints]="[0, 0.85, 1]" class="control-center-modal">
    <ng-template>
      <ion-content class="control-center-content">
        <div class="drag-handle"></div>
        <div class="modal-header-nike">
          <h2>CENTRO DE CONTROL</h2>
          <p>GESTI\xD3N DEL ENTRENADOR</p>
        </div>

        <div class="control-grid">
          <!-- Perfil e Informaci\xF3n -->
          <div class="grid-item" (click)="onControlItemClick('/perfil')">
            <div class="icon-circle profile"><ion-icon name="person-outline"></ion-icon></div>
            <span>Mi Perfil</span>
          </div>

          <div class="grid-item highlights" (click)="onControlItemClick('/entrenador-agendar')">
            <div class="icon-circle calendar"><ion-icon name="calendar-outline"></ion-icon></div>
            <span>Agendar Clase</span>
          </div>

          <div class="grid-item" (click)="onControlItemClick('/disponibilidad-entrenador')">
            <div class="icon-circle time"><ion-icon name="time-outline"></ion-icon></div>
            <span>Mi Disponibilidad</span>
          </div>

          <div class="grid-item" (click)="onControlItemClick('/clubes-reservar')">
            <div class="icon-circle calendar"><ion-icon name="tennisball-outline"></ion-icon></div>
            <span>Reservar Cancha</span>
          </div>

          <div class="grid-item" (click)="onControlItemClick('/jugador-campeonatos')">
            <div class="icon-circle profile"><ion-icon name="trophy-outline"></ion-icon></div>
            <span>Mis Torneos</span>
          </div>

          <!-- Ventas y Packs (Feature Request) -->
          <div class="grid-item highlights" (click)="onControlItemClick('/alumnos?filter=renovacion')">
            <div class="icon-circle renovaciones"><ion-icon name="alert-circle-outline"></ion-icon></div>
            <span>Renovaciones</span>
          </div>



          <div class="grid-item" (click)="onControlItemClick('/entrenador-packs')">
            <div class="icon-circle coupon"><ion-icon name="pricetags-outline"></ion-icon></div>
            <span>Mis Packs</span>
          </div>

          <div class="grid-item" (click)="onControlItemClick('/entrenador-cupones')">
            <div class="icon-circle coupon"><ion-icon name="gift-outline"></ion-icon></div>
            <span>Cupones</span>
          </div>

          <div class="grid-item highlights" (click)="onControlItemClick('/canje-club')">
            <div class="icon-circle renovaciones" style="background: rgba(0, 255, 127, 0.1); color: #00b050;"><ion-icon name="barcode-outline"></ion-icon></div>
            <span>Canjear Puntos</span>
          </div>

          <div class="grid-item" (click)="onControlItemClick('/entrenador-mi-plan')">
            <div class="icon-circle plan"><ion-icon name="card-outline"></ion-icon></div>
            <span>Mi Plan</span>
          </div>

          <!-- Salida -->
          <div class="grid-item danger" (click)="onControlItemClick('logout')">
            <div class="icon-circle logout"><ion-icon name="log-out-outline"></ion-icon></div>
            <span>Cerrar Sesi\xF3n</span>
          </div>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>

  <!-- Notifications Modal -->
  <ion-modal [isOpen]="isNotificacionesOpen" (didDismiss)="closeNotificaciones()"
    initialBreakpoint="0.9" [breakpoints]="[0, 0.9]" class="notifications-modal">
    <ng-template>
      <ion-content class="notifications-content">
        <div class="drag-handle"></div>
        <div class="modal-header">
          <h2>NOTIFICACIONES</h2>
          <ion-button fill="clear" (click)="closeNotificaciones()" class="close-btn">
            <ion-icon name="close" slot="icon-only"></ion-icon>
          </ion-button>
        </div>

        <div class="notifications-list" style="padding-bottom: 30px;">
          <!-- Missing Address Alert -->
          <div class="notification-card warning-card animate-pop" *ngIf="sinDireccion" (click)="onNotifClick('perfil')">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div class="card-text">
              <h4>Configura tu Ubicaci\xF3n</h4>
              <p>Agrega tu direcci\xF3n en tu perfil para que tus alumnos te encuentren m\xE1s f\xE1cil.</p>
            </div>
            <div class="card-actions">
              <ion-button fill="solid" class="action-btn">Ir al Perfil</ion-button>
            </div>
          </div>

          <!-- Plan Trial Alert -->
          <div class="notification-card success-card animate-pop" *ngIf="planTrialActivo" (click)="onNotifClick('plan')">
            <div class="icon-box">
              <ion-icon name="gift"></ion-icon>
            </div>
            <div class="card-text">
              <h4>Periodo de Prueba Activo</h4>
              <p>Tu plan gratuito est\xE1 activo. Te quedan <strong>{{ planTrialDays }} d\xEDas</strong> de prueba.</p>
            </div>
            <div class="card-actions">
              <ion-button fill="solid" class="action-btn">Ver Mi Plan</ion-button>
            </div>
          </div>

          <!-- MP Reminder -->
          <div class="notification-card warning-card animate-pop" *ngIf="showMPReminder"
            (click)="onNotifClick('perfil')">
            <div class="icon-box">
              <ion-icon name="wallet"></ion-icon>
            </div>
            <div class="card-text">
              <h4>Configura tus Pagos</h4>
              <p>Para recibir pagos autom\xE1ticos, vincula tu cuenta de Mercado Pago en tu perfil.</p>
            </div>
            <div class="card-actions">
              <ion-button fill="clear" color="medium"
                (click)="dismissMPReminder(); $event.stopPropagation()">Ignorar</ion-button>
              <ion-button fill="solid" class="action-btn">Ir al Perfil</ion-button>
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


  <!-- Point 4: Finance Modal (New) -->
  <ion-modal [isOpen]="isFinanceOpen" (didDismiss)="isFinanceOpen = false" 
    initialBreakpoint="0.6" [breakpoints]="[0, 0.6, 0.8]" class="finance-modal">
    <ng-template>
      <ion-content class="finance-content">
        <div class="drag-handle"></div>
        <div class="modal-header-nike">
          <h2 class="premium-title">RESUMEN MENSUAL</h2>
          <p class="premium-subtitle">INGRESOS CONFIRMADOS</p>
        </div>

        <div class="finance-section static">
          <div class="finance-card-premium">
            <div class="finance-header">
              <div class="main-stat" style="width: 100%; text-align: center;">
                <span class="label">Recaudado este mes</span>
                <span class="value main-value" style="font-size: 38px;">{{ ingresosRecaudados | currency:'CLP':'$':'1.0-0' }}</span>
              </div>
            </div>
          </div>
          <p class="finance-disclaimer">
            <ion-icon name="information-circle-outline"></ion-icon>
            Ingresos confirmados por packs activos.
          </p>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>

</ion-content>
`, styles: ['/* src/app/pages/entrenador-home/entrenador-home.page.scss */\nion-content {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.header-nike {\n  position: relative;\n  height: 250px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.7));\n}\n.header-content {\n  position: absolute;\n  bottom: 65px;\n  left: 35px;\n  right: 35px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  z-index: 2;\n}\n.header-content .coach-profile-brief {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n.header-content .coach-profile-brief .profile-img-container {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  flex-shrink: 0;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n}\n.header-content .coach-profile-brief .profile-img-container .coach-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content .coach-profile-brief .title-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.header-content .coach-profile-brief .title-details .welcome-pre {\n  font-size: 11px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.75);\n  letter-spacing: 3px;\n  margin-bottom: 6px;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.header-content .coach-profile-brief .title-details .header-title {\n  font-size: 26px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  color: #fff;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);\n}\n.header-content .notifications-btn {\n  position: relative;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.header-content .notifications-btn ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.header-content .notifications-btn .notif-badge {\n  position: absolute;\n  top: 0px;\n  right: -2px;\n  font-size: 10px;\n  font-weight: 800;\n  border-radius: 50%;\n  padding: 4px 6px;\n  min-width: 20px;\n  line-height: 1;\n}\n.dashboard-container {\n  padding: 0 20px 100px;\n  position: relative;\n  z-index: 10;\n  background: white;\n  border-radius: 30px 30px 0 0;\n  margin-top: -30px;\n}\n.finance-section {\n  margin-bottom: 25px;\n}\n.finance-section .finance-card {\n  background: #f9f9f9;\n  border: 1px solid #f2f2f7;\n  border-radius: 20px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n}\n.finance-section .finance-card .divider-v {\n  width: 1px;\n  height: 40px;\n  background: #e5e5ea;\n}\n.finance-section .finance-card .finance-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.finance-section .finance-card .finance-item .label {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.finance-section .finance-card .finance-item .value {\n  font-size: 20px;\n  font-weight: 900;\n  color: #000;\n}\n.finance-section .finance-card .finance-item .value.recaudado {\n  color: #2ecc71;\n}\n.finance-section .finance-card .finance-item .value.proyectado {\n  color: #007aff;\n}\n.ia-tip-banner {\n  margin: 15px 20px 25px;\n}\n.ia-tip-banner .tip-content {\n  background:\n    linear-gradient(\n      135deg,\n      #111 0%,\n      #222 100%);\n  border-radius: 24px;\n  padding: 20px;\n  border: 1px solid rgba(204, 255, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.ia-tip-banner .tip-content::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(204, 255, 0, 0.05) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.ia-tip-banner .tip-content .tip-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.ia-tip-banner .tip-content .tip-header ion-icon {\n  color: #ccff00;\n  font-size: 18px;\n}\n.ia-tip-banner .tip-content .tip-header span {\n  font-size: 10px;\n  font-weight: 950;\n  color: #ccff00;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.ia-tip-banner .tip-content p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 600;\n  font-style: italic;\n}\n.live-class-banner {\n  background: #ccff00;\n  border-radius: 24px;\n  padding: 20px;\n  margin: 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  box-shadow: 0 15px 30px rgba(204, 255, 0, 0.25);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n}\n.live-class-banner .live-status {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 10px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n.live-class-banner .live-status .pulse-dot {\n  width: 8px;\n  height: 8px;\n  background: #ff3b30;\n  border-radius: 50%;\n  animation: pulse-red 1.5s infinite;\n}\n.live-class-banner .live-body {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.live-class-banner .live-body .live-info h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 900;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n}\n.live-class-banner .live-body .live-info p {\n  margin: 4px 0 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.6);\n}\n.live-class-banner .live-body .action-circle {\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 44px;\n  height: 44px;\n  --background: rgba(0, 0, 0, 0.1);\n  --border-radius: 50%;\n  --box-shadow: none;\n}\n.live-class-banner .live-body .action-circle ion-icon {\n  font-size: 26px;\n  color: #000;\n}\n@keyframes pulse-red {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.7);\n  }\n  70% {\n    transform: scale(1.1);\n    box-shadow: 0 0 0 8px rgba(255, 59, 48, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);\n  }\n}\n.mp-reminder-alert {\n  background: #fff9e6;\n  border: 1px solid #ffeeba;\n  border-radius: 20px;\n  padding: 20px;\n  margin: 20px 0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.mp-reminder-alert .reminder-content {\n  display: flex;\n  gap: 15px;\n  align-items: flex-start;\n  margin-bottom: 15px;\n}\n.mp-reminder-alert .reminder-content ion-icon {\n  font-size: 28px;\n}\n.mp-reminder-alert .reminder-content .reminder-text h4 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 800;\n  color: #856404;\n}\n.mp-reminder-alert .reminder-content .reminder-text p {\n  margin: 5px 0 0;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #856404;\n}\n.mp-reminder-alert .reminder-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.mp-reminder-alert .reminder-actions ion-button {\n  --padding-start: 15px;\n  --padding-end: 15px;\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  margin: 0;\n}\n.mp-reminder-alert .reminder-actions .action-btn {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 12px;\n}\n.finance-modal {\n  --border-radius: 35px 35px 0 0;\n  --box-shadow: 0 -10px 40px rgba(0,0,0,0.1);\n}\n.finance-modal::part(content) {\n  background: #fff;\n}\n.finance-content {\n  --background: #fff;\n}\n.finance-content .finance-section.static {\n  margin-top: 30px;\n  padding: 0 20px;\n}\n.finance-content .finance-card-premium {\n  background: #fff;\n  border: 1px solid #f2f2f7;\n  border-radius: 32px;\n  padding: 30px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);\n}\n.finance-content .finance-card-premium .finance-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 30px;\n}\n.finance-content .finance-card-premium .finance-header .main-stat .label {\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #8e8e93;\n  font-weight: 800;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 6px;\n}\n.finance-content .finance-card-premium .finance-header .main-stat .main-value {\n  font-size: 32px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -1px;\n}\n.finance-content .finance-card-premium .finance-header .percentage-badge {\n  background: #e8f5e9;\n  color: #2ecc71;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 900;\n}\n.finance-content .finance-card-premium .progress-container {\n  height: 12px;\n  background: #f2f2f7;\n  border-radius: 6px;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.finance-content .finance-card-premium .progress-container .progress-bar {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2ecc71 0%,\n      #27ae60 100%);\n  border-radius: 6px;\n  transition: width 1s ease-in-out;\n}\n.finance-content .finance-card-premium .finance-footer-stats {\n  display: flex;\n  justify-content: space-between;\n}\n.finance-content .finance-card-premium .finance-footer-stats .sub-stat .sub-label {\n  font-size: 10px;\n  color: #8e8e93;\n  font-weight: 700;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.finance-content .finance-card-premium .finance-footer-stats .sub-stat .sub-value {\n  font-size: 16px;\n  font-weight: 850;\n  color: #000;\n}\n.finance-content .finance-card-premium .finance-footer-stats .sub-stat .sub-value.pending {\n  color: #f39c12;\n}\n.finance-content .finance-card-premium .finance-footer-stats .text-right {\n  text-align: right;\n}\n.finance-content .finance-disclaimer {\n  margin-top: 20px;\n  font-size: 11px;\n  color: #8e8e93;\n  font-weight: 600;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.finance-content .finance-disclaimer ion-icon {\n  font-size: 14px;\n}\n.metrics-dashboard {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 30px 0;\n  border-bottom: 1px solid #f2f2f7;\n  margin-bottom: 25px;\n}\n.metrics-dashboard .metric-item {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.metrics-dashboard .metric-item .metric-value {\n  font-size: 32px;\n  font-weight: 950;\n  color: #000;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.metrics-dashboard .metric-item .metric-label {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  line-height: 1.3;\n}\n.metrics-dashboard .metric-divider {\n  width: 1px;\n  height: 35px;\n  background: #f2f2f7;\n}\n.payment-reminders-section {\n  margin-bottom: 30px;\n}\n.payment-reminders-section .section-header-compact {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.payment-reminders-section .section-header-compact .mini-title {\n  font-size: 11px;\n  font-weight: 950;\n  color: #8e8e93;\n  letter-spacing: 1.5px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.payment-reminders-section .section-header-compact .mini-badge {\n  --background: #ff3b30;\n  --color: #fff;\n  font-size: 10px;\n  font-weight: 900;\n  border-radius: 6px;\n}\n.payment-reminders-section .reminders-scroll {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding: 8px 4px;\n}\n.payment-reminders-section .reminders-scroll::-webkit-scrollbar {\n  display: none;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip {\n  background: #fdfdfd;\n  border: 1px solid #f2f2f7;\n  border-radius: 18px;\n  padding: 12px 18px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  min-width: fit-content;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip:active {\n  transform: scale(0.96);\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-left .alert-icon {\n  color: #ff9500;\n  font-size: 20px;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-left .name {\n  font-size: 15px;\n  font-weight: 850;\n  color: #111;\n  letter-spacing: -0.2px;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-right .count {\n  background: #ccff00;\n  color: #000;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 950;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-right .wa-icon {\n  color: #25d366;\n  font-size: 22px;\n}\n.quick-actions-nike {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.quick-actions-nike .action-bubble {\n  flex: 1;\n  background: #000;\n  padding: 18px 12px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s;\n}\n.quick-actions-nike .action-bubble:active {\n  transform: scale(0.95);\n}\n.quick-actions-nike .action-bubble ion-icon {\n  font-size: 24px;\n  color: var(--ion-color-secondary);\n}\n.quick-actions-nike .action-bubble span {\n  font-size: 11px;\n  font-weight: 800;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.next-classes-section {\n  margin-bottom: 30px;\n}\n.next-classes-section .section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.next-classes-section .section-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.next-classes-section .section-header .header-left .section-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  color: #111;\n  letter-spacing: -0.5px;\n}\n.next-classes-section .section-header .header-left ion-badge {\n  border-radius: 6px;\n  padding: 4px 8px;\n  font-weight: 800;\n  font-size: 11px;\n}\n.next-classes-section .section-header .toggle-btn {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 24px;\n  margin: 0;\n  font-size: 20px;\n}\n.next-classes-section .classes-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.next-classes-section .class-card-mini {\n  background: #fff;\n  border-radius: 18px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n}\n.next-classes-section .class-card-mini .time-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 65px;\n  padding-right: 15px;\n  border-right: 1px solid #f2f2f7;\n}\n.next-classes-section .class-card-mini .time-col .day-label {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: var(--ion-color-primary);\n  margin-bottom: 2px;\n}\n.next-classes-section .class-card-mini .time-col .day-label.tomorrow {\n  color: #888;\n}\n.next-classes-section .class-card-mini .time-col .hour {\n  font-size: 16px;\n  font-weight: 800;\n  color: #111;\n}\n.next-classes-section .class-card-mini .info-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow: hidden;\n}\n.next-classes-section .class-card-mini .info-col .title {\n  font-size: 14px;\n  font-weight: 800;\n  color: #111;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.next-classes-section .class-card-mini .info-col .subtitle {\n  font-size: 11px;\n  color: #888;\n  font-weight: 500;\n}\n.next-classes-section .class-card-mini .info-col .location-mini {\n  font-size: 10px;\n  color: #555;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 2px;\n}\n.next-classes-section .class-card-mini .info-col .location-mini ion-icon {\n  font-size: 11px;\n  color: #111;\n}\n.next-classes-section .class-card-mini .type-col ion-badge {\n  font-size: 9px;\n  font-weight: 800;\n  text-transform: uppercase;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.next-classes-section .empty-classes,\n.next-classes-section .loading-state {\n  padding: 30px;\n  text-align: center;\n  background: #f9f9f9;\n  border-radius: 18px;\n  border: 1px dashed #eee;\n  color: #8e8e93;\n}\n.next-classes-section .empty-classes ion-icon,\n.next-classes-section .loading-state ion-icon {\n  font-size: 32px;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.next-classes-section .empty-classes p,\n.next-classes-section .loading-state p {\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0;\n}\n.modules-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.module-card {\n  padding: 0;\n  overflow: hidden;\n  margin-bottom: 0;\n  display: flex;\n  flex-direction: column;\n  background: #f9f9f9;\n  border: 1px solid #f2f2f7;\n  border-radius: 26px;\n}\n.module-card .module-img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  border-radius: 0 !important;\n}\n.module-card .module-body {\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.module-card .module-text h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n}\n.module-card .module-text p {\n  margin: 4px 0 0;\n  font-size: 14px;\n  color: #8e8e93;\n  font-weight: 500;\n}\n.module-card .module-arrow {\n  font-size: 24px;\n  color: #c7c7cc;\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --background-activated: var(--ion-color-primary-shade);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab-mini {\n  --background: #fff;\n  --color: #111;\n  --box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n}\n.nike-fab-mini.action-agenda {\n  --background: #ccff00;\n  --color: #000;\n}\n.nike-fab-mini.action-perfil {\n  --background: #111;\n  --color: #fff;\n}\n.nike-fab-mini ion-icon {\n  font-size: 20px;\n}\nion-modal.notifications-modal {\n  --border-radius: 30px 30px 0 0;\n  --box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.12);\n}\n.notifications-content {\n  --background: #fdfdfd;\n  --padding-bottom: 30px;\n}\n.notifications-content .drag-handle {\n  width: 45px;\n  height: 6px;\n  background: #e2e2e2;\n  border-radius: 10px;\n  margin: 12px auto 25px;\n}\n@media (min-width: 768px) {\n  .notifications-content .drag-handle {\n    display: none;\n  }\n}\n.notifications-content .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 0 20px;\n}\n.notifications-content .modal-header h2 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.notifications-content .modal-header .close-btn {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  height: 40px;\n  width: 40px;\n  --border-radius: 50%;\n  background: #f2f2f5;\n  color: #555;\n}\n.notifications-content .notifications-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 15px 40px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.notifications-content .notification-card {\n  background: #ffffff;\n  border-radius: 26px;\n  padding: 22px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.notifications-content .notification-card .icon-box {\n  width: 50px;\n  height: 50px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 24px;\n}\n.notifications-content .notification-card .card-text {\n  flex: 1;\n  min-width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.notifications-content .notification-card .card-text h4 {\n  margin: 0 0 6px;\n  font-size: 16px;\n  font-weight: 800;\n}\n.notifications-content .notification-card .card-text p {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  color: #777;\n}\n.notifications-content .notification-card .card-actions {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n}\n.notifications-content .notification-card .card-actions ion-button {\n  --border-radius: 14px;\n  font-size: 13px;\n  font-weight: 800;\n  margin: 0;\n  height: 40px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.notifications-content .notification-card .card-actions .action-btn {\n  --background: #111;\n  --color: #fff;\n}\n.notifications-content .success-card .icon-box {\n  background: rgba(52, 199, 89, 0.12);\n  color: #34c759;\n}\n.notifications-content .success-card h4 {\n  color: #248a3e;\n}\n.notifications-content .warning-card .icon-box {\n  background: rgba(255, 204, 0, 0.12);\n  color: #d4a000;\n}\n.notifications-content .warning-card h4 {\n  color: #aa8000;\n}\n.notifications-content .empty-notifications {\n  text-align: center;\n  padding: 50px 20px;\n  color: #999;\n}\n.notifications-content .empty-notifications ion-icon {\n  font-size: 54px;\n  opacity: 0.4;\n  margin-bottom: 20px;\n}\n.notifications-content .empty-notifications p {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.animate-up {\n  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(40px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.control-center-modal {\n  --border-radius: 35px 35px 0 0;\n  --box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.1);\n}\n.control-center-modal::part(content) {\n  border-radius: 35px 35px 0 0;\n  background: #fdfdfd;\n}\n.control-center-content {\n  --background: #fdfdfd;\n  --padding-bottom: 50px;\n}\n.control-center-content .drag-handle {\n  width: 36px;\n  height: 4px;\n  background: #e2e2e2;\n  border-radius: 4px;\n  margin: 8px auto 14px;\n}\n.control-center-content .modal-header-nike {\n  padding: 0 20px;\n  margin-bottom: 16px;\n}\n.control-center-content .modal-header-nike h2.premium-title,\n.control-center-content .modal-header-nike h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 950;\n  color: #000 !important;\n  letter-spacing: -1px;\n  text-transform: uppercase;\n  position: relative;\n  display: inline-block;\n}\n.control-center-content .modal-header-nike h2.premium-title::after,\n.control-center-content .modal-header-nike h2::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 32px;\n  height: 3px;\n  background: #ccff00;\n  border-radius: 2px;\n}\n.control-center-content .modal-header-nike p.premium-subtitle,\n.control-center-content .modal-header-nike p {\n  margin: 6px 0 0;\n  font-size: 10px;\n  font-weight: 800;\n  color: #8e8e93;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n}\n.control-center-content .control-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px 10px;\n  padding: 0 16px 50px;\n}\n.control-center-content .control-grid .grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 0;\n  transition: transform 0.2s;\n  cursor: pointer;\n}\n.control-center-content .control-grid .grid-item:active {\n  transform: scale(0.92);\n}\n.control-center-content .control-grid .grid-item .icon-circle {\n  width: 52px;\n  height: 52px;\n  background: #fff;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.control-center-content .control-grid .grid-item .icon-circle ion-icon {\n  font-size: 22px;\n  color: #000;\n}\n.control-center-content .control-grid .grid-item .icon-circle.profile {\n  background: #f2f2f7;\n}\n.control-center-content .control-grid .grid-item .icon-circle.profile ion-icon {\n  color: #2ecc71;\n}\n.control-center-content .control-grid .grid-item .icon-circle.calendar {\n  background: rgba(204, 255, 0, 0.15);\n}\n.control-center-content .control-grid .grid-item .icon-circle.calendar ion-icon {\n  color: #000;\n}\n.control-center-content .control-grid .grid-item .icon-circle.time {\n  background: #f2f2f7;\n}\n.control-center-content .control-grid .grid-item .icon-circle.time ion-icon {\n  color: #3498db;\n}\n.control-center-content .control-grid .grid-item .icon-circle.renovaciones {\n  background: rgba(255, 59, 48, 0.1);\n}\n.control-center-content .control-grid .grid-item .icon-circle.renovaciones ion-icon {\n  color: #ff3b30;\n}\n.control-center-content .control-grid .grid-item .icon-circle.coupon {\n  background: #f2f2f7;\n}\n.control-center-content .control-grid .grid-item .icon-circle.coupon ion-icon {\n  color: #e67e22;\n}\n.control-center-content .control-grid .grid-item .icon-circle.plan {\n  background: #f2f2f7;\n}\n.control-center-content .control-grid .grid-item .icon-circle.plan ion-icon {\n  color: #9b59b6;\n}\n.control-center-content .control-grid .grid-item .icon-circle.logout {\n  background: #fff0f0;\n  border-color: #ffd6d6;\n}\n.control-center-content .control-grid .grid-item .icon-circle.logout ion-icon {\n  color: #e74c3c;\n}\n.control-center-content .control-grid .grid-item span {\n  font-size: 9.5px;\n  font-weight: 850;\n  color: #555;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  line-height: 1.1;\n}\n.control-center-content .control-grid .grid-item.highlights .icon-circle {\n  border: none;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.control-center-content .control-grid .grid-item.highlights span {\n  color: #000;\n  font-weight: 900;\n}\n.control-center-content .control-grid .grid-item.danger span {\n  color: #e74c3c;\n  font-weight: 900;\n}\n@media (prefers-color-scheme: dark) {\n  .control-center-modal::part(content) {\n    background: #111;\n  }\n  .control-center-content {\n    --background: #111;\n  }\n  .control-center-content .icon-circle {\n    background: #1a1a1a;\n    border-color: #222;\n  }\n  .control-center-content .modal-header-nike h2 {\n    color: #fff;\n  }\n  .control-center-content span {\n    color: #8e8e93;\n  }\n}\n.header-v2 {\n  position: relative;\n  padding: 60px 20px 80px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  z-index: 1;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  overflow: hidden;\n}\n.header-v2::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.4) 100%);\n  z-index: 0;\n}\n.header-v2 .h-text,\n.header-v2 .h-actions {\n  position: relative;\n  z-index: 2;\n}\n.header-v2 .h-text {\n  flex: 1;\n}\n.header-v2 .h-text p {\n  margin: 0 0 6px;\n  font-size: 11px;\n  color: #CCFF00;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.header-v2 .h-text .h-title-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n}\n.header-v2 .h-text .h-title-row h1 {\n  margin: 0;\n  font-size: clamp(20px, 5.5vw, 26px);\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  color: #fff;\n  line-height: 1.15;\n  white-space: normal;\n  word-break: break-word;\n}\n.header-v2 .h-text .h-title-row .h-wave {\n  font-size: 20px;\n  flex-shrink: 0;\n  align-self: center;\n}\n.header-v2 .h-actions {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.header-v2 .h-actions .h-notif {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-v2 .h-actions .h-notif ion-icon {\n  font-size: 22px;\n  color: #fff;\n}\n.header-v2 .h-actions .h-notif .h-dot {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  width: 8px;\n  height: 8px;\n  background: #ff3b30;\n  border-radius: 50%;\n}\n.header-v2 .h-actions .h-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #CCFF00;\n}\n.header-v2 .h-actions .h-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.dashboard-v2 {\n  padding: 0 15px 160px;\n  margin-top: -40px;\n  position: relative;\n  z-index: 10;\n}\nion-fab {\n  margin-bottom: 12px;\n  margin-right: 12px;\n  --box-shadow: 0 8px 30px rgba(0,0,0,0.3);\n}\nion-fab .nike-fab {\n  --background: #000;\n  --background-activated: #222;\n  --color: #CCFF00;\n}\n.next-class-v2 {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 24px;\n  padding: 18px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s;\n}\n.next-class-v2:active {\n  transform: scale(0.97);\n}\n.next-class-v2 .nc-icon-badge {\n  width: 52px;\n  height: 52px;\n  border-radius: 18px;\n  background: rgba(204, 255, 0, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.next-class-v2 .nc-icon-badge ion-icon {\n  font-size: 24px;\n  color: #99eb00;\n  --color: #99eb00;\n}\n.next-class-v2 .nc-content {\n  flex: 1;\n}\n.next-class-v2 .nc-content .nc-tag {\n  font-size: 9px;\n  font-weight: 900;\n  color: #8e8e93;\n  letter-spacing: 1.5px;\n  margin-bottom: 4px;\n}\n.next-class-v2 .nc-content .nc-date {\n  font-size: 16px;\n  font-weight: 850;\n  color: #000;\n  letter-spacing: -0.3px;\n}\n.next-class-v2 .nc-content .nc-coach {\n  font-size: 12px;\n  color: #8e8e93;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.progress-v2 {\n  background: #fff;\n  border-radius: 32px;\n  padding: 24px;\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.06);\n  margin-bottom: 30px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.progress-v2 .p-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.progress-v2 .p-header .v2-title {\n  font-size: 16px;\n  font-weight: 950;\n  color: #000;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.progress-v2 .p-header .p-pts {\n  background: #CCFF00;\n  color: #000;\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 900;\n}\n.progress-v2 .p-metrics {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.progress-v2 .p-metrics .p-metric-item {\n  flex: 1;\n  background: #f8f8fa;\n  border-radius: 18px;\n  padding: 14px 5px;\n  text-align: center;\n  transition: all 0.2s;\n}\n.progress-v2 .p-metrics .p-metric-item:active {\n  transform: scale(0.96);\n}\n.progress-v2 .p-metrics .p-metric-item.highlight {\n  background: #000;\n  color: #CCFF00;\n}\n.progress-v2 .p-metrics .p-metric-item.highlight .m-val {\n  color: #CCFF00;\n}\n.progress-v2 .p-metrics .p-metric-item.highlight .m-lbl {\n  color: rgba(255, 255, 255, 0.6);\n}\n.progress-v2 .p-metrics .p-metric-item .m-val {\n  font-size: 22px;\n  font-weight: 950;\n  margin-bottom: 4px;\n  display: block;\n}\n.progress-v2 .p-metrics .p-metric-item .m-lbl {\n  font-size: 10px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.progress-v2 .p-divider {\n  height: 1px;\n  background: #f2f2f7;\n  margin: 0 -24px 20px;\n}\n.progress-v2 .p-recaudado-section {\n  text-align: center;\n}\n.progress-v2 .p-recaudado-section .p-l-header {\n  display: block;\n  font-size: 11px;\n  font-weight: 950;\n  color: #8e8e93;\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n}\n.progress-v2 .p-recaudado-section .p-total-value {\n  font-size: 28px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -1px;\n}\n.progress-v2 .p-logros-section .p-l-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  font-weight: 850;\n  color: #8e8e93;\n  margin-bottom: 8px;\n}\n.progress-v2 .p-logros-section .p-l-bar {\n  height: 6px;\n  background: #e5e5ea;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-v2 .p-logros-section .p-l-bar .p-l-fill {\n  height: 100%;\n  background: #CCFF00;\n  border-radius: 3px;\n}\n.actions-v2-card {\n  background: #fff;\n  border-radius: 32px;\n  padding: 24px;\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  margin-bottom: 30px;\n}\n.actions-v2-card .v2-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n  padding: 0 4px;\n}\n.actions-v2-card .v2-card-header .v2-subtitle {\n  font-size: 11px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin: 0;\n  opacity: 0.8;\n}\n.actions-v2-card .v2-card-header .v2-status-dot {\n  width: 8px;\n  height: 8px;\n  background: #CCFF00;\n  border-radius: 50%;\n  box-shadow: 0 0 10px #CCFF00;\n}\n.actions-v2-card .v2-card-header .v2-status-dot.pulse {\n  animation: dot-pulse 2s infinite;\n}\n.actions-grid-v2 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  row-gap: 25px;\n  margin-bottom: 10px;\n}\n.actions-grid-v2 .action-btn-v2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  transition: all 0.2s ease;\n}\n.actions-grid-v2 .action-btn-v2:active .a-icon {\n  transform: scale(0.92);\n}\n.actions-grid-v2 .action-btn-v2 .a-icon {\n  width: 62px;\n  height: 62px;\n  border-radius: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.actions-grid-v2 .action-btn-v2 .a-icon.bg-hero {\n  background: #CCFF00;\n  box-shadow: 0 8px 20px rgba(204, 255, 0, 0.3);\n}\n.actions-grid-v2 .action-btn-v2 .a-icon.bg-hero ion-icon {\n  color: #000;\n}\n.actions-grid-v2 .action-btn-v2 .a-icon.bg-soft {\n  background: #f8f8fa;\n  border: 1px solid #f1f1f7;\n}\n.actions-grid-v2 .action-btn-v2 .a-icon.bg-soft ion-icon {\n  color: #000;\n}\n.actions-grid-v2 .action-btn-v2 .a-icon ion-icon {\n  font-size: 26px;\n}\n.actions-grid-v2 .action-btn-v2.hero-action span {\n  color: #000;\n  font-weight: 950;\n}\n.actions-grid-v2 .action-btn-v2 span {\n  font-size: 11px;\n  font-weight: 800;\n  color: #555;\n  letter-spacing: -0.2px;\n  text-align: center;\n  text-transform: uppercase;\n}\n.daily-tip-v2 {\n  margin-bottom: 30px;\n  background: white;\n  border-radius: 28px;\n  padding: 24px;\n  display: flex;\n  gap: 18px;\n  align-items: flex-start;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.03);\n  position: relative;\n  overflow: hidden;\n}\n.daily-tip-v2 .t-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: #CCFF00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 5px 15px rgba(204, 255, 0, 0.2);\n  position: relative;\n  z-index: 10;\n}\n.daily-tip-v2 .t-icon ion-icon {\n  font-size: 24px;\n  color: #000 !important;\n  --color: #000 !important;\n  display: block;\n  position: relative;\n  z-index: 20;\n}\n.daily-tip-v2 .t-content .t-badge {\n  font-size: 9px;\n  font-weight: 950;\n  color: #99eb00;\n  letter-spacing: 1.5px;\n  margin-bottom: 4px;\n  display: block;\n}\n.daily-tip-v2 .t-content h4 {\n  margin: 0 0 6px;\n  font-size: 15px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: -0.3px;\n}\n.daily-tip-v2 .t-content p {\n  margin: 0;\n  font-size: 13px;\n  color: #555;\n  line-height: 1.45;\n  font-weight: 500;\n}\n@keyframes dot-pulse {\n  0% {\n    transform: scale(0.9);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.9);\n    opacity: 0.5;\n  }\n}\n.hero-actions-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 30px;\n  padding-top: 30px;\n  border-top: 1px solid #f2f2f7;\n}\n.hero-actions-grid .hero-booking-action {\n  background: #ccff00;\n  background:\n    linear-gradient(\n      135deg,\n      #ccff00 0%,\n      #a8e600 100%);\n  padding: 16px 12px;\n  border-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 145px;\n  box-shadow: 0 12px 30px rgba(204, 255, 0, 0.25);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n}\n.hero-actions-grid .hero-booking-action:active {\n  transform: scale(0.96);\n  box-shadow: 0 5px 15px rgba(204, 255, 0, 0.15);\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-icon-wrap {\n  width: 42px;\n  height: 42px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-icon-wrap.trophy {\n  background: rgba(255, 255, 255, 0.1);\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-text-wrap {\n  margin-top: 14px;\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-text-wrap h3 {\n  margin: 0;\n  color: #000;\n  font-weight: 950;\n  font-size: 13.5px;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  line-height: 1.15;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-actions-grid .hero-booking-action .hero-btn-content .hero-text-wrap p {\n  margin: 3px 0 0;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 9.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  line-height: 1.2;\n  white-space: normal;\n}\n.hero-actions-grid .hero-booking-action ion-icon[name=arrow-forward] {\n  position: absolute;\n  top: 16px;\n  right: 12px;\n  color: #000;\n  font-size: 18px;\n  opacity: 0.4;\n}\n.hero-actions-grid .hero-booking-action.tournament-hero {\n  background: #111;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);\n}\n.hero-actions-grid .hero-booking-action.tournament-hero .hero-icon-wrap {\n  background: rgba(255, 255, 255, 0.1);\n  font-size: 22px;\n  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05);\n}\n.hero-actions-grid .hero-booking-action.tournament-hero .hero-text-wrap h3 {\n  color: #ffffff !important;\n}\n.hero-actions-grid .hero-booking-action.tournament-hero .hero-text-wrap p {\n  color: #94a3b8 !important;\n}\n.hero-actions-grid .hero-booking-action.tournament-hero ion-icon[name=arrow-forward] {\n  color: #ccff00;\n  opacity: 1;\n}\n/*# sourceMappingURL=entrenador-home.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: MysqlService }, { type: AuthService }, { type: EntrenamientoService }, { type: ActionSheetController }, { type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrenadorHomePage, { className: "EntrenadorHomePage", filePath: "src/app/pages/entrenador-home/entrenador-home.page.ts", lineNumber: 43 });
})();
export {
  EntrenadorHomePage
};
//# sourceMappingURL=entrenador-home.page-HLIVZI5S.js.map

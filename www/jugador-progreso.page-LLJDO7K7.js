import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from "./chunk-5YKSH3EK.js";
import "./chunk-LFXGPXMG.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NavController,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
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
import "./chunk-Q3N56TRI.js";

// src/app/pages/jugador-progreso/jugador-progreso.page.ts
var _JugadorProgresoPage = class _JugadorProgresoPage {
  constructor(navCtrl, mysqlService) {
    this.navCtrl = navCtrl;
    this.mysqlService = mysqlService;
    this.jugadorNombre = "...";
    this.fotoPerfil = "";
  }
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    const userId = Number(localStorage.getItem("userId"));
    if (!userId)
      return;
    this.mysqlService.getPerfil(userId).subscribe({
      next: (res) => {
        if (res) {
          const userData = res.user || res;
          this.jugadorNombre = userData.nombre || "Usuario";
          const p1 = userData.foto_perfil;
          const p2 = userData.foto;
          const p3 = userData.link_foto;
          let fotoRaw = p1 || p2 || p3;
          this.fotoPerfil = this.getProfileImage(fotoRaw);
        }
      }
    });
  }
  goBack() {
    this.navCtrl.back();
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
_JugadorProgresoPage.\u0275fac = function JugadorProgresoPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JugadorProgresoPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(MysqlService));
};
_JugadorProgresoPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JugadorProgresoPage, selectors: [["app-jugador-progreso"]], decls: 37, vars: 2, consts: [[1, "header-nike"], [1, "header-overlay"], [1, "header-content-wrapper"], [1, "avatar-circle"], ["alt", "Avatar", 3, "error", "src"], [1, "header-text"], [1, "welcome-pre"], [1, "header-title"], [1, "dashboard-container"], [1, "empty-progress-card", "animate-up"], [1, "icon-circle"], ["name", "trending-up-outline"], [1, "feature-preview"], [1, "preview-item"], ["name", "stats-chart-outline"], ["name", "medal-outline"], ["name", "videocam-outline"], ["expand", "block", 1, "nike-button", "main-btn", 3, "click"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"]], template: function JugadorProgresoPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "img", 4);
    \u0275\u0275listener("error", function JugadorProgresoPage_Template_img_error_5_listener($event) {
      return ctx.onImgError($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
    \u0275\u0275text(8, "MI PROGRESO T\xC9CNICO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "div", 10);
    \u0275\u0275element(14, "ion-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h2");
    \u0275\u0275text(16, "Pronto Estar\xE1 Aqu\xED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18, "Estamos trabajando en un panel de estad\xEDsticas personalizadas para que analices cada golpe y mejores tu nivel. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12)(20, "div", 13);
    \u0275\u0275element(21, "ion-icon", 14);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Gr\xE1ficos de Nivel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275element(25, "ion-icon", 15);
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Logros y Medallas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 13);
    \u0275\u0275element(29, "ion-icon", 16);
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "An\xE1lisis de Video");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "ion-button", 17);
    \u0275\u0275listener("click", function JugadorProgresoPage_Template_ion_button_click_32_listener() {
      return ctx.goBack();
    });
    \u0275\u0275text(33, " Volver al Inicio ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "ion-fab", 18)(35, "ion-fab-button", 19);
    \u0275\u0275listener("click", function JugadorProgresoPage_Template_ion_fab_button_click_35_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(36, "ion-icon", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx.fotoPerfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.jugadorNombre);
  }
}, dependencies: [IonContent, IonIcon, IonButton, IonFab, IonFabButton, CommonModule, FormsModule], styles: ["\n\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike[_ngcontent-%COMP%]   .header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n}\n.header-content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 65px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .welcome-pre[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 30px 25px;\n}\n.empty-progress-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 30px;\n  padding: 40px 25px;\n  text-align: center;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f2f2f7;\n}\n.empty-progress-card[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #f2f2f7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 25px;\n}\n.empty-progress-card[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--ion-color-primary);\n}\n.empty-progress-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.empty-progress-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.5;\n  color: #8e8e93;\n  margin-bottom: 35px;\n}\n.empty-progress-card[_ngcontent-%COMP%]   .feature-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 40px;\n  text-align: left;\n  padding: 0 10px;\n}\n.empty-progress-card[_ngcontent-%COMP%]   .feature-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 12px;\n  background: #fcfcfc;\n  border-radius: 12px;\n  border: 1px solid #f2f2f7;\n}\n.empty-progress-card[_ngcontent-%COMP%]   .feature-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.empty-progress-card[_ngcontent-%COMP%]   .feature-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n}\n.empty-progress-card[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  margin: 0;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=jugador-progreso.page.css.map */"] });
var JugadorProgresoPage = _JugadorProgresoPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JugadorProgresoPage, [{
    type: Component,
    args: [{ selector: "app-jugador-progreso", standalone: true, imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonFab, IonFabButton, CommonModule, FormsModule], template: `<ion-content>

  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content-wrapper">
      <div class="avatar-circle">
        <img [src]="fotoPerfil || 'assets/avatar.png'" (error)="onImgError($event)" alt="Avatar" />
      </div>
      <div class="header-text">
        <p class="welcome-pre">MI PROGRESO T\xC9CNICO</p>
        <h1 class="header-title">{{ jugadorNombre }}</h1>
      </div>
    </div>
  </div>

  <!-- Empty State (Nike Style) -->
  <div class="dashboard-container">
    <div class="empty-progress-card animate-up">
      <div class="icon-circle">
        <ion-icon name="trending-up-outline"></ion-icon>
      </div>

      <h2>Pronto Estar\xE1 Aqu\xED</h2>
      <p>Estamos trabajando en un panel de estad\xEDsticas personalizadas para que analices cada golpe y mejores tu nivel.
      </p>

      <div class="feature-preview">
        <div class="preview-item">
          <ion-icon name="stats-chart-outline"></ion-icon>
          <span>Gr\xE1ficos de Nivel</span>
        </div>
        <div class="preview-item">
          <ion-icon name="medal-outline"></ion-icon>
          <span>Logros y Medallas</span>
        </div>
        <div class="preview-item">
          <ion-icon name="videocam-outline"></ion-icon>
          <span>An\xE1lisis de Video</span>
        </div>
      </div>

      <ion-button expand="block" class="nike-button main-btn" (click)="goBack()">
        Volver al Inicio
      </ion-button>
    </div>
  </div>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>`, styles: ["/* src/app/pages/jugador-progreso/jugador-progreso.page.scss */\n.header-nike {\n  position: relative;\n  height: 250px;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike .header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n}\n.header-content-wrapper {\n  position: absolute;\n  bottom: 65px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper .avatar-circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper .avatar-circle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper .header-text .welcome-pre {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper .header-text .header-title {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.dashboard-container {\n  padding: 30px 25px;\n}\n.empty-progress-card {\n  background: white;\n  border-radius: 30px;\n  padding: 40px 25px;\n  text-align: center;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f2f2f7;\n}\n.empty-progress-card .icon-circle {\n  width: 80px;\n  height: 80px;\n  background: #f2f2f7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 25px;\n}\n.empty-progress-card .icon-circle ion-icon {\n  font-size: 36px;\n  color: var(--ion-color-primary);\n}\n.empty-progress-card h2 {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n}\n.empty-progress-card p {\n  font-size: 15px;\n  line-height: 1.5;\n  color: #8e8e93;\n  margin-bottom: 35px;\n}\n.empty-progress-card .feature-preview {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 40px;\n  text-align: left;\n  padding: 0 10px;\n}\n.empty-progress-card .feature-preview .preview-item {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 12px;\n  background: #fcfcfc;\n  border-radius: 12px;\n  border: 1px solid #f2f2f7;\n}\n.empty-progress-card .feature-preview .preview-item ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.empty-progress-card .feature-preview .preview-item span {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n}\n.empty-progress-card .main-btn {\n  height: 56px;\n  margin: 0;\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=jugador-progreso.page.css.map */\n"] }]
  }], () => [{ type: NavController }, { type: MysqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JugadorProgresoPage, { className: "JugadorProgresoPage", filePath: "src/app/pages/jugador-progreso/jugador-progreso.page.ts", lineNumber: 15 });
})();
export {
  JugadorProgresoPage
};
//# sourceMappingURL=jugador-progreso.page-LLJDO7K7.js.map

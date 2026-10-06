import {
  AlertController,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonTitle,
  IonToolbar,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  addCircleOutline,
  addIcons,
  chevronBackOutline,
  giftOutline,
  pricetagOutline,
  pricetagsOutline,
  qrCodeOutline,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
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
  __spreadProps,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/pages/tarjeta-digital/tarjeta-digital.page.ts
function TarjetaDigitalPage_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Categor\xEDa: ", ctx_r0.profile.categoria);
  }
}
function TarjetaDigitalPage_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Categor\xEDa: Cuarta");
    \u0275\u0275elementEnd();
  }
}
function TarjetaDigitalPage_img_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 48);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.qrCodeUrl, \u0275\u0275sanitizeUrl);
  }
}
function TarjetaDigitalPage_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "ion-spinner", 50);
    \u0275\u0275elementEnd();
  }
}
function TarjetaDigitalPage_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275element(2, "ion-icon", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "p", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 58);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("tx-earn", tx_r2.amount_points > 0)("tx-redeem", tx_r2.amount_points < 0);
    \u0275\u0275advance();
    \u0275\u0275property("name", tx_r2.amount_points > 0 ? "add-circle-outline" : "gift-outline");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 13, tx_r2.created_at, "dd MMM yyyy, HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("points-positive", tx_r2.amount_points > 0)("points-negative", tx_r2.amount_points < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", tx_r2.amount_points > 0 ? "+" : "", "", tx_r2.amount_points, " pts ");
  }
}
function TarjetaDigitalPage_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, TarjetaDigitalPage_div_59_div_1_Template, 11, 16, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.transactions);
  }
}
function TarjetaDigitalPage_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "p");
    \u0275\u0275text(2, "No tienes transacciones de puntos todav\xEDa.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\xA1Participa en torneos y partidos para acumular puntos!");
    \u0275\u0275elementEnd()();
  }
}
var _TarjetaDigitalPage = class _TarjetaDigitalPage {
  constructor(mysqlService, navCtrl, toastCtrl, alertCtrl, router) {
    this.mysqlService = mysqlService;
    this.navCtrl = navCtrl;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.profile = {
      nombre: "",
      rol: "",
      categoria: ""
    };
    this.loading = false;
    this.userId = Number(localStorage.getItem("userId"));
    this.walletBalance = 0;
    this.transactions = [];
    this.userCoupons = [];
    this.qrCodeUrl = "";
    this.qrTimeLeft = 30;
    this.qrTimerInterval = null;
    addIcons({
      chevronBackOutline,
      walletOutline,
      timeOutline,
      giftOutline,
      addCircleOutline,
      qrCodeOutline,
      pricetagOutline,
      pricetagsOutline
    });
  }
  ngOnInit() {
    this.loadProfile();
  }
  ionViewDidEnter() {
    this.startQRFlow();
  }
  ionViewWillLeave() {
    this.stopQRFlow();
  }
  ngOnDestroy() {
    this.stopQRFlow();
  }
  startQRFlow() {
    this.loadWallet();
    this.loadTransactions();
    this.loadUserCoupons();
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
      error: (err) => console.error("Error loading profile in wallet page:", err)
    });
  }
  loadWallet() {
    if (!this.userId)
      return;
    this.mysqlService.getWallet(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.wallet) {
          this.walletBalance = res.wallet.total_balance;
        }
      },
      error: (err) => console.error("Error loading wallet:", err)
    });
  }
  loadTransactions() {
    if (!this.userId)
      return;
    this.mysqlService.getWalletTransactions(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.transactions) {
          this.transactions = res.transactions;
        }
      },
      error: (err) => console.error("Error loading transactions:", err)
    });
  }
  loadUserCoupons() {
    if (!this.userId)
      return;
    this.mysqlService.getUserCoupons(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.coupons) {
          this.userCoupons = res.coupons;
        }
      },
      error: (err) => console.error("Error loading user coupons:", err)
    });
  }
  generateQR() {
    if (!this.userId)
      return;
    this.mysqlService.generateQRCode(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.qr_payload) {
          this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(res.qr_payload)}`;
          this.qrTimeLeft = 30;
        }
      },
      error: (err) => console.error("Error generating QR payload:", err)
    });
  }
  handleRefresh(event) {
    this.loadProfile();
    this.loadWallet();
    this.loadTransactions();
    this.loadUserCoupons();
    this.generateQR();
    setTimeout(() => {
      if (event && event.target) {
        event.target.complete();
      }
    }, 1e3);
  }
  verPremios() {
    this.router.navigate(["/mis-clubes-puntos"]);
  }
  goBack() {
    this.navCtrl.back();
  }
  goToClubesPuntos() {
    this.router.navigate(["/mis-clubes-puntos"]);
  }
};
_TarjetaDigitalPage.\u0275fac = function TarjetaDigitalPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TarjetaDigitalPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(Router));
};
_TarjetaDigitalPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TarjetaDigitalPage, selectors: [["app-tarjeta-digital"]], decls: 61, vars: 13, consts: [[1, "ion-no-border"], [1, "nike-toolbar"], ["slot", "start"], [3, "click"], ["name", "chevron-back-outline", "slot", "icon-only", "color", "dark"], [1, "nike-title"], [1, "tarjeta-content"], ["slot", "fixed", 3, "ionRefresh"], [1, "dashboard-container"], [1, "loyalty-card-container"], [1, "glass-loyalty-card"], [1, "card-glow"], [1, "card-header"], [1, "logo-wrapper"], ["src", "assets/pelota.png", "alt", "PadelBlox Logo", 1, "card-logo-img"], [1, "card-logo-text"], [1, "card-type-badge"], [1, "card-holder-row"], [1, "player-avatar-wrapper"], ["alt", "Foto Perfil", 1, "player-avatar-img", 3, "src"], [1, "player-info"], [1, "player-name"], ["class", "player-category", 4, "ngIf"], [1, "wallet-badge-section"], [1, "balance-title"], [1, "balance-value-wrapper"], [1, "balance-value"], [1, "pts-label"], [1, "scan-zone"], [1, "qr-scanner-frame"], [1, "corner", "top-left"], [1, "corner", "top-right"], [1, "corner", "bottom-left"], [1, "corner", "bottom-right"], [1, "qr-box"], ["class", "qr-image", "alt", "QR Code", 3, "src", 4, "ngIf"], ["class", "qr-placeholder", 4, "ngIf"], [1, "qr-timer-badge"], ["name", "time-outline"], [1, "card-actions", 2, "display", "flex", "flex-direction", "column", "width", "100%"], [1, "card-action-btn", "redeem-btn", 2, "width", "100%", "margin", "0", 3, "click"], ["name", "gift-outline"], [1, "section-card", "loyalty-history-card"], [1, "section-title"], ["name", "wallet-outline"], ["class", "transactions-list", 4, "ngIf"], ["class", "transactions-empty", 4, "ngIf"], [1, "player-category"], ["alt", "QR Code", 1, "qr-image", 3, "src"], [1, "qr-placeholder"], ["name", "crescent"], [1, "transactions-list"], ["class", "transaction-item", 4, "ngFor", "ngForOf"], [1, "transaction-item"], [1, "tx-icon-wrapper"], [3, "name"], [1, "tx-details"], [1, "tx-desc"], [1, "tx-date"], [1, "tx-points"], [1, "transactions-empty"]], template: function TarjetaDigitalPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-button", 3);
    \u0275\u0275listener("click", function TarjetaDigitalPage_Template_ion_button_click_3_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title", 5);
    \u0275\u0275text(6, "MI TARJETA DIGITAL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 6)(8, "ion-refresher", 7);
    \u0275\u0275listener("ionRefresh", function TarjetaDigitalPage_Template_ion_refresher_ionRefresh_8_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(9, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10);
    \u0275\u0275element(13, "div", 11);
    \u0275\u0275elementStart(14, "div", 12)(15, "div", 13);
    \u0275\u0275element(16, "img", 14);
    \u0275\u0275elementStart(17, "span", 15);
    \u0275\u0275text(18, "PadelBlox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 16);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "div", 18);
    \u0275\u0275element(23, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "h3", 21);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, TarjetaDigitalPage_span_27_Template, 2, 1, "span", 22)(28, TarjetaDigitalPage_span_28_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 23)(30, "span", 24);
    \u0275\u0275text(31, "MIS PUNTOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 25)(33, "span", 26);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 27);
    \u0275\u0275text(37, "PTS");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 28)(39, "div", 29);
    \u0275\u0275element(40, "div", 30)(41, "div", 31)(42, "div", 32)(43, "div", 33);
    \u0275\u0275elementStart(44, "div", 34);
    \u0275\u0275template(45, TarjetaDigitalPage_img_45_Template, 1, 1, "img", 35)(46, TarjetaDigitalPage_div_46_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 37);
    \u0275\u0275element(48, "ion-icon", 38);
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 39)(52, "button", 40);
    \u0275\u0275listener("click", function TarjetaDigitalPage_Template_button_click_52_listener() {
      return ctx.verPremios();
    });
    \u0275\u0275element(53, "ion-icon", 41);
    \u0275\u0275text(54, " Ver Premios por Club ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 42)(56, "h3", 43);
    \u0275\u0275element(57, "ion-icon", 44);
    \u0275\u0275text(58, " Historial de Puntos ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, TarjetaDigitalPage_div_59_Template, 2, 1, "div", 45)(60, TarjetaDigitalPage_div_60_Template, 5, 0, "div", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx.profile.rol === "entrenador" || ctx.profile.rol === "entrenador_padel" ? "PRO COACH" : "PLAYER PASS");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.profile.foto_perfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.profile.nombre || "Cargando jugador...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.profile.categoria);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.profile.categoria);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 11, ctx.walletBalance));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.qrCodeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.qrCodeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("C\xF3digo de verificaci\xF3n din\xE1mico (", ctx.qrTimeLeft, "s)");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.transactions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.transactions.length === 0);
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
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  DecimalPipe,
  DatePipe
], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n}\n.nike-toolbar[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --color: #000000;\n  border-bottom: 1px solid #f1f5f9;\n}\n.nike-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 14px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #000000;\n  text-align: center;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.loyalty-card-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 20, 20, 0.98) 0%,\n      rgba(38, 38, 38, 0.98) 100%);\n  border-radius: 32px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.25);\n  color: white;\n  overflow: hidden;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 255, 127, 0.22) 0%,\n      rgba(0, 255, 127, 0) 70%);\n  z-index: 0;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_rotateGlow 10s linear infinite;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .card-logo-img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 6px rgba(0, 255, 127, 0.5));\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .card-logo-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-type-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 127, 0.08);\n  color: #00ff7f;\n  border: 1px solid rgba(0, 255, 127, 0.25);\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 14px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-avatar-wrapper[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 2px solid #00ff7f;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.3);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-avatar-wrapper[_ngcontent-%COMP%]   .player-avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 900;\n  margin: 0;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .player-category[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  margin-top: 2px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-title[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.4);\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-value-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 3px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-value-wrapper[_ngcontent-%COMP%]   .balance-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  color: #ffffff;\n  text-shadow: 0 0 15px rgba(0, 255, 127, 0.35);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-holder-row[_ngcontent-%COMP%]   .wallet-badge-section[_ngcontent-%COMP%]   .balance-value-wrapper[_ngcontent-%COMP%]   .pts-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: #00ff7f;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border: 3px solid #00ff7f;\n  pointer-events: none;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner.top-left[_ngcontent-%COMP%] {\n  top: 8px;\n  left: 8px;\n  border-right: none;\n  border-bottom: none;\n  border-top-left-radius: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner.top-right[_ngcontent-%COMP%] {\n  top: 8px;\n  right: 8px;\n  border-left: none;\n  border-bottom: none;\n  border-top-right-radius: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner.bottom-left[_ngcontent-%COMP%] {\n  bottom: 8px;\n  left: 8px;\n  border-right: none;\n  border-top: none;\n  border-bottom-left-radius: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .corner.bottom-right[_ngcontent-%COMP%] {\n  bottom: 8px;\n  right: 8px;\n  border-left: none;\n  border-top: none;\n  border-bottom-right-radius: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  background: white;\n  border-radius: 16px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-scanner-frame[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-timer-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(0, 255, 127, 0.08);\n  color: #00ff7f;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 10px;\n  font-weight: 800;\n  margin-top: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .scan-zone[_ngcontent-%COMP%]   .qr-timer-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 18px;\n  display: flex;\n  justify-content: center;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .card-action-btn.redeem-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  margin: 0;\n  border-radius: 14px;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: #00ff7f;\n  color: #111111;\n  border: none;\n  box-shadow: 0 6px 20px rgba(0, 255, 127, 0.35);\n  transition: all 0.25s ease;\n  cursor: pointer;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .card-action-btn.redeem-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.glass-loyalty-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .card-action-btn.redeem-btn[_ngcontent-%COMP%]:active {\n  background: #00dd6f;\n  transform: translateY(1px);\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.25);\n}\n@keyframes _ngcontent-%COMP%_rotateGlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.section-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n}\n.section-card[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #64748b;\n}\n.section-card[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: black;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-top: 8px;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-icon-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-icon-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-icon-wrapper.tx-earn[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 127, 0.1);\n  color: #00b050;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-icon-wrapper.tx-redeem[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-details[_ngcontent-%COMP%]   .tx-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #111111;\n  margin: 0 0 2px 0;\n  line-height: 1.3;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-details[_ngcontent-%COMP%]   .tx-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 600;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-points[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 900;\n  white-space: nowrap;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-points.points-positive[_ngcontent-%COMP%] {\n  color: #00b050;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-points.points-negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transactions-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 10px;\n  color: #64748b;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transactions-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #111111;\n  margin: 0 0 4px 0;\n}\n.loyalty-history-card[_ngcontent-%COMP%]   .transactions-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.3;\n  display: block;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupons-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: -10px 0 16px 0;\n  font-weight: 500;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupons-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item.coupon-used[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  filter: grayscale(1);\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item.coupon-used[_ngcontent-%COMP%]   .coupon-status-badge[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #64748b;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-ticket-border[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  background: #00ff7f;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-main[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  justify-content: space-between;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-left[_ngcontent-%COMP%]   .coupon-reward-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #1e293b;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-left[_ngcontent-%COMP%]   .coupon-cost-subtitle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #00b050;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-left[_ngcontent-%COMP%]   .coupon-date-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  padding-left: 12px;\n  border-left: 1px dashed #e2e8f0;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-right[_ngcontent-%COMP%]   .coupon-code-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 900;\n  color: #94a3b8;\n  letter-spacing: 1px;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-right[_ngcontent-%COMP%]   .coupon-code-value[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 900;\n  color: #0f172a;\n  background: #f8fafc;\n  padding: 4px 8px;\n  border-radius: 6px;\n  letter-spacing: 0.5px;\n  border: 1px solid #f1f5f9;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-right[_ngcontent-%COMP%]   .coupon-status-badge[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 950;\n  padding: 2px 6px;\n  border-radius: 8px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  margin-top: 4px;\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-right[_ngcontent-%COMP%]   .coupon-status-badge.status-pending[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 127, 0.1);\n  color: #00b050;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n}\n.active-coupons-card[_ngcontent-%COMP%]   .coupon-item[_ngcontent-%COMP%]   .coupon-right[_ngcontent-%COMP%]   .coupon-status-badge.status-used[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n/*# sourceMappingURL=tarjeta-digital.page.css.map */"] });
var TarjetaDigitalPage = _TarjetaDigitalPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TarjetaDigitalPage, [{
    type: Component,
    args: [{ selector: "app-tarjeta-digital", standalone: true, imports: [
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
      CommonModule,
      FormsModule
    ], template: `<ion-header class="ion-no-border">
  <ion-toolbar class="nike-toolbar">
    <ion-buttons slot="start">
      <ion-button (click)="goBack()">
        <ion-icon name="chevron-back-outline" slot="icon-only" color="dark"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title class="nike-title">MI TARJETA DIGITAL</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="tarjeta-content">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <div class="dashboard-container">

    <!-- Tarjeta Digital PadelBlox (Billetera de Fidelizaci\xF3n & QR) -->
    <div class="loyalty-card-container">
      <div class="glass-loyalty-card">
        <div class="card-glow"></div>
        
        <!-- Card Header (Branding & Membership Type) -->
        <div class="card-header">
          <div class="logo-wrapper">
            <img src="assets/pelota.png" class="card-logo-img" alt="PadelBlox Logo" />
            <span class="card-logo-text">PadelBlox</span>
          </div>
          <span class="card-type-badge">{{ profile.rol === 'entrenador' || profile.rol === 'entrenador_padel' ? 'PRO COACH' : 'PLAYER PASS' }}</span>
        </div>

        <!-- Card Holder Profile Row -->
        <div class="card-holder-row">
          <div class="player-avatar-wrapper">
            <img [src]="profile.foto_perfil || 'assets/avatar.png'" class="player-avatar-img" alt="Foto Perfil" />
          </div>
          <div class="player-info">
            <h3 class="player-name">{{ profile.nombre || 'Cargando jugador...' }}</h3>
            <span class="player-category" *ngIf="profile.categoria">Categor\xEDa: {{ profile.categoria }}</span>
            <span class="player-category" *ngIf="!profile.categoria">Categor\xEDa: Cuarta</span>
          </div>
          <div class="wallet-badge-section">
            <span class="balance-title">MIS PUNTOS</span>
            <div class="balance-value-wrapper">
              <span class="balance-value">{{ walletBalance | number }}</span>
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
                <ion-spinner name="crescent"></ion-spinner>
              </div>
            </div>
          </div>
          
          <div class="qr-timer-badge">
            <ion-icon name="time-outline"></ion-icon>
            <span>C\xF3digo de verificaci\xF3n din\xE1mico ({{ qrTimeLeft }}s)</span>
          </div>
        </div>

        <!-- Card Action Button (Opens the per-club rewards catalog) -->
        <div class="card-actions" style="display: flex; flex-direction: column; width: 100%;">
          <button (click)="verPremios()" class="card-action-btn redeem-btn" style="width: 100%; margin: 0;">
            <ion-icon name="gift-outline"></ion-icon>
            Ver Premios por Club
          </button>
        </div>
      </div>
    </div>

    <!-- Historial de Transacciones de Billetera -->
    <div class="section-card loyalty-history-card">
      <h3 class="section-title">
        <ion-icon name="wallet-outline"></ion-icon>
        Historial de Puntos
      </h3>
      <div class="transactions-list" *ngIf="transactions.length > 0">
        <div class="transaction-item" *ngFor="let tx of transactions">
          <div class="tx-icon-wrapper" [class.tx-earn]="tx.amount_points > 0" [class.tx-redeem]="tx.amount_points < 0">
            <ion-icon [name]="tx.amount_points > 0 ? 'add-circle-outline' : 'gift-outline'"></ion-icon>
          </div>
          <div class="tx-details">
            <p class="tx-desc">{{ tx.description }}</p>
            <span class="tx-date">{{ tx.created_at | date:'dd MMM yyyy, HH:mm' }}</span>
          </div>
          <div class="tx-points" [class.points-positive]="tx.amount_points > 0" [class.points-negative]="tx.amount_points < 0">
            {{ tx.amount_points > 0 ? '+' : '' }}{{ tx.amount_points }} pts
          </div>
        </div>
      </div>
      <div class="transactions-empty" *ngIf="transactions.length === 0">
        <p>No tienes transacciones de puntos todav\xEDa.</p>
        <span>\xA1Participa en torneos y partidos para acumular puntos!</span>
      </div>
    </div>

  </div>
</ion-content>
`, styles: ["/* src/app/pages/tarjeta-digital/tarjeta-digital.page.scss */\nion-content {\n  --background: #f8fafc;\n}\n.nike-toolbar {\n  --background: #ffffff;\n  --color: #000000;\n  border-bottom: 1px solid #f1f5f9;\n}\n.nike-title {\n  font-weight: 900;\n  font-size: 14px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #000000;\n  text-align: center;\n}\n.dashboard-container {\n  padding: 18px;\n}\n.loyalty-card-container {\n  margin-bottom: 24px;\n}\n.glass-loyalty-card {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 20, 20, 0.98) 0%,\n      rgba(38, 38, 38, 0.98) 100%);\n  border-radius: 32px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.25);\n  color: white;\n  overflow: hidden;\n}\n.glass-loyalty-card .card-glow {\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 255, 127, 0.22) 0%,\n      rgba(0, 255, 127, 0) 70%);\n  z-index: 0;\n  pointer-events: none;\n  animation: rotateGlow 10s linear infinite;\n}\n.glass-loyalty-card .card-header {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.glass-loyalty-card .card-header .logo-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.glass-loyalty-card .card-header .logo-wrapper .card-logo-img {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 6px rgba(0, 255, 127, 0.5));\n}\n.glass-loyalty-card .card-header .logo-wrapper .card-logo-text {\n  font-size: 18px;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n.glass-loyalty-card .card-header .card-type-badge {\n  background: rgba(0, 255, 127, 0.08);\n  color: #00ff7f;\n  border: 1px solid rgba(0, 255, 127, 0.25);\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.glass-loyalty-card .card-holder-row {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 14px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.glass-loyalty-card .card-holder-row .player-avatar-wrapper {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 2px solid #00ff7f;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.3);\n}\n.glass-loyalty-card .card-holder-row .player-avatar-wrapper .player-avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.glass-loyalty-card .card-holder-row .player-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.glass-loyalty-card .card-holder-row .player-info .player-name {\n  font-size: 15px;\n  font-weight: 900;\n  margin: 0;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.glass-loyalty-card .card-holder-row .player-info .player-category {\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  margin-top: 2px;\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section .balance-title {\n  font-size: 8px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.4);\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section .balance-value-wrapper {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 3px;\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section .balance-value-wrapper .balance-value {\n  font-size: 22px;\n  font-weight: 950;\n  color: #ffffff;\n  text-shadow: 0 0 15px rgba(0, 255, 127, 0.35);\n}\n.glass-loyalty-card .card-holder-row .wallet-badge-section .balance-value-wrapper .pts-label {\n  font-size: 10px;\n  font-weight: 900;\n  color: #00ff7f;\n}\n.glass-loyalty-card .scan-zone {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame {\n  position: relative;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border: 3px solid #00ff7f;\n  pointer-events: none;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner.top-left {\n  top: 8px;\n  left: 8px;\n  border-right: none;\n  border-bottom: none;\n  border-top-left-radius: 12px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner.top-right {\n  top: 8px;\n  right: 8px;\n  border-left: none;\n  border-bottom: none;\n  border-top-right-radius: 12px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner.bottom-left {\n  bottom: 8px;\n  left: 8px;\n  border-right: none;\n  border-top: none;\n  border-bottom-left-radius: 12px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .corner.bottom-right {\n  bottom: 8px;\n  right: 8px;\n  border-left: none;\n  border-top: none;\n  border-bottom-right-radius: 12px;\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .qr-box {\n  width: 140px;\n  height: 140px;\n  background: white;\n  border-radius: 16px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n.glass-loyalty-card .scan-zone .qr-scanner-frame .qr-box .qr-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.glass-loyalty-card .scan-zone .qr-timer-badge {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(0, 255, 127, 0.08);\n  color: #00ff7f;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 10px;\n  font-weight: 800;\n  margin-top: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.glass-loyalty-card .scan-zone .qr-timer-badge ion-icon {\n  font-size: 12px;\n}\n.glass-loyalty-card .card-actions {\n  position: relative;\n  z-index: 1;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 18px;\n  display: flex;\n  justify-content: center;\n}\n.glass-loyalty-card .card-actions .card-action-btn.redeem-btn {\n  width: 100%;\n  height: 48px;\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  margin: 0;\n  border-radius: 14px;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: #00ff7f;\n  color: #111111;\n  border: none;\n  box-shadow: 0 6px 20px rgba(0, 255, 127, 0.35);\n  transition: all 0.25s ease;\n  cursor: pointer;\n}\n.glass-loyalty-card .card-actions .card-action-btn.redeem-btn ion-icon {\n  font-size: 18px;\n}\n.glass-loyalty-card .card-actions .card-action-btn.redeem-btn:active {\n  background: #00dd6f;\n  transform: translateY(1px);\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.25);\n}\n@keyframes rotateGlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.section-card {\n  background: white;\n  border-radius: 32px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n}\n.section-card .section-title {\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #64748b;\n}\n.section-card .section-title ion-icon {\n  font-size: 18px;\n  color: black;\n}\n.loyalty-history-card .transactions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-top: 8px;\n}\n.loyalty-history-card .transaction-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.loyalty-history-card .transaction-item:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.loyalty-history-card .transaction-item .tx-icon-wrapper {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.loyalty-history-card .transaction-item .tx-icon-wrapper ion-icon {\n  font-size: 20px;\n}\n.loyalty-history-card .transaction-item .tx-icon-wrapper.tx-earn {\n  background: rgba(0, 255, 127, 0.1);\n  color: #00b050;\n}\n.loyalty-history-card .transaction-item .tx-icon-wrapper.tx-redeem {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.loyalty-history-card .transaction-item .tx-details {\n  flex: 1;\n}\n.loyalty-history-card .transaction-item .tx-details .tx-desc {\n  font-size: 13px;\n  font-weight: 800;\n  color: #111111;\n  margin: 0 0 2px 0;\n  line-height: 1.3;\n}\n.loyalty-history-card .transaction-item .tx-details .tx-date {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 600;\n}\n.loyalty-history-card .transaction-item .tx-points {\n  font-size: 14px;\n  font-weight: 900;\n  white-space: nowrap;\n}\n.loyalty-history-card .transaction-item .tx-points.points-positive {\n  color: #00b050;\n}\n.loyalty-history-card .transaction-item .tx-points.points-negative {\n  color: #ef4444;\n}\n.loyalty-history-card .transactions-empty {\n  text-align: center;\n  padding: 30px 10px;\n  color: #64748b;\n}\n.loyalty-history-card .transactions-empty p {\n  font-size: 14px;\n  font-weight: 800;\n  color: #111111;\n  margin: 0 0 4px 0;\n}\n.loyalty-history-card .transactions-empty span {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.3;\n  display: block;\n}\n.active-coupons-card .coupons-subtitle {\n  font-size: 12px;\n  color: #64748b;\n  margin: -10px 0 16px 0;\n  font-weight: 500;\n}\n.active-coupons-card .coupons-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.active-coupons-card .coupon-item {\n  position: relative;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n.active-coupons-card .coupon-item.coupon-used {\n  opacity: 0.6;\n  filter: grayscale(1);\n}\n.active-coupons-card .coupon-item.coupon-used .coupon-status-badge {\n  background: #e2e8f0;\n  color: #64748b;\n}\n.active-coupons-card .coupon-item .coupon-ticket-border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  background: #00ff7f;\n}\n.active-coupons-card .coupon-item .coupon-main {\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  justify-content: space-between;\n}\n.active-coupons-card .coupon-item .coupon-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.active-coupons-card .coupon-item .coupon-left .coupon-reward-title {\n  font-size: 14px;\n  font-weight: 800;\n  color: #1e293b;\n}\n.active-coupons-card .coupon-item .coupon-left .coupon-cost-subtitle {\n  font-size: 11px;\n  font-weight: 700;\n  color: #00b050;\n}\n.active-coupons-card .coupon-item .coupon-left .coupon-date-label {\n  font-size: 10px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.active-coupons-card .coupon-item .coupon-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  padding-left: 12px;\n  border-left: 1px dashed #e2e8f0;\n}\n.active-coupons-card .coupon-item .coupon-right .coupon-code-label {\n  font-size: 8px;\n  font-weight: 900;\n  color: #94a3b8;\n  letter-spacing: 1px;\n}\n.active-coupons-card .coupon-item .coupon-right .coupon-code-value {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 900;\n  color: #0f172a;\n  background: #f8fafc;\n  padding: 4px 8px;\n  border-radius: 6px;\n  letter-spacing: 0.5px;\n  border: 1px solid #f1f5f9;\n}\n.active-coupons-card .coupon-item .coupon-right .coupon-status-badge {\n  font-size: 8px;\n  font-weight: 950;\n  padding: 2px 6px;\n  border-radius: 8px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  margin-top: 4px;\n}\n.active-coupons-card .coupon-item .coupon-right .coupon-status-badge.status-pending {\n  background: rgba(0, 255, 127, 0.1);\n  color: #00b050;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n}\n.active-coupons-card .coupon-item .coupon-right .coupon-status-badge.status-used {\n  background: #f1f5f9;\n  color: #64748b;\n}\n/*# sourceMappingURL=tarjeta-digital.page.css.map */\n"] }]
  }], () => [{ type: MysqlService }, { type: NavController }, { type: ToastController }, { type: AlertController }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TarjetaDigitalPage, { className: "TarjetaDigitalPage", filePath: "src/app/pages/tarjeta-digital/tarjeta-digital.page.ts", lineNumber: 54 });
})();
export {
  TarjetaDigitalPage
};
//# sourceMappingURL=tarjeta-digital.page-SMJC5DU3.js.map

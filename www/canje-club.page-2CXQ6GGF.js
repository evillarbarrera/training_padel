import {
  AlertController,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonSpinner,
  IonTitle,
  IonToolbar,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  addIcons,
  alertCircleOutline,
  barcodeOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  closeOutline,
  giftOutline,
  personOutline,
  timeOutline,
  walletOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  NavController,
  NgControlStatus,
  NgIf,
  NgModel,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/pages/canje-club/canje-club.page.ts
function CanjeClubPage_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CanjeClubPage_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275element(1, "ion-icon", 21);
    \u0275\u0275elementEnd();
  }
}
function CanjeClubPage_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Verificar");
    \u0275\u0275elementEnd();
  }
}
function CanjeClubPage_ion_spinner_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 22);
  }
}
function CanjeClubPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "ion-spinner", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Consultando cup\xF3n en el servidor...");
    \u0275\u0275elementEnd()();
  }
}
function CanjeClubPage_div_24_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function CanjeClubPage_div_24_div_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRedemption());
    });
    \u0275\u0275element(2, "ion-icon", 47);
    \u0275\u0275text(3, " Confirmar Entrega de Premio ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function CanjeClubPage_div_24_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "ion-icon", 49);
    \u0275\u0275elementStart(2, "div", 50)(3, "h5");
    \u0275\u0275text(4, "Premio Entregado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Este cup\xF3n ya fue verificado y el premio fue entregado al jugador.");
    \u0275\u0275elementEnd()()();
  }
}
function CanjeClubPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "h4", 27);
    \u0275\u0275text(3, "INFORMACI\xD3N DEL CANJE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275element(7, "div", 30);
    \u0275\u0275elementStart(8, "div", 31)(9, "div", 32)(10, "span", 33);
    \u0275\u0275text(11, "Jugador / Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 32)(15, "span", 33);
    \u0275\u0275text(16, "Premio Canjeado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 36)(20, "div", 37)(21, "span", 33);
    \u0275\u0275text(22, "Costo en Puntos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 38);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 37)(26, "span", 33);
    \u0275\u0275text(27, "Fecha Canje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 39);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(31, "div", 40);
    \u0275\u0275elementStart(32, "div", 41)(33, "span", 33);
    \u0275\u0275text(34, "C\xD3DIGO DE CUP\xD3N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 42);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(37, CanjeClubPage_div_24_div_37_Template, 4, 1, "div", 43)(38, CanjeClubPage_div_24_div_38_Template, 7, 0, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("pending", ctx_r1.couponData.status === "pending")("used", ctx_r1.couponData.status === "used");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.couponData.status === "pending" ? "PENDIENTE" : "ENTREGADO", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("ticket-used", ctx_r1.couponData.status === "used");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.couponData.player_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u{1F381} ", ctx_r1.couponData.reward_name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.couponData.points_cost, " PTS");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 14, ctx_r1.couponData.created_at, "dd/MM/yyyy, HH:mm"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.couponData.coupon_code);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.couponData.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.couponData.status === "used");
  }
}
var _CanjeClubPage = class _CanjeClubPage {
  constructor(mysqlService, navCtrl, toastCtrl, alertCtrl, router) {
    this.mysqlService = mysqlService;
    this.navCtrl = navCtrl;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.couponCode = "";
    this.couponData = null;
    this.loading = false;
    addIcons({
      chevronBackOutline,
      barcodeOutline,
      checkmarkCircleOutline,
      closeOutline,
      alertCircleOutline,
      giftOutline,
      personOutline,
      walletOutline,
      timeOutline
    });
  }
  ngOnInit() {
  }
  verifyCoupon() {
    const code = this.couponCode.trim().toUpperCase();
    if (!code) {
      this.showToast("Por favor ingresa un c\xF3digo de cup\xF3n.", "warning");
      return;
    }
    this.loading = true;
    this.couponData = null;
    this.mysqlService.processClubRedemption(code, "verify").subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success && res.coupon) {
          this.couponData = res.coupon;
        } else {
          this.showToast("Cup\xF3n no encontrado.", "danger");
        }
      },
      error: (err) => {
        this.loading = false;
        console.error("Error verifying coupon:", err);
        const errMsg = err.error?.message || "C\xF3digo de cup\xF3n no encontrado o inv\xE1lido.";
        this.showToast(errMsg, "danger");
      }
    });
  }
  confirmRedemption() {
    if (!this.couponData)
      return;
    this.loading = true;
    const code = this.couponData.coupon_code;
    this.mysqlService.processClubRedemption(code, "confirm").subscribe({
      next: (res) => __async(this, null, function* () {
        this.loading = false;
        if (res && res.success) {
          this.couponData.status = "used";
          const alert = yield this.alertCtrl.create({
            header: "\xA1Premio Entregado! \u{1F389}",
            message: `El canje del cup\xF3n "${res.reward_name}" para el jugador "${res.player_name}" ha sido confirmado y registrado exitosamente.`,
            buttons: ["Entendido"]
          });
          yield alert.present();
          this.clearSearch();
        }
      }),
      error: (err) => {
        this.loading = false;
        console.error("Error confirming coupon:", err);
        const errMsg = err.error?.message || "Error al procesar el cup\xF3n.";
        this.showToast(errMsg, "danger");
      }
    });
  }
  clearSearch() {
    this.couponCode = "";
    this.couponData = null;
  }
  showToast(message, color = "dark") {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message,
        duration: 3e3,
        color
      });
      toast.present();
    });
  }
  goBack() {
    this.navCtrl.back();
  }
};
_CanjeClubPage.\u0275fac = function CanjeClubPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CanjeClubPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(Router));
};
_CanjeClubPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CanjeClubPage, selectors: [["app-canje-club"]], decls: 25, vars: 7, consts: [[1, "ion-no-border"], [1, "nike-toolbar"], ["slot", "start"], [3, "click"], ["name", "chevron-back-outline", "slot", "icon-only", "color", "dark"], [1, "nike-title"], [1, "canje-content"], [1, "dashboard-container"], [1, "header-intro"], [1, "search-card"], [1, "input-row"], [1, "search-input-wrapper"], ["name", "barcode-outline", 1, "input-icon"], ["type", "text", "placeholder", "C\xF3digo del Cup\xF3n (Ej: PB-3A8F2E)", 1, "coupon-search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "clear-btn", 3, "click", 4, "ngIf"], [1, "verify-btn", 3, "click", "disabled"], [4, "ngIf"], ["name", "crescent", "color", "light", "class", "small-spinner", 4, "ngIf"], ["class", "loading-center", 4, "ngIf"], ["class", "coupon-result-card animate-up", 4, "ngIf"], [1, "clear-btn", 3, "click"], ["name", "close-outline"], ["name", "crescent", "color", "light", 1, "small-spinner"], [1, "loading-center"], ["name", "crescent", "color", "success"], [1, "coupon-result-card", "animate-up"], [1, "result-header"], [1, "result-title"], [1, "status-pill"], [1, "ticket-visual"], [1, "ticket-top-border"], [1, "ticket-body"], [1, "ticket-row"], [1, "lbl"], [1, "val", "name"], [1, "val", "reward-title"], [1, "ticket-row-double"], [1, "ticket-col"], [1, "val", "points-cost"], [1, "val", "date"], [1, "ticket-divider"], [1, "ticket-code-row"], [1, "coupon-code"], ["class", "action-footer", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [1, "action-footer"], [1, "confirm-delivery-btn", 3, "click", "disabled"], ["name", "checkmark-circle-outline"], [1, "success-message"], ["name", "checkmark-circle-outline", 1, "success-check"], [1, "msg-text"]], template: function CanjeClubPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-button", 3);
    \u0275\u0275listener("click", function CanjeClubPage_Template_ion_button_click_3_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title", 5);
    \u0275\u0275text(6, "VALIDAR CUPONES");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 6)(8, "div", 7)(9, "div", 8)(10, "h2");
    \u0275\u0275text(11, "M\xF3dulo de Canje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "Ingresa el c\xF3digo alfanum\xE9rico provisto por el jugador para verificar e invalidar el cup\xF3n al entregar el premio.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11);
    \u0275\u0275element(17, "ion-icon", 12);
    \u0275\u0275elementStart(18, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function CanjeClubPage_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.couponCode, $event) || (ctx.couponCode = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function CanjeClubPage_Template_input_keyup_enter_18_listener() {
      return ctx.verifyCoupon();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CanjeClubPage_button_19_Template, 2, 0, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 15);
    \u0275\u0275listener("click", function CanjeClubPage_Template_button_click_20_listener() {
      return ctx.verifyCoupon();
    });
    \u0275\u0275template(21, CanjeClubPage_span_21_Template, 2, 0, "span", 16)(22, CanjeClubPage_ion_spinner_22_Template, 1, 0, "ion-spinner", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, CanjeClubPage_div_23_Template, 4, 0, "div", 18)(24, CanjeClubPage_div_24_Template, 39, 17, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx.couponCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.couponCode || ctx.couponData);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading && !ctx.couponData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.couponData);
  }
}, dependencies: [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonSpinner,
  IonButtons,
  CommonModule,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  DatePipe
], styles: ["\n\nion-content.canje-content[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n}\n.nike-toolbar[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --color: #000000;\n  border-bottom: 1px solid #f1f5f9;\n}\n.nike-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 14px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #000000;\n  text-align: center;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.header-intro[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.header-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: #0f172a;\n  margin: 0 0 6px 0;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n}\n.header-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.search-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 14px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);\n}\n.input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: #f1f5f9;\n  border-radius: 16px;\n  padding: 0 12px;\n  height: 48px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #64748b;\n  margin-right: 10px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .coupon-search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 750;\n  color: #0f172a;\n  outline: none;\n  text-transform: uppercase;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .coupon-search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  text-transform: none;\n  font-weight: 500;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  cursor: pointer;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:active {\n  color: #64748b;\n}\n.verify-btn[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 20px;\n  background: #000000;\n  color: #ffffff;\n  border: none;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n  transition: opacity 0.2s;\n}\n.verify-btn[_ngcontent-%COMP%]:active {\n  opacity: 0.85;\n}\n.verify-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.verify-btn[_ngcontent-%COMP%]   .small-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 0;\n  color: #64748b;\n}\n.loading-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.coupon-result-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 28px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.coupon-result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 12px;\n}\n.coupon-result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 950;\n  color: #64748b;\n  margin: 0;\n  letter-spacing: 1px;\n}\n.coupon-result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 950;\n  padding: 3px 8px;\n  border-radius: 8px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.coupon-result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .status-pill.pending[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 127, 0.1);\n  color: #00b050;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n}\n.coupon-result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .status-pill.used[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.ticket-visual[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f8fafc;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.01);\n}\n.ticket-visual.ticket-used[_ngcontent-%COMP%] {\n  filter: grayscale(0.8);\n  opacity: 0.7;\n}\n.ticket-visual.ticket-used[_ngcontent-%COMP%]   .ticket-top-border[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.ticket-visual[_ngcontent-%COMP%]   .ticket-top-border[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #00ff7f;\n  width: 100%;\n}\n.ticket-visual[_ngcontent-%COMP%]   .ticket-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ticket-visual[_ngcontent-%COMP%]   .ticket-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ticket-visual[_ngcontent-%COMP%]   .ticket-row-double[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.ticket-visual[_ngcontent-%COMP%]   .ticket-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ticket-visual[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.ticket-visual[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #1e293b;\n}\n.ticket-visual[_ngcontent-%COMP%]   .val.name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #0f172a;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.ticket-visual[_ngcontent-%COMP%]   .val.reward-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n  font-weight: 850;\n}\n.ticket-visual[_ngcontent-%COMP%]   .val.points-cost[_ngcontent-%COMP%] {\n  color: #00b050;\n  font-weight: 900;\n}\n.ticket-visual[_ngcontent-%COMP%]   .val.date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n}\n.ticket-visual[_ngcontent-%COMP%]   .ticket-divider[_ngcontent-%COMP%] {\n  border-top: 1px dashed #cbd5e1;\n  margin: 4px 0;\n}\n.ticket-visual[_ngcontent-%COMP%]   .ticket-code-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ticket-visual[_ngcontent-%COMP%]   .ticket-code-row[_ngcontent-%COMP%]   .coupon-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 18px;\n  font-weight: 950;\n  color: #0f172a;\n  letter-spacing: 0.5px;\n  background: #ffffff;\n  padding: 4px 10px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);\n}\n.action-footer[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.confirm-delivery-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  border-radius: 16px;\n  background: #00ff7f;\n  color: #000000;\n  border: none;\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(0, 255, 127, 0.35);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.confirm-delivery-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.confirm-delivery-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  background: #00dd6f;\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.25);\n}\n.confirm-delivery-btn[disabled][_ngcontent-%COMP%] {\n  background: #cbd5e1;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.success-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(0, 255, 127, 0.08);\n  border: 1px solid rgba(0, 255, 127, 0.2);\n  padding: 16px;\n  border-radius: 20px;\n}\n.success-message[_ngcontent-%COMP%]   .success-check[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #00b050;\n  flex-shrink: 0;\n}\n.success-message[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 950;\n  color: #00b050;\n  margin: 0 0 2px 0;\n  text-transform: uppercase;\n}\n.success-message[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.3;\n  font-weight: 550;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n/*# sourceMappingURL=canje-club.page.css.map */"] });
var CanjeClubPage = _CanjeClubPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanjeClubPage, [{
    type: Component,
    args: [{ selector: "app-canje-club", standalone: true, imports: [
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButton,
      IonIcon,
      IonSpinner,
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
    <ion-title class="nike-title">VALIDAR CUPONES</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="canje-content">
  <div class="dashboard-container">
    <div class="header-intro">
      <h2>M\xF3dulo de Canje</h2>
      <p>Ingresa el c\xF3digo alfanum\xE9rico provisto por el jugador para verificar e invalidar el cup\xF3n al entregar el premio.</p>
    </div>

    <!-- Search Card -->
    <div class="search-card">
      <div class="input-row">
        <div class="search-input-wrapper">
          <ion-icon name="barcode-outline" class="input-icon"></ion-icon>
          <input 
            type="text" 
            [(ngModel)]="couponCode" 
            placeholder="C\xF3digo del Cup\xF3n (Ej: PB-3A8F2E)"
            (keyup.enter)="verifyCoupon()"
            class="coupon-search-input" />
          <button class="clear-btn" *ngIf="couponCode || couponData" (click)="clearSearch()">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <button class="verify-btn" (click)="verifyCoupon()" [disabled]="loading">
          <span *ngIf="!loading">Verificar</span>
          <ion-spinner name="crescent" *ngIf="loading" color="light" class="small-spinner"></ion-spinner>
        </button>
      </div>
    </div>

    <!-- Loading Center -->
    <div class="loading-center" *ngIf="loading && !couponData">
      <ion-spinner name="crescent" color="success"></ion-spinner>
      <p>Consultando cup\xF3n en el servidor...</p>
    </div>

    <!-- Coupon Info Card -->
    <div class="coupon-result-card animate-up" *ngIf="couponData">
      <div class="result-header">
        <h4 class="result-title">INFORMACI\xD3N DEL CANJE</h4>
        <span class="status-pill" [class.pending]="couponData.status === 'pending'" [class.used]="couponData.status === 'used'">
          {{ couponData.status === 'pending' ? 'PENDIENTE' : 'ENTREGADO' }}
        </span>
      </div>

      <!-- Ticket component representation -->
      <div class="ticket-visual" [class.ticket-used]="couponData.status === 'used'">
        <div class="ticket-top-border"></div>
        <div class="ticket-body">
          <div class="ticket-row">
            <span class="lbl">Jugador / Cliente</span>
            <span class="val name">{{ couponData.player_name }}</span>
          </div>
          <div class="ticket-row">
            <span class="lbl">Premio Canjeado</span>
            <span class="val reward-title">\u{1F381} {{ couponData.reward_name }}</span>
          </div>
          <div class="ticket-row-double">
            <div class="ticket-col">
              <span class="lbl">Costo en Puntos</span>
              <span class="val points-cost">{{ couponData.points_cost }} PTS</span>
            </div>
            <div class="ticket-col">
              <span class="lbl">Fecha Canje</span>
              <span class="val date">{{ couponData.created_at | date:'dd/MM/yyyy, HH:mm' }}</span>
            </div>
          </div>
          <div class="ticket-divider"></div>
          <div class="ticket-code-row">
            <span class="lbl">C\xD3DIGO DE CUP\xD3N</span>
            <span class="coupon-code">{{ couponData.coupon_code }}</span>
          </div>
        </div>
      </div>

      <!-- Action CTAs -->
      <div class="action-footer" *ngIf="couponData.status === 'pending'">
        <button class="confirm-delivery-btn" (click)="confirmRedemption()" [disabled]="loading">
          <ion-icon name="checkmark-circle-outline"></ion-icon>
          Confirmar Entrega de Premio
        </button>
      </div>

      <div class="success-message" *ngIf="couponData.status === 'used'">
        <ion-icon name="checkmark-circle-outline" class="success-check"></ion-icon>
        <div class="msg-text">
          <h5>Premio Entregado</h5>
          <p>Este cup\xF3n ya fue verificado y el premio fue entregado al jugador.</p>
        </div>
      </div>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/canje-club/canje-club.page.scss */\nion-content.canje-content {\n  --background: #f8fafc;\n}\n.nike-toolbar {\n  --background: #ffffff;\n  --color: #000000;\n  border-bottom: 1px solid #f1f5f9;\n}\n.nike-title {\n  font-weight: 900;\n  font-size: 14px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #000000;\n  text-align: center;\n}\n.dashboard-container {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.header-intro {\n  margin-bottom: 8px;\n}\n.header-intro h2 {\n  font-size: 20px;\n  font-weight: 900;\n  color: #0f172a;\n  margin: 0 0 6px 0;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n}\n.header-intro p {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.search-card {\n  background: white;\n  border-radius: 24px;\n  padding: 14px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);\n}\n.input-row {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.search-input-wrapper {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: #f1f5f9;\n  border-radius: 16px;\n  padding: 0 12px;\n  height: 48px;\n}\n.search-input-wrapper .input-icon {\n  font-size: 22px;\n  color: #64748b;\n  margin-right: 10px;\n}\n.search-input-wrapper .coupon-search-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 750;\n  color: #0f172a;\n  outline: none;\n  text-transform: uppercase;\n}\n.search-input-wrapper .coupon-search-input::placeholder {\n  color: #94a3b8;\n  text-transform: none;\n  font-weight: 500;\n}\n.search-input-wrapper .clear-btn {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  cursor: pointer;\n}\n.search-input-wrapper .clear-btn:active {\n  color: #64748b;\n}\n.verify-btn {\n  height: 48px;\n  padding: 0 20px;\n  background: #000000;\n  color: #ffffff;\n  border: none;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n  transition: opacity 0.2s;\n}\n.verify-btn:active {\n  opacity: 0.85;\n}\n.verify-btn[disabled] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.verify-btn .small-spinner {\n  width: 20px;\n  height: 20px;\n}\n.loading-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 0;\n  color: #64748b;\n}\n.loading-center p {\n  margin-top: 12px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.coupon-result-card {\n  background: #ffffff;\n  border-radius: 28px;\n  border: 1px solid #f1f5f9;\n  padding: 20px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.coupon-result-card .result-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 12px;\n}\n.coupon-result-card .result-header .result-title {\n  font-size: 11px;\n  font-weight: 950;\n  color: #64748b;\n  margin: 0;\n  letter-spacing: 1px;\n}\n.coupon-result-card .result-header .status-pill {\n  font-size: 8px;\n  font-weight: 950;\n  padding: 3px 8px;\n  border-radius: 8px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.coupon-result-card .result-header .status-pill.pending {\n  background: rgba(0, 255, 127, 0.1);\n  color: #00b050;\n  border: 1px solid rgba(0, 255, 127, 0.2);\n}\n.coupon-result-card .result-header .status-pill.used {\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.ticket-visual {\n  position: relative;\n  background: #f8fafc;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.01);\n}\n.ticket-visual.ticket-used {\n  filter: grayscale(0.8);\n  opacity: 0.7;\n}\n.ticket-visual.ticket-used .ticket-top-border {\n  background: #94a3b8;\n}\n.ticket-visual .ticket-top-border {\n  height: 6px;\n  background: #00ff7f;\n  width: 100%;\n}\n.ticket-visual .ticket-body {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ticket-visual .ticket-row {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ticket-visual .ticket-row-double {\n  display: flex;\n  gap: 16px;\n}\n.ticket-visual .ticket-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ticket-visual .lbl {\n  font-size: 8px;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.ticket-visual .val {\n  font-size: 13px;\n  font-weight: 800;\n  color: #1e293b;\n}\n.ticket-visual .val.name {\n  font-size: 15px;\n  color: #0f172a;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.ticket-visual .val.reward-title {\n  font-size: 14px;\n  color: #0f172a;\n  font-weight: 850;\n}\n.ticket-visual .val.points-cost {\n  color: #00b050;\n  font-weight: 900;\n}\n.ticket-visual .val.date {\n  font-size: 11px;\n  color: #64748b;\n}\n.ticket-visual .ticket-divider {\n  border-top: 1px dashed #cbd5e1;\n  margin: 4px 0;\n}\n.ticket-visual .ticket-code-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ticket-visual .ticket-code-row .coupon-code {\n  font-family: monospace;\n  font-size: 18px;\n  font-weight: 950;\n  color: #0f172a;\n  letter-spacing: 0.5px;\n  background: #ffffff;\n  padding: 4px 10px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);\n}\n.action-footer {\n  margin-top: 4px;\n}\n.confirm-delivery-btn {\n  width: 100%;\n  height: 52px;\n  border-radius: 16px;\n  background: #00ff7f;\n  color: #000000;\n  border: none;\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(0, 255, 127, 0.35);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.confirm-delivery-btn ion-icon {\n  font-size: 18px;\n}\n.confirm-delivery-btn:active {\n  transform: scale(0.98);\n  background: #00dd6f;\n  box-shadow: 0 4px 15px rgba(0, 255, 127, 0.25);\n}\n.confirm-delivery-btn[disabled] {\n  background: #cbd5e1;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.success-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(0, 255, 127, 0.08);\n  border: 1px solid rgba(0, 255, 127, 0.2);\n  padding: 16px;\n  border-radius: 20px;\n}\n.success-message .success-check {\n  font-size: 28px;\n  color: #00b050;\n  flex-shrink: 0;\n}\n.success-message .msg-text h5 {\n  font-size: 13px;\n  font-weight: 950;\n  color: #00b050;\n  margin: 0 0 2px 0;\n  text-transform: uppercase;\n}\n.success-message .msg-text p {\n  font-size: 11px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.3;\n  font-weight: 550;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-up {\n  animation: slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n/*# sourceMappingURL=canje-club.page.css.map */\n"] }]
  }], () => [{ type: MysqlService }, { type: NavController }, { type: ToastController }, { type: AlertController }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CanjeClubPage, { className: "CanjeClubPage", filePath: "src/app/pages/canje-club/canje-club.page.ts", lineNumber: 50 });
})();
export {
  CanjeClubPage
};
//# sourceMappingURL=canje-club.page-2CXQ6GGF.js.map

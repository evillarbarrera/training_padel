import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption
} from "./chunk-5YKSH3EK.js";
import {
  AlertController
} from "./chunk-LFXGPXMG.js";
import {
  addIcons,
  lockClosedOutline,
  mailOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  Component,
  FormsModule,
  NgControlStatus,
  NgModel,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/pages/register/register.page.ts
var _RegisterPage = class _RegisterPage {
  constructor(router, mysqlService, alertCtrl) {
    this.router = router;
    this.mysqlService = mysqlService;
    this.alertCtrl = alertCtrl;
    this.email = "";
    this.password = "";
    this.nombre = "";
    this.rol = "jugador";
    addIcons({ mailOutline, lockClosedOutline });
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }
  register() {
    this.mysqlService.register(this.nombre, this.email, this.password, this.rol).subscribe({
      next: (res) => __async(this, null, function* () {
        if (res.success) {
          yield this.presentAlert("\xC9xito", "Usuario registrado con \xE9xito");
          this.router.navigate(["/login"]);
        } else {
          this.presentAlert("Error", res.message || "Error desconocido");
        }
      }),
      error: (err) => {
        console.error("Error en registro:", err);
        const msg = err.error?.error || err.error?.message || "Error conectando al servidor";
        this.presentAlert("Error", msg);
      }
    });
  }
  presentAlert(header, message) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header,
        message,
        buttons: ["OK"],
        cssClass: "custom-alert"
        // opcional para estilizar
      });
      yield alert.present();
    });
  }
};
_RegisterPage.\u0275fac = function RegisterPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegisterPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(AlertController));
};
_RegisterPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPage, selectors: [["app-register"]], decls: 38, vars: 4, consts: [[1, "login-content"], [1, "fixed-bg"], [1, "login-wrapper"], [1, "login-card"], [1, "logo-container"], [1, "logo-ring"], ["src", "assets/logo-circular.png", "alt", "PadelBlox", 1, "brand-logo"], [1, "brand-name"], [1, "brand-tagline"], [1, "divider"], [1, "form-section"], [1, "input-group"], [1, "input-field"], ["name", "person-outline"], ["type", "text", "placeholder", "Nombre completo", 3, "ngModelChange", "ngModel"], ["name", "mail-outline"], ["type", "email", "placeholder", "Correo electr\xF3nico", 3, "ngModelChange", "ngModel"], ["name", "lock-closed-outline"], ["type", "password", "placeholder", "Contrase\xF1a", 3, "ngModelChange", "ngModel"], ["name", "shield-checkmark-outline"], ["placeholder", "Selecciona tu rol", "interface", "popover", 3, "ngModelChange", "ngModel"], ["value", "jugador"], ["value", "entrenador"], ["expand", "block", 1, "login-btn", 3, "click"], [1, "register-link"], [3, "click"]], template: function RegisterPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h1", 7);
    \u0275\u0275text(8, "Padel");
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Blox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 8);
    \u0275\u0275text(12, "Crea tu cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 9);
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12);
    \u0275\u0275element(17, "ion-icon", 13);
    \u0275\u0275elementStart(18, "ion-input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nombre, $event) || (ctx.nombre = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275element(20, "ion-icon", 15);
    \u0275\u0275elementStart(21, "ion-input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275element(23, "ion-icon", 17);
    \u0275\u0275elementStart(24, "ion-input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_24_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 12);
    \u0275\u0275element(26, "ion-icon", 19);
    \u0275\u0275elementStart(27, "ion-select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPage_Template_ion_select_ngModelChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.rol, $event) || (ctx.rol = $event);
      return $event;
    });
    \u0275\u0275elementStart(28, "ion-select-option", 21);
    \u0275\u0275text(29, "Jugador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-select-option", 22);
    \u0275\u0275text(31, "Entrenador");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "ion-button", 23);
    \u0275\u0275listener("click", function RegisterPage_Template_ion_button_click_32_listener() {
      return ctx.register();
    });
    \u0275\u0275text(33, " Registrarme ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "p", 24);
    \u0275\u0275text(35, " \xBFYa tienes cuenta? ");
    \u0275\u0275elementStart(36, "span", 25);
    \u0275\u0275listener("click", function RegisterPage_Template_span_click_36_listener() {
      return ctx.goToLogin();
    });
    \u0275\u0275text(37, "Inicia Sesi\xF3n");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.rol);
  }
}, dependencies: [IonContent, IonIcon, IonButton, IonInput, IonSelect, IonSelectOption, FormsModule, NgControlStatus, NgModel], styles: ['\n\n.login-content[_ngcontent-%COMP%] {\n  --background: #0a0a0a;\n}\n.fixed-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -25vh;\n  left: -25vw;\n  width: 150vw;\n  height: 150vh;\n  z-index: 0;\n  background:\n    linear-gradient(\n      160deg,\n      rgba(0, 0, 0, 0.85) 0%,\n      rgba(0, 0, 0, 0.5) 50%,\n      rgba(0, 0, 0, 0.75) 100%),\n    url(/assets/fondo-padel.png) center/cover no-repeat;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 20px;\n  box-sizing: border-box;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 24px;\n  padding: 40px 24px 24px;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08);\n  text-align: center;\n  animation: _ngcontent-%COMP%_cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  will-change: transform, opacity;\n}\n.logo-container[_ngcontent-%COMP%] {\n  margin-top: -80px;\n  margin-bottom: 12px;\n  display: flex;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_logoPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;\n  opacity: 0;\n  transform: scale(0.8);\n}\n.logo-ring[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 4px rgba(204, 255, 0, 0.15);\n  overflow: hidden;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  color: #1a1a1a;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.brand-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #7cb342;\n  font-weight: 800;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #999;\n  margin: 6px 0 0;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #e0e0e0,\n      transparent);\n  margin: 16px 0;\n}\n.form-section[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.input-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f5f5f7;\n  border-radius: 16px;\n  padding: 0 16px;\n  height: 48px;\n  border: 2px solid transparent;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.input-field[_ngcontent-%COMP%]:focus-within {\n  border-color: #7cb342;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(124, 179, 66, 0.1);\n}\n.input-field[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n  font-size: 20px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  transition: color 0.3s ease;\n}\n.input-field[_ngcontent-%COMP%]:focus-within   ion-icon[_ngcontent-%COMP%] {\n  color: #7cb342;\n}\n.input-field[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  font-weight: 600;\n  font-size: 15px;\n  caret-color: #7cb342;\n}\n.options-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.options-row[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --size: 18px;\n  --border-radius: 6px;\n  --checkbox-background-checked: #7cb342;\n  --border-color-checked: #7cb342;\n  font-size: 13px;\n  color: #999;\n  font-weight: 500;\n}\n.options-row[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]::part(label) {\n  margin-inline-start: 8px;\n}\n.options-row[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #7cb342;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.options-row[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:active {\n  opacity: 0.7;\n}\n.login-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  --background: #1a1a1a;\n  --background-activated: #333;\n  --border-radius: 16px;\n  --color: #fff;\n  font-weight: 800;\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s ease;\n  margin: 0;\n}\n.login-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.error-msg-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 59, 48, 0.1);\n  color: #ff3b30;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 16px;\n  font-size: 13px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_cardSlideUp 0.3s ease-out;\n}\n.error-msg-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.social-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px 0;\n  color: #999;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  gap: 12px;\n}\n.social-divider[_ngcontent-%COMP%]::before, \n.social-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  height: 1px;\n  background: #e0e0e0;\n  flex: 1;\n}\n.social-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.social-row[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --border-color: #e0e0e0;\n  --color: #1a1a1a;\n  height: 48px;\n  font-weight: 700;\n  margin: 0;\n  font-size: 14px;\n}\n.social-row[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #4285f4;\n  font-size: 18px;\n}\n.social-row[_ngcontent-%COMP%]   .apple-btn[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --background: #000;\n  --color: #fff;\n  height: 48px;\n  font-weight: 700;\n  margin: 0;\n  font-size: 14px;\n}\n.social-row[_ngcontent-%COMP%]   .apple-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 12px;\n  font-size: 14px;\n  color: #666;\n}\n.register-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #111;\n  font-weight: 800;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.legal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  opacity: 0.6;\n  font-size: 11px;\n  font-weight: 600;\n}\n.legal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #666;\n  text-decoration: none;\n}\n.legal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_cardSlideUp {\n  0% {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_logoPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.recover-modal[_ngcontent-%COMP%] {\n  --height: auto;\n  --max-height: 500px;\n  --border-radius: 32px;\n  --background: #ffffff;\n  --box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);\n}\n.recover-modal[_ngcontent-%COMP%]::part(content) {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n.recover-modal.custom-bottom-sheet[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%] {\n  padding: 40px 28px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #ffffff;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .logo-container.small[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n  animation: none;\n  opacity: 1;\n  transform: scale(0.7);\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .logo-container.small[_ngcontent-%COMP%]   .logo-ring[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .recover-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a1a;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .recover-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888;\n  margin: 8px 0 24px;\n  text-align: center;\n  line-height: 1.4;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f5f5f7;\n  margin-bottom: 20px;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .recover-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  --background: #1a1a1a;\n  --background-activated: #333;\n  --color: #fff;\n  --border-radius: 16px;\n  font-weight: 800;\n  margin-top: 10px;\n  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .back-login[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: #888;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 10px;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .back-login[_ngcontent-%COMP%]:hover {\n  color: #7cb342;\n}\n/*# sourceMappingURL=register.page.css.map */'] });
var RegisterPage = _RegisterPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPage, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [IonContent, IonIcon, IonButton, IonInput, IonItem, IonSelect, IonSelectOption, FormsModule], template: '<ion-content class="login-content">\n  <div class="fixed-bg"></div>\n\n  <div class="login-wrapper">\n    <div class="login-card">\n      <!-- Logo integrado -->\n      <div class="logo-container">\n        <div class="logo-ring">\n          <img src="assets/logo-circular.png" class="brand-logo" alt="PadelBlox" />\n        </div>\n      </div>\n\n      <!-- Brand Name -->\n      <h1 class="brand-name">Padel<span>Blox</span></h1>\n      <p class="brand-tagline">Crea tu cuenta</p>\n\n      <!-- Divider -->\n      <div class="divider"></div>\n\n      <!-- Form -->\n      <div class="form-section">\n        <div class="input-group">\n          <div class="input-field">\n            <ion-icon name="person-outline"></ion-icon>\n            <ion-input type="text" placeholder="Nombre completo" [(ngModel)]="nombre"></ion-input>\n          </div>\n\n          <div class="input-field">\n            <ion-icon name="mail-outline"></ion-icon>\n            <ion-input type="email" placeholder="Correo electr\xF3nico" [(ngModel)]="email"></ion-input>\n          </div>\n\n          <div class="input-field">\n            <ion-icon name="lock-closed-outline"></ion-icon>\n            <ion-input type="password" placeholder="Contrase\xF1a" [(ngModel)]="password"></ion-input>\n          </div>\n\n          <div class="input-field">\n            <ion-icon name="shield-checkmark-outline"></ion-icon>\n            <ion-select placeholder="Selecciona tu rol" [(ngModel)]="rol" interface="popover">\n              <ion-select-option value="jugador">Jugador</ion-select-option>\n              <ion-select-option value="entrenador">Entrenador</ion-select-option>\n            </ion-select>\n          </div>\n        </div>\n\n        <ion-button expand="block" class="login-btn" (click)="register()">\n          Registrarme\n        </ion-button>\n      </div>\n\n      <!-- Footer -->\n      <p class="register-link">\n        \xBFYa tienes cuenta? <span (click)="goToLogin()">Inicia Sesi\xF3n</span>\n      </p>\n    </div>\n  </div>\n</ion-content>', styles: ['/* src/app/pages/register/register.page.scss */\n.login-content {\n  --background: #0a0a0a;\n}\n.fixed-bg {\n  position: fixed;\n  top: -25vh;\n  left: -25vw;\n  width: 150vw;\n  height: 150vh;\n  z-index: 0;\n  background:\n    linear-gradient(\n      160deg,\n      rgba(0, 0, 0, 0.85) 0%,\n      rgba(0, 0, 0, 0.5) 50%,\n      rgba(0, 0, 0, 0.75) 100%),\n    url(/assets/fondo-padel.png) center/cover no-repeat;\n}\n.login-wrapper {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 20px;\n  box-sizing: border-box;\n}\n.login-card {\n  width: 100%;\n  max-width: 360px;\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 24px;\n  padding: 40px 24px 24px;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08);\n  text-align: center;\n  animation: cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  will-change: transform, opacity;\n}\n.logo-container {\n  margin-top: -80px;\n  margin-bottom: 12px;\n  display: flex;\n  justify-content: center;\n  animation: logoPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;\n  opacity: 0;\n  transform: scale(0.8);\n}\n.logo-ring {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 4px rgba(204, 255, 0, 0.15);\n  overflow: hidden;\n}\n.brand-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.brand-name {\n  font-size: 24px;\n  font-weight: 900;\n  color: #1a1a1a;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.brand-name span {\n  color: #7cb342;\n  font-weight: 800;\n}\n.brand-tagline {\n  font-size: 13px;\n  color: #999;\n  margin: 6px 0 0;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.divider {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #e0e0e0,\n      transparent);\n  margin: 16px 0;\n}\n.form-section {\n  text-align: left;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.input-field {\n  display: flex;\n  align-items: center;\n  background: #f5f5f7;\n  border-radius: 16px;\n  padding: 0 16px;\n  height: 48px;\n  border: 2px solid transparent;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.input-field:focus-within {\n  border-color: #7cb342;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(124, 179, 66, 0.1);\n}\n.input-field ion-icon {\n  color: #b0b0b0;\n  font-size: 20px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  transition: color 0.3s ease;\n}\n.input-field:focus-within ion-icon {\n  color: #7cb342;\n}\n.input-field ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  font-weight: 600;\n  font-size: 15px;\n  caret-color: #7cb342;\n}\n.options-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.options-row ion-checkbox {\n  --size: 18px;\n  --border-radius: 6px;\n  --checkbox-background-checked: #7cb342;\n  --border-color-checked: #7cb342;\n  font-size: 13px;\n  color: #999;\n  font-weight: 500;\n}\n.options-row ion-checkbox::part(label) {\n  margin-inline-start: 8px;\n}\n.options-row .forgot-link {\n  font-size: 13px;\n  color: #7cb342;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.options-row .forgot-link:active {\n  opacity: 0.7;\n}\n.login-btn {\n  height: 50px;\n  --background: #1a1a1a;\n  --background-activated: #333;\n  --border-radius: 16px;\n  --color: #fff;\n  font-weight: 800;\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s ease;\n  margin: 0;\n}\n.login-btn:active {\n  transform: scale(0.97);\n}\n.error-msg-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 59, 48, 0.1);\n  color: #ff3b30;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 16px;\n  font-size: 13px;\n  font-weight: 600;\n  animation: cardSlideUp 0.3s ease-out;\n}\n.error-msg-container ion-icon {\n  font-size: 18px;\n}\n.social-divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px 0;\n  color: #999;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  gap: 12px;\n}\n.social-divider::before,\n.social-divider::after {\n  content: "";\n  height: 1px;\n  background: #e0e0e0;\n  flex: 1;\n}\n.social-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.social-row .google-btn {\n  --border-radius: 12px;\n  --border-color: #e0e0e0;\n  --color: #1a1a1a;\n  height: 48px;\n  font-weight: 700;\n  margin: 0;\n  font-size: 14px;\n}\n.social-row .google-btn ion-icon {\n  color: #4285f4;\n  font-size: 18px;\n}\n.social-row .apple-btn {\n  --border-radius: 12px;\n  --background: #000;\n  --color: #fff;\n  height: 48px;\n  font-weight: 700;\n  margin: 0;\n  font-size: 14px;\n}\n.social-row .apple-btn ion-icon {\n  color: #fff;\n  font-size: 18px;\n}\n.register-link {\n  text-align: center;\n  margin-top: 12px;\n  font-size: 14px;\n  color: #666;\n}\n.register-link span {\n  color: #111;\n  font-weight: 800;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.legal-footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  opacity: 0.6;\n  font-size: 11px;\n  font-weight: 600;\n}\n.legal-footer a {\n  color: #666;\n  text-decoration: none;\n}\n.legal-footer a:hover {\n  text-decoration: underline;\n}\n@keyframes cardSlideUp {\n  0% {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes logoPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.recover-modal {\n  --height: auto;\n  --max-height: 500px;\n  --border-radius: 32px;\n  --background: #ffffff;\n  --box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);\n}\n.recover-modal::part(content) {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n.recover-modal.custom-bottom-sheet {\n  --background: #ffffff;\n}\n.recover-modal .recover-container {\n  padding: 40px 28px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #ffffff;\n}\n.recover-modal .recover-container .logo-container.small {\n  margin-top: 0;\n  margin-bottom: 10px;\n  animation: none;\n  opacity: 1;\n  transform: scale(0.7);\n}\n.recover-modal .recover-container .logo-container.small .logo-ring {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.recover-modal .recover-container .recover-title {\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a1a;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.recover-modal .recover-container .recover-desc {\n  font-size: 14px;\n  color: #888;\n  margin: 8px 0 24px;\n  text-align: center;\n  line-height: 1.4;\n}\n.recover-modal .recover-container .input-field {\n  width: 100%;\n  background: #f5f5f7;\n  margin-bottom: 20px;\n}\n.recover-modal .recover-container .recover-btn {\n  width: 100%;\n  height: 56px;\n  --background: #1a1a1a;\n  --background-activated: #333;\n  --color: #fff;\n  --border-radius: 16px;\n  font-weight: 800;\n  margin-top: 10px;\n  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.recover-modal .recover-container .back-login {\n  margin-top: 24px;\n  color: #888;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 10px;\n}\n.recover-modal .recover-container .back-login:hover {\n  color: #7cb342;\n}\n/*# sourceMappingURL=register.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: MysqlService }, { type: AlertController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPage, { className: "RegisterPage", filePath: "src/app/pages/register/register.page.ts", lineNumber: 19 });
})();
export {
  RegisterPage
};
//# sourceMappingURL=register.page-JJBEX2MR.js.map

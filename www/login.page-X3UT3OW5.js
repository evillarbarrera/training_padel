import {
  GoogleAuth
} from "./chunk-N64SOG6K.js";
import {
  NotificationService
} from "./chunk-OPJ5BMLN.js";
import "./chunk-DBDG6EJI.js";
import {
  AlertController,
  BooleanValueAccessorDirective,
  IonButton,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonInput,
  IonModal,
  IonSpinner,
  IonicModule,
  LoadingController,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-LFXGPXMG.js";
import {
  addIcons,
  lockClosedOutline,
  logoApple,
  logoGoogle,
  mailOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgIf,
  NgModel,
  Platform,
  Router,
  setClassMetadata,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
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
import {
  registerPlugin
} from "./chunk-2WF3DFKV.js";
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
import "./chunk-CEAAMTO4.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async
} from "./chunk-Q3N56TRI.js";

// node_modules/@capacitor-community/apple-sign-in/dist/esm/index.js
var SignInWithApple = registerPlugin("SignInWithApple", {
  web: () => import("./web-5VKUCAH3.js").then((m) => new m.SignInWithAppleWeb())
});

// src/app/pages/login/login.page.ts
function LoginPage_ion_spinner_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 38);
  }
}
function LoginPage_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Entrar");
    \u0275\u0275elementEnd();
  }
}
function LoginPage_ion_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 39);
    \u0275\u0275listener("click", function LoginPage_ion_button_37_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loginWithApple());
    });
    \u0275\u0275element(1, "ion-icon", 40);
    \u0275\u0275text(2, " Apple ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function LoginPage_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "ion-icon", 42);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function LoginPage_ng_template_54_ion_spinner_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 38);
  }
}
function LoginPage_ng_template_54_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviar Instrucciones");
    \u0275\u0275elementEnd();
  }
}
function LoginPage_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 5);
    \u0275\u0275element(3, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 45);
    \u0275\u0275text(5, "Recuperar Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 46);
    \u0275\u0275text(7, "Ingresa tu correo para recibir instrucciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275element(9, "ion-icon", 13);
    \u0275\u0275elementStart(10, "ion-input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_ng_template_54_Template_ion_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.recoverEmail, $event) || (ctx_r1.recoverEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-button", 48);
    \u0275\u0275listener("click", function LoginPage_ng_template_54_Template_ion_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendRecoverEmail());
    });
    \u0275\u0275template(12, LoginPage_ng_template_54_ion_spinner_12_Template, 1, 0, "ion-spinner", 21)(13, LoginPage_ng_template_54_span_13_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 49);
    \u0275\u0275listener("click", function LoginPage_ng_template_54_Template_p_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRecoverModal());
    });
    \u0275\u0275text(15, "Volver a Iniciar Sesi\xF3n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.recoverEmail);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isRecovering);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRecovering);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isRecovering);
  }
}
var _LoginPage = class _LoginPage {
  constructor(mysql, router, alertCtrl, toastCtrl, platform, loadingCtrl, notificationService) {
    this.mysql = mysql;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.platform = platform;
    this.loadingCtrl = loadingCtrl;
    this.notificationService = notificationService;
    this.usuario = "";
    this.password = "";
    this.recordar = false;
    this.isLoading = false;
    this.error = "";
    this.isRecoverModalOpen = false;
    this.recoverEmail = "";
    this.isRecovering = false;
    addIcons({ mailOutline, lockClosedOutline, logoGoogle, logoApple });
  }
  ngOnInit() {
    if (this.checkExistingSession()) {
      return;
    }
    const savedUser = localStorage.getItem("savedUser");
    const savedPass = localStorage.getItem("savedPass");
    if (savedUser && savedPass) {
      this.usuario = savedUser;
      this.password = savedPass;
      this.recordar = true;
    }
  }
  checkExistingSession() {
    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("userRole");
    if (userId && userId !== "null" && userId !== "undefined") {
      this.redirectBasedOnRole(userRole || "jugador");
      return true;
    }
    return false;
  }
  loginDemo() {
    if (this.isLoading)
      return;
    this.isLoading = true;
    this.error = "";
    localStorage.setItem("token", "demo_playstore_review");
    localStorage.setItem("userId", "1");
    localStorage.setItem("userRole", "jugador");
    setTimeout(() => {
      this.isLoading = false;
      this.notificationService.updateTokenForUser();
      this.router.navigate(["/jugador-home"], { replaceUrl: true });
    }, 400);
  }
  // Traditional email/password login
  login() {
    return __async(this, null, function* () {
      if (!this.usuario || !this.password) {
        this.showError("Por favor ingrese usuario y contrase\xF1a");
        return;
      }
      if (this.isLoading)
        return;
      this.isLoading = true;
      this.error = "";
      try {
        this.mysql.login(this.usuario, this.password).pipe(timeout(7e3)).subscribe({
          next: (res) => {
            this.isLoading = false;
            if (res && res.token && res.id) {
              localStorage.setItem("token", res.token);
              localStorage.setItem("userId", res.id.toString());
              localStorage.setItem("userRole", res.rol);
              this.notificationService.updateTokenForUser();
              if (this.recordar) {
                localStorage.setItem("savedUser", this.usuario);
                localStorage.setItem("savedPass", this.password);
              } else {
                localStorage.removeItem("savedUser");
                localStorage.removeItem("savedPass");
              }
              this.redirectBasedOnRole(res.rol);
            } else {
              this.showError(res.message || "Credenciales incorrectas");
            }
          },
          error: (err) => {
            this.isLoading = false;
            console.error("Login error:", err);
            const errorMessage = err.status === 401 ? "Correo o contrase\xF1a incorrectos" : err.status === 404 ? "Usuario no encontrado" : "Error de conexi\xF3n. Int\xE9ntalo de nuevo.";
            this.showError(errorMessage);
          }
        });
      } catch (e) {
        this.isLoading = false;
        console.error("Critical Error in login flow:", e);
        this.showError("Error inesperado al iniciar sesi\xF3n");
      }
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      if (this.checkExistingSession()) {
        return;
      }
      if (this.platform.is("ios") || this.platform.is("ipad")) {
        try {
          yield GoogleAuth.initialize({
            clientId: "786145270372-e637i46g6uu1kekcr1ioqdka901acud7.apps.googleusercontent.com"
          });
        } catch (e) {
          console.warn("Google Auth already initialized or failed:", e);
        }
      }
    });
  }
  loginWithGoogle() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      this.error = "";
      try {
        if (this.platform.is("ios") || this.platform.is("ipad")) {
          yield GoogleAuth.initialize();
        }
        const googleUser = yield GoogleAuth.signIn();
        console.log("Google user:", googleUser);
        if (googleUser && googleUser.email) {
          this.mysql.googleCheck(googleUser.email).subscribe({
            next: (res) => {
              this.isLoading = false;
              if (res.exists) {
                if (res.token)
                  localStorage.setItem("token", res.token);
                localStorage.setItem("userId", res.id.toString());
                localStorage.setItem("userRole", res.rol);
                this.notificationService.updateTokenForUser();
                this.redirectBasedOnRole(res.rol);
              } else {
                this.showError("Cuenta no encontrada. Por favor reg\xEDstrate primero.");
              }
            },
            error: (err) => {
              this.isLoading = false;
              console.error("Google check error:", err);
              this.showError("Error al verificar cuenta Google.");
            }
          });
        } else {
          this.isLoading = false;
        }
      } catch (err) {
        this.isLoading = false;
        console.error("Google sign in error:", err);
        if (err.error !== "popup_closed_by_user" && err.message !== "arg 0 is not an object") {
          this.showError("Error al iniciar sesi\xF3n con Google.");
        }
      }
    });
  }
  loginWithApple() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      this.error = "";
      try {
        const isNative = this.platform.is("capacitor") || this.platform.is("hybrid");
        const clientId = isNative ? "cl.padelacademy.app" : "cl.padelacademy.app.web";
        const result = yield SignInWithApple.authorize({
          clientId,
          redirectURI: isNative ? "" : window.location.origin + "/login",
          scopes: "email name"
        });
        console.log("Apple response:", result);
        const user = result.response.user;
        const email = result.response.email || "";
        const givenName = result.response.givenName || "";
        const familyName = result.response.familyName || "";
        const fullName = (givenName + " " + familyName).trim() || "Usuario Apple";
        if (user) {
          this.mysql.appleCheck(email, user, fullName).subscribe({
            next: (res) => {
              this.isLoading = false;
              if (res.success && res.exists) {
                if (res.token)
                  localStorage.setItem("token", res.token);
                localStorage.setItem("userId", res.id.toString());
                localStorage.setItem("userRole", res.rol);
                this.notificationService.updateTokenForUser();
                this.redirectBasedOnRole(res.rol);
              } else {
                this.showError(res.error || "No se pudo vincular tu cuenta de Apple. Intenta con otro m\xE9todo.");
              }
            },
            error: (err) => {
              this.isLoading = false;
              console.error("Apple check error:", err);
              this.showError("Error de conexi\xF3n con el servidor de autenticaci\xF3n.");
            }
          });
        } else {
          this.isLoading = false;
          this.showError("No se recibi\xF3 el identificador de Apple. Int\xE9ntalo de nuevo.");
        }
      } catch (err) {
        this.isLoading = false;
        console.error("Apple sign in error details:", err);
        const isCancelled = err.error === "popup_closed_by_user" || err.message === "user_cancelled" || err.message === "Sign in with Apple was cancelled";
        if (!isCancelled) {
          const detail = err.message || err.error || JSON.stringify(err);
          this.showError(`Error Apple: ${detail}`);
        }
      }
    });
  }
  presentAlert(title, message) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: title,
        message,
        buttons: ["OK"]
      });
      yield alert.present();
    });
  }
  showError(message) {
    return __async(this, null, function* () {
      this.error = message;
      const toast = yield this.toastCtrl.create({
        message,
        duration: 2500,
        position: "top",
        color: "danger",
        icon: "alert-circle-outline"
      });
      yield toast.present();
    });
  }
  redirectBasedOnRole(rol) {
    if (rol === "entrenador") {
      this.router.navigate(["/entrenador-home"]);
    } else {
      this.router.navigate(["/jugador-home"]);
    }
  }
  goToRegister() {
    this.router.navigate(["/register"]);
  }
  recoverPassword() {
    this.isRecoverModalOpen = true;
  }
  closeRecoverModal() {
    this.isRecoverModalOpen = false;
    this.recoverEmail = "";
  }
  sendRecoverEmail() {
    if (!this.recoverEmail) {
      this.showError("Por favor ingrese su correo electr\xF3nico");
      return;
    }
    this.isRecovering = true;
    this.mysql.recoverPassword(this.recoverEmail).subscribe({
      next: (res) => {
        this.isRecovering = false;
        if (res.success) {
          this.presentAlert("Solicitud Enviada", "Si el correo est\xE1 registrado, recibir\xE1s instrucciones en unos minutos para restablecer tu contrase\xF1a.");
          this.closeRecoverModal();
        } else {
          this.showError(res.message || "Error al procesar la solicitud");
        }
      },
      error: (err) => {
        this.isRecovering = false;
        console.error("Recover error:", err);
        this.showError("Ocurri\xF3 un error. Intenta de nuevo m\xE1s tarde.");
      }
    });
  }
};
_LoginPage.\u0275fac = function LoginPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(NotificationService));
};
_LoginPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], decls: 55, vars: 11, consts: [[1, "login-content"], [1, "fixed-bg"], [1, "login-wrapper"], [1, "login-card"], [1, "logo-container"], [1, "logo-ring"], ["src", "assets/logo-circular.png", "alt", "PadelBlox", 1, "brand-logo"], [1, "brand-name"], [1, "brand-tagline"], [1, "divider"], [1, "form-section"], [1, "input-group"], [1, "input-field"], ["name", "mail-outline"], ["type", "email", "placeholder", "Correo electr\xF3nico", "mode", "md", 3, "ngModelChange", "ngModel"], ["name", "lock-closed-outline"], ["type", "password", "placeholder", "Contrase\xF1a", "mode", "md", 3, "ngModelChange", "ngModel"], [1, "options-row"], ["justify", "start", "labelPlacement", "end", 3, "ngModelChange", "ngModel"], [1, "forgot-link", 3, "click"], ["expand", "block", 1, "login-btn", 3, "click", "disabled"], ["name", "crescent", 4, "ngIf"], [4, "ngIf"], [1, "social-divider"], [1, "social-row"], ["expand", "block", "fill", "outline", 1, "google-btn", 3, "click", "disabled"], ["name", "logo-google", "slot", "start"], ["expand", "block", "fill", "solid", "class", "apple-btn", 3, "disabled", "click", 4, "ngIf"], [2, "margin-top", "12px", "text-align", "center"], ["expand", "block", "fill", "clear", "color", "secondary", 2, "--color", "#0284c7", "font-weight", "700", "font-size", "0.9rem", 3, "click", "disabled"], ["class", "error-msg-container", 4, "ngIf"], [1, "register-link"], [3, "click"], [1, "legal-footer"], ["href", "https://api.padelmanager.cl/prd/privacy.html", "target", "_blank"], [1, "dot"], ["href", "https://api.padelmanager.cl/prd/terms.html", "target", "_blank"], [1, "recover-modal", 3, "didDismiss", "isOpen"], ["name", "crescent"], ["expand", "block", "fill", "solid", 1, "apple-btn", 3, "click", "disabled"], ["name", "logo-apple", "slot", "start"], [1, "error-msg-container"], ["name", "alert-circle-outline"], [1, "recover-container"], [1, "logo-container", "small"], [1, "recover-title"], [1, "recover-desc"], ["type", "email", "placeholder", "nombre@ejemplo.com", "mode", "md", 3, "ngModelChange", "ngModel"], ["expand", "block", 1, "recover-btn", 3, "click", "disabled"], [1, "back-login", 3, "click"]], template: function LoginPage_Template(rf, ctx) {
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
    \u0275\u0275text(12, "Tu academia, tu ritmo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 9);
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12);
    \u0275\u0275element(17, "ion-icon", 13);
    \u0275\u0275elementStart(18, "ion-input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.usuario, $event) || (ctx.usuario = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275element(20, "ion-icon", 15);
    \u0275\u0275elementStart(21, "ion-input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 17)(23, "ion-checkbox", 18);
    \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_ion_checkbox_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.recordar, $event) || (ctx.recordar = $event);
      return $event;
    });
    \u0275\u0275text(24, "Recordar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 19);
    \u0275\u0275listener("click", function LoginPage_Template_span_click_25_listener() {
      return ctx.recoverPassword();
    });
    \u0275\u0275text(26, "\xBFOlvidaste tu contrase\xF1a?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "ion-button", 20);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_27_listener() {
      return ctx.login();
    });
    \u0275\u0275template(28, LoginPage_ion_spinner_28_Template, 1, 0, "ion-spinner", 21)(29, LoginPage_span_29_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 23)(31, "span");
    \u0275\u0275text(32, "o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 24)(34, "ion-button", 25);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_34_listener() {
      return ctx.loginWithGoogle();
    });
    \u0275\u0275element(35, "ion-icon", 26);
    \u0275\u0275text(36, " Google ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, LoginPage_ion_button_37_Template, 3, 1, "ion-button", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 28)(39, "ion-button", 29);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_39_listener() {
      return ctx.loginDemo();
    });
    \u0275\u0275text(40, " \u26A1 Acceso de Prueba / Modo Demo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, LoginPage_div_41_Template, 4, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 31);
    \u0275\u0275text(43, " \xBFNo tienes cuenta? ");
    \u0275\u0275elementStart(44, "span", 32);
    \u0275\u0275listener("click", function LoginPage_Template_span_click_44_listener() {
      return ctx.goToRegister();
    });
    \u0275\u0275text(45, "Reg\xEDstrate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 33)(47, "a", 34);
    \u0275\u0275text(48, "Pol\xEDtica de Privacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 35);
    \u0275\u0275text(50, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "a", 36);
    \u0275\u0275text(52, "T\xE9rminos y Condiciones");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "ion-modal", 37);
    \u0275\u0275listener("didDismiss", function LoginPage_Template_ion_modal_didDismiss_53_listener() {
      return ctx.closeRecoverModal();
    });
    \u0275\u0275template(54, LoginPage_ng_template_54_Template, 16, 4, "ng-template");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx.usuario);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.recordar);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.platform.is("android"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance(12);
    \u0275\u0275property("isOpen", ctx.isRecoverModalOpen);
  }
}, dependencies: [IonicModule, IonButton, IonCheckbox, IonContent, IonIcon, IonInput, IonSpinner, IonModal, BooleanValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgIf, FormsModule, NgControlStatus, NgModel], styles: ['\n\n.login-content[_ngcontent-%COMP%] {\n  --background: #0a0a0a;\n}\n.fixed-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -25vh;\n  left: -25vw;\n  width: 150vw;\n  height: 150vh;\n  z-index: 0;\n  background:\n    linear-gradient(\n      160deg,\n      rgba(0, 0, 0, 0.85) 0%,\n      rgba(0, 0, 0, 0.5) 50%,\n      rgba(0, 0, 0, 0.75) 100%),\n    url(/assets/fondo-padel.png) center/cover no-repeat;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 20px;\n  box-sizing: border-box;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 24px;\n  padding: 40px 24px 24px;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08);\n  text-align: center;\n  animation: _ngcontent-%COMP%_cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  will-change: transform, opacity;\n}\n.logo-container[_ngcontent-%COMP%] {\n  margin-top: -80px;\n  margin-bottom: 12px;\n  display: flex;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_logoPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;\n  opacity: 0;\n  transform: scale(0.8);\n}\n.logo-ring[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 4px rgba(204, 255, 0, 0.15);\n  overflow: hidden;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  color: #1a1a1a;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.brand-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #7cb342;\n  font-weight: 800;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #999;\n  margin: 6px 0 0;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #e0e0e0,\n      transparent);\n  margin: 16px 0;\n}\n.form-section[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.input-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f5f5f7;\n  border-radius: 16px;\n  padding: 0 16px;\n  height: 48px;\n  border: 2px solid transparent;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.input-field[_ngcontent-%COMP%]:focus-within {\n  border-color: #7cb342;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(124, 179, 66, 0.1);\n}\n.input-field[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n  font-size: 20px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  transition: color 0.3s ease;\n}\n.input-field[_ngcontent-%COMP%]:focus-within   ion-icon[_ngcontent-%COMP%] {\n  color: #7cb342;\n}\n.input-field[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  font-weight: 600;\n  font-size: 15px;\n  caret-color: #7cb342;\n}\n.options-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.options-row[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --size: 18px;\n  --border-radius: 6px;\n  --checkbox-background-checked: #7cb342;\n  --border-color-checked: #7cb342;\n  font-size: 13px;\n  color: #999;\n  font-weight: 500;\n}\n.options-row[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]::part(label) {\n  margin-inline-start: 8px;\n}\n.options-row[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #7cb342;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.options-row[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:active {\n  opacity: 0.7;\n}\n.login-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  --background: #1a1a1a;\n  --background-activated: #333;\n  --border-radius: 16px;\n  --color: #fff;\n  font-weight: 800;\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s ease;\n  margin: 0;\n}\n.login-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.error-msg-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 59, 48, 0.1);\n  color: #ff3b30;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 16px;\n  font-size: 13px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_cardSlideUp 0.3s ease-out;\n}\n.error-msg-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.social-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px 0;\n  color: #999;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  gap: 12px;\n}\n.social-divider[_ngcontent-%COMP%]::before, \n.social-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  height: 1px;\n  background: #e0e0e0;\n  flex: 1;\n}\n.social-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.social-row[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --border-color: #e0e0e0;\n  --color: #1a1a1a;\n  height: 48px;\n  font-weight: 700;\n  margin: 0;\n  font-size: 14px;\n}\n.social-row[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #4285f4;\n  font-size: 18px;\n}\n.social-row[_ngcontent-%COMP%]   .apple-btn[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --background: #000;\n  --color: #fff;\n  height: 48px;\n  font-weight: 700;\n  margin: 0;\n  font-size: 14px;\n}\n.social-row[_ngcontent-%COMP%]   .apple-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 12px;\n  font-size: 14px;\n  color: #666;\n}\n.register-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #111;\n  font-weight: 800;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.legal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  opacity: 0.6;\n  font-size: 11px;\n  font-weight: 600;\n}\n.legal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #666;\n  text-decoration: none;\n}\n.legal-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_cardSlideUp {\n  0% {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_logoPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.recover-modal[_ngcontent-%COMP%] {\n  --height: auto;\n  --max-height: 500px;\n  --border-radius: 32px;\n  --background: #ffffff;\n  --box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);\n}\n.recover-modal[_ngcontent-%COMP%]::part(content) {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n.recover-modal.custom-bottom-sheet[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%] {\n  padding: 40px 28px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #ffffff;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .logo-container.small[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n  animation: none;\n  opacity: 1;\n  transform: scale(0.7);\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .logo-container.small[_ngcontent-%COMP%]   .logo-ring[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .recover-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a1a;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .recover-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888;\n  margin: 8px 0 24px;\n  text-align: center;\n  line-height: 1.4;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f5f5f7;\n  margin-bottom: 20px;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .recover-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  --background: #1a1a1a;\n  --background-activated: #333;\n  --color: #fff;\n  --border-radius: 16px;\n  font-weight: 800;\n  margin-top: 10px;\n  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .back-login[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: #888;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 10px;\n}\n.recover-modal[_ngcontent-%COMP%]   .recover-container[_ngcontent-%COMP%]   .back-login[_ngcontent-%COMP%]:hover {\n  color: #7cb342;\n}\n/*# sourceMappingURL=login.page.css.map */'] });
var LoginPage = _LoginPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: `<ion-content class="login-content">
  <div class="fixed-bg"></div>

  <div class="login-wrapper">
    <!-- Unified Login Card with integrated logo -->
    <div class="login-card">
      <!-- Logo integrado en la parte superior del card -->
      <div class="logo-container">
        <div class="logo-ring">
          <img src="assets/logo-circular.png" class="brand-logo" alt="PadelBlox" />
        </div>
      </div>

      <!-- Brand Name -->
      <h1 class="brand-name">Padel<span>Blox</span></h1>
      <p class="brand-tagline">Tu academia, tu ritmo</p>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Form -->
      <div class="form-section">
        <div class="input-group">
          <div class="input-field">
            <ion-icon name="mail-outline"></ion-icon>
            <ion-input type="email" placeholder="Correo electr\xF3nico" [(ngModel)]="usuario" mode="md"></ion-input>
          </div>

          <div class="input-field">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <ion-input type="password" placeholder="Contrase\xF1a" [(ngModel)]="password" mode="md"></ion-input>
          </div>
        </div>

        <div class="options-row">
          <ion-checkbox [(ngModel)]="recordar" justify="start" labelPlacement="end">Recordar</ion-checkbox>
          <span class="forgot-link" (click)="recoverPassword()">\xBFOlvidaste tu contrase\xF1a?</span>
        </div>

        <ion-button expand="block" class="login-btn" (click)="login()" [disabled]="isLoading">
          <ion-spinner name="crescent" *ngIf="isLoading"></ion-spinner>
          <span *ngIf="!isLoading">Entrar</span>
        </ion-button>

        <div class="social-divider">
          <span>o</span>
        </div>

        <div class="social-row">
          <ion-button expand="block" fill="outline" class="google-btn" (click)="loginWithGoogle()"
            [disabled]="isLoading">
            <ion-icon name="logo-google" slot="start"></ion-icon>
            Google
          </ion-button>
  
          <ion-button *ngIf="!platform.is('android')" expand="block" fill="solid" class="apple-btn" (click)="loginWithApple()"
            [disabled]="isLoading">
            <ion-icon name="logo-apple" slot="start"></ion-icon>
            Apple
          </ion-button>
        </div>

        <div style="margin-top: 12px; text-align: center;">
          <ion-button expand="block" fill="clear" color="secondary" (click)="loginDemo()" [disabled]="isLoading" style="--color: #0284c7; font-weight: 700; font-size: 0.9rem;">
            \u26A1 Acceso de Prueba / Modo Demo
          </ion-button>
        </div>

        <!-- Error Message Display -->
        <div *ngIf="error" class="error-msg-container">
          <ion-icon name="alert-circle-outline"></ion-icon>
          <span>{{ error }}</span>
        </div>
      </div>

      <!-- Footer -->
      <p class="register-link">
        \xBFNo tienes cuenta? <span (click)="goToRegister()">Reg\xEDstrate</span>
      </p>

      <!-- Legal Links for Google Play Compliance -->
      <div class="legal-footer">
        <a href="https://api.padelmanager.cl/prd/privacy.html" target="_blank">Pol\xEDtica de Privacidad</a>
        <span class="dot">\u2022</span>
        <a href="https://api.padelmanager.cl/prd/terms.html" target="_blank">T\xE9rminos y Condiciones</a>
      </div>
    </div>
  </div>

  <ion-modal [isOpen]="isRecoverModalOpen" (didDismiss)="closeRecoverModal()" class="recover-modal">
    <ng-template>
      <div class="recover-container">
        <div class="logo-container small">
          <div class="logo-ring">
            <img src="assets/logo-circular.png" class="brand-logo" alt="PadelBlox" />
          </div>
        </div>
        <h2 class="recover-title">Recuperar Contrase\xF1a</h2>
        <p class="recover-desc">Ingresa tu correo para recibir instrucciones</p>

        <div class="input-field">
          <ion-icon name="mail-outline"></ion-icon>
          <ion-input type="email" placeholder="nombre@ejemplo.com" [(ngModel)]="recoverEmail" mode="md"></ion-input>
        </div>

        <ion-button expand="block" class="recover-btn" (click)="sendRecoverEmail()" [disabled]="isRecovering">
          <ion-spinner name="crescent" *ngIf="isRecovering"></ion-spinner>
          <span *ngIf="!isRecovering">Enviar Instrucciones</span>
        </ion-button>

        <p class="back-login" (click)="closeRecoverModal()">Volver a Iniciar Sesi\xF3n</p>
      </div>
    </ng-template>
  </ion-modal>
</ion-content>`, styles: ['/* src/app/pages/login/login.page.scss */\n.login-content {\n  --background: #0a0a0a;\n}\n.fixed-bg {\n  position: fixed;\n  top: -25vh;\n  left: -25vw;\n  width: 150vw;\n  height: 150vh;\n  z-index: 0;\n  background:\n    linear-gradient(\n      160deg,\n      rgba(0, 0, 0, 0.85) 0%,\n      rgba(0, 0, 0, 0.5) 50%,\n      rgba(0, 0, 0, 0.75) 100%),\n    url(/assets/fondo-padel.png) center/cover no-repeat;\n}\n.login-wrapper {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 20px;\n  box-sizing: border-box;\n}\n.login-card {\n  width: 100%;\n  max-width: 360px;\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 24px;\n  padding: 40px 24px 24px;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08);\n  text-align: center;\n  animation: cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  will-change: transform, opacity;\n}\n.logo-container {\n  margin-top: -80px;\n  margin-bottom: 12px;\n  display: flex;\n  justify-content: center;\n  animation: logoPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;\n  opacity: 0;\n  transform: scale(0.8);\n}\n.logo-ring {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 4px rgba(204, 255, 0, 0.15);\n  overflow: hidden;\n}\n.brand-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.brand-name {\n  font-size: 24px;\n  font-weight: 900;\n  color: #1a1a1a;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.brand-name span {\n  color: #7cb342;\n  font-weight: 800;\n}\n.brand-tagline {\n  font-size: 13px;\n  color: #999;\n  margin: 6px 0 0;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.divider {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #e0e0e0,\n      transparent);\n  margin: 16px 0;\n}\n.form-section {\n  text-align: left;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.input-field {\n  display: flex;\n  align-items: center;\n  background: #f5f5f7;\n  border-radius: 16px;\n  padding: 0 16px;\n  height: 48px;\n  border: 2px solid transparent;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.input-field:focus-within {\n  border-color: #7cb342;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(124, 179, 66, 0.1);\n}\n.input-field ion-icon {\n  color: #b0b0b0;\n  font-size: 20px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  transition: color 0.3s ease;\n}\n.input-field:focus-within ion-icon {\n  color: #7cb342;\n}\n.input-field ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  font-weight: 600;\n  font-size: 15px;\n  caret-color: #7cb342;\n}\n.options-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.options-row ion-checkbox {\n  --size: 18px;\n  --border-radius: 6px;\n  --checkbox-background-checked: #7cb342;\n  --border-color-checked: #7cb342;\n  font-size: 13px;\n  color: #999;\n  font-weight: 500;\n}\n.options-row ion-checkbox::part(label) {\n  margin-inline-start: 8px;\n}\n.options-row .forgot-link {\n  font-size: 13px;\n  color: #7cb342;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.options-row .forgot-link:active {\n  opacity: 0.7;\n}\n.login-btn {\n  height: 50px;\n  --background: #1a1a1a;\n  --background-activated: #333;\n  --border-radius: 16px;\n  --color: #fff;\n  font-weight: 800;\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s ease;\n  margin: 0;\n}\n.login-btn:active {\n  transform: scale(0.97);\n}\n.error-msg-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 59, 48, 0.1);\n  color: #ff3b30;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 16px;\n  font-size: 13px;\n  font-weight: 600;\n  animation: cardSlideUp 0.3s ease-out;\n}\n.error-msg-container ion-icon {\n  font-size: 18px;\n}\n.social-divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px 0;\n  color: #999;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  gap: 12px;\n}\n.social-divider::before,\n.social-divider::after {\n  content: "";\n  height: 1px;\n  background: #e0e0e0;\n  flex: 1;\n}\n.social-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.social-row .google-btn {\n  --border-radius: 12px;\n  --border-color: #e0e0e0;\n  --color: #1a1a1a;\n  height: 48px;\n  font-weight: 700;\n  margin: 0;\n  font-size: 14px;\n}\n.social-row .google-btn ion-icon {\n  color: #4285f4;\n  font-size: 18px;\n}\n.social-row .apple-btn {\n  --border-radius: 12px;\n  --background: #000;\n  --color: #fff;\n  height: 48px;\n  font-weight: 700;\n  margin: 0;\n  font-size: 14px;\n}\n.social-row .apple-btn ion-icon {\n  color: #fff;\n  font-size: 18px;\n}\n.register-link {\n  text-align: center;\n  margin-top: 12px;\n  font-size: 14px;\n  color: #666;\n}\n.register-link span {\n  color: #111;\n  font-weight: 800;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.legal-footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  opacity: 0.6;\n  font-size: 11px;\n  font-weight: 600;\n}\n.legal-footer a {\n  color: #666;\n  text-decoration: none;\n}\n.legal-footer a:hover {\n  text-decoration: underline;\n}\n@keyframes cardSlideUp {\n  0% {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes logoPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.recover-modal {\n  --height: auto;\n  --max-height: 500px;\n  --border-radius: 32px;\n  --background: #ffffff;\n  --box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);\n}\n.recover-modal::part(content) {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n.recover-modal.custom-bottom-sheet {\n  --background: #ffffff;\n}\n.recover-modal .recover-container {\n  padding: 40px 28px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #ffffff;\n}\n.recover-modal .recover-container .logo-container.small {\n  margin-top: 0;\n  margin-bottom: 10px;\n  animation: none;\n  opacity: 1;\n  transform: scale(0.7);\n}\n.recover-modal .recover-container .logo-container.small .logo-ring {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.recover-modal .recover-container .recover-title {\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a1a;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.recover-modal .recover-container .recover-desc {\n  font-size: 14px;\n  color: #888;\n  margin: 8px 0 24px;\n  text-align: center;\n  line-height: 1.4;\n}\n.recover-modal .recover-container .input-field {\n  width: 100%;\n  background: #f5f5f7;\n  margin-bottom: 20px;\n}\n.recover-modal .recover-container .recover-btn {\n  width: 100%;\n  height: 56px;\n  --background: #1a1a1a;\n  --background-activated: #333;\n  --color: #fff;\n  --border-radius: 16px;\n  font-weight: 800;\n  margin-top: 10px;\n  --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.recover-modal .recover-container .back-login {\n  margin-top: 24px;\n  color: #888;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 10px;\n}\n.recover-modal .recover-container .back-login:hover {\n  color: #7cb342;\n}\n/*# sourceMappingURL=login.page.css.map */\n'] }]
  }], () => [{ type: MysqlService }, { type: Router }, { type: AlertController }, { type: ToastController }, { type: Platform }, { type: LoadingController }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/login/login.page.ts", lineNumber: 23 });
})();
export {
  LoginPage
};
//# sourceMappingURL=login.page-X3UT3OW5.js.map

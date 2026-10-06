import {
  es_default
} from "./chunk-IJINKETP.js";
import {
  addDoc,
  aggregateFieldEqual,
  aggregateQuerySnapshotEqual,
  and,
  applyActionCode,
  beforeAuthStateChanged,
  checkActionCode,
  clearIndexedDbPersistence,
  collection,
  collectionGroup,
  confirmPasswordReset,
  connectAuthEmulator,
  connectFirestoreEmulator,
  createUserWithEmailAndPassword,
  deleteAllPersistentCacheIndexes,
  deleteDoc,
  deleteField,
  deleteUser,
  disableNetwork,
  disablePersistentCacheIndexAutoCreation,
  doc,
  documentId,
  enableIndexedDbPersistence,
  enableMultiTabIndexedDbPersistence,
  enableNetwork,
  enablePersistentCacheIndexAutoCreation,
  endAt,
  endBefore,
  fetchSignInMethodsForEmail,
  getAdditionalUserInfo,
  getAggregateFromServer,
  getAuth,
  getCountFromServer,
  getDoc,
  getDocFromCache,
  getDocFromServer,
  getDocs,
  getDocsFromCache,
  getDocsFromServer,
  getFirestore,
  getIdToken,
  getIdTokenResult,
  getMultiFactorResolver,
  getPersistentCacheIndexManager,
  getRedirectResult,
  increment,
  initializeAuth,
  initializeFirestore,
  initializeRecaptchaConfig,
  isSignInWithEmailLink,
  limit,
  limitToLast,
  linkWithCredential,
  linkWithPhoneNumber,
  linkWithPopup,
  linkWithRedirect,
  loadBundle,
  namedQuery,
  onAuthStateChanged,
  onIdTokenChanged,
  onSnapshot,
  onSnapshotsInSync,
  or,
  orderBy,
  parseActionCodeURL,
  query,
  queryEqual,
  reauthenticateWithCredential,
  reauthenticateWithPhoneNumber,
  reauthenticateWithPopup,
  reauthenticateWithRedirect,
  refEqual,
  reload,
  revokeAccessToken,
  runTransaction,
  sendEmailVerification,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  setDoc,
  setIndexConfiguration,
  setLogLevel as setLogLevel2,
  setPersistence,
  signInAnonymously,
  signInWithCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  snapshotEqual,
  startAfter,
  startAt,
  sum,
  terminate,
  unlink,
  updateCurrentUser,
  updateDoc,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateProfile,
  useDeviceLanguage,
  validatePassword,
  vector,
  verifyBeforeUpdateEmail,
  verifyPasswordResetCode,
  waitForPendingWrites,
  where,
  writeBatch
} from "./chunk-HSNO643M.js";
import {
  GoogleAuth
} from "./chunk-N64SOG6K.js";
import {
  IonApp,
  IonRouterOutlet,
  provideIonicAngular
} from "./chunk-5YKSH3EK.js";
import {
  NotificationService
} from "./chunk-OPJ5BMLN.js";
import {
  Component as Component2,
  Deferred,
  ErrorFactory,
  Logger,
  _getProvider,
  _registerComponent,
  base64,
  deleteApp,
  firebaseConfig,
  getApp,
  getApps,
  getGlobal,
  getModularInstance,
  initializeApp,
  initializeServerApp,
  isIndexedDBAvailable,
  onLog,
  registerVersion,
  setLogLevel
} from "./chunk-DBDG6EJI.js";
import "./chunk-LFXGPXMG.js";
import {
  addIcons,
  alertCircleOutline,
  calendarOutline,
  checkmarkOutline,
  chevronBackOutline,
  chevronForwardOutline,
  closeOutline,
  person,
  personOutline,
  saveOutline,
  timeOutline
} from "./chunk-KFN47MEP.js";
import "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  EnvironmentInjector,
  ErrorHandler,
  HttpClient,
  HttpResponse,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  IonicRouteStrategy,
  LOCALE_ID,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  PLATFORM_ID,
  PendingTasks,
  Platform,
  PreloadAllModules,
  RouteReuseStrategy,
  Router,
  VERSION,
  Version,
  assertInInjectionContext,
  asyncScheduler,
  bootstrapApplication,
  catchError,
  concatMap,
  distinct,
  distinctUntilChanged,
  filter,
  from,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  observeOn,
  of,
  pairwise,
  pipe,
  provideHttpClient,
  provideRouter,
  queueScheduler,
  registerLocaleData,
  runInInjectionContext,
  scan,
  setClassMetadata,
  startWith,
  subscribeOn,
  switchMap,
  tap,
  throwError,
  timer,
  withInterceptors,
  withPreloading,
  ɵsetClassDebugInfo,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-VZCO22FC.js";
import "./chunk-VS5QNFP6.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5HNVOF53.js";
import "./chunk-LSHAV5YA.js";
import "./chunk-KDIH5JCH.js";
import "./chunk-SYGHPWCO.js";
import "./chunk-DMH43HQY.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-2WF3DFKV.js";
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

// src/app/app.component.ts
function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5)(5, "defs")(6, "radialGradient", 6);
    \u0275\u0275element(7, "stop", 7)(8, "stop", 8)(9, "stop", 9)(10, "stop", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "filter", 11);
    \u0275\u0275element(12, "feGaussianBlur", 12)(13, "feComposite", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "circle", 14)(15, "path", 15)(16, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(17, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18)(19, "h1", 19);
    \u0275\u0275text(20, "PadelBlox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 20);
    \u0275\u0275text(22, "Gesti\xF3n y evoluci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21)(24, "div", 22);
    \u0275\u0275element(25, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 24);
    \u0275\u0275text(27, "Cargando experiencia");
    \u0275\u0275elementStart(28, "span", 25);
    \u0275\u0275text(29, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 26);
    \u0275\u0275text(31, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 27);
    \u0275\u0275text(33, ".");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("closing", ctx_r0.isClosing);
  }
}
var _AppComponent = class _AppComponent {
  constructor(platform, notificationService, http, router) {
    this.platform = platform;
    this.notificationService = notificationService;
    this.http = http;
    this.router = router;
    this.showSplash = true;
    this.isClosing = false;
    this.initializeApp();
    this.checkVersion();
    this.checkSessionOnStartup();
  }
  checkSessionOnStartup() {
    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("userRole");
    if (userId && userId !== "null" && userId !== "undefined") {
      const targetRoute = userRole === "entrenador" ? "/entrenador-home" : "/jugador-home";
      this.router.navigate([targetRoute], { replaceUrl: true });
    }
  }
  ngOnInit() {
    this.startSplashTimer();
  }
  startSplashTimer() {
    setTimeout(() => {
      this.isClosing = true;
      setTimeout(() => {
        this.showSplash = false;
      }, 500);
    }, 2200);
  }
  onLogoError(event) {
    if (event && event.target) {
      event.target.style.display = "none";
    }
  }
  initializeApp() {
    return __async(this, null, function* () {
      if (this.platform.is("capacitor") || this.platform.is("ios") || this.platform.is("android")) {
        try {
          yield GoogleAuth.initialize({
            clientId: "786145270372-e637i46g6uu1kekcr1ioqdka901acud7.apps.googleusercontent.com",
            scopes: ["profile", "email"]
          });
        } catch (e) {
          console.warn("Google Auth init skipped or failed:", e);
        }
      }
      this.notificationService.initializeMessaging();
    });
  }
  checkVersion() {
    const timestamp = (/* @__PURE__ */ new Date()).getTime();
    this.http.get(`assets/version.json?t=${timestamp}`).subscribe({
      next: (data) => {
        const serverVersion = data.version;
        const currentVersion = localStorage.getItem("app_version");
        if (currentVersion && currentVersion !== serverVersion) {
          console.log(`Nueva versi\xF3n detectada: ${serverVersion}. Limpiando cach\xE9...`);
          localStorage.setItem("app_version", serverVersion);
          if (data.forceReload) {
            window.location.reload();
          }
        } else if (!currentVersion) {
          localStorage.setItem("app_version", serverVersion);
        }
      },
      error: (err) => console.log("Error al verificar versi\xF3n", err)
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [["class", "splash-container", 3, "closing", 4, "ngIf"], [1, "splash-container"], [1, "splash-ambient-glow"], [1, "splash-content"], [1, "ball-wrapper"], ["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg", 1, "spinning-ball"], ["id", "ballGradient", "cx", "35%", "cy", "35%", "r", "65%"], ["offset", "0%", "stop-color", "#FACC15"], ["offset", "45%", "stop-color", "#CCFF00"], ["offset", "85%", "stop-color", "#84CC16"], ["offset", "100%", "stop-color", "#4D7C0F"], ["id", "ballGlow", "x", "-20%", "y", "-20%", "width", "140%", "height", "140%"], ["stdDeviation", "5", "result", "blur"], ["in", "SourceGraphic", "in2", "blur", "operator", "over"], ["cx", "50", "cy", "50", "r", "42", "fill", "url(#ballGradient)", "filter", "url(#ballGlow)"], ["d", "M 22 15 A 38 38 0 0 1 85 78", "fill", "none", "stroke", "#FFFFFF", "stroke-width", "4.5", "stroke-linecap", "round", "opacity", "0.95"], ["d", "M 15 78 A 38 38 0 0 1 78 15", "fill", "none", "stroke", "#FFFFFF", "stroke-width", "4.5", "stroke-linecap", "round", "opacity", "0.95"], [1, "ball-shadow"], [1, "brand-text"], [1, "brand-title"], [1, "brand-subtitle"], [1, "loader-box"], [1, "progress-bar-track"], [1, "progress-bar-fill"], [1, "loading-status"], [1, "dot-1"], [1, "dot-2"], [1, "dot-3"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_div_0_Template, 34, 2, "div", 0);
    \u0275\u0275elementStart(1, "ion-app");
    \u0275\u0275element(2, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.showSplash);
  }
}, dependencies: [CommonModule, NgIf, IonApp, IonRouterOutlet], styles: ["\n\n.splash-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: #080c14;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  overflow: hidden;\n  transition:\n    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),\n    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),\n    filter 0.5s ease;\n}\n.splash-container.closing[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(1.04);\n  filter: blur(6px);\n  pointer-events: none;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-ambient-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 320px;\n  height: 320px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(204, 255, 0, 0.18) 0%,\n      rgba(16, 185, 129, 0.08) 50%,\n      transparent 70%);\n  border-radius: 50%;\n  filter: blur(40px);\n  animation: _ngcontent-%COMP%_pulseGlow 3s infinite ease-in-out;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 22px;\n  padding: 20px;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .ball-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 86px;\n  height: 86px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_floatBounce 2.2s infinite ease-in-out;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .ball-wrapper[_ngcontent-%COMP%]   .spinning-ball[_ngcontent-%COMP%] {\n  width: 86px;\n  height: 86px;\n  filter: drop-shadow(0 0 18px rgba(204, 255, 0, 0.65));\n  animation: _ngcontent-%COMP%_spin3D 1.8s infinite linear;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .ball-wrapper[_ngcontent-%COMP%]   .ball-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  width: 50px;\n  height: 10px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  filter: blur(5px);\n  animation: _ngcontent-%COMP%_shadowPulse 2.2s infinite ease-in-out;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  margin-top: 6px;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 34px;\n  font-weight: 900;\n  letter-spacing: 1.5px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #e2e8f0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: #CCFF00;\n  text-transform: none;\n  text-shadow: 0 0 12px rgba(204, 255, 0, 0.4);\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   .progress-bar-track[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   .progress-bar-track[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 0%;\n  background:\n    linear-gradient(\n      90deg,\n      #CCFF00 0%,\n      #10b981 100%);\n  box-shadow: 0 0 10px #CCFF00;\n  border-radius: 10px;\n  animation: _ngcontent-%COMP%_fillProgress 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   .loading-status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   .loading-status[_ngcontent-%COMP%]   .dot-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dotFade 1.4s infinite 0s;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   .loading-status[_ngcontent-%COMP%]   .dot-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dotFade 1.4s infinite 0.2s;\n}\n.splash-container[_ngcontent-%COMP%]   .splash-content[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   .loading-status[_ngcontent-%COMP%]   .dot-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dotFade 1.4s infinite 0.4s;\n}\n@keyframes _ngcontent-%COMP%_spin3D {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_shadowPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(0.7);\n    opacity: 0.2;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulseGlow {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_logoAppear {\n  0% {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fillProgress {\n  0% {\n    width: 0%;\n  }\n  50% {\n    width: 65%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_dotFade {\n  0%, 100% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [CommonModule, IonApp, IonRouterOutlet], template: '<div class="splash-container" [class.closing]="isClosing" *ngIf="showSplash">\n  <div class="splash-ambient-glow"></div>\n  \n  <div class="splash-content">\n    \n    <!-- ANIMATED 3D ROTATING TENNIS / PADEL BALL -->\n    <div class="ball-wrapper">\n      <svg class="spinning-ball" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <defs>\n          <radialGradient id="ballGradient" cx="35%" cy="35%" r="65%">\n            <stop offset="0%" stop-color="#FACC15" />\n            <stop offset="45%" stop-color="#CCFF00" />\n            <stop offset="85%" stop-color="#84CC16" />\n            <stop offset="100%" stop-color="#4D7C0F" />\n          </radialGradient>\n          <filter id="ballGlow" x="-20%" y="-20%" width="140%" height="140%">\n            <feGaussianBlur stdDeviation="5" result="blur" />\n            <feComposite in="SourceGraphic" in2="blur" operator="over" />\n          </filter>\n        </defs>\n        \n        <!-- Ball Body -->\n        <circle cx="50" cy="50" r="42" fill="url(#ballGradient)" filter="url(#ballGlow)" />\n        \n        <!-- White Padel/Tennis Curves -->\n        <path d="M 22 15 A 38 38 0 0 1 85 78" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" opacity="0.95" />\n        <path d="M 15 78 A 38 38 0 0 1 78 15" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" opacity="0.95" />\n      </svg>\n      <div class="ball-shadow"></div>\n    </div>\n\n    <!-- BRAND TYPOGRAPHY -->\n    <div class="brand-text">\n      <h1 class="brand-title">PadelBlox</h1>\n      <span class="brand-subtitle">Gesti\xF3n y evoluci\xF3n</span>\n    </div>\n\n    <!-- ELEGANT PROGRESS LINE & STATUS -->\n    <div class="loader-box">\n      <div class="progress-bar-track">\n        <div class="progress-bar-fill"></div>\n      </div>\n      <p class="loading-status">Cargando experiencia<span class="dot-1">.</span><span class="dot-2">.</span><span class="dot-3">.</span></p>\n    </div>\n\n  </div>\n</div>\n\n<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>', styles: ["/* src/app/app.component.scss */\n.splash-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: #080c14;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  overflow: hidden;\n  transition:\n    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),\n    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),\n    filter 0.5s ease;\n}\n.splash-container.closing {\n  opacity: 0;\n  transform: scale(1.04);\n  filter: blur(6px);\n  pointer-events: none;\n}\n.splash-container .splash-ambient-glow {\n  position: absolute;\n  width: 320px;\n  height: 320px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(204, 255, 0, 0.18) 0%,\n      rgba(16, 185, 129, 0.08) 50%,\n      transparent 70%);\n  border-radius: 50%;\n  filter: blur(40px);\n  animation: pulseGlow 3s infinite ease-in-out;\n}\n.splash-container .splash-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 22px;\n  padding: 20px;\n}\n.splash-container .splash-content .ball-wrapper {\n  position: relative;\n  width: 86px;\n  height: 86px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: floatBounce 2.2s infinite ease-in-out;\n}\n.splash-container .splash-content .ball-wrapper .spinning-ball {\n  width: 86px;\n  height: 86px;\n  filter: drop-shadow(0 0 18px rgba(204, 255, 0, 0.65));\n  animation: spin3D 1.8s infinite linear;\n}\n.splash-container .splash-content .ball-wrapper .ball-shadow {\n  position: absolute;\n  bottom: -12px;\n  width: 50px;\n  height: 10px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  filter: blur(5px);\n  animation: shadowPulse 2.2s infinite ease-in-out;\n}\n.splash-container .splash-content .brand-text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  margin-top: 6px;\n}\n.splash-container .splash-content .brand-text .brand-title {\n  margin: 0;\n  font-size: 34px;\n  font-weight: 900;\n  letter-spacing: 1.5px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #e2e8f0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);\n}\n.splash-container .splash-content .brand-text .brand-subtitle {\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: #CCFF00;\n  text-transform: none;\n  text-shadow: 0 0 12px rgba(204, 255, 0, 0.4);\n}\n.splash-container .splash-content .loader-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.splash-container .splash-content .loader-box .progress-bar-track {\n  width: 160px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n}\n.splash-container .splash-content .loader-box .progress-bar-track .progress-bar-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 0%;\n  background:\n    linear-gradient(\n      90deg,\n      #CCFF00 0%,\n      #10b981 100%);\n  box-shadow: 0 0 10px #CCFF00;\n  border-radius: 10px;\n  animation: fillProgress 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.splash-container .splash-content .loader-box .loading-status {\n  font-size: 12px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.splash-container .splash-content .loader-box .loading-status .dot-1 {\n  animation: dotFade 1.4s infinite 0s;\n}\n.splash-container .splash-content .loader-box .loading-status .dot-2 {\n  animation: dotFade 1.4s infinite 0.2s;\n}\n.splash-container .splash-content .loader-box .loading-status .dot-3 {\n  animation: dotFade 1.4s infinite 0.4s;\n}\n@keyframes spin3D {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes floatBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes shadowPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(0.7);\n    opacity: 0.2;\n  }\n}\n@keyframes pulseGlow {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 1;\n  }\n}\n@keyframes logoAppear {\n  0% {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes fillProgress {\n  0% {\n    width: 0%;\n  }\n  50% {\n    width: 65%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes dotFade {\n  0%, 100% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], () => [{ type: Platform }, { type: NotificationService }, { type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 18 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  // redirige al login
  {
    path: "login",
    loadComponent: () => import("./login.page-X3UT3OW5.js").then((m) => m.LoginPage)
  },
  {
    path: "register",
    loadComponent: () => import("./register.page-JJBEX2MR.js").then((m) => m.RegisterPage)
  },
  {
    path: "jugador-home",
    loadComponent: () => import("./jugador-home.page-WGRBNMLS.js").then((m) => m.JugadorHomePage)
  },
  {
    path: "jugador-calendario",
    loadComponent: () => import("./jugador-calendario.page-2LCHJGP2.js").then((m) => m.JugadorCalendarioPage)
  },
  {
    path: "jugador-reservas",
    loadComponent: () => import("./jugador-reservas.page-XHB53D54.js").then((m) => m.JugadorReservasPage)
  },
  {
    path: "jugador-progreso",
    loadComponent: () => import("./jugador-progreso.page-LLJDO7K7.js").then((m) => m.JugadorProgresoPage)
  },
  {
    path: "entrenador-home",
    loadComponent: () => import("./entrenador-home.page-HLIVZI5S.js").then((m) => m.EntrenadorHomePage)
  },
  {
    path: "entrenador-packs",
    loadComponent: () => import("./entrenador-packs.page-INV3S35X.js").then((m) => m.EntrenadorPacksPage)
  },
  {
    path: "entrenador-entrenamientos",
    loadComponent: () => import("./entrenador-entrenamientos.page-ZYFTWU6G.js").then((m) => m.EntrenadorEntrenamientosPage)
  },
  {
    path: "alumnos",
    loadComponent: () => import("./alumnos.page-DR4LKPGY.js").then((m) => m.AlumnosPage)
  },
  {
    path: "alumno/:id",
    loadComponent: () => import("./alumno-detalle.page-ROJ2NQUU.js").then((m) => m.AlumnoDetallePage)
  },
  {
    path: "entrenador-agenda",
    loadComponent: () => import("./entrenador-agenda.page-UDJWEEWV.js").then((m) => m.EntrenadorAgendaPage)
  },
  {
    path: "evaluar/:id",
    loadComponent: () => import("./nueva-evaluacion.page-LLET2N3I.js").then((m) => m.NuevaEvaluacionPage)
  },
  {
    path: "pack-alumno",
    loadComponent: () => import("./pack-alumno.page-RZ7Q7OLK.js").then((m) => m.PackAlumnoPage)
  },
  {
    path: "alumno-mis-packs",
    loadComponent: () => import("./alumno-mis-packs.page-D2DKLSAZ.js").then((m) => m.AlumnoMisPacksPage)
  },
  {
    path: "disponibilidad-entrenador",
    loadComponent: () => import("./disponibilidad-entrenador.page-3ZNYOGOL.js").then((m) => m.DisponibilidadEntrenadorPage)
  },
  {
    path: "perfil",
    loadComponent: () => import("./perfil.page-3NCOS2PL.js").then((m) => m.PerfilPage)
  },
  {
    path: "tarjeta-digital",
    loadComponent: () => import("./tarjeta-digital.page-SMJC5DU3.js").then((m) => m.TarjetaDigitalPage)
  },
  {
    path: "mis-clubes-puntos",
    loadComponent: () => import("./mis-clubes-puntos.page-JTAF3WJJ.js").then((m) => m.MisClubesPuntosPage)
  },
  {
    path: "canje-club",
    loadComponent: () => import("./canje-club.page-2CXQ6GGF.js").then((m) => m.CanjeClubPage)
  },
  {
    path: "mis-habilidades",
    loadComponent: () => import("./mis-habilidades.page-JT6GDU5E.js").then((m) => m.MisHabilidadesPage)
  },
  {
    path: "mis-habilidades/:id",
    loadComponent: () => import("./mis-habilidades.page-JT6GDU5E.js").then((m) => m.MisHabilidadesPage)
  },
  {
    path: "mis-logros",
    loadComponent: () => import("./mis-logros.page-FLGPPPQI.js").then((m) => m.MisLogrosPage)
  },
  {
    path: "entrenador-agendar",
    loadComponent: () => import("./entrenador-agendar.page-PLVXYQOR.js").then((m) => m.EntrenadorAgendarPage)
  },
  {
    path: "entrenador-cupones",
    loadComponent: () => import("./entrenador-cupones.page-3OSGTNTN.js").then((m) => m.EntrenadorCuponesPage)
  },
  {
    path: "entrenador-mi-plan",
    loadComponent: () => import("./entrenador-mi-plan.page-C7KGJ5O2.js").then((m) => m.EntrenadorMiPlanPage)
  },
  {
    path: "clubes-reservar",
    loadComponent: () => import("./clubes-reservar.page-QOS3RIQR.js").then((m) => m.ClubesReservarPage)
  },
  {
    path: "jugador-partidos",
    loadComponent: () => import("./jugador-partidos.page-LRCNEUUZ.js").then((m) => m.JugadorPartidosPage)
  },
  {
    path: "jugador-campeonatos",
    loadComponent: () => import("./jugador-campeonatos.page-XJHT4TZ7.js").then((m) => m.JugadorCampeonatosPage)
  },
  {
    path: "partido-detalle/:id",
    loadComponent: () => import("./partido-detalle.page-GLVI3MTT.js").then((m) => m.PartidoDetallePage)
  },
  {
    path: "smartwatch-stats",
    loadComponent: () => import("./smartwatch-stats.page-QQJHBGOR.js").then((m) => m.SmartwatchStatsPage)
  }
];

// src/app/services/http-cache.service.ts
var _HttpCacheService = class _HttpCacheService {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.cacheableRules = {
      "get_clubes.php": 10 * 60 * 1e3,
      // 10 min
      "get_categorias.php": 10 * 60 * 1e3,
      // 10 min
      "get_tip_frontend.php": 30 * 60 * 1e3,
      // 30 min
      "get_perfil.php": 2 * 60 * 1e3,
      // 2 min
      "get_all_packs.php": 5 * 60 * 1e3,
      // 5 min
      "get_logros.php": 5 * 60 * 1e3
      // 5 min
    };
  }
  /**
   * Obtiene una respuesta de la caché si no ha expirado
   */
  get(url) {
    const entry = this.cache.get(url);
    if (!entry) {
      return null;
    }
    if (Date.now() > entry.expiry) {
      this.cache.delete(url);
      return null;
    }
    return entry.response;
  }
  /**
   * Almacena una respuesta en la caché si la URL es almacenable
   */
  put(url, response) {
    const ttl = this.getTtlForUrl(url);
    if (ttl > 0) {
      this.cache.set(url, {
        response,
        expiry: Date.now() + ttl
      });
    }
  }
  /**
   * Determina si una URL debe guardarse en caché y devuelve su TTL
   */
  isCacheable(url) {
    return this.getTtlForUrl(url) > 0;
  }
  getTtlForUrl(url) {
    for (const key of Object.keys(this.cacheableRules)) {
      if (url.includes(key)) {
        return this.cacheableRules[key];
      }
    }
    return 0;
  }
  /**
   * Invalida la caché completa o por patrón (útil tras mutaciones POST/PUT)
   */
  invalidate(pattern) {
    if (!pattern) {
      this.cache.clear();
      return;
    }
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
      }
    }
  }
};
_HttpCacheService.\u0275fac = function HttpCacheService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HttpCacheService)();
};
_HttpCacheService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HttpCacheService, factory: _HttpCacheService.\u0275fac, providedIn: "root" });
var HttpCacheService = _HttpCacheService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpCacheService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/interceptors/auth.interceptor.ts
var authAndSessionInterceptor = (req, next) => {
  const cacheService = inject(HttpCacheService);
  const token = localStorage.getItem("token");
  const isAbsolute = req.url.startsWith("http://") || req.url.startsWith("https://");
  const isInternal = !isAbsolute || req.url.includes("padelmanager.cl") || req.url.includes("padelblox.cl") || req.url.includes("localhost") || req.url.startsWith("/");
  let authReq = req;
  if (isInternal && token && token !== "null" && token !== "undefined") {
    authReq = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${token}`,
        "X-Authorization": `Bearer ${token}`
      }
    });
  }
  if (req.method === "GET" && cacheService.isCacheable(req.urlWithParams)) {
    const cachedResponse = cacheService.get(req.urlWithParams);
    if (cachedResponse) {
      return of(cachedResponse.clone());
    }
  }
  if (["POST", "PUT", "DELETE"].includes(req.method)) {
    cacheService.invalidate();
  }
  return next(authReq).pipe(tap((event) => {
    if (event instanceof HttpResponse) {
      if (req.method === "GET" && cacheService.isCacheable(req.urlWithParams)) {
        cacheService.put(req.urlWithParams, event.clone());
      }
    }
  }), catchError((error) => {
    return throwError(() => error);
  }));
};

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function pendingUntilEvent(injector) {
  if (injector === void 0) {
    ngDevMode && assertInInjectionContext(pendingUntilEvent);
    injector = inject(Injector);
  }
  const taskService = injector.get(PendingTasks);
  return (sourceObservable) => {
    return new Observable((originalSubscriber) => {
      const removeTask = taskService.add();
      let cleanedUp = false;
      function cleanupTask() {
        if (cleanedUp) {
          return;
        }
        removeTask();
        cleanedUp = true;
      }
      const innerSubscription = sourceObservable.subscribe({
        next: (v) => {
          originalSubscriber.next(v);
          cleanupTask();
        },
        complete: () => {
          originalSubscriber.complete();
          cleanupTask();
        },
        error: (e) => {
          originalSubscriber.error(e);
          cleanupTask();
        }
      });
      innerSubscription.add(() => {
        originalSubscriber.unsubscribe();
        cleanupTask();
      });
      return innerSubscription;
    });
  };
}

// node_modules/@angular/fire/fesm2022/angular-fire.mjs
var VERSION2 = new Version("ANGULARFIRE2_VERSION");
function \u0275getDefaultInstanceOf(identifier, provided, defaultApp) {
  if (provided) {
    if (provided.length === 1) {
      return provided[0];
    }
    const providedUsingDefaultApp = provided.filter((it) => it.app === defaultApp);
    if (providedUsingDefaultApp.length === 1) {
      return providedUsingDefaultApp[0];
    }
  }
  const defaultAppWithContainer = defaultApp;
  const provider = defaultAppWithContainer.container.getProvider(identifier);
  return provider.getImmediate({
    optional: true
  });
}
var \u0275getAllInstancesOf = (identifier, app) => {
  const apps = app ? [app] : getApps();
  const instances = [];
  apps.forEach((app2) => {
    const provider = app2.container.getProvider(identifier);
    provider.instances.forEach((instance) => {
      if (!instances.includes(instance)) {
        instances.push(instance);
      }
    });
  });
  return instances;
};
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["SILENT"] = 0] = "SILENT";
  LogLevel2[LogLevel2["WARN"] = 1] = "WARN";
  LogLevel2[LogLevel2["VERBOSE"] = 2] = "VERBOSE";
})(LogLevel || (LogLevel = {}));
var currentLogLevel = isDevMode() && typeof Zone !== "undefined" ? LogLevel.WARN : LogLevel.SILENT;
var \u0275ZoneScheduler = class {
  zone;
  delegate;
  constructor(zone, delegate = queueScheduler) {
    this.zone = zone;
    this.delegate = delegate;
  }
  now() {
    return this.delegate.now();
  }
  schedule(work, delay, state) {
    const targetZone = this.zone;
    const workInZone = function(state2) {
      if (targetZone) {
        targetZone.runGuarded(() => {
          work.apply(this, [state2]);
        });
      } else {
        work.apply(this, [state2]);
      }
    };
    return this.delegate.schedule(workInZone, delay, state);
  }
};
var \u0275AngularFireSchedulers = class _\u0275AngularFireSchedulers {
  outsideAngular;
  insideAngular;
  constructor() {
    const ngZone = inject(NgZone);
    this.outsideAngular = ngZone.runOutsideAngular(() => new \u0275ZoneScheduler(typeof Zone === "undefined" ? void 0 : Zone.current));
    this.insideAngular = ngZone.run(() => new \u0275ZoneScheduler(typeof Zone === "undefined" ? void 0 : Zone.current, asyncScheduler));
  }
  static \u0275fac = function \u0275AngularFireSchedulers_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275AngularFireSchedulers)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _\u0275AngularFireSchedulers,
    factory: _\u0275AngularFireSchedulers.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275AngularFireSchedulers, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var alreadyWarned = false;
function warnOutsideInjectionContext(original, logLevel) {
  if (!alreadyWarned && (currentLogLevel > LogLevel.SILENT || isDevMode())) {
    alreadyWarned = true;
    console.warn("Calling Firebase APIs outside of an Injection context may destabilize your application leading to subtle change-detection and hydration bugs. Find more at https://github.com/angular/angularfire/blob/main/docs/zones.md");
  }
  if (currentLogLevel >= logLevel) {
    console.warn(`Firebase API called outside injection context: ${original.name}`);
  }
}
function runOutsideAngular(fn) {
  const ngZone = inject(NgZone, {
    optional: true
  });
  if (!ngZone) {
    return fn();
  }
  return ngZone.runOutsideAngular(() => fn());
}
function run(fn) {
  const ngZone = inject(NgZone, {
    optional: true
  });
  if (!ngZone) {
    return fn();
  }
  return ngZone.run(() => fn());
}
var zoneWrapFn = (it, taskDone, injector) => {
  return (...args) => {
    if (taskDone) {
      setTimeout(taskDone, 0);
    }
    return runInInjectionContext(injector, () => run(() => it.apply(void 0, args)));
  };
};
var \u0275zoneWrap = (it, blockUntilFirst, logLevel) => {
  logLevel ||= blockUntilFirst ? LogLevel.WARN : LogLevel.VERBOSE;
  return function() {
    let taskDone;
    const _arguments = arguments;
    let schedulers;
    let pendingTasks;
    let injector;
    try {
      schedulers = inject(\u0275AngularFireSchedulers);
      pendingTasks = inject(PendingTasks);
      injector = inject(EnvironmentInjector);
    } catch (e) {
      warnOutsideInjectionContext(it, logLevel);
      return it.apply(this, _arguments);
    }
    for (let i = 0; i < arguments.length; i++) {
      if (typeof _arguments[i] === "function") {
        if (blockUntilFirst) {
          taskDone ||= run(() => pendingTasks.add());
        }
        _arguments[i] = zoneWrapFn(_arguments[i], taskDone, injector);
      }
    }
    const ret = runOutsideAngular(() => it.apply(this, _arguments));
    if (!blockUntilFirst) {
      if (ret instanceof Observable) {
        return ret.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular));
      } else {
        return run(() => ret);
      }
    }
    if (ret instanceof Observable) {
      return ret.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular), pendingUntilEvent(injector));
    } else if (ret instanceof Promise) {
      return run(() => {
        const removeTask = pendingTasks.add();
        return new Promise((resolve, reject) => {
          ret.then((it2) => runInInjectionContext(injector, () => run(() => resolve(it2))), (reason) => runInInjectionContext(injector, () => run(() => reject(reason)))).finally(removeTask);
        });
      });
    } else if (typeof ret === "function" && taskDone) {
      return function() {
        setTimeout(taskDone, 0);
        return ret.apply(this, arguments);
      };
    } else {
      return run(() => ret);
    }
  };
};

// node_modules/@angular/fire/fesm2022/angular-fire-app.mjs
var FirebaseApp = class {
  constructor(app) {
    return app;
  }
};
var FirebaseApps = class {
  constructor() {
    return getApps();
  }
};
var firebaseApp$ = timer(0, 300).pipe(concatMap(() => from(getApps())), distinct());
function defaultFirebaseAppFactory(provided) {
  if (provided && provided.length === 1) {
    return provided[0];
  }
  return new FirebaseApp(getApp());
}
var PROVIDED_FIREBASE_APPS = new InjectionToken("angularfire2._apps");
var DEFAULT_FIREBASE_APP_PROVIDER = {
  provide: FirebaseApp,
  useFactory: defaultFirebaseAppFactory,
  deps: [[new Optional(), PROVIDED_FIREBASE_APPS]]
};
var FIREBASE_APPS_PROVIDER = {
  provide: FirebaseApps,
  deps: [[new Optional(), PROVIDED_FIREBASE_APPS]]
};
function firebaseAppFactory(fn) {
  return (zone, injector) => {
    const platformId = injector.get(PLATFORM_ID);
    registerVersion("angularfire", VERSION2.full, "core");
    registerVersion("angularfire", VERSION2.full, "app");
    registerVersion("angular", VERSION.full, platformId.toString());
    const app = zone.runOutsideAngular(() => fn(injector));
    return new FirebaseApp(app);
  };
}
var FirebaseAppModule = class _FirebaseAppModule {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(platformId) {
    registerVersion("angularfire", VERSION2.full, "core");
    registerVersion("angularfire", VERSION2.full, "app");
    registerVersion("angular", VERSION.full, platformId.toString());
  }
  static \u0275fac = function FirebaseAppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FirebaseAppModule)(\u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FirebaseAppModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DEFAULT_FIREBASE_APP_PROVIDER, FIREBASE_APPS_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirebaseAppModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_FIREBASE_APP_PROVIDER, FIREBASE_APPS_PROVIDER]
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
function provideFirebaseApp(fn, ...deps) {
  return makeEnvironmentProviders([DEFAULT_FIREBASE_APP_PROVIDER, FIREBASE_APPS_PROVIDER, {
    provide: PROVIDED_FIREBASE_APPS,
    useFactory: firebaseAppFactory(fn),
    multi: true,
    deps: [NgZone, Injector, \u0275AngularFireSchedulers, ...deps]
  }]);
}
var deleteApp2 = \u0275zoneWrap(deleteApp, true);
var getApp2 = \u0275zoneWrap(getApp, true);
var getApps2 = \u0275zoneWrap(getApps, true);
var initializeApp2 = \u0275zoneWrap(initializeApp, true);
var initializeServerApp2 = \u0275zoneWrap(initializeServerApp, true);
var onLog2 = \u0275zoneWrap(onLog, true);
var registerVersion2 = \u0275zoneWrap(registerVersion, true);
var setLogLevel3 = \u0275zoneWrap(setLogLevel, true);

// node_modules/@firebase/app-check/dist/esm/index.esm2017.js
var APP_CHECK_STATES = /* @__PURE__ */ new Map();
var DEFAULT_STATE = {
  activated: false,
  tokenObservers: []
};
var DEBUG_STATE = {
  initialized: false,
  enabled: false
};
function getStateReference(app) {
  return APP_CHECK_STATES.get(app) || Object.assign({}, DEFAULT_STATE);
}
function setInitialState(app, state) {
  APP_CHECK_STATES.set(app, state);
  return APP_CHECK_STATES.get(app);
}
function getDebugState() {
  return DEBUG_STATE;
}
var BASE_ENDPOINT = "https://content-firebaseappcheck.googleapis.com/v1";
var EXCHANGE_DEBUG_TOKEN_METHOD = "exchangeDebugToken";
var TOKEN_REFRESH_TIME = {
  /**
   * The offset time before token natural expiration to run the refresh.
   * This is currently 5 minutes.
   */
  OFFSET_DURATION: 5 * 60 * 1e3,
  /**
   * This is the first retrial wait after an error. This is currently
   * 30 seconds.
   */
  RETRIAL_MIN_WAIT: 30 * 1e3,
  /**
   * This is the maximum retrial wait, currently 16 minutes.
   */
  RETRIAL_MAX_WAIT: 16 * 60 * 1e3
};
var ONE_DAY = 24 * 60 * 60 * 1e3;
var Refresher = class {
  constructor(operation, retryPolicy, getWaitDuration, lowerBound, upperBound) {
    this.operation = operation;
    this.retryPolicy = retryPolicy;
    this.getWaitDuration = getWaitDuration;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.pending = null;
    this.nextErrorWaitInterval = lowerBound;
    if (lowerBound > upperBound) {
      throw new Error("Proactive refresh lower bound greater than upper bound!");
    }
  }
  start() {
    this.nextErrorWaitInterval = this.lowerBound;
    this.process(true).catch(() => {
    });
  }
  stop() {
    if (this.pending) {
      this.pending.reject("cancelled");
      this.pending = null;
    }
  }
  isRunning() {
    return !!this.pending;
  }
  process(hasSucceeded) {
    return __async(this, null, function* () {
      this.stop();
      try {
        this.pending = new Deferred();
        this.pending.promise.catch((_e) => {
        });
        yield sleep(this.getNextRun(hasSucceeded));
        this.pending.resolve();
        yield this.pending.promise;
        this.pending = new Deferred();
        this.pending.promise.catch((_e) => {
        });
        yield this.operation();
        this.pending.resolve();
        yield this.pending.promise;
        this.process(true).catch(() => {
        });
      } catch (error) {
        if (this.retryPolicy(error)) {
          this.process(false).catch(() => {
          });
        } else {
          this.stop();
        }
      }
    });
  }
  getNextRun(hasSucceeded) {
    if (hasSucceeded) {
      this.nextErrorWaitInterval = this.lowerBound;
      return this.getWaitDuration();
    } else {
      const currentErrorWaitInterval = this.nextErrorWaitInterval;
      this.nextErrorWaitInterval *= 2;
      if (this.nextErrorWaitInterval > this.upperBound) {
        this.nextErrorWaitInterval = this.upperBound;
      }
      return currentErrorWaitInterval;
    }
  }
};
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
var ERRORS = {
  [
    "already-initialized"
    /* AppCheckError.ALREADY_INITIALIZED */
  ]: "You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",
  [
    "use-before-activation"
    /* AppCheckError.USE_BEFORE_ACTIVATION */
  ]: "App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",
  [
    "fetch-network-error"
    /* AppCheckError.FETCH_NETWORK_ERROR */
  ]: "Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",
  [
    "fetch-parse-error"
    /* AppCheckError.FETCH_PARSE_ERROR */
  ]: "Fetch client could not parse response. Original error: {$originalErrorMessage}.",
  [
    "fetch-status-error"
    /* AppCheckError.FETCH_STATUS_ERROR */
  ]: "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",
  [
    "storage-open"
    /* AppCheckError.STORAGE_OPEN */
  ]: "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
  [
    "storage-get"
    /* AppCheckError.STORAGE_GET */
  ]: "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
  [
    "storage-set"
    /* AppCheckError.STORAGE_WRITE */
  ]: "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
  [
    "recaptcha-error"
    /* AppCheckError.RECAPTCHA_ERROR */
  ]: "ReCAPTCHA error.",
  [
    "initial-throttle"
    /* AppCheckError.INITIAL_THROTTLE */
  ]: `{$httpStatus} error. Attempts allowed again after {$time}`,
  [
    "throttled"
    /* AppCheckError.THROTTLED */
  ]: `Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}`
};
var ERROR_FACTORY = new ErrorFactory("appCheck", "AppCheck", ERRORS);
function ensureActivated(app) {
  if (!getStateReference(app).activated) {
    throw ERROR_FACTORY.create("use-before-activation", {
      appName: app.name
    });
  }
}
function exchangeToken(_0, _1) {
  return __async(this, arguments, function* ({ url, body }, heartbeatServiceProvider) {
    const headers = {
      "Content-Type": "application/json"
    };
    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });
    if (heartbeatService) {
      const heartbeatsHeader = yield heartbeatService.getHeartbeatsHeader();
      if (heartbeatsHeader) {
        headers["X-Firebase-Client"] = heartbeatsHeader;
      }
    }
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers
    };
    let response;
    try {
      response = yield fetch(url, options);
    } catch (originalError) {
      throw ERROR_FACTORY.create("fetch-network-error", {
        originalErrorMessage: originalError === null || originalError === void 0 ? void 0 : originalError.message
      });
    }
    if (response.status !== 200) {
      throw ERROR_FACTORY.create("fetch-status-error", {
        httpStatus: response.status
      });
    }
    let responseBody;
    try {
      responseBody = yield response.json();
    } catch (originalError) {
      throw ERROR_FACTORY.create("fetch-parse-error", {
        originalErrorMessage: originalError === null || originalError === void 0 ? void 0 : originalError.message
      });
    }
    const match = responseBody.ttl.match(/^([\d.]+)(s)$/);
    if (!match || !match[2] || isNaN(Number(match[1]))) {
      throw ERROR_FACTORY.create("fetch-parse-error", {
        originalErrorMessage: `ttl field (timeToLive) is not in standard Protobuf Duration format: ${responseBody.ttl}`
      });
    }
    const timeToLiveAsNumber = Number(match[1]) * 1e3;
    const now = Date.now();
    return {
      token: responseBody.token,
      expireTimeMillis: now + timeToLiveAsNumber,
      issuedAtTimeMillis: now
    };
  });
}
function getExchangeDebugTokenRequest(app, debugToken) {
  const { projectId, appId, apiKey } = app.options;
  return {
    url: `${BASE_ENDPOINT}/projects/${projectId}/apps/${appId}:${EXCHANGE_DEBUG_TOKEN_METHOD}?key=${apiKey}`,
    body: {
      // eslint-disable-next-line
      debug_token: debugToken
    }
  };
}
var DB_NAME = "firebase-app-check-database";
var DB_VERSION = 1;
var STORE_NAME = "firebase-app-check-store";
var DEBUG_TOKEN_KEY = "debug-token";
var dbPromise = null;
function getDBPromise() {
  if (dbPromise) {
    return dbPromise;
  }
  dbPromise = new Promise((resolve, reject) => {
    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        var _a;
        reject(ERROR_FACTORY.create("storage-open", {
          originalErrorMessage: (_a = event.target.error) === null || _a === void 0 ? void 0 : _a.message
        }));
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        switch (event.oldVersion) {
          case 0:
            db.createObjectStore(STORE_NAME, {
              keyPath: "compositeKey"
            });
        }
      };
    } catch (e) {
      reject(ERROR_FACTORY.create("storage-open", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      }));
    }
  });
  return dbPromise;
}
function readTokenFromIndexedDB(app) {
  return read(computeKey(app));
}
function writeTokenToIndexedDB(app, token) {
  return write(computeKey(app), token);
}
function writeDebugTokenToIndexedDB(token) {
  return write(DEBUG_TOKEN_KEY, token);
}
function readDebugTokenFromIndexedDB() {
  return read(DEBUG_TOKEN_KEY);
}
function write(key, value) {
  return __async(this, null, function* () {
    const db = yield getDBPromise();
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put({
      compositeKey: key,
      value
    });
    return new Promise((resolve, reject) => {
      request.onsuccess = (_event) => {
        resolve();
      };
      transaction.onerror = (event) => {
        var _a;
        reject(ERROR_FACTORY.create("storage-set", {
          originalErrorMessage: (_a = event.target.error) === null || _a === void 0 ? void 0 : _a.message
        }));
      };
    });
  });
}
function read(key) {
  return __async(this, null, function* () {
    const db = yield getDBPromise();
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);
    return new Promise((resolve, reject) => {
      request.onsuccess = (event) => {
        const result = event.target.result;
        if (result) {
          resolve(result.value);
        } else {
          resolve(void 0);
        }
      };
      transaction.onerror = (event) => {
        var _a;
        reject(ERROR_FACTORY.create("storage-get", {
          originalErrorMessage: (_a = event.target.error) === null || _a === void 0 ? void 0 : _a.message
        }));
      };
    });
  });
}
function computeKey(app) {
  return `${app.options.appId}-${app.name}`;
}
var logger = new Logger("@firebase/app-check");
function readTokenFromStorage(app) {
  return __async(this, null, function* () {
    if (isIndexedDBAvailable()) {
      let token = void 0;
      try {
        token = yield readTokenFromIndexedDB(app);
      } catch (e) {
        logger.warn(`Failed to read token from IndexedDB. Error: ${e}`);
      }
      return token;
    }
    return void 0;
  });
}
function writeTokenToStorage(app, token) {
  if (isIndexedDBAvailable()) {
    return writeTokenToIndexedDB(app, token).catch((e) => {
      logger.warn(`Failed to write token to IndexedDB. Error: ${e}`);
    });
  }
  return Promise.resolve();
}
function readOrCreateDebugTokenFromStorage() {
  return __async(this, null, function* () {
    let existingDebugToken = void 0;
    try {
      existingDebugToken = yield readDebugTokenFromIndexedDB();
    } catch (_e) {
    }
    if (!existingDebugToken) {
      const newToken = crypto.randomUUID();
      writeDebugTokenToIndexedDB(newToken).catch((e) => logger.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`));
      return newToken;
    } else {
      return existingDebugToken;
    }
  });
}
function isDebugMode() {
  const debugState = getDebugState();
  return debugState.enabled;
}
function getDebugToken() {
  return __async(this, null, function* () {
    const state = getDebugState();
    if (state.enabled && state.token) {
      return state.token.promise;
    } else {
      throw Error(`
            Can't get debug token in production mode.
        `);
    }
  });
}
function initializeDebugMode() {
  const globals = getGlobal();
  const debugState = getDebugState();
  debugState.initialized = true;
  if (typeof globals.FIREBASE_APPCHECK_DEBUG_TOKEN !== "string" && globals.FIREBASE_APPCHECK_DEBUG_TOKEN !== true) {
    return;
  }
  debugState.enabled = true;
  const deferredToken = new Deferred();
  debugState.token = deferredToken;
  if (typeof globals.FIREBASE_APPCHECK_DEBUG_TOKEN === "string") {
    deferredToken.resolve(globals.FIREBASE_APPCHECK_DEBUG_TOKEN);
  } else {
    deferredToken.resolve(readOrCreateDebugTokenFromStorage());
  }
}
var defaultTokenErrorData = { error: "UNKNOWN_ERROR" };
function formatDummyToken(tokenErrorData) {
  return base64.encodeString(
    JSON.stringify(tokenErrorData),
    /* webSafe= */
    false
  );
}
function getToken$2(appCheck, forceRefresh = false, shouldLogErrors = false) {
  return __async(this, null, function* () {
    const app = appCheck.app;
    ensureActivated(app);
    const state = getStateReference(app);
    let token = state.token;
    let error = void 0;
    if (token && !isValid(token)) {
      state.token = void 0;
      token = void 0;
    }
    if (!token) {
      const cachedToken = yield state.cachedTokenPromise;
      if (cachedToken) {
        if (isValid(cachedToken)) {
          token = cachedToken;
        } else {
          yield writeTokenToStorage(app, void 0);
        }
      }
    }
    if (!forceRefresh && token && isValid(token)) {
      return {
        token: token.token
      };
    }
    let shouldCallListeners = false;
    if (isDebugMode()) {
      try {
        if (!state.exchangeTokenPromise) {
          state.exchangeTokenPromise = exchangeToken(getExchangeDebugTokenRequest(app, yield getDebugToken()), appCheck.heartbeatServiceProvider).finally(() => {
            state.exchangeTokenPromise = void 0;
          });
          shouldCallListeners = true;
        }
        const tokenFromDebugExchange = yield state.exchangeTokenPromise;
        yield writeTokenToStorage(app, tokenFromDebugExchange);
        state.token = tokenFromDebugExchange;
        return { token: tokenFromDebugExchange.token };
      } catch (e) {
        if (e.code === `appCheck/${"throttled"}` || e.code === `appCheck/${"initial-throttle"}`) {
          logger.warn(e.message);
        } else if (shouldLogErrors) {
          logger.error(e);
        }
        return makeDummyTokenResult(e);
      }
    }
    try {
      if (!state.exchangeTokenPromise) {
        state.exchangeTokenPromise = state.provider.getToken().finally(() => {
          state.exchangeTokenPromise = void 0;
        });
        shouldCallListeners = true;
      }
      token = yield getStateReference(app).exchangeTokenPromise;
    } catch (e) {
      if (e.code === `appCheck/${"throttled"}` || e.code === `appCheck/${"initial-throttle"}`) {
        logger.warn(e.message);
      } else if (shouldLogErrors) {
        logger.error(e);
      }
      error = e;
    }
    let interopTokenResult;
    if (!token) {
      interopTokenResult = makeDummyTokenResult(error);
    } else if (error) {
      if (isValid(token)) {
        interopTokenResult = {
          token: token.token,
          internalError: error
        };
      } else {
        interopTokenResult = makeDummyTokenResult(error);
      }
    } else {
      interopTokenResult = {
        token: token.token
      };
      state.token = token;
      yield writeTokenToStorage(app, token);
    }
    if (shouldCallListeners) {
      notifyTokenListeners(app, interopTokenResult);
    }
    return interopTokenResult;
  });
}
function getLimitedUseToken$1(appCheck) {
  return __async(this, null, function* () {
    const app = appCheck.app;
    ensureActivated(app);
    const { provider } = getStateReference(app);
    if (isDebugMode()) {
      const debugToken = yield getDebugToken();
      const { token } = yield exchangeToken(getExchangeDebugTokenRequest(app, debugToken), appCheck.heartbeatServiceProvider);
      return { token };
    } else {
      const { token } = yield provider.getToken();
      return { token };
    }
  });
}
function addTokenListener(appCheck, type, listener, onError) {
  const { app } = appCheck;
  const state = getStateReference(app);
  const tokenObserver = {
    next: listener,
    error: onError,
    type
  };
  state.tokenObservers = [...state.tokenObservers, tokenObserver];
  if (state.token && isValid(state.token)) {
    const validToken = state.token;
    Promise.resolve().then(() => {
      listener({ token: validToken.token });
      initTokenRefresher(appCheck);
    }).catch(() => {
    });
  }
  void state.cachedTokenPromise.then(() => initTokenRefresher(appCheck));
}
function removeTokenListener(app, listener) {
  const state = getStateReference(app);
  const newObservers = state.tokenObservers.filter((tokenObserver) => tokenObserver.next !== listener);
  if (newObservers.length === 0 && state.tokenRefresher && state.tokenRefresher.isRunning()) {
    state.tokenRefresher.stop();
  }
  state.tokenObservers = newObservers;
}
function initTokenRefresher(appCheck) {
  const { app } = appCheck;
  const state = getStateReference(app);
  let refresher = state.tokenRefresher;
  if (!refresher) {
    refresher = createTokenRefresher(appCheck);
    state.tokenRefresher = refresher;
  }
  if (!refresher.isRunning() && state.isTokenAutoRefreshEnabled) {
    refresher.start();
  }
}
function createTokenRefresher(appCheck) {
  const { app } = appCheck;
  return new Refresher(
    // Keep in mind when this fails for any reason other than the ones
    // for which we should retry, it will effectively stop the proactive refresh.
    () => __async(null, null, function* () {
      const state = getStateReference(app);
      let result;
      if (!state.token) {
        result = yield getToken$2(appCheck);
      } else {
        result = yield getToken$2(appCheck, true);
      }
      if (result.error) {
        throw result.error;
      }
      if (result.internalError) {
        throw result.internalError;
      }
    }),
    () => {
      return true;
    },
    () => {
      const state = getStateReference(app);
      if (state.token) {
        let nextRefreshTimeMillis = state.token.issuedAtTimeMillis + (state.token.expireTimeMillis - state.token.issuedAtTimeMillis) * 0.5 + 5 * 60 * 1e3;
        const latestAllowableRefresh = state.token.expireTimeMillis - 5 * 60 * 1e3;
        nextRefreshTimeMillis = Math.min(nextRefreshTimeMillis, latestAllowableRefresh);
        return Math.max(0, nextRefreshTimeMillis - Date.now());
      } else {
        return 0;
      }
    },
    TOKEN_REFRESH_TIME.RETRIAL_MIN_WAIT,
    TOKEN_REFRESH_TIME.RETRIAL_MAX_WAIT
  );
}
function notifyTokenListeners(app, token) {
  const observers = getStateReference(app).tokenObservers;
  for (const observer of observers) {
    try {
      if (observer.type === "EXTERNAL" && token.error != null) {
        observer.error(token.error);
      } else {
        observer.next(token);
      }
    } catch (e) {
    }
  }
}
function isValid(token) {
  return token.expireTimeMillis - Date.now() > 0;
}
function makeDummyTokenResult(error) {
  return {
    token: formatDummyToken(defaultTokenErrorData),
    error
  };
}
var AppCheckService = class {
  constructor(app, heartbeatServiceProvider) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
  }
  _delete() {
    const { tokenObservers } = getStateReference(this.app);
    for (const tokenObserver of tokenObservers) {
      removeTokenListener(this.app, tokenObserver.next);
    }
    return Promise.resolve();
  }
};
function factory(app, heartbeatServiceProvider) {
  return new AppCheckService(app, heartbeatServiceProvider);
}
function internalFactory(appCheck) {
  return {
    getToken: (forceRefresh) => getToken$2(appCheck, forceRefresh),
    getLimitedUseToken: () => getLimitedUseToken$1(appCheck),
    addTokenListener: (listener) => addTokenListener(appCheck, "INTERNAL", listener),
    removeTokenListener: (listener) => removeTokenListener(appCheck.app, listener)
  };
}
var name = "@firebase/app-check";
var version = "0.10.1";
function initializeAppCheck(app = getApp(), options) {
  app = getModularInstance(app);
  const provider = _getProvider(app, "app-check");
  if (!getDebugState().initialized) {
    initializeDebugMode();
  }
  if (isDebugMode()) {
    void getDebugToken().then((token) => (
      // Not using logger because I don't think we ever want this accidentally hidden.
      console.log(`App Check debug token: ${token}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)
    ));
  }
  if (provider.isInitialized()) {
    const existingInstance = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if (initialOptions.isTokenAutoRefreshEnabled === options.isTokenAutoRefreshEnabled && initialOptions.provider.isEqual(options.provider)) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY.create("already-initialized", {
        appName: app.name
      });
    }
  }
  const appCheck = provider.initialize({ options });
  _activate(app, options.provider, options.isTokenAutoRefreshEnabled);
  if (getStateReference(app).isTokenAutoRefreshEnabled) {
    addTokenListener(appCheck, "INTERNAL", () => {
    });
  }
  return appCheck;
}
function _activate(app, provider, isTokenAutoRefreshEnabled = false) {
  const state = setInitialState(app, Object.assign({}, DEFAULT_STATE));
  state.activated = true;
  state.provider = provider;
  state.cachedTokenPromise = readTokenFromStorage(app).then((cachedToken) => {
    if (cachedToken && isValid(cachedToken)) {
      state.token = cachedToken;
      notifyTokenListeners(app, { token: cachedToken.token });
    }
    return cachedToken;
  });
  state.isTokenAutoRefreshEnabled = isTokenAutoRefreshEnabled && app.automaticDataCollectionEnabled;
  if (!app.automaticDataCollectionEnabled && isTokenAutoRefreshEnabled) {
    logger.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh.");
  }
  state.provider.initialize(app);
}
function setTokenAutoRefreshEnabled(appCheckInstance, isTokenAutoRefreshEnabled) {
  const app = appCheckInstance.app;
  const state = getStateReference(app);
  if (state.tokenRefresher) {
    if (isTokenAutoRefreshEnabled === true) {
      state.tokenRefresher.start();
    } else {
      state.tokenRefresher.stop();
    }
  }
  state.isTokenAutoRefreshEnabled = isTokenAutoRefreshEnabled;
}
function getToken(appCheckInstance, forceRefresh) {
  return __async(this, null, function* () {
    const result = yield getToken$2(appCheckInstance, forceRefresh);
    if (result.error) {
      throw result.error;
    }
    if (result.internalError) {
      throw result.internalError;
    }
    return { token: result.token };
  });
}
function getLimitedUseToken(appCheckInstance) {
  return getLimitedUseToken$1(appCheckInstance);
}
function onTokenChanged(appCheckInstance, onNextOrObserver, onError, onCompletion) {
  let nextFn = () => {
  };
  let errorFn = () => {
  };
  if (onNextOrObserver.next != null) {
    nextFn = onNextOrObserver.next.bind(onNextOrObserver);
  } else {
    nextFn = onNextOrObserver;
  }
  if (onNextOrObserver.error != null) {
    errorFn = onNextOrObserver.error.bind(onNextOrObserver);
  } else if (onError) {
    errorFn = onError;
  }
  addTokenListener(appCheckInstance, "EXTERNAL", nextFn, errorFn);
  return () => removeTokenListener(appCheckInstance.app, nextFn);
}
var APP_CHECK_NAME = "app-check";
var APP_CHECK_NAME_INTERNAL = "app-check-internal";
function registerAppCheck() {
  _registerComponent(new Component2(
    APP_CHECK_NAME,
    (container) => {
      const app = container.getProvider("app").getImmediate();
      const heartbeatServiceProvider = container.getProvider("heartbeat");
      return factory(app, heartbeatServiceProvider);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((container, _identifier, _appcheckService) => {
    container.getProvider(APP_CHECK_NAME_INTERNAL).initialize();
  }));
  _registerComponent(new Component2(
    APP_CHECK_NAME_INTERNAL,
    (container) => {
      const appCheck = container.getProvider("app-check").getImmediate();
      return internalFactory(appCheck);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ));
  registerVersion(name, version);
}
registerAppCheck();

// node_modules/@angular/fire/fesm2022/angular-fire-app-check.mjs
var APP_CHECK_PROVIDER_NAME = "app-check";
var AppCheck = class {
  constructor(appCheck) {
    return appCheck;
  }
};
var AppCheckInstances = class {
  constructor() {
    return \u0275getAllInstancesOf(APP_CHECK_PROVIDER_NAME);
  }
};
var appCheckInstance$ = timer(0, 300).pipe(concatMap(() => from(\u0275getAllInstancesOf(APP_CHECK_PROVIDER_NAME))), distinct());
var PROVIDED_APP_CHECK_INSTANCES = new InjectionToken("angularfire2.app-check-instances");
function defaultAppCheckInstanceFactory(provided, defaultApp) {
  const defaultAppCheck = \u0275getDefaultInstanceOf(APP_CHECK_PROVIDER_NAME, provided, defaultApp);
  return defaultAppCheck && new AppCheck(defaultAppCheck);
}
var LOCALHOSTS = ["localhost", "0.0.0.0", "127.0.0.1"];
var isLocalhost = typeof window !== "undefined" && LOCALHOSTS.includes(window.location.hostname);
var APP_CHECK_INSTANCES_PROVIDER = {
  provide: AppCheckInstances,
  deps: [[new Optional(), PROVIDED_APP_CHECK_INSTANCES]]
};
var DEFAULT_APP_CHECK_INSTANCE_PROVIDER = {
  provide: AppCheck,
  useFactory: defaultAppCheckInstanceFactory,
  deps: [[new Optional(), PROVIDED_APP_CHECK_INSTANCES], FirebaseApp, PLATFORM_ID]
};
var AppCheckModule = class _AppCheckModule {
  constructor() {
    registerVersion("angularfire", VERSION2.full, "app-check");
  }
  static \u0275fac = function AppCheckModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCheckModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AppCheckModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DEFAULT_APP_CHECK_INSTANCE_PROVIDER, APP_CHECK_INSTANCES_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCheckModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_APP_CHECK_INSTANCE_PROVIDER, APP_CHECK_INSTANCES_PROVIDER]
    }]
  }], () => [], null);
})();
var getLimitedUseToken2 = \u0275zoneWrap(getLimitedUseToken, true, 2);
var getToken2 = \u0275zoneWrap(getToken, true);
var initializeAppCheck2 = \u0275zoneWrap(initializeAppCheck, true);
var onTokenChanged2 = \u0275zoneWrap(onTokenChanged, true);
var setTokenAutoRefreshEnabled2 = \u0275zoneWrap(setTokenAutoRefreshEnabled, true);

// node_modules/rxfire/auth/index.esm.js
function authState(auth) {
  return new Observable(function(subscriber) {
    var unsubscribe = onAuthStateChanged(auth, subscriber.next.bind(subscriber), subscriber.error.bind(subscriber), subscriber.complete.bind(subscriber));
    return { unsubscribe };
  });
}
function user(auth) {
  return new Observable(function(subscriber) {
    var unsubscribe = onIdTokenChanged(auth, subscriber.next.bind(subscriber), subscriber.error.bind(subscriber), subscriber.complete.bind(subscriber));
    return { unsubscribe };
  });
}
function idToken(auth) {
  return user(auth).pipe(switchMap(function(user3) {
    return user3 ? from(getIdToken(user3)) : of(null);
  }));
}

// node_modules/@angular/fire/fesm2022/angular-fire-auth.mjs
var AUTH_PROVIDER_NAME = "auth";
var Auth = class {
  constructor(auth) {
    return auth;
  }
};
var AuthInstances = class {
  constructor() {
    return \u0275getAllInstancesOf(AUTH_PROVIDER_NAME);
  }
};
var authInstance$ = timer(0, 300).pipe(concatMap(() => from(\u0275getAllInstancesOf(AUTH_PROVIDER_NAME))), distinct());
var PROVIDED_AUTH_INSTANCES = new InjectionToken("angularfire2.auth-instances");
function defaultAuthInstanceFactory(provided, defaultApp) {
  const defaultAuth = \u0275getDefaultInstanceOf(AUTH_PROVIDER_NAME, provided, defaultApp);
  return defaultAuth && new Auth(defaultAuth);
}
function authInstanceFactory(fn) {
  return (zone, injector) => {
    const auth = zone.runOutsideAngular(() => fn(injector));
    return new Auth(auth);
  };
}
var AUTH_INSTANCES_PROVIDER = {
  provide: AuthInstances,
  deps: [[new Optional(), PROVIDED_AUTH_INSTANCES]]
};
var DEFAULT_AUTH_INSTANCE_PROVIDER = {
  provide: Auth,
  useFactory: defaultAuthInstanceFactory,
  deps: [[new Optional(), PROVIDED_AUTH_INSTANCES], FirebaseApp]
};
var AuthModule = class _AuthModule {
  constructor() {
    registerVersion("angularfire", VERSION2.full, "auth");
  }
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AuthModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER]
    }]
  }], () => [], null);
})();
function provideAuth(fn, ...deps) {
  registerVersion("angularfire", VERSION2.full, "auth");
  return makeEnvironmentProviders([DEFAULT_AUTH_INSTANCE_PROVIDER, AUTH_INSTANCES_PROVIDER, {
    provide: PROVIDED_AUTH_INSTANCES,
    useFactory: authInstanceFactory(fn),
    multi: true,
    deps: [NgZone, Injector, \u0275AngularFireSchedulers, FirebaseApps, [new Optional(), AppCheckInstances], ...deps]
  }]);
}
var authState2 = \u0275zoneWrap(authState, true);
var idToken2 = \u0275zoneWrap(idToken, true);
var user2 = \u0275zoneWrap(user, true);
var applyActionCode2 = \u0275zoneWrap(applyActionCode, true);
var beforeAuthStateChanged2 = \u0275zoneWrap(beforeAuthStateChanged, true);
var checkActionCode2 = \u0275zoneWrap(checkActionCode, true);
var confirmPasswordReset2 = \u0275zoneWrap(confirmPasswordReset, true, 2);
var connectAuthEmulator2 = \u0275zoneWrap(connectAuthEmulator, true);
var createUserWithEmailAndPassword2 = \u0275zoneWrap(createUserWithEmailAndPassword, true, 2);
var deleteUser2 = \u0275zoneWrap(deleteUser, true, 2);
var fetchSignInMethodsForEmail2 = \u0275zoneWrap(fetchSignInMethodsForEmail, true, 2);
var getAdditionalUserInfo2 = \u0275zoneWrap(getAdditionalUserInfo, true, 2);
var getAuth2 = \u0275zoneWrap(getAuth, true);
var getIdToken2 = \u0275zoneWrap(getIdToken, true);
var getIdTokenResult2 = \u0275zoneWrap(getIdTokenResult, true);
var getMultiFactorResolver2 = \u0275zoneWrap(getMultiFactorResolver, true);
var getRedirectResult2 = \u0275zoneWrap(getRedirectResult, true);
var initializeAuth2 = \u0275zoneWrap(initializeAuth, true);
var initializeRecaptchaConfig2 = \u0275zoneWrap(initializeRecaptchaConfig, true);
var isSignInWithEmailLink2 = \u0275zoneWrap(isSignInWithEmailLink, true);
var linkWithCredential2 = \u0275zoneWrap(linkWithCredential, true, 2);
var linkWithPhoneNumber2 = \u0275zoneWrap(linkWithPhoneNumber, true, 2);
var linkWithPopup2 = \u0275zoneWrap(linkWithPopup, true, 2);
var linkWithRedirect2 = \u0275zoneWrap(linkWithRedirect, true, 2);
var onAuthStateChanged2 = \u0275zoneWrap(onAuthStateChanged, true);
var onIdTokenChanged2 = \u0275zoneWrap(onIdTokenChanged, true);
var parseActionCodeURL2 = \u0275zoneWrap(parseActionCodeURL, true);
var reauthenticateWithCredential2 = \u0275zoneWrap(reauthenticateWithCredential, true, 2);
var reauthenticateWithPhoneNumber2 = \u0275zoneWrap(reauthenticateWithPhoneNumber, true, 2);
var reauthenticateWithPopup2 = \u0275zoneWrap(reauthenticateWithPopup, true, 2);
var reauthenticateWithRedirect2 = \u0275zoneWrap(reauthenticateWithRedirect, true, 2);
var reload2 = \u0275zoneWrap(reload, true, 2);
var revokeAccessToken2 = \u0275zoneWrap(revokeAccessToken, true, 2);
var sendEmailVerification2 = \u0275zoneWrap(sendEmailVerification, true, 2);
var sendPasswordResetEmail2 = \u0275zoneWrap(sendPasswordResetEmail, true, 2);
var sendSignInLinkToEmail2 = \u0275zoneWrap(sendSignInLinkToEmail, true, 2);
var setPersistence2 = \u0275zoneWrap(setPersistence, true);
var signInAnonymously2 = \u0275zoneWrap(signInAnonymously, true, 2);
var signInWithCredential2 = \u0275zoneWrap(signInWithCredential, true, 2);
var signInWithCustomToken2 = \u0275zoneWrap(signInWithCustomToken, true, 2);
var signInWithEmailAndPassword2 = \u0275zoneWrap(signInWithEmailAndPassword, true, 2);
var signInWithEmailLink2 = \u0275zoneWrap(signInWithEmailLink, true, 2);
var signInWithPhoneNumber2 = \u0275zoneWrap(signInWithPhoneNumber, true, 2);
var signInWithPopup2 = \u0275zoneWrap(signInWithPopup, true, 2);
var signInWithRedirect2 = \u0275zoneWrap(signInWithRedirect, true, 2);
var signOut2 = \u0275zoneWrap(signOut, true, 2);
var unlink2 = \u0275zoneWrap(unlink, true, 2);
var updateCurrentUser2 = \u0275zoneWrap(updateCurrentUser, true, 2);
var updateEmail2 = \u0275zoneWrap(updateEmail, true, 2);
var updatePassword2 = \u0275zoneWrap(updatePassword, true, 2);
var updatePhoneNumber2 = \u0275zoneWrap(updatePhoneNumber, true, 2);
var updateProfile2 = \u0275zoneWrap(updateProfile, true, 2);
var useDeviceLanguage2 = \u0275zoneWrap(useDeviceLanguage, true, 2);
var validatePassword2 = \u0275zoneWrap(validatePassword, true, 2);
var verifyBeforeUpdateEmail2 = \u0275zoneWrap(verifyBeforeUpdateEmail, true, 2);
var verifyPasswordResetCode2 = \u0275zoneWrap(verifyPasswordResetCode, true, 2);

// node_modules/rxfire/firestore/index.esm.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
var DEFAULT_OPTIONS = { includeMetadataChanges: false };
function fromRef(ref, options) {
  if (options === void 0) {
    options = DEFAULT_OPTIONS;
  }
  return new Observable(function(subscriber) {
    var unsubscribe = onSnapshot(ref, options, {
      next: subscriber.next.bind(subscriber),
      error: subscriber.error.bind(subscriber),
      complete: subscriber.complete.bind(subscriber)
    });
    return { unsubscribe };
  });
}
function doc2(ref) {
  return fromRef(ref, { includeMetadataChanges: true });
}
function docData(ref, options) {
  if (options === void 0) {
    options = {};
  }
  return doc2(ref).pipe(map(function(snap) {
    return snapToData(snap, options);
  }));
}
function snapToData(snapshot, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var data = snapshot.data(options);
  if (!snapshot.exists() || typeof data !== "object" || data === null || !options.idField) {
    return data;
  }
  return __assign(__assign({}, data), (_a = {}, _a[options.idField] = snapshot.id, _a));
}
var ALL_EVENTS = ["added", "modified", "removed"];
var filterEvents = function(events) {
  return filter(function(changes) {
    var hasChange = false;
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      if (events && events.indexOf(change.type) >= 0) {
        hasChange = true;
        break;
      }
    }
    return hasChange;
  });
};
function sliceAndSplice(original, start, deleteCount) {
  var args = [];
  for (var _i = 3; _i < arguments.length; _i++) {
    args[_i - 3] = arguments[_i];
  }
  var returnArray = original.slice();
  returnArray.splice.apply(returnArray, __spreadArray([start, deleteCount], args, false));
  return returnArray;
}
function processIndividualChange(combined, change) {
  switch (change.type) {
    case "added":
      if (combined[change.newIndex] && refEqual(combined[change.newIndex].doc.ref, change.doc.ref)) ;
      else {
        return sliceAndSplice(combined, change.newIndex, 0, change);
      }
      break;
    case "modified":
      if (combined[change.oldIndex] == null || refEqual(combined[change.oldIndex].doc.ref, change.doc.ref)) {
        if (change.oldIndex !== change.newIndex) {
          var copiedArray = combined.slice();
          copiedArray.splice(change.oldIndex, 1);
          copiedArray.splice(change.newIndex, 0, change);
          return copiedArray;
        } else {
          return sliceAndSplice(combined, change.newIndex, 1, change);
        }
      }
      break;
    case "removed":
      if (combined[change.oldIndex] && refEqual(combined[change.oldIndex].doc.ref, change.doc.ref)) {
        return sliceAndSplice(combined, change.oldIndex, 1);
      }
      break;
  }
  return combined;
}
function processDocumentChanges(current, changes, events) {
  if (events === void 0) {
    events = ALL_EVENTS;
  }
  changes.forEach(function(change) {
    if (events.indexOf(change.type) > -1) {
      current = processIndividualChange(current, change);
    }
  });
  return current;
}
var windowwise = function() {
  return pipe(startWith(void 0), pairwise());
};
var metaDataEquals = function(a, b) {
  return JSON.stringify(a.metadata) === JSON.stringify(b.metadata);
};
var filterEmptyUnlessFirst = function() {
  return pipe(windowwise(), filter(function(_a) {
    var prior = _a[0], current = _a[1];
    return current.length > 0 || prior === void 0;
  }), map(function(_a) {
    var current = _a[1];
    return current;
  }));
};
function collectionChanges(query3, options) {
  if (options === void 0) {
    options = {};
  }
  return fromRef(query3, { includeMetadataChanges: true }).pipe(windowwise(), map(function(_a) {
    var priorSnapshot = _a[0], currentSnapshot = _a[1];
    var docChanges = currentSnapshot.docChanges();
    if (priorSnapshot && !metaDataEquals(priorSnapshot, currentSnapshot)) {
      currentSnapshot.docs.forEach(function(currentDocSnapshot, currentIndex) {
        var currentDocChange = docChanges.find(function(c) {
          return refEqual(c.doc.ref, currentDocSnapshot.ref);
        });
        if (currentDocChange) {
          if (metaDataEquals(currentDocChange.doc, currentDocSnapshot)) {
            return;
          }
        } else {
          var priorDocSnapshot = priorSnapshot === null || priorSnapshot === void 0 ? void 0 : priorSnapshot.docs.find(function(d) {
            return refEqual(d.ref, currentDocSnapshot.ref);
          });
          if (priorDocSnapshot && metaDataEquals(priorDocSnapshot, currentDocSnapshot)) {
            return;
          }
        }
        docChanges.push({
          oldIndex: currentIndex,
          newIndex: currentIndex,
          type: "modified",
          doc: currentDocSnapshot
        });
      });
    }
    return docChanges;
  }), filterEvents(options.events || ALL_EVENTS), filterEmptyUnlessFirst());
}
function collection2(query3) {
  return fromRef(query3, { includeMetadataChanges: true }).pipe(map(function(changes) {
    return changes.docs;
  }));
}
function sortedChanges(query3, options) {
  if (options === void 0) {
    options = {};
  }
  return collectionChanges(query3, options).pipe(scan(function(current, changes) {
    return processDocumentChanges(current, changes, options.events);
  }, []), distinctUntilChanged());
}
function auditTrail(query3, options) {
  if (options === void 0) {
    options = {};
  }
  return collectionChanges(query3, options).pipe(scan(function(current, action) {
    return __spreadArray(__spreadArray([], current, true), action, true);
  }, []));
}
function collectionData(query3, options) {
  if (options === void 0) {
    options = {};
  }
  return collection2(query3).pipe(map(function(arr) {
    return arr.map(function(snap) {
      return snapToData(snap, options);
    });
  }));
}
function collectionCountSnap(query3) {
  return from(getCountFromServer(query3));
}
function collectionCount(query3) {
  return collectionCountSnap(query3).pipe(map(function(snap) {
    return snap.data().count;
  }));
}

// node_modules/@angular/fire/fesm2022/angular-fire-firestore.mjs
var Firestore = class {
  constructor(firestore) {
    return firestore;
  }
};
var FIRESTORE_PROVIDER_NAME = "firestore";
var FirestoreInstances = class {
  constructor() {
    return \u0275getAllInstancesOf(FIRESTORE_PROVIDER_NAME);
  }
};
var firestoreInstance$ = timer(0, 300).pipe(concatMap(() => from(\u0275getAllInstancesOf(FIRESTORE_PROVIDER_NAME))), distinct());
var PROVIDED_FIRESTORE_INSTANCES = new InjectionToken("angularfire2.firestore-instances");
function defaultFirestoreInstanceFactory(provided, defaultApp) {
  const defaultFirestore = \u0275getDefaultInstanceOf(FIRESTORE_PROVIDER_NAME, provided, defaultApp);
  return defaultFirestore && new Firestore(defaultFirestore);
}
function firestoreInstanceFactory(fn) {
  return (zone, injector) => {
    const firestore = zone.runOutsideAngular(() => fn(injector));
    return new Firestore(firestore);
  };
}
var FIRESTORE_INSTANCES_PROVIDER = {
  provide: FirestoreInstances,
  deps: [[new Optional(), PROVIDED_FIRESTORE_INSTANCES]]
};
var DEFAULT_FIRESTORE_INSTANCE_PROVIDER = {
  provide: Firestore,
  useFactory: defaultFirestoreInstanceFactory,
  deps: [[new Optional(), PROVIDED_FIRESTORE_INSTANCES], FirebaseApp]
};
var FirestoreModule = class _FirestoreModule {
  constructor() {
    registerVersion("angularfire", VERSION2.full, "fst");
  }
  static \u0275fac = function FirestoreModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FirestoreModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FirestoreModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DEFAULT_FIRESTORE_INSTANCE_PROVIDER, FIRESTORE_INSTANCES_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirestoreModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_FIRESTORE_INSTANCE_PROVIDER, FIRESTORE_INSTANCES_PROVIDER]
    }]
  }], () => [], null);
})();
function provideFirestore(fn, ...deps) {
  registerVersion("angularfire", VERSION2.full, "fst");
  return makeEnvironmentProviders([DEFAULT_FIRESTORE_INSTANCE_PROVIDER, FIRESTORE_INSTANCES_PROVIDER, {
    provide: PROVIDED_FIRESTORE_INSTANCES,
    useFactory: firestoreInstanceFactory(fn),
    multi: true,
    deps: [
      NgZone,
      Injector,
      \u0275AngularFireSchedulers,
      FirebaseApps,
      // Firestore+Auth work better if Auth is loaded first
      [new Optional(), AuthInstances],
      [new Optional(), AppCheckInstances],
      ...deps
    ]
  }]);
}
var auditTrail2 = \u0275zoneWrap(auditTrail, true);
var collectionSnapshots = \u0275zoneWrap(collection2, true);
var collectionChanges2 = \u0275zoneWrap(collectionChanges, true);
var collectionCount2 = \u0275zoneWrap(collectionCount, true);
var collectionCountSnap2 = \u0275zoneWrap(collectionCountSnap, true);
var collectionData2 = \u0275zoneWrap(collectionData, true);
var docSnapshots = \u0275zoneWrap(doc2, true);
var docData2 = \u0275zoneWrap(docData, true);
var fromRef2 = \u0275zoneWrap(fromRef, true);
var snapToData2 = \u0275zoneWrap(snapToData, true);
var sortedChanges2 = \u0275zoneWrap(sortedChanges, true);
var addDoc2 = \u0275zoneWrap(addDoc, true, 2);
var aggregateFieldEqual2 = \u0275zoneWrap(aggregateFieldEqual, true, 2);
var aggregateQuerySnapshotEqual2 = \u0275zoneWrap(aggregateQuerySnapshotEqual, true, 2);
var and2 = \u0275zoneWrap(and, true, 2);
var clearIndexedDbPersistence2 = \u0275zoneWrap(clearIndexedDbPersistence, true);
var collection3 = \u0275zoneWrap(collection, true, 2);
var collectionGroup2 = \u0275zoneWrap(collectionGroup, true, 2);
var connectFirestoreEmulator2 = \u0275zoneWrap(connectFirestoreEmulator, true);
var deleteAllPersistentCacheIndexes2 = \u0275zoneWrap(deleteAllPersistentCacheIndexes, true);
var deleteDoc2 = \u0275zoneWrap(deleteDoc, true, 2);
var deleteField2 = \u0275zoneWrap(deleteField, true, 2);
var disableNetwork2 = \u0275zoneWrap(disableNetwork, true);
var disablePersistentCacheIndexAutoCreation2 = \u0275zoneWrap(disablePersistentCacheIndexAutoCreation, true);
var doc3 = \u0275zoneWrap(doc, true, 2);
var documentId2 = \u0275zoneWrap(documentId, true, 2);
var enableIndexedDbPersistence2 = \u0275zoneWrap(enableIndexedDbPersistence, true);
var enableMultiTabIndexedDbPersistence2 = \u0275zoneWrap(enableMultiTabIndexedDbPersistence, true);
var enableNetwork2 = \u0275zoneWrap(enableNetwork, true);
var enablePersistentCacheIndexAutoCreation2 = \u0275zoneWrap(enablePersistentCacheIndexAutoCreation, true);
var endAt2 = \u0275zoneWrap(endAt, true, 2);
var endBefore2 = \u0275zoneWrap(endBefore, true, 2);
var getAggregateFromServer2 = \u0275zoneWrap(getAggregateFromServer, true);
var getCountFromServer2 = \u0275zoneWrap(getCountFromServer, true);
var getDoc2 = \u0275zoneWrap(getDoc, true);
var getDocFromCache2 = \u0275zoneWrap(getDocFromCache, true);
var getDocFromServer2 = \u0275zoneWrap(getDocFromServer, true);
var getDocs2 = \u0275zoneWrap(getDocs, true);
var getDocsFromCache2 = \u0275zoneWrap(getDocsFromCache, true);
var getDocsFromServer2 = \u0275zoneWrap(getDocsFromServer, true);
var getFirestore2 = \u0275zoneWrap(getFirestore, true);
var getPersistentCacheIndexManager2 = \u0275zoneWrap(getPersistentCacheIndexManager, true);
var increment2 = \u0275zoneWrap(increment, true, 2);
var initializeFirestore2 = \u0275zoneWrap(initializeFirestore, true);
var limit2 = \u0275zoneWrap(limit, true, 2);
var limitToLast2 = \u0275zoneWrap(limitToLast, true, 2);
var loadBundle2 = \u0275zoneWrap(loadBundle, true);
var namedQuery2 = \u0275zoneWrap(namedQuery, true, 2);
var onSnapshot2 = \u0275zoneWrap(onSnapshot, true);
var onSnapshotsInSync2 = \u0275zoneWrap(onSnapshotsInSync, true);
var or2 = \u0275zoneWrap(or, true, 2);
var orderBy2 = \u0275zoneWrap(orderBy, true, 2);
var query2 = \u0275zoneWrap(query, true, 2);
var queryEqual2 = \u0275zoneWrap(queryEqual, true, 2);
var refEqual2 = \u0275zoneWrap(refEqual, true, 2);
var runTransaction2 = \u0275zoneWrap(runTransaction, true);
var setDoc2 = \u0275zoneWrap(setDoc, true, 2);
var setIndexConfiguration2 = \u0275zoneWrap(setIndexConfiguration, true);
var setLogLevel4 = \u0275zoneWrap(setLogLevel2, true);
var snapshotEqual2 = \u0275zoneWrap(snapshotEqual, true, 2);
var startAfter2 = \u0275zoneWrap(startAfter, true, 2);
var startAt2 = \u0275zoneWrap(startAt, true, 2);
var sum2 = \u0275zoneWrap(sum, true, 2);
var terminate2 = \u0275zoneWrap(terminate, true);
var updateDoc2 = \u0275zoneWrap(updateDoc, true, 2);
var vector2 = \u0275zoneWrap(vector, true, 2);
var waitForPendingWrites2 = \u0275zoneWrap(waitForPendingWrites, true);
var where2 = \u0275zoneWrap(where, true, 2);
var writeBatch2 = \u0275zoneWrap(writeBatch, true, 2);

// src/main.ts
registerLocaleData(es_default);
var _GlobalErrorHandler = class _GlobalErrorHandler {
  handleError(error) {
    const chunkFailedMessage = /Loading chunk .* failed/i;
    const mimeErrorMessage = /Expected a JavaScript-or-Wasm module script/i;
    const errorStr = error?.message || error?.toString() || "";
    if (chunkFailedMessage.test(errorStr) || mimeErrorMessage.test(errorStr)) {
      const lastReload = sessionStorage.getItem("chunk_reload_timestamp");
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 1e4) {
        sessionStorage.setItem("chunk_reload_timestamp", now.toString());
        window.location.reload();
        return;
      }
    }
    console.error("Unhandled Error:", error);
  }
};
_GlobalErrorHandler.\u0275fac = function GlobalErrorHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GlobalErrorHandler)();
};
_GlobalErrorHandler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalErrorHandler, factory: _GlobalErrorHandler.\u0275fac });
var GlobalErrorHandler = _GlobalErrorHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalErrorHandler, [{
    type: Injectable
  }], null, null);
})();
addIcons({
  "alert-circle-outline": alertCircleOutline,
  "save-outline": saveOutline,
  "time-outline": timeOutline,
  "calendar-outline": calendarOutline,
  "checkmark-outline": checkmarkOutline,
  "chevron-back-outline": chevronBackOutline,
  "chevron-forward-outline": chevronForwardOutline,
  "person-outline": personOutline,
  "person": person,
  "close": closeOutline
});
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([authAndSessionInterceptor])),
    { provide: LOCALE_ID, useValue: "es-CL" },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideFirebaseApp(() => initializeApp2(firebaseConfig)),
    provideAuth(() => getAuth2()),
    provideFirestore(() => getFirestore2())
  ]
}).catch((err) => console.error(err));
export {
  GlobalErrorHandler
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.15
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@firebase/app-check/dist/esm/index.esm2017.js:
@firebase/app-check/dist/esm/index.esm2017.js:
@firebase/app-check/dist/esm/index.esm2017.js:
@firebase/app-check/dist/esm/index.esm2017.js:
@firebase/app-check/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app-check/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

rxfire/auth/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

rxfire/firestore/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=main.js.map

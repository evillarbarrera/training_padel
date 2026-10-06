import {
  AlertController,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  addCircleOutline,
  addIcons,
  callOutline,
  cameraOutline,
  cardOutline,
  chevronBackOutline,
  documentTextOutline,
  flashOutline,
  giftOutline,
  informationCircleOutline,
  linkOutline,
  locationOutline,
  logOutOutline,
  mailOutline,
  personOutline,
  qrCodeOutline,
  shareSocialOutline,
  shieldCheckmarkOutline,
  timeOutline,
  trashOutline,
  walletOutline,
  warningOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NavController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  setClassMetadata,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
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

// src/app/pages/perfil/perfil.page.ts
function PerfilPage_ion_select_option_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275property("value", r_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.name);
  }
}
function PerfilPage_ion_select_option_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
  }
}
function PerfilPage_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "h3", 18);
    \u0275\u0275element(2, "ion-icon", 60);
    \u0275\u0275text(3, " Vinculaci\xF3n Mercado Pago (Cobros) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 61)(6, "div", 62)(7, "div", 63);
    \u0275\u0275element(8, "ion-icon", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "h4", 65);
    \u0275\u0275text(11, " VINCULACI\xD3N R\xC1PIDA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 66);
    \u0275\u0275text(13, "Recibe tus cobros autom\xE1ticamente vinculando tu cuenta.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "ion-button", 67);
    \u0275\u0275listener("click", function PerfilPage_div_79_Template_ion_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.vincularMP());
    });
    \u0275\u0275element(15, "ion-icon", 68);
    \u0275\u0275text(16, " VINCULAR CUENTA OFICIAL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 69);
    \u0275\u0275element(18, "ion-icon", 70);
    \u0275\u0275elementStart(19, "span", 71);
    \u0275\u0275text(20, "100% SEGURO Y OFICIAL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 72)(22, "span", 73);
    \u0275\u0275text(23, "o ingresar manualmente");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-item", 21)(26, "ion-label", 22);
    \u0275\u0275text(27, "Mercado Pago Collector ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_div_79_Template_ion_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.profile.mp_collector_id, $event) || (ctx_r5.profile.mp_collector_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(28);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.profile.mp_collector_id);
  }
}
function PerfilPage_ion_spinner_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 76);
  }
}
function PerfilPage_span_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardar Cambios");
    \u0275\u0275elementEnd();
  }
}
var _PerfilPage = class _PerfilPage {
  constructor(mysqlService, navCtrl, toastCtrl, alertCtrl) {
    this.mysqlService = mysqlService;
    this.navCtrl = navCtrl;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.profile = {
      nombre: "",
      usuario: "",
      rol: "",
      telefono: "",
      instagram: "",
      facebook: "",
      foto_perfil: "",
      banco_titular: "",
      banco_rut: "",
      banco_nombre: "",
      banco_tipo_cuenta: "",
      banco_numero_cuenta: "",
      mp_collector_id: ""
    };
    this.direccion = {
      region: "",
      comuna: "",
      calle: "",
      numero_casa: "",
      referencia: ""
    };
    this.regions = [
      { id: "13", name: "Metropolitana de Santiago" },
      { id: "15", name: "Arica y Parinacota" },
      { id: "1", name: "Tarapac\xE1" },
      { id: "2", name: "Antofagasta" },
      { id: "3", name: "Atacama" },
      { id: "4", name: "Coquimbo" },
      { id: "5", name: "Valpara\xEDso" },
      { id: "6", name: "O'Higgins" },
      { id: "7", name: "Maule" },
      { id: "16", name: "\xD1uble" },
      { id: "8", name: "Biob\xEDo" },
      { id: "9", name: "Araucan\xEDa" },
      { id: "14", name: "Los R\xEDos" },
      { id: "10", name: "Los Lagos" },
      { id: "11", name: "Ays\xE9n" },
      { id: "12", name: "Magallanes" }
    ];
    this.allComunas = {
      "13": ["Santiago", "Las Condes", "Providencia", "\xD1u\xF1oa", "Maip\xFA", "Puente Alto", "La Florida", "Vitacura", "Lo Barnechea", "Colina", "Lampa", "San Bernardo", "Pe\xF1alol\xE9n"],
      "15": ["Arica", "Camarones", "Putre", "General Lagos"],
      "1": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Pica", "Huara"],
      "2": ["Antofagasta", "Calama", "Mejillones", "Taltal", "Tocopilla"],
      "3": ["Copiap\xF3", "Vallenar", "Caldera", "Cha\xF1aral", "Huasco"],
      "4": ["La Serena", "Coquimbo", "Ovalle", "Illapel", "Vicu\xF1a", "Salamanca"],
      "5": ["Valpara\xEDso", "Vi\xF1a del Mar", "Conc\xF3n", "Quilpu\xE9", "Villa Alemana", "Limache", "Quillota", "San Antonio", "Los Andes", "San Felipe"],
      "6": ["Rancagua", "Machal\xED", "Rengo", "San Fernando", "Pichilemu", "Santa Cruz"],
      "7": ["Talca", "Curic\xF3", "Linares", "Constituci\xF3n", "Cauquenes", "Parral"],
      "16": ["Chill\xE1n", "Chill\xE1n Viejo", "San Carlos", "Bulnes", "Yungay"],
      "8": ["Concepci\xF3n", "Talcahuano", "San Pedro de la Paz", "Chiguayante", "Hualp\xE9n", "Los \xC1ngeles", "Coronel", "Lota", "Tom\xE9", "Penco"],
      "9": ["Temuco", "Padre Las Casas", "Villarrica", "Puc\xF3n", "Angol", "Victoria", "Lautaro"],
      "14": ["Valdivia", "La Uni\xF3n", "R\xEDo Bueno", "Panguipulli", "Paillaco", "Mariquina"],
      "10": ["Puerto Montt", "Puerto Varas", "Osorno", "Castro", "Ancud", "Quell\xF3n", "Frutillar"],
      "11": ["Coyhaique", "Puerto Ays\xE9n", "Chile Chico", "Cochrane"],
      "12": ["Punta Arenas", "Puerto Natales", "Porvenir", "Cabo de Hornos"]
    };
    this.filteredComunas = [];
    this.loading = false;
    this.userId = Number(localStorage.getItem("userId"));
    addIcons({
      personOutline,
      cameraOutline,
      shareSocialOutline,
      locationOutline,
      chevronBackOutline,
      mailOutline,
      callOutline,
      cardOutline,
      walletOutline,
      informationCircleOutline,
      flashOutline,
      linkOutline,
      shieldCheckmarkOutline,
      trashOutline,
      warningOutline,
      logOutOutline,
      documentTextOutline,
      giftOutline,
      addCircleOutline,
      timeOutline,
      qrCodeOutline
    });
  }
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile(event) {
    if (!this.userId)
      return;
    this.mysqlService.getPerfil(this.userId).subscribe({
      next: (res) => {
        if (res.success) {
          const p1 = res.user.foto_perfil;
          const p2 = res.user.foto;
          let fotoRaw = p1 || p2;
          let finalFoto = this.getProfileImage(fotoRaw);
          this.profile = __spreadProps(__spreadValues(__spreadValues({}, this.profile), res.user), { foto_perfil: finalFoto });
          if (res.direccion) {
            this.direccion = __spreadValues({}, res.direccion);
            this.updateComunas(true);
          }
        }
        if (event)
          event.target.complete();
      },
      error: (err) => {
        console.error("Error loading profile:", err);
        if (event)
          event.target.complete();
      }
    });
  }
  handleRefresh(event) {
    this.loadProfile(event);
  }
  updateComunas(keepComuna = false) {
    const selectedRegion = this.regions.find((r) => r.name === this.direccion.region);
    if (selectedRegion) {
      this.filteredComunas = this.allComunas[selectedRegion.id] || [];
      if (!keepComuna) {
        this.direccion.comuna = "";
      }
    } else {
      this.filteredComunas = [];
    }
  }
  saveProfile() {
    return __async(this, null, function* () {
      this.loading = true;
      const payload = __spreadValues({
        user_id: this.userId,
        nombre: this.profile.nombre,
        telefono: this.profile.telefono,
        instagram: this.profile.instagram,
        facebook: this.profile.facebook,
        foto_perfil: this.profile.foto_perfil,
        categoria: this.profile.categoria || "Cuarta",
        descripcion: this.profile.descripcion || "",
        banco_titular: this.profile.banco_titular || "",
        banco_rut: this.profile.banco_rut || "",
        banco_nombre: this.profile.banco_nombre || "",
        banco_tipo_cuenta: this.profile.banco_tipo_cuenta || "",
        banco_numero_cuenta: this.profile.banco_numero_cuenta || "",
        mp_collector_id: this.profile.mp_collector_id || ""
      }, this.direccion);
      this.mysqlService.updatePerfil(payload).subscribe({
        next: (res) => __async(this, null, function* () {
          this.loading = false;
          if (res.success) {
            const toast = yield this.toastCtrl.create({
              message: "\u2705 Perfil actualizado correctamente",
              duration: 2e3,
              color: "dark"
            });
            toast.present();
          }
        }),
        error: (err) => __async(this, null, function* () {
          this.loading = false;
          console.error("Error updating profile:", err);
          const toast = yield this.toastCtrl.create({
            message: "\u274C Error al actualizar el perfil",
            duration: 2e3,
            color: "danger"
          });
          toast.present();
        })
      });
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.uploadPhoto(file);
    }
  }
  uploadPhoto(file) {
    this.loading = true;
    this.mysqlService.subirFoto(this.userId, file).subscribe({
      next: (res) => __async(this, null, function* () {
        this.loading = false;
        if (res.success) {
          localStorage.setItem("userFoto", res.foto_url);
          localStorage.setItem("foto_perfil", res.foto_url);
          this.profile.foto_perfil = this.getProfileImage(res.foto_url);
          const toast = yield this.toastCtrl.create({
            message: "\u2705 Foto de perfil actualizada con \xE9xito",
            duration: 2500,
            color: "dark",
            position: "bottom"
          });
          yield toast.present();
        } else {
          const toast = yield this.toastCtrl.create({
            message: "\u274C Error al guardar la foto de perfil",
            duration: 2500,
            color: "danger",
            position: "bottom"
          });
          yield toast.present();
        }
      }),
      error: (err) => __async(this, null, function* () {
        this.loading = false;
        console.error("Error uploading photo:", err);
        const toast = yield this.toastCtrl.create({
          message: "\u274C Error al subir la foto de perfil",
          duration: 2500,
          color: "danger",
          position: "bottom"
        });
        yield toast.present();
      })
    });
  }
  vincularMP() {
    const clientId = "1989199016593068";
    const redirectUri = encodeURIComponent("https://api.padelmanager.cl/pagos/mp_callback.php");
    const authUrl = `https://auth.mercadopago.cl/authorization?client_id=${clientId}&response_type=code&platform_id=mp&redirect_uri=${redirectUri}&state=${this.userId}`;
    window.open(authUrl, "_system");
  }
  goBack() {
    this.navCtrl.back();
  }
  eliminarCuenta() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "\xBFEliminar Cuenta?",
        subHeader: "Esta acci\xF3n es definitiva",
        message: "Se enviar\xE1 una solicitud para borrar todos tus datos personales de nuestra base de datos. \xBFDeseas continuar?",
        buttons: [
          {
            text: "Cancelar",
            role: "cancel",
            cssClass: "secondary"
          },
          {
            text: "S\xED, Eliminar",
            role: "destructive",
            handler: () => {
              window.open(`https://api.padelmanager.cl/delete-account?user_id=${this.userId}`, "_system");
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  logout() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Cerrar Sesi\xF3n",
        message: "\xBFEst\xE1s seguro que deseas salir?",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Salir",
            handler: () => {
              localStorage.clear();
              this.navCtrl.navigateRoot("/login");
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  openPrivacy() {
    window.open("https://api.padelmanager.cl/prd/privacy.html", "_system");
  }
  openTerms() {
    window.open("https://api.padelmanager.cl/prd/terms.html", "_system");
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
_PerfilPage.\u0275fac = function PerfilPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PerfilPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController));
};
_PerfilPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilPage, selectors: [["app-perfil"]], decls: 111, vars: 21, consts: [["fileInput", ""], [1, "perfil-content"], ["slot", "fixed", 3, "ionRefresh"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content-wrapper"], [1, "avatar-circle", 3, "click"], ["alt", "Avatar", 3, "error", "src"], [1, "edit-overlay-small"], ["name", "camera-outline"], [1, "header-text"], [1, "welcome-pre"], [1, "header-title"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "dashboard-container"], [1, "role-section", "animate-pop"], [1, "role-badge"], [1, "section-card", "animate-up", "delay-1"], [1, "section-title"], ["name", "person-outline"], [1, "nike-input-group"], ["lines", "none", 1, "nike-item"], ["position", "stacked"], ["placeholder", "Tu nombre", 3, "ngModelChange", "ngModel"], [2, "opacity", "0.7", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "+56 9 ...", 3, "ngModelChange", "ngModel"], [1, "section-card", "animate-up", "delay-2"], ["name", "share-social-outline"], ["placeholder", "@usuario", 3, "ngModelChange", "ngModel"], ["placeholder", "Perfil o p\xE1gina", 3, "ngModelChange", "ngModel"], [1, "section-card", "animate-up", "delay-3"], ["name", "location-outline"], ["placeholder", "Selecciona regi\xF3n", "interface", "action-sheet", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Selecciona comuna", "interface", "action-sheet", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "Ejem: Av. Providencia", 3, "ngModelChange", "ngModel"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "10px"], ["placeholder", "123", 3, "ngModelChange", "ngModel"], ["placeholder", "Depto, Block...", 3, "ngModelChange", "ngModel"], ["class", "section-card animate-up delay-4", 4, "ngIf"], [1, "section-card", "animate-up", "delay-4", 2, "border", "2px dashed #fee2e2", "background", "#fffcfc"], [1, "section-title", 2, "color", "#ef4444"], ["name", "warning-outline"], [2, "font-size", "13px", "color", "#64748b", "margin-bottom", "12px", "line-height", "1.4"], ["mode", "ios", "expand", "block", "color", "danger", "fill", "outline", 2, "--border-radius", "12px", "font-weight", "700", "height", "45px", "font-size", "13px", 3, "click"], ["name", "trash-outline", "slot", "start"], [1, "section-card", "animate-up", "delay-4"], ["name", "information-circle-outline"], ["lines", "none", "detail", "true", 1, "nike-item", 3, "click"], ["name", "shield-checkmark-outline", "slot", "start", "color", "primary"], ["name", "document-text-outline", "slot", "start", "color", "primary"], ["expand", "block", "fill", "clear", "color", "medium", 1, "logout-btn", "animate-up", "delay-4", 3, "click"], ["name", "log-out-outline", "slot", "start"], ["expand", "block", 1, "save-btn", "animate-up", "delay-4", 3, "click", "disabled"], ["name", "crescent", 4, "ngIf"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "back-fab", 3, "click"], ["name", "chevron-back-outline"], [3, "value"], ["name", "wallet-outline"], [1, "mp-connect-mobile-container", 2, "background", "#f8fafc", "border", "1px solid #009ee3", "border-left", "5px solid #009ee3", "padding", "18px", "border-radius", "12px", "margin-bottom", "20px"], [2, "display", "flex", "gap", "12px", "align-items", "center", "margin-bottom", "15px"], [2, "background", "#009ee3", "color", "white", "width", "36px", "height", "36px", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0", "box-shadow", "0 4px 8px rgba(0, 158, 227, 0.2)"], ["name", "flash-outline", 2, "font-size", "18px"], [2, "margin", "0", "font-size", "13px", "font-weight", "900", "color", "#111", "text-transform", "uppercase", "letter-spacing", "0.5px"], [2, "margin", "2px 0 0 0", "font-size", "12px", "color", "#64748b", "line-height", "1.3", "font-weight", "600"], ["mode", "ios", "expand", "block", 2, "--background", "#009ee3", "--border-radius", "10px", "font-weight", "800", "height", "50px", "margin", "0", "font-size", "13px", "letter-spacing", "0.5px", "--box-shadow", "0 4px 10px rgba(0, 158, 227, 0.2)", 3, "click"], ["name", "link-outline", "slot", "start", 2, "font-size", "18px"], [2, "text-align", "center", "margin-top", "12px", "display", "flex", "align-items", "center", "justify-content", "center", "gap", "5px"], ["name", "shield-checkmark-outline", 2, "color", "#10b981", "font-size", "13px"], [2, "font-size", "10px", "color", "#94a3b8", "font-weight", "800", "text-transform", "uppercase"], [2, "text-align", "center", "margin", "20px 0", "position", "relative"], [2, "background", "#fff", "padding", "0 10px", "color", "#94a3b8", "font-size", "11px", "font-weight", "600", "position", "relative", "z-index", "1", "text-transform", "uppercase"], [2, "border-top", "1px dashed #e2e8f0", "position", "absolute", "top", "8px", "width", "100%", "z-index", "0"], ["placeholder", "Ej: 123456789", 3, "ngModelChange", "ngModel"], ["name", "crescent"]], template: function PerfilPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 1)(1, "ion-refresher", 2);
    \u0275\u0275listener("ionRefresh", function PerfilPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleRefresh($event));
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "div", 4);
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
    \u0275\u0275listener("click", function PerfilPage_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r2 = \u0275\u0275reference(16);
      return \u0275\u0275resetView(fileInput_r2.click());
    });
    \u0275\u0275elementStart(7, "img", 7);
    \u0275\u0275listener("error", function PerfilPage_Template_img_error_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onImgError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275element(9, "ion-icon", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "p", 11);
    \u0275\u0275text(12, "GESTIONAR MI CUENTA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h1", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "input", 13, 0);
    \u0275\u0275listener("change", function PerfilPage_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "span", 16);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "h3", 18);
    \u0275\u0275element(23, "ion-icon", 19);
    \u0275\u0275text(24, " Datos Personales ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 20)(26, "ion-item", 21)(27, "ion-label", 22);
    \u0275\u0275text(28, "Nombre Completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ion-input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.nombre, $event) || (ctx.profile.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ion-item", 21)(31, "ion-label", 22);
    \u0275\u0275text(32, "Email (Usuario)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.usuario, $event) || (ctx.profile.usuario = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ion-item", 21)(35, "ion-label", 22);
    \u0275\u0275text(36, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ion-input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.telefono, $event) || (ctx.profile.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 26)(39, "h3", 18);
    \u0275\u0275element(40, "ion-icon", 27);
    \u0275\u0275text(41, " Redes Sociales ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 20)(43, "ion-item", 21)(44, "ion-label", 22);
    \u0275\u0275text(45, "Instagram");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ion-input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.instagram, $event) || (ctx.profile.instagram = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "ion-item", 21)(48, "ion-label", 22);
    \u0275\u0275text(49, "Facebook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ion-input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.facebook, $event) || (ctx.profile.facebook = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 30)(52, "h3", 18);
    \u0275\u0275element(53, "ion-icon", 31);
    \u0275\u0275text(54, " Direcci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 20)(56, "ion-item", 21)(57, "ion-label", 22);
    \u0275\u0275text(58, "Regi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ion-select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_select_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.direccion.region, $event) || (ctx.direccion.region = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function PerfilPage_Template_ion_select_ionChange_59_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateComunas());
    });
    \u0275\u0275template(60, PerfilPage_ion_select_option_60_Template, 2, 2, "ion-select-option", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "ion-item", 21)(62, "ion-label", 22);
    \u0275\u0275text(63, "Comuna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ion-select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.direccion.comuna, $event) || (ctx.direccion.comuna = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(65, PerfilPage_ion_select_option_65_Template, 2, 2, "ion-select-option", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "ion-item", 21)(67, "ion-label", 22);
    \u0275\u0275text(68, "Calle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ion-input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.direccion.calle, $event) || (ctx.direccion.calle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 36)(71, "ion-item", 21)(72, "ion-label", 22);
    \u0275\u0275text(73, "N\xB0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "ion-input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.direccion.numero_casa, $event) || (ctx.direccion.numero_casa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "ion-item", 21)(76, "ion-label", 22);
    \u0275\u0275text(77, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ion-input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_Template_ion_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.direccion.referencia, $event) || (ctx.direccion.referencia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(79, PerfilPage_div_79_Template, 29, 1, "div", 39);
    \u0275\u0275elementStart(80, "div", 40)(81, "h3", 41);
    \u0275\u0275element(82, "ion-icon", 42);
    \u0275\u0275text(83, " Gesti\xF3n de Cuenta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p", 43);
    \u0275\u0275text(85, " Puedes solicitar la eliminaci\xF3n definitiva de tu cuenta y todos tus datos personales. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "ion-button", 44);
    \u0275\u0275listener("click", function PerfilPage_Template_ion_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.eliminarCuenta());
    });
    \u0275\u0275element(87, "ion-icon", 45);
    \u0275\u0275text(88, " Eliminar mi Cuenta ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 46)(90, "h3", 18);
    \u0275\u0275element(91, "ion-icon", 47);
    \u0275\u0275text(92, " Informaci\xF3n Legal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 20)(94, "ion-item", 48);
    \u0275\u0275listener("click", function PerfilPage_Template_ion_item_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openPrivacy());
    });
    \u0275\u0275element(95, "ion-icon", 49);
    \u0275\u0275elementStart(96, "ion-label");
    \u0275\u0275text(97, "Pol\xEDtica de Privacidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "ion-item", 48);
    \u0275\u0275listener("click", function PerfilPage_Template_ion_item_click_98_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openTerms());
    });
    \u0275\u0275element(99, "ion-icon", 50);
    \u0275\u0275elementStart(100, "ion-label");
    \u0275\u0275text(101, "T\xE9rminos y Condiciones");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(102, "ion-button", 51);
    \u0275\u0275listener("click", function PerfilPage_Template_ion_button_click_102_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.logout());
    });
    \u0275\u0275element(103, "ion-icon", 52);
    \u0275\u0275text(104, " Cerrar Sesi\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ion-button", 53);
    \u0275\u0275listener("click", function PerfilPage_Template_ion_button_click_105_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveProfile());
    });
    \u0275\u0275template(106, PerfilPage_ion_spinner_106_Template, 1, 0, "ion-spinner", 54)(107, PerfilPage_span_107_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "ion-fab", 56)(109, "ion-fab-button", 57);
    \u0275\u0275listener("click", function PerfilPage_Template_ion_fab_button_click_109_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.goBack());
    });
    \u0275\u0275element(110, "ion-icon", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx.profile.foto_perfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.profile.nombre || "Mi Perfil");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.profile.rol);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.usuario);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.telefono);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.instagram);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.facebook);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.direccion.region);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.regions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.direccion.comuna);
    \u0275\u0275property("disabled", !ctx.direccion.region);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.filteredComunas);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.direccion.calle);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.direccion.numero_casa);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.direccion.referencia);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.profile.rol === "administrador" || ctx.profile.rol === "administrador_club" || ctx.profile.rol === "entrenador" || ctx.profile.rol === "entrenador_padel");
    \u0275\u0275advance(26);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  IonSpinner,
  IonSelect,
  IonSelectOption,
  IonRefresher,
  IonRefresherContent,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--nike-bg-color);\n}\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n  background: url(/assets/perfil-bg.jpg) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike[_ngcontent-%COMP%]   .header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n  z-index: 1;\n}\n.header-content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 60px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n  position: relative;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   .edit-overlay-small[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   .edit-overlay-small[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .welcome-pre[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 0 20px 100px;\n  background: white;\n  border-radius: 40px 40px 0 0;\n  position: relative;\n  z-index: 10;\n  margin-top: -30px;\n}\n.role-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 30px;\n  margin-bottom: 30px;\n}\n.role-section[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 35px;\n  padding: 30px;\n  margin-bottom: 25px;\n  border: 1px solid var(--nike-gray-soft);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.section-card[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--nike-gray-medium);\n}\n.section-card[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: black;\n}\n.nike-input-group[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.nike-input-group[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  --background: var(--nike-gray-light);\n  --border-radius: 20px;\n  border: 1px solid transparent;\n  transition: all 0.2s ease;\n}\n.nike-input-group[_ngcontent-%COMP%]   .nike-item.item-has-focus[_ngcontent-%COMP%] {\n  border-color: black;\n  --background: white;\n}\n.nike-input-group[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: var(--nike-gray-medium);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 4px;\n}\n.nike-input-group[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], \n.nike-input-group[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 15px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.nike-input-group[_ngcontent-%COMP%]   .mp-explanation[_ngcontent-%COMP%] {\n  background: #f0f7ff;\n  padding: 15px;\n  border-radius: 15px;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  border: 1px solid #d0e7ff;\n  margin-bottom: 10px;\n}\n.nike-input-group[_ngcontent-%COMP%]   .mp-explanation[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #0084ff;\n  font-size: 20px;\n}\n.nike-input-group[_ngcontent-%COMP%]   .mp-explanation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #333;\n  line-height: 1.4;\n}\n.nike-input-group[_ngcontent-%COMP%]   .mp-help-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--nike-gray-medium);\n  margin: 5px 10px;\n  line-height: 1.4;\n}\n.save-btn[_ngcontent-%COMP%] {\n  --background: black;\n  --color: white;\n  --border-radius: 25px;\n  height: 64px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-top: 30px;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n}\n.save-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.back-fab[_ngcontent-%COMP%] {\n  --background: var(--nike-gray-light);\n  --color: black;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n}\n/*# sourceMappingURL=perfil.page.css.map */"] });
var PerfilPage = _PerfilPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilPage, [{
    type: Component,
    args: [{ selector: "app-perfil", standalone: true, imports: [
      IonContent,
      IonItem,
      IonLabel,
      IonInput,
      IonButton,
      IonIcon,
      IonFab,
      IonFabButton,
      IonSpinner,
      IonSelect,
      IonSelectOption,
      IonRefresher,
      IonRefresherContent,
      CommonModule,
      FormsModule
    ], template: `<ion-content class="perfil-content">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content-wrapper">
      <div class="avatar-circle" (click)="fileInput.click()">
        <img [src]="profile.foto_perfil || 'assets/avatar.png'" (error)="onImgError($event)" alt="Avatar" />
        <div class="edit-overlay-small">
          <ion-icon name="camera-outline"></ion-icon>
        </div>
      </div>
      <div class="header-text">
        <p class="welcome-pre">GESTIONAR MI CUENTA</p>
        <h1 class="header-title">{{ profile.nombre || 'Mi Perfil' }}</h1>
      </div>
    </div>
  </div>

  <input type="file" #fileInput (change)="onFileSelected($event)" accept="image/*" style="display: none">

  <div class="dashboard-container">



    <!-- Role Badge -->
    <div class="role-section animate-pop">
      <span class="role-badge">{{ profile.rol }}</span>
    </div>

    <!-- Datos Personales -->
    <div class="section-card animate-up delay-1">
      <h3 class="section-title">
        <ion-icon name="person-outline"></ion-icon>
        Datos Personales
      </h3>
      <div class="nike-input-group">
        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Nombre Completo</ion-label>
          <ion-input [(ngModel)]="profile.nombre" placeholder="Tu nombre"></ion-input>
        </ion-item>
        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Email (Usuario)</ion-label>
          <ion-input [(ngModel)]="profile.usuario" [disabled]="true" style="opacity: 0.7"></ion-input>
        </ion-item>
        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Tel\xE9fono</ion-label>
          <ion-input [(ngModel)]="profile.telefono" placeholder="+56 9 ..."></ion-input>
        </ion-item>
      </div>
    </div>

    <!-- Redes Sociales -->
    <div class="section-card animate-up delay-2">
      <h3 class="section-title">
        <ion-icon name="share-social-outline"></ion-icon>
        Redes Sociales
      </h3>
      <div class="nike-input-group">
        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Instagram</ion-label>
          <ion-input [(ngModel)]="profile.instagram" placeholder="@usuario"></ion-input>
        </ion-item>
        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Facebook</ion-label>
          <ion-input [(ngModel)]="profile.facebook" placeholder="Perfil o p\xE1gina"></ion-input>
        </ion-item>
      </div>
    </div>

    <!-- Direcci\xF3n -->
    <div class="section-card animate-up delay-3">
      <h3 class="section-title">
        <ion-icon name="location-outline"></ion-icon>
        Direcci\xF3n
      </h3>
      <div class="nike-input-group">
        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Regi\xF3n</ion-label>
          <ion-select [(ngModel)]="direccion.region" placeholder="Selecciona regi\xF3n" (ionChange)="updateComunas()"
            interface="action-sheet">
            <ion-select-option *ngFor="let r of regions" [value]="r.name">{{ r.name }}</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Comuna</ion-label>
          <ion-select [(ngModel)]="direccion.comuna" placeholder="Selecciona comuna" interface="action-sheet"
            [disabled]="!direccion.region">
            <ion-select-option *ngFor="let c of filteredComunas" [value]="c">{{ c }}</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Calle</ion-label>
          <ion-input [(ngModel)]="direccion.calle" placeholder="Ejem: Av. Providencia"></ion-input>
        </ion-item>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <ion-item lines="none" class="nike-item">
            <ion-label position="stacked">N\xB0</ion-label>
            <ion-input [(ngModel)]="direccion.numero_casa" placeholder="123"></ion-input>
          </ion-item>
          <ion-item lines="none" class="nike-item">
            <ion-label position="stacked">Referencia</ion-label>
            <ion-input [(ngModel)]="direccion.referencia" placeholder="Depto, Block..."></ion-input>
          </ion-item>
        </div>
      </div>
    </div>

    <!-- Pagos Mercado Pago (Solo Entrenadores / Admins) -->
    <div class="section-card animate-up delay-4"
      *ngIf="profile.rol === 'administrador' || profile.rol === 'administrador_club' || profile.rol === 'entrenador' || profile.rol === 'entrenador_padel'">
      <h3 class="section-title">
        <ion-icon name="wallet-outline"></ion-icon>
        Vinculaci\xF3n Mercado Pago (Cobros)
      </h3>
      <div class="nike-input-group">

        <!-- MP Connection Box (Full Width Style) -->
        <div class="mp-connect-mobile-container"
          style="background: #f8fafc; border: 1px solid #009ee3; border-left: 5px solid #009ee3; padding: 18px; border-radius: 12px; margin-bottom: 20px;">

          <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 15px;">
            <div
              style="background: #009ee3; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 8px rgba(0, 158, 227, 0.2);">
              <ion-icon name="flash-outline" style="font-size: 18px;"></ion-icon>
            </div>
            <div>
              <h4
                style="margin: 0; font-size: 13px; font-weight: 900; color: #111; text-transform: uppercase; letter-spacing: 0.5px;">
                VINCULACI\xD3N R\xC1PIDA</h4>
              <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b; line-height: 1.3; font-weight: 600;">Recibe
                tus cobros autom\xE1ticamente vinculando tu cuenta.</p>
            </div>
          </div>

          <ion-button (click)="vincularMP()" mode="ios" expand="block"
            style="--background: #009ee3; --border-radius: 10px; font-weight: 800; height: 50px; margin: 0; font-size: 13px; letter-spacing: 0.5px; --box-shadow: 0 4px 10px rgba(0, 158, 227, 0.2);">
            <ion-icon name="link-outline" slot="start" style="font-size: 18px;"></ion-icon>
            VINCULAR CUENTA OFICIAL
          </ion-button>

          <div
            style="text-align: center; margin-top: 12px; display: flex; align-items: center; justify-content: center; gap: 5px;">
            <ion-icon name="shield-checkmark-outline" style="color: #10b981; font-size: 13px;"></ion-icon>
            <span style="font-size: 10px; color: #94a3b8; font-weight: 800; text-transform: uppercase;">100% SEGURO Y
              OFICIAL</span>
          </div>
        </div>


        <div style="text-align: center; margin: 20px 0; position: relative;">
          <span
            style="background: #fff; padding: 0 10px; color: #94a3b8; font-size: 11px; font-weight: 600; position: relative; z-index: 1; text-transform: uppercase;">o
            ingresar manualmente</span>
          <div style="border-top: 1px dashed #e2e8f0; position: absolute; top: 8px; width: 100%; z-index: 0;"></div>
        </div>


        <ion-item lines="none" class="nike-item">
          <ion-label position="stacked">Mercado Pago Collector ID</ion-label>
          <ion-input [(ngModel)]="profile.mp_collector_id" placeholder="Ej: 123456789"></ion-input>
        </ion-item>
      </div>
    </div>



    <!-- Zona de Peligro -->
    <div class="section-card animate-up delay-4" style="border: 2px dashed #fee2e2; background: #fffcfc;">
      <h3 class="section-title" style="color: #ef4444;">
        <ion-icon name="warning-outline"></ion-icon>
        Gesti\xF3n de Cuenta
      </h3>
      <p style="font-size: 13px; color: #64748b; margin-bottom: 12px; line-height: 1.4;">
        Puedes solicitar la eliminaci\xF3n definitiva de tu cuenta y todos tus datos personales.
      </p>
      <ion-button (click)="eliminarCuenta()" mode="ios" expand="block" color="danger" fill="outline"
        style="--border-radius: 12px; font-weight: 700; height: 45px; font-size: 13px;">
        <ion-icon name="trash-outline" slot="start"></ion-icon>
        Eliminar mi Cuenta
      </ion-button>
    </div>

    <!-- Otros enlaces -->
    <div class="section-card animate-up delay-4">
      <h3 class="section-title">
        <ion-icon name="information-circle-outline"></ion-icon>
        Informaci\xF3n Legal
      </h3>
      <div class="nike-input-group">
        <ion-item lines="none" class="nike-item" (click)="openPrivacy()" detail="true">
          <ion-icon name="shield-checkmark-outline" slot="start" color="primary"></ion-icon>
          <ion-label>Pol\xEDtica de Privacidad</ion-label>
        </ion-item>
        <ion-item lines="none" class="nike-item" (click)="openTerms()" detail="true">
          <ion-icon name="document-text-outline" slot="start" color="primary"></ion-icon>
          <ion-label>T\xE9rminos y Condiciones</ion-label>
        </ion-item>
      </div>
    </div>

    <ion-button expand="block" class="logout-btn animate-up delay-4" (click)="logout()" fill="clear" color="medium">
      <ion-icon name="log-out-outline" slot="start"></ion-icon>
      Cerrar Sesi\xF3n
    </ion-button>

    <ion-button expand="block" class="save-btn animate-up delay-4" (click)="saveProfile()" [disabled]="loading">
      <ion-spinner *ngIf="loading" name="crescent"></ion-spinner>
      <span *ngIf="!loading">Guardar Cambios</span>
    </ion-button>

  </div>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="back-fab" (click)="goBack()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>`, styles: ["/* src/app/pages/perfil/perfil.page.scss */\nion-content {\n  --background: var(--nike-bg-color);\n}\n.header-nike {\n  position: relative;\n  height: 250px;\n  background: url(/assets/perfil-bg.jpg) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike .header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n  z-index: 1;\n}\n.header-content-wrapper {\n  position: absolute;\n  bottom: 60px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper .avatar-circle {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n  position: relative;\n}\n.header-content-wrapper .avatar-circle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper .avatar-circle .edit-overlay-small {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n.header-content-wrapper .avatar-circle .edit-overlay-small ion-icon {\n  color: white;\n  font-size: 20px;\n}\n.header-content-wrapper .header-text .welcome-pre {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper .header-text .header-title {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.dashboard-container {\n  padding: 0 20px 100px;\n  background: white;\n  border-radius: 40px 40px 0 0;\n  position: relative;\n  z-index: 10;\n  margin-top: -30px;\n}\n.role-section {\n  display: flex;\n  justify-content: center;\n  padding-top: 30px;\n  margin-bottom: 30px;\n}\n.role-section .role-badge {\n  background: black;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n.section-card {\n  background: white;\n  border-radius: 35px;\n  padding: 30px;\n  margin-bottom: 25px;\n  border: 1px solid var(--nike-gray-soft);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.section-card .section-title {\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--nike-gray-medium);\n}\n.section-card .section-title ion-icon {\n  font-size: 18px;\n  color: black;\n}\n.nike-input-group {\n  display: grid;\n  gap: 18px;\n}\n.nike-input-group .nike-item {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  --background: var(--nike-gray-light);\n  --border-radius: 20px;\n  border: 1px solid transparent;\n  transition: all 0.2s ease;\n}\n.nike-input-group .nike-item.item-has-focus {\n  border-color: black;\n  --background: white;\n}\n.nike-input-group .nike-item ion-label {\n  font-size: 10px;\n  font-weight: 900;\n  color: var(--nike-gray-medium);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 4px;\n}\n.nike-input-group .nike-item ion-input,\n.nike-input-group .nike-item ion-select {\n  font-weight: 800;\n  font-size: 15px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.nike-input-group .mp-explanation {\n  background: #f0f7ff;\n  padding: 15px;\n  border-radius: 15px;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  border: 1px solid #d0e7ff;\n  margin-bottom: 10px;\n}\n.nike-input-group .mp-explanation ion-icon {\n  color: #0084ff;\n  font-size: 20px;\n}\n.nike-input-group .mp-explanation p {\n  margin: 0;\n  font-size: 12px;\n  color: #333;\n  line-height: 1.4;\n}\n.nike-input-group .mp-help-text {\n  font-size: 11px;\n  color: var(--nike-gray-medium);\n  margin: 5px 10px;\n  line-height: 1.4;\n}\n.save-btn {\n  --background: black;\n  --color: white;\n  --border-radius: 25px;\n  height: 64px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-top: 30px;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n}\n.save-btn:active {\n  transform: scale(0.98);\n}\n.back-fab {\n  --background: var(--nike-gray-light);\n  --color: black;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n.animate-up {\n  animation: slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n}\n/*# sourceMappingURL=perfil.page.css.map */\n"] }]
  }], () => [{ type: MysqlService }, { type: NavController }, { type: ToastController }, { type: AlertController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilPage, { className: "PerfilPage", filePath: "src/app/pages/perfil/perfil.page.ts", lineNumber: 76 });
})();
export {
  PerfilPage
};
//# sourceMappingURL=perfil.page-3NCOS2PL.js.map

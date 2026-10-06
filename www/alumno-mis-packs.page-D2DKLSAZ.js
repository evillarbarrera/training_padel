import {
  PackAlumnoService
} from "./chunk-OWACC5B5.js";
import {
  AlertController,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  IonTitle,
  IonToolbar,
  IonicModule,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-LFXGPXMG.js";
import {
  addCircleOutline,
  addIcons,
  checkmarkCircleOutline,
  chevronBackOutline,
  mailOutline,
  peopleOutline,
  personAddOutline,
  ticketOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  FormsModule,
  HostListener,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  SlicePipe,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
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

// src/app/pages/alumno-mis-packs/alumno-mis-packs.page.ts
function AlumnoMisPacksPage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "ion-spinner", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Consultando cr\xE9ditos...");
    \u0275\u0275elementEnd()();
  }
}
function AlumnoMisPacksPage_div_23_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No tienes sesiones disponibles en este momento.");
    \u0275\u0275elementEnd();
  }
}
function AlumnoMisPacksPage_div_23_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "A\xFAn no tienes un historial de packs finalizados.");
    \u0275\u0275elementEnd();
  }
}
function AlumnoMisPacksPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275element(2, "ion-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sigue Entrenando");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AlumnoMisPacksPage_div_23_p_5_Template, 2, 0, "p", 27)(6, AlumnoMisPacksPage_div_23_p_6_Template, 2, 0, "p", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.vistaActual === "activos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vistaActual === "historial");
  }
}
function AlumnoMisPacksPage_div_24_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 46);
  }
}
function AlumnoMisPacksPage_div_24_div_1_div_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invitado_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invitado_r2.nombre.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invitado_r2.nombre);
  }
}
function AlumnoMisPacksPage_div_24_div_1_div_24_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function AlumnoMisPacksPage_div_24_div_1_div_24_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const pack_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirModalInvitacion(pack_r4));
    });
    \u0275\u0275element(1, "ion-icon", 58);
    \u0275\u0275elementEnd();
  }
}
function AlumnoMisPacksPage_div_24_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "ion-icon", 49);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 50)(6, "div", 51)(7, "span", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 53);
    \u0275\u0275text(10, "Yo");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AlumnoMisPacksPage_div_24_div_1_div_24_div_11_Template, 5, 2, "div", 54)(12, AlumnoMisPacksPage_div_24_div_1_div_24_button_12_Template, 2, 0, "button", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pack_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Mi Equipo (", ((pack_r4.invitados == null ? null : pack_r4.invitados.length) || 0) + 1, "/", pack_r4.cantidad_personas, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.jugadorNombre.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", pack_r4.invitados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((pack_r4.invitados == null ? null : pack_r4.invitados.length) || 0) + 1 < pack_r4.cantidad_personas);
  }
}
function AlumnoMisPacksPage_div_24_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "ion-icon", 60);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Pack Completado");
    \u0275\u0275elementEnd()();
  }
}
function AlumnoMisPacksPage_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "h3", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-badge", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AlumnoMisPacksPage_div_24_div_1_div_7_Template, 1, 0, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36)(9, "div", 37)(10, "span", 38);
    \u0275\u0275text(11, "Balance de Clases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 39);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 40)(15, "span", 38);
    \u0275\u0275text(16, "Horario Validez");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 39);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "slice");
    \u0275\u0275pipe(20, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 41)(22, "div", 42);
    \u0275\u0275element(23, "div", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, AlumnoMisPacksPage_div_24_div_1_div_24_Template, 13, 5, "div", 44)(25, AlumnoMisPacksPage_div_24_div_1_div_25_Template, 4, 0, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pack_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("grupal", pack_r4.cantidad_personas > 1)("finalizado", ctx_r0.vistaActual === "historial");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(pack_r4.pack_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("color", pack_r4.cantidad_personas > 1 ? "warning" : "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pack_r4.cantidad_personas > 1 ? "PACK " + pack_r4.cantidad_personas + " JUGADORES" : "INDIVIDUAL", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vistaActual === "activos");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", pack_r4.sesiones_usadas, " / ", pack_r4.sesiones_totales);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pack_r4.rango_horario_inicio ? \u0275\u0275pipeBind3(19, 15, pack_r4.rango_horario_inicio, 0, 5) + " - " + \u0275\u0275pipeBind3(20, 19, pack_r4.rango_horario_fin, 0, 5) : "Sin restricci\xF3n");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", pack_r4.sesiones_usadas / pack_r4.sesiones_totales * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pack_r4.cantidad_personas > 1 && ctx_r0.vistaActual === "activos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vistaActual === "historial");
  }
}
function AlumnoMisPacksPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AlumnoMisPacksPage_div_24_div_1_Template, 26, 23, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.packsVisibles);
  }
}
function AlumnoMisPacksPage_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "ion-button", 62);
    \u0275\u0275listener("click", function AlumnoMisPacksPage_div_25_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(-1));
    });
    \u0275\u0275element(2, "ion-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 62);
    \u0275\u0275listener("click", function AlumnoMisPacksPage_div_25_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(1));
    });
    \u0275\u0275element(6, "ion-icon", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.paginaActual === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r0.paginaActual, " de ", ctx_r0.totalPaginas);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.paginaActual === ctx_r0.totalPaginas);
  }
}
function AlumnoMisPacksPage_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Agregar Compa\xF1ero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 65)(5, "ion-button", 66);
    \u0275\u0275listener("click", function AlumnoMisPacksPage_ng_template_27_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(6, "Cerrar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content", 67)(8, "div", 68);
    \u0275\u0275element(9, "ion-icon", 69);
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Env\xEDa una invitaci\xF3n a tu compa\xF1ero. Debe estar registrado en la App.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-item", 70)(13, "ion-label", 71);
    \u0275\u0275text(14, "Email del Jugador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function AlumnoMisPacksPage_ng_template_27_Template_ion_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.emailInvitado, $event) || (ctx_r0.emailInvitado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-button", 73);
    \u0275\u0275listener("click", function AlumnoMisPacksPage_ng_template_27_Template_ion_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.enviarInvitacion());
    });
    \u0275\u0275text(17, " Enviar Invitaci\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailInvitado);
  }
}
var _AlumnoMisPacksPage = class _AlumnoMisPacksPage {
  onResize(event) {
    this.calcularItemsPorPagina();
  }
  calcularItemsPorPagina() {
    if (window.innerWidth >= 768) {
      this.itemsPorPagina = 9999;
      return;
    }
    const alturaDisponible = window.innerHeight - 300;
    const filas = Math.max(2, Math.floor(alturaDisponible / 160));
    const columnas = window.innerWidth > 768 ? 2 : 1;
    this.itemsPorPagina = filas * columnas;
  }
  constructor(packService, mysqlService, router, toastCtrl, alertCtrl) {
    this.packService = packService;
    this.mysqlService = mysqlService;
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.userId = 0;
    this.jugadorNombre = localStorage.getItem("nombre") || "Usuario";
    this.jugadorFoto = localStorage.getItem("foto_perfil") || "";
    this.fotoPerfil = localStorage.getItem("foto_perfil") || "";
    this.allPacks = [];
    this.packsActivos = [];
    this.packsHistorial = [];
    this.vistaActual = "activos";
    this.isLoading = true;
    this.paginaActual = 1;
    this.itemsPorPagina = 3;
    this.showModalInvitacion = false;
    this.selectedPack = null;
    this.emailInvitado = "";
    addIcons({
      ticketOutline,
      peopleOutline,
      addCircleOutline,
      chevronBackOutline,
      mailOutline,
      personAddOutline,
      checkmarkCircleOutline
    });
  }
  ngOnInit() {
    this.userId = Number(localStorage.getItem("userId"));
    if (!this.userId) {
      this.router.navigate(["/login"]);
      return;
    }
    this.calcularItemsPorPagina();
    this.loadProfile();
    this.loadPacks();
  }
  ionViewWillEnter() {
    const savedFoto = localStorage.getItem("userFoto") || localStorage.getItem("foto_perfil");
    if (savedFoto) {
      this.fotoPerfil = this.getProfileImage(savedFoto);
      this.jugadorFoto = this.fotoPerfil;
    }
    this.loadProfile();
    this.loadPacks();
  }
  loadProfile() {
    this.mysqlService.getPerfil(this.userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.jugadorNombre = res.user.nombre;
          const rawFoto = res.user.foto_perfil || res.user.foto;
          if (rawFoto) {
            localStorage.setItem("userFoto", rawFoto);
            localStorage.setItem("foto_perfil", rawFoto);
            this.fotoPerfil = this.getProfileImage(rawFoto);
            this.jugadorFoto = this.fotoPerfil;
          }
        }
      }
    });
  }
  loadPacks(event) {
    this.isLoading = true;
    this.packService.getMisPacks(this.userId).subscribe({
      next: (res) => {
        this.allPacks = res.data || [];
        this.packsActivos = this.allPacks.filter((p) => Number(p.sesiones_usadas) < Number(p.sesiones_totales));
        this.packsHistorial = this.allPacks.filter((p) => Number(p.sesiones_usadas) >= Number(p.sesiones_totales));
        this.isLoading = false;
        this.paginaActual = 1;
        if (event)
          event.target.complete();
      },
      error: (err) => {
        console.error("Error cargando packs:", err);
        this.isLoading = false;
        this.mostrarToast("Error al cargar tus packs", "danger");
        if (event)
          event.target.complete();
      }
    });
  }
  handleRefresh(event) {
    this.loadPacks(event);
    this.loadProfile();
  }
  get packsVisibles() {
    const source = this.vistaActual === "activos" ? this.packsActivos : this.packsHistorial;
    if (!source)
      return [];
    const start = (this.paginaActual - 1) * this.itemsPorPagina;
    return source.slice(start, start + this.itemsPorPagina);
  }
  get totalPaginas() {
    const source = this.vistaActual === "activos" ? this.packsActivos : this.packsHistorial;
    return Math.ceil(source.length / this.itemsPorPagina);
  }
  cambiarPagina(delta) {
    this.paginaActual += delta;
  }
  onSegmentChange(event) {
    this.vistaActual = event.detail.value;
    this.paginaActual = 1;
  }
  abrirModalInvitacion(pack) {
    this.selectedPack = pack;
    this.emailInvitado = "";
    this.showModalInvitacion = true;
  }
  cerrarModal() {
    this.showModalInvitacion = false;
    this.selectedPack = null;
  }
  enviarInvitacion() {
    if (!this.emailInvitado || !this.emailInvitado.includes("@")) {
      this.mostrarToast("Ingresa un email v\xE1lido", "warning");
      return;
    }
    this.packService.invitarJugador(this.selectedPack.pack_jugador_id, this.emailInvitado).subscribe({
      next: (res) => {
        this.mostrarToast("\u2705 Invitaci\xF3n enviada con \xE9xito", "success");
        this.cerrarModal();
        this.loadPacks();
      },
      error: (err) => {
        console.error("Error al invitar:", err);
        const msg = err.error?.error || "No se pudo enviar la invitaci\xF3n";
        this.mostrarToast("\u274C " + msg, "danger");
      }
    });
  }
  mostrarToast(mensaje, color = "primary") {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: mensaje,
        duration: 2500,
        position: "bottom",
        color
      });
      toast.present();
    });
  }
  irAComprar() {
    this.router.navigate(["/pack-alumno"]);
  }
  goBack() {
    this.router.navigate(["/jugador-home"]);
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
_AlumnoMisPacksPage.\u0275fac = function AlumnoMisPacksPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlumnoMisPacksPage)(\u0275\u0275directiveInject(PackAlumnoService), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController));
};
_AlumnoMisPacksPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlumnoMisPacksPage, selectors: [["app-alumno-mis-packs"]], hostBindings: function AlumnoMisPacksPage_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function AlumnoMisPacksPage_resize_HostBindingHandler($event) {
      return ctx.onResize($event);
    }, \u0275\u0275resolveWindow);
  }
}, decls: 31, vars: 8, consts: [["slot", "fixed", 3, "ionRefresh"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content-wrapper"], [1, "avatar-circle"], ["alt", "Avatar", 3, "error", "src"], [1, "header-text"], [1, "welcome-pre"], [1, "header-title"], [1, "main-container", "animate-up"], [1, "segment-wrapper"], ["mode", "ios", 1, "nike-segment", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "activos"], ["value", "historial"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "packs-grid", 4, "ngIf"], ["class", "pagination-controls", 4, "ngIf"], [1, "invitation-modal", 3, "didDismiss", "isOpen"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], [1, "loading-state"], ["name", "crescent"], [1, "empty-state"], [1, "empty-icon-box"], ["name", "ticket-outline"], [4, "ngIf"], [1, "packs-grid"], ["class", "nike-card pack-card animate-pop", 3, "grupal", "finalizado", 4, "ngFor", "ngForOf"], [1, "nike-card", "pack-card", "animate-pop"], [1, "card-header"], [1, "pack-name-section"], [1, "pack-name"], ["mode", "ios", 3, "color"], ["class", "status-indicator-dot", 4, "ngIf"], [1, "card-body"], [1, "info-row"], [1, "label"], [1, "val"], [1, "info-row", 2, "margin-bottom", "15px"], [1, "progress-container"], [1, "progress-bar-bg"], [1, "progress-bar-fill"], ["class", "team-management", 4, "ngIf"], ["class", "finalized-info", 4, "ngIf"], [1, "status-indicator-dot"], [1, "team-management"], [1, "team-title"], ["name", "people-outline"], [1, "members-chips"], [1, "member-chip", "me"], [1, "avatar"], [1, "name"], ["class", "member-chip guest", 4, "ngFor", "ngForOf"], ["class", "add-member-chip", 3, "click", 4, "ngIf"], [1, "member-chip", "guest"], [1, "add-member-chip", 3, "click"], ["name", "person-add-outline"], [1, "finalized-info"], ["name", "checkmark-circle-outline"], [1, "pagination-controls"], ["fill", "clear", 3, "click", "disabled"], [1, "page-indicator"], ["name", "chevron-forward-outline"], ["slot", "end"], [3, "click"], [1, "ion-padding"], [1, "modal-intro"], ["name", "mail-outline"], ["lines", "none", 1, "nike-input-item"], ["position", "stacked"], ["type", "email", "placeholder", "ejemplo@correo.com", 3, "ngModelChange", "ngModel"], ["expand", "block", 1, "nike-btn-large", "ion-margin-top", 3, "click"]], template: function AlumnoMisPacksPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-refresher", 0);
    \u0275\u0275listener("ionRefresh", function AlumnoMisPacksPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "img", 5);
    \u0275\u0275listener("error", function AlumnoMisPacksPage_Template_img_error_7_listener($event) {
      return ctx.onImgError($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "p", 7);
    \u0275\u0275text(10, "MIS CR\xC9DITOS Y EQUIPO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "ion-segment", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AlumnoMisPacksPage_Template_ion_segment_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.vistaActual, $event) || (ctx.vistaActual = $event);
      return $event;
    });
    \u0275\u0275listener("ionChange", function AlumnoMisPacksPage_Template_ion_segment_ionChange_15_listener($event) {
      return ctx.onSegmentChange($event);
    });
    \u0275\u0275elementStart(16, "ion-segment-button", 12)(17, "ion-label");
    \u0275\u0275text(18, "ACTIVOS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-segment-button", 13)(20, "ion-label");
    \u0275\u0275text(21, "HISTORIAL");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(22, AlumnoMisPacksPage_div_22_Template, 4, 0, "div", 14)(23, AlumnoMisPacksPage_div_23_Template, 7, 2, "div", 15)(24, AlumnoMisPacksPage_div_24_Template, 2, 1, "div", 16)(25, AlumnoMisPacksPage_div_25_Template, 7, 4, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-modal", 18);
    \u0275\u0275listener("didDismiss", function AlumnoMisPacksPage_Template_ion_modal_didDismiss_26_listener() {
      return ctx.cerrarModal();
    });
    \u0275\u0275template(27, AlumnoMisPacksPage_ng_template_27_Template, 18, 1, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-fab", 19)(29, "ion-fab-button", 20);
    \u0275\u0275listener("click", function AlumnoMisPacksPage_Template_ion_fab_button_click_29_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(30, "ion-icon", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx.fotoPerfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.jugadorNombre);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.vistaActual);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.packsVisibles.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.packsVisibles.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.totalPaginas > 1);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showModalInvitacion);
  }
}, dependencies: [IonicModule, IonBadge, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRefresher, IonRefresherContent, IonSegment, IonSegmentButton, IonSpinner, IonTitle, IonToolbar, IonModal, SelectValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, SlicePipe], styles: ['\n\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n  background: url("./media/mod-packs.jpg") no-repeat center center/cover;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike[_ngcontent-%COMP%]   .header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n  z-index: 1;\n}\n.header-content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 65px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .welcome-pre[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.main-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: -30px;\n  background: #f8f9fa;\n  border-radius: 30px 30px 0 0;\n  min-height: calc(100vh - 150px);\n  position: relative;\n  z-index: 2;\n}\n.segment-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  padding: 0 5px;\n}\n.segment-wrapper[_ngcontent-%COMP%]   .nike-segment[_ngcontent-%COMP%] {\n  --background: #fff;\n  background: #fff;\n  border-radius: 20px;\n  padding: 5px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.segment-wrapper[_ngcontent-%COMP%]   .nike-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: #000;\n  --color: #888;\n  --color-checked: #fff;\n  --border-radius: 15px;\n  font-weight: 850;\n  min-height: 44px;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n}\n.packs-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.nike-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.nike-card.grupal[_ngcontent-%COMP%] {\n  border-left: 5px solid #ffc107;\n}\n.nike-card.finalizado[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  filter: grayscale(0.5);\n  border-left: none;\n}\n.nike-card.finalizado[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%] {\n  background: #888 !important;\n}\n.nike-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.nike-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .pack-name-section[_ngcontent-%COMP%]   .pack-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  margin: 0;\n  color: #111;\n  letter-spacing: -0.5px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-indicator-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #ccff00;\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(204, 255, 0, 0.6);\n  margin-top: 5px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #111;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-bg[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #eee;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-bg[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #000,\n      #444);\n  border-radius: 10px;\n  transition: width 1s ease-out;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%] {\n  border-top: 1px dashed #eee;\n  padding-top: 15px;\n  margin-top: 15px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .team-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #444;\n  margin-bottom: 12px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .team-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%], \n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .add-member-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px 5px 5px;\n  background: #f0f0f0;\n  border-radius: 30px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], \n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .add-member-chip[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: #000;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 900;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], \n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .add-member-chip[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #111;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .member-chip.me[_ngcontent-%COMP%], \n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .add-member-chip.me[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .member-chip.me[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], \n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .add-member-chip.me[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #000;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .member-chip.me[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], \n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .add-member-chip.me[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .add-member-chip[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  justify-content: center;\n  background: #fff;\n  border: 2px dashed #ccc;\n  color: #999;\n  transition: all 0.2s;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-management[_ngcontent-%COMP%]   .members-chips[_ngcontent-%COMP%]   .add-member-chip[_ngcontent-%COMP%]:active {\n  border-color: #000;\n  color: #000;\n  transform: scale(0.95);\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .finalized-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 15px;\n  border-top: 1px solid #eee;\n  margin-top: 15px;\n  color: #22c55e;\n  font-weight: 800;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.nike-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .finalized-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 30px;\n  padding: 10px 0;\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #000;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 36px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 40px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background: #fff;\n  border-radius: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #ddd;\n  margin-bottom: 0;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: #111;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 30px;\n}\n.nike-btn[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 14px;\n  height: 50px;\n}\n.nike-btn-large[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 15px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.invitation-modal[_ngcontent-%COMP%] {\n  --height: 400px;\n  --border-radius: 30px 30px 0 0;\n  --align-items: flex-end;\n}\n.invitation-modal[_ngcontent-%COMP%]   .modal-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 20px;\n}\n.invitation-modal[_ngcontent-%COMP%]   .modal-intro[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #000;\n  margin-bottom: 15px;\n}\n.invitation-modal[_ngcontent-%COMP%]   .modal-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #444;\n  line-height: 1.4;\n}\n.invitation-modal[_ngcontent-%COMP%]   .nike-input-item[_ngcontent-%COMP%] {\n  --background: #f5f5f5;\n  --border-radius: 15px;\n  --padding-start: 15px;\n  margin-bottom: 20px;\n}\n.invitation-modal[_ngcontent-%COMP%]   .nike-input-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  color: #666;\n  margin-bottom: 8px !important;\n  display: block;\n}\n.invitation-modal[_ngcontent-%COMP%]   .nike-input-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  font-weight: 600;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n.animate-pop[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: #000;\n  --background-activated: #333;\n  --color: #fff;\n  --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px 0;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=alumno-mis-packs.page.css.map */'] });
var AlumnoMisPacksPage = _AlumnoMisPacksPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlumnoMisPacksPage, [{
    type: Component,
    args: [{ selector: "app-alumno-mis-packs", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: `<ion-content>
    <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <!-- Nike Hero Header (Matching Mob Theme) -->
    <div class="header-nike">
        <div class="header-overlay"></div>
        <div class="header-content-wrapper">
            <div class="avatar-circle">
                <img [src]="fotoPerfil || 'assets/avatar.png'" (error)="onImgError($event)" alt="Avatar" />
            </div>
            <div class="header-text">
                <p class="welcome-pre">MIS CR\xC9DITOS Y EQUIPO</p>
                <h1 class="header-title">{{ jugadorNombre }}</h1>
            </div>
        </div>
    </div>

    <div class="main-container animate-up">

        <!-- Tabs Selector -->
        <div class="segment-wrapper">
            <ion-segment [(ngModel)]="vistaActual" (ionChange)="onSegmentChange($event)" mode="ios"
                class="nike-segment">
                <ion-segment-button value="activos">
                    <ion-label>ACTIVOS</ion-label>
                </ion-segment-button>
                <ion-segment-button value="historial">
                    <ion-label>HISTORIAL</ion-label>
                </ion-segment-button>
            </ion-segment>
        </div>

        <!-- Loading -->
        <div *ngIf="isLoading" class="loading-state">
            <ion-spinner name="crescent"></ion-spinner>
            <p>Consultando cr\xE9ditos...</p>
        </div>

        <!-- Empty State -->
        <div *ngIf="!isLoading && packsVisibles.length === 0" class="empty-state">
            <div class="empty-icon-box">
                <ion-icon name="ticket-outline"></ion-icon>
            </div>
            <h3>Sigue Entrenando</h3>
            <p *ngIf="vistaActual === 'activos'">No tienes sesiones disponibles en este momento.</p>
            <p *ngIf="vistaActual === 'historial'">A\xFAn no tienes un historial de packs finalizados.</p>
        </div>

        <!-- Packs Grid -->
        <div class="packs-grid" *ngIf="!isLoading && packsVisibles.length > 0">
            <div class="nike-card pack-card animate-pop" *ngFor="let pack of packsVisibles"
                [class.grupal]="pack.cantidad_personas > 1" [class.finalizado]="vistaActual === 'historial'">

                <div class="card-header">
                    <div class="pack-name-section">
                        <h3 class="pack-name">{{ pack.pack_nombre }}</h3>
                        <ion-badge [color]="pack.cantidad_personas > 1 ? 'warning' : 'success'" mode="ios">
                            {{ pack.cantidad_personas > 1 ? 'PACK ' + pack.cantidad_personas + ' JUGADORES' :
                            'INDIVIDUAL' }}
                        </ion-badge>
                    </div>
                    <div class="status-indicator-dot" *ngIf="vistaActual === 'activos'"></div>
                </div>

                <div class="card-body">
                    <div class="info-row">
                        <span class="label">Balance de Clases</span>
                        <span class="val">{{ pack.sesiones_usadas }} / {{ pack.sesiones_totales }}</span>
                    </div>

                    <div class="info-row" style="margin-bottom: 15px;">
                        <span class="label">Horario Validez</span>
                        <span class="val">{{ pack.rango_horario_inicio ? (pack.rango_horario_inicio | slice:0:5) + ' - '
                            + (pack.rango_horario_fin | slice:0:5) : 'Sin restricci\xF3n' }}</span>
                    </div>

                    <div class="progress-container">
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill"
                                [style.width.%]="(pack.sesiones_usadas / pack.sesiones_totales) * 100"></div>
                        </div>
                    </div>

                    <!-- Team Management only for active multiplayer packs -->
                    <div class="team-management" *ngIf="pack.cantidad_personas > 1 && vistaActual === 'activos'">
                        <div class="team-title">
                            <ion-icon name="people-outline"></ion-icon>
                            <span>Mi Equipo ({{ (pack.invitados?.length || 0) + 1 }}/{{ pack.cantidad_personas
                                }})</span>
                        </div>

                        <div class="members-chips">
                            <div class="member-chip me">
                                <span class="avatar">{{ jugadorNombre.charAt(0) }}</span>
                                <span class="name">Yo</span>
                            </div>

                            <div class="member-chip guest" *ngFor="let invitado of pack.invitados">
                                <span class="avatar">{{ invitado.nombre.charAt(0) }}</span>
                                <span class="name">{{ invitado.nombre }}</span>
                            </div>

                            <button class="add-member-chip"
                                *ngIf="(pack.invitados?.length || 0) + 1 < pack.cantidad_personas"
                                (click)="abrirModalInvitacion(pack)">
                                <ion-icon name="person-add-outline"></ion-icon>
                            </button>
                        </div>
                    </div>

                    <!-- Finalized date for history -->
                    <div class="finalized-info" *ngIf="vistaActual === 'historial'">
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        <span>Pack Completado</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination Controls -->
        <div class="pagination-controls" *ngIf="totalPaginas > 1">
            <ion-button fill="clear" [disabled]="paginaActual === 1" (click)="cambiarPagina(-1)">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </ion-button>
            <span class="page-indicator">P\xE1gina {{ paginaActual }} de {{ totalPaginas }}</span>
            <ion-button fill="clear" [disabled]="paginaActual === totalPaginas" (click)="cambiarPagina(1)">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </ion-button>
        </div>

    </div>

    <!-- Modal Invitaci\xF3n (Ionic Modal style) -->
    <ion-modal [isOpen]="showModalInvitacion" (didDismiss)="cerrarModal()" class="invitation-modal">
        <ng-template>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Agregar Compa\xF1ero</ion-title>
                    <ion-buttons slot="end">
                        <ion-button (click)="cerrarModal()">Cerrar</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <div class="modal-intro">
                    <ion-icon name="mail-outline"></ion-icon>
                    <p>Env\xEDa una invitaci\xF3n a tu compa\xF1ero. Debe estar registrado en la App.</p>
                </div>

                <ion-item lines="none" class="nike-input-item">
                    <ion-label position="stacked">Email del Jugador</ion-label>
                    <ion-input [(ngModel)]="emailInvitado" type="email" placeholder="ejemplo@correo.com"></ion-input>
                </ion-item>

                <ion-button expand="block" (click)="enviarInvitacion()" class="nike-btn-large ion-margin-top">
                    Enviar Invitaci\xF3n
                </ion-button>
            </ion-content>
        </ng-template>
    </ion-modal>

    <!-- Back FAB -->
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
            <ion-icon name="chevron-back-outline"></ion-icon>
        </ion-fab-button>
    </ion-fab>

</ion-content>`, styles: ['/* src/app/pages/alumno-mis-packs/alumno-mis-packs.page.scss */\n.header-nike {\n  position: relative;\n  height: 250px;\n  background: url("./media/mod-packs.jpg") no-repeat center center/cover;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike .header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n  z-index: 1;\n}\n.header-content-wrapper {\n  position: absolute;\n  bottom: 65px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper .avatar-circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper .avatar-circle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper .header-text .welcome-pre {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper .header-text .header-title {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.main-container {\n  padding: 20px;\n  margin-top: -30px;\n  background: #f8f9fa;\n  border-radius: 30px 30px 0 0;\n  min-height: calc(100vh - 150px);\n  position: relative;\n  z-index: 2;\n}\n.segment-wrapper {\n  margin-bottom: 25px;\n  padding: 0 5px;\n}\n.segment-wrapper .nike-segment {\n  --background: #fff;\n  background: #fff;\n  border-radius: 20px;\n  padding: 5px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.segment-wrapper .nike-segment ion-segment-button {\n  --indicator-color: #000;\n  --color: #888;\n  --color-checked: #fff;\n  --border-radius: 15px;\n  font-weight: 850;\n  min-height: 44px;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n}\n.packs-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.nike-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.nike-card.grupal {\n  border-left: 5px solid #ffc107;\n}\n.nike-card.finalizado {\n  opacity: 0.7;\n  filter: grayscale(0.5);\n  border-left: none;\n}\n.nike-card.finalizado .progress-bar-fill {\n  background: #888 !important;\n}\n.nike-card .card-header {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.nike-card .card-header .pack-name-section .pack-name {\n  font-size: 20px;\n  font-weight: 900;\n  margin: 0;\n  color: #111;\n  letter-spacing: -0.5px;\n}\n.nike-card .card-header .status-indicator-dot {\n  width: 10px;\n  height: 10px;\n  background: #ccff00;\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(204, 255, 0, 0.6);\n  margin-top: 5px;\n}\n.nike-card .card-body .info-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.nike-card .card-body .info-row .label {\n  font-size: 12px;\n  color: #666;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.nike-card .card-body .info-row .val {\n  font-size: 14px;\n  font-weight: 800;\n  color: #111;\n}\n.nike-card .card-body .progress-container {\n  margin: 15px 0;\n}\n.nike-card .card-body .progress-container .progress-bar-bg {\n  height: 8px;\n  background: #eee;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.nike-card .card-body .progress-container .progress-bar-bg .progress-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #000,\n      #444);\n  border-radius: 10px;\n  transition: width 1s ease-out;\n}\n.nike-card .card-body .team-management {\n  border-top: 1px dashed #eee;\n  padding-top: 15px;\n  margin-top: 15px;\n}\n.nike-card .card-body .team-management .team-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #444;\n  margin-bottom: 12px;\n}\n.nike-card .card-body .team-management .team-title ion-icon {\n  font-size: 16px;\n}\n.nike-card .card-body .team-management .members-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.nike-card .card-body .team-management .members-chips .member-chip,\n.nike-card .card-body .team-management .members-chips .add-member-chip {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px 5px 5px;\n  background: #f0f0f0;\n  border-radius: 30px;\n}\n.nike-card .card-body .team-management .members-chips .member-chip .avatar,\n.nike-card .card-body .team-management .members-chips .add-member-chip .avatar {\n  width: 24px;\n  height: 24px;\n  background: #000;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 900;\n}\n.nike-card .card-body .team-management .members-chips .member-chip .name,\n.nike-card .card-body .team-management .members-chips .add-member-chip .name {\n  font-size: 11px;\n  font-weight: 700;\n  color: #111;\n}\n.nike-card .card-body .team-management .members-chips .member-chip.me,\n.nike-card .card-body .team-management .members-chips .add-member-chip.me {\n  background: #000;\n  color: #fff;\n}\n.nike-card .card-body .team-management .members-chips .member-chip.me .avatar,\n.nike-card .card-body .team-management .members-chips .add-member-chip.me .avatar {\n  background: #fff;\n  color: #000;\n}\n.nike-card .card-body .team-management .members-chips .member-chip.me .name,\n.nike-card .card-body .team-management .members-chips .add-member-chip.me .name {\n  color: #fff;\n}\n.nike-card .card-body .team-management .members-chips .add-member-chip {\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  justify-content: center;\n  background: #fff;\n  border: 2px dashed #ccc;\n  color: #999;\n  transition: all 0.2s;\n}\n.nike-card .card-body .team-management .members-chips .add-member-chip:active {\n  border-color: #000;\n  color: #000;\n  transform: scale(0.95);\n}\n.nike-card .card-body .finalized-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 15px;\n  border-top: 1px solid #eee;\n  margin-top: 15px;\n  color: #22c55e;\n  font-weight: 800;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.nike-card .card-body .finalized-info ion-icon {\n  font-size: 18px;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 30px;\n  padding: 10px 0;\n}\n.pagination-controls .page-indicator {\n  font-size: 13px;\n  font-weight: 800;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.pagination-controls ion-button {\n  --color: #000;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 36px;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 40px;\n}\n.empty-state .empty-icon-box {\n  width: 100px;\n  height: 100px;\n  background: #fff;\n  border-radius: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n}\n.empty-state .empty-icon-box ion-icon {\n  font-size: 50px;\n  color: #ddd;\n  margin-bottom: 0;\n}\n.empty-state h3 {\n  font-size: 22px;\n  font-weight: 900;\n  color: #111;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 30px;\n}\n.nike-btn {\n  --border-radius: 12px;\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 14px;\n  height: 50px;\n}\n.nike-btn-large {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 15px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.invitation-modal {\n  --height: 400px;\n  --border-radius: 30px 30px 0 0;\n  --align-items: flex-end;\n}\n.invitation-modal .modal-intro {\n  text-align: center;\n  padding-bottom: 20px;\n}\n.invitation-modal .modal-intro ion-icon {\n  font-size: 48px;\n  color: #000;\n  margin-bottom: 15px;\n}\n.invitation-modal .modal-intro p {\n  font-size: 15px;\n  color: #444;\n  line-height: 1.4;\n}\n.invitation-modal .nike-input-item {\n  --background: #f5f5f5;\n  --border-radius: 15px;\n  --padding-start: 15px;\n  margin-bottom: 20px;\n}\n.invitation-modal .nike-input-item ion-label {\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  color: #666;\n  margin-bottom: 8px !important;\n  display: block;\n}\n.invitation-modal .nike-input-item ion-input {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  font-weight: 600;\n}\n.animate-up {\n  animation: slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n.animate-pop {\n  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes popIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.nike-fab {\n  --background: #000;\n  --background-activated: #333;\n  --color: #fff;\n  --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px 0;\n}\n.loading-state p {\n  margin-top: 15px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=alumno-mis-packs.page.css.map */\n'] }]
  }], () => [{ type: PackAlumnoService }, { type: MysqlService }, { type: Router }, { type: ToastController }, { type: AlertController }], { onResize: [{
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlumnoMisPacksPage, { className: "AlumnoMisPacksPage", filePath: "src/app/pages/alumno-mis-packs/alumno-mis-packs.page.ts", lineNumber: 26 });
})();
export {
  AlumnoMisPacksPage
};
//# sourceMappingURL=alumno-mis-packs.page-D2DKLSAZ.js.map

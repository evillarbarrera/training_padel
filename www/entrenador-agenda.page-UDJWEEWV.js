import {
  PadelLoaderComponent
} from "./chunk-UYOLHWN7.js";
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonSpinner
} from "./chunk-5YKSH3EK.js";
import {
  addCircleOutline,
  addIcons,
  chevronBackOutline,
  informationCircleOutline,
  peopleOutline,
  personOutline,
  searchOutline,
  timeOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgForOf,
  NgIf,
  Router,
  SlicePipe,
  UpperCasePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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
import "./chunk-Q3N56TRI.js";

// src/app/pages/entrenador-agenda/entrenador-agenda.page.ts
function EntrenadorAgendaPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function EntrenadorAgendaPage_div_10_Template_div_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionarDia(i_r2));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.diaSeleccionadoIdx === i_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, \u0275\u0275pipeBind3(3, 4, d_r4.nombre, 0, 3)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r4.numero);
  }
}
function EntrenadorAgendaPage_app_padel_loader_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-padel-loader");
  }
}
function EntrenadorAgendaPage_div_18_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "ion-icon", 37);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", e_r6.cupos_ocupados, "/", e_r6.capacidad_maxima, " Alumnos inscritos");
  }
}
function EntrenadorAgendaPage_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26)(8, "div", 27)(9, "span", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h4", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EntrenadorAgendaPage_div_18_div_1_div_15_Template, 4, 2, "div", 31);
    \u0275\u0275elementStart(16, "p", 32);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 33)(19, "ion-button", 34);
    \u0275\u0275listener("click", function EntrenadorAgendaPage_div_18_div_1_Template_ion_button_click_19_listener() {
      const e_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reagendarClase(e_r6));
    });
    \u0275\u0275element(20, "ion-icon", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    \u0275\u0275styleProp("animation-delay", idx_r7 * 0.05 + "s");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(4, 13, e_r6.hora_inicio, 0, 5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", e_r6.duracion_calculada, " MIN");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("grupal", e_r6.tipo === "pack_grupal" || e_r6.tipo === "grupal_template");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r6.tipo === "pack_grupal" || e_r6.tipo === "grupal_template" ? "\u{1F465} GRUPAL" : "\u{1F464} INDIVIDUAL", " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(e_r6.estado == null ? null : e_r6.estado.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r6.estado === "activo" ? "\u{1F525} ACTIVA" : e_r6.estado === "pendiente" ? "\u23F3 PENDIENTE" : e_r6.estado, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r6.jugador_nombre || "Sin alumnos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", e_r6.tipo === "pack_grupal" || e_r6.tipo === "grupal_template");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r6.pack_nombre);
  }
}
function EntrenadorAgendaPage_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275element(2, "ion-icon", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No tienes entrenamientos agendados para este d\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorAgendaPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, EntrenadorAgendaPage_div_18_div_1_Template, 21, 17, "div", 20)(2, EntrenadorAgendaPage_div_18_div_2_Template, 5, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.entrenamientosFiltrados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.entrenamientosFiltrados.length === 0);
  }
}
var _EntrenadorAgendaPage = class _EntrenadorAgendaPage {
  constructor(router, mysqlService) {
    this.router = router;
    this.mysqlService = mysqlService;
    this.entrenadorNombre = "";
    this.avatarUrl = "";
    this.userId = null;
    this.isLoading = true;
    this.busqueda = "";
    this.diaSeleccionadoIdx = 0;
    this.entrenamientos = [];
    this.entrenamientosFiltrados = [];
    this.semana = [];
    addIcons({ searchOutline, addCircleOutline, timeOutline, peopleOutline, personOutline, chevronBackOutline, informationCircleOutline });
  }
  ngOnInit() {
    this.userId = Number(localStorage.getItem("userId"));
    if (!this.userId) {
      this.router.navigate(["/login"]);
      return;
    }
    this.generarSemana();
    this.cargarPerfil();
    this.loadAgenda();
  }
  cargarPerfil() {
    if (!this.userId)
      return;
    this.mysqlService.getPerfil(this.userId).subscribe((res) => {
      if (res.success) {
        this.entrenadorNombre = res.user.nombre;
        this.avatarUrl = res.user.foto_perfil || res.user.foto || "assets/images/placeholder_coach.png";
      }
    });
  }
  loadAgenda() {
    if (!this.userId)
      return;
    this.isLoading = true;
    this.mysqlService.getEntrenadorAgenda(this.userId).subscribe({
      next: (res) => {
        const tradicionales = res.reservas_tradicionales || [];
        const grupales = res.packs_grupales || [];
        this.entrenamientos = [...tradicionales, ...grupales];
        this.filtrarPorDia();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error loadAgenda:", err);
        this.isLoading = false;
      }
    });
  }
  seleccionarDia(idx) {
    this.diaSeleccionadoIdx = idx;
    this.filtrarPorDia();
  }
  filtrarPorDia() {
    const diaSel = this.semana[this.diaSeleccionadoIdx];
    const fechaStr = diaSel.fecha.toISOString().split("T")[0];
    const diaNombre = diaSel.nombre;
    this.entrenamientosFiltrados = this.entrenamientos.filter((e) => {
      if (e.fecha)
        return e.fecha === fechaStr;
      return false;
    }).sort((a, b) => a.hora_inicio.localeCompare(b.hora_inicio));
  }
  mapDia(val) {
    const d = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado", "Domingo"];
    return d[Number(val)] || "";
  }
  volver() {
    this.router.navigate(["/entrenador-home"]);
  }
  reagendarClase(e) {
  }
  cancelarClase(e) {
  }
  irA_Agendar() {
    this.router.navigate(["/entrenador-agendar"]);
  }
  generarSemana() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado", "Domingo"];
    const hoy = /* @__PURE__ */ new Date();
    const currentDay = hoy.getDay();
    const diff = hoy.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
    const monday = new Date(hoy.setDate(diff));
    this.semana = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      this.semana.push({
        nombre: diasSemana[d.getDay()],
        numero: d.getDate(),
        fecha: d
      });
      const today = /* @__PURE__ */ new Date();
      if (d.getDate() === today.getDate() && d.getMonth() === today.getMonth()) {
        this.diaSeleccionadoIdx = i;
      }
    }
  }
};
_EntrenadorAgendaPage.\u0275fac = function EntrenadorAgendaPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EntrenadorAgendaPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MysqlService));
};
_EntrenadorAgendaPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrenadorAgendaPage, selectors: [["app-entrenador-agenda"]], decls: 22, vars: 6, consts: [[1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "header-title"], [1, "header-sub"], [1, "dashboard-container"], [1, "day-selector-scroll"], ["class", "day-bubble", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "sessions-section"], [1, "section-header"], [1, "count-badge"], [4, "ngIf"], ["class", "sessions-list", 4, "ngIf"], ["vertical", "bottom", "horizontal", "start", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], [1, "day-bubble", 3, "click"], [1, "day-name"], [1, "day-number"], [1, "sessions-list"], ["class", "nike-card session-premium-card animate-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "nike-card", "session-premium-card", "animate-up"], [1, "card-time-side"], [1, "time-start"], [1, "duration"], [1, "card-main-info"], [1, "session-type-row"], [1, "type-badge"], [1, "status-badge"], [1, "student-names"], ["class", "enrollment-info", 4, "ngIf"], [1, "pack-name"], [1, "card-actions"], ["fill", "clear", 3, "click"], ["name", "time-outline"], [1, "enrollment-info"], ["name", "people-outline"], [1, "empty-state"], [1, "empty-icon-box"], ["name", "calendar-outline"]], template: function EntrenadorAgendaPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementStart(3, "div", 2)(4, "h1", 3);
    \u0275\u0275text(5, "Agenda Semanal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, "Organiza tus sesiones y alumnos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
    \u0275\u0275template(10, EntrenadorAgendaPage_div_10_Template, 7, 10, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, EntrenadorAgendaPage_app_padel_loader_17_Template, 1, 0, "app-padel-loader", 11)(18, EntrenadorAgendaPage_div_18_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-fab", 13)(20, "ion-fab-button", 14);
    \u0275\u0275listener("click", function EntrenadorAgendaPage_Template_ion_fab_button_click_20_listener() {
      return ctx.volver();
    });
    \u0275\u0275element(21, "ion-icon", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx.semana);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx.semana[ctx.diaSeleccionadoIdx].nombre, " ", ctx.semana[ctx.diaSeleccionadoIdx].numero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.entrenamientosFiltrados.length, " SESIONES");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  IonButton,
  IonIcon,
  IonContent,
  IonFab,
  IonFabButton,
  PadelLoaderComponent,
  UpperCasePipe,
  SlicePipe
], styles: ["\n\n.header-nike[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n  background: url(https://png.pngtree.com/thumb_back/fh260/background/20250423/pngtree-close-up-of-a-tennis-ball-on-padel-court-with-net-image_17217089.jpg) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding: 30px 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.8));\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 20px 20px 100px;\n}\n.day-selector-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  gap: 12px;\n  padding: 10px 5px 25px;\n  scrollbar-width: none;\n}\n.day-selector-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.day-selector-scroll[_ngcontent-%COMP%]   .day-bubble[_ngcontent-%COMP%] {\n  min-width: 60px;\n  height: 80px;\n  background: white;\n  border-radius: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f2f2f7;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.day-selector-scroll[_ngcontent-%COMP%]   .day-bubble[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #8e8e93;\n  margin-bottom: 4px;\n}\n.day-selector-scroll[_ngcontent-%COMP%]   .day-bubble[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #1c1c1e;\n}\n.day-selector-scroll[_ngcontent-%COMP%]   .day-bubble.active[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(var(--ion-color-primary-rgb), 0.3);\n  border-color: var(--ion-color-primary);\n}\n.day-selector-scroll[_ngcontent-%COMP%]   .day-bubble.active[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%], \n.day-selector-scroll[_ngcontent-%COMP%]   .day-bubble.active[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: white;\n}\n.sessions-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 0 5px;\n}\n.sessions-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  margin: 0;\n  color: #1c1c1e;\n}\n.sessions-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #8e8e93;\n  letter-spacing: 0.5px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n.session-premium-card[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 18px;\n  gap: 15px;\n  margin-bottom: 12px;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  border: 1px solid #f2f2f7;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-time-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  min-width: 60px;\n  border-right: 1px solid #f2f2f7;\n  padding-right: 10px;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-time-side[_ngcontent-%COMP%]   .time-start[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1c1c1e;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-time-side[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #aeaeb2;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .session-type-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .session-type-row[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(52, 199, 89, 0.1);\n  color: #34c759;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .session-type-row[_ngcontent-%COMP%]   .type-badge.grupal[_ngcontent-%COMP%] {\n  background: rgba(88, 86, 214, 0.1);\n  color: #5856d6;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .session-type-row[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .session-type-row[_ngcontent-%COMP%]   .status-badge.activo[_ngcontent-%COMP%] {\n  color: #34c759;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .session-type-row[_ngcontent-%COMP%]   .status-badge.pendiente[_ngcontent-%COMP%] {\n  color: #ff9500;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .student-names[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1c1c1e;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .enrollment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #8e8e93;\n  font-weight: 500;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .enrollment-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .pack-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: #aeaeb2;\n  font-style: italic;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.session-premium-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #c7c7cc;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 40px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #f2f2f7;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 15px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #c7c7cc;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #aeaeb2;\n  font-weight: 500;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animateUp 0.5s ease backwards;\n}\n@keyframes _ngcontent-%COMP%_animateUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=entrenador-agenda.page.css.map */"] });
var EntrenadorAgendaPage = _EntrenadorAgendaPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenadorAgendaPage, [{
    type: Component,
    args: [{ selector: "app-entrenador-agenda", standalone: true, imports: [
      CommonModule,
      FormsModule,
      // Ionic
      IonHeader,
      IonButton,
      IonIcon,
      IonInput,
      IonContent,
      IonFab,
      IonFabButton,
      IonAvatar,
      IonBadge,
      IonSpinner,
      PadelLoaderComponent
    ], template: `<ion-content>
  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1 class="header-title">Agenda Semanal</h1>
      <p class="header-sub">Organiza tus sesiones y alumnos</p>
    </div>
  </div>

  <div class="dashboard-container">
    <!-- Day Selector (Bubbles) -->
    <div class="day-selector-scroll">
      <div class="day-bubble" *ngFor="let d of semana; let i = index" [class.active]="diaSeleccionadoIdx === i"
        (click)="seleccionarDia(i)">
        <span class="day-name">{{ d.nombre | slice:0:3 | uppercase }}</span>
        <span class="day-number">{{ d.numero }}</span>
      </div>
    </div>

    <!-- Sessions List -->
    <div class="sessions-section">
      <div class="section-header">
        <h3>{{ semana[diaSeleccionadoIdx].nombre }} {{ semana[diaSeleccionadoIdx].numero }}</h3>
        <span class="count-badge">{{ entrenamientosFiltrados.length }} SESIONES</span>
      </div>

      <app-padel-loader *ngIf="isLoading"></app-padel-loader>

      <div class="sessions-list" *ngIf="!isLoading">
        <div class="nike-card session-premium-card animate-up"
          *ngFor="let e of entrenamientosFiltrados; let idx = index" [style.animation-delay]="(idx * 0.05) + 's'">

          <div class="card-time-side">
            <span class="time-start">{{ e.hora_inicio | slice:0:5 }}</span>
            <span class="duration">{{ e.duracion_calculada }} MIN</span>
          </div>

          <div class="card-main-info">
            <div class="session-type-row">
              <span class="type-badge" [class.grupal]="e.tipo === 'pack_grupal' || e.tipo === 'grupal_template'">
                {{ (e.tipo === 'pack_grupal' || e.tipo === 'grupal_template') ? '\u{1F465} GRUPAL' : '\u{1F464} INDIVIDUAL' }}
              </span>
              <span class="status-badge" [class]="e.estado?.toLowerCase()">
                {{ e.estado === 'activo' ? '\u{1F525} ACTIVA' : (e.estado === 'pendiente' ? '\u23F3 PENDIENTE' : e.estado) }}
              </span>
            </div>

            <h4 class="student-names">{{ e.jugador_nombre || 'Sin alumnos' }}</h4>
            <div class="enrollment-info" *ngIf="e.tipo === 'pack_grupal' || e.tipo === 'grupal_template'">
              <ion-icon name="people-outline"></ion-icon>
              <span>{{ e.cupos_ocupados }}/{{ e.capacidad_maxima }} Alumnos inscritos</span>
            </div>
            <p class="pack-name">{{ e.pack_nombre }}</p>
          </div>

          <div class="card-actions">
            <ion-button fill="clear" (click)="reagendarClase(e)">
              <ion-icon name="time-outline"></ion-icon>
            </ion-button>
          </div>
        </div>

        <div class="empty-state" *ngIf="entrenamientosFiltrados.length === 0">
          <div class="empty-icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <p>No tienes entrenamientos agendados para este d\xEDa.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="start" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="volver()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>`, styles: ["/* src/app/pages/entrenador-agenda/entrenador-agenda.page.scss */\n.header-nike {\n  height: 200px;\n  position: relative;\n  background: url(https://png.pngtree.com/thumb_back/fh260/background/20250423/pngtree-close-up-of-a-tennis-ball-on-padel-court-with-net-image_17217089.jpg) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding: 30px 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.8));\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .header-title {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content .header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.dashboard-container {\n  padding: 20px 20px 100px;\n}\n.day-selector-scroll {\n  display: flex;\n  overflow-x: auto;\n  gap: 12px;\n  padding: 10px 5px 25px;\n  scrollbar-width: none;\n}\n.day-selector-scroll::-webkit-scrollbar {\n  display: none;\n}\n.day-selector-scroll .day-bubble {\n  min-width: 60px;\n  height: 80px;\n  background: white;\n  border-radius: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f2f2f7;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.day-selector-scroll .day-bubble .day-name {\n  font-size: 10px;\n  font-weight: 700;\n  color: #8e8e93;\n  margin-bottom: 4px;\n}\n.day-selector-scroll .day-bubble .day-number {\n  font-size: 18px;\n  font-weight: 800;\n  color: #1c1c1e;\n}\n.day-selector-scroll .day-bubble.active {\n  background: var(--ion-color-primary);\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(var(--ion-color-primary-rgb), 0.3);\n  border-color: var(--ion-color-primary);\n}\n.day-selector-scroll .day-bubble.active .day-name,\n.day-selector-scroll .day-bubble.active .day-number {\n  color: white;\n}\n.sessions-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 0 5px;\n}\n.sessions-section .section-header h3 {\n  font-size: 20px;\n  font-weight: 800;\n  margin: 0;\n  color: #1c1c1e;\n}\n.sessions-section .section-header .count-badge {\n  font-size: 10px;\n  font-weight: 800;\n  color: #8e8e93;\n  letter-spacing: 0.5px;\n}\n.loading-state {\n  padding: 40px;\n  text-align: center;\n}\n.loading-state ion-spinner {\n  --color: var(--ion-color-primary);\n}\n.session-premium-card {\n  display: flex;\n  padding: 18px;\n  gap: 15px;\n  margin-bottom: 12px;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  border: 1px solid #f2f2f7;\n}\n.session-premium-card .card-time-side {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  min-width: 60px;\n  border-right: 1px solid #f2f2f7;\n  padding-right: 10px;\n}\n.session-premium-card .card-time-side .time-start {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1c1c1e;\n}\n.session-premium-card .card-time-side .duration {\n  font-size: 10px;\n  font-weight: 700;\n  color: #aeaeb2;\n}\n.session-premium-card .card-main-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.session-premium-card .card-main-info .session-type-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.session-premium-card .card-main-info .session-type-row .type-badge {\n  font-size: 9px;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(52, 199, 89, 0.1);\n  color: #34c759;\n}\n.session-premium-card .card-main-info .session-type-row .type-badge.grupal {\n  background: rgba(88, 86, 214, 0.1);\n  color: #5856d6;\n}\n.session-premium-card .card-main-info .session-type-row .status-badge {\n  font-size: 9px;\n  font-weight: 800;\n}\n.session-premium-card .card-main-info .session-type-row .status-badge.activo {\n  color: #34c759;\n}\n.session-premium-card .card-main-info .session-type-row .status-badge.pendiente {\n  color: #ff9500;\n}\n.session-premium-card .card-main-info .student-names {\n  margin: 2px 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1c1c1e;\n}\n.session-premium-card .card-main-info .enrollment-info {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #8e8e93;\n  font-weight: 500;\n}\n.session-premium-card .card-main-info .enrollment-info ion-icon {\n  font-size: 14px;\n}\n.session-premium-card .card-main-info .pack-name {\n  margin: 0;\n  font-size: 11px;\n  color: #aeaeb2;\n  font-style: italic;\n}\n.session-premium-card .card-actions {\n  display: flex;\n  align-items: center;\n}\n.session-premium-card .card-actions ion-button {\n  --color: #c7c7cc;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 40px;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state .empty-icon-box {\n  width: 60px;\n  height: 60px;\n  background: #f2f2f7;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 15px;\n}\n.empty-state .empty-icon-box ion-icon {\n  font-size: 24px;\n  color: #c7c7cc;\n}\n.empty-state p {\n  font-size: 14px;\n  color: #aeaeb2;\n  font-weight: 500;\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n.animate-up {\n  animation: animateUp 0.5s ease backwards;\n}\n@keyframes animateUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=entrenador-agenda.page.css.map */\n"] }]
  }], () => [{ type: Router }, { type: MysqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrenadorAgendaPage, { className: "EntrenadorAgendaPage", filePath: "src/app/pages/entrenador-agenda/entrenador-agenda.page.ts", lineNumber: 35 });
})();
export {
  EntrenadorAgendaPage
};
//# sourceMappingURL=entrenador-agenda.page-UDJWEEWV.js.map

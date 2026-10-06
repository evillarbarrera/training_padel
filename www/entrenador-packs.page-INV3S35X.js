import {
  PacksService
} from "./chunk-UA6B4IIY.js";
import {
  AlertController,
  IonBadge,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTextarea,
  IonTitle,
  IonToolbar,
  LoadingController
} from "./chunk-5YKSH3EK.js";
import {
  addIcons,
  addOutline,
  alertCircleOutline,
  calendarOutline,
  chevronBackOutline,
  chevronForwardOutline,
  clipboardOutline,
  closeOutline,
  createOutline,
  cubeOutline,
  homeOutline,
  logOutOutline,
  logoWhatsapp,
  peopleOutline,
  pricetagsOutline,
  searchOutline,
  settingsOutline,
  timeOutline,
  trashOutline,
  trophyOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  FormsModule,
  HostListener,
  Location,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
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

// src/app/pages/entrenador-packs/entrenador-packs.page.ts
var _c0 = (a0, a1) => ({ "tipo-individual": a0, "tipo-grupal": a1 });
function EntrenadorPacksPage_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function EntrenadorPacksPage_div_17_div_7_Template_div_click_0_listener() {
      const alumno_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendWhatsAppReminder(alumno_r3));
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275element(2, "ion-icon", 40);
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 42)(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "ion-icon", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alumno_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(alumno_r3.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", alumno_r3.clases_disponibles, " clases");
  }
}
function EntrenadorPacksPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h3", 34);
    \u0275\u0275text(3, "Renovaciones Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-badge", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275template(7, EntrenadorPacksPage_div_17_div_7_Template, 9, 2, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.alumnosRecordatorioList.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.alumnosRecordatorioList);
  }
}
function EntrenadorPacksPage_div_36_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 61);
    \u0275\u0275elementStart(2, "div", 56);
    \u0275\u0275element(3, "ion-icon", 70);
    \u0275\u0275elementStart(4, "div", 58)(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 60);
    \u0275\u0275text(8, "Pers.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(pack_r6.cantidad_personas);
  }
}
function EntrenadorPacksPage_div_36_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 61);
    \u0275\u0275elementStart(2, "div", 56);
    \u0275\u0275element(3, "ion-icon", 70);
    \u0275\u0275elementStart(4, "div", 58)(5, "span", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 60);
    \u0275\u0275text(8, "Cupos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", pack_r6.estado_grupo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", pack_r6.cupos_ocupados, "/", pack_r6.capacidad_maxima, " ");
  }
}
function EntrenadorPacksPage_div_36_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 73);
    \u0275\u0275element(2, "ion-icon", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Disponible: ", ctx_r3.formatTime24(pack_r6.rango_horario_inicio), " - ", ctx_r3.formatTime24(pack_r6.rango_horario_fin), " hrs ");
  }
}
function EntrenadorPacksPage_div_36_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275element(1, "ion-icon", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pack_r6.categoria, " ");
  }
}
function EntrenadorPacksPage_div_36_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, EntrenadorPacksPage_div_36_div_34_span_1_Template, 3, 1, "span", 74);
    \u0275\u0275elementStart(2, "span", 73);
    \u0275\u0275element(3, "ion-icon", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pack_r6.categoria);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.getDiaNombre(pack_r6.dia_semana), " ", ctx_r3.formatTime24(pack_r6.hora_inicio), " hrs ");
  }
}
function EntrenadorPacksPage_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "div", 46);
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48)(4, "div", 49)(5, "h3", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 52)(10, "span", 53);
    \u0275\u0275text(11, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 54);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 55)(16, "div", 56);
    \u0275\u0275element(17, "ion-icon", 57);
    \u0275\u0275elementStart(18, "div", 58)(19, "span", 59);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 60);
    \u0275\u0275text(22, "Clases");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(23, "div", 61);
    \u0275\u0275elementStart(24, "div", 56);
    \u0275\u0275element(25, "ion-icon", 62);
    \u0275\u0275elementStart(26, "div", 58)(27, "span", 59);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 60);
    \u0275\u0275text(30, "Min");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, EntrenadorPacksPage_div_36_ng_container_31_Template, 9, 1, "ng-container", 63)(32, EntrenadorPacksPage_div_36_ng_container_32_Template, 9, 3, "ng-container", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, EntrenadorPacksPage_div_36_div_33_Template, 4, 2, "div", 64)(34, EntrenadorPacksPage_div_36_div_34_Template, 5, 3, "div", 64);
    \u0275\u0275elementStart(35, "div", 65)(36, "button", 66);
    \u0275\u0275listener("click", function EntrenadorPacksPage_div_36_Template_button_click_36_listener() {
      const pack_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editarPack(pack_r6));
    });
    \u0275\u0275element(37, "ion-icon", 67);
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Editar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 68);
    \u0275\u0275listener("click", function EntrenadorPacksPage_div_36_Template_button_click_40_listener() {
      const pack_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.eliminarPack(pack_r6.id));
    });
    \u0275\u0275element(41, "ion-icon", 69);
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "Eliminar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const pack_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r7 * 0.08 + "s");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(15, _c0, pack_r6.tipo === "individual", pack_r6.tipo === "grupal"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(pack_r6.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", pack_r6.tipo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pack_r6.tipo === "grupal" ? "\u{1F465} Grupal" : pack_r6.cantidad_personas > 1 ? "\u{1F91D} Multi" : "\u{1F3AF} Individual", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, pack_r6.precio));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(pack_r6.sesiones_totales);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(pack_r6.duracion_sesion_min);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", pack_r6.tipo === "individual" && pack_r6.cantidad_personas > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pack_r6.tipo === "grupal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pack_r6.tipo === "individual" && pack_r6.rango_horario_inicio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pack_r6.tipo === "grupal");
  }
}
function EntrenadorPacksPage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275element(2, "ion-icon", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sin Packs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Crea tu primer pack y empieza a ofrecer clases.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 79);
    \u0275\u0275listener("click", function EntrenadorPacksPage_div_37_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.abrirModal());
    });
    \u0275\u0275element(8, "ion-icon", 80);
    \u0275\u0275text(9, " Crear Pack ");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorPacksPage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "ion-button", 82);
    \u0275\u0275listener("click", function EntrenadorPacksPage_div_38_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cambiarPagina(-1));
    });
    \u0275\u0275element(2, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 83);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 82);
    \u0275\u0275listener("click", function EntrenadorPacksPage_div_38_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cambiarPagina(1));
    });
    \u0275\u0275element(6, "ion-icon", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.paginaActual === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.paginaActual, " / ", ctx_r3.totalPaginas);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.paginaActual === ctx_r3.totalPaginas);
  }
}
function EntrenadorPacksPage_ng_template_44_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 91);
    \u0275\u0275element(2, "ion-icon", 70);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Detalles del Grupo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 93)(6, "div", 97)(7, "div", 94)(8, "label");
    \u0275\u0275text(9, "Cap. M\xEDnima");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-item", 95)(11, "ion-input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_56_Template_ion_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.capacidad_minima, $event) || (ctx_r3.nuevoPack.capacidad_minima = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 94)(13, "label");
    \u0275\u0275text(14, "Cap. M\xE1xima");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-item", 95)(16, "ion-input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_56_Template_ion_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.capacidad_maxima, $event) || (ctx_r3.nuevoPack.capacidad_maxima = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 97)(18, "div", 94)(19, "label");
    \u0275\u0275text(20, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ion-item", 95)(22, "ion-input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_56_Template_ion_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.categoria, $event) || (ctx_r3.nuevoPack.categoria = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 111)(24, "ion-item", 112)(25, "ion-label", 113);
    \u0275\u0275text(26, "ABIERTO A INSCRIPCI\xD3N P\xDABLICA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ion-checkbox", 114);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_56_Template_ion_checkbox_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.permite_inscripcion, $event) || (ctx_r3.nuevoPack.permite_inscripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorPacksPage_ng_template_44_div_56_Template_ion_checkbox_ionChange_27_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.nuevoPack.permite_inscripcion = $event.detail.checked ? 1 : 0);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p", 115);
    \u0275\u0275text(29, "Si se desactiva, solo t\xFA podr\xE1s agregar alumnos.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.capacidad_minima);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.capacidad_maxima);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.categoria);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.permite_inscripcion);
    \u0275\u0275property("checked", ctx_r3.nuevoPack.permite_inscripcion == 1);
  }
}
function EntrenadorPacksPage_ng_template_44_div_57_ion_select_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r13 = ctx.$implicit;
    \u0275\u0275property("value", h_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r13);
  }
}
function EntrenadorPacksPage_ng_template_44_div_57_ion_select_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r14 = ctx.$implicit;
    \u0275\u0275property("value", m_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r14);
  }
}
function EntrenadorPacksPage_ng_template_44_div_57_ion_select_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r15 = ctx.$implicit;
    \u0275\u0275property("value", h_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r15);
  }
}
function EntrenadorPacksPage_ng_template_44_div_57_ion_select_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r16 = ctx.$implicit;
    \u0275\u0275property("value", m_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r16);
  }
}
function EntrenadorPacksPage_ng_template_44_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 91);
    \u0275\u0275element(2, "ion-icon", 62);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Rango de Disponibilidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 93)(6, "div", 94)(7, "label");
    \u0275\u0275text(8, "CANTIDAD PERSONAS (DUPLA/PAREJA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-item", 95)(10, "ion-input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_57_Template_ion_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.cantidad_personas, $event) || (ctx_r3.nuevoPack.cantidad_personas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "label");
    \u0275\u0275text(12, "HORARIO PERMITIDO (24H)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 117);
    \u0275\u0275text(14, "Opcional: Solo permite reservas en este bloque.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 97)(16, "div", 94)(17, "label");
    \u0275\u0275text(18, "Desde (HH:MM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 118)(20, "ion-item", 119)(21, "ion-select", 120);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_57_Template_ion_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.rango_inicio_h, $event) || (ctx_r3.nuevoPack.rango_inicio_h = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(22, EntrenadorPacksPage_ng_template_44_div_57_ion_select_option_22_Template, 2, 2, "ion-select-option", 121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span", 122);
    \u0275\u0275text(24, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-item", 119)(26, "ion-select", 123);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_57_Template_ion_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.rango_inicio_m, $event) || (ctx_r3.nuevoPack.rango_inicio_m = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(27, EntrenadorPacksPage_ng_template_44_div_57_ion_select_option_27_Template, 2, 2, "ion-select-option", 121);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 94)(29, "label");
    \u0275\u0275text(30, "Hasta (HH:MM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 118)(32, "ion-item", 119)(33, "ion-select", 120);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_57_Template_ion_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.rango_fin_h, $event) || (ctx_r3.nuevoPack.rango_fin_h = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(34, EntrenadorPacksPage_ng_template_44_div_57_ion_select_option_34_Template, 2, 2, "ion-select-option", 121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "span", 122);
    \u0275\u0275text(36, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ion-item", 119)(38, "ion-select", 123);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_div_57_Template_ion_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.rango_fin_m, $event) || (ctx_r3.nuevoPack.rango_fin_m = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(39, EntrenadorPacksPage_ng_template_44_div_57_ion_select_option_39_Template, 2, 2, "ion-select-option", 121);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.cantidad_personas);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.rango_inicio_h);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.horas);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.rango_inicio_m);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.minutos);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.rango_fin_h);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.horas);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.rango_fin_m);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.minutos);
  }
}
function EntrenadorPacksPage_ng_template_44_ion_spinner_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 125);
  }
}
function EntrenadorPacksPage_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 85)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 86)(5, "ion-button", 87);
    \u0275\u0275listener("click", function EntrenadorPacksPage_ng_template_44_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModal());
    });
    \u0275\u0275element(6, "ion-icon", 88);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content")(8, "div", 89)(9, "div", 90)(10, "div", 91);
    \u0275\u0275element(11, "ion-icon", 92);
    \u0275\u0275elementStart(12, "h4");
    \u0275\u0275text(13, "Informaci\xF3n del Pack");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 93)(15, "div", 94)(16, "label");
    \u0275\u0275text(17, "NOMBRE COMERCIAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-item", 95)(19, "ion-input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_Template_ion_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.nombre, $event) || (ctx_r3.nuevoPack.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 97)(21, "div", 94)(22, "label");
    \u0275\u0275text(23, "Tipo de Pack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-item", 95)(25, "ion-select", 98);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_Template_ion_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.tipo, $event) || (ctx_r3.nuevoPack.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "ion-select-option", 15);
    \u0275\u0275text(27, "Individual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-select-option", 17);
    \u0275\u0275text(29, "Grupal");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 94)(31, "label");
    \u0275\u0275text(32, "Precio ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-item", 95)(34, "ion-input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_Template_ion_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.precio, $event) || (ctx_r3.nuevoPack.precio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 94)(36, "label");
    \u0275\u0275text(37, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ion-item", 100)(39, "ion-textarea", 101);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_Template_ion_textarea_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.descripcion, $event) || (ctx_r3.nuevoPack.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "div", 102)(41, "div", 91);
    \u0275\u0275element(42, "ion-icon", 103);
    \u0275\u0275elementStart(43, "h4");
    \u0275\u0275text(44, "Configuraci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 97)(46, "div", 94)(47, "label");
    \u0275\u0275text(48, "N\xBA Clases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ion-item", 95)(50, "ion-input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_Template_ion_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.sesiones_totales, $event) || (ctx_r3.nuevoPack.sesiones_totales = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 94)(52, "label");
    \u0275\u0275text(53, "Min por Clase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ion-item", 95)(55, "ion-input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_ng_template_44_Template_ion_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoPack.duracion_sesion_min, $event) || (ctx_r3.nuevoPack.duracion_sesion_min = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(56, EntrenadorPacksPage_ng_template_44_div_56_Template, 30, 5, "div", 105)(57, EntrenadorPacksPage_ng_template_44_div_57_Template, 40, 9, "div", 105);
    \u0275\u0275elementStart(58, "div", 106)(59, "ion-button", 107);
    \u0275\u0275listener("click", function EntrenadorPacksPage_ng_template_44_Template_ion_button_click_59_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.crearPack());
    });
    \u0275\u0275template(60, EntrenadorPacksPage_ng_template_44_ion_spinner_60_Template, 1, 0, "ion-spinner", 108);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.nuevoPack.id ? "Editar Pack" : "Nuevo Pack");
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.nombre);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.tipo);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.precio);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.descripcion);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.sesiones_totales);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoPack.duracion_sesion_min);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.nuevoPack.tipo === "grupal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.nuevoPack.tipo === "individual");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.nuevoPack.id ? ctx_r3.isSaving ? "Actualizando..." : "Actualizar Pack" : ctx_r3.isSaving ? "Creando..." : "Crear Pack Premium", " ");
  }
}
var _EntrenadorPacksPage = class _EntrenadorPacksPage {
  onResize(event) {
    this.calcularElementosPorPagina();
  }
  calcularElementosPorPagina() {
    if (window.innerWidth >= 768) {
      this.elementosPorPagina = 9999;
      return;
    }
    const alturaDisponible = window.innerHeight - 300;
    const filas = Math.max(2, Math.floor(alturaDisponible / 160));
    const columnas = window.innerWidth > 768 ? 2 : 1;
    this.elementosPorPagina = filas * columnas;
  }
  constructor(location, packsService, router, alertController, loadingCtrl, mysqlService) {
    this.location = location;
    this.packsService = packsService;
    this.router = router;
    this.alertController = alertController;
    this.loadingCtrl = loadingCtrl;
    this.mysqlService = mysqlService;
    this.packs = [];
    this.packsFiltrados = [];
    this.filtro = "";
    this.mostrarFormulario = false;
    this.alumnosRecordatorioList = [];
    this.segmentoSeleccionado = "individual";
    this.paginaActual = 1;
    this.elementosPorPagina = 3;
    this.nuevoPack = {
      nombre: "",
      tipo: "individual",
      sesiones_totales: 0,
      duracion_sesion_min: 60,
      precio: 0,
      descripcion: "",
      capacidad_minima: 4,
      capacidad_maxima: 6,
      dia_semana: null,
      hora_inicio: null,
      categoria: "",
      rango_horario_inicio: null,
      rango_horario_fin: null,
      fecha: null,
      permite_inscripcion: 1
    };
    this.modalOpen = false;
    this.isSaving = false;
    this.horas = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
    this.minutos = ["00", "15", "30", "45"];
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      chevronBackOutline,
      chevronForwardOutline,
      createOutline,
      trashOutline,
      logOutOutline,
      searchOutline,
      addOutline,
      timeOutline,
      peopleOutline,
      trophyOutline,
      cubeOutline,
      closeOutline,
      clipboardOutline,
      logoWhatsapp,
      alertCircleOutline,
      pricetagsOutline
    });
  }
  ngOnInit() {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      this.router.navigate(["/login"]);
      return;
    }
    this.calcularElementosPorPagina();
    this.cargarPacks();
    this.loadPaymentAlerts(Number(userId));
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
  sendWhatsAppReminder(alumno) {
    const msg = `Hola ${alumno.nombre}, te escribo de Padel Academy. Notamos que te quedan ${alumno.clases_disponibles} clases en tu pack. \xA1No olvides renovar para asegurar tu horario! \u{1F3BE}`;
    window.open(`https://wa.me/${alumno.telefono}?text=${encodeURIComponent(msg)}`, "_blank");
  }
  cargarPacks() {
    this.packsService.getMisPacks().subscribe({
      next: (resp) => {
        this.packs = resp;
        this.filtrarPacks();
      },
      error: (err) => {
        console.error("Error cargando packs:", err);
      }
    });
  }
  filtrarPacks() {
    this.paginaActual = 1;
    this.packsFiltrados = this.packs.filter((p) => {
      const isActivo = Number(p.activo) === 1;
      if (!isActivo)
        return false;
      const matchesName = (p.nombre || "").toLowerCase().includes(this.filtro.toLowerCase());
      let matchesSegment = false;
      if (this.segmentoSeleccionado === "individual") {
        matchesSegment = p.tipo === "individual" && (!p.cantidad_personas || p.cantidad_personas <= 1);
      } else if (this.segmentoSeleccionado === "multijugador") {
        matchesSegment = p.tipo === "individual" && p.cantidad_personas > 1;
      } else if (this.segmentoSeleccionado === "grupal") {
        matchesSegment = p.tipo === "grupal";
      }
      return matchesName && matchesSegment;
    });
  }
  cambiarSegmento(event) {
    this.segmentoSeleccionado = event.detail.value;
    this.filtrarPacks();
  }
  get packsPaginados() {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    return this.packsFiltrados.slice(inicio, inicio + this.elementosPorPagina);
  }
  get totalPaginas() {
    return Math.ceil(this.packsFiltrados.length / this.elementosPorPagina);
  }
  cambiarPagina(delta) {
    const nuevaPagina = this.paginaActual + delta;
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas) {
      this.paginaActual = nuevaPagina;
    }
  }
  crearPack() {
    return __async(this, null, function* () {
      console.log("Iniciando crearPack...");
      if (this.isSaving)
        return;
      let loading;
      try {
        const p = __spreadValues({}, this.nuevoPack);
        const nombreVal = (p.nombre || "").toString().trim();
        if (nombreVal.length === 0) {
          yield this.presentAlert("Campo Requerido", "Ingresa un nombre.");
          return;
        }
        p.hora_inicio = p.hora_inicio_h && p.hora_inicio_m ? `${p.hora_inicio_h}:${p.hora_inicio_m}` : null;
        p.rango_horario_inicio = p.rango_inicio_h && p.rango_inicio_m ? `${p.rango_inicio_h}:${p.rango_inicio_m}` : null;
        p.rango_horario_fin = p.rango_fin_h && p.rango_fin_m ? `${p.rango_fin_h}:${p.rango_fin_m}` : null;
        p.hora_inicio = this.sanitizeTimeFormat(p.hora_inicio);
        p.rango_horario_inicio = this.sanitizeTimeFormat(p.rango_horario_inicio);
        p.rango_horario_fin = this.sanitizeTimeFormat(p.rango_horario_fin);
        if (p.tipo === "individual") {
          if (!p.sesiones_totales || Number(p.sesiones_totales) <= 0) {
            yield this.presentAlert("Clases Requeridas", "N\xFAmero de clases > 0.");
            return;
          }
        }
        if (p.tipo === "grupal") {
          if (!p.capacidad_minima || !p.capacidad_maxima || !p.categoria) {
            yield this.presentAlert("Datos Incompletos", "Indica capacidad m\xEDnima, m\xE1xima y categor\xEDa.");
            return;
          }
        }
        if (!p.precio || Number(p.precio) < 0) {
          yield this.presentAlert("Precio Requerido", "Ingresa un precio v\xE1lido.");
          return;
        }
        const userId = localStorage.getItem("userId");
        if (!userId || userId === "0") {
          yield this.presentAlert("Sesi\xF3n Expirada", "Reinicia sesi\xF3n.");
          this.router.navigate(["/login"]);
          return;
        }
        this.isSaving = true;
        loading = yield this.loadingCtrl.create({
          message: p.id ? "Actualizando..." : "Creando...",
          spinner: "crescent",
          duration: 1e4
        });
        yield loading.present();
        const request = p.id ? this.packsService.editarPack(p) : this.packsService.crearPack(p);
        request.subscribe({
          next: (resp) => {
            if (loading)
              loading.dismiss();
            this.isSaving = false;
            this.cerrarModal();
            this.cargarPacks();
          },
          error: (err) => __async(this, null, function* () {
            if (loading)
              loading.dismiss();
            this.isSaving = false;
            console.error("Error API:", err);
            const msg = err.error?.error || err.message || "Error de conexi\xF3n";
            yield this.presentAlert("Error", msg);
          })
        });
      } catch (e) {
        if (loading)
          loading.dismiss();
        this.isSaving = false;
        console.error("Crash UI:", e);
        yield this.presentAlert("Error Inesperado", e.message);
      }
    });
  }
  presentAlert(header, message) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header,
        message,
        buttons: ["OK"]
      });
      yield alert.present();
    });
  }
  goBack() {
    this.router.navigate(["/entrenador-home"]);
  }
  abrirModal() {
    this.isSaving = false;
    this.resetFormulario();
    this.modalOpen = true;
  }
  cerrarModal() {
    this.modalOpen = false;
    this.isSaving = false;
    if (this.modal) {
      this.modal.dismiss();
    }
  }
  resetFormulario() {
    this.nuevoPack = {
      id: null,
      nombre: "",
      tipo: this.segmentoSeleccionado === "grupal" ? "grupal" : "individual",
      sesiones_totales: 0,
      duracion_sesion_min: 60,
      precio: 0,
      descripcion: "",
      capacidad_minima: 2,
      capacidad_maxima: 4,
      dia_semana: 1,
      hora_inicio: null,
      categoria: "",
      cantidad_personas: 1,
      hora_inicio_h: "10",
      hora_inicio_m: "00",
      rango_inicio_h: null,
      rango_inicio_m: null,
      rango_fin_h: null,
      rango_fin_m: null,
      fecha: null,
      permite_inscripcion: 1
    };
  }
  getDiaNombre(dia) {
    const d = Number(dia);
    const dias = ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"];
    return dias[d] || "";
  }
  sanitizeTimeFormat(val) {
    if (!val)
      return null;
    const s = val.toString();
    if (s.includes("T"))
      return s.split("T")[1].substring(0, 5);
    if (s.includes(":")) {
      const parts = s.split(":");
      if (parts.length >= 2) {
        return `${parts[0].padStart(2, "0")}:${parts[1].padStart(2, "0")}`;
      }
    }
    return s.substring(0, 5);
  }
  formatTime24(time) {
    const formatted = this.sanitizeTimeFormat(time);
    return formatted || "--:--";
  }
  editarPack(pack) {
    const h_inicio = this.sanitizeTimeFormat(pack.hora_inicio) || "";
    const r_inicio = this.sanitizeTimeFormat(pack.rango_horario_inicio) || "";
    const r_fin = this.sanitizeTimeFormat(pack.rango_horario_fin) || "";
    this.nuevoPack = __spreadProps(__spreadValues({}, pack), {
      hora_inicio_h: h_inicio.split(":")[0] || "10",
      hora_inicio_m: h_inicio.split(":")[1] || "00",
      rango_inicio_h: r_inicio.split(":")[0] || null,
      rango_inicio_m: r_inicio.split(":")[1] || null,
      rango_fin_h: r_fin.split(":")[0] || null,
      rango_fin_m: r_fin.split(":")[1] || null
    });
    this.modalOpen = true;
  }
  eliminarPack(packId) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: "Confirmar",
        message: "\xBFEliminar este pack?",
        buttons: [
          { text: "No", role: "cancel" },
          {
            text: "S\xED, Eliminar",
            handler: () => __async(this, null, function* () {
              const loading = yield this.loadingCtrl.create({ message: "Eliminando..." });
              yield loading.present();
              this.packsService.eliminarPack(packId).subscribe({
                next: () => {
                  loading.dismiss();
                  this.packs = this.packs.map((p) => p.id == packId ? __spreadProps(__spreadValues({}, p), { activo: 0 }) : p);
                  this.filtrarPacks();
                },
                error: (err) => {
                  loading.dismiss();
                  this.presentAlert("Error", "No se pudo eliminar.");
                }
              });
            })
          }
        ]
      });
      yield alert.present();
    });
  }
};
_EntrenadorPacksPage.\u0275fac = function EntrenadorPacksPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EntrenadorPacksPage)(\u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(PacksService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(MysqlService));
};
_EntrenadorPacksPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrenadorPacksPage, selectors: [["app-entrenador-packs"]], viewQuery: function EntrenadorPacksPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(IonModal, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modal = _t.first);
  }
}, hostBindings: function EntrenadorPacksPage_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function EntrenadorPacksPage_resize_HostBindingHandler($event) {
      return ctx.onResize($event);
    }, \u0275\u0275resolveWindow);
  }
}, features: [\u0275\u0275ProvidersFeature([])], decls: 45, vars: 8, consts: [["modal", ""], [1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "header-pre"], [1, "header-title"], [1, "header-sub"], [1, "header-stats"], [1, "stat-bubble", "animate-pop"], [1, "stat-number"], [1, "stat-label"], [1, "main-container"], ["class", "payment-reminders-section animate-up", 4, "ngIf"], [1, "segment-wrapper", "animate-up"], ["mode", "md", "scrollable", "", 1, "nike-segment", 3, "ionChange", "value"], ["value", "individual"], ["value", "multijugador"], ["value", "grupal"], [1, "actions-bar", "animate-up", "delay-1"], [1, "search-box"], ["name", "search-outline"], ["placeholder", "Buscar pack...", 3, "ngModelChange", "ionInput", "ngModel"], [1, "add-btn", 3, "click"], ["name", "add-outline"], [1, "packs-grid"], ["class", "pack-card animate-up", 3, "animation-delay", "ngClass", 4, "ngFor", "ngForOf"], ["class", "empty-state animate-pop", 4, "ngIf"], ["class", "pagination-controls animate-fade", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], [1, "nike-modal", 3, "didDismiss", "isOpen"], [1, "payment-reminders-section", "animate-up"], [1, "section-header-compact"], [1, "mini-title"], [1, "mini-badge"], [1, "reminders-scroll"], ["class", "reminder-chip animate-pop", 3, "click", 4, "ngFor", "ngForOf"], [1, "reminder-chip", "animate-pop", 3, "click"], [1, "chip-left"], ["name", "alert-circle-outline", 1, "alert-icon"], [1, "name"], [1, "chip-right"], [1, "count"], ["name", "logo-whatsapp", 1, "wa-icon"], [1, "pack-card", "animate-up", 3, "ngClass"], [1, "card-accent"], [1, "card-body"], [1, "card-top"], [1, "pack-info"], [1, "pack-name"], [1, "type-badge", 3, "ngClass"], [1, "pack-price"], [1, "currency"], [1, "amount"], [1, "stats-row"], [1, "stat-item"], ["name", "calendar-outline"], [1, "stat-text"], [1, "stat-val"], [1, "stat-lbl"], [1, "stat-divider"], ["name", "time-outline"], [4, "ngIf"], ["class", "grupal-info", 4, "ngIf"], [1, "card-actions"], [1, "action-btn", "edit", 3, "click"], ["name", "create-outline"], [1, "action-btn", "delete", 3, "click"], ["name", "trash-outline"], ["name", "people-outline"], [1, "stat-val", "cupos", 3, "ngClass"], [1, "grupal-info"], [1, "info-chip"], ["class", "info-chip", 4, "ngIf"], ["name", "trophy-outline"], [1, "empty-state", "animate-pop"], [1, "empty-icon-box"], ["name", "cube-outline"], ["expand", "block", 1, "nike-btn", 3, "click"], ["name", "add-outline", "slot", "start"], [1, "pagination-controls", "animate-fade"], ["fill", "clear", 3, "click", "disabled"], [1, "page-info"], ["name", "chevron-forward-outline"], ["mode", "ios", 1, "ion-no-border"], ["slot", "end"], [3, "click"], ["name", "close-outline"], [1, "modal-form"], [1, "form-section", "Nike-Nike"], [1, "section-header"], ["name", "clipboard-outline"], [1, "input-group"], [1, "nike-field"], ["lines", "none", 1, "nike-item"], ["placeholder", "Ej: Especial Verano 10", 3, "ngModelChange", "ngModel"], [1, "form-grid"], ["interface", "popover", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", 3, "ngModelChange", "ngModel"], ["lines", "none", 1, "nike-item", "textarea"], ["placeholder", "Explica los beneficios de este pack...", 3, "ngModelChange", "ngModel"], [1, "form-section"], ["name", "settings-outline"], ["type", "number", 3, "ngModelChange", "ngModel"], ["class", "form-section", 4, "ngIf"], [1, "footer-actions"], ["expand", "block", 1, "nike-button", "save-btn", 3, "click", "disabled"], ["slot", "start", "name", "crescent", 4, "ngIf"], ["type", "number", "min", "2", "max", "6", 3, "ngModelChange", "ngModel"], ["placeholder", "Ej: Avanzados / 4ta", 3, "ngModelChange", "ngModel"], [1, "nike-field", 2, "margin-top", "15px"], ["lines", "none", 1, "nike-item-checkbox"], [2, "font-size", "11px", "font-weight", "800", "color", "#111"], ["slot", "start", 3, "ngModelChange", "ionChange", "ngModel", "checked"], [1, "helper-text-mobile", 2, "margin-left", "45px"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], [1, "helper-text-mobile"], [2, "display", "flex", "align-items", "center", "gap", "8px", "margin-top", "5px"], ["lines", "none", 1, "nike-item", "compact", 2, "flex", "1", "--padding-start", "8px"], ["interface", "popover", "placeholder", "HH", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [2, "font-weight", "bold"], ["interface", "popover", "placeholder", "MM", 3, "ngModelChange", "ngModel"], [3, "value"], ["slot", "start", "name", "crescent"]], template: function EntrenadorPacksPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
    \u0275\u0275text(5, "COACH ACADEMY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 5);
    \u0275\u0275text(7, "Mis Packs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "Gestiona tu oferta acad\xE9mica");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15, "Activos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275template(17, EntrenadorPacksPage_div_17_Template, 8, 2, "div", 12);
    \u0275\u0275elementStart(18, "div", 13)(19, "ion-segment", 14);
    \u0275\u0275listener("ionChange", function EntrenadorPacksPage_Template_ion_segment_ionChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cambiarSegmento($event));
    });
    \u0275\u0275elementStart(20, "ion-segment-button", 15)(21, "ion-label");
    \u0275\u0275text(22, "Individual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "ion-segment-button", 16)(24, "ion-label");
    \u0275\u0275text(25, "Multi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-segment-button", 17)(27, "ion-label");
    \u0275\u0275text(28, "Grupal");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 18)(30, "div", 19);
    \u0275\u0275element(31, "ion-icon", 20);
    \u0275\u0275elementStart(32, "ion-input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorPacksPage_Template_ion_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.filtro, $event) || (ctx.filtro = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionInput", function EntrenadorPacksPage_Template_ion_input_ionInput_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.filtrarPacks());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 22);
    \u0275\u0275listener("click", function EntrenadorPacksPage_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.abrirModal());
    });
    \u0275\u0275element(34, "ion-icon", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 24);
    \u0275\u0275template(36, EntrenadorPacksPage_div_36_Template, 44, 18, "div", 25)(37, EntrenadorPacksPage_div_37_Template, 10, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, EntrenadorPacksPage_div_38_Template, 7, 4, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ion-fab", 28)(40, "ion-fab-button", 29);
    \u0275\u0275listener("click", function EntrenadorPacksPage_Template_ion_fab_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.goBack());
    });
    \u0275\u0275element(41, "ion-icon", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "ion-modal", 31, 0);
    \u0275\u0275listener("didDismiss", function EntrenadorPacksPage_Template_ion_modal_didDismiss_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cerrarModal());
    });
    \u0275\u0275template(44, EntrenadorPacksPage_ng_template_44_Template, 62, 12, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.packsFiltrados.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.alumnosRecordatorioList.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.segmentoSeleccionado);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtro);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.packsPaginados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.packsFiltrados.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.totalPaginas > 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("isOpen", ctx.modalOpen);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
  IonInput,
  IonButton,
  IonFab,
  IonFabButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonModal,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonSpinner,
  IonBadge,
  IonCheckbox,
  DecimalPipe
], styles: ['@charset "UTF-8";\n\n\n\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 220px;\n  padding-top: calc(40px + env(safe-area-inset-top));\n  padding-bottom: 50px;\n  padding-left: 28px;\n  padding-right: 28px;\n  margin-top: -60px;\n  width: 100%;\n  z-index: 0;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 0 0 40px 40px;\n  overflow: hidden;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      160deg,\n      rgba(0, 0, 0, 0.35) 0%,\n      rgba(0, 0, 0, 0.8) 100%);\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .header-pre[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 0 6px;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -1.5px;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  opacity: 0.7;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.header-stats[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(20px + env(safe-area-inset-top));\n  right: 25px;\n  z-index: 3;\n}\n.header-stats[_ngcontent-%COMP%]   .stat-bubble[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 58px;\n  height: 58px;\n  background: rgba(255, 255, 255, 0.16);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n.header-stats[_ngcontent-%COMP%]   .stat-bubble[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  color: #fff;\n  line-height: 1;\n  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);\n}\n.header-stats[_ngcontent-%COMP%]   .stat-bubble[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 850;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  margin-top: 2px;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding: 20px 20px 120px;\n  margin-top: -25px;\n  background: #f8f9fa;\n  border-radius: 30px 30px 0 0;\n  min-height: calc(100vh - 180px);\n  position: relative;\n  z-index: 2;\n}\n.segment-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.segment-wrapper[_ngcontent-%COMP%]   .nike-segment[_ngcontent-%COMP%] {\n  --background: #fff;\n  background: #fff;\n  border-radius: 16px;\n  padding: 4px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);\n}\n.segment-wrapper[_ngcontent-%COMP%]   .nike-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color: #888;\n  --color-checked: #fff !important;\n  --indicator-color: transparent !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --border-radius: 12px;\n  font-weight: 850;\n  min-height: 40px;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  margin: 2px;\n  position: relative;\n  z-index: 1;\n}\n.segment-wrapper[_ngcontent-%COMP%]   .nike-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::part(native) {\n  border-radius: 12px;\n}\n.segment-wrapper[_ngcontent-%COMP%]   .nike-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  background: #000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.segment-wrapper[_ngcontent-%COMP%]   .nike-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #fff !important;\n  font-weight: 900;\n}\n.segment-wrapper[_ngcontent-%COMP%]   .nike-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  transition: color 0.3s ease;\n}\n.actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 22px;\n  align-items: stretch;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #fff;\n  border-radius: 14px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(0, 0, 0, 0.12);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);\n}\n.search-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #bbb;\n  flex-shrink: 0;\n}\n.search-box[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  font-size: 13px;\n  font-weight: 600;\n  --placeholder-color: #ccc;\n}\n.add-btn[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n  background: #000;\n  border: none;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.add-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #ccff00;\n}\n.add-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.packs-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.pack-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n}\n.pack-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98) translateY(2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n}\n.pack-card[_ngcontent-%COMP%]   .card-accent[_ngcontent-%COMP%] {\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #000 0%,\n      #333 50%,\n      #ccff00 100%);\n  width: 100%;\n}\n.pack-card.tipo-grupal[_ngcontent-%COMP%]   .card-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ffc107 0%,\n      #ff9800 50%,\n      #ff5722 100%);\n}\n.pack-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .pack-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .pack-info[_ngcontent-%COMP%]   .pack-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 900;\n  color: #111;\n  margin: 0 0 6px;\n  letter-spacing: -0.3px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .pack-info[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 4px 10px;\n  border-radius: 8px;\n  background: #f0f0f0;\n  color: #555;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .pack-info[_ngcontent-%COMP%]   .type-badge.individual[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  color: #333;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .pack-info[_ngcontent-%COMP%]   .type-badge.grupal[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.12);\n  color: #e6a800;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .pack-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1px;\n  flex-shrink: 0;\n  padding-left: 15px;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .pack-price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #888;\n  margin-top: 2px;\n}\n.pack-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .pack-price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 950;\n  color: #111;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #f9f9fb;\n  border-radius: 14px;\n  margin-bottom: 14px;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #bbb;\n  flex-shrink: 0;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-text[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 900;\n  color: #111;\n  line-height: 1;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-text[_ngcontent-%COMP%]   .stat-val.cupos.activo[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-text[_ngcontent-%COMP%]   .stat-val.cupos.pendiente[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-text[_ngcontent-%COMP%]   .stat-val.cupos.completo[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-text[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: #bbb;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.pack-card[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: #e8e8e8;\n  flex-shrink: 0;\n}\n.pack-card[_ngcontent-%COMP%]   .grupal-info[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.pack-card[_ngcontent-%COMP%]   .grupal-info[_ngcontent-%COMP%]   .info-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #888;\n  background: #f5f5f5;\n  padding: 5px 12px;\n  border-radius: 10px;\n}\n.pack-card[_ngcontent-%COMP%]   .grupal-info[_ngcontent-%COMP%]   .info-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ffc107;\n}\n.pack-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.pack-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.pack-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pack-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  color: #333;\n}\n.pack-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.1);\n  transform: scale(0.95);\n}\n.pack-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%] {\n  background: rgba(244, 67, 54, 0.06);\n  color: #e53935;\n}\n.pack-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%]:active {\n  background: rgba(244, 67, 54, 0.15);\n  transform: scale(0.95);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 30px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background: #fff;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: #ddd;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  color: #111;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 13px;\n  margin-bottom: 25px;\n  font-weight: 500;\n}\n.empty-state[_ngcontent-%COMP%]   .nike-btn[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #ccff00;\n  --border-radius: 14px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  height: 50px;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px auto 10px;\n  gap: 15px;\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 900;\n  color: #333;\n  text-transform: uppercase;\n  background: #fff;\n  padding: 8px 18px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  min-width: 60px;\n  text-align: center;\n  letter-spacing: 1px;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --color: #111;\n  --background: #fff;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.3;\n  --box-shadow: none;\n  --background: #f5f5f5;\n}\n.nike-modal[_ngcontent-%COMP%] {\n  --height: 92%;\n  --border-radius: 32px 32px 0 0;\n  --box-shadow: 0 -12px 60px rgba(0, 0, 0, 0.25);\n}\n.nike-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: white;\n  --color: #111;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n.nike-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-weight: 950;\n  letter-spacing: -1px;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.nike-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #000;\n  font-weight: 800;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%] {\n  padding: 0 0 40px;\n  background: #fbfbfc;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-bottom: 12px;\n  background: #fff;\n  border-radius: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ccff00;\n  background: #000;\n  padding: 10px;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 950;\n  color: #111;\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #999;\n  margin-bottom: 8px;\n  padding-left: 2px;\n  letter-spacing: 0.8px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%] {\n  --background: #f5f5f7;\n  --border-radius: 16px;\n  --padding-start: 16px;\n  --highlight-height: 0;\n  font-weight: 600;\n  font-size: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  min-height: 52px;\n  transition: all 0.3s ease;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-item.datetime-item[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  --padding-start: 10px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-item.compact[_ngcontent-%COMP%] {\n  min-height: 46px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-item.textarea[_ngcontent-%COMP%] {\n  min-height: 120px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]:focus-within {\n  border-color: #000;\n  --background: #fff;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], \n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%], \n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  font-weight: 700;\n  color: #111;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .helper-text-mobile[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #bbb;\n  margin: -4px 0 10px 2px;\n  font-weight: 500;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n  border-top: 1px solid #f0f0f5;\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #ccff00;\n  --border-radius: 18px;\n  font-weight: 950;\n  text-transform: uppercase;\n  height: 60px;\n  letter-spacing: 1.5px;\n  font-size: 15px;\n  margin: 0;\n  --box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);\n  transition: transform 0.2s ease;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n  --box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n  --box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n.animate-pop[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;\n}\n.animate-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease both;\n}\n.delay-1[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.delay-2[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(25px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  70% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.payment-reminders-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  background: white;\n  border-radius: 20px;\n  padding: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .section-header-compact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding-left: 4px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .section-header-compact[_ngcontent-%COMP%]   .mini-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #000;\n  margin: 0;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .section-header-compact[_ngcontent-%COMP%]   .mini-badge[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #ccff00;\n  font-weight: 900;\n  border-radius: 6px;\n  font-size: 10px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding: 4px 4px 12px;\n  margin-bottom: -8px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 12px 14px;\n  background: #f8f9fa;\n  border-radius: 14px;\n  min-width: 180px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  transition: all 0.2s ease;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n  background: #f1f3f5;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-left[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ff3b30;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-left[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111;\n  white-space: nowrap;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-right[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #888;\n}\n.payment-reminders-section[_ngcontent-%COMP%]   .reminders-scroll[_ngcontent-%COMP%]   .reminder-chip[_ngcontent-%COMP%]   .chip-right[_ngcontent-%COMP%]   .wa-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #25d366;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=entrenador-packs.page.css.map */'] });
var EntrenadorPacksPage = _EntrenadorPacksPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenadorPacksPage, [{
    type: Component,
    args: [{ selector: "app-entrenador-packs", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonSegment,
      IonSegmentButton,
      IonLabel,
      IonIcon,
      IonInput,
      IonButton,
      IonFab,
      IonFabButton,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonModal,
      IonItem,
      IonSelect,
      IonSelectOption,
      IonTextarea,
      IonSpinner,
      IonBadge,
      IonCheckbox
    ], providers: [], template: `<ion-content>

  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content">
      <p class="header-pre">COACH ACADEMY</p>
      <h1 class="header-title">Mis Packs</h1>
      <p class="header-sub">Gestiona tu oferta acad\xE9mica</p>
    </div>
    <div class="header-stats">
      <div class="stat-bubble animate-pop">
        <span class="stat-number">{{ packsFiltrados.length }}</span>
        <span class="stat-label">Activos</span>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="main-container">

    <!-- PAYMENT REMINDERS (Feature Request) -->
    <div class="payment-reminders-section animate-up" *ngIf="alumnosRecordatorioList.length > 0">
      <div class="section-header-compact">
        <h3 class="mini-title">Renovaciones Pendientes</h3>
        <ion-badge class="mini-badge">{{ alumnosRecordatorioList.length }}</ion-badge>
      </div>
      <div class="reminders-scroll">
        <div class="reminder-chip animate-pop" *ngFor="let alumno of alumnosRecordatorioList" (click)="sendWhatsAppReminder(alumno)">
          <div class="chip-left">
            <ion-icon name="alert-circle-outline" class="alert-icon"></ion-icon>
            <span class="name">{{ alumno.nombre }}</span>
          </div>
          <div class="chip-right">
            <span class="count">{{ alumno.clases_disponibles }} clases</span>
            <ion-icon name="logo-whatsapp" class="wa-icon"></ion-icon>
          </div>
        </div>
      </div>
    </div>

    <!-- Segment Pills -->
    <div class="segment-wrapper animate-up">
      <ion-segment [value]="segmentoSeleccionado" (ionChange)="cambiarSegmento($event)" mode="md" class="nike-segment"
        scrollable>
        <ion-segment-button value="individual">
          <ion-label>Individual</ion-label>
        </ion-segment-button>
        <ion-segment-button value="multijugador">
          <ion-label>Multi</ion-label>
        </ion-segment-button>
        <ion-segment-button value="grupal">
          <ion-label>Grupal</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>

    <!-- Search + Add -->
    <div class="actions-bar animate-up delay-1">
      <div class="search-box">
        <ion-icon name="search-outline"></ion-icon>
        <ion-input placeholder="Buscar pack..." [(ngModel)]="filtro" (ionInput)="filtrarPacks()">
        </ion-input>
      </div>
      <button class="add-btn" (click)="abrirModal()">
        <ion-icon name="add-outline"></ion-icon>
      </button>
    </div>

    <!-- Packs Grid -->
    <div class="packs-grid">
      <div class="pack-card animate-up" *ngFor="let pack of packsPaginados; let i = index"
        [style.animation-delay]="(i * 0.08) + 's'"
        [ngClass]="{'tipo-individual': pack.tipo === 'individual', 'tipo-grupal': pack.tipo === 'grupal'}">

        <!-- Card Top Accent -->
        <div class="card-accent"></div>

        <div class="card-body">
          <!-- Top Row: Name + Type Badge -->
          <div class="card-top">
            <div class="pack-info">
              <h3 class="pack-name">{{ pack.nombre }}</h3>
              <span class="type-badge" [ngClass]="pack.tipo">
                {{ pack.tipo === 'grupal' ? '\u{1F465} Grupal' : (pack.cantidad_personas > 1 ? '\u{1F91D} Multi' : '\u{1F3AF} Individual') }}
              </span>
            </div>
            <div class="pack-price">
              <span class="currency">$</span>
              <span class="amount">{{ pack.precio | number }}</span>
            </div>
          </div>

          <!-- Stats Row -->
          <div class="stats-row">
            <div class="stat-item">
              <ion-icon name="calendar-outline"></ion-icon>
              <div class="stat-text">
                <span class="stat-val">{{ pack.sesiones_totales }}</span>
                <span class="stat-lbl">Clases</span>
              </div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <ion-icon name="time-outline"></ion-icon>
              <div class="stat-text">
                <span class="stat-val">{{ pack.duracion_sesion_min }}</span>
                <span class="stat-lbl">Min</span>
              </div>
            </div>
            <ng-container *ngIf="pack.tipo === 'individual' && pack.cantidad_personas > 1">
              <div class="stat-divider"></div>
              <div class="stat-item">
                <ion-icon name="people-outline"></ion-icon>
                <div class="stat-text">
                  <span class="stat-val">{{ pack.cantidad_personas }}</span>
                  <span class="stat-lbl">Pers.</span>
                </div>
              </div>
            </ng-container>
            <ng-container *ngIf="pack.tipo === 'grupal'">
              <div class="stat-divider"></div>
              <div class="stat-item">
                <ion-icon name="people-outline"></ion-icon>
                <div class="stat-text">
                  <span class="stat-val cupos" [ngClass]="pack.estado_grupo">
                    {{ pack.cupos_ocupados }}/{{ pack.capacidad_maxima }}
                  </span>
                  <span class="stat-lbl">Cupos</span>
                </div>
              </div>
            </ng-container>
          </div>

          <!-- Individual Range -->
          <div class="grupal-info" *ngIf="pack.tipo === 'individual' && pack.rango_horario_inicio">
            <span class="info-chip">
              <ion-icon name="time-outline"></ion-icon>
              Disponible: {{ formatTime24(pack.rango_horario_inicio) }} - {{ formatTime24(pack.rango_horario_fin) }} hrs
            </span>
          </div>

          <!-- Grupal Extra Info -->
          <div class="grupal-info" *ngIf="pack.tipo === 'grupal'">
            <span class="info-chip" *ngIf="pack.categoria">
              <ion-icon name="trophy-outline"></ion-icon>
              {{ pack.categoria }}
            </span>
            <span class="info-chip">
              <ion-icon name="time-outline"></ion-icon>
              {{ getDiaNombre(pack.dia_semana) }} {{ formatTime24(pack.hora_inicio) }} hrs
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="card-actions">
            <button class="action-btn edit" (click)="editarPack(pack)">
              <ion-icon name="create-outline"></ion-icon>
              <span>Editar</span>
            </button>
            <button class="action-btn delete" (click)="eliminarPack(pack.id)">
              <ion-icon name="trash-outline"></ion-icon>
              <span>Eliminar</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="empty-state animate-pop" *ngIf="packsFiltrados.length === 0">
        <div class="empty-icon-box">
          <ion-icon name="cube-outline"></ion-icon>
        </div>
        <h3>Sin Packs</h3>
        <p>Crea tu primer pack y empieza a ofrecer clases.</p>
        <ion-button class="nike-btn" expand="block" (click)="abrirModal()">
          <ion-icon name="add-outline" slot="start"></ion-icon>
          Crear Pack
        </ion-button>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="pagination-controls animate-fade" *ngIf="totalPaginas > 1">
      <ion-button fill="clear" [disabled]="paginaActual === 1" (click)="cambiarPagina(-1)">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </ion-button>
      <span class="page-info">{{ paginaActual }} / {{ totalPaginas }}</span>
      <ion-button fill="clear" [disabled]="paginaActual === totalPaginas" (click)="cambiarPagina(1)">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </ion-button>
    </div>

  </div>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<!-- Modal Premium -->
<ion-modal #modal [isOpen]="modalOpen" (didDismiss)="cerrarModal()" class="nike-modal">
  <ng-template>
    <ion-header mode="ios" class="ion-no-border">
      <ion-toolbar>
        <ion-title>{{ nuevoPack.id ? 'Editar Pack' : 'Nuevo Pack' }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="cerrarModal()">
            <ion-icon name="close-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="modal-form">

        <!-- SECCI\xD3N 1: Informaci\xF3n B\xE1sica -->
        <div class="form-section Nike-Nike">
          <div class="section-header">
            <ion-icon name="clipboard-outline"></ion-icon>
            <h4>Informaci\xF3n del Pack</h4>
          </div>
          <div class="input-group">
            <div class="nike-field">
              <label>NOMBRE COMERCIAL</label>
              <ion-item lines="none" class="nike-item">
                <ion-input [(ngModel)]="nuevoPack.nombre" placeholder="Ej: Especial Verano 10"></ion-input>
              </ion-item>
            </div>

            <div class="form-grid">
              <div class="nike-field">
                <label>Tipo de Pack</label>
                <ion-item lines="none" class="nike-item">
                  <ion-select [(ngModel)]="nuevoPack.tipo" interface="popover">
                    <ion-select-option value="individual">Individual</ion-select-option>
                    <ion-select-option value="grupal">Grupal</ion-select-option>
                  </ion-select>
                </ion-item>
              </div>
              <div class="nike-field">
                <label>Precio ($)</label>
                <ion-item lines="none" class="nike-item">
                  <ion-input type="number" [(ngModel)]="nuevoPack.precio" placeholder="0"></ion-input>
                </ion-item>
              </div>
            </div>

            <div class="nike-field">
              <label>Descripci\xF3n</label>
              <ion-item lines="none" class="nike-item textarea">
                <ion-textarea [(ngModel)]="nuevoPack.descripcion"
                  placeholder="Explica los beneficios de este pack..."></ion-textarea>
              </ion-item>
            </div>
          </div>
        </div>

        <!-- SECCI\xD3N 2: Configuraci\xF3n -->
        <div class="form-section">
          <div class="section-header">
            <ion-icon name="settings-outline"></ion-icon>
            <h4>Configuraci\xF3n</h4>
          </div>
          <div class="form-grid">
            <div class="nike-field">
              <label>N\xBA Clases</label>
              <ion-item lines="none" class="nike-item">
                <ion-input type="number" [(ngModel)]="nuevoPack.sesiones_totales"></ion-input>
              </ion-item>
            </div>
            <div class="nike-field">
              <label>Min por Clase</label>
              <ion-item lines="none" class="nike-item">
                <ion-input type="number" [(ngModel)]="nuevoPack.duracion_sesion_min"></ion-input>
              </ion-item>
            </div>
          </div>
        </div>

        <!-- SECCI\xD3N 3: Detalles Grupales -->
        <div class="form-section" *ngIf="nuevoPack.tipo === 'grupal'">
          <div class="section-header">
            <ion-icon name="people-outline"></ion-icon>
            <h4>Detalles del Grupo</h4>
          </div>
          <div class="input-group">
            <div class="form-grid">
              <div class="nike-field">
                <label>Cap. M\xEDnima</label>
                <ion-item lines="none" class="nike-item">
                  <ion-input type="number" [(ngModel)]="nuevoPack.capacidad_minima" min="2" max="6"></ion-input>
                </ion-item>
              </div>
              <div class="nike-field">
                <label>Cap. M\xE1xima</label>
                <ion-item lines="none" class="nike-item">
                  <ion-input type="number" [(ngModel)]="nuevoPack.capacidad_maxima" min="2" max="6"></ion-input>
                </ion-item>
              </div>
            </div>

            <div class="form-grid">
              <div class="nike-field">
                <label>Categor\xEDa</label>
                <ion-item lines="none" class="nike-item">
                  <ion-input [(ngModel)]="nuevoPack.categoria" placeholder="Ej: Avanzados / 4ta"></ion-input>
                </ion-item>
              </div>
            </div>

            <div class="nike-field" style="margin-top: 15px;">
              <ion-item lines="none" class="nike-item-checkbox">
                <ion-label style="font-size: 11px; font-weight: 800; color: #111;">ABIERTO A INSCRIPCI\xD3N P\xDABLICA</ion-label>
                <ion-checkbox slot="start" [(ngModel)]="nuevoPack.permite_inscripcion" [checked]="nuevoPack.permite_inscripcion == 1" (ionChange)="nuevoPack.permite_inscripcion = $event.detail.checked ? 1 : 0"></ion-checkbox>
              </ion-item>
              <p class="helper-text-mobile" style="margin-left: 45px;">Si se desactiva, solo t\xFA podr\xE1s agregar alumnos.</p>
            </div>
          </div>
        </div>

        <!-- SECCI\xD3N 3B: Restricciones Individuales -->
        <div class="form-section" *ngIf="nuevoPack.tipo === 'individual'">
          <div class="section-header">
            <ion-icon name="time-outline"></ion-icon>
            <h4>Rango de Disponibilidad</h4>
          </div>
          <div class="input-group">
            <div class="nike-field">
              <label>CANTIDAD PERSONAS (DUPLA/PAREJA)</label>
              <ion-item lines="none" class="nike-item">
                <ion-input type="number" [(ngModel)]="nuevoPack.cantidad_personas" min="1"></ion-input>
              </ion-item>
            </div>

            <label>HORARIO PERMITIDO (24H)</label>
            <p class="helper-text-mobile">Opcional: Solo permite reservas en este bloque.</p>
            <div class="form-grid">
              <div class="nike-field">
                <label>Desde (HH:MM)</label>
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 5px;">
                  <ion-item lines="none" class="nike-item compact" style="flex:1; --padding-start: 8px;">
                    <ion-select [(ngModel)]="nuevoPack.rango_inicio_h" interface="popover" placeholder="HH">
                      <ion-select-option *ngFor="let h of horas" [value]="h">{{h}}</ion-select-option>
                    </ion-select>
                  </ion-item>
                  <span style="font-weight: bold;">:</span>
                  <ion-item lines="none" class="nike-item compact" style="flex:1; --padding-start: 8px;">
                    <ion-select [(ngModel)]="nuevoPack.rango_inicio_m" interface="popover" placeholder="MM">
                      <ion-select-option *ngFor="let m of minutos" [value]="m">{{m}}</ion-select-option>
                    </ion-select>
                  </ion-item>
                </div>
              </div>
              <div class="nike-field">
                <label>Hasta (HH:MM)</label>
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 5px;">
                  <ion-item lines="none" class="nike-item compact" style="flex:1; --padding-start: 8px;">
                    <ion-select [(ngModel)]="nuevoPack.rango_fin_h" interface="popover" placeholder="HH">
                      <ion-select-option *ngFor="let h of horas" [value]="h">{{h}}</ion-select-option>
                    </ion-select>
                  </ion-item>
                  <span style="font-weight: bold;">:</span>
                  <ion-item lines="none" class="nike-item compact" style="flex:1; --padding-start: 8px;">
                    <ion-select [(ngModel)]="nuevoPack.rango_fin_m" interface="popover" placeholder="MM">
                      <ion-select-option *ngFor="let m of minutos" [value]="m">{{m}}</ion-select-option>
                    </ion-select>
                  </ion-item>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-actions">
          <ion-button expand="block" class="nike-button save-btn" (click)="crearPack()" [disabled]="isSaving">
            <ion-spinner slot="start" *ngIf="isSaving" name="crescent"></ion-spinner>
            {{ nuevoPack.id ? (isSaving ? 'Actualizando...' : 'Actualizar Pack') : (isSaving ? 'Creando...' : 'Crear Pack Premium') }}
          </ion-button>
        </div>

      </div>
    </ion-content>
  </ng-template>
</ion-modal>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/entrenador-packs/entrenador-packs.page.scss */\n.header-nike {\n  position: relative;\n  min-height: 220px;\n  padding-top: calc(40px + env(safe-area-inset-top));\n  padding-bottom: 50px;\n  padding-left: 28px;\n  padding-right: 28px;\n  margin-top: -60px;\n  width: 100%;\n  z-index: 0;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 0 0 40px 40px;\n  overflow: hidden;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      160deg,\n      rgba(0, 0, 0, 0.35) 0%,\n      rgba(0, 0, 0, 0.8) 100%);\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .header-pre {\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 0 6px;\n}\n.header-content .header-title {\n  font-size: 34px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -1.5px;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.header-content .header-sub {\n  margin: 6px 0 0;\n  opacity: 0.7;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.header-stats {\n  position: absolute;\n  top: calc(20px + env(safe-area-inset-top));\n  right: 25px;\n  z-index: 3;\n}\n.header-stats .stat-bubble {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 58px;\n  height: 58px;\n  background: rgba(255, 255, 255, 0.16);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n.header-stats .stat-bubble .stat-number {\n  font-size: 22px;\n  font-weight: 950;\n  color: #fff;\n  line-height: 1;\n  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);\n}\n.header-stats .stat-bubble .stat-label {\n  font-size: 8px;\n  font-weight: 850;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  margin-top: 2px;\n}\n.main-container {\n  padding: 20px 20px 120px;\n  margin-top: -25px;\n  background: #f8f9fa;\n  border-radius: 30px 30px 0 0;\n  min-height: calc(100vh - 180px);\n  position: relative;\n  z-index: 2;\n}\n.segment-wrapper {\n  margin-bottom: 18px;\n}\n.segment-wrapper .nike-segment {\n  --background: #fff;\n  background: #fff;\n  border-radius: 16px;\n  padding: 4px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);\n}\n.segment-wrapper .nike-segment ion-segment-button {\n  --color: #888;\n  --color-checked: #fff !important;\n  --indicator-color: transparent !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --border-radius: 12px;\n  font-weight: 850;\n  min-height: 40px;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  margin: 2px;\n  position: relative;\n  z-index: 1;\n}\n.segment-wrapper .nike-segment ion-segment-button::part(native) {\n  border-radius: 12px;\n}\n.segment-wrapper .nike-segment ion-segment-button.segment-button-checked {\n  background: #000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.segment-wrapper .nike-segment ion-segment-button.segment-button-checked ion-label {\n  color: #fff !important;\n  font-weight: 900;\n}\n.segment-wrapper .nike-segment ion-segment-button ion-label {\n  transition: color 0.3s ease;\n}\n.actions-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 22px;\n  align-items: stretch;\n}\n.search-box {\n  flex: 1;\n  background: #fff;\n  border-radius: 14px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.search-box:focus-within {\n  border-color: rgba(0, 0, 0, 0.12);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);\n}\n.search-box ion-icon {\n  font-size: 18px;\n  color: #bbb;\n  flex-shrink: 0;\n}\n.search-box ion-input {\n  --padding-start: 0;\n  font-size: 13px;\n  font-weight: 600;\n  --placeholder-color: #ccc;\n}\n.add-btn {\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n  background: #000;\n  border: none;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.add-btn ion-icon {\n  font-size: 22px;\n  color: #ccff00;\n}\n.add-btn:active {\n  transform: scale(0.9);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.packs-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.pack-card {\n  background: #fff;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n}\n.pack-card:active {\n  transform: scale(0.98) translateY(2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n}\n.pack-card .card-accent {\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #000 0%,\n      #333 50%,\n      #ccff00 100%);\n  width: 100%;\n}\n.pack-card.tipo-grupal .card-accent {\n  background:\n    linear-gradient(\n      90deg,\n      #ffc107 0%,\n      #ff9800 50%,\n      #ff5722 100%);\n}\n.pack-card .card-body {\n  padding: 18px 20px;\n}\n.pack-card .card-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.pack-card .card-top .pack-info {\n  flex: 1;\n  min-width: 0;\n}\n.pack-card .card-top .pack-info .pack-name {\n  font-size: 17px;\n  font-weight: 900;\n  color: #111;\n  margin: 0 0 6px;\n  letter-spacing: -0.3px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.pack-card .card-top .pack-info .type-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 4px 10px;\n  border-radius: 8px;\n  background: #f0f0f0;\n  color: #555;\n}\n.pack-card .card-top .pack-info .type-badge.individual {\n  background: rgba(0, 0, 0, 0.06);\n  color: #333;\n}\n.pack-card .card-top .pack-info .type-badge.grupal {\n  background: rgba(255, 193, 7, 0.12);\n  color: #e6a800;\n}\n.pack-card .card-top .pack-price {\n  display: flex;\n  align-items: flex-start;\n  gap: 1px;\n  flex-shrink: 0;\n  padding-left: 15px;\n}\n.pack-card .card-top .pack-price .currency {\n  font-size: 13px;\n  font-weight: 700;\n  color: #888;\n  margin-top: 2px;\n}\n.pack-card .card-top .pack-price .amount {\n  font-size: 26px;\n  font-weight: 950;\n  color: #111;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.pack-card .stats-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #f9f9fb;\n  border-radius: 14px;\n  margin-bottom: 14px;\n}\n.pack-card .stats-row .stat-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pack-card .stats-row .stat-item ion-icon {\n  font-size: 18px;\n  color: #bbb;\n  flex-shrink: 0;\n}\n.pack-card .stats-row .stat-item .stat-text {\n  display: flex;\n  flex-direction: column;\n}\n.pack-card .stats-row .stat-item .stat-text .stat-val {\n  font-size: 16px;\n  font-weight: 900;\n  color: #111;\n  line-height: 1;\n}\n.pack-card .stats-row .stat-item .stat-text .stat-val.cupos.activo {\n  color: #4caf50;\n}\n.pack-card .stats-row .stat-item .stat-text .stat-val.cupos.pendiente {\n  color: #ffc107;\n}\n.pack-card .stats-row .stat-item .stat-text .stat-val.cupos.completo {\n  color: #f44336;\n}\n.pack-card .stats-row .stat-item .stat-text .stat-lbl {\n  font-size: 9px;\n  font-weight: 700;\n  color: #bbb;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.pack-card .stats-row .stat-divider {\n  width: 1px;\n  height: 28px;\n  background: #e8e8e8;\n  flex-shrink: 0;\n}\n.pack-card .grupal-info {\n  margin-bottom: 14px;\n}\n.pack-card .grupal-info .info-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #888;\n  background: #f5f5f5;\n  padding: 5px 12px;\n  border-radius: 10px;\n}\n.pack-card .grupal-info .info-chip ion-icon {\n  font-size: 14px;\n  color: #ffc107;\n}\n.pack-card .card-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.pack-card .card-actions .action-btn {\n  background: none;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.pack-card .card-actions .action-btn ion-icon {\n  font-size: 16px;\n}\n.pack-card .card-actions .action-btn.edit {\n  background: rgba(0, 0, 0, 0.04);\n  color: #333;\n}\n.pack-card .card-actions .action-btn.edit:active {\n  background: rgba(0, 0, 0, 0.1);\n  transform: scale(0.95);\n}\n.pack-card .card-actions .action-btn.delete {\n  background: rgba(244, 67, 54, 0.06);\n  color: #e53935;\n}\n.pack-card .card-actions .action-btn.delete:active {\n  background: rgba(244, 67, 54, 0.15);\n  transform: scale(0.95);\n}\n.empty-state {\n  text-align: center;\n  padding: 50px 30px;\n}\n.empty-state .empty-icon-box {\n  width: 90px;\n  height: 90px;\n  background: #fff;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.empty-state .empty-icon-box ion-icon {\n  font-size: 42px;\n  color: #ddd;\n}\n.empty-state h3 {\n  font-size: 22px;\n  font-weight: 950;\n  color: #111;\n  margin: 0 0 8px;\n}\n.empty-state p {\n  color: #999;\n  font-size: 13px;\n  margin-bottom: 25px;\n  font-weight: 500;\n}\n.empty-state .nike-btn {\n  --background: #000;\n  --color: #ccff00;\n  --border-radius: 14px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  height: 50px;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px auto 10px;\n  gap: 15px;\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.pagination-controls .page-info {\n  font-size: 12px;\n  font-weight: 900;\n  color: #333;\n  text-transform: uppercase;\n  background: #fff;\n  padding: 8px 18px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  min-width: 60px;\n  text-align: center;\n  letter-spacing: 1px;\n}\n.pagination-controls ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  --color: #111;\n  --background: #fff;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n}\n.pagination-controls ion-button ion-icon {\n  font-size: 16px;\n}\n.pagination-controls ion-button[disabled] {\n  opacity: 0.3;\n  --box-shadow: none;\n  --background: #f5f5f5;\n}\n.nike-modal {\n  --height: 92%;\n  --border-radius: 32px 32px 0 0;\n  --box-shadow: 0 -12px 60px rgba(0, 0, 0, 0.25);\n}\n.nike-modal ion-toolbar {\n  --background: white;\n  --color: #111;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n.nike-modal ion-toolbar ion-title {\n  font-weight: 950;\n  letter-spacing: -1px;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.nike-modal ion-toolbar ion-button {\n  --color: #000;\n  font-weight: 800;\n}\n.nike-modal .modal-form {\n  padding: 0 0 40px;\n  background: #fbfbfc;\n}\n.nike-modal .modal-form .form-section {\n  padding: 24px;\n  margin-bottom: 12px;\n  background: #fff;\n  border-radius: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.nike-modal .modal-form .form-section .section-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.nike-modal .modal-form .form-section .section-header ion-icon {\n  font-size: 18px;\n  color: #ccff00;\n  background: #000;\n  padding: 10px;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.nike-modal .modal-form .form-section .section-header h4 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 950;\n  color: #111;\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n}\n.nike-modal .modal-form .input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.nike-modal .modal-form .nike-field label {\n  display: block;\n  font-size: 10px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #999;\n  margin-bottom: 8px;\n  padding-left: 2px;\n  letter-spacing: 0.8px;\n}\n.nike-modal .modal-form .form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.nike-modal .modal-form .nike-item {\n  --background: #f5f5f7;\n  --border-radius: 16px;\n  --padding-start: 16px;\n  --highlight-height: 0;\n  font-weight: 600;\n  font-size: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  min-height: 52px;\n  transition: all 0.3s ease;\n}\n.nike-modal .modal-form .nike-item.datetime-item {\n  padding: 5px 10px;\n  --padding-start: 10px;\n}\n.nike-modal .modal-form .nike-item.compact {\n  min-height: 46px;\n}\n.nike-modal .modal-form .nike-item.textarea {\n  min-height: 120px;\n}\n.nike-modal .modal-form .nike-item:focus-within {\n  border-color: #000;\n  --background: #fff;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.nike-modal .modal-form .nike-item ion-input,\n.nike-modal .modal-form .nike-item ion-textarea,\n.nike-modal .modal-form .nike-item ion-select {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  font-weight: 700;\n  color: #111;\n}\n.nike-modal .modal-form .helper-text-mobile {\n  font-size: 10px;\n  color: #bbb;\n  margin: -4px 0 10px 2px;\n  font-weight: 500;\n}\n.nike-modal .modal-form .footer-actions {\n  padding: 24px;\n  background: #fff;\n  border-top: 1px solid #f0f0f5;\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.nike-modal .modal-form .save-btn {\n  --background: #000;\n  --color: #ccff00;\n  --border-radius: 18px;\n  font-weight: 950;\n  text-transform: uppercase;\n  height: 60px;\n  letter-spacing: 1.5px;\n  font-size: 15px;\n  margin: 0;\n  --box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);\n  transition: transform 0.2s ease;\n}\n.nike-modal .modal-form .save-btn:active {\n  transform: scale(0.96);\n  --box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n  --box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n.animate-up {\n  animation: fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n.animate-pop {\n  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;\n}\n.animate-fade {\n  animation: fadeIn 0.5s ease both;\n}\n.delay-1 {\n  animation-delay: 0.1s;\n}\n.delay-2 {\n  animation-delay: 0.2s;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(25px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes popIn {\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  70% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.payment-reminders-section {\n  margin-bottom: 24px;\n  background: white;\n  border-radius: 20px;\n  padding: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.payment-reminders-section .section-header-compact {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding-left: 4px;\n}\n.payment-reminders-section .section-header-compact .mini-title {\n  font-size: 11px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #000;\n  margin: 0;\n}\n.payment-reminders-section .section-header-compact .mini-badge {\n  --background: #000;\n  --color: #ccff00;\n  font-weight: 900;\n  border-radius: 6px;\n  font-size: 10px;\n}\n.payment-reminders-section .reminders-scroll {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding: 4px 4px 12px;\n  margin-bottom: -8px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.payment-reminders-section .reminders-scroll::-webkit-scrollbar {\n  display: none;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 12px 14px;\n  background: #f8f9fa;\n  border-radius: 14px;\n  min-width: 180px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  transition: all 0.2s ease;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip:active {\n  transform: scale(0.96);\n  background: #f1f3f5;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-left .alert-icon {\n  font-size: 18px;\n  color: #ff3b30;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-left .name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111;\n  white-space: nowrap;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-right .count {\n  font-size: 11px;\n  font-weight: 800;\n  color: #888;\n}\n.payment-reminders-section .reminders-scroll .reminder-chip .chip-right .wa-icon {\n  font-size: 18px;\n  color: #25d366;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=entrenador-packs.page.css.map */\n'] }]
  }], () => [{ type: Location }, { type: PacksService }, { type: Router }, { type: AlertController }, { type: LoadingController }, { type: MysqlService }], { modal: [{
    type: ViewChild,
    args: [IonModal]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrenadorPacksPage, { className: "EntrenadorPacksPage", filePath: "src/app/pages/entrenador-packs/entrenador-packs.page.ts", lineNumber: 40 });
})();
export {
  EntrenadorPacksPage
};
//# sourceMappingURL=entrenador-packs.page-INV3S35X.js.map

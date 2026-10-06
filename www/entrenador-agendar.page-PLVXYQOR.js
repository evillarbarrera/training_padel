import {
  EntrenamientoService
} from "./chunk-DEYW32VP.js";
import {
  es_default
} from "./chunk-IJINKETP.js";
import {
  AlertController,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTitle,
  IonToolbar,
  LoadingController,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  NotificationService
} from "./chunk-OPJ5BMLN.js";
import "./chunk-DBDG6EJI.js";
import {
  addCircleOutline,
  addIcons,
  addOutline,
  calendarOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  closeOutline,
  createOutline,
  personCircleOutline,
  timeOutline,
  trashOutline
} from "./chunk-KFN47MEP.js";
import "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  FormsModule,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Observable,
  Router,
  UpperCasePipe,
  ViewChild,
  forkJoin,
  registerLocaleData,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
import "./chunk-2WF3DFKV.js";
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

// src/app/pages/entrenador-agendar/entrenador-agendar.page.ts
var _c0 = ["bookingModal"];
var _c1 = ["detailModal"];
function EntrenadorAgendarPage_ion_segment_button_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-segment-button", 21)(1, "ion-label")(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.formatDate(d_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, \u0275\u0275pipeBind4(4, 3, d_r2, "EEE", "", "es-ES")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 10, d_r2, "dd"));
  }
}
function EntrenadorAgendarPage_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_div_17_div_2_Template_div_click_0_listener() {
      const club_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.selectedClubId = club_r5.id;
      return \u0275\u0275resetView(ctx_r2.onClubChange());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.selectedClubId === club_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", club_r5.nombre, " ");
  }
}
function EntrenadorAgendarPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275template(2, EntrenadorAgendarPage_div_17_div_2_Template, 2, 3, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.clubesDisponibles);
  }
}
function EntrenadorAgendarPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "ion-spinner", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Buscando disponibilidad...");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorAgendarPage_ng_container_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "ion-icon", 34);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No hay bloques de horario para este d\xEDa.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 35);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_container_20_div_1_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.router.navigate(["/disponibilidad-entrenador"]));
    });
    \u0275\u0275text(5, " Abrir disponibilidad ");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorAgendarPage_ng_container_20_div_3_div_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 45);
  }
  if (rf & 2) {
    const slot_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", slot_r8.jugador_foto, \u0275\u0275sanitizeUrl);
  }
}
function EntrenadorAgendarPage_ng_container_20_div_3_div_4_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 46);
  }
}
function EntrenadorAgendarPage_ng_container_20_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, EntrenadorAgendarPage_ng_container_20_div_3_div_4_img_1_Template, 1, 1, "img", 43)(2, EntrenadorAgendarPage_ng_container_20_div_3_div_4_ion_icon_2_Template, 1, 0, "ion-icon", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slot_r8.jugador_foto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !slot_r8.jugador_foto);
  }
}
function EntrenadorAgendarPage_ng_container_20_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r8.club_nombre || "Otro Club", " ");
  }
}
function EntrenadorAgendarPage_ng_container_20_div_3_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 48);
  }
}
function EntrenadorAgendarPage_ng_container_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_container_20_div_3_Template_div_click_0_listener() {
      const slot_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.seleccionarSlot(slot_r8));
    });
    \u0275\u0275elementStart(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EntrenadorAgendarPage_ng_container_20_div_3_div_4_Template, 3, 2, "div", 39)(5, EntrenadorAgendarPage_ng_container_20_div_3_div_5_Template, 2, 1, "div", 40)(6, EntrenadorAgendarPage_ng_container_20_div_3_ion_icon_6_Template, 1, 0, "ion-icon", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ocupado", slot_r8.ocupado)("disponible", !slot_r8.ocupado)("otro-club", slot_r8.ocupado && ctx_r2.selectedClubId && slot_r8.club_id != ctx_r2.selectedClubId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slot_r8.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slot_r8.ocupado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slot_r8.ocupado && ctx_r2.selectedClubId && slot_r8.club_id != ctx_r2.selectedClubId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !slot_r8.ocupado);
  }
}
function EntrenadorAgendarPage_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EntrenadorAgendarPage_ng_container_20_div_1_Template, 6, 0, "div", 30);
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275template(3, EntrenadorAgendarPage_ng_container_20_div_3_Template, 7, 10, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.slotsDisponibles.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.slotsDisponibles);
  }
}
function EntrenadorAgendarPage_ng_template_23_div_19_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275property("value", p_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r11.nombre, " (", p_r11.categoria, ") ");
  }
}
function EntrenadorAgendarPage_ng_template_23_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "ion-icon", 88);
    \u0275\u0275elementStart(2, "ion-item", 89)(3, "ion-label", 90);
    \u0275\u0275text(4, "Seleccionar Pack (Producto):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-select", 91);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_div_19_Template_ion_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.packGrupalSeleccionado, $event) || (ctx_r2.packGrupalSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_ng_template_23_div_19_Template_ion_select_ionChange_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPackGrupalChange());
    });
    \u0275\u0275template(6, EntrenadorAgendarPage_ng_template_23_div_19_ion_select_option_6_Template, 2, 3, "ion-select-option", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packGrupalSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.packsGrupalesDisponibles);
  }
}
function EntrenadorAgendarPage_ng_template_23_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_23_div_28_Template_div_click_0_listener() {
      const a_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleAlumnoSeleccion(a_r13));
    });
    \u0275\u0275element(1, "img", 93);
    \u0275\u0275elementStart(2, "span", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.isAlumnoSelected(a_r13));
    \u0275\u0275advance();
    \u0275\u0275property("src", a_r13.jugador_foto, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r13.jugador_nombre.split(" ")[0]);
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_5_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    \u0275\u0275property("value", p_r15.id || p_r15.pack_jugador_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r15.pack_nombre, " (", p_r15.sesiones_restantes, " cr\xE9d.) ");
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "ion-icon", 105);
    \u0275\u0275elementStart(2, "ion-item", 89)(3, "ion-label", 90);
    \u0275\u0275text(4, "Usar Pack del Alumno:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-select", 106);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_div_29_div_5_Template_ion_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.alumnoSeleccionado.pack_jugador_id, $event) || (ctx_r2.alumnoSeleccionado.pack_jugador_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_ng_template_23_div_29_div_5_Template_ion_select_ionChange_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onPackAlumnoToggle());
    });
    \u0275\u0275template(6, EntrenadorAgendarPage_ng_template_23_div_29_div_5_ion_select_option_6_Template, 2, 3, "ion-select-option", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.alumnoSeleccionado.pack_jugador_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.alumnosPacksConCredito);
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "span", 108);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 109);
    \u0275\u0275text(4, " Saldo disponible: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alumnoSeleccionado.pack_nombre || "Pack Activo");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.alumnoSeleccionado.sesiones_restantes, " clases");
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "p", 111);
    \u0275\u0275element(2, "ion-icon", 112);
    \u0275\u0275text(3, " El alumno se qued\xF3 sin cr\xE9ditos. ");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_23_div_29_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.togglePackManual());
    });
    \u0275\u0275elementStart(1, "div", 114);
    \u0275\u0275element(2, "ion-checkbox", 115);
    \u0275\u0275elementStart(3, "div", 116)(4, "span", 117);
    \u0275\u0275text(5, "Asignar un pack NUEVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 118);
    \u0275\u0275text(7, "Venta manual de sesi\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "ion-icon", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.mostrarSelectorPackManual);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.mostrarSelectorPackManual);
    \u0275\u0275advance(6);
    \u0275\u0275property("name", ctx_r2.mostrarSelectorPackManual ? "checkmark-circle" : "add-circle-outline")("color", ctx_r2.mostrarSelectorPackManual ? "success" : "medium");
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_9_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 123);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r18 = ctx.$implicit;
    \u0275\u0275property("value", p_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r18.nombre, " - $", \u0275\u0275pipeBind2(2, 3, p_r18.precio, "1.0-0"));
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "ion-icon", 120);
    \u0275\u0275elementStart(2, "ion-select", 121);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_div_29_div_9_Template_ion_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.packAAsignar, $event) || (ctx_r2.packAAsignar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, EntrenadorAgendarPage_ng_template_23_div_29_div_9_ion_select_option_3_Template, 3, 6, "ion-select-option", 122);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packAAsignar);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.packsParaTipo);
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "span", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 128);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r19.jugador_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", s_r19.sesiones_restantes > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r19.sesiones_restantes > 0 ? s_r19.pack_nombre : "Sin saldo", " ");
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275template(1, EntrenadorAgendarPage_ng_template_23_div_29_div_10_div_1_Template, 5, 3, "div", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.alumnosSeleccionados);
  }
}
function EntrenadorAgendarPage_ng_template_23_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96);
    \u0275\u0275element(2, "ion-icon", 97);
    \u0275\u0275elementStart(3, "h4", 98);
    \u0275\u0275text(4, "Gesti\xF3n de Cobro");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, EntrenadorAgendarPage_ng_template_23_div_29_div_5_Template, 7, 2, "div", 99)(6, EntrenadorAgendarPage_ng_template_23_div_29_div_6_Template, 7, 2, "div", 100)(7, EntrenadorAgendarPage_ng_template_23_div_29_div_7_Template, 4, 0, "div", 101)(8, EntrenadorAgendarPage_ng_template_23_div_29_div_8_Template, 9, 5, "div", 102)(9, EntrenadorAgendarPage_ng_template_23_div_29_div_9_Template, 4, 2, "div", 59)(10, EntrenadorAgendarPage_ng_template_23_div_29_div_10_Template, 2, 1, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.alumnosPacksConCredito.length >= 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.alumnosPacksConCredito.length === 0 && (ctx_r2.alumnoSeleccionado.sesiones_restantes || 0) > 0 && !ctx_r2.mostrarSelectorPackManual);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.alumnosPacksConCredito.length === 0 && (ctx_r2.alumnoSeleccionado.sesiones_restantes || 0) <= 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.alumnosPacksConCredito.length > 0 || (ctx_r2.alumnoSeleccionado.sesiones_restantes || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mostrarSelectorPackManual || ctx_r2.alumnosPacksConCredito.length === 0 && (ctx_r2.alumnoSeleccionado.sesiones_restantes || 0) <= 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tipoClaseSeleccionado !== "individual" && ctx_r2.alumnosSeleccionados.length > 0);
  }
}
function EntrenadorAgendarPage_ng_template_23_ion_select_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r20 = ctx.$implicit;
    \u0275\u0275property("value", m_r20.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r20.nombre);
  }
}
function EntrenadorAgendarPage_ng_template_23_div_46_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    \u0275\u0275property("value", c_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Sesi\xF3n ", c_r22.sesion_numero, ": ", c_r22.titulo);
  }
}
function EntrenadorAgendarPage_ng_template_23_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "ion-select", 130);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_div_46_Template_ion_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.claseMallaId, $event) || (ctx_r2.claseMallaId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_ng_template_23_div_46_Template_ion_select_ionChange_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClaseChange());
    });
    \u0275\u0275template(2, EntrenadorAgendarPage_ng_template_23_div_46_ion_select_option_2_Template, 2, 3, "ion-select-option", 122);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.claseMallaId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.clasesDisponibles);
  }
}
function EntrenadorAgendarPage_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 49)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 50)(5, "ion-button", 51);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_23_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModal());
    });
    \u0275\u0275element(6, "ion-icon", 52);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content", 53)(8, "div", 54)(9, "ion-segment", 55);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_Template_ion_segment_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.tipoClaseSeleccionado, $event) || (ctx_r2.tipoClaseSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_ng_template_23_Template_ion_segment_ionChange_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTipoClaseChange());
    });
    \u0275\u0275elementStart(10, "ion-segment-button", 56)(11, "ion-label");
    \u0275\u0275text(12, "Individual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-segment-button", 57)(14, "ion-label");
    \u0275\u0275text(15, "Multi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-segment-button", 58)(17, "ion-label");
    \u0275\u0275text(18, "Grupal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, EntrenadorAgendarPage_ng_template_23_div_19_Template, 7, 2, "div", 59);
    \u0275\u0275elementStart(20, "div", 60)(21, "div", 61)(22, "h3", 62);
    \u0275\u0275text(23, "Seleccionar Alumnos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 63);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-searchbar", 64);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_Template_ion_searchbar_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filtroAlumnos, $event) || (ctx_r2.filtroAlumnos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 65);
    \u0275\u0275template(28, EntrenadorAgendarPage_ng_template_23_div_28_Template, 4, 4, "div", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, EntrenadorAgendarPage_ng_template_23_div_29_Template, 11, 6, "div", 67);
    \u0275\u0275elementStart(30, "div", 68)(31, "div", 69);
    \u0275\u0275element(32, "ion-icon", 70);
    \u0275\u0275elementStart(33, "h4", 71);
    \u0275\u0275text(34, "Planificaci\xF3n T\xE9cnica");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 72)(36, "ion-select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_Template_ion_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.categoriaFiltro, $event) || (ctx_r2.categoriaFiltro = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_ng_template_23_Template_ion_select_ionChange_36_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCategoriaChange());
    });
    \u0275\u0275elementStart(37, "ion-select-option", 74);
    \u0275\u0275text(38, "Todas las categor\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ion-select-option", 75);
    \u0275\u0275text(40, "Malla Adultos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ion-select-option", 76);
    \u0275\u0275text(42, "Malla Menores");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 72)(44, "ion-select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_Template_ion_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.planificacionId, $event) || (ctx_r2.planificacionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_ng_template_23_Template_ion_select_ionChange_44_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMallaChange());
    });
    \u0275\u0275template(45, EntrenadorAgendarPage_ng_template_23_ion_select_option_45_Template, 2, 2, "ion-select-option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, EntrenadorAgendarPage_ng_template_23_div_46_Template, 3, 2, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 79)(48, "div", 80);
    \u0275\u0275element(49, "ion-icon", 81);
    \u0275\u0275elementStart(50, "h4", 71);
    \u0275\u0275text(51, "Recurrencia");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 82);
    \u0275\u0275element(53, "ion-icon", 83);
    \u0275\u0275elementStart(54, "ion-select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_23_Template_ion_select_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.recurrencia, $event) || (ctx_r2.recurrencia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(55, "ion-select-option", 21);
    \u0275\u0275text(56, "Sin recurrencia (Hoy)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ion-select-option", 21);
    \u0275\u0275text(58, "2 Reservas semanales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ion-select-option", 21);
    \u0275\u0275text(60, "4 Reservas mensuales");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 85)(62, "ion-button", 86);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_23_Template_ion_button_click_62_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmarAgendamiento());
    });
    \u0275\u0275text(63, " Agendar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Agendar ", ctx_r2.selectedSlot == null ? null : ctx_r2.selectedSlot.hour);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.tipoClaseSeleccionado);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.tipoClaseSeleccionado === "grupal");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("(", ctx_r2.alumnosSeleccionados.length, "/", ctx_r2.maxAlumnos, ")");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filtroAlumnos);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.alumnosFiltrados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.alumnoSeleccionado);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.categoriaFiltro);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.planificacionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.mallasFiltradas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.planificacionId);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.recurrencia);
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedSlot.slot.jugador_nombre || "Alumno");
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Clase Grupal (", ctx_r2.participantesGrupo.length, " Alumnos)");
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275element(1, "img", 151);
    \u0275\u0275elementStart(2, "span", 152);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-icon", 153);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_6_Template_ion_icon_click_4_listener($event) {
      const p_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.quitarJugador(p_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getFotoUrl(p_r27), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r27.nombre || p_r27.jugador_nombre);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275text(1, " Sin alumnos inscritos a\xFAn. ");
    \u0275\u0275elementEnd();
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_13_div_1_Template_div_click_0_listener() {
      const res_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.addJugadorManual(res_r29));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", res_r29.nombre, " ");
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275template(1, EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_13_div_1_Template, 2, 1, "div", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.searchResultsMini);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 139);
    \u0275\u0275element(2, "ion-icon", 140);
    \u0275\u0275elementStart(3, "b", 141);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 142);
    \u0275\u0275template(6, EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_6_Template, 5, 2, "div", 143)(7, EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_7_Template, 2, 0, "div", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 145)(9, "label", 146);
    \u0275\u0275text(10, "AGREGAR ALUMNO MANUALMENTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 147)(12, "ion-searchbar", 148);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_26_div_8_div_6_Template_ion_searchbar_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQueryMini, $event) || (ctx_r2.searchQueryMini = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionInput", function EntrenadorAgendarPage_ng_template_26_div_8_div_6_Template_ion_searchbar_ionInput_12_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.searchPlayersMini());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EntrenadorAgendarPage_ng_template_26_div_8_div_6_div_13_Template, 2, 1, "div", 149);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Participantes (", ctx_r2.participantesGrupo.length, "/", ctx_r2.selectedSlot.slot.capacidad_maxima || 6, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.participantesGrupo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.participantesGrupo.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQueryMini);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.searchResultsMini.length > 0);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_7_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 162);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.selectedSlot.slot.malla_nombre, " - ", ctx_r2.selectedSlot.slot.clase_titulo);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_7_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Sin planificaci\xF3n t\xE9cnica asignada.");
    \u0275\u0275elementEnd();
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 158)(1, "h4");
    \u0275\u0275text(2, "Planificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EntrenadorAgendarPage_ng_template_26_div_8_div_7_p_3_Template, 2, 2, "p", 159)(4, EntrenadorAgendarPage_ng_template_26_div_8_div_7_p_4_Template, 2, 0, "p", 16);
    \u0275\u0275elementStart(5, "ion-button", 160);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_26_div_8_div_7_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.enableDetailEdit());
    });
    \u0275\u0275element(6, "ion-icon", 161);
    \u0275\u0275text(7, " Editar Planificaci\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selectedSlot.slot.malla_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedSlot.slot.malla_nombre);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_8_ion_select_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r32 = ctx.$implicit;
    \u0275\u0275property("value", m_r32.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r32.nombre);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_8_ion_item_6_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r34 = ctx.$implicit;
    \u0275\u0275property("value", c_r34.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", c_r34.sesion_numero, ") ", c_r34.titulo);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_8_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 164)(1, "ion-select", 168);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_26_div_8_div_8_ion_item_6_Template_ion_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.claseMallaId, $event) || (ctx_r2.claseMallaId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_ng_template_26_div_8_div_8_ion_item_6_Template_ion_select_ionChange_1_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onClaseChange());
    });
    \u0275\u0275template(2, EntrenadorAgendarPage_ng_template_26_div_8_div_8_ion_item_6_ion_select_option_2_Template, 2, 3, "ion-select-option", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.claseMallaId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.clasesDisponibles);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 158)(1, "h4", 163);
    \u0275\u0275text(2, "Editar Planificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item", 164)(4, "ion-select", 165);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_ng_template_26_div_8_div_8_Template_ion_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.planificacionId, $event) || (ctx_r2.planificacionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_ng_template_26_div_8_div_8_Template_ion_select_ionChange_4_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onMallaChange());
    });
    \u0275\u0275template(5, EntrenadorAgendarPage_ng_template_26_div_8_div_8_ion_select_option_5_Template, 2, 2, "ion-select-option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, EntrenadorAgendarPage_ng_template_26_div_8_div_8_ion_item_6_Template, 3, 2, "ion-item", 166);
    \u0275\u0275elementStart(7, "ion-button", 167);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_26_div_8_div_8_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveTechnicalDetail());
    });
    \u0275\u0275text(8, "Guardar Plan");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.planificacionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.mallas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.planificacionId);
  }
}
function EntrenadorAgendarPage_ng_template_26_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 132);
    \u0275\u0275template(2, EntrenadorAgendarPage_ng_template_26_div_8_h2_2_Template, 2, 1, "h2", 16)(3, EntrenadorAgendarPage_ng_template_26_div_8_h2_3_Template, 2, 1, "h2", 16);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, EntrenadorAgendarPage_ng_template_26_div_8_div_6_Template, 14, 6, "div", 133)(7, EntrenadorAgendarPage_ng_template_26_div_8_div_7_Template, 8, 2, "div", 134)(8, EntrenadorAgendarPage_ng_template_26_div_8_div_8_Template, 9, 3, "div", 134);
    \u0275\u0275elementStart(9, "div", 135)(10, "ion-button", 136);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_26_div_8_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmarCancelacion());
    });
    \u0275\u0275element(11, "ion-icon", 137);
    \u0275\u0275text(12, " Cancelar Reserva ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.participantesGrupo.length <= 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.participantesGrupo.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedSlot.slot.reserva_tipo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.selectedSlot.slot.tipo || "").toLowerCase().includes("grupal") || (ctx_r2.selectedSlot.slot.reserva_tipo || "").toLowerCase().includes("grupal") || ctx_r2.selectedSlot.slot.pack_id && ctx_r2.selectedSlot.slot.pack_id != "0");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isEditingDetail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isEditingDetail);
  }
}
function EntrenadorAgendarPage_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 49)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 50)(5, "ion-button", 51);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_ng_template_26_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModal());
    });
    \u0275\u0275element(6, "ion-icon", 52);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content", 53);
    \u0275\u0275template(8, EntrenadorAgendarPage_ng_template_26_div_8_Template, 13, 6, "div", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Detalles ", ctx_r2.selectedSlot == null ? null : ctx_r2.selectedSlot.hour);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.selectedSlot);
  }
}
registerLocaleData(es_default);
var _EntrenadorAgendarPage = class _EntrenadorAgendarPage {
  get maxAlumnos() {
    if (this.tipoClaseSeleccionado === "multijugador")
      return 4;
    if (this.tipoClaseSeleccionado === "grupal")
      return 6;
    return 1;
  }
  get alumnosPacksConCredito() {
    return (this.alumnosPacks || []).map((p) => {
      const reservadas = Number(p.sesiones_reservadas || 0);
      const restantes = Number(p.sesiones_restantes || 0);
      p._disponibles = restantes - reservadas;
      return p;
    }).filter((p) => Number(p.sesiones_restantes || 0) > 0);
  }
  get alumnosFiltrados() {
    if (!this.filtroAlumnos)
      return this.alumnos;
    const f = this.filtroAlumnos.toLowerCase();
    return this.alumnos.filter((a) => (a.jugador_nombre || "").toLowerCase().includes(f) || (a.pack_nombre || "").toLowerCase().includes(f));
  }
  get packsParaTipo() {
    if (this.tipoClaseSeleccionado === "individual") {
      return this.packsDisponibles.filter((p) => {
        const tipo = (p.tipo || "").toLowerCase();
        const personas = Number(p.cantidad_personas || 1);
        const capMax = Number(p.capacidad_maxima || personas);
        return tipo !== "grupal" && tipo !== "pack_grupal" && personas < 2 && capMax < 4;
      });
    } else if (this.tipoClaseSeleccionado === "multijugador") {
      return this.packsDisponibles.filter((p) => {
        const tipo = (p.tipo || "").toLowerCase();
        const personas = Number(p.cantidad_personas || 1);
        const capMax = Number(p.capacidad_maxima || personas);
        return personas > 1 && personas < 4 || capMax >= 2 && capMax < 4 || tipo === "duo" || tipo === "trio" || tipo === "multijugador";
      });
    } else {
      return this.packsDisponibles.filter((p) => {
        const tipo = (p.tipo || "").toLowerCase();
        const personas = Number(p.cantidad_personas || 1);
        const capMax = Number(p.capacidad_maxima || personas);
        return tipo === "grupal" || tipo === "pack_grupal" || capMax >= 4 || personas >= 5;
      });
    }
  }
  constructor(router, entrenamientoService, alertCtrl, loadingCtrl, toastCtrl, notificationService) {
    this.router = router;
    this.entrenamientoService = entrenamientoService;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.notificationService = notificationService;
    this.entrenadorId = Number(localStorage.getItem("userId"));
    this.isLoading = false;
    this.diasAgenda = [];
    this.diaSeleccionado = "";
    this.slotsDisponibles = [];
    this.cargandoHorarios = false;
    this.slotsPorDia = {};
    this.clubesDisponibles = [];
    this.selectedClubId = null;
    this.alumnos = [];
    this.filtroAlumnos = "";
    this.packsDisponibles = [];
    this.mallas = [];
    this.isBookingModalOpen = false;
    this.selectedSlot = null;
    this.recurrencia = 1;
    this.searchQueryMini = "";
    this.searchResultsMini = [];
    this.isSearchingMini = false;
    this.participantesGrupo = [];
    this.tipoClaseSeleccionado = "individual";
    this.alumnosSeleccionados = [];
    this.alumnoSeleccionado = null;
    this.mostrarOpcionPack = false;
    this.mostrarSelectorPackManual = false;
    this.packAAsignar = null;
    this.packsGrupalesDisponibles = [];
    this.packGrupalSeleccionado = null;
    this.alumnosPacks = [];
    this.cargandoPacks = false;
    this.planificacionId = null;
    this.claseMallaId = null;
    this.categoriaFiltro = "todos";
    this.mallasFiltradas = [];
    this.clasesDisponibles = [];
    this.contenidoClase = "";
    this.isDetailModalOpen = false;
    this.isEditingDetail = false;
    addIcons({
      chevronBackOutline,
      calendarOutline,
      timeOutline,
      checkmarkCircleOutline,
      closeOutline,
      personCircleOutline,
      addCircleOutline,
      trashOutline,
      createOutline,
      addOutline
    });
  }
  ngOnInit() {
    this.generarDias();
    this.loadBasics();
    this.loadDisponibilidad();
  }
  generarDias() {
    const today = /* @__PURE__ */ new Date();
    this.diasAgenda = [];
    for (let i = -60; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      this.diasAgenda.push(d);
    }
    this.diaSeleccionado = this.formatDate(today);
    setTimeout(() => {
      const activeBtn = document.querySelector(".nike-segment-days ion-segment-button.segment-button-checked");
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }, 500);
  }
  loadBasics() {
    this.entrenamientoService.getAlumnosGlobales(this.entrenadorId).subscribe({
      next: (res) => {
        const uniqueAlumnos = /* @__PURE__ */ new Map();
        (res || []).forEach((a) => {
          if (!uniqueAlumnos.has(a.jugador_id)) {
            let foto = this.getFotoUrl(a);
            const restantes = Number(a.sesiones_restantes || 0);
            const reservadas = Number(a.sesiones_reservadas || 0);
            let pNombre = a.pack_nombre || (a.pack_nombres && !a.pack_nombres.includes(",") ? a.pack_nombres : "Cargando pack...");
            uniqueAlumnos.set(a.jugador_id, __spreadProps(__spreadValues({}, a), {
              jugador_foto: foto,
              pack_nombre: pNombre,
              sesiones_restantes: restantes,
              sesiones_reservadas: reservadas,
              creditos_reales: Number(a.creditos_reales || 0)
            }));
          }
        });
        this.alumnos = Array.from(uniqueAlumnos.values());
      },
      error: (err) => console.error("Error loading students:", err)
    });
    this.entrenamientoService.getPacks(this.entrenadorId).subscribe((res) => this.packsDisponibles = res);
    this.entrenamientoService.getMallas(this.entrenadorId).subscribe((res) => {
      this.mallas = res;
      this.filtrarMallas();
    });
  }
  loadDisponibilidad() {
    this.cargandoHorarios = true;
    forkJoin({
      dispo: this.entrenamientoService.getDisponibilidadEntrenador(this.entrenadorId),
      agenda: this.entrenamientoService.getReservasEntrenador(this.entrenadorId)
    }).subscribe({
      next: (res) => {
        this.slotsPorDia = {};
        this.clubesDisponibles = [];
        const clubMap = /* @__PURE__ */ new Map();
        res.dispo.forEach((s) => {
          if (s.club_id && !clubMap.has(s.club_id)) {
            clubMap.set(s.club_id, { id: s.club_id, nombre: s.club_nombre });
          }
          const fecha = this.extractDate(s.fecha_inicio);
          if (!this.slotsPorDia[fecha])
            this.slotsPorDia[fecha] = [];
          this.slotsPorDia[fecha].push(__spreadProps(__spreadValues({}, s), { time: this.extractTime(s.fecha_inicio) }));
        });
        this.clubesDisponibles = Array.from(clubMap.values());
        if (this.clubesDisponibles.length > 0 && !this.selectedClubId) {
          this.selectedClubId = this.clubesDisponibles[0].id;
        }
        this.mergeAgenda(res.agenda);
        this.actualizarSlotsVisibles();
        this.cargandoHorarios = false;
      },
      error: (err) => {
        this.cargandoHorarios = false;
        this.mostrarToast("Error al cargar agenda");
      }
    });
  }
  mergeAgenda(agendaData) {
    if (!agendaData)
      return;
    const reservas = agendaData.reservas_tradicionales || [];
    reservas.forEach((a) => {
      const fecha = a.fecha || this.extractDate(a.fecha_inicio);
      const rawHora = a.hora_inicio || this.extractTime(a.fecha_inicio) || "08:00:00";
      const hora = rawHora.slice(0, 5);
      this.applyToSlot(fecha, hora, a);
    });
    const templates = agendaData.packs_grupales || [];
    templates.forEach((t) => {
      const rawHora = t.hora_inicio || "08:00:00";
      const hora = rawHora.slice(0, 5);
      if (t.fecha) {
        this.applyToSlot(t.fecha, hora, __spreadProps(__spreadValues({}, t), {
          reserva_id: t.pack_id,
          reserva_tipo: "Entrenamiento Grupal",
          jugador_nombre: t.jugador_nombre || "Abierto para inscripci\xF3n"
        }));
      } else {
        this.diasAgenda.forEach((date) => {
          const dayIndex = date.getDay();
          const dayName = date.toLocaleDateString("es-ES", { weekday: "long" }).toLowerCase();
          const dayRef = t.dia_semana != null ? t.dia_semana.toString().toLowerCase() : "";
          const daysMap = ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"];
          if (dayRef === dayIndex.toString() || dayRef === dayName || dayRef === daysMap[dayIndex]) {
            this.applyToSlot(this.formatDate(date), hora, __spreadProps(__spreadValues({}, t), {
              reserva_id: t.pack_id,
              reserva_tipo: "Entrenamiento Grupal (Recurrente)",
              jugador_nombre: "Clase Grupal"
            }));
          }
        });
      }
    });
  }
  applyToSlot(fecha, hora, data) {
    if (!this.slotsPorDia[fecha])
      this.slotsPorDia[fecha] = [];
    let existing = this.slotsPorDia[fecha].find((s) => s.time === hora);
    const ocupadoData = {
      ocupado: true,
      reserva_id: data.reserva_id || data.id,
      jugador_nombre: data.jugador_nombre || data.nombre_jugador,
      jugador_foto: this.getFotoUrl(data),
      reserva_tipo: data.pack_nombre || data.tipo,
      club_id: data.club_id,
      club_nombre: data.club_nombre,
      malla_id: data.malla_id,
      clase_id: data.clase_id,
      malla_nombre: data.malla_nombre,
      clase_titulo: data.clase_titulo,
      clase_objetivo: data.clase_objetivo,
      clase_calentamiento: data.clase_calentamiento,
      clase_drills: data.clase_drills
    };
    if (existing) {
      Object.assign(existing, ocupadoData);
    } else {
      this.slotsPorDia[fecha].push(__spreadValues({
        fecha_inicio: `${fecha} ${hora}:00`,
        time: hora
      }, ocupadoData));
    }
  }
  onDiaChange(event) {
    this.diaSeleccionado = event.detail.value;
    this.actualizarSlotsVisibles();
  }
  onClubChange() {
    this.actualizarSlotsVisibles();
  }
  actualizarSlotsVisibles() {
    let slots = this.slotsPorDia[this.diaSeleccionado] || [];
    if (this.selectedClubId) {
      slots = slots.filter((s) => Number(s.club_id) === Number(this.selectedClubId) || s.ocupado);
    }
    this.slotsDisponibles = slots.sort((a, b) => a.time.localeCompare(b.time));
  }
  seleccionarSlot(slot) {
    this.selectedSlot = { slot, dateStr: this.diaSeleccionado, hour: slot.time };
    if (slot.ocupado) {
      this.isDetailModalOpen = true;
      this.isEditingDetail = false;
      this.participantesGrupo = slot.inscritos || [];
    } else {
      this.resetBookingState();
      this.isBookingModalOpen = true;
    }
  }
  searchPlayersMini() {
    if (this.searchQueryMini.length < 3) {
      this.searchResultsMini = [];
      return;
    }
    this.isSearchingMini = true;
    this.entrenamientoService.searchAlumnos(this.searchQueryMini).subscribe({
      next: (res) => {
        this.searchResultsMini = res;
        this.isSearchingMini = false;
      },
      error: () => this.isSearchingMini = false
    });
  }
  addJugadorManual(player) {
    return __async(this, null, function* () {
      if (!this.selectedSlot?.slot?.reserva_id)
        return;
      const loading = yield this.loadingCtrl.create({ message: "Agregando jugador..." });
      yield loading.present();
      this.entrenamientoService.addJugadorAReserva(this.selectedSlot.slot.reserva_id, player.id).subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.success) {
            this.mostrarToast("\u2705 Jugador agregado a esta sesi\xF3n");
            this.searchQueryMini = "";
            this.searchResultsMini = [];
            if (!this.selectedSlot.slot.inscritos)
              this.selectedSlot.slot.inscritos = [];
            this.selectedSlot.slot.inscritos.push({
              nombre: player.nombre,
              foto: player.foto_perfil
            });
            this.participantesGrupo = [...this.selectedSlot.slot.inscritos];
          } else {
            this.mostrarToast(res.error || "No se pudo agregar al jugador");
          }
        },
        error: (err) => {
          loading.dismiss();
          this.mostrarToast("Error de conexi\xF3n");
        }
      });
    });
  }
  resetBookingState() {
    this.tipoClaseSeleccionado = "individual";
    this.alumnoSeleccionado = null;
    this.alumnosSeleccionados = [];
    this.planificacionId = null;
    this.claseMallaId = null;
    this.packAAsignar = null;
    this.mostrarSelectorPackManual = false;
    this.recurrencia = 1;
    this.filtroAlumnos = "";
    this.onCategoriaChange();
  }
  cerrarModal() {
    this.isBookingModalOpen = false;
    this.isDetailModalOpen = false;
    this.isEditingDetail = false;
    this.selectedSlot = null;
    this.alumnoSeleccionado = null;
    this.alumnosSeleccionados = [];
    this.planificacionId = null;
    this.claseMallaId = null;
    this.packAAsignar = null;
    this.mostrarOpcionPack = false;
  }
  toggleAlumnoSeleccion(alumno) {
    if (this.tipoClaseSeleccionado === "individual") {
      this.alumnoSeleccionado = alumno;
      this.alumnosSeleccionados = [alumno];
    } else {
      const idx = this.alumnosSeleccionados.findIndex((a) => (a.jugador_id || a.id) === (alumno.jugador_id || alumno.id));
      if (idx >= 0) {
        this.alumnosSeleccionados.splice(idx, 1);
      } else if (this.alumnosSeleccionados.length < this.maxAlumnos) {
        this.alumnosSeleccionados.push(alumno);
      }
      this.alumnoSeleccionado = this.alumnosSeleccionados[0] || null;
    }
    this.packAAsignar = null;
    this.alumnosPacks = [];
    if (this.alumnoSeleccionado) {
      this.cargarPacksAlumno(this.alumnoSeleccionado.jugador_id || this.alumnoSeleccionado.id);
    }
  }
  cargarPacksAlumno(jugadorId) {
    this.cargandoPacks = true;
    this.entrenamientoService.getPacksAlumno(jugadorId).subscribe({
      next: (res) => {
        const rawPacks = Array.isArray(res) ? res : res.data || res.packs || [];
        this.alumnosPacks = rawPacks.map((p) => {
          const totales = Number(p.sesiones_totales || p.sesiones || 0);
          const reservadas = Number(p.sesiones_reservadas || 0);
          const restantes = p.sesiones_restantes !== void 0 ? Number(p.sesiones_restantes) : totales - reservadas;
          p._disponibles = restantes - reservadas;
          p.sesiones_restantes = restantes;
          return p;
        });
        if (this.alumnosPacksConCredito.length > 0 && this.alumnoSeleccionado) {
          const activePack = this.alumnosPacksConCredito[0];
          this.alumnoSeleccionado.pack_id = activePack.pack_id;
          this.alumnoSeleccionado.pack_jugador_id = activePack.id || activePack.pack_jugador_id;
          this.alumnoSeleccionado.sesiones_restantes = activePack.sesiones_restantes;
          this.alumnoSeleccionado.pack_nombre = activePack.pack_nombre || activePack.nombre;
        } else if (this.alumnoSeleccionado) {
          this.alumnoSeleccionado.sesiones_restantes = 0;
          this.alumnoSeleccionado.pack_nombre = "Sin Cr\xE9dito Activo";
        }
        this.cargandoPacks = false;
        this.mostrarOpcionPack = this.alumnosPacksConCredito.length === 0 && (this.alumnoSeleccionado?.creditos_reales || 0) <= 0;
      },
      error: () => this.cargandoPacks = false
    });
  }
  onPackAlumnoToggle() {
    if (!this.alumnoSeleccionado)
      return;
    const pack = this.alumnosPacks.find((p) => (p.id || p.pack_jugador_id) == this.alumnoSeleccionado.pack_jugador_id);
    if (pack) {
      this.alumnoSeleccionado.pack_id = pack.pack_id;
      this.alumnoSeleccionado.pack_nombre = pack.pack_nombre || pack.nombre;
      this.alumnoSeleccionado.sesiones_restantes = pack.sesiones_restantes;
    }
  }
  isAlumnoSelected(alumno) {
    return this.alumnosSeleccionados.some((a) => (a.jugador_id || a.id) === (alumno.jugador_id || alumno.id));
  }
  onTipoClaseChange() {
    this.alumnosSeleccionados = [];
    this.alumnoSeleccionado = null;
    this.packAAsignar = null;
    this.mostrarSelectorPackManual = false;
    this.packGrupalSeleccionado = null;
    if (this.tipoClaseSeleccionado === "grupal") {
      this.loadPacksGrupales();
    }
  }
  loadPacksGrupales() {
    this.entrenamientoService.getPacks(this.entrenadorId).subscribe({
      next: (res) => {
        this.packsGrupalesDisponibles = res.filter((p) => p.tipo === "grupal" && Number(p.activo) === 1);
      }
    });
  }
  onPackGrupalChange() {
    if (this.packGrupalSeleccionado) {
      const cat = (this.packGrupalSeleccionado.categoria || "").toLowerCase();
      if (cat.includes("adulto")) {
        this.categoriaFiltro = "adulto";
      } else if (cat.includes("menor")) {
        this.categoriaFiltro = "menor";
      }
      this.onCategoriaChange();
    }
  }
  togglePackManual() {
    this.mostrarSelectorPackManual = !this.mostrarSelectorPackManual;
    if (!this.mostrarSelectorPackManual) {
      this.packAAsignar = null;
    }
  }
  filtrarMallas() {
    if (this.categoriaFiltro === "todos") {
      this.mallasFiltradas = this.mallas;
    } else {
      this.mallasFiltradas = this.mallas.filter((m) => (m.publico || "").toLowerCase().includes(this.categoriaFiltro));
    }
  }
  onCategoriaChange() {
    this.planificacionId = null;
    this.claseMallaId = null;
    this.clasesDisponibles = [];
    this.contenidoClase = "";
    this.filtrarMallas();
  }
  onMallaChange() {
    this.clasesDisponibles = [];
    this.claseMallaId = null;
    this.contenidoClase = "";
    if (!this.planificacionId)
      return;
    this.isLoading = true;
    this.entrenamientoService.getMallaById(this.planificacionId).subscribe({
      next: (res) => {
        this.clasesDisponibles = res.clases || [];
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }
  onClaseChange() {
    const clase = this.clasesDisponibles.find((c) => c.id == this.claseMallaId);
    if (clase) {
      this.contenidoClase = `OBJETIVO: ${clase.objetivo || "N/A"}
DRILLS: ${clase.drills || "N/A"}`;
    } else {
      this.contenidoClase = "";
    }
  }
  confirmarAgendamiento() {
    return __async(this, null, function* () {
      if (this.tipoClaseSeleccionado === "individual") {
        if (!this.alumnoSeleccionado || !this.selectedSlot)
          return;
      } else if (this.tipoClaseSeleccionado === "multijugador") {
        if (this.alumnosSeleccionados.length === 0 || !this.selectedSlot)
          return;
      } else if (this.tipoClaseSeleccionado === "grupal") {
        if (!this.selectedSlot)
          return;
      }
      if (this.mostrarSelectorPackManual && !this.packAAsignar) {
        this.mostrarToast("Atenci\xF3n: Seleccionaste un pack nuevo, pero no escogiste ninguno.");
        return;
      }
      const requiereNuevoPack = this.tipoClaseSeleccionado === "individual" ? this.alumnosPacksConCredito.length === 0 && (this.alumnoSeleccionado?.creditos_reales || 0) <= 0 : this.alumnosPacksConCredito.length === 0;
      if (requiereNuevoPack && !this.packAAsignar) {
        this.mostrarToast("Sin Saldo: Selecciona un pack nuevo para asignarle.");
        return;
      }
      const loading = yield this.loadingCtrl.create({ message: "Agendando..." });
      yield loading.present();
      const primerJugador = this.alumnoSeleccionado;
      const jugadorIds = this.alumnosSeleccionados.map((a) => a.jugador_id || a.id);
      const needsPack = this.packAAsignar || requiereNuevoPack;
      const obsPack = needsPack && this.packAAsignar ? this.entrenamientoService.insertPack({
        pack_id: this.packAAsignar.id || this.packAAsignar.pack_id,
        jugador_id: primerJugador.jugador_id || primerJugador.id,
        estado_pago: "pendiente",
        metodo_pago: "manual_entrenador"
      }) : new Observable((obs) => {
        let packIdSafe = primerJugador?.pack_jugador_id;
        if (this.alumnosPacksConCredito.length > 0) {
          const fallback = this.alumnosPacksConCredito[0];
          packIdSafe = fallback.id || fallback.pack_jugador_id;
        }
        obs.next({ success: true, pack_jugador_id: packIdSafe });
        obs.complete();
      });
      obsPack.subscribe({
        next: (resP) => __async(this, null, function* () {
          let fId = 0;
          let fJugadorId = 0;
          if (this.tipoClaseSeleccionado === "grupal" && this.packGrupalSeleccionado) {
            fId = this.packGrupalSeleccionado.id || this.packGrupalSeleccionado.pack_id || 0;
            fJugadorId = 0;
          } else if (this.packAAsignar) {
            fId = this.packAAsignar.id || this.packAAsignar.pack_id || 0;
            fJugadorId = resP.pack_jugador_id || 0;
          } else if (this.alumnosPacksConCredito.length > 0) {
            let best = this.alumnosPacksConCredito.find((p) => String(p.id || p.pack_jugador_id) === String(primerJugador.pack_jugador_id));
            if (!best)
              best = this.alumnosPacksConCredito[0];
            fId = best.pack_id || best.id_pack || best.id || 0;
            fJugadorId = best.id || best.pack_jugador_id || best.pack_id || fId || 0;
            if (fId === fJugadorId && best.pack_id)
              fId = best.pack_id;
          } else if (primerJugador) {
            const keys = ["pack_id", "id_pack", "idPack", "pack_ids", "pack_jugador_id", "id_pack_jugador", "id"];
            for (const k of keys) {
              const val = primerJugador[k];
              if (val && String(val) !== "0" && String(val).length > 0) {
                if (k === "id" && Number(val) === Number(primerJugador.jugador_id || primerJugador.id))
                  continue;
                fId = String(val).includes(",") ? val.split(",")[0].trim() : val;
                break;
              }
            }
            fJugadorId = primerJugador.pack_jugador_id || primerJugador.id_pack_jugador || fId || 0;
          }
          const payloadReserva = {
            entrenador_id: Number(this.entrenadorId),
            pack_id: Number(fId),
            pack_jugador_id: Number(fJugadorId),
            fecha: this.selectedSlot.dateStr,
            hora_inicio: this.selectedSlot.hour,
            hora_fin: this.getHoraFin(this.selectedSlot.hour),
            jugador_id: primerJugador ? Number(primerJugador.jugador_id || primerJugador.id) : 0,
            jugador_nombre: primerJugador ? primerJugador.jugador_nombre || "Alumno" : "Clase Abierta",
            estado: "reservado",
            recurrencia: Number(this.recurrencia || 1),
            tipo: this.tipoClaseSeleccionado,
            reserva_tipo: this.tipoClaseSeleccionado === "grupal" ? "pack_grupal" : "individual",
            club_id: Number(this.selectedSlot.slot.club_id || this.selectedClubId || 1),
            malla_id: Number(this.planificacionId || 0),
            clase_id: Number(this.claseMallaId || 0),
            clase_titulo: this.clasesDisponibles.find((c) => c.id == this.claseMallaId)?.titulo || ""
          };
          if (this.tipoClaseSeleccionado !== "individual" && jugadorIds.length > 1) {
            payloadReserva.jugador_ids = jugadorIds;
            payloadReserva.jugador_nombre = this.alumnosSeleccionados.map((a) => a.jugador_nombre).join(", ");
          }
          this.entrenamientoService.crearReserva(payloadReserva).subscribe({
            next: () => {
              if (this.planificacionId && this.claseMallaId) {
                this.entrenamientoService.asignarMalla({
                  jugador_id: primerJugador.jugador_id || primerJugador.id,
                  malla_id: this.planificacionId,
                  entrenador_id: this.entrenadorId
                }).subscribe(() => this.postAgendamiento(loading));
              } else {
                this.postAgendamiento(loading);
              }
            },
            error: (err) => {
              loading.dismiss();
              this.mostrarToast(err.error?.error || "Error al agendar reserva");
            }
          });
        }),
        error: () => {
          loading.dismiss();
          this.mostrarToast("Error al procesar el pack");
        }
      });
    });
  }
  postAgendamiento(loading) {
    loading.dismiss();
    this.mostrarToast("\u2705 Clase agendada exitosamente");
    this.cerrarModal();
    this.loadDisponibilidad();
    this.loadBasics();
  }
  confirmarCancelacion() {
    return __async(this, null, function* () {
      const resId = this.selectedSlot?.slot?.reserva_id;
      if (!resId)
        return;
      const alert = yield this.alertCtrl.create({
        header: "Cancelar Clase",
        message: `\xBFDeseas cancelar TODA la clase y liberar el horario?`,
        buttons: [
          { text: "Atr\xE1s", role: "cancel" },
          {
            text: "Confirmar Cancelaci\xF3n",
            handler: () => {
              this.entrenamientoService.cancelarReserva(resId).subscribe({
                next: () => {
                  this.mostrarToast("Clase cancelada exitosamente");
                  this.cerrarModal();
                  this.loadDisponibilidad();
                },
                error: () => this.mostrarToast("Error al cancelar")
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  quitarJugador(p) {
    return __async(this, null, function* () {
      const resId = this.selectedSlot?.slot?.reserva_id;
      if (!resId)
        return;
      const alert = yield this.alertCtrl.create({
        header: "Quitar Alumno",
        message: `\xBFDeseas quitar a ${p.nombre || p.jugador_nombre} de esta clase?`,
        buttons: [
          { text: "No", role: "cancel" },
          {
            text: "Quitar",
            handler: () => {
              this.entrenamientoService.cancelarReserva(resId, p.id || p.jugador_id).subscribe({
                next: () => {
                  this.mostrarToast("Alumno removido");
                  this.participantesGrupo = this.participantesGrupo.filter((x) => (x.id || x.jugador_id) !== (p.id || p.jugador_id));
                  if (this.participantesGrupo.length === 0) {
                    this.cerrarModal();
                    this.loadDisponibilidad();
                  }
                },
                error: () => this.mostrarToast("Error al remover")
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  enableDetailEdit() {
    this.isEditingDetail = true;
    const s = this.selectedSlot?.slot;
    this.planificacionId = s?.malla_id ? Number(s.malla_id) : null;
    this.claseMallaId = s?.clase_id ? Number(s.clase_id) : null;
    if (this.planificacionId) {
      this.onMallaChange();
    }
  }
  saveTechnicalDetail() {
    return __async(this, null, function* () {
      if (!this.selectedSlot?.slot?.reserva_id)
        return;
      const loading = yield this.loadingCtrl.create({ message: "Actualizando..." });
      yield loading.present();
      const payload = {
        reserva_id: this.selectedSlot.slot.reserva_id,
        malla_id: this.planificacionId,
        clase_id: this.claseMallaId,
        clase_titulo: this.clasesDisponibles.find((c) => c.id == this.claseMallaId)?.titulo || null
      };
      this.entrenamientoService.updateReservaTecnica(payload).subscribe({
        next: () => {
          loading.dismiss();
          this.mostrarToast("Planificaci\xF3n actualizada");
          this.isEditingDetail = false;
          this.loadDisponibilidad();
          this.cerrarModal();
        },
        error: () => {
          loading.dismiss();
          this.mostrarToast("Error al actualizar");
        }
      });
    });
  }
  extractDate(dStr) {
    return dStr ? dStr.split(" ")[0] : "";
  }
  extractTime(dStr) {
    return dStr ? dStr.split(" ")[1].slice(0, 5) : "";
  }
  formatDate(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  }
  getHoraFin(horaInicio) {
    const [h, m] = horaInicio.split(":").map(Number);
    return `${(h + 1).toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }
  mostrarToast(msg) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({ message: msg, duration: 2500, position: "top" });
      toast.present();
    });
  }
  goBack() {
    this.router.navigate(["/entrenador-home"]);
  }
  getFotoUrl(data) {
    if (!data)
      return "";
    let foto = data.jugador_foto || data.foto_perfil || data.foto || data.foto_jugador || (data.inscritos && data.inscritos[0] ? data.inscritos[0].foto : null) || data.jugador_imagen;
    if (!foto || foto.includes("placeholder") || foto.includes("imagen_defecto") || String(foto).includes("null")) {
      const nombre = data.jugador_nombre || data.nombre_jugador || data.nombre || "U";
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}&background=ccff00&color=000&length=2&rounded=true&bold=true&size=128`;
    }
    if (foto.startsWith("http") || foto.startsWith("data:")) {
      return foto;
    }
    return `https://api.padelmanager.cl/prd/${foto}`;
  }
};
_EntrenadorAgendarPage.\u0275fac = function EntrenadorAgendarPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EntrenadorAgendarPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EntrenamientoService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(NotificationService));
};
_EntrenadorAgendarPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrenadorAgendarPage, selectors: [["app-entrenador-agendar"]], viewQuery: function EntrenadorAgendarPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bookingModal = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.detailModal = _t.first);
  }
}, decls: 30, vars: 7, consts: [["bookingModal", ""], ["detailModal", ""], [1, "header-v2", "animate-fade"], [1, "h-text"], [1, "h-title-row"], [1, "h-actions"], [1, "h-avatar"], ["name", "calendar-outline", 2, "font-size", "24px", "color", "#ccff00"], [1, "dashboard-container"], [1, "section-title", "legible"], [1, "day-selector-nike"], ["scrollable", "", "mode", "md", 1, "nike-segment-days", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "club-toggle-container", 4, "ngIf"], [1, "slots-container", "mt-4"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "custom-bottom-modal", 3, "didDismiss", "isOpen"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], [3, "value"], [1, "day-label"], [1, "date-label"], [1, "club-toggle-container"], [1, "nike-toggle-track"], ["class", "nike-toggle-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "nike-toggle-item", 3, "click"], [1, "loading-state"], ["name", "crescent"], ["class", "empty-state animate-fade", 4, "ngIf"], [1, "slot-grid-circles"], ["class", "time-circle", 3, "ocupado", "disponible", "otro-club", "click", 4, "ngFor", "ngForOf"], [1, "empty-state", "animate-fade"], ["name", "alert-circle-outline", "size", "large", 2, "color", "#64748b"], ["fill", "clear", "color", "primary", "size", "small", 3, "click"], [1, "time-circle", 3, "click"], [1, "circle-content"], [1, "time"], ["class", "avatar-badge-wrapper", 4, "ngIf"], ["class", "club-mini-label", 4, "ngIf"], ["name", "add-outline", "class", "status-icon available", 4, "ngIf"], [1, "avatar-badge-wrapper"], ["class", "status-avatar", 3, "src", 4, "ngIf"], ["name", "person-circle-outline", "class", "status-icon", 4, "ngIf"], [1, "status-avatar", 3, "src"], ["name", "person-circle-outline", 1, "status-icon"], [1, "club-mini-label"], ["name", "add-outline", 1, "status-icon", "available"], [1, "ion-no-border"], ["slot", "end"], ["mode", "ios", 3, "click"], ["name", "close-outline", "size", "large", "slot", "icon-only"], [1, "modal-content-nike"], [1, "modal-body", "pb-safe"], ["mode", "ios", 1, "nike-segment-periods", "mt-2", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "individual"], ["value", "multijugador"], ["value", "grupal"], ["class", "nike-select-wrapper light-wrapper animate-fade mt-3", 4, "ngIf"], [1, "mt-2"], [1, "flex", "justify-between", "items-center", "mb-1"], [1, "section-title", "legible", "m-0"], [1, "text-xs", "font-bold", "text-gray-400"], ["animated", "true", "placeholder", "Buscar jugador...", "mode", "ios", 1, "nike-search-v2", 3, "ngModelChange", "ngModel"], [1, "horizontal-scroll-list", "flex", "mt-0"], ["class", "alumno-chip", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "nike-card minimal-light animate-fade mt-4", 4, "ngIf"], [1, "nike-card", "minimal-light", "animate-fade", "mt-5"], [1, "card-header-v3", "mb-3"], ["name", "school-outline", "slot", "start", "color", "primary"], [2, "color", "#333", "margin", "0"], [1, "nike-select-wrapper", "light-wrapper", "mb-2"], ["interface", "popover", "mode", "ios", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "todos"], ["value", "adulto"], ["value", "menor"], ["interface", "popover", "placeholder", "Selecciona la Malla", "mode", "ios", 3, "ngModelChange", "ionChange", "ngModel"], ["class", "nike-select-wrapper light-wrapper", 4, "ngIf"], [1, "nike-card", "minimal-light", "animate-fade", "mt-5", "mb-5"], [1, "card-header-v3", "mb-3", 2, "margin-bottom", "12px !important"], ["name", "calendar-outline", "slot", "start", "color", "primary"], [1, "nike-select-wrapper", "light-wrapper", 2, "margin-bottom", "0"], ["name", "repeat-outline", "slot", "start", 2, "color", "#64748b", "margin-right", "10px"], ["interface", "popover", "mode", "ios", 3, "ngModelChange", "ngModel"], [1, "mt-4", "mb-4", 2, "text-align", "center"], ["expand", "block", "shape", "round", 1, "nike-btn", "outline-success", 3, "click"], [1, "nike-select-wrapper", "light-wrapper", "animate-fade", "mt-3"], ["name", "cube-outline", "slot", "start", 2, "color", "#6366f1", "font-size", "20px", "margin-right", "12px"], ["lines", "none", 2, "--background", "transparent", "width", "100%", "--padding-start", "0"], ["position", "stacked", 2, "color", "#64748b", "font-size", "11px", "font-weight", "800", "text-transform", "uppercase", "margin-bottom", "4px"], ["interface", "action-sheet", "mode", "ios", "placeholder", "Elige el pack grupal...", 3, "ngModelChange", "ionChange", "ngModel"], [1, "alumno-chip", 3, "click"], [1, "chip-avatar", 3, "src"], [1, "chip-name"], [1, "nike-card", "minimal-light", "animate-fade", "mt-4"], [1, "card-header-v3"], ["name", "card-outline", "slot", "start", "color", "primary"], [2, "color", "#333"], ["class", "nike-select-wrapper light-wrapper animate-fade mb-2", 4, "ngIf"], ["class", "current-credits-info animate-fade", 4, "ngIf"], ["class", "exhausted-pack-card", "style", "background:#fee2e2; padding: 10px; border-radius:8px; margin-bottom: 12px; border: 1px solid #fca5a5;", 4, "ngIf"], ["class", "premium-checkbox-card mt-2", 3, "active", "click", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "nike-select-wrapper", "light-wrapper", "animate-fade", "mb-2"], ["name", "ticket-outline", "slot", "start", 2, "color", "#10b981", "font-size", "20px", "margin-right", "12px"], ["interface", "popover", "mode", "ios", 2, "margin-top", "5px", 3, "ngModelChange", "ionChange", "ngModel"], [1, "current-credits-info", "animate-fade"], [1, "pack-name-badge"], [1, "credits-count"], [1, "exhausted-pack-card", 2, "background", "#fee2e2", "padding", "10px", "border-radius", "8px", "margin-bottom", "12px", "border", "1px solid #fca5a5"], [1, "m-0", 2, "color", "#b91c1c", "font-size", "14px", "font-weight", "500"], ["name", "alert-circle-outline", 2, "vertical-align", "middle"], [1, "premium-checkbox-card", "mt-2", 3, "click"], [1, "chk-content"], ["mode", "ios", 2, "--size", "20px", "--checkbox-background-checked", "#10b981", "pointer-events", "none", "margin", "0", 3, "checked"], [1, "chk-text"], [1, "main-label"], [1, "sub-label"], [3, "name", "color"], ["name", "wallet-outline", "slot", "start", 2, "color", "#0ea5e9", "font-size", "20px", "margin-right", "12px"], ["interface", "action-sheet", "placeholder", "Seleccionar nuevo pack", "mode", "ios", "cancelText", "Cancelar", 3, "ngModelChange", "ngModel"], ["class", "ion-text-wrap", 3, "value", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap", 3, "value"], [1, "mt-3"], ["class", "flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-1", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "bg-gray-50", "p-2", "rounded-lg", "mb-1"], [1, "text-xs", "font-bold", "text-gray-700"], [1, "text-xs", "px-2", "py-1", "rounded", 3, "ngClass"], [1, "nike-select-wrapper", "light-wrapper"], ["interface", "action-sheet", "placeholder", "N\xFAmero de sesi\xF3n", "mode", "ios", 3, "ngModelChange", "ionChange", "ngModel"], ["class", "modal-body pb-safe", 4, "ngIf"], [1, "student-header", "text-center"], ["class", "participants-section animate-up", "style", "background: #f8fafc; border-radius: 16px; padding: 15px; margin: 15px 0; border: 1px solid #e2e8f0;", 4, "ngIf"], ["class", "nike-card dark animate-fade", 4, "ngIf"], [1, "mt-4", "mb-4", "text-center"], ["expand", "block", "fill", "solid", 1, "btn-cancelar-nike", 3, "click"], ["name", "trash-outline", "slot", "start"], [1, "participants-section", "animate-up", 2, "background", "#f8fafc", "border-radius", "16px", "padding", "15px", "margin", "15px 0", "border", "1px solid #e2e8f0"], [1, "ps-header", 2, "margin-bottom", "12px"], ["name", "people-outline", 2, "vertical-align", "middle", "margin-right", "5px", "color", "#64748b"], [2, "font-size", "11px", "font-weight", "800", "color", "#64748b", "text-transform", "uppercase"], [1, "ps-list", 2, "display", "flex", "flex-wrap", "wrap", "gap", "8px", "margin-bottom", "15px"], ["class", "participant-item animate-pop", "style", "display: flex; align-items: center; gap: 6px; background: white; padding: 4px 10px; border-radius: 20px; border: 1px solid #cbd5e1;", 4, "ngFor", "ngForOf"], ["class", "no-participants", "style", "font-size: 12px; color: #94a3b8; font-style: italic; padding: 5px 0;", 4, "ngIf"], [1, "add-player-box", 2, "border-top", "1px solid #e2e8f0", "padding-top", "12px"], [2, "font-size", "9px", "font-weight", "900", "color", "#94a3b8", "display", "block", "margin-bottom", "8px"], [1, "search-input-wrap", 2, "position", "relative"], ["placeholder", "Buscar...", "mode", "ios", 1, "mini-search", 2, "--border-radius", "10px", "--background", "white", "--box-shadow", "none", "border", "1px solid #e2e8f0", "height", "36px", "padding", "0", 3, "ngModelChange", "ionInput", "ngModel"], ["class", "search-results-mini", "style", "position: absolute; top: 40px; left: 0; right: 0; background: white; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 100; max-height: 150px; overflow-y: auto;", 4, "ngIf"], [1, "participant-item", "animate-pop", 2, "display", "flex", "align-items", "center", "gap", "6px", "background", "white", "padding", "4px 10px", "border-radius", "20px", "border", "1px solid #cbd5e1"], [1, "p-avatar", 2, "width", "20px", "height", "20px", "border-radius", "50%", 3, "src"], [2, "font-size", "11px", "font-weight", "700", "color", "#334155"], ["name", "close-circle", 2, "color", "#ef4444", "font-size", "14px", "margin-left", "2px", 3, "click"], [1, "no-participants", 2, "font-size", "12px", "color", "#94a3b8", "font-style", "italic", "padding", "5px 0"], [1, "search-results-mini", 2, "position", "absolute", "top", "40px", "left", "0", "right", "0", "background", "white", "border-radius", "10px", "box-shadow", "0 5px 15px rgba(0,0,0,0.1)", "border", "1px solid #e2e8f0", "z-index", "100", "max-height", "150px", "overflow-y", "auto"], ["class", "res-item", "style", "padding: 10px 15px; font-size: 12px; font-weight: 700; color: #1e293b; border-bottom: 1px solid #f1f5f9;", 3, "click", 4, "ngFor", "ngForOf"], [1, "res-item", 2, "padding", "10px 15px", "font-size", "12px", "font-weight", "700", "color", "#1e293b", "border-bottom", "1px solid #f1f5f9", 3, "click"], [1, "nike-card", "dark", "animate-fade"], ["style", "color: #00f2ff", 4, "ngIf"], ["fill", "clear", 3, "click"], ["name", "create-outline", "slot", "start"], [2, "color", "#00f2ff"], [2, "color", "white", "padding-left", "0"], ["lines", "none", 2, "--background", "transparent", "--padding-start", "0"], ["interface", "popover", "placeholder", "Elige la Malla", "mode", "ios", 2, "color", "white", "width", "100%", 3, "ngModelChange", "ionChange", "ngModel"], ["lines", "none", "style", "--background: transparent; --padding-start: 0;", 4, "ngIf"], ["expand", "block", "shape", "round", 1, "nike-btn", "outline-success", "mt-4", 3, "click"], ["interface", "popover", "placeholder", "Elige qu\xE9 clase dar", "mode", "ios", 2, "color", "#00f2ff", "width", "100%", 3, "ngModelChange", "ionChange", "ngModel"]], template: function EntrenadorAgendarPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 2)(2, "div", 3)(3, "p");
    \u0275\u0275text(4, "GESTI\xD3N DE EQUIPO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "h1");
    \u0275\u0275text(7, "Agenda Trainer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
    \u0275\u0275element(10, "ion-icon", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "h3", 9);
    \u0275\u0275text(13, "Calendario (Siguientes 14 D\xEDas)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "ion-segment", 11);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorAgendarPage_Template_ion_segment_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.diaSeleccionado, $event) || (ctx.diaSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function EntrenadorAgendarPage_Template_ion_segment_ionChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onDiaChange($event));
    });
    \u0275\u0275template(16, EntrenadorAgendarPage_ion_segment_button_16_Template, 9, 13, "ion-segment-button", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, EntrenadorAgendarPage_div_17_Template, 3, 1, "div", 13);
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275template(19, EntrenadorAgendarPage_div_19_Template, 4, 0, "div", 15)(20, EntrenadorAgendarPage_ng_container_20_Template, 4, 2, "ng-container", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ion-modal", 17, 0);
    \u0275\u0275listener("didDismiss", function EntrenadorAgendarPage_Template_ion_modal_didDismiss_21_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cerrarModal());
    });
    \u0275\u0275template(23, EntrenadorAgendarPage_ng_template_23_Template, 64, 16, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-modal", 17, 1);
    \u0275\u0275listener("didDismiss", function EntrenadorAgendarPage_Template_ion_modal_didDismiss_24_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cerrarModal());
    });
    \u0275\u0275template(26, EntrenadorAgendarPage_ng_template_26_Template, 9, 2, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ion-fab", 18)(28, "ion-fab-button", 19);
    \u0275\u0275listener("click", function EntrenadorAgendarPage_Template_ion_fab_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.goBack());
    });
    \u0275\u0275element(29, "ion-icon", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx.diaSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.diasAgenda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.clubesDisponibles.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.cargandoHorarios);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargandoHorarios);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.isBookingModalOpen);
    \u0275\u0275advance(3);
    \u0275\u0275property("isOpen", ctx.isDetailModalOpen);
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
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonFab,
  IonFabButton,
  IonSpinner,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonSearchbar,
  IonCheckbox,
  UpperCasePipe,
  DecimalPipe,
  DatePipe
], styles: ['\n\n.header-v2[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 25px 60px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.8)),\n    url(/assets/mod-agenda.jpg) center/cover no-repeat;\n  border-radius: 0 0 45px 45px;\n  margin-bottom: -30px;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ccff00;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.header-v2[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 34px;\n  font-weight: 950;\n  letter-spacing: -2px;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n}\n.header-v2[_ngcontent-%COMP%]   .h-avatar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: 500;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 25px 20px 120px;\n  margin-top: -15px;\n  background: #fff;\n  border-radius: 40px 40px 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n  z-index: 20;\n  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.1);\n}\n.section-nike[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.section-nike[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%] {\n  background: #000;\n  color: var(--ion-color-secondary);\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-weight: 900;\n  transform: rotate(-5deg);\n  font-size: 14px;\n}\n.section-nike[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #111;\n}\n.student-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 20px;\n  padding-bottom: 30px;\n}\n.student-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.student-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: #fbfbfb;\n}\n.student-card[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 16px;\n  border: 4px solid #f2f2f7;\n  position: relative;\n  background: #eee;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.student-card[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.student-card[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%]   .initials-avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #000;\n  color: #ccff00;\n  font-size: 30px;\n  font-weight: 800;\n}\n.student-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 800;\n  margin: 0 0 4px;\n  color: #111;\n  letter-spacing: -0.5px;\n}\n.student-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .pack-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin: 0 0 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.student-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .credits-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #000;\n  padding: 6px 14px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #ccff00;\n}\n.student-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .credits-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nion-modal[_ngcontent-%COMP%] {\n  --border-radius: 32px 32px 0 0;\n  --height: 92%;\n}\nion-modal[_ngcontent-%COMP%]::part(content) {\n  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.1);\n}\nion-toolbar[_ngcontent-%COMP%] {\n  --padding-top: 20px;\n  --padding-bottom: 10px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\nion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 20px;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n}\n.modal-content-nike[_ngcontent-%COMP%] {\n  --background: #fff;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 24px 40px;\n}\n.selected-student-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-bottom: 30px;\n  padding: 24px 0;\n  border-bottom: 1px dashed #eee;\n}\n.selected-student-header[_ngcontent-%COMP%]   .modal-avatar-wrapper[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #ccff00;\n  flex-shrink: 0;\n  box-shadow: 0 6px 20px rgba(204, 255, 0, 0.2);\n}\n.selected-student-header[_ngcontent-%COMP%]   .modal-avatar-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.selected-student-header[_ngcontent-%COMP%]   .modal-avatar-wrapper[_ngcontent-%COMP%]   .initials-avatar-small[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #000;\n  color: #ccff00;\n  font-size: 24px;\n  font-weight: 800;\n}\n.selected-student-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: -0.8px;\n}\n.selected-student-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #888;\n  font-size: 13px;\n  font-weight: 600;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  margin: 30px 0 15px;\n  text-transform: uppercase;\n  color: #bbb;\n  letter-spacing: 1.5px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-title[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #f0f0f0;\n}\n.nike-card[_ngcontent-%COMP%] {\n  background: #f8f8fa;\n  border-radius: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.recurrence-card[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.recurrence-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 16px;\n  --min-height: 64px;\n}\n.recurrence-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n  margin-right: 12px;\n  font-size: 20px;\n}\n.recurrence-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 15px;\n  color: #000;\n}\n.recurrence-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 15px;\n  color: #000;\n  --placeholder-color: #000;\n  --placeholder-opacity: 1;\n}\n.slots-grid-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-top: 15px;\n}\n.slot-card-modal[_ngcontent-%COMP%] {\n  padding: 18px 0;\n  text-align: center;\n  font-weight: 900;\n  background: white;\n  border: 1.5px solid #f2f2f7;\n  border-radius: 18px;\n  font-size: 18px;\n  color: #000;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);\n  transition: all 0.2s ease;\n}\n.slot-card-modal.ocupado[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  text-decoration: line-through;\n  background: #f2f2f7;\n  border-color: transparent;\n  box-shadow: none;\n}\n.slot-card-modal[_ngcontent-%COMP%]:active:not(.ocupado) {\n  transform: scale(0.92);\n  background: #000;\n  color: #ccff00;\n  border-color: #000;\n}\n.empty-slots[_ngcontent-%COMP%], \n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  margin: 20px 0 40px;\n}\n.empty-slots[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], \n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: #000;\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 44px;\n  height: 44px;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  font-weight: 800;\n  border: 1px solid #f2f2f7;\n}\n.empty-slots[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%], \n.pagination-controls[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.empty-slots[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:active, \n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:active {\n  --background: #000;\n  --color: #ccff00;\n}\n.empty-slots[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.empty-slots[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%], \n.pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #000;\n  background: #f2f2f7;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.no-data-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #aaa;\n  font-weight: 700;\n  font-size: 14px;\n  background: #f8f8fa;\n  border-radius: 18px;\n  margin-top: 10px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n  color: #000;\n}\n.loading-state[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 15px;\n  --color: #000;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.nike-segment-days[_ngcontent-%COMP%] {\n  margin: 0 -5px 15px;\n  padding-bottom: 20px;\n  --background: transparent;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: transparent;\n  --color: #111;\n  --color-checked: #ccff00;\n  margin-right: 12px;\n  min-width: 62px;\n  height: 75px;\n  border-radius: 22px;\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::part(native) {\n  background-color: #fff;\n  color: #111;\n  padding: 10px 0;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  border-color: #000;\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);\n  transform: translateY(-4px);\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]::part(native) {\n  background-color: #000;\n  color: #ccff00;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  gap: 2px;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 0.6;\n  font-weight: 800;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  letter-spacing: -1px;\n}\n.section-title.legible[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: 950;\n  font-size: 22px;\n  opacity: 1 !important;\n  margin-top: 15px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  letter-spacing: -1px;\n  display: block;\n}\n.nike-segment-periods[_ngcontent-%COMP%] {\n  --background: #f0f0f5;\n  border-radius: 100px;\n  padding: 5px;\n  margin-bottom: 25px;\n}\n.nike-segment-periods[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: #fff;\n  --color: #888;\n  --color-checked: #000;\n  --border-radius: 100px;\n  font-weight: 900;\n  font-size: 13px;\n  height: 42px;\n}\n.nike-segment-periods[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::part(indicator-background) {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.club-toggle-container[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.club-toggle-container[_ngcontent-%COMP%]   .nike-toggle-track[_ngcontent-%COMP%] {\n  background: #f0f0f5;\n  border-radius: 100px;\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n  position: relative;\n}\n.club-toggle-container[_ngcontent-%COMP%]   .nike-toggle-item[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 12px 10px;\n  border-radius: 100px;\n  font-weight: 800;\n  font-size: 13px;\n  color: #888;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 2;\n  text-transform: capitalize;\n}\n.club-toggle-container[_ngcontent-%COMP%]   .nike-toggle-item.active[_ngcontent-%COMP%] {\n  background: #000;\n  color: #ccff00;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.slot-grid-circles[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n  margin-top: 15px;\n}\n@keyframes _ngcontent-%COMP%_pulse-neon {\n  0% {\n    box-shadow: 0 0 0 0 rgba(204, 255, 0, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(204, 255, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(204, 255, 0, 0);\n  }\n}\n.time-circle[_ngcontent-%COMP%] {\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);\n  border: 1.5px solid rgba(0, 0, 0, 0.05);\n  background: #fff;\n}\n.time-circle[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.time-circle[_ngcontent-%COMP%]   .circle-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.time-circle.disponible[_ngcontent-%COMP%] {\n  border-color: rgba(204, 255, 0, 0.3);\n  animation: _ngcontent-%COMP%_pulse-neon 2s infinite;\n}\n.time-circle.disponible[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 16px;\n  color: #000;\n}\n.time-circle.disponible[_ngcontent-%COMP%]   .status-icon.available[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  font-size: 18px;\n  background: #ccff00;\n  color: #000;\n  border-radius: 50%;\n  padding: 3px;\n  border: 2px solid #fff;\n  box-shadow: 0 4px 10px rgba(204, 255, 0, 0.3);\n}\n.time-circle.ocupado[_ngcontent-%COMP%] {\n  background: #f8f8fb;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.08);\n}\n.time-circle.ocupado[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 15px;\n  color: #ccc;\n}\n.time-circle.ocupado[_ngcontent-%COMP%]   .avatar-badge-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  z-index: 5;\n}\n.time-circle.ocupado[_ngcontent-%COMP%]   .avatar-badge-wrapper[_ngcontent-%COMP%]   .status-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);\n  object-fit: cover;\n  background: #fff;\n}\n.time-circle.ocupado[_ngcontent-%COMP%]   .avatar-badge-wrapper[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-size: 24px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.time-circle.ocupado[_ngcontent-%COMP%]   .club-mini-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  font-size: 8px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #888;\n  width: 80%;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0.2px;\n}\n.time-circle.otro-club[_ngcontent-%COMP%] {\n  background: #fdfdfd;\n  border-color: rgba(0, 0, 0, 0.03);\n}\n.time-circle.otro-club[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  transform: translateY(-4px);\n}\n.horizontal-scroll-list[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  padding: 10px 5px 25px;\n  gap: 15px;\n  margin: 0 -10px;\n}\n.horizontal-scroll-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.horizontal-scroll-list[_ngcontent-%COMP%]   .alumno-chip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  min-width: 85px;\n  padding: 12px 5px;\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #f2f2f7;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  opacity: 0.6;\n}\n.horizontal-scroll-list[_ngcontent-%COMP%]   .alumno-chip.selected[_ngcontent-%COMP%] {\n  background: #000;\n  transform: translateY(-8px);\n  border-color: #000;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n  opacity: 1;\n}\n.horizontal-scroll-list[_ngcontent-%COMP%]   .alumno-chip.selected[_ngcontent-%COMP%]   .chip-avatar[_ngcontent-%COMP%] {\n  border-color: #ccff00;\n  box-shadow: 0 0 0 4px rgba(204, 255, 0, 0.2);\n}\n.horizontal-scroll-list[_ngcontent-%COMP%]   .alumno-chip.selected[_ngcontent-%COMP%]   .chip-name[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #ccff00;\n}\n.horizontal-scroll-list[_ngcontent-%COMP%]   .alumno-chip[_ngcontent-%COMP%]   .chip-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid transparent;\n  transition: 0.3s;\n}\n.horizontal-scroll-list[_ngcontent-%COMP%]   .alumno-chip[_ngcontent-%COMP%]   .chip-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  text-align: center;\n  color: #666;\n  max-width: 75px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nike-search-v2[_ngcontent-%COMP%] {\n  --background: #f4f4f7;\n  --border-radius: 12px;\n  --placeholder-color: #999;\n  --icon-color: #000;\n  --height: 44px;\n  padding: 0;\n  margin-bottom: 12px;\n}\n.nike-search-v2[_ngcontent-%COMP%]::part(container) {\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n  padding-inline-start: 12px;\n}\n.nike-search-v2.focused[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::part(container) {\n  border-color: #ccff00;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.nike-search-v2[_ngcontent-%COMP%]::part(native) {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.section-title.legible[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 10px;\n  letter-spacing: -0.5px;\n}\n.nike-select-wrapper[_ngcontent-%COMP%] {\n  background: #222;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  padding: 14px 18px;\n  margin-bottom: 15px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.nike-select-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ccff00;\n}\n.nike-select-wrapper[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  --placeholder-color: rgba(255,255,255,0.4);\n  --placeholder-opacity: 1;\n  font-weight: 800;\n  font-size: 14px;\n  color: #fff;\n}\n.nike-select-wrapper[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon) {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 16px;\n}\n.nike-select-wrapper[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(text) {\n  color: #fff;\n}\n.nike-select-wrapper[_ngcontent-%COMP%]:has(ion-select:focus) {\n  border-color: #ccff00;\n}\n.card-header-v3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.card-header-v3[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.nike-card.minimal-light[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 22px 20px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f1f5f9;\n}\n.nike-card.minimal-light[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 15px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #1e293b;\n  letter-spacing: 0.5px;\n}\n.nike-card.minimal-light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n  line-height: 1.5;\n}\n.nike-card.minimal-light[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #0ea5e9;\n  --padding-start: 0;\n  margin-top: 15px;\n  font-weight: 950;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 36px;\n}\n.nike-card.minimal-light[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native) {\n  color: #0ea5e9;\n}\n.nike-card.minimal-light[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n}\n.light-wrapper[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border: 1px solid #e2e8f0 !important;\n}\n.light-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #0ea5e9 !important;\n}\n.light-wrapper[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  color: #334155 !important;\n  --placeholder-color: #94a3b8 !important;\n}\n.light-wrapper[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon) {\n  color: #64748b !important;\n}\n.light-wrapper[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(text) {\n  color: #334155 !important;\n}\n.light-wrapper[_ngcontent-%COMP%]:has(ion-select:focus) {\n  border-color: #0ea5e9 !important;\n  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);\n}\n.current-credits-info[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 14px 18px;\n  border-radius: 18px;\n  margin-bottom: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border-left: 4px solid #0ea5e9;\n}\n.current-credits-info[_ngcontent-%COMP%]   .pack-name-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #0ea5e9;\n  background: rgba(14, 165, 233, 0.1);\n  padding: 4px 10px;\n  border-radius: 8px;\n  display: inline-block;\n  width: fit-content;\n}\n.current-credits-info[_ngcontent-%COMP%]   .credits-count[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: #334155;\n  font-weight: 500;\n}\n.current-credits-info[_ngcontent-%COMP%]   .credits-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 800;\n}\n.premium-checkbox-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 20px;\n}\n.premium-checkbox-card[_ngcontent-%COMP%]   .chk-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.premium-checkbox-card[_ngcontent-%COMP%]   .chk-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.premium-checkbox-card[_ngcontent-%COMP%]   .chk-text[_ngcontent-%COMP%]   .main-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.premium-checkbox-card[_ngcontent-%COMP%]   .chk-text[_ngcontent-%COMP%]   .sub-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n.premium-checkbox-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transition: transform 0.3s ease;\n}\n.premium-checkbox-card.active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #10b981;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);\n}\n.premium-checkbox-card.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.premium-checkbox-card.active[_ngcontent-%COMP%]   .main-label[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.premium-checkbox-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.student-header[_ngcontent-%COMP%] {\n  padding: 10px 0 30px;\n}\n.student-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 950;\n  letter-spacing: -2px;\n  color: #000;\n  margin: 0 0 5px;\n  text-transform: uppercase;\n  line-height: 1;\n}\n.student-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: #999;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.btn-cancelar-nike[_ngcontent-%COMP%] {\n  --background: #ff3131;\n  --background-activated: #d70000;\n  --color: #fff;\n  --border-radius: 100px;\n  height: 64px;\n  font-weight: 950;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1.5px;\n  margin-top: 25px;\n  box-shadow: 0 12px 30px rgba(255, 49, 49, 0.3);\n}\n.btn-cancelar-nike[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 22px;\n}\n.nike-btn.outline-success[_ngcontent-%COMP%] {\n  --background: #ccff00;\n  --color: #000;\n  --border-radius: 100px;\n  height: 64px;\n  font-weight: 950;\n  text-transform: uppercase;\n  box-shadow: 0 12px 30px rgba(204, 255, 0, 0.4);\n  margin: 20px 0;\n}\n.modal-content-nike[_ngcontent-%COMP%] {\n  --background: #fff;\n}\n.modal-content-nike[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 0 25px 40px;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #ccff00;\n  --box-shadow: 0 10px 25px rgba(0,0,0,0.3);\n}\n/*# sourceMappingURL=entrenador-agendar.page.css.map */'] });
var EntrenadorAgendarPage = _EntrenadorAgendarPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenadorAgendarPage, [{
    type: Component,
    args: [{ selector: "app-entrenador-agendar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonButton,
      IonItem,
      IonLabel,
      IonIcon,
      IonFab,
      IonFabButton,
      IonSpinner,
      IonSegment,
      IonSegmentButton,
      IonSelect,
      IonSelectOption,
      IonModal,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonSearchbar,
      IonCheckbox
    ], template: `<ion-content>
    <div class="header-v2 animate-fade">
        <div class="h-text">
            <p>GESTI\xD3N DE EQUIPO</p>
            <div class="h-title-row">
                <h1>Agenda Trainer</h1>
            </div>
        </div>
        <div class="h-actions">
            <!-- Posibilidad de avatar o icono de calendario -->
            <div class="h-avatar">
                <ion-icon name="calendar-outline" style="font-size: 24px; color: #ccff00;"></ion-icon>
            </div>
        </div>
    </div>

    <div class="dashboard-container">
        <!-- D\xEDa Selector -->
        <h3 class="section-title legible">Calendario (Siguientes 14 D\xEDas)</h3>
        <div class="day-selector-nike">
            <ion-segment [(ngModel)]="diaSeleccionado" (ionChange)="onDiaChange($event)" scrollable mode="md" class="nike-segment-days">
                <ion-segment-button *ngFor="let d of diasAgenda" [value]="formatDate(d)">
                    <ion-label>
                        <span class="day-label">{{ d | date:'EEE':'':'es-ES' | uppercase }}</span>
                        <span class="date-label">{{ d | date:'dd' }}</span>
                    </ion-label>
                </ion-segment-button>
            </ion-segment>
        </div>

        <!-- Clubes Selector (Toggles Nike Style) -->
        <div *ngIf="clubesDisponibles.length > 1" class="club-toggle-container">
            <div class="nike-toggle-track">
                <div class="nike-toggle-item" *ngFor="let club of clubesDisponibles"
                     [class.active]="selectedClubId === club.id"
                     (click)="selectedClubId = club.id; onClubChange()">
                     {{ club.nombre }}
                </div>
            </div>
        </div>

        <!-- Slots List -->
        <div class="slots-container mt-4">
            <div class="loading-state" *ngIf="cargandoHorarios">
                <ion-spinner name="crescent"></ion-spinner>
                <p>Buscando disponibilidad...</p>
            </div>
            
            <ng-container *ngIf="!cargandoHorarios">
                <div *ngIf="slotsDisponibles.length === 0" class="empty-state animate-fade">
                    <ion-icon name="alert-circle-outline" size="large" style="color: #64748b;"></ion-icon>
                    <p>No hay bloques de horario para este d\xEDa.</p>
                    <ion-button fill="clear" color="primary" size="small" (click)="router.navigate(['/disponibilidad-entrenador'])">
                        Abrir disponibilidad
                    </ion-button>
                </div>

                <div class="slot-grid-circles">
                    <div class="time-circle" *ngFor="let slot of slotsDisponibles"
                         [class.ocupado]="slot.ocupado" 
                         [class.disponible]="!slot.ocupado" 
                         [class.otro-club]="slot.ocupado && selectedClubId && slot.club_id != selectedClubId"
                         (click)="seleccionarSlot(slot)">
                        <div class="circle-content">
                            <span class="time">{{ slot.time }}</span>
                            
                            <!-- Information -->
                            <div *ngIf="slot.ocupado" class="avatar-badge-wrapper">
                                <img *ngIf="slot.jugador_foto" [src]="slot.jugador_foto" class="status-avatar">
                                <ion-icon *ngIf="!slot.jugador_foto" name="person-circle-outline" class="status-icon"></ion-icon>
                            </div>
                            
                            <!-- Label for Other Club -->
                            <div *ngIf="slot.ocupado && selectedClubId && slot.club_id != selectedClubId" class="club-mini-label">
                                {{ slot.club_nombre || 'Otro Club' }}
                            </div>

                            <ion-icon *ngIf="!slot.ocupado" name="add-outline" class="status-icon available"></ion-icon>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    </div>

    <!-- Booking Modal -->
    <ion-modal #bookingModal [isOpen]="isBookingModalOpen" (didDismiss)="cerrarModal()" class="custom-bottom-modal">
        <ng-template>
            <ion-header class="ion-no-border">
                <ion-toolbar>
                    <ion-title>Agendar {{ selectedSlot?.hour }}</ion-title>
                    <ion-buttons slot="end">
                        <ion-button (click)="cerrarModal()" mode="ios">
                            <ion-icon name="close-outline" size="large" slot="icon-only"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>

            <ion-content class="modal-content-nike">
                <div class="modal-body pb-safe">
                    <ion-segment [(ngModel)]="tipoClaseSeleccionado" (ionChange)="onTipoClaseChange()" mode="ios" class="nike-segment-periods mt-2">
                        <ion-segment-button value="individual"><ion-label>Individual</ion-label></ion-segment-button>
                        <ion-segment-button value="multijugador"><ion-label>Multi</ion-label></ion-segment-button>
                        <ion-segment-button value="grupal"><ion-label>Grupal</ion-label></ion-segment-button>
                    </ion-segment>

                    <!-- Group Pack Selector (The Product Template) -->
                    <div class="nike-select-wrapper light-wrapper animate-fade mt-3" *ngIf="tipoClaseSeleccionado === 'grupal'">
                        <ion-icon name="cube-outline" slot="start" style="color: #6366f1; font-size: 20px; margin-right: 12px;"></ion-icon>
                        <ion-item lines="none" style="--background: transparent; width: 100%; --padding-start: 0;">
                            <ion-label position="stacked" style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 4px;">Seleccionar Pack (Producto):</ion-label>
                            <ion-select [(ngModel)]="packGrupalSeleccionado" interface="action-sheet" mode="ios" placeholder="Elige el pack grupal..." (ionChange)="onPackGrupalChange()">
                                <ion-select-option *ngFor="let p of packsGrupalesDisponibles" [value]="p">
                                    {{ p.nombre }} ({{ p.categoria }})
                                </ion-select-option>
                            </ion-select>
                        </ion-item>
                    </div>

                    <!-- Student Selection -->
                    <div class="mt-2">
                        <div class="flex justify-between items-center mb-1">
                            <h3 class="section-title legible m-0">Seleccionar Alumnos</h3>
                            <span class="text-xs font-bold text-gray-400">({{ alumnosSeleccionados.length }}/{{ maxAlumnos }})</span>
                        </div>
                        <ion-searchbar animated="true" placeholder="Buscar jugador..." mode="ios" class="nike-search-v2" [(ngModel)]="filtroAlumnos"></ion-searchbar>
                        
                        <div class="horizontal-scroll-list flex mt-0">
                            <div class="alumno-chip" *ngFor="let a of alumnosFiltrados" 
                                 [class.selected]="isAlumnoSelected(a)" 
                                 (click)="toggleAlumnoSeleccion(a)">
                                <img [src]="a.jugador_foto" class="chip-avatar">
                                <span class="chip-name">{{ a.jugador_nombre.split(' ')[0] }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Pack Assignment / Gesti\xF3n de Cobro -->
                    <div class="nike-card minimal-light animate-fade mt-4" *ngIf="alumnoSeleccionado">
                        <div class="card-header-v3">
                            <ion-icon name="card-outline" slot="start" color="primary"></ion-icon>
                            <h4 style="color: #333;">Gesti\xF3n de Cobro</h4>
                        </div>
                        
                        <!-- NEW: Pack Selector for Existing Packs (Functional Parity with Web) -->
                        <div class="nike-select-wrapper light-wrapper animate-fade mb-2" *ngIf="alumnosPacksConCredito.length >= 1">
                            <ion-icon name="ticket-outline" slot="start" style="color: #10b981; font-size: 20px; margin-right: 12px;"></ion-icon>
                            <ion-item lines="none" style="--background: transparent; width: 100%; --padding-start: 0;">
                                <ion-label position="stacked" style="color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 4px;">Usar Pack del Alumno:</ion-label>
                                <ion-select [(ngModel)]="alumnoSeleccionado.pack_jugador_id" interface="popover" mode="ios" (ionChange)="onPackAlumnoToggle()" style="margin-top: 5px;">
                                    <ion-select-option *ngFor="let p of alumnosPacksConCredito" [value]="p.id || p.pack_jugador_id">
                                        {{ p.pack_nombre }} ({{ p.sesiones_restantes }} cr\xE9d.)
                                    </ion-select-option>
                                </ion-select>
                            </ion-item>
                        </div>

                        <!-- Info del pack seleccionado actualmente (Solo si NO hay selector o ya se eligi\xF3 uno) -->
                        <div class="current-credits-info animate-fade" *ngIf="alumnosPacksConCredito.length === 0 && (alumnoSeleccionado.sesiones_restantes || 0) > 0 && !mostrarSelectorPackManual">
                            <span class="pack-name-badge">{{ alumnoSeleccionado.pack_nombre || 'Pack Activo' }}</span>
                            <p class="credits-count">
                                Saldo disponible: <strong>{{ alumnoSeleccionado.sesiones_restantes }} clases</strong>
                            </p>
                        </div>
                        
                        <!-- Alerta de Agotado: Solo si el saldo real despu\xE9s de calcular disponibles es 0 -->
                        <div class="exhausted-pack-card" style="background:#fee2e2; padding: 10px; border-radius:8px; margin-bottom: 12px; border: 1px solid #fca5a5;" 
                             *ngIf="alumnosPacksConCredito.length === 0 && (alumnoSeleccionado.sesiones_restantes || 0) <= 0">
                            <p class="m-0" style="color:#b91c1c; font-size:14px; font-weight: 500;">
                                <ion-icon name="alert-circle-outline" style="vertical-align: middle;"></ion-icon> El alumno se qued\xF3 sin cr\xE9ditos.
                            </p>
                        </div>
                        
                        <!-- Checkbox para vender pack nuevo (Visible si tiene cr\xE9ditos) -->
                        <div class="premium-checkbox-card mt-2" [class.active]="mostrarSelectorPackManual" (click)="togglePackManual()" 
                             *ngIf="alumnosPacksConCredito.length > 0 || (alumnoSeleccionado.sesiones_restantes || 0) > 0">
                            <div class="chk-content">
                                <ion-checkbox [checked]="mostrarSelectorPackManual" mode="ios" style="--size: 20px; --checkbox-background-checked: #10b981; pointer-events: none; margin: 0;"></ion-checkbox>
                                <div class="chk-text">
                                    <span class="main-label">Asignar un pack NUEVO</span>
                                    <span class="sub-label">Venta manual de sesi\xF3n</span>
                                </div>
                            </div>
                            <ion-icon [name]="mostrarSelectorPackManual ? 'checkmark-circle' : 'add-circle-outline'" 
                                      [color]="mostrarSelectorPackManual ? 'success' : 'medium'"></ion-icon>
                        </div>
                        
                        <!-- Selector de Pack Manual (Visible si se activ\xF3 el check o si NO tiene cr\xE9ditos en absoluto) -->
                        <div class="nike-select-wrapper light-wrapper animate-fade mt-3" 
                             *ngIf="mostrarSelectorPackManual || (alumnosPacksConCredito.length === 0 && (alumnoSeleccionado.sesiones_restantes || 0) <= 0)">
                            <ion-icon name="wallet-outline" slot="start" style="color: #0ea5e9; font-size: 20px; margin-right: 12px;"></ion-icon>
                            <ion-select [(ngModel)]="packAAsignar" interface="action-sheet" placeholder="Seleccionar nuevo pack" mode="ios" cancelText="Cancelar">
                                <ion-select-option *ngFor="let p of packsParaTipo" [value]="p" class="ion-text-wrap">{{ p.nombre }} - \${{ p.precio | number:'1.0-0' }}</ion-select-option>
                            </ion-select>
                        </div>

                        <!-- NEW: Multi-student pack status display (Functional Parity with Web) -->
                        <div class="mt-3" *ngIf="tipoClaseSeleccionado !== 'individual' && alumnosSeleccionados.length > 0">
                            <div *ngFor="let s of alumnosSeleccionados" class="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-1">
                                <span class="text-xs font-bold text-gray-700">{{ s.jugador_nombre }}</span>
                                <span class="text-xs px-2 py-1 rounded" [ngClass]="(s.sesiones_restantes > 0) ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                                    {{ (s.sesiones_restantes > 0) ? s.pack_nombre : 'Sin saldo' }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Malla / Syllabus -->
                    <div class="nike-card minimal-light animate-fade mt-5">
                        <div class="card-header-v3 mb-3">
                            <ion-icon name="school-outline" slot="start" color="primary"></ion-icon>
                            <h4 style="color: #333; margin: 0;">Planificaci\xF3n T\xE9cnica</h4>
                        </div>
                        <div class="nike-select-wrapper light-wrapper mb-2">
                            <ion-select [(ngModel)]="categoriaFiltro" (ionChange)="onCategoriaChange()" interface="popover" mode="ios">
                                <ion-select-option value="todos">Todas las categor\xEDas</ion-select-option>
                                <ion-select-option value="adulto">Malla Adultos</ion-select-option>
                                <ion-select-option value="menor">Malla Menores</ion-select-option>
                            </ion-select>
                        </div>
                        <div class="nike-select-wrapper light-wrapper mb-2">
                            <ion-select [(ngModel)]="planificacionId" (ionChange)="onMallaChange()" interface="popover" placeholder="Selecciona la Malla" mode="ios">
                                <ion-select-option *ngFor="let m of mallasFiltradas" [value]="m.id">{{ m.nombre }}</ion-select-option>
                            </ion-select>
                        </div>
                        <div class="nike-select-wrapper light-wrapper" *ngIf="planificacionId">
                            <ion-select [(ngModel)]="claseMallaId" (ionChange)="onClaseChange()" interface="action-sheet" placeholder="N\xFAmero de sesi\xF3n" mode="ios">
                                <ion-select-option *ngFor="let c of clasesDisponibles" [value]="c.id" class="ion-text-wrap">Sesi\xF3n {{ c.sesion_numero }}: {{ c.titulo }}</ion-select-option>
                            </ion-select>
                        </div>
                    </div>

                    <!-- Repetir -->
                    <div class="nike-card minimal-light animate-fade mt-5 mb-5">
                        <div class="card-header-v3 mb-3" style="margin-bottom: 12px !important">
                            <ion-icon name="calendar-outline" slot="start" color="primary"></ion-icon>
                            <h4 style="color: #333; margin: 0;">Recurrencia</h4>
                        </div>
                        <div class="nike-select-wrapper light-wrapper" style="margin-bottom: 0;">
                            <ion-icon name="repeat-outline" slot="start" style="color: #64748b; margin-right: 10px;"></ion-icon>
                            <ion-select [(ngModel)]="recurrencia" interface="popover" mode="ios">
                                <ion-select-option [value]="1">Sin recurrencia (Hoy)</ion-select-option>
                                <ion-select-option [value]="2">2 Reservas semanales</ion-select-option>
                                <ion-select-option [value]="4">4 Reservas mensuales</ion-select-option>
                            </ion-select>
                        </div>
                    </div>

                    <div class="mt-4 mb-4" style="text-align: center;">
                        <ion-button expand="block" class="nike-btn outline-success" shape="round" 
                                    (click)="confirmarAgendamiento()">
                            Agendar
                        </ion-button>
                    </div>
                </div>
            </ion-content>
        </ng-template>
    </ion-modal>

    <!-- Details Modal -->
    <ion-modal #detailModal [isOpen]="isDetailModalOpen" (didDismiss)="cerrarModal()" class="custom-bottom-modal">
        <ng-template>
            <ion-header class="ion-no-border">
                <ion-toolbar>
                    <ion-title>Detalles {{ selectedSlot?.hour }}</ion-title>
                    <ion-buttons slot="end">
                        <ion-button (click)="cerrarModal()" mode="ios">
                            <ion-icon name="close-outline" size="large" slot="icon-only"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="modal-content-nike">
                <div class="modal-body pb-safe" *ngIf="selectedSlot">
                    <div class="student-header text-center">
                        <h2 *ngIf="participantesGrupo.length <= 1">{{ selectedSlot.slot.jugador_nombre || 'Alumno' }}</h2>
                        <h2 *ngIf="participantesGrupo.length > 1">Clase Grupal ({{ participantesGrupo.length }} Alumnos)</h2>
                        <p>{{ selectedSlot.slot.reserva_tipo }}</p>
                    </div>

                    <!-- SECCI\xD3N: Participantes (Solo Grupal) -->
                    <div class="participants-section animate-up" *ngIf="(selectedSlot.slot.tipo || '').toLowerCase().includes('grupal') || (selectedSlot.slot.reserva_tipo || '').toLowerCase().includes('grupal') || (selectedSlot.slot.pack_id && selectedSlot.slot.pack_id != '0')" style="background: #f8fafc; border-radius: 16px; padding: 15px; margin: 15px 0; border: 1px solid #e2e8f0;">
                        <div class="ps-header" style="margin-bottom: 12px;">
                            <ion-icon name="people-outline" style="vertical-align: middle; margin-right: 5px; color: #64748b;"></ion-icon>
                            <b style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase;">Participantes ({{ participantesGrupo.length }}/{{ selectedSlot.slot.capacidad_maxima || 6 }})</b>
                        </div>

                        <div class="ps-list" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                            <div class="participant-item animate-pop" *ngFor="let p of participantesGrupo" style="display: flex; align-items: center; gap: 6px; background: white; padding: 4px 10px; border-radius: 20px; border: 1px solid #cbd5e1;">
                                <img [src]="getFotoUrl(p)" class="p-avatar" style="width: 20px; height: 20px; border-radius: 50%;">
                                <span style="font-size: 11px; font-weight: 700; color: #334155;">{{ p.nombre || p.jugador_nombre }}</span>
                                <ion-icon name="close-circle" style="color: #ef4444; font-size: 14px; margin-left: 2px;" (click)="quitarJugador(p); $event.stopPropagation()"></ion-icon>
                            </div>
                            <div class="no-participants" *ngIf="participantesGrupo.length === 0" style="font-size: 12px; color: #94a3b8; font-style: italic; padding: 5px 0;">
                                Sin alumnos inscritos a\xFAn.
                            </div>
                        </div>

                        <div class="add-player-box" style="border-top: 1px solid #e2e8f0; padding-top: 12px;">
                            <label style="font-size: 9px; font-weight: 900; color: #94a3b8; display: block; margin-bottom: 8px;">AGREGAR ALUMNO MANUALMENTE</label>
                            <div class="search-input-wrap" style="position: relative;">
                                <ion-searchbar 
                                    [(ngModel)]="searchQueryMini" 
                                    (ionInput)="searchPlayersMini()"
                                    placeholder="Buscar..."
                                    class="mini-search"
                                    mode="ios"
                                    style="--border-radius: 10px; --background: white; --box-shadow: none; border: 1px solid #e2e8f0; height: 36px; padding: 0;">
                                </ion-searchbar>
                                
                                <div class="search-results-mini" *ngIf="searchResultsMini.length > 0" style="position: absolute; top: 40px; left: 0; right: 0; background: white; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 100; max-height: 150px; overflow-y: auto;">
                                    <div class="res-item" *ngFor="let res of searchResultsMini" (click)="addJugadorManual(res)" style="padding: 10px 15px; font-size: 12px; font-weight: 700; color: #1e293b; border-bottom: 1px solid #f1f5f9;">
                                        {{ res.nombre }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="nike-card dark animate-fade" *ngIf="!isEditingDetail">
                        <h4>Planificaci\xF3n</h4>
                        <p *ngIf="selectedSlot.slot.malla_nombre" style="color: #00f2ff">{{ selectedSlot.slot.malla_nombre }} - {{ selectedSlot.slot.clase_titulo }}</p>
                        <p *ngIf="!selectedSlot.slot.malla_nombre">Sin planificaci\xF3n t\xE9cnica asignada.</p>
                        
                        <ion-button fill="clear" (click)="enableDetailEdit()">
                            <ion-icon name="create-outline" slot="start"></ion-icon>
                            Editar Planificaci\xF3n
                        </ion-button>
                    </div>

                    <div class="nike-card dark animate-fade" *ngIf="isEditingDetail">
                        <h4 style="color: white; padding-left: 0;">Editar Planificaci\xF3n</h4>
                        <ion-item lines="none" style="--background: transparent; --padding-start: 0;">
                            <ion-select [(ngModel)]="planificacionId" (ionChange)="onMallaChange()" interface="popover" placeholder="Elige la Malla" mode="ios" style="color: white; width: 100%;">
                                <ion-select-option *ngFor="let m of mallas" [value]="m.id">{{ m.nombre }}</ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-item lines="none" style="--background: transparent; --padding-start: 0;" *ngIf="planificacionId">
                            <ion-select [(ngModel)]="claseMallaId" (ionChange)="onClaseChange()" interface="popover" placeholder="Elige qu\xE9 clase dar" mode="ios" style="color: #00f2ff; width: 100%;">
                                <ion-select-option *ngFor="let c of clasesDisponibles" [value]="c.id">({{ c.sesion_numero }}) {{ c.titulo }}</ion-select-option>
                            </ion-select>
                        </ion-item>
                        
                        <ion-button expand="block" shape="round" class="nike-btn outline-success mt-4" (click)="saveTechnicalDetail()">Guardar Plan</ion-button>
                    </div>

                    <div class="mt-4 mb-4 text-center">
                        <ion-button expand="block" fill="solid" class="btn-cancelar-nike" (click)="confirmarCancelacion()">
                            <ion-icon name="trash-outline" slot="start"></ion-icon>
                            Cancelar Reserva
                        </ion-button>
                    </div>
                </div>
            </ion-content>
        </ng-template>
    </ion-modal>

    <!-- Back FAB -->
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
            <ion-icon name="chevron-back-outline"></ion-icon>
        </ion-fab-button>
    </ion-fab>
</ion-content>`, styles: ['/* src/app/pages/entrenador-agendar/entrenador-agendar.page.scss */\n.header-v2 {\n  position: relative;\n  padding: 60px 25px 60px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.8)),\n    url(/assets/mod-agenda.jpg) center/cover no-repeat;\n  border-radius: 0 0 45px 45px;\n  margin-bottom: -30px;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-v2 .h-text p {\n  color: #ccff00;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.header-v2 .h-text h1 {\n  color: #fff;\n  font-size: 34px;\n  font-weight: 950;\n  letter-spacing: -2px;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n}\n.header-v2 .h-avatar {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .header-title {\n  font-size: 30px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content .header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: 500;\n}\n.dashboard-container {\n  padding: 25px 20px 120px;\n  margin-top: -15px;\n  background: #fff;\n  border-radius: 40px 40px 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n  z-index: 20;\n  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.1);\n}\n.section-nike .section-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.section-nike .section-header .step-badge {\n  background: #000;\n  color: var(--ion-color-secondary);\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-weight: 900;\n  transform: rotate(-5deg);\n  font-size: 14px;\n}\n.section-nike .section-header h3 {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #111;\n}\n.student-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 20px;\n  padding-bottom: 30px;\n}\n.student-card {\n  background: white;\n  border-radius: 24px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.student-card:active {\n  transform: scale(0.95);\n  background: #fbfbfb;\n}\n.student-card .avatar-large {\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 16px;\n  border: 4px solid #f2f2f7;\n  position: relative;\n  background: #eee;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.student-card .avatar-large img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.student-card .avatar-large .initials-avatar {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #000;\n  color: #ccff00;\n  font-size: 30px;\n  font-weight: 800;\n}\n.student-card .info h3 {\n  font-size: 17px;\n  font-weight: 800;\n  margin: 0 0 4px;\n  color: #111;\n  letter-spacing: -0.5px;\n}\n.student-card .info .pack-name {\n  font-size: 12px;\n  color: #888;\n  margin: 0 0 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.student-card .info .credits-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #000;\n  padding: 6px 14px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #ccff00;\n}\n.student-card .info .credits-badge ion-icon {\n  font-size: 14px;\n}\nion-modal {\n  --border-radius: 32px 32px 0 0;\n  --height: 92%;\n}\nion-modal::part(content) {\n  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.1);\n}\nion-toolbar {\n  --padding-top: 20px;\n  --padding-bottom: 10px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\nion-toolbar ion-title {\n  font-weight: 900;\n  font-size: 20px;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n}\n.modal-content-nike {\n  --background: #fff;\n}\n.modal-body {\n  padding: 0 24px 40px;\n}\n.selected-student-header {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-bottom: 30px;\n  padding: 24px 0;\n  border-bottom: 1px dashed #eee;\n}\n.selected-student-header .modal-avatar-wrapper {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #ccff00;\n  flex-shrink: 0;\n  box-shadow: 0 6px 20px rgba(204, 255, 0, 0.2);\n}\n.selected-student-header .modal-avatar-wrapper img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.selected-student-header .modal-avatar-wrapper .initials-avatar-small {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #000;\n  color: #ccff00;\n  font-size: 24px;\n  font-weight: 800;\n}\n.selected-student-header h2 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: -0.8px;\n}\n.selected-student-header p {\n  margin: 4px 0 0;\n  color: #888;\n  font-size: 13px;\n  font-weight: 600;\n}\n.section-title {\n  font-size: 13px;\n  font-weight: 900;\n  margin: 30px 0 15px;\n  text-transform: uppercase;\n  color: #bbb;\n  letter-spacing: 1.5px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-title::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #f0f0f0;\n}\n.nike-card {\n  background: #f8f8fa;\n  border-radius: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.recurrence-card {\n  margin-bottom: 5px;\n}\n.recurrence-card ion-item {\n  --background: transparent;\n  --padding-start: 16px;\n  --min-height: 64px;\n}\n.recurrence-card ion-item ion-icon {\n  color: #000;\n  margin-right: 12px;\n  font-size: 20px;\n}\n.recurrence-card ion-item ion-label {\n  font-weight: 800;\n  font-size: 15px;\n  color: #000;\n}\n.recurrence-card ion-item ion-select {\n  font-weight: 900;\n  font-size: 15px;\n  color: #000;\n  --placeholder-color: #000;\n  --placeholder-opacity: 1;\n}\n.slots-grid-modal {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-top: 15px;\n}\n.slot-card-modal {\n  padding: 18px 0;\n  text-align: center;\n  font-weight: 900;\n  background: white;\n  border: 1.5px solid #f2f2f7;\n  border-radius: 18px;\n  font-size: 18px;\n  color: #000;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);\n  transition: all 0.2s ease;\n}\n.slot-card-modal.ocupado {\n  opacity: 0.3;\n  text-decoration: line-through;\n  background: #f2f2f7;\n  border-color: transparent;\n  box-shadow: none;\n}\n.slot-card-modal:active:not(.ocupado) {\n  transform: scale(0.92);\n  background: #000;\n  color: #ccff00;\n  border-color: #000;\n}\n.empty-slots,\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  margin: 20px 0 40px;\n}\n.empty-slots ion-button,\n.pagination-controls ion-button {\n  --background: #fff;\n  --color: #000;\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 44px;\n  height: 44px;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  font-weight: 800;\n  border: 1px solid #f2f2f7;\n}\n.empty-slots ion-button[disabled],\n.pagination-controls ion-button[disabled] {\n  opacity: 0.3;\n}\n.empty-slots ion-button:active,\n.pagination-controls ion-button:active {\n  --background: #000;\n  --color: #ccff00;\n}\n.empty-slots ion-button ion-icon,\n.pagination-controls ion-button ion-icon {\n  font-size: 20px;\n}\n.empty-slots .page-info,\n.pagination-controls .page-info {\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #000;\n  background: #f2f2f7;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.no-data-msg {\n  text-align: center;\n  padding: 30px;\n  color: #aaa;\n  font-weight: 700;\n  font-size: 14px;\n  background: #f8f8fa;\n  border-radius: 18px;\n  margin-top: 10px;\n}\n.loading-state {\n  text-align: center;\n  padding: 50px;\n  color: #000;\n}\n.loading-state ion-spinner {\n  display: block;\n  margin: 0 auto 15px;\n  --color: #000;\n}\n.loading-state p {\n  font-weight: 800;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.nike-segment-days {\n  margin: 0 -5px 15px;\n  padding-bottom: 20px;\n  --background: transparent;\n}\n.nike-segment-days ion-segment-button {\n  --indicator-color: transparent;\n  --color: #111;\n  --color-checked: #ccff00;\n  margin-right: 12px;\n  min-width: 62px;\n  height: 75px;\n  border-radius: 22px;\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);\n}\n.nike-segment-days ion-segment-button::part(native) {\n  background-color: #fff;\n  color: #111;\n  padding: 10px 0;\n}\n.nike-segment-days ion-segment-button.segment-button-checked {\n  border-color: #000;\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);\n  transform: translateY(-4px);\n}\n.nike-segment-days ion-segment-button.segment-button-checked::part(native) {\n  background-color: #000;\n  color: #ccff00;\n}\n.nike-segment-days ion-segment-button ion-label {\n  gap: 2px;\n}\n.nike-segment-days ion-segment-button ion-label .day-label {\n  font-size: 9px;\n  opacity: 0.6;\n  font-weight: 800;\n}\n.nike-segment-days ion-segment-button ion-label .date-label {\n  font-size: 22px;\n  font-weight: 950;\n  letter-spacing: -1px;\n}\n.section-title.legible {\n  color: #000 !important;\n  font-weight: 950;\n  font-size: 22px;\n  opacity: 1 !important;\n  margin-top: 15px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  letter-spacing: -1px;\n  display: block;\n}\n.nike-segment-periods {\n  --background: #f0f0f5;\n  border-radius: 100px;\n  padding: 5px;\n  margin-bottom: 25px;\n}\n.nike-segment-periods ion-segment-button {\n  --indicator-color: #fff;\n  --color: #888;\n  --color-checked: #000;\n  --border-radius: 100px;\n  font-weight: 900;\n  font-size: 13px;\n  height: 42px;\n}\n.nike-segment-periods ion-segment-button::part(indicator-background) {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.club-toggle-container {\n  margin-bottom: 25px;\n}\n.club-toggle-container .nike-toggle-track {\n  background: #f0f0f5;\n  border-radius: 100px;\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n  position: relative;\n}\n.club-toggle-container .nike-toggle-item {\n  flex: 1;\n  text-align: center;\n  padding: 12px 10px;\n  border-radius: 100px;\n  font-weight: 800;\n  font-size: 13px;\n  color: #888;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 2;\n  text-transform: capitalize;\n}\n.club-toggle-container .nike-toggle-item.active {\n  background: #000;\n  color: #ccff00;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.slot-grid-circles {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n  margin-top: 15px;\n}\n@keyframes pulse-neon {\n  0% {\n    box-shadow: 0 0 0 0 rgba(204, 255, 0, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(204, 255, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(204, 255, 0, 0);\n  }\n}\n.time-circle {\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);\n  border: 1.5px solid rgba(0, 0, 0, 0.05);\n  background: #fff;\n}\n.time-circle:active {\n  transform: scale(0.9);\n}\n.time-circle .circle-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.time-circle.disponible {\n  border-color: rgba(204, 255, 0, 0.3);\n  animation: pulse-neon 2s infinite;\n}\n.time-circle.disponible .time {\n  font-weight: 900;\n  font-size: 16px;\n  color: #000;\n}\n.time-circle.disponible .status-icon.available {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  font-size: 18px;\n  background: #ccff00;\n  color: #000;\n  border-radius: 50%;\n  padding: 3px;\n  border: 2px solid #fff;\n  box-shadow: 0 4px 10px rgba(204, 255, 0, 0.3);\n}\n.time-circle.ocupado {\n  background: #f8f8fb;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.08);\n}\n.time-circle.ocupado .time {\n  font-weight: 800;\n  font-size: 15px;\n  color: #ccc;\n}\n.time-circle.ocupado .avatar-badge-wrapper {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  z-index: 5;\n}\n.time-circle.ocupado .avatar-badge-wrapper .status-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);\n  object-fit: cover;\n  background: #fff;\n}\n.time-circle.ocupado .avatar-badge-wrapper .status-icon {\n  color: #ccc;\n  font-size: 24px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.time-circle.ocupado .club-mini-label {\n  position: absolute;\n  bottom: 15%;\n  font-size: 8px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #888;\n  width: 80%;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0.2px;\n}\n.time-circle.otro-club {\n  background: #fdfdfd;\n  border-color: rgba(0, 0, 0, 0.03);\n}\n.time-circle.otro-club .time {\n  opacity: 0.4;\n  transform: translateY(-4px);\n}\n.horizontal-scroll-list {\n  display: flex;\n  overflow-x: auto;\n  padding: 10px 5px 25px;\n  gap: 15px;\n  margin: 0 -10px;\n}\n.horizontal-scroll-list::-webkit-scrollbar {\n  display: none;\n}\n.horizontal-scroll-list .alumno-chip {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  min-width: 85px;\n  padding: 12px 5px;\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #f2f2f7;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  opacity: 0.6;\n}\n.horizontal-scroll-list .alumno-chip.selected {\n  background: #000;\n  transform: translateY(-8px);\n  border-color: #000;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n  opacity: 1;\n}\n.horizontal-scroll-list .alumno-chip.selected .chip-avatar {\n  border-color: #ccff00;\n  box-shadow: 0 0 0 4px rgba(204, 255, 0, 0.2);\n}\n.horizontal-scroll-list .alumno-chip.selected .chip-name {\n  font-weight: 900;\n  color: #ccff00;\n}\n.horizontal-scroll-list .alumno-chip .chip-avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid transparent;\n  transition: 0.3s;\n}\n.horizontal-scroll-list .alumno-chip .chip-name {\n  font-size: 12px;\n  font-weight: 800;\n  text-align: center;\n  color: #666;\n  max-width: 75px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nike-search-v2 {\n  --background: #f4f4f7;\n  --border-radius: 12px;\n  --placeholder-color: #999;\n  --icon-color: #000;\n  --height: 44px;\n  padding: 0;\n  margin-bottom: 12px;\n}\n.nike-search-v2::part(container) {\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n  padding-inline-start: 12px;\n}\n.nike-search-v2.focused ::part(container) {\n  border-color: #ccff00;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.nike-search-v2::part(native) {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.section-title.legible {\n  font-size: 14px;\n  margin-bottom: 10px;\n  letter-spacing: -0.5px;\n}\n.nike-select-wrapper {\n  background: #222;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  padding: 14px 18px;\n  margin-bottom: 15px;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.nike-select-wrapper ion-icon {\n  font-size: 20px;\n  color: #ccff00;\n}\n.nike-select-wrapper ion-select {\n  flex: 1;\n  width: 100%;\n  --placeholder-color: rgba(255,255,255,0.4);\n  --placeholder-opacity: 1;\n  font-weight: 800;\n  font-size: 14px;\n  color: #fff;\n}\n.nike-select-wrapper ion-select::part(icon) {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 16px;\n}\n.nike-select-wrapper ion-select::part(text) {\n  color: #fff;\n}\n.nike-select-wrapper:has(ion-select:focus) {\n  border-color: #ccff00;\n}\n.card-header-v3 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.card-header-v3 ion-icon {\n  font-size: 22px;\n}\n.nike-card.minimal-light {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 22px 20px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f1f5f9;\n}\n.nike-card.minimal-light h4 {\n  margin: 0 0 10px;\n  font-size: 15px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #1e293b;\n  letter-spacing: 0.5px;\n}\n.nike-card.minimal-light p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n  line-height: 1.5;\n}\n.nike-card.minimal-light ion-button {\n  --color: #0ea5e9;\n  --padding-start: 0;\n  margin-top: 15px;\n  font-weight: 950;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 36px;\n}\n.nike-card.minimal-light ion-button::part(native) {\n  color: #0ea5e9;\n}\n.nike-card.minimal-light ion-button ion-icon {\n  margin-right: 8px;\n  font-size: 18px;\n}\n.light-wrapper {\n  background: #f8fafc !important;\n  border: 1px solid #e2e8f0 !important;\n}\n.light-wrapper ion-icon {\n  color: #0ea5e9 !important;\n}\n.light-wrapper ion-select {\n  color: #334155 !important;\n  --placeholder-color: #94a3b8 !important;\n}\n.light-wrapper ion-select::part(icon) {\n  color: #64748b !important;\n}\n.light-wrapper ion-select::part(text) {\n  color: #334155 !important;\n}\n.light-wrapper:has(ion-select:focus) {\n  border-color: #0ea5e9 !important;\n  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);\n}\n.current-credits-info {\n  background: #f1f5f9;\n  padding: 14px 18px;\n  border-radius: 18px;\n  margin-bottom: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border-left: 4px solid #0ea5e9;\n}\n.current-credits-info .pack-name-badge {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #0ea5e9;\n  background: rgba(14, 165, 233, 0.1);\n  padding: 4px 10px;\n  border-radius: 8px;\n  display: inline-block;\n  width: fit-content;\n}\n.current-credits-info .credits-count {\n  margin: 0;\n  font-size: 15px;\n  color: #334155;\n  font-weight: 500;\n}\n.current-credits-info .credits-count strong {\n  color: #0f172a;\n  font-weight: 800;\n}\n.premium-checkbox-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 20px;\n}\n.premium-checkbox-card .chk-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.premium-checkbox-card .chk-text {\n  display: flex;\n  flex-direction: column;\n}\n.premium-checkbox-card .chk-text .main-label {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.premium-checkbox-card .chk-text .sub-label {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n.premium-checkbox-card ion-icon {\n  font-size: 24px;\n  transition: transform 0.3s ease;\n}\n.premium-checkbox-card.active {\n  background: #f0fdf4;\n  border-color: #10b981;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);\n}\n.premium-checkbox-card.active ion-icon {\n  transform: scale(1.1);\n}\n.premium-checkbox-card.active .main-label {\n  color: #065f46;\n}\n.premium-checkbox-card:active {\n  transform: scale(0.98);\n}\n.student-header {\n  padding: 10px 0 30px;\n}\n.student-header h2 {\n  font-size: 32px;\n  font-weight: 950;\n  letter-spacing: -2px;\n  color: #000;\n  margin: 0 0 5px;\n  text-transform: uppercase;\n  line-height: 1;\n}\n.student-header p {\n  font-size: 15px;\n  font-weight: 800;\n  color: #999;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.btn-cancelar-nike {\n  --background: #ff3131;\n  --background-activated: #d70000;\n  --color: #fff;\n  --border-radius: 100px;\n  height: 64px;\n  font-weight: 950;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 1.5px;\n  margin-top: 25px;\n  box-shadow: 0 12px 30px rgba(255, 49, 49, 0.3);\n}\n.btn-cancelar-nike ion-icon {\n  margin-right: 12px;\n  font-size: 22px;\n}\n.nike-btn.outline-success {\n  --background: #ccff00;\n  --color: #000;\n  --border-radius: 100px;\n  height: 64px;\n  font-weight: 950;\n  text-transform: uppercase;\n  box-shadow: 0 12px 30px rgba(204, 255, 0, 0.4);\n  margin: 20px 0;\n}\n.modal-content-nike {\n  --background: #fff;\n}\n.modal-content-nike .modal-body {\n  padding: 0 25px 40px;\n}\n.nike-fab.back-fab {\n  --background: #000;\n  --color: #ccff00;\n  --box-shadow: 0 10px 25px rgba(0,0,0,0.3);\n}\n/*# sourceMappingURL=entrenador-agendar.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: EntrenamientoService }, { type: AlertController }, { type: LoadingController }, { type: ToastController }, { type: NotificationService }], { bookingModal: [{
    type: ViewChild,
    args: ["bookingModal"]
  }], detailModal: [{
    type: ViewChild,
    args: ["detailModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrenadorAgendarPage, { className: "EntrenadorAgendarPage", filePath: "src/app/pages/entrenador-agendar/entrenador-agendar.page.ts", lineNumber: 36 });
})();
export {
  EntrenadorAgendarPage
};
//# sourceMappingURL=entrenador-agendar.page-PLVXYQOR.js.map

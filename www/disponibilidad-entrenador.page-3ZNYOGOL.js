import {
  EntrenamientoService
} from "./chunk-DEYW32VP.js";
import {
  AlertController,
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
  IonList,
  IonModal,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  LoadingController,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  addCircleOutline,
  addIcons,
  checkmarkDoneOutline,
  checkmarkOutline,
  chevronBackOutline,
  chevronDownOutline,
  closeCircleOutline,
  closeOutline,
  flashOutline,
  locationOutline,
  lockClosedOutline,
  saveOutline,
  settingsOutline
} from "./chunk-KFN47MEP.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  SlicePipe,
  UpperCasePipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/pages/disponibilidad-entrenador/disponibilidad-entrenador.page.ts
function DisponibilidadEntrenadorPage_ion_select_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r1 = ctx.$implicit;
    \u0275\u0275property("value", club_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", club_r1.nombre, " ");
  }
}
function DisponibilidadEntrenadorPage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "ion-icon", 39);
    \u0275\u0275elementStart(3, "div", 40)(4, "p");
    \u0275\u0275text(5, "Tienes horarios sin club asignado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Vinc\xFAlalos al club seleccionado para que los alumnos los vean.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-button", 41);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_div_22_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.migrateSlots());
    });
    \u0275\u0275text(9, " VINCULAR ");
    \u0275\u0275elementEnd()();
  }
}
function DisponibilidadEntrenadorPage_ion_segment_button_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-segment-button", 36)(1, "ion-label")(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275property("value", d_r4.fecha);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, \u0275\u0275pipeBind3(4, 3, d_r4.nombre, 0, 3)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, d_r4.fecha, "dd"));
  }
}
function DisponibilidadEntrenadorPage_div_33_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 49);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_div_33_ion_button_4_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.seleccionarTodos());
    });
    \u0275\u0275text(1, " Todo ");
    \u0275\u0275elementEnd();
  }
}
function DisponibilidadEntrenadorPage_div_33_ion_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 50);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_div_33_ion_button_5_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deseleccionarTodos());
    });
    \u0275\u0275text(1, " Nada ");
    \u0275\u0275elementEnd();
  }
}
function DisponibilidadEntrenadorPage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, DisponibilidadEntrenadorPage_div_33_ion_button_4_Template, 2, 0, "ion-button", 47)(5, DisponibilidadEntrenadorPage_div_33_ion_button_5_Template, 2, 0, "ion-button", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.bloquesActuales.length, " bloques ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.todosSeleccionados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.todosSeleccionados);
  }
}
function DisponibilidadEntrenadorPage_div_34_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "ion-icon", 35);
    \u0275\u0275elementEnd();
  }
}
function DisponibilidadEntrenadorPage_div_34_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "ion-icon", 60);
    \u0275\u0275elementEnd();
  }
}
function DisponibilidadEntrenadorPage_div_34_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "ion-icon", 62);
    \u0275\u0275elementStart(2, "span", 63);
    \u0275\u0275text(3, "OTRO CLUB");
    \u0275\u0275elementEnd()();
  }
}
function DisponibilidadEntrenadorPage_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_div_34_div_1_Template_div_click_0_listener() {
      const b_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleBloque(b_r8));
    });
    \u0275\u0275elementStart(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DisponibilidadEntrenadorPage_div_34_div_1_div_3_Template, 2, 0, "div", 55)(4, DisponibilidadEntrenadorPage_div_34_div_1_div_4_Template, 2, 0, "div", 56)(5, DisponibilidadEntrenadorPage_div_34_div_1_div_5_Template, 4, 0, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r8 = ctx.$implicit;
    \u0275\u0275classProp("selected", b_r8.seleccionado)("occupied", b_r8.ocupado)("locked-other", b_r8.lockedByOtherClub);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r8.hora_inicio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r8.seleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r8.ocupado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r8.lockedByOtherClub);
  }
}
function DisponibilidadEntrenadorPage_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, DisponibilidadEntrenadorPage_div_34_div_1_Template, 6, 10, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.bloquesActuales);
  }
}
function DisponibilidadEntrenadorPage_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "p");
    \u0275\u0275text(2, "No se pudieron generar bloques para este d\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
function DisponibilidadEntrenadorPage_ng_template_37_ion_select_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r10 = ctx.$implicit;
    \u0275\u0275property("value", club_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", club_r10.nombre, " ");
  }
}
function DisponibilidadEntrenadorPage_ng_template_37_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_ng_template_37_div_16_Template_div_click_0_listener() {
      const d_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedDayTemplate = d_r12.id);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.selectedDayTemplate === d_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 3, d_r12.name, 0, 3), " ");
  }
}
function DisponibilidadEntrenadorPage_ng_template_37_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_ng_template_37_div_26_Template_div_click_0_listener() {
      const b_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleTemplateBlock(ctx_r2.selectedDayTemplate, b_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r14 = ctx.$implicit;
    \u0275\u0275classProp("selected", b_r14.selected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r14.time, " ");
  }
}
function DisponibilidadEntrenadorPage_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 65)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Semana Base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 66)(5, "ion-button", 67);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_ng_template_37_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDefaultModal = false);
    });
    \u0275\u0275element(6, "ion-icon", 68);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content")(8, "div", 69)(9, "p", 70);
    \u0275\u0275text(10, 'Configura tu horario habitual. "Aplicar Plantilla" copiar\xE1 esto a los pr\xF3ximos 30 d\xEDas. ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 71);
    \u0275\u0275element(12, "ion-icon", 9);
    \u0275\u0275elementStart(13, "ion-select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function DisponibilidadEntrenadorPage_ng_template_37_Template_ion_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedClubId, $event) || (ctx_r2.selectedClubId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(14, DisponibilidadEntrenadorPage_ng_template_37_ion_select_option_14_Template, 2, 2, "ion-select-option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 73);
    \u0275\u0275template(16, DisponibilidadEntrenadorPage_ng_template_37_div_16_Template, 3, 7, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 75)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 76)(21, "ion-button", 49);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_ng_template_37_Template_ion_button_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionarTodoDiaTemplate(ctx_r2.selectedDayTemplate));
    });
    \u0275\u0275text(22, "Todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ion-button", 77);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_ng_template_37_Template_ion_button_click_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deseleccionarTodoDiaTemplate(ctx_r2.selectedDayTemplate));
    });
    \u0275\u0275text(24, "Nada");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 78);
    \u0275\u0275template(26, DisponibilidadEntrenadorPage_ng_template_37_div_26_Template, 2, 3, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ion-button", 80);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_ng_template_37_Template_ion_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDefaultConfig());
    });
    \u0275\u0275text(28, " Guardar Plantilla ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedClubId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.clubes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.diasSemana);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (ctx_r2.templateBlocks[ctx_r2.selectedDayTemplate] == null ? null : ctx_r2.templateBlocks[ctx_r2.selectedDayTemplate].length) || 0, " horas");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.templateBlocks[ctx_r2.selectedDayTemplate]);
  }
}
function DisponibilidadEntrenadorPage_ng_template_47_ion_select_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    \u0275\u0275property("value", r_r16.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r16.name);
  }
}
function DisponibilidadEntrenadorPage_ng_template_47_ion_select_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275property("value", c_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r17);
  }
}
function DisponibilidadEntrenadorPage_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 65)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Registrar Nuevo Club");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 66)(5, "ion-button", 67);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_ng_template_47_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddClubModal = false);
    });
    \u0275\u0275element(6, "ion-icon", 68);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content")(8, "div", 69)(9, "p", 70);
    \u0275\u0275text(10, "Si el club donde entrenas no aparece, reg\xEDstralo aqu\xED.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-list", 83)(12, "ion-item", 84)(13, "ion-label", 85);
    \u0275\u0275text(14, "Nombre del Club *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function DisponibilidadEntrenadorPage_ng_template_47_Template_ion_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClub.nombre, $event) || (ctx_r2.newClub.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-item", 84)(17, "ion-label", 85);
    \u0275\u0275text(18, "Regi\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ion-select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function DisponibilidadEntrenadorPage_ng_template_47_Template_ion_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClub.region, $event) || (ctx_r2.newClub.region = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function DisponibilidadEntrenadorPage_ng_template_47_Template_ion_select_ionChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRegionChange($event));
    });
    \u0275\u0275template(20, DisponibilidadEntrenadorPage_ng_template_47_ion_select_option_20_Template, 2, 2, "ion-select-option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ion-item", 84)(22, "ion-label", 85);
    \u0275\u0275text(23, "Comuna *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function DisponibilidadEntrenadorPage_ng_template_47_Template_ion_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClub.comuna, $event) || (ctx_r2.newClub.comuna = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, DisponibilidadEntrenadorPage_ng_template_47_ion_select_option_25_Template, 2, 2, "ion-select-option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-item", 84)(27, "ion-label", 85);
    \u0275\u0275text(28, "Direcci\xF3n (Calle y N\xFAmero)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ion-input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function DisponibilidadEntrenadorPage_ng_template_47_Template_ion_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClub.direccion, $event) || (ctx_r2.newClub.direccion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ion-item", 84)(31, "ion-label", 85);
    \u0275\u0275text(32, "Tel\xE9fono de contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function DisponibilidadEntrenadorPage_ng_template_47_Template_ion_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newClub.telefono, $event) || (ctx_r2.newClub.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "ion-button", 91);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_ng_template_47_Template_ion_button_click_34_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNewClub());
    });
    \u0275\u0275text(35, " Crear Club ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClub.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClub.region);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.allRegions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClub.comuna);
    \u0275\u0275property("disabled", !ctx_r2.availableComunas.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.availableComunas);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClub.direccion);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newClub.telefono);
  }
}
var _DisponibilidadEntrenadorPage = class _DisponibilidadEntrenadorPage {
  constructor(entrenamientoService, toastCtrl, router, alertController, loadingCtrl) {
    this.entrenamientoService = entrenamientoService;
    this.toastCtrl = toastCtrl;
    this.router = router;
    this.alertController = alertController;
    this.loadingCtrl = loadingCtrl;
    this.entrenador_id = Number(localStorage.getItem("userId"));
    this.clubes = [];
    this.selectedClubId = null;
    this.showDefaultModal = false;
    this.diasSemana = [
      { id: 1, name: "Lunes" },
      { id: 2, name: "Martes" },
      { id: 3, name: "Mi\xE9rcoles" },
      { id: 4, name: "Jueves" },
      { id: 5, name: "Viernes" },
      { id: 6, name: "S\xE1bado" },
      { id: 0, name: "Domingo" }
    ];
    this.templateBlocks = {};
    this.selectedDayTemplate = 1;
    this.showAddClubModal = false;
    this.allRegions = [
      { id: "13", name: "Metropolitana de Santiago" },
      { id: "6", name: "O'Higgins" },
      { id: "5", name: "Valpara\xEDso" }
      // Reducido por simplicidad, se pueden añadir más
    ];
    this.allComunas = {
      "13": ["Santiago", "Las Condes", "Providencia", "\xD1u\xF1oa", "Maip\xFA", "Puente Alto", "La Florida", "Vitacura", "Lo Barnechea", "Colina", "Lampa", "San Bernardo", "Pe\xF1alol\xE9n"],
      "6": ["Rancagua", "Machal\xED", "Rengo", "San Fernando", "Pichilemu", "Santa Cruz"],
      "5": ["Valpara\xEDso", "Vi\xF1a del Mar", "Conc\xF3n", "Quilpu\xE9", "Villa Alemana", "Limache", "Quillota", "San Antonio", "Los Andes", "San Felipe"]
    };
    this.availableComunas = [];
    this.newClub = {
      nombre: "",
      direccion: "",
      region: "",
      comuna: "",
      telefono: "",
      email: ""
    };
    this.dias = [];
    this.diaSeleccionado = "";
    this.bloquesPorDia = {};
    this.disponibilidadExistente = /* @__PURE__ */ new Map();
    this.isLoading = false;
    this.hasSlotsWithoutClub = false;
    addIcons({
      saveOutline,
      checkmarkDoneOutline,
      closeCircleOutline,
      chevronBackOutline,
      settingsOutline,
      flashOutline,
      locationOutline,
      addCircleOutline,
      chevronDownOutline,
      checkmarkOutline,
      lockClosedOutline,
      closeOutline
    });
  }
  /* =============================
     INIT
  ============================== */
  ngOnInit() {
    this.cargarClubes();
    this.crearSemanaDesdeHoy();
    this.generarBloquesSemana();
    this.cargarDisponibilidadExistente();
  }
  cargarClubes() {
    this.entrenamientoService.getClubes().subscribe({
      next: (res) => {
        this.clubes = res;
        if (res.length > 0 && !this.selectedClubId) {
          this.selectedClubId = res[0].id;
        }
      }
    });
  }
  onClubChange() {
    this.disponibilidadExistente.clear();
    this.cargarDisponibilidadExistente();
  }
  // --- ADD CLUB METHODS ---
  openAddClubModal(ev) {
    if (ev) {
      ev.stopPropagation();
    }
    this.showAddClubModal = true;
  }
  onRegionChange(ev) {
    const regionId = ev.detail.value;
    const regionObj = this.allRegions.find((r) => r.name === regionId);
    if (regionObj) {
      this.availableComunas = this.allComunas[regionObj.id] || [];
    } else {
      this.availableComunas = [];
    }
  }
  saveNewClub() {
    if (!this.newClub.nombre || !this.newClub.region || !this.newClub.comuna) {
      this.mostrarToast("Por favor completa los campos obligatorios");
      return;
    }
    this.isLoading = true;
    const payload = __spreadProps(__spreadValues({}, this.newClub), { admin_id: this.entrenador_id, rol: "entrenador" });
    this.entrenamientoService.addClub(payload).subscribe({
      next: (res) => {
        this.mostrarToast("\u2705 Club creado exitosamente");
        this.showAddClubModal = false;
        this.newClub = { nombre: "", direccion: "", region: "", comuna: "", telefono: "", email: "" };
        this.cargarClubes();
        if (res.id)
          this.selectedClubId = res.id;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        this.mostrarToast("\u274C Error al crear club");
      }
    });
  }
  /* =============================
     SEMANA (30 DÍAS)
  ============================== */
  crearSemanaDesdeHoy() {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const TOTAL_DIAS_ADELANTE = 30;
    const TOTAL_DIAS_ATRAS = 60;
    const nombresDias = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"];
    this.dias = [];
    for (let i = -TOTAL_DIAS_ATRAS; i < 0; i++) {
      const fecha = new Date(today);
      fecha.setDate(today.getDate() + i);
      this.dias.push({
        nombre: nombresDias[fecha.getDay()],
        fecha: this.getLocalISODate(fecha),
        hora_inicio: "07:00",
        hora_fin: "22:00",
        duracion: 60
      });
    }
    for (let i = 0; i < TOTAL_DIAS_ADELANTE; i++) {
      const fecha = new Date(today);
      fecha.setDate(today.getDate() + i);
      this.dias.push({
        nombre: nombresDias[fecha.getDay()],
        fecha: this.getLocalISODate(fecha),
        hora_inicio: "07:00",
        hora_fin: "22:00",
        duracion: 60
      });
    }
    if (this.dias.length > 0) {
      this.diaSeleccionado = this.getLocalISODate(today);
      setTimeout(() => {
        const activeBtn = document.querySelector("ion-segment-button.segment-button-checked");
        if (activeBtn) {
          activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }, 500);
    }
  }
  getLocalISODate(date) {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const d = date.getDate().toString().padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  /* =============================
     BLOQUES
  ============================== */
  generarBloquesSemana() {
    this.bloquesPorDia = {};
    this.dias.forEach((dia) => {
      this.bloquesPorDia[dia.fecha] = this.generarBloquesDia(dia.fecha, dia.hora_inicio, dia.hora_fin, dia.duracion);
    });
  }
  generarBloquesDia(fecha, horaInicio, horaFin, duracion) {
    const bloques = [];
    let inicio = /* @__PURE__ */ new Date(`${fecha}T${horaInicio}:00`);
    const fin = /* @__PURE__ */ new Date(`${fecha}T${horaFin}:00`);
    while (inicio < fin) {
      const finBloque = new Date(inicio.getTime() + duracion * 6e4);
      if (finBloque > fin)
        break;
      const key = `${fecha} ${this.formatTime(inicio)}-${fecha} ${this.formatTime(finBloque)}`;
      const savedClubId = this.disponibilidadExistente.get(key);
      const isThisClub = savedClubId === Number(this.selectedClubId);
      const isOtherClub = savedClubId && savedClubId !== Number(this.selectedClubId);
      bloques.push({
        fecha,
        hora_inicio: this.formatTime(inicio).slice(0, 5),
        // "HH:MM"
        hora_fin: this.formatTime(finBloque).slice(0, 5),
        seleccionado: isThisClub || false,
        ocupado: false,
        lockedByOtherClub: isOtherClub || false,
        club_id: savedClubId
      });
      inicio = finBloque;
    }
    return bloques;
  }
  formatTime(date) {
    return date.toTimeString().slice(0, 8);
  }
  /* =============================
     CARGAR DATA
  ============================== */
  cargarDisponibilidadExistente() {
    this.isLoading = true;
    this.hasSlotsWithoutClub = false;
    this.disponibilidadExistente.clear();
    this.entrenamientoService.getDisponibilidad(this.entrenador_id).subscribe({
      next: (data) => {
        data.forEach((d) => {
          const key = `${d.fecha_inicio}-${d.fecha_fin}`;
          this.disponibilidadExistente.set(key, Number(d.club_id));
          if (!d.club_id || d.club_id === 0) {
            this.hasSlotsWithoutClub = true;
          }
        });
        this.generarBloquesSemana();
        this.cargarReservasExistentes();
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
  cargarReservasExistentes() {
    this.entrenamientoService.getReservasEntrenador(this.entrenador_id).subscribe({
      next: (data) => {
        const reservas = [...data.reservas_tradicionales || [], ...data.packs_grupales || []];
        Object.keys(this.bloquesPorDia).forEach((fecha) => {
          this.bloquesPorDia[fecha].forEach((bloque) => {
            const tieneReserva = reservas.some((reserva) => {
              if (!reserva.fecha || !reserva.hora_inicio)
                return false;
              const status = reserva.estado || reserva.estado_grupo;
              if (status === "cancelado")
                return false;
              const horaReserva = String(reserva.hora_inicio).slice(0, 5);
              return reserva.fecha === fecha && horaReserva === bloque.hora_inicio;
            });
            if (tieneReserva)
              bloque.ocupado = true;
          });
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
  /* =============================
     INTERACTION
  ============================== */
  seleccionarDia(fecha) {
    this.diaSeleccionado = fecha;
  }
  get bloquesActuales() {
    return this.bloquesPorDia[this.diaSeleccionado] || [];
  }
  toggleBloque(b) {
    if (b.ocupado || b.lockedByOtherClub)
      return;
    b.seleccionado = !b.seleccionado;
  }
  seleccionarTodos() {
    this.bloquesActuales.forEach((b) => {
      if (!b.ocupado && !b.lockedByOtherClub)
        b.seleccionado = true;
    });
  }
  deseleccionarTodos() {
    this.bloquesActuales.forEach((b) => {
      if (!b.ocupado && !b.lockedByOtherClub)
        b.seleccionado = false;
    });
  }
  get todosSeleccionados() {
    const bloques = this.bloquesActuales;
    if (!bloques || bloques.length === 0)
      return false;
    return bloques.every((b) => b.seleccionado || b.ocupado || b.lockedByOtherClub);
  }
  /* =============================
     GUARDAR
  ============================== */
  guardarDisponibilidad() {
    if (!this.selectedClubId) {
      this.mostrarToast("\u274C Debes seleccionar un club antes de guardar");
      return;
    }
    const crear = [];
    const eliminar = [];
    Object.values(this.bloquesPorDia).forEach((bloques) => {
      bloques.forEach((b) => {
        const key = `${b.fecha} ${b.hora_inicio}:00-${b.fecha} ${b.hora_fin}:00`;
        const existiaId = this.disponibilidadExistente.get(key);
        const existia = existiaId === Number(this.selectedClubId);
        if (b.seleccionado && !existia) {
          crear.push({
            profesor_id: this.entrenador_id,
            fecha_inicio: `${b.fecha} ${b.hora_inicio}:00`,
            fecha_fin: `${b.fecha} ${b.hora_fin}:00`,
            club_id: this.selectedClubId
          });
        }
        if (!b.seleccionado && existia) {
          eliminar.push({
            profesor_id: this.entrenador_id,
            fecha_inicio: `${b.fecha} ${b.hora_inicio}:00`,
            fecha_fin: `${b.fecha} ${b.hora_fin}:00`,
            club_id: this.selectedClubId
          });
        }
      });
    });
    if (crear.length === 0 && eliminar.length === 0) {
      this.mostrarToast("No hay cambios para guardar");
      return;
    }
    this.isLoading = true;
    this.entrenamientoService.syncDisponibilidad({ crear, eliminar }).subscribe({
      next: () => {
        this.disponibilidadExistente.clear();
        this.dias = [];
        this.crearSemanaDesdeHoy();
        this.cargarDisponibilidadExistente();
        this.mostrarToast("\u2705 Horario actualizado correctamente");
      },
      error: () => {
        this.isLoading = false;
        this.mostrarToast("\u274C Error al guardar");
      }
    });
  }
  migrateSlots() {
    return __async(this, null, function* () {
      if (!this.selectedClubId) {
        this.mostrarToast("\u274C Selecciona un club para vincular");
        return;
      }
      const alert = yield this.alertController.create({
        header: "Vincular Horarios",
        message: "Tienes horarios guardados que no est\xE1n asociados a ning\xFAn club. \xBFDeseas vincularlos todos al club seleccionado actualmente?",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Vincular ahora",
            handler: () => {
              this.isLoading = true;
              this.entrenamientoService.migrateAvailability(this.entrenador_id, this.selectedClubId).subscribe({
                next: (res) => {
                  this.mostrarToast(res.message || "Horarios vinculados correctamente");
                  this.cargarDisponibilidadExistente();
                },
                error: () => {
                  this.isLoading = false;
                  this.mostrarToast("Error al vincular horarios");
                }
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  /* =============================
     DEFAULT CONFIG
  ============================== */
  openDefaultModal() {
    this.isLoading = true;
    this.initTemplateBlocks();
    this.entrenamientoService.getDefaultConfig(this.entrenador_id).subscribe({
      next: (res) => {
        res.forEach((range) => {
          const dayId = range.dia_semana;
          const start = range.hora_inicio;
          const end = range.hora_fin;
          if (this.templateBlocks[dayId]) {
            this.templateBlocks[dayId].forEach((b) => {
              if (b.time >= start && b.time < end)
                b.selected = true;
            });
          }
        });
        this.showDefaultModal = true;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.mostrarToast("Error cargando configuraci\xF3n");
      }
    });
  }
  initTemplateBlocks() {
    this.templateBlocks = {};
    const horas = [];
    for (let h = 7; h < 22; h++) {
      const hh = h < 10 ? "0" + h : h;
      horas.push(`${hh}:00`);
    }
    this.diasSemana.forEach((d) => {
      this.templateBlocks[d.id] = horas.map((h) => ({ time: h, selected: false }));
    });
  }
  toggleTemplateBlock(dayId, block) {
    block.selected = !block.selected;
  }
  seleccionarTodoDiaTemplate(dayId) {
    this.templateBlocks[dayId].forEach((b) => b.selected = true);
  }
  deseleccionarTodoDiaTemplate(dayId) {
    this.templateBlocks[dayId].forEach((b) => b.selected = false);
  }
  saveDefaultConfig() {
    if (!this.selectedClubId) {
      this.mostrarToast("\u274C Selecciona un club antes de guardar la plantilla");
      return;
    }
    this.isLoading = true;
    const config = [];
    Object.keys(this.templateBlocks).forEach((dayKey) => {
      const dayId = parseInt(dayKey);
      const blocks = this.templateBlocks[dayId];
      let currentRange = null;
      blocks.forEach((b, idx) => {
        if (b.selected) {
          if (!currentRange) {
            currentRange = {
              dia_semana: dayId,
              club_id: this.selectedClubId,
              hora_inicio: b.time,
              duracion_bloque: 60
            };
          }
        } else {
          if (currentRange) {
            currentRange.hora_fin = b.time;
            config.push(currentRange);
            currentRange = null;
          }
        }
        if (idx === blocks.length - 1 && currentRange) {
          const lastH = parseInt(b.time.split(":")[0]);
          currentRange.hora_fin = (lastH + 1 < 10 ? "0" : "") + (lastH + 1) + ":00";
          config.push(currentRange);
        }
      });
    });
    this.entrenamientoService.saveDefaultConfig({ entrenador_id: this.entrenador_id, config }).subscribe({
      next: () => {
        this.mostrarToast("\u2705 Plantilla semanal guardada");
        this.showDefaultModal = false;
        this.isLoading = false;
      },
      error: () => {
        this.mostrarToast("\u274C Error al guardar plantilla");
        this.isLoading = false;
      }
    });
  }
  applyDefaultConfig() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: "Aplicar Plantilla",
        message: "Esto generar\xE1 tus bloques para los pr\xF3ximos 30 d\xEDas. \xBFContinuar?",
        buttons: [{ text: "Cancelar", role: "cancel" }, { text: "Continuar", role: "confirm", handler: () => this.confirmApply() }]
      });
      yield alert.present();
    });
  }
  confirmApply() {
    this.isLoading = true;
    this.entrenamientoService.applyDefaultConfig({ entrenador_id: this.entrenador_id, days_ahead: 30 }).subscribe({
      next: () => {
        this.mostrarToast("\u2705 Plantilla aplicada (30 d\xEDas)");
        this.disponibilidadExistente.clear();
        this.cargarDisponibilidadExistente();
      },
      error: () => {
        this.mostrarToast("\u274C Error aplicando plantilla");
        this.isLoading = false;
      }
    });
  }
  mostrarToast(mensaje) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: mensaje,
        duration: 2500,
        position: "bottom",
        color: "dark"
      });
      toast.present();
    });
  }
  goBack() {
    this.router.navigate(["/entrenador-home"]);
  }
};
_DisponibilidadEntrenadorPage.\u0275fac = function DisponibilidadEntrenadorPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DisponibilidadEntrenadorPage)(\u0275\u0275directiveInject(EntrenamientoService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController));
};
_DisponibilidadEntrenadorPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisponibilidadEntrenadorPage, selectors: [["app-disponibilidad-entrenador"]], decls: 48, vars: 10, consts: [[1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "header-title"], [1, "header-sub"], [1, "dashboard-container"], [1, "club-selector-wrapper", "animate-up"], [1, "venue-card"], [1, "venue-icon-box"], ["name", "location-outline"], [1, "venue-details"], [1, "venue-label"], [1, "venue-selector-row"], ["interface", "popover", "toggleIcon", "chevron-down-outline", "mode", "md", "placeholder", "Selecciona un club...", 1, "premium-select", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "venue-actions"], ["fill", "clear", 1, "btn-add-venue", 3, "click"], ["name", "add-circle-outline"], ["class", "migration-banner animate-pop", 4, "ngIf"], [1, "helper-actions", "animate-up"], ["expand", "block", 1, "nike-button", "secondary-btn", 3, "click"], ["name", "settings-outline", "slot", "start"], ["name", "flash-outline", "slot", "start"], [1, "segment-wrapper", "animate-up", 2, "animation-delay", "0.05s"], ["scrollable", "", "mode", "md", 1, "nike-segment-days-light", 3, "ngModelChange", "ngModel"], ["class", "tools-bar animate-up", "style", "animation-delay: 0.1s;", 4, "ngIf"], ["class", "blocks-grid animate-up", "style", "animation-delay: 0.15s;", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "nike-modal", 3, "didDismiss", "isOpen"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "fab-wrapper"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], [1, "nike-fab", "save-fab", 3, "click"], ["name", "save-outline"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "checkmark-outline"], [3, "value"], [1, "migration-banner", "animate-pop"], [1, "banner-content"], ["name", "warning-outline"], [1, "banner-text"], ["fill", "clear", 1, "btn-sync-now", 3, "click"], [1, "day-label"], [1, "date-label"], [1, "tools-bar", "animate-up", 2, "animation-delay", "0.1s"], [1, "info-text"], [1, "tools-actions"], ["fill", "clear", "size", "small", 3, "click", 4, "ngIf"], ["fill", "clear", "size", "small", "color", "danger", 3, "click", 4, "ngIf"], ["fill", "clear", "size", "small", 3, "click"], ["fill", "clear", "size", "small", "color", "danger", 3, "click"], [1, "blocks-grid", "animate-up", 2, "animation-delay", "0.15s"], ["class", "nike-card block-card", 3, "selected", "occupied", "locked-other", "click", 4, "ngFor", "ngForOf"], [1, "nike-card", "block-card", 3, "click"], [1, "block-time"], ["class", "selection-check", 4, "ngIf"], ["class", "occupied-indicator", 4, "ngIf"], ["class", "other-club-indicator", 4, "ngIf"], [1, "selection-check"], [1, "occupied-indicator"], ["name", "lock-closed-outline"], [1, "other-club-indicator"], ["name", "business-outline"], [1, "other-label"], [1, "empty-state"], ["mode", "ios", 1, "ion-no-border"], ["slot", "end"], [3, "click"], ["name", "close-outline"], [1, "modal-content-padded"], [1, "modal-intro"], [1, "modal-club-selector", "animate-up"], ["placeholder", "Seleccionar Club para esta plantilla", 1, "nike-select-modal", 3, "ngModelChange", "ngModel"], [1, "template-days-row"], ["class", "day-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "template-tools"], [1, "t-actions"], ["fill", "clear", "size", "small", "color", "medium", 3, "click"], [1, "template-grid"], ["class", "t-block", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["expand", "block", 1, "nike-button", "main-btn", "save-tmpl-btn", 3, "click"], [1, "day-chip", 3, "click"], [1, "t-block", 3, "click"], ["lines", "none", 1, "nike-list"], [1, "nike-item"], ["position", "stacked"], ["placeholder", "Ej: Padel Rancagua", 3, "ngModelChange", "ngModel"], ["placeholder", "Seleccionar", "interface", "popover", 3, "ngModelChange", "ionChange", "ngModel"], ["placeholder", "Seleccionar", "interface", "popover", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "Ej: San Juan 123", 3, "ngModelChange", "ngModel"], ["placeholder", "+56 9...", 3, "ngModelChange", "ngModel"], ["expand", "block", 1, "nike-button", "main-btn", "save-club-btn", 3, "click"]], template: function DisponibilidadEntrenadorPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementStart(3, "div", 2)(4, "h1", 3);
    \u0275\u0275text(5, "Mi Disponibilidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, "Gestiona tus horarios de clase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
    \u0275\u0275element(12, "ion-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "span", 11);
    \u0275\u0275text(15, "Lugar de Entrenamiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12)(17, "ion-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function DisponibilidadEntrenadorPage_Template_ion_select_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedClubId, $event) || (ctx.selectedClubId = $event);
      return $event;
    });
    \u0275\u0275listener("ionChange", function DisponibilidadEntrenadorPage_Template_ion_select_ionChange_17_listener() {
      return ctx.onClubChange();
    });
    \u0275\u0275template(18, DisponibilidadEntrenadorPage_ion_select_option_18_Template, 2, 2, "ion-select-option", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 15)(20, "ion-button", 16);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_Template_ion_button_click_20_listener($event) {
      return ctx.openAddClubModal($event);
    });
    \u0275\u0275element(21, "ion-icon", 17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(22, DisponibilidadEntrenadorPage_div_22_Template, 10, 0, "div", 18);
    \u0275\u0275elementStart(23, "div", 19)(24, "ion-button", 20);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_Template_ion_button_click_24_listener() {
      return ctx.openDefaultModal();
    });
    \u0275\u0275element(25, "ion-icon", 21);
    \u0275\u0275text(26, " Config. Semana Base ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ion-button", 20);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_Template_ion_button_click_27_listener() {
      return ctx.applyDefaultConfig();
    });
    \u0275\u0275element(28, "ion-icon", 22);
    \u0275\u0275text(29, " Aplicar Plantilla (30d) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 23)(31, "ion-segment", 24);
    \u0275\u0275twoWayListener("ngModelChange", function DisponibilidadEntrenadorPage_Template_ion_segment_ngModelChange_31_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.diaSeleccionado, $event) || (ctx.diaSeleccionado = $event);
      return $event;
    });
    \u0275\u0275template(32, DisponibilidadEntrenadorPage_ion_segment_button_32_Template, 9, 12, "ion-segment-button", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, DisponibilidadEntrenadorPage_div_33_Template, 6, 3, "div", 25)(34, DisponibilidadEntrenadorPage_div_34_Template, 2, 1, "div", 26)(35, DisponibilidadEntrenadorPage_div_35_Template, 3, 0, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ion-modal", 28);
    \u0275\u0275listener("didDismiss", function DisponibilidadEntrenadorPage_Template_ion_modal_didDismiss_36_listener() {
      return ctx.showDefaultModal = false;
    });
    \u0275\u0275template(37, DisponibilidadEntrenadorPage_ng_template_37_Template, 29, 5, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ion-fab", 29)(39, "ion-fab-button", 30);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_Template_ion_fab_button_click_39_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(40, "ion-icon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ion-fab-button", 32);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_Template_ion_fab_button_click_41_listener() {
      return ctx.guardarDisponibilidad();
    });
    \u0275\u0275element(42, "ion-icon", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "ion-fab", 34)(44, "ion-fab-button", 32);
    \u0275\u0275listener("click", function DisponibilidadEntrenadorPage_Template_ion_fab_button_click_44_listener() {
      return ctx.guardarDisponibilidad();
    });
    \u0275\u0275element(45, "ion-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "ion-modal", 28);
    \u0275\u0275listener("didDismiss", function DisponibilidadEntrenadorPage_Template_ion_modal_didDismiss_46_listener() {
      return ctx.showAddClubModal = false;
    });
    \u0275\u0275template(47, DisponibilidadEntrenadorPage_ng_template_47_Template, 36, 8, "ng-template");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedClubId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.clubes);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.hasSlotsWithoutClub);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.diaSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.dias);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.bloquesActuales.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.bloquesActuales.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.bloquesActuales.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showDefaultModal);
    \u0275\u0275advance(10);
    \u0275\u0275property("isOpen", ctx.showAddClubModal);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  UpperCasePipe,
  SlicePipe,
  DatePipe
], styles: ["\n\n.header-nike[_ngcontent-%COMP%] {\n  height: 250px;\n  position: relative;\n  margin-top: -50px;\n  padding-top: calc(50px + var(--ion-safe-area-top));\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.helper-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding: 20px 25px 0;\n}\n.helper-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%] {\n  height: 44px;\n  margin: 0;\n  font-size: 11px;\n  --border-radius: 12px;\n  --background: white;\n  --color: #111;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f2f2f7;\n}\n.helper-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 4px;\n  color: var(--ion-color-primary);\n}\n.segment-wrapper[_ngcontent-%COMP%] {\n  padding: 15px 25px 0;\n}\n.nike-segment-days-light[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: transparent;\n  --color: #8e8e93;\n  --color-checked: var(--ion-color-primary);\n  min-width: 65px;\n  margin: 0 5px;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 0;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  opacity: 0.7;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  border-radius: 14px;\n}\n.tools-bar[_ngcontent-%COMP%] {\n  padding: 15px 25px 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.tools-bar[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #8e8e93;\n}\n.tools-bar[_ngcontent-%COMP%]   .tools-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.tools-bar[_ngcontent-%COMP%]   .tools-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  height: 28px;\n  margin: 0;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 0 0 120px;\n}\n.club-selector-wrapper[_ngcontent-%COMP%] {\n  margin: 10px 25px 25px;\n  position: relative;\n  z-index: 10;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 18px;\n  border-radius: 24px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-icon-box[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #f8fafc;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--ion-color-primary);\n  font-size: 24px;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-details[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-details[_ngcontent-%COMP%]   .venue-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #94a3b8;\n  letter-spacing: 1px;\n  margin-bottom: 2px;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-details[_ngcontent-%COMP%]   .venue-selector-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-details[_ngcontent-%COMP%]   .venue-selector-row[_ngcontent-%COMP%]   .premium-select[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 17px;\n  font-weight: 900;\n  color: #000;\n  --placeholder-color: #000;\n  --placeholder-opacity: 1;\n  padding: 0;\n  min-height: auto;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-details[_ngcontent-%COMP%]   .venue-selector-row[_ngcontent-%COMP%]   .premium-select[_ngcontent-%COMP%]::part(container) {\n  padding: 0;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-details[_ngcontent-%COMP%]   .venue-selector-row[_ngcontent-%COMP%]   .premium-select[_ngcontent-%COMP%]::part(placeholder), \n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-details[_ngcontent-%COMP%]   .venue-selector-row[_ngcontent-%COMP%]   .premium-select[_ngcontent-%COMP%]::part(text) {\n  padding: 0;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-actions[_ngcontent-%COMP%]   .btn-add-venue[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --background: transparent;\n  --color: var(--ion-color-primary);\n  --border-radius: 50%;\n  height: 44px;\n  width: 44px;\n  margin: 0;\n  box-shadow: none;\n}\n.club-selector-wrapper[_ngcontent-%COMP%]   .venue-card[_ngcontent-%COMP%]   .venue-actions[_ngcontent-%COMP%]   .btn-add-venue[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.nike-list[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n  margin-bottom: 25px;\n}\n.nike-list[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%] {\n  --background: #f8f8f8;\n  --border-radius: 12px;\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #eee;\n}\n.nike-list[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  color: #999 !important;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px !important;\n}\n.nike-list[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], \n.nike-list[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111;\n  --padding-top: 5px;\n  --padding-bottom: 12px;\n}\n.migration-banner[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  margin: 0 25px 20px;\n  padding: 15px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #ffe082;\n  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.1);\n}\n.migration-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.migration-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ffa000;\n}\n.migration-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 800;\n  color: #5d4037;\n}\n.migration-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #795548;\n  font-weight: 600;\n  display: block;\n}\n.migration-banner[_ngcontent-%COMP%]   .btn-sync-now[_ngcontent-%COMP%] {\n  --color: white;\n  --background: #ffa000;\n  --border-radius: 10px;\n  font-size: 11px;\n  font-weight: 950;\n  height: 36px;\n  margin: 0;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n.save-club-btn[_ngcontent-%COMP%] {\n  height: 54px;\n  font-size: 15px;\n  margin-top: 10px;\n}\n.modal-club-selector[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  border-radius: 14px;\n  padding: 8px 15px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n.modal-club-selector[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--ion-color-primary);\n}\n.modal-club-selector[_ngcontent-%COMP%]   .nike-select-modal[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 700;\n  font-size: 14px;\n  color: #111;\n}\n.blocks-grid[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.block-card[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 0;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  background: white;\n  border: 1px solid #f2f2f7;\n  border-radius: 12px;\n}\n.block-card[_ngcontent-%COMP%]   .block-time[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111;\n}\n.block-card[_ngcontent-%COMP%]   .selection-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 20px;\n  height: 20px;\n  background: #34c759;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 6px rgba(52, 199, 89, 0.4);\n  z-index: 3;\n}\n.block-card[_ngcontent-%COMP%]   .selection-check[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: white;\n  font-weight: 900;\n}\n.block-card[_ngcontent-%COMP%]   .occupied-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  border-radius: 12px;\n}\n.block-card[_ngcontent-%COMP%]   .occupied-indicator[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ff3b30;\n}\n.block-card.selected[_ngcontent-%COMP%] {\n  background: #eaffed;\n  border-color: #34c759;\n}\n.block-card.selected[_ngcontent-%COMP%]   .block-time[_ngcontent-%COMP%] {\n  color: #111;\n}\n.block-card.occupied[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  background: #f9f9f9;\n  border-color: #eee;\n}\n.block-card.occupied[_ngcontent-%COMP%]   .block-time[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  text-decoration: line-through;\n}\n.block-card.locked-other[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px dashed #cbd5e1;\n  cursor: not-allowed;\n}\n.block-card.locked-other[_ngcontent-%COMP%]   .block-time[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.block-card[_ngcontent-%COMP%]   .other-club-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(241, 245, 249, 0.8);\n  border-radius: 12px;\n  z-index: 2;\n}\n.block-card[_ngcontent-%COMP%]   .other-club-indicator[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.block-card[_ngcontent-%COMP%]   .other-club-indicator[_ngcontent-%COMP%]   .other-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 800;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #8e8e93;\n  font-size: 14px;\n}\n.nike-modal[_ngcontent-%COMP%] {\n  --height: 85%;\n  --border-radius: 20px 20px 0 0;\n}\n.nike-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 18px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-content-padded[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.nike-modal[_ngcontent-%COMP%]   .modal-intro[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  margin-bottom: 20px;\n  line-height: 1.4;\n  text-align: center;\n}\n.nike-modal[_ngcontent-%COMP%]   .template-days-row[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  gap: 10px;\n  padding-bottom: 15px;\n  margin-bottom: 10px;\n}\n.nike-modal[_ngcontent-%COMP%]   .template-days-row[_ngcontent-%COMP%]   .day-chip[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  background: #f2f2f7;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #8e8e93;\n  text-transform: uppercase;\n}\n.nike-modal[_ngcontent-%COMP%]   .template-days-row[_ngcontent-%COMP%]   .day-chip.active[_ngcontent-%COMP%] {\n  background: #111;\n  color: white;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.nike-modal[_ngcontent-%COMP%]   .template-tools[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.nike-modal[_ngcontent-%COMP%]   .template-tools[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n}\n.nike-modal[_ngcontent-%COMP%]   .template-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.nike-modal[_ngcontent-%COMP%]   .template-grid[_ngcontent-%COMP%]   .t-block[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  text-align: center;\n  padding: 10px 0;\n  font-size: 13px;\n  font-weight: 600;\n}\n.nike-modal[_ngcontent-%COMP%]   .template-grid[_ngcontent-%COMP%]   .t-block.selected[_ngcontent-%COMP%] {\n  background: #34c759;\n  color: white;\n  border-color: #34c759;\n  box-shadow: 0 4px 10px rgba(52, 199, 89, 0.3);\n}\n.fab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 10px;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);\n  margin: 0;\n  width: 56px;\n  height: 56px;\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.nike-fab.save-fab[_ngcontent-%COMP%] {\n  --background: #34c759;\n  --box-shadow: 0 8px 20px rgba(52, 199, 89, 0.4);\n}\n/*# sourceMappingURL=disponibilidad-entrenador.page.css.map */"] });
var DisponibilidadEntrenadorPage = _DisponibilidadEntrenadorPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisponibilidadEntrenadorPage, [{
    type: Component,
    args: [{ selector: "app-disponibilidad-entrenador", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonFab,
      IonFabButton,
      IonIcon,
      IonSegment,
      IonSegmentButton,
      IonLabel,
      IonButton,
      IonModal,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonInput,
      IonItem,
      IonList,
      IonSelect,
      IonSelectOption
    ], template: `<ion-content>

  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1 class="header-title">Mi Disponibilidad</h1>
      <p class="header-sub">Gestiona tus horarios de clase</p>
    </div>
  </div>

  <div class="dashboard-container">

    <!-- Club Selector Premium -->
    <div class="club-selector-wrapper animate-up">
      <div class="venue-card">
        <div class="venue-icon-box">
          <ion-icon name="location-outline"></ion-icon>
        </div>
        <div class="venue-details">
          <span class="venue-label">Lugar de Entrenamiento</span>
          <div class="venue-selector-row">
            <ion-select [(ngModel)]="selectedClubId" (ionChange)="onClubChange()" interface="popover"
              toggleIcon="chevron-down-outline" mode="md" class="premium-select" placeholder="Selecciona un club...">
              <ion-select-option *ngFor="let club of clubes" [value]="club.id">
                {{ club.nombre }}
              </ion-select-option>
            </ion-select>
          </div>
        </div>
        <div class="venue-actions">
          <ion-button fill="clear" class="btn-add-venue" (click)="openAddClubModal($event)">
            <ion-icon name="add-circle-outline"></ion-icon>
          </ion-button>
        </div>
      </div>
    </div>
    <!-- Migration Alert (Only if there are NULL club_ids) -->
    <div class="migration-banner animate-pop" *ngIf="hasSlotsWithoutClub">
      <div class="banner-content">
        <ion-icon name="warning-outline"></ion-icon>
        <div class="banner-text">
          <p>Tienes horarios sin club asignado</p>
          <span>Vinc\xFAlalos al club seleccionado para que los alumnos los vean.</span>
        </div>
      </div>
      <ion-button fill="clear" (click)="migrateSlots()" class="btn-sync-now">
        VINCULAR
      </ion-button>
    </div>

    <!-- Actions Row -->
    <div class="helper-actions animate-up">
      <ion-button expand="block" class="nike-button secondary-btn" (click)="openDefaultModal()">
        <ion-icon name="settings-outline" slot="start"></ion-icon>
        Config. Semana Base
      </ion-button>

      <ion-button expand="block" class="nike-button secondary-btn" (click)="applyDefaultConfig()">
        <ion-icon name="flash-outline" slot="start"></ion-icon>
        Aplicar Plantilla (30d)
      </ion-button>
    </div>

    <!-- Day Selector -->
    <div class="segment-wrapper animate-up" style="animation-delay: 0.05s;">
      <ion-segment scrollable [(ngModel)]="diaSeleccionado" class="nike-segment-days-light" mode="md">
        <ion-segment-button *ngFor="let d of dias" [value]="d.fecha">
          <ion-label>
            <span class="day-label">{{ d.nombre | slice:0:3 | uppercase }}</span>
            <span class="date-label">{{ d.fecha | date:'dd' }}</span>
          </ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>

    <!-- Selection Tools -->
    <div class="tools-bar animate-up" *ngIf="bloquesActuales.length > 0" style="animation-delay: 0.1s;">
      <div class="info-text">
        {{ bloquesActuales.length }} bloques
      </div>
      <div class="tools-actions">
        <ion-button fill="clear" size="small" (click)="seleccionarTodos()" *ngIf="!todosSeleccionados">
          Todo
        </ion-button>
        <ion-button fill="clear" size="small" color="danger" (click)="deseleccionarTodos()" *ngIf="todosSeleccionados">
          Nada
        </ion-button>
      </div>
    </div>

    <!-- Blocks Grid -->
    <div class="blocks-grid animate-up" *ngIf="bloquesActuales.length > 0" style="animation-delay: 0.15s;">
      <div class="nike-card block-card" *ngFor="let b of bloquesActuales" [class.selected]="b.seleccionado"
        [class.occupied]="b.ocupado" [class.locked-other]="b.lockedByOtherClub" (click)="toggleBloque(b)">

        <span class="block-time">{{ b.hora_inicio }}</span>

        <div class="selection-check" *ngIf="b.seleccionado">
          <ion-icon name="checkmark-outline"></ion-icon>
        </div>

        <div class="occupied-indicator" *ngIf="b.ocupado">
          <ion-icon name="lock-closed-outline"></ion-icon>
        </div>

        <div class="other-club-indicator" *ngIf="b.lockedByOtherClub">
          <ion-icon name="business-outline"></ion-icon>
          <span class="other-label">OTRO CLUB</span>
        </div>
      </div>
    </div>

    <div class="empty-state" *ngIf="bloquesActuales.length === 0">
      <p>No se pudieron generar bloques para este d\xEDa.</p>
    </div>

  </div>

  <!-- Modal Default Week -->
  <ion-modal [isOpen]="showDefaultModal" (didDismiss)="showDefaultModal = false" class="nike-modal">
    <ng-template>
      <ion-header mode="ios" class="ion-no-border">
        <ion-toolbar>
          <ion-title>Semana Base</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="showDefaultModal = false">
              <ion-icon name="close-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <div class="modal-content-padded">
          <p class="modal-intro">Configura tu horario habitual. "Aplicar Plantilla" copiar\xE1 esto a los pr\xF3ximos 30 d\xEDas.
          </p>

          <div class="modal-club-selector animate-up">
            <ion-icon name="location-outline"></ion-icon>
            <ion-select [(ngModel)]="selectedClubId" placeholder="Seleccionar Club para esta plantilla"
              class="nike-select-modal">
              <ion-select-option *ngFor="let club of clubes" [value]="club.id">
                {{ club.nombre }}
              </ion-select-option>
            </ion-select>
          </div>

          <!-- Day Tabs Template -->
          <div class="template-days-row">
            <div *ngFor="let d of diasSemana" class="day-chip" [class.active]="selectedDayTemplate === d.id"
              (click)="selectedDayTemplate = d.id">
              {{ d.name | slice:0:3 }}
            </div>
          </div>

          <!-- Template Tools -->
          <div class="template-tools">
            <span>{{ templateBlocks[selectedDayTemplate]?.length || 0 }} horas</span>
            <div class="t-actions">
              <ion-button fill="clear" size="small"
                (click)="seleccionarTodoDiaTemplate(selectedDayTemplate)">Todo</ion-button>
              <ion-button fill="clear" size="small" color="medium"
                (click)="deseleccionarTodoDiaTemplate(selectedDayTemplate)">Nada</ion-button>
            </div>
          </div>

          <!-- Template Grid -->
          <div class="template-grid">
            <div *ngFor="let b of templateBlocks[selectedDayTemplate]" class="t-block" [class.selected]="b.selected"
              (click)="toggleTemplateBlock(selectedDayTemplate, b)">
              {{ b.time }}
            </div>
          </div>

          <ion-button expand="block" class="nike-button main-btn save-tmpl-btn" (click)="saveDefaultConfig()">
            Guardar Plantilla
          </ion-button>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>

  <!-- FABs -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="fab-wrapper">
    <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
    <ion-fab-button class="nike-fab save-fab" (click)="guardarDisponibilidad()">
      <ion-icon name="save-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab save-fab" (click)="guardarDisponibilidad()">
      <ion-icon name="checkmark-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- Modal Add Club -->
  <ion-modal [isOpen]="showAddClubModal" (didDismiss)="showAddClubModal = false" class="nike-modal">
    <ng-template>
      <ion-header mode="ios" class="ion-no-border">
        <ion-toolbar>
          <ion-title>Registrar Nuevo Club</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="showAddClubModal = false">
              <ion-icon name="close-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <div class="modal-content-padded">
          <p class="modal-intro">Si el club donde entrenas no aparece, reg\xEDstralo aqu\xED.</p>

          <ion-list lines="none" class="nike-list">
            <ion-item class="nike-item">
              <ion-label position="stacked">Nombre del Club *</ion-label>
              <ion-input [(ngModel)]="newClub.nombre" placeholder="Ej: Padel Rancagua"></ion-input>
            </ion-item>

            <ion-item class="nike-item">
              <ion-label position="stacked">Regi\xF3n *</ion-label>
              <ion-select [(ngModel)]="newClub.region" (ionChange)="onRegionChange($event)" placeholder="Seleccionar"
                interface="popover">
                <ion-select-option *ngFor="let r of allRegions" [value]="r.name">{{ r.name }}</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="nike-item">
              <ion-label position="stacked">Comuna *</ion-label>
              <ion-select [(ngModel)]="newClub.comuna" placeholder="Seleccionar" [disabled]="!availableComunas.length"
                interface="popover">
                <ion-select-option *ngFor="let c of availableComunas" [value]="c">{{ c }}</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="nike-item">
              <ion-label position="stacked">Direcci\xF3n (Calle y N\xFAmero)</ion-label>
              <ion-input [(ngModel)]="newClub.direccion" placeholder="Ej: San Juan 123"></ion-input>
            </ion-item>

            <ion-item class="nike-item">
              <ion-label position="stacked">Tel\xE9fono de contacto</ion-label>
              <ion-input [(ngModel)]="newClub.telefono" placeholder="+56 9..."></ion-input>
            </ion-item>
          </ion-list>

          <ion-button expand="block" class="nike-button main-btn save-club-btn" (click)="saveNewClub()">
            Crear Club
          </ion-button>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>

</ion-content>`, styles: ["/* src/app/pages/disponibilidad-entrenador/disponibilidad-entrenador.page.scss */\n.header-nike {\n  height: 250px;\n  position: relative;\n  margin-top: -50px;\n  padding-top: calc(50px + var(--ion-safe-area-top));\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .header-title {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content .header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.helper-actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding: 20px 25px 0;\n}\n.helper-actions .secondary-btn {\n  height: 44px;\n  margin: 0;\n  font-size: 11px;\n  --border-radius: 12px;\n  --background: white;\n  --color: #111;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f2f2f7;\n}\n.helper-actions .secondary-btn ion-icon {\n  font-size: 16px;\n  margin-right: 4px;\n  color: var(--ion-color-primary);\n}\n.segment-wrapper {\n  padding: 15px 25px 0;\n}\n.nike-segment-days-light {\n  --background: transparent;\n}\n.nike-segment-days-light ion-segment-button {\n  --indicator-color: transparent;\n  --color: #8e8e93;\n  --color-checked: var(--ion-color-primary);\n  min-width: 65px;\n  margin: 0 5px;\n}\n.nike-segment-days-light ion-segment-button ion-label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 0;\n}\n.nike-segment-days-light ion-segment-button .day-label {\n  font-size: 11px;\n  font-weight: 800;\n  opacity: 0.7;\n}\n.nike-segment-days-light ion-segment-button .date-label {\n  font-size: 20px;\n  font-weight: 800;\n}\n.nike-segment-days-light ion-segment-button.segment-button-checked {\n  background: #f2f2f7;\n  border-radius: 14px;\n}\n.tools-bar {\n  padding: 15px 25px 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.tools-bar .info-text {\n  font-size: 13px;\n  font-weight: 700;\n  color: #8e8e93;\n}\n.tools-bar .tools-actions {\n  display: flex;\n  gap: 8px;\n}\n.tools-bar .tools-actions ion-button {\n  font-size: 12px;\n  font-weight: 700;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  height: 28px;\n  margin: 0;\n}\n.dashboard-container {\n  padding: 0 0 120px;\n}\n.club-selector-wrapper {\n  margin: 10px 25px 25px;\n  position: relative;\n  z-index: 10;\n}\n.club-selector-wrapper .venue-card {\n  background: white;\n  padding: 18px;\n  border-radius: 24px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);\n}\n.club-selector-wrapper .venue-card .venue-icon-box {\n  width: 50px;\n  height: 50px;\n  background: #f8fafc;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--ion-color-primary);\n  font-size: 24px;\n}\n.club-selector-wrapper .venue-card .venue-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.club-selector-wrapper .venue-card .venue-details .venue-label {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #94a3b8;\n  letter-spacing: 1px;\n  margin-bottom: 2px;\n}\n.club-selector-wrapper .venue-card .venue-details .venue-selector-row {\n  display: flex;\n  align-items: center;\n}\n.club-selector-wrapper .venue-card .venue-details .venue-selector-row .premium-select {\n  width: 100%;\n  font-size: 17px;\n  font-weight: 900;\n  color: #000;\n  --placeholder-color: #000;\n  --placeholder-opacity: 1;\n  padding: 0;\n  min-height: auto;\n}\n.club-selector-wrapper .venue-card .venue-details .venue-selector-row .premium-select::part(container) {\n  padding: 0;\n}\n.club-selector-wrapper .venue-card .venue-details .venue-selector-row .premium-select::part(placeholder),\n.club-selector-wrapper .venue-card .venue-details .venue-selector-row .premium-select::part(text) {\n  padding: 0;\n}\n.club-selector-wrapper .venue-card .venue-actions .btn-add-venue {\n  --padding-start: 0;\n  --padding-end: 0;\n  --background: transparent;\n  --color: var(--ion-color-primary);\n  --border-radius: 50%;\n  height: 44px;\n  width: 44px;\n  margin: 0;\n  box-shadow: none;\n}\n.club-selector-wrapper .venue-card .venue-actions .btn-add-venue ion-icon {\n  font-size: 32px;\n}\n.nike-list {\n  background: transparent;\n  padding: 0;\n  margin-bottom: 25px;\n}\n.nike-list .nike-item {\n  --background: #f8f8f8;\n  --border-radius: 12px;\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #eee;\n}\n.nike-list .nike-item ion-label {\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  color: #999 !important;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px !important;\n}\n.nike-list .nike-item ion-input,\n.nike-list .nike-item ion-select {\n  font-weight: 700;\n  color: #111;\n  --padding-top: 5px;\n  --padding-bottom: 12px;\n}\n.migration-banner {\n  background: #fff8e1;\n  margin: 0 25px 20px;\n  padding: 15px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #ffe082;\n  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.1);\n}\n.migration-banner .banner-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.migration-banner .banner-content ion-icon {\n  font-size: 24px;\n  color: #ffa000;\n}\n.migration-banner .banner-content .banner-text p {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 800;\n  color: #5d4037;\n}\n.migration-banner .banner-content .banner-text span {\n  font-size: 10px;\n  color: #795548;\n  font-weight: 600;\n  display: block;\n}\n.migration-banner .btn-sync-now {\n  --color: white;\n  --background: #ffa000;\n  --border-radius: 10px;\n  font-size: 11px;\n  font-weight: 950;\n  height: 36px;\n  margin: 0;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n.save-club-btn {\n  height: 54px;\n  font-size: 15px;\n  margin-top: 10px;\n}\n.modal-club-selector {\n  background: #f2f2f7;\n  border-radius: 14px;\n  padding: 8px 15px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n.modal-club-selector ion-icon {\n  font-size: 18px;\n  color: var(--ion-color-primary);\n}\n.modal-club-selector .nike-select-modal {\n  flex: 1;\n  font-weight: 700;\n  font-size: 14px;\n  color: #111;\n}\n.blocks-grid {\n  padding: 10px 25px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.block-card {\n  height: 60px;\n  padding: 0;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  background: white;\n  border: 1px solid #f2f2f7;\n  border-radius: 12px;\n}\n.block-card .block-time {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111;\n}\n.block-card .selection-check {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 20px;\n  height: 20px;\n  background: #34c759;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 6px rgba(52, 199, 89, 0.4);\n  z-index: 3;\n}\n.block-card .selection-check ion-icon {\n  font-size: 12px;\n  color: white;\n  font-weight: 900;\n}\n.block-card .occupied-indicator {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  border-radius: 12px;\n}\n.block-card .occupied-indicator ion-icon {\n  font-size: 24px;\n  color: #ff3b30;\n}\n.block-card.selected {\n  background: #eaffed;\n  border-color: #34c759;\n}\n.block-card.selected .block-time {\n  color: #111;\n}\n.block-card.occupied {\n  opacity: 0.7;\n  background: #f9f9f9;\n  border-color: #eee;\n}\n.block-card.occupied .block-time {\n  opacity: 0.3;\n  text-decoration: line-through;\n}\n.block-card.locked-other {\n  background: #f1f5f9;\n  border: 1px dashed #cbd5e1;\n  cursor: not-allowed;\n}\n.block-card.locked-other .block-time {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.block-card .other-club-indicator {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(241, 245, 249, 0.8);\n  border-radius: 12px;\n  z-index: 2;\n}\n.block-card .other-club-indicator ion-icon {\n  font-size: 18px;\n  color: #64748b;\n}\n.block-card .other-club-indicator .other-label {\n  font-size: 8px;\n  font-weight: 800;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: #8e8e93;\n  font-size: 14px;\n}\n.nike-modal {\n  --height: 85%;\n  --border-radius: 20px 20px 0 0;\n}\n.nike-modal ion-toolbar {\n  --background: white;\n}\n.nike-modal ion-toolbar ion-title {\n  font-weight: 800;\n  font-size: 18px;\n}\n.nike-modal .modal-content-padded {\n  padding: 20px;\n}\n.nike-modal .modal-intro {\n  font-size: 13px;\n  color: #666;\n  margin-bottom: 20px;\n  line-height: 1.4;\n  text-align: center;\n}\n.nike-modal .template-days-row {\n  display: flex;\n  overflow-x: auto;\n  gap: 10px;\n  padding-bottom: 15px;\n  margin-bottom: 10px;\n}\n.nike-modal .template-days-row .day-chip {\n  flex: 0 0 auto;\n  background: #f2f2f7;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #8e8e93;\n  text-transform: uppercase;\n}\n.nike-modal .template-days-row .day-chip.active {\n  background: #111;\n  color: white;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.nike-modal .template-tools {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.nike-modal .template-tools span {\n  font-size: 14px;\n  font-weight: 700;\n}\n.nike-modal .template-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.nike-modal .template-grid .t-block {\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  text-align: center;\n  padding: 10px 0;\n  font-size: 13px;\n  font-weight: 600;\n}\n.nike-modal .template-grid .t-block.selected {\n  background: #34c759;\n  color: white;\n  border-color: #34c759;\n  box-shadow: 0 4px 10px rgba(52, 199, 89, 0.3);\n}\n.fab-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 10px;\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);\n  margin: 0;\n  width: 56px;\n  height: 56px;\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n.nike-fab.save-fab {\n  --background: #34c759;\n  --box-shadow: 0 8px 20px rgba(52, 199, 89, 0.4);\n}\n/*# sourceMappingURL=disponibilidad-entrenador.page.css.map */\n"] }]
  }], () => [{ type: EntrenamientoService }, { type: ToastController }, { type: Router }, { type: AlertController }, { type: LoadingController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisponibilidadEntrenadorPage, { className: "DisponibilidadEntrenadorPage", filePath: "src/app/pages/disponibilidad-entrenador/disponibilidad-entrenador.page.ts", lineNumber: 81 });
})();
export {
  DisponibilidadEntrenadorPage
};
//# sourceMappingURL=disponibilidad-entrenador.page-3ZNYOGOL.js.map

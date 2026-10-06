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
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTitle,
  IonToolbar,
  IonicModule,
  LoadingController,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective
} from "./chunk-LFXGPXMG.js";
import {
  addCircleOutline,
  addIcons,
  addOutline,
  alertCircleOutline,
  calendarOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  chevronDownOutline,
  chevronForwardOutline,
  closeOutline,
  createOutline,
  cubeOutline,
  giftOutline,
  personOutline,
  searchOutline,
  trashOutline
} from "./chunk-KFN47MEP.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  FormsModule,
  HostListener,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  Subject,
  debounceTime,
  distinctUntilChanged,
  setClassMetadata,
  switchMap,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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
  __async,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/pages/entrenador-cupones/entrenador-cupones.page.ts
function EntrenadorCuponesPage_div_15_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "ion-icon", 38);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Para: ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cupon_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(cupon_r3.jugador_nombre);
  }
}
function EntrenadorCuponesPage_div_15_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "ion-icon", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Pack: ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cupon_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(cupon_r3.pack_nombre);
  }
}
function EntrenadorCuponesPage_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "div", 24)(4, "div", 25);
    \u0275\u0275element(5, "ion-icon", 26);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 28);
    \u0275\u0275template(12, EntrenadorCuponesPage_div_15_div_2_div_12_Template, 6, 1, "div", 29)(13, EntrenadorCuponesPage_div_15_div_2_div_13_Template, 6, 1, "div", 29);
    \u0275\u0275elementStart(14, "div", 30);
    \u0275\u0275element(15, "ion-icon", 31);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Fin: ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 30);
    \u0275\u0275element(22, "ion-icon", 32);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Usos: ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 33)(28, "ion-button", 34);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_div_15_div_2_Template_ion_button_click_28_listener() {
      const cupon_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.abrirModal(cupon_r3));
    });
    \u0275\u0275element(29, "ion-icon", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-button", 36);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_div_15_div_2_Template_ion_button_click_30_listener() {
      const cupon_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.eliminarCupon(cupon_r3.id));
    });
    \u0275\u0275element(31, "ion-icon", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cupon_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r5 * 0.05 + "s");
    \u0275\u0275classProp("expired", ctx_r3.isExpired(cupon_r3.fecha_fin));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(cupon_r3.codigo);
    \u0275\u0275advance();
    \u0275\u0275classProp("percent", cupon_r3.tipo_descuento === "porcentaje");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cupon_r3.tipo_descuento === "porcentaje" ? cupon_r3.valor + "%" : "$" + \u0275\u0275pipeBind3(10, 13, cupon_r3.valor, "1.0-0", "es"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cupon_r3.jugador_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cupon_r3.pack_nombre);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 17, cupon_r3.fecha_fin, "dd/MM/yyyy") || "Sin fecha");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", cupon_r3.uso_actual, " / ", cupon_r3.uso_maximo || "\u221E");
  }
}
function EntrenadorCuponesPage_div_15_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_div_15_div_3_span_4_Template_span_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r8 === ctx_r3.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8, " ");
  }
}
function EntrenadorCuponesPage_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "ion-button", 41);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_div_15_div_3_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setPage(ctx_r3.currentPage - 1));
    });
    \u0275\u0275element(2, "ion-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275template(4, EntrenadorCuponesPage_div_15_div_3_span_4_Template, 2, 3, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 41);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_div_15_div_3_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setPage(ctx_r3.currentPage + 1));
    });
    \u0275\u0275element(6, "ion-icon", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage === ctx_r3.totalPages);
  }
}
function EntrenadorCuponesPage_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "ion-icon", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "A\xFAn no has creado cupones.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 47);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_div_15_div_4_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.abrirModal());
    });
    \u0275\u0275text(5, "Empezar ahora");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorCuponesPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275template(2, EntrenadorCuponesPage_div_15_div_2_Template, 32, 20, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EntrenadorCuponesPage_div_15_div_3_Template, 7, 3, "div", 19)(4, EntrenadorCuponesPage_div_15_div_4_Template, 6, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.paginatedCupones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.totalPages > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.cupones.length === 0);
  }
}
function EntrenadorCuponesPage_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "ion-spinner", 49);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando promociones...");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorCuponesPage_ng_template_22_ion_select_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275property("value", p_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11.nombre);
  }
}
function EntrenadorCuponesPage_ng_template_22_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "ion-spinner", 81);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Buscando...");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorCuponesPage_ng_template_22_div_62_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_ng_template_22_div_62_ng_container_2_div_1_Template_div_click_0_listener() {
      const alu_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.seleccionarAlumno(alu_r13));
    });
    \u0275\u0275elementStart(1, "div", 85)(2, "span", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "ion-icon", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alu_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alu_r13.nombre || alu_r13.jugador_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alu_r13.usuario);
  }
}
function EntrenadorCuponesPage_ng_template_22_div_62_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "span");
    \u0275\u0275text(2, "No se encontraron resultados");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorCuponesPage_ng_template_22_div_62_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EntrenadorCuponesPage_ng_template_22_div_62_ng_container_2_div_1_Template, 7, 2, "div", 82)(2, EntrenadorCuponesPage_ng_template_22_div_62_ng_container_2_div_2_Template, 3, 0, "div", 83);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.alumnosFiltrados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.alumnosFiltrados.length === 0 && ctx_r3.searchTermAlumno.length > 1);
  }
}
function EntrenadorCuponesPage_ng_template_22_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, EntrenadorCuponesPage_ng_template_22_div_62_div_1_Template, 4, 0, "div", 78)(2, EntrenadorCuponesPage_ng_template_22_div_62_ng_container_2_Template, 3, 2, "ng-container", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isSearchingAlumno);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isSearchingAlumno);
  }
}
function EntrenadorCuponesPage_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 50)(1, "ion-toolbar")(2, "ion-buttons", 51)(3, "ion-button", 52);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_ng_template_22_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModal());
    });
    \u0275\u0275element(4, "ion-icon", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-buttons", 54)(8, "ion-button", 52);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_ng_template_22_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModal());
    });
    \u0275\u0275element(9, "ion-icon", 55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content", 56)(11, "div", 57)(12, "div", 58)(13, "label");
    \u0275\u0275text(14, "C\xF3digo del Cup\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-item", 59)(16, "ion-input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorCuponesPage_ng_template_22_Template_ion_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoCupon.codigo, $event) || (ctx_r3.nuevoCupon.codigo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 61)(18, "div", 62)(19, "label");
    \u0275\u0275text(20, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ion-item", 59)(22, "ion-select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorCuponesPage_ng_template_22_Template_ion_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoCupon.tipo_descuento, $event) || (ctx_r3.nuevoCupon.tipo_descuento = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "ion-select-option", 64);
    \u0275\u0275text(24, "Porcentaje (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-select-option", 65);
    \u0275\u0275text(26, "Fijo ($)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 62)(28, "label");
    \u0275\u0275text(29, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-item", 59)(31, "ion-input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorCuponesPage_ng_template_22_Template_ion_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoCupon.valor, $event) || (ctx_r3.nuevoCupon.valor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 61)(33, "div", 62)(34, "label");
    \u0275\u0275text(35, "Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ion-item", 59)(37, "ion-input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorCuponesPage_ng_template_22_Template_ion_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoCupon.fecha_inicio, $event) || (ctx_r3.nuevoCupon.fecha_inicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 62)(39, "label");
    \u0275\u0275text(40, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ion-item", 59)(42, "ion-input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorCuponesPage_ng_template_22_Template_ion_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoCupon.fecha_fin, $event) || (ctx_r3.nuevoCupon.fecha_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 58)(44, "label");
    \u0275\u0275text(45, "Uso M\xE1ximo (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ion-item", 59)(47, "ion-input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorCuponesPage_ng_template_22_Template_ion_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoCupon.uso_maximo, $event) || (ctx_r3.nuevoCupon.uso_maximo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 58)(49, "label");
    \u0275\u0275text(50, "Pack Espec\xEDfico (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ion-item", 59)(52, "ion-select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorCuponesPage_ng_template_22_Template_ion_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevoCupon.pack_id, $event) || (ctx_r3.nuevoCupon.pack_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(53, "ion-select-option", 70);
    \u0275\u0275text(54, "Todos los packs");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, EntrenadorCuponesPage_ng_template_22_ion_select_option_55_Template, 2, 2, "ion-select-option", 71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 58)(57, "label");
    \u0275\u0275text(58, "Restringir a Jugador (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 72);
    \u0275\u0275element(60, "ion-icon", 73);
    \u0275\u0275elementStart(61, "ion-input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorCuponesPage_ng_template_22_Template_ion_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.searchTermAlumno, $event) || (ctx_r3.searchTermAlumno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionInput", function EntrenadorCuponesPage_ng_template_22_Template_ion_input_ionInput_61_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filterAlumnos($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, EntrenadorCuponesPage_ng_template_22_div_62_Template, 3, 2, "div", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "ion-button", 76);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_ng_template_22_Template_ion_button_click_63_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.guardarCupon());
    });
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.nuevoCupon.id ? "Editar Cup\xF3n" : "Nuevo Cup\xF3n");
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoCupon.codigo);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoCupon.tipo_descuento);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoCupon.valor);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoCupon.fecha_inicio);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoCupon.fecha_fin);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoCupon.uso_maximo);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevoCupon.pack_id);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.packs);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchTermAlumno);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.searchTermAlumno && (ctx_r3.isSearchingAlumno || ctx_r3.alumnosFiltrados.length > 0));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isSaving ? "GUARDANDO..." : ctx_r3.nuevoCupon.id ? "ACTUALIZAR" : "CREAR CUP\xD3N", " ");
  }
}
var _EntrenadorCuponesPage = class _EntrenadorCuponesPage {
  onResize(event) {
    this.calculatePageSize();
  }
  constructor(entrenamientoService, router, alertCtrl, loadingCtrl) {
    this.entrenamientoService = entrenamientoService;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.cupones = [];
    this.isLoading = false;
    this.modalOpen = false;
    this.isSaving = false;
    this.entrenadorId = 0;
    this.alumnos = [];
    this.alumnosFiltrados = [];
    this.searchTermAlumno = "";
    this.packs = [];
    this.searchSubject = new Subject();
    this.isSearchingAlumno = false;
    this.nuevoCupon = {
      id: null,
      codigo: "",
      tipo_descuento: "porcentaje",
      valor: 0,
      fecha_inicio: null,
      fecha_fin: null,
      jugador_id: null,
      pack_id: null,
      uso_maximo: null
    };
    this.paginatedCupones = [];
    this.pageSize = 6;
    this.currentPage = 1;
    this.totalPages = 1;
    this.pages = [];
    addIcons({
      chevronBackOutline,
      addOutline,
      trashOutline,
      createOutline,
      giftOutline,
      calendarOutline,
      personOutline,
      cubeOutline,
      closeOutline,
      checkmarkCircleOutline,
      alertCircleOutline,
      searchOutline,
      chevronDownOutline,
      addCircleOutline,
      chevronForwardOutline
    });
    this.searchSubject.pipe(debounceTime(200), distinctUntilChanged(), switchMap((term) => {
      if (!term.trim()) {
        this.isSearchingAlumno = false;
        return [[]];
      }
      this.isSearchingAlumno = true;
      return this.entrenamientoService.searchAlumnos(term);
    })).subscribe({
      next: (results) => {
        this.alumnosFiltrados = results;
        this.isSearchingAlumno = false;
      },
      error: () => {
        this.isSearchingAlumno = false;
      }
    });
  }
  ngOnInit() {
    this.entrenadorId = Number(localStorage.getItem("userId"));
    if (!this.entrenadorId) {
      this.router.navigate(["/login"]);
      return;
    }
    this.calculatePageSize();
    this.loadCupones();
    this.loadAlumnos();
    this.loadPacks();
  }
  calculatePageSize() {
    if (window.innerWidth >= 992) {
      this.pageSize = 12;
    } else if (window.innerWidth >= 768) {
      this.pageSize = 8;
    } else {
      this.pageSize = 5;
    }
    this.updatePagination();
  }
  loadCupones() {
    this.isLoading = true;
    this.entrenamientoService.getCupones(this.entrenadorId).subscribe({
      next: (res) => {
        this.cupones = res;
        this.updatePagination();
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }
  updatePagination() {
    this.totalPages = Math.ceil(this.cupones.length / this.pageSize) || 1;
    if (this.currentPage > this.totalPages)
      this.currentPage = this.totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedCupones = this.cupones.slice(start, end);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  setPage(page) {
    this.currentPage = page;
    this.updatePagination();
  }
  loadAlumnos() {
    this.entrenamientoService.getMisAlumnos(this.entrenadorId).subscribe((res) => {
      this.alumnos = res;
      this.alumnosFiltrados = res;
    });
  }
  filterAlumnos(event) {
    const term = event.target.value || "";
    this.searchTermAlumno = term;
    if (!term) {
      this.alumnosFiltrados = this.alumnos;
      return;
    }
    this.searchSubject.next(term);
  }
  seleccionarAlumno(alumno) {
    this.nuevoCupon.jugador_id = alumno.id || alumno.jugador_id;
    this.searchTermAlumno = alumno.nombre || alumno.jugador_nombre;
    this.alumnosFiltrados = [];
  }
  loadPacks() {
    this.entrenamientoService.getMisPacks(this.entrenadorId).subscribe((res) => this.packs = res);
  }
  abrirModal(cupon = null) {
    if (cupon) {
      this.nuevoCupon = __spreadValues({}, cupon);
      const alumno = this.alumnos.find((a) => a.id == cupon.jugador_id);
      this.searchTermAlumno = alumno ? alumno.nombre : "";
    } else {
      this.nuevoCupon = {
        id: null,
        entrenador_id: this.entrenadorId,
        codigo: "",
        tipo_descuento: "porcentaje",
        valor: 0,
        fecha_inicio: null,
        fecha_fin: null,
        jugador_id: null,
        pack_id: null,
        uso_maximo: null
      };
      this.searchTermAlumno = "";
    }
    this.alumnosFiltrados = this.alumnos;
    this.modalOpen = true;
  }
  cerrarModal() {
    this.modalOpen = false;
  }
  guardarCupon() {
    return __async(this, null, function* () {
      if (!this.nuevoCupon.codigo || this.nuevoCupon.valor <= 0) {
        const alert = yield this.alertCtrl.create({
          header: "Datos incompletos",
          message: "Por favor ingresa un c\xF3digo y un valor v\xE1lido.",
          buttons: ["OK"]
        });
        yield alert.present();
        return;
      }
      this.isSaving = true;
      const loading = yield this.loadingCtrl.create({ message: "Guardando..." });
      yield loading.present();
      this.nuevoCupon.entrenador_id = this.entrenadorId;
      this.entrenamientoService.saveCupon(this.nuevoCupon).subscribe({
        next: () => {
          loading.dismiss();
          this.isSaving = false;
          this.modalOpen = false;
          this.loadCupones();
        },
        error: () => {
          loading.dismiss();
          this.isSaving = false;
        }
      });
    });
  }
  eliminarCupon(id) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Eliminar Cup\xF3n",
        message: "\xBFEst\xE1s seguro de que deseas eliminar este cup\xF3n?",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Eliminar",
            role: "destructive",
            handler: () => {
              this.entrenamientoService.deleteCupon({ id, entrenador_id: this.entrenadorId }).subscribe(() => {
                this.loadCupones();
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  goBack() {
    this.router.navigate(["/entrenador-home"]);
  }
  handleRefresh(event) {
    this.isLoading = true;
    this.entrenamientoService.getCupones(this.entrenadorId).subscribe({
      next: (res) => {
        this.cupones = res;
        this.updatePagination();
        this.isLoading = false;
        event.target.complete();
      },
      error: () => {
        this.isLoading = false;
        event.target.complete();
      }
    });
  }
  isExpired(fechaFin) {
    if (!fechaFin)
      return false;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const end = new Date(fechaFin);
    return end < today;
  }
};
_EntrenadorCuponesPage.\u0275fac = function EntrenadorCuponesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EntrenadorCuponesPage)(\u0275\u0275directiveInject(EntrenamientoService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController));
};
_EntrenadorCuponesPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrenadorCuponesPage, selectors: [["app-entrenador-cupones"]], hostBindings: function EntrenadorCuponesPage_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function EntrenadorCuponesPage_resize_HostBindingHandler($event) {
      return ctx.onResize($event);
    }, \u0275\u0275resolveWindow);
  }
}, decls: 23, vars: 3, consts: [["loading", ""], ["slot", "fixed", 3, "ionRefresh"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "header-title"], [1, "header-sub"], [1, "dashboard-container"], [1, "actions-section", "animate-up"], ["expand", "block", 1, "nike-btn-primary", 3, "click"], ["name", "add-outline", "slot", "start"], ["class", "coupons-grid-wrapper", 4, "ngIf", "ngIfElse"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], [1, "nike-modal", 3, "didDismiss", "isOpen"], [1, "coupons-grid-wrapper"], [1, "coupons-grid"], ["class", "nike-card coupon-card animate-up", 3, "animation-delay", "expired", 4, "ngFor", "ngForOf"], ["class", "pagination-nike", 4, "ngIf"], ["class", "empty-state animate-fade", 4, "ngIf"], [1, "nike-card", "coupon-card", "animate-up"], [1, "card-edge"], [1, "coupon-main"], [1, "coupon-header"], [1, "code-badge"], ["name", "gift-outline"], [1, "discount-value"], [1, "coupon-details"], ["class", "detail-row", 4, "ngIf"], [1, "detail-row"], ["name", "calendar-outline"], ["name", "checkmark-circle-outline"], [1, "coupon-actions"], ["fill", "clear", "color", "primary", 1, "edit-btn", 3, "click"], ["name", "create-outline", "slot", "icon-only"], ["fill", "clear", "color", "danger", 1, "delete-btn", 3, "click"], ["name", "trash-outline", "slot", "icon-only"], ["name", "person-outline"], ["name", "cube-outline"], [1, "pagination-nike"], ["fill", "clear", 3, "click", "disabled"], [1, "pages-wrapper"], ["class", "page-num", 3, "active", "click", 4, "ngFor", "ngForOf"], ["name", "chevron-forward-outline"], [1, "page-num", 3, "click"], [1, "empty-state", "animate-fade"], ["fill", "clear", 3, "click"], [1, "loading-container"], ["name", "crescent"], [1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "chevron-back-outline"], ["slot", "end"], ["slot", "icon-only", "name", "close-outline"], [1, "ion-padding"], [1, "modal-form"], [1, "input-group"], ["lines", "none", 1, "nike-item"], ["placeholder", "Ej: VERANO2024", 1, "caps-input", 3, "ngModelChange", "ngModel"], [1, "row"], [1, "input-group", "half"], ["interface", "popover", "toggleIcon", "chevron-down-outline", 3, "ngModelChange", "ngModel"], ["value", "porcentaje"], ["value", "monto"], ["type", "number", "placeholder", "10", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ej: 100 usuarios", 3, "ngModelChange", "ngModel"], ["interface", "action-sheet", "placeholder", "Todos los packs", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "nike-search-box", "search-modal"], ["name", "search-outline"], ["placeholder", "Buscar jugador en App...", 3, "ngModelChange", "ionInput", "ngModel"], ["class", "autocomplete-results-mobile", 4, "ngIf"], ["expand", "block", 1, "nike-btn-save", 3, "click", "disabled"], [1, "autocomplete-results-mobile"], ["class", "result-item loading", 4, "ngIf"], [4, "ngIf"], [1, "result-item", "loading"], ["name", "dots"], ["class", "result-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "result-item empty", 4, "ngIf"], [1, "result-item", 3, "click"], [1, "alu-text"], [1, "name"], [1, "mail"], ["name", "add-circle-outline"], [1, "result-item", "empty"]], template: function EntrenadorCuponesPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-refresher", 1);
    \u0275\u0275listener("ionRefresh", function EntrenadorCuponesPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleRefresh($event));
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275element(4, "div", 3);
    \u0275\u0275elementStart(5, "div", 4)(6, "h1", 5);
    \u0275\u0275text(7, "Cupones Descuento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "Gestiona ofertas y promociones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "ion-button", 9);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_Template_ion_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.abrirModal());
    });
    \u0275\u0275element(13, "ion-icon", 10);
    \u0275\u0275text(14, " CREAR NUEVO CUP\xD3N ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, EntrenadorCuponesPage_div_15_Template, 5, 3, "div", 11)(16, EntrenadorCuponesPage_ng_template_16_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-fab", 12)(19, "ion-fab-button", 13);
    \u0275\u0275listener("click", function EntrenadorCuponesPage_Template_ion_fab_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.goBack());
    });
    \u0275\u0275element(20, "ion-icon", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ion-modal", 15);
    \u0275\u0275listener("didDismiss", function EntrenadorCuponesPage_Template_ion_modal_didDismiss_21_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cerrarModal());
    });
    \u0275\u0275template(22, EntrenadorCuponesPage_ng_template_22_Template, 65, 14, "ng-template");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loading_r14 = \u0275\u0275reference(17);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", !ctx.isLoading)("ngIfElse", loading_r14);
    \u0275\u0275advance(6);
    \u0275\u0275property("isOpen", ctx.modalOpen);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, IonicModule, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonRefresher, IonRefresherContent, IonSelect, IonSelectOption, IonSpinner, IonTitle, IonToolbar, IonModal, NumericValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective, DecimalPipe, DatePipe], styles: ['\n\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  background: url("./media/cupon-bg.png") center/cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding-top: 20px;\n}\n.header-nike[_ngcontent-%COMP%]   .header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.85));\n}\n.header-nike[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n.header-nike[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  color: #fff;\n  margin: 0;\n  letter-spacing: -1.5px;\n  text-transform: uppercase;\n}\n.header-nike[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  color: #ccff00;\n  font-size: 14px;\n  font-weight: 700;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: -30px;\n  border-radius: 30px 30px 0 0;\n  background: #f4f6f9;\n  position: relative;\n  z-index: 20;\n  min-height: calc(100vh - 150px);\n}\n.actions-section[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.actions-section[_ngcontent-%COMP%]   .nike-btn-primary[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #ccff00;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n  font-weight: 900;\n  height: 54px;\n  margin: 0;\n  --padding-start: 24px;\n  --padding-end: 24px;\n  letter-spacing: 0.5px;\n  font-size: 14px;\n}\n.coupons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  padding-bottom: 40px;\n}\n@media (min-width: 768px) {\n  .coupons-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1200px) {\n  .coupons-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1600px) {\n  .coupons-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.nike-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  position: relative;\n  transition: all 0.2s ease;\n  border: 1px solid #edf2f7;\n}\n.nike-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);\n}\n.nike-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.coupon-card[_ngcontent-%COMP%] {\n  display: flex;\n}\n.coupon-card.expired[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  filter: grayscale(0.5);\n}\n.coupon-card.expired[_ngcontent-%COMP%]   .card-edge[_ngcontent-%COMP%] {\n  background: #cbd5e0 !important;\n}\n.coupon-card[_ngcontent-%COMP%]   .card-edge[_ngcontent-%COMP%] {\n  width: 6px;\n  background: #ccff00;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-header[_ngcontent-%COMP%]   .code-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #000;\n  color: #fff;\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-weight: 800;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-header[_ngcontent-%COMP%]   .code-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ccff00;\n  font-size: 14px;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-header[_ngcontent-%COMP%]   .discount-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: #000;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-header[_ngcontent-%COMP%]   .discount-value.percent[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 15px;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  color: #64748b;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  width: 14px;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 4px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.coupon-card[_ngcontent-%COMP%]   .coupon-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  height: 36px;\n  margin: 0;\n  font-size: 18px;\n}\n.pagination-nike[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin: 20px 0 60px;\n}\n.pagination-nike[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #000;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  opacity: 0.8;\n}\n.pagination-nike[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n.pagination-nike[_ngcontent-%COMP%]   .pages-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.pagination-nike[_ngcontent-%COMP%]   .pages-wrapper[_ngcontent-%COMP%]   .page-num[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: #000;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.pagination-nike[_ngcontent-%COMP%]   .pages-wrapper[_ngcontent-%COMP%]   .page-num[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.pagination-nike[_ngcontent-%COMP%]   .pages-wrapper[_ngcontent-%COMP%]   .page-num.active[_ngcontent-%COMP%] {\n  background: #000;\n  color: #ccff00;\n  transform: scale(1.1);\n}\n.nike-modal[_ngcontent-%COMP%] {\n  --border-radius: 32px 32px 0 0;\n  --height: 90%;\n  align-items: flex-end;\n}\n.nike-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: #000;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n}\n.modal-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 25px;\n}\n.modal-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.modal-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.modal-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-left: 5px;\n}\n.modal-form[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n  --border-radius: 14px;\n  --padding-start: 14px;\n  border: 2px solid #f1f5f9;\n  transition: all 0.2s;\n}\n.modal-form[_ngcontent-%COMP%]   .nike-item.item-has-focus[_ngcontent-%COMP%] {\n  border-color: #000;\n  --background: #fff;\n}\n.modal-form[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .nike-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  --placeholder-color: #cbd5e1;\n}\n.nike-btn-save[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #ccff00;\n  --border-radius: 16px;\n  height: 56px;\n  font-weight: 900;\n  margin-top: 15px;\n  letter-spacing: 1px;\n  font-size: 14px;\n}\n.nike-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 14px;\n  padding: 0 14px;\n  height: 52px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  border: 2px solid #edf2f7;\n}\n.nike-search-box.search-modal[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-color: #f1f5f9;\n}\n.nike-search-box.search-modal[_ngcontent-%COMP%]:focus-within {\n  border-color: #000;\n  background: #fff;\n}\n.nike-search-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #94a3b8;\n  margin-right: 10px;\n}\n.nike-search-box[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  font-weight: 700;\n  font-size: 13px;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 2px solid #000;\n  margin-top: 6px;\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);\n  z-index: 9999;\n  position: relative;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f0f0f0;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item.loading[_ngcontent-%COMP%], \n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item.empty[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 10px;\n  color: #999;\n  font-size: 12px;\n  font-style: italic;\n  padding: 15px;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item.loading[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%], \n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item.empty[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .alu-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .alu-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #1e293b;\n  font-size: 13px;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .alu-text[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n}\n.autocomplete-results-mobile[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ccff00;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n  --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n}\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 0;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 700;\n  margin-top: 15px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  opacity: 0.3;\n  margin-bottom: 15px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  margin: 0;\n  color: #64748b;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease forwards;\n  opacity: 0;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.animate-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease forwards;\n  opacity: 0;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=entrenador-cupones.page.css.map */'] });
var EntrenadorCuponesPage = _EntrenadorCuponesPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenadorCuponesPage, [{
    type: Component,
    args: [{ selector: "app-entrenador-cupones", standalone: true, imports: [CommonModule, FormsModule, IonicModule], template: `<ion-content>
    <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <!-- Hero Header -->
    <div class="header-nike">
        <div class="header-overlay"></div>
        <div class="header-content">
            <h1 class="header-title">Cupones Descuento</h1>
            <p class="header-sub">Gestiona ofertas y promociones</p>
        </div>
    </div>

    <div class="dashboard-container">
        <!-- Actions Bar -->
        <div class="actions-section animate-up">
            <ion-button expand="block" class="nike-btn-primary" (click)="abrirModal()">
                <ion-icon name="add-outline" slot="start"></ion-icon>
                CREAR NUEVO CUP\xD3N
            </ion-button>
        </div>

        <!-- Coupons List Grid -->
        <div class="coupons-grid-wrapper" *ngIf="!isLoading; else loading">
            <div class="coupons-grid">
                <div class="nike-card coupon-card animate-up" *ngFor="let cupon of paginatedCupones; let i = index"
                    [style.animation-delay]="(i * 0.05) + 's'" [class.expired]="isExpired(cupon.fecha_fin)">

                    <div class="card-edge"></div>

                    <div class="coupon-main">
                        <div class="coupon-header">
                            <div class="code-badge">
                                <ion-icon name="gift-outline"></ion-icon>
                                <span>{{ cupon.codigo }}</span>
                            </div>
                            <div class="discount-value" [class.percent]="cupon.tipo_descuento === 'porcentaje'">
                                {{ cupon.tipo_descuento === 'porcentaje' ? cupon.valor + '%' : '$' + (cupon.valor |
                                number:'1.0-0':'es') }}
                            </div>
                        </div>

                        <div class="coupon-details">
                            <div class="detail-row" *ngIf="cupon.jugador_nombre">
                                <ion-icon name="person-outline"></ion-icon>
                                <span>Para: <strong>{{ cupon.jugador_nombre }}</strong></span>
                            </div>
                            <div class="detail-row" *ngIf="cupon.pack_nombre">
                                <ion-icon name="cube-outline"></ion-icon>
                                <span>Pack: <strong>{{ cupon.pack_nombre }}</strong></span>
                            </div>
                            <div class="detail-row">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <span>Fin: <strong>{{ (cupon.fecha_fin | date:'dd/MM/yyyy') || 'Sin fecha'
                                        }}</strong></span>
                            </div>
                            <div class="detail-row">
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                <span>Usos: <strong>{{ cupon.uso_actual }} / {{ cupon.uso_maximo || '\u221E'
                                        }}</strong></span>
                            </div>
                        </div>

                        <div class="coupon-actions">
                            <ion-button fill="clear" color="primary" class="edit-btn" (click)="abrirModal(cupon)">
                                <ion-icon name="create-outline" slot="icon-only"></ion-icon>
                            </ion-button>
                            <ion-button fill="clear" color="danger" class="delete-btn"
                                (click)="eliminarCupon(cupon.id)">
                                <ion-icon name="trash-outline" slot="icon-only"></ion-icon>
                            </ion-button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination Controls -->
            <div class="pagination-nike" *ngIf="totalPages > 1">
                <ion-button fill="clear" [disabled]="currentPage === 1" (click)="setPage(currentPage - 1)">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </ion-button>

                <div class="pages-wrapper">
                    <span class="page-num" *ngFor="let p of pages" [class.active]="p === currentPage"
                        (click)="setPage(p)">
                        {{ p }}
                    </span>
                </div>

                <ion-button fill="clear" [disabled]="currentPage === totalPages" (click)="setPage(currentPage + 1)">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </ion-button>
            </div>

            <!-- Empty State -->
            <div class="empty-state animate-fade" *ngIf="cupones.length === 0">
                <ion-icon name="gift-outline"></ion-icon>
                <p>A\xFAn no has creado cupones.</p>
                <ion-button fill="clear" (click)="abrirModal()">Empezar ahora</ion-button>
            </div>
        </div>

        <ng-template #loading>
            <div class="loading-container">
                <ion-spinner name="crescent"></ion-spinner>
                <p>Cargando promociones...</p>
            </div>
        </ng-template>
    </div>

    <!-- Back FAB -->
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
            <ion-icon name="chevron-back-outline"></ion-icon>
        </ion-fab-button>
    </ion-fab>

    <!-- CUpon Modal -->
    <ion-modal [isOpen]="modalOpen" (didDismiss)="cerrarModal()" class="nike-modal">
        <ng-template>
            <ion-header class="ion-no-border">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-button (click)="cerrarModal()">
                            <ion-icon slot="icon-only" name="chevron-back-outline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                    <ion-title>{{ nuevoCupon.id ? 'Editar Cup\xF3n' : 'Nuevo Cup\xF3n' }}</ion-title>
                    <ion-buttons slot="end">
                        <ion-button (click)="cerrarModal()">
                            <ion-icon slot="icon-only" name="close-outline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>

            <ion-content class="ion-padding">
                <div class="modal-form">
                    <div class="input-group">
                        <label>C\xF3digo del Cup\xF3n</label>
                        <ion-item lines="none" class="nike-item">
                            <ion-input [(ngModel)]="nuevoCupon.codigo" placeholder="Ej: VERANO2024"
                                class="caps-input"></ion-input>
                        </ion-item>
                    </div>

                    <div class="row">
                        <div class="input-group half">
                            <label>Tipo</label>
                            <ion-item lines="none" class="nike-item">
                                <ion-select [(ngModel)]="nuevoCupon.tipo_descuento" interface="popover"
                                    toggleIcon="chevron-down-outline">
                                    <ion-select-option value="porcentaje">Porcentaje (%)</ion-select-option>
                                    <ion-select-option value="monto">Fijo ($)</ion-select-option>
                                </ion-select>
                            </ion-item>
                        </div>
                        <div class="input-group half">
                            <label>Valor</label>
                            <ion-item lines="none" class="nike-item">
                                <ion-input type="number" [(ngModel)]="nuevoCupon.valor" placeholder="10"></ion-input>
                            </ion-item>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-group half">
                            <label>Inicio</label>
                            <ion-item lines="none" class="nike-item">
                                <ion-input type="date" [(ngModel)]="nuevoCupon.fecha_inicio"></ion-input>
                            </ion-item>
                        </div>
                        <div class="input-group half">
                            <label>Fin</label>
                            <ion-item lines="none" class="nike-item">
                                <ion-input type="date" [(ngModel)]="nuevoCupon.fecha_fin"></ion-input>
                            </ion-item>
                        </div>
                    </div>

                    <div class="input-group">
                        <label>Uso M\xE1ximo (Opcional)</label>
                        <ion-item lines="none" class="nike-item">
                            <ion-input type="number" [(ngModel)]="nuevoCupon.uso_maximo"
                                placeholder="Ej: 100 usuarios"></ion-input>
                        </ion-item>
                    </div>

                    <div class="input-group">
                        <label>Pack Espec\xEDfico (Opcional)</label>
                        <ion-item lines="none" class="nike-item">
                            <ion-select [(ngModel)]="nuevoCupon.pack_id" interface="action-sheet"
                                placeholder="Todos los packs">
                                <ion-select-option [value]="null">Todos los packs</ion-select-option>
                                <ion-select-option *ngFor="let p of packs" [value]="p.id">{{ p.nombre
                                    }}</ion-select-option>
                            </ion-select>
                        </ion-item>
                    </div>

                    <!-- Search Real-time (Global Database) -->
                    <div class="input-group">
                        <label>Restringir a Jugador (Opcional)</label>
                        <div class="nike-search-box search-modal">
                            <ion-icon name="search-outline"></ion-icon>
                            <ion-input placeholder="Buscar jugador en App..." [(ngModel)]="searchTermAlumno"
                                (ionInput)="filterAlumnos($event)">
                            </ion-input>
                        </div>

                        <div class="autocomplete-results-mobile"
                            *ngIf="searchTermAlumno && (isSearchingAlumno || alumnosFiltrados.length > 0)">

                            <!-- Loading State -->
                            <div class="result-item loading" *ngIf="isSearchingAlumno">
                                <ion-spinner name="dots"></ion-spinner>
                                <span>Buscando...</span>
                            </div>

                            <!-- Results -->
                            <ng-container *ngIf="!isSearchingAlumno">
                                <div class="result-item" *ngFor="let alu of alumnosFiltrados"
                                    (click)="seleccionarAlumno(alu)">
                                    <div class="alu-text">
                                        <span class="name">{{ alu.nombre || alu.jugador_nombre }}</span>
                                        <span class="mail">{{ alu.usuario }}</span>
                                    </div>
                                    <ion-icon name="add-circle-outline"></ion-icon>
                                </div>

                                <!-- No Results -->
                                <div class="result-item empty"
                                    *ngIf="alumnosFiltrados.length === 0 && searchTermAlumno.length > 1">
                                    <span>No se encontraron resultados</span>
                                </div>
                            </ng-container>
                        </div>
                    </div>
                </div>

                <ion-button expand="block" class="nike-btn-save" (click)="guardarCupon()" [disabled]="isSaving">
                    {{ isSaving ? 'GUARDANDO...' : (nuevoCupon.id ? 'ACTUALIZAR' : 'CREAR CUP\xD3N') }}
                </ion-button>
            </ion-content>
        </ng-template>
    </ion-modal>
</ion-content>`, styles: ['/* src/app/pages/entrenador-cupones/entrenador-cupones.page.scss */\n.header-nike {\n  position: relative;\n  height: 180px;\n  background: url("./media/cupon-bg.png") center/cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding-top: 20px;\n}\n.header-nike .header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.85));\n}\n.header-nike .header-content {\n  position: relative;\n  z-index: 10;\n}\n.header-nike .header-content .header-title {\n  font-size: 32px;\n  font-weight: 900;\n  color: #fff;\n  margin: 0;\n  letter-spacing: -1.5px;\n  text-transform: uppercase;\n}\n.header-nike .header-content .header-sub {\n  color: #ccff00;\n  font-size: 14px;\n  font-weight: 700;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.dashboard-container {\n  padding: 20px;\n  margin-top: -30px;\n  border-radius: 30px 30px 0 0;\n  background: #f4f6f9;\n  position: relative;\n  z-index: 20;\n  min-height: calc(100vh - 150px);\n}\n.actions-section {\n  margin-bottom: 25px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.actions-section .nike-btn-primary {\n  --background: #000;\n  --color: #ccff00;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n  font-weight: 900;\n  height: 54px;\n  margin: 0;\n  --padding-start: 24px;\n  --padding-end: 24px;\n  letter-spacing: 0.5px;\n  font-size: 14px;\n}\n.coupons-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  padding-bottom: 40px;\n}\n@media (min-width: 768px) {\n  .coupons-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1200px) {\n  .coupons-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1600px) {\n  .coupons-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.nike-card {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  position: relative;\n  transition: all 0.2s ease;\n  border: 1px solid #edf2f7;\n}\n.nike-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);\n}\n.nike-card:active {\n  transform: scale(0.98);\n}\n.coupon-card {\n  display: flex;\n}\n.coupon-card.expired {\n  opacity: 0.6;\n  filter: grayscale(0.5);\n}\n.coupon-card.expired .card-edge {\n  background: #cbd5e0 !important;\n}\n.coupon-card .card-edge {\n  width: 6px;\n  background: #ccff00;\n}\n.coupon-card .coupon-main {\n  flex: 1;\n  padding: 16px;\n}\n.coupon-card .coupon-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.coupon-card .coupon-header .code-badge {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #000;\n  color: #fff;\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-weight: 800;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n}\n.coupon-card .coupon-header .code-badge ion-icon {\n  color: #ccff00;\n  font-size: 14px;\n}\n.coupon-card .coupon-header .discount-value {\n  font-size: 20px;\n  font-weight: 900;\n  color: #000;\n}\n.coupon-card .coupon-header .discount-value.percent {\n  color: #2563eb;\n}\n.coupon-card .coupon-details {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 15px;\n}\n.coupon-card .coupon-details .detail-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  color: #64748b;\n}\n.coupon-card .coupon-details .detail-row ion-icon {\n  font-size: 14px;\n  color: #94a3b8;\n  width: 14px;\n}\n.coupon-card .coupon-details .detail-row strong {\n  color: #1e293b;\n}\n.coupon-card .coupon-details .detail-row span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.coupon-card .coupon-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 4px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.coupon-card .coupon-actions ion-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  height: 36px;\n  margin: 0;\n  font-size: 18px;\n}\n.pagination-nike {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin: 20px 0 60px;\n}\n.pagination-nike ion-button {\n  --color: #000;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  opacity: 0.8;\n}\n.pagination-nike ion-button[disabled] {\n  opacity: 0.2;\n}\n.pagination-nike .pages-wrapper {\n  display: flex;\n  gap: 8px;\n}\n.pagination-nike .pages-wrapper .page-num {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: #000;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.pagination-nike .pages-wrapper .page-num:hover {\n  background: #f1f5f9;\n}\n.pagination-nike .pages-wrapper .page-num.active {\n  background: #000;\n  color: #ccff00;\n  transform: scale(1.1);\n}\n.nike-modal {\n  --border-radius: 32px 32px 0 0;\n  --height: 90%;\n  align-items: flex-end;\n}\n.nike-modal ion-toolbar {\n  --background: #fff;\n  --color: #000;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n}\n.modal-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 25px;\n}\n.modal-form .row {\n  display: flex;\n  gap: 12px;\n}\n.modal-form .row .half {\n  flex: 1;\n}\n.modal-form .input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.modal-form .input-group label {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-left: 5px;\n}\n.modal-form .nike-item {\n  --background: #f8fafc;\n  --border-radius: 14px;\n  --padding-start: 14px;\n  border: 2px solid #f1f5f9;\n  transition: all 0.2s;\n}\n.modal-form .nike-item.item-has-focus {\n  border-color: #000;\n  --background: #fff;\n}\n.modal-form .nike-item ion-input,\n.modal-form .nike-item ion-select {\n  font-weight: 700;\n  font-size: 14px;\n  --placeholder-color: #cbd5e1;\n}\n.nike-btn-save {\n  --background: #000;\n  --color: #ccff00;\n  --border-radius: 16px;\n  height: 56px;\n  font-weight: 900;\n  margin-top: 15px;\n  letter-spacing: 1px;\n  font-size: 14px;\n}\n.nike-search-box {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 14px;\n  padding: 0 14px;\n  height: 52px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  border: 2px solid #edf2f7;\n}\n.nike-search-box.search-modal {\n  background: #f8fafc;\n  border-color: #f1f5f9;\n}\n.nike-search-box.search-modal:focus-within {\n  border-color: #000;\n  background: #fff;\n}\n.nike-search-box ion-icon {\n  font-size: 18px;\n  color: #94a3b8;\n  margin-right: 10px;\n}\n.nike-search-box ion-input {\n  --padding-start: 0;\n  font-weight: 700;\n  font-size: 13px;\n}\n.autocomplete-results-mobile {\n  background: #fff;\n  border-radius: 14px;\n  border: 2px solid #000;\n  margin-top: 6px;\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);\n  z-index: 9999;\n  position: relative;\n}\n.autocomplete-results-mobile .result-item {\n  padding: 12px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f0f0f0;\n}\n.autocomplete-results-mobile .result-item:last-child {\n  border-bottom: none;\n}\n.autocomplete-results-mobile .result-item.loading,\n.autocomplete-results-mobile .result-item.empty {\n  justify-content: center;\n  gap: 10px;\n  color: #999;\n  font-size: 12px;\n  font-style: italic;\n  padding: 15px;\n}\n.autocomplete-results-mobile .result-item.loading ion-spinner,\n.autocomplete-results-mobile .result-item.empty ion-spinner {\n  width: 18px;\n  height: 18px;\n}\n.autocomplete-results-mobile .result-item .alu-text {\n  display: flex;\n  flex-direction: column;\n}\n.autocomplete-results-mobile .result-item .alu-text .name {\n  font-weight: 800;\n  color: #1e293b;\n  font-size: 13px;\n}\n.autocomplete-results-mobile .result-item .alu-text .mail {\n  font-size: 10px;\n  color: #94a3b8;\n}\n.autocomplete-results-mobile .result-item ion-icon {\n  font-size: 18px;\n  color: #ccff00;\n}\n.nike-fab {\n  --background: #000;\n  --color: #fff;\n  --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);\n}\n.nike-fab.back-fab {\n  --background: #000;\n  --color: #fff;\n}\n.loading-container {\n  text-align: center;\n  padding: 60px 0;\n}\n.loading-container p {\n  color: #94a3b8;\n  font-weight: 700;\n  margin-top: 15px;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n.empty-state ion-icon {\n  font-size: 64px;\n  opacity: 0.3;\n  margin-bottom: 15px;\n}\n.empty-state p {\n  font-weight: 700;\n  font-size: 16px;\n  margin: 0;\n  color: #64748b;\n}\n.animate-up {\n  animation: slideUp 0.5s ease forwards;\n  opacity: 0;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.animate-fade {\n  animation: fadeIn 0.4s ease forwards;\n  opacity: 0;\n}\n@keyframes fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=entrenador-cupones.page.css.map */\n'] }]
  }], () => [{ type: EntrenamientoService }, { type: Router }, { type: AlertController }, { type: LoadingController }], { onResize: [{
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrenadorCuponesPage, { className: "EntrenadorCuponesPage", filePath: "src/app/pages/entrenador-cupones/entrenador-cupones.page.ts", lineNumber: 24 });
})();
export {
  EntrenadorCuponesPage
};
//# sourceMappingURL=entrenador-cupones.page-3OSGTNTN.js.map

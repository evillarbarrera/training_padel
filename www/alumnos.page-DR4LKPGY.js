import {
  EvaluacionService
} from "./chunk-RLIZGE6Q.js";
import {
  EntrenamientoService
} from "./chunk-DEYW32VP.js";
import {
  PacksService
} from "./chunk-UA6B4IIY.js";
import {
  PackAlumnoService
} from "./chunk-OWACC5B5.js";
import {
  AlertController,
  IonBadge,
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
  IonSegment,
  IonSegmentButton,
  IonSpinner,
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
  alertCircleOutline,
  analyticsOutline,
  calendarOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  chevronForwardOutline,
  closeOutline,
  mailOutline,
  peopleOutline,
  personAddOutline,
  pricetagsOutline,
  searchOutline,
  statsChartOutline,
  timeOutline,
  videocamOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  HostListener,
  HttpClient,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
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
  ɵɵpipeBind2,
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

// src/app/pages/alumnos/alumnos.page.ts
function AlumnosPage_div_19_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4, "Grup.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alumno_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alumno_r2.grupales);
  }
}
function AlumnosPage_div_19_ion_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 41);
    \u0275\u0275listener("click", function AlumnosPage_div_19_ion_button_31_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const alumno_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.renovarPack(alumno_r2));
    });
    \u0275\u0275element(1, "ion-icon", 42);
    \u0275\u0275text(2, " Renovar ");
    \u0275\u0275elementEnd();
  }
}
function AlumnosPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "img", 26);
    \u0275\u0275listener("error", function AlumnosPage_div_19_Template_img_error_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.display = "none");
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 27)(7, "div", 28)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29)(11, "div", 30)(12, "span", 31);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15, "Pag.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 30)(17, "span", 31);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 32);
    \u0275\u0275text(20, "Res.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AlumnosPage_div_19_div_21_Template, 5, 1, "div", 33);
    \u0275\u0275elementStart(22, "div", 30)(23, "span", 31);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 32);
    \u0275\u0275text(26, "Pend.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 34)(28, "ion-button", 35);
    \u0275\u0275listener("click", function AlumnosPage_div_19_Template_ion_button_click_28_listener() {
      const alumno_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.verProgreso(alumno_r2.id));
    });
    \u0275\u0275element(29, "ion-icon", 36);
    \u0275\u0275text(30, " Progreso ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, AlumnosPage_div_19_ion_button_31_Template, 3, 0, "ion-button", 37);
    \u0275\u0275elementStart(32, "ion-button", 38);
    \u0275\u0275listener("click", function AlumnosPage_div_19_Template_ion_button_click_32_listener() {
      const alumno_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.evaluar(alumno_r2.id));
    });
    \u0275\u0275element(33, "ion-icon", 39);
    \u0275\u0275text(34, " Evaluar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const alumno_r2 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", i_r5 * 0.05 + "s");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getInitials(alumno_r2.nombre));
    \u0275\u0275advance();
    \u0275\u0275property("src", alumno_r2.foto, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(alumno_r2.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(alumno_r2.pagadas || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(alumno_r2.reservadas);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", alumno_r2.grupales > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alumno_r2.pendientes);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", alumno_r2.pendientes <= 1);
  }
}
function AlumnosPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "ion-button", 44);
    \u0275\u0275listener("click", function AlumnosPage_div_20_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarPagina(-1));
    });
    \u0275\u0275element(2, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 44);
    \u0275\u0275listener("click", function AlumnosPage_div_20_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarPagina(1));
    });
    \u0275\u0275element(6, "ion-icon", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.paginaActual === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r2.paginaActual, " de ", ctx_r2.totalPaginas);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.paginaActual === ctx_r2.totalPaginas);
  }
}
function AlumnosPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "ion-icon", 48);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No se encontraron alumnos");
    \u0275\u0275elementEnd()();
  }
}
function AlumnosPage_div_25_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 62);
    \u0275\u0275text(2, "Agendar para");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedAlumno.nombre);
  }
}
function AlumnosPage_div_25_div_8_ion_segment_button_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-segment-button", 66)(1, "ion-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r9 = ctx.$implicit;
    \u0275\u0275property("value", d_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 2, d_r9, "dd/MM", "UTC"), " ");
  }
}
function AlumnosPage_div_25_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "ion-segment", 64);
    \u0275\u0275twoWayListener("ngModelChange", function AlumnosPage_div_25_div_8_Template_ion_segment_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.diaSeleccionado, $event) || (ctx_r2.diaSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(2, AlumnosPage_div_25_div_8_ion_segment_button_2_Template, 4, 6, "ion-segment-button", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.diaSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.diasAgenda);
  }
}
function AlumnosPage_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "ion-segment", 68);
    \u0275\u0275twoWayListener("ngModelChange", function AlumnosPage_div_25_div_9_Template_ion_segment_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.tramoSeleccionado, $event) || (ctx_r2.tramoSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "ion-segment-button", 69)(3, "ion-label");
    \u0275\u0275text(4, "MA\xD1ANA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-segment-button", 70)(6, "ion-label");
    \u0275\u0275text(7, "TARDE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-segment-button", 71)(9, "ion-label");
    \u0275\u0275text(10, "NOCHE");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.tramoSeleccionado);
  }
}
function AlumnosPage_div_25_div_10_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function AlumnosPage_div_25_div_10_div_1_div_1_Template_div_click_0_listener() {
      const h_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.seleccionarHorario(h_r12));
    });
    \u0275\u0275elementStart(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-badge", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r12 = ctx.$implicit;
    \u0275\u0275classProp("ocupado", h_r12.ocupado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, h_r12.hora_inicio, "HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("color", h_r12.ocupado ? "medium" : "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", h_r12.ocupado ? "Ocupado" : "Disponible", " ");
  }
}
function AlumnosPage_div_25_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, AlumnosPage_div_25_div_10_div_1_div_1_Template, 6, 8, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.horariosPorDia[ctx_r2.diaSeleccionado][ctx_r2.tramoSeleccionado]);
  }
}
function AlumnosPage_div_25_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "ion-icon", 81);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No hay bloques disponibles en este tramo.");
    \u0275\u0275elementEnd()();
  }
}
function AlumnosPage_div_25_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, AlumnosPage_div_25_div_10_div_1_Template, 2, 1, "div", 73)(2, AlumnosPage_div_25_div_10_div_2_Template, 4, 0, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.horariosPorDia[ctx_r2.diaSeleccionado] == null ? null : ctx_r2.horariosPorDia[ctx_r2.diaSeleccionado][ctx_r2.tramoSeleccionado] == null ? null : ctx_r2.horariosPorDia[ctx_r2.diaSeleccionado][ctx_r2.tramoSeleccionado].length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.horariosPorDia[ctx_r2.diaSeleccionado] == null ? null : ctx_r2.horariosPorDia[ctx_r2.diaSeleccionado][ctx_r2.tramoSeleccionado] == null ? null : ctx_r2.horariosPorDia[ctx_r2.diaSeleccionado][ctx_r2.tramoSeleccionado].length) === 0);
  }
}
function AlumnosPage_div_25_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "ion-spinner", 83);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando disponibilidad...");
    \u0275\u0275elementEnd()();
  }
}
function AlumnosPage_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275listener("click", function AlumnosPage_div_25_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBookingModal = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 51)(3, "div", 52);
    \u0275\u0275template(4, AlumnosPage_div_25_div_4_Template, 5, 1, "div", 53);
    \u0275\u0275elementStart(5, "ion-button", 54);
    \u0275\u0275listener("click", function AlumnosPage_div_25_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBookingModal = false);
    });
    \u0275\u0275element(6, "ion-icon", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 56);
    \u0275\u0275template(8, AlumnosPage_div_25_div_8_Template, 3, 2, "div", 57)(9, AlumnosPage_div_25_div_9_Template, 11, 1, "div", 58)(10, AlumnosPage_div_25_div_10_Template, 3, 2, "div", 59)(11, AlumnosPage_div_25_div_11_Template, 4, 0, "div", 60);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.selectedAlumno);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.diasAgenda.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.diaSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.diaSeleccionado && !ctx_r2.cargandoHorarios);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.cargandoHorarios);
  }
}
function AlumnosPage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275listener("click", function AlumnosPage_div_26_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalCrear());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 84)(3, "div", 85)(4, "div", 61)(5, "h2");
    \u0275\u0275text(6, "Registrar Alumno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 62);
    \u0275\u0275text(8, "Ingresa los datos para registrarlo localmente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-button", 54);
    \u0275\u0275listener("click", function AlumnosPage_div_26_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalCrear());
    });
    \u0275\u0275element(10, "ion-icon", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 86)(12, "div", 87)(13, "ion-item", 88)(14, "ion-label", 89);
    \u0275\u0275text(15, "Nombre Completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AlumnosPage_div_26_Template_ion_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.nuevoAlumno.nombre, $event) || (ctx_r2.nuevoAlumno.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-item", 91)(18, "ion-label", 89);
    \u0275\u0275text(19, "Correo Electr\xF3nico (Ser\xE1 su Usuario)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function AlumnosPage_div_26_Template_ion_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.nuevoAlumno.email, $event) || (ctx_r2.nuevoAlumno.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 93);
    \u0275\u0275element(22, "ion-icon", 94);
    \u0275\u0275elementStart(23, "p", 95);
    \u0275\u0275text(24, "Se enviar\xE1 un correo con una contrase\xF1a gen\xE9rica vinculada a tu perfil.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ion-button", 96);
    \u0275\u0275listener("click", function AlumnosPage_div_26_Template_ion_button_click_25_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.crearAlumno());
    });
    \u0275\u0275text(26, " REGISTRAR Y NOTIFICAR ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.nuevoAlumno.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.nuevoAlumno.email);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r2.nuevoAlumno.nombre || !ctx_r2.nuevoAlumno.email);
  }
}
var _AlumnosPage = class _AlumnosPage {
  get filtro() {
    return this._filtro;
  }
  set filtro(value) {
    this._filtro = value;
    this.paginaActual = 1;
  }
  constructor(router, http, mysqlService, entrenamientoService, evaluacionService, alertCtrl, loadingCtrl, toastCtrl, notificationService, route, packsService, packAlumnoService) {
    this.router = router;
    this.http = http;
    this.mysqlService = mysqlService;
    this.entrenamientoService = entrenamientoService;
    this.evaluacionService = evaluacionService;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.notificationService = notificationService;
    this.route = route;
    this.packsService = packsService;
    this.packAlumnoService = packAlumnoService;
    this._filtro = "";
    this.mostrarSoloActivos = false;
    this.alumnos = [];
    this.showBookingModal = false;
    this.selectedAlumno = null;
    this.mostrarSoloRenovaciones = false;
    this.horariosDisponibles = [];
    this.cargandoHorarios = false;
    this.diasAgenda = [];
    this.diaSeleccionado = "";
    this.horariosPorDia = {};
    this.tramoSeleccionado = "manana";
    this.entrenadorId = Number(localStorage.getItem("userId"));
    this.isCreatingAlumno = false;
    this.nuevoAlumno = { nombre: "", email: "" };
    this.paginaActual = 1;
    this.elementosPorPagina = 5;
    addIcons({
      searchOutline,
      peopleOutline,
      statsChartOutline,
      analyticsOutline,
      videocamOutline,
      chevronBackOutline,
      chevronForwardOutline,
      calendarOutline,
      addCircleOutline,
      timeOutline,
      checkmarkCircleOutline,
      closeOutline,
      personAddOutline,
      mailOutline,
      alertCircleOutline,
      pricetagsOutline
    });
  }
  onResize() {
    this.calcularElementosPorPagina();
  }
  calcularElementosPorPagina() {
    if (window.innerWidth >= 768) {
      this.elementosPorPagina = 9999;
      return;
    }
    const availableHeight = window.innerHeight - 200;
    const cardHeight = 90;
    const filas = Math.max(3, Math.floor(availableHeight / cardHeight));
    const columnas = 1;
    this.elementosPorPagina = filas * columnas;
    console.log(`Paginaci\xF3n din\xE1mica: ${this.elementosPorPagina} items (${filas}x${columnas})`);
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["filter"] === "renovacion") {
        this.mostrarSoloRenovaciones = true;
      }
    });
    this.calcularElementosPorPagina();
    this.cargarAlumnos();
  }
  cargarAlumnos(event) {
    const profesorId = localStorage.getItem("userId");
    this.mysqlService.getAlumnos(Number(profesorId)).subscribe({
      next: (res) => {
        console.log("API Response Alumnos:", res);
        if (!res) {
          this.alumnos = [];
          if (event)
            event.target.complete();
          return;
        }
        this.alumnos = res.map((a) => {
          const p1 = a.foto_perfil && String(a.foto_perfil).length > 5 ? a.foto_perfil : null;
          const p2 = a.foto && String(a.foto).length > 5 ? a.foto : null;
          let fotoRaw = p1 || p2;
          let fotoUrl = "";
          if (fotoRaw && !fotoRaw.includes("imagen_defecto")) {
            if (!fotoRaw.startsWith("http")) {
              const cleanPath = fotoRaw.startsWith("/") ? fotoRaw.substring(1) : fotoRaw;
              fotoUrl = `https://api.padelmanager.cl/${cleanPath}`;
            } else {
              fotoUrl = fotoRaw;
            }
          } else {
            fotoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(a.jugador_nombre)}&background=ccff00&color=000`;
          }
          return {
            id: a.jugador_id,
            nombre: a.jugador_nombre,
            pack: a.pack_nombres,
            pagadas: Number(a.sesiones_pagadas),
            pendientes: Number(a.sesiones_pendientes || 0),
            reservadas: Number(a.sesiones_reservadas || 0),
            grupales: Number(a.sesiones_grupales || 0),
            activo: 1,
            foto: fotoUrl
          };
        });
        this.alumnos.forEach((alumno, index) => {
          if (alumno.foto.includes("ui-avatars")) {
            this.mysqlService.getPerfil(alumno.id).subscribe({
              next: (profile) => {
                const p = profile.user || profile;
                let updatedFoto = p.foto_perfil || p.link_foto;
                if (updatedFoto && typeof updatedFoto === "string" && !updatedFoto.includes("imagen_defecto") && updatedFoto.length > 0) {
                  if (!updatedFoto.startsWith("http")) {
                    const cleanPath = updatedFoto.startsWith("/") ? updatedFoto.substring(1) : updatedFoto;
                    updatedFoto = `https://api.padelmanager.cl/${cleanPath}`;
                  }
                  this.alumnos[index].foto = updatedFoto;
                }
              },
              error: (err) => console.warn(`Error fetching photo for ${alumno.nombre}`, err)
            });
          }
        });
        if (event)
          event.target.complete();
      },
      error: (err) => {
        console.error("Error cargando alumnos", err);
        if (event)
          event.target.complete();
      }
    });
  }
  handleRefresh(event) {
    this.cargarAlumnos(event);
  }
  verProgreso(alumnoId) {
    this.router.navigate(["/mis-habilidades", alumnoId]);
  }
  evaluar(alumnoId) {
    this.router.navigate(["/evaluar", alumnoId]);
  }
  renovarPack(alumno) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({ message: "Cargando packs..." });
      yield loading.present();
      this.packsService.getMisPacks().subscribe({
        next: (packs) => __async(this, null, function* () {
          loading.dismiss();
          const inputs = packs.filter((p) => p.activo == 1).map((p) => ({
            name: "packId",
            type: "radio",
            label: `${p.nombre} ($${p.precio})`,
            value: p.id,
            checked: false
          }));
          if (inputs.length === 0) {
            this.mostrarToast("No tienes packs activos definidos.");
            return;
          }
          const alert = yield this.alertCtrl.create({
            header: "Seleccionar Nuevo Pack",
            subHeader: `Renovaci\xF3n para ${alumno.nombre}`,
            inputs,
            buttons: [
              { text: "Cancelar", role: "cancel" },
              {
                text: "Asignar",
                handler: (packId) => {
                  if (packId)
                    this.ejecutarRenovacion(alumno, packId);
                }
              }
            ]
          });
          yield alert.present();
        }),
        error: () => {
          loading.dismiss();
          this.mostrarToast("Error al cargar packs.");
        }
      });
    });
  }
  ejecutarRenovacion(alumno, packId) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({ message: "Asignando pack..." });
      yield loading.present();
      const payload = {
        pack_id: packId,
        jugador_id: alumno.id,
        precio_pagado: 0
        // Default for trainer assignment
      };
      this.packAlumnoService.insertPackAlumno(payload).subscribe({
        next: () => {
          loading.dismiss();
          this.mostrarToast("\u2705 Pack renovado exitosamente");
          this.cargarAlumnos();
        },
        error: (err) => {
          loading.dismiss();
          this.mostrarToast("\u274C Error al renovar pack");
        }
      });
    });
  }
  get alumnosFiltrados() {
    const cleanFilter = this.filtro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return this.alumnos.filter((alumno) => {
      const cleanNombre = (alumno.nombre || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const coincideNombre = cleanNombre.includes(cleanFilter);
      const coincideActivo = this.mostrarSoloActivos ? alumno.activo === 1 : true;
      const coincideRenovacion = this.mostrarSoloRenovaciones ? alumno.pendientes <= 1 : true;
      return coincideNombre && coincideActivo && coincideRenovacion;
    });
  }
  get alumnosPaginados() {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    return this.alumnosFiltrados.slice(inicio, inicio + this.elementosPorPagina);
  }
  get totalPaginas() {
    return Math.ceil(this.alumnosFiltrados.length / this.elementosPorPagina);
  }
  cambiarPagina(delta) {
    const nuevaPagina = this.paginaActual + delta;
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas) {
      this.paginaActual = nuevaPagina;
    }
  }
  agendar(alumno) {
    this.selectedAlumno = alumno;
    this.showBookingModal = true;
    this.cargarDisponibilidadCoach();
  }
  cargarDisponibilidadCoach() {
    this.cargandoHorarios = true;
    this.entrenamientoService.getDisponibilidadEntrenador(this.entrenadorId).subscribe({
      next: (res) => {
        this.horariosDisponibles = res;
        this.organizarHorarios(res);
        this.cargandoHorarios = false;
      },
      error: (err) => {
        console.error("Error cargando disponibilidad coaching:", err);
        this.cargandoHorarios = false;
      }
    });
  }
  organizarHorarios(horarios) {
    this.horariosPorDia = {};
    const diasSet = /* @__PURE__ */ new Set();
    horarios.forEach((h) => {
      const fechaS = h.fecha;
      diasSet.add(fechaS);
      if (!this.horariosPorDia[fechaS]) {
        this.horariosPorDia[fechaS] = { manana: [], tarde: [], noche: [] };
      }
      const horaStr = String(h.hora_inicio);
      const hora = parseInt(horaStr.split(":")[0], 10);
      if (hora < 12)
        this.horariosPorDia[fechaS].manana.push(h);
      else if (hora < 18)
        this.horariosPorDia[fechaS].tarde.push(h);
      else
        this.horariosPorDia[fechaS].noche.push(h);
    });
    this.diasAgenda = Array.from(diasSet).sort();
    if (this.diasAgenda.length > 0) {
      this.diaSeleccionado = this.diasAgenda[0];
    }
  }
  seleccionarHorario(bloque) {
    return __async(this, null, function* () {
      if (bloque.ocupado)
        return;
      const horaInicioFormatted = String(bloque.hora_inicio).slice(0, 5);
      const alert = yield this.alertCtrl.create({
        header: "Confirmar Agendamiento",
        message: `\xBFAgendar clase para ${this.selectedAlumno.nombre} el ${bloque.fecha} a las ${horaInicioFormatted}?`,
        buttons: [
          { text: "Cancelar", role: "cancel" },
          { text: "Confirmar", handler: () => this.ejecutarAgendamiento(bloque) }
        ]
      });
      yield alert.present();
    });
  }
  ejecutarAgendamiento(bloque) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({ message: "Agendando..." });
      yield loading.present();
      this.entrenamientoService.getEntrenadorPorJugador(this.selectedAlumno.id).subscribe({
        next: (res) => {
          const packActivo = res.find((p) => Number(p.sesiones_restantes) > 0);
          if (!packActivo) {
            loading.dismiss();
            this.mostrarToast("\u274C El alumno no tiene cr\xE9ditos disponibles");
            return;
          }
          const payload = {
            entrenador_id: this.entrenadorId,
            pack_id: packActivo.pack_id,
            pack_jugador_id: packActivo.pack_jugador_id,
            fecha: bloque.fecha,
            hora_inicio: String(bloque.hora_inicio).slice(0, 5),
            hora_fin: String(bloque.hora_fin).slice(0, 5),
            jugador_id: this.selectedAlumno.id,
            estado: "reservado",
            tipo: "individual",
            cantidad_personas: 1
          };
          this.entrenamientoService.crearReserva(payload).subscribe({
            next: () => {
              loading.dismiss();
              this.notificationService.notificarReservaCreada(this.selectedAlumno.id, packActivo.pack_nombre || "Entrenamiento", payload.fecha, payload.hora_inicio);
              this.showBookingModal = false;
              this.mostrarToast("\u2705 Clase agendada exitosamente");
              this.cargarAlumnos();
            },
            error: (err) => {
              loading.dismiss();
              const msg = err.error?.error || "Error al agendar la clase";
              this.alertCtrl.create({ header: "Error", message: msg, buttons: ["OK"] }).then((a) => a.present());
            }
          });
        },
        error: () => {
          loading.dismiss();
          this.mostrarToast("\u274C Error al verificar cr\xE9ditos");
        }
      });
    });
  }
  mostrarToast(msg) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({ message: msg, duration: 2500, position: "top" });
      toast.present();
    });
  }
  // --- REGISTRO DE ALUMNO ---
  mostrarModalCrear() {
    this.isCreatingAlumno = true;
    this.nuevoAlumno = { nombre: "", email: "" };
  }
  cerrarModalCrear() {
    this.isCreatingAlumno = false;
  }
  crearAlumno() {
    return __async(this, null, function* () {
      if (!this.nuevoAlumno.nombre || !this.nuevoAlumno.email) {
        this.mostrarToast("Por favor completa todos los campos");
        return;
      }
      const loading = yield this.loadingCtrl.create({ message: "Registrando alumno y enviando correo..." });
      yield loading.present();
      this.mysqlService.crearAlumno(__spreadProps(__spreadValues({}, this.nuevoAlumno), {
        entrenador_id: this.entrenadorId
      })).subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.success) {
            const mailMsg = res.mail_sent ? "y se ha enviado el correo de bienvenida." : "pero fall\xF3 el env\xEDo del correo (verificar la configuraci\xF3n SMTP).";
            this.mostrarToast(`\u2705 Alumno registrado con \xE9xito ${mailMsg}`);
            this.cerrarModalCrear();
            this.cargarAlumnos();
          } else {
            this.mostrarToast(`\u274C Error: ${res.message || "Error desconocido"}`);
          }
        },
        error: (err) => {
          loading.dismiss();
          const msg = err.error?.error || "Error al intentar crear al alumno";
          this.mostrarToast(`\u274C ${msg}`);
        }
      });
    });
  }
  goToHome() {
    this.router.navigate(["/entrenador-home"]);
  }
  getInitials(name) {
    if (!name)
      return "??";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }
};
_AlumnosPage.\u0275fac = function AlumnosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlumnosPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(EntrenamientoService), \u0275\u0275directiveInject(EvaluacionService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PacksService), \u0275\u0275directiveInject(PackAlumnoService));
};
_AlumnosPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlumnosPage, selectors: [["app-alumnos"]], hostBindings: function AlumnosPage_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function AlumnosPage_resize_HostBindingHandler() {
      return ctx.onResize();
    }, \u0275\u0275resolveWindow);
  }
}, decls: 27, vars: 7, consts: [["slot", "fixed", 3, "ionRefresh"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "header-title"], [1, "header-sub"], [1, "dashboard-container"], [1, "search-section", "animate-up"], [2, "display", "flex", "gap", "10px", "width", "100%"], [1, "nike-search-box", 2, "flex", "1"], ["name", "search-outline"], ["placeholder", "Buscar alumno...", 3, "ngModelChange", "ngModel", "debounce"], [2, "margin", "0", "--padding-start", "18px", "--padding-end", "18px", "--border-radius", "18px", "--background", "#000", "--color", "#ccff00", "height", "50px", "font-weight", "800", 3, "click"], ["name", "person-add-outline", "slot", "icon-only"], [1, "students-list"], ["class", "nike-card horizontal-student-card animate-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], ["class", "pagination-controls animate-fade", 4, "ngIf"], ["class", "empty-state animate-fade", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], ["class", "booking-modal-overlay", 4, "ngIf"], [1, "nike-card", "horizontal-student-card", "animate-up"], [1, "card-media"], [1, "avatar-container"], [1, "initials"], [1, "student-img", 3, "error", "src"], [1, "card-content-main"], [1, "student-header"], [1, "stats-row"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], ["class", "stat-item highlight-grupal", 4, "ngIf"], [1, "student-footer"], [1, "action-button", "secondary", 3, "click"], ["name", "stats-chart-outline", "slot", "start"], ["class", "action-button renv", 3, "click", 4, "ngIf"], [1, "action-button", 3, "click"], ["name", "analytics-outline", "slot", "start"], [1, "stat-item", "highlight-grupal"], [1, "action-button", "renv", 3, "click"], ["name", "pricetags-outline", "slot", "start"], [1, "pagination-controls", "animate-fade"], ["fill", "clear", 3, "click", "disabled"], [1, "page-info"], ["name", "chevron-forward-outline"], [1, "empty-state", "animate-fade"], ["name", "people-outline"], [1, "booking-modal-overlay"], [1, "modal-backdrop", 3, "click"], [1, "modal-content", "animate-pop"], [1, "modal-header"], ["class", "user-brief", 4, "ngIf"], ["fill", "clear", 3, "click"], ["name", "close-outline"], [1, "modal-body"], ["class", "day-selector-nike", 4, "ngIf"], ["class", "period-selector-nike", 4, "ngIf"], ["class", "slots-container", 4, "ngIf"], ["class", "loading-slots", 4, "ngIf"], [1, "user-brief"], [1, "pre"], [1, "day-selector-nike"], ["scrollable", "", 1, "nike-segment-days-light", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "period-selector-nike"], ["mode", "ios", 1, "nike-segment-periods", 3, "ngModelChange", "ngModel"], ["value", "manana"], ["value", "tarde"], ["value", "noche"], [1, "slots-container"], ["class", "horarios-grid", 4, "ngIf"], ["class", "empty-slots", 4, "ngIf"], [1, "horarios-grid"], ["class", "nike-card slot-card", 3, "ocupado", "click", 4, "ngFor", "ngForOf"], [1, "nike-card", "slot-card", 3, "click"], [1, "time"], [3, "color"], [1, "empty-slots"], ["name", "time-outline"], [1, "loading-slots"], ["name", "crescent"], [1, "modal-content", "animate-pop", 2, "height", "auto", "border-radius", "32px 32px 0 0"], [1, "modal-header", 2, "border-bottom", "1px dashed #eee"], [1, "modal-body", 2, "padding-top", "25px", "padding-bottom", "40px"], [1, "form-container"], ["lines", "none", 1, "nike-input-item", 2, "--background", "#f8f8fa", "--border-radius", "16px", "margin-bottom", "15px"], ["position", "stacked", 2, "font-weight", "800", "color", "#111", "margin-bottom", "5px"], ["type", "text", "placeholder", "Ej: Juan P\xE9rez", 2, "font-weight", "700", "color", "#000", 3, "ngModelChange", "ngModel"], ["lines", "none", 1, "nike-input-item", 2, "--background", "#f8f8fa", "--border-radius", "16px", "margin-bottom", "25px"], ["type", "email", "placeholder", "alumno@correo.com", 2, "font-weight", "700", "color", "#000", 3, "ngModelChange", "ngModel"], [1, "info-box-sm", 2, "display", "flex", "gap", "12px", "background", "rgba(204, 255, 0, 0.15)", "padding", "15px", "border-radius", "16px"], ["name", "mail-outline", 2, "font-size", "24px", "color", "#111"], [2, "margin", "0", "font-size", "13px", "font-weight", "600", "color", "#111", "line-height", "1.4"], ["expand", "block", 2, "margin-top", "30px", "--background", "#ccff00", "--color", "#000", "font-weight", "900", "--border-radius", "16px", "height", "56px", 3, "click", "disabled"]], template: function AlumnosPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-refresher", 0);
    \u0275\u0275listener("ionRefresh", function AlumnosPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275elementStart(5, "div", 3)(6, "h1", 4);
    \u0275\u0275text(7, "Mis Alumnos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275text(9, "Seguimiento de packs y progreso");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9);
    \u0275\u0275element(14, "ion-icon", 10);
    \u0275\u0275elementStart(15, "ion-input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AlumnosPage_Template_ion_input_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtro, $event) || (ctx.filtro = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-button", 12);
    \u0275\u0275listener("click", function AlumnosPage_Template_ion_button_click_16_listener() {
      return ctx.mostrarModalCrear();
    });
    \u0275\u0275element(17, "ion-icon", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275template(19, AlumnosPage_div_19_Template, 35, 10, "div", 15)(20, AlumnosPage_div_20_Template, 7, 4, "div", 16)(21, AlumnosPage_div_21_Template, 4, 0, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-fab", 18)(23, "ion-fab-button", 19);
    \u0275\u0275listener("click", function AlumnosPage_Template_ion_fab_button_click_23_listener() {
      return ctx.goToHome();
    });
    \u0275\u0275element(24, "ion-icon", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AlumnosPage_div_25_Template, 12, 5, "div", 21)(26, AlumnosPage_div_26_Template, 27, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtro);
    \u0275\u0275property("debounce", 200);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.alumnosPaginados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.totalPaginas > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.alumnosFiltrados.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.showBookingModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isCreatingAlumno);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonIcon,
  IonBadge,
  IonFab,
  IonFabButton,
  IonSegment,
  IonSegmentButton,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  DatePipe
], styles: ["\n\n.header-nike[_ngcontent-%COMP%] {\n  min-height: 250px;\n  padding-top: calc(50px + env(safe-area-inset-top));\n  padding-bottom: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n  margin-top: -60px;\n  width: 100%;\n  z-index: 0;\n  position: relative;\n  background: url(/assets/mod-packs.jpg) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 20px 25px 40px;\n}\n.search-section[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.nike-search-box[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  border-radius: 14px;\n  padding: 2px 15px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nike-search-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #8e8e93;\n}\n.nike-search-box[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.students-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.horizontal-student-card[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 0;\n  display: flex !important;\n  flex-direction: row !important;\n  overflow: hidden;\n  min-height: 140px;\n  background: white;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%] {\n  width: 75px;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 10px;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #ccff00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  border: 2px solid #fff;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .initials[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #000;\n  z-index: 1;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .student-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 2;\n  border-radius: 50%;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 12px 12px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 0;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  font-size: 7px;\n  font-weight: 800;\n  text-transform: uppercase;\n  padding: 2px 4px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  margin-left: 6px;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f5f5f5;\n  gap: 4px;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  background: #fafafa;\n  padding: 4px 1px;\n  border-radius: 6px;\n  border: 1px solid #f0f0f0;\n  transition: all 0.2s ease;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item.highlight-grupal[_ngcontent-%COMP%] {\n  background: #f0f7ff;\n  border-color: #d0e7ff;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item.highlight-grupal[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #007aff;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item.highlight-grupal[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #007aff;\n  font-weight: 800;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 800;\n  color: #111;\n  line-height: 1.2;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 7px;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0px;\n  margin-top: 1px;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-footer[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  --background: #f8f8f8;\n  --color: var(--ion-color-primary);\n  --border-radius: 6px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  height: 24px;\n  margin: 0;\n  min-height: 0;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-footer[_ngcontent-%COMP%]   .action-button.video-btn[_ngcontent-%COMP%] {\n  --background: #fff0f0;\n  --color: #ff3b30;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-footer[_ngcontent-%COMP%]   .action-button.secondary[_ngcontent-%COMP%] {\n  --background: #f0f0f0;\n  --color: #666;\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-footer[_ngcontent-%COMP%]   .action-button.renv[_ngcontent-%COMP%] {\n  --background: #ccff00;\n  --color: #000;\n  --box-shadow: 0 4px 10px rgba(204, 255, 0, 0.2);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.horizontal-student-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%]   .student-footer[_ngcontent-%COMP%]   .action-button.renv[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px auto 30px;\n  gap: 12px;\n  width: 100%;\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #444;\n  text-transform: uppercase;\n  background: #fff;\n  padding: 8px 16px;\n  border-radius: 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  min-width: 110px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #f0f0f0;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --color: #111;\n  --background: #fff;\n  --box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  background: #fff;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  border: 1px solid #f0f0f0;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  --box-shadow: none;\n  --background: #f5f5f5;\n  background: #f5f5f5;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #8e8e93;\n}\n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 10px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.booking-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-end;\n}\n.booking-modal-overlay[_ngcontent-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.booking-modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background: white;\n  border-radius: 30px 30px 0 0;\n  padding: 25px 20px calc(30px + var(--ion-safe-area-bottom));\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n}\n.booking-modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.booking-modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .user-brief[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.booking-modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .user-brief[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  margin: 4px 0 0;\n  color: #000;\n}\n.booking-modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: -10px;\n  color: #000;\n  font-size: 24px;\n}\n.booking-modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.day-selector-nike[_ngcontent-%COMP%] {\n  margin: 0 -10px;\n}\n.nike-segment-days-light[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: transparent;\n  --color: #8e8e93;\n  --color-checked: var(--ion-color-primary);\n  min-width: 65px;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 0;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  opacity: 0.7;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  border-radius: 14px;\n}\n.nike-segment-periods[_ngcontent-%COMP%] {\n  --background: #f2f2f7;\n  border-radius: 14px;\n  padding: 4px;\n}\n.nike-segment-periods[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: white;\n  --color: #8e8e93;\n  --color-checked: var(--ion-color-primary);\n  --border-radius: 10px;\n  font-weight: 800;\n  font-size: 12px;\n}\n.horarios-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 15px;\n}\n.slot-card[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n}\n.slot-card[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #111;\n}\n.slot-card[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 800;\n}\n.slot-card.ocupado[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background: #f9f9f9;\n}\n.slot-card.ocupado[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.slot-card[_ngcontent-%COMP%]:not(.ocupado):active {\n  transform: scale(0.96);\n  background: #f2f2f7;\n}\n.loading-slots[_ngcontent-%COMP%], \n.empty-slots[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #8e8e93;\n}\n.loading-slots[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.empty-slots[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.loading-slots[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-slots[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=alumnos.page.css.map */"] });
var AlumnosPage = _AlumnosPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlumnosPage, [{
    type: Component,
    args: [{ selector: "app-alumnos", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonButton,
      IonInput,
      IonItem,
      IonLabel,
      IonIcon,
      IonBadge,
      IonFab,
      IonFabButton,
      IonSegment,
      IonSegmentButton,
      IonRefresher,
      IonRefresherContent,
      IonSpinner
    ], template: `<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1 class="header-title">Mis Alumnos</h1>
      <p class="header-sub">Seguimiento de packs y progreso</p>
    </div>
  </div>

  <!-- Main Content -->
  <div class="dashboard-container">

    <!-- Search Box -->
    <div class="search-section animate-up">
      <div style="display: flex; gap: 10px; width: 100%;">
        <div class="nike-search-box" style="flex: 1;">
          <ion-icon name="search-outline"></ion-icon>
          <ion-input placeholder="Buscar alumno..." [(ngModel)]="filtro" [debounce]="200"></ion-input>
        </div>
        <ion-button style="margin: 0; --padding-start: 18px; --padding-end: 18px; --border-radius: 18px; --background: #000; --color: #ccff00; height: 50px; font-weight: 800;" (click)="mostrarModalCrear()">
          <ion-icon name="person-add-outline" slot="icon-only"></ion-icon>
        </ion-button>
      </div>
    </div>

    <!-- Students List -->
    <div class="students-list">

      <div class="nike-card horizontal-student-card animate-up" *ngFor="let alumno of alumnosPaginados; let i = index"
        [style.animation-delay]="(i * 0.05) + 's'">
        <div class="card-media">
          <div class="avatar-container">
            <span class="initials">{{ getInitials(alumno.nombre) }}</span>
            <img [src]="alumno.foto" class="student-img" (error)="$event.target.style.display='none'" />
          </div>
        </div>

        <div class="card-content-main">
          <div class="student-header">
            <h3>{{ alumno.nombre }}</h3>
          </div>

          <!-- Stats Row -->
          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-value">{{ alumno.pagadas || 0 }}</span>
              <span class="stat-label">Pag.</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ alumno.reservadas }}</span>
              <span class="stat-label">Res.</span>
            </div>
            <div class="stat-item highlight-grupal" *ngIf="alumno.grupales > 0">
              <span class="stat-value">{{ alumno.grupales }}</span>
              <span class="stat-label">Grup.</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ alumno.pendientes }}</span>
              <span class="stat-label">Pend.</span>
            </div>
          </div>

          <div class="student-footer">
            <ion-button class="action-button secondary" (click)="verProgreso(alumno.id)">
              <ion-icon name="stats-chart-outline" slot="start"></ion-icon>
              Progreso
            </ion-button>

            <ion-button class="action-button renv" (click)="renovarPack(alumno)" *ngIf="alumno.pendientes <= 1">
              <ion-icon name="pricetags-outline" slot="start"></ion-icon>
              Renovar
            </ion-button>

            <ion-button class="action-button" (click)="evaluar(alumno.id)">
              <ion-icon name="analytics-outline" slot="start"></ion-icon>
              Evaluar
            </ion-button>


          </div>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="pagination-controls animate-fade" *ngIf="totalPaginas > 1">
        <ion-button fill="clear" [disabled]="paginaActual === 1" (click)="cambiarPagina(-1)">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </ion-button>
        <span class="page-info">P\xE1gina {{ paginaActual }} de {{ totalPaginas }}</span>
        <ion-button fill="clear" [disabled]="paginaActual === totalPaginas" (click)="cambiarPagina(1)">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </ion-button>
      </div>

      <!-- No Results -->
      <div class="empty-state animate-fade" *ngIf="alumnosFiltrados.length === 0">
        <ion-icon name="people-outline"></ion-icon>
        <p>No se encontraron alumnos</p>
      </div>

    </div>

  </div>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="goToHome()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- Premium Booking Modal -->
  <div class="booking-modal-overlay" *ngIf="showBookingModal">
    <div class="modal-backdrop" (click)="showBookingModal = false"></div>
    <div class="modal-content animate-pop">

      <div class="modal-header">
        <div class="user-brief" *ngIf="selectedAlumno">
          <span class="pre">Agendar para</span>
          <h2>{{ selectedAlumno.nombre }}</h2>
        </div>
        <ion-button fill="clear" (click)="showBookingModal = false">
          <ion-icon name="close-outline"></ion-icon>
        </ion-button>
      </div>

      <div class="modal-body">

        <!-- Day Selector -->
        <div class="day-selector-nike" *ngIf="diasAgenda.length > 0">
          <ion-segment [(ngModel)]="diaSeleccionado" scrollable class="nike-segment-days-light">
            <ion-segment-button *ngFor="let d of diasAgenda" [value]="d">
              <ion-label>
                {{ d | date:'dd/MM' : 'UTC' }}
              </ion-label>
            </ion-segment-button>
          </ion-segment>
        </div>

        <!-- Period Selector -->
        <div class="period-selector-nike" *ngIf="diaSeleccionado">
          <ion-segment [(ngModel)]="tramoSeleccionado" class="nike-segment-periods" mode="ios">
            <ion-segment-button value="manana">
              <ion-label>MA\xD1ANA</ion-label>
            </ion-segment-button>
            <ion-segment-button value="tarde">
              <ion-label>TARDE</ion-label>
            </ion-segment-button>
            <ion-segment-button value="noche">
              <ion-label>NOCHE</ion-label>
            </ion-segment-button>
          </ion-segment>
        </div>

        <!-- Slots Grid -->
        <div class="slots-container" *ngIf="diaSeleccionado && !cargandoHorarios">
          <div class="horarios-grid" *ngIf="horariosPorDia[diaSeleccionado]?.[tramoSeleccionado]?.length > 0">
            <div class="nike-card slot-card" *ngFor="let h of horariosPorDia[diaSeleccionado][tramoSeleccionado]"
              [class.ocupado]="h.ocupado" (click)="seleccionarHorario(h)">
              <span class="time">{{ h.hora_inicio | date:'HH:mm' }}</span>
              <ion-badge [color]="h.ocupado ? 'medium' : 'success'">
                {{ h.ocupado ? 'Ocupado' : 'Disponible' }}
              </ion-badge>
            </div>
          </div>

          <div class="empty-slots" *ngIf="horariosPorDia[diaSeleccionado]?.[tramoSeleccionado]?.length === 0">
            <ion-icon name="time-outline"></ion-icon>
            <p>No hay bloques disponibles en este tramo.</p>
          </div>
        </div>

        <div class="loading-slots" *ngIf="cargandoHorarios">
          <ion-spinner name="crescent"></ion-spinner>
          <p>Cargando disponibilidad...</p>
        </div>

      </div>

    </div>
  </div>

  <!-- Modal Crear Alumno -->
  <div class="booking-modal-overlay" *ngIf="isCreatingAlumno">
    <div class="modal-backdrop" (click)="cerrarModalCrear()"></div>
    <div class="modal-content animate-pop" style="height: auto; border-radius: 32px 32px 0 0;">
      <div class="modal-header" style="border-bottom: 1px dashed #eee;">
        <div class="user-brief">
          <h2>Registrar Alumno</h2>
          <span class="pre">Ingresa los datos para registrarlo localmente</span>
        </div>
        <ion-button fill="clear" (click)="cerrarModalCrear()">
          <ion-icon name="close-outline"></ion-icon>
        </ion-button>
      </div>

      <div class="modal-body" style="padding-top: 25px; padding-bottom: 40px;">
        <div class="form-container">
          <ion-item class="nike-input-item" lines="none" style="--background: #f8f8fa; --border-radius: 16px; margin-bottom: 15px;">
            <ion-label position="stacked" style="font-weight: 800; color: #111; margin-bottom: 5px;">Nombre Completo</ion-label>
            <ion-input type="text" [(ngModel)]="nuevoAlumno.nombre" placeholder="Ej: Juan P\xE9rez" style="font-weight: 700; color: #000;"></ion-input>
          </ion-item>

          <ion-item class="nike-input-item" lines="none" style="--background: #f8f8fa; --border-radius: 16px; margin-bottom: 25px;">
            <ion-label position="stacked" style="font-weight: 800; color: #111; margin-bottom: 5px;">Correo Electr\xF3nico (Ser\xE1 su Usuario)</ion-label>
            <ion-input type="email" [(ngModel)]="nuevoAlumno.email" placeholder="alumno@correo.com" style="font-weight: 700; color: #000;"></ion-input>
          </ion-item>

          <div class="info-box-sm" style="display: flex; gap: 12px; background: rgba(204, 255, 0, 0.15); padding: 15px; border-radius: 16px;">
            <ion-icon name="mail-outline" style="font-size: 24px; color: #111;"></ion-icon>
            <p style="margin: 0; font-size: 13px; font-weight: 600; color: #111; line-height: 1.4;">Se enviar\xE1 un correo con una contrase\xF1a gen\xE9rica vinculada a tu perfil.</p>
          </div>
          
          <ion-button expand="block" style="margin-top: 30px; --background: #ccff00; --color: #000; font-weight: 900; --border-radius: 16px; height: 56px;" (click)="crearAlumno()" [disabled]="!nuevoAlumno.nombre || !nuevoAlumno.email">
            REGISTRAR Y NOTIFICAR
          </ion-button>
        </div>
      </div>
    </div>
  </div>

</ion-content>`, styles: ["/* src/app/pages/alumnos/alumnos.page.scss */\n.header-nike {\n  min-height: 250px;\n  padding-top: calc(50px + env(safe-area-inset-top));\n  padding-bottom: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n  margin-top: -60px;\n  width: 100%;\n  z-index: 0;\n  position: relative;\n  background: url(/assets/mod-packs.jpg) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .header-title {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content .header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.dashboard-container {\n  padding: 20px 25px 40px;\n}\n.search-section {\n  margin-bottom: 25px;\n}\n.nike-search-box {\n  background: #f2f2f7;\n  border-radius: 14px;\n  padding: 2px 15px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nike-search-box ion-icon {\n  font-size: 18px;\n  color: #8e8e93;\n}\n.nike-search-box ion-input {\n  --padding-start: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.students-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.horizontal-student-card {\n  padding: 0;\n  margin-bottom: 0;\n  display: flex !important;\n  flex-direction: row !important;\n  overflow: hidden;\n  min-height: 140px;\n  background: white;\n}\n.horizontal-student-card .card-media {\n  width: 75px;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 10px;\n}\n.horizontal-student-card .card-media .avatar-container {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #ccff00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  border: 2px solid #fff;\n}\n.horizontal-student-card .card-media .avatar-container .initials {\n  font-size: 18px;\n  font-weight: 800;\n  color: #000;\n  z-index: 1;\n}\n.horizontal-student-card .card-media .avatar-container .student-img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 2;\n  border-radius: 50%;\n}\n.horizontal-student-card .card-content-main {\n  flex: 1;\n  padding: 12px 12px 12px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 0;\n}\n.horizontal-student-card .card-content-main .student-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.horizontal-student-card .card-content-main .student-header h3 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.horizontal-student-card .card-content-main .student-header .status-badge {\n  font-size: 7px;\n  font-weight: 800;\n  text-transform: uppercase;\n  padding: 2px 4px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  margin-left: 6px;\n}\n.horizontal-student-card .card-content-main .stats-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f5f5f5;\n  gap: 4px;\n}\n.horizontal-student-card .card-content-main .stats-row .stat-item {\n  flex: 1;\n  text-align: center;\n  background: #fafafa;\n  padding: 4px 1px;\n  border-radius: 6px;\n  border: 1px solid #f0f0f0;\n  transition: all 0.2s ease;\n}\n.horizontal-student-card .card-content-main .stats-row .stat-item.highlight-grupal {\n  background: #f0f7ff;\n  border-color: #d0e7ff;\n}\n.horizontal-student-card .card-content-main .stats-row .stat-item.highlight-grupal .stat-value {\n  color: #007aff;\n}\n.horizontal-student-card .card-content-main .stats-row .stat-item.highlight-grupal .stat-label {\n  color: #007aff;\n  font-weight: 800;\n}\n.horizontal-student-card .card-content-main .stats-row .stat-item .stat-value {\n  display: block;\n  font-size: 12px;\n  font-weight: 800;\n  color: #111;\n  line-height: 1.2;\n}\n.horizontal-student-card .card-content-main .stats-row .stat-item .stat-label {\n  display: block;\n  font-size: 7px;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0px;\n  margin-top: 1px;\n}\n.horizontal-student-card .card-content-main .student-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.horizontal-student-card .card-content-main .student-footer .action-button {\n  --background: #f8f8f8;\n  --color: var(--ion-color-primary);\n  --border-radius: 6px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  height: 24px;\n  margin: 0;\n  min-height: 0;\n}\n.horizontal-student-card .card-content-main .student-footer .action-button.video-btn {\n  --background: #fff0f0;\n  --color: #ff3b30;\n}\n.horizontal-student-card .card-content-main .student-footer .action-button.secondary {\n  --background: #f0f0f0;\n  --color: #666;\n}\n.horizontal-student-card .card-content-main .student-footer .action-button.renv {\n  --background: #ccff00;\n  --color: #000;\n  --box-shadow: 0 4px 10px rgba(204, 255, 0, 0.2);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.horizontal-student-card .card-content-main .student-footer .action-button.renv ion-icon {\n  color: #000;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px auto 30px;\n  gap: 12px;\n  width: 100%;\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.pagination-controls .page-info {\n  font-size: 11px;\n  font-weight: 800;\n  color: #444;\n  text-transform: uppercase;\n  background: #fff;\n  padding: 8px 16px;\n  border-radius: 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  min-width: 110px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #f0f0f0;\n}\n.pagination-controls ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  --color: #111;\n  --background: #fff;\n  --box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  background: #fff;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  border: 1px solid #f0f0f0;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n}\n.pagination-controls ion-button ion-icon {\n  font-size: 20px;\n}\n.pagination-controls ion-button[disabled] {\n  opacity: 0.4;\n  --box-shadow: none;\n  --background: #f5f5f5;\n  background: #f5f5f5;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #8e8e93;\n}\n.empty-state ion-icon {\n  font-size: 48px;\n  margin-bottom: 10px;\n  opacity: 0.3;\n}\n.empty-state p {\n  font-size: 15px;\n  font-weight: 600;\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n.booking-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-end;\n}\n.booking-modal-overlay .modal-backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.booking-modal-overlay .modal-content {\n  position: relative;\n  width: 100%;\n  background: white;\n  border-radius: 30px 30px 0 0;\n  padding: 25px 20px calc(30px + var(--ion-safe-area-bottom));\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n}\n.booking-modal-overlay .modal-content .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.booking-modal-overlay .modal-content .modal-header .user-brief .pre {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.booking-modal-overlay .modal-content .modal-header .user-brief h2 {\n  font-size: 24px;\n  font-weight: 900;\n  margin: 4px 0 0;\n  color: #000;\n}\n.booking-modal-overlay .modal-content .modal-header ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: -10px;\n  color: #000;\n  font-size: 24px;\n}\n.booking-modal-overlay .modal-content .modal-body {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.day-selector-nike {\n  margin: 0 -10px;\n}\n.nike-segment-days-light {\n  --background: transparent;\n}\n.nike-segment-days-light ion-segment-button {\n  --indicator-color: transparent;\n  --color: #8e8e93;\n  --color-checked: var(--ion-color-primary);\n  min-width: 65px;\n}\n.nike-segment-days-light ion-segment-button ion-label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 0;\n}\n.nike-segment-days-light ion-segment-button .day-label {\n  font-size: 11px;\n  font-weight: 800;\n  opacity: 0.7;\n}\n.nike-segment-days-light ion-segment-button .date-label {\n  font-size: 20px;\n  font-weight: 800;\n}\n.nike-segment-days-light ion-segment-button.segment-button-checked {\n  background: #f2f2f7;\n  border-radius: 14px;\n}\n.nike-segment-periods {\n  --background: #f2f2f7;\n  border-radius: 14px;\n  padding: 4px;\n}\n.nike-segment-periods ion-segment-button {\n  --indicator-color: white;\n  --color: #8e8e93;\n  --color-checked: var(--ion-color-primary);\n  --border-radius: 10px;\n  font-weight: 800;\n  font-size: 12px;\n}\n.horarios-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 15px;\n}\n.slot-card {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid #f2f2f7;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n}\n.slot-card .time {\n  font-size: 18px;\n  font-weight: 800;\n  color: #111;\n}\n.slot-card ion-badge {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 800;\n}\n.slot-card.ocupado {\n  opacity: 0.5;\n  background: #f9f9f9;\n}\n.slot-card.ocupado .time {\n  text-decoration: line-through;\n}\n.slot-card:not(.ocupado):active {\n  transform: scale(0.96);\n  background: #f2f2f7;\n}\n.loading-slots,\n.empty-slots {\n  text-align: center;\n  padding: 40px 20px;\n  color: #8e8e93;\n}\n.loading-slots ion-icon,\n.empty-slots ion-icon {\n  font-size: 32px;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.loading-slots p,\n.empty-slots p {\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=alumnos.page.css.map */\n"] }]
  }], () => [{ type: Router }, { type: HttpClient }, { type: MysqlService }, { type: EntrenamientoService }, { type: EvaluacionService }, { type: AlertController }, { type: LoadingController }, { type: ToastController }, { type: NotificationService }, { type: ActivatedRoute }, { type: PacksService }, { type: PackAlumnoService }], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlumnosPage, { className: "AlumnosPage", filePath: "src/app/pages/alumnos/alumnos.page.ts", lineNumber: 69 });
})();
export {
  AlumnosPage
};
//# sourceMappingURL=alumnos.page-DR4LKPGY.js.map

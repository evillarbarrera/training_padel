import {
  Chart,
  registerables
} from "./chunk-NH3TV3QI.js";
import {
  EvaluacionService
} from "./chunk-RLIZGE6Q.js";
import {
  AlertController,
  IonBadge,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  LoadingController
} from "./chunk-5YKSH3EK.js";
import {
  addIcons,
  analyticsOutline,
  arrowBackOutline,
  chevronBackOutline,
  close,
  cloudUploadOutline,
  informationCircleOutline,
  sparkles,
  sparklesOutline,
  trash,
  trashOutline,
  videocamOffOutline,
  videocamOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import {
  environment
} from "./chunk-LEH7FWY4.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  FormsModule,
  HttpClient,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
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

// src/app/pages/mis-habilidades/mis-habilidades.page.ts
var _c0 = () => [0, 0.45, 0.65, 0.85];
function MisHabilidadesPage_div_14_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_14_button_6_Template_button_click_0_listener() {
      const coach_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCoachTab(coach_r4.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coach_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedCoachId === coach_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", coach_r4.nombre, " ");
  }
}
function MisHabilidadesPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2, "ENTRENADOR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "button", 27);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCoachTab("all"));
    });
    \u0275\u0275text(5, " Todos ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MisHabilidadesPage_div_14_button_6_Template, 2, 3, "button", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.selectedCoachId === "all");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.coaches);
  }
}
function MisHabilidadesPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "span", 32);
    \u0275\u0275text(4, "T\xE9c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31)(9, "span", 32);
    \u0275\u0275text(10, "T\xE1c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 33);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 31)(15, "span", 32);
    \u0275\u0275text(16, "F\xEDs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 33);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 31)(21, "span", 32);
    \u0275\u0275text(22, "Men");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 33);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "span", 32);
    \u0275\u0275text(28, "SCORE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 33);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, ctx_r1.avgTecnico, "1.1-1"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 8, ctx_r1.avgTactico, "1.1-1"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 11, ctx_r1.avgFisico, "1.1-1"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 14, ctx_r1.avgMental, "1.1-1"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 17, ctx_r1.finalScore, "1.1-1"));
  }
}
function MisHabilidadesPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "ion-segment", 36);
    \u0275\u0275twoWayListener("ngModelChange", function MisHabilidadesPage_div_24_Template_ion_segment_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedGraphTab, $event) || (ctx_r1.selectedGraphTab = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function MisHabilidadesPage_div_24_Template_ion_segment_ionChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.segmentGraphChanged($event));
    });
    \u0275\u0275elementStart(2, "ion-segment-button", 37)(3, "ion-label");
    \u0275\u0275text(4, "Resumen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-segment-button", 38)(6, "ion-label");
    \u0275\u0275text(7, "T\xE9cnico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-segment-button", 39)(9, "ion-label");
    \u0275\u0275text(10, "T\xE1ctico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-segment-button", 40)(12, "ion-label");
    \u0275\u0275text(13, "F\xEDsico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-segment-button", 41)(15, "ion-label");
    \u0275\u0275text(16, "Mental");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedGraphTab);
  }
}
function MisHabilidadesPage_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3", 45);
    \u0275\u0275text(2, "Resumen General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "canvas", 47);
    \u0275\u0275elementEnd()();
  }
}
function MisHabilidadesPage_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3", 45);
    \u0275\u0275text(2, "T\xE9cnico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "canvas", 48);
    \u0275\u0275elementEnd()();
  }
}
function MisHabilidadesPage_div_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3", 45);
    \u0275\u0275text(2, "T\xE1ctico (Parte 1)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "canvas", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 50);
    \u0275\u0275text(6, "T\xE1ctico (Parte 2)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 46);
    \u0275\u0275element(8, "canvas", 51);
    \u0275\u0275elementEnd()();
  }
}
function MisHabilidadesPage_div_25_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3", 45);
    \u0275\u0275text(2, "F\xEDsico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "canvas", 52);
    \u0275\u0275elementEnd()();
  }
}
function MisHabilidadesPage_div_25_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3", 45);
    \u0275\u0275text(2, "Mental");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "canvas", 53);
    \u0275\u0275elementEnd()();
  }
}
function MisHabilidadesPage_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, MisHabilidadesPage_div_25_div_1_Template, 5, 0, "div", 43)(2, MisHabilidadesPage_div_25_div_2_Template, 5, 0, "div", 43)(3, MisHabilidadesPage_div_25_div_3_Template, 9, 0, "div", 43)(4, MisHabilidadesPage_div_25_div_4_Template, 5, 0, "div", 43)(5, MisHabilidadesPage_div_25_div_5_Template, 5, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGraphTab === "resumen");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGraphTab === "tecnico");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGraphTab === "tactico");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGraphTab === "fisico");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGraphTab === "mental");
  }
}
function MisHabilidadesPage_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "ion-segment", 61);
    \u0275\u0275twoWayListener("ngModelChange", function MisHabilidadesPage_div_26_div_1_Template_ion_segment_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedVideoTab, $event) || (ctx_r1.selectedVideoTab = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function MisHabilidadesPage_div_26_div_1_Template_ion_segment_ionChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.segmentVideoChanged($event));
    });
    \u0275\u0275elementStart(2, "ion-segment-button", 62)(3, "ion-label");
    \u0275\u0275text(4, "Clases");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-segment-button", 63)(6, "ion-label");
    \u0275\u0275text(7, "Personales");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedVideoTab);
  }
}
function MisHabilidadesPage_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "button", 65);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_26_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.subirVideoCoach());
    });
    \u0275\u0275element(2, "ion-icon", 66);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "SUBIR VIDEO DEL ALUMNO");
    \u0275\u0275elementEnd()()();
  }
}
function MisHabilidadesPage_div_26_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "button", 65);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_26_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.subirVideoPersonal());
    });
    \u0275\u0275element(2, "ion-icon", 67);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "SUBIR VIDEO PERSONAL");
    \u0275\u0275elementEnd()()();
  }
}
function MisHabilidadesPage_div_26_div_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_26_div_4_button_2_Template_button_click_0_listener() {
      const cat_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setCategory(cat_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.activeCategory === cat_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r10, " ");
  }
}
function MisHabilidadesPage_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275template(2, MisHabilidadesPage_div_26_div_4_button_2_Template, 2, 3, "button", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.availableCategories);
  }
}
function MisHabilidadesPage_div_26_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "ion-icon", 73);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Sin videos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEntrenadorView ? "A\xFAn no has subido clips de entrenamiento para este alumno." : ctx_r1.selectedVideoTab === "clases" ? "Tu entrenador a\xFAn no ha subido clips de tus sesiones." : "A\xFAn no has subido videos personales para an\xE1lisis.");
  }
}
function MisHabilidadesPage_div_26_div_6_div_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vid_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vid_r12.comentario);
  }
}
function MisHabilidadesPage_div_26_div_6_div_1_button_16_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 94);
  }
}
function MisHabilidadesPage_div_26_div_6_div_1_button_16_ion_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 95);
  }
}
function MisHabilidadesPage_div_26_div_6_div_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_26_div_6_div_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const vid_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.analizarVideo(vid_r12));
    });
    \u0275\u0275template(1, MisHabilidadesPage_div_26_div_6_div_1_button_16_ion_icon_1_Template, 1, 0, "ion-icon", 92)(2, MisHabilidadesPage_div_26_div_6_div_1_button_16_ion_spinner_2_Template, 1, 0, "ion-spinner", 93);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vid_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isAnalyzing[vid_r12.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAnalyzing[vid_r12.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAnalyzing[vid_r12.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isAnalyzing[vid_r12.id] ? "ANALIZANDO..." : "ANALIZAR CON GEMINI AI");
  }
}
function MisHabilidadesPage_div_26_div_6_div_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_26_div_6_div_1_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const vid_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.verReporte(vid_r12));
    });
    \u0275\u0275element(1, "ion-icon", 97);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "VER REPORTE AI");
    \u0275\u0275elementEnd()();
  }
}
function MisHabilidadesPage_div_26_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 76);
    \u0275\u0275element(2, "video", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78)(4, "div", 79)(5, "span", 80);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 81);
    \u0275\u0275text(8, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 82);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h4", 83);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MisHabilidadesPage_div_26_div_6_div_1_p_14_Template, 2, 1, "p", 84);
    \u0275\u0275elementStart(15, "div", 85);
    \u0275\u0275template(16, MisHabilidadesPage_div_26_div_6_div_1_button_16_Template, 5, 4, "button", 86)(17, MisHabilidadesPage_div_26_div_6_div_1_button_17_Template, 4, 0, "button", 87);
    \u0275\u0275elementStart(18, "button", 88);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_26_div_6_div_1_Template_button_click_18_listener() {
      const vid_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmarEliminarVideo(vid_r12));
    });
    \u0275\u0275element(19, "ion-icon", 89);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vid_r12 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("nike-card video-card animate-pop delay-", i_r15 % 4 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", vid_r12.video_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vid_r12.categoria);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 10, vid_r12.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vid_r12.titulo || "Clip de Entrenamiento");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vid_r12.comentario);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.aiResults[vid_r12.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.aiResults[vid_r12.id]);
  }
}
function MisHabilidadesPage_div_26_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275template(1, MisHabilidadesPage_div_26_div_6_div_1_Template, 20, 13, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredVideos);
  }
}
function MisHabilidadesPage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, MisHabilidadesPage_div_26_div_1_Template, 8, 1, "div", 55)(2, MisHabilidadesPage_div_26_div_2_Template, 5, 0, "div", 56)(3, MisHabilidadesPage_div_26_div_3_Template, 5, 0, "div", 56)(4, MisHabilidadesPage_div_26_div_4_Template, 3, 1, "div", 57)(5, MisHabilidadesPage_div_26_div_5_Template, 6, 1, "div", 58)(6, MisHabilidadesPage_div_26_div_6_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEntrenadorView);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEntrenadorView);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEntrenadorView && ctx_r1.selectedVideoTab === "personales");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.availableCategories.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredVideos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredVideos.length > 0);
  }
}
function MisHabilidadesPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99);
    \u0275\u0275element(2, "ion-icon", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sin Datos A\xFAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Realiza tu primera evaluaci\xF3n para ver tu mapa de habilidades.");
    \u0275\u0275elementEnd()();
  }
}
function MisHabilidadesPage_div_29_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 120);
    \u0275\u0275element(7, "div", 121);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metric_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", metric_r17.value, "/10");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", metric_r17.value * 10, "%");
  }
}
function MisHabilidadesPage_div_29_div_24_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tip_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tip_r18);
  }
}
function MisHabilidadesPage_div_29_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "h4");
    \u0275\u0275text(2, "CONSEJOS PRO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275template(4, MisHabilidadesPage_div_29_div_24_li_4_Template, 2, 1, "li", 123);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.aiActiveResult.tips);
  }
}
function MisHabilidadesPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 103);
    \u0275\u0275element(3, "ion-icon", 97);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "An\xE1lisis de T\xE9cnica");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-button", 104);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_29_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.aiActiveResult = null);
    });
    \u0275\u0275element(7, "ion-icon", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 106)(9, "div", 107);
    \u0275\u0275text(10, "GEMINI 1.5 PRO VISION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 108)(12, "div", 109)(13, "span", 110);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 111);
    \u0275\u0275text(16, "/10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 112);
    \u0275\u0275text(18, "PUNTUACI\xD3N T\xC9CNICA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 113)(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 114);
    \u0275\u0275template(23, MisHabilidadesPage_div_29_div_23_Template, 8, 4, "div", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, MisHabilidadesPage_div_29_div_24_Template, 5, 1, "div", 116);
    \u0275\u0275elementStart(25, "ion-button", 117);
    \u0275\u0275listener("click", function MisHabilidadesPage_div_29_Template_ion_button_click_25_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.aiActiveResult = null);
    });
    \u0275\u0275text(26, " ENTENDIDO ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.aiActiveResult.score);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.aiActiveResult.feedback);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.aiActiveResult.metrics);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.aiActiveResult.tips && ctx_r1.aiActiveResult.tips.length > 0);
  }
}
function MisHabilidadesPage_ng_template_34_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136)(2, "span", 137);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 138);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 139)(7, "div", 140);
    \u0275\u0275element(8, "div", 141);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r20.value, "/10");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getScoreClass(m_r20.value));
    \u0275\u0275styleProp("width", m_r20.value * 10, "%");
  }
}
function MisHabilidadesPage_ng_template_34_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 126);
    \u0275\u0275element(2, "div", 127);
    \u0275\u0275elementStart(3, "h3", 128);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "An\xE1lisis de Rendimiento T\xE9cnica");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 129)(8, "div", 130);
    \u0275\u0275text(9, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 131)(11, "h4");
    \u0275\u0275text(12, "Feedback del Coach");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 132);
    \u0275\u0275template(16, MisHabilidadesPage_ng_template_34_div_0_div_16_Template, 9, 6, "div", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-button", 134);
    \u0275\u0275listener("click", function MisHabilidadesPage_ng_template_34_div_0_Template_ion_button_click_17_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isStrokeModalOpen = false);
    });
    \u0275\u0275text(18, " ENTENDIDO ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.activeStroke.name);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.activeStroke.comentario || "Sigue practicando para recibir feedback espec\xEDfico.");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.activeStroke.metrics);
  }
}
function MisHabilidadesPage_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MisHabilidadesPage_ng_template_34_div_0_Template, 19, 3, "div", 124);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.activeStroke);
  }
}
Chart.register(...registerables);
var _MisHabilidadesPage = class _MisHabilidadesPage {
  constructor(evaluacionService, mysqlService, router, route, cdr, alertCtrl, loadingCtrl, http) {
    this.evaluacionService = evaluacionService;
    this.mysqlService = mysqlService;
    this.router = router;
    this.route = route;
    this.cdr = cdr;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.http = http;
    this.hasData = false;
    this.isLoading = true;
    this.jugadorFoto = null;
    this.jugadorNombre = "";
    this.userId = null;
    this.avgTecnico = 0;
    this.avgTactico = 0;
    this.avgFisico = 0;
    this.avgMental = 0;
    this.finalScore = 0;
    this.selectedTab = "radar";
    this.selectedGraphTab = "resumen";
    this.storedLineLabels = [];
    this.storedLineData = [];
    this.storedRadarLabels = [];
    this.storedRadarData = [];
    this.tacticoData = [];
    this.tacticoLabels1 = [];
    this.tacticoData1 = [];
    this.tacticoLabels2 = [];
    this.tacticoData2 = [];
    this.fisicoLabels = [];
    this.fisicoData = [];
    this.mentalLabels = [];
    this.mentalData = [];
    this.detailedScores = null;
    this.videos = [];
    this.aiResults = {};
    this.aiActiveResult = null;
    this.isAnalyzing = {};
    this.isEntrenadorView = false;
    this.entrenadorId = null;
    this.coaches = [];
    this.selectedCoachId = "all";
    this.selectedVideoTab = "clases";
    this.activeCategory = "Todos";
    this.availableCategories = ["Todos"];
    this.isStrokeModalOpen = false;
    this.activeStroke = null;
    addIcons({ arrowBackOutline, analyticsOutline, chevronBackOutline, informationCircleOutline, sparklesOutline, sparkles, videocamOutline, close, "cloud-upload-outline": cloudUploadOutline, "videocam-off-outline": videocamOffOutline, "trash-outline": trashOutline, trash });
  }
  verDetallePremium(golpe) {
    const detail = this.detailedScores[golpe];
    if (!detail)
      return;
    this.activeStroke = {
      name: golpe,
      comentario: detail.comentario,
      metrics: [
        { name: "T\xE9cnica", value: detail.tecnica || 0 },
        { name: "Control", value: detail.control || 0 },
        { name: "Direcci\xF3n", value: detail.direccion || 0 },
        { name: "Decisi\xF3n", value: detail.decision || 0 }
      ]
    };
    this.isStrokeModalOpen = true;
  }
  getScoreClass(val) {
    if (val >= 8)
      return "score-high";
    if (val >= 5)
      return "score-mid";
    return "score-low";
  }
  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get("id");
    if (routeId) {
      this.userId = Number(routeId);
      this.isEntrenadorView = true;
      this.entrenadorId = Number(localStorage.getItem("userId"));
      this.jugadorNombre = "Cargando...";
      this.selectedVideoTab = "clases";
    } else {
      this.userId = Number(localStorage.getItem("userId"));
      this.isEntrenadorView = false;
      this.jugadorNombre = "...";
      this.jugadorFoto = "";
    }
  }
  ionViewWillEnter() {
    if (this.userId) {
      this.handleRefresh(null);
    } else {
      console.warn("No User ID found");
      this.isLoading = false;
    }
  }
  handleRefresh(event) {
    if (this.userId) {
      this.loadUserProfile();
      this.loadEvaluaciones(this.entrenadorId || void 0, event);
      this.loadVideos(this.entrenadorId || void 0);
    }
  }
  loadUserProfile() {
    this.mysqlService.getPerfil(this.userId).subscribe({
      next: (res) => {
        if (res) {
          console.log("Profile Data received:", res);
          const userData = res.user || res;
          console.log("User Data:", userData);
          this.jugadorNombre = userData.nombre || "Jugador";
          let foto = userData.foto_perfil || userData.link_foto;
          if (foto && typeof foto === "string" && foto.trim().length > 0 && !foto.includes("imagen_defecto")) {
            if (!foto.startsWith("http")) {
              const cleanPath = foto.startsWith("/") ? foto.substring(1) : foto;
              this.jugadorFoto = `${environment.apiUrl.replace("/api_training_dev", "")}/${cleanPath}`;
            } else {
              this.jugadorFoto = foto;
            }
          } else {
            console.warn("Invalid photo path or default found:", foto);
            this.jugadorFoto = "assets/avatar.png";
          }
          console.log("Final Jugador Foto:", this.jugadorFoto);
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.error("Error loading profile:", err)
    });
  }
  loadEvaluaciones(entrenadorId, event) {
    console.log("Loading evaluaciones for user:", this.userId, "filtered by coach:", entrenadorId);
    this.evaluacionService.getEvaluaciones(this.userId, entrenadorId).subscribe({
      next: (data) => {
        console.log("Evaluaciones received:", data);
        if (!entrenadorId && data && data.length > 0) {
          this.extractCoaches(data);
        }
        if (data && data.length > 0) {
          const sorted = data.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
          this.storedLineLabels = sorted.map((e) => {
            const d = new Date(e.fecha);
            return `${d.getDate()}/${d.getMonth() + 1}`;
          });
          this.storedLineData = sorted.map((e) => Number(e.promedio_general || 0));
          const latest = sorted[sorted.length - 1];
          let scores = latest.scores;
          if (typeof scores === "string") {
            try {
              scores = JSON.parse(scores);
            } catch (e) {
              console.error("Error parsing scores JSON:", e);
              scores = {};
            }
          }
          if (scores && Object.keys(scores).length > 0) {
            this.detailedScores = scores;
            const tecnico = scores.tecnico || scores;
            const tactico = scores.tactico || {};
            const fisico = scores.fisico || {};
            const mental = scores.mental || {};
            this.storedRadarLabels = Object.keys(tecnico);
            this.storedRadarData = this.storedRadarLabels.map((key) => {
              const s = tecnico[key];
              if (s && typeof s === "object") {
                return (Number(s.tecnica || 0) + Number(s.control || 0) + Number(s.direccion || 0) + Number(s.decision || 0)) / 4;
              }
              return Number(s || 0);
            });
            const avg = (arr) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
            this.avgTecnico = avg(this.storedRadarData.filter((v) => v > 0)) || 0;
            const tacticoKeys = Object.keys(tactico);
            let rawTacticoLabels = Object.keys(tactico);
            if (rawTacticoLabels.length === 0) {
              rawTacticoLabels = [
                "Posicionamiento fondo",
                "Posicionamiento red",
                "Decisiones fondo",
                "Decisiones red",
                "Golpes a\xE9reos",
                "Intenciones fondo",
                "Intenciones red",
                "Globo vs Abajo",
                "Volea Bloqueo vs Plana",
                "Volea Plana vs Cortada",
                "Botar globo vs Remate Def",
                "Remate Def vs Bandeja/Vibora",
                "Remate Def vs Ofensivo",
                "Bajada Pared vs Globo"
              ];
            }
            if (rawTacticoLabels.length > 5) {
              const half = Math.ceil(rawTacticoLabels.length / 2);
              this.tacticoLabels1 = rawTacticoLabels.slice(0, half);
              this.tacticoData1 = this.tacticoLabels1.map((k) => typeof tactico[k] === "object" ? Number(tactico[k]?.valor || 0) : Number(tactico[k] || 0));
              this.tacticoLabels2 = rawTacticoLabels.slice(half);
              this.tacticoData2 = this.tacticoLabels2.map((k) => typeof tactico[k] === "object" ? Number(tactico[k]?.valor || 0) : Number(tactico[k] || 0));
            } else {
              this.tacticoLabels1 = rawTacticoLabels;
              this.tacticoData1 = rawTacticoLabels.map((k) => typeof tactico[k] === "object" ? Number(tactico[k]?.valor || 0) : Number(tactico[k] || 0));
              this.tacticoLabels2 = [];
              this.tacticoData2 = [];
            }
            this.tacticoData = rawTacticoLabels.map((k) => typeof tactico[k] === "object" ? Number(tactico[k]?.valor || 0) : Number(tactico[k] || 0));
            this.avgTactico = avg(this.tacticoData.filter((v) => v > 0)) || 0;
            const fisicoKeys = Object.keys(fisico);
            if (fisicoKeys.length > 0) {
              this.fisicoLabels = fisicoKeys;
              this.fisicoData = this.fisicoLabels.map((k) => Number(fisico[k].valor || 0));
            } else {
              this.fisicoLabels = ["Fuerza", "Velocidad", "Resistencia", "Movilidad"];
              this.fisicoData = [0, 0, 0, 0];
            }
            this.avgFisico = avg(this.fisicoData.filter((v) => v > 0)) || 0;
            const mentalKeys = Object.keys(mental);
            if (mentalKeys.length > 0) {
              this.mentalLabels = mentalKeys;
              this.mentalData = this.mentalLabels.map((k) => Number(mental[k].valor || 0));
            } else {
              this.mentalLabels = ["Concentraci\xF3n", "Actitud", "Confianza", "Resiliencia"];
              this.mentalData = [0, 0, 0, 0];
            }
            this.avgMental = avg(this.mentalData.filter((v) => v > 0)) || 0;
            const activeCategories = [this.avgTecnico, this.avgTactico, this.avgFisico, this.avgMental].filter((v) => v > 0);
            this.finalScore = activeCategories.length > 0 ? activeCategories.reduce((a, b) => a + b, 0) / activeCategories.length : 0;
            this.hasData = true;
            this.cdr.detectChanges();
            setTimeout(() => this.renderCurrentTab(), 100);
          } else {
            console.warn("Latest evaluation has no valid scores object/string");
            this.hasData = false;
          }
        } else {
          this.hasData = false;
        }
        this.isLoading = false;
        if (event)
          event.target.complete();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading evaluaciones:", err);
        this.isLoading = false;
        if (event)
          event.target.complete();
        this.cdr.detectChanges();
      }
    });
  }
  extractCoaches(evaluaciones) {
    const coachMap = /* @__PURE__ */ new Map();
    evaluaciones.forEach((e) => {
      if (e.entrenador_id && e.entrenador) {
        coachMap.set(Number(e.entrenador_id), e.entrenador);
      }
    });
    this.coaches = Array.from(coachMap.entries()).map(([id, nombre]) => ({ id, nombre }));
  }
  onCoachChange(ev) {
    this.selectedCoachId = ev.detail?.value ?? ev;
    const filterId = this.selectedCoachId === "all" ? void 0 : Number(this.selectedCoachId);
    this.isLoading = true;
    this.hasData = false;
    this.loadEvaluaciones(filterId);
    this.loadVideos(filterId);
  }
  selectCoachTab(id) {
    this.selectedCoachId = id;
    const filterId = id === "all" ? void 0 : Number(id);
    this.isLoading = true;
    this.hasData = false;
    this.loadEvaluaciones(filterId);
    this.loadVideos(filterId);
  }
  segmentChanged(ev) {
    this.selectedTab = ev.detail.value;
    this.cdr.detectChanges();
    setTimeout(() => this.renderCurrentTab(), 100);
  }
  segmentGraphChanged(event) {
    this.selectedGraphTab = event.detail.value;
    this.cdr.detectChanges();
    setTimeout(() => this.renderCurrentTab(), 100);
  }
  renderCurrentTab() {
    if (!this.hasData)
      return;
    console.log("Rendering tab:", this.selectedTab);
    const attemptRender = (retries = 3) => {
      if (this.selectedTab === "radar") {
        const canvasId = this.selectedGraphTab === "tactico" ? "tacticoRadarChart1" : this.selectedGraphTab + "RadarChart";
        const canvas = document.getElementById(canvasId);
        if (!canvas) {
          if (retries > 0) {
            setTimeout(() => attemptRender(retries - 1), 100);
          }
          return;
        }
        if (this.selectedGraphTab === "resumen") {
          const resumenLabels = ["T\xE9cnico", "T\xE1ctico", "F\xEDsico", "Mental"];
          const resumenData = [this.avgTecnico, this.avgTactico, this.avgFisico, this.avgMental];
          this.resumenChart = this.renderRadarChart("resumenRadarChart", this.resumenChart, resumenLabels, resumenData, "#ccff00");
        } else if (this.selectedGraphTab === "tecnico" && this.storedRadarLabels.length) {
          this.tecnicoChart = this.renderRadarChart("tecnicoRadarChart", this.tecnicoChart, this.storedRadarLabels, this.storedRadarData, "#ccff00");
        } else if (this.selectedGraphTab === "tactico" && (this.tacticoLabels1.length || this.tacticoLabels2.length)) {
          this.tacticoChart1 = this.renderRadarChart("tacticoRadarChart1", this.tacticoChart1, this.tacticoLabels1, this.tacticoData1, "#00e0ff");
          setTimeout(() => {
            this.tacticoChart2 = this.renderRadarChart("tacticoRadarChart2", this.tacticoChart2, this.tacticoLabels2, this.tacticoData2, "#00e0ff");
          }, 50);
        } else if (this.selectedGraphTab === "fisico" && this.fisicoLabels.length) {
          this.fisicoChart = this.renderRadarChart("fisicoRadarChart", this.fisicoChart, this.fisicoLabels, this.fisicoData, "#ff3366");
        } else if (this.selectedGraphTab === "mental" && this.mentalLabels.length) {
          this.mentalChart = this.renderRadarChart("mentalRadarChart", this.mentalChart, this.mentalLabels, this.mentalData, "#ffaa00");
        }
      }
    };
    attemptRender();
  }
  formatRadarLabels(labels) {
    return labels.map((label) => {
      if (label.length > 15 && label.includes(" ")) {
        const words = label.split(" ");
        const mid = Math.ceil(words.length / 2);
        return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
      }
      return label;
    });
  }
  renderRadarChart(canvasId, chartInstance, labels, data, color) {
    const ctx = document.getElementById(canvasId);
    if (!ctx)
      return chartInstance;
    if (chartInstance)
      chartInstance.destroy();
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const rgba = `rgba(${r}, ${g}, ${b}, 0.2)`;
    const formattedLabels = this.formatRadarLabels(labels);
    return new Chart(ctx, {
      type: "radar",
      data: {
        labels: formattedLabels,
        datasets: [{
          label: "Puntuaci\xF3n",
          data,
          fill: true,
          backgroundColor: rgba,
          borderColor: color,
          borderWidth: 3,
          pointBackgroundColor: "#111",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: color,
          pointRadius: 5
        }]
      },
      options: {
        layout: { padding: 25 },
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: { borderWidth: 3 }
        },
        scales: {
          r: {
            angleLines: { color: "#eee" },
            // Light Grey
            grid: { color: "#f0f0f0" },
            // Light Grey
            suggestedMin: 0,
            suggestedMax: 10,
            pointLabels: {
              font: { size: 10, weight: "bold", family: "'Inter', sans-serif" },
              color: "#444",
              // Dark Text
              padding: 8
            },
            ticks: {
              backdropColor: "transparent",
              display: false
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
  get filteredVideos() {
    return this.videos.filter((v) => {
      let matchType = false;
      if (this.isEntrenadorView) {
        matchType = !v.tipo || v.tipo === "clase";
      } else {
        if (this.selectedVideoTab === "clases") {
          matchType = !v.tipo || v.tipo === "clase";
        } else {
          matchType = v.tipo === "personal";
        }
      }
      if (!matchType)
        return false;
      if (this.activeCategory === "Todos")
        return true;
      return v.categoria === this.activeCategory;
    });
  }
  setCategory(cat) {
    this.activeCategory = cat;
  }
  segmentVideoChanged(event) {
    this.selectedVideoTab = event.detail.value;
  }
  subirVideoPersonal() {
    return __async(this, null, function* () {
      const categories = [
        "General",
        "Derecha",
        "Reves",
        "Volea de Derecha",
        "Volea de Reves",
        "Bandeja",
        "Vibora",
        "Rulo",
        "Remate",
        "Salida de Pared",
        "Globo",
        "Saque",
        "Resto"
      ];
      const catAlert = yield this.alertCtrl.create({
        header: "\xBFQu\xE9 golpe es?",
        inputs: categories.map((cat) => ({
          type: "radio",
          label: cat,
          value: cat,
          checked: cat === "General"
        })),
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Siguiente",
            handler: (categoria) => {
              this.pedirDetallesVideo(categoria, "personal");
            }
          }
        ],
        cssClass: "nike-alert"
      });
      yield catAlert.present();
    });
  }
  subirVideoCoach() {
    return __async(this, null, function* () {
      const categories = [
        "General",
        "Derecha",
        "Reves",
        "Volea de Derecha",
        "Volea de Reves",
        "Bandeja",
        "Vibora",
        "Rulo",
        "Remate",
        "Salida de Pared",
        "Globo",
        "Saque",
        "Resto"
      ];
      const catAlert = yield this.alertCtrl.create({
        header: "Categor\xEDa / Golpe",
        subHeader: "Selecciona el golpe del alumno",
        inputs: categories.map((cat) => ({
          type: "radio",
          label: cat,
          value: cat,
          checked: cat === "General"
        })),
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Siguiente",
            handler: (categoria) => {
              this.pedirDetallesVideo(categoria, "clase");
            }
          }
        ],
        cssClass: "nike-alert"
      });
      yield catAlert.present();
    });
  }
  pedirDetallesVideo(categoria, tipo) {
    return __async(this, null, function* () {
      const alert2 = yield this.alertCtrl.create({
        header: tipo === "personal" ? "Subir Video Personal" : "Subir Video de Clase",
        subHeader: `Categor\xEDa: ${categoria}`,
        inputs: [
          {
            name: "titulo",
            type: "text",
            placeholder: "Ej: Pr\xE1ctica de Slide",
            label: "T\xEDtulo"
          },
          {
            name: "comentario",
            type: "textarea",
            placeholder: "Comentarios adicionales...",
            label: "Comentario"
          }
        ],
        buttons: [
          { text: "Atr\xE1s", role: "cancel" },
          {
            text: "Seleccionar Archivo",
            handler: (data) => {
              if (!data.titulo && tipo === "personal") {
                alert2.message = "El t\xEDtulo es obligatorio";
                return false;
              }
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "video/*";
              input.onchange = (e) => {
                if (tipo === "personal") {
                  this.onPersonalVideoSelected(e, data.titulo, categoria, data.comentario);
                } else {
                  this.onCoachVideoSelected(e, data.titulo, categoria, data.comentario);
                }
              };
              input.click();
              return true;
            }
          }
        ],
        cssClass: "nike-alert"
      });
      yield alert2.present();
    });
  }
  onPersonalVideoSelected(event, titulo, categoria, comentario) {
    return __async(this, null, function* () {
      const file = event.target.files[0];
      if (!file)
        return;
      if (!this.userId) {
        alert("Error: No se pudo identificar al usuario. Por favor, re-inicia sesi\xF3n.");
        return;
      }
      const loading = yield this.loadingCtrl.create({
        message: "Subiendo video personal...",
        spinner: "dots",
        mode: "ios"
      });
      yield loading.present();
      const formData = new FormData();
      formData.append("video", file);
      formData.append("jugador_id", this.userId.toString());
      formData.append("tipo", "personal");
      formData.append("categoria", categoria);
      formData.append("titulo", titulo);
      formData.append("comentario", comentario || "");
      this.evaluacionService.uploadVideo(formData).subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.success) {
            this.loadVideos();
            this.selectedVideoTab = "personales";
          }
        },
        error: (err) => {
          loading.dismiss();
          console.error(err);
          const msg = err.error?.error || "Error al conectar con el servidor";
          alert("Error al subir video: " + msg);
        }
      });
    });
  }
  onCoachVideoSelected(event, titulo, categoria, comentario) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      if (file.size > 20 * 1024 * 1024) {
        alert("\u274C El video supera los 20MB permitidos.");
        return;
      }
      const loading = yield this.loadingCtrl.create({
        message: "Subiendo video...",
        spinner: "dots",
        mode: "ios"
      });
      yield loading.present();
      const formData = new FormData();
      formData.append("video", file);
      formData.append("jugador_id", this.userId.toString());
      formData.append("entrenador_id", this.entrenadorId.toString());
      formData.append("tipo", "clase");
      formData.append("categoria", categoria);
      formData.append("titulo", titulo || "Video de entrenamiento");
      formData.append("comentario", comentario || "");
      this.evaluacionService.uploadVideo(formData).subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.success) {
            this.loadVideos();
          }
        },
        error: (err) => {
          loading.dismiss();
          alert("Error al subir video: " + (err.error?.error || "Error de conexi\xF3n"));
        }
      });
    });
  }
  loadVideos(entrenadorId) {
    if (!this.userId)
      return;
    this.evaluacionService.getVideos(this.userId, entrenadorId).subscribe({
      next: (vids) => {
        console.log("VIDEOS FROM API:", vids);
        this.videos = (vids || []).map((v) => {
          let url = v.video_url || "";
          if (url && !url.startsWith("http")) {
            const cleanPath = url.startsWith("/") ? url.substring(1) : url;
            url = `${environment.apiUrl.replace("/api_training_dev", "")}/${cleanPath}`;
          }
          if (v.ai_report) {
            try {
              const parsed = typeof v.ai_report === "string" ? JSON.parse(v.ai_report) : v.ai_report;
              this.aiResults[v.id] = parsed;
            } catch (e) {
              console.error("Error parsing backend ai_report", e);
            }
          } else {
            const saved = localStorage.getItem(`ai_report_${v.id}`);
            if (saved)
              this.aiResults[v.id] = JSON.parse(saved);
          }
          return __spreadProps(__spreadValues({}, v), { video_url: url });
        });
        console.log("Final Processed Videos:", this.videos);
        const catsSet = /* @__PURE__ */ new Set();
        catsSet.add("Todos");
        this.videos.forEach((v) => {
          if (v.categoria)
            catsSet.add(v.categoria);
        });
        this.availableCategories = Array.from(catsSet);
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Error loading videos:", err)
    });
  }
  analizarVideo(vid) {
    return __async(this, null, function* () {
      this.isAnalyzing[vid.id] = true;
      this.cdr.detectChanges();
      const loading = yield this.loadingCtrl.create({
        message: "Gemini analizando t\xE9cnica (esto puede tardar 1 min)...",
        spinner: "dots",
        mode: "ios",
        cssClass: "ai-loading-custom"
      });
      yield loading.present();
      const formData = new FormData();
      formData.append("video_id", vid.id);
      formData.append("video_url", vid.video_url);
      this.http.post(`${environment.apiUrl}/ia/gemini_analyze.php`, formData).subscribe({
        next: (res) => {
          this.isAnalyzing[vid.id] = false;
          loading.dismiss();
          if (res.success) {
            this.aiResults[vid.id] = res.analysis;
            localStorage.setItem(`ai_report_${vid.id}`, JSON.stringify(res.analysis));
            this.cdr.detectChanges();
          } else {
            alert("Error: " + (res.error || "Intente nuevamente"));
          }
        },
        error: (err) => {
          this.isAnalyzing[vid.id] = false;
          loading.dismiss();
          console.error("AI Analysis Error:", err);
          alert("Error de conexi\xF3n con el servidor de IA.");
        }
      });
    });
  }
  verReporte(vid) {
    this.aiActiveResult = this.aiResults[vid.id];
  }
  goBack() {
    if (this.route.snapshot.paramMap.get("id")) {
      this.router.navigate(["/alumnos"]);
    } else {
      this.router.navigate(["/jugador-home"]);
    }
  }
  confirmarEliminarVideo(vid) {
    return __async(this, null, function* () {
      const alert2 = yield this.alertCtrl.create({
        header: "Eliminar Video",
        message: "\xBFEst\xE1s seguro de que deseas eliminar este video permanentemente?",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Eliminar",
            role: "destructive",
            handler: () => {
              this.ejecutarEliminarVideo(vid.id);
            }
          }
        ],
        cssClass: "nike-alert"
      });
      yield alert2.present();
    });
  }
  ejecutarEliminarVideo(videoId) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: "Eliminando video...",
        spinner: "dots",
        mode: "ios"
      });
      yield loading.present();
      this.evaluacionService.deleteVideo(videoId).subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.success) {
            this.videos = this.videos.filter((v) => v.id !== videoId);
            this.cdr.detectChanges();
          } else {
            alert("Error: " + (res.error || "No se pudo eliminar"));
          }
        },
        error: (err) => {
          loading.dismiss();
          console.error("Delete error:", err);
          alert("Error de conexi\xF3n al eliminar");
        }
      });
    });
  }
};
_MisHabilidadesPage.\u0275fac = function MisHabilidadesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MisHabilidadesPage)(\u0275\u0275directiveInject(EvaluacionService), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(HttpClient));
};
_MisHabilidadesPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisHabilidadesPage, selectors: [["app-mis-habilidades"]], decls: 35, vars: 15, consts: [["slot", "fixed", 3, "ionRefresh"], [1, "header-v2", "animate-fade"], [1, "h-text"], [1, "h-title-row"], [1, "h-actions"], [1, "h-avatar"], ["alt", "Avatar", 3, "src"], [1, "dashboard-container"], ["class", "coach-tabs-container animate-up", 4, "ngIf"], [1, "segment-container"], ["mode", "ios", 3, "ionChange", "value"], ["value", "radar"], ["value", "videos"], ["class", "performance-scoreboard animate-up", 4, "ngIf"], ["class", "video-segment-container animate-up delay-1", 4, "ngIf"], ["class", "radars-grid animate-up delay-1", 4, "ngIf"], ["class", "videos-view animate-up", 4, "ngIf"], ["class", "no-data animate-up", 4, "ngIf"], [1, "ai-results-overlay"], ["class", "ai-results-card", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], ["initialBreakpoint", "0.65", "handleBehavior", "cycle", "cssClass", "bottom-sheet-modal", 3, "didDismiss", "isOpen", "breakpoints"], [1, "coach-tabs-container", "animate-up"], [1, "coach-tabs-label"], [1, "coach-tabs-scroll"], [1, "coach-tab-pill", 3, "click"], ["class", "coach-tab-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "performance-scoreboard", "animate-up"], [1, "scoreboard-grid"], [1, "score-item"], [1, "label"], [1, "value"], [1, "final-score-item"], [1, "video-segment-container", "animate-up", "delay-1"], ["mode", "md", "scrollable", "true", 1, "nike-sub-segment", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "resumen"], ["value", "tecnico"], ["value", "tactico"], ["value", "fisico"], ["value", "mental"], [1, "radars-grid", "animate-up", "delay-1"], ["class", "nike-card radar-section", 4, "ngIf"], [1, "nike-card", "radar-section"], [1, "card-title"], [1, "canvas-wrapper"], ["id", "resumenRadarChart"], ["id", "tecnicoRadarChart"], ["id", "tacticoRadarChart1"], [1, "card-title", "mt-4", 2, "margin-top", "30px"], ["id", "tacticoRadarChart2"], ["id", "fisicoRadarChart"], ["id", "mentalRadarChart"], [1, "videos-view", "animate-up"], ["class", "video-segment-container", 4, "ngIf"], ["class", "upload-action-container", "style", "margin-bottom: 20px;", 4, "ngIf"], ["class", "category-filters-mobile animate-up", 4, "ngIf"], ["class", "no-videos", 4, "ngIf"], ["class", "video-grid", 4, "ngIf"], [1, "video-segment-container"], ["mode", "md", 1, "nike-sub-segment", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "clases"], ["value", "personales"], [1, "upload-action-container", 2, "margin-bottom", "20px"], [1, "nike-btn-outline-black", "w-full", 3, "click"], ["name", "videocam-outline"], ["name", "cloud-upload-outline"], [1, "category-filters-mobile", "animate-up"], [1, "category-pills-scroll"], ["class", "cat-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "cat-pill", 3, "click"], [1, "no-videos"], ["name", "videocam-off-outline"], [1, "video-grid"], [3, "class", 4, "ngFor", "ngForOf"], [1, "video-wrapper"], ["controls", "", "preload", "metadata", "playsinline", "", 3, "src"], [1, "video-footer"], [1, "vid-meta"], [1, "vid-category"], [1, "vid-divider"], [1, "vid-date"], [1, "vid-title"], ["class", "vid-comment", 4, "ngIf"], [1, "ai-video-actions"], ["class", "ai-btn-analyze", 3, "disabled", "click", 4, "ngIf"], ["class", "ai-btn-report", 3, "click", 4, "ngIf"], [1, "delete-btn", 3, "click"], ["name", "trash-outline"], [1, "vid-comment"], [1, "ai-btn-analyze", 3, "click", "disabled"], ["name", "sparkles-outline", 4, "ngIf"], ["name", "crescent", 4, "ngIf"], ["name", "sparkles-outline"], ["name", "crescent"], [1, "ai-btn-report", 3, "click"], ["name", "sparkles"], [1, "no-data", "animate-up"], [1, "icon-circle"], ["name", "analytics-outline"], [1, "ai-results-card"], [1, "results-header"], [1, "header-main"], ["fill", "clear", 3, "click"], ["name", "close", "color", "light", "size", "large"], [1, "results-body"], [1, "ai-badge-header"], [1, "score-section"], [1, "score-circle"], [1, "score-val"], [1, "score-pct"], [1, "score-label"], [1, "feedback-text"], [1, "metrics-grid"], ["class", "metric-progress", 4, "ngFor", "ngForOf"], ["class", "tips-section", 4, "ngIf"], ["expand", "block", 1, "nike-btn-black", 3, "click"], [1, "metric-progress"], [1, "metric-info"], [1, "progress-bg"], [1, "progress-fill"], [1, "tips-section"], [4, "ngFor", "ngForOf"], ["class", "modal-desglose-container", 4, "ngIf"], [1, "modal-desglose-container"], [1, "modal-desglose-header"], [1, "handle"], [1, "stroke-title"], [1, "stroke-feedback-card", "animate-up"], [1, "card-icon"], [1, "card-text"], [1, "metrics-grid-premium", "animate-up", 2, "animation-delay", "0.1s"], ["class", "metric-row-modern", 4, "ngFor", "ngForOf"], ["expand", "block", 1, "nike-btn-black", 2, "margin-top", "30px", 3, "click"], [1, "metric-row-modern"], [1, "m-header"], [1, "m-label"], [1, "m-val"], [1, "m-bar-bg"], [1, "m-bar-fill"], [1, "shimmer"]], template: function MisHabilidadesPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-refresher", 0);
    \u0275\u0275listener("ionRefresh", function MisHabilidadesPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "p");
    \u0275\u0275text(6, "AN\xC1LISIS T\xC9CNICO ELITE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 3)(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 4)(11, "div", 5);
    \u0275\u0275element(12, "img", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 7);
    \u0275\u0275template(14, MisHabilidadesPage_div_14_Template, 7, 3, "div", 8);
    \u0275\u0275elementStart(15, "div", 9)(16, "ion-segment", 10);
    \u0275\u0275listener("ionChange", function MisHabilidadesPage_Template_ion_segment_ionChange_16_listener($event) {
      return ctx.segmentChanged($event);
    });
    \u0275\u0275elementStart(17, "ion-segment-button", 11)(18, "ion-label");
    \u0275\u0275text(19, "Habilidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-segment-button", 12)(21, "ion-label");
    \u0275\u0275text(22, "Videos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, MisHabilidadesPage_div_23_Template, 32, 20, "div", 13)(24, MisHabilidadesPage_div_24_Template, 17, 1, "div", 14)(25, MisHabilidadesPage_div_25_Template, 6, 5, "div", 15)(26, MisHabilidadesPage_div_26_Template, 7, 6, "div", 16)(27, MisHabilidadesPage_div_27_Template, 7, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 18);
    \u0275\u0275template(29, MisHabilidadesPage_div_29_Template, 27, 4, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-fab", 20)(31, "ion-fab-button", 21);
    \u0275\u0275listener("click", function MisHabilidadesPage_Template_ion_fab_button_click_31_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(32, "ion-icon", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "ion-modal", 23);
    \u0275\u0275listener("didDismiss", function MisHabilidadesPage_Template_ion_modal_didDismiss_33_listener() {
      return ctx.isStrokeModalOpen = false;
    });
    \u0275\u0275template(34, MisHabilidadesPage_ng_template_34_Template, 1, 1, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.jugadorNombre);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.jugadorFoto || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.isEntrenadorView && ctx.coaches.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.selectedTab);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.hasData && ctx.selectedTab === "radar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTab === "radar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTab === "radar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTab === "videos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.hasData && !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx.aiActiveResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.aiActiveResult);
    \u0275\u0275advance(4);
    \u0275\u0275property("isOpen", ctx.isStrokeModalOpen)("breakpoints", \u0275\u0275pureFunction0(14, _c0));
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
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonFab,
  IonFabButton,
  IonSpinner,
  IonRefresher,
  IonRefresherContent,
  IonModal,
  DecimalPipe,
  DatePipe
], styles: ['\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n}\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n  background: url(/assets/mod-alumnos.jpg) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike[_ngcontent-%COMP%]   .header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.8));\n  z-index: 1;\n}\n.header-content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 65px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .welcome-pre[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.header-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  left: 20px;\n  right: 20px;\n  color: white;\n  z-index: 2;\n}\n.profile-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.profile-row[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%], \n.profile-row[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n  border: 3px solid white;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.profile-row[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.profile-row[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-row[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  background: #ccff00;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 28px;\n  text-transform: uppercase;\n}\n.profile-row[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -0.5px;\n  line-height: 1;\n}\n.profile-row[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 14px;\n  opacity: 0.9;\n  font-weight: 500;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 0 20px 40px;\n  margin-top: -45px;\n  position: relative;\n  z-index: 10;\n}\n.coach-filter-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 0 10px;\n}\n.coach-filter-container[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  color: #111;\n  letter-spacing: 1px;\n  margin-bottom: 12px;\n  margin-left: 5px;\n  text-transform: uppercase;\n}\n.coach-filter-container[_ngcontent-%COMP%]   .coach-select-item[_ngcontent-%COMP%] {\n  --background: #111;\n  --border-radius: 16px;\n  --padding-start: 20px;\n  --inner-padding-end: 16px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border: 2px solid transparent;\n  --min-height: 58px;\n  position: relative;\n  overflow: hidden;\n}\n.coach-filter-container[_ngcontent-%COMP%]   .coach-select-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 16px;\n  border: 2px solid rgba(204, 255, 0, 0.3);\n  pointer-events: none;\n}\n.coach-filter-container[_ngcontent-%COMP%]   .coach-select-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ccff00;\n  font-size: 22px;\n  margin-right: 16px;\n}\n.coach-filter-container[_ngcontent-%COMP%]   .coach-select-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  font-weight: 700;\n  font-size: 15px;\n  color: #fff;\n  width: 100%;\n  letter-spacing: 0.5px;\n}\n.coach-filter-container[_ngcontent-%COMP%]   .coach-select-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon) {\n  color: #ccff00;\n  opacity: 1;\n}\n.segment-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 0 10px;\n}\n.segment-container[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  background: #ffffff;\n  --background: #ffffff;\n  border-radius: 30px;\n  padding: 4px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.segment-container[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color: #999;\n  --color-checked: #111;\n  --indicator-color: #ccff00;\n  --indicator-box-shadow: 0 2px 8px rgba(204, 255, 0, 0.4);\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n  min-height: 44px;\n  --border-radius: 24px;\n  font-size: 14px;\n}\n.performance-scoreboard[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 15px;\n  background: #111;\n  border-radius: 24px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n}\n.performance-scoreboard[_ngcontent-%COMP%]   .scoreboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr) 1.2fr;\n  gap: 8px;\n  align-items: stretch;\n}\n.performance-scoreboard[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.performance-scoreboard[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 2px;\n}\n.performance-scoreboard[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 900;\n  color: #fff;\n}\n.performance-scoreboard[_ngcontent-%COMP%]   .final-score-item[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ccff00,\n      #9eff00);\n  border-radius: 12px;\n  padding: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #000;\n  box-shadow: 0 4px 12px rgba(204, 255, 0, 0.2);\n}\n.performance-scoreboard[_ngcontent-%COMP%]   .final-score-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 950;\n  opacity: 0.7;\n  margin-bottom: 1px;\n}\n.performance-scoreboard[_ngcontent-%COMP%]   .final-score-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 950;\n}\n.nike-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);\n  margin-bottom: 20px;\n}\n.chart-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  color: #111;\n}\n.chart-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 20px;\n  font-size: 13px;\n  color: #888;\n}\n.chart-card[_ngcontent-%COMP%]   .canvas-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 350px;\n  width: 100%;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n}\n.no-data[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #f0f0f0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  color: #ccc;\n  font-size: 40px;\n}\n.no-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #444;\n  font-weight: 700;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #999;\n  font-size: 14px;\n}\n.video-segment-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  background: #f1f1f1;\n  border-radius: 12px;\n  padding: 6px;\n}\n.video-segment-container[_ngcontent-%COMP%]   .nike-sub-segment[_ngcontent-%COMP%] {\n  background: transparent;\n  --background: transparent;\n}\n.video-segment-container[_ngcontent-%COMP%]   .nike-sub-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: #fff;\n  --color: #666;\n  --color-checked: #000;\n  --border-radius: 10px;\n  min-height: 38px;\n  font-size: 11px;\n  font-weight: 700;\n  min-width: max-content;\n  max-width: none !important;\n  width: auto !important;\n  padding: 0 16px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.video-segment-container[_ngcontent-%COMP%]   .nike-sub-segment[_ngcontent-%COMP%]   ion-segment-button[value=resumen][_ngcontent-%COMP%] {\n  --color-checked: #000;\n}\n.videos-view[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n}\n.videos-view[_ngcontent-%COMP%]   .upload-action-container[_ngcontent-%COMP%]   .nike-btn-outline-black[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background: #000;\n  color: #fff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-weight: 800;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: none;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n.videos-view[_ngcontent-%COMP%]   .upload-action-container[_ngcontent-%COMP%]   .nike-btn-outline-black[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.videos-view[_ngcontent-%COMP%]   .upload-action-container[_ngcontent-%COMP%]   .nike-btn-outline-black[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.videos-view[_ngcontent-%COMP%]   .no-videos[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #888;\n}\n.videos-view[_ngcontent-%COMP%]   .no-videos[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.videos-view[_ngcontent-%COMP%]   .no-videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n  color: #111;\n}\n.videos-view[_ngcontent-%COMP%]   .no-videos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: 10px;\n}\n.video-card[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 24px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);\n}\n.video-card[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background: #000;\n  line-height: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.video-card[_ngcontent-%COMP%]   .video-wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 500px;\n  object-fit: contain;\n  display: block;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .vid-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .vid-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .vid-meta[_ngcontent-%COMP%]   .vid-date[_ngcontent-%COMP%] {\n  color: #999;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .vid-meta[_ngcontent-%COMP%]   .vid-coach[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 800;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .vid-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 900;\n  color: #111;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .vid-comment[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #666;\n  line-height: 1.5;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  gap: 12px;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  transition: all 0.2s ease;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%]   button.ai-btn-analyze[_ngcontent-%COMP%] {\n  background: #f4f4f7;\n  color: #111;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%]   button.ai-btn-analyze[_ngcontent-%COMP%]:active {\n  background: #eaeaef;\n  transform: scale(0.98);\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%]   button.ai-btn-report[_ngcontent-%COMP%] {\n  background: #000;\n  color: #ccff00;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%]   button.ai-btn-report[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%]   button.delete-btn[_ngcontent-%COMP%] {\n  flex: 0 0 48px;\n  background: #fff;\n  color: #ff3b30;\n  border: 1.5px solid rgba(255, 59, 48, 0.1);\n  border-radius: 12px;\n}\n.video-card[_ngcontent-%COMP%]   .video-footer[_ngcontent-%COMP%]   .ai-video-actions[_ngcontent-%COMP%]   button.delete-btn[_ngcontent-%COMP%]:active {\n  background: #fff1f0;\n  transform: scale(0.9);\n}\n.ai-results-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.4s ease;\n}\n.ai-results-overlay.show[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%] {\n  background: white;\n  width: 100%;\n  max-width: 450px;\n  border-radius: 40px;\n  overflow: hidden;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%] {\n  background: #000;\n  padding: 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ccff00;\n  font-size: 24px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 20px;\n  font-weight: 950;\n  text-transform: uppercase;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 32px;\n  height: 32px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .ai-badge-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f2f2f7;\n  color: #000;\n  font-size: 9px;\n  font-weight: 950;\n  padding: 4px 12px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  letter-spacing: 1px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .score-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .score-section[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border: 4px solid #f2f2f7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: #fafafa;\n  margin-bottom: 10px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .score-section[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-val[_ngcontent-%COMP%] {\n  font-size: 38px;\n  font-weight: 950;\n  color: #000;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .score-section[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-pct[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #8e8e93;\n  margin-top: 10px;\n  margin-left: 2px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .score-section[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 950;\n  color: #8e8e93;\n  letter-spacing: 2px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .feedback-text[_ngcontent-%COMP%] {\n  background: #f8f8fa;\n  padding: 20px;\n  border-radius: 20px;\n  margin-bottom: 25px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .feedback-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #3a3a3c;\n  line-height: 1.5;\n  font-weight: 500;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 30px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-progress[_ngcontent-%COMP%]   .metric-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-progress[_ngcontent-%COMP%]   .metric-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #000;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-progress[_ngcontent-%COMP%]   .progress-bg[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f2f2f7;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-progress[_ngcontent-%COMP%]   .progress-bg[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #000;\n  border-radius: 3px;\n  transition: width 1s ease-out;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .tips-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .tips-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 950;\n  color: #ccff00;\n  background: black;\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 8px;\n  margin: 0 0 15px;\n  letter-spacing: 1px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .tips-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .tips-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3a3a3c;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n.ai-results-overlay[_ngcontent-%COMP%]   .ai-results-card[_ngcontent-%COMP%]   .results-body[_ngcontent-%COMP%]   .nike-btn-black[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 20px;\n  height: 54px;\n  font-weight: 950;\n  letter-spacing: 1px;\n  margin-top: 10px;\n}\n.ai-loading-custom[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #ccff00;\n  --spinner-color: #ccff00;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.category-filters-mobile[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.category-filters-mobile[_ngcontent-%COMP%]   .category-pills-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  padding: 5px 0;\n  gap: 10px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.category-filters-mobile[_ngcontent-%COMP%]   .category-pills-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.category-filters-mobile[_ngcontent-%COMP%]   .category-pills-scroll[_ngcontent-%COMP%]   .cat-pill[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #666;\n  border: 1.5px solid #eaeaea;\n  padding: 8px 18px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.category-filters-mobile[_ngcontent-%COMP%]   .category-pills-scroll[_ngcontent-%COMP%]   .cat-pill.active[_ngcontent-%COMP%] {\n  background: #000;\n  color: #ccff00;\n  border-color: #000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.category-filters-mobile[_ngcontent-%COMP%]   .category-pills-scroll[_ngcontent-%COMP%]   .cat-pill[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.vid-meta[_ngcontent-%COMP%]   .vid-category[_ngcontent-%COMP%] {\n  color: #ccff00;\n  background: #000;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 9px !important;\n}\n.vid-meta[_ngcontent-%COMP%]   .vid-divider[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  color: #ddd;\n}\nion-modal.bottom-sheet-modal[_ngcontent-%COMP%] {\n  --border-radius: 40px 40px 0 0;\n  --box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.3);\n  --backdrop-opacity: 0.7;\n}\nion-modal.bottom-sheet-modal[_ngcontent-%COMP%]::part(content) {\n  background: #ffffff;\n}\nion-modal.bottom-sheet-modal[_ngcontent-%COMP%]::part(backdrop) {\n  background: #000;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.modal-desglose-container[_ngcontent-%COMP%] {\n  padding: 15px 25px 50px;\n}\n.modal-desglose-container[_ngcontent-%COMP%]   .modal-desglose-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.modal-desglose-container[_ngcontent-%COMP%]   .modal-desglose-header[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 5px;\n  background: #e5e5ea;\n  border-radius: 10px;\n  margin: 0 auto 20px;\n}\n.modal-desglose-container[_ngcontent-%COMP%]   .modal-desglose-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: -1.2px;\n  margin: 0;\n}\n.modal-desglose-container[_ngcontent-%COMP%]   .modal-desglose-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8e8e93;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.stroke-feedback-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  background: #f8f8fa;\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 30px;\n}\n.stroke-feedback-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.stroke-feedback-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 5px 0;\n  font-size: 11px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.stroke-feedback-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #3e3e42;\n  line-height: 1.5;\n  font-weight: 500;\n  font-style: italic;\n}\n.metrics-grid-premium[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 950;\n  color: #000;\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-bar-bg[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #f2f2f7;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-bar-bg[_ngcontent-%COMP%]   .m-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  position: relative;\n  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-bar-bg[_ngcontent-%COMP%]   .m-bar-fill.score-high[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ccff00,\n      #a8e600);\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-bar-bg[_ngcontent-%COMP%]   .m-bar-fill.score-mid[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ffcc00,\n      #ffaa00);\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-bar-bg[_ngcontent-%COMP%]   .m-bar-fill.score-low[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ff3b30,\n      #ff2d55);\n}\n.metrics-grid-premium[_ngcontent-%COMP%]   .metric-row-modern[_ngcontent-%COMP%]   .m-bar-bg[_ngcontent-%COMP%]   .m-bar-fill[_ngcontent-%COMP%]   .shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  animation: _ngcontent-%COMP%_bar-shine 2.5s infinite linear;\n}\n.nike-btn-black[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 20px;\n  height: 55px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n@keyframes _ngcontent-%COMP%_bar-shine {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.radars-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: 20px;\n}\n@media (min-width: 768px) {\n  .radars-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.custom-logo-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #000;\n  z-index: 100;\n}\n.custom-logo-loader[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.custom-logo-loader[_ngcontent-%COMP%]   .loader-logo[_ngcontent-%COMP%] {\n  width: 140px;\n  animation: _ngcontent-%COMP%_pulseFadeLogo 1.5s ease-in-out infinite alternate;\n}\n.custom-logo-loader[_ngcontent-%COMP%]   .loader-line-shimmer[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 3px;\n  background: rgba(204, 255, 0, 0.2);\n  border-radius: 4px;\n  position: relative;\n  overflow: hidden;\n}\n.custom-logo-loader[_ngcontent-%COMP%]   .loader-line-shimmer[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: -50%;\n  width: 50%;\n  height: 100%;\n  background: #ccff00;\n  box-shadow: 0 0 10px #ccff00;\n  animation: _ngcontent-%COMP%_lineShimmerFast 1.2s infinite ease-in-out;\n}\n.custom-logo-loader[_ngcontent-%COMP%]   .loader-text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 11px;\n  letter-spacing: 2px;\n  margin: 0;\n  opacity: 0.8;\n  animation: _ngcontent-%COMP%_pulseFadeLogo 1.5s ease-in-out infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_pulseFadeLogo {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.05);\n    opacity: 1;\n    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_lineShimmerFast {\n  0% {\n    left: -50%;\n    width: 30%;\n  }\n  50% {\n    width: 60%;\n  }\n  100% {\n    left: 100%;\n    width: 30%;\n  }\n}\n.coach-tabs-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.coach-tabs-container[_ngcontent-%COMP%]   .coach-tabs-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: #aaa;\n  letter-spacing: 2px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.coach-tabs-container[_ngcontent-%COMP%]   .coach-tabs-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  padding: 4px 0 10px;\n  gap: 10px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.coach-tabs-container[_ngcontent-%COMP%]   .coach-tabs-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.coach-tabs-container[_ngcontent-%COMP%]   .coach-tabs-scroll[_ngcontent-%COMP%]   .coach-tab-pill[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #555;\n  border: 2px solid #e8e8ee;\n  padding: 10px 22px;\n  border-radius: 100px;\n  font-size: 13px;\n  font-weight: 800;\n  white-space: nowrap;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n  letter-spacing: -0.3px;\n  position: relative;\n  overflow: hidden;\n}\n.coach-tabs-container[_ngcontent-%COMP%]   .coach-tabs-scroll[_ngcontent-%COMP%]   .coach-tab-pill.active[_ngcontent-%COMP%] {\n  background: #000;\n  color: #ccff00;\n  border-color: #000;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.18);\n  transform: translateY(-2px);\n}\n.coach-tabs-container[_ngcontent-%COMP%]   .coach-tabs-scroll[_ngcontent-%COMP%]   .coach-tab-pill[_ngcontent-%COMP%]:active {\n  transform: scale(0.93);\n}\n/*# sourceMappingURL=mis-habilidades.page.css.map */'] });
var MisHabilidadesPage = _MisHabilidadesPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisHabilidadesPage, [{
    type: Component,
    args: [{ selector: "app-mis-habilidades", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonButton,
      IonIcon,
      IonSegment,
      IonSegmentButton,
      IonLabel,
      IonFab,
      IonFabButton,
      IonList,
      IonItem,
      IonBadge,
      IonSpinner,
      IonRefresher,
      IonRefresherContent,
      IonModal,
      IonSelect,
      IonSelectOption
    ], template: `<ion-content>
    <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <!-- V2 Header (Professional / Minimalist) -->
    <div class="header-v2 animate-fade">
        <div class="h-text">
            <p>AN\xC1LISIS T\xC9CNICO ELITE</p>
            <div class="h-title-row">
                <h1>{{ jugadorNombre }}</h1>
            </div>
        </div>
        <div class="h-actions">
            <div class="h-avatar">
                <img [src]="jugadorFoto || 'assets/avatar.png'" alt="Avatar" />
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="dashboard-container">

        <!-- Coach Tabs (Only if player has evaluations from multiple coaches) -->
        <div class="coach-tabs-container animate-up" *ngIf="!isEntrenadorView && coaches.length > 1">
            <div class="coach-tabs-label">ENTRENADOR</div>
            <div class="coach-tabs-scroll">
                <button class="coach-tab-pill" 
                        [class.active]="selectedCoachId === 'all'" 
                        (click)="selectCoachTab('all')">
                    Todos
                </button>
                <button class="coach-tab-pill" 
                        *ngFor="let coach of coaches" 
                        [class.active]="selectedCoachId === coach.id" 
                        (click)="selectCoachTab(coach.id)">
                    {{ coach.nombre }}
                </button>
            </div>
        </div>

        <!-- Tabs -->
        <div class="segment-container">
            <ion-segment [value]="selectedTab" (ionChange)="segmentChanged($event)" mode="ios">
                <ion-segment-button value="radar">
                    <ion-label>Habilidades</ion-label>
                </ion-segment-button>
                <ion-segment-button value="videos">
                    <ion-label>Videos</ion-label>
                </ion-segment-button>
            </ion-segment>
        </div>

        <!-- Performance Scoreboard -->
        <div class="performance-scoreboard animate-up" *ngIf="hasData && selectedTab === 'radar'">
            <div class="scoreboard-grid">
                <div class="score-item">
                    <span class="label">T\xE9c</span>
                    <span class="value">{{ avgTecnico | number:'1.1-1' }}</span>
                </div>
                <div class="score-item">
                    <span class="label">T\xE1c</span>
                    <span class="value">{{ avgTactico | number:'1.1-1' }}</span>
                </div>
                <div class="score-item">
                    <span class="label">F\xEDs</span>
                    <span class="value">{{ avgFisico | number:'1.1-1' }}</span>
                </div>
                <div class="score-item">
                    <span class="label">Men</span>
                    <span class="value">{{ avgMental | number:'1.1-1' }}</span>
                </div>
                <div class="final-score-item">
                    <span class="label">SCORE</span>
                    <span class="value">{{ finalScore | number:'1.1-1' }}</span>
                </div>
            </div>
        </div>

        <!-- Radar Sub-Tabs -->
        <div class="video-segment-container animate-up delay-1" *ngIf="selectedTab === 'radar'">
            <ion-segment [(ngModel)]="selectedGraphTab" (ionChange)="segmentGraphChanged($event)" mode="md"
                class="nike-sub-segment" scrollable="true">
                <ion-segment-button value="resumen">
                    <ion-label>Resumen</ion-label>
                </ion-segment-button>
                <ion-segment-button value="tecnico">
                    <ion-label>T\xE9cnico</ion-label>
                </ion-segment-button>
                <ion-segment-button value="tactico">
                    <ion-label>T\xE1ctico</ion-label>
                </ion-segment-button>
                <ion-segment-button value="fisico">
                    <ion-label>F\xEDsico</ion-label>
                </ion-segment-button>
                <ion-segment-button value="mental">
                    <ion-label>Mental</ion-label>
                </ion-segment-button>
            </ion-segment>
        </div>

        <!-- Individual Radar Sections -->
        <div class="radars-grid animate-up delay-1" *ngIf="selectedTab === 'radar'">
            <div class="nike-card radar-section" *ngIf="selectedGraphTab === 'resumen'">
                <h3 class="card-title">Resumen General</h3>
                <div class="canvas-wrapper">
                    <canvas id="resumenRadarChart"></canvas>
                </div>
            </div>
            <div class="nike-card radar-section" *ngIf="selectedGraphTab === 'tecnico'">
                <h3 class="card-title">T\xE9cnico</h3>
                <div class="canvas-wrapper">
                    <canvas id="tecnicoRadarChart"></canvas>
                </div>
            </div>
            <div class="nike-card radar-section" *ngIf="selectedGraphTab === 'tactico'">
                <h3 class="card-title">T\xE1ctico (Parte 1)</h3>
                <div class="canvas-wrapper">
                    <canvas id="tacticoRadarChart1"></canvas>
                </div>
                <h3 class="card-title mt-4" style="margin-top: 30px;">T\xE1ctico (Parte 2)</h3>
                <div class="canvas-wrapper">
                    <canvas id="tacticoRadarChart2"></canvas>
                </div>
            </div>
            <div class="nike-card radar-section" *ngIf="selectedGraphTab === 'fisico'">
                <h3 class="card-title">F\xEDsico</h3>
                <div class="canvas-wrapper">
                    <canvas id="fisicoRadarChart"></canvas>
                </div>
            </div>
            <div class="nike-card radar-section" *ngIf="selectedGraphTab === 'mental'">
                <h3 class="card-title">Mental</h3>
                <div class="canvas-wrapper">
                    <canvas id="mentalRadarChart"></canvas>
                </div>
            </div>
        </div>

        <!-- Videos View -->
        <div class="videos-view animate-up" *ngIf="selectedTab === 'videos'">

            <!-- Sub-tabs for Videos -->
            <div class="video-segment-container" *ngIf="!isEntrenadorView">
                <ion-segment [(ngModel)]="selectedVideoTab" (ionChange)="segmentVideoChanged($event)" mode="md"
                    class="nike-sub-segment">
                    <ion-segment-button value="clases">
                        <ion-label>Clases</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="personales">
                        <ion-label>Personales</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </div>

            <!-- Upload Button for Coach -->
            <div class="upload-action-container" *ngIf="isEntrenadorView" style="margin-bottom: 20px;">
                <button class="nike-btn-outline-black w-full" (click)="subirVideoCoach()">
                    <ion-icon name="videocam-outline"></ion-icon>
                    <span>SUBIR VIDEO DEL ALUMNO</span>
                </button>
            </div>

            <!-- Upload Button for Personal Videos (Student) -->
            <div class="upload-action-container" *ngIf="!isEntrenadorView && selectedVideoTab === 'personales'"
                style="margin-bottom: 20px;">
                <button class="nike-btn-outline-black w-full" (click)="subirVideoPersonal()">
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    <span>SUBIR VIDEO PERSONAL</span>
                </button>
            </div>

            <!-- Category Filter Pills -->
            <div class="category-filters-mobile animate-up" *ngIf="availableCategories.length > 1">
                <div class="category-pills-scroll">
                    <button *ngFor="let cat of availableCategories" class="cat-pill"
                        [class.active]="activeCategory === cat" (click)="setCategory(cat)">
                        {{ cat }}
                    </button>
                </div>
            </div>

            <!-- List of Filtered Videos -->
            <div class="no-videos" *ngIf="filteredVideos.length === 0">
                <ion-icon name="videocam-off-outline"></ion-icon>
                <h3>Sin videos</h3>
                <p>{{ isEntrenadorView ? 'A\xFAn no has subido clips de entrenamiento para este alumno.' :
                    (selectedVideoTab === 'clases' ? 'Tu entrenador a\xFAn no ha subido clips de tus sesiones.' : 'A\xFAn no
                    has subido videos personales para an\xE1lisis.') }}</p>
            </div>

            <div class="video-grid" *ngIf="filteredVideos.length > 0">
                <div class="nike-card video-card animate-pop delay-{{(i % 4) + 1}}"
                    *ngFor="let vid of filteredVideos; let i = index">
                    <div class="video-wrapper">
                        <video [src]="vid.video_url" controls preload="metadata" playsinline></video>
                    </div>
                    <div class="video-footer">
                        <div class="vid-meta">
                            <span class="vid-category">{{ vid.categoria }}</span>
                            <span class="vid-divider">\u2022</span>
                            <span class="vid-date">{{ vid.fecha | date:'dd/MM/yyyy' }}</span>
                        </div>
                        <h4 class="vid-title">{{ vid.titulo || 'Clip de Entrenamiento' }}</h4>
                        <p class="vid-comment" *ngIf="vid.comentario">{{ vid.comentario }}</p>

                        <!-- AI Analysis Actions -->
                        <div class="ai-video-actions">
                            <button class="ai-btn-analyze" *ngIf="!aiResults[vid.id]" (click)="analizarVideo(vid)"
                                [disabled]="isAnalyzing[vid.id]">
                                <ion-icon name="sparkles-outline" *ngIf="!isAnalyzing[vid.id]"></ion-icon>
                                <ion-spinner name="crescent" *ngIf="isAnalyzing[vid.id]"></ion-spinner>
                                <span>{{ isAnalyzing[vid.id] ? 'ANALIZANDO...' : 'ANALIZAR CON GEMINI AI' }}</span>
                            </button>

                            <button class="ai-btn-report" *ngIf="aiResults[vid.id]" (click)="verReporte(vid)">
                                <ion-icon name="sparkles"></ion-icon>
                                <span>VER REPORTE AI</span>
                            </button>

                            <button class="delete-btn" (click)="confirmarEliminarVideo(vid)">
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- No Data State -->
        <div class="no-data animate-up" *ngIf="!hasData && !isLoading">
            <div class="icon-circle">
                <ion-icon name="analytics-outline"></ion-icon>
            </div>
            <h3>Sin Datos A\xFAn</h3>
            <p>Realiza tu primera evaluaci\xF3n para ver tu mapa de habilidades.</p>
        </div>

    </div>



    <!-- AI Results Overlay -->
    <div class="ai-results-overlay" [class.show]="aiActiveResult">
        <div class="ai-results-card" *ngIf="aiActiveResult">
            <div class="results-header">
                <div class="header-main">
                    <ion-icon name="sparkles"></ion-icon>
                    <h3>An\xE1lisis de T\xE9cnica</h3>
                </div>
                <ion-button fill="clear" (click)="aiActiveResult = null">
                    <ion-icon name="close" color="light" size="large"></ion-icon>
                </ion-button>
            </div>

            <div class="results-body">
                <div class="ai-badge-header">GEMINI 1.5 PRO VISION</div>

                <div class="score-section">
                    <div class="score-circle">
                        <span class="score-val">{{ aiActiveResult.score }}</span>
                        <span class="score-pct">/10</span>
                    </div>
                    <div class="score-label">PUNTUACI\xD3N T\xC9CNICA</div>
                </div>

                <div class="feedback-text">
                    <p>{{ aiActiveResult.feedback }}</p>
                </div>

                <div class="metrics-grid">
                    <div class="metric-progress" *ngFor="let metric of aiActiveResult.metrics">
                        <div class="metric-info">
                            <span>{{ metric.name }}</span>
                            <span>{{ metric.value }}/10</span>
                        </div>
                        <div class="progress-bg">
                            <div class="progress-fill" [style.width.%]="metric.value * 10"></div>
                        </div>
                    </div>
                </div>

                <div class="tips-section" *ngIf="aiActiveResult.tips && aiActiveResult.tips.length > 0">
                    <h4>CONSEJOS PRO</h4>
                    <ul>
                        <li *ngFor="let tip of aiActiveResult.tips">{{ tip }}</li>
                    </ul>
                </div>

                <ion-button expand="block" class="nike-btn-black" (click)="aiActiveResult = null">
                    ENTENDIDO
                </ion-button>
            </div>
        </div>
    </div>

    <!-- Back FAB -->
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
            <ion-icon name="chevron-back-outline"></ion-icon>
        </ion-fab-button>
    </ion-fab>

</ion-content>

<!-- Stroke Details Modal (Premium) -->
<ion-modal [isOpen]="isStrokeModalOpen" (didDismiss)="isStrokeModalOpen = false" initialBreakpoint="0.65"
    [breakpoints]="[0, 0.45, 0.65, 0.85]" handleBehavior="cycle" cssClass="bottom-sheet-modal">
    <ng-template>
        <div class="modal-desglose-container" *ngIf="activeStroke">
            <div class="modal-desglose-header">
                <div class="handle"></div>
                <h3 class="stroke-title">{{ activeStroke.name }}</h3>
                <p>An\xE1lisis de Rendimiento T\xE9cnica</p>
            </div>

            <div class="stroke-feedback-card animate-up">
                <div class="card-icon">\u{1F4A1}</div>
                <div class="card-text">
                    <h4>Feedback del Coach</h4>
                    <p>{{ activeStroke.comentario || 'Sigue practicando para recibir feedback espec\xEDfico.' }}</p>
                </div>
            </div>

            <div class="metrics-grid-premium animate-up" style="animation-delay: 0.1s;">
                <div class="metric-row-modern" *ngFor="let m of activeStroke.metrics">
                    <div class="m-header">
                        <span class="m-label">{{ m.name }}</span>
                        <span class="m-val">{{ m.value }}/10</span>
                    </div>
                    <div class="m-bar-bg">
                        <div class="m-bar-fill" [style.width.%]="m.value * 10" [class]="getScoreClass(m.value)">
                            <div class="shimmer"></div>
                        </div>
                    </div>
                </div>
            </div>

            <ion-button expand="block" class="nike-btn-black" (click)="isStrokeModalOpen = false"
                style="margin-top: 30px;">
                ENTENDIDO
            </ion-button>
        </div>
    </ng-template>
</ion-modal>`, styles: ['/* src/app/pages/mis-habilidades/mis-habilidades.page.scss */\nion-content {\n  --background: #f8f9fa;\n}\n.header-nike {\n  position: relative;\n  height: 250px;\n  background: url(/assets/mod-alumnos.jpg) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike .header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.8));\n  z-index: 1;\n}\n.header-content-wrapper {\n  position: absolute;\n  bottom: 65px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper .avatar-circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper .avatar-circle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper .header-text .welcome-pre {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper .header-text .header-title {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.header-content {\n  position: absolute;\n  bottom: 40px;\n  left: 20px;\n  right: 20px;\n  color: white;\n  z-index: 2;\n}\n.profile-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.profile-row .avatar-container,\n.profile-row .avatar-placeholder {\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n  border: 3px solid white;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.profile-row .avatar-container img,\n.profile-row .avatar-placeholder img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-row .avatar-placeholder {\n  background: #ccff00;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 28px;\n  text-transform: uppercase;\n}\n.profile-row .header-title {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -0.5px;\n  line-height: 1;\n}\n.profile-row .header-sub {\n  margin: 4px 0 0;\n  font-size: 14px;\n  opacity: 0.9;\n  font-weight: 500;\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n.dashboard-container {\n  padding: 0 20px 40px;\n  margin-top: -45px;\n  position: relative;\n  z-index: 10;\n}\n.coach-filter-container {\n  margin-bottom: 24px;\n  padding: 0 10px;\n}\n.coach-filter-container .filter-label {\n  font-size: 11px;\n  font-weight: 900;\n  color: #111;\n  letter-spacing: 1px;\n  margin-bottom: 12px;\n  margin-left: 5px;\n  text-transform: uppercase;\n}\n.coach-filter-container .coach-select-item {\n  --background: #111;\n  --border-radius: 16px;\n  --padding-start: 20px;\n  --inner-padding-end: 16px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border: 2px solid transparent;\n  --min-height: 58px;\n  position: relative;\n  overflow: hidden;\n}\n.coach-filter-container .coach-select-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 16px;\n  border: 2px solid rgba(204, 255, 0, 0.3);\n  pointer-events: none;\n}\n.coach-filter-container .coach-select-item ion-icon {\n  color: #ccff00;\n  font-size: 22px;\n  margin-right: 16px;\n}\n.coach-filter-container .coach-select-item ion-select {\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  font-weight: 700;\n  font-size: 15px;\n  color: #fff;\n  width: 100%;\n  letter-spacing: 0.5px;\n}\n.coach-filter-container .coach-select-item ion-select::part(icon) {\n  color: #ccff00;\n  opacity: 1;\n}\n.segment-container {\n  margin-bottom: 24px;\n  padding: 0 10px;\n}\n.segment-container ion-segment {\n  background: #ffffff;\n  --background: #ffffff;\n  border-radius: 30px;\n  padding: 4px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.segment-container ion-segment ion-segment-button {\n  --color: #999;\n  --color-checked: #111;\n  --indicator-color: #ccff00;\n  --indicator-box-shadow: 0 2px 8px rgba(204, 255, 0, 0.4);\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n  min-height: 44px;\n  --border-radius: 24px;\n  font-size: 14px;\n}\n.performance-scoreboard {\n  margin-bottom: 24px;\n  padding: 15px;\n  background: #111;\n  border-radius: 24px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n}\n.performance-scoreboard .scoreboard-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr) 1.2fr;\n  gap: 8px;\n  align-items: stretch;\n}\n.performance-scoreboard .score-item {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.performance-scoreboard .score-item .label {\n  font-size: 8px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 2px;\n}\n.performance-scoreboard .score-item .value {\n  font-size: 14px;\n  font-weight: 900;\n  color: #fff;\n}\n.performance-scoreboard .final-score-item {\n  background:\n    linear-gradient(\n      135deg,\n      #ccff00,\n      #9eff00);\n  border-radius: 12px;\n  padding: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #000;\n  box-shadow: 0 4px 12px rgba(204, 255, 0, 0.2);\n}\n.performance-scoreboard .final-score-item .label {\n  font-size: 8px;\n  font-weight: 950;\n  opacity: 0.7;\n  margin-bottom: 1px;\n}\n.performance-scoreboard .final-score-item .value {\n  font-size: 18px;\n  font-weight: 950;\n}\n.nike-card {\n  background: white;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);\n  margin-bottom: 20px;\n}\n.chart-card .card-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  color: #111;\n}\n.chart-card .card-subtitle {\n  margin: 4px 0 20px;\n  font-size: 13px;\n  color: #888;\n}\n.chart-card .canvas-wrapper {\n  position: relative;\n  height: 350px;\n  width: 100%;\n}\n.animate-up {\n  animation: slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-data {\n  text-align: center;\n  padding: 40px 20px;\n}\n.no-data .icon-circle {\n  width: 80px;\n  height: 80px;\n  background: #f0f0f0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  color: #ccc;\n  font-size: 40px;\n}\n.no-data h3 {\n  margin: 0 0 8px;\n  color: #444;\n  font-weight: 700;\n}\n.no-data p {\n  margin: 0;\n  color: #999;\n  font-size: 14px;\n}\n.video-segment-container {\n  margin-bottom: 24px;\n  background: #f1f1f1;\n  border-radius: 12px;\n  padding: 6px;\n}\n.video-segment-container .nike-sub-segment {\n  background: transparent;\n  --background: transparent;\n}\n.video-segment-container .nike-sub-segment ion-segment-button {\n  --indicator-color: #fff;\n  --color: #666;\n  --color-checked: #000;\n  --border-radius: 10px;\n  min-height: 38px;\n  font-size: 11px;\n  font-weight: 700;\n  min-width: max-content;\n  max-width: none !important;\n  width: auto !important;\n  padding: 0 16px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.video-segment-container .nike-sub-segment ion-segment-button[value=resumen] {\n  --color-checked: #000;\n}\n.videos-view {\n  padding-bottom: 40px;\n}\n.videos-view .upload-action-container .nike-btn-outline-black {\n  width: 100%;\n  height: 50px;\n  background: #000;\n  color: #fff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-weight: 800;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: none;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n.videos-view .upload-action-container .nike-btn-outline-black:active {\n  transform: scale(0.98);\n}\n.videos-view .upload-action-container .nike-btn-outline-black ion-icon {\n  font-size: 20px;\n}\n.videos-view .no-videos {\n  text-align: center;\n  padding: 60px 20px;\n  color: #888;\n}\n.videos-view .no-videos ion-icon {\n  font-size: 48px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.videos-view .no-videos h3 {\n  margin: 0;\n  font-weight: 800;\n  color: #111;\n}\n.videos-view .no-videos p {\n  margin-top: 4px;\n}\n.video-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: 10px;\n}\n.video-card {\n  padding: 0 !important;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 24px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);\n}\n.video-card .video-wrapper {\n  position: relative;\n  width: 100%;\n  background: #000;\n  line-height: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.video-card .video-wrapper video {\n  width: 100%;\n  height: auto;\n  max-height: 500px;\n  object-fit: contain;\n  display: block;\n}\n.video-card .video-footer {\n  padding: 20px;\n}\n.video-card .video-footer .vid-meta {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.video-card .video-footer .vid-meta span {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.video-card .video-footer .vid-meta .vid-date {\n  color: #999;\n}\n.video-card .video-footer .vid-meta .vid-coach {\n  color: #000;\n  font-weight: 800;\n}\n.video-card .video-footer .vid-title {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 900;\n  color: #111;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n}\n.video-card .video-footer .vid-comment {\n  margin: 0;\n  font-size: 13px;\n  color: #666;\n  line-height: 1.5;\n}\n.video-card .video-footer .ai-video-actions {\n  margin-top: 20px;\n  display: flex;\n  gap: 12px;\n}\n.video-card .video-footer .ai-video-actions button {\n  flex: 1;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  transition: all 0.2s ease;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.video-card .video-footer .ai-video-actions button ion-icon {\n  font-size: 18px;\n}\n.video-card .video-footer .ai-video-actions button.ai-btn-analyze {\n  background: #f4f4f7;\n  color: #111;\n}\n.video-card .video-footer .ai-video-actions button.ai-btn-analyze:active {\n  background: #eaeaef;\n  transform: scale(0.98);\n}\n.video-card .video-footer .ai-video-actions button.ai-btn-report {\n  background: #000;\n  color: #ccff00;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n.video-card .video-footer .ai-video-actions button.ai-btn-report:active {\n  transform: scale(0.96);\n}\n.video-card .video-footer .ai-video-actions button.delete-btn {\n  flex: 0 0 48px;\n  background: #fff;\n  color: #ff3b30;\n  border: 1.5px solid rgba(255, 59, 48, 0.1);\n  border-radius: 12px;\n}\n.video-card .video-footer .ai-video-actions button.delete-btn:active {\n  background: #fff1f0;\n  transform: scale(0.9);\n}\n.ai-results-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.4s ease;\n}\n.ai-results-overlay.show {\n  visibility: visible;\n  opacity: 1;\n}\n.ai-results-overlay .ai-results-card {\n  background: white;\n  width: 100%;\n  max-width: 450px;\n  border-radius: 40px;\n  overflow: hidden;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);\n}\n.ai-results-overlay .ai-results-card .results-header {\n  background: #000;\n  padding: 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.ai-results-overlay .ai-results-card .results-header .header-main {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ai-results-overlay .ai-results-card .results-header .header-main ion-icon {\n  color: #ccff00;\n  font-size: 24px;\n}\n.ai-results-overlay .ai-results-card .results-header .header-main h3 {\n  margin: 0;\n  color: white;\n  font-size: 20px;\n  font-weight: 950;\n  text-transform: uppercase;\n}\n.ai-results-overlay .ai-results-card .results-header ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 32px;\n  height: 32px;\n}\n.ai-results-overlay .ai-results-card .results-body {\n  padding: 30px;\n}\n.ai-results-overlay .ai-results-card .results-body .ai-badge-header {\n  display: inline-block;\n  background: #f2f2f7;\n  color: #000;\n  font-size: 9px;\n  font-weight: 950;\n  padding: 4px 12px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  letter-spacing: 1px;\n}\n.ai-results-overlay .ai-results-card .results-body .score-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.ai-results-overlay .ai-results-card .results-body .score-section .score-circle {\n  width: 100px;\n  height: 100px;\n  border: 4px solid #f2f2f7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: #fafafa;\n  margin-bottom: 10px;\n}\n.ai-results-overlay .ai-results-card .results-body .score-section .score-circle .score-val {\n  font-size: 38px;\n  font-weight: 950;\n  color: #000;\n}\n.ai-results-overlay .ai-results-card .results-body .score-section .score-circle .score-pct {\n  font-size: 14px;\n  font-weight: 800;\n  color: #8e8e93;\n  margin-top: 10px;\n  margin-left: 2px;\n}\n.ai-results-overlay .ai-results-card .results-body .score-section .score-label {\n  font-size: 10px;\n  font-weight: 950;\n  color: #8e8e93;\n  letter-spacing: 2px;\n}\n.ai-results-overlay .ai-results-card .results-body .feedback-text {\n  background: #f8f8fa;\n  padding: 20px;\n  border-radius: 20px;\n  margin-bottom: 25px;\n}\n.ai-results-overlay .ai-results-card .results-body .feedback-text p {\n  margin: 0;\n  font-size: 14px;\n  color: #3a3a3c;\n  line-height: 1.5;\n  font-weight: 500;\n}\n.ai-results-overlay .ai-results-card .results-body .metrics-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 30px;\n}\n.ai-results-overlay .ai-results-card .results-body .metrics-grid .metric-progress .metric-info {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.ai-results-overlay .ai-results-card .results-body .metrics-grid .metric-progress .metric-info span {\n  font-size: 11px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #000;\n}\n.ai-results-overlay .ai-results-card .results-body .metrics-grid .metric-progress .progress-bg {\n  height: 6px;\n  background: #f2f2f7;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.ai-results-overlay .ai-results-card .results-body .metrics-grid .metric-progress .progress-bg .progress-fill {\n  height: 100%;\n  background: #000;\n  border-radius: 3px;\n  transition: width 1s ease-out;\n}\n.ai-results-overlay .ai-results-card .results-body .tips-section {\n  margin-bottom: 30px;\n}\n.ai-results-overlay .ai-results-card .results-body .tips-section h4 {\n  font-size: 11px;\n  font-weight: 950;\n  color: #ccff00;\n  background: black;\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 8px;\n  margin: 0 0 15px;\n  letter-spacing: 1px;\n}\n.ai-results-overlay .ai-results-card .results-body .tips-section ul {\n  margin: 0;\n  padding-left: 20px;\n}\n.ai-results-overlay .ai-results-card .results-body .tips-section ul li {\n  font-size: 13px;\n  color: #3a3a3c;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n.ai-results-overlay .ai-results-card .results-body .nike-btn-black {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 20px;\n  height: 54px;\n  font-weight: 950;\n  letter-spacing: 1px;\n  margin-top: 10px;\n}\n.ai-loading-custom {\n  --background: #000;\n  --color: #ccff00;\n  --spinner-color: #ccff00;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.category-filters-mobile {\n  margin-bottom: 20px;\n}\n.category-filters-mobile .category-pills-scroll {\n  display: flex;\n  overflow-x: auto;\n  padding: 5px 0;\n  gap: 10px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.category-filters-mobile .category-pills-scroll::-webkit-scrollbar {\n  display: none;\n}\n.category-filters-mobile .category-pills-scroll .cat-pill {\n  background: #fff;\n  color: #666;\n  border: 1.5px solid #eaeaea;\n  padding: 8px 18px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.category-filters-mobile .category-pills-scroll .cat-pill.active {\n  background: #000;\n  color: #ccff00;\n  border-color: #000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.category-filters-mobile .category-pills-scroll .cat-pill:active {\n  transform: scale(0.95);\n}\n.vid-meta .vid-category {\n  color: #ccff00;\n  background: #000;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 9px !important;\n}\n.vid-meta .vid-divider {\n  margin: 0 5px;\n  color: #ddd;\n}\nion-modal.bottom-sheet-modal {\n  --border-radius: 40px 40px 0 0;\n  --box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.3);\n  --backdrop-opacity: 0.7;\n}\nion-modal.bottom-sheet-modal::part(content) {\n  background: #ffffff;\n}\nion-modal.bottom-sheet-modal::part(backdrop) {\n  background: #000;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.modal-desglose-container {\n  padding: 15px 25px 50px;\n}\n.modal-desglose-container .modal-desglose-header {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.modal-desglose-container .modal-desglose-header .handle {\n  width: 45px;\n  height: 5px;\n  background: #e5e5ea;\n  border-radius: 10px;\n  margin: 0 auto 20px;\n}\n.modal-desglose-container .modal-desglose-header h3 {\n  font-size: 26px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: -1.2px;\n  margin: 0;\n}\n.modal-desglose-container .modal-desglose-header p {\n  font-size: 13px;\n  color: #8e8e93;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.stroke-feedback-card {\n  display: flex;\n  gap: 15px;\n  background: #f8f8fa;\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 30px;\n}\n.stroke-feedback-card .card-icon {\n  font-size: 24px;\n}\n.stroke-feedback-card .card-text h4 {\n  margin: 0 0 5px 0;\n  font-size: 11px;\n  font-weight: 950;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.stroke-feedback-card .card-text p {\n  margin: 0;\n  font-size: 14px;\n  color: #3e3e42;\n  line-height: 1.5;\n  font-weight: 500;\n  font-style: italic;\n}\n.metrics-grid-premium {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.metrics-grid-premium .metric-row-modern .m-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.metrics-grid-premium .metric-row-modern .m-header .m-label {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n}\n.metrics-grid-premium .metric-row-modern .m-header .m-val {\n  font-size: 14px;\n  font-weight: 950;\n  color: #000;\n}\n.metrics-grid-premium .metric-row-modern .m-bar-bg {\n  height: 10px;\n  background: #f2f2f7;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.metrics-grid-premium .metric-row-modern .m-bar-bg .m-bar-fill {\n  height: 100%;\n  border-radius: 5px;\n  position: relative;\n  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.metrics-grid-premium .metric-row-modern .m-bar-bg .m-bar-fill.score-high {\n  background:\n    linear-gradient(\n      90deg,\n      #ccff00,\n      #a8e600);\n}\n.metrics-grid-premium .metric-row-modern .m-bar-bg .m-bar-fill.score-mid {\n  background:\n    linear-gradient(\n      90deg,\n      #ffcc00,\n      #ffaa00);\n}\n.metrics-grid-premium .metric-row-modern .m-bar-bg .m-bar-fill.score-low {\n  background:\n    linear-gradient(\n      90deg,\n      #ff3b30,\n      #ff2d55);\n}\n.metrics-grid-premium .metric-row-modern .m-bar-bg .m-bar-fill .shimmer {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  animation: bar-shine 2.5s infinite linear;\n}\n.nike-btn-black {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 20px;\n  height: 55px;\n  font-weight: 950;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n@keyframes bar-shine {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.radars-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: 20px;\n}\n@media (min-width: 768px) {\n  .radars-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.custom-logo-loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #000;\n  z-index: 100;\n}\n.custom-logo-loader .loader-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.custom-logo-loader .loader-logo {\n  width: 140px;\n  animation: pulseFadeLogo 1.5s ease-in-out infinite alternate;\n}\n.custom-logo-loader .loader-line-shimmer {\n  width: 120px;\n  height: 3px;\n  background: rgba(204, 255, 0, 0.2);\n  border-radius: 4px;\n  position: relative;\n  overflow: hidden;\n}\n.custom-logo-loader .loader-line-shimmer::after {\n  content: "";\n  position: absolute;\n  left: -50%;\n  width: 50%;\n  height: 100%;\n  background: #ccff00;\n  box-shadow: 0 0 10px #ccff00;\n  animation: lineShimmerFast 1.2s infinite ease-in-out;\n}\n.custom-logo-loader .loader-text {\n  color: #fff;\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 11px;\n  letter-spacing: 2px;\n  margin: 0;\n  opacity: 0.8;\n  animation: pulseFadeLogo 1.5s ease-in-out infinite alternate;\n}\n@keyframes pulseFadeLogo {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.05);\n    opacity: 1;\n    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);\n  }\n}\n@keyframes lineShimmerFast {\n  0% {\n    left: -50%;\n    width: 30%;\n  }\n  50% {\n    width: 60%;\n  }\n  100% {\n    left: 100%;\n    width: 30%;\n  }\n}\n.coach-tabs-container {\n  margin-bottom: 20px;\n}\n.coach-tabs-container .coach-tabs-label {\n  font-size: 10px;\n  font-weight: 900;\n  color: #aaa;\n  letter-spacing: 2px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.coach-tabs-container .coach-tabs-scroll {\n  display: flex;\n  overflow-x: auto;\n  padding: 4px 0 10px;\n  gap: 10px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.coach-tabs-container .coach-tabs-scroll::-webkit-scrollbar {\n  display: none;\n}\n.coach-tabs-container .coach-tabs-scroll .coach-tab-pill {\n  background: #fff;\n  color: #555;\n  border: 2px solid #e8e8ee;\n  padding: 10px 22px;\n  border-radius: 100px;\n  font-size: 13px;\n  font-weight: 800;\n  white-space: nowrap;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  cursor: pointer;\n  letter-spacing: -0.3px;\n  position: relative;\n  overflow: hidden;\n}\n.coach-tabs-container .coach-tabs-scroll .coach-tab-pill.active {\n  background: #000;\n  color: #ccff00;\n  border-color: #000;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.18);\n  transform: translateY(-2px);\n}\n.coach-tabs-container .coach-tabs-scroll .coach-tab-pill:active {\n  transform: scale(0.93);\n}\n/*# sourceMappingURL=mis-habilidades.page.css.map */\n'] }]
  }], () => [{ type: EvaluacionService }, { type: MysqlService }, { type: Router }, { type: ActivatedRoute }, { type: ChangeDetectorRef }, { type: AlertController }, { type: LoadingController }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisHabilidadesPage, { className: "MisHabilidadesPage", filePath: "src/app/pages/mis-habilidades/mis-habilidades.page.ts", lineNumber: 45 });
})();
export {
  MisHabilidadesPage
};
//# sourceMappingURL=mis-habilidades.page-JT6GDU5E.js.map

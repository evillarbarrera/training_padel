import {
  EvaluacionService
} from "./chunk-RLIZGE6Q.js";
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRange,
  IonSegment,
  IonSegmentButton,
  IonTextarea
} from "./chunk-5YKSH3EK.js";
import {
  NotificationService
} from "./chunk-OPJ5BMLN.js";
import "./chunk-DBDG6EJI.js";
import {
  AlertController,
  LoadingController
} from "./chunk-LFXGPXMG.js";
import {
  add,
  addIcons,
  caretDownCircle,
  checkmarkOutline,
  chevronBackOutline,
  remove
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  FormsModule,
  NavController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  TitleCasePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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

// src/app/pages/nueva-evaluacion/nueva-evaluacion.page.ts
var _c0 = () => ["tecnica", "control", "direccion", "decision"];
function NuevaEvaluacionPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.alumnoFoto, \u0275\u0275sanitizeUrl);
  }
}
function NuevaEvaluacionPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.alumnoNombre == null ? null : ctx_r0.alumnoNombre.charAt(0)) || "A", " ");
  }
}
function NuevaEvaluacionPage_div_26_ion_accordion_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39)(5, "ion-button", 40);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_div_26_ion_accordion_4_div_7_Template_ion_button_click_5_listener() {
      const metric_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const golpe_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.decrement(golpe_r5, metric_r4));
    });
    \u0275\u0275element(6, "ion-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function NuevaEvaluacionPage_div_26_ion_accordion_4_div_7_Template_ion_input_ngModelChange_7_listener($event) {
      const metric_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const golpe_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.evaluationData[golpe_r5][metric_r4], $event) || (ctx_r0.evaluationData[golpe_r5][metric_r4] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 43);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_div_26_ion_accordion_4_div_7_Template_ion_button_click_8_listener() {
      const metric_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const golpe_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.increment(golpe_r5, metric_r4));
    });
    \u0275\u0275element(9, "ion-icon", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-range", 45);
    \u0275\u0275twoWayListener("ngModelChange", function NuevaEvaluacionPage_div_26_ion_accordion_4_div_7_Template_ion_range_ngModelChange_10_listener($event) {
      const metric_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const golpe_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.evaluationData[golpe_r5][metric_r4], $event) || (ctx_r0.evaluationData[golpe_r5][metric_r4] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metric_r4 = ctx.$implicit;
    const golpe_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, metric_r4));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.evaluationData[golpe_r5][metric_r4]);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.evaluationData[golpe_r5][metric_r4]);
    \u0275\u0275property("color", metric_r4 === "tecnica" ? "success" : metric_r4 === "control" ? "primary" : metric_r4 === "direccion" ? "warning" : "danger");
  }
}
function NuevaEvaluacionPage_div_26_ion_accordion_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-accordion", 30)(1, "ion-item", 31)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275template(7, NuevaEvaluacionPage_div_26_ion_accordion_4_div_7_Template, 11, 6, "div", 34);
    \u0275\u0275elementStart(8, "div", 35)(9, "div", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-textarea", 37);
    \u0275\u0275twoWayListener("ngModelChange", function NuevaEvaluacionPage_div_26_ion_accordion_4_Template_ion_textarea_ngModelChange_11_listener($event) {
      const golpe_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.evaluationData[golpe_r5].comentario, $event) || (ctx_r0.evaluationData[golpe_r5].comentario = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const golpe_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", golpe_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", golpe_r5, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Promedio: ", ctx_r0.getGolpeAvg(golpe_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Comentario para ", golpe_r5);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate1("Detalles sobre la ejecuci\xF3n de ", golpe_r5, "..."));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.evaluationData[golpe_r5].comentario);
  }
}
function NuevaEvaluacionPage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 27);
    \u0275\u0275text(2, "Desliza para puntuar del 1 al 10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-accordion-group", 28);
    \u0275\u0275template(4, NuevaEvaluacionPage_div_26_ion_accordion_4_Template, 12, 9, "ion-accordion", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.golpes);
  }
}
function NuevaEvaluacionPage_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "ion-button", 40);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_div_27_div_4_Template_ion_button_click_4_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.decrementSimple(ctx_r0.tacticoData, item_r7.key));
    });
    \u0275\u0275element(5, "ion-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 43);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_div_27_div_4_Template_ion_button_click_8_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.incrementSimple(ctx_r0.tacticoData, item_r7.key));
    });
    \u0275\u0275element(9, "ion-icon", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-range", 50);
    \u0275\u0275twoWayListener("ngModelChange", function NuevaEvaluacionPage_div_27_div_4_Template_ion_range_ngModelChange_10_listener($event) {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.tacticoData[item_r7.key].valor, $event) || (ctx_r0.tacticoData[item_r7.key].valor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.tacticoData[item_r7.key] == null ? null : ctx_r0.tacticoData[item_r7.key].valor) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tacticoData[item_r7.key].valor);
  }
}
function NuevaEvaluacionPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 27);
    \u0275\u0275text(2, "Eval\xFAa las capacidades t\xE1cticas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, NuevaEvaluacionPage_div_27_div_4_Template, 11, 3, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.tacticoIndicadores);
  }
}
function NuevaEvaluacionPage_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "ion-button", 40);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_div_28_div_4_Template_ion_button_click_4_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.decrementSimple(ctx_r0.fisicoData, item_r9.key));
    });
    \u0275\u0275element(5, "ion-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 43);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_div_28_div_4_Template_ion_button_click_8_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.incrementSimple(ctx_r0.fisicoData, item_r9.key));
    });
    \u0275\u0275element(9, "ion-icon", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-range", 51);
    \u0275\u0275twoWayListener("ngModelChange", function NuevaEvaluacionPage_div_28_div_4_Template_ion_range_ngModelChange_10_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.fisicoData[item_r9.key].valor, $event) || (ctx_r0.fisicoData[item_r9.key].valor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.fisicoData[item_r9.key] == null ? null : ctx_r0.fisicoData[item_r9.key].valor) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fisicoData[item_r9.key].valor);
  }
}
function NuevaEvaluacionPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 27);
    \u0275\u0275text(2, "Eval\xFAa las capacidades f\xEDsicas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, NuevaEvaluacionPage_div_28_div_4_Template, 11, 3, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.fisicoIndicadores);
  }
}
function NuevaEvaluacionPage_div_29_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "ion-button", 40);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_div_29_div_4_Template_ion_button_click_4_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.decrementSimple(ctx_r0.mentalData, item_r11.key));
    });
    \u0275\u0275element(5, "ion-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 43);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_div_29_div_4_Template_ion_button_click_8_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.incrementSimple(ctx_r0.mentalData, item_r11.key));
    });
    \u0275\u0275element(9, "ion-icon", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-range", 52);
    \u0275\u0275twoWayListener("ngModelChange", function NuevaEvaluacionPage_div_29_div_4_Template_ion_range_ngModelChange_10_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.mentalData[item_r11.key].valor, $event) || (ctx_r0.mentalData[item_r11.key].valor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.mentalData[item_r11.key] == null ? null : ctx_r0.mentalData[item_r11.key].valor) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.mentalData[item_r11.key].valor);
  }
}
function NuevaEvaluacionPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 27);
    \u0275\u0275text(2, "Eval\xFAa las capacidades mentales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, NuevaEvaluacionPage_div_29_div_4_Template, 11, 3, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.mentalIndicadores);
  }
}
var _NuevaEvaluacionPage = class _NuevaEvaluacionPage {
  constructor(route, navCtrl, alertCtrl, loadingCtrl, evaluacionService, mysqlService, notificationService) {
    this.route = route;
    this.navCtrl = navCtrl;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.evaluacionService = evaluacionService;
    this.mysqlService = mysqlService;
    this.notificationService = notificationService;
    this.jugadorId = 0;
    this.entrenadorId = 0;
    this.comentarios = "";
    this.alumnoNombre = "Alumno";
    this.alumnoFoto = null;
    this.selectedTab = "tecnico";
    this.golpes = [
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
    this.evaluationData = {};
    this.tacticoIndicadores = [
      { key: "Posici\xF3n", nombre: "Posici\xF3n en cancha" },
      { key: "Estrategia", nombre: "Estrategia de juego" },
      { key: "Lectura", nombre: "Lectura de la bola" },
      { key: "Ritmo", nombre: "Control de ritmo" },
      { key: "Anticipaci\xF3n", nombre: "Anticipaci\xF3n" },
      { key: "Consistencia", nombre: "Consistencia t\xE1ctica" }
    ];
    this.tacticoData = {};
    this.fisicoIndicadores = [
      { key: "Fuerza", nombre: "Fuerza" },
      { key: "Velocidad", nombre: "Velocidad" },
      { key: "Resistencia", nombre: "Resistencia" },
      { key: "Movilidad", nombre: "Movilidad" }
    ];
    this.fisicoData = {};
    this.mentalIndicadores = [
      { key: "Concentraci\xF3n", nombre: "Concentraci\xF3n" },
      { key: "Actitud", nombre: "Actitud" },
      { key: "Confianza", nombre: "Confianza" },
      { key: "Resiliencia", nombre: "Resiliencia" }
    ];
    this.mentalData = {};
    addIcons({ add, remove, "caret-down-circle": caretDownCircle, chevronBackOutline, checkmarkOutline });
  }
  ngOnInit() {
    this.jugadorId = Number(this.route.snapshot.paramMap.get("id"));
    this.entrenadorId = Number(localStorage.getItem("userId"));
    this.golpes.forEach((golpe) => {
      this.evaluationData[golpe] = {
        tecnica: 1,
        control: 1,
        direccion: 1,
        decision: 1,
        comentario: ""
      };
    });
    this.tacticoIndicadores.forEach((i) => {
      this.tacticoData[i.key] = { valor: 1 };
    });
    this.fisicoIndicadores.forEach((i) => {
      this.fisicoData[i.key] = { valor: 1 };
    });
    this.mentalIndicadores.forEach((i) => {
      this.mentalData[i.key] = { valor: 1 };
    });
    this.cargarAlumno();
    this.cargarUltimaEvaluacion();
  }
  tabChanged(ev) {
    this.selectedTab = ev.detail.value;
  }
  // ========== Helpers for simple indicators ==========
  incrementSimple(dataObj, key) {
    if (dataObj[key].valor < 10)
      dataObj[key].valor++;
  }
  decrementSimple(dataObj, key) {
    if (dataObj[key].valor > 1)
      dataObj[key].valor--;
  }
  getGolpeAvg(golpe) {
    const d = this.evaluationData[golpe];
    const avg = (d.tecnica + d.control + d.direccion + d.decision) / 4;
    return avg.toFixed(1);
  }
  // ========== Load Previous ==========
  cargarUltimaEvaluacion() {
    if (!this.jugadorId)
      return;
    this.evaluacionService.getEvaluaciones(this.jugadorId).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          const sorted = data.sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
          const latest = sorted[0];
          if (latest && latest.scores) {
            let scores = latest.scores;
            if (typeof scores === "string") {
              try {
                scores = JSON.parse(scores);
              } catch (e) {
                scores = null;
              }
            }
            if (scores) {
              const tecnico = scores.tecnico || scores;
              this.golpes.forEach((golpe) => {
                const prevScore = tecnico[golpe] || tecnico[golpe.toLowerCase()];
                if (prevScore) {
                  this.evaluationData[golpe] = {
                    tecnica: Number(prevScore.tecnica) || 1,
                    control: Number(prevScore.control) || 1,
                    direccion: Number(prevScore.direccion) || 1,
                    decision: Number(prevScore.decision) || 1,
                    comentario: ""
                  };
                }
              });
              const tactico = scores.tactico || {};
              this.tacticoIndicadores.forEach((i) => {
                const val = tactico[i.key];
                if (val) {
                  this.tacticoData[i.key] = {
                    valor: typeof val === "object" ? Number(val.valor || 1) : Number(val || 1)
                  };
                }
              });
              const fisico = scores.fisico || {};
              this.fisicoIndicadores.forEach((i) => {
                const val = fisico[i.key];
                if (val) {
                  this.fisicoData[i.key] = {
                    valor: typeof val === "object" ? Number(val.valor || 1) : Number(val || 1)
                  };
                }
              });
              const mental = scores.mental || {};
              this.mentalIndicadores.forEach((i) => {
                const val = mental[i.key];
                if (val) {
                  this.mentalData[i.key] = {
                    valor: typeof val === "object" ? Number(val.valor || 1) : Number(val || 1)
                  };
                }
              });
              console.log("Evaluaci\xF3n previa cargada (ID " + latest.id + ")");
            }
          }
        }
      },
      error: (err) => console.error("Error cargando evaluaci\xF3n previa:", err)
    });
  }
  cargarAlumno() {
    this.mysqlService.getPerfil(this.jugadorId).subscribe({
      next: (res) => {
        if (res) {
          const userData = res.user || res;
          this.alumnoNombre = userData.nombre || "Alumno";
          let foto = userData.foto_perfil || userData.link_foto || userData.foto;
          let fotoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(this.alumnoNombre)}&background=ccff00&color=000`;
          if (foto && typeof foto === "string" && foto.trim().length > 0 && !foto.includes("imagen_defecto")) {
            if (!foto.startsWith("http")) {
              const cleanPath = foto.startsWith("/") ? foto.substring(1) : foto;
              fotoUrl = `https://api.padelmanager.cl/${cleanPath}`;
            } else {
              fotoUrl = foto;
            }
          }
          this.alumnoFoto = fotoUrl;
        }
      },
      error: (err) => console.error("Error cargando perfil:", err)
    });
  }
  increment(golpe, metric) {
    if (this.evaluationData[golpe][metric] < 10) {
      this.evaluationData[golpe][metric]++;
    }
  }
  decrement(golpe, metric) {
    if (this.evaluationData[golpe][metric] > 1) {
      this.evaluationData[golpe][metric]--;
    }
  }
  guardarEvaluacion() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Confirmar",
        message: "\xBFGuardar esta evaluaci\xF3n?",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Guardar",
            handler: () => this.submit()
          }
        ]
      });
      yield alert.present();
    });
  }
  goBack() {
    this.navCtrl.back();
  }
  submit() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: "Guardando evaluaci\xF3n...",
        spinner: "crescent",
        duration: 5e3
      });
      yield loading.present();
      const payload = {
        jugador_id: this.jugadorId,
        entrenador_id: this.entrenadorId,
        scores: {
          tecnico: this.evaluationData,
          tactico: this.tacticoData,
          fisico: this.fisicoData,
          mental: this.mentalData
        },
        comentarios: this.comentarios
      };
      this.evaluacionService.crearEvaluacion(payload).subscribe({
        next: () => __async(this, null, function* () {
          yield loading.dismiss();
          this.notificationService.notificarEvaluacionGenerada(this.jugadorId);
          const alert = yield this.alertCtrl.create({ header: "\xC9xito", message: "Evaluaci\xF3n guardada", buttons: ["OK"] });
          yield alert.present();
          this.navCtrl.back();
        }),
        error: (err) => __async(this, null, function* () {
          yield loading.dismiss();
          console.error(err);
          const alert = yield this.alertCtrl.create({ header: "Error", message: "No se pudo guardar", buttons: ["OK"] });
          yield alert.present();
        })
      });
    });
  }
};
_NuevaEvaluacionPage.\u0275fac = function NuevaEvaluacionPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NuevaEvaluacionPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(EvaluacionService), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(NotificationService));
};
_NuevaEvaluacionPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NuevaEvaluacionPage, selectors: [["app-nueva-evaluacion"]], decls: 40, vars: 9, consts: [[1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "profile-row"], ["class", "avatar-container", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "header-title"], [1, "header-sub"], [1, "dashboard-container"], ["mode", "ios", 1, "eval-segment", "animate-up", 3, "ionChange", "value"], ["value", "tecnico"], ["value", "tactico"], ["value", "fisico"], ["value", "mental"], [4, "ngIf"], [1, "nike-card", "comments-card", "animate-up", 2, "animation-delay", "0.2s"], [1, "card-title"], ["rows", "4", "placeholder", "Observaciones del entrenador...", 3, "ngModelChange", "ngModel"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "fab-secondary-position"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "save-fab", 3, "click"], ["name", "checkmark-outline"], [1, "avatar-container"], [3, "src"], [1, "avatar-placeholder"], [1, "subtitle", "animate-up"], [1, "animate-up", 2, "animation-delay", "0.1s"], ["toggleIcon", "caret-down-circle", "class", "nike-accordion", 3, "value", 4, "ngFor", "ngForOf"], ["toggleIcon", "caret-down-circle", 1, "nike-accordion", 3, "value"], ["slot", "header", "lines", "none"], [1, "avg-score"], ["slot", "content", 1, "ion-padding", 2, "background", "white"], ["class", "metric-container", 4, "ngFor", "ngForOf"], [1, "stroke-comment-container"], [1, "metric-label"], ["rows", "2", 1, "nike-textarea-small", 3, "ngModelChange", "ngModel", "placeholder"], [1, "metric-container"], [1, "stepper-row"], ["fill", "outline", 1, "step-btn", 3, "click"], ["name", "remove", "slot", "icon-only"], ["type", "number", "min", "1", "max", "10", 1, "score-input", 3, "ngModelChange", "ngModel"], ["fill", "solid", 1, "step-btn", 3, "click"], ["name", "add", "slot", "icon-only"], ["min", "1", "max", "10", "step", "1", "snaps", "true", 1, "visual-range", 3, "ngModelChange", "ngModel", "color"], [1, "simple-eval-grid", "animate-up"], ["class", "eval-card", 4, "ngFor", "ngForOf"], [1, "eval-card"], [1, "score-display"], ["min", "1", "max", "10", "step", "1", "snaps", "true", "color", "warning", 1, "visual-range", 3, "ngModelChange", "ngModel"], ["min", "1", "max", "10", "step", "1", "snaps", "true", "color", "success", 1, "visual-range", 3, "ngModelChange", "ngModel"], ["min", "1", "max", "10", "step", "1", "snaps", "true", "color", "danger", 1, "visual-range", 3, "ngModelChange", "ngModel"]], template: function NuevaEvaluacionPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
    \u0275\u0275template(5, NuevaEvaluacionPage_div_5_Template, 2, 1, "div", 4)(6, NuevaEvaluacionPage_div_6_Template, 2, 1, "div", 5);
    \u0275\u0275elementStart(7, "div")(8, "h1", 6);
    \u0275\u0275text(9, "Evaluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 8)(13, "ion-segment", 9);
    \u0275\u0275listener("ionChange", function NuevaEvaluacionPage_Template_ion_segment_ionChange_13_listener($event) {
      return ctx.tabChanged($event);
    });
    \u0275\u0275elementStart(14, "ion-segment-button", 10)(15, "ion-label");
    \u0275\u0275text(16, "T\xE9cnico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-segment-button", 11)(18, "ion-label");
    \u0275\u0275text(19, "T\xE1ctico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-segment-button", 12)(21, "ion-label");
    \u0275\u0275text(22, "F\xEDsico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "ion-segment-button", 13)(24, "ion-label");
    \u0275\u0275text(25, "Mental");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, NuevaEvaluacionPage_div_26_Template, 5, 1, "div", 14)(27, NuevaEvaluacionPage_div_27_Template, 5, 1, "div", 14)(28, NuevaEvaluacionPage_div_28_Template, 5, 1, "div", 14)(29, NuevaEvaluacionPage_div_29_Template, 5, 1, "div", 14);
    \u0275\u0275elementStart(30, "div", 15)(31, "h3", 16);
    \u0275\u0275text(32, "Comentarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-textarea", 17);
    \u0275\u0275twoWayListener("ngModelChange", function NuevaEvaluacionPage_Template_ion_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.comentarios, $event) || (ctx.comentarios = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "ion-fab", 18)(35, "ion-fab-button", 19);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_Template_ion_fab_button_click_35_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(36, "ion-icon", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "ion-fab", 21)(38, "ion-fab-button", 22);
    \u0275\u0275listener("click", function NuevaEvaluacionPage_Template_ion_fab_button_click_38_listener() {
      return ctx.guardarEvaluacion();
    });
    \u0275\u0275element(39, "ion-icon", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.alumnoFoto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.alumnoFoto);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Evaluaci\xF3n para ", ctx.alumnoNombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.selectedTab);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx.selectedTab === "tecnico");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTab === "tactico");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTab === "fisico");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTab === "mental");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.comentarios);
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
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonRange,
  IonTextarea,
  IonInput,
  IonButton,
  IonSegment,
  IonSegmentButton,
  TitleCasePipe
], styles: ['@charset "UTF-8";\n\n\n\n.header-nike[_ngcontent-%COMP%] {\n  height: 300px;\n  margin-top: -60px;\n  padding-top: calc(60px + env(safe-area-inset-top));\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n  z-index: 0;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.profile-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.avatar-container[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 4px solid #ccff00;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.avatar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background: #333;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  font-weight: bold;\n  border: 4px solid #ccff00;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n  line-height: 1.1;\n}\n.header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: 500;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 20px 25px 120px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #888;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\nion-accordion-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.nike-accordion[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: white;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.nike-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: white;\n  --padding-start: 16px;\n}\n.nike-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  color: #111;\n}\n.nike-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .avg-score[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #8e8e93;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.metric-container[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  padding: 0 5px;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stepper-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  margin-bottom: 5px;\n}\n.step-btn[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 48px;\n  height: 48px;\n  --border-radius: 12px;\n  margin: 0;\n}\n.step-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.score-input[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  font-weight: 800;\n  --padding-start: 0;\n  --padding-end: 0;\n  --background: #f4f4f4;\n  border-radius: 12px;\n  height: 48px;\n  color: #111;\n  border: 1px solid #e0e0e0;\n}\n.visual-range[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n  --bar-height: 4px;\n  --knob-size: 12px;\n  opacity: 0.8;\n}\n.nike-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f2f2f7;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  margin: 0 0 15px;\n  color: #111;\n}\nion-textarea[_ngcontent-%COMP%] {\n  --background: #f9f9f9;\n  --color: #111;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  border-radius: 12px;\n  font-size: 14px;\n  min-height: 100px;\n  border: 1px solid #eee;\n}\n.stroke-comment-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 1px dashed #eee;\n}\n.nike-textarea-small[_ngcontent-%COMP%] {\n  min-height: 60px !important;\n  --background: #fdfdfd;\n}\n.fab-secondary-position[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  margin: 0;\n  width: 56px;\n  height: 56px;\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.nike-fab.save-fab[_ngcontent-%COMP%] {\n  --background: #34c759;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  opacity: 0;\n  transform: translateY(20px);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.eval-segment[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  --background: #f2f2f7;\n  border-radius: 12px;\n}\n.eval-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: #000;\n  --color: #8e8e93;\n  --color-checked: #fff;\n  font-weight: 800;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  min-height: 40px;\n  --border-radius: 10px;\n}\n.simple-eval-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.eval-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f2f2f7;\n}\n.eval-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  font-size: 16px;\n  font-weight: 800;\n  color: #111;\n  letter-spacing: -0.3px;\n}\n.eval-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n  color: #111;\n  min-width: 50px;\n  text-align: center;\n}\n.eval-card[_ngcontent-%COMP%]   .stepper-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 5px;\n}\n.eval-card[_ngcontent-%COMP%]   .visual-range[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=nueva-evaluacion.page.css.map */'] });
var NuevaEvaluacionPage = _NuevaEvaluacionPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NuevaEvaluacionPage, [{
    type: Component,
    args: [{ selector: "app-nueva-evaluacion", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonFab,
      IonFabButton,
      IonIcon,
      IonAccordionGroup,
      IonAccordion,
      IonItem,
      IonLabel,
      IonRange,
      IonTextarea,
      IonInput,
      IonButton,
      IonSegment,
      IonSegmentButton
    ], template: `<ion-content>

    <!-- Hero Header -->
    <div class="header-nike">
        <div class="header-overlay"></div>
        <div class="header-content">
            <div class="profile-row">
                <div class="avatar-container" *ngIf="alumnoFoto">
                    <img [src]="alumnoFoto" />
                </div>
                <div class="avatar-placeholder" *ngIf="!alumnoFoto">
                    {{ alumnoNombre?.charAt(0) || 'A' }}
                </div>
                <div>
                    <h1 class="header-title">Evaluar</h1>
                    <p class="header-sub">Evaluaci\xF3n para {{ alumnoNombre }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="dashboard-container">

        <!-- Tab Selector -->
        <ion-segment [value]="selectedTab" (ionChange)="tabChanged($event)" mode="ios" class="eval-segment animate-up">
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

        <!-- ==================== TAB: T\xC9CNICO ==================== -->
        <div *ngIf="selectedTab === 'tecnico'">
            <p class="subtitle animate-up">Desliza para puntuar del 1 al 10</p>

            <ion-accordion-group class="animate-up" style="animation-delay: 0.1s;">
                <ion-accordion *ngFor="let golpe of golpes" [value]="golpe" toggleIcon="caret-down-circle"
                    class="nike-accordion">
                    <ion-item slot="header" lines="none">
                        <ion-label>
                            {{ golpe }}
                            <span class="avg-score">Promedio: {{ getGolpeAvg(golpe) }}</span>
                        </ion-label>
                    </ion-item>

                    <div class="ion-padding" slot="content" style="background: white;">
                        <div class="metric-container"
                            *ngFor="let metric of ['tecnica', 'control', 'direccion', 'decision']">
                            <div class="metric-label">{{ metric | titlecase }}</div>

                            <div class="stepper-row">
                                <ion-button fill="outline" class="step-btn" (click)="decrement(golpe, metric)">
                                    <ion-icon name="remove" slot="icon-only"></ion-icon>
                                </ion-button>
                                <ion-input type="number" class="score-input"
                                    [(ngModel)]="evaluationData[golpe][metric]" min="1" max="10"></ion-input>
                                <ion-button fill="solid" class="step-btn" (click)="increment(golpe, metric)">
                                    <ion-icon name="add" slot="icon-only"></ion-icon>
                                </ion-button>
                            </div>

                            <ion-range min="1" max="10" step="1" snaps="true"
                                [(ngModel)]="evaluationData[golpe][metric]"
                                [color]="metric === 'tecnica' ? 'success' : metric === 'control' ? 'primary' : metric === 'direccion' ? 'warning' : 'danger'"
                                class="visual-range">
                            </ion-range>
                        </div>

                        <div class="stroke-comment-container">
                            <div class="metric-label">Comentario para {{ golpe }}</div>
                            <ion-textarea [(ngModel)]="evaluationData[golpe].comentario" rows="2"
                                placeholder="Detalles sobre la ejecuci\xF3n de {{ golpe }}..."
                                class="nike-textarea-small"></ion-textarea>
                        </div>
                    </div>
                </ion-accordion>
            </ion-accordion-group>
        </div>

        <!-- ==================== TAB: T\xC1CTICO ==================== -->
        <div *ngIf="selectedTab === 'tactico'">
            <p class="subtitle animate-up">Eval\xFAa las capacidades t\xE1cticas</p>
            <div class="simple-eval-grid animate-up">
                <div class="eval-card" *ngFor="let item of tacticoIndicadores">
                    <h4>{{ item.nombre }}</h4>
                    <div class="stepper-row">
                        <ion-button fill="outline" class="step-btn" (click)="decrementSimple(tacticoData, item.key)">
                            <ion-icon name="remove" slot="icon-only"></ion-icon>
                        </ion-button>
                        <span class="score-display">{{ tacticoData[item.key]?.valor || 0 }}</span>
                        <ion-button fill="solid" class="step-btn" (click)="incrementSimple(tacticoData, item.key)">
                            <ion-icon name="add" slot="icon-only"></ion-icon>
                        </ion-button>
                    </div>
                    <ion-range min="1" max="10" step="1" snaps="true"
                        [(ngModel)]="tacticoData[item.key].valor" color="warning" class="visual-range">
                    </ion-range>
                </div>
            </div>
        </div>

        <!-- ==================== TAB: F\xCDSICO ==================== -->
        <div *ngIf="selectedTab === 'fisico'">
            <p class="subtitle animate-up">Eval\xFAa las capacidades f\xEDsicas</p>
            <div class="simple-eval-grid animate-up">
                <div class="eval-card" *ngFor="let item of fisicoIndicadores">
                    <h4>{{ item.nombre }}</h4>
                    <div class="stepper-row">
                        <ion-button fill="outline" class="step-btn" (click)="decrementSimple(fisicoData, item.key)">
                            <ion-icon name="remove" slot="icon-only"></ion-icon>
                        </ion-button>
                        <span class="score-display">{{ fisicoData[item.key]?.valor || 0 }}</span>
                        <ion-button fill="solid" class="step-btn" (click)="incrementSimple(fisicoData, item.key)">
                            <ion-icon name="add" slot="icon-only"></ion-icon>
                        </ion-button>
                    </div>
                    <ion-range min="1" max="10" step="1" snaps="true"
                        [(ngModel)]="fisicoData[item.key].valor" color="success" class="visual-range">
                    </ion-range>
                </div>
            </div>
        </div>

        <!-- ==================== TAB: MENTAL ==================== -->
        <div *ngIf="selectedTab === 'mental'">
            <p class="subtitle animate-up">Eval\xFAa las capacidades mentales</p>
            <div class="simple-eval-grid animate-up">
                <div class="eval-card" *ngFor="let item of mentalIndicadores">
                    <h4>{{ item.nombre }}</h4>
                    <div class="stepper-row">
                        <ion-button fill="outline" class="step-btn" (click)="decrementSimple(mentalData, item.key)">
                            <ion-icon name="remove" slot="icon-only"></ion-icon>
                        </ion-button>
                        <span class="score-display">{{ mentalData[item.key]?.valor || 0 }}</span>
                        <ion-button fill="solid" class="step-btn" (click)="incrementSimple(mentalData, item.key)">
                            <ion-icon name="add" slot="icon-only"></ion-icon>
                        </ion-button>
                    </div>
                    <ion-range min="1" max="10" step="1" snaps="true"
                        [(ngModel)]="mentalData[item.key].valor" color="danger" class="visual-range">
                    </ion-range>
                </div>
            </div>
        </div>

        <!-- Comments -->
        <div class="nike-card comments-card animate-up" style="animation-delay: 0.2s;">
            <h3 class="card-title">Comentarios</h3>
            <ion-textarea [(ngModel)]="comentarios" rows="4"
                placeholder="Observaciones del entrenador..."></ion-textarea>
        </div>

    </div>

    <!-- FABs -->
    <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="fab-secondary-position">
        <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
            <ion-icon name="chevron-back-outline"></ion-icon>
        </ion-fab-button>
    </ion-fab>

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button class="nike-fab save-fab" (click)="guardarEvaluacion()">
            <ion-icon name="checkmark-outline"></ion-icon>
        </ion-fab-button>
    </ion-fab>

</ion-content>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/nueva-evaluacion/nueva-evaluacion.page.scss */\n.header-nike {\n  height: 300px;\n  margin-top: -60px;\n  padding-top: calc(60px + env(safe-area-inset-top));\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n  z-index: 0;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.profile-row {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.avatar-container {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 4px solid #ccff00;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.avatar-container img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-placeholder {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background: #333;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  font-weight: bold;\n  border: 4px solid #ccff00;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-title {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n  line-height: 1.1;\n}\n.header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: 500;\n}\n.dashboard-container {\n  padding: 20px 25px 120px;\n}\n.subtitle {\n  text-align: center;\n  color: #888;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\nion-accordion-group {\n  margin-bottom: 20px;\n}\n.nike-accordion {\n  margin-bottom: 10px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: white;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.nike-accordion ion-item {\n  --background: white;\n  --padding-start: 16px;\n}\n.nike-accordion ion-item ion-label {\n  font-weight: 700;\n  font-size: 16px;\n  color: #111;\n}\n.nike-accordion ion-item .avg-score {\n  display: block;\n  font-size: 12px;\n  color: #8e8e93;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.metric-container {\n  margin-bottom: 25px;\n  padding: 0 5px;\n}\n.metric-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stepper-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  margin-bottom: 5px;\n}\n.step-btn {\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 48px;\n  height: 48px;\n  --border-radius: 12px;\n  margin: 0;\n}\n.step-btn ion-icon {\n  font-size: 24px;\n  font-weight: bold;\n}\n.score-input {\n  text-align: center;\n  font-size: 24px;\n  font-weight: 800;\n  --padding-start: 0;\n  --padding-end: 0;\n  --background: #f4f4f4;\n  border-radius: 12px;\n  height: 48px;\n  color: #111;\n  border: 1px solid #e0e0e0;\n}\n.visual-range {\n  padding-top: 0;\n  padding-bottom: 0;\n  --bar-height: 4px;\n  --knob-size: 12px;\n  opacity: 0.8;\n}\n.nike-card {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f2f2f7;\n}\n.card-title {\n  font-size: 18px;\n  font-weight: 800;\n  margin: 0 0 15px;\n  color: #111;\n}\nion-textarea {\n  --background: #f9f9f9;\n  --color: #111;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  border-radius: 12px;\n  font-size: 14px;\n  min-height: 100px;\n  border: 1px solid #eee;\n}\n.stroke-comment-container {\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 1px dashed #eee;\n}\n.nike-textarea-small {\n  min-height: 60px !important;\n  --background: #fdfdfd;\n}\n.fab-secondary-position {\n  margin-bottom: 70px;\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  margin: 0;\n  width: 56px;\n  height: 56px;\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n.nike-fab.save-fab {\n  --background: #34c759;\n}\n.animate-up {\n  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  opacity: 0;\n  transform: translateY(20px);\n}\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.eval-segment {\n  margin-bottom: 20px;\n  --background: #f2f2f7;\n  border-radius: 12px;\n}\n.eval-segment ion-segment-button {\n  --indicator-color: #000;\n  --color: #8e8e93;\n  --color-checked: #fff;\n  font-weight: 800;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  min-height: 40px;\n  --border-radius: 10px;\n}\n.simple-eval-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.eval-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f2f2f7;\n}\n.eval-card h4 {\n  margin: 0 0 15px;\n  font-size: 16px;\n  font-weight: 800;\n  color: #111;\n  letter-spacing: -0.3px;\n}\n.eval-card .score-display {\n  font-size: 28px;\n  font-weight: 900;\n  color: #111;\n  min-width: 50px;\n  text-align: center;\n}\n.eval-card .stepper-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 5px;\n}\n.eval-card .visual-range {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=nueva-evaluacion.page.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: NavController }, { type: AlertController }, { type: LoadingController }, { type: EvaluacionService }, { type: MysqlService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NuevaEvaluacionPage, { className: "NuevaEvaluacionPage", filePath: "src/app/pages/nueva-evaluacion/nueva-evaluacion.page.ts", lineNumber: 32 });
})();
export {
  NuevaEvaluacionPage
};
//# sourceMappingURL=nueva-evaluacion.page-LLET2N3I.js.map

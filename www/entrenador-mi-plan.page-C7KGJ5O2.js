import {
  AlertController,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonSpinner,
  IonTitle,
  IonToolbar,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  addCircleOutline,
  addIcons,
  calendarOutline,
  cardOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  diamondOutline,
  openOutline,
  shieldCheckmarkOutline,
  starOutline,
  trendingUpOutline,
  warningOutline
} from "./chunk-KFN47MEP.js";
import {
  environment
} from "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  FormsModule,
  HttpClient,
  NavController,
  NgForOf,
  NgIf,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/pages/entrenador-mi-plan/entrenador-mi-plan.page.ts
function EntrenadorMiPlanPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "ion-spinner", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando informaci\xF3n del plan...");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorMiPlanPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275element(3, "ion-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "h3", 19);
    \u0275\u0275text(6, "Activa tu Periodo de Prueba");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8, "Selecciona tu plan para empezar tus ");
    \u0275\u0275elementStart(9, "b");
    \u0275\u0275text(10, "3 meses de regalo ($0 CLP)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-button", 21);
    \u0275\u0275listener("click", function EntrenadorMiPlanPage_section_12_Template_ion_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gestionarPlan());
    });
    \u0275\u0275text(13, " ELEGIR MI PLAN AHORA ");
    \u0275\u0275elementEnd()()();
  }
}
function EntrenadorMiPlanPage_div_13_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Finalizada en **** ", ctx_r1.sub.card_last_four);
  }
}
function EntrenadorMiPlanPage_div_13_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1, "Sin tarjeta registrada");
    \u0275\u0275elementEnd();
  }
}
function EntrenadorMiPlanPage_div_13_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "ion-icon", 68);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Pack/Suscripci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 69);
    \u0275\u0275text(10, "OK");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 1, h_r4.date, "dd/MM/yy"));
  }
}
function EntrenadorMiPlanPage_div_13_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, " No hay facturas previas. ");
    \u0275\u0275elementEnd();
  }
}
function EntrenadorMiPlanPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275element(3, "ion-icon", 25);
    \u0275\u0275elementStart(4, "div", 26)(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 28);
    \u0275\u0275text(9, "Comisi\xF3n Mes (Por Cobrar)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 29);
    \u0275\u0275element(11, "ion-icon", 17);
    \u0275\u0275elementStart(12, "div", 26)(13, "div", 27);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28);
    \u0275\u0275text(17, "Costo Plan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 29);
    \u0275\u0275element(19, "ion-icon", 30);
    \u0275\u0275elementStart(20, "div", 26)(21, "div", 27);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 28);
    \u0275\u0275text(25, "Pr\xF3ximo Cobro Consolidad");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 31)(27, "span", 32);
    \u0275\u0275text(28, "D\xEDas Disponibles Gratis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 33)(30, "span", 34);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 18);
    \u0275\u0275text(33, "D\xCDAS RESTANTES");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 35)(35, "div", 36);
    \u0275\u0275element(36, "div", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "p", 38);
    \u0275\u0275text(38, "Al terminar, se cobrar\xE1 el plan + comisiones acumuladas del mes.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 39)(40, "div", 40)(41, "div", 41)(42, "h3", 42);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 43);
    \u0275\u0275element(45, "span", 44);
    \u0275\u0275elementStart(46, "span", 45);
    \u0275\u0275text(47, "Suscripci\xF3n Activa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "ion-button", 46);
    \u0275\u0275listener("click", function EntrenadorMiPlanPage_div_13_Template_ion_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gestionarPlan());
    });
    \u0275\u0275text(49, " Cambiar Plan ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 47)(51, "span", 32);
    \u0275\u0275text(52, "Configuraci\xF3n MP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 48)(54, "div")(55, "h3", 49);
    \u0275\u0275text(56, "Recaudar con Mercado Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 50);
    \u0275\u0275text(58, "Si se desactiva, pasa a saldo pendiente.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 51);
    \u0275\u0275listener("click", function EntrenadorMiPlanPage_div_13_Template_div_click_59_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sub.recaudo_mp_activo = !ctx_r1.sub.recaudo_mp_activo);
    });
    \u0275\u0275element(60, "div", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 47)(62, "span", 32);
    \u0275\u0275text(63, "Tarjeta para Pago de Comisiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 53)(65, "div", 54);
    \u0275\u0275element(66, "ion-icon", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 56)(68, "b");
    \u0275\u0275text(69, "Visa Facturaci\xF3n Interna");
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, EntrenadorMiPlanPage_div_13_span_70_Template, 2, 1, "span", 57)(71, EntrenadorMiPlanPage_div_13_span_71_Template, 2, 0, "span", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "ion-button", 59);
    \u0275\u0275listener("click", function EntrenadorMiPlanPage_div_13_Template_ion_button_click_72_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarTarjeta());
    });
    \u0275\u0275text(73, " REGISTRAR TARJETA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 60)(75, "span", 32);
    \u0275\u0275text(76, "\xDAltimas Facturas (Consolidadas)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 61);
    \u0275\u0275template(78, EntrenadorMiPlanPage_div_13_div_78_Template, 11, 4, "div", 62)(79, EntrenadorMiPlanPage_div_13_div_79_Template, 2, 0, "div", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 15, ctx_r1.sub.pending_commission, "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(15, 18, ctx_r1.sub.price_clp, "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 21, ctx_r1.sub.next_billing_date, "dd MMM"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("no-trial", ctx_r1.sub.days_remaining === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.sub.days_remaining);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.sub.days_remaining / 90 * 100, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.sub.plan_name);
    \u0275\u0275advance(16);
    \u0275\u0275classProp("active", ctx_r1.sub.recaudo_mp_activo);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.sub.card_last_four);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.sub.card_last_four);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.sub.billing_history);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.sub.billing_history || ctx_r1.sub.billing_history.length === 0);
  }
}
var _EntrenadorMiPlanPage = class _EntrenadorMiPlanPage {
  constructor(http, alertCtrl, toastCtrl, navCtrl) {
    this.http = http;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.navCtrl = navCtrl;
    this.sub = null;
    this.plans = [];
    this.loading = true;
    this.error = false;
    this.coachId = 0;
    addIcons({
      addCircleOutline,
      starOutline,
      checkmarkCircleOutline,
      openOutline,
      warningOutline,
      cardOutline,
      calendarOutline,
      trendingUpOutline,
      shieldCheckmarkOutline,
      diamondOutline,
      chevronBackOutline
    });
  }
  ngOnInit() {
    this.coachId = Number(localStorage.getItem("userId"));
    this.loadSubscription();
    this.loadPlansData();
  }
  loadSubscription() {
    this.loading = true;
    const token = localStorage.getItem("token");
    this.http.get(`${environment.apiUrl}/subscriptions/get_subscription_status.php?coach_id=${this.coachId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-Authorization": `Bearer ${token}`
      }
    }).subscribe({
      next: (res) => {
        this.sub = res;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error al cargar la suscripci\xF3n:", err);
        this.sub = { status: "inactive" };
        this.loading = false;
      }
    });
  }
  loadPlansData() {
    const token = localStorage.getItem("token");
    this.http.get(`${environment.apiUrl}/subscriptions/get_plans.php`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-Authorization": `Bearer ${token}`
      }
    }).subscribe({
      next: (res) => {
        this.plans = res;
      },
      error: (err) => {
        console.error("Error al cargar planes:", err);
      }
    });
  }
  gestionarPlan() {
    return __async(this, null, function* () {
      if (this.plans.length === 0) {
        yield this.showToast("Cargando planes...", "warning");
        return;
      }
      const inputs = this.plans.map((p) => ({
        name: "planId",
        type: "radio",
        label: `${p.name} ($${Number(p.price_clp).toLocaleString()} CLP)`,
        value: p.id,
        checked: this.sub?.plan_id == p.id
      }));
      const alert = yield this.alertCtrl.create({
        header: "CAMBIAR MI PLAN \u{1F48E}",
        message: "Selecciona el nuevo plan para tu academia:",
        inputs,
        cssClass: "custom-alert-nike",
        buttons: [
          {
            text: "Cancelar",
            role: "cancel"
          },
          {
            text: "Actualizar",
            handler: (selectedPlanId) => {
              if (selectedPlanId) {
                this.cambiarPlan(selectedPlanId);
              }
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  cambiarPlan(planId) {
    return __async(this, null, function* () {
      this.loading = true;
      const token = localStorage.getItem("token");
      this.http.post(`${environment.apiUrl}/subscriptions/update_subscription.php`, {
        coach_id: this.coachId,
        plan_id: planId
      }, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "X-Authorization": `Bearer ${token}`
        }
      }).subscribe({
        next: (res) => __async(this, null, function* () {
          this.loading = false;
          if (res.success) {
            yield this.showToast("\xA1Plan Actualizado Correctamente! \u{1F48E}", "success");
            this.loadSubscription();
          } else {
            yield this.showToast(res.message || "Error al cambiar de plan", "danger");
          }
        }),
        error: (err) => __async(this, null, function* () {
          this.loading = false;
          yield this.showToast("Error de conexi\xF3n. Int\xE9ntalo m\xE1s tarde.", "danger");
        })
      });
    });
  }
  cambiarTarjeta() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "VINCULAR TARJETA \u{1F4B3}",
        subHeader: "Portal Seguro (SSL)",
        inputs: [
          { name: "name", type: "text", placeholder: "Nombre titular" },
          { name: "num", type: "number", placeholder: "0000 0000 0000 0000 (16 d\xEDgitos)", attributes: { maxlength: 16 } },
          { name: "exp", type: "text", placeholder: "Expiraci\xF3n (MM/YY)", attributes: { maxlength: 5 } },
          { name: "cvv", type: "number", placeholder: "CVV (***)", attributes: { maxlength: 4 } }
        ],
        cssClass: "custom-alert-nike",
        buttons: [
          {
            text: "Cancelar",
            role: "cancel"
          },
          {
            text: "Vincular Tarjeta",
            handler: (data) => __async(this, null, function* () {
              if (!data.name || !data.num) {
                yield this.showToast("Por favor completa los datos", "warning");
                return false;
              }
              const lastFour = data.num.toString().slice(-4) || "4242";
              this.confirmarVinculacion(lastFour);
              return true;
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  confirmarVinculacion(lastFour) {
    return __async(this, null, function* () {
      this.loading = true;
      setTimeout(() => __async(this, null, function* () {
        this.loading = false;
        yield this.showToast(`Tarjeta terminada en **** ${lastFour} vinculada correctamente\u26A1`, "success");
        if (this.sub)
          this.sub.card_last_four = lastFour;
      }), 1500);
    });
  }
  showToast(message, color) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message,
        duration: 3e3,
        color,
        position: "bottom",
        mode: "ios"
      });
      yield toast.present();
    });
  }
  goBack() {
    this.navCtrl.back();
  }
};
_EntrenadorMiPlanPage.\u0275fac = function EntrenadorMiPlanPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EntrenadorMiPlanPage)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(NavController));
};
_EntrenadorMiPlanPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrenadorMiPlanPage, selectors: [["app-entrenador-mi-plan"]], decls: 17, vars: 3, consts: [[1, "ion-no-border", "header-nike-light"], [1, "ion-text-center"], [1, "page-container"], [1, "page-header-flex"], [1, "section-title"], [1, "section-subtitle"], ["class", "loading-state", 4, "ngIf"], ["class", "plan-selection animate-up", 4, "ngIf"], ["class", "billing-content animate-up", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 2, "--background", "#000", "--color", "#fff", 3, "click"], ["name", "chevron-back-outline"], [1, "loading-state"], ["name", "crescent", "color", "dark"], [1, "plan-selection", "animate-up"], [1, "empty-state-card", "mb-4", 2, "flex-direction", "column", "text-align", "center", "padding", "40px 20px"], [1, "icon-box", 2, "margin", "0 auto 20px"], ["name", "diamond-outline"], [1, "txt"], [2, "font-size", "20px"], [2, "font-size", "14px", "margin-top", "10px"], ["expand", "block", 1, "mt-4", "nike-btn-black", 2, "width", "100%", 3, "click"], [1, "billing-content", "animate-up"], [1, "overview-row"], [1, "stat-widget", "highlight-yellow"], ["name", "trending-up-outline"], [1, "widget-data"], [1, "widget-val"], [1, "widget-label"], [1, "stat-widget"], ["name", "calendar-outline"], [1, "billing-card", "trial-card", "mt-3"], [1, "card-label"], [1, "countdown-row"], [1, "num"], [1, "progress-box"], [1, "bar-bg"], [1, "bar-fill"], [1, "footer-note"], [1, "billing-card", "mt-3", "border-dark"], [1, "plan-status-row"], [1, "plan-meta"], [1, "plan-title"], [1, "status-indicator"], [1, "dot"], [1, "status-txt"], ["fill", "outline", "color", "dark", "size", "small", 2, "font-weight", "800", 3, "click"], [1, "billing-card", "mt-3"], [1, "d-flex", "justify-between", "align-center", "mt-2"], [2, "margin", "0", "font-size", "15px", "font-weight", "900"], [2, "font-size", "12px", "color", "#888", "margin", "4px 0 0 0"], [1, "toggle-switch-pm", 3, "click"], [1, "thumb"], [1, "payment-method-box", "mt-2"], [1, "card-brand"], ["name", "card-outline"], [1, "card-info"], ["class", "success-txt", 4, "ngIf"], ["class", "error-txt", 4, "ngIf"], ["expand", "block", "fill", "solid", 1, "mt-4", "nike-btn-black", 3, "click"], [1, "billing-card", "mt-3", "mb-5"], [1, "history-list", "mt-3"], ["class", "history-item", 4, "ngFor", "ngForOf"], ["style", "color: #888; font-size:12px;", 4, "ngIf"], [1, "success-txt"], [1, "error-txt"], [1, "history-item"], [1, "h-main"], ["name", "shield-checkmark-outline"], [1, "h-status", "success"], [2, "color", "#888", "font-size", "12px"]], template: function EntrenadorMiPlanPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title", 1);
    \u0275\u0275text(3, "Mi Plan y Facturaci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content")(5, "div", 2)(6, "div", 3)(7, "h1", 4);
    \u0275\u0275text(8, "Gesti\xF3n Centralizada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 5);
    \u0275\u0275text(10, "Administraci\xF3n de tu academia en PadelBlox");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, EntrenadorMiPlanPage_div_11_Template, 4, 0, "div", 6)(12, EntrenadorMiPlanPage_section_12_Template, 14, 0, "section", 7)(13, EntrenadorMiPlanPage_div_13_Template, 80, 24, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-fab", 9)(15, "ion-fab-button", 10);
    \u0275\u0275listener("click", function EntrenadorMiPlanPage_Template_ion_fab_button_click_15_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(16, "ion-icon", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && (!ctx.sub || ctx.sub.status === "inactive" || ctx.sub.status === "canceled" || ctx.sub.status === "past_due" || ctx.sub.status === "unpaid"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.sub && ctx.sub.status !== "inactive" && ctx.sub.status !== "canceled" && ctx.sub.status !== "past_due" && ctx.sub.status !== "unpaid");
  }
}, dependencies: [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonSpinner,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  IonFab,
  IonFabButton,
  DecimalPipe,
  DatePipe
], styles: ["\n\n.header-nike-light[_ngcontent-%COMP%] {\n  --background: #fff;\n  --border-color: #f1f5f9;\n  border-bottom: 1px solid #f1f5f9;\n}\n.header-nike-light[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n}\n.page-container[_ngcontent-%COMP%] {\n  padding: 20px 25px 40px;\n  background: #f8fafc;\n  min-height: 100%;\n}\n.page-header-flex[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.page-header-flex[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  color: #000;\n}\n.page-header-flex[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n  margin: 5px 0 0 0;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 40vh;\n  color: #64748b;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-weight: 700;\n  font-size: 14px;\n}\n.empty-state-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border: 1px solid #f1f5f9;\n}\n.empty-state-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #ccff00;\n  background: #000;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  flex-shrink: 0;\n}\n.empty-state-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: -0.2px;\n}\n.empty-state-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  padding: 25px 20px;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n  border: 2px solid #f1f5f9;\n}\n.plan-card[_ngcontent-%COMP%]   .badge-promo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: #000;\n  color: #ccff00;\n  font-size: 9px;\n  font-weight: 900;\n  padding: 4px 10px;\n  border-radius: 8px;\n  letter-spacing: 0.5px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.plan-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  margin: 0 0 15px;\n  letter-spacing: -0.5px;\n  color: #000;\n}\n.plan-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n  margin-bottom: 10px;\n  color: #000;\n}\n.plan-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n}\n.plan-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #64748b;\n}\n.plan-card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n.plan-card[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.plan-card[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.plan-card[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 18px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.plan-card[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #334155;\n}\n.overview-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 15px;\n}\n.overview-row[_ngcontent-%COMP%]   .stat-widget[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n}\n.overview-row[_ngcontent-%COMP%]   .stat-widget.highlight-yellow[_ngcontent-%COMP%] {\n  border: 2px solid #ccff00;\n}\n.overview-row[_ngcontent-%COMP%]   .stat-widget[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #000;\n  background: #f1f5f9;\n  padding: 10px;\n  border-radius: 12px;\n}\n.overview-row[_ngcontent-%COMP%]   .stat-widget[_ngcontent-%COMP%]   .widget-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: #000;\n}\n.overview-row[_ngcontent-%COMP%]   .stat-widget[_ngcontent-%COMP%]   .widget-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.billing-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n}\n.billing-card.border-dark[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n}\n.billing-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.trial-card[_ngcontent-%COMP%] {\n  background: #111;\n  color: #fff;\n}\n.trial-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  color: #888;\n  border-bottom-color: #333;\n}\n.trial-card[_ngcontent-%COMP%]   .countdown-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin: 15px 0;\n}\n.trial-card[_ngcontent-%COMP%]   .countdown-row[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 950;\n  color: #ccff00;\n}\n.trial-card[_ngcontent-%COMP%]   .countdown-row[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  opacity: 0.8;\n  letter-spacing: 0.5px;\n}\n.trial-card[_ngcontent-%COMP%]   .progress-box[_ngcontent-%COMP%]   .bar-bg[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  height: 6px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.trial-card[_ngcontent-%COMP%]   .progress-box[_ngcontent-%COMP%]   .bar-bg[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  background: #ccff00;\n  height: 100%;\n}\n.trial-card[_ngcontent-%COMP%]   .footer-note[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  margin-top: 15px;\n}\n.plan-status-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.plan-status-row[_ngcontent-%COMP%]   .plan-title[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 18px;\n  font-weight: 900;\n  color: #000;\n}\n.plan-status-row[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.plan-status-row[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #22c55e;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);\n}\n.plan-status-row[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%]   .status-txt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #22c55e;\n  text-transform: uppercase;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.align-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.toggle-switch-pm[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 24px;\n  background: #e2e8f0;\n  border-radius: 12px;\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.toggle-switch-pm[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: 0.3s;\n}\n.toggle-switch-pm.active[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.toggle-switch-pm.active[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  left: 22px;\n}\n.payment-method-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.payment-method-box[_ngcontent-%COMP%]   .card-brand[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 30px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #000;\n  border: 1px solid #e2e8f0;\n}\n.payment-method-box[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method-box[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #000;\n  font-weight: 800;\n}\n.payment-method-box[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .success-txt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 600;\n  margin-top: 3px;\n}\n.payment-method-box[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .error-txt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #ef4444;\n  font-weight: 700;\n  margin-top: 3px;\n}\n.history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .h-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .h-main[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #22c55e;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .h-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #000;\n  display: block;\n  margin-bottom: 2px;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .h-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 600;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .h-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .h-status.success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #22c55e;\n}\n  .custom-alert-nike .alert-wrapper {\n  border-radius: 24px !important;\n}\n  .custom-alert-nike .alert-head {\n  padding: 20px 20px 10px;\n  text-align: center;\n}\n  .custom-alert-nike .alert-head h2 {\n  font-weight: 900 !important;\n  color: #000;\n  font-size: 18px;\n}\n  .custom-alert-nike .alert-button-group {\n  padding: 10px 15px 15px;\n  gap: 10px;\n}\n  .custom-alert-nike .alert-button-group .alert-button {\n  border-radius: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n  .custom-alert-nike .alert-button-group .alert-button.alert-button-cancel {\n  color: #64748b;\n}\n  .custom-alert-nike .alert-button-group .alert-button:not(.alert-button-cancel) {\n  background: #ccff00;\n  color: #000;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.nike-btn-black[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 14px;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  height: 54px;\n  margin: 0;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=entrenador-mi-plan.page.css.map */"] });
var EntrenadorMiPlanPage = _EntrenadorMiPlanPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenadorMiPlanPage, [{
    type: Component,
    args: [{ selector: "app-entrenador-mi-plan", standalone: true, imports: [
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButton,
      IonIcon,
      IonSpinner,
      CommonModule,
      FormsModule,
      IonFab,
      IonFabButton
    ], template: `<ion-header class="ion-no-border header-nike-light">
  <ion-toolbar>
    <ion-title class="ion-text-center">Mi Plan y Facturaci\xF3n</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div class="page-container">

    <!-- Page Header Info -->
    <div class="page-header-flex">
      <h1 class="section-title">Gesti\xF3n Centralizada</h1>
      <p class="section-subtitle">Administraci\xF3n de tu academia en PadelBlox</p>
    </div>

    <div *ngIf="loading" class="loading-state">
      <ion-spinner name="crescent" color="dark"></ion-spinner>
      <p>Cargando informaci\xF3n del plan...</p>
    </div>

    <!-- SELECCI\xD3N DE PLANES (CUANDO NO HAY PLAN ACTIVO) -->
    <section class="plan-selection animate-up" *ngIf="!loading && (!sub || sub.status === 'inactive' || sub.status === 'canceled' || sub.status === 'past_due' || sub.status === 'unpaid')">
      <div class="empty-state-card mb-4" style="flex-direction: column; text-align: center; padding: 40px 20px;">
        <div class="icon-box" style="margin: 0 auto 20px;">
          <ion-icon name="diamond-outline"></ion-icon>
        </div>
        <div class="txt">
          <h3 style="font-size: 20px;">Activa tu Periodo de Prueba</h3>
          <p style="font-size: 14px; margin-top: 10px;">Selecciona tu plan para empezar tus <b>3 meses de regalo ($0 CLP)</b>.</p>
        </div>
        
        <ion-button expand="block" (click)="gestionarPlan()" class="mt-4 nike-btn-black" style="width: 100%;">
          ELEGIR MI PLAN AHORA
        </ion-button>
      </div>
    </section>

    <!-- SUSCRIPCION ACTIVA -->
    <div class="billing-content animate-up" *ngIf="!loading && sub && sub.status !== 'inactive' && sub.status !== 'canceled' && sub.status !== 'past_due' && sub.status !== 'unpaid'">
      
      <div class="overview-row">
        <div class="stat-widget highlight-yellow">
          <ion-icon name="trending-up-outline"></ion-icon>
          <div class="widget-data">
            <div class="widget-val">\${{ sub.pending_commission | number:'1.0-0' }}</div>
            <div class="widget-label">Comisi\xF3n Mes (Por Cobrar)</div>
          </div>
        </div>
        <div class="stat-widget">
          <ion-icon name="diamond-outline"></ion-icon>
          <div class="widget-data">
            <div class="widget-val">\${{ sub.price_clp | number:'1.0-0' }}</div>
            <div class="widget-label">Costo Plan</div>
          </div>
        </div>
        <div class="stat-widget">
          <ion-icon name="calendar-outline"></ion-icon>
          <div class="widget-data">
            <div class="widget-val">{{ sub.next_billing_date | date:'dd MMM' }}</div>
            <div class="widget-label">Pr\xF3ximo Cobro Consolidad</div>
          </div>
        </div>
      </div>

      <div class="billing-card trial-card mt-3" [class.no-trial]="sub.days_remaining === 0">
        <span class="card-label">D\xEDas Disponibles Gratis</span>
        <div class="countdown-row">
          <span class="num">{{ sub.days_remaining }}</span>
          <span class="txt">D\xCDAS RESTANTES</span>
        </div>
        <div class="progress-box">
          <div class="bar-bg">
            <div class="bar-fill" [style.width.%]="(sub.days_remaining / 90) * 100"></div>
          </div>
        </div>
        <p class="footer-note">Al terminar, se cobrar\xE1 el plan + comisiones acumuladas del mes.</p>
      </div>

      <div class="billing-card mt-3 border-dark">
        <div class="plan-status-row">
          <div class="plan-meta">
            <h3 class="plan-title">{{ sub.plan_name }}</h3>
            <div class="status-indicator">
              <span class="dot"></span>
              <span class="status-txt">Suscripci\xF3n Activa</span>
            </div>
          </div>
          <ion-button fill="outline" color="dark" size="small" style="font-weight: 800;" (click)="gestionarPlan()">
            Cambiar Plan
          </ion-button>
        </div>
      </div>

      <div class="billing-card mt-3">
        <span class="card-label">Configuraci\xF3n MP</span>
        <div class="d-flex justify-between align-center mt-2">
          <div>
            <h3 style="margin: 0; font-size: 15px; font-weight: 900;">Recaudar con Mercado Pago</h3>
            <p style="font-size: 12px; color: #888; margin: 4px 0 0 0;">Si se desactiva, pasa a saldo pendiente.</p>
          </div>
          <div class="toggle-switch-pm" [class.active]="sub.recaudo_mp_activo" (click)="sub.recaudo_mp_activo = !sub.recaudo_mp_activo">
            <div class="thumb"></div>
          </div>
        </div>
      </div>

      <div class="billing-card mt-3">
        <span class="card-label">Tarjeta para Pago de Comisiones</span>
        <div class="payment-method-box mt-2">
          <div class="card-brand"><ion-icon name="card-outline"></ion-icon></div>
          <div class="card-info">
            <b>Visa Facturaci\xF3n Interna</b>
            <span *ngIf="sub.card_last_four" class="success-txt">Finalizada en **** {{ sub.card_last_four }}</span>
            <span *ngIf="!sub.card_last_four" class="error-txt">Sin tarjeta registrada</span>
          </div>
        </div>
        <ion-button expand="block" fill="solid" (click)="cambiarTarjeta()" class="mt-4 nike-btn-black">
          REGISTRAR TARJETA 
        </ion-button>
      </div>

      <div class="billing-card mt-3 mb-5">
        <span class="card-label">\xDAltimas Facturas (Consolidadas)</span>
        <div class="history-list mt-3">
          <div class="history-item" *ngFor="let h of sub.billing_history">
            <div class="h-main">
              <ion-icon name="shield-checkmark-outline"></ion-icon>
              <div>
                <strong>{{ h.date | date:'dd/MM/yy' }}</strong>
                <p>Pack/Suscripci\xF3n</p>
              </div>
            </div>
            <div class="h-status success">OK</div>
          </div>
          <div *ngIf="!sub.billing_history || sub.billing_history.length === 0" style="color: #888; font-size:12px;">
             No hay facturas previas.
          </div>
        </div>
      </div>

    </div>

  </div>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button class="nike-fab back-fab" (click)="goBack()" style="--background: #000; --color: #fff;">
          <ion-icon name="chevron-back-outline"></ion-icon>
      </ion-fab-button>
  </ion-fab>
</ion-content>
`, styles: ["/* src/app/pages/entrenador-mi-plan/entrenador-mi-plan.page.scss */\n.header-nike-light {\n  --background: #fff;\n  --border-color: #f1f5f9;\n  border-bottom: 1px solid #f1f5f9;\n}\n.header-nike-light ion-title {\n  font-size: 16px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n}\n.page-container {\n  padding: 20px 25px 40px;\n  background: #f8fafc;\n  min-height: 100%;\n}\n.page-header-flex {\n  margin-bottom: 25px;\n}\n.page-header-flex .section-title {\n  font-size: 22px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  color: #000;\n}\n.page-header-flex .section-subtitle {\n  color: #64748b;\n  font-size: 12px;\n  margin: 5px 0 0 0;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 40vh;\n  color: #64748b;\n}\n.loading-state p {\n  margin-top: 15px;\n  font-weight: 700;\n  font-size: 14px;\n}\n.empty-state-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border: 1px solid #f1f5f9;\n}\n.empty-state-card .icon-box {\n  font-size: 32px;\n  color: #ccff00;\n  background: #000;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  flex-shrink: 0;\n}\n.empty-state-card h3 {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 900;\n  color: #000;\n  letter-spacing: -0.2px;\n}\n.empty-state-card p {\n  margin: 0;\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.4;\n}\n.plans-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.plan-card {\n  background: #fff;\n  border-radius: 24px;\n  padding: 25px 20px;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n  border: 2px solid #f1f5f9;\n}\n.plan-card .badge-promo {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: #000;\n  color: #ccff00;\n  font-size: 9px;\n  font-weight: 900;\n  padding: 4px 10px;\n  border-radius: 8px;\n  letter-spacing: 0.5px;\n}\n.plan-card .plan-type {\n  font-size: 11px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.plan-card h3 {\n  font-size: 22px;\n  font-weight: 950;\n  margin: 0 0 15px;\n  letter-spacing: -0.5px;\n  color: #000;\n}\n.plan-card .price {\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n  margin-bottom: 10px;\n  color: #000;\n}\n.plan-card .price .amount {\n  font-size: 28px;\n  font-weight: 900;\n}\n.plan-card .price .period {\n  font-size: 14px;\n  font-weight: 700;\n  color: #64748b;\n}\n.plan-card .desc {\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n.plan-card .features-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.plan-card .features-list .feature-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.plan-card .features-list .feature-item ion-icon {\n  color: #22c55e;\n  font-size: 18px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.plan-card .features-list .feature-item span {\n  font-size: 12px;\n  font-weight: 700;\n  color: #334155;\n}\n.overview-row {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 15px;\n}\n.overview-row .stat-widget {\n  background: #fff;\n  border-radius: 20px;\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n}\n.overview-row .stat-widget.highlight-yellow {\n  border: 2px solid #ccff00;\n}\n.overview-row .stat-widget ion-icon {\n  font-size: 28px;\n  color: #000;\n  background: #f1f5f9;\n  padding: 10px;\n  border-radius: 12px;\n}\n.overview-row .stat-widget .widget-val {\n  font-size: 20px;\n  font-weight: 900;\n  color: #000;\n}\n.overview-row .stat-widget .widget-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.billing-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);\n}\n.billing-card.border-dark {\n  border: 2px solid #000;\n}\n.billing-card .card-label {\n  display: block;\n  font-size: 10px;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.trial-card {\n  background: #111;\n  color: #fff;\n}\n.trial-card .card-label {\n  color: #888;\n  border-bottom-color: #333;\n}\n.trial-card .countdown-row {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin: 15px 0;\n}\n.trial-card .countdown-row .num {\n  font-size: 32px;\n  font-weight: 950;\n  color: #ccff00;\n}\n.trial-card .countdown-row .txt {\n  font-size: 12px;\n  font-weight: 800;\n  opacity: 0.8;\n  letter-spacing: 0.5px;\n}\n.trial-card .progress-box .bar-bg {\n  background: rgba(255, 255, 255, 0.1);\n  height: 6px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.trial-card .progress-box .bar-bg .bar-fill {\n  background: #ccff00;\n  height: 100%;\n}\n.trial-card .footer-note {\n  font-size: 11px;\n  color: #888;\n  margin-top: 15px;\n}\n.plan-status-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.plan-status-row .plan-title {\n  margin: 0 0 5px;\n  font-size: 18px;\n  font-weight: 900;\n  color: #000;\n}\n.plan-status-row .status-indicator {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.plan-status-row .status-indicator .dot {\n  width: 8px;\n  height: 8px;\n  background: #22c55e;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);\n}\n.plan-status-row .status-indicator .status-txt {\n  font-size: 11px;\n  font-weight: 800;\n  color: #22c55e;\n  text-transform: uppercase;\n}\n.d-flex {\n  display: flex;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.align-center {\n  align-items: center;\n}\n.toggle-switch-pm {\n  width: 44px;\n  height: 24px;\n  background: #e2e8f0;\n  border-radius: 12px;\n  position: relative;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.toggle-switch-pm .thumb {\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: 0.3s;\n}\n.toggle-switch-pm.active {\n  background: #22c55e;\n}\n.toggle-switch-pm.active .thumb {\n  left: 22px;\n}\n.payment-method-box {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.payment-method-box .card-brand {\n  width: 40px;\n  height: 30px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #000;\n  border: 1px solid #e2e8f0;\n}\n.payment-method-box .card-info {\n  display: flex;\n  flex-direction: column;\n}\n.payment-method-box .card-info b {\n  font-size: 13px;\n  color: #000;\n  font-weight: 800;\n}\n.payment-method-box .card-info .success-txt {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 600;\n  margin-top: 3px;\n}\n.payment-method-box .card-info .error-txt {\n  font-size: 11px;\n  color: #ef4444;\n  font-weight: 700;\n  margin-top: 3px;\n}\n.history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.history-list .history-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.history-list .history-item:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.history-list .history-item .h-main {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.history-list .history-item .h-main ion-icon {\n  font-size: 20px;\n  color: #22c55e;\n}\n.history-list .history-item .h-main strong {\n  font-size: 13px;\n  font-weight: 800;\n  color: #000;\n  display: block;\n  margin-bottom: 2px;\n}\n.history-list .history-item .h-main p {\n  margin: 0;\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 600;\n}\n.history-list .history-item .h-status {\n  font-size: 10px;\n  font-weight: 900;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.history-list .history-item .h-status.success {\n  background: #f0fdf4;\n  color: #22c55e;\n}\n::ng-deep .custom-alert-nike .alert-wrapper {\n  border-radius: 24px !important;\n}\n::ng-deep .custom-alert-nike .alert-head {\n  padding: 20px 20px 10px;\n  text-align: center;\n}\n::ng-deep .custom-alert-nike .alert-head h2 {\n  font-weight: 900 !important;\n  color: #000;\n  font-size: 18px;\n}\n::ng-deep .custom-alert-nike .alert-button-group {\n  padding: 10px 15px 15px;\n  gap: 10px;\n}\n::ng-deep .custom-alert-nike .alert-button-group .alert-button {\n  border-radius: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n::ng-deep .custom-alert-nike .alert-button-group .alert-button.alert-button-cancel {\n  color: #64748b;\n}\n::ng-deep .custom-alert-nike .alert-button-group .alert-button:not(.alert-button-cancel) {\n  background: #ccff00;\n  color: #000;\n}\n.mb-4 {\n  margin-bottom: 20px;\n}\n.mb-5 {\n  margin-bottom: 30px;\n}\n.mt-2 {\n  margin-top: 10px;\n}\n.mt-3 {\n  margin-top: 15px;\n}\n.mt-4 {\n  margin-top: 20px;\n}\n.nike-btn-black {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 14px;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  height: 54px;\n  margin: 0;\n}\n.animate-up {\n  animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=entrenador-mi-plan.page.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: AlertController }, { type: ToastController }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrenadorMiPlanPage, { className: "EntrenadorMiPlanPage", filePath: "src/app/pages/entrenador-mi-plan/entrenador-mi-plan.page.ts", lineNumber: 46 });
})();
export {
  EntrenadorMiPlanPage
};
//# sourceMappingURL=entrenador-mi-plan.page-C7KGJ5O2.js.map

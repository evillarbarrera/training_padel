import {
  Chart,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  index,
  plugin_legend,
  plugin_tooltip
} from "./chunk-NH3TV3QI.js";
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from "./chunk-5YKSH3EK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
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
import "./chunk-Q3N56TRI.js";

// src/app/pages/alumno-detalle/alumno-detalle.page.ts
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, index, plugin_tooltip, plugin_legend);
var _AlumnoDetallePage = class _AlumnoDetallePage {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.alumnoId = null;
  }
  ngOnInit() {
    this.alumnoId = this.route.snapshot.paramMap.get("id");
  }
  ngAfterViewInit() {
    this.crearGraficoRadar();
  }
  crearGraficoRadar() {
    const ctx = document.getElementById("radarChart");
    this.chart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Volea",
          "Smash",
          "Bandeja",
          "Defensa",
          "Fuerza",
          "Control",
          "Velocidad"
        ],
        datasets: [
          {
            label: "Puntuaci\xF3n",
            data: [80, 90, 75, 85, 95, 70, 88],
            fill: true,
            borderColor: "black",
            pointBackgroundColor: "black"
          }
        ]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            suggestedMax: 100,
            angleLines: { color: "#5ed684ff" },
            grid: { color: "#bbb" },
            pointLabels: { color: "#000", font: { size: 12 } }
          }
        }
      }
    });
  }
  goBack() {
    this.router.navigate(["/alumnos"]);
  }
};
_AlumnoDetallePage.\u0275fac = function AlumnoDetallePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlumnoDetallePage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_AlumnoDetallePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlumnoDetallePage, selectors: [["app-alumno-detalle"]], decls: 46, vars: 1, consts: [[1, "header-nike", "profile-hero"], [1, "header-overlay"], [1, "header-content", "animate-fade"], [1, "avatar-wrapper"], ["src", "https://i.pravatar.cc/200?img=12", 1, "avatar-img"], [1, "status-dot", "online"], [1, "header-title"], [1, "header-sub"], [1, "dashboard-container"], [1, "nike-card", "chart-card", "animate-up"], [1, "card-header-simple"], [1, "view-all"], [1, "chart-container"], ["id", "radarChart"], [1, "stats-grid", "animate-up", 2, "animation-delay", "0.1s"], [1, "nike-card", "stat-item-small"], [1, "label"], [1, "value"], [1, "actions-list", "animate-up", 2, "animation-delay", "0.15s"], ["expand", "block", 1, "nike-button", "main-btn"], ["name", "chatbubble-outline", "slot", "start"], ["expand", "block", "fill", "outline", 1, "nike-button", "outline-btn"], ["name", "document-text-outline", "slot", "start"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"]], template: function AlumnoDetallePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
    \u0275\u0275element(5, "img", 4)(6, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10, "Alumno de Academia");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h3");
    \u0275\u0275text(15, "Rendimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "Estad\xEDsticas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12);
    \u0275\u0275element(19, "canvas", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "span", 16);
    \u0275\u0275text(23, "Packs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 17);
    \u0275\u0275text(25, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 15)(27, "span", 16);
    \u0275\u0275text(28, "Realizadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 17);
    \u0275\u0275text(30, "12");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "span", 16);
    \u0275\u0275text(33, "Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 17);
    \u0275\u0275text(35, "4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 18)(37, "ion-button", 19);
    \u0275\u0275element(38, "ion-icon", 20);
    \u0275\u0275text(39, " Enviar Mensaje ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ion-button", 21);
    \u0275\u0275element(41, "ion-icon", 22);
    \u0275\u0275text(42, " Ver Historial ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "ion-fab", 23)(44, "ion-fab-button", 24);
    \u0275\u0275listener("click", function AlumnoDetallePage_Template_ion_fab_button_click_44_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(45, "ion-icon", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Jugador #", ctx.alumnoId);
  }
}, dependencies: [
  CommonModule,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
], styles: ["\n\n.header-nike[_ngcontent-%COMP%] {\n  height: 250px;\n  position: relative;\n  background: url(/assets/mod-packs.jpg) center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 25px;\n  border-radius: 0 0 40px 40px;\n  overflow: hidden;\n  text-align: center;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.8));\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 15px;\n}\n.header-content[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 28px;\n  object-fit: cover;\n  transform: rotate(-3deg);\n  border: 3px solid white;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n}\n.header-content[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid white;\n}\n.header-content[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .status-dot.online[_ngcontent-%COMP%] {\n  background: #34c759;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: 600;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 25px 25px 100px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 25px;\n}\n.chart-card[_ngcontent-%COMP%]   .card-header-simple[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.chart-card[_ngcontent-%COMP%]   .card-header-simple[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n}\n.chart-card[_ngcontent-%COMP%]   .card-header-simple[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.stat-item-small[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px 10px;\n  border: 1px solid #f2f2f7;\n}\n.stat-item-small[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8e8e93;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.stat-item-small[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n}\n.actions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.actions-list[_ngcontent-%COMP%]   .nike-button[_ngcontent-%COMP%] {\n  height: 56px;\n  margin: 0;\n}\n.actions-list[_ngcontent-%COMP%]   .nike-button.outline-btn[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-primary);\n  --color: var(--ion-color-primary);\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=alumno-detalle.page.css.map */"] });
var AlumnoDetallePage = _AlumnoDetallePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlumnoDetallePage, [{
    type: Component,
    args: [{ selector: "app-alumno-detalle", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonList,
      IonItem,
      IonLabel,
      IonFab,
      IonFabButton,
      IonIcon,
      IonButton
    ], template: '<ion-content>\n\n  <!-- Hero Header (Profile) -->\n  <div class="header-nike profile-hero">\n    <div class="header-overlay"></div>\n    <div class="header-content animate-fade">\n      <div class="avatar-wrapper">\n        <img src="https://i.pravatar.cc/200?img=12" class="avatar-img" />\n        <div class="status-dot online"></div>\n      </div>\n      <h1 class="header-title">Jugador #{{ alumnoId }}</h1>\n      <p class="header-sub">Alumno de Academia</p>\n    </div>\n  </div>\n\n  <!-- Main Content -->\n  <div class="dashboard-container">\n\n    <!-- Radar Chart (Performance) -->\n    <div class="nike-card chart-card animate-up">\n      <div class="card-header-simple">\n        <h3>Rendimiento</h3>\n        <span class="view-all">Estad\xEDsticas</span>\n      </div>\n      <div class="chart-container">\n        <canvas id="radarChart"></canvas>\n      </div>\n    </div>\n\n    <!-- Quick Stats -->\n    <div class="stats-grid animate-up" style="animation-delay: 0.1s;">\n\n      <div class="nike-card stat-item-small">\n        <span class="label">Packs</span>\n        <span class="value">3</span>\n      </div>\n\n      <div class="nike-card stat-item-small">\n        <span class="label">Realizadas</span>\n        <span class="value">12</span>\n      </div>\n\n      <div class="nike-card stat-item-small">\n        <span class="label">Pendientes</span>\n        <span class="value">4</span>\n      </div>\n\n    </div>\n\n    <!-- Actions List -->\n    <div class="actions-list animate-up" style="animation-delay: 0.15s;">\n      <ion-button expand="block" class="nike-button main-btn">\n        <ion-icon name="chatbubble-outline" slot="start"></ion-icon>\n        Enviar Mensaje\n      </ion-button>\n\n      <ion-button expand="block" fill="outline" class="nike-button outline-btn">\n        <ion-icon name="document-text-outline" slot="start"></ion-icon>\n        Ver Historial\n      </ion-button>\n    </div>\n\n  </div>\n\n  <!-- Back FAB -->\n  <ion-fab vertical="bottom" horizontal="end" slot="fixed">\n    <ion-fab-button class="nike-fab back-fab" (click)="goBack()">\n      <ion-icon name="chevron-back-outline"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>', styles: ["/* src/app/pages/alumno-detalle/alumno-detalle.page.scss */\n.header-nike {\n  height: 250px;\n  position: relative;\n  background: url(/assets/mod-packs.jpg) center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 25px;\n  border-radius: 0 0 40px 40px;\n  overflow: hidden;\n  text-align: center;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.8));\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .avatar-wrapper {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 15px;\n}\n.header-content .avatar-wrapper .avatar-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 28px;\n  object-fit: cover;\n  transform: rotate(-3deg);\n  border: 3px solid white;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n}\n.header-content .avatar-wrapper .status-dot {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid white;\n}\n.header-content .avatar-wrapper .status-dot.online {\n  background: #34c759;\n}\n.header-content .header-title {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content .header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: 600;\n}\n.dashboard-container {\n  padding: 25px 25px 100px;\n}\n.chart-card {\n  padding: 20px;\n  margin-bottom: 25px;\n}\n.chart-card .card-header-simple {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.chart-card .card-header-simple h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n}\n.chart-card .card-header-simple .view-all {\n  font-size: 12px;\n  font-weight: 700;\n  color: #8e8e93;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chart-card .chart-container {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chart-card .chart-container canvas {\n  width: 100% !important;\n  height: 100% !important;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.stat-item-small {\n  text-align: center;\n  padding: 15px 10px;\n  border: 1px solid #f2f2f7;\n}\n.stat-item-small .label {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8e8e93;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.stat-item-small .value {\n  display: block;\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n}\n.actions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.actions-list .nike-button {\n  height: 56px;\n  margin: 0;\n}\n.actions-list .nike-button.outline-btn {\n  --border-color: var(--ion-color-primary);\n  --color: var(--ion-color-primary);\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=alumno-detalle.page.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlumnoDetallePage, { className: "AlumnoDetallePage", filePath: "src/app/pages/alumno-detalle/alumno-detalle.page.ts", lineNumber: 43 });
})();
export {
  AlumnoDetallePage
};
//# sourceMappingURL=alumno-detalle.page-ROJ2NQUU.js.map

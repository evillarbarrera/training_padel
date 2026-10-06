import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonRefresher,
  IonRefresherContent
} from "./chunk-5YKSH3EK.js";
import {
  addIcons,
  arrowBackOutline,
  checkmarkCircle,
  chevronForwardOutline,
  lockClosedOutline,
  ribbonOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
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

// src/app/pages/mis-logros/mis-logros.page.ts
function MisLogrosPage_div_24_div_8_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function MisLogrosPage_div_24_div_8_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u{1F512}");
    \u0275\u0275elementEnd();
  }
}
function MisLogrosPage_div_24_div_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const logro_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getProgressPercent(logro_r1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", logro_r1.progreso_actual, "/", logro_r1.progreso_requerido);
  }
}
function MisLogrosPage_div_24_div_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const logro_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, logro_r1.fecha_desbloqueo, "d MMM yyyy"), " ");
  }
}
function MisLogrosPage_div_24_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30)(5, "div", 31)(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MisLogrosPage_div_24_div_8_span_8_Template, 2, 0, "span", 33)(9, MisLogrosPage_div_24_div_8_span_9_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MisLogrosPage_div_24_div_8_div_12_Template, 5, 4, "div", 36)(13, MisLogrosPage_div_24_div_8_span_13_Template, 3, 4, "span", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const logro_r1 = ctx.$implicit;
    \u0275\u0275styleProp("--badge-color", logro_r1.color_badge);
    \u0275\u0275classProp("unlocked", logro_r1.desbloqueado)("locked", !logro_r1.desbloqueado);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(logro_r1.icono);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logro_r1.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", logro_r1.desbloqueado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !logro_r1.desbloqueado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(logro_r1.descripcion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !logro_r1.desbloqueado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", logro_r1.desbloqueado && logro_r1.fecha_desbloqueo);
  }
}
function MisLogrosPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MisLogrosPage_div_24_div_8_Template, 14, 13, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getUnlockedCount(cat_r3.key), "/", ctx_r1.getByCategoria(cat_r3.key).length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getByCategoria(cat_r3.key));
  }
}
var _MisLogrosPage = class _MisLogrosPage {
  constructor(router, mysqlService) {
    this.router = router;
    this.mysqlService = mysqlService;
    this.logros = [];
    this.desbloqueados = 0;
    this.total = 0;
    this.porcentaje = 0;
    this.categorias = [
      { key: "constancia", label: "Constancia", icon: "\u{1F525}" },
      { key: "progreso", label: "Progreso", icon: "\u{1F4C8}" },
      { key: "ia", label: "IA & Video", icon: "\u{1F916}" }
    ];
    addIcons({
      arrowBackOutline,
      ribbonOutline,
      lockClosedOutline,
      checkmarkCircle,
      chevronForwardOutline
    });
  }
  ngOnInit() {
    this.loadLogros();
  }
  loadLogros() {
    const userId = Number(localStorage.getItem("userId"));
    if (!userId)
      return;
    this.mysqlService.getLogros(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.logros = res.logros || [];
          this.desbloqueados = res.desbloqueados || 0;
          this.total = res.total || 0;
          this.porcentaje = res.porcentaje || 0;
        }
      }
    });
  }
  getByCategoria(cat) {
    return this.logros.filter((l) => l.categoria === cat);
  }
  getUnlockedCount(cat) {
    return this.logros.filter((l) => l.categoria === cat && l.desbloqueado).length;
  }
  getProgressPercent(logro) {
    if (logro.desbloqueado)
      return 100;
    if (!logro.progreso_requerido)
      return 0;
    return Math.min(100, Math.round(logro.progreso_actual / logro.progreso_requerido * 100));
  }
  handleRefresh(event) {
    this.loadLogros();
    setTimeout(() => event.target.complete(), 1e3);
  }
  goBack() {
    this.router.navigate(["/jugador-home"]);
  }
};
_MisLogrosPage.\u0275fac = function MisLogrosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MisLogrosPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MysqlService));
};
_MisLogrosPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisLogrosPage, selectors: [["app-mis-logros"]], decls: 28, vars: 7, consts: [[3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], [1, "logros-header-hero"], [1, "header-overlay"], [1, "header-content"], [1, "header-text"], [1, "header-pre"], [1, "progress-hero"], [1, "progress-ring"], ["viewBox", "0 0 120 120", "width", "120", "height", "120"], ["cx", "60", "cy", "60", "r", "52", "fill", "none", "stroke", "rgba(255,255,255,0.1)", "stroke-width", "8"], ["cx", "60", "cy", "60", "r", "52", "fill", "none", "stroke", "#CCFF00", "stroke-width", "8", "stroke-linecap", "round", "transform", "rotate(-90,60,60)", 2, "transition", "stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1)"], [1, "progress-text"], [1, "progress-number"], [1, "progress-divider"], [1, "progress-label"], [1, "logros-body"], ["class", "categoria-section", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "arrow-back-outline"], [1, "categoria-section"], [1, "categoria-header"], [1, "cat-icon"], [1, "cat-label"], [1, "cat-count"], ["class", "logro-card", 3, "unlocked", "locked", "--badge-color", 4, "ngFor", "ngForOf"], [1, "logro-card"], [1, "logro-icon-box"], [1, "logro-emoji"], [1, "logro-info"], [1, "logro-top"], [1, "logro-nombre"], ["class", "logro-status", 4, "ngIf"], ["class", "logro-status locked", 4, "ngIf"], [1, "logro-desc"], ["class", "logro-progress", 4, "ngIf"], ["class", "logro-fecha", 4, "ngIf"], [1, "logro-status"], [1, "logro-status", "locked"], [1, "logro-progress"], [1, "logro-progress-bar"], [1, "logro-progress-fill"], [1, "logro-progress-text"], [1, "logro-fecha"]], template: function MisLogrosPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-refresher", 1);
    \u0275\u0275listener("ionRefresh", function MisLogrosPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275element(4, "div", 3);
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "p", 6);
    \u0275\u0275text(8, "PROGRESO PERSONAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1");
    \u0275\u0275text(10, "MIS LOGROS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 9);
    \u0275\u0275element(14, "circle", 10)(15, "circle", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 12)(17, "span", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "p", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 16);
    \u0275\u0275template(24, MisLogrosPage_div_24_Template, 9, 5, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-fab", 18)(26, "ion-fab-button", 19);
    \u0275\u0275listener("click", function MisLogrosPage_Template_ion_fab_button_click_26_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(27, "ion-icon", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(15);
    \u0275\u0275attribute("stroke-dasharray", 326.7)("stroke-dashoffset", 326.7 - 326.7 * ctx.porcentaje / 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.desbloqueados);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.porcentaje, "% COMPLETADO");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.categorias);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  IonContent,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
  IonFab,
  IonFabButton,
  DatePipe
], styles: ['@charset "UTF-8";\n\n\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --background: #fff;\n}\n.logros-header-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  padding: 60px 25px 50px;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.4) 100%);\n}\n.logros-header-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  --color: #fff;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-pre[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 0 4px;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 950;\n  color: #fff;\n  letter-spacing: -1px;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .progress-hero[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .progress-hero[_ngcontent-%COMP%]   .progress-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .progress-hero[_ngcontent-%COMP%]   .progress-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 10px rgba(204, 255, 0, 0.2));\n}\n.logros-header-hero[_ngcontent-%COMP%]   .progress-hero[_ngcontent-%COMP%]   .progress-ring[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .progress-hero[_ngcontent-%COMP%]   .progress-ring[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%]   .progress-number[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 950;\n  color: #CCFF00;\n  letter-spacing: -2px;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .progress-hero[_ngcontent-%COMP%]   .progress-ring[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%]   .progress-divider[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.4);\n  margin-top: 8px;\n}\n.logros-header-hero[_ngcontent-%COMP%]   .progress-hero[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.logros-body[_ngcontent-%COMP%] {\n  padding: 30px 20px 100px;\n}\n.categoria-section[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.categoria-section[_ngcontent-%COMP%]   .categoria-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #f2f2f7;\n}\n.categoria-section[_ngcontent-%COMP%]   .categoria-header[_ngcontent-%COMP%]   .cat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.categoria-section[_ngcontent-%COMP%]   .categoria-header[_ngcontent-%COMP%]   .cat-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  flex: 1;\n}\n.categoria-section[_ngcontent-%COMP%]   .categoria-header[_ngcontent-%COMP%]   .cat-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #8e8e93;\n}\n.logro-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 16px;\n  margin-bottom: 8px;\n  transition: all 0.3s ease;\n  border: 1px solid transparent;\n}\n.logro-card.unlocked[_ngcontent-%COMP%] {\n  background: #fafffe;\n  border-color: var(--badge-color, #CCFF00);\n  border-left: 4px solid var(--badge-color, #CCFF00);\n}\n.logro-card.unlocked[_ngcontent-%COMP%]   .logro-icon-box[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  border: 2px solid var(--badge-color, #CCFF00);\n}\n.logro-card.locked[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border-color: #f2f2f7;\n}\n.logro-card.locked[_ngcontent-%COMP%]   .logro-icon-box[_ngcontent-%COMP%] {\n  background: #ededed;\n  border: 2px solid #e0e0e0;\n}\n.logro-card.locked[_ngcontent-%COMP%]   .logro-emoji[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n  opacity: 0.35;\n}\n.logro-card.locked[_ngcontent-%COMP%]   .logro-nombre[_ngcontent-%COMP%] {\n  color: #999 !important;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-icon-box[_ngcontent-%COMP%]   .logro-emoji[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-top[_ngcontent-%COMP%]   .logro-nombre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #000;\n  letter-spacing: -0.2px;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-top[_ngcontent-%COMP%]   .logro-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-top[_ngcontent-%COMP%]   .logro-status.locked[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-desc[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 11px;\n  color: #8e8e93;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-progress[_ngcontent-%COMP%]   .logro-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #e5e5ea;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-progress[_ngcontent-%COMP%]   .logro-progress-bar[_ngcontent-%COMP%]   .logro-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ccff00,\n      #a8e600);\n  border-radius: 3px;\n  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-progress[_ngcontent-%COMP%]   .logro-progress-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  white-space: nowrap;\n}\n.logro-card[_ngcontent-%COMP%]   .logro-info[_ngcontent-%COMP%]   .logro-fecha[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #10B981;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary, #000);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary, #000);\n}\n/*# sourceMappingURL=mis-logros.page.css.map */'] });
var MisLogrosPage = _MisLogrosPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisLogrosPage, [{
    type: Component,
    args: [{ selector: "app-mis-logros", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonIcon,
      IonButton,
      IonRefresher,
      IonRefresherContent,
      IonFab,
      IonFabButton
    ], template: `<ion-content [fullscreen]="true">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <!-- Header -->
  <div class="logros-header-hero">
    <div class="header-overlay"></div>
    <div class="header-content">

      <div class="header-text">
        <p class="header-pre">PROGRESO PERSONAL</p>
        <h1>MIS LOGROS</h1>
      </div>
    </div>

    <!-- Big Progress Circle -->
    <div class="progress-hero">
      <div class="progress-ring">
        <svg viewBox="0 0 120 120" width="120" height="120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke="#CCFF00" stroke-width="8"
            stroke-linecap="round"
            [attr.stroke-dasharray]="326.7"
            [attr.stroke-dashoffset]="326.7 - (326.7 * porcentaje / 100)"
            transform="rotate(-90,60,60)"
            style="transition: stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1)" />
        </svg>
        <div class="progress-text">
          <span class="progress-number">{{ desbloqueados }}</span>
          <span class="progress-divider">/{{ total }}</span>
        </div>
      </div>
      <p class="progress-label">{{ porcentaje }}% COMPLETADO</p>
    </div>
  </div>

  <!-- Categories -->
  <div class="logros-body">
    <div class="categoria-section" *ngFor="let cat of categorias">
      <div class="categoria-header">
        <span class="cat-icon">{{ cat.icon }}</span>
        <span class="cat-label">{{ cat.label }}</span>
        <span class="cat-count">
          {{ getUnlockedCount(cat.key) }}/{{ getByCategoria(cat.key).length }}
        </span>
      </div>

      <div class="logro-card"
        *ngFor="let logro of getByCategoria(cat.key)"
        [class.unlocked]="logro.desbloqueado"
        [class.locked]="!logro.desbloqueado"
        [style.--badge-color]="logro.color_badge">

        <div class="logro-icon-box">
          <span class="logro-emoji">{{ logro.icono }}</span>
        </div>

        <div class="logro-info">
          <div class="logro-top">
            <span class="logro-nombre">{{ logro.nombre }}</span>
            <span class="logro-status" *ngIf="logro.desbloqueado">\u2705</span>
            <span class="logro-status locked" *ngIf="!logro.desbloqueado">\u{1F512}</span>
          </div>
          <p class="logro-desc">{{ logro.descripcion }}</p>

          <!-- Progress bar for locked -->
          <div class="logro-progress" *ngIf="!logro.desbloqueado">
            <div class="logro-progress-bar">
              <div class="logro-progress-fill" [style.width.%]="getProgressPercent(logro)"></div>
            </div>
            <span class="logro-progress-text">{{ logro.progreso_actual }}/{{ logro.progreso_requerido }}</span>
          </div>

          <!-- Date for unlocked -->
          <span class="logro-fecha" *ngIf="logro.desbloqueado && logro.fecha_desbloqueo">
            {{ logro.fecha_desbloqueo | date:'d MMM yyyy' }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
      <ion-icon name="arrow-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/mis-logros/mis-logros.page.scss */\nion-content {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --background: #fff;\n}\n.logros-header-hero {\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  padding: 60px 25px 50px;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n}\n.logros-header-hero .header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.4) 100%);\n}\n.logros-header-hero .header-content {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.logros-header-hero .header-content .back-btn {\n  --color: #fff;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n}\n.logros-header-hero .header-content .back-btn ion-icon {\n  font-size: 24px;\n}\n.logros-header-hero .header-content .header-text .header-pre {\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 0 4px;\n}\n.logros-header-hero .header-content .header-text h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 950;\n  color: #fff;\n  letter-spacing: -1px;\n}\n.logros-header-hero .progress-hero {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.logros-header-hero .progress-hero .progress-ring {\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n.logros-header-hero .progress-hero .progress-ring svg {\n  filter: drop-shadow(0 0 10px rgba(204, 255, 0, 0.2));\n}\n.logros-header-hero .progress-hero .progress-ring .progress-text {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logros-header-hero .progress-hero .progress-ring .progress-text .progress-number {\n  font-size: 36px;\n  font-weight: 950;\n  color: #CCFF00;\n  letter-spacing: -2px;\n}\n.logros-header-hero .progress-hero .progress-ring .progress-text .progress-divider {\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.4);\n  margin-top: 8px;\n}\n.logros-header-hero .progress-hero .progress-label {\n  margin: 12px 0 0;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.logros-body {\n  padding: 30px 20px 100px;\n}\n.categoria-section {\n  margin-bottom: 35px;\n}\n.categoria-section .categoria-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #f2f2f7;\n}\n.categoria-section .categoria-header .cat-icon {\n  font-size: 20px;\n}\n.categoria-section .categoria-header .cat-label {\n  font-size: 16px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  flex: 1;\n}\n.categoria-section .categoria-header .cat-count {\n  font-size: 13px;\n  font-weight: 700;\n  color: #8e8e93;\n}\n.logro-card {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 16px;\n  margin-bottom: 8px;\n  transition: all 0.3s ease;\n  border: 1px solid transparent;\n}\n.logro-card.unlocked {\n  background: #fafffe;\n  border-color: var(--badge-color, #CCFF00);\n  border-left: 4px solid var(--badge-color, #CCFF00);\n}\n.logro-card.unlocked .logro-icon-box {\n  background: rgba(0, 0, 0, 0.04);\n  border: 2px solid var(--badge-color, #CCFF00);\n}\n.logro-card.locked {\n  background: #fafafa;\n  border-color: #f2f2f7;\n}\n.logro-card.locked .logro-icon-box {\n  background: #ededed;\n  border: 2px solid #e0e0e0;\n}\n.logro-card.locked .logro-emoji {\n  filter: grayscale(100%);\n  opacity: 0.35;\n}\n.logro-card.locked .logro-nombre {\n  color: #999 !important;\n}\n.logro-card .logro-icon-box {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.logro-card .logro-icon-box .logro-emoji {\n  font-size: 22px;\n}\n.logro-card .logro-info {\n  flex: 1;\n  min-width: 0;\n}\n.logro-card .logro-info .logro-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.logro-card .logro-info .logro-top .logro-nombre {\n  font-size: 14px;\n  font-weight: 800;\n  color: #000;\n  letter-spacing: -0.2px;\n}\n.logro-card .logro-info .logro-top .logro-status {\n  font-size: 16px;\n}\n.logro-card .logro-info .logro-top .logro-status.locked {\n  font-size: 14px;\n}\n.logro-card .logro-info .logro-desc {\n  margin: 0 0 6px;\n  font-size: 11px;\n  color: #8e8e93;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.logro-card .logro-info .logro-progress {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logro-card .logro-info .logro-progress .logro-progress-bar {\n  flex: 1;\n  height: 6px;\n  background: #e5e5ea;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.logro-card .logro-info .logro-progress .logro-progress-bar .logro-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ccff00,\n      #a8e600);\n  border-radius: 3px;\n  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.logro-card .logro-info .logro-progress .logro-progress-text {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  white-space: nowrap;\n}\n.logro-card .logro-info .logro-fecha {\n  font-size: 11px;\n  font-weight: 600;\n  color: #10B981;\n}\n.nike-fab {\n  --background: var(--ion-color-primary, #000);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary, #000);\n}\n/*# sourceMappingURL=mis-logros.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: MysqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisLogrosPage, { className: "MisLogrosPage", filePath: "src/app/pages/mis-logros/mis-logros.page.ts", lineNumber: 36 });
})();
export {
  MisLogrosPage
};
//# sourceMappingURL=mis-logros.page-FLGPPPQI.js.map

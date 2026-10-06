import {
  CommonModule,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VZCO22FC.js";

// src/app/components/padel-loader/padel-loader.component.ts
var _PadelLoaderComponent = class _PadelLoaderComponent {
  constructor() {
    this.overlay = false;
    this.size = "medium";
    this.phrases = [
      "\u{1F3BE} Ajustando la bandeja al cristal...",
      "\u{1F3BE} Buscando el remate por 3...",
      "\u{1F3BE} Preparando el globo defensivo...",
      "\u{1F3BE} Calentando motores en la pista...",
      "\u{1F3BE} Consultando disponibilidad de pistas...",
      "\u{1F3BE} Cargando tus mejores estad\xEDsticas...",
      "\u{1F3BE} Entrando a la zona de juego...",
      "\u{1F3BE} Ajustando la empu\xF1adura Continental...",
      "\u{1F3BE} Sincronizando datos del club..."
    ];
    this.currentPhraseIndex = 0;
    this.currentPhrase = "";
  }
  ngOnInit() {
    this.currentPhrase = this.message || this.phrases[0];
    if (!this.message) {
      this.intervalId = setInterval(() => {
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
        this.currentPhrase = this.phrases[this.currentPhraseIndex];
      }, 2400);
    }
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
};
_PadelLoaderComponent.\u0275fac = function PadelLoaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PadelLoaderComponent)();
};
_PadelLoaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PadelLoaderComponent, selectors: [["app-padel-loader"]], inputs: { message: "message", overlay: "overlay", size: "size" }, decls: 20, vars: 9, consts: [[1, "padel-loader-container"], [1, "loader-content"], [1, "ball-box"], ["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg", 1, "spinning-ball"], ["id", "loaderBallGrad", "cx", "35%", "cy", "35%", "r", "65%"], ["offset", "0%", "stop-color", "#FACC15"], ["offset", "45%", "stop-color", "#CCFF00"], ["offset", "85%", "stop-color", "#84CC16"], ["offset", "100%", "stop-color", "#4D7C0F"], ["id", "loaderBallGlow", "x", "-20%", "y", "-20%", "width", "140%", "height", "140%"], ["stdDeviation", "4", "result", "blur"], ["in", "SourceGraphic", "in2", "blur", "operator", "over"], ["cx", "50", "cy", "50", "r", "42", "fill", "url(#loaderBallGrad)", "filter", "url(#loaderBallGlow)"], ["d", "M 22 15 A 38 38 0 0 1 85 78", "fill", "none", "stroke", "#FFFFFF", "stroke-width", "4.5", "stroke-linecap", "round", "opacity", "0.95"], ["d", "M 15 78 A 38 38 0 0 1 78 15", "fill", "none", "stroke", "#FFFFFF", "stroke-width", "4.5", "stroke-linecap", "round", "opacity", "0.95"], [1, "ball-shadow"], [1, "phrase-container"], [1, "phrase-text"]], template: function PadelLoaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(3, "svg", 3)(4, "defs")(5, "radialGradient", 4);
    \u0275\u0275domElement(6, "stop", 5)(7, "stop", 6)(8, "stop", 7)(9, "stop", 8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "filter", 9);
    \u0275\u0275domElement(11, "feGaussianBlur", 10)(12, "feComposite", 11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(13, "circle", 12)(14, "path", 13)(15, "path", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElement(16, "div", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div", 16)(18, "p", 17);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("is-overlay", ctx.overlay)("size-small", ctx.size === "small")("size-medium", ctx.size === "medium")("size-large", ctx.size === "large");
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx.currentPhrase);
  }
}, dependencies: [CommonModule], styles: ["\n\n.padel-loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  width: 100%;\n}\n.padel-loader-container.is-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(8, 12, 20, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 9999;\n}\n.padel-loader-container[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  text-align: center;\n}\n.padel-loader-container.size-small[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.padel-loader-container.size-small[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n.padel-loader-container.size-small[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%]   .spinning-ball[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n.padel-loader-container.size-small[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%]   .ball-shadow[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 6px;\n  bottom: -6px;\n}\n.padel-loader-container.size-small[_ngcontent-%COMP%]   .phrase-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.padel-loader-container.size-medium[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.padel-loader-container.size-medium[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%]   .spinning-ball[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.padel-loader-container.size-medium[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%]   .ball-shadow[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 8px;\n  bottom: -8px;\n}\n.padel-loader-container.size-medium[_ngcontent-%COMP%]   .phrase-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.padel-loader-container.size-large[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.padel-loader-container.size-large[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%]   .spinning-ball[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.padel-loader-container.size-large[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%]   .ball-shadow[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 10px;\n  bottom: -10px;\n}\n.padel-loader-container.size-large[_ngcontent-%COMP%]   .phrase-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.padel-loader-container[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_floatLoader 2s infinite ease-in-out;\n}\n.padel-loader-container[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%]   .spinning-ball[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 14px rgba(204, 255, 0, 0.6));\n  animation: _ngcontent-%COMP%_spinLoader 1.6s infinite linear;\n}\n.padel-loader-container[_ngcontent-%COMP%]   .ball-box[_ngcontent-%COMP%]   .ball-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n  filter: blur(4px);\n  animation: _ngcontent-%COMP%_shadowLoader 2s infinite ease-in-out;\n}\n.padel-loader-container[_ngcontent-%COMP%]   .phrase-container[_ngcontent-%COMP%] {\n  max-width: 280px;\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.padel-loader-container[_ngcontent-%COMP%]   .phrase-container[_ngcontent-%COMP%]   .phrase-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #1e293b;\n  letter-spacing: 0.2px;\n  transition: opacity 0.3s ease;\n}\n.is-overlay[_ngcontent-%COMP%]   .phrase-text[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n@keyframes _ngcontent-%COMP%_spinLoader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatLoader {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n@keyframes _ngcontent-%COMP%_shadowLoader {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(0.7);\n    opacity: 0.2;\n  }\n}\n/*# sourceMappingURL=padel-loader.component.css.map */"] });
var PadelLoaderComponent = _PadelLoaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PadelLoaderComponent, [{
    type: Component,
    args: [{ selector: "app-padel-loader", standalone: true, imports: [CommonModule], template: `<div class="padel-loader-container" 
     [class.is-overlay]="overlay"
     [class.size-small]="size === 'small'"
     [class.size-medium]="size === 'medium'"
     [class.size-large]="size === 'large'">
  
  <div class="loader-content">
    <!-- SPINNING TENNIS BALL -->
    <div class="ball-box">
      <svg class="spinning-ball" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="loaderBallGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FACC15" />
            <stop offset="45%" stop-color="#CCFF00" />
            <stop offset="85%" stop-color="#84CC16" />
            <stop offset="100%" stop-color="#4D7C0F" />
          </radialGradient>
          <filter id="loaderBallGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        <circle cx="50" cy="50" r="42" fill="url(#loaderBallGrad)" filter="url(#loaderBallGlow)" />
        <path d="M 22 15 A 38 38 0 0 1 85 78" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" opacity="0.95" />
        <path d="M 15 78 A 38 38 0 0 1 78 15" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" opacity="0.95" />
      </svg>
      <div class="ball-shadow"></div>
    </div>

    <!-- DYNAMIC PADEL PHRASE / TEXT -->
    <div class="phrase-container">
      <p class="phrase-text">{{ currentPhrase }}</p>
    </div>
  </div>

</div>
`, styles: ["/* src/app/components/padel-loader/padel-loader.component.scss */\n.padel-loader-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  width: 100%;\n}\n.padel-loader-container.is-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(8, 12, 20, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 9999;\n}\n.padel-loader-container .loader-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  text-align: center;\n}\n.padel-loader-container.size-small {\n  padding: 12px;\n}\n.padel-loader-container.size-small .ball-box {\n  width: 44px;\n  height: 44px;\n}\n.padel-loader-container.size-small .ball-box .spinning-ball {\n  width: 44px;\n  height: 44px;\n}\n.padel-loader-container.size-small .ball-box .ball-shadow {\n  width: 28px;\n  height: 6px;\n  bottom: -6px;\n}\n.padel-loader-container.size-small .phrase-text {\n  font-size: 11px;\n}\n.padel-loader-container.size-medium .ball-box {\n  width: 60px;\n  height: 60px;\n}\n.padel-loader-container.size-medium .ball-box .spinning-ball {\n  width: 60px;\n  height: 60px;\n}\n.padel-loader-container.size-medium .ball-box .ball-shadow {\n  width: 38px;\n  height: 8px;\n  bottom: -8px;\n}\n.padel-loader-container.size-medium .phrase-text {\n  font-size: 13px;\n}\n.padel-loader-container.size-large .ball-box {\n  width: 80px;\n  height: 80px;\n}\n.padel-loader-container.size-large .ball-box .spinning-ball {\n  width: 80px;\n  height: 80px;\n}\n.padel-loader-container.size-large .ball-box .ball-shadow {\n  width: 50px;\n  height: 10px;\n  bottom: -10px;\n}\n.padel-loader-container.size-large .phrase-text {\n  font-size: 15px;\n}\n.padel-loader-container .ball-box {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: floatLoader 2s infinite ease-in-out;\n}\n.padel-loader-container .ball-box .spinning-ball {\n  filter: drop-shadow(0 0 14px rgba(204, 255, 0, 0.6));\n  animation: spinLoader 1.6s infinite linear;\n}\n.padel-loader-container .ball-box .ball-shadow {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n  filter: blur(4px);\n  animation: shadowLoader 2s infinite ease-in-out;\n}\n.padel-loader-container .phrase-container {\n  max-width: 280px;\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.padel-loader-container .phrase-container .phrase-text {\n  margin: 0;\n  font-weight: 700;\n  color: #1e293b;\n  letter-spacing: 0.2px;\n  transition: opacity 0.3s ease;\n}\n.is-overlay .phrase-text {\n  color: #ffffff !important;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n@keyframes spinLoader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes floatLoader {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n@keyframes shadowLoader {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(0.7);\n    opacity: 0.2;\n  }\n}\n/*# sourceMappingURL=padel-loader.component.css.map */\n"] }]
  }], null, { message: [{
    type: Input
  }], overlay: [{
    type: Input
  }], size: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PadelLoaderComponent, { className: "PadelLoaderComponent", filePath: "src/app/components/padel-loader/padel-loader.component.ts", lineNumber: 11 });
})();

export {
  PadelLoaderComponent
};
//# sourceMappingURL=chunk-UYOLHWN7.js.map

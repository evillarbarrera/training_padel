import {
  ImpactStyle,
  NotificationType
} from "./chunk-2FGXCAFF.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VZCO22FC.js";
import {
  registerPlugin
} from "./chunk-2WF3DFKV.js";
import {
  __async
} from "./chunk-Q3N56TRI.js";

// node_modules/@capacitor/haptics/dist/esm/index.js
var Haptics = registerPlugin("Haptics", {
  web: () => import("./web-5YGBZWG3.js").then((m) => new m.HapticsWeb())
});

// src/app/services/haptics.service.ts
var _HapticFeedbackService = class _HapticFeedbackService {
  constructor() {
    this.isHapticsAvailable = true;
  }
  /**
   * Suave micro-vibración para tabs, botones secundarios, chips y switches
   */
  light() {
    return __async(this, null, function* () {
      try {
        yield Haptics.impact({ style: ImpactStyle.Light });
      } catch (e) {
        this.webVibrateFallback(10);
      }
    });
  }
  /**
   * Vibración media para abrir modales, cambiar de día/fecha o aplicar filtros
   */
  medium() {
    return __async(this, null, function* () {
      try {
        yield Haptics.impact({ style: ImpactStyle.Medium });
      } catch (e) {
        this.webVibrateFallback(25);
      }
    });
  }
  /**
   * Vibración más contundente para acciones principales como reservar o confirmar
   */
  heavy() {
    return __async(this, null, function* () {
      try {
        yield Haptics.impact({ style: ImpactStyle.Heavy });
      } catch (e) {
        this.webVibrateFallback(40);
      }
    });
  }
  /**
   * Feedback de éxito (ej. reserva confirmada, inscripción exitosa)
   */
  success() {
    return __async(this, null, function* () {
      try {
        yield Haptics.notification({ type: NotificationType.Success });
      } catch (e) {
        this.webVibrateFallback([20, 50, 20]);
      }
    });
  }
  /**
   * Feedback de advertencia o eliminación
   */
  warning() {
    return __async(this, null, function* () {
      try {
        yield Haptics.notification({ type: NotificationType.Warning });
      } catch (e) {
        this.webVibrateFallback([30, 40, 30]);
      }
    });
  }
  /**
   * Feedback de error
   */
  error() {
    return __async(this, null, function* () {
      try {
        yield Haptics.notification({ type: NotificationType.Error });
      } catch (e) {
        this.webVibrateFallback([50, 60, 50]);
      }
    });
  }
  /**
   * Feedback suave al navegar o cambiar de selección continua
   */
  selectionChanged() {
    return __async(this, null, function* () {
      try {
        yield Haptics.selectionChanged();
      } catch (e) {
        this.webVibrateFallback(8);
      }
    });
  }
  webVibrateFallback(pattern) {
    if (typeof window !== "undefined" && "navigator" in window && "vibrate" in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {
      }
    }
  }
};
_HapticFeedbackService.\u0275fac = function HapticFeedbackService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HapticFeedbackService)();
};
_HapticFeedbackService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HapticFeedbackService, factory: _HapticFeedbackService.\u0275fac, providedIn: "root" });
var HapticFeedbackService = _HapticFeedbackService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HapticFeedbackService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  HapticFeedbackService
};
//# sourceMappingURL=chunk-U2YS67XA.js.map

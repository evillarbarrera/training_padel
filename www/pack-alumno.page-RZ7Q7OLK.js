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
  NotificationService
} from "./chunk-OPJ5BMLN.js";
import "./chunk-DBDG6EJI.js";
import {
  AlertController,
  BooleanValueAccessorDirective,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonToggle,
  IonicModule,
  LoadingController,
  ModalController,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective
} from "./chunk-LFXGPXMG.js";
import {
  addIcons,
  calendarOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  closeOutline,
  fitnessOutline,
  funnelOutline,
  globeOutline,
  homeOutline,
  informationCircleOutline,
  locationOutline,
  logOutOutline,
  mapOutline,
  personCircleOutline,
  settingsOutline,
  ticketOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  HostListener,
  Input,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  RouterModule,
  SlicePipe,
  UpperCasePipe,
  setClassMetadata,
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
  ɵɵpipeBind1,
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
import "./chunk-VS5QNFP6.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5HNVOF53.js";
import "./chunk-LSHAV5YA.js";
import "./chunk-KDIH5JCH.js";
import "./chunk-SYGHPWCO.js";
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
import "./chunk-CEAAMTO4.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/modals/confirmar-pack.modal.ts
function ConfirmarPackModal_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Antes: $", \u0275\u0275pipeBind1(2, 1, ctx_r0.pack.precio), " ");
  }
}
function ConfirmarPackModal_div_21_ion_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 37);
  }
}
function ConfirmarPackModal_div_21_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Aplicar");
    \u0275\u0275elementEnd();
  }
}
function ConfirmarPackModal_div_21_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensajeError);
  }
}
function ConfirmarPackModal_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "ion-icon", 31);
    \u0275\u0275elementStart(3, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmarPackModal_div_21_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.codigoCupon, $event) || (ctx_r0.codigoCupon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ConfirmarPackModal_div_21_Template_input_keyup_enter_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validarCupon());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function ConfirmarPackModal_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validarCupon());
    });
    \u0275\u0275template(5, ConfirmarPackModal_div_21_ion_spinner_5_Template, 1, 0, "ion-spinner", 34)(6, ConfirmarPackModal_div_21_span_6_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ConfirmarPackModal_div_21_p_7_Template, 2, 1, "p", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.codigoCupon);
    \u0275\u0275property("disabled", ctx_r0.aplicandoCupon);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.aplicandoCupon || !ctx_r0.codigoCupon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.aplicandoCupon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.aplicandoCupon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mensajeError);
  }
}
function ConfirmarPackModal_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "ion-icon", 41);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Cup\xF3n ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " aplicado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 42);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 43);
    \u0275\u0275listener("click", function ConfirmarPackModal_div_22_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removerCupon());
    });
    \u0275\u0275text(12, "Remover");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cuponValidado.codigo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("- $", \u0275\u0275pipeBind1(10, 2, ctx_r0.ahorro));
  }
}
function ConfirmarPackModal_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "ion-icon", 44);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("A ", ctx_r0.pack.distancia, " km");
  }
}
var _ConfirmarPackModal = class _ConfirmarPackModal {
  constructor(modalCtrl, entrenamientoService, loadingCtrl) {
    this.modalCtrl = modalCtrl;
    this.entrenamientoService = entrenamientoService;
    this.loadingCtrl = loadingCtrl;
    this.codigoCupon = "";
    this.aplicandoCupon = false;
    this.cuponValidado = null;
    this.mensajeError = "";
    this.precioFinal = 0;
    this.ahorro = 0;
    addIcons({
      closeOutline,
      checkmarkCircleOutline,
      fitnessOutline,
      locationOutline,
      informationCircleOutline,
      ticketOutline
    });
  }
  ngOnInit() {
    this.precioFinal = this.pack.precio;
  }
  validarCupon() {
    return __async(this, null, function* () {
      if (!this.codigoCupon.trim())
        return;
      this.aplicandoCupon = true;
      this.mensajeError = "";
      const jugadorId = Number(localStorage.getItem("userId"));
      this.entrenamientoService.validateCupon(this.codigoCupon, this.pack.entrenador_id, jugadorId, this.pack.id).subscribe({
        next: (res) => {
          this.aplicandoCupon = false;
          if (res.success) {
            this.cuponValidado = res.cupon;
            this.calcularDescuento();
          } else {
            this.mensajeError = res.error || "Cup\xF3n inv\xE1lido";
            this.cuponValidado = null;
            this.precioFinal = this.pack.precio;
          }
        },
        error: (err) => {
          this.aplicandoCupon = false;
          this.mensajeError = "Error al validar el cup\xF3n";
          this.cuponValidado = null;
          this.precioFinal = this.pack.precio;
        }
      });
    });
  }
  calcularDescuento() {
    if (!this.cuponValidado)
      return;
    if (this.cuponValidado.tipo_descuento === "porcentaje") {
      this.ahorro = this.pack.precio * this.cuponValidado.valor / 100;
    } else {
      this.ahorro = this.cuponValidado.valor;
    }
    this.precioFinal = Math.max(0, this.pack.precio - this.ahorro);
  }
  removerCupon() {
    this.cuponValidado = null;
    this.codigoCupon = "";
    this.precioFinal = this.pack.precio;
    this.ahorro = 0;
  }
  cerrar() {
    this.modalCtrl.dismiss();
  }
  confirmar() {
    this.modalCtrl.dismiss({
      confirmar: true,
      cupon_id: this.cuponValidado?.id,
      precio_final: this.precioFinal
    });
  }
};
_ConfirmarPackModal.\u0275fac = function ConfirmarPackModal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmarPackModal)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(EntrenamientoService), \u0275\u0275directiveInject(LoadingController));
};
_ConfirmarPackModal.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmarPackModal, selectors: [["app-confirmar-pack"]], inputs: { pack: "pack" }, decls: 39, vars: 13, consts: [[1, "modal-content"], [1, "modal-body"], [1, "close-btn", 3, "click"], ["name", "close-outline"], [1, "modal-image-container"], [1, "modal-img", 3, "src"], [1, "modal-overlay"], [1, "modal-info"], [1, "pack-title"], [1, "coach-name"], [1, "price-container"], [1, "price-badge"], [1, "currency"], [1, "amount"], ["class", "original-price", 4, "ngIf"], [1, "coupon-section"], ["class", "coupon-input-wrapper", 4, "ngIf"], ["class", "coupon-applied", 4, "ngIf"], [1, "details-grid"], [1, "detail-item"], ["name", "fitness-outline"], ["class", "detail-item", 4, "ngIf"], [1, "info-box"], ["name", "information-circle-outline"], [1, "actions"], ["expand", "block", "shape", "round", 1, "confirm-btn", 3, "click"], ["slot", "start", "name", "checkmark-circle-outline"], ["expand", "block", "fill", "clear", "color", "medium", 3, "click"], [1, "original-price"], [1, "coupon-input-wrapper"], [1, "input-container"], ["name", "ticket-outline", 1, "coupon-icon"], ["type", "text", "placeholder", "C\xF3digo de descuento", 3, "ngModelChange", "keyup.enter", "ngModel", "disabled"], [1, "apply-btn", 3, "click", "disabled"], ["name", "crescent", 4, "ngIf"], [4, "ngIf"], ["class", "error-msg", 4, "ngIf"], ["name", "crescent"], [1, "error-msg"], [1, "coupon-applied"], [1, "applied-info"], ["name", "ticket-outline"], [1, "discount-amount"], [1, "remove-btn", 3, "click"], ["name", "location-outline"]], template: function ConfirmarPackModal_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275listener("click", function ConfirmarPackModal_Template_div_click_2_listener() {
      return ctx.cerrar();
    });
    \u0275\u0275element(3, "ion-icon", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275element(5, "img", 5)(6, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "h2", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "span", 12);
    \u0275\u0275text(15, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 13);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ConfirmarPackModal_div_19_Template, 3, 3, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275template(21, ConfirmarPackModal_div_21_Template, 8, 6, "div", 16)(22, ConfirmarPackModal_div_22_Template, 13, 4, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 18)(24, "div", 19);
    \u0275\u0275element(25, "ion-icon", 20);
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, ConfirmarPackModal_div_28_Template, 4, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 22);
    \u0275\u0275element(30, "ion-icon", 23);
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "El pago se coordina directamente con tu coach una vez confirmada la reserva.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 24)(34, "ion-button", 25);
    \u0275\u0275listener("click", function ConfirmarPackModal_Template_ion_button_click_34_listener() {
      return ctx.confirmar();
    });
    \u0275\u0275element(35, "ion-icon", 26);
    \u0275\u0275text(36, " \xA1Lo quiero! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ion-button", 27);
    \u0275\u0275listener("click", function ConfirmarPackModal_Template_ion_button_click_37_listener() {
      return ctx.cerrar();
    });
    \u0275\u0275text(38, " Quiz\xE1s despu\xE9s ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx.pack.imagen || "/assets/mod-packs.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.pack.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Coach ", ctx.pack.entrenador_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-discount", ctx.cuponValidado);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, ctx.precioFinal));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.cuponValidado);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.cuponValidado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.cuponValidado);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx.pack.sesiones_totales, " Sesiones");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.pack.distancia);
  }
}, dependencies: [IonicModule, IonButton, IonContent, IonIcon, IonSpinner, CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ["\n\n.modal-content[_ngcontent-%COMP%] {\n  --background: white;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: white;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  cursor: pointer;\n}\n.modal-image-container[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.modal-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      rgba(0, 0, 0, 0.4));\n}\n.modal-info[_ngcontent-%COMP%] {\n  padding: 25px;\n  text-align: center;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.pack-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #111;\n  margin: 0;\n  line-height: 1.2;\n}\n.coach-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin: 5px 0 20px;\n}\n.price-container[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.price-badge[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  padding: 10px 25px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: baseline;\n  gap: 4px;\n  transition: all 0.3s ease;\n}\n.price-badge.has-discount[_ngcontent-%COMP%] {\n  background: #e1f5fe;\n  color: #0288d1;\n  transform: scale(1.05);\n}\n.original-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n  text-decoration: line-through;\n  margin-top: 5px;\n  font-weight: 500;\n}\n.coupon-section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 25px;\n}\n.coupon-input-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f9f9f9;\n  border: 1px solid #eee;\n  padding: 8px 12px;\n  border-radius: 12px;\n  gap: 10px;\n}\n.coupon-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #888;\n}\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  flex-grow: 1;\n  font-size: 14px;\n  outline: none;\n  width: 100px;\n}\n.apply-btn[_ngcontent-%COMP%] {\n  background: #111;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.apply-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #ef5350;\n  font-size: 12px;\n  margin: 5px 0 0;\n  text-align: left;\n  padding-left: 5px;\n}\n.coupon-applied[_ngcontent-%COMP%] {\n  background: #f1f8e9;\n  border: 1px solid #c5e1a5;\n  padding: 10px 15px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.applied-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #33691e;\n}\n.applied-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.discount-amount[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-weight: 800;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #c62828;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px;\n  cursor: pointer;\n}\n.currency[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n}\n.amount[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n  color: #111;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 25px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #666;\n  font-size: 14px;\n  font-weight: 500;\n}\n.detail-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 18px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: rgba(var(--ion-color-primary-rgb), 0.05);\n  padding: 15px;\n  border-radius: 12px;\n  margin-bottom: 30px;\n  display: flex;\n  gap: 10px;\n  text-align: left;\n}\n.info-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #444;\n  line-height: 1.4;\n}\n.actions[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  --box-shadow: 0 8px 20px rgba(var(--ion-color-primary-rgb), 0.3);\n  margin-bottom: 10px;\n  height: 50px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=confirmar-pack.modal.css.map */"] });
var ConfirmarPackModal = _ConfirmarPackModal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmarPackModal, [{
    type: Component,
    args: [{ selector: "app-confirmar-pack", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: '<ion-content class="modal-content">\n  <div class="modal-body">\n\n    <!-- Close Icon -->\n    <div class="close-btn" (click)="cerrar()">\n      <ion-icon name="close-outline"></ion-icon>\n    </div>\n\n    <!-- Image Header -->\n    <div class="modal-image-container">\n      <img [src]="pack.imagen || \'/assets/mod-packs.jpg\'" class="modal-img" />\n      <div class="modal-overlay"></div>\n    </div>\n\n    <!-- Content -->\n    <div class="modal-info">\n      <h2 class="pack-title">{{ pack.nombre }}</h2>\n      <p class="coach-name">Coach {{ pack.entrenador_nombre }}</p>\n\n      <div class="price-container">\n        <div class="price-badge" [class.has-discount]="cuponValidado">\n          <span class="currency">$</span>\n          <span class="amount">{{ precioFinal | number }}</span>\n        </div>\n        <div class="original-price" *ngIf="cuponValidado">\n          Antes: ${{ pack.precio | number }}\n        </div>\n      </div>\n\n      <!-- Coupon Section -->\n      <div class="coupon-section">\n        <div class="coupon-input-wrapper" *ngIf="!cuponValidado">\n          <div class="input-container">\n            <ion-icon name="ticket-outline" class="coupon-icon"></ion-icon>\n            <input type="text" [(ngModel)]="codigoCupon" placeholder="C\xF3digo de descuento"\n              (keyup.enter)="validarCupon()" [disabled]="aplicandoCupon">\n            <button class="apply-btn" (click)="validarCupon()" [disabled]="aplicandoCupon || !codigoCupon">\n              <ion-spinner name="crescent" *ngIf="aplicandoCupon"></ion-spinner>\n              <span *ngIf="!aplicandoCupon">Aplicar</span>\n            </button>\n          </div>\n          <p class="error-msg" *ngIf="mensajeError">{{ mensajeError }}</p>\n        </div>\n\n        <div class="coupon-applied" *ngIf="cuponValidado">\n          <div class="applied-info">\n            <ion-icon name="ticket-outline"></ion-icon>\n            <span>Cup\xF3n <strong>{{ cuponValidado.codigo }}</strong> aplicado</span>\n            <span class="discount-amount">- ${{ ahorro | number }}</span>\n          </div>\n          <button class="remove-btn" (click)="removerCupon()">Remover</button>\n        </div>\n      </div>\n\n      <div class="details-grid">\n        <div class="detail-item">\n          <ion-icon name="fitness-outline"></ion-icon>\n          <span>{{ pack.sesiones_totales }} Sesiones</span>\n        </div>\n        <div class="detail-item" *ngIf="pack.distancia">\n          <ion-icon name="location-outline"></ion-icon>\n          <span>A {{ pack.distancia }} km</span>\n        </div>\n      </div>\n\n      <div class="info-box">\n        <ion-icon name="information-circle-outline"></ion-icon>\n        <p>El pago se coordina directamente con tu coach una vez confirmada la reserva.</p>\n      </div>\n\n      <div class="actions">\n        <ion-button expand="block" shape="round" class="confirm-btn" (click)="confirmar()">\n          <ion-icon slot="start" name="checkmark-circle-outline"></ion-icon>\n          \xA1Lo quiero!\n        </ion-button>\n\n        <ion-button expand="block" fill="clear" color="medium" (click)="cerrar()">\n          Quiz\xE1s despu\xE9s\n        </ion-button>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n\n<style>\n  /* Inline styles for the modal to ensure self-containment */\n  .modal-content {\n    --background: white;\n  }\n\n  .modal-body {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: white;\n  }\n\n  .close-btn {\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    z-index: 10;\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    border-radius: 50%;\n    width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  .modal-image-container {\n    height: 200px;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .modal-img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .modal-overlay {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));\n  }\n\n  .modal-info {\n    padding: 25px;\n    text-align: center;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .pack-title {\n    font-size: 24px;\n    font-weight: 800;\n    color: #111;\n    margin: 0;\n    line-height: 1.2;\n  }\n\n  .coach-name {\n    font-size: 14px;\n    font-weight: 600;\n    color: #666;\n    margin: 5px 0 20px;\n  }\n\n  .price-container {\n    margin-bottom: 25px;\n  }\n\n  .price-badge {\n    background: #f2f2f7;\n    padding: 10px 25px;\n    border-radius: 20px;\n    display: inline-flex;\n    align-items: baseline;\n    gap: 4px;\n    transition: all 0.3s ease;\n  }\n\n  .price-badge.has-discount {\n    background: #e1f5fe;\n    color: #0288d1;\n    transform: scale(1.05);\n  }\n\n  .original-price {\n    font-size: 14px;\n    color: #999;\n    text-decoration: line-through;\n    margin-top: 5px;\n    font-weight: 500;\n  }\n\n  .coupon-section {\n    width: 100%;\n    margin-bottom: 25px;\n  }\n\n  .coupon-input-wrapper {\n    width: 100%;\n  }\n\n  .input-container {\n    display: flex;\n    align-items: center;\n    background: #f9f9f9;\n    border: 1px solid #eee;\n    padding: 8px 12px;\n    border-radius: 12px;\n    gap: 10px;\n  }\n\n  .coupon-icon {\n    font-size: 20px;\n    color: #888;\n  }\n\n  .input-container input {\n    border: none;\n    background: transparent;\n    flex-grow: 1;\n    font-size: 14px;\n    outline: none;\n    width: 100px;\n  }\n\n  .apply-btn {\n    background: #111;\n    color: white;\n    border: none;\n    padding: 6px 12px;\n    border-radius: 8px;\n    font-size: 13px;\n    font-weight: 600;\n    cursor: pointer;\n  }\n\n  .apply-btn:disabled {\n    opacity: 0.5;\n  }\n\n  .error-msg {\n    color: #ef5350;\n    font-size: 12px;\n    margin: 5px 0 0;\n    text-align: left;\n    padding-left: 5px;\n  }\n\n  .coupon-applied {\n    background: #f1f8e9;\n    border: 1px solid #c5e1a5;\n    padding: 10px 15px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n\n  .applied-info {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 13px;\n    color: #33691e;\n\n    ion-icon {\n      font-size: 18px;\n    }\n  }\n\n  .discount-amount {\n    margin-left: 5px;\n    font-weight: 800;\n  }\n\n  .remove-btn {\n    background: transparent;\n    border: none;\n    color: #c62828;\n    font-size: 12px;\n    font-weight: 700;\n    padding: 4px;\n    cursor: pointer;\n  }\n\n  .currency {\n    font-size: 16px;\n    font-weight: 600;\n    color: #111;\n  }\n\n  .amount {\n    font-size: 28px;\n    font-weight: 900;\n    color: #111;\n  }\n\n  .details-grid {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 25px;\n  }\n\n  .detail-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    color: #666;\n    font-size: 14px;\n    font-weight: 500;\n\n    ion-icon {\n      color: var(--ion-color-primary);\n      font-size: 18px;\n    }\n  }\n\n  .info-box {\n    background: rgba(var(--ion-color-primary-rgb), 0.05);\n    padding: 15px;\n    border-radius: 12px;\n    margin-bottom: 30px;\n    display: flex;\n    gap: 10px;\n    text-align: left;\n\n    ion-icon {\n      color: var(--ion-color-primary);\n      font-size: 20px;\n      flex-shrink: 0;\n      margin-top: 2px;\n    }\n\n    p {\n      margin: 0;\n      font-size: 13px;\n      color: #444;\n      line-height: 1.4;\n    }\n  }\n\n  .actions {\n    width: 100%;\n    margin-top: auto;\n  }\n\n  .confirm-btn {\n    font-weight: 700;\n    --box-shadow: 0 8px 20px rgba(var(--ion-color-primary-rgb), 0.3);\n    margin-bottom: 10px;\n    height: 50px;\n    font-size: 16px;\n  }\n</style>' }]
  }], () => [{ type: ModalController }, { type: EntrenamientoService }, { type: LoadingController }], { pack: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmarPackModal, { className: "ConfirmarPackModal", filePath: "src/app/modals/confirmar-pack.modal.ts", lineNumber: 15 });
})();

// src/app/pages/pack-alumno/pack-alumno.page.ts
function PackAlumnoPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "ion-icon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "h4");
    \u0275\u0275text(5, "Pack Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Ya tienes cr\xE9ditos disponibles. \xDAsalos antes de comprar un nuevo pack.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-button", 30);
    \u0275\u0275listener("click", function PackAlumnoPage_div_9_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToAgenda());
    });
    \u0275\u0275element(9, "ion-icon", 31);
    \u0275\u0275elementEnd()();
  }
}
function PackAlumnoPage_ion_select_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entrenador_r3 = ctx.$implicit;
    \u0275\u0275property("value", entrenador_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entrenador_r3.nombre, " ");
  }
}
function PackAlumnoPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "Radio de b\xFAsqueda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-range", 37);
    \u0275\u0275listener("ionChange", function PackAlumnoPage_div_20_Template_ion_range_ionChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRadiusChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.searchRadius, " km");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.searchRadius);
  }
}
function PackAlumnoPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "ion-spinner", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Localizando...");
    \u0275\u0275elementEnd()();
  }
}
function PackAlumnoPage_div_24_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getEstadoGrupal(pack_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getEstadoBadge(pack_r6), " ", \u0275\u0275pipeBind1(3, 3, ctx_r1.getEstadoGrupal(pack_r6)), " ");
  }
}
function PackAlumnoPage_div_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F4CD} A ", pack_r6.distancia, " km ");
  }
}
function PackAlumnoPage_div_24_ng_container_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u{1F552} ", \u0275\u0275pipeBind3(2, 2, pack_r6.rango_horario_inicio, 0, 5), " - ", \u0275\u0275pipeBind3(3, 6, pack_r6.rango_horario_fin, 0, 5), " ");
  }
}
function PackAlumnoPage_div_24_ng_container_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pack_r6.categoria);
  }
}
function PackAlumnoPage_div_24_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 56)(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PackAlumnoPage_div_24_ng_container_13_span_4_Template, 4, 10, "span", 58)(5, PackAlumnoPage_div_24_ng_container_13_span_5_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pack_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", pack_r6.cantidad_personas > 1 ? "#ffc107" : "")("color", pack_r6.cantidad_personas > 1 ? "#000" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pack_r6.cantidad_personas > 1 ? "PACK " + pack_r6.cantidad_personas + " JUGADORES" : "\u{1F465} " + ctx_r1.getCuposDisplay(pack_r6) + " cupos", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pack_r6.rango_horario_inicio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pack_r6.categoria);
  }
}
function PackAlumnoPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "img", 42);
    \u0275\u0275template(3, PackAlumnoPage_div_24_ng_container_3_Template, 4, 5, "ng-container", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "div", 45)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, PackAlumnoPage_div_24_div_10_Template, 3, 1, "div", 47);
    \u0275\u0275elementStart(11, "p", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PackAlumnoPage_div_24_ng_container_13_Template, 6, 7, "ng-container", 43);
    \u0275\u0275elementStart(14, "div", 49)(15, "div", 50);
    \u0275\u0275element(16, "ion-icon", 51);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-button", 52);
    \u0275\u0275listener("click", function PackAlumnoPage_div_24_Template_ion_button_click_19_listener() {
      const pack_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.comprarPack(pack_r6));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pack_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", i_r7 * 0.05 + "s");
    \u0275\u0275classProp("pack-completo", ctx_r1.isPackCompleto(pack_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", pack_r6.imagen || "/assets/mod-packs.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPackGrupal(pack_r6));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(pack_r6.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", pack_r6.precio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pack_r6.distancia);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pack_r6.descripcion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPackGrupal(pack_r6) || pack_r6.cantidad_personas > 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pack_r6.entrenador_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isPackCompleto(pack_r6) || ctx_r1.hasCredits);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isPackCompleto(pack_r6) ? "Lleno" : "Elegir", " ");
  }
}
function PackAlumnoPage_div_25_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function PackAlumnoPage_div_25_button_2_Template_button_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.page === p_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9, " ");
  }
}
function PackAlumnoPage_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275template(2, PackAlumnoPage_div_25_button_2_Template, 2, 3, "button", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.totalPages);
  }
}
var _PackAlumnoPage = class _PackAlumnoPage {
  onResize(event) {
    this.calcularPageSize();
  }
  calcularPageSize() {
    if (window.innerWidth >= 768) {
      this.pageSize = 9999;
      return;
    }
    const alturaDisponible = window.innerHeight - 350;
    const filas = Math.max(2, Math.floor(alturaDisponible / 160));
    const columnas = window.innerWidth > 768 ? 2 : 1;
    this.pageSize = filas * columnas;
  }
  constructor(modalCtrl, packsAlumno, packsService, router, alertCtrl, route, notificationService, mysqlService) {
    this.modalCtrl = modalCtrl;
    this.packsAlumno = packsAlumno;
    this.packsService = packsService;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.route = route;
    this.notificationService = notificationService;
    this.mysqlService = mysqlService;
    this.packs = [];
    this.packsFiltrados = [];
    this.entrenadores = [];
    this.selectedEntrenador = null;
    this.displayedPacks = [];
    this.page = 1;
    this.pageSize = 10;
    this.packsPaginados = [];
    this.totalPages = [];
    this.useLocation = false;
    this.userLat = null;
    this.userLng = null;
    this.searchRadius = 50;
    this.isLoadingLocation = false;
    this.hasCredits = false;
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      chevronBackOutline,
      logOutOutline,
      locationOutline,
      mapOutline,
      globeOutline,
      funnelOutline,
      personCircleOutline
    });
  }
  ngOnInit() {
    this.calcularPageSize();
    this.checkPaymentStatus();
    this.validarCreditosDisponibles();
  }
  validarCreditosDisponibles() {
    const userId = Number(localStorage.getItem("userId"));
    if (!userId)
      return;
    this.mysqlService.getHomeStats(userId).subscribe({
      next: (res) => {
        if (res.estadisticas && res.estadisticas.packs) {
          this.hasCredits = Number(res.estadisticas.packs.disponibles) > 0;
        }
      }
    });
  }
  checkPaymentStatus() {
    this.route.queryParams.subscribe((params) => {
      const status = params["status"];
      if (status === "success") {
        this.mostrarCompraExitosa();
        this.router.navigate([], {
          queryParams: { "status": null },
          queryParamsHandling: "merge"
        });
      } else if (status === "error_db" || status === "error_token") {
        this.mostrarError();
      } else if (status === "cancelled") {
      }
    });
  }
  confirmarCompra(pack, cuponId = null, precioFinal = null) {
    return __async(this, null, function* () {
      if (pack.transbank_activo == 1 || pack.transbank_activo == "1") {
        this.iniciarPagoTransbank(pack, cuponId, precioFinal);
      } else {
        this.comprarManual(pack, cuponId, precioFinal);
      }
    });
  }
  iniciarPagoTransbank(pack, cuponId = null, precioFinal = null) {
    return __async(this, null, function* () {
      const jugadorId = Number(localStorage.getItem("userId"));
      const payload = {
        pack_id: Number(pack.id),
        jugador_id: jugadorId,
        amount: precioFinal || pack.precio,
        cupon_id: cuponId,
        origin: window.location.origin + window.location.pathname
      };
      const loading = yield this.alertCtrl.create({
        header: "Procesando...",
        message: "Redirigiendo a pasarela de pago...",
        backdropDismiss: false
      });
      yield loading.present();
      this.packsAlumno.initTransaction(payload).subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.token && res.url) {
            const separator = res.url.includes("?") ? "&" : "?";
            window.location.href = `${res.url}${separator}token_ws=${res.token}`;
          } else {
            this.mostrarError();
          }
        },
        error: (err) => {
          loading.dismiss();
          console.error(err);
          this.mostrarError();
        }
      });
    });
  }
  comprarManual(pack, cuponId = null, precioFinal = null) {
    return __async(this, null, function* () {
      const loader = yield this.alertCtrl.create({
        header: "Procesando...",
        message: "Activando pack...",
        backdropDismiss: false
      });
      yield loader.present();
      const payload = {
        pack_id: Number(pack.id),
        jugador_id: Number(localStorage.getItem("userId")),
        cupon_id: cuponId,
        precio_pagado: precioFinal || pack.precio
      };
      this.packsAlumno.insertPackAlumno(payload).subscribe({
        next: (res) => {
          loader.dismiss();
          this.notificationService.notificarPackContratado(payload.jugador_id, pack.nombre);
          this.alertCtrl.create({
            header: "\xA1\xC9xito!",
            message: "Pack activado correctamente. Coordina el pago directamente con tu profesor.",
            buttons: ["OK"]
          }).then((a) => a.present());
          this.cargarPacks();
        },
        error: (err) => {
          loader.dismiss();
          this.mostrarError();
        }
      });
    });
  }
  cargarEntrenadores() {
    const map = /* @__PURE__ */ new Map();
    this.packs.forEach((p) => {
      if (!map.has(p.entrenador_id)) {
        map.set(p.entrenador_id, {
          id: p.entrenador_id,
          nombre: p.entrenador_nombre
        });
      }
    });
    this.entrenadores = Array.from(map.values());
  }
  toggleLocation() {
    this.useLocation = false;
    this.userLat = null;
    this.userLng = null;
    this.cargarPacks();
  }
  onRadiusChange(event) {
    this.searchRadius = Number(event.detail.value);
    if (this.useLocation && this.userLat && this.userLng) {
      this.cargarPacks();
    }
  }
  cargarPacks() {
    const lat = this.useLocation && this.userLat ? this.userLat : void 0;
    const lng = this.useLocation && this.userLng ? this.userLng : void 0;
    const rad = this.useLocation ? this.searchRadius : void 0;
    this.packsService.getAllPacks(lat, lng, rad).subscribe({
      next: (res) => {
        this.packs = res, this.cargarEntrenadores();
        this.packsFiltrados = [...this.packs];
        this.buildPagination();
        this.setPage(this.page);
      },
      error: (err) => console.error(err)
    });
  }
  buildPagination() {
    const pagesCount = Math.ceil(this.packs.length / this.pageSize);
    this.totalPages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  }
  setPage(page) {
    this.page = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.packsPaginados = this.packs.slice(start, end);
  }
  filtrarPacks() {
    let filtrados = [...this.packs];
    if (this.selectedEntrenador) {
      filtrados = filtrados.filter((p) => p.entrenador_id === this.selectedEntrenador);
    }
    this.packsFiltrados = filtrados;
    this.page = 1;
    this.actualizarPaginacion();
  }
  getEstadoGrupal(pack) {
    if (pack.tipo !== "grupal")
      return "";
    return pack.estado_grupo || "pendiente";
  }
  getCuposDisplay(pack) {
    if (pack.tipo !== "grupal")
      return "";
    if (pack.estado_grupo === "activo") {
      return `${pack.cupos_ocupados}/${pack.capacidad_maxima}`;
    }
    return `${pack.cupos_ocupados}/${pack.capacidad_minima}`;
  }
  getEstadoBadge(pack) {
    if (pack.tipo !== "grupal")
      return "";
    if (pack.cupos_ocupados >= pack.capacidad_maxima) {
      return "\u{1F534}";
    }
    if (pack.estado_grupo === "activo") {
      return "\u{1F7E2}";
    }
    return "\u{1F7E1}";
  }
  isPackCompleto(pack) {
    return pack.tipo === "grupal" && pack.cupos_ocupados >= pack.capacidad_maxima;
  }
  isPackGrupal(pack) {
    return pack.tipo === "grupal";
  }
  actualizarPaginacion() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.packsPaginados = this.packsFiltrados.slice(start, end);
  }
  goToHome() {
    this.router.navigate(["/jugador-home"]);
  }
  goToAgenda() {
    this.router.navigate(["/jugador-agenda"]);
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.router.navigate(["/login"]);
  }
  volver() {
    this.router.navigate(["/jugador-home"]);
  }
  comprarPack(pack) {
    return __async(this, null, function* () {
      if (this.hasCredits) {
        this.alertCtrl.create({
          header: "Acci\xF3n restringida",
          message: "Ya tienes cr\xE9ditos disponibles. Debes usarlos antes de adquirir un nuevo pack.",
          buttons: ["OK"]
        }).then((a) => a.present());
        return;
      }
      if (pack.tipo === "grupal") {
        return this.inscribirseGrupal(pack);
      }
      const modal = yield this.modalCtrl.create({
        component: ConfirmarPackModal,
        componentProps: { pack }
      });
      yield modal.present();
      const { data } = yield modal.onDidDismiss();
      if (data?.confirmar) {
        this.confirmarCompra(pack, data.cupon_id || null, data.precio_final || null);
      }
    });
  }
  inscribirseGrupal(pack) {
    return __async(this, null, function* () {
      if (this.hasCredits) {
        this.alertCtrl.create({
          header: "Acci\xF3n restringida",
          message: "Ya tienes cr\xE9ditos disponibles. Debes usarlos antes de adquirir un nuevo pack.",
          buttons: ["OK"]
        }).then((a) => a.present());
        return;
      }
      const jugadorId = Number(localStorage.getItem("userId"));
      try {
        const result = yield this.packsAlumno.inscribirseGrupal(pack.id, jugadorId).toPromise();
        let mensaje = "Te has inscrito correctamente al entrenamiento grupal.";
        if (result.estado_grupo === "activo") {
          const duracion = result.cupos_ocupados >= 5 ? "120 minutos" : "90 minutos";
          mensaje += `

El entrenamiento se ha ACTIVADO con ${result.cupos_ocupados} jugadores.
Duraci\xF3n: ${duracion}`;
        } else {
          mensaje += `

Faltan ${pack.capacidad_minima - result.cupos_ocupados} jugadores para activarse.`;
        }
        const alert = yield this.alertCtrl.create({
          header: "Inscripci\xF3n realizada",
          message: mensaje,
          buttons: ["OK"]
        });
        yield alert.present();
        this.notificationService.notificarPackContratado(jugadorId, pack.nombre);
        this.cargarPacks();
      } catch (err) {
        const alert = yield this.alertCtrl.create({
          header: "Error",
          message: err.error?.error || "No se pudo completar la inscripci\xF3n",
          buttons: ["OK"]
        });
        yield alert.present();
      }
    });
  }
  mostrarCompraExitosa() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Compra registrada",
        message: "El pack fue asignado correctamente. Coordina el pago directamente con el profesor.",
        buttons: ["OK"]
      });
      yield alert.present();
    });
  }
  mostrarError() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Error",
        message: "No se pudo registrar la compra. Intenta nuevamente.",
        buttons: ["OK"]
      });
      yield alert.present();
    });
  }
};
_PackAlumnoPage.\u0275fac = function PackAlumnoPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PackAlumnoPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(PackAlumnoService), \u0275\u0275directiveInject(PacksService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MysqlService));
};
_PackAlumnoPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackAlumnoPage, selectors: [["app-pack-alumno"]], hostBindings: function PackAlumnoPage_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function PackAlumnoPage_resize_HostBindingHandler($event) {
      return ctx.onResize($event);
    }, \u0275\u0275resolveWindow);
  }
}, decls: 29, vars: 9, consts: [[3, "fullscreen"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "header-title"], [1, "header-sub"], [1, "filter-section", "animate-up"], ["class", "restriction-banner animate-up", 4, "ngIf"], [1, "nike-card-filter"], ["name", "funnel-outline", "slot", "start"], ["placeholder", "Filtrar por Coach", "interface", "popover", "toggleIcon", "chevron-down-outline", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "nike-card-filter", "animate-up", 2, "margin-top", "10px", "flex-direction", "column", "align-items", "stretch", "gap", "0"], ["lines", "none", 1, "location-toggle", 2, "--background", "transparent", "--padding-start", "0"], ["name", "location-outline", "slot", "start", 2, "margin-right", "10px"], [2, "font-weight", "600"], ["slot", "end", 3, "ngModelChange", "ionChange", "ngModel"], ["class", "radius-control", "style", "padding-top: 10px; border-top: 1px solid #f2f2f7; margin-top: 5px;", 4, "ngIf"], ["class", "loading-location", "style", "display: flex; justify-content: center; gap: 10px; padding: 10px; color: #666; font-size: 12px;", 4, "ngIf"], [1, "dashboard-container"], [1, "packs-list"], ["class", "nike-card horizontal-pack-card animate-up", 3, "animation-delay", "pack-completo", 4, "ngFor", "ngForOf"], ["class", "pagination-container animate-fade", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], [1, "restriction-banner", "animate-up"], [1, "banner-icon"], ["name", "ticket-outline"], [1, "banner-text"], ["fill", "clear", "color", "dark", 3, "click"], ["name", "chevron-forward"], [3, "value"], [1, "radius-control", 2, "padding-top", "10px", "border-top", "1px solid #f2f2f7", "margin-top", "5px"], [1, "radius-header", 2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "12px", "color", "#8e8e93"], [1, "radius-val", 2, "font-size", "12px", "font-weight", "800", "color", "var(--ion-color-primary)"], ["min", "5", "max", "100", "step", "5", 2, "padding", "0", 3, "ionChange", "value"], [1, "loading-location", 2, "display", "flex", "justify-content", "center", "gap", "10px", "padding", "10px", "color", "#666", "font-size", "12px"], ["name", "crescent", 2, "width", "16px", "height", "16px"], [1, "nike-card", "horizontal-pack-card", "animate-up"], [1, "card-media"], [1, "pack-img", 3, "src"], [4, "ngIf"], [1, "card-content-main"], [1, "pack-header"], [1, "price-tag"], ["class", "distance-badge", "style", "margin-bottom: 10px; display: inline-block;", 4, "ngIf"], [1, "pack-desc"], [1, "pack-footer"], [1, "coach-info"], ["name", "person-circle-outline"], [1, "buy-button", 3, "click", "disabled"], [1, "estado-badge", 3, "ngClass"], [1, "distance-badge", 2, "margin-bottom", "10px", "display", "inline-block"], [2, "background", "rgba(var(--ion-color-primary-rgb), 0.1)", "color", "var(--ion-color-primary)", "font-size", "11px", "font-weight", "700", "padding", "4px 8px", "border-radius", "6px"], [1, "grupo-info", 2, "margin-bottom", "15px"], [1, "cupos-badge"], ["class", "categoria-badge", "style", "background: #e9ecef; color: #495057;", 4, "ngIf"], ["class", "categoria-badge", 4, "ngIf"], [1, "categoria-badge", 2, "background", "#e9ecef", "color", "#495057"], [1, "categoria-badge"], [1, "pagination-container", "animate-fade"], [1, "pagination-row"], ["class", "page-dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-dot", 3, "click"]], template: function PackAlumnoPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
    \u0275\u0275text(5, "Adquirir Pack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Entrena con los mejores coaches");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275template(9, PackAlumnoPage_div_9_Template, 10, 0, "div", 7);
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275element(11, "ion-icon", 9);
    \u0275\u0275elementStart(12, "ion-select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PackAlumnoPage_Template_ion_select_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedEntrenador, $event) || (ctx.selectedEntrenador = $event);
      return $event;
    });
    \u0275\u0275listener("ionChange", function PackAlumnoPage_Template_ion_select_ionChange_12_listener() {
      return ctx.filtrarPacks();
    });
    \u0275\u0275template(13, PackAlumnoPage_ion_select_option_13_Template, 2, 2, "ion-select-option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12)(15, "ion-item", 13);
    \u0275\u0275element(16, "ion-icon", 14);
    \u0275\u0275elementStart(17, "ion-label", 15);
    \u0275\u0275text(18, "Ubicar m\xE1s cercanos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ion-toggle", 16);
    \u0275\u0275twoWayListener("ngModelChange", function PackAlumnoPage_Template_ion_toggle_ngModelChange_19_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.useLocation, $event) || (ctx.useLocation = $event);
      return $event;
    });
    \u0275\u0275listener("ionChange", function PackAlumnoPage_Template_ion_toggle_ionChange_19_listener() {
      return ctx.toggleLocation();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, PackAlumnoPage_div_20_Template, 7, 2, "div", 17)(21, PackAlumnoPage_div_21_Template, 4, 0, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 19)(23, "div", 20);
    \u0275\u0275template(24, PackAlumnoPage_div_24_Template, 21, 14, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, PackAlumnoPage_div_25_Template, 3, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-fab", 23)(27, "ion-fab-button", 24);
    \u0275\u0275listener("click", function PackAlumnoPage_Template_ion_fab_button_click_27_listener() {
      return ctx.goToHome();
    });
    \u0275\u0275element(28, "ion-icon", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.hasCredits);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedEntrenador);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.entrenadores);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.useLocation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.useLocation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoadingLocation);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.packsPaginados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.totalPages.length > 1);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, IonicModule, IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonRange, IonSelect, IonSelectOption, IonSpinner, IonToggle, BooleanValueAccessorDirective, NumericValueAccessorDirective, SelectValueAccessorDirective, RouterModule, UpperCasePipe, SlicePipe], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f2f2f7;\n  --padding-top: 0px !important;\n}\n.header-nike[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding: 30px 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.filter-section[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin-top: 20px;\n}\n.nike-card-filter[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.nike-card-filter[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #8e8e93;\n}\n.nike-card-filter[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  width: 100%;\n  --placeholder-color: #333;\n  font-weight: 600;\n  font-size: 14px;\n}\n.restriction-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f2f2f7 0%,\n      #e5e5ea 100%);\n  border-radius: 20px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.restriction-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: #111;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.restriction-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #fff;\n}\n.restriction-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.restriction-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 800;\n  color: #111;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.restriction-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 12px;\n  color: #666;\n  font-weight: 500;\n  line-height: 1.3;\n}\n.restriction-banner[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  margin: 0;\n  height: 36px;\n}\n.filter-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.location-toggle[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.location-toggle[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111;\n  font-size: 16px;\n}\n.radius-control[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 15px;\n  border-top: 1px solid #f2f2f7;\n}\n.radius-control[_ngcontent-%COMP%]   .radius-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.radius-control[_ngcontent-%COMP%]   .radius-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #8e8e93;\n}\n.radius-control[_ngcontent-%COMP%]   .radius-header[_ngcontent-%COMP%]   .radius-val[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  font-weight: 800;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.loading-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 15px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-bottom: 100px;\n}\n.packs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.horizontal-pack-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  transition: transform 0.2s ease;\n  min-height: 100px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.horizontal-pack-card.pack-completo[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  filter: grayscale(0.8);\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%] {\n  width: 100px;\n  height: auto;\n  position: relative;\n  flex-shrink: 0;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%]   .pack-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%]   .estado-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 800;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%]   .estado-badge.activo[_ngcontent-%COMP%] {\n  background: #34c759;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .card-media[_ngcontent-%COMP%]   .estado-badge.pendiente[_ngcontent-%COMP%] {\n  background: #ff9500;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .card-content-main[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .pack-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 4px;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .pack-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 800;\n  color: #111;\n  width: 70%;\n  line-height: 1.1;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .pack-header[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 900;\n  color: var(--ion-color-primary);\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .pack-desc[_ngcontent-%COMP%] {\n  display: none;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .grupo-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .grupo-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 6px;\n  background: #f2f2f7;\n  color: #666;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .grupo-info[_ngcontent-%COMP%]   .cupos-badge[_ngcontent-%COMP%] {\n  color: #111;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .pack-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #f2f2f7;\n}\n.horizontal-pack-card[_ngcontent-%COMP%]   .pack-footer[_ngcontent-%COMP%]   .buy-button[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  font-size: 10px;\n  --border-radius: 15px;\n  height: 28px;\n  --box-shadow: 0 4px 10px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n.pagination-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  justify-content: center;\n}\n.pagination-row[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 5px;\n  display: flex;\n  gap: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.pagination-row[_ngcontent-%COMP%]   .page-dot[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: #8e8e93;\n  font-weight: 700;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.pagination-row[_ngcontent-%COMP%]   .page-dot.active[_ngcontent-%COMP%] {\n  background: #111;\n  color: white;\n  transform: scale(1.1);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: white;\n  --color: #111;\n  --box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n  margin-bottom: 10px;\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  opacity: 0;\n  transform: translateY(20px);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=pack-alumno.page.css.map */"] });
var PackAlumnoPage = _PackAlumnoPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackAlumnoPage, [{
    type: Component,
    args: [{ selector: "app-pack-alumno", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule
    ], template: `<ion-content [fullscreen]="true">

  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1 class="header-title">Adquirir Pack</h1>
      <p class="header-sub">Entrena con los mejores coaches</p>
    </div>
  </div>

  <!-- Coach Filter (Premium) -->
  <div class="filter-section animate-up">
    <!-- Restricting Purchase message -->
    <div class="restriction-banner animate-up" *ngIf="hasCredits">
      <div class="banner-icon">
        <ion-icon name="ticket-outline"></ion-icon>
      </div>
      <div class="banner-text">
        <h4>Pack Activo</h4>
        <p>Ya tienes cr\xE9ditos disponibles. \xDAsalos antes de comprar un nuevo pack.</p>
      </div>
      <ion-button fill="clear" color="dark" (click)="goToAgenda()">
        <ion-icon name="chevron-forward"></ion-icon>
      </ion-button>
    </div>

    <div class="nike-card-filter">
      <ion-icon name="funnel-outline" slot="start"></ion-icon>
      <ion-select placeholder="Filtrar por Coach" [(ngModel)]="selectedEntrenador" (ionChange)="filtrarPacks()"
        interface="popover" toggleIcon="chevron-down-outline">
        <ion-select-option *ngFor="let entrenador of entrenadores" [value]="entrenador.id">
          {{ entrenador.nombre }}
        </ion-select-option>
      </ion-select>
    </div>

    <!-- Location Filter -->
    <div class="nike-card-filter animate-up"
      style="margin-top: 10px; flex-direction: column; align-items: stretch; gap: 0;">
      <ion-item lines="none" class="location-toggle" style="--background: transparent; --padding-start: 0;">
        <ion-icon name="location-outline" slot="start" style="margin-right: 10px;"></ion-icon>
        <ion-label style="font-weight: 600;">Ubicar m\xE1s cercanos</ion-label>
        <ion-toggle slot="end" [(ngModel)]="useLocation" (ionChange)="toggleLocation()"></ion-toggle>
      </ion-item>

      <div class="radius-control" *ngIf="useLocation"
        style="padding-top: 10px; border-top: 1px solid #f2f2f7; margin-top: 5px;">
        <div class="radius-header" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
          <span style="font-size: 12px; color: #8e8e93;">Radio de b\xFAsqueda</span>
          <span class="radius-val" style="font-size: 12px; font-weight: 800; color: var(--ion-color-primary);">{{
            searchRadius }} km</span>
        </div>
        <ion-range min="5" max="100" step="5" [value]="searchRadius" (ionChange)="onRadiusChange($event)"
          style="padding: 0;">
        </ion-range>
      </div>

      <div class="loading-location" *ngIf="isLoadingLocation"
        style="display: flex; justify-content: center; gap: 10px; padding: 10px; color: #666; font-size: 12px;">
        <ion-spinner name="crescent" style="width: 16px; height: 16px;"></ion-spinner>
        <span>Localizando...</span>
      </div>
    </div>
  </div>

  <!-- Packs List -->
  <div class="dashboard-container">
    <div class="packs-list">

      <div class="nike-card horizontal-pack-card animate-up" *ngFor="let pack of packsPaginados; let i = index"
        [style.animation-delay]="(i * 0.05) + 's'" [class.pack-completo]="isPackCompleto(pack)">
        <div class="card-media">
          <img [src]="pack.imagen || '/assets/mod-packs.jpg'" class="pack-img" />
          <!-- Badge estado grupal -->
          <ng-container *ngIf="isPackGrupal(pack)">
            <span class="estado-badge" [ngClass]="getEstadoGrupal(pack)">
              {{ getEstadoBadge(pack) }} {{ getEstadoGrupal(pack) | uppercase }}
            </span>
          </ng-container>
        </div>

        <div class="card-content-main">
          <div class="pack-header">
            <h3>{{ pack.nombre }}</h3>
            <span class="price-tag">\${{ pack.precio }}</span>
          </div>

          <div class="distance-badge" *ngIf="pack.distancia" style="margin-bottom: 10px; display: inline-block;">
            <span
              style="background: rgba(var(--ion-color-primary-rgb), 0.1); color: var(--ion-color-primary); font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 6px;">
              \u{1F4CD} A {{ pack.distancia }} km
            </span>
          </div>

          <p class="pack-desc">{{ pack.descripcion }}</p>

          <!-- Info grupal si aplica -->
          <ng-container *ngIf="isPackGrupal(pack) || pack.cantidad_personas > 1">
            <div class="grupo-info" style="margin-bottom: 15px;">
              <span class="cupos-badge" [style.background]="pack.cantidad_personas > 1 ? '#ffc107' : ''"
                [style.color]="pack.cantidad_personas > 1 ? '#000' : ''">
                {{ pack.cantidad_personas > 1 ? 'PACK ' + pack.cantidad_personas + ' JUGADORES' : '\u{1F465} ' +
                getCuposDisplay(pack) + ' cupos' }}
              </span>
              <span *ngIf="pack.rango_horario_inicio" class="categoria-badge"
                style="background: #e9ecef; color: #495057;">
                \u{1F552} {{ pack.rango_horario_inicio | slice:0:5 }} - {{ pack.rango_horario_fin | slice:0:5 }}
              </span>
              <span *ngIf="pack.categoria" class="categoria-badge">{{ pack.categoria }}</span>
            </div>
          </ng-container>

          <div class="pack-footer">
            <div class="coach-info">
              <ion-icon name="person-circle-outline"></ion-icon>
              <span>{{ pack.entrenador_nombre }}</span>
            </div>

            <ion-button class="buy-button" (click)="comprarPack(pack)" [disabled]="isPackCompleto(pack) || hasCredits">
              {{ isPackCompleto(pack) ? 'Lleno' : 'Elegir' }}
            </ion-button>
          </div>
        </div>
      </div>

    </div>

    <!-- Pagination (Nike Style) -->
    <div class="pagination-container animate-fade" *ngIf="totalPages.length > 1">
      <div class="pagination-row">
        <button *ngFor="let p of totalPages" class="page-dot" [class.active]="page === p" (click)="setPage(p)">
          {{ p }}
        </button>
      </div>
    </div>
  </div>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="goToHome()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<!-- MODAL -->`, styles: ["/* src/app/pages/pack-alumno/pack-alumno.page.scss */\nion-content {\n  --background: #f2f2f7;\n  --padding-top: 0px !important;\n}\n.header-nike {\n  height: 200px;\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding: 30px 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .header-title {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.header-content .header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.filter-section {\n  padding: 0 20px;\n  margin-top: 20px;\n}\n.nike-card-filter {\n  background: white;\n  border-radius: 16px;\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.nike-card-filter ion-icon {\n  font-size: 20px;\n  color: #8e8e93;\n}\n.nike-card-filter ion-select {\n  width: 100%;\n  --placeholder-color: #333;\n  font-weight: 600;\n  font-size: 14px;\n}\n.restriction-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #f2f2f7 0%,\n      #e5e5ea 100%);\n  border-radius: 20px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.restriction-banner .banner-icon {\n  width: 44px;\n  height: 44px;\n  background: #111;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.restriction-banner .banner-icon ion-icon {\n  font-size: 22px;\n  color: #fff;\n}\n.restriction-banner .banner-text {\n  flex-grow: 1;\n}\n.restriction-banner .banner-text h4 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 800;\n  color: #111;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.restriction-banner .banner-text p {\n  margin: 2px 0 0;\n  font-size: 12px;\n  color: #666;\n  font-weight: 500;\n  line-height: 1.3;\n}\n.restriction-banner ion-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  margin: 0;\n  height: 36px;\n}\n.filter-card {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.location-toggle {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.location-toggle ion-label {\n  font-weight: 700;\n  color: #111;\n  font-size: 16px;\n}\n.radius-control {\n  margin-top: 20px;\n  padding-top: 15px;\n  border-top: 1px solid #f2f2f7;\n}\n.radius-control .radius-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.radius-control .radius-header span {\n  font-size: 13px;\n  font-weight: 600;\n  color: #8e8e93;\n}\n.radius-control .radius-header .radius-val {\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  font-weight: 800;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.loading-location {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 15px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666;\n}\n.dashboard-container {\n  padding: 20px;\n  padding-bottom: 100px;\n}\n.packs-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.horizontal-pack-card {\n  background: white;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  transition: transform 0.2s ease;\n  min-height: 100px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.horizontal-pack-card.pack-completo {\n  opacity: 0.8;\n  filter: grayscale(0.8);\n}\n.horizontal-pack-card .card-media {\n  width: 100px;\n  height: auto;\n  position: relative;\n  flex-shrink: 0;\n}\n.horizontal-pack-card .card-media .pack-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.horizontal-pack-card .card-media .estado-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 800;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.horizontal-pack-card .card-media .estado-badge.activo {\n  background: #34c759;\n}\n.horizontal-pack-card .card-media .estado-badge.pendiente {\n  background: #ff9500;\n}\n.horizontal-pack-card .card-content-main {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.horizontal-pack-card .pack-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 4px;\n}\n.horizontal-pack-card .pack-header h3 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 800;\n  color: #111;\n  width: 70%;\n  line-height: 1.1;\n}\n.horizontal-pack-card .pack-header .price-tag {\n  font-size: 14px;\n  font-weight: 900;\n  color: var(--ion-color-primary);\n}\n.horizontal-pack-card .pack-desc {\n  display: none;\n}\n.horizontal-pack-card .grupo-info {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n.horizontal-pack-card .grupo-info span {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 6px;\n  background: #f2f2f7;\n  color: #666;\n}\n.horizontal-pack-card .grupo-info .cupos-badge {\n  color: #111;\n}\n.horizontal-pack-card .pack-footer {\n  margin-top: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #f2f2f7;\n}\n.horizontal-pack-card .pack-footer .buy-button {\n  margin: 0;\n  font-weight: 700;\n  font-size: 10px;\n  --border-radius: 15px;\n  height: 28px;\n  --box-shadow: 0 4px 10px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n.pagination-container {\n  margin-top: 30px;\n  display: flex;\n  justify-content: center;\n}\n.pagination-row {\n  background: white;\n  border-radius: 20px;\n  padding: 5px;\n  display: flex;\n  gap: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.pagination-row .page-dot {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: #8e8e93;\n  font-weight: 700;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.pagination-row .page-dot.active {\n  background: #111;\n  color: white;\n  transform: scale(1.1);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.nike-fab {\n  --background: white;\n  --color: #111;\n  --box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n  margin-bottom: 10px;\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n}\n.animate-up {\n  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  opacity: 0;\n  transform: translateY(20px);\n}\n@keyframes slideUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=pack-alumno.page.css.map */\n"] }]
  }], () => [{ type: ModalController }, { type: PackAlumnoService }, { type: PacksService }, { type: Router }, { type: AlertController }, { type: ActivatedRoute }, { type: NotificationService }, { type: MysqlService }], { onResize: [{
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackAlumnoPage, { className: "PackAlumnoPage", filePath: "src/app/pages/pack-alumno/pack-alumno.page.ts", lineNumber: 41 });
})();
export {
  PackAlumnoPage
};
//# sourceMappingURL=pack-alumno.page-RZ7Q7OLK.js.map

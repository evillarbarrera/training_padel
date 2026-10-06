import {
  PackAlumnoService
} from "./chunk-OWACC5B5.js";
import {
  NotificationService
} from "./chunk-OPJ5BMLN.js";
import "./chunk-DBDG6EJI.js";
import {
  AlertController,
  IonAvatar,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  IonicModule,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-LFXGPXMG.js";
import {
  addIcons,
  addOutline,
  calendarOutline,
  chevronBackOutline,
  closeOutline,
  informationCircleOutline,
  mailOutline,
  personOutline,
  timeOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  SlicePipe,
  UpperCasePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
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

// src/app/pages/jugador-calendario/jugador-calendario.page.ts
function JugadorCalendarioPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "ion-spinner", 19);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando clases...");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCalendarioPage_div_20_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 24);
    \u0275\u0275listener("click", function JugadorCalendarioPage_div_20_ion_button_7_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(1, " Agendar Mi Primera Clase ");
    \u0275\u0275elementEnd();
  }
}
function JugadorCalendarioPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275element(2, "ion-icon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, JugadorCalendarioPage_div_20_ion_button_7_Template, 2, 0, "ion-button", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipoVista === "proximas" ? "Sin clases agendadas" : "Cero registros");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tipoVista === "proximas" ? 'Tu agenda est\xE1 libre por ahora. Puedes ver tus entrenamientos grupales en la secci\xF3n "Mis Clases".' : "A\xFAn no tienes historial de clases.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tipoVista === "proximas");
  }
}
function JugadorCalendarioPage_div_21_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, reserva_r3.fecha, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, \u0275\u0275pipeBind2(6, 5, reserva_r3.fecha, "MMM")));
  }
}
function JugadorCalendarioPage_div_21_div_1_div_11_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 54);
  }
}
function JugadorCalendarioPage_div_21_div_1_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275template(2, JugadorCalendarioPage_div_21_div_1_div_11_div_6_div_2_Template, 1, 0, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r4 = ctx.$implicit;
    \u0275\u0275classProp("pending", inv_r4.estado === "pendiente");
    \u0275\u0275property("title", inv_r4.nombre + (inv_r4.estado === "pendiente" ? " (Pendiente)" : ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", inv_r4.nombre.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r4.estado === "pendiente");
  }
}
function JugadorCalendarioPage_div_21_div_1_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function JugadorCalendarioPage_div_21_div_1_div_11_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const reserva_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirModalInvitacion(reserva_r3));
    });
    \u0275\u0275element(1, "ion-icon", 56);
    \u0275\u0275elementEnd();
  }
}
function JugadorCalendarioPage_div_21_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275text(2, "Mi Equipo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, JugadorCalendarioPage_div_21_div_1_div_11_div_6_Template, 3, 5, "div", 50)(7, JugadorCalendarioPage_div_21_div_1_div_11_div_7_Template, 2, 0, "div", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.jugadorNombre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.jugadorNombre.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", reserva_r3.invitados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (reserva_r3.invitados == null ? null : reserva_r3.invitados.length) + 1 < reserva_r3.cantidad_personas);
  }
}
function JugadorCalendarioPage_div_21_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "ion-icon", 58);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Se activar\xE1 con ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " jugadores.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(reserva_r3.capacidad_minima || 4);
  }
}
function JugadorCalendarioPage_div_21_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "ion-icon", 60);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(4, 2, reserva_r3.hora_inicio || reserva_r3.hora || "", 0, 5), " - ", \u0275\u0275pipeBind3(5, 6, reserva_r3.hora_fin || "", 0, 5));
  }
}
function JugadorCalendarioPage_div_21_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "ion-avatar", 62);
    \u0275\u0275element(2, "img", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Coach: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reserva_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", reserva_r3.entrenador_foto || "assets/images/placeholder_avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(reserva_r3.entrenador_nombre);
  }
}
function JugadorCalendarioPage_div_21_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "ion-button", 65);
    \u0275\u0275listener("click", function JugadorCalendarioPage_div_21_div_1_div_19_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const reserva_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelarReserva(reserva_r3));
    });
    \u0275\u0275text(2, " Cancelar Clase ");
    \u0275\u0275elementEnd()();
  }
}
function JugadorCalendarioPage_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29);
    \u0275\u0275template(3, JugadorCalendarioPage_div_21_div_1_div_3_Template, 8, 10, "div", 30);
    \u0275\u0275elementStart(4, "div", 31)(5, "div", 32);
    \u0275\u0275element(6, "ion-icon", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34);
    \u0275\u0275element(9, "ion-icon", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, JugadorCalendarioPage_div_21_div_1_div_11_Template, 8, 4, "div", 35)(12, JugadorCalendarioPage_div_21_div_1_div_12_Template, 7, 1, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 37);
    \u0275\u0275template(14, JugadorCalendarioPage_div_21_div_1_div_14_Template, 6, 10, "div", 38)(15, JugadorCalendarioPage_div_21_div_1_div_15_Template, 7, 2, "div", 39);
    \u0275\u0275elementStart(16, "div", 40)(17, "span", 41);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, JugadorCalendarioPage_div_21_div_1_div_19_Template, 3, 0, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r3 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r7 * 0.05 + "s");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", reserva_r3.fecha);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("grupal", reserva_r3.tipo === "grupal")("multi", reserva_r3.cantidad_personas > 1 && reserva_r3.tipo !== "grupal")("individual", reserva_r3.tipo !== "grupal" && reserva_r3.cantidad_personas <= 1);
    \u0275\u0275advance();
    \u0275\u0275property("name", reserva_r3.tipo === "grupal" || reserva_r3.cantidad_personas > 1 ? "people" : "person");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reserva_r3.tipo === "grupal" ? "GRUPAL (" + reserva_r3.cupos_ocupados + "/" + reserva_r3.capacidad_maxima + ")" : reserva_r3.cantidad_personas > 1 ? "MULTIJUGADOR" : "INDIVIDUAL", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", reserva_r3.tipo === "grupal" ? (reserva_r3.estado_grupo == null ? null : reserva_r3.estado_grupo.toLowerCase()) || "pendiente" : (reserva_r3.estado == null ? null : reserva_r3.estado.toLowerCase()) || "reservada");
    \u0275\u0275advance();
    \u0275\u0275property("name", reserva_r3.estado_grupo === "activo" || reserva_r3.estado === "reservado" || reserva_r3.estado === "confirmada" ? "checkmark-circle" : "time");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reserva_r3.tipo === "grupal" ? reserva_r3.estado_grupo === "activo" ? "ACTIVADA" : "PENDIENTE" : reserva_r3.estado || "RESERVADA", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reserva_r3.cantidad_personas > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reserva_r3.tipo === "grupal" && reserva_r3.estado_grupo !== "activo");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", reserva_r3.hora_inicio && reserva_r3.hora_fin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reserva_r3.entrenador_nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reserva_r3.pack_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tipoVista === "proximas");
  }
}
function JugadorCalendarioPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, JugadorCalendarioPage_div_21_div_1_Template, 20, 20, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.reservasFiltradas);
  }
}
function JugadorCalendarioPage_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function JugadorCalendarioPage_div_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275elementStart(1, "div", 67);
    \u0275\u0275listener("click", function JugadorCalendarioPage_div_25_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 68)(3, "div", 69);
    \u0275\u0275element(4, "ion-icon", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Invitar Compa\xF1ero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 71);
    \u0275\u0275listener("click", function JugadorCalendarioPage_div_25_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275element(8, "ion-icon", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 73)(10, "p");
    \u0275\u0275text(11, "Ingresa el email de tu compa\xF1ero para que se una a este pack Duo/Multi. Debe estar registrado en la App.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 74)(13, "ion-label");
    \u0275\u0275text(14, "Email del Jugador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCalendarioPage_div_25_Template_ion_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailInvitado, $event) || (ctx_r1.emailInvitado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 76)(17, "ion-button", 77);
    \u0275\u0275listener("click", function JugadorCalendarioPage_div_25_Template_ion_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275text(18, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ion-button", 78);
    \u0275\u0275listener("click", function JugadorCalendarioPage_div_25_Template_ion_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enviarInvitacion());
    });
    \u0275\u0275text(20, " Enviar Invitaci\xF3n ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailInvitado);
  }
}
var _JugadorCalendarioPage = class _JugadorCalendarioPage {
  constructor(mysqlService, packAlumnoService, router, alertController, toastController, notificationService) {
    this.mysqlService = mysqlService;
    this.packAlumnoService = packAlumnoService;
    this.router = router;
    this.alertController = alertController;
    this.toastController = toastController;
    this.notificationService = notificationService;
    this.reservasIndividuales = [];
    this.entrenamientosGrupales = [];
    this.cargando = true;
    this.tipoVista = "proximas";
    this.jugadorNombre = localStorage.getItem("nombre") || "Yo";
    this.showModalInvitacion = false;
    this.selectedReserva = null;
    this.emailInvitado = "";
    addIcons({ chevronBackOutline, calendarOutline, personOutline, timeOutline, informationCircleOutline, addOutline, mailOutline, closeOutline });
  }
  ngOnInit() {
    this.cargarReservas();
  }
  cambiarVista(vista) {
    this.tipoVista = vista;
    this.cargarReservas();
  }
  get reservasFiltradas() {
    const hoy = /* @__PURE__ */ new Date();
    hoy.setHours(0, 0, 0, 0);
    const todasReservas = [...this.reservasIndividuales, ...this.entrenamientosGrupales];
    return todasReservas.filter((reserva) => {
      if (!reserva.fecha)
        return false;
      const fechaReserva = /* @__PURE__ */ new Date(reserva.fecha + "T00:00:00");
      if (this.tipoVista === "proximas") {
        return fechaReserva >= hoy;
      } else {
        return fechaReserva < hoy;
      }
    }).sort((a, b) => {
      const dateA = (/* @__PURE__ */ new Date(a.fecha + "T" + (a.hora_inicio || "00:00"))).getTime();
      const dateB = (/* @__PURE__ */ new Date(b.fecha + "T" + (b.hora_inicio || "00:00"))).getTime();
      return this.tipoVista === "proximas" ? dateA - dateB : dateB - dateA;
    });
  }
  cargarReservas(event) {
    const userId = Number(localStorage.getItem("userId"));
    if (!userId) {
      this.router.navigate(["/login"]);
      return;
    }
    this.cargando = true;
    this.mysqlService.getReservasJugador(userId).subscribe({
      next: (res) => {
        this.reservasIndividuales = res.reservas_individuales || [];
        this.entrenamientosGrupales = res.entrenamientos_grupales || [];
        this.cargando = false;
        if (event)
          event.target.complete();
      },
      error: (err) => {
        console.error("Error al cargar reservas:", err);
        this.cargando = false;
        if (event)
          event.target.complete();
      }
    });
  }
  handleRefresh(event) {
    this.cargarReservas(event);
  }
  cancelarReserva(reserva) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: "Cancelar Reserva",
        message: "\xBFEst\xE1s seguro de que deseas cancelar esta reserva? Se liberar\xE1 el cupo.",
        buttons: [
          {
            text: "No",
            role: "cancel",
            cssClass: "secondary"
          },
          {
            text: "S\xED, cancelar",
            handler: () => {
              this.procesarCancelacion(reserva);
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  procesarCancelacion(reserva) {
    return __async(this, null, function* () {
      const userId = Number(localStorage.getItem("userId"));
      if (!userId)
        return;
      const isGrupal = reserva.tipo === "grupal" || !!reserva.inscripcion_id;
      const id = reserva.inscripcion_id || reserva.reserva_id || reserva.id;
      if (isGrupal) {
        this.mysqlService.cancelarInscripcionGrupal(id, userId).subscribe({
          next: (res) => __async(this, null, function* () {
            this.mostrarToast(res.message || "Inscripci\xF3n cancelada", "success");
            this.cargarReservas();
          }),
          error: (err) => __async(this, null, function* () {
            this.mostrarToast(err.error?.error || "Error al cancelar", "danger");
          })
        });
      } else {
        this.mysqlService.cancelarReservaJugador(id, userId).subscribe({
          next: (res) => __async(this, null, function* () {
            if (reserva.entrenador_id) {
              this.notificationService.notificarCancelacionACoach(reserva.entrenador_id, this.jugadorNombre, reserva.fecha, reserva.hora_inicio || "");
            }
            this.mostrarToast("Reserva cancelada exitosamente", "success");
            this.cargarReservas();
          }),
          error: (err) => __async(this, null, function* () {
            this.mostrarToast(err.error?.error || "Error al cancelar", "danger");
          })
        });
      }
    });
  }
  mostrarToast(message, color) {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message,
        duration: 3e3,
        color,
        position: "bottom"
      });
      toast.present();
    });
  }
  goBack() {
    this.router.navigate(["/jugador-home"]);
  }
  // --- Invitation Methods ---
  abrirModalInvitacion(reserva) {
    this.selectedReserva = reserva;
    this.emailInvitado = "";
    this.showModalInvitacion = true;
  }
  cerrarModal() {
    this.showModalInvitacion = false;
    this.selectedReserva = null;
  }
  enviarInvitacion() {
    if (!this.emailInvitado || !this.emailInvitado.includes("@")) {
      this.mostrarToast("Ingresa un email v\xE1lido", "warning");
      return;
    }
    if (!this.selectedReserva || !this.selectedReserva.pack_jugador_id) {
      this.mostrarToast("No se pudo identificar el pack para esta reserva.", "danger");
      return;
    }
    this.mostrarToast("Enviando invitaci\xF3n...", "primary");
    this.packAlumnoService.invitarJugador(this.selectedReserva.pack_jugador_id, this.emailInvitado).subscribe({
      next: (res) => {
        this.mostrarToast(res.message || "Invitaci\xF3n enviada correctamente.", "success");
        this.cerrarModal();
        this.cargarReservas();
      },
      error: (err) => {
        console.error(err);
        this.mostrarToast(err.error?.error || "No se pudo enviar la invitaci\xF3n.", "danger");
      }
    });
  }
};
_JugadorCalendarioPage.\u0275fac = function JugadorCalendarioPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JugadorCalendarioPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(PackAlumnoService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(NotificationService));
};
_JugadorCalendarioPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JugadorCalendarioPage, selectors: [["app-jugador-calendario"]], features: [\u0275\u0275ProvidersFeature([AlertController, ToastController])], decls: 26, vars: 5, consts: [["slot", "fixed", 3, "ionRefresh"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "header-title"], [1, "header-sub"], [1, "segment-wrapper", "animate-up"], ["mode", "ios", 1, "nike-segment", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "proximas"], ["value", "historial"], [1, "dashboard-container"], ["class", "state-container animate-fade", 4, "ngIf"], ["class", "state-container animate-up", 4, "ngIf"], ["class", "sessions-list", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], ["class", "nike-modal-overlay", 3, "click", 4, "ngIf"], [1, "state-container", "animate-fade"], ["name", "crescent"], [1, "state-container", "animate-up"], [1, "empty-icon-box"], ["name", "calendar-clear-outline"], ["class", "nike-button-small", 3, "click", 4, "ngIf"], [1, "nike-button-small", 3, "click"], [1, "sessions-list"], ["class", "nike-card session-card animate-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "nike-card", "session-card", "animate-up"], [1, "card-header"], [1, "row-top"], ["class", "date-badge", 4, "ngIf"], [1, "badges-right"], [1, "modalidad-tag"], [3, "name"], [1, "status-tag", 3, "ngClass"], ["class", "team-section-ionic", 4, "ngIf"], ["class", "group-info-row", 4, "ngIf"], [1, "card-body"], ["class", "time-row", 4, "ngIf"], ["class", "coach-row", 4, "ngIf"], [1, "pack-row"], [1, "pack-label"], ["class", "actions-row", 4, "ngIf"], [1, "date-badge"], [1, "day"], [1, "month"], [1, "team-section-ionic"], [1, "team-label"], [1, "team-avatars"], [1, "avatar-chip", "owner", 3, "title"], ["class", "avatar-chip guest", 3, "pending", "title", 4, "ngFor", "ngForOf"], ["class", "avatar-chip add", 3, "click", 4, "ngIf"], [1, "avatar-chip", "guest", 3, "title"], ["class", "status-dot", 4, "ngIf"], [1, "status-dot"], [1, "avatar-chip", "add", 3, "click"], ["name", "add-outline"], [1, "group-info-row"], ["name", "information-circle-outline"], [1, "time-row"], ["name", "time-outline"], [1, "coach-row"], [1, "avatar-mini"], [2, "object-fit", "cover", 3, "src"], [1, "actions-row"], ["fill", "outline", "color", "danger", "size", "small", "expand", "block", 3, "click"], [1, "nike-modal-overlay", 3, "click"], [1, "nike-modal-card", "animate-pop", 3, "click"], [1, "modal-header"], [1, "header-icon"], ["name", "mail-outline"], ["fill", "clear", "color", "dark", 1, "btn-close-modal", 3, "click"], ["name", "close-outline"], [1, "modal-body"], [1, "nike-input-group"], ["type", "email", "placeholder", "ejemplo@correo.com", 1, "nike-input-field", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["fill", "outline", "color", "medium", 1, "nike-button-modal", 3, "click"], [1, "nike-button-modal", "confirm", 3, "click"]], template: function JugadorCalendarioPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-refresher", 0);
    \u0275\u0275listener("ionRefresh", function JugadorCalendarioPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275elementStart(5, "div", 3)(6, "h1", 4);
    \u0275\u0275text(7, "Mis Clases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275text(9, "Agenda de entrenamientos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 6)(11, "ion-segment", 7);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorCalendarioPage_Template_ion_segment_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tipoVista, $event) || (ctx.tipoVista = $event);
      return $event;
    });
    \u0275\u0275listener("ionChange", function JugadorCalendarioPage_Template_ion_segment_ionChange_11_listener() {
      return ctx.cambiarVista(ctx.tipoVista);
    });
    \u0275\u0275elementStart(12, "ion-segment-button", 8)(13, "ion-label");
    \u0275\u0275text(14, "PR\xD3XIMAS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-segment-button", 9)(16, "ion-label");
    \u0275\u0275text(17, "HISTORIAL");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275template(19, JugadorCalendarioPage_div_19_Template, 4, 0, "div", 11)(20, JugadorCalendarioPage_div_20_Template, 8, 3, "div", 12)(21, JugadorCalendarioPage_div_21_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-fab", 14)(23, "ion-fab-button", 15);
    \u0275\u0275listener("click", function JugadorCalendarioPage_Template_ion_fab_button_click_23_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(24, "ion-icon", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, JugadorCalendarioPage_div_25_Template, 21, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.tipoVista);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && ctx.reservasFiltradas.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && ctx.reservasFiltradas.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.showModalInvitacion);
  }
}, dependencies: [IonicModule, IonAvatar, IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonInput, IonLabel, IonRefresher, IonRefresherContent, IonSegment, IonSegmentButton, IonSpinner, SelectValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, UpperCasePipe, SlicePipe, DatePipe], styles: ["\n\n.header-nike[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding: 30px 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.segment-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 25px 5px;\n}\n.nike-segment[_ngcontent-%COMP%] {\n  --background: #f2f2f7;\n  border-radius: 14px;\n  padding: 4px;\n}\n.nike-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: white;\n  --color: #8e8e93;\n  --color-checked: var(--ion-color-primary);\n  --border-radius: 10px;\n  font-weight: 800;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n  min-height: 44px;\n}\n.nike-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::before {\n  border: none !important;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 20px 25px 100px;\n}\n.state-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.state-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n  width: 40px;\n  height: 40px;\n  margin-bottom: 15px;\n}\n.state-container[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: #f2f2f7;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.state-container[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #c7c7cc;\n}\n.state-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n}\n.state-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8e8e93;\n  margin: 8px 0 25px;\n  font-size: 15px;\n}\n.state-container[_ngcontent-%COMP%]   .nike-button-small[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --border-radius: 12px;\n  font-weight: 700;\n  text-transform: none;\n  height: 50px;\n}\n.sessions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.session-card[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 0;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-bottom: 1px solid #f2f2f7;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .row-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .date-badge[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .date-badge[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n  line-height: 1;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .date-badge[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  margin-top: 2px;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: flex-end;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .modalidad-tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .modalidad-tag.grupal[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #7c3aed;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .modalidad-tag.individual[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .modalidad-tag.multi[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #059669;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-tag[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-tag.pendiente[_ngcontent-%COMP%], \n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-tag.reservado[_ngcontent-%COMP%] {\n  background: #fff9c4;\n  color: #fbc02d;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-tag.activo[_ngcontent-%COMP%], \n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-tag.confirmada[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #4caf50;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-tag.cancelada[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #ef5350;\n}\n.session-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-tag.completada[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  color: #8e8e93;\n}\n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%], \n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .coach-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #48484a;\n}\n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .coach-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #c7c7cc;\n}\n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .avatar-mini[_ngcontent-%COMP%], \n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .coach-row[_ngcontent-%COMP%]   .avatar-mini[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: -4px;\n}\n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .coach-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .pack-row[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.session-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .pack-row[_ngcontent-%COMP%]   .pack-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #8e8e93;\n  background: #f2f2f7;\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.team-section-ionic[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #f2f2f7;\n}\n.team-section-ionic[_ngcontent-%COMP%]   .team-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.team-section-ionic[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.team-section-ionic[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 800;\n  color: white;\n  position: relative;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.team-section-ionic[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip.owner[_ngcontent-%COMP%] {\n  background: #000;\n}\n.team-section-ionic[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip.guest[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.team-section-ionic[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip.pending[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  opacity: 0.8;\n}\n.team-section-ionic[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip.add[_ngcontent-%COMP%] {\n  background: white;\n  color: #8e8e93;\n  border: 1px dashed #c7c7cc;\n  box-shadow: none;\n}\n.team-section-ionic[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  width: 10px;\n  height: 10px;\n  background: #ef4444;\n  border: 2px solid white;\n  border-radius: 50%;\n}\n.nike-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.nike-modal-card[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 32px;\n  width: 32px;\n  margin: 0;\n  --color: white;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.5;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .nike-input-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .nike-input-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 800;\n  color: #1e293b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .nike-input-group[_ngcontent-%COMP%]   .nike-input-field[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: #f8fafc;\n  --border-radius: 12px;\n  --placeholder-color: #94a3b8;\n  font-weight: 600;\n  border: 2px solid #f1f5f9;\n  border-radius: 12px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .nike-input-group[_ngcontent-%COMP%]   .nike-input-field.focused[_ngcontent-%COMP%] {\n  border-color: #000;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .nike-button-modal[_ngcontent-%COMP%] {\n  margin: 0;\n  --border-radius: 14px;\n  --font-weight: 700;\n  height: 50px;\n  text-transform: none;\n  font-size: 14px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .nike-button-modal.confirm[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n@keyframes _ngcontent-%COMP%_pop {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_animate-up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animate-up 0.5s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_animate-fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animate-fade 0.5s ease;\n}\n/*# sourceMappingURL=jugador-calendario.page.css.map */"] });
var JugadorCalendarioPage = _JugadorCalendarioPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JugadorCalendarioPage, [{
    type: Component,
    args: [{ selector: "app-jugador-calendario", standalone: true, imports: [IonicModule, CommonModule, FormsModule], providers: [AlertController, ToastController], template: `<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1 class="header-title">Mis Clases</h1>
      <p class="header-sub">Agenda de entrenamientos</p>
    </div>
  </div>

  <!-- Segment Control (Premium) -->
  <div class="segment-wrapper animate-up">
    <ion-segment [(ngModel)]="tipoVista" (ionChange)="cambiarVista(tipoVista)" class="nike-segment" mode="ios">
      <ion-segment-button value="proximas">
        <ion-label>PR\xD3XIMAS</ion-label>
      </ion-segment-button>
      <ion-segment-button value="historial">
        <ion-label>HISTORIAL</ion-label>
      </ion-segment-button>
    </ion-segment>
  </div>

  <!-- Main Container -->
  <div class="dashboard-container">

    <!-- Loading State -->
    <div *ngIf="cargando" class="state-container animate-fade">
      <ion-spinner name="crescent"></ion-spinner>
      <p>Cargando clases...</p>
    </div>

    <!-- Empty State -->
    <div *ngIf="!cargando && reservasFiltradas.length === 0" class="state-container animate-up">
      <div class="empty-icon-box">
        <ion-icon name="calendar-clear-outline"></ion-icon>
      </div>
      <h2>{{ tipoVista === 'proximas' ? 'Sin clases agendadas' : 'Cero registros' }}</h2>
      <p>{{ tipoVista === 'proximas' ? 'Tu agenda est\xE1 libre por ahora. Puedes ver tus entrenamientos grupales en la
        secci\xF3n "Mis Clases".' : 'A\xFAn no tienes historial de clases.' }}</p>
      <ion-button *ngIf="tipoVista === 'proximas'" class="nike-button-small" (click)="goBack()">
        Agendar Mi Primera Clase
      </ion-button>
    </div>

    <!-- Sessions List -->
    <div class="sessions-list" *ngIf="!cargando && reservasFiltradas.length > 0">

      <div class="nike-card session-card animate-up" *ngFor="let reserva of reservasFiltradas; let i = index"
        [style.animation-delay]="(i * 0.05) + 's'">

        <div class="card-header">
          <div class="row-top">
            <div class="date-badge" *ngIf="reserva.fecha">
              <span class="day">{{ reserva.fecha | date:'dd' }}</span>
              <span class="month">{{ reserva.fecha | date:'MMM' | uppercase }}</span>
            </div>

            <div class="badges-right">
              <div class="modalidad-tag" [class.grupal]="reserva.tipo === 'grupal'"
                [class.multi]="reserva.cantidad_personas > 1 && reserva.tipo !== 'grupal'"
                [class.individual]="reserva.tipo !== 'grupal' && reserva.cantidad_personas <= 1">
                <ion-icon
                  [name]="(reserva.tipo === 'grupal' || reserva.cantidad_personas > 1) ? 'people' : 'person'"></ion-icon>
                {{ reserva.tipo === 'grupal' ? 'GRUPAL (' + reserva.cupos_ocupados + '/' + reserva.capacidad_maxima +
                ')' :
                (reserva.cantidad_personas > 1 ? 'MULTIJUGADOR' : 'INDIVIDUAL') }}
              </div>
              <div class="status-tag"
                [ngClass]="reserva.tipo === 'grupal' ? (reserva.estado_grupo?.toLowerCase() || 'pendiente') : (reserva.estado?.toLowerCase() || 'reservada')">
                <ion-icon
                  [name]="(reserva.estado_grupo === 'activo' || reserva.estado === 'reservado' || reserva.estado === 'confirmada') ? 'checkmark-circle' : 'time'"></ion-icon>
                {{ reserva.tipo === 'grupal' ? (reserva.estado_grupo === 'activo' ? 'ACTIVADA' : 'PENDIENTE') :
                (reserva.estado || 'RESERVADA') }}
              </div>
            </div>
          </div>

          <!-- Team Display (Multi-player) -->
          <div class="team-section-ionic" *ngIf="reserva.cantidad_personas > 1">
            <div class="team-label">Mi Equipo:</div>
            <div class="team-avatars">
              <div class="avatar-chip owner" [title]="jugadorNombre">
                {{ jugadorNombre.charAt(0) }}
              </div>
              <div class="avatar-chip guest" *ngFor="let inv of reserva.invitados"
                [class.pending]="inv.estado === 'pendiente'"
                [title]="inv.nombre + (inv.estado === 'pendiente' ? ' (Pendiente)' : '')">
                {{ inv.nombre.charAt(0) }}
                <div class="status-dot" *ngIf="inv.estado === 'pendiente'"></div>
              </div>
              <div class="avatar-chip add" *ngIf="(reserva.invitados?.length + 1) < reserva.cantidad_personas"
                (click)="abrirModalInvitacion(reserva)">
                <ion-icon name="add-outline"></ion-icon>
              </div>
            </div>
          </div>

          <!-- Info Message for Pending Groups -->
          <div class="group-info-row" *ngIf="reserva.tipo === 'grupal' && reserva.estado_grupo !== 'activo'">
            <ion-icon name="information-circle-outline"></ion-icon>
            <p>Se activar\xE1 con <strong>{{ reserva.capacidad_minima || 4 }}</strong> jugadores.</p>
          </div>
        </div>

        <div class="card-body">
          <div class="time-row" *ngIf="reserva.hora_inicio && reserva.hora_fin">
            <ion-icon name="time-outline"></ion-icon>
            <span>{{ (reserva.hora_inicio || reserva.hora || '') | slice:0:5 }} - {{ (reserva.hora_fin || '') |
              slice:0:5 }}</span>
          </div>

          <div class="coach-row" *ngIf="reserva.entrenador_nombre">
            <ion-avatar class="avatar-mini">
              <img [src]="reserva.entrenador_foto || 'assets/images/placeholder_avatar.png'"
                style="object-fit: cover;" />
            </ion-avatar>
            <span>Coach: <strong>{{ reserva.entrenador_nombre }}</strong></span>
          </div>

          <div class="pack-row">
            <span class="pack-label">{{ reserva.pack_nombre }}</span>
          </div>

          <!-- Cancel Button -->
          <div class="actions-row" *ngIf="tipoVista === 'proximas'">
            <ion-button fill="outline" color="danger" size="small" expand="block" (click)="cancelarReserva(reserva)">
              Cancelar Clase
            </ion-button>
          </div>
        </div>
      </div>
    </div>

  </div> <!-- Closing dashboard-container -->

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- Invitation Modal (Ionic Style) -->
  <div class="nike-modal-overlay" *ngIf="showModalInvitacion" (click)="cerrarModal()">
    <div class="nike-modal-card animate-pop" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <div class="header-icon">
          <ion-icon name="mail-outline"></ion-icon>
        </div>
        <h2>Invitar Compa\xF1ero</h2>
        <ion-button fill="clear" color="dark" (click)="cerrarModal()" class="btn-close-modal">
          <ion-icon name="close-outline"></ion-icon>
        </ion-button>
      </div>

      <div class="modal-body">
        <p>Ingresa el email de tu compa\xF1ero para que se una a este pack Duo/Multi. Debe estar registrado en la App.</p>

        <div class="nike-input-group">
          <ion-label>Email del Jugador</ion-label>
          <ion-input type="email" [(ngModel)]="emailInvitado" placeholder="ejemplo@correo.com"
            class="nike-input-field"></ion-input>
        </div>

        <div class="modal-actions">
          <ion-button fill="outline" color="medium" (click)="cerrarModal()" class="nike-button-modal">
            Cancelar
          </ion-button>
          <ion-button (click)="enviarInvitacion()" class="nike-button-modal confirm">
            Enviar Invitaci\xF3n
          </ion-button>
        </div>
      </div>
    </div>
  </div>

</ion-content>`, styles: ["/* src/app/pages/jugador-calendario/jugador-calendario.page.scss */\n.header-nike {\n  height: 200px;\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  padding: 30px 25px;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.7));\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .header-title {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content .header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 15px;\n  font-weight: 500;\n}\n.segment-wrapper {\n  padding: 20px 25px 5px;\n}\n.nike-segment {\n  --background: #f2f2f7;\n  border-radius: 14px;\n  padding: 4px;\n}\n.nike-segment ion-segment-button {\n  --indicator-color: white;\n  --color: #8e8e93;\n  --color-checked: var(--ion-color-primary);\n  --border-radius: 10px;\n  font-weight: 800;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n  min-height: 44px;\n}\n.nike-segment ion-segment-button::before {\n  border: none !important;\n}\n.dashboard-container {\n  padding: 20px 25px 100px;\n}\n.state-container {\n  text-align: center;\n  padding: 60px 20px;\n}\n.state-container ion-spinner {\n  --color: var(--ion-color-primary);\n  width: 40px;\n  height: 40px;\n  margin-bottom: 15px;\n}\n.state-container .empty-icon-box {\n  width: 70px;\n  height: 70px;\n  background: #f2f2f7;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.state-container .empty-icon-box ion-icon {\n  font-size: 32px;\n  color: #c7c7cc;\n}\n.state-container h2 {\n  font-size: 20px;\n  margin: 0;\n}\n.state-container p {\n  color: #8e8e93;\n  margin: 8px 0 25px;\n  font-size: 15px;\n}\n.state-container .nike-button-small {\n  --background: var(--ion-color-primary);\n  --border-radius: 12px;\n  font-weight: 700;\n  text-transform: none;\n  height: 50px;\n}\n.sessions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.session-card {\n  padding: 0;\n  margin-bottom: 0;\n}\n.session-card .card-header {\n  padding: 15px 20px;\n  border-bottom: 1px solid #f2f2f7;\n}\n.session-card .card-header .row-top {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n.session-card .card-header .date-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.session-card .card-header .date-badge .day {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n  line-height: 1;\n}\n.session-card .card-header .date-badge .month {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  margin-top: 2px;\n}\n.session-card .card-header .badges-right {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: flex-end;\n}\n.session-card .card-header .modalidad-tag {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.session-card .card-header .modalidad-tag.grupal {\n  background: rgba(139, 92, 246, 0.1);\n  color: #7c3aed;\n}\n.session-card .card-header .modalidad-tag.individual {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n.session-card .card-header .modalidad-tag.multi {\n  background: rgba(16, 185, 129, 0.1);\n  color: #059669;\n}\n.session-card .card-header .status-tag {\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.session-card .card-header .status-tag.pendiente,\n.session-card .card-header .status-tag.reservado {\n  background: #fff9c4;\n  color: #fbc02d;\n}\n.session-card .card-header .status-tag.activo,\n.session-card .card-header .status-tag.confirmada {\n  background: #e8f5e9;\n  color: #4caf50;\n}\n.session-card .card-header .status-tag.cancelada {\n  background: #ffebee;\n  color: #ef5350;\n}\n.session-card .card-header .status-tag.completada {\n  background: #f2f2f7;\n  color: #8e8e93;\n}\n.session-card .card-body {\n  padding: 15px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.session-card .card-body .time-row,\n.session-card .card-body .coach-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #48484a;\n}\n.session-card .card-body .time-row ion-icon,\n.session-card .card-body .coach-row ion-icon {\n  font-size: 16px;\n  color: #c7c7cc;\n}\n.session-card .card-body .time-row .avatar-mini,\n.session-card .card-body .coach-row .avatar-mini {\n  width: 24px;\n  height: 24px;\n  margin-right: -4px;\n}\n.session-card .card-body .time-row strong,\n.session-card .card-body .coach-row strong {\n  color: var(--ion-color-primary);\n}\n.session-card .card-body .pack-row {\n  margin-top: 5px;\n}\n.session-card .card-body .pack-row .pack-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #8e8e93;\n  background: #f2f2f7;\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.team-section-ionic {\n  padding: 12px 20px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #f2f2f7;\n}\n.team-section-ionic .team-label {\n  font-size: 11px;\n  font-weight: 800;\n  color: #8e8e93;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.team-section-ionic .team-avatars {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.team-section-ionic .team-avatars .avatar-chip {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 800;\n  color: white;\n  position: relative;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.team-section-ionic .team-avatars .avatar-chip.owner {\n  background: #000;\n}\n.team-section-ionic .team-avatars .avatar-chip.guest {\n  background: #64748b;\n}\n.team-section-ionic .team-avatars .avatar-chip.pending {\n  background: #f59e0b;\n  opacity: 0.8;\n}\n.team-section-ionic .team-avatars .avatar-chip.add {\n  background: white;\n  color: #8e8e93;\n  border: 1px dashed #c7c7cc;\n  box-shadow: none;\n}\n.team-section-ionic .team-avatars .avatar-chip .status-dot {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  width: 10px;\n  height: 10px;\n  background: #ef4444;\n  border: 2px solid white;\n  border-radius: 50%;\n}\n.nike-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.nike-modal-card {\n  background: #fff;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.nike-modal-card .modal-header {\n  background: #000;\n  color: #fff;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n}\n.nike-modal-card .modal-header .header-icon {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.nike-modal-card .modal-header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.nike-modal-card .modal-header .btn-close-modal {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 32px;\n  width: 32px;\n  margin: 0;\n  --color: white;\n}\n.nike-modal-card .modal-body {\n  padding: 24px;\n}\n.nike-modal-card .modal-body p {\n  margin: 0 0 24px;\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.5;\n}\n.nike-modal-card .modal-body .nike-input-group {\n  margin-bottom: 24px;\n}\n.nike-modal-card .modal-body .nike-input-group ion-label {\n  display: block;\n  font-size: 12px;\n  font-weight: 800;\n  color: #1e293b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.nike-modal-card .modal-body .nike-input-group .nike-input-field {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: #f8fafc;\n  --border-radius: 12px;\n  --placeholder-color: #94a3b8;\n  font-weight: 600;\n  border: 2px solid #f1f5f9;\n  border-radius: 12px;\n}\n.nike-modal-card .modal-body .nike-input-group .nike-input-field.focused {\n  border-color: #000;\n}\n.nike-modal-card .modal-body .modal-actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.nike-modal-card .modal-body .modal-actions .nike-button-modal {\n  margin: 0;\n  --border-radius: 14px;\n  --font-weight: 700;\n  height: 50px;\n  text-transform: none;\n  font-size: 14px;\n}\n.nike-modal-card .modal-body .modal-actions .nike-button-modal.confirm {\n  --background: #000;\n  --color: #fff;\n}\n.nike-fab {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: var(--ion-color-primary);\n}\n@keyframes pop {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes animate-up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-up {\n  animation: animate-up 0.5s ease forwards;\n}\n@keyframes animate-fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade {\n  animation: animate-fade 0.5s ease;\n}\n/*# sourceMappingURL=jugador-calendario.page.css.map */\n"] }]
  }], () => [{ type: MysqlService }, { type: PackAlumnoService }, { type: Router }, { type: AlertController }, { type: ToastController }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JugadorCalendarioPage, { className: "JugadorCalendarioPage", filePath: "src/app/pages/jugador-calendario/jugador-calendario.page.ts", lineNumber: 20 });
})();
export {
  JugadorCalendarioPage
};
//# sourceMappingURL=jugador-calendario.page-2LCHJGP2.js.map

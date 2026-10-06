import {
  EntrenamientoService
} from "./chunk-DEYW32VP.js";
import {
  PacksService
} from "./chunk-UA6B4IIY.js";
import {
  PadelLoaderComponent
} from "./chunk-UYOLHWN7.js";
import {
  PackAlumnoService
} from "./chunk-OWACC5B5.js";
import {
  NotificationService
} from "./chunk-OPJ5BMLN.js";
import "./chunk-DBDG6EJI.js";
import {
  AlertController,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonLabel,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonicModule,
  LoadingController,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-LFXGPXMG.js";
import {
  addIcons,
  addOutline,
  calendarOutline,
  callOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  closeOutline,
  homeOutline,
  locationOutline,
  logOutOutline,
  mailOutline,
  mapOutline,
  peopleOutline,
  personOutline,
  searchOutline,
  settingsOutline,
  tennisballOutline,
  ticketOutline,
  warningOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import "./chunk-LEH7FWY4.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  Component,
  CurrencyPipe,
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
  catchError,
  finalize,
  forkJoin,
  of,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/pages/jugador-reservas/jugador-reservas.page.ts
var _c0 = () => [0, 0.5, 0.75, 0.85, 1];
var _c1 = () => [0, 0.6, 0.9];
var _c2 = (a0) => ["estado-badge", a0];
var _c3 = () => [1, 2, 3, 4];
function JugadorReservasPage_div_23_app_padel_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-padel-loader");
  }
}
function JugadorReservasPage_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "ion-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "TU AGENDA EST\xC1 LIMPIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Es el momento perfecto para empezar a entrenar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 29);
    \u0275\u0275listener("click", function JugadorReservasPage_div_23_div_2_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarVista("agendar"));
    });
    \u0275\u0275text(8, " AGENDAR CLASE ");
    \u0275\u0275elementEnd()();
  }
}
function JugadorReservasPage_div_23_div_3_div_4_div_24_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275text(1, " (Ver direcci\xF3n) ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reserva_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", reserva_r3.club_maps, \u0275\u0275sanitizeUrl);
  }
}
function JugadorReservasPage_div_23_div_3_div_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementStart(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, JugadorReservasPage_div_23_div_3_div_4_div_24_a_4_Template, 2, 1, "a", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reserva_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reserva_r3.club_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reserva_r3.club_maps);
  }
}
function JugadorReservasPage_div_23_div_3_div_4_div_25_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 62);
  }
}
function JugadorReservasPage_div_23_div_3_div_4_div_25_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275template(2, JugadorReservasPage_div_23_div_3_div_4_div_25_div_6_div_2_Template, 1, 0, "div", 61);
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
function JugadorReservasPage_div_23_div_3_div_4_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function JugadorReservasPage_div_23_div_3_div_4_div_25_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const reserva_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.abrirModalInvitacion(reserva_r3));
    });
    \u0275\u0275element(1, "ion-icon", 64);
    \u0275\u0275elementEnd();
  }
}
function JugadorReservasPage_div_23_div_3_div_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275text(2, "Mi Equipo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "div", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, JugadorReservasPage_div_23_div_3_div_4_div_25_div_6_Template, 3, 5, "div", 58)(7, JugadorReservasPage_div_23_div_3_div_4_div_25_div_7_Template, 2, 0, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
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
function JugadorReservasPage_div_23_div_3_div_4_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "ion-button", 66);
    \u0275\u0275listener("click", function JugadorReservasPage_div_23_div_3_div_4_div_26_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const reserva_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.mostrarConfirmacionCancelar(reserva_r3));
    });
    \u0275\u0275text(2, " CANCELAR RESERVA ");
    \u0275\u0275elementEnd()();
  }
}
function JugadorReservasPage_div_23_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 37)(7, "span", 38);
    \u0275\u0275element(8, "ion-icon", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 41)(14, "div", 42);
    \u0275\u0275element(15, "ion-icon", 43);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "slice");
    \u0275\u0275pipe(19, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 44);
    \u0275\u0275element(21, "ion-icon", 45);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, JugadorReservasPage_div_23_div_3_div_4_div_24_Template, 5, 2, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, JugadorReservasPage_div_23_div_3_div_4_div_25_Template, 8, 4, "div", 47)(26, JugadorReservasPage_div_23_div_3_div_4_div_26_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reserva_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 20, \u0275\u0275pipeBind2(4, 17, reserva_r3.fecha, "dd MMM")), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("multi", reserva_r3.cantidad_personas > 1 && reserva_r3.tipo !== "grupal")("grupal", reserva_r3.tipo === "grupal")("individual", reserva_r3.tipo !== "grupal" && reserva_r3.cantidad_personas <= 1);
    \u0275\u0275advance();
    \u0275\u0275property("name", reserva_r3.tipo === "grupal" || reserva_r3.cantidad_personas > 1 ? "people-outline" : "person-outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reserva_r3.tipo === "grupal" ? "GRUPAL" : reserva_r3.cantidad_personas > 1 ? "MULTIJUGADOR" : "INDIVIDUAL", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c2, reserva_r3.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 22, reserva_r3.estado), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(18, 24, reserva_r3.hora_inicio, 0, 5), " - ", \u0275\u0275pipeBind3(19, 28, reserva_r3.hora_fin, 0, 5));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Coach: ", reserva_r3.entrenador_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reserva_r3.club_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reserva_r3.cantidad_personas > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reserva_r3.estado === "reservado");
  }
}
function JugadorReservasPage_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h3", 31);
    \u0275\u0275element(2, "ion-icon", 32);
    \u0275\u0275text(3, " Clases Programadas ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, JugadorReservasPage_div_23_div_3_div_4_Template, 27, 34, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.reservasIndividuales);
  }
}
function JugadorReservasPage_div_23_div_4_div_4_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupal_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(grupal_r7.genero);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getGeneroLabel(grupal_r7.genero), " ");
  }
}
function JugadorReservasPage_div_23_div_4_div_4_div_25_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275text(1, " (Ver direcci\xF3n) ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupal_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", grupal_r7.club_maps, \u0275\u0275sanitizeUrl);
  }
}
function JugadorReservasPage_div_23_div_4_div_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementStart(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, JugadorReservasPage_div_23_div_4_div_4_div_25_a_4_Template, 2, 1, "a", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupal_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(grupal_r7.club_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", grupal_r7.club_maps);
  }
}
function JugadorReservasPage_div_23_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 71);
    \u0275\u0275text(9, "INSCRITO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 41)(11, "div", 42);
    \u0275\u0275element(12, "ion-icon", 43);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 72);
    \u0275\u0275element(17, "ion-icon", 73);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, JugadorReservasPage_div_23_div_4_div_4_span_20_Template, 2, 3, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 75);
    \u0275\u0275element(22, "ion-icon", 68);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, JugadorReservasPage_div_23_div_4_div_4_div_25_Template, 5, 2, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grupal_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(5, 15, grupal_r7.dia_semana != null ? ctx_r1.getDiasSemana(grupal_r7.dia_semana) : \u0275\u0275pipeBind4(4, 10, grupal_r7.fecha, "EEEE", "", "es")), " ", \u0275\u0275pipeBind1(7, 20, \u0275\u0275pipeBind2(6, 17, grupal_r7.fecha, "dd MMM")), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(15, 22, grupal_r7.hora_inicio, 0, 5), " (", grupal_r7.duracion_calculada, " MIN)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", grupal_r7.pack_nombre, " \u2022 ", grupal_r7.categoria);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", grupal_r7.genero);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Sesi\xF3n Grupal: ", grupal_r7.cupos_ocupados || 0, " / ", grupal_r7.capacidad_maxima, " Jugadores");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", grupal_r7.club_nombre);
  }
}
function JugadorReservasPage_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "h3", 31);
    \u0275\u0275element(2, "ion-icon", 68);
    \u0275\u0275text(3, " Clases Grupales ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, JugadorReservasPage_div_23_div_4_div_4_Template, 26, 26, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.entrenamientosGrupales);
  }
}
function JugadorReservasPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, JugadorReservasPage_div_23_app_padel_loader_1_Template, 1, 0, "app-padel-loader", 23)(2, JugadorReservasPage_div_23_div_2_Template, 9, 0, "div", 24)(3, JugadorReservasPage_div_23_div_3_Template, 5, 1, "div", 25)(4, JugadorReservasPage_div_23_div_4_Template, 5, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cargando && ctx_r1.reservasIndividuales.length === 0 && ctx_r1.entrenamientosGrupales.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cargando && ctx_r1.reservasIndividuales.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cargando && ctx_r1.entrenamientosGrupales.length > 0);
  }
}
function JugadorReservasPage_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "ion-spinner", 82);
    \u0275\u0275elementEnd();
  }
}
function JugadorReservasPage_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275element(2, "ion-icon", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 86);
    \u0275\u0275text(4, "SIN PARTIDOS PROGRAMADOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 87);
    \u0275\u0275text(6, "No tienes partidos reservados pr\xF3ximamente. \xA1Busca una pista y empieza a jugar!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 88);
    \u0275\u0275listener("click", function JugadorReservasPage_div_24_div_2_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/clubes-reservar"]));
    });
    \u0275\u0275text(8, " BUSCAR CLUB Y CANCHA ");
    \u0275\u0275elementEnd()();
  }
}
function JugadorReservasPage_div_24_div_3_div_1_div_22_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 106);
  }
  if (rf & 2) {
    const i_r11 = \u0275\u0275nextContext().$implicit;
    const p_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.getProfileImage(p_r10["jugador" + i_r11 + "_foto"]), \u0275\u0275sanitizeUrl);
  }
}
function JugadorReservasPage_div_24_div_3_div_1_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "ion-icon", 108);
    \u0275\u0275elementEnd();
  }
}
function JugadorReservasPage_div_24_div_3_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275template(1, JugadorReservasPage_div_24_div_3_div_1_div_22_img_1_Template, 1, 1, "img", 104)(2, JugadorReservasPage_div_24_div_3_div_1_div_22_div_2_Template, 2, 0, "div", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.$implicit;
    const p_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10["jugador" + i_r11 + "_foto"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r10["jugador" + i_r11 + "_foto"]);
  }
}
function JugadorReservasPage_div_24_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function JugadorReservasPage_div_24_div_3_div_1_Template_div_click_0_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/partido-detalle", p_r10.id]));
    });
    \u0275\u0275elementStart(1, "div", 92)(2, "div", 93)(3, "span", 94);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 95);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 96)(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 97);
    \u0275\u0275element(14, "ion-icon", 50);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "ion-icon", 98);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 99)(21, "div", 100);
    \u0275\u0275template(22, JugadorReservasPage_div_24_div_3_div_1_div_22_Template, 3, 2, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 102);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 7, p_r10.fecha, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, \u0275\u0275pipeBind2(8, 10, p_r10.fecha, "MMM")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r10.club_nombre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r10.cancha_nombre || "Cancha por asignar");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r10.hora_inicio.slice(0, 5), " HRS");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(15, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isMatchComplete(p_r10) ? "Completo" : "Faltan " + ctx_r1.getMissingPlayersCount(p_r10), " ");
  }
}
function JugadorReservasPage_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, JugadorReservasPage_div_24_div_3_div_1_Template, 25, 16, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.misPartidos);
  }
}
function JugadorReservasPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, JugadorReservasPage_div_24_div_1_Template, 2, 0, "div", 78)(2, JugadorReservasPage_div_24_div_2_Template, 9, 0, "div", 79)(3, JugadorReservasPage_div_24_div_3_Template, 2, 1, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cargando && ctx_r1.misPartidos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cargando && ctx_r1.misPartidos.length > 0);
  }
}
function JugadorReservasPage_div_25_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275property("value", r_r13.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r13.name);
  }
}
function JugadorReservasPage_div_25_ion_select_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("value", c_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14);
  }
}
function JugadorReservasPage_div_25_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 124);
    \u0275\u0275listener("click", function JugadorReservasPage_div_25_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.limpiarFiltrosUbicacion());
    });
    \u0275\u0275text(1, " \u2715 Limpiar ");
    \u0275\u0275elementEnd();
  }
}
function JugadorReservasPage_div_25_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span");
    \u0275\u0275text(2, "\u{1F4CD} Filtrando por: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.comunaSeleccionada ? ctx_r1.comunaSeleccionada + (ctx_r1.regionSeleccionada ? ", " : "") : "", "", ctx_r1.regionSeleccionada);
  }
}
function JugadorReservasPage_div_25_div_17_div_1_div_7_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 139);
  }
}
function JugadorReservasPage_div_25_div_17_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275listener("click", function JugadorReservasPage_div_25_div_17_div_1_div_7_Template_div_click_0_listener() {
      const coach_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.selectedEntrenador = coach_r17.id;
      return \u0275\u0275resetView(ctx_r1.onEntrenadorChange());
    });
    \u0275\u0275elementStart(1, "div", 133);
    \u0275\u0275element(2, "img", 134);
    \u0275\u0275template(3, JugadorReservasPage_div_25_div_17_div_1_div_7_ion_icon_3_Template, 1, 0, "ion-icon", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 136)(5, "span", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 138);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const coach_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.selectedEntrenador === coach_r17.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", coach_r17.foto || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedEntrenador === coach_r17.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coach_r17.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coach_r17.comuna || "Club Local");
  }
}
function JugadorReservasPage_div_25_div_17_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275element(1, "ion-icon", 141);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No hay entrenadores disponibles para esta regi\xF3n/comuna.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 142);
    \u0275\u0275listener("click", function JugadorReservasPage_div_25_div_17_div_1_div_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.limpiarFiltrosUbicacion());
    });
    \u0275\u0275text(5, "Ver todas las zonas");
    \u0275\u0275elementEnd()();
  }
}
function JugadorReservasPage_div_25_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 128)(2, "h3");
    \u0275\u0275text(3, "Coach Discovery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Entrenadores de \xE9lite en tu zona");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 129);
    \u0275\u0275template(7, JugadorReservasPage_div_25_div_17_div_1_div_7_Template, 9, 6, "div", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, JugadorReservasPage_div_25_div_17_div_1_div_8_Template, 6, 0, "div", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.entrenadores);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entrenadores.length === 0);
  }
}
function JugadorReservasPage_div_25_div_17_app_padel_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-padel-loader", 143);
  }
}
function JugadorReservasPage_div_25_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, JugadorReservasPage_div_25_div_17_div_1_Template, 9, 2, "div", 126)(2, JugadorReservasPage_div_25_div_17_app_padel_loader_2_Template, 1, 0, "app-padel-loader", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingDiscovery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingDiscovery);
  }
}
function JugadorReservasPage_div_25_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 145);
    \u0275\u0275element(2, "ion-icon", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "CR\xC9DITOS AGOTADOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Has consumido todas tus sesiones y no tienes clases pendientes. \xA1Adquiere un nuevo pack para seguir entrenando! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 29);
    \u0275\u0275listener("click", function JugadorReservasPage_div_25_div_18_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.showPackModal = true;
      return \u0275\u0275resetView(ctx_r1.fetchAllPacks());
    });
    \u0275\u0275text(8, " COMPRAR NUEVO PACK ");
    \u0275\u0275elementEnd()();
  }
}
function JugadorReservasPage_div_25_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 147);
    \u0275\u0275element(2, "ion-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "CLASES PENDIENTES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "A\xFAn tienes ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " clases reservadas por asistir. Podr\xE1s comprar un nuevo pack una vez que hayas completado tus reservas actuales.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-button", 148);
    \u0275\u0275listener("click", function JugadorReservasPage_div_25_div_19_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarVista("mis-entrenamientos"));
    });
    \u0275\u0275text(11, " VER MIS CLASES ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.reservasFuturas);
  }
}
function JugadorReservasPage_div_25_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275element(1, "ion-icon", 173);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.entrenadorTelefono);
  }
}
function JugadorReservasPage_div_25_div_20_div_12_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r23 = ctx.$implicit;
    \u0275\u0275property("value", club_r23.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", club_r23.nombre, " ");
  }
}
function JugadorReservasPage_div_25_div_20_div_12_div_9_div_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 183);
    \u0275\u0275element(1, "ion-icon", 184);
    \u0275\u0275text(2, " VER EN GOOGLE MAPS ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("href", (tmp_7_0 = ctx_r1.getSelectedClub()) == null ? null : tmp_7_0.maps, \u0275\u0275sanitizeUrl);
  }
}
function JugadorReservasPage_div_25_div_20_div_12_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 181);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, JugadorReservasPage_div_25_div_20_div_12_div_9_div_1_a_3_Template, 3, 1, "a", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.getSelectedClub()) == null ? null : tmp_6_0.direccion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r1.getSelectedClub()) == null ? null : tmp_7_0.maps);
  }
}
function JugadorReservasPage_div_25_div_20_div_12_div_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185);
    \u0275\u0275element(1, "ion-icon", 186);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "El entrenador no ha registrado la direcci\xF3n exacta de este club.");
    \u0275\u0275elementEnd()();
  }
}
function JugadorReservasPage_div_25_div_20_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275template(1, JugadorReservasPage_div_25_div_20_div_12_div_9_div_1_Template, 4, 2, "div", 180)(2, JugadorReservasPage_div_25_div_20_div_12_div_9_ng_template_2_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const noAddress_r24 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.getSelectedClub()) == null ? null : tmp_5_0.direccion)("ngIfElse", noAddress_r24);
  }
}
function JugadorReservasPage_div_25_div_20_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 174)(1, "span", 153);
    \u0275\u0275text(2, "\xBFD\xD3NDE ENTRENAMOS?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 175);
    \u0275\u0275element(4, "ion-icon", 176);
    \u0275\u0275elementStart(5, "ion-select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorReservasPage_div_25_div_20_div_12_Template_ion_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedClubId, $event) || (ctx_r1.selectedClubId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function JugadorReservasPage_div_25_div_20_div_12_Template_ion_select_ionChange_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onClubFilterChange());
    });
    \u0275\u0275elementStart(6, "ion-select-option", 123);
    \u0275\u0275text(7, "TODOS LOS CLUBES");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, JugadorReservasPage_div_25_div_20_div_12_ion_select_option_8_Template, 2, 2, "ion-select-option", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, JugadorReservasPage_div_25_div_20_div_12_div_9_Template, 4, 2, "div", 178);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedClubId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.clubesDisponibles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedClubId);
  }
}
function JugadorReservasPage_div_25_div_20_ion_segment_button_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-segment-button", 123)(1, "ion-label")(2, "span", 187);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 188);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r25 = ctx.$implicit;
    \u0275\u0275property("value", d_r25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, \u0275\u0275pipeBind2(4, 3, d_r25, "EEE")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, d_r25, "dd"));
  }
}
function JugadorReservasPage_div_25_div_20_div_39_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 198);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(h_r27.genero);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 3, h_r27.categoria || h_r27.nombre_pack, 0, 12), " ");
  }
}
function JugadorReservasPage_div_25_div_20_div_39_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 199);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, h_r27.club_nombre, 0, 14), " ");
  }
}
function JugadorReservasPage_div_25_div_20_div_39_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 200);
  }
}
function JugadorReservasPage_div_25_div_20_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 192);
    \u0275\u0275listener("click", function JugadorReservasPage_div_25_div_20_div_39_div_1_Template_div_click_0_listener() {
      const h_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(!h_r27.ocupado && ctx_r1.reservarHorario(h_r27));
    });
    \u0275\u0275elementStart(1, "div", 193)(2, "span", 194);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JugadorReservasPage_div_25_div_20_div_39_div_1_span_5_Template, 3, 7, "span", 195)(6, JugadorReservasPage_div_25_div_20_div_39_div_1_span_6_Template, 3, 5, "span", 196);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, JugadorReservasPage_div_25_div_20_div_39_div_1_div_7_Template, 1, 0, "div", 197);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r27 = ctx.$implicit;
    \u0275\u0275classProp("occupied", h_r27.ocupado)("grupal", h_r27.tipo === "grupal")("tramo-manana", h_r27.tramo === "manana")("tramo-tarde", h_r27.tramo === "tarde")("tramo-noche", h_r27.tramo === "noche");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 14, h_r27.hora_inicio, "HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", h_r27.tipo === "grupal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", h_r27.club_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", h_r27.ocupado);
  }
}
function JugadorReservasPage_div_25_div_20_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201);
    \u0275\u0275element(1, "ion-icon", 202);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "SIN CUPOS DISPONIBLES");
    \u0275\u0275elementEnd()();
  }
}
function JugadorReservasPage_div_25_div_20_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189);
    \u0275\u0275template(1, JugadorReservasPage_div_25_div_20_div_39_div_1_Template, 8, 17, "div", 190)(2, JugadorReservasPage_div_25_div_20_div_39_div_2_Template, 4, 0, "div", 191);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.horariosPorDia[ctx_r1.diaSeleccionado].todos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.horariosPorDia[ctx_r1.diaSeleccionado].todos.length === 0);
  }
}
function JugadorReservasPage_div_25_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "div", 150)(2, "div", 151)(3, "div", 152)(4, "span", 153);
    \u0275\u0275text(5, "COACH SELECCIONADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4", 154);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, JugadorReservasPage_div_25_div_20_div_8_Template, 4, 1, "div", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 156)(10, "ion-button", 157);
    \u0275\u0275listener("click", function JugadorReservasPage_div_25_div_20_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedEntrenador = null);
    });
    \u0275\u0275text(11, " CAMBIAR ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, JugadorReservasPage_div_25_div_20_div_12_Template, 10, 4, "div", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 159)(14, "ion-segment", 160);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorReservasPage_div_25_div_20_Template_ion_segment_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.tipoEntrenamiento, $event) || (ctx_r1.tipoEntrenamiento = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function JugadorReservasPage_div_25_div_20_Template_ion_segment_ionChange_14_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFilter(ctx_r1.tipoEntrenamiento));
    });
    \u0275\u0275elementStart(15, "ion-segment-button", 161)(16, "ion-label");
    \u0275\u0275text(17, "TODAS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-segment-button", 162)(19, "ion-label");
    \u0275\u0275text(20, "INDIV.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ion-segment-button", 163)(22, "ion-label");
    \u0275\u0275text(23, "MULTI");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "ion-segment-button", 164)(25, "ion-label");
    \u0275\u0275text(26, "GRUPAL");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "ion-segment", 165);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorReservasPage_div_25_div_20_Template_ion_segment_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.diaSeleccionado, $event) || (ctx_r1.diaSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function JugadorReservasPage_div_25_div_20_Template_ion_segment_ionChange_27_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDiaSeleccionadoChange());
    });
    \u0275\u0275template(28, JugadorReservasPage_div_25_div_20_ion_segment_button_28_Template, 9, 11, "ion-segment-button", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 166)(30, "div", 167);
    \u0275\u0275element(31, "span", 168);
    \u0275\u0275text(32, " Ma\xF1ana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 169);
    \u0275\u0275element(34, "span", 168);
    \u0275\u0275text(35, " Tarde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 170);
    \u0275\u0275element(37, "span", 168);
    \u0275\u0275text(38, " Noche");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, JugadorReservasPage_div_25_div_20_div_39_Template, 3, 2, "div", 171);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedCoachName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entrenadorTelefono);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.clubesDisponibles.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tipoEntrenamiento);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.diaSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredDias);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.diaSeleccionado && (ctx_r1.horariosPorDia[ctx_r1.diaSeleccionado] == null ? null : ctx_r1.horariosPorDia[ctx_r1.diaSeleccionado].todos));
  }
}
function JugadorReservasPage_div_25_app_padel_loader_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-padel-loader", 143);
  }
}
function JugadorReservasPage_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "div", 111)(3, "div", 112);
    \u0275\u0275element(4, "ion-icon", 50);
    \u0275\u0275elementStart(5, "ion-select", 113);
    \u0275\u0275listener("ionChange", function JugadorReservasPage_div_25_Template_ion_select_ionChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRegionSelectChange($event));
    });
    \u0275\u0275elementStart(6, "ion-select-option", 114);
    \u0275\u0275text(7, "TODAS LAS REGIONES");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, JugadorReservasPage_div_25_ion_select_option_8_Template, 2, 2, "ion-select-option", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 112);
    \u0275\u0275element(10, "ion-icon", 116);
    \u0275\u0275elementStart(11, "ion-select", 117);
    \u0275\u0275listener("ionChange", function JugadorReservasPage_div_25_Template_ion_select_ionChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onComunaSelectChange($event));
    });
    \u0275\u0275elementStart(12, "ion-select-option", 114);
    \u0275\u0275text(13, "TODAS LAS COMUNAS");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JugadorReservasPage_div_25_ion_select_option_14_Template, 2, 2, "ion-select-option", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, JugadorReservasPage_div_25_button_15_Template, 2, 0, "button", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, JugadorReservasPage_div_25_div_16_Template, 5, 2, "div", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, JugadorReservasPage_div_25_div_17_Template, 3, 2, "div", 23)(18, JugadorReservasPage_div_25_div_18_Template, 9, 0, "div", 120)(19, JugadorReservasPage_div_25_div_19_Template, 12, 1, "div", 120)(20, JugadorReservasPage_div_25_div_20_Template, 40, 7, "div", 121)(21, JugadorReservasPage_div_25_app_padel_loader_21_Template, 1, 0, "app-padel-loader", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.regionSeleccionada);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.regions);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.comunaSeleccionada);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredComunas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.regionSeleccionada || ctx_r1.comunaSeleccionada);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.regionSeleccionada || ctx_r1.comunaSeleccionada);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.escenarioReserva === "A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.escenarioReserva === "B");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.escenarioReserva === "C");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedEntrenador && !ctx_r1.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cargando);
  }
}
function JugadorReservasPage_ng_template_27_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 219);
    \u0275\u0275element(1, "ion-icon", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("success", ctx_r1.couponApplied);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.couponApplied ? "checkmark-circle-outline" : "alert-circle-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.couponMessage);
  }
}
function JugadorReservasPage_ng_template_27_div_19_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 227);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pack_r30 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(2, 1, ctx_r1.getDiscountedPrice(pack_r30.precio), "CLP", "$", "1.0-0"), " ");
  }
}
function JugadorReservasPage_ng_template_27_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 220);
    \u0275\u0275listener("click", function JugadorReservasPage_ng_template_27_div_19_Template_div_click_0_listener() {
      const pack_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.comprarPackYReservar(pack_r30));
    });
    \u0275\u0275elementStart(1, "div", 221)(2, "span", 222);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 137);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 223)(7, "p", 224);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, JugadorReservasPage_ng_template_27_div_19_p_10_Template, 3, 6, "p", 225);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "ion-icon", 226);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pack_r30 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", pack_r30.sesiones_totales, " SESIONES");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pack_r30.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("discounted", ctx_r1.couponApplied);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(9, 6, pack_r30.precio, "CLP", "$", "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.couponApplied);
  }
}
function JugadorReservasPage_ng_template_27_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228)(1, "p", 229);
    \u0275\u0275text(2, "No hay packs disponibles para este tipo de sesi\xF3n.");
    \u0275\u0275elementEnd()();
  }
}
function JugadorReservasPage_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 203)(1, "div", 204);
    \u0275\u0275element(2, "div", 205);
    \u0275\u0275elementStart(3, "span", 206);
    \u0275\u0275text(4, "Agendar Clase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 207);
    \u0275\u0275text(6, "ELEGIR PACK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 208)(8, "div", 209)(9, "div", 210);
    \u0275\u0275element(10, "ion-icon", 211);
    \u0275\u0275elementStart(11, "ion-label");
    \u0275\u0275text(12, "CUP\xD3N DE DESCUENTO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 212)(14, "ion-input", 213);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorReservasPage_ng_template_27_Template_ion_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.couponCode, $event) || (ctx_r1.couponCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-button", 214);
    \u0275\u0275listener("click", function JugadorReservasPage_ng_template_27_Template_ion_button_click_15_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyCoupon());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, JugadorReservasPage_ng_template_27_div_17_Template, 4, 4, "div", 215);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 216);
    \u0275\u0275template(19, JugadorReservasPage_ng_template_27_div_19_Template, 12, 11, "div", 217)(20, JugadorReservasPage_ng_template_27_div_20_Template, 3, 0, "div", 218);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.couponCode);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.couponApplied ? "success" : "dark");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.couponApplied ? "VALIDADO" : "APLICAR", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.couponMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.availablePacks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.availablePacks.length === 0);
  }
}
function JugadorReservasPage_ng_template_29_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 247)(1, "span");
    \u0275\u0275text(2, "Cup\xF3n Descuento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind4(5, 1, ctx_r1.selectedPackToConfirm.precio - ctx_r1.getDiscountedPrice(ctx_r1.selectedPackToConfirm.precio), "CLP", "$", "1.0-0"));
  }
}
function JugadorReservasPage_ng_template_29_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 233)(1, "div", 234)(2, "div", 235);
    \u0275\u0275element(3, "ion-icon", 236);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 237)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 238)(10, "div", 239)(11, "span");
    \u0275\u0275text(12, "Precio Base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, JugadorReservasPage_ng_template_29_div_5_div_16_Template, 6, 6, "div", 240);
    \u0275\u0275elementStart(17, "div", 241)(18, "span");
    \u0275\u0275text(19, "Monto Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 242);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 243);
    \u0275\u0275element(24, "ion-icon", 39);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 244)(28, "ion-button", 245);
    \u0275\u0275listener("click", function JugadorReservasPage_ng_template_29_div_5_Template_ion_button_click_28_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmarCompra());
    });
    \u0275\u0275text(29, " CONFIRMAR Y PROCEDER ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-button", 246);
    \u0275\u0275listener("click", function JugadorReservasPage_ng_template_29_div_5_Template_ion_button_click_30_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showConfirmationModal = false);
    });
    \u0275\u0275text(31, " CANCELAR ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedPackToConfirm.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedPackToConfirm.sesiones_totales, " SESIONES DE ENTRENAMIENTO");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 7, ctx_r1.selectedPackToConfirm.precio, "CLP", "$", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.couponApplied);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(22, 12, ctx_r1.getDiscountedPrice(ctx_r1.selectedPackToConfirm.precio), "CLP", "$", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx_r1.selectedPackToConfirm.transbank_activo == 1 ? "shield-checkmark" : "information-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedPackToConfirm.transbank_activo == 1 ? "Pago Seguro v\xEDa Webpay" : "Pago directo con el Profesor");
  }
}
function JugadorReservasPage_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230)(1, "div", 231);
    \u0275\u0275element(2, "div", 205);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "CONFIRMAR PACK");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, JugadorReservasPage_ng_template_29_div_5_Template, 32, 17, "div", 232);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedPackToConfirm);
  }
}
function JugadorReservasPage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 248);
    \u0275\u0275listener("click", function JugadorReservasPage_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275elementStart(1, "div", 249);
    \u0275\u0275listener("click", function JugadorReservasPage_div_33_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r32);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 250)(3, "div", 251);
    \u0275\u0275element(4, "ion-icon", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Invitar Compa\xF1ero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 253);
    \u0275\u0275listener("click", function JugadorReservasPage_div_33_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275element(8, "ion-icon", 254);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 255)(10, "p");
    \u0275\u0275text(11, "Ingresa el email de tu compa\xF1ero para que se una a este pack Duo/Multi. Debe estar registrado en la App.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 256)(13, "ion-label");
    \u0275\u0275text(14, "Email del Jugador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-input", 257);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorReservasPage_div_33_Template_ion_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailInvitado, $event) || (ctx_r1.emailInvitado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 258)(17, "ion-button", 259);
    \u0275\u0275listener("click", function JugadorReservasPage_div_33_Template_ion_button_click_17_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275text(18, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ion-button", 260);
    \u0275\u0275listener("click", function JugadorReservasPage_div_33_Template_ion_button_click_19_listener() {
      \u0275\u0275restoreView(_r32);
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
var _JugadorReservasPage = class _JugadorReservasPage {
  constructor(entrenamientoService, mysqlService, packsService, packAlumnoService, toastCtrl, alertCtrl, loadingCtrl, router, route, notificationService, cdRef) {
    this.entrenamientoService = entrenamientoService;
    this.mysqlService = mysqlService;
    this.packsService = packsService;
    this.packAlumnoService = packAlumnoService;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.router = router;
    this.route = route;
    this.notificationService = notificationService;
    this.cdRef = cdRef;
    this.jugadorNombre = "...";
    this.fotoPerfil = "";
    this.vistaActual = "mis-entrenamientos";
    this.misPartidos = [];
    this.profesores = [];
    this.horarios = [];
    this.horariosPorDia = {};
    this.dias = [];
    this.tramoSeleccionado = "manana";
    this.packs = [];
    this.entrenadores = [];
    this.selectedEntrenador = null;
    this.selectedPack = null;
    this.packsDelEntrenador = [];
    this.totalTrainerPacks = [];
    this.jugadorId = Number(localStorage.getItem("userId"));
    this.tipoEntrenamiento = "todos";
    this.regionSeleccionada = "";
    this.comunaSeleccionada = "";
    this.regions = [
      { id: "13", name: "Metropolitana de Santiago" },
      { id: "15", name: "Arica y Parinacota" },
      { id: "1", name: "Tarapac\xE1" },
      { id: "2", name: "Antofagasta" },
      { id: "3", name: "Atacama" },
      { id: "4", name: "Coquimbo" },
      { id: "5", name: "Valpara\xEDso" },
      { id: "6", name: "O'Higgins" },
      { id: "7", name: "Maule" },
      { id: "16", name: "\xD1uble" },
      { id: "8", name: "Biob\xEDo" },
      { id: "9", name: "Araucan\xEDa" },
      { id: "14", name: "Los R\xEDos" },
      { id: "10", name: "Los Lagos" },
      { id: "11", name: "Ays\xE9n" },
      { id: "12", name: "Magallanes" }
    ];
    this.allComunas = {
      "13": ["Santiago", "Las Condes", "Providencia", "\xD1u\xF1oa", "Maip\xFA", "Puente Alto", "La Florida", "Vitacura", "Lo Barnechea", "Colina", "Lampa", "San Bernardo", "Pe\xF1alol\xE9n"],
      "15": ["Arica", "Camarones", "Putre", "General Lagos"],
      "1": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Pica", "Huara"],
      "2": ["Antofagasta", "Calama", "Mejillones", "Taltal", "Tocopilla"],
      "3": ["Copiap\xF3", "Vallenar", "Caldera", "Cha\xF1aral", "Huasco"],
      "4": ["La Serena", "Coquimbo", "Ovalle", "Illapel", "Vicu\xF1a", "Salamanca"],
      "5": ["Valpara\xEDso", "Vi\xF1a del Mar", "Conc\xF3n", "Quilpu\xE9", "Villa Alemana", "Limache", "Quillota", "San Antonio", "Los Andes", "San Felipe"],
      "6": ["Rancagua", "Machal\xED", "Rengo", "San Fernando", "Pichilemu", "Santa Cruz"],
      "7": ["Talca", "Curic\xF3", "Linares", "Constituci\xF3n", "Cauquenes", "Parral"],
      "16": ["Chill\xE1n", "Chill\xE1n Viejo", "San Carlos", "Bulnes", "Yungay"],
      "8": ["Concepci\xF3n", "Talcahuano", "San Pedro de la Paz", "Chiguayante", "Hualp\xE9n", "Los \xC1ngeles", "Coronel", "Lota", "Tom\xE9", "Penco"],
      "9": ["Temuco", "Padre Las Casas", "Villarrica", "Puc\xF3n", "Angol", "Victoria", "Lautaro"],
      "14": ["Valdivia", "La Uni\xF3n", "R\xEDo Bueno", "Panguipulli", "Paillaco", "Mariquina"],
      "10": ["Puerto Montt", "Puerto Varas", "Osorno", "Castro", "Ancud", "Quell\xF3n", "Frutillar"],
      "11": ["Coyhaique", "Puerto Ays\xE9n", "Chile Chico", "Cochrane"],
      "12": ["Punta Arenas", "Puerto Natales", "Porvenir", "Cabo de Hornos"]
    };
    this.filteredComunas = [];
    this.isLoadingDiscovery = false;
    this.showPackModal = false;
    this.availablePacks = [];
    this.pendingHorario = null;
    this.reservasIndividuales = [];
    this.entrenamientosGrupales = [];
    this.cargando = false;
    this.showCoachPicker = false;
    this.showModalInvitacion = false;
    this.selectedReserva = null;
    this.emailInvitado = "";
    this.clubesDisponibles = [];
    this.selectedClubId = null;
    this.entrenadorTelefono = "";
    this.coachSelectedData = null;
    this.creditosDisponibles = 0;
    this.reservasFuturas = 0;
    this.escenarioReserva = "A";
    this.couponCode = "";
    this.couponApplied = false;
    this.appliedCouponData = null;
    this.couponMessage = "";
    this.showConfirmationModal = false;
    this.selectedPackToConfirm = null;
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      chevronBackOutline,
      logOutOutline,
      peopleOutline,
      locationOutline,
      searchOutline,
      closeOutline,
      checkmarkCircleOutline,
      personOutline,
      mailOutline,
      addOutline,
      callOutline,
      mapOutline,
      warningOutline,
      ticketOutline,
      tennisballOutline
    });
  }
  ngOnInit() {
    const userIdStr = localStorage.getItem("userId");
    this.jugadorId = userIdStr ? Number(userIdStr) : 0;
    if (this.jugadorId <= 0) {
      this.router.navigate(["/login"]);
      return;
    }
    this.route.queryParams.subscribe((params) => {
      if (params["view"]) {
        this.vistaActual = params["view"];
      }
      this.fetchAllData();
    });
  }
  ionViewWillEnter() {
    const savedFoto = localStorage.getItem("userFoto") || localStorage.getItem("foto_perfil");
    if (savedFoto) {
      this.fotoPerfil = this.getProfileImage(savedFoto);
    }
    this.loadUserProfile();
  }
  loadUserProfile(event) {
    this.mysqlService.getPerfil(this.jugadorId).subscribe({
      next: (res) => {
        if (res) {
          const userData = res.user || res;
          if (userData.nombre)
            this.jugadorNombre = userData.nombre;
          const p1 = userData.foto_perfil;
          const p2 = userData.foto;
          const p3 = userData.link_foto;
          let fotoRaw = p1 || p2 || p3;
          if (fotoRaw && !fotoRaw.includes("imagen_defecto")) {
            localStorage.setItem("userFoto", fotoRaw);
            localStorage.setItem("foto_perfil", fotoRaw);
            this.fotoPerfil = this.getProfileImage(fotoRaw);
          }
          const dir = res.direccion || userData.direccion;
          if (dir) {
            this.regionSeleccionada = typeof dir === "object" ? dir.region || "" : "";
            this.comunaSeleccionada = typeof dir === "object" ? dir.comuna || "" : "";
          }
          this.updateComunas(true);
        } else {
          this.cargarEntrenadores();
        }
        if (event)
          event.target.complete();
      },
      error: () => {
        this.cargarEntrenadores();
        if (event)
          event.target.complete();
      }
    });
  }
  handleRefresh(event) {
    this.fetchAllData(event);
  }
  fetchAllData(event) {
    this.cargando = true;
    forkJoin({
      reservas: this.mysqlService.getReservasJugador(this.jugadorId).pipe(catchError((err) => {
        console.error("Error refresh reservas:", err);
        return of({ reservas_individuales: [], entrenamientos_grupales: [] });
      })),
      partidos: this.mysqlService.getMisPartidos().pipe(catchError((err) => {
        console.error("Error refresh partidos:", err);
        return of([]);
      })),
      perfil: this.mysqlService.getPerfil(this.jugadorId).pipe(catchError((err) => {
        console.error("Error refresh perfil:", err);
        return of(null);
      }))
    }).pipe(finalize(() => {
      this.cargando = false;
      if (event)
        event.target.complete();
    })).subscribe(({ reservas, partidos, perfil }) => {
      if (reservas) {
        const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        this.reservasIndividuales = (reservas.reservas_individuales || []).filter((r) => r.fecha >= todayStr);
        this.entrenamientosGrupales = (reservas.entrenamientos_grupales || []).filter((eg) => eg.fecha >= todayStr).map((eg) => __spreadProps(__spreadValues({}, eg), {
          genero: this.detectarGenero(eg.pack_nombre || "", eg.categoria || "")
        }));
      }
      if (partidos) {
        const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        this.misPartidos = (partidos || []).filter((p) => p.fecha >= todayStr && p.estado !== "Cancelada" && p.estado !== "Cancelado");
      }
      if (perfil) {
        const userData = perfil.user || perfil;
        if (userData.nombre)
          this.jugadorNombre = userData.nombre;
        const fotoRaw = userData.foto_perfil || userData.foto || userData.link_foto;
        this.fotoPerfil = this.getProfileImage(fotoRaw);
        if (perfil.direccion || userData.direccion) {
          const dir = perfil.direccion || userData.direccion;
          this.regionSeleccionada = typeof dir === "object" ? dir.region || "" : "";
          this.comunaSeleccionada = typeof dir === "object" ? dir.comuna || "" : "";
          this.updateComunas(true);
        } else {
          this.cargarEntrenadores();
        }
      } else {
        this.cargarEntrenadores();
      }
    });
  }
  getAllUniqueComunas() {
    const set = /* @__PURE__ */ new Set();
    Object.values(this.allComunas).forEach((list) => {
      if (Array.isArray(list)) {
        list.forEach((c) => set.add(c));
      }
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, "es"));
  }
  onRegionSelectChange(event) {
    const val = event && event.detail ? event.detail.value : event;
    this.regionSeleccionada = val || "";
    this.updateComunas(false);
  }
  onComunaSelectChange(event) {
    const val = event && event.detail ? event.detail.value : event;
    this.comunaSeleccionada = val || "";
    this.cdRef.detectChanges();
    this.cargarEntrenadores();
  }
  updateComunas(keepComuna = false) {
    if (!this.regionSeleccionada) {
      this.filteredComunas = this.getAllUniqueComunas();
      if (!keepComuna)
        this.comunaSeleccionada = "";
      this.cdRef.detectChanges();
      this.cargarEntrenadores();
      return;
    }
    const regLower = this.regionSeleccionada.toLowerCase().trim();
    const selectedRegion = this.regions.find((r) => {
      const nameLower = r.name.toLowerCase().trim();
      return nameLower === regLower || regLower.includes(nameLower) || nameLower.includes(regLower);
    });
    if (selectedRegion) {
      this.regionSeleccionada = selectedRegion.name;
      this.filteredComunas = this.allComunas[selectedRegion.id] || [];
    } else {
      this.filteredComunas = this.getAllUniqueComunas();
    }
    if (!keepComuna) {
      this.comunaSeleccionada = "";
    }
    this.cdRef.detectChanges();
    this.cargarEntrenadores();
  }
  limpiarFiltrosUbicacion() {
    this.regionSeleccionada = "";
    this.comunaSeleccionada = "";
    this.updateComunas(false);
  }
  onComunaChange() {
    this.cargarEntrenadores();
  }
  cargarMisEntrenamientos() {
    this.cargando = true;
    forkJoin({
      reservas: this.mysqlService.getReservasJugador(this.jugadorId).pipe(catchError((err) => of({ reservas_individuales: [], entrenamientos_grupales: [] }))),
      partidos: this.mysqlService.getMisPartidos().pipe(catchError((err) => of([])))
    }).subscribe({
      next: ({ reservas, partidos }) => {
        const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        this.reservasIndividuales = (reservas.reservas_individuales || []).filter((r) => r.fecha >= todayStr);
        this.entrenamientosGrupales = (reservas.entrenamientos_grupales || []).filter((eg) => eg.fecha >= todayStr).map((eg) => __spreadProps(__spreadValues({}, eg), {
          genero: this.detectarGenero(eg.pack_nombre || "", eg.categoria || "")
        }));
        this.misPartidos = (partidos || []).filter((p) => p.fecha >= todayStr && p.estado !== "Cancelada" && p.estado !== "Cancelado");
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error al cargar entrenamientos:", err);
        this.cargando = false;
      }
    });
  }
  cargarEntrenadores() {
    this.isLoadingDiscovery = true;
    this.cdRef.detectChanges();
    this.packsService.getAllPacks(void 0, void 0, 50, this.regionSeleccionada || void 0, this.comunaSeleccionada || void 0).subscribe({
      next: (res) => {
        let coaches = this.extractCoachesFromPacks(res);
        if (coaches.length === 0 && this.comunaSeleccionada && this.regionSeleccionada) {
          this.packsService.getAllPacks(void 0, void 0, 50, this.regionSeleccionada || void 0, void 0).subscribe({
            next: (resRegion) => {
              let coachesRegion = this.extractCoachesFromPacks(resRegion);
              if (coachesRegion.length === 0) {
                this.fetchAllCoachesFallback();
              } else {
                this.entrenadores = coachesRegion;
                this.isLoadingDiscovery = false;
                this.cdRef.detectChanges();
              }
            },
            error: () => this.fetchAllCoachesFallback()
          });
        } else if (coaches.length === 0) {
          this.fetchAllCoachesFallback();
        } else {
          this.entrenadores = coaches;
          this.isLoadingDiscovery = false;
          this.cdRef.detectChanges();
        }
        this.entrenamientoService.getEntrenadorPorJugador(this.jugadorId).subscribe({
          next: (resPacks) => {
            this.packs = resPacks || [];
          },
          error: () => {
          }
        });
      },
      error: (err) => {
        console.error("Error loading discovery:", err);
        this.fetchAllCoachesFallback();
      }
    });
  }
  fetchAllCoachesFallback() {
    this.packsService.getAllPacks(void 0, void 0, 100).subscribe({
      next: (allPacks) => {
        let allCoaches = this.extractCoachesFromPacks(allPacks);
        this.entrenadores = allCoaches;
        this.isLoadingDiscovery = false;
        this.cdRef.detectChanges();
      },
      error: () => {
        this.entrenadores = [];
        this.isLoadingDiscovery = false;
        this.cdRef.detectChanges();
      }
    });
  }
  extractCoachesFromPacks(packs) {
    const map = /* @__PURE__ */ new Map();
    (packs || []).forEach((p) => {
      if (p.entrenador_id && !map.has(p.entrenador_id)) {
        map.set(p.entrenador_id, {
          id: p.entrenador_id,
          nombre: p.entrenador_nombre,
          foto: p.entrenador_foto,
          descripcion: p.entrenador_descripcion,
          comuna: p.trainer_comuna || p.club_comuna || "Club Local",
          telefono: p.entrenador_telefono
        });
      }
    });
    return Array.from(map.values());
  }
  get filteredDias() {
    return this.dias.filter((dia) => {
      const data = this.horariosPorDia[dia];
      if (!data)
        return false;
      return data.todos && data.todos.length > 0;
    });
  }
  get selectedCoachName() {
    const coach = this.entrenadores.find((c) => c.id === this.selectedEntrenador);
    return coach ? coach.nombre : "Selecciona un coach";
  }
  toggleCoachPicker() {
    this.showCoachPicker = !this.showCoachPicker;
  }
  seleccionarProfesor(entrenadorId) {
    this.selectedEntrenador = entrenadorId;
    console.log("Entrenador seleccionado:", entrenadorId);
  }
  getPackRealCredits(pack) {
    if (!pack)
      return 0;
    return Number(pack.sesiones_restantes || 0);
  }
  onEntrenadorChange() {
    this.showCoachPicker = false;
    if (!this.selectedEntrenador)
      return;
    this.cargando = true;
    this.packsDelEntrenador = this.packs.filter((p) => {
      return Number(p.entrenador_id) === Number(this.selectedEntrenador) && this.getPackRealCredits(p) > 0;
    });
    this.checkBookingRestriction(this.selectedEntrenador);
    this.entrenamientoService.getDisponibilidadEntrenador(this.selectedEntrenador, void 0, this.selectedClubId || void 0).subscribe({
      next: (res) => {
        this.horarios = res;
        const clubMap = /* @__PURE__ */ new Map();
        res.forEach((slot) => {
          if (slot.club_id && !clubMap.has(slot.club_id)) {
            clubMap.set(slot.club_id, {
              id: slot.club_id,
              nombre: slot.club_nombre,
              direccion: slot.club_direccion,
              maps: slot.club_maps
            });
          }
        });
        if (this.clubesDisponibles.length === 0 || !this.selectedClubId) {
          this.clubesDisponibles = Array.from(clubMap.values());
        }
        if (res.length > 0) {
          this.entrenadorTelefono = res[0].entrenador_telefono;
        }
        this.mysqlService.getAllPacks(this.selectedEntrenador).subscribe({
          next: (packsList) => {
            this.totalTrainerPacks = packsList;
            this.generarBloquesHorarios(res, packsList);
            this.cargando = false;
          },
          error: () => {
            this.totalTrainerPacks = [];
            this.generarBloquesHorarios(res, []);
            this.cargando = false;
          }
        });
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
      }
    });
  }
  mostrarPacksDisponibles(horario) {
    this.pendingHorario = horario;
    this.cargando = true;
    let targetType = this.tipoEntrenamiento;
    if (targetType === "todos") {
      if (horario) {
        targetType = horario.tipo === "grupal" ? "grupal" : "individual";
      } else {
        targetType = "individual";
      }
    }
    this.mysqlService.getAllPacks(this.selectedEntrenador).subscribe({
      next: (res) => {
        console.log("Packs recibidos:", res);
        if (horario && horario.tipo === "grupal" && horario.pack_id) {
          this.availablePacks = res.filter((p) => Number(p.id || p.id_pack || p.pack_id) === Number(horario.pack_id));
          if (this.availablePacks.length === 0) {
            this.availablePacks = res.filter((p) => this.isPackMatch(p, "grupal"));
            if (this.availablePacks.length === 0) {
              this.availablePacks = res;
            }
          }
        } else {
          let filtered = res.filter((p) => this.isPackMatch(p, targetType));
          if (filtered.length === 0) {
            filtered = res;
          }
          this.availablePacks = filtered.sort((a, b) => Number(a.precio) - Number(b.precio));
        }
        this.showPackModal = true;
        this.couponCode = "";
        this.couponApplied = false;
        this.appliedCouponData = null;
        this.couponMessage = "";
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
        this.mostrarToast("\u274C No se pudieron cargar los packs");
      }
    });
  }
  isPackMatch(pack, type) {
    const cant = Number(pack.cantidad_personas || 1);
    const pTipo = pack.tipo?.toLowerCase() || "individual";
    if (type === "individual")
      return cant === 1 && pTipo !== "grupal";
    if (type === "multiplayer")
      return cant > 1 && pTipo !== "grupal";
    if (type === "grupal")
      return pTipo === "grupal";
    return false;
  }
  applyCoupon() {
    if (!this.couponCode)
      return;
    this.entrenamientoService.validateCupon(this.couponCode, this.selectedEntrenador, this.jugadorId, this.pendingHorario?.pack_id).subscribe({
      next: (res) => {
        if (res.success) {
          this.couponApplied = true;
          this.appliedCouponData = res.cupon;
          this.couponMessage = `\xA1Cup\xF3n aplicado! Descuento de ${res.cupon.valor}${res.cupon.tipo_descuento === "porcentaje" ? "%" : "$"}`;
        } else {
          this.couponApplied = false;
          this.appliedCouponData = null;
          this.couponMessage = res.error || "Cup\xF3n no v\xE1lido";
        }
      },
      error: (err) => {
        this.couponApplied = false;
        this.appliedCouponData = null;
        this.couponMessage = err.error?.error || "Error al validar el cup\xF3n";
      }
    });
  }
  getDiscountedPrice(price) {
    if (!this.couponApplied || !this.appliedCouponData)
      return price;
    const val = Number(this.appliedCouponData.valor);
    if (this.appliedCouponData.tipo_descuento === "porcentaje") {
      return price * (1 - val / 100);
    } else {
      return Math.max(0, price - val);
    }
  }
  comprarPackYReservar(pack) {
    return __async(this, null, function* () {
      this.selectedPackToConfirm = pack;
      this.showConfirmationModal = true;
    });
  }
  confirmarCompra() {
    return __async(this, null, function* () {
      this.showConfirmationModal = false;
      const pack = this.selectedPackToConfirm;
      if (!pack)
        return;
      if (pack.transbank_activo == 1 || pack.transbank_activo == "1") {
        this.iniciarPagoPackTransbank(pack);
      } else {
        this.comprarPackYReservarManual(pack);
      }
    });
  }
  iniciarPagoPackTransbank(pack) {
    return __async(this, null, function* () {
      const loader = yield this.loadingCtrl.create({ message: "Preparando pago..." });
      yield loader.present();
      const packId = Number(pack.id || pack.pack_id || pack.id_pack);
      if (!this.pendingHorario) {
        const paymentPayload = {
          pack_id: packId,
          jugador_id: Number(this.jugadorId),
          amount: this.getDiscountedPrice(pack.precio),
          reserva_id: null,
          cupon_id: this.appliedCouponData?.id,
          origin: window.location.origin + window.location.pathname
        };
        this.packAlumnoService.initTransaction(paymentPayload).subscribe({
          next: (payRes) => {
            loader.dismiss();
            if (payRes.token && payRes.url) {
              const separator = payRes.url.includes("?") ? "&" : "?";
              window.location.href = `${payRes.url}${separator}token_ws=${payRes.token}`;
            } else if (payRes.direct || payRes.success && !payRes.url) {
              loader.dismiss();
              this.showPackModal = false;
              this.alertCtrl.create({
                header: "\xA1Pack Activado!",
                message: payRes.message || "El pack ha sido activado. Ahora puedes agendar tus clases.",
                buttons: ["OK"]
              }).then((a) => a.present());
              this.onEntrenadorChange();
            } else {
              loader.dismiss();
              this.mostrarToast("\u274C Error al iniciar el pago");
            }
          },
          error: (err) => {
            loader.dismiss();
            const msg = err.error?.error || "Error al conectar con el servidor de pagos";
            this.alertCtrl.create({ header: "Atenci\xF3n", message: msg, buttons: ["OK"] }).then((a) => a.present());
          }
        });
        return;
      }
      let finalTipo = "individual";
      const packTypeStr = (pack.tipo || "").toLowerCase();
      if (packTypeStr.includes("grupal") || packTypeStr.includes("multi")) {
        finalTipo = "grupal";
      }
      const payloadReserva = {
        entrenador_id: Number(this.selectedEntrenador),
        fecha: this.pendingHorario.fecha,
        hora_inicio: this.pendingHorario.hora_inicio.toTimeString().slice(0, 5),
        hora_fin: this.pendingHorario.hora_fin.toTimeString().slice(0, 5),
        jugador_id: Number(this.jugadorId),
        pack_id: packId,
        reserva_id: this.pendingHorario.id || null,
        estado: "bloqueado",
        // Estado temporal hasta que pague
        tipo: finalTipo,
        cantidad_personas: 1,
        club_id: this.pendingHorario.club_id
      };
      this.entrenamientoService.crearReserva(payloadReserva).subscribe({
        next: (res) => {
          const reservaId = res.reserva_ids ? res.reserva_ids[0] : null;
          const paymentPayload = {
            pack_id: packId,
            jugador_id: Number(this.jugadorId),
            amount: this.getDiscountedPrice(pack.precio),
            reserva_id: reservaId,
            cupon_id: this.appliedCouponData?.id,
            origin: window.location.origin + window.location.pathname
          };
          this.packAlumnoService.initTransaction(paymentPayload).subscribe({
            next: (payRes) => {
              loader.dismiss();
              if (payRes.token && payRes.url) {
                const separator = payRes.url.includes("?") ? "&" : "?";
                window.location.href = `${payRes.url}${separator}token_ws=${payRes.token}`;
              } else if (payRes.direct || payRes.success && !payRes.url) {
                loader.dismiss();
                this.showPackModal = false;
                this.alertCtrl.create({
                  header: "\xA1Reserva Completada!",
                  message: payRes.message || "Tu reserva ha sido registrada. Recuerda coordinar el pago con tu profesor.",
                  buttons: ["OK"]
                }).then((a) => a.present());
                this.onEntrenadorChange();
              } else {
                loader.dismiss();
                this.mostrarToast("\u274C Error al iniciar el pago");
              }
            },
            error: (err) => {
              loader.dismiss();
              const msg = err.error?.error || "Error al conectar con el servidor de pagos";
              this.alertCtrl.create({ header: "Atenci\xF3n", message: msg, buttons: ["OK"] }).then((a) => a.present());
            }
          });
        },
        error: (err) => {
          loader.dismiss();
          const msg = err.error?.error || "";
          if (msg.toLowerCase().includes("cr\xE9ditos") || msg.toLowerCase().includes("sesiones")) {
            this.handleNoCreditsFlow();
          } else {
            this.alertCtrl.create({
              header: "Atenci\xF3n",
              message: msg || "Error al reservar el horario",
              buttons: ["OK"]
            }).then((a) => a.present());
          }
        }
      });
    });
  }
  comprarPackYReservarManual(pack) {
    return __async(this, null, function* () {
      const loader = yield this.loadingCtrl.create({ message: "Activando pack..." });
      yield loader.present();
      const rawId = pack.id || pack.pack_id || pack.id_pack;
      const packId = Number(rawId);
      const packPayload = {
        pack_id: packId,
        jugador_id: Number(this.jugadorId),
        cupon_id: this.appliedCouponData?.id,
        precio_pagado: this.getDiscountedPrice(pack.precio)
      };
      if (!this.pendingHorario) {
        this.packAlumnoService.insertPackAlumno(packPayload).subscribe({
          next: () => {
            loader.dismiss();
            this.notificationService.notificarPackContratado(this.jugadorId, pack.nombre);
            this.alertCtrl.create({
              header: "\xA1Pack Activado!",
              message: `Cr\xE9ditos listos. ${this.pendingHorario ? "Intentando reservar..." : "Selecciona un horario ahora."}`,
              buttons: ["OK"]
            }).then((a) => a.present());
            this.showPackModal = false;
            this.onEntrenadorChange();
          },
          error: () => {
            loader.dismiss();
            this.mostrarToast("\u274C Error al procesar el pack");
          }
        });
        return;
      }
      this.packAlumnoService.insertPackAlumno(packPayload).subscribe({
        next: (packRes) => {
          const newPackJugadorId = packRes.pack_jugador_id;
          let finalTipo = "individual";
          const packTypeStr = (pack.tipo || "").toLowerCase();
          if (packTypeStr.includes("grupal") || packTypeStr.includes("multi")) {
            finalTipo = "grupal";
          }
          const payload = {
            entrenador_id: Number(this.selectedEntrenador),
            fecha: this.pendingHorario.fecha,
            hora_inicio: this.pendingHorario.hora_inicio.toTimeString().slice(0, 5),
            hora_fin: this.pendingHorario.hora_fin.toTimeString().slice(0, 5),
            jugador_id: Number(this.jugadorId),
            pack_id: packId,
            pack_jugador_id: newPackJugadorId,
            reserva_id: this.pendingHorario.id || null,
            estado: "reservado",
            tipo: finalTipo,
            cantidad_personas: 1,
            club_id: this.pendingHorario.club_id
          };
          this.entrenamientoService.crearReserva(payload).subscribe({
            next: () => {
              loader.dismiss();
              this.notificationService.notificarPackContratado(this.jugadorId, pack.nombre);
              this.notificationService.notificarReservaCreada(this.jugadorId, pack.nombre, payload.fecha, payload.hora_inicio);
              this.notificationService.programarRecordatorio(this.jugadorId, pack.nombre, payload.fecha, payload.hora_inicio);
              const fechaFmt = (/* @__PURE__ */ new Date(payload.fecha + "T00:00:00")).toLocaleDateString("es-ES", { day: "2-digit", month: "long" });
              this.alertCtrl.create({
                header: "\xA1Reserva Confirmada!",
                message: `Tu compra de ${pack.nombre} fue exitosa y tu primera clase ha sido agendada para el ${fechaFmt} a las ${payload.hora_inicio}.`,
                buttons: [
                  {
                    text: "OK",
                    handler: () => {
                      this.cambiarVista("mis-entrenamientos");
                      this.fetchAllData();
                    }
                  }
                ]
              }).then((a) => a.present());
              this.showPackModal = false;
              this.onEntrenadorChange();
            },
            error: (err) => {
              loader.dismiss();
              const msg = err.error?.error || "";
              if (msg.toLowerCase().includes("cr\xE9ditos") || msg.toLowerCase().includes("sesiones")) {
                this.handleNoCreditsFlow();
              } else {
                this.alertCtrl.create({
                  header: "Atenci\xF3n",
                  message: msg || "Error al agendar la clase",
                  buttons: ["OK"]
                }).then((a) => a.present());
              }
            }
          });
        },
        error: () => {
          loader.dismiss();
          this.mostrarToast("\u274C Error al procesar el pack");
        }
      });
    });
  }
  onPackChange() {
    if (!this.selectedPack || !this.selectedEntrenador)
      return;
    const packId = this.selectedPack.pack_id;
    console.log("Cambio de Pack Mobile - Nuevo ID:", packId);
    this.entrenamientoService.getDisponibilidadEntrenador(this.selectedEntrenador, packId, this.selectedClubId || void 0).subscribe({
      next: (res) => {
        this.horarios = res;
        this.generarBloquesHorarios(res, this.totalTrainerPacks);
      },
      error: (err) => console.error("Error loading availability after pack change:", err)
    });
  }
  setFilter(tipo) {
    this.tipoEntrenamiento = tipo;
    this.generarBloquesHorarios(this.horarios, this.totalTrainerPacks);
    if (this.selectedEntrenador) {
      this.checkBookingRestriction(this.selectedEntrenador);
    }
  }
  getSelectedClub() {
    return this.clubesDisponibles.find((c) => Number(c.id) === Number(this.selectedClubId));
  }
  onClubFilterChange() {
    this.onEntrenadorChange();
  }
  generarBloquesHorarios(disponibilidades, packsList = []) {
    this.horariosPorDia = {};
    const nuevasFechas = [];
    const ahora = /* @__PURE__ */ new Date();
    const limite = /* @__PURE__ */ new Date();
    limite.setDate(ahora.getDate() + 30);
    for (let i = 0; i < 35; i++) {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() + i);
      const ds = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
      this.horariosPorDia[ds] = { todos: [] };
    }
    const slotsMap = /* @__PURE__ */ new Map();
    disponibilidades.forEach((d) => {
      const isBlockOcupado = d.ocupado == 1 || d.ocupado === "1" || d.ocupado === true || d.ocupado === "true";
      const isGrupal = d.tipo === "grupal";
      if (isGrupal) {
        if (this.selectedClubId && Number(d.club_id) !== Number(this.selectedClubId))
          return;
        let inicioStr = d.fecha_inicio || d.hora_inicio;
        let finStr = d.fecha_fin || d.hora_fin;
        if (!inicioStr)
          return;
        const bloqueInicio = new Date(inicioStr.replace(" ", "T"));
        const bloqueFin = new Date(finStr.replace(" ", "T"));
        if (bloqueInicio >= ahora && bloqueFin <= limite) {
          const fechaStr = `${bloqueInicio.getFullYear()}-${(bloqueInicio.getMonth() + 1).toString().padStart(2, "0")}-${bloqueInicio.getDate().toString().padStart(2, "0")}`;
          const horaStr = bloqueInicio.toTimeString().slice(0, 5);
          const timeKey = `${fechaStr}_${horaStr}`;
          slotsMap.set(timeKey, {
            fecha: fechaStr,
            hora_inicio: bloqueInicio,
            hora_fin: bloqueFin,
            ocupado: isBlockOcupado,
            inscritos: Number(d.inscritos_count || 0),
            capacidad: Number(d.cantidad_personas || 6),
            tipo: "grupal",
            pack_id: d.pack_id,
            club_id: d.club_id,
            club_nombre: d.club_nombre,
            club_maps: d.club_maps,
            nombre_pack: d.nombre_pack || d.nombre || "Clase Grupal",
            categoria: d.categoria,
            genero: this.detectarGenero(d.nombre_pack || d.nombre || "", d.categoria || "")
          });
          if (!nuevasFechas.includes(fechaStr))
            nuevasFechas.push(fechaStr);
        }
      } else {
        if (this.selectedClubId && Number(d.club_id) !== Number(this.selectedClubId))
          return;
        let inicioStr = d.fecha_inicio || d.hora_inicio;
        let finStr = d.fecha_fin || d.hora_fin;
        if (!inicioStr)
          return;
        let inicio = new Date(inicioStr.replace(" ", "T"));
        const fin = new Date(finStr.replace(" ", "T"));
        while (inicio < fin) {
          const bloqueInicio = new Date(inicio.getTime());
          const bloqueFin = new Date(inicio.getTime());
          bloqueFin.setHours(bloqueFin.getHours() + 1);
          if (bloqueInicio >= ahora && bloqueFin <= limite) {
            const fechaStr = `${bloqueInicio.getFullYear()}-${(bloqueInicio.getMonth() + 1).toString().padStart(2, "0")}-${bloqueInicio.getDate().toString().padStart(2, "0")}`;
            const horaStr = bloqueInicio.toTimeString().slice(0, 5);
            const timeKey = `${fechaStr}_${horaStr}`;
            const existing = slotsMap.get(timeKey);
            if (!existing || existing.tipo !== "grupal" && (isBlockOcupado || !existing.ocupado)) {
              slotsMap.set(timeKey, {
                fecha: fechaStr,
                hora_inicio: bloqueInicio,
                hora_fin: bloqueFin,
                ocupado: existing ? existing.ocupado || isBlockOcupado : isBlockOcupado,
                cantidad_personas: Number(d.cantidad_personas || 1),
                club_id: d.club_id,
                club_nombre: d.club_nombre,
                club_maps: d.club_maps,
                tipo: "individual"
              });
            }
            if (!nuevasFechas.includes(fechaStr))
              nuevasFechas.push(fechaStr);
          }
          inicio.setHours(inicio.getHours() + 1);
        }
      }
    });
    packsList.forEach((p) => {
      if (p.tipo === "grupal" && p.hora_inicio && (p.fecha || p.dia_semana)) {
        const [h, m] = p.hora_inicio.split(":");
        const duration = Number(p.duracion_sesion_min || 60);
        if (p.fecha) {
          const start = /* @__PURE__ */ new Date(p.fecha + "T" + p.hora_inicio);
          const end = new Date(start.getTime());
          end.setMinutes(start.getMinutes() + duration);
          if (start >= ahora && start <= limite) {
            const fechaStr = p.fecha;
            const horaStr = start.toTimeString().slice(0, 5);
            const timeKey = `${fechaStr}_${horaStr}`;
            if (!slotsMap.has(timeKey) || slotsMap.get(timeKey).tipo !== "grupal") {
              slotsMap.set(timeKey, {
                fecha: fechaStr,
                hora_inicio: start,
                hora_fin: end,
                ocupado: Number(p.cupos_ocupados) >= Number(p.capacidad_maxima),
                inscritos: Number(p.cupos_ocupados || 0),
                capacidad: Number(p.capacidad_maxima || 8),
                cantidad_personas: Number(p.capacidad_maxima || 8),
                tipo: "grupal",
                nombre_pack: p.nombre,
                categoria: p.categoria,
                pack_id: p.id,
                club_id: p.club_id,
                club_nombre: p.club_nombre,
                genero: this.detectarGenero(p.nombre || "", p.categoria || "")
              });
              if (!nuevasFechas.includes(fechaStr))
                nuevasFechas.push(fechaStr);
            }
          }
        } else if (p.dia_semana) {
          const daysMap = {
            "domingo": 0,
            "lunes": 1,
            "martes": 2,
            "miercoles": 3,
            "jueves": 4,
            "viernes": 5,
            "sabado": 6,
            "sunday": 0,
            "monday": 1,
            "tuesday": 2,
            "wednesday": 3,
            "thursday": 4,
            "friday": 5,
            "saturday": 6,
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 0
          };
          const dayStr = p.dia_semana.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          const packDay = daysMap[dayStr] ?? Number(p.dia_semana);
          for (let i = 0; i < 35; i++) {
            const checkDate = /* @__PURE__ */ new Date();
            checkDate.setDate(ahora.getDate() + i);
            let jsDay = checkDate.getDay();
            if (jsDay === packDay) {
              const start = new Date(checkDate.getTime());
              start.setHours(Number(h), Number(m), 0, 0);
              const end = new Date(start.getTime());
              end.setMinutes(start.getMinutes() + duration);
              if (start >= ahora) {
                const fechaStr = `${start.getFullYear()}-${(start.getMonth() + 1).toString().padStart(2, "0")}-${start.getDate().toString().padStart(2, "0")}`;
                const horaStr = start.toTimeString().slice(0, 5);
                const timeKey = `${fechaStr}_${horaStr}`;
                if (!slotsMap.has(timeKey) || slotsMap.get(timeKey).tipo !== "grupal") {
                  slotsMap.set(timeKey, {
                    fecha: fechaStr,
                    hora_inicio: start,
                    hora_fin: end,
                    ocupado: Number(p.cupos_ocupados) >= Number(p.capacidad_maxima),
                    inscritos: Number(p.cupos_ocupados || 0),
                    capacidad: Number(p.capacidad_maxima || 8),
                    cantidad_personas: Number(p.capacidad_maxima || 8),
                    tipo: "grupal",
                    nombre_pack: p.nombre,
                    categoria: p.categoria,
                    pack_id: p.id,
                    club_id: p.club_id,
                    club_nombre: p.club_nombre,
                    genero: this.detectarGenero(p.nombre || "", p.categoria || "")
                  });
                  if (!nuevasFechas.includes(fechaStr))
                    nuevasFechas.push(fechaStr);
                }
              }
            }
          }
        }
      }
    });
    const sortedSlots = Array.from(slotsMap.values()).sort((a, b) => a.hora_inicio.getTime() - b.hora_inicio.getTime());
    const finalSlotsMap = /* @__PURE__ */ new Map();
    sortedSlots.forEach((slot) => {
      const timeKey = `${slot.fecha}_${slot.hora_inicio.toTimeString().slice(0, 5)}`;
      let isCovered = false;
      finalSlotsMap.forEach((existing) => {
        if (existing.fecha === slot.fecha && slot.hora_inicio >= existing.hora_inicio && slot.hora_inicio < existing.hora_fin) {
          isCovered = true;
        }
      });
      if (!isCovered) {
        finalSlotsMap.set(timeKey, slot);
      }
    });
    finalSlotsMap.forEach((slot) => {
      if (this.tipoEntrenamiento !== "todos") {
        if (this.tipoEntrenamiento === "grupal") {
          if (slot.tipo !== "grupal")
            return;
        } else {
          if (slot.tipo === "grupal")
            return;
        }
      }
      if (!this.horariosPorDia[slot.fecha]) {
        this.horariosPorDia[slot.fecha] = { todos: [] };
      }
      const hora = slot.hora_inicio.getHours();
      if (hora >= 6 && hora < 12)
        slot.tramo = "manana";
      else if (hora >= 12 && hora < 18)
        slot.tramo = "tarde";
      else
        slot.tramo = "noche";
      this.horariosPorDia[slot.fecha].todos.push(slot);
    });
    this.dias = Object.keys(this.horariosPorDia).sort();
    const currentFiltered = this.filteredDias;
    if (currentFiltered.length > 0) {
      if (!this.diaSeleccionado || !currentFiltered.includes(this.diaSeleccionado)) {
        this.diaSeleccionado = currentFiltered[0];
      }
      this.actualizarTramoAutomatico();
    } else {
      this.diaSeleccionado = "";
    }
  }
  actualizarTramoAutomatico() {
  }
  onDiaSeleccionadoChange() {
  }
  handleNoCreditsFlow(horario) {
    if (horario) {
      this.pendingHorario = horario;
    }
    if (!this.selectedEntrenador) {
      this.mostrarPacksDisponibles(horario || null);
      return;
    }
    this.mysqlService.checkPendientesEntrenador(this.jugadorId, this.selectedEntrenador).subscribe({
      next: (res) => {
        if (res.success && res.pendientes > 0 && res.disponibles <= 0) {
          this.alertCtrl.create({
            header: "Clases Pendientes",
            message: "A\xFAn tienes clases reservadas por asistir con este entrenador. Cuando las completes todas, podr\xE1s comprar un nuevo pack.",
            buttons: ["OK"]
          }).then((a) => a.present());
        } else {
          this.mostrarPacksDisponibles(horario);
        }
      },
      error: () => this.mostrarPacksDisponibles(horario)
    });
  }
  reservarHorario(horario) {
    if (horario.ocupado)
      return;
    this.pendingHorario = horario;
    console.log("DEBUG: Horario seleccionado guardado:", this.pendingHorario);
    const hasCredits = this.packsDelEntrenador.some((p) => this.getPackRealCredits(p) > 0);
    if (!hasCredits) {
      this.handleNoCreditsFlow(horario);
      return;
    }
    let targetType = this.tipoEntrenamiento;
    if (targetType === "todos") {
      targetType = horario.tipo === "grupal" ? "grupal" : "individual";
    }
    let packActivo = this.packs.find((p) => {
      const basicMatch = Number(p.entrenador_id) === Number(this.selectedEntrenador) && this.getPackRealCredits(p) > 0 && this.isPackMatch(p, targetType);
      if (horario.tipo === "grupal" && horario.pack_id) {
        return basicMatch && Number(p.pack_id) === Number(horario.pack_id);
      }
      return basicMatch;
    });
    if (packActivo) {
      this.alertCtrl.create({
        header: "\xBFConfirmar Reserva?",
        message: `Clase para el ${horario.fecha} a las ${horario.hora_inicio.toTimeString().slice(0, 5)}. Se descontar\xE1 1 cr\xE9dito de tu pack.`,
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Reservar",
            handler: () => __async(this, null, function* () {
              const loader = yield this.loadingCtrl.create({ message: "Procesando reserva..." });
              yield loader.present();
              const payload = {
                entrenador_id: this.selectedEntrenador,
                pack_id: packActivo.pack_id,
                pack_jugador_id: packActivo.pack_jugador_id,
                fecha: horario.fecha,
                hora_inicio: horario.hora_inicio.toTimeString().slice(0, 5),
                hora_fin: horario.hora_fin.toTimeString().slice(0, 5),
                jugador_id: this.jugadorId,
                estado: "reservado",
                tipo: targetType,
                cantidad_personas: 1,
                club_id: horario.club_id
              };
              this.entrenamientoService.crearReserva(payload).subscribe({
                next: () => {
                  loader.dismiss();
                  this.notificationService.notificarReservaCreada(this.jugadorId, packActivo.pack_nombre || "Entrenamiento", payload.fecha, payload.hora_inicio);
                  if (this.selectedEntrenador) {
                    this.notificationService.notificarReservaACoach(this.selectedEntrenador, this.jugadorNombre || "Un alumno", payload.fecha, payload.hora_inicio);
                  }
                  this.notificationService.programarRecordatorio(this.jugadorId, packActivo.pack_nombre || "Entrenamiento", payload.fecha, payload.hora_inicio);
                  this.mostrarToast("\u2705 Reserva guardada correctamente");
                  this.onEntrenadorChange();
                },
                error: (err) => {
                  loader.dismiss();
                  this.cargando = false;
                  const msg = err.error?.error || "";
                  if (msg.toLowerCase().includes("cr\xE9ditos") || msg.toLowerCase().includes("sesiones")) {
                    this.handleNoCreditsFlow(horario);
                  } else {
                    this.alertCtrl.create({
                      header: "Atenci\xF3n",
                      message: msg || "Error al guardar la reserva",
                      buttons: ["OK"]
                    }).then((a) => a.present());
                  }
                }
              });
            })
          }
        ]
      }).then((a) => a.present());
    } else {
      this.handleNoCreditsFlow(horario);
    }
  }
  fetchAllPacks() {
    this.mostrarPacksDisponibles(null);
  }
  mostrarToast(mensaje) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: mensaje,
        duration: 2500,
        position: "bottom",
        color: "success"
      });
      toast.present();
    });
  }
  cambiarVista(vista) {
    this.vistaActual = vista;
    if (vista === "mis-entrenamientos" || vista === "mis-partidos") {
      this.cargarMisEntrenamientos();
    } else if (vista === "agendar") {
      this.checkBookingRestriction();
    }
  }
  getProfileImage(url) {
    if (!url || url === "null" || url === "undefined" || typeof url !== "string") {
      return "assets/avatar.png";
    }
    const cleanUrl = url.trim();
    if (!cleanUrl || cleanUrl === "" || cleanUrl.includes("imagen_defecto") || cleanUrl.includes("default_avatar")) {
      return "assets/avatar.png";
    }
    if (cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://") || cleanUrl.startsWith("data:image")) {
      return cleanUrl;
    }
    if (cleanUrl.startsWith("assets/")) {
      return cleanUrl;
    }
    const path = cleanUrl.startsWith("/") ? cleanUrl.substring(1) : cleanUrl;
    if (path.startsWith("prd/") || path.startsWith("api_training/")) {
      return `https://api.padelmanager.cl/${path}`;
    }
    if (path.startsWith("uploads/")) {
      return `https://api.padelmanager.cl/${path}`;
    }
    return `https://api.padelmanager.cl/api_training/${path}`;
  }
  onImgError(event) {
    if (event && event.target) {
      const currentSrc = event.target.src || "";
      if (currentSrc.includes("api.padelmanager.cl/uploads/")) {
        event.target.src = currentSrc.replace("api.padelmanager.cl/uploads/", "api.padelmanager.cl/api_training/uploads/");
      } else if (currentSrc.includes("/api_training/uploads/")) {
        event.target.src = currentSrc.replace("/api_training/uploads/", "/prd/uploads/");
      } else {
        event.target.src = "assets/avatar.png";
      }
    }
  }
  isMatchComplete(p) {
    return !!(p.jugador1_id && p.jugador2_id && p.jugador3_id && p.jugador4_id);
  }
  getMissingPlayersCount(p) {
    let count = 0;
    if (!p.jugador2_id)
      count++;
    if (!p.jugador3_id)
      count++;
    if (!p.jugador4_id)
      count++;
    return count;
  }
  checkBookingRestriction(entrenadorId) {
    this.mysqlService.getHomeStats(this.jugadorId).subscribe({
      next: (res) => {
        const stats = res.estadisticas?.packs;
        if (stats) {
          if (entrenadorId) {
            let detalleCoach = (stats.detalle || []).filter((d) => Number(d.entrenador_id) === Number(entrenadorId));
            if (this.tipoEntrenamiento !== "todos") {
              detalleCoach = detalleCoach.filter((d) => {
                const pTipo = d.tipo?.toLowerCase() || "individual";
                if (this.tipoEntrenamiento === "grupal")
                  return pTipo === "grupal";
                return pTipo !== "grupal";
              });
            }
            this.creditosDisponibles = detalleCoach.reduce((acc, d) => acc + Number(d.disponibles || 0), 0);
            this.reservasFuturas = detalleCoach.reduce((acc, d) => acc + Number(d.futuras || 0), 0);
          } else {
            this.creditosDisponibles = Number(stats.disponibles || 0);
            this.reservasFuturas = Number(stats.futuras || 0);
          }
          if (this.creditosDisponibles > 0 || this.creditosDisponibles === 0 && this.reservasFuturas === 0) {
            this.escenarioReserva = "A";
          } else {
            this.escenarioReserva = "A";
          }
        }
      },
      error: (err) => {
        console.error("Error al validar restricciones de agendamiento:", err);
      }
    });
  }
  getEstadoBadgeColor(estado) {
    if (estado === "activo" || estado === "confirmado")
      return "success";
    if (estado === "pendiente")
      return "warning";
    if (estado === "cancelado")
      return "danger";
    return "medium";
  }
  getDiasSemana(dia_semana) {
    if (dia_semana === null || dia_semana === void 0)
      return "";
    const dias = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"];
    return dias[dia_semana] || "";
  }
  goToHome() {
    this.router.navigate(["/jugador-home"]);
  }
  mostrarConfirmacionCancelar(reserva) {
    const reserva_id = reserva.reserva_id || reserva.id;
    if (!reserva_id) {
      console.error("Error: No se encontr\xF3 ID de reserva en", reserva);
      return;
    }
    const fecha = /* @__PURE__ */ new Date(reserva.fecha + "T" + reserva.hora_inicio);
    const ahora = /* @__PURE__ */ new Date();
    const horas_restantes = (fecha.getTime() - ahora.getTime()) / (1e3 * 60 * 60);
    const puedeCancelar = horas_restantes >= 12;
    const titulo = puedeCancelar ? "\xBFCancelar reserva?" : "No se puede cancelar";
    const mensaje = puedeCancelar ? `\xBFEst\xE1s seguro que deseas cancelar el entrenamiento del ${fecha.toLocaleDateString("es-ES")} a las ${(reserva.hora_inicio || "08:00").slice(0, 5)}?` : `Debes cancelar con m\xEDnimo 12 horas de anticipaci\xF3n. Horas restantes: ${Math.round(horas_restantes)}`;
    this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: puedeCancelar ? [
        {
          text: "No",
          role: "cancel"
        },
        {
          text: "S\xED, cancelar",
          role: "destructive",
          handler: () => {
            this.cancelarReserva(reserva);
          }
        }
      ] : [
        {
          text: "Entendido",
          role: "cancel"
        }
      ]
    }).then((alert) => alert.present());
  }
  cancelarReserva(reserva) {
    const id = reserva.reserva_id || reserva.id || reserva.inscripcion_id;
    if (!id || id <= 0) {
      console.error("Error: ID inv\xE1lido", id);
      return;
    }
    if (!this.jugadorId || this.jugadorId <= 0) {
      console.error("Error: jugadorId inv\xE1lido", this.jugadorId);
      return;
    }
    if (reserva.inscripcion_id) {
      this.entrenamientosGrupales = this.entrenamientosGrupales.filter((eg) => eg.inscripcion_id !== reserva.inscripcion_id);
      this.mysqlService.cancelarInscripcionGrupal(reserva.inscripcion_id, this.jugadorId).subscribe({
        next: () => __async(this, null, function* () {
          const toast = yield this.toastCtrl.create({
            message: "\u2713 Cupo liberado correctamente",
            duration: 1500,
            color: "success",
            position: "top"
          });
          toast.present();
          this.fetchAllData();
        }),
        error: (err) => __async(this, null, function* () {
          this.fetchAllData();
          const errorMsg = err.error?.error || "Error al liberar el cupo";
          const toast = yield this.toastCtrl.create({
            message: `\u2717 ${errorMsg}`,
            duration: 2500,
            color: "danger",
            position: "top"
          });
          toast.present();
        })
      });
    } else {
      this.reservasIndividuales = this.reservasIndividuales.filter((r) => r.reserva_id !== id);
      this.mysqlService.cancelarReservaJugador(id, this.jugadorId).subscribe({
        next: () => __async(this, null, function* () {
          const toast = yield this.toastCtrl.create({
            message: "\u2713 Reserva cancelada correctamente",
            duration: 1500,
            color: "success",
            position: "top"
          });
          toast.present();
          this.fetchAllData();
        }),
        error: (err) => __async(this, null, function* () {
          this.fetchAllData();
          const errorMsg = err.error?.error || "Error al cancelar la reserva";
          const toast = yield this.toastCtrl.create({
            message: `\u2717 ${errorMsg}`,
            duration: 2500,
            color: "danger",
            position: "top"
          });
          toast.present();
        })
      });
    }
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
      this.mostrarToast("Ingresa un email v\xE1lido");
      return;
    }
    if (!this.selectedReserva || !this.selectedReserva.pack_jugador_id) {
      this.mostrarToast("No se pudo identificar el pack para esta reserva.");
      return;
    }
    this.mostrarToast("Enviando invitaci\xF3n...");
    this.packAlumnoService.invitarJugador(this.selectedReserva.pack_jugador_id, this.emailInvitado).subscribe({
      next: (res) => {
        this.mostrarToast(res.message || "Invitaci\xF3n enviada correctamente.");
        this.cerrarModal();
        this.cargarMisEntrenamientos();
      },
      error: (err) => {
        console.error(err);
        this.mostrarToast(err.error?.error || "No se pudo enviar la invitaci\xF3n.");
      }
    });
  }
  detectarGenero(nombre, categoria) {
    const text = `${nombre} ${categoria}`.toLowerCase();
    if (text.includes("varon") || text.includes("masc") || text.includes("caballero") || text.includes("hombre"))
      return "masculino";
    if (text.includes("dama") || text.includes("feme") || text.includes("mujer") || text.includes("chica"))
      return "femenino";
    if (text.includes("mixto"))
      return "mixto";
    return null;
  }
  getGeneroLabel(genero) {
    if (genero === "masculino")
      return "VARONES";
    if (genero === "femenino")
      return "DAMAS";
    if (genero === "mixto")
      return "MIXTO";
    return "";
  }
};
_JugadorReservasPage.\u0275fac = function JugadorReservasPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JugadorReservasPage)(\u0275\u0275directiveInject(EntrenamientoService), \u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(PacksService), \u0275\u0275directiveInject(PackAlumnoService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_JugadorReservasPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JugadorReservasPage, selectors: [["app-jugador-reservas"]], decls: 34, vars: 16, consts: [["noAddress", ""], ["slot", "fixed", 3, "ionRefresh"], [1, "header-v2", "animate-fade"], [1, "h-text"], [1, "h-title-row"], [1, "h-actions"], [1, "h-avatar"], ["alt", "Avatar", 3, "error", "src"], [1, "segment-wrapper", "animate-up"], [1, "entrenamientos-segment", 3, "ngModelChange", "ngModel"], ["value", "mis-entrenamientos", 3, "click"], ["name", "calendar-outline"], ["value", "agendar", 3, "click"], ["name", "add-circle-outline"], ["class", "mis-entrenamientos-view", 4, "ngIf"], ["class", "mis-partidos-view animate-up", "style", "padding: 20px 24px 100px;", 4, "ngIf"], ["class", "agendar-nueva-view", 4, "ngIf"], ["handleBehavior", "cycle", 1, "confirmation-modal-nike", 3, "didDismiss", "isOpen", "initialBreakpoint", "breakpoints"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], ["class", "nike-modal-overlay", 3, "click", 4, "ngIf"], [1, "mis-entrenamientos-view"], [4, "ngIf"], ["class", "empty-state animate-fade-in", 4, "ngIf"], ["class", "entrenamientos-section animate-up", 4, "ngIf"], ["class", "entrenamientos-section animate-up", "style", "animation-delay: 0.1s;", 4, "ngIf"], [1, "empty-state", "animate-fade-in"], [1, "empty-icon-box"], [1, "nike-btn-neon", 3, "click"], [1, "entrenamientos-section", "animate-up"], [1, "section-title"], ["name", "person-outline"], ["class", "entrenamiento-card animate-fade-in", 4, "ngFor", "ngForOf"], [1, "entrenamiento-card", "animate-fade-in"], [1, "card-header"], [1, "fecha-badge"], [1, "header-tags"], [1, "modality-tag"], [3, "name"], [3, "ngClass"], [1, "card-main-info"], [1, "tiempo-info"], ["name", "time-outline"], [1, "entrenador-info"], ["name", "medal-outline"], ["class", "location-info", 4, "ngIf"], ["class", "team-section-mini", 4, "ngIf"], ["class", "card-actions", 4, "ngIf"], [1, "location-info"], ["name", "location-outline"], [1, "club-name"], ["target", "_blank", "class", "maps-link", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "maps-link", 3, "href"], [1, "team-section-mini"], [1, "team-label"], [1, "team-avatars"], [1, "avatar-chip", "owner", 3, "title"], ["class", "avatar-chip guest", 3, "pending", "title", 4, "ngFor", "ngForOf"], ["class", "avatar-chip add", 3, "click", 4, "ngIf"], [1, "avatar-chip", "guest", 3, "title"], ["class", "status-dot", 4, "ngIf"], [1, "status-dot"], [1, "avatar-chip", "add", 3, "click"], ["name", "add-outline"], [1, "card-actions"], ["fill", "clear", "color", "danger", 1, "cancel-btn", 3, "click"], [1, "entrenamientos-section", "animate-up", 2, "animation-delay", "0.1s"], ["name", "people-outline"], ["class", "entrenamiento-card grupal animate-fade-in", 4, "ngFor", "ngForOf"], [1, "entrenamiento-card", "grupal", "animate-fade-in"], [1, "estado-badge", "reservado"], [1, "pack-info"], ["name", "grid-outline"], ["class", "gender-tag-mini", 3, "class", 4, "ngIf"], [1, "cupos-badge", "highlight"], [1, "gender-tag-mini"], [1, "mis-partidos-view", "animate-up", 2, "padding", "20px 24px 100px"], ["class", "loading-state", "style", "text-align: center; padding: 40px;", 4, "ngIf"], ["class", "empty-state animate-fade-in", "style", "text-align: center; padding: 45px 25px;", 4, "ngIf"], ["class", "partidos-section animate-up", 4, "ngIf"], [1, "loading-state", 2, "text-align", "center", "padding", "40px"], ["name", "crescent"], [1, "empty-state", "animate-fade-in", 2, "text-align", "center", "padding", "45px 25px"], [1, "empty-icon-box", 2, "width", "80px", "height", "80px", "background", "#f8f8fa", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "margin", "0 auto 20px"], ["name", "tennisball-outline", 2, "font-size", "40px", "color", "#8e8e93"], [2, "font-size", "20px", "font-weight", "950", "margin", "0 0 10px", "color", "#000", "letter-spacing", "-0.5px"], [2, "font-size", "13px", "color", "#8e8e93", "line-height", "1.4", "margin", "0 0 25px"], [1, "nike-btn-neon", 2, "--background", "#CCFF00", "--color", "#000", "font-weight", "900", "--border-radius", "16px", "margin", "0", 3, "click"], [1, "partidos-section", "animate-up"], ["class", "match-card-v8", 3, "click", 4, "ngFor", "ngForOf"], [1, "match-card-v8", 3, "click"], [1, "m-header"], [1, "m-date"], [1, "d-num"], [1, "d-mon"], [1, "m-info"], [1, "m-meta"], ["name", "time-outline", 2, "margin-left", "10px"], [1, "m-footer"], [1, "player-stack"], ["class", "p-avatar", 4, "ngFor", "ngForOf"], [1, "status-badge"], [1, "p-avatar"], [3, "src", 4, "ngIf"], ["class", "p-avatar placeholder", 4, "ngIf"], [3, "src"], [1, "p-avatar", "placeholder"], ["name", "add"], [1, "agendar-nueva-view"], [1, "booking-selectors-nike", "animate-up"], [1, "filters-row"], [1, "filter-selector"], ["placeholder", "REGION", "interface", "popover", 3, "ionChange", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "search-outline"], ["placeholder", "COMUNA", "interface", "popover", 3, "ionChange", "value"], ["type", "button", "class", "btn-clear-filters", 3, "click", 4, "ngIf"], ["class", "active-location-banner", 4, "ngIf"], ["class", "scenario-restriction-box animate-up", 4, "ngIf"], ["class", "animate-up", 4, "ngIf"], ["size", "medium", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn-clear-filters", 3, "click"], [1, "active-location-banner"], ["class", "discovery-scroll-container animate-fade-in", 4, "ngIf"], [1, "discovery-scroll-container", "animate-fade-in"], [1, "discovery-header"], [1, "trainers-horizontal-scroll"], ["class", "trainer-mobile-card", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "empty-trainers-mobile", 4, "ngIf"], [1, "trainer-mobile-card", 3, "click"], [1, "trainer-photo-box"], [1, "trainer-img", 3, "src"], ["name", "checkmark-circle", "class", "active-check", 4, "ngIf"], [1, "trainer-brief"], [1, "name"], [1, "location"], ["name", "checkmark-circle", 1, "active-check"], [1, "empty-trainers-mobile"], ["name", "alert-circle-outline", 2, "font-size", "32px", "opacity", "0.5"], ["type", "button", 1, "btn-clear-filters", 2, "margin-top", "10px", 3, "click"], ["size", "medium"], [1, "scenario-restriction-box", "animate-up"], [1, "icon-circle", "warning"], ["name", "cart-outline"], [1, "icon-circle", "info"], ["fill", "outline", "color", "dark", 1, "nike-btn-outline", 3, "click"], [1, "animate-up"], [1, "booking-context-card"], [1, "coach-mini-info"], [1, "info-left"], [1, "context-label"], [1, "coach-name"], ["class", "coach-contact", 4, "ngIf"], [1, "info-right"], ["fill", "clear", 1, "change-coach-btn", 3, "click"], ["class", "club-selection-box", 4, "ngIf"], [1, "type-filter-wrapper"], [1, "nike-segment-types", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "todos"], ["value", "individual"], ["value", "multiplayer"], ["value", "grupal"], ["scrollable", "", 1, "nike-segment-days-light", 3, "ngModelChange", "ionChange", "ngModel"], [1, "period-legend"], [1, "legend-item", "manana"], [1, "legend-dot"], [1, "legend-item", "tarde"], [1, "legend-item", "noche"], ["class", "horarios-circle-grid", 4, "ngIf"], [1, "coach-contact"], ["name", "call-outline"], [1, "club-selection-box"], [1, "custom-select-wrapper"], ["name", "location-outline", 1, "loc-icon"], ["placeholder", "SELECCIONAR CLUB", "interface", "popover", 1, "club-filter-select", 3, "ngModelChange", "ionChange", "ngModel"], ["class", "location-details-box animate-fade-in", 4, "ngIf"], [1, "location-details-box", "animate-fade-in"], [4, "ngIf", "ngIfElse"], [1, "address-text"], ["target", "_blank", "class", "maps-link-btn", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "maps-link-btn", 3, "href"], ["name", "map-outline"], [1, "no-address-warning"], ["name", "warning-outline"], [1, "day-label"], [1, "date-label"], [1, "horarios-circle-grid"], ["class", "slot-circle", 3, "occupied", "grupal", "tramo-manana", "tramo-tarde", "tramo-noche", "click", 4, "ngFor", "ngForOf"], ["class", "empty-tramo-full", 4, "ngIf"], [1, "slot-circle", 3, "click"], [1, "circle-content"], [1, "time"], ["class", "slot-cat", 3, "class", 4, "ngIf"], ["class", "club-label", "style", "font-size: 10px; margin-top: 2px;", 4, "ngIf"], ["class", "strike-line", 4, "ngIf"], [1, "slot-cat"], [1, "club-label", 2, "font-size", "10px", "margin-top", "2px"], [1, "strike-line"], [1, "empty-tramo-full"], ["name", "hour-glass-outline"], [1, "pack-modal-layout"], [1, "pack-modal-header"], [1, "pull-bar"], [1, "pack-modal-subtitle"], [1, "pack-modal-title"], [1, "coupon-promo-section"], [1, "nike-input-group-promo"], [1, "promo-header"], ["name", "ticket-outline"], [1, "coupon-row"], ["placeholder", "C\xD3DIGO", "mode", "md", 1, "coupon-input", 3, "ngModelChange", "ngModel"], ["fill", "solid", "mode", "ios", 1, "apply-btn", 3, "click", "color"], ["class", "coupon-feedback", 3, "success", 4, "ngIf"], [1, "pack-modal-scroll"], ["class", "pack-card-mobile", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-packs", "style", "text-align: center; padding: 30px; color: #888;", 4, "ngIf"], [1, "coupon-feedback"], [1, "pack-card-mobile", 3, "click"], [1, "pack-bits"], [1, "credits"], [1, "price-container"], [1, "price"], ["class", "price final", 4, "ngIf"], ["name", "chevron-forward-outline", 2, "font-size", "20px", "color", "#cbd5e1"], [1, "price", "final"], [1, "empty-packs", 2, "text-align", "center", "padding", "30px", "color", "#888"], [2, "margin", "0"], [1, "confirmation-sheet-content"], [1, "sheet-header"], ["class", "summary-body", 4, "ngIf"], [1, "summary-body"], [1, "pack-mini-card"], [1, "pack-type-icon"], ["name", "flash"], [1, "pack-text"], [1, "price-breakdown"], [1, "breakdown-item"], ["class", "breakdown-item discount", 4, "ngIf"], [1, "breakdown-total"], [1, "final-amount"], [1, "payment-note"], [1, "sheet-actions"], ["expand", "block", 1, "confirm-purchase-btn", 3, "click"], ["fill", "clear", "color", "medium", 1, "cancel-purchase-btn", 3, "click"], [1, "breakdown-item", "discount"], [1, "nike-modal-overlay", 3, "click"], [1, "nike-modal-card", "animate-pop", 3, "click"], [1, "modal-header-inv"], [1, "header-icon-inv"], ["name", "mail-outline"], ["fill", "clear", "color", "dark", 1, "btn-close-modal-inv", 3, "click"], ["name", "close-outline"], [1, "modal-body-inv"], [1, "nike-input-group-inv"], ["type", "email", "placeholder", "ejemplo@correo.com", 1, "nike-input-field-inv", 3, "ngModelChange", "ngModel"], [1, "modal-actions-inv"], ["fill", "outline", "color", "medium", 1, "nike-button-modal-inv", 3, "click"], [1, "nike-button-modal-inv", "confirm", 3, "click"]], template: function JugadorReservasPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-refresher", 1);
    \u0275\u0275listener("ionRefresh", function JugadorReservasPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "img", 7);
    \u0275\u0275listener("error", function JugadorReservasPage_Template_img_error_12_listener($event) {
      return ctx.onImgError($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 8)(14, "ion-segment", 9);
    \u0275\u0275twoWayListener("ngModelChange", function JugadorReservasPage_Template_ion_segment_ngModelChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.vistaActual, $event) || (ctx.vistaActual = $event);
      return $event;
    });
    \u0275\u0275elementStart(15, "ion-segment-button", 10);
    \u0275\u0275listener("click", function JugadorReservasPage_Template_ion_segment_button_click_15_listener() {
      return ctx.cambiarVista("mis-entrenamientos");
    });
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275element(17, "ion-icon", 11);
    \u0275\u0275text(18, " Mis Clases ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-segment-button", 12);
    \u0275\u0275listener("click", function JugadorReservasPage_Template_ion_segment_button_click_19_listener() {
      return ctx.cambiarVista("agendar");
    });
    \u0275\u0275elementStart(20, "ion-label");
    \u0275\u0275element(21, "ion-icon", 13);
    \u0275\u0275text(22, " Agendar Nueva ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, JugadorReservasPage_div_23_Template, 5, 4, "div", 14)(24, JugadorReservasPage_div_24_Template, 4, 3, "div", 15)(25, JugadorReservasPage_div_25_Template, 22, 11, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-modal", 17);
    \u0275\u0275listener("didDismiss", function JugadorReservasPage_Template_ion_modal_didDismiss_26_listener() {
      return ctx.showPackModal = false;
    });
    \u0275\u0275template(27, JugadorReservasPage_ng_template_27_Template, 21, 6, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-modal", 17);
    \u0275\u0275listener("didDismiss", function JugadorReservasPage_Template_ion_modal_didDismiss_28_listener() {
      return ctx.showConfirmationModal = false;
    });
    \u0275\u0275template(29, JugadorReservasPage_ng_template_29_Template, 6, 1, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-fab", 18)(31, "ion-fab-button", 19);
    \u0275\u0275listener("click", function JugadorReservasPage_Template_ion_fab_button_click_31_listener() {
      return ctx.goToHome();
    });
    \u0275\u0275element(32, "ion-icon", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, JugadorReservasPage_div_33_Template, 21, 1, "div", 21);
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.vistaActual === "mis-entrenamientos" ? "Mis Clases" : "Nueva Reserva");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.jugadorNombre);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.fotoPerfil || "assets/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.vistaActual);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.vistaActual === "mis-entrenamientos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vistaActual === "mis-partidos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vistaActual === "agendar");
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showPackModal)("initialBreakpoint", 0.85)("breakpoints", \u0275\u0275pureFunction0(14, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.showConfirmationModal)("initialBreakpoint", 0.6)("breakpoints", \u0275\u0275pureFunction0(15, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.showModalInvitacion);
  }
}, dependencies: [IonicModule, IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonInput, IonLabel, IonRefresher, IonRefresherContent, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSpinner, IonModal, SelectValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, PadelLoaderComponent, UpperCasePipe, SlicePipe, CurrencyPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n.header-nike[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n  background: url(/assets/reserva-bg.jpg) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike[_ngcontent-%COMP%]   .header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n  z-index: 1;\n}\n.booking-context-card[_ngcontent-%COMP%] {\n  background: white;\n  margin: 20px 25px;\n  padding: 20px;\n  border-radius: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.booking-context-card[_ngcontent-%COMP%]   .coach-mini-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.booking-context-card[_ngcontent-%COMP%]   .coach-mini-info[_ngcontent-%COMP%]   .info-left[_ngcontent-%COMP%]   .context-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.booking-context-card[_ngcontent-%COMP%]   .coach-mini-info[_ngcontent-%COMP%]   .info-left[_ngcontent-%COMP%]   .coach-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 900;\n  margin: 0;\n  color: #000;\n}\n.booking-context-card[_ngcontent-%COMP%]   .coach-mini-info[_ngcontent-%COMP%]   .info-left[_ngcontent-%COMP%]   .coach-contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 5px;\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 700;\n}\n.booking-context-card[_ngcontent-%COMP%]   .coach-mini-info[_ngcontent-%COMP%]   .info-left[_ngcontent-%COMP%]   .coach-contact[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.booking-context-card[_ngcontent-%COMP%]   .coach-mini-info[_ngcontent-%COMP%]   .info-right[_ngcontent-%COMP%]   .change-coach-btn[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  height: 32px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  color: #64748b;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .context-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 10px;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  height: 54px;\n  margin-bottom: 15px;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%]   .loc-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%]   .club-filter-select[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 800;\n  color: #000;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .location-details-box[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 15px;\n  border-radius: 16px;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .location-details-box[_ngcontent-%COMP%]   .address-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #334155;\n  margin: 0 0 10px;\n  line-height: 1.4;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .location-details-box[_ngcontent-%COMP%]   .maps-link-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  font-weight: 900;\n  color: white;\n  background: #000;\n  padding: 8px 15px;\n  border-radius: 8px;\n  text-decoration: none;\n  letter-spacing: 0.5px;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .location-details-box[_ngcontent-%COMP%]   .maps-link-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .location-details-box[_ngcontent-%COMP%]   .no-address-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #94a3b8;\n  font-size: 12px;\n  font-weight: 700;\n}\n.booking-context-card[_ngcontent-%COMP%]   .club-selection-box[_ngcontent-%COMP%]   .location-details-box[_ngcontent-%COMP%]   .no-address-warning[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #f59e0b;\n}\n.header-content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 60px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .welcome-pre[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.segment-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 25px 5px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 10;\n}\n.entrenamientos-segment[_ngcontent-%COMP%] {\n  --background: #f1f5f9;\n  border-radius: 16px;\n  padding: 4px;\n  height: 50px;\n}\n.entrenamientos-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: white;\n  --color: #64748b;\n  --color-checked: #000;\n  --border-radius: 12px;\n  font-weight: 800;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n.entrenamientos-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 6px;\n}\n.mis-entrenamientos-view[_ngcontent-%COMP%] {\n  padding: 10px 25px 100px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin: 30px 0 15px;\n}\n.section-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.entrenamiento-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 0;\n  margin-bottom: 15px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n  border: 1px solid #f1f5f9;\n  overflow: hidden;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #f8f9fa;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .fecha-badge[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: #000;\n  letter-spacing: -0.5px;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 5px;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .modality-tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .modality-tag.individual[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .modality-tag.multi[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #059669;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .modality-tag.grupal[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #7c3aed;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .estado-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  padding: 4px 10px;\n  border-radius: 8px;\n  letter-spacing: 0.5px;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .estado-badge.reservado[_ngcontent-%COMP%], \n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .estado-badge.activo[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #4caf50;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .estado-badge.pendiente[_ngcontent-%COMP%] {\n  background: #fff9c4;\n  color: #fbc02d;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .estado-badge.cancelado[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #ef5350;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .tiempo-info[_ngcontent-%COMP%], \n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .entrenador-info[_ngcontent-%COMP%], \n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .pack-info[_ngcontent-%COMP%], \n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #334155;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .tiempo-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .entrenador-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .pack-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #94a3b8;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .club-name[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 700;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .maps-link[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n  font-weight: 800;\n  text-decoration: underline;\n  margin-left: -5px;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .pack-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  color: #64748b;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .gender-tag-mini[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 4px;\n  margin-left: 5px;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .gender-tag-mini.masculino[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .gender-tag-mini.femenino[_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.1);\n  color: #db2777;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-main-info[_ngcontent-%COMP%]   .gender-tag-mini.mixto[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #7c3aed;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px;\n}\n.entrenamiento-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%] {\n  border-left: 4px solid #7c3aed;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .cupos-badge.highlight[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  padding: 10px 15px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #7c3aed;\n  font-weight: 700;\n  font-size: 13px;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .cupos-badge.highlight[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .otros-inscritos[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  background: #f8f9fa;\n  border-top: 1px solid #f1f5f9;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .otros-inscritos[_ngcontent-%COMP%]   .team-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .otros-inscritos[_ngcontent-%COMP%]   .team-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 16px;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .otros-inscritos[_ngcontent-%COMP%]   .team-header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .otros-inscritos[_ngcontent-%COMP%]   .compa\\f1 eros-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .otros-inscritos[_ngcontent-%COMP%]   .compa\\f1 eros-list[_ngcontent-%COMP%]   .compa\\f1 ero[_ngcontent-%COMP%] {\n  background: white;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.entrenamiento-card.grupal[_ngcontent-%COMP%]   .otros-inscritos[_ngcontent-%COMP%]   .compa\\f1 eros-list[_ngcontent-%COMP%]   .compa\\f1 ero.me[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  border: none;\n}\n.team-section-mini[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 15px 20px;\n  border-top: 1px dashed #e2e8f0;\n}\n.team-section-mini[_ngcontent-%COMP%]   .team-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.team-section-mini[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.team-section-mini[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 800;\n  color: white;\n  position: relative;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.team-section-mini[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip.owner[_ngcontent-%COMP%] {\n  background: #000;\n}\n.team-section-mini[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip.guest[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.team-section-mini[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip.pending[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  opacity: 0.8;\n}\n.team-section-mini[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip.add[_ngcontent-%COMP%] {\n  background: white;\n  color: #94a3b8;\n  border: 1px dashed #cbd5e1;\n  box-shadow: none;\n  font-size: 18px;\n}\n.team-section-mini[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-chip[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  width: 8px;\n  height: 8px;\n  background: #ef4444;\n  border: 1.5px solid white;\n  border-radius: 50%;\n}\n.nike-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.nike-modal-card[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-header-inv[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-header-inv[_ngcontent-%COMP%]   .header-icon-inv[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-header-inv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-header-inv[_ngcontent-%COMP%]   .btn-close-modal-inv[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  --color: white;\n  height: 32px;\n  width: 32px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body-inv[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body-inv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.5;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body-inv[_ngcontent-%COMP%]   .nike-input-group-inv[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body-inv[_ngcontent-%COMP%]   .nike-input-group-inv[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 800;\n  color: #1e293b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body-inv[_ngcontent-%COMP%]   .nike-input-group-inv[_ngcontent-%COMP%]   .nike-input-field-inv[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: #f8fafc;\n  border: 2px solid #f1f5f9;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body-inv[_ngcontent-%COMP%]   .modal-actions-inv[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body-inv[_ngcontent-%COMP%]   .modal-actions-inv[_ngcontent-%COMP%]   .nike-button-modal-inv[_ngcontent-%COMP%] {\n  margin: 0;\n  --border-radius: 14px;\n  --font-weight: 700;\n  height: 50px;\n  font-size: 14px;\n}\n.nike-modal-card[_ngcontent-%COMP%]   .modal-body-inv[_ngcontent-%COMP%]   .modal-actions-inv[_ngcontent-%COMP%]   .nike-button-modal-inv.confirm[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n}\n.discovery-scroll-container[_ngcontent-%COMP%] {\n  padding: 10px 0 20px 25px;\n  background: #f8fafc;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .discovery-header[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .discovery-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 900;\n  margin: 0;\n  color: #000;\n  letter-spacing: -0.5px;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .discovery-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainers-horizontal-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  gap: 15px;\n  padding-right: 25px;\n  scrollbar-width: none;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainers-horizontal-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card[_ngcontent-%COMP%] {\n  min-width: 140px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 15px 10px;\n  background: #fff;\n  border-radius: 24px;\n  border: 2px solid transparent;\n  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card[_ngcontent-%COMP%]   .trainer-photo-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75px;\n  height: 75px;\n  border-radius: 22px;\n  padding: 3px;\n  background: #f1f5f9;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card[_ngcontent-%COMP%]   .trainer-photo-box[_ngcontent-%COMP%]   .trainer-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 19px;\n  object-fit: cover;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card[_ngcontent-%COMP%]   .trainer-photo-box[_ngcontent-%COMP%]   .active-check[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  font-size: 20px;\n  color: #000;\n  background: var(--nike-neon);\n  border-radius: 50%;\n  z-index: 5;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card.active[_ngcontent-%COMP%] {\n  transform: translateY(-5px);\n  border-color: var(--nike-neon);\n  box-shadow: 0 15px 30px rgba(204, 255, 0, 0.15);\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card.active[_ngcontent-%COMP%]   .trainer-photo-box[_ngcontent-%COMP%] {\n  background: var(--nike-neon);\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card[_ngcontent-%COMP%]   .trainer-brief[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card[_ngcontent-%COMP%]   .trainer-brief[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 900;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: -0.3px;\n}\n.discovery-scroll-container[_ngcontent-%COMP%]   .trainer-mobile-card[_ngcontent-%COMP%]   .trainer-brief[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.animate-pop[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes _ngcontent-%COMP%_pop {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_animate-up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animate-up 0.5s ease forwards;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: #000;\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: white;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n}\n.horarios-circle-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  padding: 10px 20px 40px;\n}\n.slot-circle[_ngcontent-%COMP%] {\n  aspect-ratio: 1/1;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #f8fafc);\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(0, 0, 0, 0.06),\n    inset 0 0 0 1.5px rgba(34, 197, 94, 0.5);\n}\n.slot-circle[_ngcontent-%COMP%]   .circle-content[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.slot-circle[_ngcontent-%COMP%]   .circle-content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #166534;\n}\n.slot-circle[_ngcontent-%COMP%]   .circle-content[_ngcontent-%COMP%]   .slot-cat[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #7c3aed;\n  margin-top: 2px;\n  max-width: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.slot-circle[_ngcontent-%COMP%]   .circle-content[_ngcontent-%COMP%]   .slot-cat.masculino[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.slot-circle[_ngcontent-%COMP%]   .circle-content[_ngcontent-%COMP%]   .slot-cat.femenino[_ngcontent-%COMP%] {\n  color: #db2777;\n}\n.slot-circle[_ngcontent-%COMP%]   .circle-content[_ngcontent-%COMP%]   .slot-cat.mixto[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.slot-circle.grupal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f3ff,\n      #ede9fe);\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(124, 58, 237, 0.1),\n    inset 0 0 0 1.5px rgba(124, 58, 237, 0.5);\n}\n.slot-circle.grupal[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.slot-circle.occupied[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc,\n      #f1f5f9);\n  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.04), inset -4px -4px 8px rgba(255, 255, 255, 0.8);\n}\n.slot-circle.occupied[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], \n.slot-circle.occupied[_ngcontent-%COMP%]   .slot-cat[_ngcontent-%COMP%], \n.slot-circle.occupied[_ngcontent-%COMP%]   .club-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.slot-circle.occupied[_ngcontent-%COMP%]   .strike-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  right: 20%;\n  height: 1.5px;\n  background: #cbd5e1;\n  transform: rotate(-45deg);\n  border-radius: 1px;\n}\n.slot-circle[_ngcontent-%COMP%]:not(.occupied):active {\n  transform: scale(0.92);\n  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -3px 6px rgba(255, 255, 255, 0.7);\n  background: #22c55e;\n}\n.slot-circle[_ngcontent-%COMP%]:not(.occupied):active   .time[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.slot-circle[_ngcontent-%COMP%]:not(.occupied):active   .slot-cat[_ngcontent-%COMP%], \n.slot-circle[_ngcontent-%COMP%]:not(.occupied):active   .club-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n.slot-circle.tramo-manana[_ngcontent-%COMP%]:not(.occupied):not(.grupal) {\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(0, 0, 0, 0.06),\n    inset 0 0 0 2px rgba(148, 163, 184, 0.45);\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc,\n      #f1f5f9);\n}\n.slot-circle.tramo-manana[_ngcontent-%COMP%]:not(.occupied):not(.grupal)   .time[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.slot-circle.tramo-tarde[_ngcontent-%COMP%]:not(.occupied):not(.grupal) {\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(0, 0, 0, 0.06),\n    inset 0 0 0 2px rgba(163, 230, 53, 0.5);\n  background:\n    linear-gradient(\n      135deg,\n      #f7fee7,\n      #ecfccb);\n}\n.slot-circle.tramo-tarde[_ngcontent-%COMP%]:not(.occupied):not(.grupal)   .time[_ngcontent-%COMP%] {\n  color: #365314;\n}\n.slot-circle.tramo-noche[_ngcontent-%COMP%]:not(.occupied):not(.grupal) {\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(0, 0, 0, 0.08),\n    inset 0 0 0 2px rgba(30, 41, 59, 0.35);\n  background:\n    linear-gradient(\n      135deg,\n      #f1f5f9,\n      #e2e8f0);\n}\n.slot-circle.tramo-noche[_ngcontent-%COMP%]:not(.occupied):not(.grupal)   .time[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.period-legend[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  padding: 12px 20px;\n  margin: 10px 25px 0;\n  background: #f8fafc;\n  border-radius: 14px;\n  border: 1px solid #f1f5f9;\n}\n.period-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.period-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.period-legend[_ngcontent-%COMP%]   .legend-item.manana[_ngcontent-%COMP%]   .legend-dot[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #cbd5e1);\n  box-shadow: 0 2px 6px rgba(148, 163, 184, 0.4);\n}\n.period-legend[_ngcontent-%COMP%]   .legend-item.tarde[_ngcontent-%COMP%]   .legend-dot[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a3e635,\n      #ccff00);\n  box-shadow: 0 2px 6px rgba(163, 230, 53, 0.4);\n}\n.period-legend[_ngcontent-%COMP%]   .legend-item.noche[_ngcontent-%COMP%]   .legend-dot[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b,\n      #334155);\n  box-shadow: 0 2px 6px rgba(30, 41, 59, 0.4);\n}\n.empty-tramo-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 40px 0;\n  color: #94a3b8;\n}\n.empty-tramo-full[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.empty-tramo-full[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.booking-selectors-nike[_ngcontent-%COMP%] {\n  padding: 15px 25px;\n  background: #fff;\n}\n.booking-selectors-nike[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.booking-selectors-nike[_ngcontent-%COMP%]   .filter-selector[_ngcontent-%COMP%] {\n  flex: 1 1 calc(50% - 10px);\n  min-width: 140px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  height: 48px;\n}\n.booking-selectors-nike[_ngcontent-%COMP%]   .filter-selector[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 16px;\n}\n.booking-selectors-nike[_ngcontent-%COMP%]   .filter-selector[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #000;\n  width: 100%;\n}\n.booking-selectors-nike[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n  border-radius: 12px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 800;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.2s ease;\n}\n.booking-selectors-nike[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: #ffffff;\n}\n.booking-selectors-nike[_ngcontent-%COMP%]   .active-location-banner[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 14px;\n  background: rgba(204, 255, 0, 0.15);\n  border: 1px solid rgba(204, 255, 0, 0.4);\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.nike-segment-types[_ngcontent-%COMP%] {\n  --background: #f1f5f9;\n  padding: 6px;\n  border-radius: 16px;\n  margin: 15px auto 5px;\n  width: calc(100% - 30px);\n  height: auto;\n  contain: none;\n  overflow: visible;\n}\n.nike-segment-types[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: #fff;\n  --color: #64748b;\n  --color-checked: #000;\n  --padding-start: 2px;\n  --padding-end: 2px;\n  min-height: 40px;\n  flex: 1;\n  font-weight: 900;\n  font-size: 10px;\n  letter-spacing: 0px;\n  text-transform: uppercase;\n  border: none !important;\n}\n.nike-segment-types[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: nowrap;\n  font-size: inherit;\n}\n.nike-segment-types[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n.nike-segment-days-light[_ngcontent-%COMP%] {\n  --background: transparent;\n  margin: 10px auto;\n  padding: 15px 10px;\n  overflow-x: auto;\n  display: flex !important;\n  width: 100%;\n  contain: none;\n  --indicator-color: transparent !important;\n  border: none;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --background-checked: #000;\n  --color: #64748b;\n  --color-checked: #fff !important;\n  --indicator-color: transparent;\n  --border-radius: 18px;\n  margin: 0 6px;\n  min-width: 75px;\n  height: 85px;\n  border: 1.5px solid #f1f5f9;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.03);\n  transition: all 0.3s ease;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0;\n  z-index: 10;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  opacity: 0.8;\n  color: inherit;\n  text-transform: uppercase;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: inherit;\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  --color: #fff !important;\n  --color-checked: #fff !important;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%], \n.nike-segment-days-light[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.selected-date-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background: #000;\n  color: #fff;\n  margin: 0 25px 15px;\n  padding: 12px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.selected-date-display[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--nike-neon, #ccff00);\n}\n.selected-date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.selected-date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--nike-neon, #ccff00);\n}\n.nike-segment-periods[_ngcontent-%COMP%] {\n  --background: #f1f5f9;\n  padding: 6px;\n  border-radius: 20px;\n  margin: 15px auto;\n  width: calc(100% - 30px);\n  height: auto;\n  overflow: visible;\n  contain: none;\n}\n.nike-segment-periods[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: #fff;\n  --color: #64748b;\n  --color-checked: #000;\n  font-weight: 900;\n  font-size: 11px;\n  height: 45px;\n  border-radius: 16px;\n  flex: 1;\n}\n.nike-segment-periods[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n.pack-buy-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  display: flex;\n  align-items: flex-end;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background: #fff;\n  border-radius: 30px 30px 0 0;\n  padding: 25px;\n  max-height: 80vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 24px;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .pack-scroll[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .pack-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 20px;\n  padding: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .pack-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   .pack-bits[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #22c55e;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .pack-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   .pack-bits[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 16px;\n  font-weight: 800;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .pack-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   .pack-bits[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n.pack-buy-modal[_ngcontent-%COMP%]   .pack-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #cbd5e1;\n}\n.coupon-promo-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 15px;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .promo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .promo-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .promo-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #000;\n  letter-spacing: 0.5px;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .coupon-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .coupon-row[_ngcontent-%COMP%]   .coupon-input[_ngcontent-%COMP%] {\n  --background: #fff;\n  --border-radius: 12px;\n  --padding-start: 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  height: 48px;\n  font-weight: 700;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .coupon-row[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 48px;\n  font-size: 12px;\n  font-weight: 800;\n  --border-radius: 12px;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .coupon-feedback[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #ef4444;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .coupon-feedback.success[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.coupon-promo-section[_ngcontent-%COMP%]   .nike-input-group-promo[_ngcontent-%COMP%]   .coupon-feedback[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.price-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.price-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n.price-container[_ngcontent-%COMP%]   .price.discounted[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 12px;\n  opacity: 0.7;\n}\n.price-container[_ngcontent-%COMP%]   .price.final[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #000;\n}\n.confirmation-modal-nike[_ngcontent-%COMP%] {\n  --border-radius: 32px 32px 0 0;\n  --box-shadow: 0 -10px 40px rgba(0,0,0,0.1);\n}\n.confirmation-modal-nike[_ngcontent-%COMP%]::part(content) {\n  background: #fff;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%] {\n  padding: 10px 25px 40px;\n  background: white;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .sheet-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .sheet-header[_ngcontent-%COMP%]   .pull-bar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .sheet-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  margin: 0;\n  text-transform: uppercase;\n  color: #000;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .pack-mini-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 20px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 25px;\n  border: 1.5px solid #f1f5f9;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .pack-mini-card[_ngcontent-%COMP%]   .pack-type-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #000;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--nike-neon);\n  font-size: 24px;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .pack-mini-card[_ngcontent-%COMP%]   .pack-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 900;\n  color: #000;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .pack-mini-card[_ngcontent-%COMP%]   .pack-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #64748b;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-item.discount[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 2px solid #f1f5f9;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 900;\n  color: #000;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-total[_ngcontent-%COMP%]   .final-amount[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  color: #000;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .payment-note[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 12px 15px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .payment-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .payment-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  color: #64748b;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%]   .confirm-purchase-btn[_ngcontent-%COMP%] {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 16px;\n  --font-weight: 900;\n  height: 60px;\n  font-size: 15px;\n  letter-spacing: 1px;\n  margin: 0;\n}\n.confirmation-sheet-content[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%]   .cancel-purchase-btn[_ngcontent-%COMP%] {\n  --font-weight: 800;\n  font-size: 13px;\n  margin: 0;\n}\n.pack-modal-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n.pack-modal-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 20px 25px 15px;\n  background: #fff;\n  border-bottom: 1px solid #f1f5f9;\n  z-index: 10;\n}\n.pack-modal-header[_ngcontent-%COMP%]   .pull-bar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 0 auto 15px;\n}\n.pack-modal-header[_ngcontent-%COMP%]   .pack-modal-subtitle[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n  letter-spacing: 0.5px;\n}\n.pack-modal-header[_ngcontent-%COMP%]   .pack-modal-title[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  font-size: 22px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -0.5px;\n}\n.pack-modal-header[_ngcontent-%COMP%]   .coupon-promo-section[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.pack-modal-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px 25px 40px;\n  -webkit-overflow-scrolling: touch;\n}\n.pack-modal-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 20px;\n  padding: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  cursor: pointer;\n  border: 1.5px solid #f1f5f9;\n  transition: all 0.2s ease;\n}\n.pack-modal-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  background: #f1f5f9;\n}\n.pack-modal-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   .pack-bits[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #22c55e;\n}\n.pack-modal-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   .pack-bits[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 16px;\n  font-weight: 800;\n}\n.pack-modal-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   .pack-bits[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n.pack-modal-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   .pack-bits[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .price.discounted[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.pack-modal-scroll[_ngcontent-%COMP%]   .pack-card-mobile[_ngcontent-%COMP%]   .pack-bits[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .price.final[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #000;\n  text-decoration: none;\n}\n.match-card-v8[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 22px;\n  margin-bottom: 20px;\n  border: 1px solid var(--nike-border, #e2e8f0);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 20px;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-date[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 60px;\n  background: var(--nike-gray, #f8f8fa);\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-date[_ngcontent-%COMP%]   .d-num[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy, #0f172a);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-date[_ngcontent-%COMP%]   .d-mon[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  color: var(--nike-text-gray, #8e8e93);\n  text-transform: uppercase;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--nike-navy, #0f172a);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-info[_ngcontent-%COMP%]   .m-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--nike-text-gray, #8e8e93);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-header[_ngcontent-%COMP%]   .m-info[_ngcontent-%COMP%]   .m-meta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 18px;\n  border-top: 1px solid var(--nike-border, #e2e8f0);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .player-stack[_ngcontent-%COMP%] {\n  display: flex;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .player-stack[_ngcontent-%COMP%]   .p-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  margin-right: -10px;\n  background: var(--nike-gray, #f8f8fa);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .player-stack[_ngcontent-%COMP%]   .p-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .player-stack[_ngcontent-%COMP%]   .p-avatar.placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--nike-text-gray, #8e8e93);\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  color: #2563eb;\n  background: #eff6ff;\n  padding: 6px 12px;\n  border-radius: 10px;\n  text-transform: uppercase;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .status-badge.win[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.match-card-v8[_ngcontent-%COMP%]   .m-footer[_ngcontent-%COMP%]   .status-badge.loss[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n/*# sourceMappingURL=jugador-reservas.page.css.map */'] });
var JugadorReservasPage = _JugadorReservasPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JugadorReservasPage, [{
    type: Component,
    args: [{ selector: "app-jugador-reservas", standalone: true, imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      PadelLoaderComponent
    ], template: `<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <!-- V2 Header (Professional / Minimalist) -->
  <div class="header-v2 animate-fade">
    <div class="h-text">
      <p>{{vistaActual === 'mis-entrenamientos' ? 'Mis Clases' : 'Nueva Reserva'}}</p>
      <div class="h-title-row">
        <h1>{{ jugadorNombre }}</h1>
      </div>
    </div>
    
    <div class="h-actions">
      <!-- Avatar -->
      <div class="h-avatar">
        <img [src]="fotoPerfil || 'assets/avatar.png'" (error)="onImgError($event)" alt="Avatar" />
      </div>
    </div>
  </div>

  <!-- Vista Selector (Premium Tabs) -->
  <div class="segment-wrapper animate-up">
    <ion-segment [(ngModel)]="vistaActual" class="entrenamientos-segment">
      <ion-segment-button value="mis-entrenamientos" (click)="cambiarVista('mis-entrenamientos')">
        <ion-label>
          <ion-icon name="calendar-outline"></ion-icon>
          Mis Clases
        </ion-label>
      </ion-segment-button>
      <ion-segment-button value="agendar" (click)="cambiarVista('agendar')">
        <ion-label>
          <ion-icon name="add-circle-outline"></ion-icon>
          Agendar Nueva
        </ion-label>
      </ion-segment-button>
    </ion-segment>
  </div>

  <!-- VISTA 1: MIS ENTRENAMIENTOS -->
  <div *ngIf="vistaActual === 'mis-entrenamientos'" class="mis-entrenamientos-view">

    <!-- Loading -->
    <app-padel-loader *ngIf="cargando"></app-padel-loader>

    <!-- Empty State -->
    <div *ngIf="!cargando && reservasIndividuales.length === 0 && entrenamientosGrupales.length === 0"
      class="empty-state animate-fade-in">
      <div class="empty-icon-box">
        <ion-icon name="calendar-outline"></ion-icon>
      </div>
      <h3>TU AGENDA EST\xC1 LIMPIA</h3>
      <p>Es el momento perfecto para empezar a entrenar.</p>
      <ion-button (click)="cambiarVista('agendar')" class="nike-btn-neon">
        AGENDAR CLASE
      </ion-button>
    </div>

    <!-- Reservas Individuales -->
    <div *ngIf="!cargando && reservasIndividuales.length > 0" class="entrenamientos-section animate-up">
      <h3 class="section-title">
        <ion-icon name="person-outline"></ion-icon>
        Clases Programadas
      </h3>
      <div *ngFor="let reserva of reservasIndividuales" class="entrenamiento-card animate-fade-in">
        <div class="card-header">
          <div class="fecha-badge">
            {{ reserva.fecha | date:'dd MMM' | uppercase }}
          </div>
          <div class="header-tags">
            <span class="modality-tag" [class.multi]="reserva.cantidad_personas > 1 && reserva.tipo !== 'grupal'"
              [class.grupal]="reserva.tipo === 'grupal'"
              [class.individual]="reserva.tipo !== 'grupal' && reserva.cantidad_personas <= 1">
              <ion-icon
                [name]="(reserva.tipo === 'grupal' || reserva.cantidad_personas > 1) ? 'people-outline' : 'person-outline'"></ion-icon>
              {{ reserva.tipo === 'grupal' ? 'GRUPAL' : (reserva.cantidad_personas > 1 ? 'MULTIJUGADOR' : 'INDIVIDUAL')
              }}
            </span>
            <span [ngClass]="['estado-badge', reserva.estado]">
              {{ reserva.estado | uppercase }}
            </span>
          </div>
        </div>

        <div class="card-main-info">
          <div class="tiempo-info">
            <ion-icon name="time-outline"></ion-icon>
            <span>{{ reserva.hora_inicio | slice:0:5 }} - {{ reserva.hora_fin | slice:0:5 }}</span>
          </div>
          <div class="entrenador-info">
            <ion-icon name="medal-outline"></ion-icon>
            <span>Coach: {{ reserva.entrenador_nombre }}</span>
          </div>
          <div class="location-info" *ngIf="reserva.club_nombre">
            <ion-icon name="location-outline"></ion-icon>
            <span class="club-name">{{ reserva.club_nombre }}</span>
            <a [href]="reserva.club_maps" target="_blank" class="maps-link" *ngIf="reserva.club_maps">
              (Ver direcci\xF3n)
            </a>
          </div>
        </div>

        <!-- Team Section (Multi-player) -->
        <div class="team-section-mini" *ngIf="reserva.cantidad_personas > 1">
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
        <div class="card-actions" *ngIf="reserva.estado === 'reservado'">
          <ion-button fill="clear" color="danger" (click)="mostrarConfirmacionCancelar(reserva)" class="cancel-btn">
            CANCELAR RESERVA
          </ion-button>
        </div>
      </div>
    </div>

    <!-- Entrenamientos Grupales -->
    <div *ngIf="!cargando && entrenamientosGrupales.length > 0" class="entrenamientos-section animate-up"
      style="animation-delay: 0.1s;">
      <h3 class="section-title">
        <ion-icon name="people-outline"></ion-icon>
        Clases Grupales
      </h3>
      <div *ngFor="let grupal of entrenamientosGrupales" class="entrenamiento-card grupal animate-fade-in">
        <div class="card-header">
          <div class="fecha-badge">
            {{ (grupal.dia_semana != null ? getDiasSemana(grupal.dia_semana) : (grupal.fecha | date:'EEEE':'':'es')) | uppercase }} {{ grupal.fecha | date:'dd MMM' | uppercase }}
          </div>
          <span class="estado-badge reservado">INSCRITO</span>
        </div>

        <div class="card-main-info">
          <div class="tiempo-info">
            <ion-icon name="time-outline"></ion-icon>
            <span>{{ grupal.hora_inicio | slice:0:5 }} ({{ grupal.duracion_calculada }} MIN)</span>
          </div>
          <div class="pack-info">
            <ion-icon name="grid-outline"></ion-icon>
            <span>{{ grupal.pack_nombre }} \u2022 {{ grupal.categoria }}</span>
            <span class="gender-tag-mini" *ngIf="grupal.genero" [class]="grupal.genero">
              {{ getGeneroLabel(grupal.genero) }}
            </span>
          </div>
          <div class="cupos-badge highlight">
            <ion-icon name="people-outline"></ion-icon>
            <span>Sesi\xF3n Grupal: {{ (grupal.cupos_ocupados || 0) }} / {{ grupal.capacidad_maxima }} Jugadores</span>
          </div>
          <div class="location-info" *ngIf="grupal.club_nombre">
            <ion-icon name="location-outline"></ion-icon>
            <span class="club-name">{{ grupal.club_nombre }}</span>
            <a [href]="grupal.club_maps" target="_blank" class="maps-link" *ngIf="grupal.club_maps">
              (Ver direcci\xF3n)
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>

  <!-- VISTA 3: MIS PARTIDOS -->
  <div *ngIf="vistaActual === 'mis-partidos'" class="mis-partidos-view animate-up" style="padding: 20px 24px 100px;">
    
    <!-- Loading -->
    <div *ngIf="cargando" class="loading-state" style="text-align: center; padding: 40px;">
      <ion-spinner name="crescent"></ion-spinner>
    </div>

    <!-- Empty State -->
    <div *ngIf="!cargando && misPartidos.length === 0" class="empty-state animate-fade-in" style="text-align: center; padding: 45px 25px;">
      <div class="empty-icon-box" style="width: 80px; height: 80px; background: #f8f8fa; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
        <ion-icon name="tennisball-outline" style="font-size: 40px; color: #8e8e93;"></ion-icon>
      </div>
      <h3 style="font-size: 20px; font-weight: 950; margin: 0 0 10px; color: #000; letter-spacing: -0.5px;">SIN PARTIDOS PROGRAMADOS</h3>
      <p style="font-size: 13px; color: #8e8e93; line-height: 1.4; margin: 0 0 25px;">No tienes partidos reservados pr\xF3ximamente. \xA1Busca una pista y empieza a jugar!</p>
      <ion-button (click)="router.navigate(['/clubes-reservar'])" class="nike-btn-neon" style="--background: #CCFF00; --color: #000; font-weight: 900; --border-radius: 16px; margin: 0;">
        BUSCAR CLUB Y CANCHA
      </ion-button>
    </div>

    <!-- Matches List -->
    <div *ngIf="!cargando && misPartidos.length > 0" class="partidos-section animate-up">
      <div class="match-card-v8" *ngFor="let p of misPartidos" (click)="router.navigate(['/partido-detalle', p.id])">
        <div class="m-header">
          <div class="m-date">
            <span class="d-num">{{ p.fecha | date:'dd' }}</span>
            <span class="d-mon">{{ p.fecha | date:'MMM' | uppercase }}</span>
          </div>
          <div class="m-info">
            <h3>{{ p.club_nombre }}</h3>
            <div class="m-meta">
              <ion-icon name="location-outline"></ion-icon>
              <span>{{ p.cancha_nombre || 'Cancha por asignar' }}</span>
              <ion-icon name="time-outline" style="margin-left: 10px;"></ion-icon>
              <span>{{ p.hora_inicio.slice(0,5) }} HRS</span>
            </div>
          </div>
        </div>
        <div class="m-footer">
          <div class="player-stack">
            <div class="p-avatar" *ngFor="let i of [1,2,3,4]">
               <img *ngIf="p['jugador' + i + '_foto']" [src]="getProfileImage(p['jugador' + i + '_foto'])">
               <div *ngIf="!p['jugador' + i + '_foto']" class="p-avatar placeholder"><ion-icon name="add"></ion-icon></div>
            </div>
          </div>
          <div class="status-badge">
            {{ isMatchComplete(p) ? 'Completo' : 'Faltan ' + getMissingPlayersCount(p) }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div *ngIf="vistaActual === 'agendar'" class="agendar-nueva-view">

    <!-- 1. Region & Comuna Filter -->
    <div class="booking-selectors-nike animate-up">
      <div class="filters-row">
        <div class="filter-selector">
          <ion-icon name="location-outline"></ion-icon>
          <ion-select [value]="regionSeleccionada" (ionChange)="onRegionSelectChange($event)" placeholder="REGION"
            interface="popover">
            <ion-select-option value="">TODAS LAS REGIONES</ion-select-option>
            <ion-select-option *ngFor="let r of regions" [value]="r.name">{{r.name}}</ion-select-option>
          </ion-select>
        </div>
        <div class="filter-selector">
          <ion-icon name="search-outline"></ion-icon>
          <ion-select [value]="comunaSeleccionada" (ionChange)="onComunaSelectChange($event)" placeholder="COMUNA"
            interface="popover">
            <ion-select-option value="">TODAS LAS COMUNAS</ion-select-option>
            <ion-select-option *ngFor="let c of filteredComunas" [value]="c">{{c}}</ion-select-option>
          </ion-select>
        </div>
        <button type="button" class="btn-clear-filters" *ngIf="regionSeleccionada || comunaSeleccionada" (click)="limpiarFiltrosUbicacion()">
          \u2715 Limpiar
        </button>
      </div>

      <div class="active-location-banner" *ngIf="regionSeleccionada || comunaSeleccionada">
        <span>\u{1F4CD} Filtrando por: <strong>{{ comunaSeleccionada ? comunaSeleccionada + (regionSeleccionada ? ', ' : '') : '' }}{{ regionSeleccionada }}</strong></span>
      </div>
    </div>

    <!-- 2. Coach Discovery (Only Scenario A) -->
    <div *ngIf="escenarioReserva === 'A'">
      <div class="discovery-scroll-container animate-fade-in" *ngIf="!isLoadingDiscovery">
        <div class="discovery-header">
          <h3>Coach Discovery</h3>
          <span>Entrenadores de \xE9lite en tu zona</span>
        </div>
        <div class="trainers-horizontal-scroll">
          <div class="trainer-mobile-card" *ngFor="let coach of entrenadores"
            [class.active]="selectedEntrenador === coach.id"
            (click)="selectedEntrenador = coach.id; onEntrenadorChange()">
            <div class="trainer-photo-box">
              <img [src]="coach.foto || 'assets/avatar.png'" class="trainer-img">
              <ion-icon name="checkmark-circle" class="active-check" *ngIf="selectedEntrenador === coach.id"></ion-icon>
            </div>
            <div class="trainer-brief">
              <span class="name">{{ coach.nombre }}</span>
              <span class="location">{{ coach.comuna || 'Club Local' }}</span>
            </div>
          </div>
        </div>

        <div *ngIf="entrenadores.length === 0" class="empty-trainers-mobile">
          <ion-icon name="alert-circle-outline" style="font-size: 32px; opacity: 0.5;"></ion-icon>
          <p>No hay entrenadores disponibles para esta regi\xF3n/comuna.</p>
          <button type="button" class="btn-clear-filters" style="margin-top: 10px;" (click)="limpiarFiltrosUbicacion()">Ver todas las zonas</button>
        </div>
      </div>

      <!-- Loading Coaches -->
      <app-padel-loader *ngIf="isLoadingDiscovery" size="medium"></app-padel-loader>
    </div>

    <!-- ESCENARIO B: No tiene Cr\xE9ditos Y NO tiene Reservas Futuras -->
    <div *ngIf="escenarioReserva === 'B'" class="scenario-restriction-box animate-up">
      <div class="icon-circle warning">
        <ion-icon name="cart-outline"></ion-icon>
      </div>
      <h3>CR\xC9DITOS AGOTADOS</h3>
      <p>Has consumido todas tus sesiones y no tienes clases pendientes. \xA1Adquiere un nuevo pack para seguir entrenando!
      </p>
      <ion-button (click)="showPackModal = true; fetchAllPacks()" class="nike-btn-neon">
        COMPRAR NUEVO PACK
      </ion-button>
    </div>

    <!-- ESCENARIO C: No tiene Cr\xE9ditos PERO TIENE Reservas Futuras -->
    <div *ngIf="escenarioReserva === 'C'" class="scenario-restriction-box animate-up">
      <div class="icon-circle info">
        <ion-icon name="calendar-outline"></ion-icon>
      </div>
      <h3>CLASES PENDIENTES</h3>
      <p>A\xFAn tienes <strong>{{ reservasFuturas }}</strong> clases reservadas por asistir. Podr\xE1s comprar un nuevo pack
        una vez que hayas completado tus reservas actuales.</p>
      <ion-button (click)="cambiarVista('mis-entrenamientos')" fill="outline" color="dark" class="nike-btn-outline">
        VER MIS CLASES
      </ion-button>
    </div>

    <!-- 3. Session Filters & Selection (Visible only when Coach is selected) -->
    <div *ngIf="selectedEntrenador && !cargando" class="animate-up">

      <!-- Coach & Club Context -->
      <div class="booking-context-card">
        <div class="coach-mini-info">
          <div class="info-left">
            <span class="context-label">COACH SELECCIONADO</span>
            <h4 class="coach-name">{{ selectedCoachName }}</h4>
            <div class="coach-contact" *ngIf="entrenadorTelefono">
              <ion-icon name="call-outline"></ion-icon>
              <span>{{ entrenadorTelefono }}</span>
            </div>
          </div>
          <div class="info-right">
            <ion-button fill="clear" (click)="selectedEntrenador = null" class="change-coach-btn">
              CAMBIAR
            </ion-button>
          </div>
        </div>

        <div class="club-selection-box" *ngIf="clubesDisponibles.length > 0">
          <span class="context-label">\xBFD\xD3NDE ENTRENAMOS?</span>
          <div class="custom-select-wrapper">
            <ion-icon name="location-outline" class="loc-icon"></ion-icon>
            <ion-select [(ngModel)]="selectedClubId" (ionChange)="onClubFilterChange()" placeholder="SELECCIONAR CLUB"
              interface="popover" class="club-filter-select">
              <ion-select-option [value]="null">TODOS LOS CLUBES</ion-select-option>
              <ion-select-option *ngFor="let club of clubesDisponibles" [value]="club.id">
                {{ club.nombre }}
              </ion-select-option>
            </ion-select>
          </div>

          <div class="location-details-box animate-fade-in" *ngIf="selectedClubId">
            <div *ngIf="getSelectedClub()?.direccion; else noAddress">
              <p class="address-text">{{ getSelectedClub()?.direccion }}</p>
              <a [href]="getSelectedClub()?.maps" target="_blank" class="maps-link-btn" *ngIf="getSelectedClub()?.maps">
                <ion-icon name="map-outline"></ion-icon>
                VER EN GOOGLE MAPS
              </a>
            </div>
            <ng-template #noAddress>
              <div class="no-address-warning">
                <ion-icon name="warning-outline"></ion-icon>
                <span>El entrenador no ha registrado la direcci\xF3n exacta de este club.</span>
              </div>
            </ng-template>
          </div>
        </div>
      </div>

      <!-- Type Filter -->
      <div class="type-filter-wrapper">
        <ion-segment [(ngModel)]="tipoEntrenamiento" (ionChange)="setFilter(tipoEntrenamiento)"
          class="nike-segment-types">
          <ion-segment-button value="todos"><ion-label>TODAS</ion-label></ion-segment-button>
          <ion-segment-button value="individual"><ion-label>INDIV.</ion-label></ion-segment-button>
          <ion-segment-button value="multiplayer"><ion-label>MULTI</ion-label></ion-segment-button>
          <ion-segment-button value="grupal"><ion-label>GRUPAL</ion-label></ion-segment-button>
        </ion-segment>
      </div>

      <!-- Day Selector -->
      <ion-segment [(ngModel)]="diaSeleccionado" (ionChange)="onDiaSeleccionadoChange()" scrollable class="nike-segment-days-light">
        <ion-segment-button *ngFor="let d of filteredDias" [value]="d">
          <ion-label>
            <span class="day-label">{{ d | date:'EEE' | uppercase }}</span>
            <span class="date-label">{{ d | date:'dd' }}</span>
          </ion-label>
        </ion-segment-button>
      </ion-segment>

      <!-- Time Period Color Legend -->
      <div class="period-legend">
        <div class="legend-item manana"><span class="legend-dot"></span> Ma\xF1ana</div>
        <div class="legend-item tarde"><span class="legend-dot"></span> Tarde</div>
        <div class="legend-item noche"><span class="legend-dot"></span> Noche</div>
      </div>

      <!-- Slots Circle Grid (All periods combined) -->
      <div class="horarios-circle-grid" *ngIf="diaSeleccionado && horariosPorDia[diaSeleccionado]?.todos">
        <div class="slot-circle" *ngFor="let h of horariosPorDia[diaSeleccionado].todos"
          [class.occupied]="h.ocupado" [class.grupal]="h.tipo === 'grupal'"
          [class.tramo-manana]="h.tramo === 'manana'"
          [class.tramo-tarde]="h.tramo === 'tarde'"
          [class.tramo-noche]="h.tramo === 'noche'"
          (click)="!h.ocupado && reservarHorario(h)">
          <div class="circle-content">
            <span class="time">{{ h.hora_inicio | date:'HH:mm' }}</span>
            <span class="slot-cat" *ngIf="h.tipo === 'grupal'" [class]="h.genero">
              {{ h.categoria || h.nombre_pack | slice:0:12 }}
            </span>
            <span class="club-label" *ngIf="h.club_nombre" style="font-size: 10px; margin-top: 2px;">
              {{ h.club_nombre | slice:0:14 }}
            </span>
          </div>
          <div class="strike-line" *ngIf="h.ocupado"></div>
        </div>

        <!-- Empty Slots -->
        <div class="empty-tramo-full" *ngIf="horariosPorDia[diaSeleccionado].todos.length === 0">
          <ion-icon name="hour-glass-outline"></ion-icon>
          <p>SIN CUPOS DISPONIBLES</p>
        </div>
      </div>

    </div>

    <!-- Loading Availability -->
    <app-padel-loader *ngIf="cargando" size="medium"></app-padel-loader>

  </div>

</ion-content>

  <ion-modal [isOpen]="showPackModal" (didDismiss)="showPackModal = false" [initialBreakpoint]="0.85" [breakpoints]="[0, 0.5, 0.75, 0.85, 1]" handleBehavior="cycle" class="confirmation-modal-nike">
    <ng-template>
      <div class="pack-modal-layout">
        <!-- Fixed Header -->
        <div class="pack-modal-header">
          <div class="pull-bar"></div>
          <span class="pack-modal-subtitle">Agendar Clase</span>
          <h3 class="pack-modal-title">ELEGIR PACK</h3>

          <!-- Coupon Section -->
          <div class="coupon-promo-section">
            <div class="nike-input-group-promo">
              <div class="promo-header">
                <ion-icon name="ticket-outline"></ion-icon>
                <ion-label>CUP\xD3N DE DESCUENTO</ion-label>
              </div>
              <div class="coupon-row">
                <ion-input [(ngModel)]="couponCode" placeholder="C\xD3DIGO" class="coupon-input" mode="md"></ion-input>
                <ion-button (click)="applyCoupon()" [color]="couponApplied ? 'success' : 'dark'" class="apply-btn"
                  fill="solid" mode="ios">
                  {{ couponApplied ? 'VALIDADO' : 'APLICAR' }}
                </ion-button>
              </div>
              <div class="coupon-feedback" *ngIf="couponMessage" [class.success]="couponApplied">
                <ion-icon [name]="couponApplied ? 'checkmark-circle-outline' : 'alert-circle-outline'"></ion-icon>
                <span>{{ couponMessage }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Scrollable Pack List -->
        <div class="pack-modal-scroll">
          <div class="pack-card-mobile" *ngFor="let pack of availablePacks" (click)="comprarPackYReservar(pack)">
            <div class="pack-bits">
              <span class="credits">{{ pack.sesiones_totales }} SESIONES</span>
              <h3 class="name">{{ pack.nombre }}</h3>
              <div class="price-container">
                <p class="price" [class.discounted]="couponApplied">
                  {{ pack.precio | currency:'CLP':'$':'1.0-0' }}
                </p>
                <p class="price final" *ngIf="couponApplied">
                  {{ getDiscountedPrice(pack.precio) | currency:'CLP':'$':'1.0-0' }}
                </p>
              </div>
            </div>
            <ion-icon name="chevron-forward-outline" style="font-size: 20px; color: #cbd5e1;"></ion-icon>
          </div>

          <div *ngIf="availablePacks.length === 0" class="empty-packs" style="text-align: center; padding: 30px; color: #888;">
            <p style="margin: 0;">No hay packs disponibles para este tipo de sesi\xF3n.</p>
          </div>
        </div>
      </div>
    </ng-template>
  </ion-modal>

  <!-- Confirmation Bottom Sheet (UX Senior) -->
  <ion-modal [isOpen]="showConfirmationModal" (didDismiss)="showConfirmationModal = false" [initialBreakpoint]="0.6"
    [breakpoints]="[0, 0.6, 0.9]" handleBehavior="cycle" class="confirmation-modal-nike">
    <ng-template>
      <div class="confirmation-sheet-content">
        <div class="sheet-header">
          <div class="pull-bar"></div>
          <h3>CONFIRMAR PACK</h3>
        </div>

        <div class="summary-body" *ngIf="selectedPackToConfirm">
          <div class="pack-mini-card">
            <div class="pack-type-icon">
              <ion-icon name="flash"></ion-icon>
            </div>
            <div class="pack-text">
              <h4>{{selectedPackToConfirm.nombre}}</h4>
              <span>{{selectedPackToConfirm.sesiones_totales}} SESIONES DE ENTRENAMIENTO</span>
            </div>
          </div>

          <div class="price-breakdown">
            <div class="breakdown-item">
              <span>Precio Base</span>
              <span>{{selectedPackToConfirm.precio | currency:'CLP':'$':'1.0-0'}}</span>
            </div>
            <div class="breakdown-item discount" *ngIf="couponApplied">
              <span>Cup\xF3n Descuento</span>
              <span>-{{(selectedPackToConfirm.precio - getDiscountedPrice(selectedPackToConfirm.precio)) |
                currency:'CLP':'$':'1.0-0'}}</span>
            </div>
            <div class="breakdown-total">
              <span>Monto Final</span>
              <span class="final-amount">{{getDiscountedPrice(selectedPackToConfirm.precio) |
                currency:'CLP':'$':'1.0-0'}}</span>
            </div>
          </div>

          <div class="payment-note">
            <ion-icon [name]="selectedPackToConfirm.transbank_activo == 1 ? 'shield-checkmark' : 'information-circle'">
            </ion-icon>
            <span>{{selectedPackToConfirm.transbank_activo == 1 ? 'Pago Seguro v\xEDa Webpay' : 'Pago directo con el
              Profesor'}}</span>
          </div>

          <div class="sheet-actions">
            <ion-button expand="block" (click)="confirmarCompra()" class="confirm-purchase-btn">
              CONFIRMAR Y PROCEDER
            </ion-button>
            <ion-button fill="clear" (click)="showConfirmationModal = false" class="cancel-purchase-btn" color="medium">
              CANCELAR
            </ion-button>
          </div>
        </div>
      </div>
    </ng-template>
  </ion-modal>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="goToHome()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- Invitation Modal -->
  <div class="nike-modal-overlay" *ngIf="showModalInvitacion" (click)="cerrarModal()">
    <div class="nike-modal-card animate-pop" (click)="$event.stopPropagation()">
      <div class="modal-header-inv">
        <div class="header-icon-inv">
          <ion-icon name="mail-outline"></ion-icon>
        </div>
        <h2>Invitar Compa\xF1ero</h2>
        <ion-button fill="clear" color="dark" (click)="cerrarModal()" class="btn-close-modal-inv">
          <ion-icon name="close-outline"></ion-icon>
        </ion-button>
      </div>

      <div class="modal-body-inv">
        <p>Ingresa el email de tu compa\xF1ero para que se una a este pack Duo/Multi. Debe estar registrado en la App.</p>

        <div class="nike-input-group-inv">
          <ion-label>Email del Jugador</ion-label>
          <ion-input type="email" [(ngModel)]="emailInvitado" placeholder="ejemplo@correo.com"
            class="nike-input-field-inv"></ion-input>
        </div>

        <div class="modal-actions-inv">
          <ion-button fill="outline" color="medium" (click)="cerrarModal()" class="nike-button-modal-inv">
            Cancelar
          </ion-button>
          <ion-button (click)="enviarInvitacion()" class="nike-button-modal-inv confirm">
            Enviar Invitaci\xF3n
          </ion-button>
        </div>
      </div>
    </div>
  </div>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/jugador-reservas/jugador-reservas.page.scss */\n.header-nike {\n  position: relative;\n  height: 250px;\n  background: url(/assets/reserva-bg.jpg) center/cover no-repeat;\n  background-attachment: fixed;\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  overflow: hidden;\n  margin-top: -8px;\n}\n.header-nike .header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.4),\n      rgba(0, 0, 0, 0.75));\n  z-index: 1;\n}\n.booking-context-card {\n  background: white;\n  margin: 20px 25px;\n  padding: 20px;\n  border-radius: 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.booking-context-card .coach-mini-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.booking-context-card .coach-mini-info .info-left .context-label {\n  font-size: 9px;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.booking-context-card .coach-mini-info .info-left .coach-name {\n  font-size: 18px;\n  font-weight: 900;\n  margin: 0;\n  color: #000;\n}\n.booking-context-card .coach-mini-info .info-left .coach-contact {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 5px;\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 700;\n}\n.booking-context-card .coach-mini-info .info-left .coach-contact ion-icon {\n  color: var(--ion-color-primary);\n}\n.booking-context-card .coach-mini-info .info-right .change-coach-btn {\n  font-size: 10px;\n  font-weight: 800;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  height: 32px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  color: #64748b;\n}\n.booking-context-card .club-selection-box .context-label {\n  font-size: 9px;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 10px;\n}\n.booking-context-card .club-selection-box .custom-select-wrapper {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  height: 54px;\n  margin-bottom: 15px;\n}\n.booking-context-card .club-selection-box .custom-select-wrapper .loc-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.booking-context-card .club-selection-box .custom-select-wrapper .club-filter-select {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 800;\n  color: #000;\n}\n.booking-context-card .club-selection-box .location-details-box {\n  background: #f1f5f9;\n  padding: 15px;\n  border-radius: 16px;\n}\n.booking-context-card .club-selection-box .location-details-box .address-text {\n  font-size: 13px;\n  font-weight: 700;\n  color: #334155;\n  margin: 0 0 10px;\n  line-height: 1.4;\n}\n.booking-context-card .club-selection-box .location-details-box .maps-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  font-weight: 900;\n  color: white;\n  background: #000;\n  padding: 8px 15px;\n  border-radius: 8px;\n  text-decoration: none;\n  letter-spacing: 0.5px;\n}\n.booking-context-card .club-selection-box .location-details-box .maps-link-btn ion-icon {\n  font-size: 14px;\n}\n.booking-context-card .club-selection-box .location-details-box .no-address-warning {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #94a3b8;\n  font-size: 12px;\n  font-weight: 700;\n}\n.booking-context-card .club-selection-box .location-details-box .no-address-warning ion-icon {\n  font-size: 20px;\n  color: #f59e0b;\n}\n.header-content-wrapper {\n  position: absolute;\n  bottom: 60px;\n  left: 30px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  width: 100%;\n}\n.header-content-wrapper .avatar-circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.header-content-wrapper .avatar-circle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.header-content-wrapper .header-text .welcome-pre {\n  font-size: 10px;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.header-content-wrapper .header-text .header-title {\n  font-size: 24px;\n  font-weight: 950;\n  margin: 0;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.segment-wrapper {\n  padding: 20px 25px 5px;\n  margin-top: -30px;\n  position: relative;\n  z-index: 10;\n}\n.entrenamientos-segment {\n  --background: #f1f5f9;\n  border-radius: 16px;\n  padding: 4px;\n  height: 50px;\n}\n.entrenamientos-segment ion-segment-button {\n  --indicator-color: white;\n  --color: #64748b;\n  --color-checked: #000;\n  --border-radius: 12px;\n  font-weight: 800;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n.entrenamientos-segment ion-segment-button ion-icon {\n  font-size: 18px;\n  margin-right: 6px;\n}\n.mis-entrenamientos-view {\n  padding: 10px 25px 100px;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin: 30px 0 15px;\n}\n.section-title ion-icon {\n  font-size: 16px;\n}\n.entrenamiento-card {\n  background: white;\n  border-radius: 20px;\n  padding: 0;\n  margin-bottom: 15px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);\n  border: 1px solid #f1f5f9;\n  overflow: hidden;\n}\n.entrenamiento-card .card-header {\n  padding: 15px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #f8f9fa;\n}\n.entrenamiento-card .card-header .fecha-badge {\n  font-size: 15px;\n  font-weight: 800;\n  color: #000;\n  letter-spacing: -0.5px;\n}\n.entrenamiento-card .card-header .header-tags {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 5px;\n}\n.entrenamiento-card .card-header .modality-tag {\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.entrenamiento-card .card-header .modality-tag.individual {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n.entrenamiento-card .card-header .modality-tag.multi {\n  background: rgba(16, 185, 129, 0.1);\n  color: #059669;\n}\n.entrenamiento-card .card-header .modality-tag.grupal {\n  background: rgba(139, 92, 246, 0.1);\n  color: #7c3aed;\n}\n.entrenamiento-card .card-header .estado-badge {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  padding: 4px 10px;\n  border-radius: 8px;\n  letter-spacing: 0.5px;\n}\n.entrenamiento-card .card-header .estado-badge.reservado,\n.entrenamiento-card .card-header .estado-badge.activo {\n  background: #e8f5e9;\n  color: #4caf50;\n}\n.entrenamiento-card .card-header .estado-badge.pendiente {\n  background: #fff9c4;\n  color: #fbc02d;\n}\n.entrenamiento-card .card-header .estado-badge.cancelado {\n  background: #ffebee;\n  color: #ef5350;\n}\n.entrenamiento-card .card-main-info {\n  padding: 15px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.entrenamiento-card .card-main-info .tiempo-info,\n.entrenamiento-card .card-main-info .entrenador-info,\n.entrenamiento-card .card-main-info .pack-info,\n.entrenamiento-card .card-main-info .location-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #334155;\n}\n.entrenamiento-card .card-main-info .tiempo-info ion-icon,\n.entrenamiento-card .card-main-info .entrenador-info ion-icon,\n.entrenamiento-card .card-main-info .pack-info ion-icon,\n.entrenamiento-card .card-main-info .location-info ion-icon {\n  font-size: 18px;\n  color: #94a3b8;\n}\n.entrenamiento-card .card-main-info .location-info .club-name {\n  color: #000;\n  font-weight: 700;\n}\n.entrenamiento-card .card-main-info .location-info .maps-link {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n  font-weight: 800;\n  text-decoration: underline;\n  margin-left: -5px;\n}\n.entrenamiento-card .card-main-info .pack-info span {\n  background: #f1f5f9;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  color: #64748b;\n}\n.entrenamiento-card .card-main-info .gender-tag-mini {\n  font-size: 9px;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 4px;\n  margin-left: 5px;\n}\n.entrenamiento-card .card-main-info .gender-tag-mini.masculino {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n.entrenamiento-card .card-main-info .gender-tag-mini.femenino {\n  background: rgba(236, 72, 153, 0.1);\n  color: #db2777;\n}\n.entrenamiento-card .card-main-info .gender-tag-mini.mixto {\n  background: rgba(139, 92, 246, 0.1);\n  color: #7c3aed;\n}\n.entrenamiento-card .card-actions {\n  padding: 10px 20px 20px;\n}\n.entrenamiento-card .card-actions .cancel-btn {\n  --padding-start: 0;\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.entrenamiento-card.grupal {\n  border-left: 4px solid #7c3aed;\n}\n.entrenamiento-card.grupal .cupos-badge.highlight {\n  background: #f5f3ff;\n  padding: 10px 15px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #7c3aed;\n  font-weight: 700;\n  font-size: 13px;\n}\n.entrenamiento-card.grupal .cupos-badge.highlight ion-icon {\n  color: #7c3aed;\n}\n.entrenamiento-card.grupal .otros-inscritos {\n  padding: 15px 20px;\n  background: #f8f9fa;\n  border-top: 1px solid #f1f5f9;\n}\n.entrenamiento-card.grupal .otros-inscritos .team-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.entrenamiento-card.grupal .otros-inscritos .team-header ion-icon {\n  color: #22c55e;\n  font-size: 16px;\n}\n.entrenamiento-card.grupal .otros-inscritos .team-header .label {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.entrenamiento-card.grupal .otros-inscritos .compa\\f1 eros-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.entrenamiento-card.grupal .otros-inscritos .compa\\f1 eros-list .compa\\f1 ero {\n  background: white;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.entrenamiento-card.grupal .otros-inscritos .compa\\f1 eros-list .compa\\f1 ero.me {\n  background: #000;\n  color: #fff;\n  border: none;\n}\n.team-section-mini {\n  margin-top: 5px;\n  padding: 15px 20px;\n  border-top: 1px dashed #e2e8f0;\n}\n.team-section-mini .team-label {\n  font-size: 10px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.team-section-mini .team-avatars {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.team-section-mini .team-avatars .avatar-chip {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 800;\n  color: white;\n  position: relative;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.team-section-mini .team-avatars .avatar-chip.owner {\n  background: #000;\n}\n.team-section-mini .team-avatars .avatar-chip.guest {\n  background: #64748b;\n}\n.team-section-mini .team-avatars .avatar-chip.pending {\n  background: #f59e0b;\n  opacity: 0.8;\n}\n.team-section-mini .team-avatars .avatar-chip.add {\n  background: white;\n  color: #94a3b8;\n  border: 1px dashed #cbd5e1;\n  box-shadow: none;\n  font-size: 18px;\n}\n.team-section-mini .team-avatars .avatar-chip .status-dot {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  width: 8px;\n  height: 8px;\n  background: #ef4444;\n  border: 1.5px solid white;\n  border-radius: 50%;\n}\n.nike-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.nike-modal-card {\n  background: #fff;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.nike-modal-card .modal-header-inv {\n  background: #000;\n  color: #fff;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n}\n.nike-modal-card .modal-header-inv .header-icon-inv {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.nike-modal-card .modal-header-inv h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.nike-modal-card .modal-header-inv .btn-close-modal-inv {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  --color: white;\n  height: 32px;\n  width: 32px;\n}\n.nike-modal-card .modal-body-inv {\n  padding: 24px;\n}\n.nike-modal-card .modal-body-inv p {\n  margin: 0 0 24px;\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.5;\n}\n.nike-modal-card .modal-body-inv .nike-input-group-inv {\n  margin-bottom: 24px;\n}\n.nike-modal-card .modal-body-inv .nike-input-group-inv ion-label {\n  display: block;\n  font-size: 12px;\n  font-weight: 800;\n  color: #1e293b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 0.5px;\n}\n.nike-modal-card .modal-body-inv .nike-input-group-inv .nike-input-field-inv {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: #f8fafc;\n  border: 2px solid #f1f5f9;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.nike-modal-card .modal-body-inv .modal-actions-inv {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.nike-modal-card .modal-body-inv .modal-actions-inv .nike-button-modal-inv {\n  margin: 0;\n  --border-radius: 14px;\n  --font-weight: 700;\n  height: 50px;\n  font-size: 14px;\n}\n.nike-modal-card .modal-body-inv .modal-actions-inv .nike-button-modal-inv.confirm {\n  --background: #000;\n  --color: #fff;\n}\n.discovery-scroll-container {\n  padding: 10px 0 20px 25px;\n  background: #f8fafc;\n}\n.discovery-scroll-container .discovery-header {\n  margin-bottom: 15px;\n}\n.discovery-scroll-container .discovery-header h3 {\n  font-size: 18px;\n  font-weight: 900;\n  margin: 0;\n  color: #000;\n  letter-spacing: -0.5px;\n}\n.discovery-scroll-container .discovery-header span {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.discovery-scroll-container .trainers-horizontal-scroll {\n  display: flex;\n  overflow-x: auto;\n  gap: 15px;\n  padding-right: 25px;\n  scrollbar-width: none;\n}\n.discovery-scroll-container .trainers-horizontal-scroll::-webkit-scrollbar {\n  display: none;\n}\n.discovery-scroll-container .trainer-mobile-card {\n  min-width: 140px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 15px 10px;\n  background: #fff;\n  border-radius: 24px;\n  border: 2px solid transparent;\n  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);\n}\n.discovery-scroll-container .trainer-mobile-card .trainer-photo-box {\n  position: relative;\n  width: 75px;\n  height: 75px;\n  border-radius: 22px;\n  padding: 3px;\n  background: #f1f5f9;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.discovery-scroll-container .trainer-mobile-card .trainer-photo-box .trainer-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 19px;\n  object-fit: cover;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.discovery-scroll-container .trainer-mobile-card .trainer-photo-box .active-check {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  font-size: 20px;\n  color: #000;\n  background: var(--nike-neon);\n  border-radius: 50%;\n  z-index: 5;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.discovery-scroll-container .trainer-mobile-card.active {\n  transform: translateY(-5px);\n  border-color: var(--nike-neon);\n  box-shadow: 0 15px 30px rgba(204, 255, 0, 0.15);\n}\n.discovery-scroll-container .trainer-mobile-card.active .trainer-photo-box {\n  background: var(--nike-neon);\n}\n.discovery-scroll-container .trainer-mobile-card .trainer-brief {\n  text-align: center;\n}\n.discovery-scroll-container .trainer-mobile-card .trainer-brief .name {\n  display: block;\n  font-size: 13px;\n  font-weight: 900;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: -0.3px;\n}\n.discovery-scroll-container .trainer-mobile-card .trainer-brief .location {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.animate-pop {\n  animation: pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes pop {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes animate-up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-up {\n  animation: animate-up 0.5s ease forwards;\n}\n.nike-fab {\n  --background: #000;\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.nike-fab.back-fab {\n  --background: white;\n}\n.nike-fab.back-fab ion-icon {\n  color: #000;\n}\n.horarios-circle-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  padding: 10px 20px 40px;\n}\n.slot-circle {\n  aspect-ratio: 1/1;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #f8fafc);\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(0, 0, 0, 0.06),\n    inset 0 0 0 1.5px rgba(34, 197, 94, 0.5);\n}\n.slot-circle .circle-content {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.slot-circle .circle-content .time {\n  font-size: 14px;\n  font-weight: 700;\n  color: #166534;\n}\n.slot-circle .circle-content .slot-cat {\n  font-size: 8px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #7c3aed;\n  margin-top: 2px;\n  max-width: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.slot-circle .circle-content .slot-cat.masculino {\n  color: #2563eb;\n}\n.slot-circle .circle-content .slot-cat.femenino {\n  color: #db2777;\n}\n.slot-circle .circle-content .slot-cat.mixto {\n  color: #7c3aed;\n}\n.slot-circle.grupal {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f3ff,\n      #ede9fe);\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(124, 58, 237, 0.1),\n    inset 0 0 0 1.5px rgba(124, 58, 237, 0.5);\n}\n.slot-circle.grupal .time {\n  color: #7c3aed;\n}\n.slot-circle.occupied {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc,\n      #f1f5f9);\n  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.04), inset -4px -4px 8px rgba(255, 255, 255, 0.8);\n}\n.slot-circle.occupied .time,\n.slot-circle.occupied .slot-cat,\n.slot-circle.occupied .club-label {\n  color: #94a3b8;\n}\n.slot-circle.occupied .strike-line {\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  right: 20%;\n  height: 1.5px;\n  background: #cbd5e1;\n  transform: rotate(-45deg);\n  border-radius: 1px;\n}\n.slot-circle:not(.occupied):active {\n  transform: scale(0.92);\n  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -3px 6px rgba(255, 255, 255, 0.7);\n  background: #22c55e;\n}\n.slot-circle:not(.occupied):active .time {\n  color: white !important;\n}\n.slot-circle:not(.occupied):active .slot-cat,\n.slot-circle:not(.occupied):active .club-label {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n.slot-circle.tramo-manana:not(.occupied):not(.grupal) {\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(0, 0, 0, 0.06),\n    inset 0 0 0 2px rgba(148, 163, 184, 0.45);\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc,\n      #f1f5f9);\n}\n.slot-circle.tramo-manana:not(.occupied):not(.grupal) .time {\n  color: #334155;\n}\n.slot-circle.tramo-tarde:not(.occupied):not(.grupal) {\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(0, 0, 0, 0.06),\n    inset 0 0 0 2px rgba(163, 230, 53, 0.5);\n  background:\n    linear-gradient(\n      135deg,\n      #f7fee7,\n      #ecfccb);\n}\n.slot-circle.tramo-tarde:not(.occupied):not(.grupal) .time {\n  color: #365314;\n}\n.slot-circle.tramo-noche:not(.occupied):not(.grupal) {\n  box-shadow:\n    -4px -4px 10px rgb(255, 255, 255),\n    4px 4px 12px rgba(0, 0, 0, 0.08),\n    inset 0 0 0 2px rgba(30, 41, 59, 0.35);\n  background:\n    linear-gradient(\n      135deg,\n      #f1f5f9,\n      #e2e8f0);\n}\n.slot-circle.tramo-noche:not(.occupied):not(.grupal) .time {\n  color: #0f172a;\n}\n.period-legend {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  padding: 12px 20px;\n  margin: 10px 25px 0;\n  background: #f8fafc;\n  border-radius: 14px;\n  border: 1px solid #f1f5f9;\n}\n.period-legend .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.period-legend .legend-item .legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.period-legend .legend-item.manana .legend-dot {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #cbd5e1);\n  box-shadow: 0 2px 6px rgba(148, 163, 184, 0.4);\n}\n.period-legend .legend-item.tarde .legend-dot {\n  background:\n    linear-gradient(\n      135deg,\n      #a3e635,\n      #ccff00);\n  box-shadow: 0 2px 6px rgba(163, 230, 53, 0.4);\n}\n.period-legend .legend-item.noche .legend-dot {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b,\n      #334155);\n  box-shadow: 0 2px 6px rgba(30, 41, 59, 0.4);\n}\n.empty-tramo-full {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 40px 0;\n  color: #94a3b8;\n}\n.empty-tramo-full ion-icon {\n  font-size: 40px;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.empty-tramo-full p {\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.booking-selectors-nike {\n  padding: 15px 25px;\n  background: #fff;\n}\n.booking-selectors-nike .filters-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.booking-selectors-nike .filter-selector {\n  flex: 1 1 calc(50% - 10px);\n  min-width: 140px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  height: 48px;\n}\n.booking-selectors-nike .filter-selector ion-icon {\n  color: #000;\n  font-size: 16px;\n}\n.booking-selectors-nike .filter-selector ion-select {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #000;\n  width: 100%;\n}\n.booking-selectors-nike .btn-clear-filters {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n  border-radius: 12px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 800;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.2s ease;\n}\n.booking-selectors-nike .btn-clear-filters:hover {\n  background: #dc2626;\n  color: #ffffff;\n}\n.booking-selectors-nike .active-location-banner {\n  margin-top: 10px;\n  padding: 8px 14px;\n  background: rgba(204, 255, 0, 0.15);\n  border: 1px solid rgba(204, 255, 0, 0.4);\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.nike-segment-types {\n  --background: #f1f5f9;\n  padding: 6px;\n  border-radius: 16px;\n  margin: 15px auto 5px;\n  width: calc(100% - 30px);\n  height: auto;\n  contain: none;\n  overflow: visible;\n}\n.nike-segment-types ion-segment-button {\n  --indicator-color: #fff;\n  --color: #64748b;\n  --color-checked: #000;\n  --padding-start: 2px;\n  --padding-end: 2px;\n  min-height: 40px;\n  flex: 1;\n  font-weight: 900;\n  font-size: 10px;\n  letter-spacing: 0px;\n  text-transform: uppercase;\n  border: none !important;\n}\n.nike-segment-types ion-segment-button ion-label {\n  margin: 0;\n  white-space: nowrap;\n  font-size: inherit;\n}\n.nike-segment-types ion-segment-button::before {\n  display: none !important;\n}\n.nike-segment-days-light {\n  --background: transparent;\n  margin: 10px auto;\n  padding: 15px 10px;\n  overflow-x: auto;\n  display: flex !important;\n  width: 100%;\n  contain: none;\n  --indicator-color: transparent !important;\n  border: none;\n}\n.nike-segment-days-light ion-segment-button {\n  --background: #fff;\n  --background-checked: #000;\n  --color: #64748b;\n  --color-checked: #fff !important;\n  --indicator-color: transparent;\n  --border-radius: 18px;\n  margin: 0 6px;\n  min-width: 75px;\n  height: 85px;\n  border: 1.5px solid #f1f5f9;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.03);\n  transition: all 0.3s ease;\n}\n.nike-segment-days-light ion-segment-button ion-label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0;\n  z-index: 10;\n}\n.nike-segment-days-light ion-segment-button ion-label .day-label {\n  font-size: 11px;\n  font-weight: 800;\n  opacity: 0.8;\n  color: inherit;\n  text-transform: uppercase;\n}\n.nike-segment-days-light ion-segment-button ion-label .date-label {\n  font-size: 20px;\n  font-weight: 900;\n  color: inherit;\n}\n.nike-segment-days-light ion-segment-button.segment-button-checked {\n  --color: #fff !important;\n  --color-checked: #fff !important;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.nike-segment-days-light ion-segment-button.segment-button-checked .day-label,\n.nike-segment-days-light ion-segment-button.segment-button-checked .date-label {\n  color: #fff !important;\n}\n.selected-date-display {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background: #000;\n  color: #fff;\n  margin: 0 25px 15px;\n  padding: 12px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.selected-date-display ion-icon {\n  font-size: 18px;\n  color: var(--nike-neon, #ccff00);\n}\n.selected-date-display span {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.selected-date-display span strong {\n  color: var(--nike-neon, #ccff00);\n}\n.nike-segment-periods {\n  --background: #f1f5f9;\n  padding: 6px;\n  border-radius: 20px;\n  margin: 15px auto;\n  width: calc(100% - 30px);\n  height: auto;\n  overflow: visible;\n  contain: none;\n}\n.nike-segment-periods ion-segment-button {\n  --indicator-color: #fff;\n  --color: #64748b;\n  --color-checked: #000;\n  font-weight: 900;\n  font-size: 11px;\n  height: 45px;\n  border-radius: 16px;\n  flex: 1;\n}\n.nike-segment-periods ion-segment-button::before {\n  display: none !important;\n}\n.pack-buy-modal {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  display: flex;\n  align-items: flex-end;\n}\n.pack-buy-modal .modal-backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.pack-buy-modal .modal-panel {\n  position: relative;\n  width: 100%;\n  background: #fff;\n  border-radius: 30px 30px 0 0;\n  padding: 25px;\n  max-height: 80vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.pack-buy-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.pack-buy-modal .modal-header .subtitle {\n  font-size: 11px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.pack-buy-modal .modal-header h2 {\n  margin: 2px 0 0;\n  font-size: 24px;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n}\n.pack-buy-modal .pack-scroll {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.pack-buy-modal .pack-scroll .pack-card-mobile {\n  background: #f8fafc;\n  border-radius: 20px;\n  padding: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.pack-buy-modal .pack-scroll .pack-card-mobile .pack-bits .credits {\n  font-size: 10px;\n  font-weight: 800;\n  color: #22c55e;\n}\n.pack-buy-modal .pack-scroll .pack-card-mobile .pack-bits h3 {\n  margin: 4px 0;\n  font-size: 16px;\n  font-weight: 800;\n}\n.pack-buy-modal .pack-scroll .pack-card-mobile .pack-bits .price {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n.pack-buy-modal .pack-scroll .pack-card-mobile ion-icon {\n  font-size: 20px;\n  color: #cbd5e1;\n}\n.coupon-promo-section {\n  background: #f8fafc;\n  padding: 15px;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n}\n.coupon-promo-section .nike-input-group-promo .promo-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.coupon-promo-section .nike-input-group-promo .promo-header ion-icon {\n  color: #000;\n  font-size: 18px;\n}\n.coupon-promo-section .nike-input-group-promo .promo-header ion-label {\n  font-size: 11px;\n  font-weight: 800;\n  color: #000;\n  letter-spacing: 0.5px;\n}\n.coupon-promo-section .nike-input-group-promo .coupon-row {\n  display: flex;\n  gap: 10px;\n}\n.coupon-promo-section .nike-input-group-promo .coupon-row .coupon-input {\n  --background: #fff;\n  --border-radius: 12px;\n  --padding-start: 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  height: 48px;\n  font-weight: 700;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.coupon-promo-section .nike-input-group-promo .coupon-row .apply-btn {\n  margin: 0;\n  height: 48px;\n  font-size: 12px;\n  font-weight: 800;\n  --border-radius: 12px;\n}\n.coupon-promo-section .nike-input-group-promo .coupon-feedback {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #ef4444;\n}\n.coupon-promo-section .nike-input-group-promo .coupon-feedback.success {\n  color: #22c55e;\n}\n.coupon-promo-section .nike-input-group-promo .coupon-feedback ion-icon {\n  font-size: 14px;\n}\n.price-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.price-container .price {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n.price-container .price.discounted {\n  text-decoration: line-through;\n  font-size: 12px;\n  opacity: 0.7;\n}\n.price-container .price.final {\n  font-size: 16px;\n  font-weight: 800;\n  color: #000;\n}\n.confirmation-modal-nike {\n  --border-radius: 32px 32px 0 0;\n  --box-shadow: 0 -10px 40px rgba(0,0,0,0.1);\n}\n.confirmation-modal-nike::part(content) {\n  background: #fff;\n}\n.confirmation-sheet-content {\n  padding: 10px 25px 40px;\n  background: white;\n}\n.confirmation-sheet-content .sheet-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.confirmation-sheet-content .sheet-header .pull-bar {\n  width: 40px;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n.confirmation-sheet-content .sheet-header h3 {\n  font-size: 20px;\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  margin: 0;\n  text-transform: uppercase;\n  color: #000;\n}\n.confirmation-sheet-content .pack-mini-card {\n  background: #f8fafc;\n  padding: 20px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 25px;\n  border: 1.5px solid #f1f5f9;\n}\n.confirmation-sheet-content .pack-mini-card .pack-type-icon {\n  width: 50px;\n  height: 50px;\n  background: #000;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--nike-neon);\n  font-size: 24px;\n}\n.confirmation-sheet-content .pack-mini-card .pack-text h4 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 900;\n  color: #000;\n}\n.confirmation-sheet-content .pack-mini-card .pack-text span {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.confirmation-sheet-content .price-breakdown {\n  margin-bottom: 30px;\n}\n.confirmation-sheet-content .price-breakdown .breakdown-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #64748b;\n}\n.confirmation-sheet-content .price-breakdown .breakdown-item.discount {\n  color: #10b981;\n}\n.confirmation-sheet-content .price-breakdown .breakdown-total {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 2px solid #f1f5f9;\n}\n.confirmation-sheet-content .price-breakdown .breakdown-total span {\n  font-size: 16px;\n  font-weight: 900;\n  color: #000;\n}\n.confirmation-sheet-content .price-breakdown .breakdown-total .final-amount {\n  font-size: 24px;\n  font-weight: 950;\n  color: #000;\n}\n.confirmation-sheet-content .payment-note {\n  background: #f1f5f9;\n  padding: 12px 15px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.confirmation-sheet-content .payment-note ion-icon {\n  font-size: 18px;\n  color: #64748b;\n}\n.confirmation-sheet-content .payment-note span {\n  font-size: 12px;\n  font-weight: 800;\n  color: #64748b;\n}\n.confirmation-sheet-content .sheet-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.confirmation-sheet-content .sheet-actions .confirm-purchase-btn {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 16px;\n  --font-weight: 900;\n  height: 60px;\n  font-size: 15px;\n  letter-spacing: 1px;\n  margin: 0;\n}\n.confirmation-sheet-content .sheet-actions .cancel-purchase-btn {\n  --font-weight: 800;\n  font-size: 13px;\n  margin: 0;\n}\n.pack-modal-layout {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n.pack-modal-header {\n  flex-shrink: 0;\n  padding: 20px 25px 15px;\n  background: #fff;\n  border-bottom: 1px solid #f1f5f9;\n  z-index: 10;\n}\n.pack-modal-header .pull-bar {\n  width: 40px;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 0 auto 15px;\n}\n.pack-modal-header .pack-modal-subtitle {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n  letter-spacing: 0.5px;\n}\n.pack-modal-header .pack-modal-title {\n  margin: 0 0 15px;\n  font-size: 22px;\n  font-weight: 950;\n  color: #000;\n  letter-spacing: -0.5px;\n}\n.pack-modal-header .coupon-promo-section {\n  margin-bottom: 0;\n}\n.pack-modal-scroll {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px 25px 40px;\n  -webkit-overflow-scrolling: touch;\n}\n.pack-modal-scroll .pack-card-mobile {\n  background: #f8fafc;\n  border-radius: 20px;\n  padding: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  cursor: pointer;\n  border: 1.5px solid #f1f5f9;\n  transition: all 0.2s ease;\n}\n.pack-modal-scroll .pack-card-mobile:active {\n  transform: scale(0.97);\n  background: #f1f5f9;\n}\n.pack-modal-scroll .pack-card-mobile .pack-bits .credits {\n  font-size: 10px;\n  font-weight: 800;\n  color: #22c55e;\n}\n.pack-modal-scroll .pack-card-mobile .pack-bits .name {\n  margin: 4px 0;\n  font-size: 16px;\n  font-weight: 800;\n}\n.pack-modal-scroll .pack-card-mobile .pack-bits .price-container .price {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n}\n.pack-modal-scroll .pack-card-mobile .pack-bits .price-container .price.discounted {\n  text-decoration: line-through;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.pack-modal-scroll .pack-card-mobile .pack-bits .price-container .price.final {\n  font-size: 16px;\n  font-weight: 800;\n  color: #000;\n  text-decoration: none;\n}\n.match-card-v8 {\n  background: white;\n  border-radius: 24px;\n  padding: 22px;\n  margin-bottom: 20px;\n  border: 1px solid var(--nike-border, #e2e8f0);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n}\n.match-card-v8 .m-header {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 20px;\n}\n.match-card-v8 .m-header .m-date {\n  width: 50px;\n  height: 60px;\n  background: var(--nike-gray, #f8f8fa);\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.match-card-v8 .m-header .m-date .d-num {\n  font-size: 18px;\n  font-weight: 950;\n  color: var(--nike-navy, #0f172a);\n}\n.match-card-v8 .m-header .m-date .d-mon {\n  font-size: 9px;\n  font-weight: 800;\n  color: var(--nike-text-gray, #8e8e93);\n  text-transform: uppercase;\n}\n.match-card-v8 .m-header .m-info {\n  flex: 1;\n}\n.match-card-v8 .m-header .m-info h3 {\n  margin: 0 0 6px;\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--nike-navy, #0f172a);\n}\n.match-card-v8 .m-header .m-info .m-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--nike-text-gray, #8e8e93);\n}\n.match-card-v8 .m-header .m-info .m-meta ion-icon {\n  font-size: 14px;\n}\n.match-card-v8 .m-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 18px;\n  border-top: 1px solid var(--nike-border, #e2e8f0);\n}\n.match-card-v8 .m-footer .player-stack {\n  display: flex;\n}\n.match-card-v8 .m-footer .player-stack .p-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  margin-right: -10px;\n  background: var(--nike-gray, #f8f8fa);\n}\n.match-card-v8 .m-footer .player-stack .p-avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.match-card-v8 .m-footer .player-stack .p-avatar.placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--nike-text-gray, #8e8e93);\n}\n.match-card-v8 .m-footer .status-badge {\n  font-size: 11px;\n  font-weight: 900;\n  color: #2563eb;\n  background: #eff6ff;\n  padding: 6px 12px;\n  border-radius: 10px;\n  text-transform: uppercase;\n}\n.match-card-v8 .m-footer .status-badge.win {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.match-card-v8 .m-footer .status-badge.loss {\n  background: #fef2f2;\n  color: #ef4444;\n}\n/*# sourceMappingURL=jugador-reservas.page.css.map */\n'] }]
  }], () => [{ type: EntrenamientoService }, { type: MysqlService }, { type: PacksService }, { type: PackAlumnoService }, { type: ToastController }, { type: AlertController }, { type: LoadingController }, { type: Router }, { type: ActivatedRoute }, { type: NotificationService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JugadorReservasPage, { className: "JugadorReservasPage", filePath: "src/app/pages/jugador-reservas/jugador-reservas.page.ts", lineNumber: 32 });
})();
export {
  JugadorReservasPage
};
//# sourceMappingURL=jugador-reservas.page-XHB53D54.js.map

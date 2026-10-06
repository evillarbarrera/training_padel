import {
  AlertController,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  ToastController
} from "./chunk-5YKSH3EK.js";
import {
  NotificationService
} from "./chunk-OPJ5BMLN.js";
import "./chunk-DBDG6EJI.js";
import {
  addIcons,
  chevronBackOutline,
  closeCircleOutline,
  fitnessOutline,
  locationOutline,
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
import "./chunk-DMH43HQY.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-2WF3DFKV.js";
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

// src/app/pages/entrenador-entrenamientos/entrenador-entrenamientos.page.ts
function EntrenadorEntrenamientosPage_ion_segment_button_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function EntrenadorEntrenamientosPage_ion_segment_button_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-segment-button", 17)(1, "ion-label")(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, EntrenadorEntrenamientosPage_ion_segment_button_12_div_8_Template, 1, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("value", d_r1.fecha);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(4, 4, d_r1.nombre, 0, 3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, d_r1.fecha, "dd"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r1.data.length > 0);
  }
}
function EntrenadorEntrenamientosPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "ion-spinner", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando agenda...");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorEntrenamientosPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275element(2, "ion-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Agenda Libre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No tienes clases para este d\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 1, item_r2.hora_inicio, 0, 5));
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 2, item_r2.hora_inicio, 0, 5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("a ", \u0275\u0275pipeBind3(6, 6, item_r2.hora_fin, 0, 5));
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_div_10_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 51);
  }
  if (rf & 2) {
    const jugador_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", jugador_r3.foto, \u0275\u0275sanitizeUrl);
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_div_10_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jugador_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(jugador_r3.nombre.charAt(0));
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275template(2, EntrenadorEntrenamientosPage_div_16_div_1_div_10_div_1_img_2_Template, 1, 1, "img", 49)(3, EntrenadorEntrenamientosPage_div_16_div_1_div_10_div_1_span_3_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const jugador_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", jugador_r3.foto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !jugador_r3.foto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(jugador_r3.nombre);
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, EntrenadorEntrenamientosPage_div_16_div_1_div_10_div_1_Template, 6, 3, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r2.jugadores);
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_div_11_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "img", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jugador_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", jugador_r4.foto, \u0275\u0275sanitizeUrl)("alt", jugador_r4.nombre);
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, EntrenadorEntrenamientosPage_div_16_div_1_div_11_div_9_div_1_Template, 2, 2, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r2.jugadores);
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "span", 55);
    \u0275\u0275text(4, "\u{1F465} GRUPAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 57);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, EntrenadorEntrenamientosPage_div_16_div_1_div_11_div_9_Template, 2, 1, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r2.categoria);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r2.cupos_ocupados, "/", item_r2.capacidad_maxima);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.jugadores && item_r2.jugadores.length > 0);
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275element(1, "ion-icon", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.club_nombre, " ");
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "ion-button", 66);
    \u0275\u0275listener("click", function EntrenadorEntrenamientosPage_div_16_div_1_div_16_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.confirmarCancelacion(item_r2));
    });
    \u0275\u0275element(2, "ion-icon", 67);
    \u0275\u0275text(3, " Cancelar ");
    \u0275\u0275elementEnd()();
  }
}
function EntrenadorEntrenamientosPage_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementStart(2, "div", 31)(3, "div", 32)(4, "div", 33);
    \u0275\u0275template(5, EntrenadorEntrenamientosPage_div_16_div_1_ng_container_5_Template, 4, 5, "ng-container", 34)(6, EntrenadorEntrenamientosPage_div_16_div_1_ng_container_6_Template, 7, 10, "ng-container", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275template(10, EntrenadorEntrenamientosPage_div_16_div_1_div_10_Template, 2, 1, "div", 37)(11, EntrenadorEntrenamientosPage_div_16_div_1_div_11_Template, 10, 4, "div", 38);
    \u0275\u0275elementStart(12, "div", 39);
    \u0275\u0275template(13, EntrenadorEntrenamientosPage_div_16_div_1_span_13_Template, 3, 1, "span", 40);
    \u0275\u0275elementStart(14, "span", 41);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, EntrenadorEntrenamientosPage_div_16_div_1_div_16_Template, 4, 0, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r7 * 0.05 + "s");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r5.getEstadoText(item_r2).toLowerCase());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", item_r2.tipo === "grupal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.tipo !== "grupal");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r5.getEstadoText(item_r2).toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.getEstadoText(item_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2.tipo !== "grupal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.tipo === "grupal");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2.club_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.pack_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.estado !== "cancelado" || item_r2.estado_grupo !== "cancelado");
  }
}
function EntrenadorEntrenamientosPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, EntrenadorEntrenamientosPage_div_16_div_1_Template, 17, 12, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r5.agendaActual);
  }
}
var _EntrenadorEntrenamientosPage = class _EntrenadorEntrenamientosPage {
  constructor(mysqlService, notificationService, router, alertCtrl, toastCtrl) {
    this.mysqlService = mysqlService;
    this.notificationService = notificationService;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.dias = [];
    this.diaSeleccionado = "";
    this.cargando = true;
    this.entrenadorId = Number(localStorage.getItem("userId"));
    addIcons({
      chevronBackOutline,
      timeOutline,
      personOutline,
      fitnessOutline,
      closeCircleOutline,
      locationOutline
    });
  }
  ngOnInit() {
    this.generarFechas();
    this.cargarAgenda();
  }
  generarFechas() {
    const nombresDias = ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"];
    const hoy = /* @__PURE__ */ new Date();
    let hoyFechaStr = "";
    this.dias = [];
    for (let i = -7; i < 14; i++) {
      const fecha = /* @__PURE__ */ new Date();
      fecha.setDate(hoy.getDate() + i);
      const y = fecha.getFullYear();
      const m = (fecha.getMonth() + 1).toString().padStart(2, "0");
      const d = fecha.getDate().toString().padStart(2, "0");
      const fechaStr = `${y}-${m}-${d}`;
      const diaNumero = fecha.getDay();
      if (i === 0) {
        hoyFechaStr = fechaStr;
      }
      this.dias.push({
        nombre: i === 0 ? "Hoy" : nombresDias[diaNumero],
        fecha: fechaStr,
        diaNumero,
        // Guardar para luego
        data: []
      });
    }
    this.diaSeleccionado = hoyFechaStr || this.dias[0].fecha;
  }
  cargarAgenda(event) {
    this.cargando = true;
    this.mysqlService.getEntrenadorAgenda(this.entrenadorId).subscribe({
      next: (res) => {
        const todasReservas = [];
        if (res.reservas_tradicionales && Array.isArray(res.reservas_tradicionales)) {
          todasReservas.push(...res.reservas_tradicionales);
        }
        if (res.packs_grupales && Array.isArray(res.packs_grupales)) {
          const packsGrupalesMapeados = res.packs_grupales.map((pack) => __spreadProps(__spreadValues({}, pack), {
            reserva_id: pack.id || pack.pack_id,
            fecha: pack.fecha || null,
            // RESPETAR LA FECHA SI EXISTE
            tipo: "grupal",
            estado: pack.estado_grupo
          }));
          todasReservas.push(...packsGrupalesMapeados);
        }
        this.dias.forEach((dia) => {
          const diaBDFormato = dia.diaNumero === 0 ? 6 : dia.diaNumero - 1;
          const reservasDia = todasReservas.filter((r) => r.fecha === dia.fecha).map((r) => {
            const inscritos = r.inscritos || [];
            const jugadores = inscritos.map((ins) => {
              let foto = ins.foto;
              if (foto && foto.length > 5 && !foto.includes("imagen_defecto")) {
                if (!foto.startsWith("http")) {
                  const cleanPath = foto.startsWith("/") ? foto.substring(1) : foto;
                  foto = `https://api.padelmanager.cl/${cleanPath}`;
                }
              } else {
                foto = `https://ui-avatars.com/api/?name=${encodeURIComponent(ins.nombre)}&background=ccff00&color=000`;
              }
              return {
                nombre: ins.nombre,
                foto
              };
            });
            return __spreadProps(__spreadValues({}, r), {
              jugadores
            });
          });
          const templatesDia = todasReservas.filter((r) => r.tipo === "grupal" && !r.fecha && // Solo los que son plantillas puras
          Number(r.dia_semana) === diaBDFormato && !reservasDia.some((res2) => res2.hora_inicio === r.hora_inicio)).map((r) => {
            const inscritos = r.inscritos || [];
            const jugadores = inscritos.map((ins) => {
              let foto = ins.foto;
              if (foto && foto.length > 5 && !foto.includes("imagen_defecto")) {
                if (!foto.startsWith("http")) {
                  const cleanPath = foto.startsWith("/") ? foto.substring(1) : foto;
                  foto = `https://api.padelmanager.cl/${cleanPath}`;
                }
              } else {
                foto = `https://ui-avatars.com/api/?name=${encodeURIComponent(ins.nombre)}&background=ccff00&color=000`;
              }
              return {
                nombre: ins.nombre,
                foto
              };
            });
            return __spreadProps(__spreadValues({}, r), { jugadores });
          });
          dia.data = [...reservasDia, ...templatesDia];
          dia.data.sort((a, b) => (a.hora_inicio || "").localeCompare(b.hora_inicio || ""));
        });
        this.cargando = false;
        if (event)
          event.target.complete();
      },
      error: (err) => {
        console.error("Error al cargar agenda:", err);
        this.cargando = false;
        if (event)
          event.target.complete();
      }
    });
  }
  handleRefresh(event) {
    this.cargarAgenda(event);
  }
  get agendaActual() {
    const dia = this.dias.find((d) => d.fecha === this.diaSeleccionado);
    return dia ? dia.data : [];
  }
  goBack() {
    this.router.navigate(["/entrenador-home"]);
  }
  confirmarCancelacion(item) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Cancelar Entrenamiento",
        message: "\xBFEst\xE1s seguro de que deseas cancelar este entrenamiento? Esta acci\xF3n liberar\xE1 el horario.",
        buttons: [
          {
            text: "No, mantener",
            role: "cancel"
          },
          {
            text: "S\xED, cancelar",
            role: "destructive",
            handler: () => {
              this.ejecutarCancelacion(item);
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  ejecutarCancelacion(item) {
    this.mysqlService.cancelarReserva(item.reserva_id).subscribe({
      next: () => __async(this, null, function* () {
        const packNombre = item.pack_nombre || item.nombre_pack || "Entrenamiento";
        const fecha = item.fecha || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        if (item.jugador_id) {
          this.notificationService.sendCancelationNotification(item.jugador_id, packNombre, fecha);
        } else if (item.jugadores && item.jugadores.length > 0) {
          item.jugadores.forEach((j) => {
            if (j.id || j.jugador_id) {
              this.notificationService.sendCancelationNotification(j.id || j.jugador_id, packNombre, fecha);
            }
          });
        }
        const toast = yield this.toastCtrl.create({
          message: "\u2705 Entrenamiento cancelado y horario liberado",
          duration: 2e3,
          color: "dark"
        });
        toast.present();
        this.cargarAgenda();
      }),
      error: (err) => {
        console.error("Error al cancelar:", err);
      }
    });
  }
  getEstadoText(item) {
    return item.tipo === "grupal" ? item.estado_grupo || "desconocido" : item.estado || "desconocido";
  }
};
_EntrenadorEntrenamientosPage.\u0275fac = function EntrenadorEntrenamientosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EntrenadorEntrenamientosPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController));
};
_EntrenadorEntrenamientosPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrenadorEntrenamientosPage, selectors: [["app-entrenador-entrenamientos"]], decls: 20, vars: 6, consts: [[3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], [1, "header-nike"], [1, "header-overlay"], [1, "header-content"], [1, "header-title"], [1, "header-sub"], [1, "segment-wrapper", "animate-up"], ["scrollable", "", "mode", "md", 1, "nike-segment-days", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "dashboard-container"], ["class", "state-container animate-fade", 4, "ngIf"], ["class", "state-container animate-up", 4, "ngIf"], ["class", "agenda-list", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "nike-fab", "back-fab", 3, "click"], ["name", "chevron-back-outline"], [3, "value"], [1, "day-name"], [1, "day-date"], ["class", "dot-indicator", 4, "ngIf"], [1, "dot-indicator"], [1, "state-container", "animate-fade"], ["name", "crescent"], [1, "state-container", "animate-up"], [1, "empty-icon-box"], ["name", "fitness-outline"], [1, "agenda-list"], ["class", "nike-card modern-card animate-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "nike-card", "modern-card", "animate-up"], [1, "card-timeline-indicator", 3, "ngClass"], [1, "modern-card-content"], [1, "modern-card-header"], [1, "time-block"], [4, "ngIf"], [1, "status-tag", 3, "ngClass"], [1, "modern-card-body"], ["class", "players-stack", 4, "ngIf"], ["class", "grupal-modern", 4, "ngIf"], [1, "tags-row"], ["class", "modern-tag", 4, "ngIf"], [1, "modern-tag", "outline"], ["class", "modern-card-footer", 4, "ngIf"], [1, "main-time"], [1, "sub-time"], [1, "players-stack"], ["class", "player-modern", 4, "ngFor", "ngForOf"], [1, "player-modern"], [1, "avatar-sm"], [3, "src", 4, "ngIf"], [1, "player-name"], [3, "src"], [1, "grupal-modern"], [1, "grupal-header"], [2, "display", "flex", "gap", "6px", "align-items", "center"], [1, "tipo-badge"], [1, "categoria"], [1, "cupos-text"], ["class", "inscritos-avatars", 4, "ngIf"], [1, "inscritos-avatars"], ["class", "mini-avatar", 4, "ngFor", "ngForOf"], [1, "mini-avatar"], [3, "src", "alt"], [1, "modern-tag"], ["name", "location"], [1, "modern-card-footer"], ["fill", "clear", "color", "danger", 1, "btn-cancel", 3, "click"], ["name", "close-circle-outline", "slot", "start"]], template: function EntrenadorEntrenamientosPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-refresher", 1);
    \u0275\u0275listener("ionRefresh", function EntrenadorEntrenamientosPage_Template_ion_refresher_ionRefresh_1_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275element(4, "div", 3);
    \u0275\u0275elementStart(5, "div", 4)(6, "h1", 5);
    \u0275\u0275text(7, "Mi Agenda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "Sesiones programadas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "ion-segment", 8);
    \u0275\u0275twoWayListener("ngModelChange", function EntrenadorEntrenamientosPage_Template_ion_segment_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.diaSeleccionado, $event) || (ctx.diaSeleccionado = $event);
      return $event;
    });
    \u0275\u0275template(12, EntrenadorEntrenamientosPage_ion_segment_button_12_Template, 9, 11, "ion-segment-button", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275template(14, EntrenadorEntrenamientosPage_div_14_Template, 4, 0, "div", 11)(15, EntrenadorEntrenamientosPage_div_15_Template, 7, 0, "div", 12)(16, EntrenadorEntrenamientosPage_div_16_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-fab", 14)(18, "ion-fab-button", 15);
    \u0275\u0275listener("click", function EntrenadorEntrenamientosPage_Template_ion_fab_button_click_18_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(19, "ion-icon", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.diaSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.dias);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && ctx.agendaActual.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && ctx.agendaActual.length > 0);
  }
}, dependencies: [
  IonContent,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
  IonFabButton,
  IonSpinner,
  IonButton,
  IonRefresher,
  IonRefresherContent,
  IonFab,
  SlicePipe,
  DatePipe
], styles: ["\n\n.header-nike[_ngcontent-%COMP%] {\n  min-height: 240px;\n  padding-top: calc(50px + env(safe-area-inset-top));\n  padding-bottom: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n  margin-top: -60px;\n  width: 100%;\n  z-index: 0;\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.players-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.players-container[_ngcontent-%COMP%]   .player-profile-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 8px;\n  border-radius: 10px;\n  background-color: #fbfbfb;\n  border: 1px solid #f2f2f7;\n}\n.players-container[_ngcontent-%COMP%]   .player-profile-row[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: #f0f0f0;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #555;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n  position: relative;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.players-container[_ngcontent-%COMP%]   .player-profile-row[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   .player-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.players-container[_ngcontent-%COMP%]   .player-profile-row[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   .initials[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.players-container[_ngcontent-%COMP%]   .player-profile-row[_ngcontent-%COMP%]   .player-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: #111;\n  line-height: 1.2;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.8));\n  z-index: 1;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: 500;\n}\n.segment-wrapper[_ngcontent-%COMP%] {\n  padding: 15px 20px 0;\n  margin-top: -35px;\n  position: relative;\n  z-index: 100;\n}\n.nike-segment-days[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  border-radius: 20px;\n  padding: 6px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  height: 85px;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: transparent;\n  --color: #8e8e93;\n  --color-checked: #111;\n  min-width: 60px;\n  border-radius: 14px;\n  transition: all 0.2s ease;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .day-date[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\n.nike-segment-days[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  transform: scale(1.05);\n}\n.nike-segment-days[_ngcontent-%COMP%]   .dot-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 6px;\n  height: 6px;\n  background: var(--ion-color-primary);\n  border-radius: 50%;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 25px 20px 100px;\n}\n.state-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 40px;\n}\n.state-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: #111;\n  margin-bottom: 15px;\n}\n.state-container[_ngcontent-%COMP%]   .empty-icon-box[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #e5e5ea;\n  margin-bottom: 15px;\n}\n.state-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #111;\n}\n.state-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8e8e93;\n  font-size: 14px;\n  margin-top: 6px;\n}\n.agenda-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.modern-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  position: relative;\n  border: none;\n  display: flex;\n  transition: transform 0.2s;\n}\n.modern-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.modern-card[_ngcontent-%COMP%]   .card-timeline-indicator[_ngcontent-%COMP%] {\n  width: 6px;\n  background: #f0f0f0;\n}\n.modern-card[_ngcontent-%COMP%]   .card-timeline-indicator.pendiente[_ngcontent-%COMP%] {\n  background: #fbc02d;\n}\n.modern-card[_ngcontent-%COMP%]   .card-timeline-indicator.reservado[_ngcontent-%COMP%], \n.modern-card[_ngcontent-%COMP%]   .card-timeline-indicator.activo[_ngcontent-%COMP%], \n.modern-card[_ngcontent-%COMP%]   .card-timeline-indicator.confirmada[_ngcontent-%COMP%], \n.modern-card[_ngcontent-%COMP%]   .card-timeline-indicator.confirmado[_ngcontent-%COMP%] {\n  background: #ccff00;\n}\n.modern-card[_ngcontent-%COMP%]   .card-timeline-indicator.finalizado[_ngcontent-%COMP%] {\n  background: #111;\n}\n.modern-card[_ngcontent-%COMP%]   .card-timeline-indicator.cancelado[_ngcontent-%COMP%] {\n  background: #ef5350;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .time-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .time-block[_ngcontent-%COMP%]   .main-time[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: #111;\n  letter-spacing: -0.5px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .time-block[_ngcontent-%COMP%]   .sub-time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #888;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .status-tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .status-tag.pendiente[_ngcontent-%COMP%] {\n  background: #fffde7;\n  color: #fbc02d;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .status-tag.reservado[_ngcontent-%COMP%], \n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .status-tag.activo[_ngcontent-%COMP%], \n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .status-tag.confirmada[_ngcontent-%COMP%], \n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .status-tag.confirmado[_ngcontent-%COMP%] {\n  background: #ccff00;\n  color: #000;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .status-tag.finalizado[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #999;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-header[_ngcontent-%COMP%]   .status-tag.cancelado[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #ef5350;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .players-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .players-stack[_ngcontent-%COMP%]   .player-modern[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .players-stack[_ngcontent-%COMP%]   .player-modern[_ngcontent-%COMP%]   .avatar-sm[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 800;\n  color: #555;\n  overflow: hidden;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .players-stack[_ngcontent-%COMP%]   .player-modern[_ngcontent-%COMP%]   .avatar-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .players-stack[_ngcontent-%COMP%]   .player-modern[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border-radius: 12px;\n  padding: 10px;\n  border: 1px solid #f2f2f7;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%]   .grupal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%]   .grupal-header[_ngcontent-%COMP%]   .tipo-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 900;\n  color: #007aff;\n  background: #e5f1ff;\n  padding: 3px 6px;\n  border-radius: 4px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%]   .grupal-header[_ngcontent-%COMP%]   .categoria[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #333;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%]   .grupal-header[_ngcontent-%COMP%]   .cupos-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #111;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%]   .inscritos-avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%]   .inscritos-avatars[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  margin-left: -8px;\n  background: #ccc;\n  overflow: hidden;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%]   .inscritos-avatars[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .grupal-modern[_ngcontent-%COMP%]   .inscritos-avatars[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 10px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .tags-row[_ngcontent-%COMP%]   .modern-tag[_ngcontent-%COMP%] {\n  background: #f4f4f5;\n  color: #555;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .tags-row[_ngcontent-%COMP%]   .modern-tag[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #111;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-body[_ngcontent-%COMP%]   .tags-row[_ngcontent-%COMP%]   .modern-tag.outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #e5e5ea;\n  color: #333;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-top: 1px dashed #f0f0f0;\n  padding-top: 10px;\n  margin-top: 4px;\n}\n.modern-card[_ngcontent-%COMP%]   .modern-card-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  --color: #ff3b30;\n  font-size: 11px;\n  font-weight: 800;\n  height: 24px;\n  margin: 0;\n  --padding-end: 0;\n  --padding-start: 10px;\n  letter-spacing: -0.3px;\n}\n.nike-fab[_ngcontent-%COMP%] {\n  --background: #111;\n  --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n}\n.nike-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ccff00;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%] {\n  --background: #fff;\n}\n.nike-fab.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #111;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=entrenador-entrenamientos.page.css.map */"] });
var EntrenadorEntrenamientosPage = _EntrenadorEntrenamientosPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenadorEntrenamientosPage, [{
    type: Component,
    args: [{ selector: "app-entrenador-entrenamientos", standalone: true, imports: [
      IonContent,
      CommonModule,
      FormsModule,
      IonSegment,
      IonSegmentButton,
      IonLabel,
      IonIcon,
      IonFabButton,
      IonSpinner,
      IonButton,
      IonRefresher,
      IonRefresherContent,
      IonFab
    ], template: `<ion-content [fullscreen]="true">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <!-- Hero Header -->
  <div class="header-nike">
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1 class="header-title">Mi Agenda</h1>
      <p class="header-sub">Sesiones programadas</p>
    </div>
  </div>

  <!-- Day Selector (Premium Tabs) -->
  <div class="segment-wrapper animate-up">
    <ion-segment scrollable [(ngModel)]="diaSeleccionado" mode="md" class="nike-segment-days">
      <ion-segment-button *ngFor="let d of dias" [value]="d.fecha">
        <ion-label>
          <span class="day-name">{{ d.nombre | slice:0:3 }}</span>
          <span class="day-date">{{ d.fecha | date:'dd' }}</span>
        </ion-label>
        <div *ngIf="d.data.length > 0" class="dot-indicator"></div>
      </ion-segment-button>
    </ion-segment>
  </div>

  <!-- Main Container -->
  <div class="dashboard-container">

    <!-- Loading State -->
    <div *ngIf="cargando" class="state-container animate-fade">
      <ion-spinner name="crescent"></ion-spinner>
      <p>Cargando agenda...</p>
    </div>

    <!-- Empty State -->
    <div *ngIf="!cargando && agendaActual.length === 0" class="state-container animate-up">
      <div class="empty-icon-box">
        <ion-icon name="fitness-outline"></ion-icon>
      </div>
      <h2>Agenda Libre</h2>
      <p>No tienes clases para este d\xEDa.</p>
    </div>

    <!-- Agenda List -->
    <div class="agenda-list" *ngIf="!cargando && agendaActual.length > 0">

      <div class="nike-card modern-card animate-up" *ngFor="let item of agendaActual; let i = index"
        [style.animation-delay]="(i * 0.05) + 's'">

        <!-- Left Colored Indicator -->
        <div class="card-timeline-indicator" [ngClass]="getEstadoText(item).toLowerCase()"></div>

        <div class="modern-card-content">
          <!-- Time and Status -->
          <div class="modern-card-header">
            <div class="time-block">
              <ng-container *ngIf="item.tipo === 'grupal'">
                <span class="main-time">{{ item.hora_inicio | slice:0:5 }}</span>
              </ng-container>
              <ng-container *ngIf="item.tipo !== 'grupal'">
                <span class="main-time">{{ item.hora_inicio | slice:0:5 }}</span>
                <span class="sub-time">a {{ item.hora_fin | slice:0:5 }}</span>
              </ng-container>
            </div>
            <div class="status-tag" [ngClass]="getEstadoText(item).toLowerCase()">
              {{ getEstadoText(item) }}
            </div>
          </div>

          <!-- Body -->
          <div class="modern-card-body">
            
            <!-- INDIVIDUAL / MULTI-PLAYER -->
            <div *ngIf="item.tipo !== 'grupal'" class="players-stack">
              <div *ngFor="let jugador of item.jugadores" class="player-modern">
                <div class="avatar-sm">
                  <img *ngIf="jugador.foto" [src]="jugador.foto" />
                  <span *ngIf="!jugador.foto">{{ jugador.nombre.charAt(0) }}</span>
                </div>
                <span class="player-name">{{ jugador.nombre }}</span>
              </div>
            </div>

            <!-- GRUPAL -->
            <div *ngIf="item.tipo === 'grupal'" class="grupal-modern">
              <div class="grupal-header">
                <div style="display: flex; gap: 6px; align-items: center;">
                  <span class="tipo-badge">\u{1F465} GRUPAL</span>
                  <span class="categoria">{{ item.categoria }}</span>
                </div>
                <span class="cupos-text">{{ item.cupos_ocupados }}/{{ item.capacidad_maxima }}</span>
              </div>
              
              <div class="inscritos-avatars" *ngIf="item.jugadores && item.jugadores.length > 0">
                <div *ngFor="let jugador of item.jugadores" class="mini-avatar">
                  <img [src]="jugador.foto" [alt]="jugador.nombre" />
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div class="tags-row">
              <span class="modern-tag" *ngIf="item.club_nombre">
                <ion-icon name="location"></ion-icon> {{ item.club_nombre }}
              </span>
              <span class="modern-tag outline">{{ item.pack_nombre }}</span>
            </div>
          </div>

          <!-- Footer (Cancel) -->
          <div class="modern-card-footer" *ngIf="(item.estado !== 'cancelado' || item.estado_grupo !== 'cancelado')">
            <ion-button fill="clear" color="danger" class="btn-cancel" (click)="confirmarCancelacion(item)">
              <ion-icon name="close-circle-outline" slot="start"></ion-icon>
              Cancelar
            </ion-button>
          </div>

        </div>
      </div>

    </div>

  </div>

  <!-- Back FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button class="nike-fab back-fab" (click)="goBack()">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>`, styles: ["/* src/app/pages/entrenador-entrenamientos/entrenador-entrenamientos.page.scss */\n.header-nike {\n  min-height: 240px;\n  padding-top: calc(50px + env(safe-area-inset-top));\n  padding-bottom: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n  margin-top: -60px;\n  width: 100%;\n  z-index: 0;\n  position: relative;\n  background: url(/assets/fondo-padel.png) center/cover no-repeat;\n  display: flex;\n  align-items: flex-end;\n  border-radius: 0 0 30px 30px;\n  overflow: hidden;\n}\n.players-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.players-container .player-profile-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 8px;\n  border-radius: 10px;\n  background-color: #fbfbfb;\n  border: 1px solid #f2f2f7;\n}\n.players-container .player-profile-row .avatar-circle {\n  width: 32px;\n  height: 32px;\n  background: #f0f0f0;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #555;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n  position: relative;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.players-container .player-profile-row .avatar-circle .player-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.players-container .player-profile-row .avatar-circle .initials {\n  z-index: 1;\n}\n.players-container .player-profile-row .player-details h3 {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: #111;\n  line-height: 1.2;\n}\n.header-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.8));\n  z-index: 1;\n}\n.header-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  color: white;\n}\n.header-content .header-title {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -1px;\n}\n.header-content .header-sub {\n  margin: 4px 0 0;\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: 500;\n}\n.segment-wrapper {\n  padding: 15px 20px 0;\n  margin-top: -35px;\n  position: relative;\n  z-index: 100;\n}\n.nike-segment-days {\n  --background: #ffffff;\n  border-radius: 20px;\n  padding: 6px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  height: 85px;\n}\n.nike-segment-days ion-segment-button {\n  --indicator-color: transparent;\n  --color: #8e8e93;\n  --color-checked: #111;\n  min-width: 60px;\n  border-radius: 14px;\n  transition: all 0.2s ease;\n}\n.nike-segment-days ion-segment-button ion-label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.nike-segment-days ion-segment-button .day-name {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.nike-segment-days ion-segment-button .day-date {\n  font-size: 20px;\n  font-weight: 800;\n}\n.nike-segment-days ion-segment-button.segment-button-checked {\n  background: #f2f2f7;\n  transform: scale(1.05);\n}\n.nike-segment-days .dot-indicator {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 6px;\n  height: 6px;\n  background: var(--ion-color-primary);\n  border-radius: 50%;\n}\n.dashboard-container {\n  padding: 25px 20px 100px;\n}\n.state-container {\n  text-align: center;\n  padding: 60px 40px;\n}\n.state-container ion-spinner {\n  --color: #111;\n  margin-bottom: 15px;\n}\n.state-container .empty-icon-box {\n  font-size: 40px;\n  color: #e5e5ea;\n  margin-bottom: 15px;\n}\n.state-container h2 {\n  font-size: 18px;\n  font-weight: 800;\n  color: #111;\n}\n.state-container p {\n  color: #8e8e93;\n  font-size: 14px;\n  margin-top: 6px;\n}\n.agenda-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.modern-card {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  position: relative;\n  border: none;\n  display: flex;\n  transition: transform 0.2s;\n}\n.modern-card:active {\n  transform: scale(0.98);\n}\n.modern-card .card-timeline-indicator {\n  width: 6px;\n  background: #f0f0f0;\n}\n.modern-card .card-timeline-indicator.pendiente {\n  background: #fbc02d;\n}\n.modern-card .card-timeline-indicator.reservado,\n.modern-card .card-timeline-indicator.activo,\n.modern-card .card-timeline-indicator.confirmada,\n.modern-card .card-timeline-indicator.confirmado {\n  background: #ccff00;\n}\n.modern-card .card-timeline-indicator.finalizado {\n  background: #111;\n}\n.modern-card .card-timeline-indicator.cancelado {\n  background: #ef5350;\n}\n.modern-card .modern-card-content {\n  flex: 1;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.modern-card .modern-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.modern-card .modern-card-header .time-block {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.modern-card .modern-card-header .time-block .main-time {\n  font-size: 20px;\n  font-weight: 900;\n  color: #111;\n  letter-spacing: -0.5px;\n}\n.modern-card .modern-card-header .time-block .sub-time {\n  font-size: 13px;\n  font-weight: 600;\n  color: #888;\n}\n.modern-card .modern-card-header .status-tag {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.modern-card .modern-card-header .status-tag.pendiente {\n  background: #fffde7;\n  color: #fbc02d;\n}\n.modern-card .modern-card-header .status-tag.reservado,\n.modern-card .modern-card-header .status-tag.activo,\n.modern-card .modern-card-header .status-tag.confirmada,\n.modern-card .modern-card-header .status-tag.confirmado {\n  background: #ccff00;\n  color: #000;\n}\n.modern-card .modern-card-header .status-tag.finalizado {\n  background: #f5f5f5;\n  color: #999;\n}\n.modern-card .modern-card-header .status-tag.cancelado {\n  background: #ffebee;\n  color: #ef5350;\n}\n.modern-card .modern-card-body .players-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.modern-card .modern-card-body .players-stack .player-modern {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modern-card .modern-card-body .players-stack .player-modern .avatar-sm {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 800;\n  color: #555;\n  overflow: hidden;\n}\n.modern-card .modern-card-body .players-stack .player-modern .avatar-sm img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.modern-card .modern-card-body .players-stack .player-modern .player-name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111;\n}\n.modern-card .modern-card-body .grupal-modern {\n  background: #fafafa;\n  border-radius: 12px;\n  padding: 10px;\n  border: 1px solid #f2f2f7;\n}\n.modern-card .modern-card-body .grupal-modern .grupal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.modern-card .modern-card-body .grupal-modern .grupal-header .tipo-badge {\n  font-size: 9px;\n  font-weight: 900;\n  color: #007aff;\n  background: #e5f1ff;\n  padding: 3px 6px;\n  border-radius: 4px;\n}\n.modern-card .modern-card-body .grupal-modern .grupal-header .categoria {\n  font-size: 11px;\n  font-weight: 700;\n  color: #333;\n}\n.modern-card .modern-card-body .grupal-modern .grupal-header .cupos-text {\n  font-size: 11px;\n  font-weight: 800;\n  color: #111;\n}\n.modern-card .modern-card-body .grupal-modern .inscritos-avatars {\n  display: flex;\n  align-items: center;\n}\n.modern-card .modern-card-body .grupal-modern .inscritos-avatars .mini-avatar {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  margin-left: -8px;\n  background: #ccc;\n  overflow: hidden;\n}\n.modern-card .modern-card-body .grupal-modern .inscritos-avatars .mini-avatar:first-child {\n  margin-left: 0;\n}\n.modern-card .modern-card-body .grupal-modern .inscritos-avatars .mini-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.modern-card .modern-card-body .tags-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 10px;\n}\n.modern-card .modern-card-body .tags-row .modern-tag {\n  background: #f4f4f5;\n  color: #555;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.modern-card .modern-card-body .tags-row .modern-tag ion-icon {\n  font-size: 12px;\n  color: #111;\n}\n.modern-card .modern-card-body .tags-row .modern-tag.outline {\n  background: transparent;\n  border: 1px solid #e5e5ea;\n  color: #333;\n}\n.modern-card .modern-card-footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-top: 1px dashed #f0f0f0;\n  padding-top: 10px;\n  margin-top: 4px;\n}\n.modern-card .modern-card-footer .btn-cancel {\n  --color: #ff3b30;\n  font-size: 11px;\n  font-weight: 800;\n  height: 24px;\n  margin: 0;\n  --padding-end: 0;\n  --padding-start: 10px;\n  letter-spacing: -0.3px;\n}\n.nike-fab {\n  --background: #111;\n  --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n}\n.nike-fab ion-icon {\n  font-size: 24px;\n  color: #ccff00;\n}\n.nike-fab.back-fab {\n  --background: #fff;\n}\n.nike-fab.back-fab ion-icon {\n  color: #111;\n}\n.animate-up {\n  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade {\n  animation: fadeIn 0.5s ease-out both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=entrenador-entrenamientos.page.css.map */\n"] }]
  }], () => [{ type: MysqlService }, { type: NotificationService }, { type: Router }, { type: AlertController }, { type: ToastController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrenadorEntrenamientosPage, { className: "EntrenadorEntrenamientosPage", filePath: "src/app/pages/entrenador-entrenamientos/entrenador-entrenamientos.page.ts", lineNumber: 59 });
})();
export {
  EntrenadorEntrenamientosPage
};
//# sourceMappingURL=entrenador-entrenamientos.page-ZYFTWU6G.js.map

import {
  HapticFeedbackService
} from "./chunk-U2YS67XA.js";
import "./chunk-2FGXCAFF.js";
import {
  PadelLoaderComponent
} from "./chunk-UYOLHWN7.js";
import {
  ActionSheetController,
  AlertController,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  IonToggle,
  LoadingController
} from "./chunk-5YKSH3EK.js";
import {
  addIcons,
  arrowBack,
  arrowForward,
  arrowForwardOutline,
  calendarOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  chevronDownOutline,
  chevronForwardOutline,
  chevronUpOutline,
  close,
  heart,
  heartOutline,
  informationCircleOutline,
  locationOutline,
  lockClosedOutline,
  logoWhatsapp,
  notificationsOutline,
  searchOutline,
  sendOutline,
  shareOutline,
  star,
  tennisballOutline,
  timeOutline,
  trophyOutline
} from "./chunk-KFN47MEP.js";
import {
  MysqlService
} from "./chunk-UJKQODRO.js";
import {
  environment
} from "./chunk-LEH7FWY4.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
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
  ɵɵpipeBind2,
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/pages/clubes-reservar/clubes-reservar.page.ts
function ClubesReservarPage_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ClubesReservarPage_div_1_div_29_Template_div_click_0_listener() {
      const club_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelectClub(club_r4));
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275element(2, "div", 30);
    \u0275\u0275elementStart(3, "ion-icon", 31);
    \u0275\u0275listener("click", function ClubesReservarPage_div_1_div_29_Template_ion_icon_click_3_listener($event) {
      const club_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavorite(club_r4, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33)(7, "span", 34);
    \u0275\u0275text(8, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 35);
    \u0275\u0275text(10, "$14.000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 36)(12, "p", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const club_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + club_r4.logoUrl + "), url(assets/fondo-cancha.png)");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", club_r4.isFavorite);
    \u0275\u0275property("name", club_r4.isFavorite ? "heart" : "heart-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(club_r4.nombre);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", club_r4.region, " \u2022 ", club_r4.comuna);
  }
}
function ClubesReservarPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h1");
    \u0275\u0275text(4, "B\xFAsqueda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "div", 9);
    \u0275\u0275element(7, "img", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12);
    \u0275\u0275element(10, "ion-icon", 13);
    \u0275\u0275elementStart(11, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ClubesReservarPage_div_1_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 15);
    \u0275\u0275element(13, "ion-icon", 16);
    \u0275\u0275elementStart(14, "ion-icon", 17);
    \u0275\u0275listener("click", function ClubesReservarPage_div_1_Template_ion_icon_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleShowOnlyFavorites());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 18)(16, "div", 19);
    \u0275\u0275listener("click", function ClubesReservarPage_div_1_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openRegionPicker());
    });
    \u0275\u0275element(17, "ion-icon", 20);
    \u0275\u0275text(18);
    \u0275\u0275element(19, "ion-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19);
    \u0275\u0275listener("click", function ClubesReservarPage_div_1_Template_div_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openComunaPicker());
    });
    \u0275\u0275element(21, "ion-icon", 22);
    \u0275\u0275text(22);
    \u0275\u0275element(23, "ion-icon", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "button", 24);
    \u0275\u0275listener("click", function ClubesReservarPage_div_1_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/jugador-partidos"]));
    });
    \u0275\u0275element(26, "ion-icon", 25);
    \u0275\u0275text(27, " MIS PARTIDOS ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 26);
    \u0275\u0275template(29, ClubesReservarPage_div_1_div_29_Template, 14, 8, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r1.userPhoto, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.showOnlyFavorites);
    \u0275\u0275property("name", ctx_r1.showOnlyFavorites ? "heart" : "heart-outline");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedRegion || "Regi\xF3n", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedComuna || "Comuna", " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.filteredClubes);
  }
}
function ClubesReservarPage_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_18_Template_div_click_0_listener() {
      const day_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelectDate(day_r7.fullDate));
    });
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedFecha === day_r7.fullDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r7.nombre.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r7.numero);
  }
}
function ClubesReservarPage_div_2_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_42_div_1_Template_div_click_0_listener() {
      const slot_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSelectSlot(slot_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.selectedSlot === slot_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatTime(slot_r9.hora), " ");
  }
}
function ClubesReservarPage_div_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, ClubesReservarPage_div_2_div_42_div_1_Template, 2, 3, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredHorarios);
  }
}
function ClubesReservarPage_div_2_app_padel_loader_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-padel-loader");
  }
}
function ClubesReservarPage_div_2_div_44_div_5_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_44_div_5_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setCategoryFilter("padel"));
    });
    \u0275\u0275text(1, " \u{1F3BE} P\xE1del ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.activeCategoryFilter === "padel");
  }
}
function ClubesReservarPage_div_2_div_44_div_5_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_44_div_5_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setCategoryFilter("juegos"));
    });
    \u0275\u0275text(1, " \u{1F3B1} Mesas & Juegos ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.activeCategoryFilter === "juegos");
  }
}
function ClubesReservarPage_div_2_div_44_div_5_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_44_div_5_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setCategoryFilter("amenities"));
    });
    \u0275\u0275text(1, " \u{1F356} Quinchos & Salones ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.activeCategoryFilter === "amenities");
  }
}
function ClubesReservarPage_div_2_div_44_div_5_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_44_div_5_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setCategoryFilter("equipamiento"));
    });
    \u0275\u0275text(1, " \u{1F916} Equipamiento ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.activeCategoryFilter === "equipamiento");
  }
}
function ClubesReservarPage_div_2_div_44_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "button", 76);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_44_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setCategoryFilter("all"));
    });
    \u0275\u0275text(2, " \u{1F3E2} Todos ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ClubesReservarPage_div_2_div_44_div_5_button_3_Template, 2, 2, "button", 77)(4, ClubesReservarPage_div_2_div_44_div_5_button_4_Template, 2, 2, "button", 77)(5, ClubesReservarPage_div_2_div_44_div_5_button_5_Template, 2, 2, "button", 77)(6, ClubesReservarPage_div_2_div_44_div_5_button_6_Template, 2, 2, "button", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeCategoryFilter === "all");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getCategoryCountInSlot(ctx_r1.selectedSlot, "padel") > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getCategoryCountInSlot(ctx_r1.selectedSlot, "juegos") > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getCategoryCountInSlot(ctx_r1.selectedSlot, "amenities") > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getCategoryCountInSlot(ctx_r1.selectedSlot, "equipamiento") > 0);
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_44_ng_container_7_div_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const c_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reservar(ctx_r1.selectedSlot, c_r16));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryMeta(c_r16).actionLabel, " ");
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275text(1, " OCUPADA ");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "span", 83)(4, "span", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h4", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 86)(11, "span", 87);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 88);
    \u0275\u0275text(14, " \u{1F9F1} Cristal Pro ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 89);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 90)(18, "div", 91)(19, "span", 92);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 93);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "span", 94);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, ClubesReservarPage_div_2_div_44_ng_container_7_div_1_button_27_Template, 2, 1, "button", 95)(28, ClubesReservarPage_div_2_div_44_ng_container_7_div_1_div_28_Template, 2, 0, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("disabled", !c_r16.disponible);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryMeta(c_r16).icono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryMeta(c_r16).badgeLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r16.cancha_nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r16.tipo && c_r16.tipo.toLowerCase().includes("indoor") ? "\u{1F3E2} Techada" : "\u2600\uFE0F Outdoor", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r16.superficie || "C\xE9sped Texturado");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(21, 14, ctx_r1.getCourtPrice(c_r16), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("($", \u0275\u0275pipeBind2(24, 17, ctx_r1.getCourtPrice(c_r16) / 4, "1.0-0"), "/jug)");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("peak", c_r16.es_horario_alto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r16.nombre_tarifa || (c_r16.es_horario_alto ? "\u26A1 Alto" : "\u{1F33F} Bajo"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.disponible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r16.disponible);
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275element(1, "ion-icon", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r16.capacidad, "p ");
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2022 ");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_12_span_2_Template, 2, 0, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.tipo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.tipo && c_r16.superficie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.superficie);
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2014 ");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275template(1, ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_13_span_1_Template, 2, 0, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.tipo || c_r16.superficie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.descripcion);
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const c_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reservar(ctx_r1.selectedSlot, c_r16));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.getCategoryMeta(c_r16).colorHex);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryMeta(c_r16).actionLabel, " ");
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275text(1, " OCUPADA ");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 81)(2, "div", 82)(3, "span", 100)(4, "span", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h4", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_10_Template, 3, 1, "span", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 102);
    \u0275\u0275template(12, ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_12_Template, 4, 3, "span", 62)(13, ClubesReservarPage_div_2_div_44_ng_container_7_div_2_span_13_Template, 3, 2, "span", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 90)(15, "div", 91)(16, "span", 104);
    \u0275\u0275text(17, "Arriendo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 92);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 94);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, ClubesReservarPage_div_2_div_44_ng_container_7_div_2_button_23_Template, 2, 3, "button", 105)(24, ClubesReservarPage_div_2_div_44_ng_container_7_div_2_div_24_Template, 2, 0, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("disabled", !c_r16.disponible);
    \u0275\u0275property("ngClass", "theme-" + (c_r16.categoria || "otro"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.getCategoryMeta(c_r16).colorHex)("background", ctx_r1.getCategoryMeta(c_r16).bgHex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryMeta(c_r16).icono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryMeta(c_r16).badgeLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r16.cancha_nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.capacidad);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r16.tipo || c_r16.superficie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.descripcion);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(20, 19, ctx_r1.getCourtPrice(c_r16), "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("peak", c_r16.es_horario_alto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r16.nombre_tarifa || (c_r16.es_horario_alto ? "\u26A1 Alto" : "\u{1F33F} Bajo"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.disponible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r16.disponible);
  }
}
function ClubesReservarPage_div_2_div_44_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubesReservarPage_div_2_div_44_ng_container_7_div_1_Template, 29, 20, "div", 78)(2, ClubesReservarPage_div_2_div_44_ng_container_7_div_2_Template, 25, 22, "div", 79);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCourt(c_r16));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isCourt(c_r16));
  }
}
function ClubesReservarPage_div_2_div_44_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1, " No hay espacios disponibles en esta categor\xEDa para la duraci\xF3n seleccionada. ");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 69);
    \u0275\u0275text(2, "Espacios e Instalaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 70);
    \u0275\u0275text(4, "Elige una pista de p\xE1del o arrienda mesas de juego, quinchos y zonas de ocio");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ClubesReservarPage_div_2_div_44_div_5_Template, 7, 6, "div", 71);
    \u0275\u0275elementStart(6, "div", 72);
    \u0275\u0275template(7, ClubesReservarPage_div_2_div_44_ng_container_7_Template, 3, 2, "ng-container", 73)(8, ClubesReservarPage_div_2_div_44_div_8_Template, 2, 0, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.hasAmenitiesInClub());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getFilteredCourtsForSlot(ctx_r1.selectedSlot));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFilteredCourtsForSlot(ctx_r1.selectedSlot).length === 0);
  }
}
function ClubesReservarPage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "div", 39)(3, "div", 40)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-icon", 41);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_Template_ion_icon_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite(ctx_r1.selectedClub));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 42);
    \u0275\u0275text(8);
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 43)(12, "div", 44);
    \u0275\u0275text(13, "Reservar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 45)(15, "div", 46);
    \u0275\u0275element(16, "ion-icon", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 48);
    \u0275\u0275template(18, ClubesReservarPage_div_2_div_18_Template, 5, 4, "div", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 50)(20, "div", 51)(21, "span", 52);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "span", 53);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "span", 54);
    \u0275\u0275text(27, " \u{1F3BE} Clima \xD3ptimo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 55)(29, "span", 56);
    \u0275\u0275text(30, "Duraci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 57)(32, "div", 58);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_Template_div_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDuration(60));
    });
    \u0275\u0275text(33, "60 Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 58);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDuration(90));
    });
    \u0275\u0275text(35, "90 Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 58);
    \u0275\u0275listener("click", function ClubesReservarPage_div_2_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDuration(120));
    });
    \u0275\u0275text(37, "120 Min");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 59)(39, "span");
    \u0275\u0275text(40, "Mostrar solo las horas disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "ion-toggle", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, ClubesReservarPage_div_2_div_42_Template, 2, 1, "div", 61)(43, ClubesReservarPage_div_2_app_padel_loader_43_Template, 1, 0, "app-padel-loader", 62)(44, ClubesReservarPage_div_2_div_44_Template, 9, 3, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r1.selectedClub.logoUrl + "), url(assets/fondo-cancha.png)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedClub.nombre);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedClub.isFavorite);
    \u0275\u0275property("name", ctx_r1.selectedClub.isFavorite ? "heart" : "heart-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedClub.direccion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedClub.comuna, ", ", ctx_r1.selectedClub.region);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.weekDays);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getWeatherSummary(ctx_r1.selectedFecha).icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getWeatherSummary(ctx_r1.selectedFecha).temp, " \u2022 ", ctx_r1.getWeatherSummary(ctx_r1.selectedFecha).desc);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.selectedDuration === 60);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedDuration === 90);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedDuration === 120);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.selectedSlot);
  }
}
function ClubesReservarPage_div_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.icono) || "\u{1F389}");
  }
}
function ClubesReservarPage_div_3_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 124);
  }
}
function ClubesReservarPage_div_3_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Tu cancha ha sido reservada con \xE9xito. Ya puedes invitar a tus amigos.");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Tu espacio de ocio ha sido arrendado con \xE9xito. Ya puedes coordinar con tus acompa\xF1antes.");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_div_11_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.lastReserva.icono, " ");
  }
}
function ClubesReservarPage_div_3_div_11_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "Especificaciones");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_div_11_span_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (Capacidad: ", ctx_r1.lastReserva.capacidad, " personas)");
  }
}
function ClubesReservarPage_div_3_div_11_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ClubesReservarPage_div_3_div_11_span_11_span_2_Template, 2, 1, "span", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.lastReserva.tipo, " ", ctx_r1.lastReserva.superficie ? "\u2022 " + ctx_r1.lastReserva.superficie : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva.capacidad);
  }
}
function ClubesReservarPage_div_3_div_11_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "Tipo de Reserva");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_div_11_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275text(1, "\u{1F393} Entrenamiento");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_div_11_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275text(1, "\u{1F3BE} Partido Regular");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_div_11_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, ctx_r1.lastReserva.precio, "1.0-0"));
  }
}
function ClubesReservarPage_div_3_div_11_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, ctx_r1.lastReserva.precio, "1.0-0"));
  }
}
function ClubesReservarPage_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2, "Club");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 127);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 126);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 127);
    \u0275\u0275template(8, ClubesReservarPage_div_3_div_11_span_8_Template, 2, 1, "span", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClubesReservarPage_div_3_div_11_span_10_Template, 2, 0, "span", 128)(11, ClubesReservarPage_div_3_div_11_span_11_Template, 3, 3, "span", 129)(12, ClubesReservarPage_div_3_div_11_span_12_Template, 2, 0, "span", 128)(13, ClubesReservarPage_div_3_div_11_span_13_Template, 2, 0, "span", 129)(14, ClubesReservarPage_div_3_div_11_span_14_Template, 2, 0, "span", 129);
    \u0275\u0275elementStart(15, "span", 126);
    \u0275\u0275text(16, "Tarifa Total");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ClubesReservarPage_div_3_div_11_span_17_Template, 3, 4, "span", 129)(18, ClubesReservarPage_div_3_div_11_span_18_Template, 3, 4, "span", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.lastReserva.club);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lastReserva.isCourt ? "Pista y Horario" : "Instalaci\xF3n y Horario");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.lastReserva.isCourt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.lastReserva.pista, " \u2022 ", ctx_r1.lastReserva.hora, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.lastReserva.isCourt && (ctx_r1.lastReserva.tipo || ctx_r1.lastReserva.superficie));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.lastReserva.isCourt && (ctx_r1.lastReserva.tipo || ctx_r1.lastReserva.superficie));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva.isCourt && ctx_r1.lastReserva.estado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva.isCourt && ctx_r1.lastReserva.estado === "Entrenamiento");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva.isCourt && ctx_r1.lastReserva.estado && ctx_r1.lastReserva.estado !== "Entrenamiento");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.lastReserva.isCourt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.lastReserva.isCourt);
  }
}
function ClubesReservarPage_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131)(2, "span", 132);
    \u0275\u0275text(3, "\u{1F465} Divisi\xF3n de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 133);
    \u0275\u0275text(5, "Calculadora");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 134)(7, "button", 135);
    \u0275\u0275listener("click", function ClubesReservarPage_div_3_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSplitCount(4));
    });
    \u0275\u0275text(8, " 4 Jugadores ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 135);
    \u0275\u0275listener("click", function ClubesReservarPage_div_3_div_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSplitCount(2));
    });
    \u0275\u0275text(10, " 2 (Singles) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 135);
    \u0275\u0275listener("click", function ClubesReservarPage_div_3_div_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSplitCount(1));
    });
    \u0275\u0275text(12, " 1 (Total) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 136)(14, "div", 137)(15, "span", 138);
    \u0275\u0275text(16, "Cuota por persona");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 139);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 140);
    \u0275\u0275listener("click", function ClubesReservarPage_div_3_div_12_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareWhatsAppPayment());
    });
    \u0275\u0275element(21, "ion-icon", 141);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Cobrar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.splitCount === 4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.splitCount === 2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.splitCount === 1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(19, 7, ctx_r1.getSplitAmount(), "1.0-0"));
  }
}
function ClubesReservarPage_div_3_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 142);
    \u0275\u0275listener("click", function ClubesReservarPage_div_3_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToEditMatch());
    });
    \u0275\u0275text(1, "EDITAR PARTIDO");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 142);
    \u0275\u0275listener("click", function ClubesReservarPage_div_3_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275text(1, "ENTENDIDO");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 143);
    \u0275\u0275listener("click", function ClubesReservarPage_div_3_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275text(1, "Volver al Inicio");
    \u0275\u0275elementEnd();
  }
}
function ClubesReservarPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112)(2, "button", 113);
    \u0275\u0275listener("click", function ClubesReservarPage_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275element(3, "ion-icon", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 115);
    \u0275\u0275template(5, ClubesReservarPage_div_3_span_5_Template, 2, 1, "span", 116)(6, ClubesReservarPage_div_3_ion_icon_6_Template, 1, 0, "ion-icon", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ClubesReservarPage_div_3_p_9_Template, 2, 0, "p", 62)(10, ClubesReservarPage_div_3_p_10_Template, 2, 0, "p", 62)(11, ClubesReservarPage_div_3_div_11_Template, 19, 12, "div", 118)(12, ClubesReservarPage_div_3_div_12_Template, 24, 10, "div", 119);
    \u0275\u0275elementStart(13, "div", 120);
    \u0275\u0275template(14, ClubesReservarPage_div_3_button_14_Template, 2, 0, "button", 121)(15, ClubesReservarPage_div_3_button_15_Template, 2, 0, "button", 121)(16, ClubesReservarPage_div_3_button_16_Template, 2, 0, "button", 122);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", (ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt) ? "var(--nike-neon)" : "#ede9fe");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt) ? "\xA1Reserva Lista!" : "\xA1Arriendo Confirmado!");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastReserva == null ? null : ctx_r1.lastReserva.isCourt);
  }
}
function ClubesReservarPage_div_4_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.bookingPreview.cancha.tipo.toLowerCase().includes("indoor") ? "\u{1F3E2} Indoor" : "\u2600\uFE0F Outdoor", " ");
  }
}
function ClubesReservarPage_div_4_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F9F1} ", (ctx_r1.bookingPreview.cancha == null ? null : ctx_r1.bookingPreview.cancha.cristal) || (ctx_r1.bookingPreview.cancha == null ? null : ctx_r1.bookingPreview.cancha.superficie), " ");
  }
}
function ClubesReservarPage_div_4_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F465} ", ctx_r1.bookingPreview.cancha.capacidad, " personas ");
  }
}
function ClubesReservarPage_div_4_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 177)(1, "label", 178);
    \u0275\u0275text(2, "Prop\xF3sito de la reserva:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 179)(4, "button", 180);
    \u0275\u0275listener("click", function ClubesReservarPage_div_4_div_42_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bookingPreview.tipoReserva = "Entrenamiento");
    });
    \u0275\u0275text(5, " \u{1F393} Entrenamiento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 180);
    \u0275\u0275listener("click", function ClubesReservarPage_div_4_div_42_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bookingPreview.tipoReserva = "Confirmada");
    });
    \u0275\u0275text(7, " \u{1F3BE} Partido Regular ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.bookingPreview.tipoReserva === "Entrenamiento");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.bookingPreview.tipoReserva === "Confirmada");
  }
}
function ClubesReservarPage_div_4_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181)(1, "div", 182);
    \u0275\u0275element(2, "ion-icon", 107);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Por jugador (4 personas)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 183);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "em");
    \u0275\u0275text(8, "/ jug.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.bookingPreview.precioJugadorFormatted, " ");
  }
}
function ClubesReservarPage_div_4_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Confirmar Reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 184);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.bookingPreview.precioTotalFormatted);
  }
}
function ClubesReservarPage_div_4_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 185);
    \u0275\u0275element(2, "ion-spinner", 186);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Confirmando reserva...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ClubesReservarPage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function ClubesReservarPage_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarBookingPreview());
    });
    \u0275\u0275elementStart(1, "div", 145);
    \u0275\u0275listener("click", function ClubesReservarPage_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(2, "div", 146);
    \u0275\u0275elementStart(3, "div", 147)(4, "div", 148)(5, "span", 149);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 150);
    \u0275\u0275text(8, "Resumen de Reserva");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 151);
    \u0275\u0275listener("click", function ClubesReservarPage_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarBookingPreview());
    });
    \u0275\u0275element(10, "ion-icon", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 152)(12, "div", 153)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 154)(16, "h3", 155);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 156);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 157);
    \u0275\u0275template(21, ClubesReservarPage_div_4_span_21_Template, 2, 1, "span", 158)(22, ClubesReservarPage_div_4_span_22_Template, 2, 1, "span", 158)(23, ClubesReservarPage_div_4_span_23_Template, 2, 1, "span", 158);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 159)(25, "div", 160)(26, "div", 161);
    \u0275\u0275element(27, "ion-icon", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 162)(29, "span", 126);
    \u0275\u0275text(30, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 127);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(33, "div", 163);
    \u0275\u0275elementStart(34, "div", 160)(35, "div", 161);
    \u0275\u0275element(36, "ion-icon", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 162)(38, "span", 126);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 127);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(42, ClubesReservarPage_div_4_div_42_Template, 8, 4, "div", 165);
    \u0275\u0275elementStart(43, "div", 166)(44, "div", 167)(45, "span", 168);
    \u0275\u0275text(46, "Total a Pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 169);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, ClubesReservarPage_div_4_div_49_Template, 9, 1, "div", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 171);
    \u0275\u0275element(51, "ion-icon", 172);
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Confirmaci\xF3n instant\xE1nea \u2022 Sin cobros ocultos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 173)(55, "button", 174);
    \u0275\u0275listener("click", function ClubesReservarPage_div_4_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmarBookingFromPreview());
    });
    \u0275\u0275template(56, ClubesReservarPage_div_4_ng_container_56_Template, 5, 1, "ng-container", 62)(57, ClubesReservarPage_div_4_ng_container_57_Template, 5, 0, "ng-container", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 175);
    \u0275\u0275listener("click", function ClubesReservarPage_div_4_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarBookingPreview());
    });
    \u0275\u0275text(59, " Volver y cambiar horario ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.bookingPreview.tipoHorario);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.bookingPreview.meta == null ? null : ctx_r1.bookingPreview.meta.icono) || "\u{1F3BE}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.bookingPreview.cancha == null ? null : ctx_r1.bookingPreview.cancha.cancha_nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedClub == null ? null : ctx_r1.selectedClub.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.bookingPreview.cancha == null ? null : ctx_r1.bookingPreview.cancha.tipo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.bookingPreview.cancha == null ? null : ctx_r1.bookingPreview.cancha.cristal) || (ctx_r1.bookingPreview.cancha == null ? null : ctx_r1.bookingPreview.cancha.superficie));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.bookingPreview.isCourtResource && (ctx_r1.bookingPreview.cancha == null ? null : ctx_r1.bookingPreview.cancha.capacidad));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getFormattedSelectedDate());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Horario (", ctx_r1.bookingPreview.duracion, " min)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.bookingPreview.horaInicio, " - ", ctx_r1.bookingPreview.horaFin, " hrs");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEntrenador && ctx_r1.bookingPreview.isCourtResource);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.bookingPreview.precioTotalFormatted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bookingPreview.isCourtResource);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingReserva);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmittingReserva);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmittingReserva);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmittingReserva);
  }
}
function ClubesReservarPage_ion_fab_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 187)(1, "ion-fab-button", 188);
    \u0275\u0275listener("click", function ClubesReservarPage_ion_fab_5_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(2, "ion-icon", 189);
    \u0275\u0275elementEnd()();
  }
}
var _ClubesReservarPage = class _ClubesReservarPage {
  setCategoryFilter(filter) {
    this.activeCategoryFilter = filter;
  }
  getCategoryMeta(cancha) {
    const cat = cancha?.categoria || "cancha_padel";
    const catalog = {
      cancha_padel: {
        id: "cancha_padel",
        nombre: "Cancha de P\xE1del",
        icono: "\u{1F3BE}",
        badgeLabel: "P\xE1del",
        actionLabel: "RESERVAR",
        grupo: "padel",
        colorHex: "#059669",
        bgHex: "#ecfdf5",
        isCourt: true
      },
      mesa_pool: {
        id: "mesa_pool",
        nombre: "Mesa de Pool / Billar",
        icono: "\u{1F3B1}",
        badgeLabel: "Pool",
        actionLabel: "ARRENDAR",
        grupo: "juegos",
        colorHex: "#8b5cf6",
        bgHex: "#ede9fe",
        isCourt: false
      },
      mesa_pingpong: {
        id: "mesa_pingpong",
        nombre: "Mesa de Ping Pong",
        icono: "\u{1F3D3}",
        badgeLabel: "Ping Pong",
        actionLabel: "ARRENDAR",
        grupo: "juegos",
        colorHex: "#0891b2",
        bgHex: "#cffafe",
        isCourt: false
      },
      quincho: {
        id: "quincho",
        nombre: "Quincho / Parrilla & BBQ",
        icono: "\u{1F356}",
        badgeLabel: "Quincho BBQ",
        actionLabel: "ARRENDAR",
        grupo: "amenities",
        colorHex: "#ea580c",
        bgHex: "#ffedd5",
        isCourt: false
      },
      zona_lounge: {
        id: "zona_lounge",
        nombre: "Zona Gamer & Lounge PS5",
        icono: "\u{1F3AE}",
        badgeLabel: "Zona Gamer",
        actionLabel: "ARRENDAR",
        grupo: "juegos",
        colorHex: "#db2777",
        bgHex: "#fce7f3",
        isCourt: false
      },
      futbolito: {
        id: "futbolito",
        nombre: "Futbolito / Taca Taca",
        icono: "\u26BD",
        badgeLabel: "Futbolito",
        actionLabel: "ARRENDAR",
        grupo: "juegos",
        colorHex: "#059669",
        bgHex: "#dcfce7",
        isCourt: false
      },
      maquina_lanzapelotas: {
        id: "maquina_lanzapelotas",
        nombre: "M\xE1quina Lanzapelotas",
        icono: "\u{1F916}",
        badgeLabel: "Lanzapelotas",
        actionLabel: "ARRENDAR",
        grupo: "equipamiento",
        colorHex: "#2563eb",
        bgHex: "#dbeafe",
        isCourt: false
      },
      cancha_pickleball: {
        id: "cancha_pickleball",
        nombre: "Cancha de Pickleball",
        icono: "\u{1F3D3}",
        badgeLabel: "Pickleball",
        actionLabel: "RESERVAR",
        grupo: "padel",
        colorHex: "#65a30d",
        bgHex: "#ecfccb",
        isCourt: true
      },
      sala_eventos: {
        id: "sala_eventos",
        nombre: "Sala Multiuso / Eventos",
        icono: "\u{1F389}",
        badgeLabel: "Eventos",
        actionLabel: "ARRENDAR",
        grupo: "amenities",
        colorHex: "#ca8a04",
        bgHex: "#fef9c3",
        isCourt: false
      },
      otro: {
        id: "otro",
        nombre: "Otro Recurso / Espacio",
        icono: "\u{1F4E6}",
        badgeLabel: "Espacio",
        actionLabel: "ARRENDAR",
        grupo: "amenities",
        colorHex: "#64748b",
        bgHex: "#f1f5f9",
        isCourt: false
      }
    };
    return catalog[cat] || catalog["otro"];
  }
  isCourt(cancha) {
    return this.getCategoryMeta(cancha).isCourt;
  }
  hasAmenitiesInClub() {
    if (!this.horarios || this.horarios.length === 0)
      return false;
    return this.horarios.some((slot) => slot.canchas && slot.canchas.some((c) => !this.isCourt(c)));
  }
  getCategoryCountInSlot(slot, grupo) {
    if (!slot || !slot.canchas)
      return 0;
    return slot.canchas.filter((c) => {
      if (this.getCourtPrice(c) <= 0)
        return false;
      const meta = this.getCategoryMeta(c);
      return meta.grupo === grupo;
    }).length;
  }
  getFilteredCourtsForSlot(slot) {
    if (!slot || !slot.canchas)
      return [];
    const list = slot.canchas.filter((c) => this.getCourtPrice(c) > 0);
    if (this.activeCategoryFilter === "all")
      return list;
    return list.filter((c) => {
      const meta = this.getCategoryMeta(c);
      return meta.grupo === this.activeCategoryFilter;
    });
  }
  setDuration(dur) {
    if (this.selectedDuration === dur)
      return;
    this.haptics.light();
    this.selectedDuration = dur;
    this.autoSelectFirstSlot();
  }
  constructor(mysql, router, route, alertCtrl, actionSheetCtrl, loadingCtrl, cdr, haptics) {
    this.mysql = mysql;
    this.router = router;
    this.route = route;
    this.alertCtrl = alertCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.loadingCtrl = loadingCtrl;
    this.cdr = cdr;
    this.haptics = haptics;
    this.clubes = [];
    this.horarios = [];
    this.misPartidos = [];
    this.selectedClub = null;
    this.selectedFecha = "";
    this.weekDays = [];
    this.activeSubTab = "reservar";
    this.activeMatchSubTab = "proximos";
    this.selectedSlot = null;
    this.showCourtModal = false;
    this.showSuccessModal = false;
    this.showConfirmModal = false;
    this.isSubmittingReserva = false;
    this.bookingPreview = null;
    this.showOccupied = false;
    this.apiBaseUrl = "https://api.padelmanager.cl";
    this.partidosProximos = [];
    this.partidosHistorial = [];
    this.paginatedHistorial = [];
    this.historyPage = 1;
    this.pageSize = 5;
    this.searchTerm = "";
    this.selectedRegion = "";
    this.selectedComuna = "";
    this.regiones = [];
    this.comunas = [];
    this.disponibilidadCache = /* @__PURE__ */ new Map();
    this.loading = true;
    this.selectedDuration = 90;
    this.activeCategoryFilter = "all";
    this.defaultClubImage = "assets/fondo-cancha.png";
    this.heroBackground = "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop";
    this.userPhoto = "assets/avatar.png";
    this.lastReserva = null;
    this.showOnlyFavorites = false;
    this.splitCount = 4;
    addIcons({
      locationOutline,
      searchOutline,
      calendarOutline,
      timeOutline,
      arrowForwardOutline,
      trophyOutline,
      star,
      arrowForward,
      arrowBack,
      heartOutline,
      heart,
      shareOutline,
      notificationsOutline,
      chevronDownOutline,
      chevronUpOutline,
      tennisballOutline,
      lockClosedOutline,
      close,
      sendOutline,
      informationCircleOutline,
      mapOutline: "map-outline",
      chevronForwardOutline,
      checkmarkCircleOutline,
      chevronBackOutline,
      logoWhatsapp
    });
  }
  ngOnInit() {
    this.selectedFecha = this.getLocalISODate(/* @__PURE__ */ new Date());
    this.generateWeekDays();
    this.loadClubes();
    this.loadUserProfile();
  }
  loadUserProfile() {
    const userId = Number(localStorage.getItem("userId"));
    if (userId) {
      this.mysql.getPerfil(userId).subscribe((res) => {
        if (res.success && res.user) {
          const region = res.direccion?.region || res.user?.region;
          if (region && !this.selectedRegion) {
            this.selectedRegion = region;
            this.updateComunas();
            this.cdr.detectChanges();
          }
          const photo = res.user.foto_perfil || res.user.foto;
          if (photo) {
            const cleanApiUrl = environment.apiUrl.replace("/dev", "").replace("/prd", "").replace("/torneos", "");
            this.userPhoto = photo.startsWith("http") ? photo : `${cleanApiUrl}/prd/${photo}`;
            this.cdr.detectChanges();
          }
        }
      });
    }
  }
  getLocalISODate(date) {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const d = date.getDate().toString().padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  generateWeekDays() {
    const days = ["DOM", "LUN", "MAR", "MI\xC9", "JUE", "VIE", "S\xC1B"];
    const result = [];
    const today = /* @__PURE__ */ new Date();
    for (let i = 0; i < 14; i++) {
      const d = /* @__PURE__ */ new Date();
      d.setDate(today.getDate() + i);
      result.push({
        nombre: days[d.getDay()],
        numero: d.getDate(),
        fullDate: this.getLocalISODate(d)
      });
    }
    this.weekDays = result;
  }
  loadClubes() {
    this.loading = true;
    this.mysql.getClubes().subscribe({
      next: (res) => {
        const favorites = JSON.parse(localStorage.getItem("fav_clubes") || "[]");
        this.clubes = res.filter((c) => Number(c.reservas_activas) === 1).map((c, index) => {
          if (c.logo && c.logo !== "null" && c.logo.trim() !== "") {
            const cleanApiUrl = environment.apiUrl.replace("/dev", "").replace("/prd", "").replace("/torneos", "");
            c.logoUrl = c.logo.startsWith("http") ? c.logo : `${cleanApiUrl}/prd/${c.logo}`;
          } else {
            c.logoUrl = this.defaultClubImage;
          }
          c.isFavorite = favorites.includes(c.id);
          return c;
        });
        const regionsSet = new Set(this.clubes.map((c) => c.region).filter((r) => !!r));
        this.regiones = Array.from(regionsSet).sort();
        this.updateComunas();
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  updateComunas() {
    if (this.selectedRegion) {
      const comunasSet = new Set(this.clubes.filter((c) => c.region === this.selectedRegion).map((c) => c.comuna).filter((com) => !!com));
      this.comunas = Array.from(comunasSet).sort();
    } else {
      this.comunas = [];
    }
  }
  openRegionPicker() {
    return __async(this, null, function* () {
      const inputs = this.regiones.map((r) => ({
        name: "region",
        type: "radio",
        label: r,
        value: r,
        checked: this.selectedRegion === r
      }));
      const alert = yield this.alertCtrl.create({
        header: "Seleccionar Regi\xF3n",
        inputs: [
          { name: "region", type: "radio", label: "Todas", value: "", checked: this.selectedRegion === "" },
          ...inputs
        ],
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Seleccionar",
            handler: (val) => {
              this.selectedRegion = val;
              this.selectedComuna = "";
              this.updateComunas();
            }
          }
        ],
        mode: "ios"
      });
      yield alert.present();
    });
  }
  openComunaPicker() {
    return __async(this, null, function* () {
      if (!this.selectedRegion) {
        const toast = yield this.alertCtrl.create({
          header: "Aviso",
          message: "Primero selecciona una regi\xF3n",
          buttons: ["OK"],
          mode: "ios"
        });
        yield toast.present();
        return;
      }
      const inputs = this.comunas.map((c) => ({
        name: "comuna",
        type: "radio",
        label: c,
        value: c,
        checked: this.selectedComuna === c
      }));
      const alert = yield this.alertCtrl.create({
        header: "Seleccionar Comuna",
        inputs: [
          { name: "comuna", type: "radio", label: "Todas", value: "", checked: this.selectedComuna === "" },
          ...inputs
        ],
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Seleccionar",
            handler: (val) => {
              this.selectedComuna = val;
            }
          }
        ],
        mode: "ios"
      });
      yield alert.present();
    });
  }
  toggleShowOnlyFavorites() {
    this.showOnlyFavorites = !this.showOnlyFavorites;
  }
  toggleFavorite(club, event) {
    if (event) {
      event.stopPropagation();
    }
    this.haptics.light();
    club.isFavorite = !club.isFavorite;
    let favorites = JSON.parse(localStorage.getItem("fav_clubes") || "[]");
    if (club.isFavorite) {
      if (!favorites.includes(club.id)) {
        favorites.push(club.id);
      }
    } else {
      favorites = favorites.filter((id) => id !== club.id);
    }
    localStorage.setItem("fav_clubes", JSON.stringify(favorites));
    this.cdr.detectChanges();
  }
  get filteredClubes() {
    let list = this.clubes;
    if (this.showOnlyFavorites) {
      list = list.filter((c) => c.isFavorite);
    }
    if (this.selectedRegion) {
      list = list.filter((c) => c.region === this.selectedRegion);
    }
    if (this.selectedComuna) {
      list = list.filter((c) => c.comuna === this.selectedComuna);
    }
    if (this.searchTerm && this.searchTerm.trim() !== "") {
      const term = this.searchTerm.toLowerCase().trim();
      list = list.filter((c) => c.nombre && c.nombre.toLowerCase().includes(term) || c.direccion && c.direccion.toLowerCase().includes(term));
    }
    return list;
  }
  goBack() {
    this.haptics.light();
    if (this.selectedClub) {
      this.selectedClub = null;
      this.showSuccessModal = false;
    } else {
      const role = localStorage.getItem("userRole");
      if (role === "entrenador") {
        this.router.navigate(["/entrenador-home"]);
      } else {
        this.router.navigate(["/jugador-home"]);
      }
    }
  }
  onSelectClub(club) {
    this.haptics.medium();
    this.selectedClub = club;
    this.activeSubTab = "reservar";
    this.showSuccessModal = false;
    this.loadDisponibilidad();
    this.prefetchUpcomingDays();
    this.loadMisPartidosClub();
  }
  loadMisPartidosClub() {
    if (!this.selectedClub)
      return;
    this.mysql.getMisPartidos(this.selectedClub.id).subscribe((res) => {
      this.partidosProximos = res.filter((p) => !p.jugado);
      this.partidosHistorial = res.filter((p) => p.jugado);
      this.resetHistoryPagination();
    });
  }
  resetHistoryPagination() {
    this.historyPage = 1;
    this.paginatedHistorial = this.partidosHistorial.slice(0, this.pageSize);
  }
  loadMoreHistory() {
    const nextBatch = this.partidosHistorial.slice(this.historyPage * this.pageSize, (this.historyPage + 1) * this.pageSize);
    this.paginatedHistorial = [...this.paginatedHistorial, ...nextBatch];
    this.historyPage++;
  }
  hasMoreHistory() {
    return this.paginatedHistorial.length < this.partidosHistorial.length;
  }
  onSelectSlot(slot) {
    return __async(this, null, function* () {
      this.haptics.light();
      this.selectedSlot = slot;
      this.showCourtModal = true;
    });
  }
  get filteredCourtsForModal() {
    if (!this.selectedSlot)
      return [];
    return this.showOccupied ? this.selectedSlot.canchas : this.selectedSlot.canchas.filter((c) => c.disponible);
  }
  onConfirmCourtSelection(cancha) {
    if (!cancha.disponible)
      return;
    this.showCourtModal = false;
    this.reservar(this.selectedSlot, cancha);
  }
  filterPastHoursIfToday(res) {
    if (!res || !Array.isArray(res))
      return [];
    const todayISO = this.getLocalISODate(/* @__PURE__ */ new Date());
    if (this.selectedFecha !== todayISO) {
      return res;
    }
    const now = /* @__PURE__ */ new Date();
    const hh = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    const currentTimeStr = `${hh}:${mm}:00`;
    return res.filter((slot) => {
      return slot.hora >= currentTimeStr;
    });
  }
  getCachedDisponibilidad(key) {
    if (this.disponibilidadCache.has(key)) {
      return this.disponibilidadCache.get(key);
    }
    try {
      const stored = sessionStorage.getItem(`disp_${key}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.timestamp && Date.now() - parsed.timestamp < 10 * 60 * 1e3 && Array.isArray(parsed.data)) {
          this.disponibilidadCache.set(key, parsed.data);
          return parsed.data;
        }
      }
    } catch (e) {
    }
    return null;
  }
  setCachedDisponibilidad(key, data) {
    if (!Array.isArray(data))
      return;
    this.disponibilidadCache.set(key, data);
    try {
      sessionStorage.setItem(`disp_${key}`, JSON.stringify({
        timestamp: Date.now(),
        data
      }));
    } catch (e) {
    }
  }
  prefetchUpcomingDays() {
    if (!this.selectedClub || !this.weekDays || this.weekDays.length === 0)
      return;
    const clubId = this.selectedClub.id;
    const daysToPrefetch = this.weekDays.map((d) => d.fullDate).filter((f) => f !== this.selectedFecha).slice(0, 4);
    daysToPrefetch.forEach((fecha, idx) => {
      const key = `${clubId}_${fecha}`;
      if (!this.getCachedDisponibilidad(key)) {
        setTimeout(() => {
          if (this.selectedClub && this.selectedClub.id === clubId) {
            this.mysql.getDisponibilidadClub(clubId, fecha).subscribe({
              next: (res) => {
                if (Array.isArray(res) && res.length > 0) {
                  this.setCachedDisponibilidad(key, res);
                }
              }
            });
          }
        }, (idx + 1) * 350);
      }
    });
  }
  loadDisponibilidad(forceRefresh = false) {
    if (!this.selectedClub || !this.selectedFecha)
      return;
    const cacheKey = `${this.selectedClub.id}_${this.selectedFecha}`;
    if (forceRefresh) {
      this.disponibilidadCache.delete(cacheKey);
      sessionStorage.removeItem(`disp_${cacheKey}`);
    }
    const cached = forceRefresh ? null : this.getCachedDisponibilidad(cacheKey);
    if (cached) {
      this.horarios = this.filterPastHoursIfToday(cached);
      this.autoSelectFirstSlot();
      this.loading = false;
      this.cdr.detectChanges();
      this.fetchAvailabilitySilent(cacheKey);
    } else {
      this.loading = true;
      this.selectedSlot = null;
      this.mysql.getDisponibilidadClub(this.selectedClub.id, this.selectedFecha).subscribe({
        next: (res) => {
          this.setCachedDisponibilidad(cacheKey, res);
          this.horarios = this.filterPastHoursIfToday(res);
          this.autoSelectFirstSlot();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
  fetchAvailabilitySilent(cacheKey) {
    if (!this.selectedClub || !this.selectedFecha)
      return;
    const clubId = this.selectedClub.id;
    const fecha = this.selectedFecha;
    this.mysql.getDisponibilidadClub(clubId, fecha).subscribe({
      next: (res) => {
        if (Array.isArray(res)) {
          this.setCachedDisponibilidad(cacheKey, res);
          if (this.selectedClub?.id === clubId && this.selectedFecha === fecha) {
            this.horarios = this.filterPastHoursIfToday(res);
            this.autoSelectFirstSlot();
            this.cdr.detectChanges();
          }
        }
      }
    });
  }
  autoSelectFirstSlot() {
    const slots = this.filteredHorarios;
    if (slots.length > 0) {
      const currentHora = this.selectedSlot?.hora;
      const sameSlot = slots.find((h) => h.hora === currentHora);
      if (sameSlot) {
        this.selectedSlot = sameSlot;
      } else {
        this.selectedSlot = slots[0];
      }
    } else {
      this.selectedSlot = null;
    }
  }
  onSelectDate(date) {
    if (this.selectedFecha === date)
      return;
    this.haptics.selectionChanged();
    this.selectedFecha = date;
    this.loadDisponibilidad();
    this.prefetchUpcomingDays();
  }
  toggleTimeSlot(slot) {
    slot.expanded = !slot.expanded;
  }
  getCourtPrice(cancha) {
    if (!cancha)
      return 0;
    const dur = this.selectedDuration;
    if (cancha.precio_slot_60 !== void 0 && cancha.precio_slot_60 !== null) {
      if (dur === 60)
        return Number(cancha.precio_slot_60 || 0);
      if (dur === 120)
        return Number(cancha.precio_slot_120 || 0);
      return Number(cancha.precio_slot_90 || 0);
    }
    const isAlto = cancha.es_horario_alto;
    if (dur === 60) {
      const pAlto = Number(cancha.precio_60_alto);
      return isAlto && pAlto > 0 ? pAlto : Number(cancha.precio_60 || 0);
    } else if (dur === 120) {
      const pAlto = Number(cancha.precio_120_alto);
      return isAlto && pAlto > 0 ? pAlto : Number(cancha.precio_120 || 0);
    } else {
      const pAlto = Number(cancha.precio_90_alto);
      return isAlto && pAlto > 0 ? pAlto : Number(cancha.precio_90 || 0);
    }
  }
  get isEntrenador() {
    const role = (localStorage.getItem("userRole") || "").toLowerCase();
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const userRol = (currentUser?.rol || "").toLowerCase();
    return role.includes("entrenador") || userRol.includes("entrenador") || role.includes("coach") || userRol.includes("coach");
  }
  getFormattedSelectedDate() {
    if (!this.selectedFecha)
      return "";
    const parts = this.selectedFecha.split("-");
    if (parts.length === 3) {
      const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      const days = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"];
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      return `${days[d.getDay()]}, ${d.getDate()} de ${months[d.getMonth()]}`;
    }
    return this.selectedFecha;
  }
  reservar(slot, cancha) {
    return __async(this, null, function* () {
      if (!cancha.disponible)
        return;
      this.haptics.heavy();
      const meta = this.getCategoryMeta(cancha);
      const isCourtResource = this.isCourt(cancha);
      const precioCalculado = this.getCourtPrice(cancha);
      const precioPorJugador = Math.round(precioCalculado / 4);
      const tipoHorario = cancha.nombre_tarifa || (cancha.es_horario_alto ? "\u26A1 Horario Alto" : "\u{1F33F} Horario Bajo");
      const precioTotalFormatted = "$" + Math.round(precioCalculado).toLocaleString("es-CL");
      const precioJugadorFormatted = "$" + precioPorJugador.toLocaleString("es-CL");
      const horaFin = this.calcularHoraFin(slot.hora, this.selectedDuration);
      this.bookingPreview = {
        cancha,
        slot,
        meta,
        isCourtResource,
        precioCalculado,
        precioPorJugador,
        precioTotalFormatted,
        precioJugadorFormatted,
        tipoHorario,
        horaInicio: slot.hora.slice(0, 5),
        horaFin: horaFin.slice(0, 5),
        duracion: this.selectedDuration,
        fecha: this.selectedFecha,
        tipoReserva: this.isEntrenador && isCourtResource ? "Entrenamiento" : "Confirmada"
      };
      this.showConfirmModal = true;
    });
  }
  confirmarBookingFromPreview() {
    if (!this.bookingPreview || this.isSubmittingReserva)
      return;
    this.haptics.heavy();
    const { slot, cancha, tipoReserva } = this.bookingPreview;
    this.confirmarReserva(slot, cancha, tipoReserva || "Confirmada");
  }
  cancelarBookingPreview() {
    if (this.isSubmittingReserva)
      return;
    this.haptics.light();
    this.showConfirmModal = false;
    this.bookingPreview = null;
  }
  calcularHoraFin(horaInicio, duracionMinutos) {
    const [hh, mm] = horaInicio.split(":").map(Number);
    let totalMinutes = hh * 60 + mm + duracionMinutos;
    const endH = Math.floor(totalMinutes / 60) % 24;
    const endM = totalMinutes % 60;
    return `${endH.toString().padStart(2, "0")}:${endM.toString().padStart(2, "0")}:00`;
  }
  confirmarReserva(slot, cancha, estado = "Confirmada") {
    return __async(this, null, function* () {
      const userId = Number(localStorage.getItem("userId"));
      const horaFin = this.calcularHoraFin(slot.hora, this.selectedDuration);
      const precioCalculado = this.getCourtPrice(cancha);
      const meta = this.getCategoryMeta(cancha);
      const payload = {
        club_id: this.selectedClub?.id || this.selectedClub?.club_id,
        cancha_id: cancha.cancha_id || cancha.id,
        usuario_id: userId,
        jugador_id: userId,
        fecha: this.selectedFecha,
        hora_inicio: slot.hora,
        hora_fin: horaFin,
        duracion: this.selectedDuration,
        precio: precioCalculado,
        estado
      };
      this.isSubmittingReserva = true;
      this.cdr.detectChanges();
      this.mysql.addReservaClub(payload).subscribe({
        next: (res) => __async(this, null, function* () {
          console.log("Reserva exitosa:", res);
          this.isSubmittingReserva = false;
          this.showConfirmModal = false;
          this.bookingPreview = null;
          this.haptics.success();
          this.lastReserva = {
            id: res.id || res.reserva_id,
            // Capture created ID
            club: this.selectedClub?.nombre,
            pista: cancha.cancha_nombre,
            hora: `${this.formatTime(slot.hora)}`,
            precio: precioCalculado,
            precioJugador: Math.round(precioCalculado / 4),
            tipoHorario: cancha.es_horario_alto ? "Horario Alto" : "Horario Bajo",
            estado,
            isCourt: meta.isCourt,
            categoria: cancha.categoria || "cancha_padel",
            icono: meta.icono,
            badgeLabel: meta.badgeLabel,
            capacidad: cancha.capacidad,
            descripcion: cancha.descripcion,
            superficie: cancha.superficie,
            tipo: cancha.tipo
          };
          this.showSuccessModal = true;
          this.cdr.detectChanges();
          this.loadDisponibilidad(true);
          this.loadMisPartidosClub();
        }),
        error: (err) => __async(this, null, function* () {
          this.isSubmittingReserva = false;
          this.loadDisponibilidad(true);
          this.cdr.detectChanges();
          const errAlert = yield this.alertCtrl.create({
            header: "Cancha No Disponible",
            message: err.error?.error || "No se pudo completar la reserva. El horario seleccionado ya no est\xE1 disponible.",
            buttons: ["OK"],
            mode: "ios"
          });
          yield errAlert.present();
        })
      });
    });
  }
  goToEditMatch() {
    if (this.lastReserva && this.lastReserva.id) {
      this.showSuccessModal = false;
      this.router.navigate(["/partido-detalle", this.lastReserva.id]);
    } else {
      this.closeSuccessModal();
    }
  }
  closeSuccessModal() {
    this.showSuccessModal = false;
    this.selectedClub = null;
    this.cdr.detectChanges();
  }
  formatTime(time) {
    return time.slice(0, 5);
  }
  hasAvailableInSlot(slot) {
    return slot.canchas.some((c) => c.disponible && this.getCourtPrice(c) > 0);
  }
  getCourtsWithPriceForSlot(slot) {
    if (!slot || !slot.canchas)
      return [];
    return slot.canchas.filter((c) => this.getCourtPrice(c) > 0);
  }
  get filteredHorarios() {
    if (!this.horarios)
      return [];
    return this.horarios.filter((slot) => this.hasAvailableInSlot(slot));
  }
  getSplitAmount() {
    if (!this.lastReserva?.precio)
      return 0;
    return Math.round(Number(this.lastReserva.precio) / (this.splitCount || 4));
  }
  setSplitCount(count) {
    this.haptics.light();
    this.splitCount = count;
  }
  shareWhatsAppPayment() {
    return __async(this, null, function* () {
      this.haptics.light();
      if (!this.lastReserva)
        return;
      const r = this.lastReserva;
      const cuota = this.getSplitAmount();
      const cuotaFormatted = "$" + cuota.toLocaleString("es-CL");
      const totalFormatted = "$" + Number(r.precio).toLocaleString("es-CL");
      const fechaDisplay = this.selectedFecha || "la fecha reservada";
      const text = `\u{1F3BE} *\xA1Pista lista en ${r.club}!* \u{1F525}

\u{1F4C5} *Fecha:* ${fechaDisplay}
\u23F0 *Horario:* ${r.hora}
\u{1F4CD} *Pista:* ${r.pista}

\u{1F4B0} *Total:* ${totalFormatted}
\u{1F465} *Cuota por jugador (${this.splitCount}p):* *${cuotaFormatted}*

\xA1Confirmen asistencia y recuerden transferir su parte! \u{1F680}`;
      if (navigator.share) {
        try {
          yield navigator.share({
            title: "Cobro de Cancha de P\xE1del",
            text
          });
        } catch (e) {
        }
      } else {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
      }
    });
  }
  getWeatherSummary(fecha) {
    return {
      temp: "22\xB0C",
      desc: "Cielo Despejado",
      icon: "\u2600\uFE0F",
      isOutdoorGood: true
    };
  }
  notifySlotLiberado(slot) {
    return __async(this, null, function* () {
      this.haptics.success();
      const alert = yield this.alertCtrl.create({
        header: "\u{1F514} Alerta de Horario",
        subHeader: `${this.formatTime(slot.hora)} hrs \u2022 ${this.selectedFecha}`,
        message: "\xA1Listo! Te avisaremos de inmediato si se cancela una reserva y se libera una pista en este horario.",
        buttons: ["OK"],
        mode: "ios"
      });
      yield alert.present();
    });
  }
  getHabitualClub() {
    if (!this.clubes || this.clubes.length === 0)
      return null;
    const favorites = JSON.parse(localStorage.getItem("fav_clubes") || "[]");
    if (favorites.length > 0) {
      const fav = this.clubes.find((c) => favorites.includes(c.id));
      if (fav)
        return fav;
    }
    return this.clubes[0] || null;
  }
};
_ClubesReservarPage.\u0275fac = function ClubesReservarPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubesReservarPage)(\u0275\u0275directiveInject(MysqlService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ActionSheetController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(HapticFeedbackService));
};
_ClubesReservarPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClubesReservarPage, selectors: [["app-clubes-reservar"]], decls: 6, vars: 6, consts: [[3, "fullscreen"], ["class", "animate-up", 4, "ngIf"], ["class", "success-overlay-pro animate-fade", 4, "ngIf"], ["class", "confirm-sheet-overlay animate-fade", 3, "click", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", "style", "margin-bottom: 5px; margin-right: 15px;", 4, "ngIf"], [1, "animate-up"], [1, "header-search-v5"], [1, "h-left"], [1, "h-right"], [1, "h-avatar-mini"], ["alt", "Avatar", 3, "src"], [1, "search-filters-container"], [1, "search-bar-v5"], ["name", "search-outline"], ["type", "text", "placeholder", "Busca tu club...", 3, "ngModelChange", "ngModel"], [1, "search-actions"], ["name", "send-outline"], [3, "click", "name"], [1, "quick-filters-row"], [1, "filter-pill", 3, "click"], ["name", "location-outline"], ["name", "chevron-down-outline"], ["name", "map-outline"], [1, "my-matches-btn-row", "animate-up"], [1, "nike-btn-outline-full", 3, "click"], ["name", "tennisball-outline"], [1, "club-discovery-list"], ["class", "club-card-v5 animate-up", 3, "click", 4, "ngFor", "ngForOf"], [1, "club-card-v5", "animate-up", 3, "click"], [1, "club-banner-wrap"], [1, "banner-overlay"], [1, "fav-btn", 3, "click", "name"], [1, "club-title-overlay"], [1, "price-badge"], [1, "p-label"], [1, "p-val"], [1, "club-body-v5"], [1, "club-loc"], [1, "detail-hero-v6"], [1, "detail-content-card"], [1, "club-info-header"], [1, "fav-icon-btn", 3, "click", "name"], [1, "address-text"], [1, "nike-tabs-v6"], [1, "tab-item", "active"], [1, "date-selector-row"], [1, "calendar-btn"], ["name", "calendar-outline"], [1, "dates-strip-v6"], ["class", "date-v6", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "weather-forecast-badge", 2, "display", "flex", "align-items", "center", "justify-content", "space-between", "background", "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)", "border", "1px solid #bae6fd", "border-radius", "14px", "padding", "9px 14px", "margin-bottom", "14px"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [2, "font-size", "18px"], [2, "font-size", "12px", "font-weight", "850", "color", "#0369a1"], [2, "background", "rgba(3, 105, 161, 0.12)", "color", "#0369a1", "font-size", "10.5px", "font-weight", "850", "padding", "3px 8px", "border-radius", "8px"], [1, "duration-selector-row"], [1, "ds-label"], [1, "ds-pills"], [1, "ds-pill", 3, "click"], [1, "filter-toggle-row"], ["mode", "ios", 3, "checked"], ["class", "time-grid-v6", 4, "ngIf"], [4, "ngIf"], [1, "date-v6", 3, "click"], [1, "d-name"], [1, "d-num"], [1, "time-grid-v6"], ["class", "time-item-v6", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "time-item-v6", 3, "click"], [1, "section-title-v6"], [1, "section-desc-v6"], ["class", "mobile-resource-filter-pills", 4, "ngIf"], [1, "court-list-v6"], [4, "ngFor", "ngForOf"], ["style", "text-align: center; padding: 25px; color: #8e8e93; font-size: 13px; font-weight: 700;", 4, "ngIf"], [1, "mobile-resource-filter-pills"], [1, "m-pill-btn", 3, "click"], ["class", "m-pill-btn", 3, "active", "click", 4, "ngIf"], ["class", "court-card-v7 animate-up is-court", 3, "disabled", 4, "ngIf"], ["class", "court-card-v7 amenity-card-v7 animate-up", 3, "ngClass", "disabled", 4, "ngIf"], [1, "court-card-v7", "animate-up", "is-court"], [1, "c-info-box"], [1, "c-top-line"], [1, "cat-pill-v7", "padel"], [1, "p-icon"], [1, "c-item-title"], [1, "c-specs-line", 2, "display", "flex", "align-items", "center", "gap", "6px", "flex-wrap", "wrap", "margin-top", "3px"], [2, "background", "#f1f5f9", "color", "#475569", "font-size", "10px", "font-weight", "800", "padding", "2px 6px", "border-radius", "6px"], [2, "background", "rgba(99, 102, 241, 0.1)", "color", "#6366f1", "font-size", "10px", "font-weight", "800", "padding", "2px 6px", "border-radius", "6px"], [2, "font-size", "11px", "color", "#64748b"], [1, "c-bottom-line"], [1, "c-price-wrapper"], [1, "c-price-main"], [1, "c-price-sub"], [1, "rate-badge-v7"], ["class", "c-action-btn-v7 padel-btn", 3, "click", 4, "ngIf"], ["class", "c-action-btn-v7 disabled-btn", 4, "ngIf"], [1, "c-action-btn-v7", "padel-btn", 3, "click"], [1, "c-action-btn-v7", "disabled-btn"], [1, "court-card-v7", "amenity-card-v7", "animate-up", 3, "ngClass"], [1, "cat-pill-v7"], ["class", "cap-pill-v7", 4, "ngIf"], [1, "c-specs-line", "single-truncate"], ["class", "desc-inline", 4, "ngIf"], [1, "c-rent-label"], ["class", "c-action-btn-v7 amenity-btn", 3, "background", "click", 4, "ngIf"], [1, "cap-pill-v7"], ["name", "people-outline"], [1, "desc-inline"], [1, "c-action-btn-v7", "amenity-btn", 3, "click"], [2, "text-align", "center", "padding", "25px", "color", "#8e8e93", "font-size", "13px", "font-weight", "700"], [1, "success-overlay-pro", "animate-fade"], [1, "success-card-pro", "animate-up"], ["type", "button", 1, "modal-close-x-btn", 3, "click"], ["name", "close-outline"], [1, "icon-wrap"], ["style", "font-size: 28px;", 4, "ngIf"], ["name", "checkmark-sharp", 4, "ngIf"], ["class", "res-summary-box", 4, "ngIf"], ["class", "split-calculator-box", 4, "ngIf"], [1, "action-btns"], ["class", "nike-btn-pro", 3, "click", 4, "ngIf"], ["class", "nike-btn-outline", 3, "click", 4, "ngIf"], [2, "font-size", "28px"], ["name", "checkmark-sharp"], [1, "res-summary-box"], [1, "s-label"], [1, "s-val"], ["class", "s-label", 4, "ngIf"], ["class", "s-val", 4, "ngIf"], [1, "split-calculator-box"], [1, "split-head"], [1, "s-title"], [1, "s-badge"], [1, "split-btn-grid"], ["type", "button", 1, "split-btn", 3, "click"], [1, "split-action-row"], [1, "split-amount-block"], [1, "label"], [1, "amount"], ["type", "button", 1, "whatsapp-share-btn", 3, "click"], ["name", "logo-whatsapp"], [1, "nike-btn-pro", 3, "click"], [1, "nike-btn-outline", 3, "click"], [1, "confirm-sheet-overlay", "animate-fade", 3, "click"], [1, "confirm-sheet-card", "animate-slide-up", 3, "click"], [1, "sheet-drag-handle"], [1, "sheet-header"], [1, "sheet-title-group"], [1, "sheet-badge-tag"], [1, "sheet-title"], ["type", "button", 1, "sheet-close-btn", 3, "click"], [1, "sheet-court-box"], [1, "court-icon-pill"], [1, "court-details"], [1, "court-name"], [1, "club-name"], [1, "court-chips-row"], ["class", "c-chip", 4, "ngIf"], [1, "sheet-schedule-card"], [1, "sched-item"], [1, "sched-icon-wrap"], [1, "sched-text"], [1, "sched-divider"], ["name", "time-outline"], ["class", "sheet-trainer-selector", 4, "ngIf"], [1, "sheet-price-box"], [1, "price-row", "total-row"], [1, "p-title"], [1, "p-amount"], ["class", "price-row split-highlight-row", 4, "ngIf"], [1, "sheet-guarantee-note"], ["name", "shield-checkmark-outline"], [1, "sheet-actions"], ["type", "button", 1, "sheet-btn-confirm", 3, "click", "disabled"], ["type", "button", 1, "sheet-btn-cancel", 3, "click", "disabled"], [1, "c-chip"], [1, "sheet-trainer-selector"], [1, "trainer-label"], [1, "trainer-pills"], ["type", "button", 1, "t-pill", 3, "click"], [1, "price-row", "split-highlight-row"], [1, "split-info"], [1, "split-amount"], [1, "btn-price-tag"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "gap", "8px", "width", "100%"], ["name", "crescent", 2, "width", "20px", "height", "20px", "color", "var(--nike-neon)"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 2, "margin-bottom", "5px", "margin-right", "15px"], [1, "back-fab", 3, "click"], ["name", "chevron-back-outline"]], template: function ClubesReservarPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0);
    \u0275\u0275template(1, ClubesReservarPage_div_1_Template, 30, 8, "div", 1)(2, ClubesReservarPage_div_2_Template, 45, 23, "div", 1)(3, ClubesReservarPage_div_3_Template, 17, 12, "div", 2)(4, ClubesReservarPage_div_4_Template, 60, 18, "div", 3)(5, ClubesReservarPage_ion_fab_5_Template, 3, 0, "ion-fab", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.selectedClub);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedClub);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showSuccessModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showConfirmModal && ctx.bookingPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showSuccessModal && !ctx.showConfirmModal);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IonContent,
  IonIcon,
  IonSpinner,
  IonFab,
  IonFabButton,
  IonToggle,
  PadelLoaderComponent,
  DecimalPipe
], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --nike-black: #000000;\n  --nike-white: #ffffff;\n  --nike-gray: #f8f8fa;\n  --nike-text-gray: #8e8e93;\n  --nike-neon: #ccff00;\n  --nike-border: #f1f1f7;\n  --nike-navy: #0f172a;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: var(--nike-black);\n  font-family: "Outfit", sans-serif;\n}\n.header-search-v5[_ngcontent-%COMP%] {\n  padding: 60px 25px 20px;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-search-v5[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 950;\n  letter-spacing: -1px;\n  text-transform: uppercase;\n}\n.header-search-v5[_ngcontent-%COMP%]   .h-avatar-mini[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid rgba(0, 0, 0, 0.05);\n}\n.header-search-v5[_ngcontent-%COMP%]   .h-avatar-mini[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.search-filters-container[_ngcontent-%COMP%] {\n  padding: 0 25px 20px;\n}\n.search-filters-container[_ngcontent-%COMP%]   .search-bar-v5[_ngcontent-%COMP%] {\n  background: var(--nike-gray);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  padding: 15px 20px;\n  gap: 12px;\n  margin-bottom: 20px;\n  border: 1px solid var(--nike-border);\n}\n.search-filters-container[_ngcontent-%COMP%]   .search-bar-v5[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--nike-black);\n  font-size: 20px;\n  opacity: 0.6;\n}\n.search-filters-container[_ngcontent-%COMP%]   .search-bar-v5[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-size: 15px;\n  font-weight: 600;\n  outline: none;\n}\n.search-filters-container[_ngcontent-%COMP%]   .search-bar-v5[_ngcontent-%COMP%]   .search-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.search-filters-container[_ngcontent-%COMP%]   .search-bar-v5[_ngcontent-%COMP%]   .search-actions[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.search-filters-container[_ngcontent-%COMP%]   .quick-filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding-bottom: 5px;\n}\n.search-filters-container[_ngcontent-%COMP%]   .quick-filters-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.search-filters-container[_ngcontent-%COMP%]   .quick-filters-row[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: #fff;\n  padding: 10px 18px;\n  border-radius: 14px;\n  font-size: 13px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.search-filters-container[_ngcontent-%COMP%]   .quick-filters-row[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--nike-neon);\n}\n.search-filters-container[_ngcontent-%COMP%]   .my-matches-btn-row[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.search-filters-container[_ngcontent-%COMP%]   .my-matches-btn-row[_ngcontent-%COMP%]   .nike-btn-outline-full[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border-radius: 16px;\n  border: 1px solid var(--nike-border);\n  background: transparent;\n  color: var(--nike-navy);\n  font-size: 13px;\n  font-weight: 950;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n}\n.search-filters-container[_ngcontent-%COMP%]   .my-matches-btn-row[_ngcontent-%COMP%]   .nike-btn-outline-full[_ngcontent-%COMP%]:active {\n  background: var(--nike-gray);\n  transform: scale(0.98);\n}\n.search-filters-container[_ngcontent-%COMP%]   .my-matches-btn-row[_ngcontent-%COMP%]   .nike-btn-outline-full[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--nike-navy);\n}\n.club-discovery-list[_ngcontent-%COMP%] {\n  padding: 10px 20px 120px;\n}\n.club-card-v5[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 30px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-banner-wrap[_ngcontent-%COMP%] {\n  height: 220px;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-banner-wrap[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 40%,\n      rgba(0, 0, 0, 0.7) 100%);\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-banner-wrap[_ngcontent-%COMP%]   .fav-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 24px;\n  color: #fff;\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-banner-wrap[_ngcontent-%COMP%]   .club-title-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  margin: 0;\n  color: #fff;\n  font-size: 26px;\n  font-weight: 950;\n  letter-spacing: -1px;\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-banner-wrap[_ngcontent-%COMP%]   .price-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  text-align: right;\n  color: #fff;\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-banner-wrap[_ngcontent-%COMP%]   .price-badge[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.8;\n  font-weight: 700;\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-banner-wrap[_ngcontent-%COMP%]   .price-badge[_ngcontent-%COMP%]   .p-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 950;\n  display: block;\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-body-v5[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.club-card-v5[_ngcontent-%COMP%]   .club-body-v5[_ngcontent-%COMP%]   .club-loc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n}\n.detail-hero-v6[_ngcontent-%COMP%] {\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.detail-content-card[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  background: white;\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: relative;\n  z-index: 10;\n  padding: 30px 25px 120px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .club-info-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 25px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .club-info-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 32px;\n  font-weight: 950;\n  letter-spacing: -1.5px;\n  color: var(--nike-navy);\n}\n.detail-content-card[_ngcontent-%COMP%]   .club-info-header[_ngcontent-%COMP%]   .fav-icon-btn[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--nike-navy);\n}\n.detail-content-card[_ngcontent-%COMP%]   .address-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  line-height: 1.5;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .nike-tabs-v6[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  border-bottom: 1px solid var(--nike-border);\n  margin-bottom: 30px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .nike-tabs-v6[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%] {\n  padding: 12px 5px;\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  border-bottom: 3px solid var(--nike-navy);\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%]   .calendar-btn[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 75px;\n  border: 1px solid var(--nike-border);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: var(--nike-navy);\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%]   .dates-strip-v6[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding: 5px 0;\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%]   .dates-strip-v6[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%]   .dates-strip-v6[_ngcontent-%COMP%]   .date-v6[_ngcontent-%COMP%] {\n  flex: 0 0 50px;\n  height: 75px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%]   .dates-strip-v6[_ngcontent-%COMP%]   .date-v6[_ngcontent-%COMP%]   .d-name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--nike-text-gray);\n  text-transform: uppercase;\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%]   .dates-strip-v6[_ngcontent-%COMP%]   .date-v6[_ngcontent-%COMP%]   .d-num[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 900;\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%]   .dates-strip-v6[_ngcontent-%COMP%]   .date-v6.active[_ngcontent-%COMP%]   .d-name[_ngcontent-%COMP%] {\n  color: var(--nike-navy);\n}\n.detail-content-card[_ngcontent-%COMP%]   .date-selector-row[_ngcontent-%COMP%]   .dates-strip-v6[_ngcontent-%COMP%]   .date-v6.active[_ngcontent-%COMP%]   .d-num[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: #fff;\n}\n.detail-content-card[_ngcontent-%COMP%]   .filter-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .filter-toggle-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.detail-content-card[_ngcontent-%COMP%]   .filter-toggle-row[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%] {\n  --handle-background: #fff;\n  --handle-background-checked: #fff;\n  --track-background-checked: var(--nike-navy);\n}\n.detail-content-card[_ngcontent-%COMP%]   .time-grid-v6[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  margin-bottom: 35px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .time-grid-v6[_ngcontent-%COMP%]   .time-item-v6[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border: 1px solid var(--nike-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.detail-content-card[_ngcontent-%COMP%]   .time-grid-v6[_ngcontent-%COMP%]   .time-item-v6.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: #fff;\n  border-color: var(--nike-navy);\n  transform: scale(1.1);\n  box-shadow: 0 5px 15px rgba(15, 23, 42, 0.2);\n}\n.detail-content-card[_ngcontent-%COMP%]   .section-title-v6[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin-bottom: 4px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .section-desc-v6[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .court-durations[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-top: 10px;\n}\n.detail-content-card[_ngcontent-%COMP%]   .court-durations[_ngcontent-%COMP%]   .dur-chip[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 6px;\n  background: var(--nike-gray);\n  border: 1px solid var(--nike-border);\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  transition: all 0.2s ease;\n}\n.detail-content-card[_ngcontent-%COMP%]   .court-durations[_ngcontent-%COMP%]   .dur-chip.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-color: var(--nike-navy);\n}\n.success-overlay-pro[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.85);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 1200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 410px;\n  max-height: calc(100vh - 28px);\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  border-radius: 28px;\n  padding: 20px 18px 18px;\n  text-align: center;\n  position: relative;\n  margin: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .modal-close-x-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 18px;\n  cursor: pointer;\n  z-index: 5;\n  transition: all 0.2s ease;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .modal-close-x-btn[_ngcontent-%COMP%]:active {\n  background: #e2e8f0;\n  transform: scale(0.92);\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background: var(--nike-neon);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 10px;\n  box-shadow: 0 4px 14px rgba(204, 255, 0, 0.35);\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--nike-navy);\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  margin: 0 0 4px;\n  color: var(--nike-navy);\n  text-transform: uppercase;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 12px;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .res-summary-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 10px 14px;\n  margin-bottom: 10px;\n  text-align: left;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .res-summary-box[_ngcontent-%COMP%]   .s-label[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 1px;\n  display: block;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .res-summary-box[_ngcontent-%COMP%]   .s-val[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  margin-bottom: 6px;\n  display: block;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .res-summary-box[_ngcontent-%COMP%]   .s-val[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 10px 12px;\n  margin-bottom: 12px;\n  text-align: left;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-head[_ngcontent-%COMP%]   .s-title[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 850;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-head[_ngcontent-%COMP%]   .s-badge[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  font-weight: 800;\n  color: #059669;\n  background: #ecfdf5;\n  padding: 1px 6px;\n  border-radius: 5px;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-btn-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 5px;\n  margin-bottom: 8px;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-btn-grid[_ngcontent-%COMP%]   .split-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #475569;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 5px 2px;\n  font-weight: 800;\n  font-size: 10.5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-btn-grid[_ngcontent-%COMP%]   .split-btn.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-color: var(--nike-navy);\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-action-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 6px 10px;\n  border: 1px solid #e2e8f0;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-action-row[_ngcontent-%COMP%]   .split-amount-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-action-row[_ngcontent-%COMP%]   .split-amount-block[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  color: #64748b;\n  font-weight: 700;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-action-row[_ngcontent-%COMP%]   .split-amount-block[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-action-row[_ngcontent-%COMP%]   .whatsapp-share-btn[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: white;\n  border: none;\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-weight: 850;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.25);\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .split-calculator-box[_ngcontent-%COMP%]   .split-action-row[_ngcontent-%COMP%]   .whatsapp-share-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]   .nike-btn-pro[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  padding: 13px 16px;\n  border-radius: 14px;\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  cursor: pointer;\n  transition: transform 0.15s ease;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]   .nike-btn-pro[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]   .nike-btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #64748b;\n  padding: 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n.success-overlay-pro[_ngcontent-%COMP%]   .success-card-pro[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]   .nike-btn-outline[_ngcontent-%COMP%]:active {\n  color: var(--nike-navy);\n}\n.back-fab[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --color: #000000;\n  --border-radius: 50%;\n  --box-shadow: 0 8px 25px rgba(0,0,0,0.12);\n  width: 60px;\n  height: 60px;\n}\n.back-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.animate-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_up {\n  from {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.search-actions[_ngcontent-%COMP%]   ion-icon.active[_ngcontent-%COMP%] {\n  color: #ff3b30 !important;\n  opacity: 1 !important;\n}\n.fav-btn.active[_ngcontent-%COMP%] {\n  color: #ff3b30 !important;\n  filter: drop-shadow(0 2px 5px rgba(255, 59, 48, 0.4));\n}\n.fav-icon-btn.active[_ngcontent-%COMP%] {\n  color: #ff3b30 !important;\n}\n.duration-selector-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 15px;\n  margin-bottom: 25px;\n  background: #f8f8fa;\n  border-radius: 16px;\n  padding: 10px 14px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.duration-selector-row[_ngcontent-%COMP%]   .ds-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--nike-navy, #0f172a);\n}\n.duration-selector-row[_ngcontent-%COMP%]   .ds-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.duration-selector-row[_ngcontent-%COMP%]   .ds-pills[_ngcontent-%COMP%]   .ds-pill[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 900;\n  color: #8e8e93;\n  padding: 6px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: transparent;\n}\n.duration-selector-row[_ngcontent-%COMP%]   .ds-pills[_ngcontent-%COMP%]   .ds-pill.active[_ngcontent-%COMP%] {\n  background: #000;\n  color: #CCFF00;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.court-price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 6px;\n  flex-wrap: wrap;\n}\n.court-price-row[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n}\n.court-price-row[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .c-price-total[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.court-price-row[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .c-price-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.court-price-row[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .c-price-per-player[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n}\n.court-price-row[_ngcontent-%COMP%]   .rate-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 6px;\n  background: #ecfdf5;\n  color: #059669;\n  border: 1px solid #a7f3d0;\n}\n.court-price-row[_ngcontent-%COMP%]   .rate-badge.peak[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fde68a;\n}\n.mobile-resource-filter-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  padding: 2px 0 10px 0;\n  margin-bottom: 6px;\n  scrollbar-width: none;\n}\n.mobile-resource-filter-pills[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.mobile-resource-filter-pills[_ngcontent-%COMP%]   .m-pill-btn[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 6px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 11.5px;\n  font-weight: 800;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n}\n.mobile-resource-filter-pills[_ngcontent-%COMP%]   .m-pill-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.mobile-resource-filter-pills[_ngcontent-%COMP%]   .m-pill-btn.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy, #0f172a);\n  color: var(--nike-neon, #ccff00);\n  border-color: var(--nike-navy, #0f172a);\n  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.15);\n}\n.court-list-v6[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-bottom: 25px;\n}\n.court-card-v7[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n}\n.court-card-v7.disabled[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  filter: grayscale(0.6);\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-info-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-top-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-top-line[_ngcontent-%COMP%]   .cat-pill-v7[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 6px;\n  border-radius: 6px;\n  font-size: 9.5px;\n  font-weight: 900;\n  letter-spacing: 0.2px;\n  line-height: 1.1;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-top-line[_ngcontent-%COMP%]   .cat-pill-v7[_ngcontent-%COMP%]   .p-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-top-line[_ngcontent-%COMP%]   .cat-pill-v7.padel[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n  border: 1px solid #a7f3d0;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-top-line[_ngcontent-%COMP%]   .c-item-title[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 950;\n  color: #0f172a;\n  letter-spacing: -0.3px;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-top-line[_ngcontent-%COMP%]   .cap-pill-v7[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 1.5px 5px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 800;\n  color: #475569;\n  white-space: nowrap;\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-top-line[_ngcontent-%COMP%]   .cap-pill-v7[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-specs-line[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.2;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-specs-line.single-truncate[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-specs-line[_ngcontent-%COMP%]   .desc-inline[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 500;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-bottom-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 1px;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-bottom-line[_ngcontent-%COMP%]   .c-price-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-bottom-line[_ngcontent-%COMP%]   .c-price-wrapper[_ngcontent-%COMP%]   .c-rent-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #64748b;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-bottom-line[_ngcontent-%COMP%]   .c-price-wrapper[_ngcontent-%COMP%]   .c-price-main[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 950;\n  color: #0f172a;\n  letter-spacing: -0.2px;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-bottom-line[_ngcontent-%COMP%]   .c-price-wrapper[_ngcontent-%COMP%]   .c-price-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #64748b;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-bottom-line[_ngcontent-%COMP%]   .rate-badge-v7[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  font-weight: 800;\n  padding: 1.5px 6px;\n  border-radius: 5px;\n  background: #ecfdf5;\n  color: #059669;\n  border: 1px solid #a7f3d0;\n  line-height: 1.1;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-bottom-line[_ngcontent-%COMP%]   .rate-badge-v7.peak[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fde68a;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-action-btn-v7[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  min-width: 82px;\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  white-space: nowrap;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  transition: transform 0.15s ease, opacity 0.15s ease;\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-action-btn-v7[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-action-btn-v7.padel-btn[_ngcontent-%COMP%] {\n  background: var(--nike-navy, #0f172a);\n  color: var(--nike-neon, #ccff00);\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-action-btn-v7.amenity-btn[_ngcontent-%COMP%] {\n  color: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.court-card-v7[_ngcontent-%COMP%]   .c-action-btn-v7.disabled-btn[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n  border: 1px solid #e2e8f0;\n  cursor: not-allowed;\n}\n.court-card-v7.amenity-card-v7.theme-mesa_pool[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #8b5cf6;\n  background:\n    linear-gradient(\n      90deg,\n      #faf5ff 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-quincho[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #f97316;\n  background:\n    linear-gradient(\n      90deg,\n      #fff7ed 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-mesa_pingpong[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #06b6d4;\n  background:\n    linear-gradient(\n      90deg,\n      #ecfeff 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-zona_lounge[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #ec4899;\n  background:\n    linear-gradient(\n      90deg,\n      #fdf2f8 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-futbolito[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #10b981;\n  background:\n    linear-gradient(\n      90deg,\n      #f0fdf4 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-maquina_lanzapelotas[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #3b82f6;\n  background:\n    linear-gradient(\n      90deg,\n      #eff6ff 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-sala_eventos[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #eab308;\n  background:\n    linear-gradient(\n      90deg,\n      #fefce8 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-cancha_pickleball[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #84cc16;\n  background:\n    linear-gradient(\n      90deg,\n      #f7fee7 0%,\n      #ffffff 35%);\n}\n.court-card-v7.is-court[_ngcontent-%COMP%] {\n  border-left: 3.5px solid #059669;\n  background:\n    linear-gradient(\n      90deg,\n      #f0fdf4 0%,\n      #ffffff 35%);\n}\n.confirm-sheet-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.72);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 1100;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 0;\n}\n@media (min-width: 600px) {\n  .confirm-sheet-overlay[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 24px;\n  }\n}\n.confirm-sheet-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 440px;\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  padding: 16px 24px 32px;\n  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.25);\n  position: relative;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@media (min-width: 600px) {\n  .confirm-sheet-card[_ngcontent-%COMP%] {\n    border-radius: 32px;\n    padding: 28px;\n    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);\n  }\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-drag-handle[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 0 auto 16px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 18px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-header[_ngcontent-%COMP%]   .sheet-title-group[_ngcontent-%COMP%]   .sheet-badge-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 10px;\n  border-radius: 8px;\n  margin-bottom: 6px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-header[_ngcontent-%COMP%]   .sheet-title-group[_ngcontent-%COMP%]   .sheet-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-header[_ngcontent-%COMP%]   .sheet-close-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-header[_ngcontent-%COMP%]   .sheet-close-btn[_ngcontent-%COMP%]:active {\n  background: #e2e8f0;\n  transform: scale(0.92);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-court-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 14px 16px;\n  margin-bottom: 14px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-court-box[_ngcontent-%COMP%]   .court-icon-pill[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 16px;\n  background: var(--nike-navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-court-box[_ngcontent-%COMP%]   .court-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-court-box[_ngcontent-%COMP%]   .court-details[_ngcontent-%COMP%]   .court-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin: 0 0 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-court-box[_ngcontent-%COMP%]   .court-details[_ngcontent-%COMP%]   .club-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-court-box[_ngcontent-%COMP%]   .court-details[_ngcontent-%COMP%]   .court-chips-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-court-box[_ngcontent-%COMP%]   .court-details[_ngcontent-%COMP%]   .court-chips-row[_ngcontent-%COMP%]   .c-chip[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-schedule-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 12px 16px;\n  margin-bottom: 14px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-schedule-card[_ngcontent-%COMP%]   .sched-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-schedule-card[_ngcontent-%COMP%]   .sched-item[_ngcontent-%COMP%]   .sched-icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--nike-navy);\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-schedule-card[_ngcontent-%COMP%]   .sched-item[_ngcontent-%COMP%]   .sched-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-schedule-card[_ngcontent-%COMP%]   .sched-item[_ngcontent-%COMP%]   .sched-text[_ngcontent-%COMP%]   .s-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-schedule-card[_ngcontent-%COMP%]   .sched-item[_ngcontent-%COMP%]   .sched-text[_ngcontent-%COMP%]   .s-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  color: var(--nike-navy);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-schedule-card[_ngcontent-%COMP%]   .sched-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #e2e8f0;\n  margin: 0 10px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-trainer-selector[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px dashed #cbd5e1;\n  border-radius: 16px;\n  padding: 12px 14px;\n  margin-bottom: 14px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-trainer-selector[_ngcontent-%COMP%]   .trainer-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 850;\n  color: #64748b;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-trainer-selector[_ngcontent-%COMP%]   .trainer-pills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-trainer-selector[_ngcontent-%COMP%]   .trainer-pills[_ngcontent-%COMP%]   .t-pill[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  padding: 9px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 850;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-trainer-selector[_ngcontent-%COMP%]   .trainer-pills[_ngcontent-%COMP%]   .t-pill.active[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-color: var(--nike-navy);\n  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.15);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border-radius: 20px;\n  padding: 16px 18px;\n  color: #ffffff;\n  margin-bottom: 12px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%]   .price-row.total-row[_ngcontent-%COMP%]   .p-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%]   .price-row.total-row[_ngcontent-%COMP%]   .p-amount[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 950;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%]   .price-row.split-highlight-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%]   .price-row.split-highlight-row[_ngcontent-%COMP%]   .split-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 750;\n  color: #cbd5e1;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%]   .price-row.split-highlight-row[_ngcontent-%COMP%]   .split-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--nike-neon);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%]   .price-row.split-highlight-row[_ngcontent-%COMP%]   .split-amount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--nike-neon);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-price-box[_ngcontent-%COMP%]   .price-row.split-highlight-row[_ngcontent-%COMP%]   .split-amount[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 700;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-guarantee-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 750;\n  color: #059669;\n  margin-bottom: 18px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-guarantee-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%]   .sheet-btn-confirm[_ngcontent-%COMP%] {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border: none;\n  padding: 16px 20px;\n  border-radius: 18px;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.25);\n  transition: all 0.2s ease;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%]   .sheet-btn-confirm[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.15);\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%]   .sheet-btn-confirm[_ngcontent-%COMP%]   .btn-price-tag[_ngcontent-%COMP%] {\n  background: rgba(204, 255, 0, 0.15);\n  color: var(--nike-neon);\n  padding: 4px 10px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 950;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%]   .sheet-btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  padding: 10px;\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.confirm-sheet-card[_ngcontent-%COMP%]   .sheet-actions[_ngcontent-%COMP%]   .sheet-btn-cancel[_ngcontent-%COMP%]:active {\n  color: var(--nike-navy);\n}\n.animate-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease-out both;\n}\n.animate-slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=clubes-reservar.page.css.map */'] });
var ClubesReservarPage = _ClubesReservarPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClubesReservarPage, [{
    type: Component,
    args: [{ selector: "app-clubes-reservar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonIcon,
      IonButton,
      IonSegment,
      IonSegmentButton,
      IonSpinner,
      IonFab,
      IonFabButton,
      IonToggle,
      PadelLoaderComponent
    ], template: `<ion-content [fullscreen]="true">
  
  <!-- 1. DISCOVERY VIEW (LIST) -->
  <div *ngIf="!selectedClub" class="animate-up">
    <div class="header-search-v5">
      <div class="h-left">
        <h1>B\xFAsqueda</h1>
      </div>
      <div class="h-right">
        <div class="h-avatar-mini">
          <img [src]="userPhoto" alt="Avatar">
        </div>
      </div>
    </div>

    <div class="search-filters-container">
      <div class="search-bar-v5">
        <ion-icon name="search-outline"></ion-icon>
        <input type="text" [(ngModel)]="searchTerm" placeholder="Busca tu club...">
        <div class="search-actions">
          <ion-icon name="send-outline"></ion-icon>
          <ion-icon [name]="showOnlyFavorites ? 'heart' : 'heart-outline'" 
                    [class.active]="showOnlyFavorites" 
                    (click)="toggleShowOnlyFavorites()">
          </ion-icon>
        </div>
      </div>

      <div class="quick-filters-row">
        <div class="filter-pill" (click)="openRegionPicker()">
          <ion-icon name="location-outline"></ion-icon>
          {{ selectedRegion || 'Regi\xF3n' }} <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div class="filter-pill" (click)="openComunaPicker()">
          <ion-icon name="map-outline"></ion-icon>
          {{ selectedComuna || 'Comuna' }} <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>

      <div class="my-matches-btn-row animate-up">
        <button class="nike-btn-outline-full" (click)="router.navigate(['/jugador-partidos'])">
          <ion-icon name="tennisball-outline"></ion-icon>
          MIS PARTIDOS
        </button>
      </div>
    </div>

    <div class="club-discovery-list">
      <div class="club-card-v5 animate-up" 
           *ngFor="let club of filteredClubes" 
           (click)="onSelectClub(club)">
        <div class="club-banner-wrap" [style.background-image]="'url(' + club.logoUrl + '), url(assets/fondo-cancha.png)'">
          <div class="banner-overlay"></div>
          <ion-icon [name]="club.isFavorite ? 'heart' : 'heart-outline'" 
                    [class.active]="club.isFavorite" 
                    class="fav-btn" 
                    (click)="toggleFavorite(club, $event)">
          </ion-icon>
          <h2 class="club-title-overlay">{{ club.nombre }}</h2>
          <div class="price-badge">
            <span class="p-label">Desde</span>
            <span class="p-val">$14.000</span>
          </div>
        </div>
        <div class="club-body-v5">
          <p class="club-loc">{{ club.region }} \u2022 {{ club.comuna }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. NEW DETAIL VIEW (PLAYTOMIC V6) -->
  <div *ngIf="selectedClub" class="animate-up">
    <!-- HERO IMAGE -->
    <div class="detail-hero-v6" [style.background-image]="'url(' + selectedClub.logoUrl + '), url(assets/fondo-cancha.png)'"></div>

    <div class="detail-content-card">
        <!-- CLUB HEADER -->
        <div class="club-info-header">
            <h2>{{ selectedClub.nombre }}</h2>
            <ion-icon [name]="selectedClub.isFavorite ? 'heart' : 'heart-outline'" 
                      [class.active]="selectedClub.isFavorite" 
                      class="fav-icon-btn" 
                      (click)="toggleFavorite(selectedClub)">
            </ion-icon>
        </div>
        <p class="address-text">{{ selectedClub.direccion }}<br>{{ selectedClub.comuna }}, {{ selectedClub.region }}</p>

        <!-- NIKE TABS -->
        <div class="nike-tabs-v6">
            <div class="tab-item active">Reservar</div>
        </div>

        <!-- DATE SELECTOR -->
        <div class="date-selector-row">
            <div class="calendar-btn">
                <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div class="dates-strip-v6">
                <div class="date-v6" 
                     *ngFor="let day of weekDays" 
                     [class.active]="selectedFecha === day.fullDate"
                     (click)="onSelectDate(day.fullDate)">
                    <span class="d-name">{{ day.nombre.slice(0,3) }}</span>
                    <div class="d-num">{{ day.numero }}</div>
                </div>
            </div>
        </div>

        <!-- WEATHER FORECAST CALLOUT -->
        <div class="weather-forecast-badge" style="display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 1px solid #bae6fd; border-radius: 14px; padding: 9px 14px; margin-bottom: 14px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px;">{{ getWeatherSummary(selectedFecha).icon }}</span>
            <div>
              <span style="font-size: 12px; font-weight: 850; color: #0369a1;">{{ getWeatherSummary(selectedFecha).temp }} \u2022 {{ getWeatherSummary(selectedFecha).desc }}</span>
            </div>
          </div>
          <span style="background: rgba(3, 105, 161, 0.12); color: #0369a1; font-size: 10.5px; font-weight: 850; padding: 3px 8px; border-radius: 8px;">
            \u{1F3BE} Clima \xD3ptimo
          </span>
        </div>

        <!-- DURATION SELECTOR V6 -->
        <div class="duration-selector-row">
            <span class="ds-label">Duraci\xF3n:</span>
            <div class="ds-pills">
                <div class="ds-pill" [class.active]="selectedDuration === 60" (click)="setDuration(60)">60 Min</div>
                <div class="ds-pill" [class.active]="selectedDuration === 90" (click)="setDuration(90)">90 Min</div>
                <div class="ds-pill" [class.active]="selectedDuration === 120" (click)="setDuration(120)">120 Min</div>
            </div>
        </div>

        <!-- FILTER TOGGLE -->
        <div class="filter-toggle-row">
            <span>Mostrar solo las horas disponibles</span>
            <ion-toggle [checked]="true" mode="ios"></ion-toggle>
        </div>

        <!-- CIRCULAR HOURS (SMALLER) -->
        <div class="time-grid-v6" *ngIf="!loading">
            <div class="time-item-v6" 
                 *ngFor="let slot of filteredHorarios"
                 [class.active]="selectedSlot === slot"
                 (click)="onSelectSlot(slot)">
                {{ formatTime(slot.hora) }}
            </div>
        </div>

        <app-padel-loader *ngIf="loading"></app-padel-loader>

        <!-- COURT & AMENITY LIST -->
        <div *ngIf="!loading && selectedSlot">
            <h3 class="section-title-v6">Espacios e Instalaciones</h3>
            <p class="section-desc-v6">Elige una pista de p\xE1del o arrienda mesas de juego, quinchos y zonas de ocio</p>
            
            <!-- Category Filter Pills -->
            <div class="mobile-resource-filter-pills" *ngIf="hasAmenitiesInClub()">
                <button class="m-pill-btn" [class.active]="activeCategoryFilter === 'all'" (click)="setCategoryFilter('all')">
                    \u{1F3E2} Todos
                </button>
                <button class="m-pill-btn" *ngIf="getCategoryCountInSlot(selectedSlot, 'padel') > 0" [class.active]="activeCategoryFilter === 'padel'" (click)="setCategoryFilter('padel')">
                    \u{1F3BE} P\xE1del
                </button>
                <button class="m-pill-btn" *ngIf="getCategoryCountInSlot(selectedSlot, 'juegos') > 0" [class.active]="activeCategoryFilter === 'juegos'" (click)="setCategoryFilter('juegos')">
                    \u{1F3B1} Mesas & Juegos
                </button>
                <button class="m-pill-btn" *ngIf="getCategoryCountInSlot(selectedSlot, 'amenities') > 0" [class.active]="activeCategoryFilter === 'amenities'" (click)="setCategoryFilter('amenities')">
                    \u{1F356} Quinchos & Salones
                </button>
                <button class="m-pill-btn" *ngIf="getCategoryCountInSlot(selectedSlot, 'equipamiento') > 0" [class.active]="activeCategoryFilter === 'equipamiento'" (click)="setCategoryFilter('equipamiento')">
                    \u{1F916} Equipamiento
                </button>
            </div>

            <div class="court-list-v6">
                <ng-container *ngFor="let c of getFilteredCourtsForSlot(selectedSlot)">
                    
                    <!-- CASO 1: PISTAS DE P\xC1DEL / PICKLEBALL (Ultra-Compact Line Item) -->
                    <div class="court-card-v7 animate-up is-court" 
                         *ngIf="isCourt(c)"
                         [class.disabled]="!c.disponible">
                        <div class="c-info-box">
                            <!-- Fila 1: Badge + T\xEDtulo -->
                            <div class="c-top-line">
                                <span class="cat-pill-v7 padel">
                                    <span class="p-icon">{{ getCategoryMeta(c).icono }}</span>
                                    <span>{{ getCategoryMeta(c).badgeLabel }}</span>
                                </span>
                                <h4 class="c-item-title">{{ c.cancha_nombre }}</h4>
                            </div>
                            
                            <!-- Fila 2: Subt\xEDtulo Specs & Badges Indoor/Outdoor -->
                            <p class="c-specs-line" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 3px;">
                                <span style="background: #f1f5f9; color: #475569; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 6px;">
                                  {{ (c.tipo && c.tipo.toLowerCase().includes('indoor')) ? '\u{1F3E2} Techada' : '\u2600\uFE0F Outdoor' }}
                                </span>
                                <span style="background: rgba(99, 102, 241, 0.1); color: #6366f1; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 6px;">
                                  \u{1F9F1} Cristal Pro
                                </span>
                                <span style="font-size: 11px; color: #64748b;">{{ c.superficie || 'C\xE9sped Texturado' }}</span>
                            </p>
                            
                            <!-- Fila 3: Precios y Tarifa -->
                            <div class="c-bottom-line">
                                <div class="c-price-wrapper">
                                    <span class="c-price-main">\${{ getCourtPrice(c) | number:'1.0-0' }}</span>
                                    <span class="c-price-sub">(\${{ (getCourtPrice(c) / 4) | number:'1.0-0' }}/jug)</span>
                                </div>
                                <span class="rate-badge-v7" [class.peak]="c.es_horario_alto">
                                    {{ c.nombre_tarifa || (c.es_horario_alto ? '\u26A1 Alto' : '\u{1F33F} Bajo') }}
                                </span>
                            </div>
                        </div>
                        
                        <button class="c-action-btn-v7 padel-btn" 
                                *ngIf="c.disponible" 
                                (click)="reservar(selectedSlot, c)">
                            {{ getCategoryMeta(c).actionLabel }}
                        </button>
                        <div class="c-action-btn-v7 disabled-btn" *ngIf="!c.disponible">
                            OCUPADA
                        </div>
                    </div>

                    <!-- CASO 2: MESAS DE JUEGO & AMENITIES (Pool, Ping Pong, Quincho, Lounge, etc.) -->
                    <div class="court-card-v7 amenity-card-v7 animate-up" 
                         *ngIf="!isCourt(c)"
                         [ngClass]="'theme-' + (c.categoria || 'otro')"
                         [class.disabled]="!c.disponible">
                        
                        <div class="c-info-box">
                            <!-- Fila 1: Badge Categor\xEDa + Nombre + Capacidad -->
                            <div class="c-top-line">
                                <span class="cat-pill-v7" 
                                      [style.color]="getCategoryMeta(c).colorHex" 
                                      [style.background]="getCategoryMeta(c).bgHex">
                                    <span class="p-icon">{{ getCategoryMeta(c).icono }}</span>
                                    <span>{{ getCategoryMeta(c).badgeLabel }}</span>
                                </span>
                                <h4 class="c-item-title">{{ c.cancha_nombre }}</h4>
                                <span class="cap-pill-v7" *ngIf="c.capacidad">
                                    <ion-icon name="people-outline"></ion-icon>{{ c.capacidad }}p
                                </span>
                            </div>

                            <!-- Fila 2: Specs & Descripci\xF3n en 1 sola l\xEDnea con truncado -->
                            <p class="c-specs-line single-truncate">
                                <span *ngIf="c.tipo || c.superficie">{{ c.tipo }}<span *ngIf="c.tipo && c.superficie"> \u2022 </span>{{ c.superficie }}</span>
                                <span *ngIf="c.descripcion" class="desc-inline"><span *ngIf="c.tipo || c.superficie"> \u2014 </span>{{ c.descripcion }}</span>
                            </p>

                            <!-- Fila 3: Precio Arriendo y Tarifa -->
                            <div class="c-bottom-line">
                                <div class="c-price-wrapper">
                                    <span class="c-rent-label">Arriendo:</span>
                                    <span class="c-price-main">\${{ getCourtPrice(c) | number:'1.0-0' }}</span>
                                </div>
                                <span class="rate-badge-v7" [class.peak]="c.es_horario_alto">
                                    {{ c.nombre_tarifa || (c.es_horario_alto ? '\u26A1 Alto' : '\u{1F33F} Bajo') }}
                                </span>
                            </div>
                        </div>
                        
                        <button class="c-action-btn-v7 amenity-btn" 
                                *ngIf="c.disponible" 
                                [style.background]="getCategoryMeta(c).colorHex"
                                (click)="reservar(selectedSlot, c)">
                            {{ getCategoryMeta(c).actionLabel }}
                        </button>
                        <div class="c-action-btn-v7 disabled-btn" *ngIf="!c.disponible">
                            OCUPADA
                        </div>
                    </div>

                </ng-container>

                <div *ngIf="getFilteredCourtsForSlot(selectedSlot).length === 0" style="text-align: center; padding: 25px; color: #8e8e93; font-size: 13px; font-weight: 700;">
                    No hay espacios disponibles en esta categor\xEDa para la duraci\xF3n seleccionada.
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- SUCCESS MODAL PREMIUM (Con Divisi\xF3n de Pago & WhatsApp) -->
  <div class="success-overlay-pro animate-fade" *ngIf="showSuccessModal">
    <div class="success-card-pro animate-up">
        <!-- Close X Button -->
        <button type="button" class="modal-close-x-btn" (click)="closeSuccessModal()">
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="icon-wrap" [style.background]="lastReserva?.isCourt ? 'var(--nike-neon)' : '#ede9fe'">
            <span style="font-size: 28px;" *ngIf="!lastReserva?.isCourt">{{ lastReserva?.icono || '\u{1F389}' }}</span>
            <ion-icon name="checkmark-sharp" *ngIf="lastReserva?.isCourt"></ion-icon>
        </div>
        <h2>{{ lastReserva?.isCourt ? '\xA1Reserva Lista!' : '\xA1Arriendo Confirmado!' }}</h2>
        <p *ngIf="lastReserva?.isCourt">Tu cancha ha sido reservada con \xE9xito. Ya puedes invitar a tus amigos.</p>
        <p *ngIf="!lastReserva?.isCourt">Tu espacio de ocio ha sido arrendado con \xE9xito. Ya puedes coordinar con tus acompa\xF1antes.</p>
        
        <div class="res-summary-box" *ngIf="lastReserva">
            <span class="s-label">Club</span>
            <span class="s-val">{{ lastReserva.club }}</span>
            
            <span class="s-label">{{ lastReserva.isCourt ? 'Pista y Horario' : 'Instalaci\xF3n y Horario' }}</span>
            <span class="s-val">
                <span *ngIf="!lastReserva.isCourt">{{ lastReserva.icono }} </span>
                {{ lastReserva.pista }} \u2022 {{ lastReserva.hora }}
            </span>

            <span class="s-label" *ngIf="!lastReserva.isCourt && (lastReserva.tipo || lastReserva.superficie)">Especificaciones</span>
            <span class="s-val" *ngIf="!lastReserva.isCourt && (lastReserva.tipo || lastReserva.superficie)">
                {{ lastReserva.tipo }} {{ lastReserva.superficie ? '\u2022 ' + lastReserva.superficie : '' }}
                <span *ngIf="lastReserva.capacidad"> (Capacidad: {{ lastReserva.capacidad }} personas)</span>
            </span>

            <span class="s-label" *ngIf="lastReserva.isCourt && lastReserva.estado">Tipo de Reserva</span>
            <span class="s-val" *ngIf="lastReserva.isCourt && lastReserva.estado === 'Entrenamiento'">\u{1F393} Entrenamiento</span>
            <span class="s-val" *ngIf="lastReserva.isCourt && lastReserva.estado && lastReserva.estado !== 'Entrenamiento'">\u{1F3BE} Partido Regular</span>
            
            <span class="s-label">Tarifa Total</span>
            <span class="s-val" *ngIf="lastReserva.isCourt">\${{ lastReserva.precio | number:'1.0-0' }}</span>
            <span class="s-val" *ngIf="!lastReserva.isCourt">\${{ lastReserva.precio | number:'1.0-0' }}</span>
        </div>

        <!-- CALCULADORA DE CUOTAS POR JUGADOR -->
        <div class="split-calculator-box" *ngIf="lastReserva?.isCourt">
            <div class="split-head">
                <span class="s-title">\u{1F465} Divisi\xF3n de Pago</span>
                <span class="s-badge">Calculadora</span>
            </div>
            
            <div class="split-btn-grid">
                <button type="button" class="split-btn" [class.active]="splitCount === 4" (click)="setSplitCount(4)">
                    4 Jugadores
                </button>
                <button type="button" class="split-btn" [class.active]="splitCount === 2" (click)="setSplitCount(2)">
                    2 (Singles)
                </button>
                <button type="button" class="split-btn" [class.active]="splitCount === 1" (click)="setSplitCount(1)">
                    1 (Total)
                </button>
            </div>

            <div class="split-action-row">
                <div class="split-amount-block">
                    <span class="label">Cuota por persona</span>
                    <span class="amount">\${{ getSplitAmount() | number:'1.0-0' }}</span>
                </div>
                <button type="button" class="whatsapp-share-btn" (click)="shareWhatsAppPayment()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <span>Cobrar</span>
                </button>
            </div>
        </div>

        <div class="action-btns">
            <button class="nike-btn-pro" (click)="goToEditMatch()" *ngIf="lastReserva?.isCourt">EDITAR PARTIDO</button>
            <button class="nike-btn-pro" (click)="closeSuccessModal()" *ngIf="!lastReserva?.isCourt">ENTENDIDO</button>
            <button class="nike-btn-outline" (click)="closeSuccessModal()" *ngIf="lastReserva?.isCourt">Volver al Inicio</button>
        </div>
    </div>
  </div>

  <!-- MODAL / BOTTOM SHEET DE CONFIRMACI\xD3N DE RESERVA -->
  <div class="confirm-sheet-overlay animate-fade" *ngIf="showConfirmModal && bookingPreview" (click)="cancelarBookingPreview()">
    <div class="confirm-sheet-card animate-slide-up" (click)="$event.stopPropagation()">
      
      <!-- Drag handle -->
      <div class="sheet-drag-handle"></div>

      <!-- Header -->
      <div class="sheet-header">
        <div class="sheet-title-group">
          <span class="sheet-badge-tag">{{ bookingPreview.tipoHorario }}</span>
          <h2 class="sheet-title">Resumen de Reserva</h2>
        </div>
        <button type="button" class="sheet-close-btn" (click)="cancelarBookingPreview()">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <!-- Court / Space Info Hero Box -->
      <div class="sheet-court-box">
        <div class="court-icon-pill">
          <span>{{ bookingPreview.meta?.icono || '\u{1F3BE}' }}</span>
        </div>
        <div class="court-details">
          <h3 class="court-name">{{ bookingPreview.cancha?.cancha_nombre }}</h3>
          <p class="club-name">{{ selectedClub?.nombre }}</p>
          <div class="court-chips-row">
            <span class="c-chip" *ngIf="bookingPreview.cancha?.tipo">
              {{ bookingPreview.cancha.tipo.toLowerCase().includes('indoor') ? '\u{1F3E2} Indoor' : '\u2600\uFE0F Outdoor' }}
            </span>
            <span class="c-chip" *ngIf="bookingPreview.cancha?.cristal || bookingPreview.cancha?.superficie">
              \u{1F9F1} {{ bookingPreview.cancha?.cristal || bookingPreview.cancha?.superficie }}
            </span>
            <span class="c-chip" *ngIf="!bookingPreview.isCourtResource && bookingPreview.cancha?.capacidad">
              \u{1F465} {{ bookingPreview.cancha.capacidad }} personas
            </span>
          </div>
        </div>
      </div>

      <!-- Schedule & Date Card -->
      <div class="sheet-schedule-card">
        <div class="sched-item">
          <div class="sched-icon-wrap">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div class="sched-text">
            <span class="s-label">Fecha</span>
            <span class="s-val">{{ getFormattedSelectedDate() }}</span>
          </div>
        </div>
        <div class="sched-divider"></div>
        <div class="sched-item">
          <div class="sched-icon-wrap">
            <ion-icon name="time-outline"></ion-icon>
          </div>
          <div class="sched-text">
            <span class="s-label">Horario ({{ bookingPreview.duracion }} min)</span>
            <span class="s-val">{{ bookingPreview.horaInicio }} - {{ bookingPreview.horaFin }} hrs</span>
          </div>
        </div>
      </div>

      <!-- Trainer Purpose Selector (Only for Coaches on Court) -->
      <div class="sheet-trainer-selector" *ngIf="isEntrenador && bookingPreview.isCourtResource">
        <label class="trainer-label">Prop\xF3sito de la reserva:</label>
        <div class="trainer-pills">
          <button type="button" 
                  class="t-pill" 
                  [class.active]="bookingPreview.tipoReserva === 'Entrenamiento'"
                  (click)="bookingPreview.tipoReserva = 'Entrenamiento'">
            \u{1F393} Entrenamiento
          </button>
          <button type="button" 
                  class="t-pill" 
                  [class.active]="bookingPreview.tipoReserva === 'Confirmada'"
                  (click)="bookingPreview.tipoReserva = 'Confirmada'">
            \u{1F3BE} Partido Regular
          </button>
        </div>
      </div>

      <!-- Price Breakdown Box -->
      <div class="sheet-price-box">
        <div class="price-row total-row">
          <span class="p-title">Total a Pagar</span>
          <span class="p-amount">{{ bookingPreview.precioTotalFormatted }}</span>
        </div>
        <div class="price-row split-highlight-row" *ngIf="bookingPreview.isCourtResource">
          <div class="split-info">
            <ion-icon name="people-outline"></ion-icon>
            <span>Por jugador (4 personas)</span>
          </div>
          <span class="split-amount">{{ bookingPreview.precioJugadorFormatted }} <em>/ jug.</em></span>
        </div>
      </div>

      <!-- Guarantee note -->
      <div class="sheet-guarantee-note">
        <ion-icon name="shield-checkmark-outline"></ion-icon>
        <span>Confirmaci\xF3n instant\xE1nea \u2022 Sin cobros ocultos</span>
      </div>

      <!-- Action Buttons with Inline Loading State -->
      <div class="sheet-actions">
        <button type="button" class="sheet-btn-confirm" [disabled]="isSubmittingReserva" (click)="confirmarBookingFromPreview()">
          <ng-container *ngIf="!isSubmittingReserva">
            <span>Confirmar Reserva</span>
            <span class="btn-price-tag">{{ bookingPreview.precioTotalFormatted }}</span>
          </ng-container>
          <ng-container *ngIf="isSubmittingReserva">
            <span style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;">
              <ion-spinner name="crescent" style="width: 20px; height: 20px; color: var(--nike-neon);"></ion-spinner>
              <span>Confirmando reserva...</span>
            </span>
          </ng-container>
        </button>
        <button type="button" class="sheet-btn-cancel" [disabled]="isSubmittingReserva" (click)="cancelarBookingPreview()">
          Volver y cambiar horario
        </button>
      </div>

    </div>
  </div>

  <!-- FLOATING BACK BUTTON (GENERAL PATTERN) -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed" style="margin-bottom: 5px; margin-right: 15px;" *ngIf="!showSuccessModal && !showConfirmModal">
    <ion-fab-button (click)="goBack()" class="back-fab">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/clubes-reservar/clubes-reservar.page.scss */\n:host {\n  --nike-black: #000000;\n  --nike-white: #ffffff;\n  --nike-gray: #f8f8fa;\n  --nike-text-gray: #8e8e93;\n  --nike-neon: #ccff00;\n  --nike-border: #f1f1f7;\n  --nike-navy: #0f172a;\n}\nion-content {\n  --background: #fff;\n  --color: var(--nike-black);\n  font-family: "Outfit", sans-serif;\n}\n.header-search-v5 {\n  padding: 60px 25px 20px;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-search-v5 h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 950;\n  letter-spacing: -1px;\n  text-transform: uppercase;\n}\n.header-search-v5 .h-avatar-mini {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid rgba(0, 0, 0, 0.05);\n}\n.header-search-v5 .h-avatar-mini img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.search-filters-container {\n  padding: 0 25px 20px;\n}\n.search-filters-container .search-bar-v5 {\n  background: var(--nike-gray);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  padding: 15px 20px;\n  gap: 12px;\n  margin-bottom: 20px;\n  border: 1px solid var(--nike-border);\n}\n.search-filters-container .search-bar-v5 ion-icon {\n  color: var(--nike-black);\n  font-size: 20px;\n  opacity: 0.6;\n}\n.search-filters-container .search-bar-v5 input {\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-size: 15px;\n  font-weight: 600;\n  outline: none;\n}\n.search-filters-container .search-bar-v5 .search-actions {\n  display: flex;\n  gap: 12px;\n}\n.search-filters-container .search-bar-v5 .search-actions ion-icon {\n  opacity: 0.8;\n}\n.search-filters-container .quick-filters-row {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding-bottom: 5px;\n}\n.search-filters-container .quick-filters-row::-webkit-scrollbar {\n  display: none;\n}\n.search-filters-container .quick-filters-row .filter-pill {\n  background: var(--nike-navy);\n  color: #fff;\n  padding: 10px 18px;\n  border-radius: 14px;\n  font-size: 13px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.search-filters-container .quick-filters-row .filter-pill ion-icon {\n  font-size: 16px;\n  color: var(--nike-neon);\n}\n.search-filters-container .my-matches-btn-row {\n  margin-top: 15px;\n}\n.search-filters-container .my-matches-btn-row .nike-btn-outline-full {\n  width: 100%;\n  padding: 16px;\n  border-radius: 16px;\n  border: 1px solid var(--nike-border);\n  background: transparent;\n  color: var(--nike-navy);\n  font-size: 13px;\n  font-weight: 950;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n}\n.search-filters-container .my-matches-btn-row .nike-btn-outline-full:active {\n  background: var(--nike-gray);\n  transform: scale(0.98);\n}\n.search-filters-container .my-matches-btn-row .nike-btn-outline-full ion-icon {\n  font-size: 18px;\n  color: var(--nike-navy);\n}\n.club-discovery-list {\n  padding: 10px 20px 120px;\n}\n.club-card-v5 {\n  background: white;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 30px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n}\n.club-card-v5 .club-banner-wrap {\n  height: 220px;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n}\n.club-card-v5 .club-banner-wrap .banner-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 40%,\n      rgba(0, 0, 0, 0.7) 100%);\n}\n.club-card-v5 .club-banner-wrap .fav-btn {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 24px;\n  color: #fff;\n}\n.club-card-v5 .club-banner-wrap .club-title-overlay {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  margin: 0;\n  color: #fff;\n  font-size: 26px;\n  font-weight: 950;\n  letter-spacing: -1px;\n}\n.club-card-v5 .club-banner-wrap .price-badge {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  text-align: right;\n  color: #fff;\n}\n.club-card-v5 .club-banner-wrap .price-badge .p-label {\n  font-size: 10px;\n  opacity: 0.8;\n  font-weight: 700;\n}\n.club-card-v5 .club-banner-wrap .price-badge .p-val {\n  font-size: 20px;\n  font-weight: 950;\n  display: block;\n}\n.club-card-v5 .club-body-v5 {\n  padding: 18px 20px;\n}\n.club-card-v5 .club-body-v5 .club-loc {\n  margin: 0;\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n}\n.detail-hero-v6 {\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.detail-content-card {\n  margin-top: -30px;\n  background: white;\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: relative;\n  z-index: 10;\n  padding: 30px 25px 120px;\n}\n.detail-content-card .club-info-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 25px;\n}\n.detail-content-card .club-info-header h2 {\n  margin: 0;\n  font-size: 32px;\n  font-weight: 950;\n  letter-spacing: -1.5px;\n  color: var(--nike-navy);\n}\n.detail-content-card .club-info-header .fav-icon-btn {\n  font-size: 28px;\n  color: var(--nike-navy);\n}\n.detail-content-card .address-text {\n  font-size: 14px;\n  color: var(--nike-text-gray);\n  line-height: 1.5;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n.detail-content-card .nike-tabs-v6 {\n  display: flex;\n  gap: 25px;\n  border-bottom: 1px solid var(--nike-border);\n  margin-bottom: 30px;\n}\n.detail-content-card .nike-tabs-v6 .tab-item {\n  padding: 12px 5px;\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  border-bottom: 3px solid var(--nike-navy);\n}\n.detail-content-card .date-selector-row {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.detail-content-card .date-selector-row .calendar-btn {\n  width: 55px;\n  height: 75px;\n  border: 1px solid var(--nike-border);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: var(--nike-navy);\n}\n.detail-content-card .date-selector-row .dates-strip-v6 {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding: 5px 0;\n}\n.detail-content-card .date-selector-row .dates-strip-v6::-webkit-scrollbar {\n  display: none;\n}\n.detail-content-card .date-selector-row .dates-strip-v6 .date-v6 {\n  flex: 0 0 50px;\n  height: 75px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.detail-content-card .date-selector-row .dates-strip-v6 .date-v6 .d-name {\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--nike-text-gray);\n  text-transform: uppercase;\n}\n.detail-content-card .date-selector-row .dates-strip-v6 .date-v6 .d-num {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 900;\n}\n.detail-content-card .date-selector-row .dates-strip-v6 .date-v6.active .d-name {\n  color: var(--nike-navy);\n}\n.detail-content-card .date-selector-row .dates-strip-v6 .date-v6.active .d-num {\n  background: var(--nike-navy);\n  color: #fff;\n}\n.detail-content-card .filter-toggle-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.detail-content-card .filter-toggle-row span {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--nike-text-gray);\n}\n.detail-content-card .filter-toggle-row ion-toggle {\n  --handle-background: #fff;\n  --handle-background-checked: #fff;\n  --track-background-checked: var(--nike-navy);\n}\n.detail-content-card .time-grid-v6 {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  margin-bottom: 35px;\n}\n.detail-content-card .time-grid-v6 .time-item-v6 {\n  aspect-ratio: 1;\n  border: 1px solid var(--nike-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.detail-content-card .time-grid-v6 .time-item-v6.active {\n  background: var(--nike-navy);\n  color: #fff;\n  border-color: var(--nike-navy);\n  transform: scale(1.1);\n  box-shadow: 0 5px 15px rgba(15, 23, 42, 0.2);\n}\n.detail-content-card .section-title-v6 {\n  font-size: 19px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin-bottom: 4px;\n}\n.detail-content-card .section-desc-v6 {\n  font-size: 12.5px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.detail-content-card .court-durations {\n  display: flex;\n  gap: 6px;\n  margin-top: 10px;\n}\n.detail-content-card .court-durations .dur-chip {\n  padding: 5px 10px;\n  border-radius: 6px;\n  background: var(--nike-gray);\n  border: 1px solid var(--nike-border);\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--nike-navy);\n  transition: all 0.2s ease;\n}\n.detail-content-card .court-durations .dur-chip.active {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-color: var(--nike-navy);\n}\n.success-overlay-pro {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.85);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 1200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.success-overlay-pro .success-card-pro {\n  background: #ffffff;\n  width: 100%;\n  max-width: 410px;\n  max-height: calc(100vh - 28px);\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  border-radius: 28px;\n  padding: 20px 18px 18px;\n  text-align: center;\n  position: relative;\n  margin: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n}\n.success-overlay-pro .success-card-pro .modal-close-x-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 18px;\n  cursor: pointer;\n  z-index: 5;\n  transition: all 0.2s ease;\n}\n.success-overlay-pro .success-card-pro .modal-close-x-btn:active {\n  background: #e2e8f0;\n  transform: scale(0.92);\n}\n.success-overlay-pro .success-card-pro .icon-wrap {\n  width: 52px;\n  height: 52px;\n  background: var(--nike-neon);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 10px;\n  box-shadow: 0 4px 14px rgba(204, 255, 0, 0.35);\n}\n.success-overlay-pro .success-card-pro .icon-wrap ion-icon {\n  font-size: 28px;\n  color: var(--nike-navy);\n}\n.success-overlay-pro .success-card-pro h2 {\n  font-size: 20px;\n  font-weight: 950;\n  letter-spacing: -0.5px;\n  margin: 0 0 4px;\n  color: var(--nike-navy);\n  text-transform: uppercase;\n}\n.success-overlay-pro .success-card-pro p {\n  font-size: 12.5px;\n  color: var(--nike-text-gray);\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 12px;\n}\n.success-overlay-pro .success-card-pro .res-summary-box {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 10px 14px;\n  margin-bottom: 10px;\n  text-align: left;\n}\n.success-overlay-pro .success-card-pro .res-summary-box .s-label {\n  font-size: 9.5px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 1px;\n  display: block;\n}\n.success-overlay-pro .success-card-pro .res-summary-box .s-val {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--nike-navy);\n  margin-bottom: 6px;\n  display: block;\n}\n.success-overlay-pro .success-card-pro .res-summary-box .s-val:last-child {\n  margin-bottom: 0;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 10px 12px;\n  margin-bottom: 12px;\n  text-align: left;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-head .s-title {\n  font-size: 10.5px;\n  font-weight: 850;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-head .s-badge {\n  font-size: 9.5px;\n  font-weight: 800;\n  color: #059669;\n  background: #ecfdf5;\n  padding: 1px 6px;\n  border-radius: 5px;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-btn-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 5px;\n  margin-bottom: 8px;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-btn-grid .split-btn {\n  background: #ffffff;\n  color: #475569;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 5px 2px;\n  font-weight: 800;\n  font-size: 10.5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-btn-grid .split-btn.active {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-color: var(--nike-navy);\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-action-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 6px 10px;\n  border: 1px solid #e2e8f0;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-action-row .split-amount-block {\n  display: flex;\n  flex-direction: column;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-action-row .split-amount-block .label {\n  font-size: 9.5px;\n  color: #64748b;\n  font-weight: 700;\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-action-row .split-amount-block .amount {\n  font-size: 15px;\n  font-weight: 950;\n  color: var(--nike-navy);\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-action-row .whatsapp-share-btn {\n  background: #25d366;\n  color: white;\n  border: none;\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-weight: 850;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.25);\n}\n.success-overlay-pro .success-card-pro .split-calculator-box .split-action-row .whatsapp-share-btn ion-icon {\n  font-size: 14px;\n}\n.success-overlay-pro .success-card-pro .action-btns {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.success-overlay-pro .success-card-pro .action-btns .nike-btn-pro {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  padding: 13px 16px;\n  border-radius: 14px;\n  font-size: 13px;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  cursor: pointer;\n  transition: transform 0.15s ease;\n}\n.success-overlay-pro .success-card-pro .action-btns .nike-btn-pro:active {\n  transform: scale(0.98);\n}\n.success-overlay-pro .success-card-pro .action-btns .nike-btn-outline {\n  background: transparent;\n  color: #64748b;\n  padding: 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n.success-overlay-pro .success-card-pro .action-btns .nike-btn-outline:active {\n  color: var(--nike-navy);\n}\n.back-fab {\n  --background: #ffffff;\n  --color: #000000;\n  --border-radius: 50%;\n  --box-shadow: 0 8px 25px rgba(0,0,0,0.12);\n  width: 60px;\n  height: 60px;\n}\n.back-fab ion-icon {\n  font-size: 24px;\n}\n.animate-up {\n  animation: up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes up {\n  from {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.search-actions ion-icon.active {\n  color: #ff3b30 !important;\n  opacity: 1 !important;\n}\n.fav-btn.active {\n  color: #ff3b30 !important;\n  filter: drop-shadow(0 2px 5px rgba(255, 59, 48, 0.4));\n}\n.fav-icon-btn.active {\n  color: #ff3b30 !important;\n}\n.duration-selector-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 15px;\n  margin-bottom: 25px;\n  background: #f8f8fa;\n  border-radius: 16px;\n  padding: 10px 14px;\n  border: 1px solid rgba(0, 0, 0, 0.02);\n}\n.duration-selector-row .ds-label {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--nike-navy, #0f172a);\n}\n.duration-selector-row .ds-pills {\n  display: flex;\n  gap: 6px;\n}\n.duration-selector-row .ds-pills .ds-pill {\n  font-size: 12px;\n  font-weight: 900;\n  color: #8e8e93;\n  padding: 6px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: transparent;\n}\n.duration-selector-row .ds-pills .ds-pill.active {\n  background: #000;\n  color: #CCFF00;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.court-price-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 6px;\n  flex-wrap: wrap;\n}\n.court-price-row .price-breakdown {\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n}\n.court-price-row .price-breakdown .c-price-total {\n  font-size: 14px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.court-price-row .price-breakdown .c-price-total strong {\n  color: #10b981;\n}\n.court-price-row .price-breakdown .c-price-per-player {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n}\n.court-price-row .rate-badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 6px;\n  background: #ecfdf5;\n  color: #059669;\n  border: 1px solid #a7f3d0;\n}\n.court-price-row .rate-badge.peak {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fde68a;\n}\n.mobile-resource-filter-pills {\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  padding: 2px 0 10px 0;\n  margin-bottom: 6px;\n  scrollbar-width: none;\n}\n.mobile-resource-filter-pills::-webkit-scrollbar {\n  display: none;\n}\n.mobile-resource-filter-pills .m-pill-btn {\n  flex: 0 0 auto;\n  padding: 6px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 11.5px;\n  font-weight: 800;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n}\n.mobile-resource-filter-pills .m-pill-btn:active {\n  transform: scale(0.96);\n}\n.mobile-resource-filter-pills .m-pill-btn.active {\n  background: var(--nike-navy, #0f172a);\n  color: var(--nike-neon, #ccff00);\n  border-color: var(--nike-navy, #0f172a);\n  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.15);\n}\n.court-list-v6 {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-bottom: 25px;\n}\n.court-card-v7 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n}\n.court-card-v7.disabled {\n  opacity: 0.55;\n  filter: grayscale(0.6);\n}\n.court-card-v7 .c-info-box {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.court-card-v7 .c-top-line {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n.court-card-v7 .c-top-line .cat-pill-v7 {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 6px;\n  border-radius: 6px;\n  font-size: 9.5px;\n  font-weight: 900;\n  letter-spacing: 0.2px;\n  line-height: 1.1;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.court-card-v7 .c-top-line .cat-pill-v7 .p-icon {\n  font-size: 10px;\n}\n.court-card-v7 .c-top-line .cat-pill-v7.padel {\n  background: #ecfdf5;\n  color: #059669;\n  border: 1px solid #a7f3d0;\n}\n.court-card-v7 .c-top-line .c-item-title {\n  font-size: 14.5px;\n  font-weight: 950;\n  color: #0f172a;\n  letter-spacing: -0.3px;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.court-card-v7 .c-top-line .cap-pill-v7 {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 1.5px 5px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 800;\n  color: #475569;\n  white-space: nowrap;\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n}\n.court-card-v7 .c-top-line .cap-pill-v7 ion-icon {\n  font-size: 11px;\n  color: #64748b;\n}\n.court-card-v7 .c-specs-line {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.2;\n}\n.court-card-v7 .c-specs-line.single-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.court-card-v7 .c-specs-line .desc-inline {\n  color: #94a3b8;\n  font-weight: 500;\n}\n.court-card-v7 .c-bottom-line {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 1px;\n}\n.court-card-v7 .c-bottom-line .c-price-wrapper {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.court-card-v7 .c-bottom-line .c-price-wrapper .c-rent-label {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #64748b;\n}\n.court-card-v7 .c-bottom-line .c-price-wrapper .c-price-main {\n  font-size: 13.5px;\n  font-weight: 950;\n  color: #0f172a;\n  letter-spacing: -0.2px;\n}\n.court-card-v7 .c-bottom-line .c-price-wrapper .c-price-sub {\n  font-size: 10px;\n  font-weight: 700;\n  color: #64748b;\n}\n.court-card-v7 .c-bottom-line .rate-badge-v7 {\n  font-size: 9.5px;\n  font-weight: 800;\n  padding: 1.5px 6px;\n  border-radius: 5px;\n  background: #ecfdf5;\n  color: #059669;\n  border: 1px solid #a7f3d0;\n  line-height: 1.1;\n}\n.court-card-v7 .c-bottom-line .rate-badge-v7.peak {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fde68a;\n}\n.court-card-v7 .c-action-btn-v7 {\n  flex-shrink: 0;\n  min-width: 82px;\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  white-space: nowrap;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  transition: transform 0.15s ease, opacity 0.15s ease;\n}\n.court-card-v7 .c-action-btn-v7:active {\n  transform: scale(0.95);\n}\n.court-card-v7 .c-action-btn-v7.padel-btn {\n  background: var(--nike-navy, #0f172a);\n  color: var(--nike-neon, #ccff00);\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);\n}\n.court-card-v7 .c-action-btn-v7.amenity-btn {\n  color: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.court-card-v7 .c-action-btn-v7.disabled-btn {\n  background: #f1f5f9;\n  color: #94a3b8;\n  border: 1px solid #e2e8f0;\n  cursor: not-allowed;\n}\n.court-card-v7.amenity-card-v7.theme-mesa_pool {\n  border-left: 3.5px solid #8b5cf6;\n  background:\n    linear-gradient(\n      90deg,\n      #faf5ff 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-quincho {\n  border-left: 3.5px solid #f97316;\n  background:\n    linear-gradient(\n      90deg,\n      #fff7ed 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-mesa_pingpong {\n  border-left: 3.5px solid #06b6d4;\n  background:\n    linear-gradient(\n      90deg,\n      #ecfeff 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-zona_lounge {\n  border-left: 3.5px solid #ec4899;\n  background:\n    linear-gradient(\n      90deg,\n      #fdf2f8 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-futbolito {\n  border-left: 3.5px solid #10b981;\n  background:\n    linear-gradient(\n      90deg,\n      #f0fdf4 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-maquina_lanzapelotas {\n  border-left: 3.5px solid #3b82f6;\n  background:\n    linear-gradient(\n      90deg,\n      #eff6ff 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-sala_eventos {\n  border-left: 3.5px solid #eab308;\n  background:\n    linear-gradient(\n      90deg,\n      #fefce8 0%,\n      #ffffff 35%);\n}\n.court-card-v7.amenity-card-v7.theme-cancha_pickleball {\n  border-left: 3.5px solid #84cc16;\n  background:\n    linear-gradient(\n      90deg,\n      #f7fee7 0%,\n      #ffffff 35%);\n}\n.court-card-v7.is-court {\n  border-left: 3.5px solid #059669;\n  background:\n    linear-gradient(\n      90deg,\n      #f0fdf4 0%,\n      #ffffff 35%);\n}\n.confirm-sheet-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.72);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 1100;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 0;\n}\n@media (min-width: 600px) {\n  .confirm-sheet-overlay {\n    align-items: center;\n    padding: 24px;\n  }\n}\n.confirm-sheet-card {\n  background: #ffffff;\n  width: 100%;\n  max-width: 440px;\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  padding: 16px 24px 32px;\n  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.25);\n  position: relative;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@media (min-width: 600px) {\n  .confirm-sheet-card {\n    border-radius: 32px;\n    padding: 28px;\n    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);\n  }\n}\n.confirm-sheet-card .sheet-drag-handle {\n  width: 42px;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 0 auto 16px;\n}\n.confirm-sheet-card .sheet-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 18px;\n}\n.confirm-sheet-card .sheet-header .sheet-title-group .sheet-badge-tag {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 10px;\n  border-radius: 8px;\n  margin-bottom: 6px;\n}\n.confirm-sheet-card .sheet-header .sheet-title-group .sheet-title {\n  font-size: 22px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.confirm-sheet-card .sheet-header .sheet-close-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.confirm-sheet-card .sheet-header .sheet-close-btn:active {\n  background: #e2e8f0;\n  transform: scale(0.92);\n}\n.confirm-sheet-card .sheet-court-box {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 14px 16px;\n  margin-bottom: 14px;\n}\n.confirm-sheet-card .sheet-court-box .court-icon-pill {\n  width: 48px;\n  height: 48px;\n  border-radius: 16px;\n  background: var(--nike-navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);\n}\n.confirm-sheet-card .sheet-court-box .court-details {\n  flex: 1;\n  min-width: 0;\n}\n.confirm-sheet-card .sheet-court-box .court-details .court-name {\n  font-size: 17px;\n  font-weight: 950;\n  color: var(--nike-navy);\n  margin: 0 0 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.confirm-sheet-card .sheet-court-box .court-details .club-name {\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.confirm-sheet-card .sheet-court-box .court-details .court-chips-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.confirm-sheet-card .sheet-court-box .court-details .court-chips-row .c-chip {\n  font-size: 10px;\n  font-weight: 800;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.confirm-sheet-card .sheet-schedule-card {\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 12px 16px;\n  margin-bottom: 14px;\n}\n.confirm-sheet-card .sheet-schedule-card .sched-item {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.confirm-sheet-card .sheet-schedule-card .sched-item .sched-icon-wrap {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--nike-navy);\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.confirm-sheet-card .sheet-schedule-card .sched-item .sched-text {\n  display: flex;\n  flex-direction: column;\n}\n.confirm-sheet-card .sheet-schedule-card .sched-item .sched-text .s-label {\n  font-size: 10.5px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.confirm-sheet-card .sheet-schedule-card .sched-item .sched-text .s-val {\n  font-size: 13px;\n  font-weight: 900;\n  color: var(--nike-navy);\n}\n.confirm-sheet-card .sheet-schedule-card .sched-divider {\n  width: 1px;\n  height: 32px;\n  background: #e2e8f0;\n  margin: 0 10px;\n}\n.confirm-sheet-card .sheet-trainer-selector {\n  background: #f8fafc;\n  border: 1.5px dashed #cbd5e1;\n  border-radius: 16px;\n  padding: 12px 14px;\n  margin-bottom: 14px;\n}\n.confirm-sheet-card .sheet-trainer-selector .trainer-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 850;\n  color: #64748b;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.confirm-sheet-card .sheet-trainer-selector .trainer-pills {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.confirm-sheet-card .sheet-trainer-selector .trainer-pills .t-pill {\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  padding: 9px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 850;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.confirm-sheet-card .sheet-trainer-selector .trainer-pills .t-pill.active {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border-color: var(--nike-navy);\n  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.15);\n}\n.confirm-sheet-card .sheet-price-box {\n  background: #0f172a;\n  border-radius: 20px;\n  padding: 16px 18px;\n  color: #ffffff;\n  margin-bottom: 12px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18);\n}\n.confirm-sheet-card .sheet-price-box .price-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.confirm-sheet-card .sheet-price-box .price-row.total-row .p-title {\n  font-size: 13px;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.confirm-sheet-card .sheet-price-box .price-row.total-row .p-amount {\n  font-size: 24px;\n  font-weight: 950;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.confirm-sheet-card .sheet-price-box .price-row.split-highlight-row {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n.confirm-sheet-card .sheet-price-box .price-row.split-highlight-row .split-info {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 750;\n  color: #cbd5e1;\n}\n.confirm-sheet-card .sheet-price-box .price-row.split-highlight-row .split-info ion-icon {\n  font-size: 16px;\n  color: var(--nike-neon);\n}\n.confirm-sheet-card .sheet-price-box .price-row.split-highlight-row .split-amount {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--nike-neon);\n}\n.confirm-sheet-card .sheet-price-box .price-row.split-highlight-row .split-amount em {\n  font-style: normal;\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 700;\n}\n.confirm-sheet-card .sheet-guarantee-note {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 750;\n  color: #059669;\n  margin-bottom: 18px;\n}\n.confirm-sheet-card .sheet-guarantee-note ion-icon {\n  font-size: 14px;\n}\n.confirm-sheet-card .sheet-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.confirm-sheet-card .sheet-actions .sheet-btn-confirm {\n  background: var(--nike-navy);\n  color: var(--nike-neon);\n  border: none;\n  padding: 16px 20px;\n  border-radius: 18px;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.25);\n  transition: all 0.2s ease;\n}\n.confirm-sheet-card .sheet-actions .sheet-btn-confirm:active {\n  transform: scale(0.98);\n  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.15);\n}\n.confirm-sheet-card .sheet-actions .sheet-btn-confirm .btn-price-tag {\n  background: rgba(204, 255, 0, 0.15);\n  color: var(--nike-neon);\n  padding: 4px 10px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 950;\n}\n.confirm-sheet-card .sheet-actions .sheet-btn-cancel {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  padding: 10px;\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.confirm-sheet-card .sheet-actions .sheet-btn-cancel:active {\n  color: var(--nike-navy);\n}\n.animate-fade {\n  animation: fadeIn 0.25s ease-out both;\n}\n.animate-slide-up {\n  animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=clubes-reservar.page.css.map */\n'] }]
  }], () => [{ type: MysqlService }, { type: Router }, { type: ActivatedRoute }, { type: AlertController }, { type: ActionSheetController }, { type: LoadingController }, { type: ChangeDetectorRef }, { type: HapticFeedbackService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClubesReservarPage, { className: "ClubesReservarPage", filePath: "src/app/pages/clubes-reservar/clubes-reservar.page.ts", lineNumber: 41 });
})();
export {
  ClubesReservarPage
};
//# sourceMappingURL=clubes-reservar.page-QOS3RIQR.js.map

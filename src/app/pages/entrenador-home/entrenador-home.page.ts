import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileSelectorModalComponent } from 'src/app/components/profile-selector-modal/profile-selector-modal.component';
import { MysqlService } from 'src/app/services/mysql.service';
import { AuthService } from 'src/app/services/auth.service';
import { EntrenamientoService } from 'src/app/services/entrenamiento.service';
import { NotificationService } from 'src/app/services/notification.service';
import {
  ActionSheetController,
  ModalController,
  AlertController,
  ToastController,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonBadge,
  IonRefresher,
  IonRefresherContent,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons
} from '@ionic/angular/standalone';

import {
  settingsOutline,
  homeOutline,
  calendarOutline,
  logOutOutline,
  personOutline,
  addCircleOutline,
  add,
  checkmarkDoneCircleOutline,
  chevronDownOutline,
  chevronUpOutline,
  giftOutline,
  notificationsOutline,
  warningOutline,
  closeOutline,
  closeCircleOutline,
  gift,
  wallet,
  notificationsOffOutline,
  close,
  locationOutline,
  cardOutline,
  flashOutline,
  logoWhatsapp,
  timeOutline,
  alertCircleOutline,
  pricetagsOutline,
  statsChartOutline,
  informationCircleOutline,
  tennisballOutline,
  trophyOutline,
  chevronForward,
  barcodeOutline,
  swapHorizontalOutline,
  arrowForward,
  checkmarkCircle,
  sparklesOutline,
  chatbubbleEllipsesOutline,
  peopleOutline,
  cashOutline,
  chevronForwardOutline
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-entrenador-home',
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    IonBadge,
    IonRefresher,
    IonRefresherContent,
    IonModal
  ],
  templateUrl: './entrenador-home.page.html',
  styleUrls: ['./entrenador-home.page.scss']
})
export class EntrenadorHomePage {

  coachNombre: string = 'Coach';
  isDev: boolean = true;
  coachFoto: string | null = null;
  isLoading: boolean = false;
  clasesHoyList: any[] = [];
  isClassesExpanded: boolean = false;
  stats: any = {
    total_alumnos: 0,
    clases_mes: 0,
    clases_grupales_mes: 0,
    clases_hoy: 0
  };
  showMPReminder: boolean = false;
  isNotificacionesOpen: boolean = false;
  isControlCenterOpen: boolean = false;
  sinDireccion: boolean = false;
  planTrialDays: number = 0;
  planTrialActivo: boolean = false;

  // UX Enhancements
  activeControlTab: 'pista' | 'negocio' | 'cuenta' = 'pista';
  saludoDinamico: string = '¡Buen entrenamiento!';
  fechaHoyLegible: string = '';

  // New Features
  claseActual: any = null;
  alumnosRecordatorioList: any[] = [];
  
  // Point 4 & 5
  ingresosProyectados: number = 0;
  ingresosRecaudados: number = 0;
  iaTip: string = 'Cargando consejo del día...';
  isFinanceOpen: boolean = false;

  constructor(
    public router: Router,
    private mysqlService: MysqlService,
    private authService: AuthService,
    private entrenamientoService: EntrenamientoService,
    private notificationService: NotificationService,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private ngZone: NgZone,
  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      logOutOutline,
      personOutline,
      addCircleOutline,
      add,
      checkmarkDoneCircleOutline,
      chevronDownOutline,
      chevronUpOutline,
      giftOutline,
      notificationsOutline,
      warningOutline,
      gift,
      close,
      closeOutline,
      closeCircleOutline,
      locationOutline,
      cardOutline,
      flashOutline,
      logoWhatsapp,
      timeOutline,
      alertCircleOutline,
      pricetagsOutline,
      statsChartOutline,
      informationCircleOutline,
      tennisballOutline,
      trophyOutline,
      chevronForward,
      barcodeOutline,
      swapHorizontalOutline,
      arrowForward,
      checkmarkCircle,
      sparklesOutline,
      chatbubbleEllipsesOutline,
      peopleOutline,
      cashOutline,
      chevronForwardOutline
    });
  }

  getNotificacionesCount(): number {
    let count = 0;
    if (this.planTrialActivo) count++;
    if (this.showMPReminder) count++;
    if (this.sinDireccion) count++;
    return count;
  }

  openNotificaciones() {
    this.isNotificacionesOpen = true;
  }

  closeNotificaciones() {
    this.isNotificacionesOpen = false;
  }

  onNotifClick(type: string) {
    if (type === 'perfil') {
      this.closeNotificaciones();
      setTimeout(() => {
        this.router.navigate(['/perfil']);
      }, 100);
    }
    if (type === 'plan') {
      this.closeNotificaciones();
      setTimeout(() => {
        this.router.navigate(['/entrenador-mi-plan']);
      }, 100);
    }
  }

  ionViewWillEnter() {
    this.loadProfile();
    this.notificationService.updateTokenForUser();
  }

  loadProfile() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) return;

    // Calcular saludo dinámico y fecha amigable
    const h = new Date().getHours();
    if (h < 12) this.saludoDinamico = '¡Buenos días!';
    else if (h < 19) this.saludoDinamico = '¡Buenas tardes!';
    else this.saludoDinamico = '¡Buenas noches!';

    try {
      const opt: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
      const rawDate = new Date().toLocaleDateString('es-ES', opt);
      this.fechaHoyLegible = rawDate.charAt(0).toUpperCase() + rawDate.slice(1);
    } catch {
      this.fechaHoyLegible = 'Hoy';
    }

    // Check subscription plan validity first
    const token = localStorage.getItem('token');
    fetch(`${environment.apiUrl}/subscriptions/get_subscription_status.php?coach_id=${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then((subRes: any) => {
        // Store trial info for notifications
        if (subRes.days_remaining && subRes.days_remaining > 0) {
          this.planTrialActivo = true;
          this.planTrialDays = subRes.days_remaining;
        } else {
          this.planTrialActivo = false;
          this.planTrialDays = 0;
        }

        if (subRes.status === 'inactive' || subRes.status === 'past_due') {
          this.actionSheetCtrl.create({
            header: 'Plan Inactivo',
            subHeader: 'Tu suscripción no se encuentra activa.',
            buttons: [
              {
                text: 'Ver Mi Plan',
                icon: 'card-outline',
                handler: () => {
                  this.ngZone.run(() => this.router.navigate(['/entrenador-mi-plan']));
                }
              },
              {
                text: 'Cerrar sesión',
                icon: 'log-out-outline',
                handler: () => {
                  this.logout();
                }
              }
            ],
            backdropDismiss: false
          }).then(a => a.present());
          return;
        }
        this.fetchProfileData(userId);
      })
      .catch((err) => {
        console.error('Error checking subscription', err);
        this.fetchProfileData(userId);
      });
  }

  fetchProfileData(userId: number) {
    this.isLoading = true;
    this.mysqlService.getPerfil(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.coachNombre = res.user.nombre || 'Coach';

          let foto = res.user.foto_perfil || res.user.link_foto || res.user.foto;
          if (foto) {
            localStorage.setItem('userFoto', foto);
            localStorage.setItem('foto_perfil', foto);
            this.coachFoto = this.getProfileImage(foto);
          }

          // Check for Mercado Pago Collector ID
          const hideReminder = localStorage.getItem('hideMPReminder');
          if (!res.user.mp_collector_id && hideReminder !== 'true') {
            this.showMPReminder = true;
          } else {
            this.showMPReminder = false;
          }

          // Check for Address — use res.direccion object (calle, comuna, region)
          const dir = res.direccion;
          if (dir && dir.calle && dir.calle.trim().length > 2 && dir.comuna && dir.comuna.trim().length > 2) {
            this.sinDireccion = false;
          } else {
            this.sinDireccion = true;
          }
        }

        this.loadDashboardStats(userId);
        this.loadAgenda();
        this.checkClaseActual();
        this.loadPaymentAlerts(userId);
        this.generateIATip();
      },
      error: (err) => {
        console.error('Error loading profile:', err);
        this.isLoading = false;
      }
    });
  }

  fetchRevenue(userId: number) {
    this.entrenamientoService.getFinanzas(userId).subscribe({
      next: (res: any) => {
        if (res) {
          this.ingresosRecaudados = res.recaudado || 0;
          this.ingresosProyectados = res.proyectado || 0;
        }
      },
      error: (err) => console.warn('Error fetching finances:', err)
    });
  }

  generateIATip() {
    const token = localStorage.getItem('token');
    fetch(`${environment.apiUrl}/ia/get_tip_frontend.php`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res && res.tips && res.tips.length > 0) {
          // Select the first tip
          const mainTip = res.tips[0];
          this.iaTip = `${mainTip.titulo}: ${mainTip.mensaje}`;
        } else if (res && res.mensaje) {
          this.iaTip = `${res.titulo}: ${res.mensaje}`;
        }
      })
      .catch(err => {
        console.warn('Error fetching IA tip:', err);
        const fallbacks = [
          "El clima está húmedo hoy, recuerda a tus alumnos que la bola pesará más en el revés.",
          "Excelente día para trabajar voleas bajas, la superficie está rápida.",
          "Tip: El 70% de los errores no forzados en alumnos nivel medio vienen de mala posición de pies."
        ];
        this.iaTip = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      });
  }

  loadDashboardStats(userId: number) {
    this.entrenamientoService.getDashboardStats(userId).subscribe({
      next: (res) => {
        this.stats = res;
        this.fetchRevenue(userId);
      },
      error: (err) => console.error('Error loading stats:', err)
    });
  }

  loadAgenda() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) return;

    this.entrenamientoService.getReservasEntrenador(userId).subscribe({
      next: (res: any) => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const formatDate = (date: Date) => {
          const yyyy = date.getFullYear();
          const mm = String(date.getMonth() + 1).padStart(2, '0');
          const dd = String(date.getDate()).padStart(2, '0');
          return `${yyyy}-${mm}-${dd}`;
        };

        const fechaHoy = formatDate(today);
        const fechaManana = formatDate(tomorrow);

        const diaSemanaHoy = today.getDay() === 0 ? 7 : today.getDay();
        const diaSemanaManana = tomorrow.getDay() === 0 ? 7 : tomorrow.getDay();

        let clases = [];

        // 1. Tradicionales
        if (res.reservas_tradicionales) {
          const proximas = res.reservas_tradicionales.filter((r: any) => r.fecha === fechaHoy || r.fecha === fechaManana);
          clases.push(...proximas.map((r: any) => ({
            id: r.id || r.reserva_id,
            reserva_id: r.id || r.reserva_id,
            jugador_id: r.jugador_id,
            telefono: r.telefono || r.jugador_telefono,
            fecha: r.fecha,
            diaLabel: r.fecha === fechaHoy ? 'Hoy' : 'Mañana',
            hora: r.hora_inicio.substring(0, 5),
            tipo: (r.tipo === 'pack_grupal' || r.tipo === 'grupal') ? 'Grupal' :
              (
                r.tipo?.toLowerCase() === 'multijugador' ||
                (r.cantidad_personas && r.cantidad_personas > 1) ||
                (r.pack_nombre?.toLowerCase()?.includes('duo')) ||
                (r.pack_nombre?.toLowerCase()?.includes('dupla')) ||
                (r.pack_nombre?.toLowerCase()?.includes('pareja'))
              ) ? 'Multijugador' : 'Individual',
            titulo: r.jugador_nombre || 'Clase Grupal',
            subtitulo: r.pack_nombre,
            lugar: r.club_nombre,
            estado: r.estado,
            raw: r
          })));
        }

        // 2. Packs Grupales
        if (res.packs_grupales) {
          const grupHoy = res.packs_grupales.filter((g: any) =>
            Number(g.dia_semana) === diaSemanaHoy &&
            !clases.some(c => c.fecha === fechaHoy && c.hora === g.hora_inicio.substring(0, 5))
          );
          const grupManana = res.packs_grupales.filter((g: any) =>
            Number(g.dia_semana) === diaSemanaManana &&
            !clases.some(c => c.fecha === fechaManana && c.hora === g.hora_inicio.substring(0, 5))
          );

          clases.push(...grupHoy.map((g: any) => ({
            id: g.id || g.pack_id,
            reserva_id: g.id || g.pack_id,
            pack_id: g.pack_id,
            fecha: fechaHoy,
            diaLabel: 'Hoy',
            hora: g.hora_inicio.substring(0, 5),
            tipo: 'Grupal',
            titulo: g.pack_nombre,
            subtitulo: `${g.inscritos_confirmados || 0} inscritos`,
            lugar: g.club_nombre,
            estado: 'activo',
            raw: g
          })));

          clases.push(...grupManana.map((g: any) => ({
            id: g.id || g.pack_id,
            reserva_id: g.id || g.pack_id,
            pack_id: g.pack_id,
            fecha: fechaManana,
            diaLabel: 'Mañana',
            hora: g.hora_inicio.substring(0, 5),
            tipo: 'Grupal',
            titulo: g.pack_nombre,
            subtitulo: `${g.inscritos_confirmados || 0} inscritos`,
            lugar: g.club_nombre,
            estado: 'activo'
          })));
        }

        // Sort
        clases.sort((a, b) => {
          if (a.fecha !== b.fecha) return a.fecha.localeCompare(b.fecha);
          return a.hora.localeCompare(b.hora);
        });

        // Filter past classes for Today
        const now = new Date();
        const currentHHmm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        this.clasesHoyList = clases.filter(c => {
          if (c.diaLabel === 'Hoy') {
             return c.hora >= currentHHmm;
          }
          return true; // Keep all tomorrow classes
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading agenda:', err);
        this.isLoading = false;
      }
    });
  }

  handleRefresh(event: any) {
    this.loadProfile();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  goToPacks() {
    this.router.navigate(['/entrenador-packs']);
  }

  goToAgenda() {
    this.router.navigate(['/entrenador-entrenamientos']);
  }

  goToAlumnos() {
    this.router.navigate(['/alumnos']);
  }

  goToAgendar() {
    this.router.navigate(['/entrenador-agendar']);
  }

  goToCupones() {
    this.router.navigate(['/entrenador-cupones']);
  }

  goToConfig() {
    this.router.navigate(['/entrenador-config']);
  }

  goToPerfil() {
    this.router.navigate(['/perfil']);
  }
  
  goToReservas() {
    this.router.navigate(['/clubes-reservar']);
  }
  
  goToTorneos() {
    this.router.navigate(['/jugador-campeonatos']);
  }

  openFinance() {
    this.isControlCenterOpen = false;
    setTimeout(() => {
      this.isFinanceOpen = true;
    }, 400);
  }

  async logout() {
    console.log('Logging out trainer...');
    localStorage.clear();

    // Intentar cerrar sesión en el servicio pero no bloquear la navegación si falla o demora
    this.authService.logout().catch(err => console.warn("AuthService logout error:", err));

    this.ngZone.run(() => {
      this.router.navigate(['/login'], { replaceUrl: true });
    });
  }

  goToHome() {
    this.router.navigate(['/entrenador-home']);
  }

  dismissMPReminder() {
    this.showMPReminder = false;
    localStorage.setItem('hideMPReminder', 'true');
  }

  get hasMultipleProfiles(): boolean {
    try {
      const stored = localStorage.getItem('availableProfiles');
      if (!stored) return false;
      const perfiles = JSON.parse(stored);
      if (!Array.isArray(perfiles)) return false;
      const roles = new Set(
        perfiles.map((p: any) => {
          if (p.rol === 'staff_club' || p.rol === 'administrador_club' || p.rol === 'administrador') {
            return 'administrador_club';
          }
          return p.rol;
        })
      );
      return roles.size > 1;
    } catch (e) {
      return false;
    }
  }

  async openSettings() {
    const buttons: any[] = [
      {
        text: 'Mi Perfil',
        icon: 'person-outline',
        handler: () => {
          this.router.navigate(['/perfil']);
        }
      },
      {
        text: 'Mis packs de clases',
        icon: 'pricetags-outline',
        handler: () => {
          this.router.navigate(['/entrenador-packs']);
        }
      },
      {
        text: 'Mis Cupones',
        icon: 'gift-outline',
        handler: () => {
          this.router.navigate(['/entrenador-cupones']);
        }
      },
      {
        text: 'Mi Plan',
        icon: 'card-outline',
        handler: () => {
          this.router.navigate(['/entrenador-mi-plan']);
        }
      },
      {
        text: 'Horarios disponibles',
        icon: 'time-outline',
        handler: () => {
          this.router.navigate(['/disponibilidad-entrenador']);
        }
      }
    ];

    if (this.hasMultipleProfiles) {
      buttons.push({
        text: '🔄 Cambiar Perfil',
        icon: 'swap-horizontal-outline',
        handler: () => {
          this.openProfileSelectorModal();
        }
      });
    }

    buttons.push(
      {
        text: 'Cerrar sesión',
        icon: 'log-out-outline',
        role: 'destructive',
        handler: () => {
          this.logout();
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }
    );

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ajustes del Entrenador',
      buttons
    });

    await actionSheet.present();
  }

  async openProfileSelectorModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileSelectorModalComponent,
      componentProps: {
        allowCancel: true,
        currentRole: 'entrenador'
      },
      breakpoints: [0, 0.7, 0.95],
      initialBreakpoint: 0.7,
      cssClass: 'profile-selector-bottom-sheet'
    });
    await modal.present();
  }

  // --- FEATURE LOGIC ---

  checkClaseActual() {
    // Detect if there is a class happening right NOW
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const timeStr = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
    
    // We look in this.clasesHoyList (which includes Hoy and Mañana)
    const hoy = this.clasesHoyList.filter(c => c.diaLabel === 'Hoy');
    
    // Logic: If current time is within +/- 30 mins of a class start time? 
    // Or just "Next 60 mins"?
    // Let's find a class that started at most 55 mins ago or starts in next 5 mins.
    const active = hoy.find(c => {
      const cTime = c.hora; // HH:mm
      const [cHour, cMin] = cTime.split(':').map(Number);
      const cDate = new Date();
      cDate.setHours(cHour, cMin, 0);
      
      const diffMs = now.getTime() - cDate.getTime();
      const diffMins = diffMs / 60000;
      
      return diffMins >= -5 && diffMins <= 55; // From 5 mins before start to 55 mins after
    });

    this.claseActual = active || null;
  }

  loadPaymentAlerts(userId: number) {
    // Fetch students with low pack balance
    this.mysqlService.getAlumnos(userId).subscribe({
      next: (res: any) => {
        if (res && Array.isArray(res)) {
          // Filter students with 0 or 1 classes remaining
          this.alumnosRecordatorioList = res.filter((a: any) => 
            a.tiene_pack == 1 && Number(a.clases_disponibles) <= 1
          ).slice(0, 5); // Limit to top 5 for the home card
        }
      }
    });
  }


  onControlItemClick(action: string) {
    this.isControlCenterOpen = false;
    
    setTimeout(() => {
      if (action === 'logout') {
        this.logout();
      } else if (action === 'change_profile') {
        this.openProfileSelectorModal();
      } else {
        this.router.navigateByUrl(action);
      }
    }, 150);
  }

  setActiveControlTab(tab: 'pista' | 'negocio' | 'cuenta') {
    this.activeControlTab = tab;
  }

  get proximaClase(): any {
    return this.claseActual || (this.clasesHoyList.length > 0 ? this.clasesHoyList[0] : null);
  }

  sendWhatsAppReminder(alumno: any, event?: Event) {
    if (event) event.stopPropagation();
    const msg = `Hola ${alumno.nombre}, te escribo de Padel Academy. Notamos que te quedan ${alumno.clases_disponibles} clases en tu pack. ¡No olvides renovar para asegurar tu horario! 🎾`;
    window.open(`https://wa.me/${alumno.telefono}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  contactarAlumnoClase(clase: any, event?: Event) {
    if (event) event.stopPropagation();
    const tel = clase?.telefono || clase?.jugador_telefono || '';
    const alumnoNombre = clase?.titulo || 'Alumno';
    const hora = clase?.hora || '';
    const msg = `Hola ${alumnoNombre}, te contacto de Padelblox respecto a nuestra clase programada para hoy a las ${hora} hrs. 🎾`;
    if (tel) {
      window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    }
  }

  async confirmarCancelacionAlumnoNoLlego(clase: any, event?: Event) {
    if (event) event.stopPropagation();

    const alumnoNombre = clase?.titulo || 'el alumno';
    const hora = clase?.hora ? `de las ${clase.hora} hrs` : '';

    const alert = await this.alertCtrl.create({
      header: '¿Cancelar clase?',
      subHeader: 'Inasistencia del alumno',
      message: `¿Estás seguro de cancelar la sesión ${hora}? Se confirmará que ${alumnoNombre} no llegó a la clase y el horario quedará liberado.`,
      buttons: [
        {
          text: 'Volver',
          role: 'cancel'
        },
        {
          text: 'Sí, cancelar clase',
          role: 'destructive',
          handler: () => {
            this.ejecutarCancelacionClase(clase);
          }
        }
      ]
    });

    await alert.present();
  }

  ejecutarCancelacionClase(clase: any) {
    const resId = clase?.reserva_id || clase?.id;
    if (!resId) {
      this.router.navigate(['/entrenador-entrenamientos']);
      return;
    }

    this.mysqlService.cancelarReserva(resId).subscribe({
      next: async () => {
        // Enviar notificación al alumno si tiene ID
        if (clase.jugador_id) {
          const packNombre = clase.subtitulo || 'Entrenamiento';
          const fecha = clase.fecha || new Date().toISOString().split('T')[0];
          this.notificationService.sendCancelationNotification(clase.jugador_id, packNombre, fecha);
        }

        const toast = await this.toastCtrl.create({
          message: '✅ Clase cancelada por inasistencia del alumno.',
          duration: 3000,
          color: 'dark',
          position: 'bottom'
        });
        await toast.present();

        // Limpiar clase actual si era la que se canceló
        if (this.claseActual && (this.claseActual.id === resId || this.claseActual.reserva_id === resId)) {
          this.claseActual = null;
        }

        // Recargar datos para refrescar la tarjeta
        this.loadProfile();
      },
      error: async (err) => {
        console.error('Error al cancelar reserva:', err);
        const toast = await this.toastCtrl.create({
          message: 'No se pudo cancelar la clase. Intenta desde tu agenda.',
          duration: 2500,
          color: 'danger',
          position: 'bottom'
        });
        await toast.present();
      }
    });
  }

  getProfileImage(url: any): string {
    if (!url || url === 'null' || url === 'undefined' || typeof url !== 'string') {
      return 'assets/avatar.png';
    }
    const cleanUrl = url.trim();
    if (!cleanUrl || cleanUrl === '' || cleanUrl.includes('imagen_defecto') || cleanUrl.includes('default_avatar')) {
      return 'assets/avatar.png';
    }
    if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://') || cleanUrl.startsWith('data:image')) {
      return cleanUrl;
    }
    if (cleanUrl.startsWith('assets/')) {
      return cleanUrl;
    }

    const path = cleanUrl.startsWith('/') ? cleanUrl.substring(1) : cleanUrl;
    if (path.startsWith('prd/') || path.startsWith('api_training/')) {
      return `https://api.padelmanager.cl/${path}`;
    }
    if (path.startsWith('uploads/')) {
      return `https://api.padelmanager.cl/${path}`;
    }
    return `https://api.padelmanager.cl/api_training/${path}`;
  }

  onImgError(event: any) {
    if (event && event.target) {
      const currentSrc: string = event.target.src || '';
      if (currentSrc.includes('api.padelmanager.cl/uploads/')) {
        event.target.src = currentSrc.replace('api.padelmanager.cl/uploads/', 'api.padelmanager.cl/api_training/uploads/');
      } else if (currentSrc.includes('/api_training/uploads/')) {
        event.target.src = currentSrc.replace('/api_training/uploads/', '/prd/uploads/');
      } else {
        event.target.src = 'assets/avatar.png';
      }
    }
  }
}

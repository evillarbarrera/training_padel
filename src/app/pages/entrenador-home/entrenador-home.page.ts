import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('cardsSlider') cardsSlider?: ElementRef;
  proximasClasesList: any[] = [];
  currentCardIndex: number = 0;
  alumnosMap: { [key: string]: any } = {};
  alumnosNombreMap: { [key: string]: any } = {};

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

  formatDiaLabel(fechaStr: string, fechaHoy: string, fechaManana: string): string {
    if (fechaStr === fechaHoy) return 'Hoy';
    if (fechaStr === fechaManana) return 'Mañana';
    try {
      const parts = fechaStr.split('-');
      if (parts.length === 3) {
        const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        return `${diasSemana[d.getDay()]} ${d.getDate()} ${meses[d.getMonth()]}`;
      }
    } catch {
      // Fallback
    }
    return fechaStr;
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

        let clases: any[] = [];

        // 1. Tradicionales (desde hoy en adelante)
        if (res.reservas_tradicionales) {
          const proximas = res.reservas_tradicionales.filter((r: any) => {
            if (!r.fecha) return false;
            if (r.fecha < fechaHoy) return false;
            // Si es hoy, no incluir si terminó hace más de 55 minutos
            if (r.fecha === fechaHoy) {
              const hStr = (r.hora_inicio || '00:00').substring(0, 5);
              const [h, m] = hStr.split(':').map(Number);
              const classDate = new Date();
              classDate.setHours(h, m, 0, 0);
              const diffMins = (today.getTime() - classDate.getTime()) / 60000;
              return diffMins <= 55; // Sigue visible si no ha terminado
            }
            return true;
          });

          clases.push(...proximas.map((r: any) => ({
            id: r.id || r.reserva_id,
            reserva_id: r.id || r.reserva_id,
            jugador_id: r.jugador_id,
            telefono: r.telefono || r.jugador_telefono || '',
            inscritos: r.inscritos || [],
            fecha: r.fecha,
            diaLabel: this.formatDiaLabel(r.fecha, fechaHoy, fechaManana),
            hora: (r.hora_inicio || '').substring(0, 5),
            tipo: (r.tipo === 'pack_grupal' || r.tipo === 'grupal') ? 'Grupal' :
              (
                r.tipo?.toLowerCase() === 'multijugador' ||
                (r.cupos_ocupados && r.cupos_ocupados > 1) ||
                (r.pack_nombre?.toLowerCase()?.includes('duo')) ||
                (r.pack_nombre?.toLowerCase()?.includes('dupla')) ||
                (r.pack_nombre?.toLowerCase()?.includes('pareja'))
              ) ? 'Multijugador' : 'Individual',
            titulo: r.jugador_nombre || 'Clase Agendada',
            subtitulo: r.pack_nombre,
            lugar: r.cancha_nombre ? `${r.club_nombre || 'Club'} · ${r.cancha_nombre}` : (r.club_nombre || 'Club de Pádel'),
            cancha_nombre: r.cancha_nombre,
            estado: r.estado,
            raw: r
          })));
        }

        // 2. Packs Grupales
        if (res.packs_grupales) {
          res.packs_grupales.forEach((g: any) => {
            if (g.fecha && g.fecha >= fechaHoy) {
              // Pack grupal con fecha asignada
              const yaExiste = clases.some(c => c.fecha === g.fecha && c.hora === (g.hora_inicio || '').substring(0, 5));
              if (!yaExiste) {
                clases.push({
                  id: g.id || g.pack_id,
                  reserva_id: g.id || g.pack_id,
                  pack_id: g.pack_id,
                  fecha: g.fecha,
                  diaLabel: this.formatDiaLabel(g.fecha, fechaHoy, fechaManana),
                  hora: (g.hora_inicio || '').substring(0, 5),
                  tipo: 'Grupal',
                  titulo: g.pack_nombre,
                  subtitulo: `${g.cupos_ocupados || g.inscritos_confirmados || 0} inscritos`,
                  lugar: g.club_nombre,
                  estado: 'activo',
                  inscritos: g.inscritos || [],
                  telefono: g.telefono || g.jugador_telefono || '',
                  raw: g
                });
              }
            } else if (g.dia_semana) {
              // Template recurrente: proyectar próximas ocurrencias en los próximos 14 días
              const targetDay = Number(g.dia_semana);
              for (let offset = 0; offset <= 14; offset++) {
                const targetDate = new Date();
                targetDate.setDate(today.getDate() + offset);
                const dayNum = targetDate.getDay() === 0 ? 7 : targetDate.getDay();
                if (dayNum === targetDay) {
                  const targetFechaStr = formatDate(targetDate);
                  const horaStr = (g.hora_inicio || '').substring(0, 5);
                  const yaExiste = clases.some(c => c.fecha === targetFechaStr && c.hora === horaStr);
                  if (!yaExiste) {
                    clases.push({
                      id: g.id || g.pack_id,
                      reserva_id: g.id || g.pack_id,
                      pack_id: g.pack_id,
                      fecha: targetFechaStr,
                      diaLabel: this.formatDiaLabel(targetFechaStr, fechaHoy, fechaManana),
                      hora: horaStr,
                      tipo: 'Grupal',
                      titulo: g.pack_nombre,
                      subtitulo: `${g.cupos_ocupados || g.inscritos_confirmados || 0} inscritos`,
                      lugar: g.club_nombre,
                      estado: 'activo',
                      inscritos: g.inscritos || [],
                      telefono: g.telefono || g.jugador_telefono || '',
                      raw: g
                    });
                  }
                }
              }
            }
          });
        }

        // Ordenar cronológicamente (por fecha y luego por hora)
        clases.sort((a, b) => {
          if (a.fecha !== b.fecha) return a.fecha.localeCompare(b.fecha);
          return a.hora.localeCompare(b.hora);
        });

        // Detectar si hay una clase en curso ahora mismo
        const now = new Date();
        this.claseActual = null;
        for (const c of clases) {
          if (c.fecha === fechaHoy) {
            const [cHour, cMin] = c.hora.split(':').map(Number);
            const cDate = new Date();
            cDate.setHours(cHour, cMin, 0, 0);
            const diffMins = (now.getTime() - cDate.getTime()) / 60000;
            if (diffMins >= -5 && diffMins <= 55) {
              c.isLive = true;
              this.claseActual = c;
              break;
            }
          }
        }

        // Clases de hoy para los contadores y métricas
        this.clasesHoyList = clases.filter(c => c.fecha === fechaHoy);

        // Próximas clases máximo 10
        this.proximasClasesList = clases.slice(0, 10);

        if (this.currentCardIndex >= this.proximasClasesList.length) {
          this.currentCardIndex = 0;
        }

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
    // Fetch students with low pack balance & build lookup cache for phones
    this.mysqlService.getAlumnos(userId).subscribe({
      next: (res: any) => {
        if (res && Array.isArray(res)) {
          this.alumnosMap = {};
          this.alumnosNombreMap = {};
          for (const a of res) {
            const id = a.jugador_id || a.id;
            const tel = a.jugador_telefono || a.telefono || '';
            if (id) {
              this.alumnosMap[id] = { ...a, telefono: tel };
            }
            if (a.jugador_nombre) {
              this.alumnosNombreMap[a.jugador_nombre.toLowerCase().trim()] = { ...a, telefono: tel };
            }
            if (a.nombre) {
              this.alumnosNombreMap[a.nombre.toLowerCase().trim()] = { ...a, telefono: tel };
            }
          }

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
    return this.claseActual || (this.proximasClasesList.length > 0 ? this.proximasClasesList[0] : null);
  }

  get tieneClaseEnCurso(): boolean {
    return !!this.claseActual;
  }

  scrollToCard(index: number) {
    if (this.cardsSlider?.nativeElement) {
      const slider = this.cardsSlider.nativeElement;
      const child = slider.children[index];
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
      this.currentCardIndex = index;
    }
  }

  onCardsScroll(event: any) {
    const el = event.target;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const width = el.offsetWidth || 1;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex >= 0 && newIndex < this.proximasClasesList.length) {
      this.currentCardIndex = newIndex;
    }
  }

  resolverTelefono(jugadorId: any, nombre: string, telRaw: string): string {
    let tel = (telRaw || '').toString().trim();
    if (!tel && jugadorId && this.alumnosMap[jugadorId]) {
      tel = (this.alumnosMap[jugadorId].telefono || '').toString().trim();
    }
    if (!tel && nombre) {
      const cleanNombre = nombre.toLowerCase().trim();
      if (this.alumnosNombreMap[cleanNombre]) {
        tel = (this.alumnosNombreMap[cleanNombre].telefono || '').toString().trim();
      }
    }
    return tel;
  }

  sendWhatsAppReminder(alumno: any, event?: Event) {
    if (event) event.stopPropagation();
    const tel = this.resolverTelefono(alumno.id, alumno.nombre, alumno.telefono);
    const cleanTel = (tel || '').replace(/[^0-9]/g, '');
    if (!cleanTel) {
      this.mostrarAlertaSinTelefono(alumno.nombre);
      return;
    }
    let finalPhone = cleanTel;
    if (finalPhone.length === 9 && finalPhone.startsWith('9')) {
      finalPhone = '56' + finalPhone;
    } else if (finalPhone.length === 8) {
      finalPhone = '569' + finalPhone;
    }
    const msg = `Hola ${alumno.nombre}, te escribo de Padel Academy. Notamos que te quedan ${alumno.clases_disponibles} clases en tu pack. ¡No olvides renovar para asegurar tu horario! 🎾`;
    window.open(`https://wa.me/${finalPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  async contactarAlumnoClase(clase: any, event?: Event) {
    if (event) event.stopPropagation();

    const inscritos = (clase?.inscritos && Array.isArray(clase.inscritos)) ? clase.inscritos : [];

    // Si es un grupo con múltiples inscritos, permitir elegir a cuál contactar
    if (inscritos.length > 1) {
      const buttons: any[] = inscritos.map((ins: any) => {
        const tel = this.resolverTelefono(ins.id, ins.nombre, ins.telefono);
        return {
          text: `${ins.nombre} ${tel ? '(' + tel + ')' : '(Sin celular)'}`,
          icon: 'logo-whatsapp',
          handler: () => {
            this.abrirWhatsAppAlumno(ins.nombre, tel, clase);
          }
        };
      });

      buttons.push({
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      });

      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Contactar por WhatsApp',
        subHeader: 'Selecciona al alumno que deseas contactar:',
        buttons
      });

      await actionSheet.present();
      return;
    }

    // Caso de sesión individual o único alumno
    const primerInscrito = inscritos.length === 1 ? inscritos[0] : null;
    const alumnoNombre = primerInscrito?.nombre || clase?.titulo || 'Alumno';
    const telRaw = primerInscrito?.telefono || clase?.telefono || clase?.jugador_telefono || '';
    const alumnoId = primerInscrito?.id || clase?.jugador_id;
    const tel = this.resolverTelefono(alumnoId, alumnoNombre, telRaw);

    this.abrirWhatsAppAlumno(alumnoNombre, tel, clase);
  }

  abrirWhatsAppAlumno(alumnoNombre: string, tel: string, clase: any) {
    const cleanTel = (tel || '').replace(/[^0-9]/g, '');

    if (!cleanTel) {
      this.mostrarAlertaSinTelefono(alumnoNombre);
      return;
    }

    // Normalizar a formato internacional (especialmente para Chile)
    let finalPhone = cleanTel;
    if (finalPhone.length === 9 && finalPhone.startsWith('9')) {
      finalPhone = '56' + finalPhone; // Prefijo móvil Chile
    } else if (finalPhone.length === 8) {
      finalPhone = '569' + finalPhone;
    }

    const hora = clase?.hora || '';
    const diaLabel = clase?.diaLabel ? clase.diaLabel.toLowerCase() : 'hoy';
    const diaTexto = diaLabel === 'hoy' ? 'hoy' : (diaLabel === 'mañana' ? 'mañana' : `el día ${clase?.diaLabel || ''}`);

    const msg = `Hola ${alumnoNombre}, te contacto de Padelblox respecto a nuestra clase programada para ${diaTexto} a las ${hora} hrs. 🎾`;
    window.open(`https://wa.me/${finalPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  async mostrarAlertaSinTelefono(alumnoNombre: string) {
    const alert = await this.alertCtrl.create({
      header: 'Sin celular registrado',
      subHeader: alumnoNombre,
      message: `El alumno ${alumnoNombre} aún no tiene un número de celular o WhatsApp registrado en su cuenta de Padelblox. Puedes agregarlo en la sección Alumnos.`,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        },
        {
          text: 'Ir a Alumnos',
          handler: () => {
            this.router.navigate(['/alumnos']);
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmarCancelacionAlumnoNoLlego(clase: any, event?: Event) {
    if (event) event.stopPropagation();

    const alumnoNombre = clase?.titulo || 'el alumno';
    const hora = clase?.hora ? `de las ${clase.hora} hrs` : 'programada';

    const alert = await this.alertCtrl.create({
      header: '¿Registrar inasistencia?',
      subHeader: `Sesión ${hora}`,
      message: `Confirmarás que ${alumnoNombre} no asistió a su clase. La sesión se marcará como no presentada y la pista quedará liberada.`,
      cssClass: 'tactical-confirm-alert',
      buttons: [
        {
          text: 'Mantener clase',
          role: 'cancel'
        },
        {
          text: 'Confirmar inasistencia',
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

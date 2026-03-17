import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActionSheetController } from '@ionic/angular';
import { MysqlService } from 'src/app/services/mysql.service';
import { AuthService } from 'src/app/services/auth.service';
import { EntrenamientoService } from 'src/app/services/entrenamiento.service';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonSpinner,
  IonBadge,
  IonRefresher,
  IonRefresherContent,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline, personOutline, addCircleOutline, checkmarkDoneCircleOutline, chevronDownOutline, chevronUpOutline, giftOutline, notificationsOutline, warningOutline, closeOutline, gift, wallet, notificationsOffOutline, close, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-entrenador-home',
  standalone: true,
  imports: [CommonModule, IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    IonSpinner,
    IonBadge,
    IonModal
  ],
  templateUrl: './entrenador-home.page.html',
  styleUrls: ['./entrenador-home.page.scss']
})
export class EntrenadorHomePage {

  coachNombre: string = 'Coach';
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


  constructor(

    public router: Router,
    private mysqlService: MysqlService,
    private authService: AuthService,
    private entrenamientoService: EntrenamientoService,
    private actionSheetCtrl: ActionSheetController,
    private ngZone: NgZone,


  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      logOutOutline,
      personOutline,
      addCircleOutline,
      checkmarkDoneCircleOutline,
      chevronDownOutline,
      chevronUpOutline,
      giftOutline,
      notificationsOutline,
      warningOutline,
      gift,
      close,
      closeOutline,
      locationOutline
    });
  }

  getNotificacionesCount(): number {
    let count = 0;
    if (this.stats && this.stats.promo_activa) count++;
    if (this.showMPReminder) count++;
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
  }

  ionViewWillEnter() {
    this.loadProfile();
  }

  loadProfile() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) return;

    this.isLoading = true;
    this.mysqlService.getPerfil(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.coachNombre = res.user.nombre || 'Coach';

          let foto = res.user.foto_perfil || res.user.link_foto || res.user.foto;
          if (foto && typeof foto === 'string' && foto.trim().length > 0 && !foto.includes('imagen_defecto')) {
            if (!foto.startsWith('http')) {
              const cleanPath = foto.startsWith('/') ? foto.substring(1) : foto;
              this.coachFoto = `https://api.padelmanager.cl/${cleanPath}`;
            } else {
              this.coachFoto = foto;
            }
          } else {
            this.coachFoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(this.coachNombre)}&background=ccff00&color=000`;
          }

          // Check for Mercado Pago Collector ID
          const hideReminder = localStorage.getItem('hideMPReminder');
          if (!res.user.mp_collector_id && hideReminder !== 'true') {
            this.showMPReminder = true;
          } else {
            this.showMPReminder = false;
          }
        }

        this.loadDashboardStats(userId);
        this.loadAgenda();
      },
      error: (err) => {
        console.error('Error loading profile:', err);
        this.isLoading = false;
      }
    });
  }

  loadDashboardStats(userId: number) {
    this.entrenamientoService.getDashboardStats(userId).subscribe({
      next: (res) => {
        this.stats = res;
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
            estado: r.estado
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
            fecha: fechaHoy,
            diaLabel: 'Hoy',
            hora: g.hora_inicio.substring(0, 5),
            tipo: 'Grupal',
            titulo: g.pack_nombre,
            subtitulo: `${g.inscritos_confirmados || 0} inscritos`,
            lugar: g.club_nombre,
            estado: 'activo'
          })));

          clases.push(...grupManana.map((g: any) => ({
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

        this.clasesHoyList = clases;
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


  async openSettings() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ajustes del Entrenador',
      buttons: [
        {
          text: 'Mi Perfil',
          icon: 'person-outline',
          handler: () => {
            this.router.navigate(['/perfil']);
          }
        },
        {
          text: 'Agendar Clase',
          icon: 'add-circle-outline',
          handler: () => {
            this.router.navigate(['/entrenador-agendar']);
          }
        },
        {
          text: 'Horarios disponibles',
          icon: 'time-outline',
          handler: () => {
            this.router.navigate(['/disponibilidad-entrenador']);
          }
        },
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
      ]
    });

    await actionSheet.present();
  }




}

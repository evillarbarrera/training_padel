import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonicModule,
  ActionSheetController,
  AlertController,
  ToastController,
  LoadingController,
  NavController,
  ModalController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  calendarOutline,
  cartOutline,
  trophyOutline,
  peopleOutline,
  flashOutline,
  addOutline,
  lockClosedOutline,
  refreshOutline,
  chevronForwardOutline,
  notificationsOutline,
  locationOutline,
  timeOutline,
  cashOutline,
  shieldCheckmarkOutline,
  logoWhatsapp,
  alertCircleOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
  logOutOutline,
  personOutline,
  swapHorizontalOutline
} from 'ionicons/icons';
import { ProfileSelectorModalComponent } from '../../../components/profile-selector-modal/profile-selector-modal.component';
import { ClubAdminService } from '../../../services/club-admin.service';
import { MysqlService } from '../../../services/mysql.service';
import { AuthService } from '../../../services/auth.service';
import { Haptics, NotificationType, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-club-admin-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './club-admin-home.page.html',
  styleUrls: ['./club-admin-home.page.scss']
})
export class ClubAdminHomePage implements OnInit {
  userId: number = 0;
  userName: string = 'Administrador';
  userFoto: string = 'assets/avatar.png';
  userRole: string = 'administrador_club';

  clubes: any[] = [];
  selectedClub: any = null;

  isLoading: boolean = false;
  selectedFecha: string = '';

  // Stats
  stats: any = {
    ocupacion: '0%',
    ocupacion_num: 0,
    total_reservas_hoy: 0,
    ingresos_canchas: 0,
    ingresos_productos: 0,
    americanos_activos: 0
  };

  canchasSummary: any[] = [];
  proximasReservas: any[] = [];
  activeSectionTab: 'pistas' | 'llegadas' = 'pistas';

  constructor(
    private clubAdminService: ClubAdminService,
    private mysqlService: MysqlService,
    private authService: AuthService,
    private router: Router,
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private ngZone: NgZone
  ) {
    addIcons({
      calendarOutline,
      cartOutline,
      trophyOutline,
      peopleOutline,
      flashOutline,
      addOutline,
      lockClosedOutline,
      refreshOutline,
      chevronForwardOutline,
      notificationsOutline,
      locationOutline,
      timeOutline,
      cashOutline,
      shieldCheckmarkOutline,
      logoWhatsapp,
      alertCircleOutline,
      checkmarkCircleOutline,
      closeCircleOutline,
      logOutOutline,
      personOutline,
      swapHorizontalOutline
    });
  }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.userRole = localStorage.getItem('userRole') || 'administrador_club';
    this.selectedFecha = this.getLocalDateISO();
    this.loadUserProfile();
    this.loadClubes();
  }

  ionViewWillEnter() {
    this.loadUserProfile();
    if (this.selectedClub) {
      this.loadDashboardData();
    }
  }

  getLocalDateISO(): string {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  loadUserProfile() {
    const savedFoto = localStorage.getItem('userFoto') || localStorage.getItem('foto_perfil') || localStorage.getItem('foto');
    if (savedFoto) {
      this.userFoto = this.getProfileImage(savedFoto);
    }
    const savedNombre = localStorage.getItem('userNombre') || localStorage.getItem('userName');
    if (savedNombre) {
      this.userName = savedNombre;
    }

    const uid = this.userId || Number(localStorage.getItem('userId')) || 0;
    if (!uid) return;

    this.mysqlService.getPerfil(uid).subscribe({
      next: (res: any) => {
        if (res) {
          const userData = res.user || res;
          const profileName = `${userData.nombre || ''} ${userData.apellido || ''}`.trim() || userData.nombre;
          if (profileName) {
            this.userName = profileName;
            localStorage.setItem('userNombre', profileName);
          }
          const foto = userData.foto_perfil || userData.foto || userData.link_foto;
          if (foto) {
            localStorage.setItem('userFoto', foto);
            localStorage.setItem('foto_perfil', foto);
            this.userFoto = this.getProfileImage(foto);
          }
        }
      },
      error: (err) => console.error('Error cargando perfil:', err)
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
      if (currentSrc.includes('assets/avatar.png')) {
        return;
      }
      if (currentSrc.includes('api.padelmanager.cl/uploads/')) {
        event.target.src = currentSrc.replace('api.padelmanager.cl/uploads/', 'api.padelmanager.cl/api_training/uploads/');
      } else if (currentSrc.includes('/api_training/uploads/')) {
        event.target.src = currentSrc.replace('/api_training/uploads/', '/prd/uploads/');
      } else {
        event.target.src = 'assets/avatar.png';
      }
    }
  }

  loadClubes(event?: any) {
    this.isLoading = true;
    this.clubAdminService.getClubesAdmin(this.userId).subscribe({
      next: (res: any[]) => {
        this.clubes = res || [];
        if (this.clubes.length > 0) {
          const savedClubId = localStorage.getItem('selectedClubId');
          const matched = this.clubes.find(c => String(c.id) === String(savedClubId));
          this.selectedClub = matched || this.clubes[0];
          localStorage.setItem('selectedClubId', String(this.selectedClub.id));
          this.loadDashboardData(event);
        } else {
          this.isLoading = false;
          if (event) event.target.complete();
        }
      },
      error: (err) => {
        console.error('Error cargando clubes:', err);
        this.isLoading = false;
        if (event) event.target.complete();
      }
    });
  }

  loadDashboardData(event?: any) {
    if (!this.selectedClub) {
      if (event) event.target.complete();
      return;
    }

    this.isLoading = true;
    const clubId = this.selectedClub.id;

    this.clubAdminService.getClubHomeStats(this.userId, clubId, this.selectedFecha).subscribe({
      next: (res) => {
        if (res && res.stats) {
          this.stats = {
            ocupacion: res.stats.ocupacion || '0%',
            ocupacion_num: parseInt(String(res.stats.ocupacion || '0').replace('%', ''), 10) || 0,
            total_reservas_hoy: Number(res.stats.total_reservas_hoy || 0),
            ingresos_canchas: Number(res.stats.ingresos_canchas || 0),
            ingresos_productos: Number(res.stats.ingresos_productos || 0),
            americanos_activos: Number(res.stats.americanos_activos || 0)
          };
        }

        this.loadCanchasAndReservasHoy(event);
      },
      error: (err) => {
        console.error('Error cargando stats:', err);
        this.loadCanchasAndReservasHoy(event);
      }
    });
  }

  loadCanchasAndReservasHoy(event?: any) {
    const clubId = this.selectedClub.id;

    this.clubAdminService.getCanchas(clubId).subscribe({
      next: (canchas: any[]) => {
        const canchasList = canchas || [];

        this.clubAdminService.getClubReservas(clubId, this.selectedFecha).subscribe({
          next: (reservas: any[]) => {
            const reservasList = (reservas || []).filter(r => !this.isCancelada(r));
            this.buildCanchasSummary(canchasList, reservasList);
            this.isLoading = false;
            if (event) event.target.complete();
          },
          error: (err) => {
            console.error('Error cargando reservas:', err);
            this.buildCanchasSummary(canchasList, []);
            this.isLoading = false;
            if (event) event.target.complete();
          }
        });
      },
      error: (err) => {
        console.error('Error cargando canchas:', err);
        this.isLoading = false;
        if (event) event.target.complete();
      }
    });
  }

  isCancelada(r: any): boolean {
    if (!r) return true;
    const est = (r.estado || '').toLowerCase().trim();
    return est === 'cancelada' || est === 'cancelado' || est === 'anulada' || est === 'anulado' || est === 'eliminada';
  }

  isAmericano(res: any): boolean {
    if (!res) return false;
    const estadoLower = (res.estado || '').toString().toLowerCase();
    const tipoLower = (res.tipo || '').toString().toLowerCase();
    const tipoReservaLower = (res.tipo_reserva || '').toString().toLowerCase();
    const reservaTipoLower = (res.reserva_tipo || '').toString().toLowerCase();
    const nombreExtLower = (res.nombre_externo || '').toString().toLowerCase();
    const jugadorNomLower = (res.jugador_nombre || '').toString().toLowerCase();

    return (res.torneo_id && Number(res.torneo_id) > 0) ||
           (res.torneo_americano_id && Number(res.torneo_americano_id) > 0) ||
           estadoLower.includes('americano') ||
           tipoLower.includes('americano') ||
           tipoReservaLower.includes('americano') ||
           reservaTipoLower.includes('americano') ||
           nombreExtLower.includes('americano') ||
           jugadorNomLower.includes('americano');
  }

  buildCanchasSummary(canchas: any[], reservas: any[]) {
    const now = new Date();
    const currentHour = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    this.canchasSummary = canchas.map(c => {
      const reservasCancha = (reservas || []).filter(r => Number(r.cancha_id) === Number(c.id) && !this.isCancelada(r));
      
      // Encontrar la reserva que está ocurriendo ahora o la siguiente
      const enCurso = reservasCancha.find(r => {
        const start = (r.hora_inicio || '').substring(0, 5);
        const end = (r.hora_fin || '').substring(0, 5);
        return currentHour >= start && currentHour < end;
      });

      const proxima = !enCurso ? reservasCancha
        .filter(r => (r.hora_inicio || '').substring(0, 5) > currentHour)
        .sort((a, b) => (a.hora_inicio || '').localeCompare(b.hora_inicio || ''))[0] : null;

      let estadoTexto = 'Libre ahora';
      let estadoColor = 'libre';
      let detalleReserva = '';

      if (enCurso) {
        if (enCurso.estado === 'Bloqueada') {
          estadoTexto = 'Bloqueada';
          estadoColor = 'bloqueada';
          detalleReserva = 'Por mantenimiento / clima';
        } else {
          estadoTexto = 'Ocupada en juego';
          estadoColor = 'ocupada';
          detalleReserva = enCurso.nombre_externo || enCurso.jugador_nombre || 'Reserva confirmada';
        }
      } else if (proxima) {
        estadoTexto = `Próx: ${proxima.hora_inicio.substring(0, 5)}`;
        estadoColor = 'proxima';
        detalleReserva = proxima.nombre_externo || proxima.jugador_nombre || 'Turno agendado';
      }

      return {
        id: c.id,
        nombre: c.nombre,
        tipo: c.tipo || 'Pádel',
        categoria: c.categoria || 'cancha_padel',
        estadoTexto,
        estadoColor,
        detalleReserva,
        enCurso,
        proxima,
        totalHoy: reservasCancha.length
      };
    });

    // Próximas reservas a nivel club para alertas
    this.proximasReservas = (reservas || [])
      .filter(r => !this.isCancelada(r) && r.estado !== 'Bloqueada' && (r.hora_inicio || '').substring(0, 5) >= currentHour)
      .map(r => {
        const matchedCancha = canchas.find(c => Number(c.id) === Number(r.cancha_id));
        const idx = canchas.findIndex(c => Number(c.id) === Number(r.cancha_id));
        let canchaDisplay = '';
        if (matchedCancha && matchedCancha.nombre) {
          canchaDisplay = this.formatCanchaName(matchedCancha.nombre);
        } else if (idx >= 0) {
          canchaDisplay = `Pista ${idx + 1}`;
        } else {
          canchaDisplay = `Pista ${r.cancha_id}`;
        }
        return {
          ...r,
          cancha_display: canchaDisplay
        };
      })
      .sort((a, b) => (a.hora_inicio || '').localeCompare(b.hora_inicio || ''))
      .slice(0, 4);
  }

  formatCanchaName(name: string): string {
    if (!name) return 'Pista';
    return name.replace(/_+/g, ' · ').trim();
  }

  getCanchaDisplay(canchaId: any): string {
    const id = Number(canchaId);
    const cancha = this.canchasSummary.find(c => Number(c.id) === id);
    if (cancha && cancha.nombre) {
      return this.formatCanchaName(cancha.nombre);
    }
    const idx = this.canchasSummary.findIndex(c => Number(c.id) === id);
    if (idx >= 0) return `Pista ${idx + 1}`;
    return `Pista ${canchaId}`;
  }

  handleRefresh(event: any) {
    this.loadClubes(event);
  }

  async openClubSelector() {
    if (this.clubes.length <= 1) return;

    const buttons = this.clubes.map(c => ({
      text: c.nombre,
      icon: 'location-outline',
      handler: () => {
        this.selectedClub = c;
        localStorage.setItem('selectedClubId', String(c.id));
        this.loadDashboardData();
      }
    }));

    buttons.push({
      text: 'Cancelar',
      icon: 'close-circle-outline',
      handler: () => {}
    } as any);

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccionar Sede',
      subHeader: 'Gestiona la sede activa',
      buttons
    });

    await actionSheet.present();
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

  async openFabMenu() {
    try {
      await Haptics.notification({ type: NotificationType.Warning });
    } catch (e) {}

    const buttons: any[] = [
      {
        text: 'Nueva Reserva Rápida',
        icon: 'calendar-outline',
        handler: () => {
          this.router.navigate(['/club-agenda-canchas'], { queryParams: { autoNew: '1' } });
        }
      },
      {
        text: 'Venta Mostrador / POS',
        icon: 'cart-outline',
        handler: () => {
          this.router.navigate(['/club-pos-ventas']);
        }
      },
      {
        text: 'Bloquear Cancha (Lluvia / Mantención)',
        icon: 'lock-closed-outline',
        handler: () => {
          this.router.navigate(['/club-agenda-canchas'], { queryParams: { autoBlock: '1' } });
        }
      },
      {
        text: 'Contactar Soporte WhatsApp',
        icon: 'logo-whatsapp',
        handler: () => {
          window.open('https://wa.me/56969083124?text=Hola%20Padelblox%20Soporte,%20necesito%20asistencia%20en%20mi%20club', '_system');
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
        text: 'Cerrar Sesión',
        icon: 'log-out-outline',
        role: 'destructive',
        handler: () => {
          this.logout();
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        icon: 'close-circle-outline'
      }
    );

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Acción Rápida de Administrador',
      cssClass: 'nike-action-sheet',
      buttons
    });

    await actionSheet.present();
  }

  async openUserMenu() {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch (e) {}

    const buttons: any[] = [
      {
        text: 'Mi Perfil',
        icon: 'person-outline',
        handler: () => {
          this.goToPerfil();
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
        text: 'Cerrar Sesión',
        icon: 'log-out-outline',
        role: 'destructive',
        handler: () => {
          this.logout();
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        icon: 'close-circle-outline'
      }
    );

    const actionSheet = await this.actionSheetCtrl.create({
      header: this.userName || 'Mi Cuenta',
      subHeader: 'Administrador de Club',
      cssClass: 'nike-action-sheet',
      buttons
    });

    await actionSheet.present();
  }

  async openProfileSelectorModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileSelectorModalComponent,
      componentProps: {
        allowCancel: true,
        currentRole: 'administrador_club'
      },
      breakpoints: [0, 0.7, 0.95],
      initialBreakpoint: 0.7,
      cssClass: 'profile-selector-bottom-sheet'
    });
    await modal.present();
  }

  async confirmLogout() {
    try {
      await Haptics.notification({ type: NotificationType.Warning });
    } catch (e) {}

    const alert = await this.alertCtrl.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas salir de tu cuenta de administrador?',
      cssClass: 'nike-alert',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Cerrar Sesión',
          role: 'destructive',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  async logout() {
    console.log('Logging out Club Admin...');
    try {
      await this.authService.logout().catch(err => console.warn('Auth logout error:', err));
    } catch (e) {}

    localStorage.clear();
    sessionStorage.clear();

    this.ngZone.run(() => {
      this.navCtrl.navigateRoot('/login');
    });
  }

  goToAgenda() {
    this.router.navigate(['/club-agenda-canchas']);
  }

  goToPOS() {
    this.router.navigate(['/club-pos-ventas']);
  }

  goToPerfil() {
    this.router.navigate(['/perfil']);
  }

  goToTurnos() {
    this.router.navigate(['/club-turnos-checkin']);
  }

  goToAmericanos() {
    this.router.navigate(['/club-americano-live']);
  }
}

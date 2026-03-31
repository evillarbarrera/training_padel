import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonRefresher,
  IonRefresherContent,
  IonModal,
  IonBadge
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  settingsOutline, homeOutline, calendarOutline, logOutOutline,
  albumsOutline, barbellOutline, personOutline, close,
  calendarNumberOutline, trophyOutline, barChartOutline,
  sparklesOutline, videocamOutline, chevronDownOutline, locationOutline,
  notificationsOutline, closeOutline, ribbonOutline, lockClosedOutline,
  chevronForwardOutline
} from 'ionicons/icons';
import { ActionSheetController, LoadingController, AlertController } from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-jugador-home',
  templateUrl: './jugador-home.page.html',
  styleUrls: ['./jugador-home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    IonRefresher,
    IonRefresherContent,
    IonModal,
    IonBadge
  ]
})
export class JugadorHomePage implements OnInit {

  jugadorNombre = "...";
  fotoPerfil = "";

  // Datos de Packs
  clasesPagadas = 0;
  clasesReservadas = 0;
  clasesDisponibles = 0;
  clasesPendientes = 0;
  clasesGrupales = 0;
  packsDetalle: any[] = [];
  proximaClase: any = null;
  isDev = !environment.production && environment.showSocialFeatures;

  // AI Analysis states
  @ViewChild('videoInput') videoInput!: ElementRef;
  aiResult: any = null;
  dailyTip: any = null;
  sinDireccion = false;
  showTipsInfo = true;
  isNotificacionesOpen = false;

  // Achievements
  logros: any[] = [];
  logrosDesbloqueados = 0;
  logrosTotal = 0;
  logrosPorcentaje = 0;
  showAchievementToast = false;
  achievementToast: any = null;

  modalPacksOpen = false;

  constructor(
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private ngZone: NgZone,
    private mysqlService: MysqlService,

    private http: HttpClient
  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      logOutOutline,
      albumsOutline,
      barbellOutline,
      personOutline,
      close,
      calendarNumberOutline,
      trophyOutline,
      barChartOutline,
      sparklesOutline,
      videocamOutline,
      chevronDownOutline,
      locationOutline,
      notificationsOutline,
      closeOutline,
      ribbonOutline,
      lockClosedOutline,
      chevronForwardOutline
    });
  }

  ngOnInit() {
    this.cargarStats();
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que la vista va a entrar (al navegar desde otras páginas)
    this.cargarStats();
  }

  cargarStats() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }

    this.mysqlService.getHomeStats(userId).subscribe({
      next: (res) => {
        this.jugadorNombre = res.nombre;

        // Try to get photo from stats first
        if (res.foto_perfil) {
          const foto = res.foto_perfil;
          this.fotoPerfil = foto.startsWith('http') ? foto : `https://api.padelmanager.cl/${foto}`;
        }

        // Datos de Packs
        if (res.estadisticas.packs) {
          this.clasesPagadas = res.estadisticas.packs.pagadas;
          this.clasesReservadas = res.estadisticas.packs.reservadas;
          this.clasesDisponibles = res.estadisticas.packs.disponibles;
          this.clasesPendientes = res.estadisticas.packs.pendientes || 0;
          this.clasesGrupales = res.estadisticas.packs.grupales || 0;
          this.packsDetalle = res.estadisticas.packs.detalle || [];
        }

        if (res.prox_clase) {
          this.proximaClase = res.prox_clase;
        } else {
          this.proximaClase = null;
        }
      },
      error: (err) => {
        console.error('Error al cargar estadísticas:', err);
      }
    });

    // Double check with profile endpoint
    this.mysqlService.getPerfil(userId).subscribe({
      next: (res) => {
        if (res.success && res.user) {
          const user = res.user;
          // Perfil photo
          if (user.foto_perfil) {
            const foto = user.foto_perfil;
            this.fotoPerfil = foto.startsWith('http') ? foto : `${environment.apiUrl.replace('/api_training_dev','')}/${foto.startsWith('/') ? foto.substring(1) : foto}`;
          }
          // Check for address
          this.sinDireccion = !user.direccion || user.direccion.trim().length < 3;
        }
      }
    });

    // Fetch Achievements
    this.mysqlService.getLogros(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.logros = res.logros || [];
          this.logrosDesbloqueados = res.desbloqueados || 0;
          this.logrosTotal = res.total || 0;
          this.logrosPorcentaje = res.porcentaje || 0;
        }
      },
      error: (err) => console.error('Error loading logros:', err)
    });

    // Fetch Daily Tip from AI
    this.mysqlService.getDailyTipAI().subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.dailyTip = res;
        }
      },
      error: (err) => console.error('Error loading AI tip:', err)
    });
  }

  handleRefresh(event: any) {
    this.cargarStats();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  getSaldoPercent(): number {
    if (this.clasesPagadas === 0) return 0;
    const pct = (this.clasesDisponibles / this.clasesPagadas) * 100;
    return Math.min(100, Math.max(0, pct));
  }

  agendar() {
    this.router.navigate(['/jugador-reservas']);
  }

  comprarPack() {
    this.alertCtrl.create({
      header: 'Información',
      message: 'Para adquirir un nuevo pack, debes seleccionar un horario en "Agendar Clase" una vez hayas completado tus clases actuales.',
      buttons: ['OK']
    }).then(a => a.present());
  }

  misHabilidades() {
    this.router.navigate(['/mis-habilidades']);
  }

  abrirModalPacks() {
    this.modalPacksOpen = true;
  }

  cerrarModalPacks() {
    this.modalPacksOpen = false;
  }

  analizarVideo() {
    this.videoInput.nativeElement.click();
  }

  async onVideoSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const loading = await this.loadingCtrl.create({
      message: 'Gemini analizando técnica (esto puede tardar 1 min)...',
      spinner: 'dots',
      mode: 'ios',
      cssClass: 'ai-loading-custom'
    });
    await loading.present();

    // Prepare form data
    const formData = new FormData();
    formData.append('video', file);

    // Call our new backend proxy
    this.http.post<any>(`${environment.apiUrl}/ia/gemini_analyze.php`, formData)
      .subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.success) {
            this.aiResult = res.analysis;
          }
        },
        error: (err) => {
          loading.dismiss();
          console.error('AI Analysis Error:', err);
        }
      });
  }

  goToHome() {
    this.router.navigate(['/jugador-home']);
  }

  goToAgenda() {
    this.router.navigate(['/jugador-reservas'], { queryParams: { view: 'agendar' } });
  }

  goToMisClases() {
    this.router.navigate(['/jugador-reservas'], { queryParams: { view: 'mis-entrenamientos' } });
  }

  logout() {
    console.log('Logging out player...');
    localStorage.clear();
    this.ngZone.run(() => {
      this.router.navigate(['/login'], { replaceUrl: true });
    });
  }

  goToMisPacks() {
    this.router.navigate(['/alumno-mis-packs']);
  }

  async openSettings() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ajustes del Jugador',
      buttons: [
        {
          text: 'Mi Perfil',
          icon: 'person-outline',
          handler: () => {
            this.router.navigate(['/perfil']);
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

  goToPerfil() {
    this.isNotificacionesOpen = false;
    setTimeout(() => {
      this.router.navigate(['/perfil']);
    }, 100);
  }

  onNotifClick(type: string) {
    if (type === 'perfil') {
      this.goToPerfil();
    } else if (type === 'tips') {
      this.dismissTipsInfo();
    }
  }

  dismissTipsInfo() {
    this.showTipsInfo = false;
    this.isNotificacionesOpen = false;
  }

  getNotificacionesCount(): number {
    let count = 0;
    if (this.sinDireccion) count++;
    if (this.showTipsInfo) count++;
    return count;
  }

  openNotificaciones() {
    this.isNotificacionesOpen = true;
  }

  closeNotificaciones() {
    this.isNotificacionesOpen = false;
  }

  goToLogros() {
    this.router.navigate(['/mis-logros']);
  }

  showAchievementUnlocked(logro: any) {
    this.achievementToast = logro;
    this.showAchievementToast = true;
    setTimeout(() => {
      this.showAchievementToast = false;
      this.achievementToast = null;
    }, 4500);
  }

  dismissAchievementToast() {
    this.showAchievementToast = false;
    this.achievementToast = null;
  }
}

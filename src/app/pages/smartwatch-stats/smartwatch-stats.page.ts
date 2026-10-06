import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { SmartwatchService, SmartwatchSessionSummary, SmartwatchStatus, ScheduledMatchItem } from '../../services/smartwatch.service';
import { MatchStoryService } from '../../services/match-story.service';
import { NotificationService } from '../../services/notification.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-smartwatch-stats',
  templateUrl: './smartwatch-stats.page.html',
  styleUrls: ['./smartwatch-stats.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SmartwatchStatsPage implements OnInit {
  watchStatus: SmartwatchStatus = {
    supported: false,
    isPaired: false,
    isWatchAppInstalled: false,
    isReachable: false
  };

  currentUser: any = null;
  jugadorNombre: string = 'Jugador PadelBlox';
  fotoPerfil: string = 'assets/avatar.png';
  loading: boolean = true;
  resumenAcumulado: any = null;
  sesiones: any[] = [];
  selectedSession: any = null;
  activeTab: 'resumen' | 'reservas' | 'historial' | 'conexion' = 'reservas';
  metricsSubTab: 'general' | 'golpes' | 'cardio' = 'general';

  // Partidos y Reservas
  proximosPartidos: ScheduledMatchItem[] = [];
  selectedMatch: ScheduledMatchItem | null = null;
  isSyncingWatch: boolean = false;

  // Modo Simulador de Apple Watch en la App Móvil
  watchPreviewScreen: 'home' | 'picker' | 'scoreboard' = 'home';
  previewScoreT1: string = '30';
  previewScoreT2: string = '15';
  previewGamesT1: number = 4;
  previewGamesT2: number = 3;
  previewServingTeam: number = 1;
  previewLastSpeed: number = 112;

  constructor(
    private smartwatchService: SmartwatchService,
    private matchStoryService: MatchStoryService,
    private notificationService: NotificationService,
    public navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit(): void {
    this.loadUser();
    this.checkStatus();
    this.loadData();
    this.loadUpcomingMatches();
  }

  ionViewWillEnter(): void {
    this.loadUser();
  }

  loadUser(): void {
    const raw = localStorage.getItem('currentUser');
    if (raw) {
      try {
        this.currentUser = JSON.parse(raw);
      } catch (e) {
        console.error('Error parsing currentUser', e);
      }
    }

    const nameFromStorage = localStorage.getItem('userName') || localStorage.getItem('nombre');
    if (nameFromStorage) {
      this.jugadorNombre = nameFromStorage;
    } else if (this.currentUser && this.currentUser.nombre) {
      this.jugadorNombre = `${this.currentUser.nombre || ''} ${this.currentUser.apellido || ''}`.trim();
    } else {
      this.jugadorNombre = 'Emmanuel Villar';
    }

    const savedFoto = localStorage.getItem('userFoto') || 
                      localStorage.getItem('foto_perfil') || 
                      this.currentUser?.foto_perfil;
    this.fotoPerfil = this.getProfileImage(savedFoto);
  }

  getProfileImage(url: string | null): string {
    if (!url || url === 'null') return 'assets/avatar.png';
    if (url.startsWith('http')) return url;
    const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
    return `${cleanApiUrl}/prd/${url}`;
  }

  onImgError(event: any): void {
    event.target.src = 'assets/avatar.png';
  }

  async checkStatus(): Promise<void> {
    this.watchStatus = await this.smartwatchService.checkWatchConnection();
  }

  loadData(): void {
    if (!this.currentUser || !this.currentUser.id) {
      this.loading = false;
      this.resumenAcumulado = null;
      this.sesiones = [];
      return;
    }

    this.loading = true;
    this.smartwatchService.getUserStats(this.currentUser.id, 25).subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success && res.resumen_acumulado) {
          this.resumenAcumulado = res.resumen_acumulado;
          this.sesiones = res.sesiones || [];
          if (this.sesiones.length > 0) {
            this.selectedSession = this.sesiones[0];
          } else {
            this.selectedSession = null;
          }
        } else {
          this.resumenAcumulado = null;
          this.sesiones = [];
          this.selectedSession = null;
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Error cargando estadísticas de Smartwatch:', err);
        this.resumenAcumulado = null;
        this.sesiones = [];
        this.selectedSession = null;
      }
    });
  }

  loadUpcomingMatches(): void {
    const uid = this.currentUser?.id;
    if (!uid) {
      this.proximosPartidos = [];
      this.selectedMatch = null;
      return;
    }

    this.smartwatchService.getProximosPartidos(uid).subscribe({
      next: (res) => {
        if (res && res.success && res.proximos_partidos && res.proximos_partidos.length > 0) {
          this.proximosPartidos = res.proximos_partidos;
          this.selectedMatch = res.partido_destacado || this.proximosPartidos[0];
          
          // Auto-schedule 2-hour reminders
          this.notificationService.scheduleMatchReminders(this.proximosPartidos);
        } else {
          this.proximosPartidos = [];
          this.selectedMatch = null;
        }
      },
      error: (err) => {
        console.warn('Error fetching upcoming matches:', err);
        this.proximosPartidos = [];
        this.selectedMatch = null;
      }
    });
  }

  isReminderActive(match: any): boolean {
    return this.notificationService.isMatchReminderActive(match);
  }

  selectMatch(match: ScheduledMatchItem): void {
    this.selectedMatch = match;
    this.watchPreviewScreen = 'home';
  }

  async syncWithAppleWatch(): Promise<void> {
    this.isSyncingWatch = true;
    const name = this.currentUser ? `${this.currentUser.nombre || ''} ${this.currentUser.apellido || ''}`.trim() : 'Jugador PadelBlox';
    await this.smartwatchService.syncMatchesToWatch(this.proximosPartidos, name);

    setTimeout(async () => {
      this.isSyncingWatch = false;
      const toast = await this.toastCtrl.create({
        message: `✓ ¡Partido en ${this.selectedMatch?.cancha_nombre} sincronizado con tu Apple Watch!`,
        duration: 3000,
        position: 'bottom',
        color: 'success'
      });
      await toast.present();
    }, 600);
  }

  // Interactive Simulator Controls
  simAddPoint(team: number): void {
    if (team === 1) {
      if (this.previewScoreT1 === '0') this.previewScoreT1 = '15';
      else if (this.previewScoreT1 === '15') this.previewScoreT1 = '30';
      else if (this.previewScoreT1 === '30') this.previewScoreT1 = '40';
      else {
        this.previewScoreT1 = '0';
        this.previewScoreT2 = '0';
        this.previewGamesT1++;
        this.previewServingTeam = this.previewServingTeam === 1 ? 2 : 1;
      }
    } else {
      if (this.previewScoreT2 === '0') this.previewScoreT2 = '15';
      else if (this.previewScoreT2 === '15') this.previewScoreT2 = '30';
      else if (this.previewScoreT2 === '30') this.previewScoreT2 = '40';
      else {
        this.previewScoreT1 = '0';
        this.previewScoreT2 = '0';
        this.previewGamesT2++;
        this.previewServingTeam = this.previewServingTeam === 1 ? 2 : 1;
      }
    }
    this.previewLastSpeed = Math.floor(Math.random() * (135 - 88 + 1)) + 88;
  }

  verDetalle(s: any): void {
    this.selectedSession = s;
    this.activeTab = 'resumen';
  }

  volver(): void {
    this.navCtrl.back();
  }

  formatDuration(seconds: number): string {
    if (!seconds) return '0 min';
    const mins = Math.floor(seconds / 60);
    const hours = Math.floor(mins / 60);
    const remMins = mins % 60;
    if (hours > 0) {
      return `${hours}h ${remMins}m`;
    }
    return `${mins} min`;
  }

  getStrokePercentage(count: number, total: number): number {
    if (!total || total === 0) return 0;
    return Math.round((count / total) * 100);
  }

  async generarStoryResumen(): Promise<void> {
    if (!this.resumenAcumulado || !this.resumenAcumulado.total_golpes || this.resumenAcumulado.total_golpes === 0) {
      const toast = await this.toastCtrl.create({
        message: 'Aún no tienes partidos sincronizados con tu Apple Watch. ¡Juega tu primer partido para generar tu Match Story!',
        duration: 3000,
        color: 'warning'
      });
      await toast.present();
      return;
    }

    const stats = this.resumenAcumulado;

    try {
      const dataUrl = await this.matchStoryService.generateStoryImage({
        club_nombre: this.selectedMatch?.club_nombre || (this.sesiones.length > 0 ? this.sesiones[0].club_nombre : 'PadelBlox Club'),
        cancha_nombre: this.selectedMatch?.cancha_nombre || 'Padel Central',
        fecha: new Date().toISOString(),
        categoria: 'Métricas de Telemetría Biomecánica',
        es_ganador: true,
        smartwatch_data: {
          velocidad_max_kmh: stats.record_velocidad_kmh || 0,
          velocidad_media_kmh: Math.round((stats.record_velocidad_kmh || 0) * 0.82),
          total_golpes: stats.total_golpes || 0,
          smash_count: stats.total_smash || 0,
          bandeja_count: stats.total_bandejas || 0,
          vibora_count: stats.total_viboras || 0,
          fc_promedio: stats.fc_promedio_general || 0,
          fc_maxima: stats.fc_maxima_historica || 0,
          calorias: stats.total_calorias || 0,
          duracion_segundos: stats.total_segundos_jugados || 0,
          dispositivo: 'Apple Watch'
        }
      }, 'volt');

      await this.matchStoryService.shareStoryImage(dataUrl, 'Mi Rendimiento PadelBlox ⚡');
    } catch (err) {
      console.error('Error generando story:', err);
      const toast = await this.toastCtrl.create({
        message: 'No se pudo generar la tarjeta social de estadísticas',
        duration: 2500,
        color: 'warning'
      });
      await toast.present();
    }
  }
}


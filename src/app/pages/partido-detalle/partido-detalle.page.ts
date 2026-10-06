import { Component, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon, IonFab, IonFabButton, IonButton,
  LoadingController, AlertController, ToastController,
  IonModal, IonSpinner, NavController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  chevronBackOutline, tennisballOutline, informationCircle,
  lockClosedOutline, checkmarkCircle, chevronForwardOutline,
  add, searchOutline, closeOutline, personOutline,
  watchOutline, flashOutline, flameOutline, heartOutline,
  fitnessOutline, analyticsOutline, trophy, sparkles,
  shareOutline, downloadOutline, radioOutline
} from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { MysqlService } from '../../services/mysql.service';
import { MatchStoryService, StoryMatchData } from '../../services/match-story.service';
import { environment } from '../../../environments/environment';

registerLocaleData(localeEs);

@Component({
  selector: 'app-partido-detalle',
  templateUrl: './partido-detalle.page.html',
  styleUrls: ['./partido-detalle.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon, IonFab, IonFabButton, IonModal, IonSpinner, IonButton]
})
export class PartidoDetallePage implements OnInit {
  matchId: number | null = null;
  match: any = null;
  loading = true;
  userId = Number(localStorage.getItem('userId'));

  // Social Story Modal
  showStoryModal = false;
  storyImageUrl = '';
  isGeneratingStory = false;
  storyTheme: 'dark' | 'volt' | 'ocean' = 'dark';

  // Search Modal
  showSearchModal = false;
  playerSearchTerm = '';
  playerResults: any[] = [];
  activeSlot: number = 2; // Default to slot 2
  searching = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private mysql: MysqlService,
    private matchStoryService: MatchStoryService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    addIcons({ 
      chevronBackOutline, tennisballOutline, informationCircle,
      lockClosedOutline, checkmarkCircle, chevronForwardOutline,
      add, searchOutline, closeOutline, personOutline,
      watchOutline, flashOutline, flameOutline, heartOutline,
      fitnessOutline, analyticsOutline, trophy, sparkles,
      shareOutline, downloadOutline, radioOutline
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.matchId = Number(id);
      this.loadMatch();
    }
  }

  getProfileImage(url: string | null) {
    if (!url || url === 'null') return 'assets/avatar.png';
    if (url.startsWith('http')) return url;
    const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
    return `${cleanApiUrl}/prd/${url}`;
  }

  async loadMatch() {
    if (!this.matchId) return;
    this.loading = true;
    
    // In a real scenario, we fetch match by ID. 
    // For now, we'll fetch all my matches and find this one.
    this.mysql.getMisPartidos().subscribe({
      next: (res: any[]) => {
        this.match = res.find(p => p.id === this.matchId);
        if (!this.match) {
          // Fallback if not found in list (e.g. just created)
          this.match = {
            id: this.matchId,
            fecha: new Date(),
            hora_inicio: '20:30',
            hora_fin: '22:00',
            club_nombre: 'Training Padel',
            precio: '5.250'
          };
        }
        if (this.match && (this.match.jugado || this.match.marcador)) {
          this.ensureMatchTelemetry(this.match);
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  ensureMatchTelemetry(p: any): any {
    if (!p) return null;
    if (!p.smartwatch_data) {
      const seed = Math.abs(Number(p.id) || 7);
      const smash = 12 + (seed * 3) % 15;
      const bandeja = 18 + (seed * 5) % 18;
      const vibora = 8 + (seed * 2) % 10;
      const other = 55 + (seed * 7) % 35;
      const total = smash + bandeja + vibora + other;
      const maxV = 112 + (seed * 4) % 24;
      const medV = 76 + (seed * 2) % 14;
      const fc = 142 + (seed * 3) % 18;
      const fcMax = fc + 26 + (seed % 10);
      const cal = 520 + (seed * 28) % 220;

      p.smartwatch_data = {
        sesion_id: 0,
        total_golpes: total,
        smash_count: smash,
        bandeja_count: bandeja,
        vibora_count: vibora,
        velocidad_max_kmh: maxV,
        velocidad_media_kmh: medV,
        calorias: cal,
        fc_promedio: fc,
        fc_maxima: fcMax,
        marcador_t1: p.marcador?.split('-')[0]?.trim() || '6',
        marcador_t2: p.marcador?.split('-')[1]?.trim() || '4',
        dispositivo: 'Apple Watch Ultra 2',
        is_simulated: true
      };
    }
    return p.smartwatch_data;
  }

  getSmashCount(): number {
    return this.match?.smartwatch_data?.smash_count || 0;
  }

  getBandejaCount(): number {
    return this.match?.smartwatch_data?.bandeja_count || 0;
  }

  getViboraCount(): number {
    return this.match?.smartwatch_data?.vibora_count || 0;
  }

  getTotalStrokes(): number {
    if (this.match?.smartwatch_data?.total_golpes) {
      return this.match.smartwatch_data.total_golpes;
    }
    const special = this.getSmashCount() + this.getBandejaCount() + this.getViboraCount();
    return special > 0 ? Math.max(special, 100) : 0;
  }

  getOtherStrokesCount(): number {
    const total = this.getTotalStrokes();
    const special = this.getSmashCount() + this.getBandejaCount() + this.getViboraCount();
    return Math.max(0, total - special);
  }

  getSmashPercent(): number {
    const total = this.getTotalStrokes();
    return total > 0 ? Math.round((this.getSmashCount() / total) * 100) : 0;
  }

  getBandejaPercent(): number {
    const total = this.getTotalStrokes();
    return total > 0 ? Math.round((this.getBandejaCount() / total) * 100) : 0;
  }

  getViboraPercent(): number {
    const total = this.getTotalStrokes();
    return total > 0 ? Math.round((this.getViboraCount() / total) * 100) : 0;
  }

  getOtherPercent(): number {
    const total = this.getTotalStrokes();
    if (total <= 0) return 0;
    const used = this.getSmashPercent() + this.getBandejaPercent() + this.getViboraPercent();
    return Math.max(0, 100 - used);
  }

  getDominantStroke(): { label: string; icon: string; cssClass: string } {
    const s = this.getSmashCount();
    const b = this.getBandejaCount();
    const v = this.getViboraCount();

    if (s >= b && s >= v && s > 0) {
      return { label: 'Ataque Smash', icon: 'flash-outline', cssClass: 'smash' };
    }
    if (b >= s && b >= v && b > 0) {
      return { label: 'Control Bandeja', icon: 'fitness-outline', cssClass: 'bandeja' };
    }
    if (v >= s && v >= b && v > 0) {
      return { label: 'Efecto Víbora', icon: 'sparkles-outline', cssClass: 'vibora' };
    }
    return { label: 'Juego Balanceado', icon: 'fitness-outline', cssClass: 'balanced' };
  }

  formatTime(time: string) {
    if (!time) return '';
    return time.slice(0, 5);
  }

  goBack() {
    this.navCtrl.back();
  }

  openInvite(slot: number) {
    this.activeSlot = slot;
    this.playerSearchTerm = '';
    this.playerResults = [];
    this.showSearchModal = true;
  }

  onSearch() {
    if (this.playerSearchTerm.length < 3) {
      this.playerResults = [];
      return;
    }
    this.searching = true;
    this.mysql.getUsuarios(this.playerSearchTerm).subscribe({
      next: (res: any[]) => {
        // Filter out current user
        this.playerResults = res.filter(u => u.id != this.userId);
        this.searching = false;
      },
      error: () => this.searching = false
    });
  }

  async selectPlayer(player: any) {
    const loader = await this.loadingCtrl.create({ message: 'Agregando al partido...' });
    await loader.present();

    // Map fields to match update_reserva.php expectations
    const payload = { 
      ...this.match,
      jugador_id: this.match.usuario_id, // Important: API uses jugador_id for usuario_id
    };
    payload[`jugador${this.activeSlot}_id`] = player.id;
    
    this.mysql.updateReserva(payload).subscribe({
      next: () => {
        this.match[`jugador${this.activeSlot}_id`] = player.id;
        this.match[`jugador${this.activeSlot}_nombre`] = player.nombre;
        this.match[`jugador${this.activeSlot}_foto`] = player.foto_perfil;
        
        loader.dismiss();
        this.showSearchModal = false;
        
        // SEND NOTIFICATION
        this.notifyPlayer(player);
        
        this.toastCtrl.create({
          message: `${player.nombre} agregado al partido`,
          duration: 2000,
          color: 'success',
          position: 'top'
        }).then(t => t.present());
      },
      error: (err) => {
        loader.dismiss();
        console.error('Error updating player:', err);
      }
    });
  }

  private notifyPlayer(player: any) {
    const notification = {
      user_id: player.id,
      titulo: '¡Has sido invitado!',
      mensaje: `Has sido agregado a un partido de Pádel para el ${this.match.fecha} a las ${this.formatTime(this.match.hora_inicio)}.`,
      data: { 
        action: 'partido-detalle', 
        match_id: this.match.id 
      }
    };
    this.mysql.enviarNotificacion(notification).subscribe();
  }

  isOwner(): boolean {
    return this.match && Number(this.match.usuario_id) === this.userId;
  }

  canCancel(): boolean {
    if (!this.match || !this.match.fecha || !this.match.hora_inicio) return false;
    if (!this.isOwner()) return false;
    
    try {
      const timeStr = this.match.hora_inicio.includes(':') ? this.match.hora_inicio : '00:00:00';
      const matchDateTime = new Date(`${this.match.fecha}T${timeStr}`);
      const now = new Date();
      
      const diffMs = matchDateTime.getTime() - now.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);
      
      return diffHours >= 12;
    } catch (e) {
      console.error('Error calculating canCancel:', e);
      return false;
    }
  }

  async confirmarCancelacion() {
    const alert = await this.alertCtrl.create({
      header: 'Cancelar Reserva',
      message: '¿Estás seguro de que deseas cancelar la reserva de esta cancha? Esta acción no se puede deshacer y liberará la pista.',
      buttons: [
        {
          text: 'Volver',
          role: 'cancel'
        },
        {
          text: 'Sí, Cancelar',
          handler: () => {
            this.ejecutarCancelacion();
          }
        }
      ]
    });
    await alert.present();
  }

  async ejecutarCancelacion() {
    if (!this.match || !this.match.id) return;
    const loader = await this.loadingCtrl.create({ message: 'Cancelando reserva...' });
    await loader.present();

    this.mysql.cancelarReservaClub(this.match.id).subscribe({
      next: () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Reserva cancelada exitosamente',
          duration: 2000,
          color: 'success',
          position: 'top'
        }).then(t => t.present());
        
        this.goBack();
      },
      error: (err) => {
        loader.dismiss();
        console.error('Error al cancelar reserva:', err);
        const errMsg = err.error?.error || 'No se pudo cancelar la reserva';
        this.alertCtrl.create({
          header: 'Error',
          message: errMsg,
          buttons: ['OK']
        }).then(a => a.present());
      }
    });
  }

  // SOCIAL MATCH STORY
  async openStoryModal() {
    if (!this.match) return;
    this.showStoryModal = true;
    await this.renderStory();
  }

  closeStoryModal() {
    this.showStoryModal = false;
    this.storyImageUrl = '';
  }

  async setStoryTheme(theme: 'dark' | 'volt' | 'ocean') {
    this.storyTheme = theme;
    await this.renderStory();
  }

  private async renderStory() {
    if (!this.match) return;
    this.isGeneratingStory = true;

    try {
      const isWin = this.match.id_ganador === 1;
      const data: StoryMatchData = {
        club_nombre: this.match.club_nombre || 'Club PadelBlox',
        cancha_nombre: this.match.cancha_nombre || 'Cancha 1 Panorámica',
        fecha: this.match.fecha,
        hora_inicio: this.match.hora_inicio,
        marcador: this.match.marcador || (this.match.smartwatch_data?.marcador_t1 + ' - ' + this.match.smartwatch_data?.marcador_t2) || '6-4 7-5',
        categoria: this.match.categoria || 'Open',
        es_ganador: isWin,
        pareja1: this.match.jugador1_nombre ? `${this.match.jugador1_nombre} / ${this.match.jugador2_nombre || 'Partner'}` : 'Emmanuel Villar / Mi Pareja',
        pareja2: this.match.jugador3_nombre ? `${this.match.jugador3_nombre} / ${this.match.jugador4_nombre || 'Rival'}` : 'Lucas / Diego',
        smartwatch_data: this.match.smartwatch_data || {
          velocidad_max_kmh: 124,
          velocidad_media_kmh: 86,
          total_golpes: 164,
          smash_count: 18,
          bandeja_count: 26,
          vibora_count: 14,
          fc_promedio: 148,
          fc_maxima: 182,
          calorias: 640,
          duracion_segundos: 4800,
          dispositivo: 'Apple Watch Ultra 2'
        }
      };

      this.storyImageUrl = await this.matchStoryService.generateStoryImage(data, this.storyTheme);
    } catch (err) {
      console.error('Error generating story in partido-detalle:', err);
    } finally {
      this.isGeneratingStory = false;
    }
  }

  async shareStory() {
    if (!this.storyImageUrl) return;
    await this.matchStoryService.shareStoryImage(this.storyImageUrl, '¡Victoria en Pádel! 🎾⚡');
  }

  downloadStory() {
    if (!this.storyImageUrl) return;
    this.matchStoryService.downloadStoryImage(this.storyImageUrl, `padelblox-partido-${this.matchId || 'story'}.png`);
  }
}


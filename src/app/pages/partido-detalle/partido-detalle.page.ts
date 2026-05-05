import { Component, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon, IonFab, IonFabButton,
  LoadingController, AlertController, ToastController,
  IonModal, IonSpinner, NavController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  chevronBackOutline, tennisballOutline, informationCircle,
  lockClosedOutline, checkmarkCircle, chevronForwardOutline,
  add, searchOutline, closeOutline, personOutline
} from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { MysqlService } from '../../services/mysql.service';
import { environment } from '../../../environments/environment';

registerLocaleData(localeEs);

@Component({
  selector: 'app-partido-detalle',
  templateUrl: './partido-detalle.page.html',
  styleUrls: ['./partido-detalle.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon, IonFab, IonFabButton, IonModal, IonSpinner]
})
export class PartidoDetallePage implements OnInit {
  matchId: number | null = null;
  match: any = null;
  loading = true;
  userId = Number(localStorage.getItem('userId'));

  // Search Modal
  showSearchModal = false;
  playerSearchTerm = '';
  playerResults: any[] = [];
  activeSlot: number = 2; // Default to slot 2
  searching = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mysql: MysqlService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    addIcons({ 
      chevronBackOutline, tennisballOutline, informationCircle,
      lockClosedOutline, checkmarkCircle, chevronForwardOutline,
      add, searchOutline, closeOutline, personOutline
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
    return `${cleanApiUrl}/${url}`;
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
        this.loading = false;
      },
      error: () => this.loading = false
    });
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
}

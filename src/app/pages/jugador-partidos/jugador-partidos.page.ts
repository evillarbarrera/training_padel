import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon, 
  IonButton, IonModal,
  AlertController, ToastController, LoadingController
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowBack, trophyOutline, calendarOutline, locationOutline, 
  checkmarkCircleOutline, addOutline, barChartOutline, 
  chevronForward, sparklesOutline, peopleOutline,
  lockClosedOutline, checkmarkCircle, ellipsisVertical,
  shareOutline, pencilOutline, ribbon, calendarClearOutline,
  ellipsisHorizontal, add, chevronDown, personAddOutline,
  closeOutline, timeOutline
} from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jugador-partidos',
  templateUrl: './jugador-partidos.page.html',
  styleUrls: ['./jugador-partidos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonIcon, IonButton,
    IonModal
  ]
})
export class JugadorPartidosPage implements OnInit {
  partidos: any[] = [];
  jugados: any[] = [];
  proximos: any[] = [];
  pendientes: any[] = [];
  loading = true;
  userId = Number(localStorage.getItem('userId'));

  // Stats
  totalJugados = 0;
  victorias = 0;
  derrotas = 0;
  categoriaMasJugada = 'N/A';

  // Tabs
  selectedTab: 'proximos' | 'pendientes' | 'historial' = 'proximos';

  // Filters
  filterClub = '';
  filterCategoria = '';
  filterFecha = '';
  clubesList: any[] = [];

  // Result Modal Data
  showResultModal = false;
  showDetailModal = false;
  selectedMatch: any = null;
  categoria = '';
  set1A: number | null = null;
  set1B: number | null = null;
  set2A: number | null = null;
  set2B: number | null = null;
  set3A: number | null = null;
  set3B: number | null = null;
  
  // Pagination for History
  paginatedJugados: any[] = [];
  currentPage = 1;
  pageSize = 5;
  totalPages = 1;

  idGanador: number | null = null;
  
  // Player Search Modal
  showSearchModal = false;
  playerSearchTerm = '';
  playerResults: any[] = [];
  activeSlot: number = 2; // 2, 3 or 4
  fotoPerfil = "";

  constructor(
    private mysqlService: MysqlService,
    public router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) {
    addIcons({ 
      arrowBack, trophyOutline, calendarOutline, locationOutline, 
      checkmarkCircleOutline, addOutline, barChartOutline, 
      chevronForward, sparklesOutline, peopleOutline,
      lockClosedOutline, checkmarkCircle, ellipsisVertical,
      shareOutline, pencilOutline, ribbon, calendarClearOutline,
      ellipsisHorizontal, add, chevronDown, personAddOutline,
      closeOutline, timeOutline
    });
  }

  ngOnInit() {
    this.loadPartidos();
  }

  loadPartidos(event?: any) {
    this.loading = true;
    this.mysqlService.getMisPartidos().subscribe({
      next: (res: any[]) => {
        this.partidos = res;
        this.updateLists();
        this.calculateStats();
        
        // Extract unique clubs for filter
        const cMap = new Map();
        res.forEach(p => {
            if (p.club_id && !cMap.has(p.club_id)) {
                cMap.set(p.club_id, p.club_nombre);
            }
        });
        this.clubesList = Array.from(cMap.entries()).map(([id, nombre]) => ({ id, nombre }));

        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading matches:', err);
        this.loading = false;
      }
    });

    this.mysqlService.getPerfil(this.userId).subscribe(res => {
      if (res.success && res.user.foto_perfil) {
        this.fotoPerfil = this.getProfileImage(res.user.foto_perfil);
      }
    });
  }

  getProfileImage(url: string | null) {
    if (!url || url === 'null') return 'assets/avatar.png';
    if (url.startsWith('http')) return url;
    const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
    return `${cleanApiUrl}/${url}`;
  }

  updateLists() {
    this.proximos = this.partidos.filter(p => !p.jugado).sort((a,b) => a.fecha.localeCompare(b.fecha));
    
    const now = new Date();
    let tempJugados: any[] = [];
    this.pendientes = [];

    this.partidos.filter(p => p.jugado).forEach(p => {
       if (!p.resultado_registrado) {
          const matchDateStr = p.fecha + 'T' + (p.hora_fin || '00:00:00');
          const matchDate = new Date(matchDateStr);
          const diffDays = (now.getTime() - matchDate.getTime()) / (1000 * 3600 * 24);
          if (diffDays <= 2) {
              this.pendientes.push(p);
          } else {
              tempJugados.push(p);
          }
       } else {
          tempJugados.push(p);
       }
    });

    this.pendientes.sort((a,b) => b.fecha.localeCompare(a.fecha));
    tempJugados.sort((a,b) => b.fecha.localeCompare(a.fecha));

    this.jugados = tempJugados;

    // Apply Filters to Historial
    if (this.filterClub) {
        this.jugados = this.jugados.filter(p => p.club_id == this.filterClub);
    }
    if (this.filterCategoria) {
        this.jugados = this.jugados.filter(p => p.categoria === this.filterCategoria);
    }
    if (this.filterFecha) {
        this.jugados = this.jugados.filter(p => p.fecha === this.filterFecha);
    }

    // Apply Pagination
    this.totalPages = Math.ceil(this.jugados.length / this.pageSize);
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedJugados = this.jugados.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  calculateStats() {
    this.totalJugados = this.jugados.length;
    this.victorias = this.jugados.filter(p => p.id_ganador && ((p.id_ganador == 1 && (p.usuario_id == this.userId || p.jugador2_id == this.userId)) || (p.id_ganador == 2 && (p.jugador3_id == this.userId || p.jugador4_id == this.userId)))).length;
    this.derrotas = this.jugados.filter(p => p.resultado_registrado && !this.isWinner(p)).length;
    
    // Categoría más jugada
    const cats = this.jugados.filter(p => p.categoria).map(p => p.categoria);
    if (cats.length > 0) {
      const counts: any = {};
      cats.forEach(c => counts[c] = (counts[c] || 0) + 1);
      this.categoriaMasJugada = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    } else {
        this.categoriaMasJugada = 'N/A';
    }
  }

  isWinner(p: any): boolean {
    if (!p.id_ganador) return false;
    const isTeam1 = (p.usuario_id == this.userId || p.jugador2_id == this.userId);
    const isTeam2 = (p.jugador3_id == this.userId || p.jugador4_id == this.userId);
    return (p.id_ganador == 1 && isTeam1) || (p.id_ganador == 2 && isTeam2);
  }

  openResultModal(match: any) {
    this.selectedMatch = match;
    this.categoria = match.categoria || 'Amistoso';
    
    // Reset scores
    this.set1A = null; this.set1B = null;
    this.set2A = null; this.set2B = null;
    this.set3A = null; this.set3B = null;
    this.idGanador = null;
    
    this.showResultModal = true;
  }

  openMatchDetail(match: any) {
    this.selectedMatch = match;
    this.categoria = match.categoria || 'Todos';
    this.showDetailModal = true;
  }

  async goToReservar() {
    this.navCtrl.navigateForward('/clubes-reservar');
  }

  isMatchComplete(p: any): boolean {
    return !!(p.jugador1_id && p.jugador2_id && p.jugador3_id && p.jugador4_id);
  }

  getMissingPlayersCount(p: any): number {
    let count = 0;
    if (!p.jugador2_id) count++;
    if (!p.jugador3_id) count++;
    if (!p.jugador4_id) count++;
    return count;
  }

  isUserWinner(p: any): boolean {
    if (!p.resultado_registrado || !p.id_ganador) return false;
    // Asumimos que el usuario actual es siempre jugador1 o parte de la dupla 1 si id_ganador es 1
    // Ajustar según la lógica real de tu API si es necesario
    return p.id_ganador === 1;
  }

  async shareMatch() {
    if (!this.selectedMatch) return;
    const text = `¡Mira mi próximo partido de Pádel! 🎾\n📅 ${this.selectedMatch.fecha}\n🕒 ${this.selectedMatch.hora_inicio}\n📍 En Training Padel Academy`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Partido de Pádel',
          text: text,
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback
      const toast = await this.toastCtrl.create({
        message: 'Copiado al portapapeles',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }

  updateGanadorManual() {
     let winsA = 0;
     let winsB = 0;

     if (this.set1A !== null && this.set1B !== null) {
        if (this.set1A > this.set1B) winsA++; else if (this.set1B > this.set1A) winsB++;
     }
     if (this.set2A !== null && this.set2B !== null) {
        if (this.set2A > this.set2B) winsA++; else if (this.set2B > this.set2A) winsB++;
     }
     if (this.set3A !== null && this.set3B !== null) {
        if (this.set3A > this.set3B) winsA++; else if (this.set3B > this.set3A) winsB++;
     }

     if (winsA > winsB) this.idGanador = 1;
     else if (winsB > winsA) this.idGanador = 2;
     else this.idGanador = null;
  }

  async saveResult() {
    this.updateGanadorManual();

    if (this.set1A === null || this.set1B === null || !this.categoria || !this.idGanador) {
        const toast = await this.toastCtrl.create({
            message: 'Al menos el primer set y la categoría son obligatorios',
            duration: 2000,
            position: 'top',
            color: 'warning'
        });
        toast.present();
        return;
    }

    const loader = await this.loadingCtrl.create({ message: 'Guardando marcador...' });
    await loader.present();

    let marcadorStr = `${this.set1A}-${this.set1B}`;
    if (this.set2A !== null && this.set2B !== null) marcadorStr += ` ${this.set2A}-${this.set2B}`;
    if (this.set3A !== null && this.set3B !== null) marcadorStr += ` ${this.set3A}-${this.set3B}`;

    const payload = {
        reserva_id: this.selectedMatch.id,
        marcador: marcadorStr,
        categoria: this.categoria,
        id_ganador: this.idGanador
    };

    this.mysqlService.saveMatchResult(payload).subscribe({
        next: () => {
            loader.dismiss();
            this.showResultModal = false;
            this.loadPartidos();
            this.showSuccessToast(this.idGanador === 1);
        },
        error: (err) => {
            loader.dismiss();
            console.error('Error saving result:', err);
        }
    });
  }

  async showSuccessToast(won: boolean = true) {
    const title = won ? '¡VICTORIA! 🏆' : '¡A SEGUIR ENTRENANDO! 💪';
    const msg = won 
        ? '¡Felicitaciones! Has sumado puntos importantes a tu historial.' 
        : '¡Ánimo! Registraste el partido, a prepararse para la revancha.';
        
    const alert = await this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: [{
          text: 'Continuar',
          role: 'confirm',
          cssClass: won ? 'btn-success-alert' : 'btn-dark-alert'
        }],
        cssClass: 'premium-feedback-alert'
    });
    
    await alert.present();
  }

  goBack() {
    const role = localStorage.getItem('userRole');
    if (role === 'entrenador') {
      this.router.navigate(['/entrenador-home']);
    } else {
      this.router.navigate(['/jugador-home']);
    }
  }

  // PLAYER SEARCH LOGIC
  openSearch(slot: number) {
    this.activeSlot = slot;
    this.playerSearchTerm = '';
    this.playerResults = [];
    this.showSearchModal = true;
  }

  onPlayerSearch() {
    if (this.playerSearchTerm.length < 3) {
      this.playerResults = [];
      return;
    }
    this.mysqlService.getUsuarios(this.playerSearchTerm).subscribe(res => {
      this.playerResults = res.filter(u => u.id != this.userId);
    });
  }

  async selectPlayer(player: any) {
    const loader = await this.loadingCtrl.create({ message: 'Agregando jugador...' });
    await loader.present();

    const payload = { ...this.selectedMatch };
    payload[`jugador${this.activeSlot}_id`] = player.id;
    
    this.mysqlService.updateReserva(payload).subscribe({
      next: () => {
        loader.dismiss();
        this.showSearchModal = false;
        this.loadPartidos();
        // Update selected match in detail view
        const updated = this.partidos.find(p => p.id === this.selectedMatch.id);
        if (updated) this.selectedMatch = updated;
        
        this.toastCtrl.create({
          message: `${player.nombre} agregado al partido`,
          duration: 2000,
          color: 'success'
        }).then(t => t.present());
      },
      error: (err) => {
        loader.dismiss();
        console.error('Error updating player:', err);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, 
  IonButton, IonRefresher, IonRefresherContent, IonModal,
  AlertController, ToastController, LoadingController, IonBadge
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowBack, trophyOutline, calendarOutline, locationOutline, 
  checkmarkCircleOutline, addOutline, barChartOutline, 
  chevronForward, sparklesOutline, peopleOutline,
  lockClosedOutline, checkmarkCircle, ellipsisVertical,
  shareOutline, pencilOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-jugador-partidos',
  templateUrl: './jugador-partidos.page.html',
  styleUrls: ['./jugador-partidos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonIcon, IonButton, IonRefresher, IonRefresherContent,
    IonModal, IonBadge
  ]
})
export class JugadorPartidosPage implements OnInit {
  partidos: any[] = [];
  jugados: any[] = [];
  proximos: any[] = [];
  loading = true;
  userId = Number(localStorage.getItem('userId'));

  // Stats
  totalJugados = 0;
  victorias = 0;
  derrotas = 0;
  categoriaMasJugada = 'N/A';

  // Tabs
  selectedTab: 'proximos' | 'historial' = 'proximos';

  // Filters
  filterClub = '';
  filterCategoria = '';
  filterFecha = '';
  clubesList: any[] = [];

  // Modal Result
  showResultModal = false;
  showDetailModal = false;
  selectedMatch: any = null;
  categoria = '';
  
  // Scoring Sets
  set1A: number | null = null;
  set1B: number | null = null;
  set2A: number | null = null;
  set2B: number | null = null;
  set3A: number | null = null;
  set3B: number | null = null;
  
  idGanador: number | null = null; // 1: Dupla 1, 2: Dupla 2

  constructor(
    private mysql: MysqlService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
    addIcons({ 
      arrowBack, trophyOutline, calendarOutline, locationOutline, 
      checkmarkCircleOutline, addOutline, barChartOutline,
      chevronForward, sparklesOutline, peopleOutline,
      lockClosedOutline, checkmarkCircle, ellipsisVertical,
      shareOutline, pencilOutline
    });
  }

  ngOnInit() {
    this.loadPartidos();
  }

  loadPartidos(event?: any) {
    this.loading = !event;
    this.mysql.getMisPartidos().subscribe({
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
        if (event) event.target.complete();
      },
      error: (err) => {
        console.error('Error loading matches:', err);
        this.loading = false;
        if (event) event.target.complete();
      }
    });
  }

  updateLists() {
    this.jugados = this.partidos.filter(p => p.jugado);
    this.proximos = this.partidos.filter(p => !p.jugado).sort((a,b) => a.fecha.localeCompare(b.fecha));

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
    this.categoria = match.categoria || '';
    
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

    this.mysql.saveMatchResult(payload).subscribe({
        next: () => {
            loader.dismiss();
            this.showResultModal = false;
            this.loadPartidos();
            this.showSuccessToast();
        },
        error: (err) => {
            loader.dismiss();
            console.error('Error saving result:', err);
        }
    });
  }

  async showSuccessToast() {
    const toast = await this.toastCtrl.create({
        message: '¡Puntos registrados con éxito!',
        duration: 2500,
        position: 'top',
        color: 'success',
        icon: 'checkmark-circle-outline'
    });
    toast.present();
  }

  goBack() {
    this.router.navigate(['/jugador-home']);
  }
}

import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon, 
  IonButton, IonModal,
  AlertController, ToastController, LoadingController
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { SmartwatchService } from '../../services/smartwatch.service';
import { MatchStoryService, StoryMatchData } from '../../services/match-story.service';
import { NotificationService } from '../../services/notification.service';
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
  closeOutline, timeOutline, watchOutline, flashOutline,
  flameOutline, heartOutline, fitnessOutline, analyticsOutline,
  speedometerOutline, playCircleOutline, trophy, shieldOutline,
  chevronForwardOutline, openOutline, cameraOutline, downloadOutline,
  logoInstagram, logoWhatsapp, colorPaletteOutline, flash, sparkles,
  arrowRedoOutline, radioOutline, chevronBackOutline, notificationsOutline,
  pulseOutline
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
  @ViewChild('globalMetricsModal') globalMetricsModal?: IonModal;

  partidos: any[] = [];
  jugados: any[] = [];
  proximos: any[] = [];
  pendientes: any[] = [];
  loading = true;
  userId = Number(localStorage.getItem('userId'));

  // Live Watch Companion Status
  isWatchMatchLive = false;
  liveMatchState: any = null;

  // Smartwatch Modal Detail
  showWatchDetailModal = false;
  selectedWatchMatch: any = null;

  // Global Metrics & Career Stats Modal
  showGlobalMetricsModal = false;

  // Social Story Generator Modal
  showStoryModal = false;
  storyImageUrl = '';
  isGeneratingStory = false;
  storyTheme: 'dark' | 'volt' | 'ocean' = 'dark';
  storyMatchData: any = null;

  // Stats
  totalJugados = 0;
  victorias = 0;
  derrotas = 0;
  categoriaMasJugada = 'N/A';

  // Global Biomechanics & Stroke Stats (Career Totals)
  globalTotalGolpes = 0;
  globalMaxSmash = 0;
  globalTotalCalorias = 0;
  globalSmashCount = 0;
  globalBandejaCount = 0;
  globalViboraCount = 0;
  globalOtherCount = 0;
  globalSmashPercent = 0;
  globalBandejaPercent = 0;
  globalViboraPercent = 0;
  globalOtherPercent = 0;
  globalDominantStroke = { label: 'Juego Balanceado', icon: 'fitness-outline', cssClass: 'balanced', desc: 'Control constante en todas las zonas' };

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
    private smartwatchService: SmartwatchService,
    private matchStoryService: MatchStoryService,
    private notificationService: NotificationService,
    public router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private cdr: ChangeDetectorRef
  ) {
    addIcons({ 
      arrowBack, trophyOutline, calendarOutline, locationOutline, 
      checkmarkCircleOutline, addOutline, barChartOutline, 
      chevronForward, sparklesOutline, peopleOutline,
      lockClosedOutline, checkmarkCircle, ellipsisVertical,
      shareOutline, pencilOutline, ribbon, calendarClearOutline,
      ellipsisHorizontal, add, chevronDown, personAddOutline,
      closeOutline, timeOutline, watchOutline, flashOutline,
      flameOutline, heartOutline, fitnessOutline, analyticsOutline,
      speedometerOutline, playCircleOutline, trophy, shieldOutline,
      chevronForwardOutline, openOutline, cameraOutline, downloadOutline,
      logoInstagram, logoWhatsapp, colorPaletteOutline, flash, sparkles,
      arrowRedoOutline, radioOutline, chevronBackOutline, notificationsOutline,
      pulseOutline
    });
  }

  ngOnInit() {
    this.loadPartidos();
    this.listenToLiveWatch();
  }

  private listenToLiveWatch() {
    this.smartwatchService.isMatchActive$.subscribe(active => {
      this.isWatchMatchLive = active;
    });

    this.smartwatchService.liveScore$.subscribe(score => {
      if (score) {
        this.liveMatchState = score;
        this.isWatchMatchLive = true;
      }
    });
  }

  isReminderActive(match: any): boolean {
    return this.notificationService.isMatchReminderActive(match);
  }

  loadPartidos(event?: any) {
    this.loading = true;
    this.mysqlService.getMisPartidos().subscribe({
      next: (res: any[]) => {
        this.partidos = (res || []).filter(p => p.estado !== 'Cancelada' && p.estado !== 'Cancelado');
        this.partidos.forEach(p => {
          if (p.smartwatch_data && typeof p.smartwatch_data === 'string') {
            try {
              p.smartwatch_data = JSON.parse(p.smartwatch_data);
            } catch (e) {}
          }
        });
        this.updateLists();
        this.calculateStats();

        // Automatically schedule 2-hour pre-match reminders for upcoming matches
        this.notificationService.scheduleMatchReminders(this.proximos);
        
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
    if (!url || url === 'null' || url === 'undefined' || url.trim() === '') return 'assets/avatar.png';
    if (url.startsWith('http')) return url;
    const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
    return `${cleanApiUrl}/prd/${url}`;
  }

  handleAvatarError(event: any) {
    if (event?.target) {
      event.target.src = 'assets/avatar.png';
    }
  }

  isUserInTeam1(p: any): boolean {
    if (!p) return true;
    return (Number(p.usuario_id) === this.userId || Number(p.jugador2_id) === this.userId);
  }

  totalMatchesWithSensors = 0;

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
    this.totalPages = Math.ceil(this.jugados.length / this.pageSize) || 1;
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
    this.victorias = this.jugados.filter(p => this.isWinner(p)).length;
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

    // --- CALCULATE REAL GLOBAL CAREER BIOMECHANICS & STROKES ---
    let tGolpes = 0;
    let mSmash = 0;
    let tCal = 0;
    let sCount = 0;
    let bCount = 0;
    let vCount = 0;
    let oCount = 0;
    let sensorMatches = 0;

    this.jugados.forEach(p => {
      const sw = p.smartwatch_data;
      if (sw && (Number(sw.total_golpes) > 0 || Number(sw.velocidad_max_kmh) > 0 || Number(sw.calorias) > 0)) {
        sensorMatches++;
        tGolpes += Number(sw.total_golpes) || 0;
        if ((Number(sw.velocidad_max_kmh) || 0) > mSmash) {
          mSmash = Number(sw.velocidad_max_kmh);
        }
        tCal += Number(sw.calorias) || 0;
        sCount += Number(sw.smash_count) || 0;
        bCount += Number(sw.bandeja_count) || 0;
        vCount += Number(sw.vibora_count) || 0;
        const special = (Number(sw.smash_count) || 0) + (Number(sw.bandeja_count) || 0) + (Number(sw.vibora_count) || 0);
        oCount += Math.max(0, (Number(sw.total_golpes) || 0) - special);
      }
    });

    this.totalMatchesWithSensors = sensorMatches;
    this.globalTotalGolpes = tGolpes;
    this.globalMaxSmash = mSmash;
    this.globalTotalCalorias = tCal;
    this.globalSmashCount = sCount;
    this.globalBandejaCount = bCount;
    this.globalViboraCount = vCount;
    this.globalOtherCount = oCount;

    if (tGolpes > 0) {
      this.globalSmashPercent = Math.round((sCount / tGolpes) * 100);
      this.globalBandejaPercent = Math.round((bCount / tGolpes) * 100);
      this.globalViboraPercent = Math.round((vCount / tGolpes) * 100);
      this.globalOtherPercent = Math.max(0, 100 - (this.globalSmashPercent + this.globalBandejaPercent + this.globalViboraPercent));

      if (sCount >= bCount && sCount >= vCount && sCount > 0) {
        this.globalDominantStroke = { label: 'Smash de Potencia', icon: 'flash', cssClass: 'smash', desc: 'Juego aéreo ofensivo con alto ratio de definición' };
      } else if (bCount >= sCount && bCount >= vCount && bCount > 0) {
        this.globalDominantStroke = { label: 'Bandeja Táctica', icon: 'fitness-outline', cssClass: 'bandeja', desc: 'Excelente control de red y transición defensiva' };
      } else if (vCount >= sCount && vCount >= bCount && vCount > 0) {
        this.globalDominantStroke = { label: 'Víbora con Efecto', icon: 'sparkles', cssClass: 'vibora', desc: 'Golpes laterales con aceleración y veneno' };
      } else {
        this.globalDominantStroke = { label: 'Control y Distribución', icon: 'fitness-outline', cssClass: 'balanced', desc: 'Gran consistencia y volumen de juego en pista' };
      }
    } else {
      this.globalSmashPercent = 0;
      this.globalBandejaPercent = 0;
      this.globalViboraPercent = 0;
      this.globalOtherPercent = 0;
      this.globalDominantStroke = { label: 'Sin registros de sensores', icon: 'watch-outline', cssClass: 'balanced', desc: 'Juega tus partidos con la app de Apple Watch para registrar potencia y distribución de golpes.' };
    }
  }

  // --- STROKE STATISTICS HELPERS (REAL BIOMECHANICS) ---
  getSmashCount(match: any): number {
    return Number(match?.smartwatch_data?.smash_count) || 0;
  }

  getBandejaCount(match: any): number {
    return Number(match?.smartwatch_data?.bandeja_count) || 0;
  }

  getViboraCount(match: any): number {
    return Number(match?.smartwatch_data?.vibora_count) || 0;
  }

  getTotalStrokes(match: any): number {
    if (match?.smartwatch_data?.total_golpes) {
      return Number(match.smartwatch_data.total_golpes) || 0;
    }
    return this.getSmashCount(match) + this.getBandejaCount(match) + this.getViboraCount(match);
  }

  getOtherStrokesCount(match: any): number {
    const total = this.getTotalStrokes(match);
    const special = this.getSmashCount(match) + this.getBandejaCount(match) + this.getViboraCount(match);
    return Math.max(0, total - special);
  }

  getSmashPercent(match: any): number {
    const total = this.getTotalStrokes(match);
    return total > 0 ? Math.round((this.getSmashCount(match) / total) * 100) : 0;
  }

  getBandejaPercent(match: any): number {
    const total = this.getTotalStrokes(match);
    return total > 0 ? Math.round((this.getBandejaCount(match) / total) * 100) : 0;
  }

  getViboraPercent(match: any): number {
    const total = this.getTotalStrokes(match);
    return total > 0 ? Math.round((this.getViboraCount(match) / total) * 100) : 0;
  }

  getOtherPercent(match: any): number {
    const total = this.getTotalStrokes(match);
    if (total <= 0) return 0;
    const used = this.getSmashPercent(match) + this.getBandejaPercent(match) + this.getViboraPercent(match);
    return Math.max(0, 100 - used);
  }

  getDominantStroke(match: any): { label: string; icon: string; cssClass: string } {
    const s = this.getSmashCount(match);
    const b = this.getBandejaCount(match);
    const v = this.getViboraCount(match);

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

  setWinsA: number = 0;
  setWinsB: number = 0;

  updateGanadorManual() {
     let winsA = 0;
     let winsB = 0;

     const s1A = this.set1A !== null && this.set1A !== undefined && this.set1A !== ('' as any) ? Number(this.set1A) : null;
     const s1B = this.set1B !== null && this.set1B !== undefined && this.set1B !== ('' as any) ? Number(this.set1B) : null;
     const s2A = this.set2A !== null && this.set2A !== undefined && this.set2A !== ('' as any) ? Number(this.set2A) : null;
     const s2B = this.set2B !== null && this.set2B !== undefined && this.set2B !== ('' as any) ? Number(this.set2B) : null;
     const s3A = this.set3A !== null && this.set3A !== undefined && this.set3A !== ('' as any) ? Number(this.set3A) : null;
     const s3B = this.set3B !== null && this.set3B !== undefined && this.set3B !== ('' as any) ? Number(this.set3B) : null;

     if (s1A !== null && s1B !== null) {
        if (s1A > s1B) winsA++; else if (s1B > s1A) winsB++;
     }
     if (s2A !== null && s2B !== null) {
        if (s2A > s2B) winsA++; else if (s2B > s2A) winsB++;
     }
     if (s3A !== null && s3B !== null) {
        if (s3A > s3B) winsA++; else if (s3B > s3A) winsB++;
     }

     this.setWinsA = winsA;
     this.setWinsB = winsB;

     if (winsA > winsB) this.idGanador = 1;
     else if (winsB > winsA) this.idGanador = 2;
     else this.idGanador = null;
  }

  applyScorePreset(s1A: number, s1B: number, s2A: number | null = null, s2B: number | null = null, s3A: number | null = null, s3B: number | null = null) {
    this.set1A = s1A;
    this.set1B = s1B;
    this.set2A = s2A;
    this.set2B = s2B;
    this.set3A = s3A;
    this.set3B = s3B;
    this.updateGanadorManual();
  }

  setCategoria(cat: string) {
    this.categoria = cat;
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

  // SMARTWATCH TELEMETRY / MATCH STATS MODAL
  openWatchModal(match: any, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    if (match && typeof match.smartwatch_data === 'string') {
      try {
        match.smartwatch_data = JSON.parse(match.smartwatch_data);
      } catch (e) {}
    }
    this.selectedWatchMatch = match;
    this.showWatchDetailModal = true;
    this.cdr.detectChanges();
  }

  closeWatchModal() {
    this.showWatchDetailModal = false;
    this.selectedWatchMatch = null;
    this.cdr.detectChanges();
  }

  // GLOBAL METRICS & CAREER STATS MODAL
  openGlobalMetricsModal() {
    this.showGlobalMetricsModal = true;
    this.cdr.detectChanges();
  }

  closeGlobalMetricsModal() {
    this.showGlobalMetricsModal = false;
    if (this.globalMetricsModal) {
      try {
        this.globalMetricsModal.dismiss();
      } catch (e) {}
    }
    this.cdr.detectChanges();
  }

  goToSmartwatchStats(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.closeWatchModal();
    this.router.navigate(['/smartwatch-stats']);
  }

  // SOCIAL STORY GENERATOR (NIKE / STRAVA STYLE 9:16)
  async openStoryModal(match: any, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.storyMatchData = match;
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
    if (!this.storyMatchData) return;
    this.isGeneratingStory = true;

    try {
      const isWin = this.isWinner(this.storyMatchData);
      const data: StoryMatchData = {
        club_nombre: this.storyMatchData.club_nombre || 'Club PadelBlox',
        cancha_nombre: this.storyMatchData.cancha_nombre || 'Cancha Central Cristal',
        fecha: this.storyMatchData.fecha,
        hora_inicio: this.storyMatchData.hora_inicio,
        marcador: this.storyMatchData.marcador || (this.storyMatchData.smartwatch_data?.marcador_t1 + ' - ' + this.storyMatchData.smartwatch_data?.marcador_t2) || '6-4 7-5',
        categoria: this.storyMatchData.categoria || 'Open Pro',
        es_ganador: isWin,
        pareja1: this.storyMatchData.jugador1_nombre ? `${this.storyMatchData.jugador1_nombre} / ${this.storyMatchData.jugador2_nombre || 'Partner'}` : 'Emmanuel Villar / Mi Pareja',
        pareja2: this.storyMatchData.jugador3_nombre ? `${this.storyMatchData.jugador3_nombre} / ${this.storyMatchData.jugador4_nombre || 'Rival'}` : 'Rival 1 / Rival 2',
        smartwatch_data: this.storyMatchData.smartwatch_data || undefined
      };

      this.storyImageUrl = await this.matchStoryService.generateStoryImage(data, this.storyTheme);
    } catch (err) {
      console.error('Error generating story image:', err);
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
    this.matchStoryService.downloadStoryImage(this.storyImageUrl, `padelblox-match-${this.storyMatchData?.id || 'story'}.png`);
  }
}


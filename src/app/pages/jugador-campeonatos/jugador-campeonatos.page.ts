import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon, IonButton, IonSpinner,
  AlertController, LoadingController, ToastController, IonModal,
  IonFab, IonFabButton, IonRefresher, IonRefresherContent
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  locationOutline, searchOutline, trophyOutline, 
  arrowBack, heartOutline, shareOutline, chevronForward,
  addCircleOutline, closeOutline, personAddOutline,
  star, tennisballOutline, calendarOutline, chevronDown,
  peopleOutline, mapOutline, ribbonOutline, timeOutline,
  checkmarkCircleOutline, closeCircleOutline, arrowForwardOutline,
  podiumOutline, listOutline, personOutline
} from 'ionicons/icons';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-jugador-campeonatos',
  templateUrl: './jugador-campeonatos.page.html',
  styleUrls: ['./jugador-campeonatos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonIcon, IonButton, IonModal, IonSpinner,
    IonFab, IonFabButton, IonRefresher, IonRefresherContent
  ]
})
export class JugadorCampeonatosPage implements OnInit {
  clubes: any[] = [];
  torneos: any[] = [];
  selectedClub: any = null;
  selectedTab: 'americanos' | 'torneos' | 'ligas' = 'americanos';
  loading = true;
  userId: number = 0;
  userName: string = '';
  searchTerm: string = '';
  userRegion: string = '';
  userPhoto: string = 'assets/avatar.png';

  americanosList: any[] = [];
  torneosList: any[] = [];
  ligasClubList: any[] = [];
  
  // Competition type filter in search
  selectedCompetitionFilter: 'todos' | 'torneo' | 'liga' | 'americano' = 'todos';

  // Filters
  selectedRegion: string = '';
  selectedComuna: string = '';
  regiones: string[] = [];
  comunas: string[] = [];
  allComunas: string[] = [];
  
  // Partner Selection & Enrollment Steps
  showPartnerModal = false;
  partnerSearchTerm = '';
  partnerResults: any[] = [];
  selectedPartner: any = null;
  selectedTournament: any = null;
  selectedCategoriaId: number = 0;
  enrollmentStep: 'category' | 'partner' | 'restrictions' = 'partner';
  availableCategorias: any[] = [];
  
  // Time Restrictions for League
  restriccionesLiga: { dia: string; hora_inicio: string; hora_fin: string }[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  formatPrecio(precio: any): string {
    if (precio === null || precio === undefined || precio === '' || precio === 0 || precio === '0' || precio === '0.00' || precio === 0.00) {
      return '';
    }
    const val = typeof precio === 'number' ? precio : parseFloat(String(precio).replace(/[^0-9.]/g, ''));
    if (isNaN(val) || val <= 0) {
      return '';
    }
    return '$' + Math.round(val).toLocaleString('es-CL');
  }

  getShortDay(day: string): string {
    const map: { [key: string]: string } = {
      'Lunes': 'Lun',
      'Martes': 'Mar',
      'Miércoles': 'Mié',
      'Jueves': 'Jue',
      'Viernes': 'Vie',
      'Sábado': 'Sáb',
      'Domingo': 'Dom'
    };
    return map[day] || day;
  }

  agregarRestriccionLiga() {
    if (this.restriccionesLiga.length < 2) {
      this.restriccionesLiga.push({ dia: 'Lunes', hora_inicio: '18:00', hora_fin: '20:00' });
    }
  }

  eliminarRestriccionLiga(index: number) {
    this.restriccionesLiga.splice(index, 1);
  }

  defaultClubImage: string = 'assets/fondo-cancha.png';
  heroBackground: string = 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop';

  // MIS TORNEOS
  mainView: 'mis-torneos' | 'buscar' = 'mis-torneos';
  misTab: 'activos' | 'historial' = 'activos';
  misTorneos: any[] = [];
  loadingMisTorneos = false;
  selectedMiTorneo: any = null;
  miTorneoPartidos: any[] = [];
  miTorneoProximo: any = null;
  miTorneoHistorial: any[] = [];
  
  // PAGINATION FOR HISTORY
  historyLimit = 5;
  historyPageSize = 5;

  get paginatedHistorial(): any[] {
    return this.misTorneosHistorial.slice(0, this.historyLimit);
  }

  loadMoreHistory() {
    this.historyLimit += this.historyPageSize;
  }

  get misTorneosActivos(): any[] {
    const today = new Date().toLocaleDateString('sv');
    return this.misTorneos.filter(t => {
      const fecha = t.fecha || t.fecha_inicio || '';
      const fechaFin = (t.fecha_fin && t.fecha_fin !== '0000-00-00') ? t.fecha_fin : (fecha || '2099-12-31');
      const estado = (t.estado || '').toLowerCase();
      if (estado === 'cerrado' || estado === 'finalizado') return false;
      return fechaFin >= today;
    });
  }

  get misTorneosHistorial(): any[] {
    const today = new Date().toLocaleDateString('sv');
    return this.misTorneos.filter(t => {
      const fecha = t.fecha || t.fecha_inicio || '';
      const fechaFin = (t.fecha_fin && t.fecha_fin !== '0000-00-00') ? t.fecha_fin : (fecha || '2099-12-31');
      const estado = (t.estado || '').toLowerCase();
      if (estado === 'cerrado' || estado === 'finalizado') return true;
      return fechaFin < today;
    });
  }

  // Competition Detail View state (Inscritos, Fixture Semanal, Posiciones)
  selectedCompeticionDetail: any = null;
  loadingCompDetail: boolean = false;
  compDetailTab: 'inscritos' | 'fixture' | 'posiciones' = 'inscritos';
  selectedCategoryIdx: number = 0;
  selectedJornadaIdx: number = 0;

  async openCompeticionDetail(comp: any) {
    const tipo = (comp.table_source || comp.tipo_torneo || comp.tipo || 'v2').toLowerCase();
    const id = comp.id;

    const loader = await this.loadingCtrl.create({ message: 'Cargando información...' });
    await loader.present();
    this.loadingCompDetail = true;

    this.mysql.getCompeticionDetalle(id, tipo).subscribe({
      next: (res) => {
        loader.dismiss();
        this.loadingCompDetail = false;
        if (res.success && res.competicion) {
          this.selectedCompeticionDetail = res.competicion;
          this.compDetailTab = 'inscritos';
          this.selectedCategoryIdx = 0;
          this.selectedJornadaIdx = 0;
          this.soloMisPartidosFixture = true;
        } else {
          this.presentAlert('Aviso', res.error || 'No se pudo obtener el detalle de la competición.');
        }
      },
      error: (err) => {
        loader.dismiss();
        this.loadingCompDetail = false;
        this.presentAlert('Error', 'Error de conexión con el servidor.');
      }
    });
  }

  get displayCategorias(): any[] {
    if (!this.selectedCompeticionDetail?.categorias) return [];
    const allCats = this.selectedCompeticionDetail.categorias;

    if (this.isEnrolledInSelectedComp) {
      const enrolledCat = this.getEnrolledCategoryObj(this.selectedCompeticionDetail);
      if (enrolledCat) {
        return [enrolledCat];
      }
    }

    return allCats;
  }

  getEnrolledCategoryObj(comp: any): any {
    if (!comp || !comp.categorias || !Array.isArray(comp.categorias) || comp.categorias.length === 0) return null;

    const enrolledComp = this.selectedMiTorneo || this.misTorneos?.find((t: any) => {
      const compId = Number(comp.id);
      const tId = Number(t.id);
      const compTipo = (comp.tipo || comp.tipo_torneo || comp.table_source || '').toLowerCase();
      const tTipo = (t.tipo || t.tipo_torneo || t.table_source || '').toLowerCase();
      if (tId === compId) {
        if (compTipo.includes('liga') && tTipo.includes('liga')) return true;
        if (compTipo.includes('americano') && tTipo.includes('americano')) return true;
        if (!compTipo.includes('liga') && !compTipo.includes('americano') && !tTipo.includes('liga') && !tTipo.includes('americano')) return true;
      }
      return false;
    });

    const targetCatId = Number(enrolledComp?.categoria_id || enrolledComp?.id_categoria || comp.categoria_id || comp.id_categoria);
    const targetCatName = (enrolledComp?.categoria_nombre || enrolledComp?.categoria || comp.categoria_nombre || '').toLowerCase().trim();
    const targetParejaId = Number(enrolledComp?.pareja_id || comp.pareja_id);
    const targetParejaName = (enrolledComp?.nombre_pareja || comp.nombre_pareja || '').toLowerCase().trim();
    const uId = Number(localStorage.getItem('userId')) || this.userId;

    // Pass 1: Check matches in category jornadas/partidos
    for (const cat of comp.categorias) {
      const partidos: any[] = [...(cat.partidos || [])];
      if (cat.jornadas && Array.isArray(cat.jornadas)) {
        cat.jornadas.forEach((j: any) => {
          if (j.partidos && Array.isArray(j.partidos)) partidos.push(...j.partidos);
        });
      }
      for (const m of partidos) {
        if (this.isUserInMatch(m, enrolledComp || comp)) {
          return cat;
        }
      }
    }

    // Pass 2: Check category ID or name
    for (const cat of comp.categorias) {
      if (targetCatId && (Number(cat.id) === targetCatId || Number(cat.categoria_id) === targetCatId)) {
        return cat;
      }
      if (targetCatName && cat.nombre && (cat.nombre.toLowerCase().trim() === targetCatName || cat.nombre.toLowerCase().includes(targetCatName) || targetCatName.includes(cat.nombre.toLowerCase()))) {
        return cat;
      }
    }

    // Pass 3: Check parejas/inscritos/tabla_posiciones list in category
    for (const cat of comp.categorias) {
      const list = [...(cat.parejas || []), ...(cat.inscritos || []), ...(cat.tabla_posiciones || [])];
      for (const p of list) {
        if (targetParejaId && (Number(p.id) === targetParejaId || Number(p.pareja_id) === targetParejaId)) {
          return cat;
        }
        if (uId && (Number(p.jugador1_id) === uId || Number(p.jugador2_id) === uId || Number(p.p1_j1_id) === uId || Number(p.p1_j2_id) === uId || Number(p.p2_j1_id) === uId || Number(p.p2_j2_id) === uId || Number(p.usuario_id) === uId)) {
          return cat;
        }
        if (targetParejaName && p.nombre_pareja && p.nombre_pareja.toLowerCase().trim() === targetParejaName) {
          return cat;
        }
      }
    }

    return comp.categorias[0] || null;
  }

  get currentDetailCategory(): any {
    const cats = this.displayCategorias;
    if (!cats || cats.length === 0) return null;
    return cats[this.selectedCategoryIdx] || cats[0] || null;
  }

  // Pagination for Inscritos in Competition Detail Modal
  paginaInscritosDetail: number = 1;
  itemsPorPaginaInscritosDetail: number = 8;

  get listInscritosCategoryDetail(): any[] {
    if (!this.currentDetailCategory) return [];
    return this.currentDetailCategory.inscritos || this.currentDetailCategory.parejas || [];
  }

  get totalPaginasInscritosDetail(): number {
    return Math.ceil(this.listInscritosCategoryDetail.length / this.itemsPorPaginaInscritosDetail) || 1;
  }

  get inscritosPaginadosDetail(): any[] {
    const inicio = (this.paginaInscritosDetail - 1) * this.itemsPorPaginaInscritosDetail;
    return this.listInscritosCategoryDetail.slice(inicio, inicio + this.itemsPorPaginaInscritosDetail);
  }

  cambiarPaginaInscritosDetail(pag: number): void {
    if (pag >= 1 && pag <= this.totalPaginasInscritosDetail) {
      this.paginaInscritosDetail = pag;
    }
  }

  get currentDetailJornadas(): any[] {
    return this.currentDetailCategory?.jornadas || [];
  }

  get currentDetailJornada(): any {
    const jornadas = this.currentDetailJornadas;
    return jornadas[this.selectedJornadaIdx] || jornadas[0] || null;
  }

  soloMisPartidosFixture: boolean = true;

  get filteredDetailJornadaPartidos(): any[] {
    const rawPartidos = this.currentDetailJornada?.partidos || [];
    if (!this.soloMisPartidosFixture) {
      return rawPartidos;
    }
    return rawPartidos.filter((m: any) => this.isUserInMatch(m, this.selectedMiTorneo || this.selectedCompeticionDetail));
  }

  isUserInMatch(match: any, torneo?: any): boolean {
    if (!match) return false;
    const torneoContext = torneo || this.selectedMiTorneo || this.selectedCompeticionDetail;

    if (torneoContext?.pareja_id) {
      const pId = Number(torneoContext.pareja_id);
      if (Number(match.pareja1_id) === pId || Number(match.pareja2_id) === pId) return true;
    }

    if (torneoContext?.nombre_pareja) {
      const myPairName = torneoContext.nombre_pareja.trim().toLowerCase();
      const p1Name = (match.pareja1_nombre || '').trim().toLowerCase();
      const p2Name = (match.pareja2_nombre || '').trim().toLowerCase();
      if (p1Name && (p1Name.includes(myPairName) || myPairName.includes(p1Name))) return true;
      if (p2Name && (p2Name.includes(myPairName) || myPairName.includes(p2Name))) return true;
    }

    const userId = Number(localStorage.getItem('userId')) || this.userId;
    if (userId) {
      if (Number(match.jugador1_id) === userId || Number(match.jugador2_id) === userId ||
          Number(match.jugador3_id) === userId || Number(match.jugador4_id) === userId ||
          Number(match.p1_j1_id) === userId || Number(match.p1_j2_id) === userId ||
          Number(match.p2_j1_id) === userId || Number(match.p2_j2_id) === userId) {
        return true;
      }
    }

    const myNameWords = (this.userName || '').toLowerCase().split(' ').filter((w: string) => w.length >= 3);
    if (myNameWords.length > 0) {
      const fullMatchStr = `${match.pareja1_nombre || ''} ${match.pareja2_nombre || ''} ${match.jugador1_nombre || ''} ${match.jugador2_nombre || ''} ${match.jugador3_nombre || ''} ${match.jugador4_nombre || ''}`.toLowerCase();
      if (myNameWords.some((w: string) => fullMatchStr.includes(w))) return true;
    }

    return false;
  }

  isEnrolledInComp(comp: any): boolean {
    if (!comp) return false;
    const compId = Number(comp.id);
    const compTipo = (comp.tipo || comp.tipo_torneo || comp.table_source || '').toLowerCase();
    
    return this.misTorneos.some(t => {
      const tId = Number(t.id);
      const tTipo = (t.tipo || t.tipo_torneo || t.table_source || '').toLowerCase();
      if (tId === compId) {
        if (compTipo.includes('liga') && tTipo.includes('liga')) return true;
        if (compTipo.includes('americano') && tTipo.includes('americano')) return true;
        if (!compTipo.includes('liga') && !compTipo.includes('americano') && !tTipo.includes('liga') && !tTipo.includes('americano')) return true;
      }
      return false;
    });
  }

  get isEnrolledInSelectedComp(): boolean {
    if (this.selectedMiTorneo) return true;
    if (!this.selectedCompeticionDetail) return false;
    
    const compId = Number(this.selectedCompeticionDetail.id);
    const compTipo = (this.selectedCompeticionDetail.tipo || this.selectedCompeticionDetail.tipo_torneo || this.selectedCompeticionDetail.table_source || '').toLowerCase();
    
    return this.misTorneos.some(t => {
      const tId = Number(t.id);
      const tTipo = (t.tipo || t.tipo_torneo || t.table_source || '').toLowerCase();
      if (tId === compId) {
        if (compTipo.includes('liga') && tTipo.includes('liga')) return true;
        if (compTipo.includes('americano') && tTipo.includes('americano')) return true;
        if (!compTipo.includes('liga') && !compTipo.includes('americano') && !tTipo.includes('liga') && !tTipo.includes('americano')) return true;
      }
      return false;
    });
  }

  getEnrolledCategoryName(): string {
    if (this.selectedMiTorneo?.categoria_nombre) {
      return this.selectedMiTorneo.categoria_nombre;
    }
    if (this.selectedCompeticionDetail) {
      const compId = Number(this.selectedCompeticionDetail.id);
      const compTipo = (this.selectedCompeticionDetail.tipo || this.selectedCompeticionDetail.tipo_torneo || '').toLowerCase();
      const found = this.misTorneos.find(t => {
        const tId = Number(t.id);
        const tTipo = (t.tipo || t.tipo_torneo || t.table_source || '').toLowerCase();
        if (tId === compId) {
          if (compTipo.includes('liga') && tTipo.includes('liga')) return true;
          if (compTipo.includes('americano') && tTipo.includes('americano')) return true;
          if (!compTipo.includes('liga') && !compTipo.includes('americano') && !tTipo.includes('liga') && !tTipo.includes('americano')) return true;
        }
        return false;
      });
      if (found?.categoria_nombre) return found.categoria_nombre;
    }
    return '';
  }

  goBack() {
    if (this.selectedCompeticionDetail) {
      this.selectedCompeticionDetail = null;
    } else if (this.selectedMiTorneo) {
      this.selectedMiTorneo = null;
    } else if (this.selectedClub) {
      this.selectedClub = null;
    } else {
      const role = localStorage.getItem('userRole');
      if (role === 'entrenador') {
        this.router.navigate(['/entrenador-home']);
      } else {
        this.router.navigate(['/jugador-home']);
      }
    }
  }

  constructor(
    private mysql: MysqlService, 
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    addIcons({ 
      locationOutline, searchOutline, trophyOutline, 
      arrowBack, heartOutline, shareOutline, chevronForward,
      addCircleOutline, closeOutline, personAddOutline,
      star, tennisballOutline, calendarOutline, chevronDown,
      peopleOutline, mapOutline, ribbonOutline, timeOutline,
      checkmarkCircleOutline, closeCircleOutline, arrowForwardOutline,
      podiumOutline, listOutline, personOutline
    });
  }

  ngOnInit() {
    this.loadUserProfile();
    this.loadMisTorneos();
    this.loadClubesConTorneos();
  }

  doRefresh(event: any) {
    this.loadMisTorneos();
    this.loadClubesConTorneos();
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  loadMisTorneos() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) return;
    
    this.loadingMisTorneos = true;
    this.historyLimit = this.historyPageSize;
    this.mysql.getMisTorneosCompleto(userId).subscribe({
      next: (res) => {
        this.misTorneos = res || [];
        this.loadingMisTorneos = false;
      },
      error: (err) => {
        console.error('Error loading my tournaments', err);
        this.misTorneos = [];
        this.loadingMisTorneos = false;
      }
    });
  }

  getMatchTimestamp(match: any): number {
    if (!match) return Infinity;
    const rawStr = match.fecha_hora || match.fecha;
    if (!rawStr) return Infinity;
    const datePart = rawStr.includes(' ') ? rawStr.split(' ')[0] : rawStr;
    if (!datePart.match(/^\d{4}-\d{2}-\d{2}$/)) return Infinity;
    const [y, m, d] = datePart.split('-').map((v: string) => parseInt(v, 10));
    let hour = 0, min = 0;
    const horaStr = match.hora || (rawStr.includes(' ') ? rawStr.split(' ')[1] : '');
    if (horaStr && horaStr.includes(':')) {
      const parts = horaStr.split(':');
      hour = parseInt(parts[0], 10) || 0;
      min = parseInt(parts[1], 10) || 0;
    }
    return new Date(y, m - 1, d, hour, min).getTime();
  }

  openMiTorneo(torneo: any) {
    this.selectedMiTorneo = torneo;
    const userId = Number(localStorage.getItem('userId'));
    const partidos = torneo.partidos || [];
    
    this.miTorneoHistorial = partidos.filter((p: any) => p.resultado_t1 !== null && p.resultado_t2 !== null);
    const pendientes = partidos.filter((p: any) => p.resultado_t1 === null || p.resultado_t2 === null);
    if (pendientes.length > 0) {
      pendientes.sort((a: any, b: any) => this.getMatchTimestamp(a) - this.getMatchTimestamp(b));
    }
    this.miTorneoProximo = pendientes.length > 0 ? pendientes[0] : null;
    this.miTorneoPartidos = partidos;

    // Abrir detalle unificado completo (Inscritos, Fixture de partidos, Posiciones/Ranking)
    this.openCompeticionDetail(torneo);
  }

  getMatchResult(match: any): 'win' | 'loss' | 'draw' | 'pending' {
    if (match.resultado_t1 === null || match.resultado_t2 === null) return 'pending';
    const userId = Number(localStorage.getItem('userId'));
    
    if (this.selectedMiTorneo?.tipo_torneo === 'americano') {
      const isTeam1 = match.jugador1_id == userId || match.jugador2_id == userId;
      const r1 = Number(match.resultado_t1);
      const r2 = Number(match.resultado_t2);
      if (r1 === r2) return 'draw';
      if (isTeam1) return r1 > r2 ? 'win' : 'loss';
      return r2 > r1 ? 'win' : 'loss';
    } else {
      if (match.gane !== undefined) return match.gane ? 'win' : 'loss';
      const r1 = Number(match.resultado_t1);
      const r2 = Number(match.resultado_t2);
      if (r1 === r2) return 'draw';
      return 'pending';
    }
  }

  isUserInTeam2(match: any, torneo?: any): boolean {
    if (!match) return false;
    const torneoContext = torneo || this.selectedMiTorneo || this.selectedCompeticionDetail;
    const userId = Number(localStorage.getItem('userId')) || this.userId;

    if (torneoContext?.pareja_id && match.pareja2_id && Number(match.pareja2_id) === Number(torneoContext.pareja_id)) {
      return true;
    }
    if (torneoContext?.pareja_id && match.pareja1_id && Number(match.pareja1_id) === Number(torneoContext.pareja_id)) {
      return false;
    }

    if (torneoContext?.nombre_pareja) {
      const myPairName = torneoContext.nombre_pareja.trim().toLowerCase();
      const p1Name = (match.pareja1_nombre || '').trim().toLowerCase();
      const p2Name = (match.pareja2_nombre || '').trim().toLowerCase();
      if (p2Name && (p2Name.includes(myPairName) || myPairName.includes(p2Name))) return true;
      if (p1Name && (p1Name.includes(myPairName) || myPairName.includes(p1Name))) return false;
    }

    if (userId) {
      if (Number(match.jugador3_id) === userId || Number(match.jugador4_id) === userId) return true;
      if (Number(match.p2_j1_id) === userId || Number(match.p2_j2_id) === userId) return true;
      if (Number(match.jugador1_id) === userId || Number(match.jugador2_id) === userId) return false;
      if (Number(match.p1_j1_id) === userId || Number(match.p1_j2_id) === userId) return false;
    }

    const p2Str = `${match.pareja2_nombre || ''} ${match.jugador3_nombre || ''} ${match.jugador4_nombre || ''}`.toLowerCase();
    const p1Str = `${match.pareja1_nombre || ''} ${match.jugador1_nombre || ''} ${match.jugador2_nombre || ''}`.toLowerCase();
    const myFirstName = (this.userName || '').split(' ')[0].trim().toLowerCase();
    if (myFirstName && myFirstName.length >= 3) {
      if (p2Str.includes(myFirstName) && !p1Str.includes(myFirstName)) return true;
      if (p1Str.includes(myFirstName)) return false;
    }

    return false;
  }

  getMatchTeamNames(match: any): { team1: string, team2: string } {
    let t1 = match.pareja1_nombre || (match.jugador1_nombre ? `${match.jugador1_nombre} / ${match.jugador2_nombre || ''}` : 'Pareja 1');
    let t2 = match.pareja2_nombre || (match.jugador3_nombre ? `${match.jugador3_nombre} / ${match.jugador4_nombre || ''}` : 'Pareja 2');

    if (this.selectedMiTorneo?.tipo_torneo === 'americano') {
      t1 = `${match.jugador1_nombre} / ${match.jugador2_nombre || ''}`;
      t2 = `${match.jugador3_nombre} / ${match.jugador4_nombre || ''}`;
    }

    if (this.isUserInTeam2(match)) {
      return { team1: t2, team2: t1 };
    }
    return { team1: t1, team2: t2 };
  }

  getMatchScore(match: any): string {
    if (!match || match.resultado_t1 === null || match.resultado_t1 === undefined) return 'Pendiente';
    const flip = this.isUserInTeam2(match);
    const r1 = flip ? match.resultado_t2 : match.resultado_t1;
    const r2 = flip ? match.resultado_t1 : match.resultado_t2;
    return `${r1} - ${r2}`;
  }

  getMatchFechaDisplay(match: any): string {
    if (!match) return 'Por programar';
    const rawStr = match.fecha_hora || match.fecha;
    if (!rawStr) return 'Por programar';
    
    try {
      const datePart = rawStr.includes(' ') ? rawStr.split(' ')[0] : rawStr;
      const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

      if (datePart.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [yStr, mStr, dStr] = datePart.split('-');
        const y = parseInt(yStr, 10);
        const m = parseInt(mStr, 10);
        const d = parseInt(dStr, 10);
        const dt = new Date(y, m - 1, d);
        const dayName = days[dt.getDay()];
        const monthName = months[m - 1] || mStr;
        return `${dayName}, ${d} ${monthName} ${y}`;
      }

      if (datePart.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        const [dStr, mStr, yStr] = datePart.split('/');
        const y = parseInt(yStr, 10);
        const m = parseInt(mStr, 10);
        const d = parseInt(dStr, 10);
        const dt = new Date(y, m - 1, d);
        const dayName = days[dt.getDay()];
        const monthName = months[m - 1] || mStr;
        return `${dayName}, ${d} ${monthName} ${y}`;
      }

      const textMatch = String(rawStr).trim().match(/^(\d{1,2})\s+([A-Za-záéíóúÁÉÍÓÚ]+)\s+(\d{4})/);
      if (textMatch) {
        const d = parseInt(textMatch[1], 10);
        const mNameRaw = textMatch[2].toLowerCase();
        const y = parseInt(textMatch[3], 10);
        const monthIdx = months.findIndex(m => mNameRaw.startsWith(m.toLowerCase()));
        if (monthIdx !== -1) {
          const dt = new Date(y, monthIdx, d);
          const dayName = days[dt.getDay()];
          return `${dayName}, ${d} ${months[monthIdx]} ${y}`;
        }
      }

      return datePart;
    } catch (e) {
      return rawStr;
    }
  }

  getMatchHoraDisplay(match: any): string {
    if (!match) return 'Por definir';
    if (match.hora && match.hora !== '00:00:00' && match.hora !== '00:00') {
      return match.hora.substring(0, 5) + ' hrs';
    }
    if (match.fecha_hora && match.fecha_hora.includes(' ')) {
      const timePart = match.fecha_hora.split(' ')[1];
      if (timePart && timePart !== '00:00:00' && timePart !== '00:00') {
        return timePart.substring(0, 5) + ' hrs';
      }
    }
    return 'Por definir';
  }

  getMatchCanchaDisplay(match: any): string {
    if (!match) return 'Por asignar';
    const cName = match.cancha_nombre || match.cancha;
    if (cName && String(cName).trim() !== '') {
      return String(cName);
    }
    return 'Por asignar';
  }

  getTorneoStatusClass(torneo: any): string {
    const estado = (torneo.estado || '').toLowerCase();
    if (estado === 'cerrado' || estado === 'finalizado') return 'cerrado';
    return 'activo';
  }

  getTorneoStatusLabel(torneo: any): string {
    const estado = (torneo.estado || '').toLowerCase();
    if (estado === 'cerrado' || estado === 'finalizado') return 'Finalizado';
    
    const today = new Date().toLocaleDateString('sv');
    const fecha = torneo.fecha || torneo.fecha_inicio || '';
    if (fecha > today) return 'Inscrito';
    
    return 'En Juego';
  }

  loadUserProfile() {
    const userId = Number(localStorage.getItem('userId')) || 0;
    this.userId = userId;
    this.userName = (localStorage.getItem('userNombre') || localStorage.getItem('userName') || '').trim();
    if (userId) {
      this.mysql.getPerfil(userId).subscribe(res => {
        if (res.success && res.user) {
          const profileName = `${res.user.nombre || ''} ${res.user.apellido || ''}`.trim();
          if (profileName) this.userName = profileName;
          const region = res.direccion?.region || res.user?.region;
          if (region && !this.selectedRegion) {
            this.selectedRegion = region;
            this.onFilterChange();
          }
          const photo = res.user.foto_perfil || res.user.foto;
          if (photo) {
            const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
            this.userPhoto = photo.startsWith('http') ? photo : `${cleanApiUrl}/prd/${photo}`;
          }
          this.sortClubes();
        }
      });
    }
  }

  loadClubesConTorneos() {
    this.loading = true;
    const today = new Date().toISOString().split('T')[0];
    
    this.mysql.getTorneosPublicos().subscribe((allTorneos: any[]) => {
      const rawList = Array.isArray(allTorneos) ? allTorneos : [];
      const activeTorneos = rawList.filter(t => {
        if (t.table_source === 'americanos') {
          return t.fecha >= today;
        }
        return true; 
      });

      this.torneos = activeTorneos;

      // Always fetch direct ligas to ensure ligas are included even if get_torneos_public didn't include them
      this.mysql.getLigas().subscribe({
        next: (resLigas: any) => {
          const ligasArr = resLigas?.ligas || (Array.isArray(resLigas) ? resLigas : []);
          if (Array.isArray(ligasArr) && ligasArr.length > 0) {
            const existingIds = new Set(this.torneos.filter(t => t.table_source === 'liga').map(t => Number(t.id)));
            for (const l of ligasArr) {
              if (!existingIds.has(Number(l.id))) {
                this.torneos.push({
                  ...l,
                  table_source: 'liga',
                  tipo: 'Liga',
                  club_id: Number(l.club_id) > 0 ? Number(l.club_id) : 21,
                  imagen: l.imagen_url || '',
                  imagen_display: l.imagen_url || '',
                  fecha_display: l.fecha_inicio || '',
                  fecha: l.fecha_inicio || '',
                  inscritos: l.total_parejas || 0
                });
              }
            }
          }
          this.processClubesList();
        },
        error: () => {
          this.processClubesList();
        }
      });
    });
  }

  processClubesList() {
    this.mysql.getClubes().subscribe((res: any[]) => {
      const allClubs = Array.isArray(res) ? res : [];
      this.clubes = allClubs
        .map((c) => {
          const clubId = Number(c.id);
          const cNom = (c.nombre || '').toLowerCase();
          const clubTorneos = this.torneos.filter(t => {
            const tClubId = Number(t.club_id);
            if (tClubId === clubId) return true;
            if (tClubId <= 1 || !tClubId) return true;
            return false;
          });

          c.numAmericanos = clubTorneos.filter(t => t.table_source === 'americanos').length;
          c.numTorneos = clubTorneos.filter(t => t.table_source === 'v2').length;
          c.numLigas = clubTorneos.filter(t => t.table_source === 'liga').length;
          c.totalCompeticiones = c.numAmericanos + c.numTorneos + c.numLigas;

          if (c.logo && c.logo.trim() !== '' && c.logo !== 'null') {
            const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
            c.logoUrl = c.logo.startsWith('http') ? c.logo : `${cleanApiUrl}/prd/${c.logo}`;
          } else {
            c.logoUrl = this.defaultClubImage;
          }
          return c;
        })
        .filter(c => c.totalCompeticiones > 0);

      this.regiones = [...new Set(this.clubes.map(c => c.region).filter(r => r))].sort();
      this.allComunas = [...new Set(this.clubes.map(c => c.comuna).filter(c => c))].sort();
      this.comunas = [...this.allComunas];

      this.sortClubes();
      this.loading = false;
    });
  }

  sortClubes() {
    if (this.clubes.length === 0) return;
    this.clubes.sort((a, b) => {
      if (this.selectedRegion) {
        const aInR = a.region === this.selectedRegion ? 1 : 0;
        const bInR = b.region === this.selectedRegion ? 1 : 0;
        if (aInR !== bInR) return bInR - aInR;
      }
      
      if (this.userRegion && !this.selectedRegion) {
        const aInUserR = a.region === this.userRegion ? 1 : 0;
        const bInUserR = b.region === this.userRegion ? 1 : 0;
        if (aInUserR !== bInUserR) return bInUserR - aInUserR;
      }
      
      return a.nombre.localeCompare(b.nombre);
    });
  }

  onFilterChange() {
    if (this.selectedRegion) {
      this.comunas = [...new Set(
        this.clubes
          .filter(c => c.region === this.selectedRegion)
          .map(c => c.comuna)
          .filter(cm => cm)
      )].sort();
      if (!this.comunas.includes(this.selectedComuna)) {
        this.selectedComuna = '';
      }
    } else {
      this.comunas = [...this.allComunas];
    }
    this.sortClubes();
  }

  get filteredClubes() {
    let filtered = this.clubes;

    if (this.selectedCompetitionFilter === 'torneo') {
      filtered = filtered.filter(c => c.numTorneos > 0);
    } else if (this.selectedCompetitionFilter === 'liga') {
      filtered = filtered.filter(c => c.numLigas > 0);
    } else if (this.selectedCompetitionFilter === 'americano') {
      filtered = filtered.filter(c => c.numAmericanos > 0);
    }

    if (this.selectedRegion) {
      filtered = filtered.filter(c => c.region === this.selectedRegion);
    }

    if (this.selectedComuna) {
      filtered = filtered.filter(c => c.comuna === this.selectedComuna);
    }

    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(c => 
        (c.nombre && c.nombre.toLowerCase().includes(term)) || 
        (c.direccion && c.direccion.toLowerCase().includes(term))
      );
    }

    return filtered;
  }

  get filteredCompeticiones() {
    let list = this.torneos;

    if (this.selectedCompetitionFilter === 'torneo') {
      list = list.filter(t => t.table_source === 'v2');
    } else if (this.selectedCompetitionFilter === 'liga') {
      list = list.filter(t => t.table_source === 'liga');
    } else if (this.selectedCompetitionFilter === 'americano') {
      list = list.filter(t => t.table_source === 'americanos');
    }

    if (this.selectedRegion) {
      list = list.filter(t => !t.club_region || t.club_region === this.selectedRegion);
    }

    if (this.selectedComuna) {
      list = list.filter(t => !t.club_comuna || t.club_comuna === this.selectedComuna);
    }

    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase().trim();
      list = list.filter(t => 
        (t.nombre && t.nombre.toLowerCase().includes(term)) || 
        (t.club_nombre && t.club_nombre.toLowerCase().includes(term))
      );
    }

    return list;
  }

  onSelectClub(club: any) {
    this.selectedClub = club;
    const today = new Date().toISOString().split('T')[0];
    const clubId = Number(club.id);

    const allForClub = this.torneos.filter(t => {
      const tClubId = Number(t.club_id);
      if (tClubId === clubId || tClubId <= 1 || !tClubId) return true;
      return false;
    });
    
    this.americanosList = allForClub.filter(t => t.table_source === 'americanos' && t.fecha >= today);
    this.torneosList = allForClub.filter(t => t.table_source === 'v2');
    this.ligasClubList = allForClub.filter(t => t.table_source === 'liga');

    // ALSO FETCH LIGAS directly from mysql.getLigas(club.id) to guarantee ligas display
    this.mysql.getLigas(club.id).subscribe({
      next: (res: any) => {
        const fetchedLigas = res?.ligas || (Array.isArray(res) ? res : []);
        if (Array.isArray(fetchedLigas) && fetchedLigas.length > 0) {
          const ligasFormateadas = fetchedLigas.map((l: any) => ({
            ...l,
            table_source: 'liga',
            tipo: 'Liga',
            club_id: l.club_id || club.id,
            imagen: l.imagen_url || '',
            imagen_display: l.imagen_url || '',
            fecha_display: l.fecha_inicio || '',
            fecha: l.fecha_inicio || '',
            inscritos: l.total_parejas || 0
          }));

          const existingIds = new Set(this.ligasClubList.map(l => Number(l.id)));
          for (const fl of ligasFormateadas) {
            if (!existingIds.has(Number(fl.id))) {
              this.ligasClubList.push(fl);
            }
          }
        } else {
          // Ultimate fallback: fetch ALL ligas without club_id filter
          this.mysql.getLigas().subscribe((resAll: any) => {
            const allLigas = resAll?.ligas || (Array.isArray(resAll) ? resAll : []);
            if (Array.isArray(allLigas) && allLigas.length > 0) {
              const ligasFormateadas = allLigas.map((l: any) => ({
                ...l,
                table_source: 'liga',
                tipo: 'Liga',
                club_id: club.id,
                imagen: l.imagen_url || '',
                imagen_display: l.imagen_url || '',
                fecha_display: l.fecha_inicio || '',
                fecha: l.fecha_inicio || '',
                inscritos: l.total_parejas || 0
              }));
              const existingIds = new Set(this.ligasClubList.map(l => Number(l.id)));
              for (const fl of ligasFormateadas) {
                if (!existingIds.has(Number(fl.id))) {
                  this.ligasClubList.push(fl);
                }
              }
            }
          });
        }
      },
      error: () => {
        // Fallback: fetch ALL ligas
        this.mysql.getLigas().subscribe((resAll: any) => {
          const allLigas = resAll?.ligas || (Array.isArray(resAll) ? resAll : []);
          if (Array.isArray(allLigas) && allLigas.length > 0) {
            const ligasFormateadas = allLigas.map((l: any) => ({
              ...l,
              table_source: 'liga',
              tipo: 'Liga',
              club_id: club.id,
              imagen: l.imagen_url || '',
              imagen_display: l.imagen_url || '',
              fecha_display: l.fecha_inicio || '',
              fecha: l.fecha_inicio || '',
              inscritos: l.total_parejas || 0
            }));
            const existingIds = new Set(this.ligasClubList.map(l => Number(l.id)));
            for (const fl of ligasFormateadas) {
              if (!existingIds.has(Number(fl.id))) {
                this.ligasClubList.push(fl);
              }
            }
          }
        });
      }
    });

    if (this.selectedCompetitionFilter === 'torneo') {
      this.selectedTab = 'torneos';
    } else if (this.selectedCompetitionFilter === 'liga') {
      this.selectedTab = 'ligas';
    } else if (this.selectedCompetitionFilter === 'americano') {
      this.selectedTab = 'americanos';
    } else {
      if (this.americanosList.length > 0) this.selectedTab = 'americanos';
      else if (this.torneosList.length > 0) this.selectedTab = 'torneos';
      else if (this.ligasClubList.length > 0) this.selectedTab = 'ligas';
      else this.selectedTab = 'americanos';
    }
  }

  async openEnrollment(torneo: any) {
    this.selectedTournament = torneo;
    this.selectedPartner = null;
    this.partnerSearchTerm = '';
    this.partnerResults = [];
    this.restriccionesLiga = [];
    
    if (torneo.table_source === 'v2') {
      const loader = await this.loadingCtrl.create({ message: 'Cargando...' });
      await loader.present();
      
      this.mysql.getTorneoCategorias(torneo.id).subscribe(async (categorias) => {
        loader.dismiss();
        if (!categorias || categorias.length === 0) {
          this.presentAlert('Aviso', 'Este torneo aún no tiene categorías disponibles.');
          return;
        }
        
        this.availableCategorias = categorias;
        this.enrollmentStep = 'category';
        this.showPartnerModal = true;
      }, err => {
        loader.dismiss();
        this.presentAlert('Error', 'No se pudieron cargar las categorías');
      });
    } else if (torneo.table_source === 'liga') {
      const loader = await this.loadingCtrl.create({ message: 'Cargando categorías de la liga...' });
      await loader.present();
      
      this.mysql.getLigaDetalle(torneo.id).subscribe({
        next: (res) => {
          loader.dismiss();
          const categorias = res?.liga?.categorias || [];
          if (categorias.length === 0) {
            this.presentAlert('Aviso', 'Esta liga aún no tiene categorías disponibles.');
            return;
          }
          this.availableCategorias = categorias;
          this.enrollmentStep = 'category';
          this.showPartnerModal = true;
        },
        error: (err) => {
          loader.dismiss();
          this.presentAlert('Error', 'No se pudieron cargar las categorías de la liga');
        }
      });
    } else {
      this.enrollmentStep = 'partner';
      this.showPartnerModal = true;
    }
  }

  selectCategory(catId: number) {
    this.selectedCategoriaId = catId;
    this.enrollmentStep = 'partner';
  }

  onPartnerSearch() {
    if (this.partnerSearchTerm.length < 3) {
      this.partnerResults = [];
      return;
    }
    this.mysql.getUsuarios(this.partnerSearchTerm).subscribe(res => {
      const myId = Number(localStorage.getItem('userId'));
      this.partnerResults = res.filter(u => u.id != myId);
    });
  }

  selectPartner(partner: any) {
    this.selectedPartner = partner;
    if (this.selectedTournament?.table_source === 'liga') {
      this.enrollmentStep = 'restrictions';
    } else {
      this.confirmEnrollment();
    }
  }

  async confirmEnrollment() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Inscripción',
      message: `¿Deseas inscribirte al ${this.selectedTournament.tipo || 'campeonato'} "${this.selectedTournament.nombre}" junto a ${this.selectedPartner.nombre}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Confirmar',
          handler: () => this.executeEnrollment()
        }
      ],
      mode: 'ios'
    });
    await alert.present();
  }

  async executeEnrollment() {
    const loader = await this.loadingCtrl.create({ message: 'Procesando inscripción...' });
    await loader.present();

    const myId = Number(localStorage.getItem('userId'));

    if (this.selectedTournament.table_source === 'v2') {
      const myName = localStorage.getItem('userNombre') || 'Jugador';
      const dataV2 = {
        torneo_id: Number(this.selectedTournament.id),
        categoria_id: this.selectedCategoriaId,
        jugador1_id: myId,
        jugador2_id: Number(this.selectedPartner.id),
        nombre_pareja: `${myName} / ${this.selectedPartner.nombre}`
      };

      this.mysql.enrollInTournamentV2(dataV2).subscribe({
        next: (res) => {
          loader.dismiss();
          if (res.success) {
            this.toastCtrl.create({
              message: res.mensaje || '¡Inscripción realizada con éxito!',
              duration: 3000,
              color: 'success',
              position: 'top'
            }).then(t => t.present());
            this.showPartnerModal = false;
            this.selectedClub = null;
            this.selectedMiTorneo = null;
            this.mainView = 'mis-torneos';
            this.misTab = 'activos';
            this.loadMisTorneos();
          } else {
            this.presentAlert('Atención', res.error || 'No se pudo completar la inscripción.');
          }
        },
        error: (err) => {
          loader.dismiss();
          console.error('Enrollment error:', err);
          const msg = err.error?.error || err.error?.mensaje || 'Error de conexión con el servidor.';
          this.presentAlert('Error', msg);
        }
      });
    } else if (this.selectedTournament.table_source === 'liga') {
      const myName = localStorage.getItem('userNombre') || 'Jugador';
      const dataLiga = {
        categoria_id: this.selectedCategoriaId,
        jugador1_id: myId,
        jugador2_id: Number(this.selectedPartner.id),
        nombre_pareja: `${myName} / ${this.selectedPartner.nombre}`,
        restricciones_horarias: this.restriccionesLiga
      };

      this.mysql.enrollInLiga(dataLiga).subscribe({
        next: (res) => {
          loader.dismiss();
          if (res.success) {
            this.toastCtrl.create({
              message: res.mensaje || '¡Inscripción a la Liga realizada con éxito!',
              duration: 3000,
              color: 'success',
              position: 'top'
            }).then(t => t.present());
            this.showPartnerModal = false;
            this.selectedClub = null;
            this.selectedMiTorneo = null;
            this.mainView = 'mis-torneos';
            this.misTab = 'activos';
            this.loadMisTorneos();
          } else {
            this.presentAlert('Atención', res.error || 'No se pudo completar la inscripción.');
          }
        },
        error: (err) => {
          loader.dismiss();
          console.error('League enrollment error:', err);
          const msg = err.error?.error || 'Error de conexión con el servidor.';
          this.presentAlert('Error', msg);
        }
      });
    } else {
      const data = {
        torneo_id: Number(this.selectedTournament.id),
        jugador1_id: myId,
        jugador2_id: Number(this.selectedPartner.id)
      };

      this.mysql.enrollInTournament(data).subscribe({
        next: (res) => {
          loader.dismiss();
          if (res.success) {
            this.toastCtrl.create({
              message: '¡Inscripción realizada con éxito!',
              duration: 3000,
              color: 'success',
              position: 'top'
            }).then(t => t.present());
            this.showPartnerModal = false;
            this.selectedClub = null;
            this.selectedMiTorneo = null;
            this.mainView = 'mis-torneos';
            this.misTab = 'activos';
            this.loadMisTorneos();
          } else {
            this.presentAlert('Atención', res.error || 'No se pudo completar la inscripción.');
          }
        },
        error: (err) => {
          loader.dismiss();
          console.error('Enrollment error:', err);
          const msg = err.error?.error || 'Error de conexión con el servidor.';
          this.presentAlert('Error', msg);
        }
      });
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['OK'],
      mode: 'ios'
    });
    await alert.present();
  }
}

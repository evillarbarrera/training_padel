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
  podiumOutline, listOutline, personOutline, logoWhatsapp,
  flameOutline, statsChartOutline, flashOutline, eyeOutline,
  checkmarkOutline, chatbubbleEllipsesOutline, shieldCheckmarkOutline,
  gitCompareOutline
} from 'ionicons/icons';
import { environment } from '../../../environments/environment';
import { HapticFeedbackService } from '../../services/haptics.service';

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
  
  // BUSCO PAREJA & AGENTES LIBRES
  subTabInscritos: 'parejas' | 'busco_pareja' = 'parejas';
  agenteLibrePosicion: 'Drive' | 'Revés' | 'Ambos' = 'Ambos';
  agenteLibreMensaje: string = '';
  showAgenteLibreModal = false;

  // HEAD TO HEAD (H2H) MODAL
  showH2HModal: boolean = false;
  selectedH2HData: any = null;

  // Time Restrictions for League
  restriccionesLiga: { dia: string; hora_inicio: string; hora_fin: string }[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // Helper to resolve authenticated user ID from multiple storages or JWT/Session token
  getStoredUserId(): number {
    let uId = Number(localStorage.getItem('userId')) || 
              Number(localStorage.getItem('user_id')) || 
              Number(localStorage.getItem('id')) || 
              this.userId || 0;

    if (!uId) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = atob(token);
          const parts = decoded.split('|');
          if (parts.length >= 2 && !isNaN(Number(parts[0]))) {
            uId = Number(parts[0]);
            if (uId > 0) {
              this.userId = uId;
              localStorage.setItem('userId', String(uId));
            }
          }
        } catch (e) {
          console.warn('Token decode error in getStoredUserId', e);
        }
      }
    }
    return uId;
  }

  formatPrecio(precio: any): string {
    if (precio === null || precio === undefined || precio === '' || precio === 0 || precio === '0' || precio === '0.00' || precio === 0.00) {
      return '';
    }
    let val = typeof precio === 'number' ? precio : parseFloat(String(precio).replace(/[^0-9.]/g, ''));
    if (isNaN(val) || val <= 0) {
      return '';
    }
    if (val > 0 && val < 1000) {
      val = val * 1000;
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

  // Capacity and enrolled counters
  getInscritosCount(comp: any): number {
    if (!comp) return 0;
    if (comp.inscritos !== undefined && comp.inscritos !== null && !isNaN(Number(comp.inscritos))) {
      return Number(comp.inscritos);
    }
    if (comp.total_parejas !== undefined && comp.total_parejas !== null && !isNaN(Number(comp.total_parejas))) {
      return Number(comp.total_parejas);
    }
    if (comp.parejas && Array.isArray(comp.parejas)) {
      return comp.parejas.length;
    }
    if (comp.categorias && Array.isArray(comp.categorias)) {
      let sum = 0;
      for (const cat of comp.categorias) {
        if (cat.inscritos && Array.isArray(cat.inscritos)) sum += cat.inscritos.length;
        else if (cat.parejas && Array.isArray(cat.parejas)) sum += cat.parejas.length;
      }
      if (sum > 0) return sum;
    }
    return 0;
  }

  getMaxParejas(comp: any): number {
    if (!comp) return 0;
    const max = Number(comp.max_parejas || comp.cupos_maximos || comp.cupo_maximo || comp.max_jugadores || 0);
    return isNaN(max) ? 0 : max;
  }

  getInscritosDisplay(comp: any): string {
    if (!comp) return '';
    const inscritos = this.getInscritosCount(comp);
    const max = this.getMaxParejas(comp);

    if (max > 0) {
      if (inscritos >= max) {
        return `${inscritos}/${max} Parejas (Completo)`;
      }
      return `${inscritos}/${max} Parejas`;
    }
    if (inscritos > 0) {
      return `${inscritos} ${inscritos === 1 ? 'Pareja' : 'Parejas'}`;
    }
    return 'Cupos Disponibles';
  }

  isCompFull(comp: any): boolean {
    const max = this.getMaxParejas(comp);
    if (max <= 0) return false;
    return this.getInscritosCount(comp) >= max;
  }

  defaultClubImage: string = 'assets/fondo-cancha.png';
  heroBackground: string = 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop';

  // MIS TORNEOS
  mainView: 'mis-torneos' | 'buscar' = 'mis-torneos';
  misTab: 'activos' | 'historial' | 'todos' = 'activos';
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

  isTorneoActivo(t: any): boolean {
    if (!t) return false;
    const estado = (t.estado || '').toLowerCase().trim();
    
    // Finalizados / cancelados explícitos
    if (estado === 'cerrado' || estado === 'finalizado' || estado === 'terminado' || estado === 'cancelado') {
      return false;
    }
    
    // Estados activos explícitos
    if (estado === 'activo' || estado === 'en curso' || estado === 'en_curso' || estado === 'en progreso' || 
        estado === 'iniciado' || estado === 'jugando' || estado === 'abierto' || estado === 'publicado' || 
        estado === 'inscripciones_abiertas' || estado === 'programado' || estado === 'disponible') {
      return true;
    }

    // Comprobación por fecha
    const today = new Date().toLocaleDateString('sv');
    const fecha = t.fecha || t.fecha_inicio || '';
    const fechaFin = (t.fecha_fin && t.fecha_fin !== '0000-00-00') ? t.fecha_fin : fecha;
    
    if (!fechaFin) return true;
    return fechaFin >= today;
  }

  get misTorneosActivos(): any[] {
    return (this.misTorneos || []).filter(t => this.isTorneoActivo(t));
  }

  get misTorneosHistorial(): any[] {
    return (this.misTorneos || []).filter(t => !this.isTorneoActivo(t));
  }

  // Competition Detail View state (Inscritos, Fixture Semanal, Posiciones)
  selectedCompeticionDetail: any = null;
  loadingCompDetail: boolean = false;
  compDetailTab: 'inscritos' | 'fixture' | 'posiciones' = 'inscritos';
  selectedCategoryIdx: number = 0;
  selectedJornadaIdx: number = 0;

  ionViewWillEnter() {
    this.loadUserProfile();
    this.loadMisTorneos();
    this.loadClubesConTorneos();
  }

  async openCompeticionDetail(comp: any) {
    if (!comp) return;
    const tipo = (comp.table_source || comp.tipo_torneo || comp.tipo || 'v2').toLowerCase();
    const id = Number(comp.id || comp.torneo_id || comp.liga_id);

    // Look up if user is enrolled in this competition from misTorneos
    const compTipo = tipo;
    const enrolledMatch = (this.misTorneos || []).find(t => {
      const tId = Number(t.id || t.torneo_id || t.liga_id);
      const tTipo = (t.tipo || t.tipo_torneo || t.table_source || '').toLowerCase();
      if (tId === id) {
        if (compTipo.includes('liga') && tTipo.includes('liga')) return true;
        if (compTipo.includes('americano') && tTipo.includes('americano')) return true;
        if (!compTipo.includes('liga') && !compTipo.includes('americano') && !tTipo.includes('liga') && !tTipo.includes('americano')) return true;
      }
      return false;
    });

    this.selectedMiTorneo = enrolledMatch || (comp.pareja_id || comp.inscripcion_id ? comp : null);

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
          this.soloMisPartidosFixture = false;

          let targetIdx = 0;
          if (res.competicion.categorias && res.competicion.categorias.length > 0) {
            const enrolledCat = this.getEnrolledCategoryObj(res.competicion);
            if (enrolledCat) {
              const foundIdx = res.competicion.categorias.findIndex(
                (c: any) => Number(c.id) === Number(enrolledCat.id)
              );
              if (foundIdx !== -1) targetIdx = foundIdx;
            } else {
              const originCatId = Number(comp.categoria_id || comp.id_categoria || this.selectedMiTorneo?.categoria_id);
              const originCatName = (comp.categoria_nombre || comp.categoria || this.selectedMiTorneo?.categoria_nombre || '').toLowerCase().trim();
              if (originCatId) {
                const foundIdx = res.competicion.categorias.findIndex(
                  (c: any) => Number(c.id) === originCatId || Number(c.categoria_id) === originCatId
                );
                if (foundIdx !== -1) targetIdx = foundIdx;
              } else if (originCatName) {
                const foundIdx = res.competicion.categorias.findIndex(
                  (c: any) => (c.nombre || '').toLowerCase().trim() === originCatName
                );
                if (foundIdx !== -1) targetIdx = foundIdx;
              }
            }
          }
          this.selectedCategoryIdx = targetIdx;
          this.selectedJornadaIdx = 0;
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
    return this.selectedCompeticionDetail.categorias;
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
    const uId = this.getStoredUserId();

    // Pass 1: Check category ID or name first
    for (const cat of comp.categorias) {
      if (targetCatId && (Number(cat.id) === targetCatId || Number(cat.categoria_id) === targetCatId)) {
        return cat;
      }
      if (targetCatName && cat.nombre && (cat.nombre.toLowerCase().trim() === targetCatName || cat.nombre.toLowerCase().includes(targetCatName) || targetCatName.includes(cat.nombre.toLowerCase()))) {
        return cat;
      }
    }

    // Pass 2: Check parejas/inscritos/tabla_posiciones list in category
    for (const cat of comp.categorias) {
      const list = [...(cat.parejas || []), ...(cat.inscritos || []), ...(cat.tabla_posiciones || [])];
      for (const p of list) {
        if (targetParejaId && (Number(p.id) === targetParejaId || Number(p.pareja_id) === targetParejaId)) {
          return cat;
        }
        if (targetParejaName && p.nombre_pareja && p.nombre_pareja.toLowerCase().trim() === targetParejaName) {
          return cat;
        }
        if (uId && (Number(p.jugador1_id) === uId || Number(p.jugador2_id) === uId || Number(p.p1_j1_id) === uId || Number(p.p1_j2_id) === uId || Number(p.p2_j1_id) === uId || Number(p.p2_j2_id) === uId || Number(p.usuario_id) === uId)) {
          return cat;
        }
      }
    }

    // Pass 3: Check matches in category jornadas/partidos
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

    const userId = this.getStoredUserId();
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
    const compId = Number(comp.id || comp.torneo_id || comp.liga_id);
    const compTipo = (comp.tipo || comp.tipo_torneo || comp.table_source || '').toLowerCase();
    
    return (this.misTorneos || []).some(t => {
      const tId = Number(t.id || t.torneo_id || t.liga_id);
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
    if (this.selectedMiTorneo && (this.selectedMiTorneo.pareja_id || this.selectedMiTorneo.inscripcion_id || this.selectedMiTorneo.tipo_torneo)) {
      return true;
    }
    if (!this.selectedCompeticionDetail) return false;
    return this.isEnrolledInComp(this.selectedCompeticionDetail);
  }

  getEnrolledPartnerName(): string {
    if (this.selectedMiTorneo?.nombre_pareja) {
      return this.selectedMiTorneo.nombre_pareja;
    }
    const uId = this.getStoredUserId();
    const enrolledCat = this.getEnrolledCategoryObj(this.selectedCompeticionDetail);
    if (enrolledCat) {
      const list = [...(enrolledCat.parejas || []), ...(enrolledCat.inscritos || [])];
      const found = list.find((p: any) => 
        Number(p.jugador1_id) === uId || Number(p.jugador2_id) === uId ||
        Number(p.p1_j1_id) === uId || Number(p.p1_j2_id) === uId ||
        Number(p.p2_j1_id) === uId || Number(p.p2_j2_id) === uId ||
        Number(p.usuario_id) === uId
      );
      if (found?.nombre_pareja) return found.nombre_pareja;
    }
    return '';
  }

  getEnrolledCategoryName(): string {
    const enrolledCat = this.getEnrolledCategoryObj(this.selectedCompeticionDetail);
    if (enrolledCat?.nombre) {
      return enrolledCat.nombre;
    }
    if (this.selectedMiTorneo?.categoria_nombre || this.selectedMiTorneo?.categoria) {
      return this.selectedMiTorneo.categoria_nombre || this.selectedMiTorneo.categoria;
    }
    if (this.selectedCompeticionDetail) {
      const compId = Number(this.selectedCompeticionDetail.id);
      const compTipo = (this.selectedCompeticionDetail.tipo || this.selectedCompeticionDetail.tipo_torneo || '').toLowerCase();
      const found = (this.misTorneos || []).find(t => {
        const tId = Number(t.id);
        const tTipo = (t.tipo || t.tipo_torneo || t.table_source || '').toLowerCase();
        if (tId === compId) {
          if (compTipo.includes('liga') && tTipo.includes('liga')) return true;
          if (compTipo.includes('americano') && tTipo.includes('americano')) return true;
          if (!compTipo.includes('liga') && !compTipo.includes('americano') && !tTipo.includes('liga') && !tTipo.includes('americano')) return true;
        }
        return false;
      });
      if (found?.categoria_nombre || found?.categoria) return found.categoria_nombre || found.categoria;
    }
    return '';
  }

  async shareClub() {
    if (!this.selectedClub) return;
    const club = this.selectedClub;
    const text = `🏆 ¡Mira las competiciones y torneos en ${club.nombre}! 🎾\n📍 ${club.direccion || ''}\n¡Inscríbete y compite en Padelblox!`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: club.nombre,
          text: text,
          url: shareUrl
        });
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.warn('Error sharing club:', err);
        }
      }
    } else {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
        } catch (e) {}
      }
      const toast = await this.toastCtrl.create({
        message: '¡Enlace del club copiado al portapapeles!',
        duration: 2500,
        position: 'top',
        color: 'success'
      });
      await toast.present();
    }
  }

  async shareCompeticionDetalle() {
    if (!this.selectedCompeticionDetail) return;
    const comp = this.selectedCompeticionDetail;
    const tipo = (comp.tipo === 'americano' || comp.tipo === 'Americano') ? 'Americano' : ((comp.tipo === 'liga' || comp.tipo === 'Liga') ? 'Liga de Pádel' : 'Torneo');
    const isEnrolled = this.isEnrolledInSelectedComp;
    const partner = this.getEnrolledPartnerName();
    const cat = this.getEnrolledCategoryName();
    const nextMatch = this.miTorneoProximo;

    let text = `🎾 *${comp.nombre}* (${tipo})\n📍 Club: ${comp.club_nombre}\n📅 Fecha: ${comp.fecha_display || comp.fecha || ''}\n`;

    if (isEnrolled) {
      text += `\n✅ *Mi Participación:*`;
      if (cat) text += `\n🏷️ Categoría: ${cat}`;
      if (partner) text += `\n👥 Pareja: ${partner}`;
      if (nextMatch) {
        text += `\n⏰ *Próximo Partido:* ${this.getMatchHoraDisplay(nextMatch)} en ${this.getMatchCanchaDisplay(nextMatch)}`;
        text += `\n⚔️ vs ${this.getMatchTeamNames(nextMatch).team2}`;
      }
    } else {
      text += `\n⚡ *Inscripciones Abiertas:* ${this.getInscritosDisplay(comp)}`;
      if (comp.precio > 0) text += ` • ${this.formatPrecio(comp.precio)}/pareja`;
    }

    text += `\n\n📲 ¡Sigue los resultados en vivo y únete en Padelblox!`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: comp.nombre,
          text: text,
          url: shareUrl
        });
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.warn('Error sharing competition:', err);
        }
      }
    } else {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
        } catch (e) {}
      }
      const toast = await this.toastCtrl.create({
        message: '¡Resumen del torneo copiado al portapapeles para WhatsApp!',
        duration: 2500,
        position: 'top',
        color: 'success'
      });
      await toast.present();
    }
  }

  // BUSCO PAREJA & AGENTES LIBRES
  getBuscandoParejaList(comp?: any): any[] {
    const compObj = comp || this.selectedCompeticionDetail;
    if (!compObj) return [];
    const compId = compObj.id || 0;
    
    const saved = localStorage.getItem(`busco_pareja_${compId}`);
    let list: any[] = [];
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Filtrar jugadores de prueba
          list = parsed.filter(item => 
            item && 
            item.id !== 99101 && 
            item.id !== 99102 && 
            item.nombre !== 'Matías Silva' && 
            item.nombre !== 'Rodrigo Fuentes'
          );
        }
      } catch (e) {
        list = [];
      }
    }
    return list;
  }

  async eliminarRegistroAgenteLibre(agente: any) {
    const comp = this.selectedCompeticionDetail || this.selectedTournament;
    if (!comp) return;
    const compId = comp.id || 0;
    const currentList = this.getBuscandoParejaList(comp);
    const updated = currentList.filter(a => a.id !== agente.id);
    localStorage.setItem(`busco_pareja_${compId}`, JSON.stringify(updated));

    const toast = await this.toastCtrl.create({
      message: 'Has cancelado tu publicación en Busco Pareja.',
      duration: 2500,
      position: 'top',
      color: 'medium'
    });
    await toast.present();
  }

  inscribirComoAgenteLibre(torneo?: any) {
    this.selectedTournament = torneo || this.selectedCompeticionDetail;
    this.agenteLibrePosicion = 'Ambos';
    this.agenteLibreMensaje = '';
    this.showAgenteLibreModal = true;
  }

  async confirmarRegistroAgenteLibre() {
    if (!this.selectedTournament) return;
    const compId = this.selectedTournament.id || 0;
    const myName = this.userName || 'Jugador';
    const myId = this.getStoredUserId();

    const newAgente = {
      id: myId || Date.now(),
      nombre: myName,
      avatar: this.userPhoto,
      nivel: '4.0',
      categoria: this.currentDetailCategory?.nombre || 'Categoría Única',
      posicion: this.agenteLibrePosicion,
      mensaje: this.agenteLibreMensaje || 'Buscando compañero motivado para jugar este torneo!',
      tiempo: 'Recién publicado',
      esUsuarioActual: true
    };

    const currentList = this.getBuscandoParejaList(this.selectedTournament);
    const updated = [newAgente, ...currentList.filter(a => a.id !== myId)];
    localStorage.setItem(`busco_pareja_${compId}`, JSON.stringify(updated));

    this.showAgenteLibreModal = false;
    this.subTabInscritos = 'busco_pareja';

    const toast = await this.toastCtrl.create({
      message: '¡Te registraste como Agente Libre! Otros jugadores podrán invitarte a formar dupla.',
      duration: 3500,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

  unirseConAgenteLibre(agente: any) {
    if (!agente) return;
    const comp = this.selectedCompeticionDetail || this.selectedTournament;
    this.selectedTournament = comp;
    this.selectedPartner = {
      id: agente.id,
      nombre: agente.nombre,
      foto_perfil: agente.avatar,
      nivel: agente.nivel
    };
    this.confirmEnrollment();
  }

  // HEAD TO HEAD (H2H) MODAL - DATOS 100% REALES
  openH2HModal(item: any, type: 'match' | 'standing' = 'standing') {
    let myTeamDisplay = (this.userName || 'Tú').trim();
    const partnerRaw = (this.getEnrolledPartnerName() || '').trim();
    if (partnerRaw) {
      if (partnerRaw.includes('/')) {
        myTeamDisplay = partnerRaw;
      } else if (partnerRaw.toLowerCase() !== myTeamDisplay.toLowerCase()) {
        myTeamDisplay = `${myTeamDisplay} / ${partnerRaw}`;
      }
    }

    let rivalName = 'Pareja Rival';
    let matchScore = '';
    let matchEstado = '';
    let posData: any = null;

    if (type === 'match') {
      const teams = this.getMatchTeamNames(item);
      rivalName = teams.team2;
      matchScore = this.getMatchScore(item);
      matchEstado = item.estado || 'Programado';
    } else {
      rivalName = this.getStandingPairName(item) || this.getInscritoPairName(item) || 'Pareja Rival';
      posData = item;
    }

    // =========================================================================
    // 1. RESOLUCIÓN PRECISA DE LA CATEGORÍA (5ª CATEGORÍA vs 4ª CATEGORÍA, ETC.)
    // =========================================================================
    let matchedCategory: any = null;
    const allCats = this.selectedCompeticionDetail?.categorias || [];
    
    // Check 1: ID o nombre de categoría en el item
    const itemCatId = Number(item?.categoria_id || item?.id_categoria || item?.cat_id || 0);
    const itemCatName = (item?.categoria_nombre || item?.categoria || item?.categoria_txt || '').trim();

    if (itemCatId && allCats.length > 0) {
      matchedCategory = allCats.find((c: any) => Number(c.id) === itemCatId || Number(c.categoria_id) === itemCatId);
    }
    if (!matchedCategory && itemCatName && allCats.length > 0) {
      matchedCategory = allCats.find((c: any) => 
        (c.nombre || '').toLowerCase().trim() === itemCatName.toLowerCase() ||
        (c.nombre || '').toLowerCase().includes(itemCatName.toLowerCase()) ||
        itemCatName.toLowerCase().includes((c.nombre || '').toLowerCase())
      );
    }

    // Check 2: Buscar en qué categoría está el rival o la dupla del usuario
    const normRival = (rivalName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const normMyTeam = (myTeamDisplay || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const uId = this.getStoredUserId();

    if (!matchedCategory && allCats.length > 0) {
      for (const cat of allCats) {
        const list = [...(cat.parejas || []), ...(cat.inscritos || []), ...(cat.tabla_posiciones || [])];
        const found = list.some((p: any) => {
          const pName = (this.getStandingPairName(p) || this.getInscritoPairName(p) || p.nombre_pareja || '').toLowerCase().replace(/[^a-z0-9]/g, '');
          if (normRival && pName && (pName.includes(normRival) || normRival.includes(pName))) return true;
          if (uId && (Number(p.jugador1_id) === uId || Number(p.jugador2_id) === uId || Number(p.usuario_id) === uId)) return true;
          return false;
        });
        if (found) {
          matchedCategory = cat;
          break;
        }
      }
    }

    // Check 3: Categoría en la que el usuario está inscrito
    if (!matchedCategory) {
      matchedCategory = this.getEnrolledCategoryObj(this.selectedCompeticionDetail);
    }

    // Check 4: Categoría actual seleccionada en la vista
    if (!matchedCategory) {
      matchedCategory = this.currentDetailCategory || allCats[0] || null;
    }

    const resolvedCategoryName = matchedCategory?.nombre || itemCatName || 
                                 this.selectedMiTorneo?.categoria_nombre || this.selectedMiTorneo?.categoria || 
                                 '5ª Categoría';

    // =========================================================================
    // 2. BUSCAR POSICIÓN Y ESTADÍSTICAS DEL RIVAL EN LA TABLA
    // =========================================================================
    let tabla = matchedCategory?.tabla_posiciones || [];
    if (!tabla || tabla.length === 0) {
      for (const cat of allCats) {
        if (cat.tabla_posiciones && cat.tabla_posiciones.length > 0) {
          tabla = cat.tabla_posiciones;
          break;
        }
      }
    }

    if (!posData && tabla && tabla.length > 0 && rivalName) {
      posData = tabla.find((t: any) => {
        const tName = (this.getStandingPairName(t) || t.nombre_pareja || (t.p1_nombre ? t.p1_nombre + ' ' + (t.p2_nombre || '') : '')).toLowerCase().replace(/[^a-z0-9]/g, '');
        const tId = Number(t.pareja_id || t.id || 0);
        const matchRivId = Number(item?.pareja2_id || item?.pareja1_id || item?.pareja_id || 0);
        if (matchRivId && tId && tId === matchRivId) return true;
        return tName && normRival && (tName.includes(normRival) || normRival.includes(tName));
      });
    }

    // =========================================================================
    // 3. BUSCAR ENFRENTAMIENTOS DIRECTOS Y TODOS LOS JUEGOS DEL RIVAL EN LA LIGA
    // =========================================================================
    const directMatches: any[] = [];
    const rivalMatchesHistory: any[] = [];
    const allMatches: any[] = [];
    const allJornadas = matchedCategory?.jornadas || this.currentDetailCategory?.jornadas || [];
    
    allJornadas.forEach((j: any) => {
      if (Array.isArray(j.partidos)) {
        j.partidos.forEach((p: any) => {
          allMatches.push({ ...p, jornadaLabel: j.nombre || `Jornada ${j.numero_jornada || j.jornada || ''}` });
        });
      }
    });

    const categoryPartidos = matchedCategory?.partidos || this.currentDetailCategory?.partidos || [];
    if (Array.isArray(categoryPartidos)) {
      categoryPartidos.forEach((p: any) => {
        allMatches.push(p);
      });
    }

    let h2hWins = 0;
    let h2hLosses = 0;
    let myGames = 0;
    let rivalGames = 0;

    let rivalTotalGamesWon = 0;
    let rivalTotalGamesLost = 0;
    let rivalTotalSetsWon = 0;
    let rivalTotalSetsLost = 0;

    allMatches.forEach((m: any) => {
      const p1Str = (this.formatMatchTeam(m, 1) || m.pareja1_nombre || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const p2Str = (this.formatMatchTeam(m, 2) || m.pareja2_nombre || '').toLowerCase().replace(/[^a-z0-9]/g, '');

      const isRivalT1 = p1Str && normRival && (p1Str.includes(normRival) || normRival.includes(p1Str));
      const isRivalT2 = p2Str && normRival && (p2Str.includes(normRival) || normRival.includes(p2Str));
      const isRivalInMatch = isRivalT1 || isRivalT2;

      // 3.A EVALUAR SI ES ENFRENTAMIENTO DIRECTO CONTRA EL USUARIO
      if (this.isUserInMatch(m) && isRivalInMatch) {
        const isUserT2 = this.isUserInTeam2(m);
        const totalGamesInMatch = Number(m.set1_p1 || 0) + Number(m.set1_p2 || 0) + 
                                  Number(m.set2_p1 || 0) + Number(m.set2_p2 || 0) + 
                                  Number(m.set3_p1 || 0) + Number(m.set3_p2 || 0) +
                                  Number(m.resultado_t1 || 0) + Number(m.resultado_t2 || 0);
        
        const statusStr = (m.estado || '').toLowerCase();
        const isFinished = (statusStr === 'finalizado' || statusStr === 'jugado' || statusStr === 'terminado' || totalGamesInMatch > 0) && totalGamesInMatch > 0;
        
        if (isFinished) {
          let mySetsWon = 0;
          let rivalSetsWon = 0;
          let matchMyGames = 0;
          let matchRivalGames = 0;
          const scoreParts: string[] = [];

          if (m.set1_p1 !== null && m.set1_p1 !== undefined && m.set1_p1 !== '') {
            const myS1 = isUserT2 ? Number(m.set1_p2 || 0) : Number(m.set1_p1 || 0);
            const rivS1 = isUserT2 ? Number(m.set1_p1 || 0) : Number(m.set1_p2 || 0);
            if (myS1 > 0 || rivS1 > 0) {
              scoreParts.push(`${myS1}-${rivS1}`);
              matchMyGames += myS1;
              matchRivalGames += rivS1;
              if (myS1 > rivS1) mySetsWon++; else if (rivS1 > myS1) rivalSetsWon++;
            }
          }
          if (m.set2_p1 !== null && m.set2_p1 !== undefined && m.set2_p1 !== '') {
            const myS2 = isUserT2 ? Number(m.set2_p2 || 0) : Number(m.set2_p1 || 0);
            const rivS2 = isUserT2 ? Number(m.set2_p1 || 0) : Number(m.set2_p2 || 0);
            if (myS2 > 0 || rivS2 > 0) {
              scoreParts.push(`${myS2}-${rivS2}`);
              matchMyGames += myS2;
              matchRivalGames += rivS2;
              if (myS2 > rivS2) mySetsWon++; else if (rivS2 > myS2) rivalSetsWon++;
            }
          }
          if (m.set3_p1 !== null && m.set3_p1 !== undefined && m.set3_p1 !== '' && (Number(m.set3_p1) > 0 || Number(m.set3_p2) > 0)) {
            const myS3 = isUserT2 ? Number(m.set3_p2 || 0) : Number(m.set3_p1 || 0);
            const rivS3 = isUserT2 ? Number(m.set3_p1 || 0) : Number(m.set3_p2 || 0);
            if (myS3 > 0 || rivS3 > 0) {
              scoreParts.push(`${myS3}-${rivS3}`);
              matchMyGames += myS3;
              matchRivalGames += rivS3;
              if (myS3 > rivS3) mySetsWon++; else if (rivS3 > myS3) rivalSetsWon++;
            }
          }

          if (scoreParts.length === 0 && m.resultado_t1 !== null && m.resultado_t1 !== undefined && m.resultado_t1 !== '') {
            const r1 = Number(m.resultado_t1 || 0);
            const r2 = Number(m.resultado_t2 || 0);
            if (r1 > 0 || r2 > 0) {
              const myR = isUserT2 ? r2 : r1;
              const rivR = isUserT2 ? r1 : r2;
              scoreParts.push(`${myR}-${rivR}`);
              matchMyGames += myR;
              matchRivalGames += rivR;
              if (myR > rivR) mySetsWon++; else if (rivR > myR) rivalSetsWon++;
            }
          }

          if (scoreParts.length > 0 && (matchMyGames > 0 || matchRivalGames > 0)) {
            myGames += matchMyGames;
            rivalGames += matchRivalGames;

            let ganador = 'myTeam';
            if (mySetsWon < rivalSetsWon) {
              ganador = 'rivalTeam';
              h2hLosses++;
            } else if (mySetsWon > rivalSetsWon) {
              ganador = 'myTeam';
              h2hWins++;
            } else if (matchMyGames !== matchRivalGames) {
              ganador = matchMyGames > matchRivalGames ? 'myTeam' : 'rivalTeam';
              if (ganador === 'myTeam') h2hWins++; else h2hLosses++;
            } else {
              ganador = 'myTeam';
            }

            directMatches.push({
              torneo: m.jornadaLabel || this.selectedCompeticionDetail?.nombre || 'Competición',
              fecha: this.getMatchFechaDisplay(m),
              resultado: scoreParts.join(', ') || this.getMatchScore(m),
              ganador: ganador,
              duracion: m.duracion ? `${m.duracion} min` : 'Oficial'
            });
          }
        }
      }

      // 3.B RECOPILAR TODOS LOS JUEGOS Y PARTIDOS DEL RIVAL EN ESTE TORNEO (SCOUTING)
      if (isRivalInMatch) {
        const opponentName = isRivalT1 ? (this.formatMatchTeam(m, 2) || m.pareja2_nombre || 'Rival') 
                                       : (this.formatMatchTeam(m, 1) || m.pareja1_nombre || 'Rival');
        
        let rivalSets = 0;
        let oppSets = 0;
        let matchRivalG = 0;
        let matchOppG = 0;
        const setScores: string[] = [];

        if (m.set1_p1 !== null && m.set1_p1 !== undefined && m.set1_p1 !== '') {
          const r1 = isRivalT1 ? Number(m.set1_p1) : Number(m.set1_p2);
          const o1 = isRivalT1 ? Number(m.set1_p2) : Number(m.set1_p1);
          if (r1 > 0 || o1 > 0) {
            setScores.push(`${r1}-${o1}`);
            matchRivalG += r1;
            matchOppG += o1;
            if (r1 > o1) rivalSets++; else if (o1 > r1) oppSets++;
          }
        }
        if (m.set2_p1 !== null && m.set2_p1 !== undefined && m.set2_p1 !== '') {
          const r2 = isRivalT1 ? Number(m.set2_p1) : Number(m.set2_p2);
          const o2 = isRivalT1 ? Number(m.set2_p2) : Number(m.set2_p1);
          if (r2 > 0 || o2 > 0) {
            setScores.push(`${r2}-${o2}`);
            matchRivalG += r2;
            matchOppG += o2;
            if (r2 > o2) rivalSets++; else if (o2 > r2) oppSets++;
          }
        }
        if (m.set3_p1 !== null && m.set3_p1 !== undefined && m.set3_p1 !== '' && (Number(m.set3_p1) > 0 || Number(m.set3_p2) > 0)) {
          const r3 = isRivalT1 ? Number(m.set3_p1) : Number(m.set3_p2);
          const o3 = isRivalT1 ? Number(m.set3_p2) : Number(m.set3_p1);
          if (r3 > 0 || o3 > 0) {
            setScores.push(`${r3}-${o3}`);
            matchRivalG += r3;
            matchOppG += o3;
            if (r3 > o3) rivalSets++; else if (o3 > r3) oppSets++;
          }
        }

        if (setScores.length === 0 && m.resultado_t1 !== null && m.resultado_t1 !== undefined && m.resultado_t1 !== '') {
          const r1 = Number(m.resultado_t1 || 0);
          const r2 = Number(m.resultado_t2 || 0);
          if (r1 > 0 || r2 > 0) {
            const myR = isRivalT1 ? r1 : r2;
            const oppR = isRivalT1 ? r2 : r1;
            setScores.push(`${myR}-${oppR}`);
            matchRivalG += myR;
            matchOppG += oppR;
            if (myR > oppR) rivalSets++; else if (oppR > myR) oppSets++;
          }
        }

        const isMatchPlayed = setScores.length > 0 && (matchRivalG > 0 || matchOppG > 0);
        if (isMatchPlayed) {
          rivalTotalGamesWon += matchRivalG;
          rivalTotalGamesLost += matchOppG;
          rivalTotalSetsWon += rivalSets;
          rivalTotalSetsLost += oppSets;

          const isWin = rivalSets > oppSets || (rivalSets === oppSets && matchRivalG > matchOppG);

          rivalMatchesHistory.push({
            id: m.id,
            jornada: m.jornadaLabel || 'Partido Oficial',
            fecha: this.getMatchFechaDisplay(m),
            oponente: opponentName,
            resultado: setScores.join(', '),
            isWin: isWin,
            resultadoTexto: isWin ? 'Victoria' : 'Derrota',
            gamesFavor: matchRivalG,
            gamesContra: matchOppG
          });
        }
      }
    });

    const h2hTotal = h2hWins + h2hLosses;
    const myWinRate = h2hTotal > 0 ? Math.round((h2hWins / h2hTotal) * 100) : 50;
    const rivalWinRate = h2hTotal > 0 ? (100 - myWinRate) : 50;

    // Calcular métricas de juegos del rival
    const standingPJ = posData ? Number(posData.pj ?? posData.partidos_jugados ?? rivalMatchesHistory.length) : rivalMatchesHistory.length;
    const standingPG = posData ? Number(posData.pg ?? posData.partidos_ganados ?? rivalMatchesHistory.filter(r => r.isWin).length) : rivalMatchesHistory.filter(r => r.isWin).length;
    const standingPP = posData ? Number(posData.pp ?? posData.partidos_perdidos ?? (standingPJ - standingPG)) : Math.max(0, standingPJ - standingPG);
    const standingPTS = posData ? Number(posData.puntos ?? posData.pts ?? (standingPG * 3)) : (standingPG * 3);
    const standingDG = posData ? (posData.dif_games ?? posData.dg ?? (rivalTotalGamesWon - rivalTotalGamesLost)) : (rivalTotalGamesWon - rivalTotalGamesLost);
    const standingGF = posData ? Number(posData.gf ?? posData.games_favor ?? rivalTotalGamesWon) : rivalTotalGamesWon;
    const standingGC = posData ? Number(posData.gc ?? posData.games_contra ?? rivalTotalGamesLost) : rivalTotalGamesLost;
    const standingPos = posData?.posicion || posData?.puesto || '-';

    this.selectedH2HData = {
      myTeam: myTeamDisplay,
      rivalTeam: rivalName,
      categoria: resolvedCategoryName,
      torneo: this.selectedCompeticionDetail?.nombre || 'Competición',
      h2hWins: h2hWins,
      h2hLosses: h2hLosses,
      h2hTotal: h2hTotal,
      myGames: myGames,
      rivalGames: rivalGames,
      myWinRate: myWinRate,
      rivalWinRate: rivalWinRate,
      matchScore: matchScore,
      matchEstado: matchEstado,
      standing: {
        posicion: standingPos,
        pj: standingPJ,
        pg: standingPG,
        pp: standingPP,
        puntos: standingPTS,
        gf: standingGF,
        gc: standingGC,
        dif_games: (Number(standingDG) > 0 ? '+' : '') + String(standingDG),
        winRate: standingPJ > 0 ? Math.round((standingPG / standingPJ) * 100) : 0
      },
      historialMatches: directMatches,
      rivalMatchesHistory: rivalMatchesHistory,
      totalGamesRival: {
        ganados: standingGF || rivalTotalGamesWon,
        perdidos: standingGC || rivalTotalGamesLost,
        setsGanados: rivalTotalSetsWon,
        setsPerdidos: rivalTotalSetsLost
      }
    };

    this.showH2HModal = true;
  }

  closeH2HModal() {
    this.showH2HModal = false;
    this.selectedH2HData = null;
  }

  goBack() {
    if (this.selectedCompeticionDetail) {
      this.selectedCompeticionDetail = null;
      this.selectedMiTorneo = null;
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
    private toastCtrl: ToastController,
    public haptics: HapticFeedbackService
  ) {
    addIcons({ 
      locationOutline, searchOutline, trophyOutline, 
      arrowBack, heartOutline, shareOutline, chevronForward,
      addCircleOutline, closeOutline, personAddOutline,
      star, tennisballOutline, calendarOutline, chevronDown,
      peopleOutline, mapOutline, ribbonOutline, timeOutline,
      checkmarkCircleOutline, closeCircleOutline, arrowForwardOutline,
      podiumOutline, listOutline, personOutline, logoWhatsapp,
      flameOutline, statsChartOutline, flashOutline, eyeOutline,
      checkmarkOutline, chatbubbleEllipsesOutline, shieldCheckmarkOutline,
      gitCompareOutline
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
    const userId = this.getStoredUserId();
    this.userId = userId;
    this.loadingMisTorneos = true;
    this.historyLimit = this.historyPageSize;
    this.mysql.getMisTorneosCompleto(userId || undefined).subscribe({
      next: (res) => {
        const list = Array.isArray(res) ? res : [];
        if (list.length > 0) {
          this.misTorneos = list;
          this.loadingMisTorneos = false;
          if (this.misTorneosActivos.length === 0 && this.misTorneosHistorial.length > 0 && this.misTab === 'activos') {
            this.misTab = 'historial';
          }
        } else {
          this.fallbackLoadLegacyTorneos(userId);
        }
      },
      error: (err) => {
        console.warn('Error en getMisTorneosCompleto, intentando getMyTournaments...', err);
        this.fallbackLoadLegacyTorneos(userId);
      }
    });
  }

  fallbackLoadLegacyTorneos(userId: number) {
    if (!userId) {
      this.misTorneos = [];
      this.loadingMisTorneos = false;
      return;
    }
    this.mysql.getMyTournaments(userId).subscribe({
      next: (legacyRes) => {
        const rawList = Array.isArray(legacyRes) ? legacyRes : [];
        if (rawList.length > 0) {
          this.misTorneos = rawList.map(t => ({
            ...t,
            tipo_torneo: t.tipo_torneo || 'americano',
            table_source: t.table_source || 'americanos',
            tipo: t.tipo || 'Americano',
            partidos: t.partidos || []
          }));
        } else {
          this.misTorneos = [];
        }
        this.loadingMisTorneos = false;
        if (this.misTorneosActivos.length === 0 && this.misTorneosHistorial.length > 0 && this.misTab === 'activos') {
          this.misTab = 'historial';
        }
      },
      error: (err) => {
        console.error('Error loading legacy tournaments', err);
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
    const userId = this.getStoredUserId();
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
    const userId = this.getStoredUserId();
    
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
    const userId = this.getStoredUserId();

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

  getStandingPairName(pos: any): string {
    if (!pos) return 'Pareja';
    const p1 = (pos.p1_nombre || pos.jugador1 || pos.jugador1_nombre || pos.nombre_externo1 || '').trim();
    const p2 = (pos.p2_nombre || pos.jugador2 || pos.jugador2_nombre || pos.nombre_externo2 || '').trim();
    if (p1 && p2 && p1 !== 'Jugador 1' && p2 !== 'Jugador 2') {
      return `${p1} / ${p2}`;
    }
    if (pos.nombre_pareja && pos.nombre_pareja !== 'Pareja' && pos.nombre_pareja !== 'Jugador 1 / Jugador 2') {
      return pos.nombre_pareja;
    }
    if (p1 && p2) {
      return `${p1} / ${p2}`;
    }
    if (p1) return p1;
    if (p2) return p2;
    return pos.nombre_pareja || 'Pareja';
  }

  getInscritoPairName(p: any): string {
    if (!p) return 'Pareja';
    const p1 = (p.jugador1 || p.p1_nom || p.jugador1_nombre || p.nombre_externo1 || '').trim();
    const p2 = (p.jugador2 || p.p2_nom || p.jugador2_nombre || p.nombre_externo2 || '').trim();
    if (p1 && p2 && p1 !== 'Jugador 1' && p2 !== 'Jugador 2') {
      return `${p1} / ${p2}`;
    }
    if (p.nombre_pareja && p.nombre_pareja !== 'Pareja' && p.nombre_pareja !== 'Jugador 1 / Jugador 2') {
      return p.nombre_pareja;
    }
    if (p1 && p2) {
      return `${p1} / ${p2}`;
    }
    if (p1) return p1;
    if (p2) return p2;
    return p.nombre_pareja || 'Pareja';
  }

  formatMatchTeam(match: any, teamIndex: 1 | 2): string {
    if (!match) return `Pareja ${teamIndex}`;

    let name = (teamIndex === 1 ? (match.pareja1_nombre || match.pareja1 || match.p1_nombre || '') : (match.pareja2_nombre || match.pareja2 || match.p2_nombre || '')).trim();
    const pId = teamIndex === 1 ? (match.pareja1_id || match.p1_id || match.id_pareja1) : (match.pareja2_id || match.p2_id || match.id_pareja2);
    const n1 = (teamIndex === 1 ? (match.p1_j1_nom || match.p1_u1_nom || match.jugador1_nombre || match.p1_nom || match.pareja1_jugador1 || '') : (match.p2_j1_nom || match.p2_u1_nom || match.jugador3_nombre || match.p3_nom || match.pareja2_jugador1 || '')).trim();
    const n2 = (teamIndex === 1 ? (match.p1_j2_nom || match.p1_u2_nom || match.jugador2_nombre || match.p2_nom || match.pareja1_jugador2 || '') : (match.p2_j2_nom || match.p2_u2_nom || match.jugador4_nombre || match.p4_nom || match.pareja2_jugador2 || '')).trim();

    // Clean up leading/trailing slashes
    name = name.replace(/^[\s\/\-]+|[\s\/\-]+$/g, '').trim();

    // If we have category parejas / inscritos in context, look up pareja by ID
    if (pId && this.selectedCompeticionDetail?.categorias) {
      for (const cat of this.selectedCompeticionDetail.categorias) {
        const list = [...(cat.parejas || []), ...(cat.inscritos || [])];
        const found = list.find((p: any) => Number(p.id) === Number(pId) || Number(p.pareja_id) === Number(pId));
        if (found) {
          const resolved = this.getInscritoPairName(found);
          if (resolved && !resolved.includes('Jugador 1') && !resolved.includes('Jugador 2') && resolved !== 'Pareja') {
            return resolved.replace(/^[\s\/\-]+|[\s\/\-]+$/g, '').trim();
          }
        }
      }
    }

    if (n1 && n2 && n1 !== 'Jugador 1' && n2 !== 'Jugador 2' && n1 !== 'J1' && n2 !== 'J2' && n1 !== 'J3' && n2 !== 'J4') {
      return `${n1} / ${n2}`;
    }

    if (name) {
      if (name.includes('/') || name.includes('-')) {
        const parts = name.includes('/') ? name.split('/') : name.split('-');
        let part1 = parts[0]?.trim() || '';
        let part2 = parts[1]?.trim() || '';
        if (part1 === 'Jugador 1' || part1 === 'Jugador' || part1 === 'J1' || part1 === 'J3' || !part1) {
          part1 = n1 && n1 !== 'Jugador 1' && n1 !== 'J1' && n1 !== 'J3' ? n1 : '';
        }
        if (part2 === 'Jugador 2' || part2 === 'Jugador' || part2 === 'J2' || part2 === 'J4' || !part2) {
          part2 = n2 && n2 !== 'Jugador 2' && n2 !== 'J2' && n2 !== 'J4' ? n2 : '';
        }
        if (part1 && part2) return `${part1} / ${part2}`;
        if (part1) return part1;
        if (part2) return part2;
      }
      if (name !== 'Pareja 1' && name !== 'Pareja 2' && name !== 'Pareja' && name !== 'Jugador 1 / Jugador 2') {
        return name;
      }
    }

    if (n1 && n2) return `${n1} / ${n2}`;
    if (n1) return n1;
    if (n2) return n2;
    return `Pareja ${teamIndex}`;
  }

  getMatchTeamNames(match: any): { team1: string, team2: string } {
    if (!match) return { team1: 'Pareja 1', team2: 'Pareja 2' };

    let t1 = this.formatMatchTeam(match, 1);
    let t2 = this.formatMatchTeam(match, 2);

    if (this.selectedMiTorneo?.tipo_torneo === 'americano' || this.selectedCompeticionDetail?.tipo === 'americano') {
      t1 = `${match.jugador1_nombre || 'J1'} / ${match.jugador2_nombre || 'J2'}`;
      t2 = `${match.jugador3_nombre || 'J3'} / ${match.jugador4_nombre || 'J4'}`;
    }

    if (this.isUserInTeam2(match)) {
      return { team1: t2, team2: t1 };
    }
    return { team1: t1, team2: t2 };
  }

  getMatchScore(match: any): string {
    if (!match) return 'Pendiente';
    
    // Check sets if available (Liga / Torneo)
    if (match.set1_p1 !== null && match.set1_p1 !== undefined && match.set1_p1 !== '') {
      const flip = this.isUserInTeam2(match);
      const s1_1 = flip ? match.set1_p2 : match.set1_p1;
      const s1_2 = flip ? match.set1_p1 : match.set1_p2;
      let scoreStr = `${s1_1}-${s1_2}`;
      
      if (match.set2_p1 !== null && match.set2_p1 !== undefined && match.set2_p1 !== '') {
        const s2_1 = flip ? match.set2_p2 : match.set2_p1;
        const s2_2 = flip ? match.set2_p1 : match.set2_p2;
        scoreStr += `, ${s2_1}-${s2_2}`;
      }
      if (match.set3_p1 !== null && match.set3_p1 !== undefined && match.set3_p1 !== '' && (Number(match.set3_p1) > 0 || Number(match.set3_p2) > 0)) {
        const s3_1 = flip ? match.set3_p2 : match.set3_p1;
        const s3_2 = flip ? match.set3_p1 : match.set3_p2;
        scoreStr += `, ${s3_1}-${s3_2}`;
      }
      return scoreStr;
    }

    if (match.resultado_t1 === null || match.resultado_t1 === undefined) return 'Pendiente';
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
    const userId = this.getStoredUserId();
    this.userId = userId;
    this.userName = (localStorage.getItem('userNombre') || localStorage.getItem('userName') || '').trim();
    if (userId) {
      this.mysql.getPerfil(userId).subscribe(res => {
        if (res.success && res.user) {
          const profileName = `${res.user.nombre || ''} ${res.user.apellido || ''}`.trim();
          if (profileName) {
            this.userName = profileName;
            localStorage.setItem('userNombre', profileName);
          }
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
        const estado = (t.estado || '').toLowerCase().trim();
        if (estado === 'cerrado' || estado === 'finalizado' || estado === 'cancelado' || estado === 'oculto') {
          return false;
        }
        if (t.table_source === 'americanos') {
          return t.fecha >= today;
        }
        return true; 
      });

      // Deduplicar americanos duplicados (mismo club, mismo nombre y misma fecha)
      const americanosMap = new Map<string, any>();
      const otrosTorneos: any[] = [];

      for (const t of activeTorneos) {
        if (t.table_source === 'americanos') {
          const key = `${t.club_id || ''}_${(t.nombre || '').toLowerCase().trim()}_${t.fecha}`;
          const existing = americanosMap.get(key);
          if (!existing) {
            americanosMap.set(key, t);
          } else {
            const currentIsAbierto = (t.estado || '').toLowerCase() === 'abierto';
            const existingIsAbierto = (existing.estado || '').toLowerCase() === 'abierto';
            if (currentIsAbierto && !existingIsAbierto) {
              americanosMap.set(key, t);
            } else if (currentIsAbierto === existingIsAbierto && Number(t.id) > Number(existing.id)) {
              americanosMap.set(key, t);
            }
          }
        } else {
          otrosTorneos.push(t);
        }
      }

      this.torneos = [...Array.from(americanosMap.values()), ...otrosTorneos];

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
    if (!torneo) return;
    this.selectedTournament = torneo;
    this.selectedPartner = null;
    this.partnerSearchTerm = '';
    this.partnerResults = [];
    this.restriccionesLiga = [];
    
    const tSource = (torneo.table_source || torneo.tipo_torneo || torneo.tipo || '').toLowerCase();

    // Reuse existing categories if already present on the object
    if (torneo.categorias && Array.isArray(torneo.categorias) && torneo.categorias.length > 0) {
      this.availableCategorias = torneo.categorias;
      this.enrollmentStep = 'category';
      this.showPartnerModal = true;
      return;
    }

    if (tSource.includes('v2') || tSource.includes('oficial') || tSource.includes('torneo')) {
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
    } else if (tSource.includes('liga')) {
      const loader = await this.loadingCtrl.create({ message: 'Cargando categorías de la liga...' });
      await loader.present();
      
      this.mysql.getLigaDetalle(torneo.id).subscribe({
        next: (res) => {
          loader.dismiss();
          const categorias = res?.liga?.categorias || res?.competicion?.categorias || [];
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
      const myId = this.getStoredUserId();
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

    const myId = this.getStoredUserId();

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

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
  checkmarkCircleOutline, closeCircleOutline, arrowForwardOutline
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

  goBack() {
    if (this.selectedMiTorneo) {
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
      checkmarkCircleOutline, closeCircleOutline, arrowForwardOutline
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

  openMiTorneo(torneo: any) {
    this.selectedMiTorneo = torneo;
    const userId = Number(localStorage.getItem('userId'));
    const partidos = torneo.partidos || [];
    
    this.miTorneoHistorial = partidos.filter((p: any) => p.resultado_t1 !== null && p.resultado_t2 !== null);
    const pendientes = partidos.filter((p: any) => p.resultado_t1 === null || p.resultado_t2 === null);
    this.miTorneoProximo = pendientes.length > 0 ? pendientes[0] : null;
    this.miTorneoPartidos = partidos;
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

  getMatchTeamNames(match: any): { team1: string, team2: string } {
    if (this.selectedMiTorneo?.tipo_torneo === 'americano') {
      return {
        team1: `${match.jugador1_nombre} / ${match.jugador2_nombre}`,
        team2: `${match.jugador3_nombre} / ${match.jugador4_nombre}`
      };
    } else {
      return {
        team1: match.pareja1_nombre || 'Pareja 1',
        team2: match.pareja2_nombre || 'Pareja 2'
      };
    }
  }

  getMatchScore(match: any): string {
    if (match.resultado_t1 === null) return 'Pendiente';
    return `${match.resultado_t1} - ${match.resultado_t2}`;
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
    const userId = Number(localStorage.getItem('userId'));
    if (userId) {
      this.mysql.getPerfil(userId).subscribe(res => {
        if (res.success && res.user) {
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
      const clubsWithCompetition = new Set(activeTorneos.map(t => Number(t.club_id)).filter(id => id > 0));
      
      this.mysql.getClubes().subscribe((res: any[]) => {
        const allClubs = Array.isArray(res) ? res : [];
        this.clubes = allClubs
          .filter(c => clubsWithCompetition.size === 0 || clubsWithCompetition.has(Number(c.id)))
          .map((c) => {
            if (c.logo && c.logo.trim() !== '' && c.logo !== 'null') {
              const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
              c.logoUrl = c.logo.startsWith('http') ? c.logo : `${cleanApiUrl}/prd/${c.logo}`;
            } else {
              c.logoUrl = this.defaultClubImage;
            }
            return c;
          });

        this.regiones = [...new Set(this.clubes.map(c => c.region).filter(r => r))].sort();
        this.allComunas = [...new Set(this.clubes.map(c => c.comuna).filter(c => c))].sort();
        this.comunas = [...this.allComunas];

        this.sortClubes();
        this.loading = false;
      });
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
    const allForClub = this.torneos.filter(t => Number(t.club_id) === Number(club.id));
    
    this.americanosList = allForClub.filter(t => t.table_source === 'americanos' && t.fecha >= today);
    this.torneosList = allForClub.filter(t => t.table_source === 'v2');
    this.ligasClubList = allForClub.filter(t => t.table_source === 'liga');
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

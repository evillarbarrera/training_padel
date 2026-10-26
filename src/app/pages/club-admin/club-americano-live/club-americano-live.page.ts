import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonicModule,
  NavController,
  ToastController,
  AlertController,
  LoadingController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  trophyOutline,
  checkmarkCircleOutline,
  refreshOutline,
  tennisballOutline,
  arrowForwardOutline,
  timeOutline,
  flameOutline,
  lockClosedOutline,
  lockOpenOutline,
  podiumOutline,
  listOutline,
  calendarOutline,
  archiveOutline,
  ribbonOutline,
  checkmarkDoneOutline,
  medalOutline,
  saveOutline,
  personAddOutline,
  trashOutline,
  peopleOutline,
  searchOutline,
  personOutline,
  closeOutline,
  flashOutline,
  createOutline,
  checkmarkOutline,
  callOutline,
  copyOutline
} from 'ionicons/icons';
import { ClubAdminService } from '../../../services/club-admin.service';
import { Haptics, NotificationType } from '@capacitor/haptics';

@Component({
  selector: 'app-club-americano-live',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './club-americano-live.page.html',
  styleUrls: ['./club-americano-live.page.scss']
})
export class ClubAmericanoLivePage implements OnInit {
  userId: number = 0;
  clubes: any[] = [];
  selectedClub: any = null;

  activeTab: 'activos' | 'cerrados' = 'activos';
  viewMode: 'partidos' | 'integrantes' | 'posiciones' = 'partidos';

  allTorneos: any[] = [];
  activosTorneos: any[] = [];
  cerradosTorneos: any[] = [];
  selectedTorneo: any = null;

  matches: any[] = [];
  filteredMatches: any[] = [];
  rondas: number[] = [];
  selectedRonda: number = 1;

  participantes: any[] = [];
  isLoadingStandings: boolean = false;

  isLoading: boolean = false;
  savingMatchId: number | null = null;
  isSavingRound: boolean = false;
  isClosingTorneo: boolean = false;
  isCopyingTorneo: boolean = false;
  isGeneratingFixture: boolean = false;

  // --- MODAL DE INSCRIPCIÓN DE INTEGRANTES / PAREJAS ---
  isAddParticipantModalOpen: boolean = false;
  isEnrolling: boolean = false;

  // Slot 1 (Jugador 1)
  p1Mode: 'socio' | 'manual' = 'socio';
  p1SearchQuery: string = '';
  p1SearchResults: any[] = [];
  p1IsSearching: boolean = false;
  p1SelectedUser: any = null;
  p1ManualNombre: string = '';
  p1ManualTelefono: string = '';

  // Slot 2 (Jugador 2 / Pareja)
  isDoubles: boolean = true;
  p2Mode: 'socio' | 'manual' = 'manual';
  p2SearchQuery: string = '';
  p2SearchResults: any[] = [];
  p2IsSearching: boolean = false;
  p2SelectedUser: any = null;
  p2ManualNombre: string = '';
  p2ManualTelefono: string = '';

  customNombrePareja: string = '';

  constructor(
    private clubAdminService: ClubAdminService,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
    addIcons({
      chevronBackOutline,
      trophyOutline,
      checkmarkCircleOutline,
      refreshOutline,
      tennisballOutline,
      arrowForwardOutline,
      timeOutline,
      flameOutline,
      lockClosedOutline,
      lockOpenOutline,
      podiumOutline,
      listOutline,
      calendarOutline,
      archiveOutline,
      ribbonOutline,
      checkmarkDoneOutline,
      medalOutline,
      saveOutline,
      personAddOutline,
      trashOutline,
      peopleOutline,
      searchOutline,
      personOutline,
      closeOutline,
      flashOutline,
      createOutline,
      checkmarkOutline,
      callOutline,
      copyOutline
    });
  }

  get currentTorneoList(): any[] {
    return this.activeTab === 'activos' ? this.activosTorneos : this.cerradosTorneos;
  }

  compareTorneoFn(t1: any, t2: any): boolean {
    return (t1 && t2) ? Number(t1.id) === Number(t2.id) : t1 === t2;
  }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.loadClubes();
  }

  loadClubes() {
    this.isLoading = true;
    this.clubAdminService.getClubesAdmin(this.userId).subscribe({
      next: (res) => {
        this.clubes = res || [];
        if (this.clubes.length > 0) {
          const savedId = localStorage.getItem('selectedClubId');
          this.selectedClub = this.clubes.find(c => String(c.id) === String(savedId)) || this.clubes[0];
          this.loadTorneos();
        } else {
          this.isLoading = false;
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  isTorneoCerrado(torneo: any): boolean {
    if (!torneo) return false;
    const st = (torneo.estado || '').toLowerCase().trim();
    return st === 'cerrado' || st === 'finalizado';
  }

  loadTorneos(event?: any) {
    if (!this.selectedClub) return;
    this.isLoading = true;

    this.clubAdminService.getTorneosAdmin(this.userId, this.selectedClub.id).subscribe({
      next: (res: any[]) => {
        this.allTorneos = (res || []).filter(t => t.tipo === 'americano' || t.formato === 'americano' || !t.tipo);
        this.activosTorneos = this.allTorneos.filter(t => !this.isTorneoCerrado(t));
        this.cerradosTorneos = this.allTorneos.filter(t => this.isTorneoCerrado(t));

        this.updateSelectedTorneoForCurrentTab(event);
      },
      error: () => {
        this.isLoading = false;
        if (event) event.target.complete();
      }
    });
  }

  updateSelectedTorneoForCurrentTab(event?: any) {
    const list = this.currentTorneoList;
    if (list.length > 0) {
      if (!this.selectedTorneo || !list.find(t => Number(t.id) === Number(this.selectedTorneo.id))) {
        this.selectedTorneo = list[0];
      } else {
        this.selectedTorneo = list.find(t => Number(t.id) === Number(this.selectedTorneo.id)) || list[0];
      }
      this.loadTorneoData(event);
    } else {
      this.selectedTorneo = null;
      this.matches = [];
      this.filteredMatches = [];
      this.participantes = [];
      this.isLoading = false;
      if (event) event.target.complete();
    }
  }

  setTorneoTab(tab: 'activos' | 'cerrados') {
    if (this.activeTab === tab) return;
    this.activeTab = tab;
    this.updateSelectedTorneoForCurrentTab();
  }

  setViewMode(mode: 'partidos' | 'integrantes' | 'posiciones') {
    this.viewMode = mode;
    if (this.selectedTorneo) {
      if (mode === 'posiciones' || mode === 'integrantes') {
        this.loadStandings();
      }
      if (mode === 'partidos') {
        this.loadMatches();
      }
    }
  }

  onTorneoSelect() {
    this.loadTorneoData();
  }

  loadTorneoData(event?: any) {
    if (!this.selectedTorneo) {
      if (event) event.target.complete();
      return;
    }
    this.loadMatches(event);
    this.loadStandings(false);
  }

  loadMatches(event?: any) {
    if (!this.selectedTorneo) {
      if (event) event.target.complete();
      return;
    }

    this.isLoading = true;
    this.clubAdminService.getTorneoMatches(this.selectedTorneo.id).subscribe({
      next: (res: any[]) => {
        this.matches = (res || []).map(m => {
          const p1 = Number(m.puntos_t1 != null ? m.puntos_t1 : (m.puntos_pareja1 || 0));
          const p2 = Number(m.puntos_t2 != null ? m.puntos_t2 : (m.puntos_pareja2 || 0));
          const p1Name = (m.jugador1_nombre && m.jugador2_nombre)
            ? `${m.jugador1_nombre} / ${m.jugador2_nombre}`
            : (m.jugador1_nombre || 'Equipo 1');
          const p2Name = (m.jugador3_nombre && m.jugador4_nombre)
            ? `${m.jugador3_nombre} / ${m.jugador4_nombre}`
            : (m.jugador3_nombre || 'Equipo 2');

          return {
            ...m,
            pareja1_nombres: p1Name,
            pareja2_nombres: p2Name,
            puntos_t1: p1,
            puntos_t2: p2,
            ronda: Number(m.ronda || m.nro_ronda || 1),
            jugado: (m.finalizado == 1 || p1 > 0 || p2 > 0) ? 1 : 0
          };
        });

        const setRondas = new Set<number>(this.matches.map(m => m.ronda));
        this.rondas = Array.from(setRondas).sort((a, b) => a - b);
        if (this.rondas.length > 0 && !this.rondas.includes(this.selectedRonda)) {
          this.selectedRonda = this.rondas[0];
        }

        this.filterMatchesByRonda();
        this.isLoading = false;
        if (event) event.target.complete();
      },
      error: () => {
        this.matches = [];
        this.filteredMatches = [];
        this.isLoading = false;
        if (event) event.target.complete();
      }
    });
  }

  loadStandings(showSpinner: boolean = true) {
    if (!this.selectedTorneo) return;
    if (showSpinner) this.isLoadingStandings = true;

    this.clubAdminService.getTorneoParticipantes(this.selectedTorneo.id).subscribe({
      next: (res: any[]) => {
        this.participantes = res || [];
        this.isLoadingStandings = false;
      },
      error: (err) => {
        console.error('Error cargando participantes/posiciones:', err);
        this.isLoadingStandings = false;
      }
    });
  }

  selectRonda(ronda: number) {
    this.selectedRonda = ronda;
    this.filterMatchesByRonda();
  }

  filterMatchesByRonda() {
    this.filteredMatches = this.matches.filter(m => m.ronda === this.selectedRonda);
  }

  adjustScore(match: any, team: number, delta: number) {
    if (team === 1) {
      const current = parseInt(match.puntos_t1, 10) || 0;
      match.puntos_t1 = Math.max(0, current + delta);
    } else {
      const current = parseInt(match.puntos_t2, 10) || 0;
      match.puntos_t2 = Math.max(0, current + delta);
    }
  }

  onScoreInput(match: any, team: number) {
    if (team === 1) {
      if (match.puntos_t1 < 0 || isNaN(match.puntos_t1)) match.puntos_t1 = 0;
    } else {
      if (match.puntos_t2 < 0 || isNaN(match.puntos_t2)) match.puntos_t2 = 0;
    }
  }

  async saveMatchScore(match: any) {
    this.savingMatchId = match.id;

    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch (e) {}

    const p1 = parseInt(match.puntos_t1, 10) || 0;
    const p2 = parseInt(match.puntos_t2, 10) || 0;
    match.puntos_t1 = p1;
    match.puntos_t2 = p2;

    this.clubAdminService.updateMatchResult(match.id, p1, p2).subscribe({
      next: (res) => {
        this.savingMatchId = null;
        match.jugado = 1;
        match.finalizado = 1;
        this.showToast('Marcador actualizado', 'success');
        this.loadStandings(false);
      },
      error: (err) => {
        this.savingMatchId = null;
        console.error('Error guardando marcador:', err);
        match.jugado = 1;
        match.finalizado = 1;
        this.showToast('Marcador guardado en la mesa', 'success');
        this.loadStandings(false);
      }
    });
  }

  async saveAllRoundMatches() {
    if (!this.filteredMatches || this.filteredMatches.length === 0) return;
    this.isSavingRound = true;

    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch (e) {}

    const promises = this.filteredMatches.map(match => {
      const p1 = parseInt(match.puntos_t1, 10) || 0;
      const p2 = parseInt(match.puntos_t2, 10) || 0;
      match.puntos_t1 = p1;
      match.puntos_t2 = p2;

      return new Promise<void>((resolve) => {
        this.clubAdminService.updateMatchResult(match.id, p1, p2).subscribe({
          next: () => {
            match.jugado = 1;
            match.finalizado = 1;
            resolve();
          },
          error: () => {
            match.jugado = 1;
            match.finalizado = 1;
            resolve();
          }
        });
      });
    });

    await Promise.all(promises);
    this.isSavingRound = false;
    this.showToast(`Marcadores de Ronda ${this.selectedRonda} guardados`, 'success');
    this.loadStandings(false);
  }

  // --- GESTIÓN DE INTEGRANTES / PAREJAS ---
  openAddParticipantModal() {
    this.resetParticipantForm();
    this.isAddParticipantModalOpen = true;
  }

  closeAddParticipantModal() {
    this.isAddParticipantModalOpen = false;
  }

  resetParticipantForm() {
    this.p1Mode = 'socio';
    this.p1SearchQuery = '';
    this.p1SearchResults = [];
    this.p1SelectedUser = null;
    this.p1ManualNombre = '';
    this.p1ManualTelefono = '';

    this.isDoubles = true;
    this.p2Mode = 'manual';
    this.p2SearchQuery = '';
    this.p2SearchResults = [];
    this.p2SelectedUser = null;
    this.p2ManualNombre = '';
    this.p2ManualTelefono = '';

    this.customNombrePareja = '';
  }

  onSearchUsers(slot: 1 | 2) {
    const q = slot === 1 ? this.p1SearchQuery.trim() : this.p2SearchQuery.trim();
    if (q.length < 2) {
      if (slot === 1) this.p1SearchResults = [];
      else this.p2SearchResults = [];
      return;
    }

    if (slot === 1) this.p1IsSearching = true;
    else this.p2IsSearching = true;

    this.clubAdminService.getUsers(undefined, q).subscribe({
      next: (users) => {
        if (slot === 1) {
          this.p1SearchResults = (users || []).slice(0, 5);
          this.p1IsSearching = false;
        } else {
          this.p2SearchResults = (users || []).slice(0, 5);
          this.p2IsSearching = false;
        }
      },
      error: () => {
        if (slot === 1) {
          this.p1SearchResults = [];
          this.p1IsSearching = false;
        } else {
          this.p2SearchResults = [];
          this.p2IsSearching = false;
        }
      }
    });
  }

  selectUser(slot: 1 | 2, user: any) {
    if (slot === 1) {
      this.p1SelectedUser = user;
      this.p1SearchResults = [];
      this.p1SearchQuery = '';
    } else {
      this.p2SelectedUser = user;
      this.p2SearchResults = [];
      this.p2SearchQuery = '';
    }
    this.updateSuggestedNombrePareja();
  }

  clearUser(slot: 1 | 2) {
    if (slot === 1) {
      this.p1SelectedUser = null;
    } else {
      this.p2SelectedUser = null;
    }
    this.updateSuggestedNombrePareja();
  }

  updateSuggestedNombrePareja() {
    const p1Name = this.p1SelectedUser ? this.p1SelectedUser.nombre : this.p1ManualNombre.trim();
    const p2Name = this.isDoubles ? (this.p2SelectedUser ? this.p2SelectedUser.nombre : this.p2ManualNombre.trim()) : '';

    if (p1Name && p2Name) {
      this.customNombrePareja = `${p1Name} & ${p2Name}`;
    } else if (p1Name) {
      this.customNombrePareja = p1Name;
    }
  }

  getP1DisplayName(): string {
    return this.p1SelectedUser ? this.p1SelectedUser.nombre : this.p1ManualNombre;
  }

  getP2DisplayName(): string {
    return this.p2SelectedUser ? this.p2SelectedUser.nombre : this.p2ManualNombre;
  }

  async saveParticipant() {
    if (!this.selectedTorneo) return;

    // Validación Jugador 1
    const p1Id = this.p1Mode === 'socio' ? (this.p1SelectedUser ? this.p1SelectedUser.id : null) : null;
    const p1Name = this.p1Mode === 'manual' ? this.p1ManualNombre.trim() : null;

    if (!p1Id && !p1Name) {
      this.showToast('Por favor selecciona o ingresa el Jugador 1', 'warning');
      return;
    }

    // Validación Jugador 2
    let p2Id = null;
    let p2Name = null;
    if (this.isDoubles) {
      p2Id = this.p2Mode === 'socio' ? (this.p2SelectedUser ? this.p2SelectedUser.id : null) : null;
      p2Name = this.p2Mode === 'manual' ? this.p2ManualTelefono ? `${this.p2ManualNombre.trim()} (${this.p2ManualTelefono.trim()})` : this.p2ManualNombre.trim() : null;

      if (!p2Id && !p2Name) {
        this.showToast('Por favor selecciona o ingresa el Jugador 2 de la pareja', 'warning');
        return;
      }
    }

    // Nombre de la pareja
    const computedName = this.customNombrePareja.trim() || 
      (p2Name || (this.p2SelectedUser ? this.p2SelectedUser.nombre : '') 
        ? `${this.getP1DisplayName()} & ${this.getP2DisplayName()}` 
        : this.getP1DisplayName());

    const payload: any = {
      torneo_id: this.selectedTorneo.id,
      nombre_pareja: computedName,
      jugador1_id: p1Id,
      nombre_1: p1Name ? (this.p1ManualTelefono ? `${p1Name} (${this.p1ManualTelefono})` : p1Name) : null,
      jugador2_id: p2Id,
      nombre_2: p2Name
    };

    this.isEnrolling = true;
    this.clubAdminService.joinTorneoManual(payload).subscribe({
      next: (res) => {
        this.isEnrolling = false;
        this.showToast('¡Integrante/Pareja inscrita con éxito!', 'success');
        this.closeAddParticipantModal();
        this.loadStandings(false);

        // Si aún no hay partidos generados y ahora hay 2 o más parejas, ofrecer generar el fixture
        if (this.matches.length === 0 && (this.participantes.length + 1) >= 2) {
          this.promptGenerateFixtureAfterEnroll();
        }
      },
      error: (err) => {
        this.isEnrolling = false;
        console.error('Error inscribiendo participante:', err);
        const msg = err?.error?.error || 'No se pudo inscribir la pareja. Revisa que no esté ya registrada.';
        this.showToast(msg, 'danger');
      }
    });
  }

  async promptGenerateFixtureAfterEnroll() {
    const alert = await this.alertCtrl.create({
      header: '¡Pareja Inscrita!',
      subHeader: 'Fixture de Partidos',
      message: 'Tienes suficientes parejas para comenzar. ¿Deseas generar los partidos y rondas automáticamente ahora?',
      buttons: [
        {
          text: 'Más Tarde',
          role: 'cancel'
        },
        {
          text: '⚡ Generar Partidos',
          handler: () => {
            this.executeGenerateFixture();
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmRemoveParticipante(p: any) {
    if (!this.selectedTorneo) return;

    const pairTitle = p.nombre_pareja || p.jugador1_nombre || 'esta pareja';
    const alert = await this.alertCtrl.create({
      header: 'Quitar Integrante',
      subHeader: pairTitle,
      message: '¿Estás seguro de que deseas eliminar este integrante/pareja del torneo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Sí, Eliminar',
          role: 'destructive',
          handler: () => {
            this.executeRemoveParticipante(p.id);
          }
        }
      ]
    });

    await alert.present();
  }

  executeRemoveParticipante(participanteId: number) {
    if (!this.selectedTorneo) return;

    this.clubAdminService.removeParticipante(participanteId, this.selectedTorneo.id).subscribe({
      next: (res) => {
        this.showToast('Participante eliminado del torneo', 'success');
        this.loadStandings(false);
        this.loadMatches();
      },
      error: (err) => {
        console.error('Error eliminando participante:', err);
        const msg = err?.error?.error || 'No se pudo eliminar el participante.';
        this.showToast(msg, 'danger');
      }
    });
  }

  async confirmGenerateFixture() {
    if (!this.selectedTorneo) return;

    const alert = await this.alertCtrl.create({
      header: 'Generar Fixture de Partidos',
      subHeader: `Torneo: ${this.selectedTorneo.nombre}`,
      message: `Se crearán los enfrentamientos y rondas automáticas según las ${this.participantes.length} parejas inscritas. Si ya existían partidos previos sin jugar, se actualizarán. ¿Continuar?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: '⚡ Generar Fixture',
          handler: () => {
            this.executeGenerateFixture();
          }
        }
      ]
    });

    await alert.present();
  }

  executeGenerateFixture() {
    if (!this.selectedTorneo) return;
    this.isGeneratingFixture = true;

    this.clubAdminService.generateMatches(this.selectedTorneo.id).subscribe({
      next: (res) => {
        this.isGeneratingFixture = false;
        this.showToast('¡Fixture generado exitosamente! Partidos listos en cancha.', 'success');
        this.viewMode = 'partidos';
        this.loadMatches();
        this.loadStandings(false);
      },
      error: (err) => {
        this.isGeneratingFixture = false;
        console.error('Error generando fixture:', err);
        const msg = err?.error?.error || 'No se pudo generar el fixture. Verifica que hayan al menos 2 parejas.';
        this.showToast(msg, 'danger');
      }
    });
  }

  async confirmCloseTorneo() {
    if (!this.selectedTorneo) return;

    const alert = await this.alertCtrl.create({
      header: 'Cerrar Torneo Americano',
      subHeader: this.selectedTorneo.nombre,
      message: '¿Estás seguro de que deseas cerrar este torneo? Se calcularán las posiciones finales, se asignarán los puntos al ranking y se dará por finalizado el evento.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Sí, Cerrar Torneo',
          role: 'destructive',
          handler: () => {
            this.executeCloseTorneo();
          }
        }
      ]
    });

    await alert.present();
  }

  executeCloseTorneo() {
    if (!this.selectedTorneo) return;
    this.isClosingTorneo = true;

    this.clubAdminService.closeTorneoAmericano(this.selectedTorneo.id).subscribe({
      next: (res) => {
        this.isClosingTorneo = false;
        this.showToast('¡Torneo cerrado con éxito! Podio y ranking actualizados.', 'success');
        this.selectedTorneo.estado = 'Cerrado';
        this.loadTorneos();
      },
      error: (err) => {
        this.isClosingTorneo = false;
        console.error('Error cerrando torneo:', err);
        this.showToast('No se pudo cerrar el torneo. Intenta nuevamente.', 'danger');
      }
    });
  }

  async confirmCopiarTorneo() {
    if (!this.selectedTorneo) return;

    const hoy = new Date().toISOString().substring(0, 10);
    const horaSugerida = this.selectedTorneo.hora_inicio ? this.selectedTorneo.hora_inicio.substring(0, 5) : '18:00';
    const nombreSugerido = `${this.selectedTorneo.nombre} (Copia)`;

    const alert = await this.alertCtrl.create({
      header: 'Copiar Torneo Americano',
      subHeader: 'Nueva edición con inscritos',
      message: 'Se creará una nueva edición abierta conservando todas las parejas inscritas, sin fixture ni resultados.',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre del nuevo torneo',
          value: nombreSugerido
        },
        {
          name: 'fecha',
          type: 'date',
          value: hoy
        },
        {
          name: 'hora_inicio',
          type: 'time',
          value: horaSugerida
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Copiar Americano',
          handler: (data) => {
            if (!data.nombre || !data.nombre.trim()) {
              this.showToast('El nombre del torneo es obligatorio', 'warning');
              return false;
            }
            if (!data.fecha) {
              this.showToast('La fecha es obligatoria', 'warning');
              return false;
            }
            if (!data.hora_inicio) {
              this.showToast('La hora de inicio es obligatoria', 'warning');
              return false;
            }
            this.executeCopiarTorneo(data.nombre.trim(), data.fecha, data.hora_inicio);
            return true;
          }
        }
      ]
    });

    await alert.present();
  }

  async executeCopiarTorneo(nombre: string, fecha: string, hora_inicio: string) {
    if (!this.selectedTorneo) return;
    this.isCopyingTorneo = true;

    const loading = await this.loadingCtrl.create({
      message: 'Copiando torneo e importando parejas...',
      spinner: 'crescent'
    });
    await loading.present();

    const payload = {
      torneo_id: this.selectedTorneo.id,
      nombre,
      fecha,
      hora_inicio,
      creator_id: this.userId
    };

    this.clubAdminService.duplicateAmericano(payload).subscribe({
      next: async (res: any) => {
        this.isCopyingTorneo = false;
        await loading.dismiss();
        this.showToast(res.mensaje || `¡Torneo copiado con ${res.participantes_copiados || 0} parejas inscritas!`, 'success');

        // Switch to activos tab to see the new copied tournament
        this.activeTab = 'activos';
        this.loadTorneos();
      },
      error: async (err) => {
        this.isCopyingTorneo = false;
        await loading.dismiss();
        console.error('Error copiando torneo:', err);
        const errMsg = err.error?.error || 'No se pudo duplicar el torneo americano.';
        this.showToast(errMsg, 'danger');
      }
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  async showToast(msg: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2200,
      position: 'top',
      color
    });
    await toast.present();
  }
}

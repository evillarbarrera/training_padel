import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon, IonButton,
  AlertController, ActionSheetController, LoadingController,
  IonSegment, IonSegmentButton, IonSpinner,
  IonFab, IonFabButton, IonToggle
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { Router, ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  locationOutline, searchOutline, calendarOutline, 
  timeOutline, arrowForwardOutline, trophyOutline, 
  star, arrowForward, arrowBack, heartOutline, heart,
  shareOutline, notificationsOutline, chevronDownOutline,
  chevronUpOutline, tennisballOutline, lockClosedOutline, close,
  sendOutline, informationCircleOutline, mapOutline,
  chevronForwardOutline, checkmarkCircleOutline,
  chevronBackOutline
} from 'ionicons/icons';
import { environment } from '../../../environments/environment';

import { PadelLoaderComponent } from '../../components/padel-loader/padel-loader.component';

@Component({
  selector: 'app-clubes-reservar',
  templateUrl: './clubes-reservar.page.html',
  styleUrls: ['./clubes-reservar.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonIcon, IonButton,
    IonSegment, IonSegmentButton, IonSpinner,
    IonFab, IonFabButton, IonToggle,
    PadelLoaderComponent
  ]
})
export class ClubesReservarPage implements OnInit {
  clubes: any[] = [];
  horarios: any[] = []; // Now grouped by time: { hora, canchas: [] }
  misPartidos: any[] = [];

  selectedClub: any = null;
  selectedFecha: string = '';
  weekDays: any[] = [];
  activeSubTab: string = 'reservar';
  activeMatchSubTab: 'proximos' | 'historial' = 'proximos';
  selectedSlot: any = null;
  showCourtModal: boolean = false;
  showSuccessModal: boolean = false;
  showOccupied: boolean = false;
  apiBaseUrl: string = 'https://api.padelmanager.cl';
  
  partidosProximos: any[] = [];
  partidosHistorial: any[] = [];
  paginatedHistorial: any[] = [];
  historyPage: number = 1;
  pageSize: number = 5;
  searchTerm: string = '';
  
  // NEW FILTERS
  selectedRegion: string = '';
  selectedComuna: string = '';
  regiones: string[] = [];
  comunas: string[] = [];
  
  // CACHE & SPEED
  disponibilidadCache: Map<string, any[]> = new Map();
  loading = true;
  selectedDuration: number = 90; // Default to 90 min

  setDuration(dur: number) {
    this.selectedDuration = dur;
  }

  defaultClubImage: string = 'assets/fondo-cancha.png';
  heroBackground: string = 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop';
  userPhoto: string = 'assets/avatar.png';

  constructor(
    private mysql: MysqlService, 
    public router: Router,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private cdr: ChangeDetectorRef
  ) {
    addIcons({ 
      locationOutline, searchOutline, calendarOutline, 
      timeOutline, arrowForwardOutline, trophyOutline, 
      star, arrowForward, arrowBack, heartOutline, heart,
      shareOutline, notificationsOutline, chevronDownOutline,
      chevronUpOutline, tennisballOutline, lockClosedOutline, close,
      sendOutline, informationCircleOutline,
      mapOutline: 'map-outline',
      chevronForwardOutline, checkmarkCircleOutline,
      chevronBackOutline
    });
  }

  lastReserva: any = null;

  ngOnInit() {
    this.selectedFecha = this.getLocalISODate(new Date());
    this.generateWeekDays();
    this.loadClubes();
    this.loadUserProfile();
  }

  loadUserProfile() {
    const userId = Number(localStorage.getItem('userId'));
    if (userId) {
      this.mysql.getPerfil(userId).subscribe(res => {
        if (res.success && res.user) {
          const region = res.direccion?.region || res.user?.region;
          if (region && !this.selectedRegion) {
            this.selectedRegion = region;
            this.updateComunas();
            this.cdr.detectChanges();
          }
          const photo = res.user.foto_perfil || res.user.foto;
          if (photo) {
            const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
            this.userPhoto = photo.startsWith('http') ? photo : `${cleanApiUrl}/prd/${photo}`;
            this.cdr.detectChanges();
          }
        }
      });
    }
  }

  getLocalISODate(date: Date): string {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  generateWeekDays() {
    const days = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
    const result = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      result.push({
        nombre: days[d.getDay()],
        numero: d.getDate(),
        fullDate: this.getLocalISODate(d)
      });
    }
    this.weekDays = result;
  }

  loadClubes() {
    this.loading = true;
    this.mysql.getClubes().subscribe({
      next: (res: any[]) => {
        const favorites = JSON.parse(localStorage.getItem('fav_clubes') || '[]');
        this.clubes = res
          .filter(c => Number(c.reservas_activas) === 1)
          .map((c, index) => {
            // Robust logo assignment
            if (c.logo && c.logo !== 'null' && c.logo.trim() !== '') {
              // Ensure path is correct
              const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
              c.logoUrl = c.logo.startsWith('http') ? c.logo : `${cleanApiUrl}/prd/${c.logo}`;
            } else {
              // Generic high-quality padel image
              c.logoUrl = this.defaultClubImage;
            }
            c.isFavorite = favorites.includes(c.id);
            return c;
          });
        
        // Populate regions
        const regionsSet = new Set(this.clubes.map(c => c.region).filter(r => !!r));
        this.regiones = Array.from(regionsSet).sort();
        
        this.updateComunas();
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  updateComunas() {
    if (this.selectedRegion) {
      const comunasSet = new Set(
        this.clubes
          .filter(c => c.region === this.selectedRegion)
          .map(c => c.comuna)
          .filter(com => !!com)
      );
      this.comunas = Array.from(comunasSet).sort();
    } else {
      this.comunas = [];
    }
  }

  async openRegionPicker() {
    const inputs = this.regiones.map(r => ({
      name: 'region',
      type: 'radio' as const,
      label: r,
      value: r,
      checked: this.selectedRegion === r
    }));

    const alert = await this.alertCtrl.create({
      header: 'Seleccionar Región',
      inputs: [
        { name: 'region', type: 'radio', label: 'Todas', value: '', checked: this.selectedRegion === '' },
        ...inputs
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { 
          text: 'Seleccionar', 
          handler: (val) => {
            this.selectedRegion = val;
            this.selectedComuna = ''; // Reset comuna when region changes
            this.updateComunas();
          } 
        }
      ],
      mode: 'ios'
    });
    await alert.present();
  }

  async openComunaPicker() {
    if (!this.selectedRegion) {
      const toast = await this.alertCtrl.create({
        header: 'Aviso',
        message: 'Primero selecciona una región',
        buttons: ['OK'],
        mode: 'ios'
      });
      await toast.present();
      return;
    }

    const inputs = this.comunas.map(c => ({
      name: 'comuna',
      type: 'radio' as const,
      label: c,
      value: c,
      checked: this.selectedComuna === c
    }));

    const alert = await this.alertCtrl.create({
      header: 'Seleccionar Comuna',
      inputs: [
        { name: 'comuna', type: 'radio', label: 'Todas', value: '', checked: this.selectedComuna === '' },
        ...inputs
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { 
          text: 'Seleccionar', 
          handler: (val) => {
            this.selectedComuna = val;
          } 
        }
      ],
      mode: 'ios'
    });
    await alert.present();
  }

  showOnlyFavorites = false;

  toggleShowOnlyFavorites() {
    this.showOnlyFavorites = !this.showOnlyFavorites;
  }

  toggleFavorite(club: any, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    club.isFavorite = !club.isFavorite;
    
    let favorites = JSON.parse(localStorage.getItem('fav_clubes') || '[]');
    if (club.isFavorite) {
      if (!favorites.includes(club.id)) {
        favorites.push(club.id);
      }
    } else {
      favorites = favorites.filter((id: any) => id !== club.id);
    }
    localStorage.setItem('fav_clubes', JSON.stringify(favorites));
    this.cdr.detectChanges();
  }

  get filteredClubes() {
    let list = this.clubes;
    
    // Filter by Favorites
    if (this.showOnlyFavorites) {
      list = list.filter(c => c.isFavorite);
    }

    // Filter by Region
    if (this.selectedRegion) {
      list = list.filter(c => c.region === this.selectedRegion);
    }
    
    // Filter by Comuna
    if (this.selectedComuna) {
      list = list.filter(c => c.comuna === this.selectedComuna);
    }

    // Filter by Search Term
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase().trim();
      list = list.filter(c => 
        (c.nombre && c.nombre.toLowerCase().includes(term)) || 
        (c.direccion && c.direccion.toLowerCase().includes(term))
      );
    }
    
    return list;
  }

  goBack() {
    if (this.selectedClub) {
      this.selectedClub = null;
      this.showSuccessModal = false;
    } else {
      const role = localStorage.getItem('userRole');
      if (role === 'entrenador') {
        this.router.navigate(['/entrenador-home']);
      } else {
        this.router.navigate(['/jugador-home']);
      }
    }
  }

  onSelectClub(club: any) {
    this.selectedClub = club;
    this.activeSubTab = 'reservar';
    this.showSuccessModal = false;
    this.loadDisponibilidad();
    this.loadMisPartidosClub();
  }

  loadMisPartidosClub() {
    if (!this.selectedClub) return;
    this.mysql.getMisPartidos(this.selectedClub.id).subscribe(res => {
      this.partidosProximos = res.filter((p: any) => !p.jugado);
      this.partidosHistorial = res.filter((p: any) => p.jugado);
      this.resetHistoryPagination();
    });
  }

  resetHistoryPagination() {
    this.historyPage = 1;
    this.paginatedHistorial = this.partidosHistorial.slice(0, this.pageSize);
  }

  loadMoreHistory() {
    const nextBatch = this.partidosHistorial.slice(
      this.historyPage * this.pageSize, 
      (this.historyPage + 1) * this.pageSize
    );
    this.paginatedHistorial = [...this.paginatedHistorial, ...nextBatch];
    this.historyPage++;
  }

  hasMoreHistory(): boolean {
    return this.paginatedHistorial.length < this.partidosHistorial.length;
  }

  async onSelectSlot(slot: any) {
    this.selectedSlot = slot;
    this.showCourtModal = true;
  }

  get filteredCourtsForModal() {
    if (!this.selectedSlot) return [];
    return this.showOccupied 
      ? this.selectedSlot.canchas 
      : this.selectedSlot.canchas.filter((c: any) => c.disponible);
  }

  onConfirmCourtSelection(cancha: any) {
    if (!cancha.disponible) return;
    this.showCourtModal = false;
    this.reservar(this.selectedSlot, cancha);
  }

  filterPastHoursIfToday(res: any[]): any[] {
    if (!res || !Array.isArray(res)) return [];
    
    const todayISO = this.getLocalISODate(new Date());
    if (this.selectedFecha !== todayISO) {
      return res;
    }

    const now = new Date();
    const hh = now.getHours().toString().padStart(2, '0');
    const mm = now.getMinutes().toString().padStart(2, '0');
    const currentTimeStr = `${hh}:${mm}:00`;

    return res.filter(slot => {
      return slot.hora >= currentTimeStr;
    });
  }

  loadDisponibilidad() {
    if (!this.selectedClub || !this.selectedFecha) return;
    
    const cacheKey = `${this.selectedClub.id}_${this.selectedFecha}`;
    
    // 1. INSTANT LOAD FROM CACHE
    if (this.disponibilidadCache.has(cacheKey)) {
      const cached = this.disponibilidadCache.get(cacheKey)!;
      this.horarios = this.filterPastHoursIfToday(cached);
      this.autoSelectFirstSlot();
      // Optional: Load in background to refresh, but don't show spinner
      this.fetchAvailabilitySilent(cacheKey);
    } else {
      // 2. SHOW SPINNER FOR NEW REQUESTS
      this.loading = true;
      this.selectedSlot = null;
      this.mysql.getDisponibilidadClub(this.selectedClub.id, this.selectedFecha).subscribe({
        next: (res: any[]) => {
          this.disponibilidadCache.set(cacheKey, res);
          this.horarios = this.filterPastHoursIfToday(res);
          this.autoSelectFirstSlot();
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
  }

  private fetchAvailabilitySilent(cacheKey: string) {
    this.mysql.getDisponibilidadClub(this.selectedClub.id, this.selectedFecha).subscribe({
      next: (res: any[]) => {
        this.disponibilidadCache.set(cacheKey, res);
        this.horarios = this.filterPastHoursIfToday(res);
        this.autoSelectFirstSlot();
      }
    });
  }

  private autoSelectFirstSlot() {
    if (this.horarios.length > 0) {
      // Keep previous slot if it still exists in new data, or select first available
      const currentHora = this.selectedSlot?.hora;
      const sameSlot = this.horarios.find(h => h.hora === currentHora);
      
      if (sameSlot) {
        this.selectedSlot = sameSlot;
      } else {
        const firstAvailable = this.horarios.find(h => this.hasAvailableInSlot(h));
        this.selectedSlot = firstAvailable || this.horarios[0];
      }
    }
  }

  onSelectDate(date: string) {
    this.selectedFecha = date;
    this.loadDisponibilidad();
  }

  toggleTimeSlot(slot: any) {
    slot.expanded = !slot.expanded;
  }

  getCourtPrice(cancha: any): number {
    if (!cancha) return 0;
    const dur = this.selectedDuration;
    if (cancha.precio_slot_60 !== undefined && cancha.precio_slot_60 !== null) {
      if (dur === 60) return Number(cancha.precio_slot_60 || 0);
      if (dur === 120) return Number(cancha.precio_slot_120 || 0);
      return Number(cancha.precio_slot_90 || 0);
    }
    const isAlto = cancha.es_horario_alto;
    if (dur === 60) {
      const pAlto = Number(cancha.precio_60_alto);
      return (isAlto && pAlto > 0) ? pAlto : Number(cancha.precio_60 || 0);
    } else if (dur === 120) {
      const pAlto = Number(cancha.precio_120_alto);
      return (isAlto && pAlto > 0) ? pAlto : Number(cancha.precio_120 || 0);
    } else {
      const pAlto = Number(cancha.precio_90_alto);
      return (isAlto && pAlto > 0) ? pAlto : Number(cancha.precio_90 || 0);
    }
  }

  async reservar(slot: any, cancha: any) {
    if (!cancha.disponible) return;
    
    const precioCalculado = this.getCourtPrice(cancha);
    const precioPorJugador = Math.round(precioCalculado / 4);
    const tipoHorario = cancha.nombre_tarifa || (cancha.es_horario_alto ? '⚡ Horario Alto' : '🌿 Horario Bajo');
    const precioTotalFormatted = '$' + Math.round(precioCalculado).toLocaleString('es-CL');
    const precioJugadorFormatted = '$' + precioPorJugador.toLocaleString('es-CL');

    const alert = await this.alertCtrl.create({
      header: 'Confirmar Reserva',
      message: `¿Deseas reservar ${cancha.cancha_nombre} a las ${slot.hora.slice(0,5)}?\n\n• Precio Total: ${precioTotalFormatted}\n• Por jugador (x4): ${precioJugadorFormatted}\n• Tarifa: ${tipoHorario}`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Confirmar',
          handler: () => this.confirmarReserva(slot, cancha)
        }
      ],
      mode: 'ios'
    });
    await alert.present();
  }

  calcularHoraFin(horaInicio: string, duracionMinutos: number): string {
    const [hh, mm] = horaInicio.split(':').map(Number);
    let totalMinutes = hh * 60 + mm + duracionMinutos;
    const endH = Math.floor(totalMinutes / 60) % 24;
    const endM = totalMinutes % 60;
    return `${endH.toString().padStart(2, '0')}:${endM.toString().padStart(2, '0')}:00`;
  }

  private async confirmarReserva(slot: any, cancha: any) {
    const userId = Number(localStorage.getItem('userId'));
    const horaFin = this.calcularHoraFin(slot.hora, this.selectedDuration);
    const precioCalculado = this.getCourtPrice(cancha);

    const payload = {
      cancha_id: cancha.cancha_id,
      usuario_id: userId,
      jugador_id: userId,
      fecha: this.selectedFecha,
      hora_inicio: slot.hora,
      hora_fin: horaFin,
      duracion: this.selectedDuration, 
      precio: precioCalculado,
      estado: 'Confirmada'
    };

    const loader = await this.loadingCtrl.create({
      message: 'Procesando reserva...',
      mode: 'ios'
    });
    await loader.present();

    this.mysql.addReservaClub(payload).subscribe({
      next: async (res: any) => {
        console.log('Reserva exitosa:', res);
        loader.dismiss();
        
        // 1. CAPTURE DATA FOR SUMMARY
        this.lastReserva = {
          id: res.id || res.reserva_id, // Capture created ID
          club: this.selectedClub.nombre,
          pista: cancha.cancha_nombre,
          hora: `${this.formatTime(slot.hora)}`,
          precio: precioCalculado,
          precioJugador: Math.round(precioCalculado / 4),
          tipoHorario: cancha.es_horario_alto ? 'Horario Alto' : 'Horario Bajo'
        };

        // 2. SHOW SUCCESS MODAL
        this.showSuccessModal = true;
        this.cdr.detectChanges();
        
        // Recargamos datos de fondo
        this.loadDisponibilidad();
        this.loadMisPartidosClub();
      },
      error: async (err: any) => {
        loader.dismiss();
        const errAlert = await this.alertCtrl.create({
          header: 'Error',
          message: err.error?.error || 'No se pudo completar la reserva',
          buttons: ['OK'],
          mode: 'ios'
        });
        await errAlert.present();
      }
    });
  }

  goToEditMatch() {
    if (this.lastReserva && this.lastReserva.id) {
       this.showSuccessModal = false;
       this.router.navigate(['/partido-detalle', this.lastReserva.id]);
    } else {
       this.closeSuccessModal();
    }
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
    this.selectedClub = null; // Return to discovery
    this.cdr.detectChanges();
  }

  formatTime(time: string) {
    return time.slice(0, 5);
  }

  hasAvailableInSlot(slot: any): boolean {
    return slot.canchas.some((c: any) => c.disponible && this.getCourtPrice(c) > 0);
  }

  getCourtsWithPriceForSlot(slot: any): any[] {
    if (!slot || !slot.canchas) return [];
    return slot.canchas.filter((c: any) => this.getCourtPrice(c) > 0);
  }
}

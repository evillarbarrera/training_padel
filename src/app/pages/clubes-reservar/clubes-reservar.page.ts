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
  chevronBackOutline, logoWhatsapp
} from 'ionicons/icons';
import { environment } from '../../../environments/environment';
import { HapticFeedbackService } from '../../services/haptics.service';
import { WeatherService, WeatherInfo } from '../../services/weather.service';

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
  showConfirmModal: boolean = false;
  isSubmittingReserva: boolean = false;
  bookingPreview: any = null;
  showOccupied: boolean = false;
  apiBaseUrl: string = 'https://api.padelmanager.cl';

  // LIVE WEATHER FORECAST STATE
  currentWeather: WeatherInfo | null = null;
  isLoadingWeather: boolean = false;
  
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

  // RESOURCE CATEGORIES & FILTERS
  activeCategoryFilter: string = 'all';

  setCategoryFilter(filter: string) {
    this.activeCategoryFilter = filter;
  }

  getCategoryMeta(cancha: any): { id: string; nombre: string; icono: string; badgeLabel: string; actionLabel: string; grupo: string; colorHex: string; bgHex: string; isCourt: boolean } {
    const cat = cancha?.categoria || 'cancha_padel';
    const catalog: Record<string, any> = {
      cancha_padel: {
        id: 'cancha_padel',
        nombre: 'Cancha de Pádel',
        icono: '🎾',
        badgeLabel: 'Pádel',
        actionLabel: 'RESERVAR',
        grupo: 'padel',
        colorHex: '#059669',
        bgHex: '#ecfdf5',
        isCourt: true
      },
      mesa_pool: {
        id: 'mesa_pool',
        nombre: 'Mesa de Pool / Billar',
        icono: '🎱',
        badgeLabel: 'Pool',
        actionLabel: 'ARRENDAR',
        grupo: 'juegos',
        colorHex: '#8b5cf6',
        bgHex: '#ede9fe',
        isCourt: false
      },
      mesa_pingpong: {
        id: 'mesa_pingpong',
        nombre: 'Mesa de Ping Pong',
        icono: '🏓',
        badgeLabel: 'Ping Pong',
        actionLabel: 'ARRENDAR',
        grupo: 'juegos',
        colorHex: '#0891b2',
        bgHex: '#cffafe',
        isCourt: false
      },
      quincho: {
        id: 'quincho',
        nombre: 'Quincho / Parrilla & BBQ',
        icono: '🍖',
        badgeLabel: 'Quincho BBQ',
        actionLabel: 'ARRENDAR',
        grupo: 'amenities',
        colorHex: '#ea580c',
        bgHex: '#ffedd5',
        isCourt: false
      },
      zona_lounge: {
        id: 'zona_lounge',
        nombre: 'Zona Gamer & Lounge PS5',
        icono: '🎮',
        badgeLabel: 'Zona Gamer',
        actionLabel: 'ARRENDAR',
        grupo: 'juegos',
        colorHex: '#db2777',
        bgHex: '#fce7f3',
        isCourt: false
      },
      futbolito: {
        id: 'futbolito',
        nombre: 'Futbolito / Taca Taca',
        icono: '⚽',
        badgeLabel: 'Futbolito',
        actionLabel: 'ARRENDAR',
        grupo: 'juegos',
        colorHex: '#059669',
        bgHex: '#dcfce7',
        isCourt: false
      },
      maquina_lanzapelotas: {
        id: 'maquina_lanzapelotas',
        nombre: 'Máquina Lanzapelotas',
        icono: '🤖',
        badgeLabel: 'Lanzapelotas',
        actionLabel: 'ARRENDAR',
        grupo: 'equipamiento',
        colorHex: '#2563eb',
        bgHex: '#dbeafe',
        isCourt: false
      },
      cancha_pickleball: {
        id: 'cancha_pickleball',
        nombre: 'Cancha de Pickleball',
        icono: '🏓',
        badgeLabel: 'Pickleball',
        actionLabel: 'RESERVAR',
        grupo: 'padel',
        colorHex: '#65a30d',
        bgHex: '#ecfccb',
        isCourt: true
      },
      sala_eventos: {
        id: 'sala_eventos',
        nombre: 'Sala Multiuso / Eventos',
        icono: '🎉',
        badgeLabel: 'Eventos',
        actionLabel: 'ARRENDAR',
        grupo: 'amenities',
        colorHex: '#ca8a04',
        bgHex: '#fef9c3',
        isCourt: false
      },
      otro: {
        id: 'otro',
        nombre: 'Otro Recurso / Espacio',
        icono: '📦',
        badgeLabel: 'Espacio',
        actionLabel: 'ARRENDAR',
        grupo: 'amenities',
        colorHex: '#64748b',
        bgHex: '#f1f5f9',
        isCourt: false
      }
    };
    return catalog[cat] || catalog['otro'];
  }

  isCourt(cancha: any): boolean {
    return this.getCategoryMeta(cancha).isCourt;
  }

  hasAmenitiesInClub(): boolean {
    if (!this.horarios || this.horarios.length === 0) return false;
    return this.horarios.some(slot => 
      slot.canchas && slot.canchas.some((c: any) => !this.isCourt(c))
    );
  }

  getCategoryCountInSlot(slot: any, grupo: string): number {
    if (!slot || !slot.canchas) return 0;
    return slot.canchas.filter((c: any) => {
      if (this.getCourtPrice(c) <= 0) return false;
      const meta = this.getCategoryMeta(c);
      return meta.grupo === grupo;
    }).length;
  }

  getFilteredCourtsForSlot(slot: any): any[] {
    if (!slot || !slot.canchas) return [];
    const list = slot.canchas.filter((c: any) => this.getCourtPrice(c) > 0);
    if (this.activeCategoryFilter === 'all') return list;
    return list.filter((c: any) => {
      const meta = this.getCategoryMeta(c);
      return meta.grupo === this.activeCategoryFilter;
    });
  }

  setDuration(dur: number) {
    if (this.selectedDuration === dur) return;
    this.haptics.light();
    this.selectedDuration = dur;
    this.autoSelectFirstSlot();
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
    private cdr: ChangeDetectorRef,
    public haptics: HapticFeedbackService,
    private weatherService: WeatherService
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
      chevronBackOutline, logoWhatsapp
    });
  }

  lastReserva: any = null;

  ngOnInit() {
    this.selectedFecha = this.getLocalISODate(new Date());
    this.generateWeekDays();
    this.loadClubes();
    this.loadUserProfile();
    this.loadWeatherForSelection();
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
    this.haptics.light();
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
    this.haptics.light();
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
    this.haptics.medium();
    this.selectedClub = club;
    this.activeSubTab = 'reservar';
    this.showSuccessModal = false;
    this.loadDisponibilidad();
    this.prefetchUpcomingDays();
    this.loadMisPartidosClub();
    this.loadWeatherForSelection();
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
    this.haptics.light();
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

  getCachedDisponibilidad(key: string): any[] | null {
    if (this.disponibilidadCache.has(key)) {
      return this.disponibilidadCache.get(key)!;
    }
    try {
      const stored = sessionStorage.getItem(`disp_${key}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.timestamp && (Date.now() - parsed.timestamp < 10 * 60 * 1000) && Array.isArray(parsed.data)) {
          this.disponibilidadCache.set(key, parsed.data);
          return parsed.data;
        }
      }
    } catch (e) {}
    return null;
  }

  setCachedDisponibilidad(key: string, data: any[]) {
    if (!Array.isArray(data)) return;
    this.disponibilidadCache.set(key, data);
    try {
      sessionStorage.setItem(`disp_${key}`, JSON.stringify({
        timestamp: Date.now(),
        data: data
      }));
    } catch (e) {}
  }

  prefetchUpcomingDays() {
    if (!this.selectedClub || !this.weekDays || this.weekDays.length === 0) return;
    const clubId = this.selectedClub.id;
    const daysToPrefetch = this.weekDays
      .map(d => d.fullDate)
      .filter(f => f !== this.selectedFecha)
      .slice(0, 4);

    daysToPrefetch.forEach((fecha, idx) => {
      const key = `${clubId}_${fecha}`;
      if (!this.getCachedDisponibilidad(key)) {
        setTimeout(() => {
          if (this.selectedClub && this.selectedClub.id === clubId) {
            this.mysql.getDisponibilidadClub(clubId, fecha).subscribe({
              next: (res: any[]) => {
                if (Array.isArray(res) && res.length > 0) {
                  this.setCachedDisponibilidad(key, res);
                }
              }
            });
          }
        }, (idx + 1) * 350);
      }
    });
  }

  loadDisponibilidad(forceRefresh: boolean = false) {
    if (!this.selectedClub || !this.selectedFecha) return;
    
    const cacheKey = `${this.selectedClub.id}_${this.selectedFecha}`;
    if (forceRefresh) {
      this.disponibilidadCache.delete(cacheKey);
      sessionStorage.removeItem(`disp_${cacheKey}`);
    }

    const cached = forceRefresh ? null : this.getCachedDisponibilidad(cacheKey);

    if (cached) {
      this.horarios = this.filterPastHoursIfToday(cached);
      this.autoSelectFirstSlot();
      this.loading = false;
      this.cdr.detectChanges();
      this.fetchAvailabilitySilent(cacheKey);
    } else {
      this.loading = true;
      this.selectedSlot = null;
      this.mysql.getDisponibilidadClub(this.selectedClub.id, this.selectedFecha).subscribe({
        next: (res: any[]) => {
          this.setCachedDisponibilidad(cacheKey, res);
          this.horarios = this.filterPastHoursIfToday(res);
          this.autoSelectFirstSlot();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  private fetchAvailabilitySilent(cacheKey: string) {
    if (!this.selectedClub || !this.selectedFecha) return;
    const clubId = this.selectedClub.id;
    const fecha = this.selectedFecha;

    this.mysql.getDisponibilidadClub(clubId, fecha).subscribe({
      next: (res: any[]) => {
        if (Array.isArray(res)) {
          this.setCachedDisponibilidad(cacheKey, res);
          if (this.selectedClub?.id === clubId && this.selectedFecha === fecha) {
            this.horarios = this.filterPastHoursIfToday(res);
            this.autoSelectFirstSlot();
            this.cdr.detectChanges();
          }
        }
      }
    });
  }

  private autoSelectFirstSlot() {
    const slots = this.filteredHorarios;
    if (slots.length > 0) {
      const currentHora = this.selectedSlot?.hora;
      const sameSlot = slots.find(h => h.hora === currentHora);
      
      if (sameSlot) {
        this.selectedSlot = sameSlot;
      } else {
        this.selectedSlot = slots[0];
      }
    } else {
      this.selectedSlot = null;
    }
  }

  onSelectDate(date: string) {
    if (this.selectedFecha === date) return;
    this.haptics.selectionChanged();
    this.selectedFecha = date;
    this.loadDisponibilidad();
    this.prefetchUpcomingDays();
    this.loadWeatherForSelection();
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

  get isEntrenador(): boolean {
    const role = (localStorage.getItem('userRole') || '').toLowerCase();
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userRol = (currentUser?.rol || '').toLowerCase();
    return role.includes('entrenador') || userRol.includes('entrenador') || role.includes('coach') || userRol.includes('coach');
  }

  getFormattedSelectedDate(): string {
    if (!this.selectedFecha) return '';
    const parts = this.selectedFecha.split('-');
    if (parts.length === 3) {
      const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      return `${days[d.getDay()]}, ${d.getDate()} de ${months[d.getMonth()]}`;
    }
    return this.selectedFecha;
  }

  async reservar(slot: any, cancha: any) {
    if (!cancha.disponible) return;
    this.haptics.heavy();
    
    const meta = this.getCategoryMeta(cancha);
    const isCourtResource = this.isCourt(cancha);
    const precioCalculado = this.getCourtPrice(cancha);
    const precioPorJugador = Math.round(precioCalculado / 4);
    const tipoHorario = cancha.nombre_tarifa || (cancha.es_horario_alto ? '⚡ Horario Alto' : '🌿 Horario Bajo');
    const precioTotalFormatted = '$' + Math.round(precioCalculado).toLocaleString('es-CL');
    const precioJugadorFormatted = '$' + precioPorJugador.toLocaleString('es-CL');
    const horaFin = this.calcularHoraFin(slot.hora, this.selectedDuration);

    this.bookingPreview = {
      cancha,
      slot,
      meta,
      isCourtResource,
      precioCalculado,
      precioPorJugador,
      precioTotalFormatted,
      precioJugadorFormatted,
      tipoHorario,
      horaInicio: slot.hora.slice(0, 5),
      horaFin: horaFin.slice(0, 5),
      duracion: this.selectedDuration,
      fecha: this.selectedFecha,
      tipoReserva: this.isEntrenador && isCourtResource ? 'Entrenamiento' : 'Confirmada'
    };
    this.showConfirmModal = true;
  }

  confirmarBookingFromPreview() {
    if (!this.bookingPreview || this.isSubmittingReserva) return;
    this.haptics.heavy();
    const { slot, cancha, tipoReserva } = this.bookingPreview;
    this.confirmarReserva(slot, cancha, tipoReserva || 'Confirmada');
  }

  cancelarBookingPreview() {
    if (this.isSubmittingReserva) return;
    this.haptics.light();
    this.showConfirmModal = false;
    this.bookingPreview = null;
  }

  calcularHoraFin(horaInicio: string, duracionMinutos: number): string {
    const [hh, mm] = horaInicio.split(':').map(Number);
    let totalMinutes = hh * 60 + mm + duracionMinutos;
    const endH = Math.floor(totalMinutes / 60) % 24;
    const endM = totalMinutes % 60;
    return `${endH.toString().padStart(2, '0')}:${endM.toString().padStart(2, '0')}:00`;
  }

  private async confirmarReserva(slot: any, cancha: any, estado: string = 'Confirmada') {
    const userId = Number(localStorage.getItem('userId'));
    const horaFin = this.calcularHoraFin(slot.hora, this.selectedDuration);
    const precioCalculado = this.getCourtPrice(cancha);
    const meta = this.getCategoryMeta(cancha);

    const payload = {
      club_id: this.selectedClub?.id || this.selectedClub?.club_id,
      cancha_id: cancha.cancha_id || cancha.id,
      usuario_id: userId,
      jugador_id: userId,
      fecha: this.selectedFecha,
      hora_inicio: slot.hora,
      hora_fin: horaFin,
      duracion: this.selectedDuration, 
      precio: precioCalculado,
      estado: estado
    };

    this.isSubmittingReserva = true;
    this.cdr.detectChanges();

    this.mysql.addReservaClub(payload).subscribe({
      next: async (res: any) => {
        console.log('Reserva exitosa:', res);
        this.isSubmittingReserva = false;
        this.showConfirmModal = false;
        this.bookingPreview = null;
        this.haptics.success();
        
        // 1. CAPTURE DATA FOR SUMMARY
        this.lastReserva = {
          id: res.id || res.reserva_id, // Capture created ID
          club: this.selectedClub?.nombre,
          pista: cancha.cancha_nombre,
          hora: `${this.formatTime(slot.hora)}`,
          precio: precioCalculado,
          precioJugador: Math.round(precioCalculado / 4),
          tipoHorario: cancha.es_horario_alto ? 'Horario Alto' : 'Horario Bajo',
          estado: estado,
          isCourt: meta.isCourt,
          categoria: cancha.categoria || 'cancha_padel',
          icono: meta.icono,
          badgeLabel: meta.badgeLabel,
          capacidad: cancha.capacidad,
          descripcion: cancha.descripcion,
          superficie: cancha.superficie,
          tipo: cancha.tipo
        };

        // 2. SHOW SUCCESS MODAL
        this.showSuccessModal = true;
        this.cdr.detectChanges();
        
        // Recargamos datos frescos de fondo (forzando bypass de caché)
        this.loadDisponibilidad(true);
        this.loadMisPartidosClub();
      },
      error: async (err: any) => {
        this.isSubmittingReserva = false;
        this.loadDisponibilidad(true);
        this.cdr.detectChanges();
        const errAlert = await this.alertCtrl.create({
          header: 'Cancha No Disponible',
          message: err.error?.error || 'No se pudo completar la reserva. El horario seleccionado ya no está disponible.',
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

  get filteredHorarios(): any[] {
    if (!this.horarios) return [];
    return this.horarios.filter(slot => this.hasAvailableInSlot(slot));
  }

  splitCount: number = 4;

  getSplitAmount(): number {
    if (!this.lastReserva?.precio) return 0;
    return Math.round(Number(this.lastReserva.precio) / (this.splitCount || 4));
  }

  setSplitCount(count: number) {
    this.haptics.light();
    this.splitCount = count;
  }

  async shareWhatsAppPayment() {
    this.haptics.light();
    if (!this.lastReserva) return;
    const r = this.lastReserva;
    const cuota = this.getSplitAmount();
    const cuotaFormatted = '$' + cuota.toLocaleString('es-CL');
    const totalFormatted = '$' + Number(r.precio).toLocaleString('es-CL');
    const fechaDisplay = this.selectedFecha || 'la fecha reservada';

    const text = `🎾 *¡Pista lista en ${r.club}!* 🔥\n\n` +
      `📅 *Fecha:* ${fechaDisplay}\n` +
      `⏰ *Horario:* ${r.hora}\n` +
      `📍 *Pista:* ${r.pista}\n\n` +
      `💰 *Total:* ${totalFormatted}\n` +
      `👥 *Cuota por jugador (${this.splitCount}p):* *${cuotaFormatted}*\n\n` +
      `¡Confirmen asistencia y recuerden transferir su parte! 🚀`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Cobro de Cancha de Pádel',
          text: text
        });
      } catch (e) {}
    } else {
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  }

  loadWeatherForSelection() {
    const targetClub = this.selectedClub || this.getHabitualClub() || (this.clubes && this.clubes.length > 0 ? this.clubes[0] : null);
    if (!targetClub) return;

    this.isLoadingWeather = true;
    this.weatherService.getWeather(targetClub, this.selectedFecha).subscribe({
      next: (info) => {
        this.currentWeather = info;
        this.isLoadingWeather = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.warn('Could not load live weather:', err);
        this.isLoadingWeather = false;
        this.cdr.detectChanges();
      }
    });
  }

  getWeatherSummary(fecha?: string): WeatherInfo {
    if (this.currentWeather) {
      return this.currentWeather;
    }
    const targetClub = this.selectedClub || this.getHabitualClub();
    const coords = this.weatherService.resolveCoordinates(targetClub);
    return {
      temp: '21°C',
      desc: 'Cielo Despejado',
      icon: '☀️',
      locationName: coords.name || targetClub?.comuna || 'Machalí',
      isOutdoorGood: true,
      badgeText: '🎾 Clima Óptimo para Pádel',
      badgeClass: 'optimal',
      isLive: false
    };
  }

  async notifySlotLiberado(slot: any) {
    this.haptics.success();
    const alert = await this.alertCtrl.create({
      header: '🔔 Alerta de Horario',
      subHeader: `${this.formatTime(slot.hora)} hrs • ${this.selectedFecha}`,
      message: '¡Listo! Te avisaremos de inmediato si se cancela una reserva y se libera una pista en este horario.',
      buttons: ['OK'],
      mode: 'ios'
    });
    await alert.present();
  }

  getHabitualClub(): any | null {
    if (!this.clubes || this.clubes.length === 0) return null;
    const favorites = JSON.parse(localStorage.getItem('fav_clubes') || '[]');
    if (favorites.length > 0) {
      const fav = this.clubes.find(c => favorites.includes(c.id));
      if (fav) return fav;
    }
    return this.clubes[0] || null;
  }
}

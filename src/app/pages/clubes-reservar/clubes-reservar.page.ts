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
  star, arrowForward, arrowBack, heartOutline,
  shareOutline, notificationsOutline, chevronDownOutline,
  chevronUpOutline, tennisballOutline, lockClosedOutline, close,
  sendOutline, informationCircleOutline, mapOutline,
  chevronForwardOutline, checkmarkCircleOutline,
  chevronBackOutline
} from 'ionicons/icons';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-clubes-reservar',
  templateUrl: './clubes-reservar.page.html',
  styleUrls: ['./clubes-reservar.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonIcon, IonButton,
    IonSegment, IonSegmentButton, IonSpinner,
    IonFab, IonFabButton, IonToggle
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

  defaultClubImages: string[] = [
    'https://images.unsplash.com/photo-1626224484214-4051d388915e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop'
  ];

  brandLogo: string = 'assets/logo-transparent.png';
  heroBackground: string = 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop';

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
      star, arrowForward, arrowBack, heartOutline,
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
          if (res.user.region && !this.selectedRegion) {
            this.selectedRegion = res.user.region;
            this.updateComunas();
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
        this.clubes = res
          .filter(c => Number(c.reservas_activas) === 1)
          .map((c, index) => {
            // Robust logo assignment
            if (c.logo && c.logo !== 'null' && c.logo.trim() !== '') {
              // Ensure path is correct
              const cleanApiUrl = environment.apiUrl.replace('/dev','').replace('/prd','').replace('/torneos','');
              c.logoUrl = c.logo.startsWith('http') ? c.logo : `${cleanApiUrl}/${c.logo}`;
            } else {
              // Generic high-quality padel image
              const randomIndex = index % this.defaultClubImages.length;
              c.logoUrl = this.defaultClubImages[randomIndex];
            }
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

  get filteredClubes() {
    let list = this.clubes;
    
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
      this.router.navigate(['/jugador-home']);
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

  loadDisponibilidad() {
    if (!this.selectedClub || !this.selectedFecha) return;
    
    const cacheKey = `${this.selectedClub.id}_${this.selectedFecha}`;
    
    // 1. INSTANT LOAD FROM CACHE
    if (this.disponibilidadCache.has(cacheKey)) {
      this.horarios = this.disponibilidadCache.get(cacheKey)!;
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
          this.horarios = res;
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
        this.horarios = res;
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

  async reservar(slot: any, cancha: any) {
    if (!cancha.disponible) return;
    
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Reserva',
      message: `¿Deseas reservar en ${cancha.cancha_nombre} a las ${slot.hora.slice(0,5)}?`,
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

  private async confirmarReserva(slot: any, cancha: any) {
    const userId = Number(localStorage.getItem('userId'));
    const payload = {
      cancha_id: cancha.cancha_id,
      usuario_id: userId,
      jugador_id: userId,
      fecha: this.selectedFecha,
      hora_inicio: slot.hora,
      hora_fin: cancha.hora_fin,
      duracion: cancha.selectedDur || 90, 
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
          hora: `${this.formatTime(slot.hora)}`
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
    return slot.canchas.some((c: any) => c.disponible);
  }
}

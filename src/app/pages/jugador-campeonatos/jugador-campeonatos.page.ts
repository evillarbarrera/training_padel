import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon, IonButton, IonSpinner,
  AlertController, LoadingController, ToastController, IonModal,
  IonFab, IonFabButton
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  locationOutline, searchOutline, trophyOutline, 
  arrowBack, heartOutline, shareOutline, chevronForward,
  addCircleOutline, closeOutline, personAddOutline,
  star, tennisballOutline, calendarOutline, chevronDown,
  peopleOutline, mapOutline
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
    IonFab, IonFabButton
  ]
})
export class JugadorCampeonatosPage implements OnInit {
  clubes: any[] = [];
  torneos: any[] = [];
  selectedClub: any = null;
  selectedTab: 'americanos' | 'torneos' = 'americanos';
  loading = true;
  searchTerm: string = '';
  userRegion: string = '';

  americanosList: any[] = [];
  torneosList: any[] = [];
  
  // Filters
  selectedRegion: string = '';
  selectedComuna: string = '';
  regiones: string[] = [];
  comunas: string[] = [];
  allComunas: string[] = []; // Full list for reference
  
  // Partner Selection (Keep for enrollment)
  showPartnerModal = false;
  partnerSearchTerm = '';
  partnerResults: any[] = [];
  selectedPartner: any = null;
  selectedTournament: any = null;

  defaultClubImage: string = 'assets/fondo-cancha.png';

  heroBackground: string = 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1200&auto=format&fit=crop';

  goBack() {
    if (this.selectedClub) {
      this.selectedClub = null;
    } else {
      this.router.navigate(['/jugador-home']);
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
      peopleOutline, mapOutline
    });
  }

  ngOnInit() {
    this.loadUserProfile();
    this.loadClubesConTorneos();
  }

  loadUserProfile() {
    const userId = Number(localStorage.getItem('userId'));
    if (userId) {
      this.mysql.getPerfil(userId).subscribe(res => {
        if (res.success && res.user) {
          this.userRegion = res.user.region || '';
          this.sortClubes();
        }
      });
    }
  }

  loadClubesConTorneos() {
    this.loading = true;
    const today = new Date().toISOString().split('T')[0];
    
    // We get all tournaments first to know which clubs have them
    this.mysql.getTorneosPublicos().subscribe((allTorneos: any[]) => {
      // 1. Filter tournaments to only include active/future ones
      const activeTorneos = allTorneos.filter(t => {
        if (t.table_source === 'americanos') {
          return t.fecha >= today;
        }
        // V2 tournaments are already filtered by API (inscripciones_abiertas = 1)
        return true; 
      });

      this.torneos = activeTorneos;
      const clubsWithT = new Set(activeTorneos.map(t => Number(t.club_id)));
      
        this.mysql.getClubes().subscribe((res: any[]) => {
          this.clubes = res
            .filter(c => clubsWithT.has(Number(c.id)))
            .map((c, index) => {
              if (c.logo && c.logo.trim() !== '' && c.logo !== 'null') {
                c.logoUrl = c.logo.startsWith('http') ? c.logo : `${environment.apiUrl.replace('/dev','').replace('/prd','')}/${c.logo}`;
              } else {
                c.logoUrl = this.defaultClubImage;
              }
              return c;
            });

          // Extract unique Regions and Comunas for filters
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
      // Priority 1: Selected Region
      if (this.selectedRegion) {
        const aInR = a.region === this.selectedRegion ? 1 : 0;
        const bInR = b.region === this.selectedRegion ? 1 : 0;
        if (aInR !== bInR) return bInR - aInR;
      }
      
      // Priority 2: User Profile Region (if no region selected)
      if (this.userRegion && !this.selectedRegion) {
        const aInUserR = a.region === this.userRegion ? 1 : 0;
        const bInUserR = b.region === this.userRegion ? 1 : 0;
        if (aInUserR !== bInUserR) return bInUserR - aInUserR;
      }
      
      return a.nombre.localeCompare(b.nombre);
    });
  }

  onFilterChange() {
    // If region changes, filter comunas available
    if (this.selectedRegion) {
      this.comunas = [...new Set(
        this.clubes
          .filter(c => c.region === this.selectedRegion)
          .map(c => c.comuna)
          .filter(cm => cm)
      )].sort();
      // Reset selected comuna if it's no longer in the list
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

  onSelectClub(club: any) {
    this.selectedClub = club;
    const today = new Date().toISOString().split('T')[0];
    const allForClub = this.torneos.filter(t => Number(t.club_id) === Number(club.id));
    
    // Filter out past Americanos
    this.americanosList = allForClub.filter(t => 
      t.table_source === 'americanos' && t.fecha >= today
    );
    
    this.torneosList = allForClub.filter(t => t.table_source === 'v2');
  }

  selectedCategoriaId: number = 0;
  enrollmentStep: 'category' | 'partner' = 'partner';
  availableCategorias: any[] = [];

  async openEnrollment(torneo: any) {
    this.selectedTournament = torneo;
    this.selectedPartner = null;
    this.partnerSearchTerm = '';
    this.partnerResults = [];
    
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
    this.confirmEnrollment();
  }

  async confirmEnrollment() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Inscripción',
      message: `¿Deseas inscribirte al torneo "${this.selectedTournament.nombre}" junto a ${this.selectedPartner.nombre}?`,
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
            this.goBack();
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
            this.goBack();
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

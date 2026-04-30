import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon, IonButton,
  AlertController, LoadingController, ToastController, IonModal
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  locationOutline, searchOutline, trophyOutline, 
  arrowBack, heartOutline, shareOutline, chevronForward,
  addCircleOutline, closeOutline, personAddOutline,
  star
} from 'ionicons/icons';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-jugador-campeonatos',
  templateUrl: './jugador-campeonatos.page.html',
  styleUrls: ['./jugador-campeonatos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonIcon, IonButton, IonModal
  ]
})
export class JugadorCampeonatosPage implements OnInit {
  clubes: any[] = [];
  torneos: any[] = [];
  selectedClub: any = null;
  loading = true;
  searchTerm: string = '';
  userRegion: string = '';

  // Partner Selection
  showPartnerModal = false;
  partnerSearchTerm = '';
  partnerResults: any[] = [];
  selectedPartner: any = null;
  selectedTournament: any = null;

  defaultClubImages: string[] = [
    'https://images.unsplash.com/photo-1626224484214-4051d388915e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop'
  ];

  heroBackground: string = 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop';

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
      star
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
    // We get all tournaments first to know which clubs have them
    this.mysql.getTorneosPublicos().subscribe((allTorneos: any[]) => {
      this.torneos = allTorneos;
      const clubsWithT = new Set(allTorneos.map(t => Number(t.club_id)));
      
      this.mysql.getClubes().subscribe((res: any[]) => {
        this.clubes = res
          .filter(c => clubsWithT.has(Number(c.id)))
          .map((c, index) => {
            if (c.logo && c.logo.trim() !== '' && c.logo !== 'null') {
              c.logoUrl = c.logo.startsWith('http') ? c.logo : `${environment.apiUrl.replace('/dev','').replace('/prd','')}/${c.logo}`;
            } else {
              const randomIndex = index % this.defaultClubImages.length;
              c.logoUrl = this.defaultClubImages[randomIndex];
            }
            return c;
          });
        this.sortClubes();
        this.loading = false;
      });
    });
  }

  sortClubes() {
    if (!this.userRegion || this.clubes.length === 0) return;
    this.clubes.sort((a, b) => {
      const aInRegion = a.region === this.userRegion ? 1 : 0;
      const bInRegion = b.region === this.userRegion ? 1 : 0;
      return bInRegion - aInRegion;
    });
  }

  get filteredClubes() {
    if (!this.searchTerm || this.searchTerm.trim() === '') return this.clubes;
    const term = this.searchTerm.toLowerCase().trim();
    return this.clubes.filter(c => 
      (c.nombre && c.nombre.toLowerCase().includes(term)) || 
      (c.direccion && c.direccion.toLowerCase().includes(term))
    );
  }

  get torneosDelClub() {
    if (!this.selectedClub) return [];
    return this.torneos.filter(t => Number(t.club_id) === Number(this.selectedClub.id));
  }

  goBack() {
    if (this.selectedClub) {
      this.selectedClub = null;
    } else {
      this.router.navigate(['/jugador-home']);
    }
  }

  onSelectClub(club: any) {
    this.selectedClub = club;
  }

  async openEnrollment(torneo: any) {
    this.selectedTournament = torneo;
    this.selectedPartner = null;
    this.showPartnerModal = true;
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

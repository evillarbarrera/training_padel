import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, IonIcon,
  AlertController
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  locationOutline, searchOutline, calendarOutline, 
  timeOutline, arrowForwardOutline, trophyOutline, 
  star, arrowForward, arrowBack, heartOutline,
  shareOutline, notificationsOutline, chevronDownOutline,
  chevronUpOutline
} from 'ionicons/icons';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-clubes-reservar',
  templateUrl: './clubes-reservar.page.html',
  styleUrls: ['./clubes-reservar.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonIcon
  ]
})
export class ClubesReservarPage implements OnInit {
  clubes: any[] = [];
  canchas: any[] = [];
  horarios: any[] = [];
  torneos: any[] = [];
  americanos: any[] = [];

  selectedClub: any = null;
  selectedCancha: any = null;
  selectedFecha: string = '';
  weekDays: any[] = [];
  activeSubTab: string = 'reservar';
  
  searchTerm: string = '';
  userRegion: string = '';
  loading = true;

  defaultClubImages: string[] = [
    'https://images.unsplash.com/photo-1626224484214-4051d388915e?q=80&w=800&auto=format&fit=crop', // Padel 1
    'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=800&auto=format&fit=crop', // Padel 2
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop'  // Padel 3
  ];

  brandLogo: string = 'https://api.padelmanager.cl/assets/img/logo.png';
  heroBackground: string = 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop';

  constructor(
    private mysql: MysqlService, 
    private router: Router,
    private alertCtrl: AlertController
  ) {
    addIcons({ 
      locationOutline, searchOutline, calendarOutline, 
      timeOutline, arrowForwardOutline, trophyOutline, 
      star, arrowForward, arrowBack, heartOutline,
      shareOutline, notificationsOutline, chevronDownOutline,
      chevronUpOutline
    });
  }

  hasAvailableSlots(): boolean {
    return this.horarios.some(h => h.disponible);
  }

  ngOnInit() {
    this.selectedFecha = this.getLocalISODate(new Date());
    this.generateWeekDays();
    this.loadUserProfile();
    this.loadClubes();
  }

  loadUserProfile() {
    const userId = Number(localStorage.getItem('userId'));
    if (userId) {
      this.mysql.getPerfil(userId).subscribe(res => {
        if (res.success && res.user) {
          this.userRegion = res.user.region || '';
          this.sortClubesByUserRegion();
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
    for (let i = 0; i < 30; i++) {
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
        this.clubes = res.map((c, index) => {
          if (c.logo && c.logo.trim() !== '' && c.logo !== 'null') {
            c.logoUrl = c.logo.startsWith('http') ? c.logo : `${environment.apiUrl.replace('/dev','').replace('/prd','')}/${c.logo}`;
          } else {
            // Assign a random high-quality default image
            const randomIndex = index % this.defaultClubImages.length;
            c.logoUrl = this.defaultClubImages[randomIndex];
          }
          return c;
        });
        this.sortClubesByUserRegion();
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  sortClubesByUserRegion() {
    if (!this.userRegion || this.clubes.length === 0) return;
    this.clubes.sort((a, b) => {
      const aInRegion = a.region === this.userRegion ? 1 : 0;
      const bInRegion = b.region === this.userRegion ? 1 : 0;
      return bInRegion - aInRegion;
    });
  }

  get filteredClubes() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return this.clubes;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.clubes.filter(c => 
      (c.nombre && c.nombre.toLowerCase().includes(term)) || 
      (c.direccion && c.direccion.toLowerCase().includes(term)) ||
      (c.region && c.region.toLowerCase().includes(term))
    );
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
    this.activeSubTab = 'reservar';
    this.mysql.getCanchas(club.id).subscribe((res: any[]) => {
      this.canchas = res.map(c => ({ ...c, expanded: false })); // Closed by default
      if (res.length > 0) this.onSelectCancha(this.canchas[0]);
    });
    this.loadTorneosClub();
  }

  toggleCancha(cancha: any) {
    cancha.expanded = !cancha.expanded;
    if (cancha.expanded) {
      this.onSelectCancha(cancha);
    }
  }

  loadTorneosClub() {
    if (!this.selectedClub) return;
    this.mysql.getTorneosPublicos().subscribe((res: any[]) => {
      const clubMatches = res.filter((t: any) => t.club_id === this.selectedClub.id);
      this.torneos = clubMatches.filter((t: any) => t.tipo !== 'Americano');
      this.americanos = clubMatches.filter((t: any) => t.tipo === 'Americano');
    });
  }

  onSelectCanchaById(event: any) {
    const canchaId = event.detail.value;
    const cancha = this.canchas.find(c => c.id === canchaId);
    if (cancha) {
      this.onSelectCancha(cancha);
    }
  }

  onSelectCancha(cancha: any) {
    this.selectedCancha = cancha;
    this.loadDisponibilidad();
  }

  loadDisponibilidad() {
    if (!this.selectedCancha || !this.selectedFecha) return;
    this.mysql.getDisponibilidadCancha(this.selectedCancha.id, this.selectedFecha).subscribe((res: any[]) => {
      this.horarios = res;
    });
  }

  onSelectDate(date: string) {
    this.selectedFecha = date;
    this.loadDisponibilidad();
  }

  async reservar(slot: any) {
    if (!slot.disponible) return;
    
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Reserva',
      message: `¿Deseas reservar el horario de las ${slot.hora_inicio.slice(0,5)} en ${this.selectedCancha.nombre}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
             this.confirmarReserva(slot);
          }
        }
      ],
      mode: 'ios'
    });

    await alert.present();
  }

  private confirmarReserva(slot: any) {
    const userId = Number(localStorage.getItem('userId'));
    const [h, m] = slot.hora_inicio.split(':');
    const duration = 90; 
    const totalMin = parseInt(h) * 60 + parseInt(m) + duration;
    const hEnd = Math.floor(totalMin / 60).toString().padStart(2, '0');
    const mEnd = (totalMin % 60).toString().padStart(2, '0');

    const payload = {
      cancha_id: this.selectedCancha.id,
      usuario_id: userId,
      jugador_id: userId,
      fecha: this.selectedFecha,
      hora_inicio: slot.hora_inicio,
      hora_fin: `${hEnd}:${mEnd}:00`,
      duracion: duration,
      estado: 'Confirmada'
    };

    this.mysql.addReservaClub(payload).subscribe({
      next: async () => {
        const okAlert = await this.alertCtrl.create({
          header: '¡Éxito!',
          message: 'Tu cancha ha sido reservada con éxito.',
          buttons: ['OK'],
          mode: 'ios'
        });
        await okAlert.present();
        this.loadDisponibilidad();
      },
      error: async (err: any) => {
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
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonSpinner,
  IonRefresher,
  IonRefresherContent,
  IonButtons,
  IonModal,
  NavController,
  ToastController,
  AlertController
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  giftOutline,
  walletOutline,
  pricetagOutline,
  pricetagsOutline,
  timeOutline,
  locationOutline,
  chevronForwardOutline,
  checkmarkCircleOutline,
  closeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-mis-clubes-puntos',
  templateUrl: './mis-clubes-puntos.page.html',
  styleUrls: ['./mis-clubes-puntos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonSpinner,
    IonRefresher,
    IonRefresherContent,
    IonButtons,
    IonModal,
    CommonModule,
    FormsModule
  ]
})
export class MisClubesPuntosPage implements OnInit, OnDestroy {
  userId = Number(localStorage.getItem('userId'));
  loading = false;
  clubBalances: any[] = [];
  userCoupons: any[] = [];
  selectedClub: any = null;

  profile: any = {
    nombre: '',
    rol: '',
    categoria: '',
    foto_perfil: ''
  };

  // QR Code Generation
  qrCodeUrl = '';
  qrTimeLeft = 30;
  qrTimerInterval: any = null;

  // Redeem popup state
  isRedeemModalOpen = false;
  selectedReward: any = null;
  remainingPoints = 0;

  rewardsList = [
    { 
      id: 1, 
      name: 'Bebida Isotónica', 
      cost: 150, 
      image: 'assets/isotonic_drink.png',
      description: 'Bebida isotónica VoltMax con electrolitos esenciales para rehidratarte y recuperar energía rápidamente durante el juego.' 
    },
    { 
      id: 2, 
      name: 'Tubo Pelotas Head Pro', 
      cost: 400, 
      image: 'assets/padel_balls.png',
      description: 'Tubo de 3 pelotas oficiales Head Tour Padel Pro. Máximo control, durabilidad y rebote óptimo en todo tipo de canchas.' 
    },
    { 
      id: 3, 
      name: 'Mochila PadelBlox', 
      cost: 1500, 
      image: 'assets/padel_backpack.png',
      description: 'Mochila deportiva ergonómica con compartimiento especial acolchado para palas, zapatillas y accesorios.' 
    },
    { 
      id: 4, 
      name: 'Pala de Pádel Pro', 
      cost: 10000, 
      image: 'assets/padel_racket.png',
      description: 'Pala de fibra de carbono de alta gama. Balance medio-alto, núcleo de goma EVA Soft para máxima potencia y precisión.' 
    }
  ];

  constructor(
    private mysqlService: MysqlService,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    addIcons({
      chevronBackOutline,
      giftOutline,
      walletOutline,
      pricetagOutline,
      pricetagsOutline,
      timeOutline,
      locationOutline,
      chevronForwardOutline,
      checkmarkCircleOutline,
      closeOutline
    });
  }

  ngOnInit() {
    this.loadProfile();
    this.loadData();
  }

  ionViewWillLeave() {
    this.stopQRFlow();
  }

  ngOnDestroy() {
    this.stopQRFlow();
  }

  loadProfile() {
    if (!this.userId) return;
    this.mysqlService.getPerfil(this.userId).subscribe({
      next: (res) => {
        if (res.success && res.user) {
          const p1 = res.user.foto_perfil;
          const p2 = res.user.foto;
          let fotoRaw = p1 || p2;
          let finalFoto = "";

          if (fotoRaw && fotoRaw.length > 5 && !fotoRaw.includes('imagen_defecto')) {
            finalFoto = fotoRaw.startsWith('http') ? fotoRaw : `${environment.apiUrl}/${fotoRaw.startsWith('/') ? fotoRaw.substring(1) : fotoRaw}`;
          }
          this.profile = { ...this.profile, ...res.user, foto_perfil: finalFoto };
        }
      },
      error: (err) => console.error('Error loading profile in club wallet page:', err)
    });
  }

  loadData() {
    if (!this.userId) return;
    this.loading = true;

    this.mysqlService.getWallet(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.balances_by_club) {
          this.clubBalances = res.balances_by_club;
          // If we had a club selected previously, update it in the view
          if (this.selectedClub) {
            const updated = this.clubBalances.find(c => c.club_id === this.selectedClub.club_id);
            if (updated) {
              this.selectedClub = updated;
            }
          }
        }
        this.loadCoupons();
      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading wallet club balances:', err);
      }
    });
  }

  loadCoupons() {
    this.mysqlService.getUserCoupons(this.userId).subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success && res.coupons) {
          this.userCoupons = res.coupons;
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading user coupons:', err);
      }
    });
  }

  handleRefresh(event: any) {
    this.loadProfile();
    this.loadData();
    setTimeout(() => {
      if (event && event.target) {
        event.target.complete();
      }
    }, 1000);
  }

  selectClub(club: any) {
    this.selectedClub = club;
    this.qrCodeUrl = '';
    this.qrTimeLeft = 30;
    this.startQRFlow();
  }

  closeDetails() {
    this.selectedClub = null;
    this.stopQRFlow();
  }

  startQRFlow() {
    this.generateQR();

    if (this.qrTimerInterval) {
      clearInterval(this.qrTimerInterval);
    }

    this.qrTimerInterval = setInterval(() => {
      if (this.qrTimeLeft > 1) {
        this.qrTimeLeft--;
      } else {
        this.qrTimeLeft = 30;
        this.generateQR();
      }
    }, 1000);
  }

  stopQRFlow() {
    if (this.qrTimerInterval) {
      clearInterval(this.qrTimerInterval);
      this.qrTimerInterval = null;
    }
  }

  generateQR() {
    if (!this.userId || !this.selectedClub) return;
    this.mysqlService.generateQRCode(this.userId, this.selectedClub.club_id).subscribe({
      next: (res) => {
        if (res && res.success && res.qr_payload) {
          this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(res.qr_payload)}`;
          this.qrTimeLeft = 30;
        }
      },
      error: (err) => console.error('Error generating club QR payload:', err)
    });
  }

  getFilteredCoupons() {
    if (!this.selectedClub) return [];
    return this.userCoupons.filter(c => c.club_id === this.selectedClub.club_id);
  }

  async abrirPopupCanje(reward: any) {
    if (!this.selectedClub) return;

    if (this.selectedClub.balance < reward.cost) {
      const alert = await this.alertCtrl.create({
        header: 'Puntos Insuficientes',
        message: `Necesitas ${reward.cost} puntos para canjear "${reward.name}" en este club. Actualmente tienes ${this.selectedClub.balance} puntos.`,
        buttons: ['Entendido']
      });
      await alert.present();
      return;
    }

    this.selectedReward = reward;
    this.remainingPoints = this.selectedClub.balance - reward.cost;
    this.isRedeemModalOpen = true;
  }

  cerrarPopupCanje() {
    this.isRedeemModalOpen = false;
    this.selectedReward = null;
  }

  confirmarCanjeModal() {
    if (!this.selectedReward) return;
    const reward = this.selectedReward;
    this.cerrarPopupCanje();
    this.ejecutarCanje(reward);
  }

  ejecutarCanje(reward: any) {
    if (!this.userId || !this.selectedClub) return;
    this.loading = true;

    this.mysqlService.redeemCoupon(this.userId, reward.id, this.selectedClub.club_id).subscribe({
      next: async (res) => {
        if (res && res.success) {
          this.loadData();
          
          const alert = await this.alertCtrl.create({
            header: '¡Canje Exitoso! 🎉',
            message: `Has obtenido tu cupón para "${res.reward_name}".\n\nCódigo: ${res.coupon_code}\n\nPresenta este código en recepción para recibir tu premio en "${this.selectedClub.club_name}".`,
            buttons: ['Entendido']
          });
          await alert.present();
        }
      },
      error: async (err) => {
        this.loading = false;
        console.error('Error redeeming coupon:', err);
        const errMsg = err.error?.message || 'Error en el servidor al realizar el canje.';
        const toast = await this.toastCtrl.create({
          message: `❌ ${errMsg}`,
          duration: 3000,
          color: 'danger'
        });
        toast.present();
      }
    });
  }

  goBack() {
    this.navCtrl.back();
  }
}

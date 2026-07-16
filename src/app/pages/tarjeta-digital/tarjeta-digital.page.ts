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
  NavController,
  ToastController,
  AlertController
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  walletOutline,
  timeOutline,
  giftOutline,
  addCircleOutline,
  qrCodeOutline,
  pricetagOutline,
  pricetagsOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tarjeta-digital',
  templateUrl: './tarjeta-digital.page.html',
  styleUrls: ['./tarjeta-digital.page.scss'],
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
    CommonModule,
    FormsModule
  ]
})
export class TarjetaDigitalPage implements OnInit, OnDestroy {

  profile: any = {
    nombre: '',
    rol: '',
    categoria: ''
  };

  loading = false;
  userId = Number(localStorage.getItem('userId'));

  // Wallet & QR Card attributes
  walletBalance = 0;
  transactions: any[] = [];
  userCoupons: any[] = [];
  qrCodeUrl = '';
  qrTimeLeft = 30;
  qrTimerInterval: any = null;

  constructor(
    private mysqlService: MysqlService,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    addIcons({
      chevronBackOutline,
      walletOutline,
      timeOutline,
      giftOutline,
      addCircleOutline,
      qrCodeOutline,
      pricetagOutline,
      pricetagsOutline
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  ionViewDidEnter() {
    this.startQRFlow();
  }

  ionViewWillLeave() {
    this.stopQRFlow();
  }

  ngOnDestroy() {
    this.stopQRFlow();
  }

  startQRFlow() {
    this.loadWallet();
    this.loadTransactions();
    this.loadUserCoupons();
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
      error: (err) => console.error('Error loading profile in wallet page:', err)
    });
  }

  loadWallet() {
    if (!this.userId) return;
    this.mysqlService.getWallet(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.wallet) {
          this.walletBalance = res.wallet.total_balance;
        }
      },
      error: (err) => console.error('Error loading wallet:', err)
    });
  }

  loadTransactions() {
    if (!this.userId) return;
    this.mysqlService.getWalletTransactions(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.transactions) {
          this.transactions = res.transactions;
        }
      },
      error: (err) => console.error('Error loading transactions:', err)
    });
  }

  loadUserCoupons() {
    if (!this.userId) return;
    this.mysqlService.getUserCoupons(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.coupons) {
          this.userCoupons = res.coupons;
        }
      },
      error: (err) => console.error('Error loading user coupons:', err)
    });
  }

  generateQR() {
    if (!this.userId) return;
    this.mysqlService.generateQRCode(this.userId).subscribe({
      next: (res) => {
        if (res && res.success && res.qr_payload) {
          this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(res.qr_payload)}`;
          this.qrTimeLeft = 30;
        }
      },
      error: (err) => console.error('Error generating QR payload:', err)
    });
  }

  handleRefresh(event: any) {
    this.loadProfile();
    this.loadWallet();
    this.loadTransactions();
    this.loadUserCoupons();
    this.generateQR();
    setTimeout(() => {
      if (event && event.target) {
        event.target.complete();
      }
    }, 1000);
  }

  verPremios() {
    this.router.navigate(['/mis-clubes-puntos']);
  }

  goBack() {
    this.navCtrl.back();
  }

  goToClubesPuntos() {
    this.router.navigate(['/mis-clubes-puntos']);
  }
}

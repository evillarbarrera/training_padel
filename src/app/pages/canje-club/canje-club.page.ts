import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonSpinner,
  IonButtons,
  NavController,
  ToastController,
  AlertController
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  barcodeOutline,
  checkmarkCircleOutline,
  closeOutline,
  alertCircleOutline,
  giftOutline,
  personOutline,
  walletOutline,
  timeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-canje-club',
  templateUrl: './canje-club.page.html',
  styleUrls: ['./canje-club.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonSpinner,
    IonButtons,
    CommonModule,
    FormsModule
  ]
})
export class CanjeClubPage implements OnInit {
  couponCode = '';
  couponData: any = null;
  loading = false;

  constructor(
    private mysqlService: MysqlService,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    addIcons({
      chevronBackOutline,
      barcodeOutline,
      checkmarkCircleOutline,
      closeOutline,
      alertCircleOutline,
      giftOutline,
      personOutline,
      walletOutline,
      timeOutline
    });
  }

  ngOnInit() {}

  verifyCoupon() {
    const code = this.couponCode.trim().toUpperCase();
    if (!code) {
      this.showToast('Por favor ingresa un código de cupón.', 'warning');
      return;
    }

    this.loading = true;
    this.couponData = null;

    this.mysqlService.processClubRedemption(code, 'verify').subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success && res.coupon) {
          this.couponData = res.coupon;
        } else {
          this.showToast('Cupón no encontrado.', 'danger');
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Error verifying coupon:', err);
        const errMsg = err.error?.message || 'Código de cupón no encontrado o inválido.';
        this.showToast(errMsg, 'danger');
      }
    });
  }

  confirmRedemption() {
    if (!this.couponData) return;

    this.loading = true;
    const code = this.couponData.coupon_code;

    this.mysqlService.processClubRedemption(code, 'confirm').subscribe({
      next: async (res) => {
        this.loading = false;
        if (res && res.success) {
          this.couponData.status = 'used';
          
          const alert = await this.alertCtrl.create({
            header: '¡Premio Entregado! 🎉',
            message: `El canje del cupón "${res.reward_name}" para el jugador "${res.player_name}" ha sido confirmado y registrado exitosamente.`,
            buttons: ['Entendido']
          });
          await alert.present();
          
          this.clearSearch();
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Error confirming coupon:', err);
        const errMsg = err.error?.message || 'Error al procesar el cupón.';
        this.showToast(errMsg, 'danger');
      }
    });
  }

  clearSearch() {
    this.couponCode = '';
    this.couponData = null;
  }

  async showToast(message: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      color: color
    });
    toast.present();
  }

  goBack() {
    this.navCtrl.back();
  }
}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MysqlService } from 'src/app/services/mysql.service';
import { ToastController } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],   
})

export class LoginPage {

  usuario: string = '';
  password: string = '';

  constructor(
    private mysql: MysqlService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

login() {
  this.mysql.login(this.usuario, this.password).subscribe({
    next: res => {
      localStorage.setItem('token', res.token);

      if (res.rol === 'entrenador') {
        this.router.navigate(['/entrenador-home']);
      } else {
        this.router.navigate(['/jugador-home']);
      }
    },
    error: () => {
      this.showError('Credenciales incorrectas');
    }
  });
}


  async presentAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showError(message: string) {
  const toast = await this.toastCtrl.create({
    message,
    duration: 2500,
    position: 'top',
    color: 'danger',
    icon: 'alert-circle-outline'
  });

  await toast.present();
}


  goToRegister() {
    this.router.navigate(['/register']);
  }
}
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
    private alertCtrl: AlertController
  ) {}

  login() {
    this.mysql.getUsers().subscribe(
      (users) => {
        const user = users.find(
          u => u.usuario === this.usuario && u.password === this.password
        );

        if (!user) {
          this.presentAlert('Acceso denegado', 'Usuario o contraseña incorrectos');
          return;
        }

        localStorage.setItem('user', JSON.stringify(user));

        if (user.rol === 'entrenador') {
          this.router.navigate(['/entrenador-home']);
        } else {
          this.router.navigate(['/jugador-home']);
        }
      },
      () => {
        this.presentAlert('Error', 'No se pudo conectar con el servidor');
      }
    );
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
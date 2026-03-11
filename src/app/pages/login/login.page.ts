import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MysqlService } from 'src/app/services/mysql.service';
import { ToastController, AlertController, Platform, LoadingController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, logoGoogle } from 'ionicons/icons';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';
  recordar: boolean = false;
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private mysql: MysqlService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController
  ) {
    addIcons({ mailOutline, lockClosedOutline, logoGoogle });
  }

  ngOnInit() {
    if (!this.platform.is('capacitor')) {
      GoogleAuth.initialize({
        clientId: '786145270372-liov6hu5v7lcmf2028s9ihi600rp3353.apps.googleusercontent.com', // Web ID
        scopes: ['profile', 'email']
      });
    } else {
      GoogleAuth.initialize(); // Native platforms pick from config
    }
    const savedUser = localStorage.getItem('savedUser');
    const savedPass = localStorage.getItem('savedPass');
    if (savedUser && savedPass) {
      this.usuario = savedUser;
      this.password = savedPass;
      this.recordar = true;
    }
  }

  // Traditional email/password login
  async login() {


    if (!this.usuario || !this.password) {
      this.showError('Por favor ingrese usuario y contraseña');
      return;
    }

    if (this.isLoading) return;

    this.isLoading = true;
    this.error = '';

    try {
      this.mysql.login(this.usuario, this.password)
        .pipe(timeout(7000))
        .subscribe({
          next: (res) => {
            this.isLoading = false;

            if (res && res.token && res.id) {
              localStorage.setItem('token', res.token);
              localStorage.setItem('userId', res.id.toString());

              if (this.recordar) {
                localStorage.setItem('savedUser', this.usuario);
                localStorage.setItem('savedPass', this.password);
              } else {
                localStorage.removeItem('savedUser');
                localStorage.removeItem('savedPass');
              }

              this.redirectBasedOnRole(res.rol);
            } else {
              // Si el servidor responde pero no hay token (ej: credenciales erróneas en formato success: false)
              this.showError(res.message || 'Credenciales incorrectas');
            }
          },
          error: (err) => {
            this.isLoading = false;
            console.error('Login error:', err);

            // Respuesta inmediata ante errores conocidos
            const errorMessage = err.status === 401 ? 'Correo o contraseña incorrectos' :
              err.status === 404 ? 'Usuario no encontrado' :
                'Error de conexión. Inténtalo de nuevo.';

            this.showError(errorMessage);
          }
        });
    } catch (e: any) {
      this.isLoading = false;
      console.error('Critical Error in login flow:', e);
      this.showError('Error inesperado al iniciar sesión');
    }
  }

  async loginWithGoogle() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.error = '';

    try {
      const googleUser = await GoogleAuth.signIn();
      console.log('Google user:', googleUser);

      if (googleUser && googleUser.email) {
        this.mysql.googleCheck(googleUser.email).subscribe({
          next: (res) => {
            this.isLoading = false;
            if (res.exists) {
              // Usuario existe, loguear
              localStorage.setItem('userId', res.id.toString());
              this.redirectBasedOnRole(res.rol);
            } else {
              // Usuario no existe, mostrar error o redirigir a registro
              this.showError('Usuario no registrado. Regístrate con este email primero.');
            }
          },
          error: (err) => {
            this.isLoading = false;
            console.error('Google check error:', err);
            this.showError('Error al verificar cuenta Google.');
          }
        });
      } else {
        this.isLoading = false;
      }
    } catch (err: any) {
      this.isLoading = false;
      console.error('Google sign in error:', err);
      if (err.error !== 'popup_closed_by_user') {
        this.showError('Error al iniciar sesión con Google.');
      }
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showError(message: string) {
    this.error = message;
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      position: 'top',
      color: 'danger',
      icon: 'alert-circle-outline'
    });
    await toast.present();
  }



  redirectBasedOnRole(rol: string) {
    if (rol === 'entrenador') {
      this.router.navigate(['/entrenador-home']);
    } else {
      this.router.navigate(['/jugador-home']);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
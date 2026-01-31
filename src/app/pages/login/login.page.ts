import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MysqlService } from 'src/app/services/mysql.service';
import { ToastController, AlertController, Platform, LoadingController } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { GoogleWebAuthService, GoogleWebUser } from 'src/app/services/google-web-auth.service';
import { addIcons } from 'ionicons';
import { logoGoogle, mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private mysql: MysqlService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private platform: Platform,
    private googleWebAuth: GoogleWebAuthService,
    private loadingCtrl: LoadingController
  ) {
    addIcons({ logoGoogle, mailOutline, lockClosedOutline });
  }

  // Traditional email/password login
  async login() {


    if (!this.usuario || !this.password) {
      this.showError('Por favor ingrese usuario y contraseña');
      return;
    }

    if (this.isLoading) return;

    this.isLoading = true;

    try {
      this.mysql.login(this.usuario, this.password).subscribe({
        next: (res) => {
          this.isLoading = false;
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.id.toString());
          this.redirectBasedOnRole(res.rol);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Login error:', err);
          this.showError('Credenciales incorrectas o error de conexión');
        }
      });
    } catch (e: any) {
      this.isLoading = false;
      console.error('Critical Error in login flow:', e);
      this.showError('Error inesperado al iniciar sesión');
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
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      position: 'top',
      color: 'danger',
      icon: 'alert-circle-outline'
    });
    await toast.present();
  }

  async loginWithGoogle() {

    try {
      let googleUser: { email: string; givenName?: string; familyName?: string };

      if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
        // Web: use modern GIS SDK
        const webUser: GoogleWebUser = await this.googleWebAuth.signIn().toPromise() as GoogleWebUser;

        googleUser = {
          email: webUser.email,
          givenName: webUser.givenName,
          familyName: webUser.familyName
        };
      } else {
        // Native: use Capacitor plugin
        const nativeUser = await GoogleAuth.signIn();

        googleUser = {
          email: nativeUser.email,
          givenName: nativeUser.givenName,
          familyName: nativeUser.familyName
        };
      }

      if (!googleUser || !googleUser.email) {
        throw new Error('Could not retrieve Google user info');
      }

      // Check user in backend
      this.mysql.googleCheck(googleUser.email).subscribe({
        next: async (res) => {
          if (res.exists) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userId', res.id.toString());
            this.redirectBasedOnRole(res.rol);
          } else {
            await this.askForRole(googleUser);
          }
        },
        error: (err) => {
          console.error('Error in googleCheck:', err);
          this.showError('Error verificando cuenta Google');
        }
      });
    } catch (error) {
      console.error('Error in loginWithGoogle:', error);
      this.showError('Error al iniciar sesión con Google');
    }
  }

  async askForRole(googleUser: any) {
    const alert = await this.alertCtrl.create({
      header: '¡Bienvenido!',
      message: 'Para terminar de configurar tu cuenta, selecciona tu rol:',
      inputs: [
        { name: 'rol', type: 'radio', label: 'Soy Jugador', value: 'jugador', checked: true },
        { name: 'rol', type: 'radio', label: 'Soy Entrenador', value: 'entrenador' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Continuar', handler: (data) => this.handleGoogleRegister(googleUser, data) }
      ]
    });
    await alert.present();
  }

  handleGoogleRegister(googleUser: any, rol: string) {
    const nombre = googleUser.givenName ? `${googleUser.givenName} ${googleUser.familyName}` : googleUser.email.split('@')[0];
    this.mysql.googleRegister(nombre, googleUser.email, rol).subscribe({
      next: (res) => {
        if (res.success) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.usuario.id.toString());
          this.redirectBasedOnRole(rol);
        } else {
          this.showError('Error registrando usuario');
        }
      },
      error: (err) => {
        console.error('Error in googleRegister:', err);
        this.showError('Error al registrar usuario con Google');
      }
    });
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
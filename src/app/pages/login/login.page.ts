import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MysqlService } from 'src/app/services/mysql.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ToastController, AlertController, Platform, LoadingController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, logoGoogle, logoApple } from 'ionicons/icons';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { SignInWithApple, SignInWithAppleResponse } from '@capacitor-community/apple-sign-in';
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

  // Password Recovery
  isRecoverModalOpen: boolean = false;
  recoverEmail: string = '';
  isRecovering: boolean = false;

  constructor(
    private mysql: MysqlService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public platform: Platform,
    private loadingCtrl: LoadingController,
    private notificationService: NotificationService
  ) {
    addIcons({ mailOutline, lockClosedOutline, logoGoogle, logoApple });
  }

  ngOnInit() {
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
              localStorage.setItem('userRole', res.rol); // Store role
              this.notificationService.updateTokenForUser();

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

  async ionViewWillEnter() {
    // Initialize Google Auth for iOS to prevent crashes
    if (this.platform.is('ios') || this.platform.is('ipad')) {
      try {
        await GoogleAuth.initialize({
          clientId: '786145270372-e637i46g6uu1kekcr1ioqdka901acud7.apps.googleusercontent.com',
        });
      } catch (e) {
        console.warn('Google Auth already initialized or failed:', e);
      }
    }
  }

  async loginWithGoogle() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.error = '';

    try {
      // Ensure initialized before sign in
      if (this.platform.is('ios') || this.platform.is('ipad')) {
        await GoogleAuth.initialize();
      }
      
      const googleUser = await GoogleAuth.signIn(); 
      console.log('Google user:', googleUser);

      if (googleUser && googleUser.email) {
        this.mysql.googleCheck(googleUser.email).subscribe({
          next: (res) => {
            this.isLoading = false;
            if (res.exists) {
              // Usuario existe, loguear
              if (res.token) localStorage.setItem('token', res.token);
              localStorage.setItem('userId', res.id.toString());
              localStorage.setItem('userRole', res.rol); // Store role
              this.notificationService.updateTokenForUser();
              this.redirectBasedOnRole(res.rol);
            } else {
              // Auto-registro para Google también si es necesario (Recomendado por Apple)
              this.showError('Cuenta no encontrada. Por favor regístrate primero.');
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
      // Evitar alertas innecesarias si el usuario cancela
      if (err.error !== 'popup_closed_by_user' && err.message !== 'arg 0 is not an object') {
        this.showError('Error al iniciar sesión con Google.');
      }
    }
  }

  async loginWithApple() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.error = '';

    try {
      const isNative = this.platform.is('capacitor') || this.platform.is('hybrid');
      const clientId = isNative ? 'cl.padelacademy.app' : 'cl.padelacademy.app.web';

      const result: SignInWithAppleResponse = await SignInWithApple.authorize({
        clientId: clientId,
        redirectURI: isNative ? '' : window.location.origin + '/login',
        scopes: 'email name',
      });

      console.log('Apple response:', result);
      
      // Apple solo envía email y nombre la PRIMERA vez.
      // Debemos confiar en el campo 'user' (Apple ID) para el backend.
      const user = result.response.user;
      const email = result.response.email || '';
      const givenName = result.response.givenName || '';
      const familyName = result.response.familyName || '';
      const fullName = (givenName + ' ' + familyName).trim() || 'Usuario Apple';

      if (user) {
        this.mysql.appleCheck(email, user, fullName).subscribe({
          next: (res) => {
            this.isLoading = false;
            if (res.success && res.exists) {
              if (res.token) localStorage.setItem('token', res.token);
              localStorage.setItem('userId', res.id.toString());
              localStorage.setItem('userRole', res.rol);
              this.notificationService.updateTokenForUser();
              this.redirectBasedOnRole(res.rol);
            } else {
              // Si success es true pero exists es false, significa que el backend no pudo crearla automáticamente
              this.showError(res.error || 'No se pudo vincular tu cuenta de Apple. Intenta con otro método.');
            }
          },
          error: (err) => {
            this.isLoading = false;
            console.error('Apple check error:', err);
            this.showError('Error de conexión con el servidor de autenticación.');
          }
        });
      } else {
        this.isLoading = false;
        this.showError('No se recibió el identificador de Apple. Inténtalo de nuevo.');
      }
    } catch (err: any) {
      this.isLoading = false;
      console.error('Apple sign in error details:', err);
      
      const isCancelled = err.error === 'popup_closed_by_user' || 
                          err.message === 'user_cancelled' || 
                          err.message === 'Sign in with Apple was cancelled';
      
      if (!isCancelled) {
        const detail = err.message || err.error || JSON.stringify(err);
        this.showError(`Error Apple: ${detail}`);
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

  recoverPassword() {
    this.isRecoverModalOpen = true;
  }

  closeRecoverModal() {
    this.isRecoverModalOpen = false;
    this.recoverEmail = '';
  }

  sendRecoverEmail() {
    if (!this.recoverEmail) {
      this.showError('Por favor ingrese su correo electrónico');
      return;
    }

    this.isRecovering = true;
    this.mysql.recoverPassword(this.recoverEmail).subscribe({
      next: (res) => {
        this.isRecovering = false;
        if (res.success) {
          this.presentAlert('Solicitud Enviada', 'Si el correo está registrado, recibirás instrucciones en unos minutos para restablecer tu contraseña.');
          this.closeRecoverModal();
        } else {
          this.showError(res.message || 'Error al procesar la solicitud');
        }
      },
      error: (err) => {
        this.isRecovering = false;
        console.error('Recover error:', err);
        this.showError('Ocurrió un error. Intenta de nuevo más tarde.');
      }
    });
  }
}
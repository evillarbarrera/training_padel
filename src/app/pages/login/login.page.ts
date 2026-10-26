import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MysqlService } from 'src/app/services/mysql.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ToastController, AlertController, Platform, LoadingController, ModalController } from '@ionic/angular';
import { ProfileSelectorModalComponent } from 'src/app/components/profile-selector-modal/profile-selector-modal.component';
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
    private modalCtrl: ModalController,
    private notificationService: NotificationService
  ) {
    addIcons({ mailOutline, lockClosedOutline, logoGoogle, logoApple });
  }

  ngOnInit() {
    if (this.checkExistingSession()) {
      return;
    }
    const savedUser = localStorage.getItem('savedUser');
    const savedPass = localStorage.getItem('savedPass');
    if (savedUser && savedPass) {
      this.usuario = savedUser;
      this.password = savedPass;
      this.recordar = true;
    }
  }

  checkExistingSession(): boolean {
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');
    if (userId && userId !== 'null' && userId !== 'undefined') {
      this.redirectBasedOnRole(userRole || 'jugador');
      return true;
    }
    return false;
  }

  loginDemo() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.error = '';

    // Credenciales demo estables para revisores de Google Play
    localStorage.setItem('token', 'demo_playstore_review');
    localStorage.setItem('userId', '1');
    localStorage.setItem('userRole', 'jugador');

    setTimeout(() => {
      this.isLoading = false;
      this.notificationService.updateTokenForUser();
      this.router.navigate(['/jugador-home'], { replaceUrl: true });
    }, 400);
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
          next: async (res) => {
            this.isLoading = false;

            if (res && res.token && res.id) {
              if (this.recordar) {
                localStorage.setItem('savedUser', this.usuario);
                localStorage.setItem('savedPass', this.password);
              } else {
                localStorage.removeItem('savedUser');
                localStorage.removeItem('savedPass');
              }

              await this.handleLoginSuccess(res);
            } else {
              this.showError(res.message || 'Credenciales incorrectas');
            }
          },
          error: (err) => {
            this.isLoading = false;
            console.error('Login error:', err);

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
    if (this.checkExistingSession()) {
      return;
    }
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
          next: async (res) => {
            this.isLoading = false;
            if (res.exists) {
              await this.handleLoginSuccess(res);
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
          next: async (res) => {
            this.isLoading = false;
            if (res.success && res.exists) {
              await this.handleLoginSuccess(res);
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

  async handleLoginSuccess(res: any) {
    if (res.token) localStorage.setItem('token', res.token);
    if (res.id) localStorage.setItem('userId', res.id.toString());
    if (res.nombre) localStorage.setItem('userName', res.nombre);

    const perfiles: any[] = res.perfiles || [];
    localStorage.setItem('availableProfiles', JSON.stringify(perfiles));

    this.notificationService.updateTokenForUser();

    // Comprobar roles únicos disponibles
    const distinctRoles = new Set(
      perfiles.map((p: any) => {
        if (p.rol === 'staff_club' || p.rol === 'administrador_club' || p.rol === 'administrador') {
          return 'administrador_club';
        }
        return p.rol;
      })
    );

    // Si tiene más de un rol (ej: admin + jugador, o entrenador + jugador)
    if (distinctRoles.size > 1) {
      await this.openProfileSelector(perfiles, res.rol);
    } else {
      localStorage.setItem('userRole', res.rol);
      this.redirectBasedOnRole(res.rol);
    }
  }

  async openProfileSelector(perfiles: any[], defaultRole: string) {
    const modal = await this.modalCtrl.create({
      component: ProfileSelectorModalComponent,
      componentProps: {
        profiles: perfiles,
        allowCancel: false,
        currentRole: defaultRole
      },
      breakpoints: [0, 0.7, 0.95],
      initialBreakpoint: 0.7,
      cssClass: 'profile-selector-bottom-sheet'
    });

    await modal.present();
    const { data, role } = await modal.onDidDismiss();
    if (!data && role !== 'confirm') {
      localStorage.setItem('userRole', defaultRole);
      this.redirectBasedOnRole(defaultRole);
    }
  }

  redirectBasedOnRole(rol: string) {
    if (rol === 'administrador_club' || rol === 'staff_club' || rol === 'administrador') {
      this.router.navigate(['/club-admin-home']);
    } else if (rol === 'entrenador') {
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
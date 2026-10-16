import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { NotificationService } from './services/notification.service';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  showSplash = true;
  isClosing = false;

  constructor(
    private platform: Platform,
    private notificationService: NotificationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.initializeApp();
    this.checkVersion();
    this.checkSessionOnStartup();
  }

  checkSessionOnStartup() {
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');
    if (userId && userId !== 'null' && userId !== 'undefined') {
      const targetRoute = userRole === 'entrenador' ? '/entrenador-home' : '/jugador-home';
      this.router.navigate([targetRoute], { replaceUrl: true });
    }
  }

  ngOnInit() {
    this.startSplashTimer();
  }

  startSplashTimer() {
    // Muestra Splash Screen con animación fluida de 2.2s y salida suave
    setTimeout(() => {
      this.isClosing = true;
      setTimeout(() => {
        this.showSplash = false;
      }, 500); // 500ms animación de salida
    }, 2200);
  }

  onLogoError(event: any) {
    if (event && event.target) {
      event.target.style.display = 'none';
    }
  }

  async initializeApp() {
    if (this.platform.is('capacitor') || this.platform.is('ios') || this.platform.is('android')) {
      try {
        await GoogleAuth.initialize({
          clientId: '786145270372-e637i46g6uu1kekcr1ioqdka901acud7.apps.googleusercontent.com',
          scopes: ['profile', 'email']
        });
      } catch (e) {
        console.warn('Google Auth init skipped or failed:', e);
      }

      try {
        const { App } = await import('@capacitor/app');
        App.addListener('appUrlOpen', (event: any) => {
          if (event && event.url) {
            // Examples: padelblox://jugador-reservas?entrenador_id=123 or https://padelblox.cl/app/...
            let path = event.url;
            if (path.includes('://')) {
              path = path.substring(path.indexOf('://') + 3);
            }
            if (path.startsWith('padelblox.cl/app/')) {
              path = path.replace('padelblox.cl/app/', '');
            }
            if (!path.startsWith('/')) {
              path = '/' + path;
            }
            this.router.navigateByUrl(path);
          }
        });
      } catch (e) {
        console.warn('Deep link listener error:', e);
      }
    }

    this.notificationService.initializeMessaging();
  }

  checkVersion() {
    const timestamp = new Date().getTime();
    this.http.get(`assets/version.json?t=${timestamp}`).subscribe({
      next: (data: any) => {
        const serverVersion = data.version;
        const currentVersion = localStorage.getItem('app_version');

        if (currentVersion && currentVersion !== serverVersion) {
          console.log(`Nueva versión detectada: ${serverVersion}. Limpiando caché...`);
          localStorage.setItem('app_version', serverVersion);
          if (data.forceReload) {
            window.location.reload();
          }
        } else if (!currentVersion) {
          localStorage.setItem('app_version', serverVersion);
        }
      },
      error: (err) => console.log('Error al verificar versión', err)
    });
  }
}


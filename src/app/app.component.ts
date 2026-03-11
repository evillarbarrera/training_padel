import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { NotificationService } from './services/notification.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  showSplash = true;

  constructor(
    private platform: Platform,
    private notificationService: NotificationService,
    private http: HttpClient
  ) {
    this.initializeApp();
    this.checkVersion();
  }


  initializeApp() {
    // Timer para el Splash Screen
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);

    if (this.platform.is('capacitor')) {
      // En dispositivos nativos, inicializar sin argumentos 
      // para que tome iosClientId o androidClientId desde capacitor.config.ts
      GoogleAuth.initialize();
    } else {
      // En Web, pasamos el clientId directamente
      GoogleAuth.initialize({
        clientId: '786145270372-liov6hu5v7lcmf2028s9ihi600rp3353.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
    }

    // Initialize Notifications
    this.notificationService.initializeMessaging();
  }

  checkVersion() {
    // Evitamos problemas de caché agregando un timestamp al request
    const timestamp = new Date().getTime();
    this.http.get(`assets/version.json?t=${timestamp}`).subscribe({
      next: (data: any) => {
        const serverVersion = data.version;
        const currentVersion = localStorage.getItem('app_version');

        if (currentVersion && currentVersion !== serverVersion) {
          console.log(`Nueva versión detectada: ${serverVersion}. Limpiando caché...`);
          localStorage.setItem('app_version', serverVersion);

          // Forzar recarga completa
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


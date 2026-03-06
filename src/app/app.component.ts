import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  showSplash = true;

  constructor(
    private platform: Platform,
    private notificationService: NotificationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // Timer para el Splash Screen
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);

    // Solo inicializar el plugin nativo si estamos en un dispositivo real (Android o iOS)
    // No inicializar en 'desktop' ni 'mobileweb' para evitar conflictos con GIS
    if (this.platform.is('capacitor') && (this.platform.is('android') || this.platform.is('ios'))) {
      console.log('AppComponent: Initializing Capacitor GoogleAuth for Native');
      GoogleAuth.initialize({
        clientId: '786145270372-liov6hu5v7lcmf2028s9ihi600rp3353.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
    } else {
      console.log('AppComponent: Skipping Capacitor GoogleAuth (running in web mode)');
    }

    // Initialize Notifications
    this.notificationService.initializeMessaging();
  }
}

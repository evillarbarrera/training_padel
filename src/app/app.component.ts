import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
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
  }
}

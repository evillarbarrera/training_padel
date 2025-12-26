import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { provideHttpClient } from '@angular/common/http';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './firebase.config';

import { addIcons } from 'ionicons';
import { alertCircleOutline, saveOutline, timeOutline, calendarOutline  } from 'ionicons/icons';

addIcons({
  'alert-circle-outline': alertCircleOutline,
    'save-outline': saveOutline,
  'time-outline': timeOutline,
  'calendar-outline': calendarOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
    
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    provideHttpClient(),   // 🔥 ESTA LÍNEA FALTABA

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
}).catch(err => console.error(err));

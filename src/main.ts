import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authAndSessionInterceptor } from './app/interceptors/auth.interceptor';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './firebase.config';

import { addIcons } from 'ionicons';
import { alertCircleOutline, saveOutline, timeOutline, calendarOutline, checkmarkOutline, chevronBackOutline, chevronForwardOutline, personOutline, closeOutline, person } from 'ionicons/icons';

import { ErrorHandler, Injectable, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    const chunkFailedMessage = /Loading chunk .* failed/i;
    const mimeErrorMessage = /Expected a JavaScript-or-Wasm module script/i;
    const errorStr = error?.message || error?.toString() || '';

    if (chunkFailedMessage.test(errorStr) || mimeErrorMessage.test(errorStr)) {
      const lastReload = sessionStorage.getItem('chunk_reload_timestamp');
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem('chunk_reload_timestamp', now.toString());
        window.location.reload();
        return;
      }
    }
    console.error('Unhandled Error:', error);
  }
}

addIcons({
  'alert-circle-outline': alertCircleOutline,
  'save-outline': saveOutline,
  'time-outline': timeOutline,
  'calendar-outline': calendarOutline,
  'checkmark-outline': checkmarkOutline,
  'chevron-back-outline': chevronBackOutline,
  'chevron-forward-outline': chevronForwardOutline,
  'person-outline': personOutline,
  'person': person,
  'close': closeOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
    
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    provideHttpClient(withInterceptors([authAndSessionInterceptor])),
    { provide: LOCALE_ID, useValue: 'es-CL' },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
}).catch(err => console.error(err));


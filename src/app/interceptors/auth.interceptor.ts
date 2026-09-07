import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular/standalone';
import { HttpCacheService } from '../services/http-cache.service';

/**
 * Functional Interceptor para Angular standalone / provideHttpClient
 */
export const authAndSessionInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const cacheService = inject(HttpCacheService);
  const alertController = inject(AlertController);

  const token = localStorage.getItem('token');

  // Clonar la petición para agregar cabeceras de autorización si existe el token
  let authReq = req;
  if (token && token !== 'null' && token !== 'undefined') {
    authReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'X-Authorization': `Bearer ${token}`
      }
    });
  }

  // 1. Manejo de Caché HTTP para peticiones GET
  if (req.method === 'GET' && cacheService.isCacheable(req.urlWithParams)) {
    const cachedResponse = cacheService.get(req.urlWithParams);
    if (cachedResponse) {
      return of(cachedResponse.clone());
    }
  }

  // Invalida la caché relevante si se realiza una mutación
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    cacheService.invalidate();
  }

  return next(authReq).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // Almacenar en caché si corresponde
        if (req.method === 'GET' && cacheService.isCacheable(req.urlWithParams)) {
          cacheService.put(req.urlWithParams, event.clone());
        }

        // Verificar si la API devolvió un código explícito de sesión expirada en el body 200
        if (event.body && (event.body.code === 'SESSION_EXPIRED' || event.body.status === 'session_expired')) {
          handleSessionExpiration(router, alertController, event.body.message);
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || (error.error && error.error.code === 'SESSION_EXPIRED')) {
        const message = error.error?.message || 'Tu sesión ha expirado porque te has conectado en otro dispositivo.';
        handleSessionExpiration(router, alertController, message);
      }
      return throwError(() => error);
    })
  );
};

let isAlertShowing = false;

async function handleSessionExpiration(router: Router, alertController: AlertController, message: string) {
  if (isAlertShowing) return;
  isAlertShowing = true;

  // Limpiar credenciales locales
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('userId');
  localStorage.removeItem('userRole');

  try {
    const alert = await alertController.create({
      header: 'Sesión Cerrada',
      message: message || 'Se ha iniciado sesión desde otro dispositivo. Tu sesión en este dispositivo ha sido finalizada.',
      buttons: [
        {
          text: 'Entendido',
          handler: () => {
            isAlertShowing = false;
            router.navigate(['/login'], { replaceUrl: true });
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  } catch (e) {
    isAlertShowing = false;
    router.navigate(['/login'], { replaceUrl: true });
  }
}

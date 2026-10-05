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
  const cacheService = inject(HttpCacheService);

  const token = localStorage.getItem('token');

  // Determinar si la petición va dirigida a nuestro backend o a un servicio externo de terceros
  const isAbsolute = req.url.startsWith('http://') || req.url.startsWith('https://');
  const isInternal = !isAbsolute || req.url.includes('padelmanager.cl') || req.url.includes('padelblox.cl') || req.url.includes('localhost') || req.url.startsWith('/');

  // Clonar la petición para agregar cabeceras de autorización SOLO en peticiones internas
  let authReq = req;
  if (isInternal && token && token !== 'null' && token !== 'undefined') {
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
      }
    }),
    catchError((error: HttpErrorResponse) => {
      return throwError(() => error);
    })
  );
};

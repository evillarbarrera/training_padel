import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage, Messaging } from 'firebase/messaging';
import { firebaseConfig } from '../../firebase.config';
import { MysqlService } from './mysql.service';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messaging: Messaging | null = null;
  private userId: number | null = null;

  constructor(private mysqlService: MysqlService) {
    this.userId = Number(localStorage.getItem('userId'));
  }

  /**
   * Inicializar Firebase Messaging y solicitar permiso para notificaciones
   */
  async initializeMessaging(): Promise<void> {
    try {
      if (Capacitor.isNativePlatform()) {
        // --- LÓGICA PARA CELULARES (iOS/Android Módulos Nativos) ---
        let permStatus = await PushNotifications.checkPermissions();

        if (permStatus.receive === 'prompt') {
          permStatus = await PushNotifications.requestPermissions();
        }

        if (permStatus.receive === 'granted') {
          await PushNotifications.register();

          // Escuchar cuando el celular nos da el Token Físico FCM / APNs
          PushNotifications.addListener('registration', (token) => {
            let finalToken = token.value;

            if (Capacitor.getPlatform() === 'ios') {
              if (finalToken.length <= 64) {
                console.log('Token APNs (64 chars) detectado, ignorando y esperando el FCM...');
                return;
              }

              // De-hexificar el token que viene del AppDelegate.swift (FCM trucado)
              try {
                let str = '';
                for (let i = 0; i < finalToken.length; i += 2) {
                  str += String.fromCharCode(parseInt(finalToken.substring(i, i + 2), 16));
                }
                if (str.length > 30) { // Los tokens de Firebase son largos
                  finalToken = str;
                  console.log('FCM Token de-hexificado con éxito:', finalToken.substring(0, 10) + '...');
                }
              } catch (e) {
                console.error('Error de-hexificando token:', e);
              }
            }

            console.log('Push registration success, token: ' + (finalToken.length > 50 ? finalToken.substring(0, 20) + '...' : finalToken));
            localStorage.setItem('fcm_token', finalToken);

            const currentUserId = this.userId || Number(localStorage.getItem('userId'));
            if (currentUserId) {
              this.mysqlService.guardarTokenFCM(currentUserId, finalToken).subscribe({
                next: () => console.log('Token guardado en BD con éxito'),
                error: (err) => console.error('Error enviando token al servidor:', err)
              });
            }
          });

          // Manejar errores de registro
          PushNotifications.addListener('registrationError', (error: any) => {
            console.error('Error on push registration: ' + JSON.stringify(error));
          });

          // Escuchar cuando llega la notificación y la app está abierta (foreground)
          PushNotifications.addListener('pushNotificationReceived', (notification) => {
            // Capacitor Push (depende configuración plugin) suele ponerla en la barra superior automáticamente,
            // o aquí podemos disparar un evento si queremos un modal en pantalla
            console.log('Push received: ', notification);
          });

          // Acción al tocar la notificación en la barra
          PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            console.log('Push action performed: ', notification);
          });

        } else {
          console.warn('⚠️ Permiso de notificaciones nativas denegado');
        }
      } else {
        // --- LÓGICA ORIGINAL PARA NAVEGADORES WEB (Service Worker) ---
        if (!('serviceWorker' in navigator)) {
          console.warn('Service Workers no soportados en este navegador');
          return;
        }

        // Inicializar Firebase
        const app = initializeApp(firebaseConfig);
        this.messaging = getMessaging(app);

        // Registro explícito del Service Worker
        const swUrl = '/firebase-messaging-sw.js';
        const registration = await navigator.serviceWorker.register(swUrl)
          .catch(err => {
            console.error('Error registrando FCM Service Worker:', err);
            return null;
          });

        // Solicitar permiso al usuario
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
          if (registration) {
            await this.getAndSaveToken(registration);
          } else {
            await this.getAndSaveToken();
          }
          this.setupMessageListener();
        } else {
          console.warn('⚠️ Permiso de notificaciones denegado en Web');
        }
      }
    } catch (error) {
      console.error('Error inicializando messaging:', error);
    }
  }

  /**
   * Obtener token FCM y guardarlo en la BD
   */
  private async getAndSaveToken(registration?: ServiceWorkerRegistration): Promise<void> {
    try {
      if (!this.messaging) return;

      const token = await getToken(this.messaging, {
        vapidKey: 'BHGt5ww035AaE8Yer4vyb524SsWaHw4jRknCklBseWef73jIxb3heN17_hsm4uOi_jceYrBiyQyWefkix-IL0kY',
        serviceWorkerRegistration: registration
      });

      if (token) {


        // Guardar token en la BD
        if (this.userId) {
          this.mysqlService.guardarTokenFCM(this.userId, token).subscribe({
            next: () => { },
            error: (err) => console.error('Error guardando token:', err)
          });
        }
      }
    } catch (error) {
      console.error('Error obteniendo token FCM:', error);
    }
  }

  /**
   * Configurar listener para mensajes recibidos
   */
  private setupMessageListener(): void {
    if (!this.messaging) return;

    onMessage(this.messaging, (payload) => {


      const { notification, data } = payload;

      if (notification) {
        // Mostrar notificación en la app
        this.showLocalNotification(
          notification.title || 'Academia Pádel',
          notification.body || '',
          data
        );
      }
    });
  }

  /**
   * Mostrar notificación local en la app
   */
  private showLocalNotification(title: string, body: string, data: any = {}): void {
    const notificationOptions: any = {
      body: body,
      icon: '/assets/icon/favicon.png',
      badge: '/assets/icon/favicon.png',
      tag: data?.type || 'notification',
      requireInteraction: true
    };

    if (data?.action) {
      notificationOptions.actions = [
        {
          action: 'open',
          title: 'Abrir'
        }
      ];
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, notificationOptions);
      });
    } else {
      new Notification(title, notificationOptions);
    }
  }

  /**
   * Enviar notificación de cancelación de reserva
   */
  sendCancelationNotification(alumnoId: number, packNombre: string, fecha: string): void {
    this.mysqlService.enviarNotificacion({
      user_id: alumnoId,
      titulo: '❌ Reserva Cancelada',
      mensaje: `La reserva para "${packNombre}" ha sido cancelada por el entrenador.`,
      tipo: 'cancelacion',
      fecha_referencia: fecha
    }).subscribe({
      next: () => { },
      error: (err) => console.warn('⚠️ No se pudo guardar notificación:', err)
    });
  }

  /**
   * Notificar cuando un alumno contrata un pack
   */
  notificarPackContratado(userId: number, packNombre: string): void {
    this.mysqlService.enviarNotificacion({
      user_id: userId,
      titulo: '🎟️ Nuevo Pack Contratado',
      mensaje: `¡Felicidades! Has activado correctamente tu "${packNombre}".`,
      tipo: 'pack_contratado'
    }).subscribe({
      next: () => { },
      error: (err) => console.error('Error notificar pack contratado:', err)
    });
  }

  /**
   * Notificar cuando se reserva un entrenamiento
   */
  notificarReservaCreada(userId: number, packNombre: string, fecha: string, hora: string): void {
    this.mysqlService.enviarNotificacion({
      user_id: userId,
      titulo: '🎾 Clase Confirmada',
      mensaje: `Tu reserva para "${packNombre}" el ${fecha} a las ${hora} ha sido confirmada.`,
      tipo: 'reserva_confirmada'
    }).subscribe({
      next: () => { },
      error: (err) => console.error('Error notificar reserva confirmada:', err)
    });
  }

  /**
   * Notificar cuando se genera una evaluación
   */
  notificarEvaluacionGenerada(userId: number): void {
    this.mysqlService.enviarNotificacion({
      user_id: userId,
      titulo: '📊 Nueva Evaluación Disponible',
      mensaje: 'Tu entrenador ha subido una nueva evaluación técnica. ¡Revisa tu progreso!',
      tipo: 'evaluacion_disponible'
    }).subscribe({
      next: () => { },
      error: (err) => console.error('Error notificar evaluación:', err)
    });
  }

  /**
   * Notificar al coach cuando un alumno cancela una reserva
   */
  notificarCancelacionACoach(coachId: number, alumnoNombre: string, fecha: string, hora: string): void {
    this.mysqlService.enviarNotificacion({
      user_id: coachId,
      titulo: '⚠️ Clase Cancelada por Alumno',
      mensaje: `${alumnoNombre} ha cancelado su asistencia para el ${fecha} a las ${hora}.`,
      tipo: 'cancelacion_alumno'
    }).subscribe({
      next: () => { },
      error: (err) => console.error('Error notificar cancelacion a coach:', err)
    });
  }

  /**
   * Programar recordatorio para el día anterior al entrenamiento
   */
  programarRecordatorio(alumnoId: number, packNombre: string, fechaEntrenamiento: string, horaInicio: string): void {
    this.mysqlService.programarRecordatorio({
      user_id: alumnoId,
      pack_nombre: packNombre,
      fecha_entrenamiento: fechaEntrenamiento,
      hora_inicio: horaInicio,
      tipo: 'recordatorio_dia_anterior'
    }).subscribe({
      next: () => { },
      error: (err) => console.error('Error programando recordatorio:', err)
    });
  }

  /**
   * Notificar cuando hay nuevos horarios disponibles
   */
  notificarHorariosNuevos(alumnoIds: number[], horarios: any[]): void {
    if (this.userId) {
      this.mysqlService.notificarHorariosDisponibles({
        entrenador_id: this.userId,
        alumno_ids: alumnoIds,
        horarios: horarios
      }).subscribe({
        next: () => { },
        error: (err) => console.error('Error enviando notificación:', err)
      });
    }
  }

  /**
   * Forzar la actualización del token para el usuario actual (usado tras login)
   */
  async updateTokenForUser(): Promise<void> {
    const userId = Number(localStorage.getItem('userId'));
    const token = localStorage.getItem('fcm_token');

    if (userId && token) {
      this.mysqlService.guardarTokenFCM(userId, token).subscribe({
        next: () => console.log('Token vinculado al usuario correctamente'),
        error: (err) => console.error('Error vinculando token:', err)
      });
    }
  }
}

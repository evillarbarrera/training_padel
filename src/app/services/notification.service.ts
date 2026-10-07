import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
  private scheduledRemindersCache = new Set<string>();

  constructor(
    private mysqlService: MysqlService,
    private router: Router
  ) {
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
          // Si ya tenemos un token FCM guardado localmente, sincronizarlo de inmediato con el backend
          const cachedToken = localStorage.getItem('fcm_token');
          const currentUserId = this.userId || Number(localStorage.getItem('userId'));
          if (cachedToken && currentUserId) {
            this.mysqlService.guardarTokenFCM(currentUserId, cachedToken).subscribe({
              next: () => console.log('Token FCM en caché sincronizado con BD'),
              error: (err) => console.error('Error sincronizando token caché:', err)
            });
          }

          // Escuchar cuando el celular nos da el Token Físico FCM / APNs
          // IMPORTANTE: Agregar el listener ANTES de registrar
          PushNotifications.addListener('registration', (token) => {
            let finalToken = token.value;

            if (Capacitor.getPlatform() === 'ios') {
              // Si es un token APNs nativo de 64 caracteres hex, esperar el de Firebase
              if (finalToken.length <= 64 && /^[0-9A-Fa-f]+$/.test(finalToken)) {
                console.log('Token APNs (64 chars) detectado, ignorando y esperando el FCM...');
                return;
              }

              // De-hexificar ÚNICAMENTE si viene codificado en hexadecimal puro (Data convertida por Capacitor)
              if (finalToken.length > 100 && /^[0-9A-Fa-f]+$/.test(finalToken)) {
                try {
                  let str = '';
                  let isValidAscii = true;
                  for (let i = 0; i < finalToken.length; i += 2) {
                    const code = parseInt(finalToken.substring(i, i + 2), 16);
                    if (isNaN(code) || code < 32 || code > 126) {
                      isValidAscii = false;
                      break;
                    }
                    str += String.fromCharCode(code);
                  }
                  if (isValidAscii && str.length > 30) {
                    finalToken = str;
                    console.log('FCM Token de-hexificado con éxito:', finalToken.substring(0, 10) + '...');
                  }
                } catch (e) {
                  console.error('Error de-hexificando token:', e);
                }
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

          await PushNotifications.register();

          // Manejar errores de registro
          PushNotifications.addListener('registrationError', (error: any) => {
            console.error('Error on push registration: ' + JSON.stringify(error));
          });

          // Escuchar cuando llega la notificación y la app está abierta (foreground)
          PushNotifications.addListener('pushNotificationReceived', (notification) => {
            console.log('Push received: ', notification);
          });

          // Acción al tocar la notificación en la barra (Deep Linking deportivo)
          PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            console.log('Push action performed: ', notification);
            try {
              const data = notification.notification?.data || {};
              const route = data.route || (data.event_type === 'clase_padel' ? '/jugador-reservas' : '/jugador-partidos');
              if (route) {
                this.router.navigateByUrl(route);
              }
            } catch (e) {
              console.error('Error navigating from push action:', e);
            }
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
   * Notificar al coach cuando un alumno agenda una nueva clase
   */
  notificarReservaACoach(coachId: number, alumnoNombre: string, fecha: string, hora: string): void {
    this.mysqlService.enviarNotificacion({
      user_id: coachId,
      titulo: '🎾 Nueva Reserva Recibida',
      mensaje: `${alumnoNombre} ha agendado una clase para el ${fecha} a las ${hora}.`,
      tipo: 'nueva_reserva'
    }).subscribe({
      next: () => { },
      error: (err) => console.error('Error notificar reserva a coach:', err)
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
   * Forzar la actualización del token para el usuario actual (usado tras login o carga de vistas)
   */
  async updateTokenForUser(): Promise<void> {
    const userId = Number(localStorage.getItem('userId'));
    if (userId) {
      this.userId = userId;
    }
    const token = localStorage.getItem('fcm_token');

    // 1. Sincronizar token en caché con el userId actual si existe
    if (userId && token) {
      this.mysqlService.guardarTokenFCM(userId, token).subscribe({
        next: () => console.log('Token vinculado al usuario correctamente'),
        error: (err) => console.error('Error vinculando token:', err)
      });
    }

    // 2. Re-inicializar messaging para solicitar y validar token fresco con Apple APNs / Firebase
    await this.initializeMessaging();
  }

  /**
   * Programar recordatorios automáticos de 2 horas antes para una lista de partidos/entrenamientos
   */
  scheduleMatchReminders(partidos: any[]): void {
    if (!partidos || !Array.isArray(partidos) || partidos.length === 0) return;

    const currentUserId = this.userId || Number(localStorage.getItem('userId'));
    if (!currentUserId) return;

    partidos.forEach(match => {
      // Identifier for cache to prevent repetitive calls in the same session
      const matchKey = match.id || `${match.fecha}_${match.hora_inicio}_${match.cancha_id || match.reserva_id || match.liga_partido_id}`;
      if (this.scheduledRemindersCache.has(matchKey)) return;

      // Only schedule for future / upcoming matches
      const fecha = match.fecha;
      const hora = match.hora_inicio ? match.hora_inicio.substring(0, 5) : '19:00';
      
      if (!fecha) return;

      const matchDate = new Date(`${fecha}T${hora}:00`);
      const now = new Date();

      // If match is in the future
      if (matchDate.getTime() > now.getTime()) {
        this.scheduledRemindersCache.add(matchKey);

        const tipoEvento = match.tipo_origen || (match.pack_nombre ? 'clase' : (match.liga_partido_id ? 'liga' : 'reserva'));
        const cancha = match.cancha_nombre || 'Cancha Principal';
        const club = match.club_nombre || 'Club Pádel';

        this.mysqlService.programarRecordatorioPartido2H({
          user_id: currentUserId,
          match_id: match.id || match.reserva_id || match.liga_partido_id,
          tipo_evento: tipoEvento,
          fecha: fecha,
          hora_inicio: hora,
          cancha: cancha,
          club: club
        }).subscribe({
          next: () => console.log(`🔔 Recordatorio 2h registrado en servidor para partido ${matchKey}`),
          error: (err) => console.warn(`⚠️ No se pudo registrar recordatorio 2h para ${matchKey}:`, err)
        });
      }
    });
  }

  /**
   * Determina si un partido tiene el recordatorio de 2 horas activo
   */
  isMatchReminderActive(match: any): boolean {
    if (!match || !match.fecha) return false;
    const hora = match.hora_inicio ? match.hora_inicio.substring(0, 5) : '19:00';
    const matchDate = new Date(`${match.fecha}T${hora}:00`);
    const now = new Date();
    // Return true if future match and not cancelled
    return matchDate.getTime() > now.getTime() && match.estado !== 'Cancelada' && match.estado !== 'Cancelado';
  }
}


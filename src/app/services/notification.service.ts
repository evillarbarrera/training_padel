import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage, Messaging } from 'firebase/messaging';
import { firebaseConfig } from '../../firebase.config';
import { MysqlService } from './mysql.service';

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
      // Inicializar Firebase (si no está inicializado)
      const app = initializeApp(firebaseConfig);
      this.messaging = getMessaging(app);

      // Solicitar permiso al usuario
      const permission = await Notification.requestPermission();

      if (permission === 'granted') {

        await this.getAndSaveToken();
        this.setupMessageListener();
      } else {
        console.warn('⚠️ Permiso de notificaciones denegado');
      }
    } catch (error) {
      console.error('Error inicializando messaging:', error);
    }
  }

  /**
   * Obtener token FCM y guardarlo en la BD
   */
  private async getAndSaveToken(): Promise<void> {
    try {
      if (!this.messaging) return;

      const token = await getToken(this.messaging, {
        vapidKey: 'BHGt5ww035AaE8Yer4vyb524SsWaHw4jRknCklBseWef73jIxb3heN17_hsm4uOi_jceYrBiyQyWefkix-IL0kY'
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
    if (this.userId) {
      this.mysqlService.enviarNotificacion({
        user_id: alumnoId,
        titulo: '❌ Reserva Cancelada',
        mensaje: `La reserva para "${packNombre}" ha sido cancelada por el entrenador.`,
        tipo: 'cancelacion',
        fecha_referencia: fecha
      }).subscribe({
        next: () => { },
        error: (err) => console.warn('⚠️ No se pudo guardar notificación (pero la cancelación fue exitosa):', err)
      });
    }
  }

  /**
   * Programar recordatorio para el día anterior al entrenamiento
   */
  programarRecordatorio(alumnoId: number, packNombre: string, fechaEntrenamiento: string, horaInicio: string): void {
    if (this.userId) {
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
}

import { Injectable } from '@angular/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class HapticFeedbackService {

  private isHapticsAvailable = true;

  constructor() {}

  /**
   * Suave micro-vibración para tabs, botones secundarios, chips y switches
   */
  async light(): Promise<void> {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch (e) {
      this.webVibrateFallback(10);
    }
  }

  /**
   * Vibración media para abrir modales, cambiar de día/fecha o aplicar filtros
   */
  async medium(): Promise<void> {
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
    } catch (e) {
      this.webVibrateFallback(25);
    }
  }

  /**
   * Vibración más contundente para acciones principales como reservar o confirmar
   */
  async heavy(): Promise<void> {
    try {
      await Haptics.impact({ style: ImpactStyle.Heavy });
    } catch (e) {
      this.webVibrateFallback(40);
    }
  }

  /**
   * Feedback de éxito (ej. reserva confirmada, inscripción exitosa)
   */
  async success(): Promise<void> {
    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch (e) {
      this.webVibrateFallback([20, 50, 20]);
    }
  }

  /**
   * Feedback de advertencia o eliminación
   */
  async warning(): Promise<void> {
    try {
      await Haptics.notification({ type: NotificationType.Warning });
    } catch (e) {
      this.webVibrateFallback([30, 40, 30]);
    }
  }

  /**
   * Feedback de error
   */
  async error(): Promise<void> {
    try {
      await Haptics.notification({ type: NotificationType.Error });
    } catch (e) {
      this.webVibrateFallback([50, 60, 50]);
    }
  }

  /**
   * Feedback suave al navegar o cambiar de selección continua
   */
  async selectionChanged(): Promise<void> {
    try {
      await Haptics.selectionChanged();
    } catch (e) {
      this.webVibrateFallback(8);
    }
  }

  private webVibrateFallback(pattern: number | number[]): void {
    if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {
        // Ignorar si el navegador bloquea vibración por interacción no iniciada
      }
    }
  }
}

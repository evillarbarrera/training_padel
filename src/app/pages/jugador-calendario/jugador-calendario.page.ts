import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { MysqlService } from '../../services/mysql.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, calendarOutline, personOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-jugador-calendario',
  templateUrl: './jugador-calendario.page.html',
  styleUrls: ['./jugador-calendario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JugadorCalendarioPage implements OnInit {
  reservasIndividuales: any[] = [];
  entrenamientosGrupales: any[] = [];
  cargando = true;
  tipoVista: 'proximas' | 'historial' = 'proximas';

  constructor(
    private mysqlService: MysqlService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    addIcons({ chevronBackOutline, calendarOutline, personOutline, timeOutline });
  }

  ngOnInit() {
    this.cargarReservas();
  }

  cambiarVista(vista: 'proximas' | 'historial') {
    this.tipoVista = vista;
    this.cargarReservas();
  }

  get reservasFiltradas() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const todasReservas = [...this.reservasIndividuales, ...this.entrenamientosGrupales];

    return todasReservas.filter(reserva => {
      // Backend now sends 'fecha' for both types
      if (!reserva.fecha) return false;

      const fechaReserva = new Date(reserva.fecha + 'T00:00:00');
      if (this.tipoVista === 'proximas') {
        return fechaReserva >= hoy;
      } else {
        return fechaReserva < hoy;
      }
    }).sort((a, b) => {
      const dateA = new Date(a.fecha + 'T' + (a.hora_inicio || '00:00')).getTime();
      const dateB = new Date(b.fecha + 'T' + (b.hora_inicio || '00:00')).getTime();
      return this.tipoVista === 'proximas' ? dateA - dateB : dateB - dateA;
    });
  }

  cargarReservas() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }

    this.cargando = true;
    this.mysqlService.getReservasJugador(userId).subscribe({
      next: (res: any) => {
        this.reservasIndividuales = res.reservas_individuales || [];
        this.entrenamientosGrupales = res.entrenamientos_grupales || [];
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar reservas:', err);
        this.cargando = false;
      }
    });
  }

  async cancelarReserva(reserva: any) {
    const alert = await this.alertController.create({
      header: 'Cancelar Reserva',
      message: '¿Estás seguro de que deseas cancelar esta reserva? Se liberará el cupo.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Sí, cancelar',
          handler: () => {
            this.procesarCancelacion(reserva);
          }
        }
      ]
    });

    await alert.present();
  }

  async procesarCancelacion(reserva: any) {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) return;

    // Detect if Group or Individual
    // Backend assigns 'tipo' = 'grupal' or 'individual'
    const isGrupal = (reserva.tipo === 'grupal' || !!reserva.inscripcion_id);
    const id = reserva.inscripcion_id || reserva.reserva_id || reserva.id;

    if (isGrupal) {
      this.mysqlService.cancelarInscripcionGrupal(id, userId).subscribe({
        next: async (res) => {
          this.mostrarToast(res.message || 'Inscripción cancelada', 'success');
          this.cargarReservas();
        },
        error: async (err) => {
          this.mostrarToast(err.error?.error || 'Error al cancelar', 'danger');
        }
      });
    } else {
      this.mysqlService.cancelarReservaJugador(id, userId).subscribe({
        next: async (res) => {
          this.mostrarToast('Reserva cancelada exitosamente', 'success');
          this.cargarReservas();
        },
        error: async (err) => {
          this.mostrarToast(err.error?.error || 'Error al cancelar', 'danger');
        }
      });
    }
  }

  async mostrarToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'bottom'
    });
    toast.present();
  }

  goBack() {
    this.router.navigate(['/jugador-home']);
  }
}

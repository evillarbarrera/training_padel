import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { MysqlService } from '../../services/mysql.service';
import { PackAlumnoService } from '../../services/pack_alumno.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { addIcons } from 'ionicons';
import { chevronBackOutline, calendarOutline, personOutline, timeOutline, informationCircleOutline, addOutline, mailOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-jugador-calendario',
  templateUrl: './jugador-calendario.page.html',
  styleUrls: ['./jugador-calendario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [AlertController, ToastController]
})
export class JugadorCalendarioPage implements OnInit {
  reservasIndividuales: any[] = [];
  entrenamientosGrupales: any[] = [];
  cargando = true;
  tipoVista: 'proximas' | 'historial' = 'proximas';
  jugadorNombre: string = localStorage.getItem('nombre') || 'Yo';

  // Invitation Logic
  showModalInvitacion = false;
  selectedReserva: any = null;
  emailInvitado: string = '';

  constructor(
    private mysqlService: MysqlService,
    private packAlumnoService: PackAlumnoService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private notificationService: NotificationService
  ) {
    addIcons({ chevronBackOutline, calendarOutline, personOutline, timeOutline, informationCircleOutline, addOutline, mailOutline, closeOutline });
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

  cargarReservas(event?: any) {
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
        if (event) event.target.complete();
      },
      error: (err) => {
        console.error('Error al cargar reservas:', err);
        this.cargando = false;
        if (event) event.target.complete();
      }
    });
  }

  handleRefresh(event: any) {
    this.cargarReservas(event);
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
          // Notification to coach
          if (reserva.entrenador_id) {
            this.notificationService.notificarCancelacionACoach(
              reserva.entrenador_id,
              this.jugadorNombre,
              reserva.fecha,
              reserva.hora_inicio || ''
            );
          }
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

  // --- Invitation Methods ---
  abrirModalInvitacion(reserva: any) {
    this.selectedReserva = reserva;
    this.emailInvitado = '';
    this.showModalInvitacion = true;
  }

  cerrarModal() {
    this.showModalInvitacion = false;
    this.selectedReserva = null;
  }

  enviarInvitacion() {
    if (!this.emailInvitado || !this.emailInvitado.includes('@')) {
      this.mostrarToast('Ingresa un email válido', 'warning');
      return;
    }

    if (!this.selectedReserva || !this.selectedReserva.pack_jugador_id) {
      this.mostrarToast('No se pudo identificar el pack para esta reserva.', 'danger');
      return;
    }

    this.mostrarToast('Enviando invitación...', 'primary');

    this.packAlumnoService.invitarJugador(this.selectedReserva.pack_jugador_id, this.emailInvitado).subscribe({
      next: (res: any) => {
        this.mostrarToast(res.message || 'Invitación enviada correctamente.', 'success');
        this.cerrarModal();
        this.cargarReservas();
      },
      error: (err: any) => {
        console.error(err);
        this.mostrarToast(err.error?.error || 'No se pudo enviar la invitación.', 'danger');
      }
    });
  }
}

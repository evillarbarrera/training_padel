import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { MysqlService } from '../../services/mysql.service';
import { PackAlumnoService } from '../../services/pack_alumno.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { addIcons } from 'ionicons';
import { chevronBackOutline, calendarOutline, personOutline, timeOutline, informationCircleOutline, addOutline, mailOutline, closeOutline, tennisballOutline } from 'ionicons/icons';

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
    addIcons({ chevronBackOutline, calendarOutline, personOutline, timeOutline, informationCircleOutline, addOutline, mailOutline, closeOutline, tennisballOutline });
  }

  ngOnInit() {
    this.cargarReservas();
  }

  cambiarVista(vista: 'proximas' | 'historial') {
    this.tipoVista = vista;
    this.cargarReservas();
  }

  getLocalDateStr(d: Date = new Date()): string {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  esFechaFutura(fecha: string, horaFin?: string, horaInicio?: string): boolean {
    if (!fecha) return false;
    const fechaStr = String(fecha).split('T')[0].split(' ')[0];
    const todayStr = this.getLocalDateStr();

    if (fechaStr > todayStr) return true;
    if (fechaStr < todayStr) return false;

    const horaRef = (horaFin || horaInicio || '').trim();
    if (!horaRef) return true;

    const now = new Date();
    const parts = horaRef.slice(0, 5).split(':');
    const h = parseInt(parts[0], 10);
    const m = parseInt(parts[1] || '0', 10);

    const horaActual = now.getHours();
    const minutoActual = now.getMinutes();

    if (h > horaActual) return true;
    if (h === horaActual && m > minutoActual) return true;
    return false;
  }

  get reservasFiltradas() {
    const todasReservas = [...this.reservasIndividuales, ...this.entrenamientosGrupales];

    return todasReservas.filter(reserva => {
      if (!reserva.fecha) return false;
      const isFutura = this.esFechaFutura(reserva.fecha, reserva.hora_fin, reserva.hora_inicio || reserva.hora);
      return this.tipoVista === 'proximas' ? isFutura : !isFutura;
    }).sort((a, b) => {
      const fechaA = String(a.fecha).split('T')[0].split(' ')[0];
      const fechaB = String(b.fecha).split('T')[0].split(' ')[0];
      const dateA = new Date(fechaA + 'T' + (a.hora_inicio || '00:00')).getTime();
      const dateB = new Date(fechaB + 'T' + (b.hora_inicio || '00:00')).getTime();
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
        const individuales = (res.reservas_individuales || []).filter((r: any) => String(r.estado || '').toLowerCase() === 'reservado');
        this.reservasIndividuales = individuales;
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

import { Component, OnInit } from '@angular/core';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { MysqlService } from '../../services/mysql.service';
import { IonicModule, ToastController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline, peopleOutline } from 'ionicons/icons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-jugador-reservas',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './jugador-reservas.page.html',
  styleUrls: ['./jugador-reservas.page.scss'],
})
export class JugadorReservasPage implements OnInit {

  // Vista actual
  vistaActual: 'agendar' | 'mis-entrenamientos' = 'mis-entrenamientos';

  // Para agendar
  profesores: any[] = [];
  horarios: any[] = [];
  horariosPorDia: any = {};
  dias: string[] = [];
  diaSeleccionado!: string;
  tramoSeleccionado: 'manana' | 'tarde' | 'noche' = 'manana';
  packs: any[] = [];
  entrenadores: any[] = [];
  selectedEntrenador: number | null = null;
  selectedPack: any = null; // New
  packsDelEntrenador: any[] = []; // New
  jugadorId = Number(localStorage.getItem('userId'));

  // Para mis entrenamientos
  reservasIndividuales: any[] = [];
  entrenamientosGrupales: any[] = [];
  cargando: boolean = false;

  constructor(
    private entrenamientoService: EntrenamientoService,
    private mysqlService: MysqlService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router,
  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      chevronBackOutline,
      logOutOutline,
      peopleOutline
    });
  }

  ngOnInit() {
    // Obtener userId del localStorage
    const userIdStr = localStorage.getItem('userId');
    this.jugadorId = userIdStr ? Number(userIdStr) : 0;

    if (this.jugadorId <= 0) {
      console.error('Error: No se encontró userId en localStorage');
      return;
    }

    this.cargarMisEntrenamientos();
    this.cargarEntrenadores();
  }

  cargarMisEntrenamientos() {
    this.cargando = true;
    this.mysqlService.getReservasJugador(this.jugadorId).subscribe({
      next: (res: any) => {
        const ahora = new Date();

        // Filtrar reservas que aún no han pasado
        this.reservasIndividuales = (res.reservas_individuales || []).filter((r: any) => {
          const fecha_hora = new Date(r.fecha + 'T' + r.hora_inicio);
          return fecha_hora > ahora;
        });

        this.entrenamientosGrupales = (res.entrenamientos_grupales || []).filter((g: any) => {
          const fecha_hora = new Date(g.fecha + 'T' + g.hora_inicio);
          return fecha_hora > ahora;
        });

        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar entrenamientos:', err);
        this.cargando = false;
      }
    });
  }

  cargarEntrenadores() {
    this.entrenamientoService
      .getEntrenadorPorJugador(this.jugadorId)
      .subscribe({
        next: (res: any[]) => {
          this.packs = res;
          this.extraerEntrenadores();
        },
        error: err => console.error(err)
      });
  }

  extraerEntrenadores() {
    const map = new Map();

    this.packs.forEach(p => {
      if (!map.has(p.entrenador_id)) {
        map.set(p.entrenador_id, {
          id: p.entrenador_id,
          nombre: p.entrenador_nombre
        });
      }
    });

    this.entrenadores = Array.from(map.values());
  }

  seleccionarProfesor(entrenadorId: number) {
    this.selectedEntrenador = entrenadorId;
    console.log('Entrenador seleccionado:', entrenadorId);
  }

  onEntrenadorChange() {
    if (!this.selectedEntrenador) return;

    // Filter packs for this trainer that have remaining sessions
    this.packsDelEntrenador = this.packs.filter(p => {
      const isTrainer = Number(p.entrenador_id) === Number(this.selectedEntrenador);
      const hasSessions = Number(p.sesiones_restantes) > 0;
      return isTrainer && hasSessions;
    });

    // Sort by fecha_compra_pack ASC (oldest first)
    this.packsDelEntrenador.sort((a, b) => {
      const dateA = new Date(a.fecha_compra_pack).getTime();
      const dateB = new Date(b.fecha_compra_pack).getTime();
      return dateA - dateB;
    });

    // Auto select first pack
    if (this.packsDelEntrenador.length > 0) {
      this.selectedPack = this.packsDelEntrenador[0];
    } else {
      this.selectedPack = null;
    }

    this.entrenamientoService
      .getDisponibilidadEntrenador(this.selectedEntrenador)
      .subscribe({
        next: res => {
          this.horarios = res;
          this.generarBloquesHorarios(res);
        },
        error: err => console.error(err)
      });
  }

  generarBloquesHorarios(disponibilidades: any[]) {

    this.horariosPorDia = {};
    this.dias = [];

    const bloquesUnicos = new Set<string>(); // 👈 CLAVE
    const ahora = new Date();

    disponibilidades.forEach(d => {

      let inicio = new Date(d.fecha_inicio);
      const fin = new Date(d.fecha_fin);
      const ocupado = Boolean(d.ocupado);

      while (inicio < fin) {

        const bloqueInicio = new Date(inicio);
        const bloqueFin = new Date(inicio);
        bloqueFin.setHours(bloqueFin.getHours() + 1);

        // 🚫 FILTRAR: No mostrar horarios que ya pasaron
        if (bloqueInicio > ahora && bloqueFin <= fin) {

          const fecha = bloqueInicio.toISOString().split('T')[0];
          const horaInicio = bloqueInicio.toTimeString().slice(0, 5);
          const horaFin = bloqueFin.toTimeString().slice(0, 5);

          const key = `${fecha} ${horaInicio}-${horaFin}`;

          // 🚫 SI YA EXISTE, NO SE AGREGA
          if (bloquesUnicos.has(key)) {
            inicio.setHours(inicio.getHours() + 1);
            continue;
          }

          bloquesUnicos.add(key);

          const hora = bloqueInicio.getHours();
          let tramo: 'manana' | 'tarde' | 'noche' = 'noche';

          if (hora >= 6 && hora < 12) tramo = 'manana';
          else if (hora >= 12 && hora < 18) tramo = 'tarde';

          if (!this.horariosPorDia[fecha]) {
            this.horariosPorDia[fecha] = {
              manana: [],
              tarde: [],
              noche: []
            };
            this.dias.push(fecha);
          }

          this.horariosPorDia[fecha][tramo].push({
            fecha,
            hora_inicio: bloqueInicio,
            hora_fin: bloqueFin,
            ocupado
          });
        }

        inicio.setHours(inicio.getHours() + 1);
      }
    });

    this.dias.sort();
    this.diaSeleccionado = this.dias[0];
    this.tramoSeleccionado = 'manana';
  }


  reservarHorario(horario: any) {
    if (horario.ocupado) {
      console.warn('Horario ocupado');
      return;
    }

    if (!this.selectedPack) {
      this.alertCtrl.create({
        header: 'Sin cupos disponibles',
        message: 'No tienes un pack activo con sesiones disponibles para este entrenador.',
        buttons: ['OK']
      }).then(alert => alert.present());
      return;
    }

    const pack_id = this.selectedPack.pack_id;

    const payload = {
      entrenador_id: this.selectedEntrenador,
      pack_id: pack_id,
      pack_jugador_id: this.selectedPack ? this.selectedPack.pack_jugador_id : null,
      fecha: horario.fecha,
      hora_inicio: horario.hora_inicio.toTimeString().slice(0, 5),
      hora_fin: horario.hora_fin.toTimeString().slice(0, 5),
      jugador_id: this.jugadorId,
      estado: 'reservado'
    };

    this.entrenamientoService.crearReserva(payload).subscribe({
      next: () => {
        this.mostrarToast('✅ Reserva guardada correctamente');

        // refrescar disponibilidad
        if (this.selectedEntrenador) {
          this.onEntrenadorChange();
        }
      },
      error: err => {
        console.error('Error reserva:', err);
        this.mostrarToast('❌ Error al guardar la reserva');
      }
    });
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  cambiarVista(vista: 'agendar' | 'mis-entrenamientos') {
    this.vistaActual = vista;
    if (vista === 'mis-entrenamientos') {
      this.cargarMisEntrenamientos();
    }
  }

  getEstadoBadgeColor(estado: string): string {
    if (estado === 'activo' || estado === 'confirmado') return 'success';
    if (estado === 'pendiente') return 'warning';
    if (estado === 'cancelado') return 'danger';
    return 'medium';
  }

  getDiasSemana(dia_semana: number): string {
    // BD usa formato 0-6: 0=Domingo, 1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves, 5=Viernes, 6=Sábado
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dias[dia_semana] || `Día ${dia_semana} no válido`;
  }

  goToHome() {
    this.router.navigate(['/jugador-home']);
  }

  mostrarConfirmacionCancelar(reserva: any) {
    // Obtener el ID correctamente (puede ser 'id' o 'reserva_id' dependiendo del origen)
    const reserva_id = reserva.reserva_id || reserva.id;

    if (!reserva_id) {
      console.error('Error: No se encontró ID de reserva en', reserva);
      return;
    }

    const fecha = new Date(reserva.fecha + 'T' + reserva.hora_inicio);
    const ahora = new Date();
    const horas_restantes = (fecha.getTime() - ahora.getTime()) / (1000 * 60 * 60);

    const puedeCancelar = horas_restantes >= 12;

    const titulo = puedeCancelar ? '¿Cancelar reserva?' : 'No se puede cancelar';
    const mensaje = puedeCancelar
      ? `¿Estás seguro que deseas cancelar el entrenamiento del ${fecha.toLocaleDateString('es-ES')} a las ${reserva.hora_inicio.slice(0, 5)}?`
      : `Debes cancelar con mínimo 12 horas de anticipación. Horas restantes: ${Math.round(horas_restantes)}`;

    this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: puedeCancelar
        ? [
          {
            text: 'No',
            role: 'cancel'
          },
          {
            text: 'Sí, cancelar',
            role: 'destructive',
            handler: () => {
              this.cancelarReserva(reserva_id);
            }
          }
        ]
        : [
          {
            text: 'Entendido',
            role: 'cancel'
          }
        ]
    }).then(alert => alert.present());
  }

  cancelarReserva(reserva_id: number) {
    // Validar datos
    if (!reserva_id || reserva_id <= 0) {
      console.error('Error: reserva_id inválido', reserva_id);
      return;
    }

    if (!this.jugadorId || this.jugadorId <= 0) {
      console.error('Error: jugadorId inválido', this.jugadorId);
      return;
    }

    this.mysqlService.cancelarReservaJugador(reserva_id, this.jugadorId).subscribe({
      next: async (res: any) => {
        const toast = await this.toastCtrl.create({
          message: '✓ Reserva cancelada correctamente',
          duration: 2000,
          color: 'success',
          position: 'top'
        });
        await toast.present();

        // Recargar entrenamientos
        this.cargarMisEntrenamientos();
      },
      error: async (err: any) => {
        const errorMsg = err.error?.error || 'Error al cancelar la reserva';
        const toast = await this.toastCtrl.create({
          message: `✗ ${errorMsg}`,
          duration: 2500,
          color: 'danger',
          position: 'top'
        });
        await toast.present();
      }
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { MysqlService } from '../../services/mysql.service';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline } from 'ionicons/icons';
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
  jugadorId = Number(localStorage.getItem('userId'));

  // Para mis entrenamientos
  reservasIndividuales: any[] = [];
  entrenamientosGrupales: any[] = [];
  cargando: boolean = false;

  constructor(
    private entrenamientoService: EntrenamientoService,
    private mysqlService: MysqlService,
    private toastCtrl: ToastController,
    private router: Router,
  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      chevronBackOutline,
      logOutOutline
    });
  }

  ngOnInit() {
    this.cargarMisEntrenamientos();
    this.cargarEntrenadores();
  }

  cargarMisEntrenamientos() {
    this.cargando = true;
    this.mysqlService.getReservasJugador(this.jugadorId).subscribe({
      next: (res: any) => {
        // res tiene estructura: {reservas_individuales: [], entrenamientos_grupales: []}
        this.reservasIndividuales = res.reservas_individuales || [];
        this.entrenamientosGrupales = res.entrenamientos_grupales || [];
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

    disponibilidades.forEach(d => {

      let inicio = new Date(d.fecha_inicio);
      const fin = new Date(d.fecha_fin);
      const ocupado = Boolean(d.ocupado);

      while (inicio < fin) {

        const bloqueInicio = new Date(inicio);
        const bloqueFin = new Date(inicio);
        bloqueFin.setHours(bloqueFin.getHours() + 1);

        if (bloqueFin <= fin) {

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

    const payload = {
      entrenador_id: this.selectedEntrenador,
      pack_id: 1,
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

}
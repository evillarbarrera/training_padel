import { Component, OnInit } from '@angular/core';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(
    private entrenamientoService: EntrenamientoService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.cargarEntrenadores();
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
          const hora = bloqueInicio.getHours();

          let tramo: 'manana' | 'tarde' | 'noche' = 'noche';
          if (hora >= 6 && hora < 12) tramo = 'manana';
          else if (hora >= 12 && hora < 18) tramo = 'tarde';

          if (!this.horariosPorDia[fecha]) {
            this.horariosPorDia[fecha] = { manana: [], tarde: [], noche: [] };
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
}

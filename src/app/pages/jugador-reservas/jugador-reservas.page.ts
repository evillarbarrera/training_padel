
import { Component, OnInit } from '@angular/core';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { IonicModule } from '@ionic/angular';
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
  diaSeleccionado: string | null = null;

  tramoSeleccionado: 'manana' | 'tarde' | 'noche' = 'manana';



  packs: any[] = [];
  entrenadores: any[] = [];
  selectedEntrenador: number | null = null;
  jugadorId = Number(localStorage.getItem('userId'));

  constructor(private entrenamientoService: EntrenamientoService) { }

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

  realizarReserva() {
    if (!this.selectedEntrenador) {
      console.warn('Debe seleccionar un entrenador');
      return;
    }
  }

  onEntrenadorChange() {
  if (!this.selectedEntrenador) return;
    console.log('Entrenador cambiado:', this.selectedEntrenador);
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

    while (inicio < fin) {
      const bloqueInicio = new Date(inicio);
      const bloqueFin = new Date(inicio);
      bloqueFin.setHours(bloqueFin.getHours() + 1);

      if (bloqueFin <= fin) {

        const fecha = bloqueInicio.toISOString().split('T')[0];
        const hora = bloqueInicio.getHours();

        let tramo = 'noche';
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
          hora_fin: bloqueFin
        });
      }

      inicio.setHours(inicio.getHours() + 1);
    }
  });

  this.diaSeleccionado = this.dias[0] || null;
  this.tramoSeleccionado = 'manana';
}



reservarHorario(horario: any) {
  console.log('Reservando:', horario);

  const payload = {
    entrenador_id: this.selectedEntrenador,
    jugador_id: this.jugadorId,
    fecha: horario.fecha,
    hora_inicio: horario.hora_inicio.toTimeString().slice(0, 5),
    hora_fin: horario.hora_fin.toTimeString().slice(0, 5)
  };

  console.log('PAYLOAD RESERVA:', payload);

  // aquí llamas al API de reservas
}



}
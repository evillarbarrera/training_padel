
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

  packs: any[] = [];
  packSeleccionado: any = null;

  horarios: any[] = [];
  cargando = false;

  constructor(private entrenamientoService: EntrenamientoService) {}

  ngOnInit() {
    this.cargarPacks();
  }

  cargarPacks() {
    this.entrenamientoService.getPacksJugador().subscribe(data => {
      this.packs = data;
    });
  }

  onPackChange() {
    this.horarios = [];
    this.cargando = true;

    const profesorId = this.packSeleccionado.profesorId;

    this.entrenamientoService.getHorariosProfesor(profesorId).subscribe(data => {
      this.horarios = data;
      this.cargando = false;
    });
  }

  agendar(horario: any) {
    const payload = {
      jugadorId: 123, // tu jugador logueado
      packId: this.packSeleccionado.id,
      profesorId: this.packSeleccionado.profesorId,
      fecha: horario.fecha,
      hora: horario.hora
    };

    this.entrenamientoService.agendarEntrenamiento(payload).subscribe(() => {
      alert('Entrenamiento agendado correctamente');
      this.onPackChange(); // recargar horarios
    });
  }
}

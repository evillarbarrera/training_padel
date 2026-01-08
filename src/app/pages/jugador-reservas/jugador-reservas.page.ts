
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

}
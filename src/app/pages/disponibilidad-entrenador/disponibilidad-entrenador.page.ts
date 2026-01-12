import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  ToastController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntrenamientoService } from '../../services/entrenamiento.service';

/* =============================
   INTERFACES
============================== */
interface BloqueHorario {
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  seleccionado: boolean;
  ocupado: boolean;
}

interface DiaSemana {
  nombre: string;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  duracion: number;
}

@Component({
  selector: 'app-disponibilidad-entrenador',
  standalone: true,
  templateUrl: './disponibilidad-entrenador.page.html',
  styleUrls: ['./disponibilidad-entrenador.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonLabel
  ]
})
export class DisponibilidadEntrenadorPage implements OnInit {

  entrenador_id = Number(localStorage.getItem('userId'));
  club_id = 1;

  dias: DiaSemana[] = [];
  diaSeleccionado!: string;

  bloquesPorDia: { [fecha: string]: BloqueHorario[] } = {};

  /** Guarda lo que YA EXISTE en BD */
  disponibilidadExistente: Set<string> = new Set();

  constructor(private entrenamientoService: EntrenamientoService, private toastCtrl: ToastController) {}

  /* =============================
     INIT
  ============================== */
  ngOnInit() {
    this.crearSemanaDesdeHoy();
    this.generarBloquesSemana();
    this.cargarDisponibilidadExistente();
  }

  /* =============================
     SEMANA (10 DÍAS)
  ============================== */
  crearSemanaDesdeHoy() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const TOTAL_DIAS = 10;

    const nombresDias = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ];

    this.dias = [];

    for (let i = 0; i <= TOTAL_DIAS; i++) {
      const fecha = new Date(hoy);
      fecha.setDate(hoy.getDate() + i);

      this.dias.push({
        nombre: nombresDias[fecha.getDay()],
        fecha: fecha.toISOString().split('T')[0],
        hora_inicio: '07:00',
        hora_fin: '21:00',
        duracion: 60
      });
    }

    this.diaSeleccionado = this.dias[0].fecha;
  }

  /* =============================
     BLOQUES
  ============================== */
  generarBloquesSemana() {
    this.bloquesPorDia = {};

    this.dias.forEach(dia => {
      this.bloquesPorDia[dia.fecha] = this.generarBloquesDia(
        dia.fecha,
        dia.hora_inicio,
        dia.hora_fin,
        dia.duracion
      );
    });
  }

  generarBloquesDia(
    fecha: string,
    horaInicio: string,
    horaFin: string,
    duracion: number
  ): BloqueHorario[] {
    const bloques: BloqueHorario[] = [];

    let inicio = new Date(`${fecha}T${horaInicio}:00`);
    const fin = new Date(`${fecha}T${horaFin}:00`);

    while (inicio < fin) {
      const finBloque = new Date(inicio.getTime() + duracion * 60000);
      if (finBloque > fin) break;

      const key = `${fecha} ${inicio.toTimeString().slice(0, 5)}:00-${fecha} ${finBloque.toTimeString().slice(0, 5)}:00`;

      bloques.push({
        fecha,
        hora_inicio: inicio.toTimeString().slice(0, 5),
        hora_fin: finBloque.toTimeString().slice(0, 5),
        seleccionado: this.disponibilidadExistente.has(key),
        ocupado: false
      });

      inicio = finBloque;
    }

    return bloques;
  }

  /* =============================
     CARGAR DISPONIBILIDAD BD
  ============================== */
  cargarDisponibilidadExistente() {
    this.entrenamientoService
      .getDisponibilidad(this.entrenador_id, this.club_id)
      .subscribe((data: any[]) => {
        data.forEach(d => {
          const key = `${d.fecha_inicio}-${d.fecha_fin}`;
          this.disponibilidadExistente.add(key);
        });

        // Re-generar bloques con selección aplicada
        this.generarBloquesSemana();
      });
  }

  /* =============================
     SELECCIÓN
  ============================== */
  toggleBloque(b: BloqueHorario) {
    if (b.ocupado) return;
    b.seleccionado = !b.seleccionado;
  }

  seleccionarTodos() {
    this.bloquesPorDia[this.diaSeleccionado].forEach(b => {
      if (!b.ocupado) b.seleccionado = true;
    });
  }

  deseleccionarTodos() {
    this.bloquesPorDia[this.diaSeleccionado].forEach(b => {
      if (!b.ocupado) b.seleccionado = false;
    });
  }

  get todosSeleccionados(): boolean {
    return this.bloquesPorDia[this.diaSeleccionado]?.every(
      b => b.seleccionado || b.ocupado
    );
  }

  /* =============================
     GUARDAR (SYNC REAL)
  ============================== */
  guardarDisponibilidad() {
    const crear: any[] = [];
    const eliminar: any[] = [];

    Object.values(this.bloquesPorDia).forEach(bloques => {
      bloques.forEach(b => {
        const key = `${b.fecha} ${b.hora_inicio}:00-${b.fecha} ${b.hora_fin}:00`;
        const existia = this.disponibilidadExistente.has(key);

        if (b.seleccionado && !existia) {
          crear.push({
            profesor_id: this.entrenador_id,
            fecha_inicio: `${b.fecha} ${b.hora_inicio}:00`,
            fecha_fin: `${b.fecha} ${b.hora_fin}:00`,
            club_id: this.club_id
          });
        }

        if (!b.seleccionado && existia) {
          eliminar.push({
            profesor_id: this.entrenador_id,
            fecha_inicio: `${b.fecha} ${b.hora_inicio}:00`,
            fecha_fin: `${b.fecha} ${b.hora_fin}:00`,
            club_id: this.club_id
          });
        }
      });
    });

    this.entrenamientoService
      .syncDisponibilidad({ crear, eliminar })
      .subscribe(() => {
        // Refresca estado local
        this.disponibilidadExistente.clear();
        crear.forEach(c =>
          this.disponibilidadExistente.add(`${c.fecha_inicio}-${c.fecha_fin}`)
        );
      });
  }

  
}

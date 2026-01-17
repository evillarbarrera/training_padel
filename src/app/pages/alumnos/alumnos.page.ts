import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonIcon,
  IonBadge,
  IonFab,
  IonFabButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface AlumnoApi {
  jugador_id: number;
  jugador_nombre: string;
  pack_nombre: string | null;
  sesiones_pendientes: number;
  activo: number;
}

@Component({
  selector: 'app-alumnos',
  standalone: true,
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonIcon,
    IonBadge,
    IonFab,
    IonFabButton
  ],
})
export class AlumnosPage implements OnInit {

  filtro: string = '';
  mostrarSoloActivos: boolean = false;

  alumnos: {
    id: number;
    nombre: string;
    pack: string | null;
    pendientes: number;
    activo: number;
  }[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    const profesorId = localStorage.getItem('userId');

    this.http.get<AlumnoApi[]>(
      `http://api.lamatek.cl/alumno/get_alumno.php?entrenador_id=${profesorId}`,
      {
        headers: {
          Authorization: 'Bearer ' + btoa('1|padel_academy')
        }
      }
    ).subscribe({
      next: (res: AlumnoApi[]) => {
        this.alumnos = res.map((a: AlumnoApi) => ({
          id: a.jugador_id,
          nombre: a.jugador_nombre,
          pack: a.pack_nombre,
          pendientes: a.sesiones_pendientes,
          activo: a.activo
        }));
      },
      error: (err: any) => {
        console.error('Error cargando alumnos', err);
      }
    });
  }

  get alumnosFiltrados() {
    return this.alumnos.filter(alumno => {
      const coincideNombre =
        alumno.nombre
          .toLowerCase()
          .includes(this.filtro.toLowerCase());

      const coincideActivo = this.mostrarSoloActivos
        ? alumno.activo === 1
        : true;

      return coincideNombre && coincideActivo;
    });
  }

  irAEvaluacion(alumno: any) {
    this.router.navigate(['/evaluar-alumno', alumno.id]);
  }

  goToHome() {
    this.router.navigate(['/entrenador-home']);
  }

  evaluar(alumnoId: number) {
    this.router.navigate(['/evaluar-alumno', alumnoId]);
  }
}

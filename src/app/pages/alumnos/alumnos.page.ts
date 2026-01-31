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
import { addIcons } from 'ionicons';
import { searchOutline, peopleOutline, statsChartOutline, analyticsOutline, chevronBackOutline } from 'ionicons/icons';

interface AlumnoApi {
  jugador_id: number;
  jugador_nombre: string;
  pack_nombre: string | null;
  sesiones_pendientes: number;
  sesiones_reservadas: number;
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
    pagadas: number;
    pendientes: number;
    reservadas: number;
    activo: number;
  }[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    addIcons({ searchOutline, peopleOutline, statsChartOutline, analyticsOutline, chevronBackOutline });
  }

  ngOnInit() {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    const profesorId = localStorage.getItem('userId');

    this.http.get<AlumnoApi[]>(
      `https://api.padelmanager.cl/alumno/get_alumno.php?entrenador_id=${profesorId}`,
      {
        headers: {
          Authorization: 'Bearer ' + btoa('1|padel_academy')
        }
      }
    ).subscribe({
      next: (res: any[]) => { // Using any[] to bypass strict check during transition if needed
        this.alumnos = res.map((a: any) => ({
          id: a.jugador_id,
          nombre: a.jugador_nombre,
          pack: a.pack_nombres, // Aggregated string
          pagadas: Number(a.sesiones_pagadas),
          pendientes: a.sesiones_pendientes,
          reservadas: a.sesiones_reservadas || 0,
          activo: 1 // Assume active if returned by list, or use logic if needed
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

  evaluar(alumnoId: number) {
    this.router.navigate(['/evaluar', alumnoId]);
  }

  verProgreso(alumnoId: number) {
    this.router.navigate(['/mis-habilidades', alumnoId]);
  }

  goToHome() {
    this.router.navigate(['/entrenador-home']);
  }
}

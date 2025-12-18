import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonIcon
  ],
})
export class AlumnosPage {

  filtro: string = '';
  mostrarSoloActivos: boolean = false;

  alumnos = [
    { id: 1, nombre: 'Juan Pérez', activo: true, pack: 'Pack 10 clases', realizadas: 6, pendientes: 4, puntuacion: 78 },
    { id: 2, nombre: 'Carlos Díaz', activo: true, pack: 'Pack 5 clases', realizadas: 3, pendientes: 2, puntuacion: 82 },
    { id: 3, nombre: 'Andrés Molina', activo: false, pack: null, realizadas: 0, pendientes: 0, puntuacion: 0 },
  ];

  get alumnosFiltrados() {
    return this.alumnos.filter(alumno => {
      const coincideFiltro = alumno.nombre.toLowerCase().includes(this.filtro.toLowerCase());
      const coincideActivo = this.mostrarSoloActivos ? alumno.activo === true : true;
      return coincideFiltro && coincideActivo;
    });
  }

  constructor(private router: Router, private location: Location) {}

    verDetalle(alumno: any) {
    this.router.navigate(['/alumno', alumno.id]);
    }

    goBack() {
   this.router.navigate(['/entrenador-home']);
  }
}

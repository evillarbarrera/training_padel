import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonHeader, IonButton, IonIcon, IonInput, IonContent, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

@Component({
  selector: 'app-entrenador-agenda',
  standalone: true,
  templateUrl: './entrenador-agenda.page.html',
  styleUrls: ['./entrenador-agenda.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    // Ionic
    IonHeader,
    IonButton,
    IonIcon,
    IonInput,
    IonContent,
    IonFab,
    IonFabButton
  ]
})
export class EntrenadorAgendaPage {

  entrenadorNombre = "Coach Nico";
  avatarUrl = "https://padel-ejercicios.com/wp-content/uploads/2025/07/Coach-Santiago-Just-Padel-819x1024-1.jpg";

  busqueda = "";
  diaSeleccionado = "Todos";

  dias = ["Todos", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  entrenamientos = [
    { alumno: "Pedro", dia: "Lunes", hora: "09:00", tipo: "Volea", intensidad: "alta" },
    { alumno: "Ana", dia: "Lunes", hora: "10:00", tipo: "Defensa", intensidad: "media" },
    { alumno: "Luis", dia: "Martes", hora: "08:00", tipo: "Smash", intensidad: "alta" },
    { alumno: "Carla", dia: "Miércoles", hora: "11:00", tipo: "Bandeja", intensidad: "baja" },
  ];

  entrenamientosPorDia: any = {};

  constructor(private router: Router) {
    addIcons({ searchOutline });
  }

  ngOnInit() {
    this.organizarPorDia();
    this.generarSemana();
  }

  organizarPorDia() {
    this.entrenamientosPorDia = {};

    this.dias.forEach(d => {
      this.entrenamientosPorDia[d] = [];
    });

    this.entrenamientos.forEach(e => {
      this.entrenamientosPorDia[e.dia].push(e);
    });
  }

  volver() {
    this.router.navigate(['/entrenador-home']);
  }

  anular(ent: any) {

  }

  reagendar(ent: any) {

  }

  reagendarClase(e: any) {

    // Lógica para reprogramar
  }

  cancelarClase(e: any) {

    // Lógica para cancelar
  }

  semana: { nombre: string; numero: number; fecha: Date }[] = [];

  generarSemana() {
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    const hoy = new Date();
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - hoy.getDay() + 1); // lunes

    this.semana = diasSemana.map((nombre, i) => {
      const fecha = new Date(inicioSemana);
      fecha.setDate(inicioSemana.getDate() + i);

      return {
        nombre,
        numero: fecha.getDate(),
        fecha
      };
    });
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonHeader, IonButton, IonIcon, IonInput, IonContent, IonFab, IonFabButton, IonAvatar, IonBadge, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline, addCircleOutline, timeOutline, peopleOutline, personOutline, chevronBackOutline, informationCircleOutline } from 'ionicons/icons';
import { MysqlService } from '../../services/mysql.service';

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
    IonFabButton,
    IonAvatar,
    IonBadge,
    IonSpinner
  ]
})
export class EntrenadorAgendaPage {
  entrenadorNombre = "";
  avatarUrl = "";
  userId: number | null = null;
  isLoading = true;

  busqueda = "";
  diaSeleccionadoIdx = 0; // Index of selected day in week array

  entrenamientos: any[] = [];
  entrenamientosFiltrados: any[] = [];

  constructor(
    private router: Router,
    private mysqlService: MysqlService
  ) {
    addIcons({ searchOutline, addCircleOutline, timeOutline, peopleOutline, personOutline, chevronBackOutline, informationCircleOutline });
  }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    if (!this.userId) {
      this.router.navigate(['/login']);
      return;
    }
    this.generarSemana();
    this.cargarPerfil();
    this.loadAgenda();
  }

  cargarPerfil() {
    if (!this.userId) return;
    this.mysqlService.getPerfil(this.userId).subscribe(res => {
      if (res.success) {
        this.entrenadorNombre = res.user.nombre;
        this.avatarUrl = res.user.foto_perfil || res.user.foto || "assets/images/placeholder_coach.png";
      }
    });
  }

  loadAgenda() {
    if (!this.userId) return;
    this.isLoading = true;
    this.mysqlService.getEntrenadorAgenda(this.userId).subscribe({
      next: (res: any) => {
        const tradicionales = res.reservas_tradicionales || [];
        const grupales = res.packs_grupales || [];
        this.entrenamientos = [...tradicionales, ...grupales];
        this.filtrarPorDia();
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error loadAgenda:', err);
        this.isLoading = false;
      }
    });
  }

  seleccionarDia(idx: number) {
    this.diaSeleccionadoIdx = idx;
    this.filtrarPorDia();
  }

  filtrarPorDia() {
    const diaSel = this.semana[this.diaSeleccionadoIdx];
    const fechaStr = diaSel.fecha.toISOString().split('T')[0];
    const diaNombre = diaSel.nombre;

    this.entrenamientosFiltrados = this.entrenamientos.filter(e => {
      if (e.fecha) return e.fecha === fechaStr;
      if (e.tipo === 'grupal_template') return this.mapDia(e.dia_semana) === diaNombre;
      return false;
    }).sort((a, b) => a.hora_inicio.localeCompare(b.hora_inicio));
  }

  mapDia(val: any): string {
    const d = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    return d[Number(val)] || "";
  }

  volver() {
    this.router.navigate(['/entrenador-home']);
  }

  reagendarClase(e: any) { }
  cancelarClase(e: any) { }

  irA_Agendar() {
    this.router.navigate(['/entrenador-agendar']);
  }

  semana: { nombre: string; numero: number; fecha: Date }[] = [];

  generarSemana() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const hoy = new Date();

    // Find monday of current week
    const currentDay = hoy.getDay();
    const diff = hoy.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
    const monday = new Date(hoy.setDate(diff));

    this.semana = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      this.semana.push({
        nombre: diasSemana[d.getDay()],
        numero: d.getDate(),
        fecha: d
      });
      // Set initial selection to today if possible
      const today = new Date();
      if (d.getDate() === today.getDate() && d.getMonth() === today.getMonth()) {
        this.diaSeleccionadoIdx = i;
      }
    }
  }
}

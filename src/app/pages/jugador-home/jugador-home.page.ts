import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-jugador-home',
  templateUrl: './jugador-home.page.html',
  styleUrls: ['./jugador-home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class JugadorHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  jugadorNombre = "Emmanuel";

  entrenamientosRealizados = 12;
  entrenamientosPendientes = 3;
  totalMes = 15;

  agendar() {
    // Navegar a la pantalla de agenda
  }

  comprarPack() {
    // Navegar a packs
  }

  misHabilidades() {
    // Navegar habilidades
  }

  // Navegar a la página principal del jugador
  goToHome() {
    this.router.navigate(['/jugador-home']); // o la ruta que tengas de inicio
  }

  // Navegar a la agenda
  goToAgenda() {
   
  }

  // Cerrar sesión
  logout() {
    // Limpiar localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    // Redirigir al login
    this.router.navigate(['/login']);
  }

  goToPackAlumno() {
  this.router.navigate(['/pack-alumno']);
}


}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

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

  constructor() { }

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


}

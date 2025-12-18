import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-entrenador-entrenamientos',
  templateUrl: './entrenador-entrenamientos.page.html',
  styleUrls: ['./entrenador-entrenamientos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EntrenadorEntrenamientosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

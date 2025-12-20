import { Component } from '@angular/core';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToggle,
  IonButton,
  ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorarioModalComponent } from '../../components/horario-modal/horario-modal.component';

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
    IonToggle,
    IonButton,
    HorarioModalComponent
  ]
})
export class DisponibilidadEntrenadorPage {

  entrenador_id = Number(localStorage.getItem('userId'));

  clubes = [
    { id: 1, nombre: 'Win Padel' },
    { id: 2, nombre: 'Malloa Padel' }
  ];

  dias = [
    { nombre: 'Lunes', activo: false, hora_inicio: '09:00', hora_fin: '13:00', club_id: null, club_nombre: '' },
    { nombre: 'Martes', activo: false, hora_inicio: '09:00', hora_fin: '13:00', club_id: null, club_nombre: '' },
    { nombre: 'Miércoles', activo: false, hora_inicio: '09:00', hora_fin: '13:00', club_id: null, club_nombre: '' },
    { nombre: 'Jueves', activo: false, hora_inicio: '09:00', hora_fin: '13:00', club_id: null, club_nombre: '' },
    { nombre: 'Viernes', activo: false, hora_inicio: '09:00', hora_fin: '13:00', club_id: null, club_nombre: '' },
    { nombre: 'Sábado', activo: false, hora_inicio: '09:00', hora_fin: '13:00', club_id: null, club_nombre: '' },
    { nombre: 'Domingo', activo: false, hora_inicio: '09:00', hora_fin: '13:00', club_id: null, club_nombre: '' }
  ];

  constructor(private modalCtrl: ModalController) {}

  async abrirHorario(dia: any) {
    const modal = await this.modalCtrl.create({
      component: HorarioModalComponent,
      componentProps: {
        dia,
        clubes: this.clubes
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data) {
      dia.hora_inicio = data.hora_inicio;
      dia.hora_fin = data.hora_fin;
      dia.club_id = data.club_id;
      dia.club_nombre = data.club_nombre;
    }
  }

  guardarDisponibilidad() {
    const payload = this.dias
      .filter(d => d.activo)
      .map(d => ({
        entrenador_id: this.entrenador_id,
        dia: d.nombre,
        hora_inicio: d.hora_inicio,
        hora_fin: d.hora_fin,
        club_id: d.club_id
      }));

    console.log('Disponibilidad a guardar:', payload);
    // 👉 aquí va tu API
  }
}

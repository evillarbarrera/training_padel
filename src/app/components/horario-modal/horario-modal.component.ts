import { Component, Input } from '@angular/core';
import {
  IonContent,
  IonButton,
  IonDatetime,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-horario-modal',
  standalone: true,
  templateUrl: './horario-modal.component.html',
  styleUrls: ['./horario-modal.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonDatetime,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
  ]
})
export class HorarioModalComponent {

  @Input() dia: any;
  @Input() clubes: any[] = [];

  horaInicio!: string;
  horaFin!: string;
  clubId!: number;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.horaInicio = this.dia.hora_inicio;
    this.horaFin = this.dia.hora_fin;
    this.clubId = this.dia.club_id;
  }

  confirmar() {
    const club = this.clubes.find(c => c.id === this.clubId);

    this.modalCtrl.dismiss({
      hora_inicio: this.horaInicio,
      hora_fin: this.horaFin,
      club_id: this.clubId,
      club_nombre: club?.nombre || ''
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}

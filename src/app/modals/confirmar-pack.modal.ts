import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { closeOutline, checkmarkCircleOutline, fitnessOutline, locationOutline, informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-confirmar-pack',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './confirmar-pack.modal.html'
})
export class ConfirmarPackModal {

  @Input() pack: any;

  constructor(private modalCtrl: ModalController) {
    addIcons({ closeOutline, checkmarkCircleOutline, fitnessOutline, locationOutline, informationCircleOutline });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  confirmar() {
    this.modalCtrl.dismiss({ confirmar: true });
  }
}

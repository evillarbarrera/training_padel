import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmar-pack',
  standalone: true,
  imports: [IonicModule, CommonModule], // 👈 CLAVE
  templateUrl: './confirmar-pack.modal.html'
})
export class ConfirmarPackModal {

  @Input() pack: any;

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }

  confirmar() {
    this.modalCtrl.dismiss({ confirmar: true });
  }
}

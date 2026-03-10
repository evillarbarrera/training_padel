import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController, LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { closeOutline, checkmarkCircleOutline, fitnessOutline, locationOutline, informationCircleOutline, ticketOutline } from 'ionicons/icons';
import { EntrenamientoService } from '../services/entrenamiento.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmar-pack',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './confirmar-pack.modal.html'
})
export class ConfirmarPackModal implements OnInit {

  @Input() pack: any;

  codigoCupon: string = '';
  aplicandoCupon: boolean = false;
  cuponValidado: any = null;
  mensajeError: string = '';
  precioFinal: number = 0;
  ahorro: number = 0;

  constructor(
    private modalCtrl: ModalController,
    private entrenamientoService: EntrenamientoService,
    private loadingCtrl: LoadingController
  ) {
    addIcons({
      closeOutline,
      checkmarkCircleOutline,
      fitnessOutline,
      locationOutline,
      informationCircleOutline,
      ticketOutline
    });
  }

  ngOnInit() {
    this.precioFinal = this.pack.precio;
  }

  async validarCupon() {
    if (!this.codigoCupon.trim()) return;

    this.aplicandoCupon = true;
    this.mensajeError = '';
    const jugadorId = Number(localStorage.getItem('userId'));

    this.entrenamientoService.validateCupon(
      this.codigoCupon,
      this.pack.entrenador_id,
      jugadorId,
      this.pack.id
    ).subscribe({
      next: (res) => {
        this.aplicandoCupon = false;
        if (res.success) {
          this.cuponValidado = res.cupon;
          this.calcularDescuento();
        } else {
          this.mensajeError = res.error || 'Cupón inválido';
          this.cuponValidado = null;
          this.precioFinal = this.pack.precio;
        }
      },
      error: (err) => {
        this.aplicandoCupon = false;
        this.mensajeError = 'Error al validar el cupón';
        this.cuponValidado = null;
        this.precioFinal = this.pack.precio;
      }
    });
  }

  calcularDescuento() {
    if (!this.cuponValidado) return;

    if (this.cuponValidado.tipo_descuento === 'porcentaje') {
      this.ahorro = (this.pack.precio * this.cuponValidado.valor) / 100;
    } else {
      this.ahorro = this.cuponValidado.valor;
    }

    this.precioFinal = Math.max(0, this.pack.precio - this.ahorro);
  }

  removerCupon() {
    this.cuponValidado = null;
    this.codigoCupon = '';
    this.precioFinal = this.pack.precio;
    this.ahorro = 0;
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  confirmar() {
    this.modalCtrl.dismiss({
      confirmar: true,
      cupon_id: this.cuponValidado?.id,
      precio_final: this.precioFinal
    });
  }
}

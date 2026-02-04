import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { PacksService } from '../../services/pack.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline, searchOutline } from 'ionicons/icons';
import { chevronBackOutline, createOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-entrenador-packs',
  templateUrl: './entrenador-packs.page.html',
  styleUrls: ['./entrenador-packs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule  // aquí está todo lo que necesitas
  ],
  providers: [AlertController, LoadingController]
})
export class EntrenadorPacksPage implements OnInit {
  packs: any[] = [];
  packsFiltrados: any[] = [];
  filtro: string = '';
  mostrarFormulario = false;

  nuevoPack: any = {
    nombre: '',
    tipo: 'individual',
    sesiones_totales: 0,
    duracion_sesion_min: 60,
    precio: 0,
    descripcion: '',
    capacidad_minima: 4,
    capacidad_maxima: 6,
    dia_semana: null,
    hora_inicio: null,
    categoria: '',
    rango_horario_inicio: null,
    rango_horario_fin: null
  };

  modalOpen = false;

  constructor(
    private location: Location,
    private packsService: PacksService,
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController
  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      chevronBackOutline,
      createOutline,
      trashOutline,
      logOutOutline,
      searchOutline
    });
  }

  ngOnInit() {
    this.cargarPacks();
  }

  cargarPacks() {
    this.packsService.getMisPacks().subscribe(resp => {
      this.packs = resp;
      this.filtrarPacks();
    });
  }

  filtrarPacks() {
    this.packsFiltrados = this.packs.filter(p =>
      p.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  async crearPack() {
    // Validations
    if (!this.nuevoPack.nombre) {
      this.presentAlert('Error', 'El nombre es obligatorio');
      return;
    }

    if (this.nuevoPack.tipo === 'individual' && (!this.nuevoPack.sesiones_totales || this.nuevoPack.sesiones_totales <= 0)) {
      this.presentAlert('Error', 'Las sesiones totales deben ser mayor a 0');
      return;
    }

    if (this.nuevoPack.tipo === 'grupal') {
      if (this.nuevoPack.capacidad_minima > this.nuevoPack.capacidad_maxima) {
        this.presentAlert('Error', 'La capacidad mínima no puede ser mayor que la máxima');
        return;
      }
    }

    // Prepare Loading
    const loading = await this.loadingCtrl.create({
      message: this.nuevoPack.id ? 'Guardando cambios...' : 'Creando pack...',
      spinner: 'crescent'
    });
    await loading.present();

    if (this.nuevoPack.id) {
      // EDITAR
      this.packsService.editarPack(this.nuevoPack).subscribe({
        next: (resp) => {
          loading.dismiss();
          this.cerrarModal();
          this.resetFormulario();
          this.cargarPacks();
        },
        error: (err) => {
          loading.dismiss();
          console.error('Error al editar pack', err);
        }
      });
    } else {
      // CREAR
      this.packsService.crearPack(this.nuevoPack).subscribe({
        next: (resp) => {
          loading.dismiss();
          this.cerrarModal();
          this.resetFormulario();
          this.cargarPacks();
        },
        error: (err) => {
          loading.dismiss();
          console.error('Error al crear pack', err);
        }
      });
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }




  goBack() {
    this.router.navigate(['/entrenador-home']);
  }

  abrirModal() {
    this.modalOpen = true;
  }

  cerrarModal() {
    this.modalOpen = false;
  }

  resetFormulario() {
    this.nuevoPack = {
      nombre: '',
      tipo: 'individual',
      sesiones_totales: null,
      duracion_sesion_min: 60,
      precio: null,
      descripcion: '',
      capacidad_minima: 4,
      capacidad_maxima: 6,
      dia_semana: null,
      hora_inicio: null,
      categoria: '',
      rango_horario_inicio: null,
      rango_horario_fin: null
    };
  }

  editarPack(pack: any) {
    // Abrir modal con formulario y precargar los datos del pack
    this.nuevoPack = { ...pack };
    this.abrirModal();
  }

  async eliminarPack(packId: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro quieres eliminar este pack?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'confirm',
          handler: () => {
            // Aquí se llama al servicio para "eliminar" (actualizar activo a 0)
            this.packsService.eliminarPack(packId).subscribe({
              next: () => {
                // Actualizar la lista local
                this.packs = this.packs.map(p =>
                  p.id === packId ? { ...p, activo: 0 } : p
                );
                this.filtrarPacks();
              },
              error: (err) => console.error("Error eliminando pack:", err)
            });
          }
        }
      ]
    });

    await alert.present();
  }

  guardarEdicion() {
    this.packsService.editarPack(this.nuevoPack).subscribe({
      next: (resp) => {
        this.cerrarModal();
        this.resetFormulario();
        this.cargarPacks();
      },
      error: (err) => console.error("Error editando pack:", err)
    });
  }

}

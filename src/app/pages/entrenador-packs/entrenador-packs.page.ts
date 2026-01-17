import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { PacksService } from '../../services/pack.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline } from 'ionicons/icons';
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
  ]
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
    categoria: ''
  };

  modalOpen = false;

  constructor(
    private location: Location,
    private packsService: PacksService,
    private router: Router,
    private alertController: AlertController,
  ) {
    addIcons({
        settingsOutline,
        homeOutline,
        calendarOutline,
         chevronBackOutline,
         createOutline,
        trashOutline,
        logOutOutline});
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

  crearPack() {
 if (this.nuevoPack.id) {
    // EDITAR
    this.packsService.editarPack(this.nuevoPack).subscribe({
      next: (resp) => {
        console.log('Pack editado:', resp);
        this.cerrarModal();
        this.resetFormulario();
        this.cargarPacks();
      },
      error: (err) => console.error('Error al editar pack', err)
    });
  } else {
    // CREAR
    this.packsService.crearPack(this.nuevoPack).subscribe({
      next: (resp) => {
        console.log('Pack creado:', resp);
        this.cerrarModal();
        this.resetFormulario();
        this.cargarPacks();
      },
      error: (err) => console.error('Error al crear pack', err)
    });
  }
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
      categoria: ''
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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { PacksService } from '../../services/pack.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline, searchOutline, addOutline, timeOutline, peopleOutline, trophyOutline, cubeOutline, closeOutline } from 'ionicons/icons';
import { chevronBackOutline, createOutline, trashOutline, chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-entrenador-packs',
  templateUrl: './entrenador-packs.page.html',
  styleUrls: ['./entrenador-packs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [AlertController, LoadingController]
})
export class EntrenadorPacksPage implements OnInit {
  packs: any[] = [];
  packsFiltrados: any[] = [];
  filtro: string = '';
  mostrarFormulario = false;

  // Filters & Pagination
  segmentoSeleccionado: 'individual' | 'multijugador' | 'grupal' = 'individual';
  paginaActual: number = 1;
  elementosPorPagina: number = 3;

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
      chevronForwardOutline,
      createOutline,
      trashOutline,
      logOutOutline,
      searchOutline,
      addOutline,
      timeOutline,
      peopleOutline,
      trophyOutline,
      cubeOutline,
      closeOutline
    });
  }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }
    this.cargarPacks();
  }

  cargarPacks() {
    this.packsService.getMisPacks().subscribe(resp => {
      this.packs = resp;
      this.filtrarPacks();
    });
  }

  filtrarPacks() {
    // Reset pagination on filter change
    this.paginaActual = 1;

    this.packsFiltrados = this.packs.filter(p => {
      const matchesName = p.nombre.toLowerCase().includes(this.filtro.toLowerCase());

      let matchesSegment = false;
      if (this.segmentoSeleccionado === 'individual') {
        // Tipo individual y (sin cantidad definida o cantidad = 1)
        matchesSegment = p.tipo === 'individual' && (!p.cantidad_personas || p.cantidad_personas <= 1);
      } else if (this.segmentoSeleccionado === 'multijugador') {
        // Tipo individual pero con mas de 1 persona (ej: parejas)
        matchesSegment = p.tipo === 'individual' && (p.cantidad_personas > 1);
      } else if (this.segmentoSeleccionado === 'grupal') {
        matchesSegment = p.tipo === 'grupal';
      }

      return matchesName && matchesSegment;
    });
  }

  cambiarSegmento(event: any) {
    this.segmentoSeleccionado = event.detail.value;
    this.filtrarPacks();
  }

  get packsPaginados() {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    return this.packsFiltrados.slice(inicio, inicio + this.elementosPorPagina);
  }

  get totalPaginas() {
    return Math.ceil(this.packsFiltrados.length / this.elementosPorPagina);
  }

  cambiarPagina(delta: number) {
    const nuevaPagina = this.paginaActual + delta;
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas) {
      this.paginaActual = nuevaPagina;
    }
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
          this.presentAlert('Error', 'No se pudo actualizar el pack. ' + (err.error?.error || err.message || ''));
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
          this.presentAlert('Error', 'No se pudo crear el pack. ' + (err.error?.error || err.message || ''));
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
    this.resetFormulario();
    this.modalOpen = true;
  }

  cerrarModal() {
    this.modalOpen = false;
  }

  resetFormulario() {
    this.nuevoPack = {
      id: null,
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
      rango_horario_fin: null,
      cantidad_personas: 1
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
      error: (err) => {
        console.error("Error editando pack:", err);
        this.presentAlert('Error', 'No se pudo guardar la edición.');
      }
    });
  }

}

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
      // SOLO PACKS ACTIVOS
      const isActivo = p.activo == 1 || p.activo === true || p.activo === '1';
      if (!isActivo) return false;

      const matchesName = p.nombre.toLowerCase().includes(this.filtro.toLowerCase());

      let matchesSegment = false;
      if (this.segmentoSeleccionado === 'individual') {
        matchesSegment = p.tipo === 'individual' && (!p.cantidad_personas || p.cantidad_personas <= 1);
      } else if (this.segmentoSeleccionado === 'multijugador') {
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

  isSaving = false;

  async crearPack() {
    if (this.isSaving) return;

    const p = this.nuevoPack;

    // Validaciones básicas
    if (!p.nombre || p.nombre.trim().length === 0) {
      await this.presentAlert('Campo Requerido', 'Por favor ingresa un nombre para el pack.');
      return;
    }

    if (p.tipo === 'individual' && (!p.sesiones_totales || p.sesiones_totales <= 0)) {
      await this.presentAlert('Clases Requeridas', 'Debes indicar un número de clases mayor a 0.');
      return;
    }

    if (!p.precio || p.precio < 0) {
      await this.presentAlert('Precio Requerido', 'Por favor ingresa un precio válido.');
      return;
    }

    if (p.tipo === 'grupal') {
      // dia_semana puede ser 0 (Domingo), así que chequeamos null/undefined
      if (!p.capacidad_minima || !p.capacidad_maxima ||
        p.dia_semana === null || p.dia_semana === undefined ||
        !p.hora_inicio || !p.categoria) {
        await this.presentAlert('Datos Incompletos', 'Para packs grupales todos los campos son obligatorios (Capacidad, Día, Hora y Categoría).');
        return;
      }
      if (p.capacidad_minima > p.capacidad_maxima) {
        await this.presentAlert('Error de Capacidad', 'La capacidad mínima no puede ser mayor que la máxima.');
        return;
      }
    }

    this.isSaving = true;

    // Prepare Loading
    const loading = await this.loadingCtrl.create({
      message: p.id ? 'Guardando cambios...' : 'Creando pack...',
      spinner: 'crescent'
    });
    await loading.present();

    const request = p.id
      ? this.packsService.editarPack(p)
      : this.packsService.crearPack(p);

    request.subscribe({
      next: (resp) => {
        loading.dismiss();
        this.isSaving = false;
        this.cerrarModal();
        this.resetFormulario();
        this.cargarPacks();
      },
      error: async (err) => {
        loading.dismiss();
        this.isSaving = false;
        console.error('Error en operación de pack:', err);
        const errMsg = err.error?.error || err.message || 'Error de conexión';
        await this.presentAlert('Error', 'No se pudo completar la operación. ' + errMsg);
      }
    });
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
    this.modalOpen = true; // No llamar a abrirModal() para no resetear el formulario
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

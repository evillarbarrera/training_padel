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

  horas: string[] = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  minutos: string[] = ['00', '15', '30', '45'];

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
      // SOLO PACKS ACTIVOS (Resiliente a tipos string/number)
      const isActivo = Number(p.activo) === 1;
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

    try {
      // Clonamos para no modificar el objeto de la UI directamente mientras se guarda
      const p = { ...this.nuevoPack };

      // 1. Validaciones básicas
      const nombreVal = (p.nombre || '').toString().trim();
      if (nombreVal.length === 0) {
        await this.presentAlert('Campo Requerido', 'Por favor ingresa un nombre para el pack.');
        return;
      }

      // Unificar horas genéricas antes de guardar
      p.hora_inicio = (p.hora_inicio_h && p.hora_inicio_m) ? `${p.hora_inicio_h}:${p.hora_inicio_m}` : null;
      p.rango_horario_inicio = (p.rango_inicio_h && p.rango_inicio_m) ? `${p.rango_inicio_h}:${p.rango_inicio_m}` : null;
      p.rango_horario_fin = (p.rango_fin_h && p.rango_fin_m) ? `${p.rango_fin_h}:${p.rango_fin_m}` : null;

      p.hora_inicio = this.sanitizeTimeFormat(p.hora_inicio);
      p.rango_horario_inicio = this.sanitizeTimeFormat(p.rango_horario_inicio);
      p.rango_horario_fin = this.sanitizeTimeFormat(p.rango_horario_fin);

      if (p.tipo === 'individual') {
        if (!p.sesiones_totales || Number(p.sesiones_totales) <= 0) {
          await this.presentAlert('Clases Requeridas', 'Debes indicar un número de clases mayor a 0.');
          return;
        }
      }

      if (p.tipo === 'grupal') {
        const diaInvalido = (p.dia_semana === null || p.dia_semana === undefined || p.dia_semana === '');
        if (!p.capacidad_minima || !p.capacidad_maxima || diaInvalido || !p.hora_inicio || !p.categoria) {

          let camposFaltantes = [];
          if (!p.capacidad_minima) camposFaltantes.push('Capacidad Mínima');
          if (!p.capacidad_maxima) camposFaltantes.push('Capacidad Máxima');
          if (diaInvalido) camposFaltantes.push('Día Semana');
          if (!p.hora_inicio) camposFaltantes.push('Hora Inicio');
          if (!p.categoria) camposFaltantes.push('Categoría');

          await this.presentAlert('Datos Incompletos', `Para packs grupales todos los campos son obligatorios. Falta: ${camposFaltantes.join(', ')}.`);
          return;
        }
        if (Number(p.capacidad_minima) > Number(p.capacidad_maxima)) {
          await this.presentAlert('Error de Capacidad', 'La capacidad mínima no puede ser mayor que la máxima.');
          return;
        }
      }

      if (!p.precio || Number(p.precio) < 0) {
        await this.presentAlert('Precio Requerido', 'Por favor ingresa un precio válido.');
        return;
      }

      const userId = localStorage.getItem('userId');
      if (!userId || userId === '0') {
        await this.presentAlert('Sesión Expirada', 'Vuelve a iniciar sesión.');
        this.router.navigate(['/login']);
        return;
      }

      this.isSaving = true;
      const loading = await this.loadingCtrl.create({
        message: p.id ? 'Actualizando...' : 'Creando...',
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
          this.cargarPacks();
        },
        error: async (err) => {
          loading.dismiss();
          this.isSaving = false;
          console.error('Error al guardar pack:', JSON.stringify(err));
          const msg = err.error?.error || 'Error de servidor';
          await this.presentAlert('Error', msg);
        }
      });

    } catch (e: any) {
      this.isSaving = false;
      console.error(e);
      alert('Error: ' + e.message);
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
      tipo: this.segmentoSeleccionado === 'grupal' ? 'grupal' : 'individual',
      sesiones_totales: 0,
      duracion_sesion_min: 60,
      precio: 0,
      descripcion: '',
      capacidad_minima: 2,
      capacidad_maxima: 4,
      dia_semana: 1, // Lunes por defecto
      hora_inicio: null,
      categoria: '',
      cantidad_personas: 1,
      hora_inicio_h: '10',
      hora_inicio_m: '00',
      rango_inicio_h: null,
      rango_inicio_m: null,
      rango_fin_h: null,
      rango_fin_m: null
    };
  }

  getDiaNombre(dia: any): string {
    const d = Number(dia);
    const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    return dias[d] || '';
  }

  sanitizeTimeFormat(val: any): string | null {
    if (!val) return null;
    const s = val.toString();
    // Case 1: ISO string from ion-datetime (e.g. 2023-10-11T14:30:00...)
    if (s.includes('T')) {
      return s.split('T')[1].substring(0, 5);
    }
    // Case 2: DB string (e.g. 14:30:00)
    if (s.includes(':')) {
      const parts = s.split(':');
      if (parts.length >= 2) {
        const hh = parts[0].padStart(2, '0');
        const mm = parts[1].padStart(2, '0');
        return `${hh}:${mm}`;
      }
    }
    return s.substring(0, 5);
  }

  formatTime24(time: string): string {
    const formatted = this.sanitizeTimeFormat(time);
    return formatted || '--:--';
  }

  editarPack(pack: any) {
    // Abrir modal con formulario y precargar los datos del pack
    const h_inicio = this.sanitizeTimeFormat(pack.hora_inicio) || '';
    const r_inicio = this.sanitizeTimeFormat(pack.rango_horario_inicio) || '';
    const r_fin = this.sanitizeTimeFormat(pack.rango_horario_fin) || '';

    this.nuevoPack = {
      ...pack,
      hora_inicio_h: h_inicio.split(':')[0] || '10',
      hora_inicio_m: h_inicio.split(':')[1] || '00',
      rango_inicio_h: r_inicio.split(':')[0] || null,
      rango_inicio_m: r_inicio.split(':')[1] || null,
      rango_fin_h: r_fin.split(':')[0] || null,
      rango_fin_m: r_fin.split(':')[1] || null
    };
    this.modalOpen = true;
  }

  async eliminarPack(packId: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este pack?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              message: 'Eliminando pack...',
              spinner: 'crescent'
            });
            await loading.present();

            this.packsService.eliminarPack(packId).subscribe({
              next: () => {
                loading.dismiss();
                // Actualizar la lista local
                this.packs = this.packs.map(p =>
                  p.id == packId ? { ...p, activo: 0 } : p
                );
                this.filtrarPacks();
              },
              error: async (err) => {
                loading.dismiss();
                console.error("Error eliminando pack:", err);
                await this.presentAlert('Error', 'No se pudo eliminar el pack. Revisa tu conexión.');
              }
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

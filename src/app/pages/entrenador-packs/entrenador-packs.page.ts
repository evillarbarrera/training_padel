import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { PacksService } from '../../services/pack.service';
import { Router } from '@angular/router';
import {
  IonContent, IonSegment, IonSegmentButton, IonLabel,
  IonIcon, IonInput, IonButton, IonFab, IonFabButton,
  IonHeader, IonToolbar, IonTitle, IonButtons,
  IonModal, IonItem, IonSelect, IonSelectOption, IonTextarea, IonSpinner
} from '@ionic/angular/standalone';
import { AlertController, LoadingController } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  settingsOutline, homeOutline, calendarOutline, logOutOutline,
  searchOutline, addOutline, timeOutline, peopleOutline,
  trophyOutline, cubeOutline, closeOutline, clipboardOutline,
  chevronBackOutline, createOutline, trashOutline, chevronForwardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-entrenador-packs',
  templateUrl: './entrenador-packs.page.html',
  styleUrls: ['./entrenador-packs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent, IonSegment, IonSegmentButton, IonLabel,
    IonIcon, IonInput, IonButton, IonFab, IonFabButton,
    IonHeader, IonToolbar, IonTitle, IonButtons,
    IonModal, IonItem, IonSelect, IonSelectOption, IonTextarea, IonSpinner
  ],
  providers: []
})
export class EntrenadorPacksPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  packs: any[] = [];
  packsFiltrados: any[] = [];
  filtro: string = '';
  mostrarFormulario = false;

  segmentoSeleccionado: 'individual' | 'multijugador' | 'grupal' = 'individual';
  paginaActual: number = 1;
  elementosPorPagina: number = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calcularElementosPorPagina();
  }

  private calcularElementosPorPagina() {
    if (window.innerWidth >= 768) {
      this.elementosPorPagina = 9999;
      return;
    }
    const alturaDisponible = window.innerHeight - 300;
    const filas = Math.max(2, Math.floor(alturaDisponible / 160));
    const columnas = window.innerWidth > 768 ? 2 : 1;
    this.elementosPorPagina = filas * columnas;
  }

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
  isSaving = false;

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
      settingsOutline, homeOutline, calendarOutline, chevronBackOutline, chevronForwardOutline,
      createOutline, trashOutline, logOutOutline, searchOutline, addOutline,
      timeOutline, peopleOutline, trophyOutline, cubeOutline, closeOutline,
      clipboardOutline
    });
  }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }
    this.calcularElementosPorPagina();
    this.cargarPacks();
  }

  cargarPacks() {
    this.packsService.getMisPacks().subscribe({
      next: (resp) => {
        this.packs = resp;
        this.filtrarPacks();
      },
      error: (err) => {
        console.error('Error cargando packs:', err);
      }
    });
  }

  filtrarPacks() {
    this.paginaActual = 1;
    this.packsFiltrados = this.packs.filter(p => {
      const isActivo = Number(p.activo) === 1;
      if (!isActivo) return false;

      const matchesName = (p.nombre || '').toLowerCase().includes(this.filtro.toLowerCase());

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

  async crearPack() {
    console.log('Iniciando crearPack...');
    if (this.isSaving) return;

    let loading: any;
    try {
      const p = { ...this.nuevoPack };

      const nombreVal = (p.nombre || '').toString().trim();
      if (nombreVal.length === 0) {
        await this.presentAlert('Campo Requerido', 'Ingresa un nombre.');
        return;
      }

      p.hora_inicio = (p.hora_inicio_h && p.hora_inicio_m) ? `${p.hora_inicio_h}:${p.hora_inicio_m}` : null;
      p.rango_horario_inicio = (p.rango_inicio_h && p.rango_inicio_m) ? `${p.rango_inicio_h}:${p.rango_inicio_m}` : null;
      p.rango_horario_fin = (p.rango_fin_h && p.rango_fin_m) ? `${p.rango_fin_h}:${p.rango_fin_m}` : null;

      p.hora_inicio = this.sanitizeTimeFormat(p.hora_inicio);
      p.rango_horario_inicio = this.sanitizeTimeFormat(p.rango_horario_inicio);
      p.rango_horario_fin = this.sanitizeTimeFormat(p.rango_horario_fin);

      if (p.tipo === 'individual') {
        if (!p.sesiones_totales || Number(p.sesiones_totales) <= 0) {
          await this.presentAlert('Clases Requeridas', 'Número de clases > 0.');
          return;
        }
      }

      if (p.tipo === 'grupal') {
        const diaInvalido = (p.dia_semana === null || p.dia_semana === undefined || p.dia_semana === '');
        if (!p.capacidad_minima || !p.capacidad_maxima || diaInvalido || !p.hora_inicio || !p.categoria) {
          await this.presentAlert('Datos Incompletos', 'Faltan campos obligatorios para pack grupal.');
          return;
        }
      }

      if (!p.precio || Number(p.precio) < 0) {
        await this.presentAlert('Precio Requerido', 'Ingresa un precio válido.');
        return;
      }

      const userId = localStorage.getItem('userId');
      if (!userId || userId === '0') {
        await this.presentAlert('Sesión Expirada', 'Reinicia sesión.');
        this.router.navigate(['/login']);
        return;
      }

      this.isSaving = true;
      loading = await this.loadingCtrl.create({
        message: p.id ? 'Actualizando...' : 'Creando...',
        spinner: 'crescent',
        duration: 10000
      });
      await loading.present();

      const request = p.id
        ? this.packsService.editarPack(p)
        : this.packsService.crearPack(p);

      request.subscribe({
        next: (resp) => {
          if (loading) loading.dismiss();
          this.isSaving = false;
          this.cerrarModal();
          this.cargarPacks();
        },
        error: async (err) => {
          if (loading) loading.dismiss();
          this.isSaving = false;
          console.error('Error API:', err);
          const msg = err.error?.error || err.message || 'Error de conexión';
          await this.presentAlert('Error', msg);
        }
      });

    } catch (e: any) {
      if (loading) loading.dismiss();
      this.isSaving = false;
      console.error('Crash UI:', e);
      await this.presentAlert('Error Inesperado', e.message);
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
    this.isSaving = false;
    this.resetFormulario();
    this.modalOpen = true;
  }

  cerrarModal() {
    this.modalOpen = false;
    this.isSaving = false;
    if (this.modal) {
      this.modal.dismiss();
    }
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
      dia_semana: 1,
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
    if (s.includes('T')) return s.split('T')[1].substring(0, 5);
    if (s.includes(':')) {
      const parts = s.split(':');
      if (parts.length >= 2) {
        return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}`;
      }
    }
    return s.substring(0, 5);
  }

  formatTime24(time: string): string {
    const formatted = this.sanitizeTimeFormat(time);
    return formatted || '--:--';
  }

  editarPack(pack: any) {
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
      header: 'Confirmar',
      message: '¿Eliminar este pack?',
      buttons: [
        { text: 'No', role: 'cancel' },
        {
          text: 'Sí, Eliminar',
          handler: async () => {
            const loading = await this.loadingCtrl.create({ message: 'Eliminando...' });
            await loading.present();
            this.packsService.eliminarPack(packId).subscribe({
              next: () => {
                loading.dismiss();
                this.packs = this.packs.map(p => p.id == packId ? { ...p, activo: 0 } : p);
                this.filtrarPacks();
              },
              error: (err) => {
                loading.dismiss();
                this.presentAlert('Error', 'No se pudo eliminar.');
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }
}

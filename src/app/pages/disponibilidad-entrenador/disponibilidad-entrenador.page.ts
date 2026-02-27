import { Component, OnInit } from '@angular/core';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  ToastController,
  AlertController,
  LoadingController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { saveOutline, checkmarkDoneOutline, closeCircleOutline, chevronBackOutline, settingsOutline, flashOutline, locationOutline, addCircleOutline, chevronDownOutline, checkmarkOutline, lockClosedOutline, closeOutline } from 'ionicons/icons';

/* =============================
   INTERFACES
============================== */
interface BloqueHorario {
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  seleccionado: boolean;
  ocupado: boolean; // Reserved by student
  lockedByOtherClub?: boolean;
  club_id?: number | null;
}

interface DiaSemana {
  nombre: string;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  duracion: number;
}

@Component({
  selector: 'app-disponibilidad-entrenador',
  standalone: true,
  templateUrl: './disponibilidad-entrenador.page.html',
  styleUrls: ['./disponibilidad-entrenador.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonInput,
    IonItem,
    IonList,
    IonSelect,
    IonSelectOption
  ]
})
export class DisponibilidadEntrenadorPage implements OnInit {

  entrenador_id = Number(localStorage.getItem('userId'));
  club_id = 1;
  clubes: any[] = [];
  selectedClubId: number = 1;

  // Default Week Config
  showDefaultModal = false;
  diasSemana = [
    { id: 1, name: 'Lunes' },
    { id: 2, name: 'Martes' },
    { id: 3, name: 'Miércoles' },
    { id: 4, name: 'Jueves' },
    { id: 5, name: 'Viernes' },
    { id: 6, name: 'Sábado' },
    { id: 0, name: 'Domingo' }
  ];
  templateBlocks: { [dayId: number]: { time: string, selected: boolean }[] } = {};
  selectedDayTemplate: number = 1; // Default Lunes

  // Add Club
  showAddClubModal = false;
  allRegions = [
    { id: '13', name: 'Metropolitana de Santiago' },
    { id: '6', name: 'O\'Higgins' },
    { id: '5', name: 'Valparaíso' }
    // Reducido por simplicidad, se pueden añadir más
  ];
  allComunas: any = {
    '13': ['Santiago', 'Las Condes', 'Providencia', 'Ñuñoa', 'Maipú', 'Puente Alto', 'La Florida', 'Vitacura', 'Lo Barnechea', 'Colina', 'Lampa', 'San Bernardo', 'Peñalolén'],
    '6': ['Rancagua', 'Machalí', 'Rengo', 'San Fernando', 'Pichilemu', 'Santa Cruz'],
    '5': ['Valparaíso', 'Viña del Mar', 'Concón', 'Quilpué', 'Villa Alemana', 'Limache', 'Quillota', 'San Antonio', 'Los Andes', 'San Felipe']
  };
  availableComunas: string[] = [];
  newClub = {
    nombre: '',
    direccion: '',
    region: '',
    comuna: '',
    telefono: '',
    email: ''
  };

  constructor(
    private entrenamientoService: EntrenamientoService,
    private toastCtrl: ToastController,
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController
  ) {
    addIcons({
      saveOutline,
      checkmarkDoneOutline,
      closeCircleOutline,
      chevronBackOutline,
      settingsOutline,
      flashOutline,
      locationOutline,
      addCircleOutline,
      chevronDownOutline,
      checkmarkOutline,
      lockClosedOutline,
      closeOutline
    });
  }

  /* =============================
     PROPERTIES
  ============================== */
  dias: DiaSemana[] = [];
  diaSeleccionado: string = '';
  bloquesPorDia: { [fecha: string]: BloqueHorario[] } = {};
  disponibilidadExistente: Map<string, number> = new Map();
  isLoading = false;
  hasSlotsWithoutClub = false;

  /* =============================
     INIT
  ============================== */
  ngOnInit() {
    this.cargarClubes();
    this.crearSemanaDesdeHoy();
    this.generarBloquesSemana();
    this.cargarDisponibilidadExistente();
  }

  cargarClubes() {
    this.entrenamientoService.getClubes().subscribe({
      next: (res) => {
        this.clubes = res;
        if (res.length > 0 && !this.selectedClubId) {
          this.selectedClubId = res[0].id;
        }
      }
    });
  }

  onClubChange() {
    this.disponibilidadExistente.clear();
    this.cargarDisponibilidadExistente();
  }

  // --- ADD CLUB METHODS ---
  openAddClubModal(ev?: Event) {
    if (ev) {
      ev.stopPropagation();
    }
    this.showAddClubModal = true;
  }

  onRegionChange(ev: any) {
    const regionId = ev.detail.value;
    const regionObj = this.allRegions.find(r => r.name === regionId);
    if (regionObj) {
      this.availableComunas = this.allComunas[regionObj.id] || [];
    } else {
      this.availableComunas = [];
    }
  }

  saveNewClub() {
    if (!this.newClub.nombre || !this.newClub.region || !this.newClub.comuna) {
      this.mostrarToast('Por favor completa los campos obligatorios');
      return;
    }

    this.isLoading = true;
    const payload = { ...this.newClub, admin_id: this.entrenador_id };
    this.entrenamientoService.addClub(payload).subscribe({
      next: (res) => {
        this.mostrarToast('✅ Club creado exitosamente');
        this.showAddClubModal = false;
        this.newClub = { nombre: '', direccion: '', region: '', comuna: '', telefono: '', email: '' }; // Reset
        this.cargarClubes(); // Recargar lista
        if (res.id) this.selectedClubId = res.id;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        this.mostrarToast('❌ Error al crear club');
      }
    });
  }

  /* =============================
     SEMANA (30 DÍAS)
  ============================== */
  crearSemanaDesdeHoy() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const TOTAL_DIAS = 30; // Changed from 10 to 30 to match web

    const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    this.dias = [];

    for (let i = 0; i < TOTAL_DIAS; i++) {
      const fecha = new Date(hoy);
      fecha.setDate(hoy.getDate() + i);

      this.dias.push({
        nombre: nombresDias[fecha.getDay()],
        fecha: this.getLocalISODate(fecha),
        hora_inicio: '07:00',
        hora_fin: '21:00',
        duracion: 60
      });
    }

    if (this.dias.length > 0) {
      this.diaSeleccionado = this.dias[0].fecha;
    }
  }

  getLocalISODate(date: Date): string {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  /* =============================
     BLOQUES
  ============================== */
  generarBloquesSemana() {
    this.bloquesPorDia = {};
    this.dias.forEach(dia => {
      this.bloquesPorDia[dia.fecha] = this.generarBloquesDia(
        dia.fecha,
        dia.hora_inicio,
        dia.hora_fin,
        dia.duracion
      );
    });
  }

  generarBloquesDia(fecha: string, horaInicio: string, horaFin: string, duracion: number): BloqueHorario[] {
    const bloques: BloqueHorario[] = [];
    let inicio = new Date(`${fecha}T${horaInicio}:00`);
    const fin = new Date(`${fecha}T${horaFin}:00`);

    while (inicio < fin) {
      const finBloque = new Date(inicio.getTime() + duracion * 60000);
      if (finBloque > fin) break;

      const key = `${fecha} ${this.formatTime(inicio)}-${fecha} ${this.formatTime(finBloque)}`;
      const savedClubId = this.disponibilidadExistente.get(key);
      const isThisClub = savedClubId === Number(this.selectedClubId);
      const isOtherClub = savedClubId && savedClubId !== Number(this.selectedClubId);

      bloques.push({
        fecha,
        hora_inicio: this.formatTime(inicio).slice(0, 5), // "HH:MM"
        hora_fin: this.formatTime(finBloque).slice(0, 5),
        seleccionado: isThisClub || false,
        ocupado: false,
        lockedByOtherClub: isOtherClub || false,
        club_id: savedClubId
      });

      inicio = finBloque;
    }
    return bloques;
  }

  private formatTime(date: Date): string {
    return date.toTimeString().slice(0, 8); // "HH:MM:SS"
  }

  /* =============================
     CARGAR DATA
  ============================== */
  cargarDisponibilidadExistente() {
    this.isLoading = true;
    this.hasSlotsWithoutClub = false;
    this.disponibilidadExistente.clear();

    this.entrenamientoService.getDisponibilidad(this.entrenador_id).subscribe({
      next: (data: any[]) => {
        data.forEach(d => {
          const key = `${d.fecha_inicio}-${d.fecha_fin}`;
          this.disponibilidadExistente.set(key, Number(d.club_id));

          if (!d.club_id || d.club_id === 0) {
            this.hasSlotsWithoutClub = true;
          }
        });
        this.generarBloquesSemana();
        this.cargarReservasExistentes();
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  cargarReservasExistentes() {
    this.entrenamientoService.getReservasEntrenador(this.entrenador_id).subscribe({
      next: (data: any) => {
        const reservas = [...(data.reservas_tradicionales || []), ...(data.packs_grupales || [])];

        Object.keys(this.bloquesPorDia).forEach(fecha => {
          this.bloquesPorDia[fecha].forEach(bloque => {
            const tieneReserva = reservas.some(reserva => {
              if (!reserva.fecha || !reserva.hora_inicio) return false;
              const status = reserva.estado || reserva.estado_grupo;
              if (status === 'cancelado') return false;

              // Fix for time format
              const horaReserva = String(reserva.hora_inicio).slice(0, 5);
              return reserva.fecha === fecha && horaReserva === bloque.hora_inicio;
            });

            if (tieneReserva) bloque.ocupado = true;
          });
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  /* =============================
     INTERACTION
  ============================== */
  seleccionarDia(fecha: string) {
    this.diaSeleccionado = fecha;
  }

  get bloquesActuales() {
    return this.bloquesPorDia[this.diaSeleccionado] || [];
  }

  toggleBloque(b: BloqueHorario) {
    if (b.ocupado || b.lockedByOtherClub) return;
    b.seleccionado = !b.seleccionado;
  }

  seleccionarTodos() {
    this.bloquesActuales.forEach(b => { if (!b.ocupado && !b.lockedByOtherClub) b.seleccionado = true; });
  }

  deseleccionarTodos() {
    this.bloquesActuales.forEach(b => { if (!b.ocupado && !b.lockedByOtherClub) b.seleccionado = false; });
  }

  get todosSeleccionados(): boolean {
    const bloques = this.bloquesActuales;
    if (!bloques || bloques.length === 0) return false;
    return bloques.every(b => b.seleccionado || b.ocupado || b.lockedByOtherClub);
  }

  /* =============================
     GUARDAR
  ============================== */
  guardarDisponibilidad() {
    const crear: any[] = [];
    const eliminar: any[] = [];

    Object.values(this.bloquesPorDia).forEach(bloques => {
      bloques.forEach(b => {
        const key = `${b.fecha} ${b.hora_inicio}:00-${b.fecha} ${b.hora_fin}:00`;
        const existiaId = this.disponibilidadExistente.get(key);
        const existia = existiaId === Number(this.selectedClubId);

        if (b.seleccionado && !existia) {
          crear.push({
            profesor_id: this.entrenador_id,
            fecha_inicio: `${b.fecha} ${b.hora_inicio}:00`,
            fecha_fin: `${b.fecha} ${b.hora_fin}:00`,
            club_id: this.selectedClubId
          });
        }

        if (!b.seleccionado && existia) {
          eliminar.push({
            profesor_id: this.entrenador_id,
            fecha_inicio: `${b.fecha} ${b.hora_inicio}:00`,
            fecha_fin: `${b.fecha} ${b.hora_fin}:00`,
            club_id: this.selectedClubId
          });
        }
      });
    });

    if (crear.length === 0 && eliminar.length === 0) {
      this.mostrarToast('No hay cambios para guardar');
      return;
    }

    this.isLoading = true;
    this.entrenamientoService.syncDisponibilidad({ crear, eliminar }).subscribe({
      next: () => {
        this.disponibilidadExistente.clear();
        this.dias = [];
        this.crearSemanaDesdeHoy();
        this.cargarDisponibilidadExistente();
        this.mostrarToast('✅ Horario actualizado correctamente');
      },
      error: () => {
        this.isLoading = false;
        this.mostrarToast('❌ Error al guardar');
      }
    });
  }
  async migrateSlots() {
    const alert = await this.alertController.create({
      header: 'Vincular Horarios',
      message: 'Tienes horarios guardados que no están asociados a ningún club. ¿Deseas vincularlos todos al club seleccionado actualmente?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Vincular ahora',
          handler: () => {
            this.isLoading = true;
            this.entrenamientoService.migrateAvailability(this.entrenador_id, this.selectedClubId).subscribe({
              next: (res) => {
                this.mostrarToast(res.message || 'Horarios vinculados correctamente');
                this.cargarDisponibilidadExistente();
              },
              error: () => {
                this.isLoading = false;
                this.mostrarToast('Error al vincular horarios');
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }
  /* =============================
     DEFAULT CONFIG
  ============================== */
  openDefaultModal() {
    this.isLoading = true;
    this.initTemplateBlocks();
    this.entrenamientoService.getDefaultConfig(this.entrenador_id).subscribe({
      next: (res) => {
        res.forEach(range => {
          const dayId = range.dia_semana;
          const start = range.hora_inicio;
          const end = range.hora_fin;
          if (this.templateBlocks[dayId]) {
            this.templateBlocks[dayId].forEach(b => {
              if (b.time >= start && b.time < end) b.selected = true;
            });
          }
        });
        this.showDefaultModal = true;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.mostrarToast('Error cargando configuración');
      }
    });
  }

  initTemplateBlocks() {
    this.templateBlocks = {};
    const horas: string[] = [];
    for (let h = 7; h <= 22; h++) {
      const hh = h < 10 ? '0' + h : h;
      horas.push(`${hh}:00`);
    }
    this.diasSemana.forEach(d => {
      this.templateBlocks[d.id] = horas.map(h => ({ time: h, selected: false }));
    });
  }

  toggleTemplateBlock(dayId: number, block: any) {
    block.selected = !block.selected;
  }

  seleccionarTodoDiaTemplate(dayId: number) {
    this.templateBlocks[dayId].forEach(b => b.selected = true);
  }

  deseleccionarTodoDiaTemplate(dayId: number) {
    this.templateBlocks[dayId].forEach(b => b.selected = false);
  }

  saveDefaultConfig() {
    this.isLoading = true;
    const config: any[] = [];

    Object.keys(this.templateBlocks).forEach(dayKey => {
      const dayId = parseInt(dayKey);
      const blocks = this.templateBlocks[dayId];
      let currentRange: any = null;

      blocks.forEach((b, idx) => {
        if (b.selected) {
          if (!currentRange) {
            currentRange = {
              dia_semana: dayId,
              club_id: this.selectedClubId,
              hora_inicio: b.time,
              duracion_bloque: 60
            };
          }
        } else {
          if (currentRange) {
            currentRange.hora_fin = b.time;
            config.push(currentRange);
            currentRange = null;
          }
        }
        if (idx === blocks.length - 1 && currentRange) {
          const lastH = parseInt(b.time.split(':')[0]);
          currentRange.hora_fin = (lastH + 1 < 10 ? '0' : '') + (lastH + 1) + ':00';
          config.push(currentRange);
        }
      });
    });

    this.entrenamientoService.saveDefaultConfig({ entrenador_id: this.entrenador_id, config }).subscribe({
      next: () => {
        this.mostrarToast('✅ Plantilla semanal guardada');
        this.showDefaultModal = false;
        this.isLoading = false;
      },
      error: () => {
        this.mostrarToast('❌ Error al guardar plantilla');
        this.isLoading = false;
      }
    });
  }

  async applyDefaultConfig() {
    const alert = await this.alertController.create({
      header: 'Aplicar Plantilla',
      message: 'Esto generará tus bloques para los próximos 30 días. ¿Continuar?',
      buttons: [{ text: 'Cancelar', role: 'cancel' }, { text: 'Continuar', role: 'confirm', handler: () => this.confirmApply() }]
    });
    await alert.present();
  }

  confirmApply() {
    this.isLoading = true;
    this.entrenamientoService.applyDefaultConfig({ entrenador_id: this.entrenador_id, days_ahead: 30 }).subscribe({
      next: () => {
        this.mostrarToast('✅ Plantilla aplicada (30 días)');
        this.disponibilidadExistente.clear();
        this.cargarDisponibilidadExistente();
      },
      error: () => {
        this.mostrarToast('❌ Error aplicando plantilla');
        this.isLoading = false;
      }
    });
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }

  goBack() {
    this.router.navigate(['/entrenador-home']);
  }


}

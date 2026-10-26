import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonicModule,
  NavController,
  ToastController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  peopleOutline,
  checkmarkCircleOutline,
  alertCircleOutline,
  logoWhatsapp,
  timeOutline,
  cashOutline,
  refreshOutline,
  addOutline,
  personOutline,
  personAddOutline,
  closeOutline,
  createOutline,
  briefcaseOutline,
  calendarOutline,
  checkmarkOutline
} from 'ionicons/icons';
import { ClubAdminService } from '../../../services/club-admin.service';
import { Haptics, NotificationType } from '@capacitor/haptics';

@Component({
  selector: 'app-club-turnos-checkin',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './club-turnos-checkin.page.html',
  styleUrls: ['./club-turnos-checkin.page.scss']
})
export class ClubTurnosCheckinPage implements OnInit {
  userId: number = 0;
  clubes: any[] = [];
  selectedClub: any = null;

  turnos: any[] = [];
  isLoading: boolean = false;
  selectedFecha: string = '';
  weekDays: any[] = [];

  staffList: any[] = [];
  isLoadingStaff: boolean = false;

  // Modal de Asignación
  isAssignModalOpen: boolean = false;
  isSavingTurno: boolean = false;
  assignMode: 'staff' | 'manual' = 'staff';

  formTurno: any = {
    id: null,
    usuario_id: null,
    nombre_responsable: '',
    telefono: '',
    email: '',
    rol_turno: 'Encargado de Turno',
    tipo_turno: 'Día Completo',
    hora_inicio: '08:00',
    hora_fin: '23:30',
    monto_pago: null,
    notas: ''
  };

  rolesDisponibles: string[] = [
    'Encargado de Turno',
    'Recepción y Ventas',
    'Canchero / Mantenimiento',
    'Apertura de Club',
    'Cierre y Cuadratura',
    'Staff de Apoyo'
  ];

  tiposTurno: { label: string; tipo: string; inicio: string; fin: string }[] = [
    { label: 'Día Completo (08:00 - 23:30)', tipo: 'Día Completo', inicio: '08:00', fin: '23:30' },
    { label: 'Turno Mañana (08:00 - 15:30)', tipo: 'Mañana', inicio: '08:00', fin: '15:30' },
    { label: 'Turno Tarde (15:30 - 23:30)', tipo: 'Tarde', inicio: '15:30', fin: '23:30' },
    { label: 'Turno Noche (18:00 - 23:30)', tipo: 'Noche', inicio: '18:00', fin: '23:30' }
  ];

  constructor(
    private clubAdminService: ClubAdminService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    addIcons({
      chevronBackOutline,
      peopleOutline,
      checkmarkCircleOutline,
      alertCircleOutline,
      logoWhatsapp,
      timeOutline,
      cashOutline,
      refreshOutline,
      addOutline,
      personOutline,
      personAddOutline,
      closeOutline,
      createOutline,
      briefcaseOutline,
      calendarOutline,
      checkmarkOutline
    });
  }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId')) || 0;
    this.selectedFecha = this.getLocalDateISO();
    this.generateWeekDays();
    this.loadClubes();
  }

  getLocalDateISO(dateObj: Date = new Date()): string {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  generateWeekDays() {
    const days = [];
    const base = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const iso = this.getLocalDateISO(d);
      days.push({
        iso,
        label: i === 0 ? 'Hoy' : (i === 1 ? 'Mañ' : d.toLocaleDateString('es-CL', { weekday: 'short' }).slice(0, 3)),
        dayNum: d.getDate(),
        month: d.toLocaleDateString('es-CL', { month: 'short' })
      });
    }
    this.weekDays = days;
  }

  selectFecha(iso: string) {
    this.selectedFecha = iso;
    this.loadTurnos();
  }

  loadClubes() {
    this.isLoading = true;
    this.clubAdminService.getClubesAdmin(this.userId).subscribe({
      next: (res) => {
        this.clubes = res || [];
        if (this.clubes.length > 0) {
          const savedId = localStorage.getItem('selectedClubId');
          this.selectedClub = this.clubes.find(c => String(c.id) === String(savedId)) || this.clubes[0];
          this.loadTurnos();
        } else {
          this.isLoading = false;
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadTurnos(event?: any) {
    if (!this.selectedClub) return;
    this.isLoading = true;

    this.clubAdminService.getClubTurnos(this.selectedClub.id, this.selectedFecha, this.selectedFecha).subscribe({
      next: (res: any) => {
        const list = Array.isArray(res) ? res : (res && res.turnos ? res.turnos : []);
        this.turnos = list.map((t: any) => ({
          ...t,
          pagado: Number(t.pagado || 0)
        }));
        this.isLoading = false;
        if (event) event.target.complete();
      },
      error: () => {
        this.turnos = [];
        this.isLoading = false;
        if (event) event.target.complete();
      }
    });
  }

  hasResponsable(turno: any): boolean {
    if (!turno) return false;
    if (turno.usuario_id && Number(turno.usuario_id) > 0) return true;
    const name = (turno.nombre_responsable || '').trim().toLowerCase();
    return !!name && name !== 'encargado de turno' && name !== 'sin asignar';
  }

  getTurnoResponsableName(turno: any): string {
    if (!turno) return 'Sin Asignar';
    if (this.hasResponsable(turno)) {
      return turno.nombre_responsable || 'Encargado';
    }
    return 'Sin Asignar';
  }

  openAssignModal(turno?: any) {
    this.loadStaff();
    if (turno) {
      this.formTurno = {
        id: turno.id,
        usuario_id: turno.usuario_id || null,
        nombre_responsable: this.hasResponsable(turno) ? turno.nombre_responsable : '',
        telefono: turno.telefono || '',
        email: turno.email || '',
        rol_turno: turno.rol_turno || 'Encargado de Turno',
        tipo_turno: turno.tipo_turno || 'Día Completo',
        hora_inicio: turno.hora_inicio || '08:00',
        hora_fin: turno.hora_fin || '23:30',
        monto_pago: turno.monto_pago || null,
        notas: turno.notas || ''
      };
      this.assignMode = turno.usuario_id ? 'staff' : (this.hasResponsable(turno) ? 'manual' : 'staff');
    } else {
      this.formTurno = {
        id: null,
        usuario_id: null,
        nombre_responsable: '',
        telefono: '',
        email: '',
        rol_turno: 'Encargado de Turno',
        tipo_turno: 'Día Completo',
        hora_inicio: '08:00',
        hora_fin: '23:30',
        monto_pago: null,
        notas: ''
      };
      this.assignMode = 'staff';
    }
    this.isAssignModalOpen = true;
  }

  closeAssignModal() {
    this.isAssignModalOpen = false;
  }

  loadStaff() {
    if (!this.selectedClub) return;
    this.isLoadingStaff = true;
    this.clubAdminService.getClubStaff(this.selectedClub.id).subscribe({
      next: (staff) => {
        this.staffList = staff || [];
        this.isLoadingStaff = false;
      },
      error: () => {
        this.staffList = [];
        this.isLoadingStaff = false;
      }
    });
  }

  selectStaffMember(s: any) {
    this.formTurno.usuario_id = s.id;
    this.formTurno.nombre_responsable = s.nombre || 'Staff';
    this.formTurno.email = s.email || '';
    if (s.rol) {
      const r = s.rol.toLowerCase();
      if (r.includes('recep')) this.formTurno.rol_turno = 'Recepción y Ventas';
      else if (r.includes('canch')) this.formTurno.rol_turno = 'Canchero / Mantenimiento';
    }
  }

  onTipoTurnoChange() {
    const found = this.tiposTurno.find(t => t.tipo === this.formTurno.tipo_turno);
    if (found) {
      this.formTurno.hora_inicio = found.inicio;
      this.formTurno.hora_fin = found.fin;
    }
  }

  async saveTurnoAssignment() {
    if (this.assignMode === 'staff' && !this.formTurno.usuario_id && !this.formTurno.nombre_responsable) {
      this.showToast('Por favor selecciona un integrante del staff', 'warning');
      return;
    }
    if (this.assignMode === 'manual' && !this.formTurno.nombre_responsable?.trim()) {
      this.showToast('Por favor ingresa el nombre del responsable', 'warning');
      return;
    }

    this.isSavingTurno = true;
    const payload = {
      id: this.formTurno.id,
      club_id: this.selectedClub.id,
      usuario_id: this.assignMode === 'staff' ? this.formTurno.usuario_id : null,
      nombre_responsable: this.formTurno.nombre_responsable?.trim(),
      email: this.formTurno.email?.trim() || null,
      telefono: this.formTurno.telefono?.trim() || null,
      fecha: this.selectedFecha,
      hora_inicio: this.formTurno.hora_inicio || '08:00',
      hora_fin: this.formTurno.hora_fin || '23:30',
      tipo_turno: this.formTurno.tipo_turno || 'Día Completo',
      rol_turno: this.formTurno.rol_turno || 'Encargado de Turno',
      monto_pago: this.formTurno.monto_pago ? Number(this.formTurno.monto_pago) : null,
      notas: this.formTurno.notas || '',
      created_by: this.userId
    };

    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch (e) {}

    this.clubAdminService.saveClubTurno(payload).subscribe({
      next: () => {
        this.isSavingTurno = false;
        this.isAssignModalOpen = false;
        this.showToast(`Turno asignado a ${this.formTurno.nombre_responsable} con éxito`, 'success');
        this.loadTurnos();
      },
      error: (err) => {
        this.isSavingTurno = false;
        console.error('Error guardando turno:', err);
        this.showToast('No se pudo guardar la asignación. Reintenta.', 'danger');
      }
    });
  }

  async togglePago(turno: any) {
    const nuevoEstado = turno.pagado === 1 ? 0 : 1;
    turno.pagado = nuevoEstado;

    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch (e) {}

    this.clubAdminService.togglePagoTurno({
      id: turno.id,
      club_id: this.selectedClub.id,
      pagado: nuevoEstado
    }).subscribe({
      next: () => {
        this.showToast(nuevoEstado === 1 ? 'Turno marcado como PAGADO' : 'Turno marcado como PENDIENTE', 'success');
      },
      error: () => {
        this.showToast('Estado actualizado localmente', 'dark');
      }
    });
  }

  sendWhatsAppReminder(turno: any) {
    const titular = turno.nombre_responsable || 'Encargado';
    const horario = `${turno.hora_inicio || '08:00'} a ${turno.hora_fin || '23:30'} hrs`;
    const rol = turno.rol_turno || 'Encargado de Turno';
    const club = this.selectedClub?.nombre || 'Club de Pádel';
    const telefono = (turno.telefono || '').replace(/\D/g, '');

    const mensaje = encodeURIComponent(
      `¡Hola ${titular}! 🎾 Te recordamos tu turno de staff en ${club}:\n\n` +
      `👤 Rol: *${rol}*\n` +
      `⏰ Horario: *${horario}*\n\n` +
      `¡Gracias por tu apoyo en la operación del club!`
    );

    const url = telefono ? `https://wa.me/${telefono}?text=${mensaje}` : `https://wa.me/?text=${mensaje}`;
    window.open(url, '_system');
  }

  goBack() {
    this.navCtrl.back();
  }

  async showToast(msg: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2200,
      position: 'top',
      color
    });
    await toast.present();
  }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonicModule,
  ToastController,
  AlertController,
  LoadingController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  closeOutline,
  checkmarkOutline,
  logoWhatsapp,
  trashOutline,
  personOutline,
  timeOutline,
  cashOutline,
  lockClosedOutline,
  lockOpenOutline,
  sunnyOutline,
  shareSocialOutline,
  alertCircleOutline,
  alertOutline,
  checkmarkCircleOutline,
  chevronDownOutline,
  searchOutline,
  personAddOutline,
  callOutline,
  closeCircle
} from 'ionicons/icons';
import { ClubAdminService } from '../../../../services/club-admin.service';
import { Haptics, NotificationType } from '@capacitor/haptics';

@Component({
  selector: 'app-club-reserva-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './club-reserva-modal.component.html',
  styleUrls: ['./club-reserva-modal.component.scss']
})
export class ClubReservaModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() selectedClub: any = null;
  @Input() canchas: any[] = [];
  @Input() initialCanchaId: number = 0;
  @Input() initialFecha: string = '';
  @Input() initialHoraInicio: string = '09:00';
  @Input() editingReserva: any = null;

  @Output() close = new EventEmitter<boolean>();
  @Output() reservaSaved = new EventEmitter<any>();

  isSaving: boolean = false;
  userSearchTerm: string = '';
  searchResults: any[] = [];
  isSearchingUsers: boolean = false;

  reservaData: any = {
    id: null,
    club_id: 0,
    cancha_id: 0,
    fecha: '',
    hora_inicio: '09:00',
    hora_fin: '10:30',
    hora_fin_bloqueo: '11:00',
    duracion: 90,
    nombre_externo: '',
    telefono: '',
    jugador_id: 0,
    precio: 0,
    pagado: 0,
    estado: 'Confirmada', // 'Confirmada' o 'Bloqueada'
    metodo_pago: 'total', // 'total' o 'proporcional'
    pago_p1: 0,
    pago_p2: 0,
    pago_p3: 0,
    pago_p4: 0,
    nombre_externo2: '',
    nombre_externo3: '',
    nombre_externo4: '',
    tipo_bloqueo: 'rango',
    motivo_bloqueo: 'Mantenimiento'
  };

  duracionesDisponibles = [60, 90, 120];

  playerEntryMode: 'search' | 'manual' = 'search';
  manualNombre: string = '';
  manualTelefono: string = '';

  constructor(
    private clubAdminService: ClubAdminService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
    addIcons({
      closeOutline,
      checkmarkOutline,
      logoWhatsapp,
      trashOutline,
      personOutline,
      timeOutline,
      cashOutline,
      lockClosedOutline,
      lockOpenOutline,
      sunnyOutline,
      shareSocialOutline,
      alertCircleOutline,
      alertOutline,
      checkmarkCircleOutline,
      chevronDownOutline,
      searchOutline,
      personAddOutline,
      callOutline,
      closeCircle
    });
  }

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges() {
    this.initForm();
  }

  initForm() {
    if (this.editingReserva && this.editingReserva.id) {
      const isBloqueo = this.editingReserva.estado === 'Bloqueada';
      const isFullDay = (this.editingReserva.hora_inicio?.startsWith('07:00') && 
                        (this.editingReserva.hora_fin?.startsWith('23:59') || this.editingReserva.hora_fin?.startsWith('24:00')));
      
      this.reservaData = {
        id: this.editingReserva.id,
        club_id: this.selectedClub?.id || this.editingReserva.club_id,
        cancha_id: Number(this.editingReserva.cancha_id),
        fecha: this.editingReserva.fecha || this.initialFecha,
        hora_inicio: (this.editingReserva.hora_inicio || '09:00').substring(0, 5),
        hora_fin: (this.editingReserva.hora_fin || '10:30').substring(0, 5),
        hora_fin_bloqueo: (this.editingReserva.hora_fin || '11:00').substring(0, 5),
        duracion: Number(this.editingReserva.duracion) || 90,
        nombre_externo: this.editingReserva.nombre_externo || this.editingReserva.jugador_nombre || '',
        telefono: this.editingReserva.telefono || '',
        jugador_id: Number(this.editingReserva.jugador_id || this.editingReserva.usuario_id || 0),
        precio: Number(this.editingReserva.precio) || 0,
        pagado: Number(this.editingReserva.pagado) || 0,
        estado: this.editingReserva.estado || 'Confirmada',
        metodo_pago: this.editingReserva.metodo_pago || 'total',
        pago_p1: Number(this.editingReserva.pago_p1) || 0,
        pago_p2: Number(this.editingReserva.pago_p2) || 0,
        pago_p3: Number(this.editingReserva.pago_p3) || 0,
        pago_p4: Number(this.editingReserva.pago_p4) || 0,
        nombre_externo2: this.editingReserva.nombre_externo2 || '',
        nombre_externo3: this.editingReserva.nombre_externo3 || '',
        nombre_externo4: this.editingReserva.nombre_externo4 || '',
        tipo_bloqueo: isBloqueo ? (isFullDay ? 'dia_completo' : 'rango') : 'rango',
        motivo_bloqueo: this.editingReserva.motivo_bloqueo || (this.editingReserva.nombre_externo?.replace(/^BLOQUEO:\s*/i, '')) || 'Mantenimiento'
      };
    } else {
      const isInitialBlock = this.editingReserva?.estado === 'Bloqueada';
      const [hIni, mIni] = (this.initialHoraInicio || '09:00').split(':').map(Number);
      const hFin = String(Math.min(23, (hIni || 9) + 2)).padStart(2, '0');
      const horaFinBloqueo = `${hFin}:${String(mIni || 0).padStart(2, '0')}`;

      this.reservaData = {
        id: null,
        club_id: this.selectedClub?.id || 0,
        cancha_id: this.initialCanchaId || (this.canchas[0]?.id || 0),
        fecha: this.initialFecha,
        hora_inicio: (this.initialHoraInicio || '09:00').substring(0, 5),
        hora_fin: '10:30',
        hora_fin_bloqueo: horaFinBloqueo,
        duracion: 90,
        nombre_externo: '',
        telefono: '',
        jugador_id: 0,
        precio: 0,
        pagado: 0,
        estado: isInitialBlock ? 'Bloqueada' : 'Confirmada',
        metodo_pago: 'total',
        pago_p1: 0,
        pago_p2: 0,
        pago_p3: 0,
        pago_p4: 0,
        nombre_externo2: '',
        nombre_externo3: '',
        nombre_externo4: '',
        tipo_bloqueo: 'rango',
        motivo_bloqueo: 'Mantenimiento'
      };
      this.recalculateEndTimeAndPrice();
    }
  }

  setDuracion(mins: number) {
    this.reservaData.duracion = mins;
    this.recalculateEndTimeAndPrice();
  }

  onHoraInicioChange() {
    this.recalculateEndTimeAndPrice();
  }

  onCanchaChange() {
    this.recalculateEndTimeAndPrice();
  }

  recalculateEndTimeAndPrice() {
    const [h, m] = (this.reservaData.hora_inicio || '09:00').split(':').map(Number);
    const dur = Number(this.reservaData.duracion) || 90;
    const totalMin = (h * 60 + m) + dur;
    const hEnd = Math.floor(totalMin / 60);
    const mEnd = totalMin % 60;
    this.reservaData.hora_fin = `${String(hEnd).padStart(2, '0')}:${String(mEnd).padStart(2, '0')}`;

    // Actualizar precio automático según tarifas de la cancha
    const cancha = this.canchas.find(c => Number(c.id) === Number(this.reservaData.cancha_id));
    if (cancha && (!this.editingReserva || this.reservaData.precio === 0)) {
      const hStr = this.reservaData.hora_inicio;
      const hInicioAlto = (cancha.hora_inicio_alto || '18:00').substring(0, 5);
      const isAlto = (hStr >= hInicioAlto);

      if (dur === 60) {
        const p = isAlto && cancha.precio_60_alto > 0 ? cancha.precio_60_alto : cancha.precio_60;
        this.reservaData.precio = Number(p || 0);
      } else if (dur === 120) {
        const p = isAlto && cancha.precio_120_alto > 0 ? cancha.precio_120_alto : cancha.precio_120;
        this.reservaData.precio = Number(p || 0);
      } else {
        const p = isAlto && cancha.precio_90_alto > 0 ? cancha.precio_90_alto : cancha.precio_90;
        this.reservaData.precio = Number(p || 0);
      }
    }
  }

  get montoPorJugador(): number {
    const total = Number(this.reservaData.precio) || 0;
    let count = 1;
    if (this.reservaData.nombre_externo2) count++;
    if (this.reservaData.nombre_externo3) count++;
    if (this.reservaData.nombre_externo4) count++;
    return Math.round(total / (count || 1));
  }

  searchUsers() {
    if (!this.userSearchTerm || this.userSearchTerm.trim().length < 2) {
      this.searchResults = [];
      return;
    }

    this.isSearchingUsers = true;
    this.clubAdminService.getUsers(undefined, this.userSearchTerm.trim()).subscribe({
      next: (res) => {
        this.searchResults = res || [];
        this.isSearchingUsers = false;
      },
      error: () => {
        this.searchResults = [];
        this.isSearchingUsers = false;
      }
    });
  }

  selectUser(user: any) {
    this.reservaData.jugador_id = user.id;
    this.reservaData.nombre_externo = user.nombre;
    this.reservaData.telefono = user.telefono || '';
    this.searchResults = [];
    this.userSearchTerm = '';
  }

  assignAsGuest(nombre: string) {
    if (!nombre || !nombre.trim()) return;
    this.reservaData.jugador_id = 0;
    this.reservaData.nombre_externo = nombre.trim();
    this.userSearchTerm = '';
    this.searchResults = [];
  }

  confirmManualPlayer() {
    if (!this.manualNombre || !this.manualNombre.trim()) {
      this.showToast('Ingresa el nombre del cliente de paso', 'warning');
      return;
    }
    this.reservaData.jugador_id = 0;
    this.reservaData.nombre_externo = this.manualNombre.trim();
    this.reservaData.telefono = (this.manualTelefono || '').trim();
    this.manualNombre = '';
    this.manualTelefono = '';
  }

  clearSelectedUser() {
    this.reservaData.jugador_id = 0;
    this.reservaData.nombre_externo = '';
    this.reservaData.telefono = '';
    this.userSearchTerm = '';
    this.searchResults = [];
    this.manualNombre = '';
    this.manualTelefono = '';
  }

  async saveReserva() {
    if (this.reservaData.estado !== 'Bloqueada' && !this.reservaData.nombre_externo?.trim()) {
      this.showToast('Por favor ingresa el nombre del jugador titular', 'warning');
      return;
    }

    if (this.reservaData.estado === 'Bloqueada') {
      if (this.reservaData.tipo_bloqueo === 'dia_completo') {
        this.reservaData.hora_inicio = '07:00';
        this.reservaData.hora_fin = '23:59';
        this.reservaData.duracion = 1019;
      } else {
        if (!this.reservaData.hora_fin_bloqueo) {
          this.showToast('Por favor ingresa la hora de término del bloqueo', 'warning');
          return;
        }
        if (this.reservaData.hora_fin_bloqueo <= this.reservaData.hora_inicio) {
          this.showToast('La hora fin debe ser posterior a la hora de inicio', 'warning');
          return;
        }
        this.reservaData.hora_fin = this.reservaData.hora_fin_bloqueo;
        const [hS, mS] = this.reservaData.hora_inicio.split(':').map(Number);
        const [hE, mE] = this.reservaData.hora_fin.split(':').map(Number);
        let diff = (hE * 60 + mE) - (hS * 60 + mS);
        if (diff <= 0) diff = 90;
        this.reservaData.duracion = diff;
      }

      this.reservaData.nombre_externo = `BLOQUEO: ${this.reservaData.motivo_bloqueo || 'Mantenimiento'}`;
      this.reservaData.precio = 0;
      this.reservaData.pagado = 0;
      this.reservaData.jugador_id = null;
    }

    this.isSaving = true;

    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch (e) {}

    const payload = {
      ...this.reservaData,
      club_id: this.selectedClub?.id
    };

    const request = this.reservaData.id
      ? this.clubAdminService.updateReserva(payload)
      : this.clubAdminService.addReserva(payload);

    request.subscribe({
      next: (res) => {
        this.isSaving = false;
        if (res && res.success !== false) {
          const isBloqueo = this.reservaData.estado === 'Bloqueada';
          const msg = isBloqueo
            ? (this.reservaData.id ? 'Bloqueo actualizado' : 'Pista bloqueada correctamente')
            : (this.reservaData.id ? 'Reserva actualizada' : 'Reserva confirmada');
          this.showToast(msg, 'success');
          this.reservaSaved.emit(payload);
          this.closeModal(true);
        } else {
          this.showToast(res.message || 'No se pudo guardar la reserva', 'danger');
        }
      },
      error: (err) => {
        this.isSaving = false;
        console.error('Error al guardar reserva:', err);
        this.showToast('Error de conexión al guardar reserva', 'danger');
      }
    });
  }

  async cancelReserva() {
    if (!this.reservaData.id) return;
    const isBloqueo = this.reservaData.estado === 'Bloqueada';

    const alert = await this.alertCtrl.create({
      header: isBloqueo ? '¿Liberar esta pista bloqueada?' : '¿Liberar esta cancha?',
      message: isBloqueo
        ? 'Se eliminará el bloqueo administrativo y la pista volverá a estar disponible para reservas.'
        : 'Se eliminará la reserva y la pista quedará disponible para otros jugadores.',
      buttons: [
        { text: 'Volver', role: 'cancel' },
        {
          text: 'Liberar Pista',
          role: 'destructive',
          handler: () => {
            this.clubAdminService.cancelReserva(this.reservaData.id).subscribe({
              next: () => {
                this.showToast(isBloqueo ? 'Pista desbloqueada y disponible' : 'Cancha liberada exitosamente', 'success');
                this.closeModal(true);
              },
              error: () => {
                this.showToast('Error al liberar cancha', 'danger');
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }

  sendWhatsAppConfirmation() {
    const telefono = (this.reservaData.telefono || '').replace(/\D/g, '');
    const titular = this.reservaData.nombre_externo || 'Jugador';
    const cancha = this.canchas.find(c => Number(c.id) === Number(this.reservaData.cancha_id))?.nombre || 'Pista de Pádel';
    const fecha = this.reservaData.fecha;
    const hora = `${this.reservaData.hora_inicio} a ${this.reservaData.hora_fin}`;
    const club = this.selectedClub?.nombre || 'Club de Pádel';

    const mensaje = encodeURIComponent(
      `¡Hola ${titular}! 🎾 Confirmamos tu reserva en ${club}:\n\n` +
      `🏟️ *${cancha}*\n` +
      `📅 Fecha: ${fecha}\n` +
      `⏰ Horario: ${hora}\n` +
      `💰 Total: $${Number(this.reservaData.precio).toLocaleString('es-CL')}\n\n` +
      `¡Te esperamos en la cancha!`
    );

    const url = telefono ? `https://wa.me/${telefono}?text=${mensaje}` : `https://wa.me/?text=${mensaje}`;
    window.open(url, '_system');
  }

  closeModal(didUpdate: boolean = false) {
    this.close.emit(didUpdate);
  }

  async showToast(msg: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2500,
      position: 'top',
      color
    });
    await toast.present();
  }
}

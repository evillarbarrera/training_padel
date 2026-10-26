import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonicModule,
  NavController,
  ToastController,
  AlertController,
  ActionSheetController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  chevronBackOutline,
  chevronForwardOutline,
  chevronDownOutline,
  calendarOutline,
  addOutline,
  lockClosedOutline,
  checkmarkCircleOutline,
  alertCircleOutline,
  timeOutline,
  personOutline,
  refreshOutline,
  funnelOutline,
  tennisballOutline,
  closeCircleOutline,
  logoWhatsapp,
  sparklesOutline,
  copyOutline,
  closeOutline,
  ellipseOutline
} from 'ionicons/icons';
import { ClubAdminService } from '../../../services/club-admin.service';
import { ClubReservaModalComponent } from '../components/club-reserva-modal/club-reserva-modal.component';

@Component({
  selector: 'app-club-agenda-canchas',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ClubReservaModalComponent],
  templateUrl: './club-agenda-canchas.page.html',
  styleUrls: ['./club-agenda-canchas.page.scss']
})
export class ClubAgendaCanchasPage implements OnInit {
  userId: number = 0;
  clubes: any[] = [];
  selectedClub: any = null;

  canchas: any[] = [];
  selectedCanchaId: number = 0;
  activeCategoryFilter: string = 'all';

  selectedFecha: string = '';
  weekDays: any[] = [];

  reservas: any[] = [];
  slots: any[] = [];
  isLoading: boolean = false;

  // Modal Reserva
  isReservaModalOpen: boolean = false;
  modalInitialHora: string = '09:00';
  modalEditingReserva: any = null;

  // Modal Compartir Libres WhatsApp (como en la web)
  showWhatsAppModal: boolean = false;
  whatsappDays: { full: string; name: string; selected: boolean }[] = [];
  whatsappCanchas: { id: number; nombre: string; selected: boolean }[] = [];
  whatsappStartHour: string = '16:00';
  whatsappEndHour: string = '23:00';
  whatsappGeneratedMessage: string = '';
  whatsappLoading: boolean = false;
  timeSlots: string[] = [];

  constructor(
    private clubAdminService: ClubAdminService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController
  ) {
    addIcons({
      chevronBackOutline,
      chevronForwardOutline,
      chevronDownOutline,
      calendarOutline,
      addOutline,
      lockClosedOutline,
      checkmarkCircleOutline,
      alertCircleOutline,
      timeOutline,
      personOutline,
      refreshOutline,
      funnelOutline,
      tennisballOutline,
      closeCircleOutline,
      logoWhatsapp,
      sparklesOutline,
      copyOutline,
      closeOutline,
      ellipseOutline
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

  loadClubes() {
    this.isLoading = true;
    this.clubAdminService.getClubesAdmin(this.userId).subscribe({
      next: (res) => {
        this.clubes = res || [];
        if (this.clubes.length > 0) {
          const savedId = localStorage.getItem('selectedClubId');
          this.selectedClub = this.clubes.find(c => String(c.id) === String(savedId)) || this.clubes[0];
          this.loadCanchas();
        } else {
          this.isLoading = false;
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  get filteredCanchas(): any[] {
    if (!this.canchas || this.canchas.length === 0) return [];
    if (this.activeCategoryFilter === 'all') return this.canchas;
    return this.canchas.filter(c => {
      const meta = this.getCategoryMeta(c);
      return meta.grupo === this.activeCategoryFilter;
    });
  }

  getCategoryCount(grupo: string): number {
    if (!this.canchas) return 0;
    return this.canchas.filter(c => {
      const meta = this.getCategoryMeta(c);
      return meta.grupo === grupo;
    }).length;
  }

  getCategoryMeta(canchaOrCat: any): any {
    if (!canchaOrCat) return this.clubAdminService.getCategoryMeta('cancha_padel');
    let catId = '';
    if (typeof canchaOrCat === 'string') {
      catId = canchaOrCat;
    } else {
      catId = canchaOrCat.categoria || '';
      if (!catId && (canchaOrCat.tipo || canchaOrCat.nombre)) {
        const text = `${canchaOrCat.tipo || ''} ${canchaOrCat.nombre || ''}`.toLowerCase();
        if (text.includes('pool') || text.includes('billar') || text.includes('taca') || text.includes('futbolito') || text.includes('ping') || text.includes('juego')) {
          catId = 'mesa_pool';
        } else if (text.includes('quincho') || text.includes('asador') || text.includes('bbq') || text.includes('evento') || text.includes('salon')) {
          catId = 'quincho';
        } else if (text.includes('pickle')) {
          catId = 'cancha_pickleball';
        } else if (text.includes('maquina') || text.includes('lanzapelotas')) {
          catId = 'maquina_lanzapelotas';
        }
      }
    }
    return this.clubAdminService.getCategoryMeta(catId || 'cancha_padel');
  }

  setCategoryFilter(grupo: string) {
    this.activeCategoryFilter = grupo;
    const available = this.filteredCanchas;
    if (available.length > 0 && !available.some(c => c.id === this.selectedCanchaId)) {
      this.selectCancha(available[0].id);
    }
  }

  getCanchaNumber(cancha: any, index: number = 0): number | string {
    if (cancha?.numero) return cancha.numero;
    if (cancha?.nombre) {
      const match = cancha.nombre.match(/\d+/);
      if (match) return match[0];
    }
    return index + 1;
  }

  loadCanchas() {
    if (!this.selectedClub) return;
    this.clubAdminService.getCanchas(this.selectedClub.id).subscribe({
      next: (canchas) => {
        this.canchas = canchas || [];
        if (this.canchas.length > 0) {
          const available = this.filteredCanchas;
          const target = available.length > 0 ? available : this.canchas;
          if (!this.selectedCanchaId || !target.some(c => c.id === this.selectedCanchaId)) {
            this.selectedCanchaId = target[0].id;
          }
          this.loadReservas();
        } else {
          this.isLoading = false;
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  selectFecha(iso: string) {
    this.selectedFecha = iso;
    this.loadReservas();
  }

  selectCancha(canchaId: number) {
    this.selectedCanchaId = canchaId;
    this.buildTimeline();
  }

  loadReservas(event?: any) {
    if (!this.selectedClub) return;
    this.isLoading = true;

    this.clubAdminService.getClubReservas(this.selectedClub.id, this.selectedFecha).subscribe({
      next: (reservas) => {
        this.reservas = (reservas || []).filter(r => !this.isCancelada(r));
        this.buildTimeline();
        this.isLoading = false;
        if (event) event.target.complete();

        // Check queryParams for auto open modal
        this.checkAutoQueryParams();
      },
      error: (err) => {
        console.error('Error cargando reservas:', err);
        this.reservas = [];
        this.buildTimeline();
        this.isLoading = false;
        if (event) event.target.complete();
      }
    });
  }

  isCancelada(r: any): boolean {
    if (!r) return true;
    const est = (r.estado || '').toLowerCase().trim();
    return est === 'cancelada' || est === 'cancelado' || est === 'anulada' || est === 'anulado' || est === 'eliminada';
  }

  isAmericano(res: any): boolean {
    if (!res) return false;
    const estadoLower = (res.estado || '').toString().toLowerCase();
    const tipoLower = (res.tipo || '').toString().toLowerCase();
    const tipoReservaLower = (res.tipo_reserva || '').toString().toLowerCase();
    const reservaTipoLower = (res.reserva_tipo || '').toString().toLowerCase();
    const nombreExtLower = (res.nombre_externo || '').toString().toLowerCase();
    const jugadorNomLower = (res.jugador_nombre || '').toString().toLowerCase();

    return (res.torneo_id && Number(res.torneo_id) > 0) ||
           (res.torneo_americano_id && Number(res.torneo_americano_id) > 0) ||
           estadoLower.includes('americano') ||
           tipoLower.includes('americano') ||
           tipoReservaLower.includes('americano') ||
           reservaTipoLower.includes('americano') ||
           nombreExtLower.includes('americano') ||
           jugadorNomLower.includes('americano');
  }

  checkAutoQueryParams() {
    const qp = this.route.snapshot.queryParams;
    if (qp['autoNew'] === '1') {
      this.openNewReservaModal('19:00');
    } else if (qp['autoBlock'] === '1') {
      this.openNewReservaModal('09:00', true);
    }
  }

  buildTimeline() {
    if (!this.selectedCanchaId) {
      this.slots = [];
      return;
    }

    const cancha = this.canchas.find(c => Number(c.id) === Number(this.selectedCanchaId));
    const reservasCancha = this.reservas.filter(r => Number(r.cancha_id) === Number(this.selectedCanchaId) && !this.isCancelada(r));

    // Generar franjas estándar del día (de 08:00 a 23:30 en bloques de 90 min)
    const baseHours = [
      '08:00', '09:30', '11:00', '12:30', '14:00', '15:30',
      '17:00', '18:30', '20:00', '21:30', '23:00'
    ];

    const slotsList: any[] = [];

    baseHours.forEach(hStart => {
      const [h, m] = hStart.split(':').map(Number);
      const totalMinEnd = (h * 60 + m) + 90;
      const hEnd = Math.floor(totalMinEnd / 60);
      const mEnd = totalMinEnd % 60;
      const hEndStr = `${String(hEnd).padStart(2, '0')}:${String(mEnd).padStart(2, '0')}`;

      // Verificar si hay alguna reserva que se superponga con esta franja
      const matchingReserva = reservasCancha.find(r => {
        const rStart = (r.hora_inicio || '').substring(0, 5);
        const rEnd = (r.hora_fin || '').substring(0, 5);
        // Coincide si inicia en esta hora o cubre el intervalo
        return (rStart >= hStart && rStart < hEndStr) || (hStart >= rStart && hStart < rEnd);
      });

      // Calcular precio de la franja según tarifa alta/baja
      let precioSugerido = 0;
      if (cancha) {
        const hInicioAlto = (cancha.hora_inicio_alto || '18:00').substring(0, 5);
        const isAlto = (hStart >= hInicioAlto);
        precioSugerido = (isAlto && cancha.precio_90_alto > 0) ? cancha.precio_90_alto : (cancha.precio_90 || 16000);
      }

      slotsList.push({
        horaInicio: matchingReserva ? matchingReserva.hora_inicio.substring(0, 5) : hStart,
        horaFin: matchingReserva ? matchingReserva.hora_fin.substring(0, 5) : hEndStr,
        isOccupied: !!matchingReserva,
        isBlocked: matchingReserva?.estado === 'Bloqueada',
        reserva: matchingReserva || null,
        precioSugerido
      });
    });

    this.slots = slotsList;
  }

  get selectedCanchaObj(): any {
    return this.canchas.find(c => Number(c.id) === Number(this.selectedCanchaId));
  }

  onSlotClick(slot: any) {
    if (!slot) return;
    if (!slot.isOccupied) {
      this.openNewReservaModal(slot.horaInicio);
    } else {
      this.openEditReservaModal(slot.reserva);
    }
  }

  openNewReservaModal(horaInicio: string, asBlock: boolean = false) {
    this.modalEditingReserva = asBlock ? { estado: 'Bloqueada', hora_inicio: horaInicio } : null;
    this.modalInitialHora = horaInicio;
    this.isReservaModalOpen = true;
  }

  openEditReservaModal(reserva: any) {
    this.modalEditingReserva = reserva;
    this.isReservaModalOpen = true;
  }

  onReservaModalClose(didUpdate: boolean) {
    this.isReservaModalOpen = false;
    this.modalEditingReserva = null;
    if (didUpdate) {
      this.loadReservas();
    }
  }

  get currentCanchaIndex(): number {
    const list = this.filteredCanchas;
    if (!list || list.length === 0) return 0;
    const idx = list.findIndex(c => c.id === this.selectedCanchaId);
    return idx >= 0 ? idx : 0;
  }

  get isFirstCancha(): boolean {
    const list = this.filteredCanchas;
    if (!list || list.length <= 1) return true;
    return list[0]?.id === this.selectedCanchaId;
  }

  get isLastCancha(): boolean {
    const list = this.filteredCanchas;
    if (!list || list.length <= 1) return true;
    return list[list.length - 1]?.id === this.selectedCanchaId;
  }

  prevCancha() {
    const list = this.filteredCanchas;
    const idx = list.findIndex(c => c.id === this.selectedCanchaId);
    if (idx > 0) {
      this.selectCancha(list[idx - 1].id);
    }
  }

  nextCancha() {
    const list = this.filteredCanchas;
    const idx = list.findIndex(c => c.id === this.selectedCanchaId);
    if (idx >= 0 && idx < list.length - 1) {
      this.selectCancha(list[idx + 1].id);
    }
  }

  formatCanchaName(name: string): string {
    if (!name) return 'Pista';
    return name.replace(/_+/g, ' · ').trim();
  }

  getCanchaShortLabel(cancha: any, index: number = 0): string {
    if (!cancha || !cancha.nombre) return `P${index + 1}`;
    const clean = cancha.nombre.replace(/_+/g, ' ').trim();
    // Extraer sponsor o palabra distintiva si existe (ej: "Pista 1 LAMATEK" -> "LAMATEK")
    const match = clean.match(/(?:pista|cancha)\s*\d*\s*[-·:]?\s*(.*)/i);
    if (match && match[1] && match[1].trim().length > 0) {
      return match[1].trim();
    }
    return clean;
  }

  async openCanchaPickerActionSheet() {
    const list = this.filteredCanchas;
    if (list.length <= 1) return;

    const buttons = list.map((c, i) => ({
      text: `Pista ${this.getCanchaNumber(c, i)}: ${this.formatCanchaName(c.nombre)}`,
      icon: c.id === this.selectedCanchaId ? 'checkmark-circle-outline' : 'tennisball-outline',
      cssClass: c.id === this.selectedCanchaId ? 'cancha-active-btn' : '',
      handler: () => {
        this.selectCancha(c.id);
      }
    }));

    buttons.push({
      text: 'Cancelar',
      icon: 'close-circle-outline',
      role: 'cancel',
      handler: () => {}
    } as any);

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccionar Pista',
      subHeader: `${list.length} disponibles en ${this.selectedClub?.nombre || 'el club'}`,
      cssClass: 'nike-action-sheet',
      buttons
    });

    await actionSheet.present();
  }

  generateTimeSlots() {
    const slots: string[] = [];
    for (let i = 7; i <= 23; i++) {
      slots.push(`${String(i).padStart(2, '0')}:00`);
      slots.push(`${String(i).padStart(2, '0')}:30`);
    }
    slots.push('24:00');
    this.timeSlots = slots;
  }

  openWhatsAppModal() {
    if (!this.selectedClub) return;

    this.whatsappDays = this.weekDays.map(d => ({
      full: d.iso,
      name: `${d.label.toUpperCase()} ${d.dayNum}`,
      selected: d.iso === this.selectedFecha
    }));

    this.whatsappCanchas = this.canchas.map((c, i) => ({
      id: c.id,
      nombre: this.formatCanchaName(c.nombre) || `Pista ${i + 1}`,
      selected: true
    }));

    if (!this.timeSlots || this.timeSlots.length === 0) {
      this.generateTimeSlots();
    }

    this.whatsappStartHour = '16:00';
    this.whatsappEndHour = '23:00';
    this.whatsappGeneratedMessage = '';
    this.showWhatsAppModal = true;

    // Generar disponibilidad de inmediato
    this.generateWhatsAppMessage();
  }

  generateWhatsAppMessage() {
    const selectedDays = this.whatsappDays.filter(d => d.selected);
    const selectedCanchas = this.whatsappCanchas.filter(c => c.selected);

    if (selectedDays.length === 0) {
      this.presentToast('Selecciona al menos un día para informar.', 'warning');
      return;
    }
    if (selectedCanchas.length === 0) {
      this.presentToast('Selecciona al menos una pista.', 'warning');
      return;
    }

    this.whatsappLoading = true;

    const calls = selectedDays.map(d =>
      this.clubAdminService.getClubReservas(this.selectedClub.id, d.full).pipe(
        catchError(() => of([]))
      )
    );

    forkJoin(calls).subscribe({
      next: (results: any[][]) => {
        this.whatsappLoading = false;

        let message = `*🏆 HORARIOS DISPONIBLES - ${(this.selectedClub?.nombre || 'CLUB').toUpperCase()} 🏆*\n`;
        message += `_¡Reserva tu partido ahora!_\n\n`;

        const [startH, startM] = this.whatsappStartHour.split(':').map(Number);
        const startMinutesLimit = startH * 60 + startM;

        const [endH, endM] = this.whatsappEndHour.split(':').map(Number);
        const endMinutesLimit = endH * 60 + endM;

        selectedDays.forEach((day, index) => {
          const dayReservas = results[index] || [];
          message += `*📅 ${day.name}*\n`;

          let dayHasAvailability = false;

          selectedCanchas.forEach(cancha => {
            const freeSlots: number[] = [];

            for (let minutes = startMinutesLimit; minutes < endMinutesLimit; minutes += 30) {
              const slotEnd = minutes + 30;

              const isOccupied = dayReservas.some(r => {
                if (Number(r.cancha_id) !== Number(cancha.id)) return false;
                if (this.isCancelada(r)) return false;

                const [hStart, mStart] = (r.hora_inicio || '00:00').substring(0, 5).split(':').map(Number);
                const startMinutes = hStart * 60 + mStart;

                const [hEnd, mEnd] = (r.hora_fin || '00:00').substring(0, 5).split(':').map(Number);
                let endMinutes = (hEnd === 24 || (hEnd === 0 && mEnd === 0) || hEnd < hStart) ? 1440 : (hEnd * 60 + mEnd);

                return startMinutes < slotEnd && endMinutes > minutes;
              });

              if (!isOccupied) {
                freeSlots.push(minutes);
              }
            }

            const blocks: { start: number; end: number }[] = [];
            if (freeSlots.length > 0) {
              let blockStart = freeSlots[0];
              let expectedNext = blockStart + 30;

              for (let i = 1; i < freeSlots.length; i++) {
                if (freeSlots[i] === expectedNext) {
                  expectedNext += 30;
                } else {
                  blocks.push({ start: blockStart, end: expectedNext });
                  blockStart = freeSlots[i];
                  expectedNext = blockStart + 30;
                }
              }
              blocks.push({ start: blockStart, end: expectedNext });
            }

            // Filtrar bloques de al menos 60 minutos
            const validBlocks = blocks.filter(b => (b.end - b.start) >= 60);

            if (validBlocks.length > 0) {
              dayHasAvailability = true;
              const blockTexts = validBlocks.map(b => {
                const sh = String(Math.floor(b.start / 60)).padStart(2, '0');
                const sm = String(b.start % 60).padStart(2, '0');
                const eh = String(Math.floor(b.end / 60)).padStart(2, '0');
                const em = String(b.end % 60).padStart(2, '0');
                return `${sh}:${sm} a ${eh}:${em}`;
              });
              message += `• *${cancha.nombre}:* ${blockTexts.join(' | ')}\n`;
            }
          });

          if (!dayHasAvailability) {
            message += `• _Sin horarios disponibles en este rango_\n`;
          }
          message += `\n`;
        });

        message += `📱 *Reserva vía web o al whatsapp.*\n`;
        this.whatsappGeneratedMessage = message;
      },
      error: (err) => {
        this.whatsappLoading = false;
        console.error('Error al generar disponibilidad WhatsApp:', err);
        this.presentToast('No se pudieron consultar los horarios de reserva.', 'danger');
      }
    });
  }

  async copyWhatsAppMessage() {
    if (!this.whatsappGeneratedMessage) return;

    let copied = false;
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(this.whatsappGeneratedMessage);
        copied = true;
      } catch (e) {
        copied = false;
      }
    }

    if (!copied) {
      const textarea = document.createElement('textarea');
      textarea.value = this.whatsappGeneratedMessage;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        copied = document.execCommand('copy');
      } catch (err) {}
      document.body.removeChild(textarea);
    }

    this.presentToast('Mensaje copiado al portapapeles', 'success');
  }

  sendWhatsAppMessage() {
    if (!this.whatsappGeneratedMessage) return;
    const encoded = encodeURIComponent(this.whatsappGeneratedMessage);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, '_blank');
  }

  async presentToast(message: string, color: 'success' | 'warning' | 'danger' = 'success') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: color === 'success' ? 'dark' : (color === 'warning' ? 'warning' : 'danger'),
      position: 'bottom'
    });
    await toast.present();
  }

  goBack() {
    this.navCtrl.back();
  }
}

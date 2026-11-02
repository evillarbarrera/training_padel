import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular/standalone';
import {
    IonContent, IonButton, IonItem, IonLabel, IonIcon, IonFab, IonFabButton,
    IonSpinner, IonSegment, IonSegmentButton, IonSelect, IonSelectOption,
    IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonSearchbar, IonCheckbox
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    chevronBackOutline, chevronForwardOutline, calendarOutline, timeOutline, checkmarkCircleOutline,
    closeOutline, personCircleOutline, addCircleOutline, trashOutline, createOutline, addOutline,
    locationOutline, alertCircleOutline, cubeOutline, schoolOutline, repeatOutline, cardOutline,
    ticketOutline, walletOutline, searchOutline, peopleOutline, closeCircle, swapHorizontalOutline,
    checkmarkDoneOutline, informationCircleOutline, sparklesOutline, chevronDownOutline, eyeOutline,
    businessOutline, helpCircleOutline
} from 'ionicons/icons';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../../services/notification.service';

registerLocaleData(localeEs);

@Component({
    selector: 'app-entrenador-agendar',
    templateUrl: './entrenador-agendar.page.html',
    styleUrls: ['./entrenador-agendar.page.scss'],
    standalone: true,
    imports: [
        CommonModule, FormsModule, IonContent, IonButton, IonItem, IonLabel,
        IonIcon, IonFab, IonFabButton, IonSpinner, IonSegment, IonSegmentButton,
        IonSelect, IonSelectOption, IonModal, IonHeader, IonToolbar, IonTitle,
        IonButtons, IonSearchbar, IonCheckbox
    ]
})
export class EntrenadorAgendarPage implements OnInit {
    @ViewChild('bookingModal') bookingModal!: IonModal;
    @ViewChild('detailModal') detailModal!: IonModal;

    entrenadorId = Number(localStorage.getItem('userId'));
    isLoading = false;

    // Horas disponibles cada 30 minutos (07:00 a 22:30)
    hours: string[] = [];

    // Calendario y Días
    diasAgenda: Date[] = [];
    diaSeleccionado: string = '';
    diasMap: { [key: string]: Date } = {};
    slotsDisponibles: any[] = [];
    cargandoHorarios: boolean = false;
    slotsPorDia: { [key: string]: any[] } = {};
    disponibilidadPublicaSet: Set<string> = new Set(); // Slots marcados en disponibilidad para clientes

    // Filtros de vista
    filtroPeriodo: 'todos' | 'manana' | 'tarde' | 'noche' = 'todos';
    
    // Clubes y Canchas
    clubesDisponibles: any[] = [];
    selectedClubId: number | null = null;
    canchasDisponibles: any[] = [];
    selectedCanchaId: number | null = null;
    cargandoCanchas: boolean = false;
    showAssignCourtInline: boolean = false;

    // Alumnos y Filtro
    alumnos: any[] = [];
    filtroAlumnos: string = '';
    packsDisponibles: any[] = [];
    packsParaTipoList: any[] = [];
    mallas: any[] = [];

    // Modal de Agendamiento
    isBookingModalOpen = false;
    selectedSlot: any = null;
    recurrencia: number = 1;
    duracionMinutos: number = 60; // Base: 1 hora
    duracionesDisponibles: { label: string; value: number; desc: string }[] = [
        { label: '30 min', value: 30, desc: 'Media hora' },
        { label: '60 min', value: 60, desc: '1 hora (Base)' },
        { label: '90 min', value: 90, desc: '1h 30m' },
        { label: '120 min', value: 120, desc: '2 horas' }
    ];

    // Búsqueda rápida de participantes para grupo
    searchQueryMini: string = '';
    searchResultsMini: any[] = [];
    isSearchingMini: boolean = false;
    participantesGrupo: any[] = [];

    // Modalidades
    tipoClaseSeleccionado: 'individual' | 'multijugador' | 'grupal' = 'individual';
    alumnosSeleccionados: any[] = [];
    alumnoSeleccionado: any = null;
    mostrarOpcionPack = false;
    mostrarSelectorPackManual = false;
    packAAsignar: any = null;
    packsGrupalesDisponibles: any[] = [];
    packGrupalSeleccionado: any = null;
    alumnosPacks: any[] = [];
    cargandoPacks = false;

    // Mallas y Planificación
    planificacionId: number | null = null;
    claseMallaId: number | null = null;
    categoriaFiltro: 'adulto' | 'menor' | 'todos' = 'todos';
    mallasFiltradas: any[] = [];
    clasesDisponibles: any[] = [];
    contenidoClase: string = '';
    selectedClaseToPreview: any = null;

    // Modal de Detalle
    isDetailModalOpen = false;
    isEditingDetail = false;

    constructor(
        public router: Router,
        private entrenamientoService: EntrenamientoService,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private notificationService: NotificationService
    ) {
        // Inicializar intervalos de 30 minutos desde las 07:00 hasta las 22:30
        for (let i = 7; i <= 22; i++) {
            const h = i.toString().padStart(2, '0');
            this.hours.push(`${h}:00`);
            this.hours.push(`${h}:30`);
        }

        addIcons({
            chevronBackOutline, chevronForwardOutline, calendarOutline, timeOutline, checkmarkCircleOutline,
            closeOutline, personCircleOutline, addCircleOutline, trashOutline, createOutline, addOutline,
            locationOutline, alertCircleOutline, cubeOutline, schoolOutline, repeatOutline, cardOutline,
            ticketOutline, walletOutline, searchOutline, peopleOutline, closeCircle, swapHorizontalOutline,
            checkmarkDoneOutline, informationCircleOutline, sparklesOutline, chevronDownOutline, eyeOutline,
            businessOutline, helpCircleOutline
        });
    }

    ngOnInit() {
        this.generarDias();
        this.loadBasics();
        this.loadDisponibilidad();
    }

    // --- GENERACIÓN DE DÍAS ---
    generarDias() {
        const today = new Date();
        this.diasAgenda = [];
        this.diasMap = {};

        // 30 días atrás y 30 días adelante para máxima flexibilidad
        for (let i = -30; i <= 30; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            const dateStr = this.formatDate(d);
            this.diasAgenda.push(d);
            this.diasMap[dateStr] = d;
        }

        this.diaSeleccionado = this.formatDate(today);

        // Auto-scroll al día actual
        setTimeout(() => {
            const activeBtn = document.querySelector('.day-pill.active');
            if (activeBtn) {
                activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }, 400);
    }

    irAHoy() {
        const todayStr = this.formatDate(new Date());
        this.diaSeleccionado = todayStr;
        this.actualizarSlotsVisibles();
        setTimeout(() => {
            const activeBtn = document.querySelector('.day-pill.active');
            if (activeBtn) {
                activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }, 150);
    }

    cambiarDia(offset: number) {
        if (!this.diaSeleccionado) return;
        const [y, m, d] = this.diaSeleccionado.split('-').map(Number);
        const curDate = new Date(y, m - 1, d);
        curDate.setDate(curDate.getDate() + offset);
        this.diaSeleccionado = this.formatDate(curDate);
        this.actualizarSlotsVisibles();

        setTimeout(() => {
            const activeBtn = document.querySelector('.day-pill.active');
            if (activeBtn) {
                activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }, 150);
    }

    isToday(dateStr: string): boolean {
        return dateStr === this.formatDate(new Date());
    }

    getFechaSeleccionadaDate(): Date {
        if (this.diasMap[this.diaSeleccionado]) {
            return this.diasMap[this.diaSeleccionado];
        }
        const [y, m, d] = this.diaSeleccionado.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    // --- CARGA DE DATOS BÁSICOS ---
    loadBasics() {
        this.entrenamientoService.getAlumnosGlobales(this.entrenadorId).subscribe({
            next: (res: any[]) => {
                const uniqueAlumnos = new Map();
                (res || []).forEach((a: any) => {
                    if (!uniqueAlumnos.has(a.jugador_id || a.id)) {
                        const foto = this.getFotoUrl(a);
                        const restantes = Number(a.sesiones_restantes || 0);
                        const reservadas = Number(a.sesiones_reservadas || 0);
                        const pNombre = a.pack_nombre || (a.pack_nombres && !a.pack_nombres.includes(',') ? a.pack_nombres : 'Sin pack activo');

                        uniqueAlumnos.set(a.jugador_id || a.id, {
                            ...a,
                            jugador_id: a.jugador_id || a.id,
                            jugador_foto: foto,
                            pack_nombre: pNombre,
                            sesiones_restantes: restantes,
                            sesiones_reservadas: reservadas,
                            creditos_reales: Number(a.creditos_reales || (restantes - reservadas))
                        });
                    }
                });
                this.alumnos = Array.from(uniqueAlumnos.values());
            },
            error: (err: any) => console.error('Error cargando alumnos:', err)
        });

        this.entrenamientoService.getPacks(this.entrenadorId).subscribe({
            next: (res) => {
                this.packsDisponibles = res || [];
                this.actualizarPacksParaTipo();
            },
            error: (err) => console.error('Error cargando packs:', err)
        });

        this.entrenamientoService.getMallas(this.entrenadorId).subscribe({
            next: (res) => {
                this.mallas = res || [];
                this.filtrarMallas();
            },
            error: (err) => console.error('Error cargando mallas:', err)
        });
    }

    // --- CARGA DE DISPONIBILIDAD Y AGENDA ---
    loadDisponibilidad() {
        this.cargandoHorarios = true;
        forkJoin({
            dispo: this.entrenamientoService.getDisponibilidadEntrenador(this.entrenadorId),
            agenda: this.entrenamientoService.getReservasEntrenador(this.entrenadorId),
            clubes: this.entrenamientoService.getClubes()
        }).subscribe({
            next: (res: any) => {
                // 1. Clubes
                this.clubesDisponibles = (res.clubes || []).filter((c: any) => c.activo == 1 || c.activo === null || c.activo === undefined);
                const storedClub = localStorage.getItem('selectedClubId');
                if (storedClub && this.clubesDisponibles.some(c => Number(c.id) === Number(storedClub))) {
                    this.selectedClubId = Number(storedClub);
                } else if (this.clubesDisponibles.length > 0 && !this.selectedClubId) {
                    this.selectedClubId = Number(this.clubesDisponibles[0].id);
                }

                // 2. Disponibilidad configurada (para los clientes) -> La guardamos como indicador visual
                this.slotsPorDia = {};
                this.disponibilidadPublicaSet.clear();

                (res.dispo || []).forEach((s: any) => {
                    const fecha = this.extractDate(s.fecha_inicio);
                    const startH = this.extractTime(s.fecha_inicio);
                    const endH = s.fecha_fin ? this.extractTime(s.fecha_fin) : null;
                    if (endH && endH > startH) {
                        let cur = startH;
                        while (cur < endH) {
                            this.disponibilidadPublicaSet.add(`${fecha}_${cur}`);
                            cur = this.addMinutesToTime(cur, 30);
                        }
                    } else {
                        this.disponibilidadPublicaSet.add(`${fecha}_${startH}`);
                    }
                });

                // 3. Reservas existentes en el calendario
                this.mergeAgenda(res.agenda);
                this.actualizarSlotsVisibles();
                this.cargandoHorarios = false;
            },
            error: (err) => {
                this.cargandoHorarios = false;
                console.error('Error cargando agenda:', err);
                this.actualizarSlotsVisibles();
            }
        });
    }

    onDuracionChange(duracion: number) {
        this.duracionMinutos = duracion;
        if (this.selectedClubId && this.selectedSlot) {
            this.cargarCanchasDisponibles();
        }
    }

    mergeAgenda(agendaData: any) {
        if (!agendaData) return;

        // A) Reservas tradicionales
        const reservas = agendaData.reservas_tradicionales || [];
        reservas.forEach((a: any) => {
            const fecha = a.fecha || this.extractDate(a.fecha_inicio);
            const h = a.hora_inicio ? a.hora_inicio.slice(0, 5) : (this.extractTime(a.fecha_inicio) || '08:00');
            let duracion = Number(a.duracion_calculada || a.duracion || a.duracion_sesion_min || 0);
            if (!duracion && a.hora_fin) {
                const [h1, m1] = h.split(':').map(Number);
                const [h2, m2] = a.hora_fin.slice(0, 5).split(':').map(Number);
                duracion = (h2 * 60 + m2) - (h1 * 60 + m1);
            }
            if (!duracion || duracion <= 0) duracion = 60;
            const numSlots = Math.max(1, Math.round(duracion / 30));
            const horaFin = a.hora_fin ? a.hora_fin.slice(0, 5) : this.addMinutesToTime(h, duracion);

            for (let i = 0; i < numSlots; i++) {
                const slotHora = this.addMinutesToTime(h, i * 30);
                this.applyToSlot(fecha, slotHora, {
                    ...a,
                    is_reserva_start: i === 0,
                    is_reserva_continuation: i > 0,
                    is_reserva_end: i === numSlots - 1,
                    hora_inicio_reserva: h,
                    hora_fin_reserva: horaFin,
                    duracion_total_min: duracion,
                    slot_index_in_reserva: i
                });
            }
        });

        // B) Packs grupales / Sesiones colectivas
        const templates = agendaData.packs_grupales || [];
        templates.forEach((t: any) => {
            const hora = t.hora_inicio ? t.hora_inicio.slice(0, 5) : '08:00';
            const duracion = Number(t.duracion_original || t.duracion_calculada || t.duracion || 60);
            const numSlots = Math.max(1, Math.round(duracion / 30));
            const horaFin = this.addMinutesToTime(hora, duracion);

            if (t.fecha) {
                for (let i = 0; i < numSlots; i++) {
                    const slotHora = this.addMinutesToTime(hora, i * 30);
                    this.applyToSlot(t.fecha, slotHora, {
                        ...t,
                        reserva_id: t.pack_id,
                        reserva_tipo: 'Entrenamiento Grupal',
                        jugador_nombre: t.jugador_nombre || 'Abierto para inscripción',
                        is_reserva_start: i === 0,
                        is_reserva_continuation: i > 0,
                        is_reserva_end: i === numSlots - 1,
                        hora_inicio_reserva: hora,
                        hora_fin_reserva: horaFin,
                        duracion_total_min: duracion,
                        slot_index_in_reserva: i
                    });
                }
            } else {
                this.diasAgenda.forEach(date => {
                    const dayIndex = date.getDay();
                    const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase();
                    const dayRef = (t.dia_semana != null) ? t.dia_semana.toString().toLowerCase() : '';
                    const daysMap = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
                    if (dayRef === dayIndex.toString() || dayRef === dayName || dayRef === daysMap[dayIndex]) {
                        const fechaStr = this.formatDate(date);
                        for (let i = 0; i < numSlots; i++) {
                            const slotHora = this.addMinutesToTime(hora, i * 30);
                            this.applyToSlot(fechaStr, slotHora, {
                                ...t,
                                reserva_id: t.pack_id,
                                reserva_tipo: 'Entrenamiento Grupal (Recurrente)',
                                jugador_nombre: 'Clase Grupal',
                                is_reserva_start: i === 0,
                                is_reserva_continuation: i > 0,
                                is_reserva_end: i === numSlots - 1,
                                hora_inicio_reserva: hora,
                                hora_fin_reserva: horaFin,
                                duracion_total_min: duracion,
                                slot_index_in_reserva: i
                            });
                        }
                    }
                });
            }
        });
    }

    applyToSlot(fecha: string, hora: string, data: any) {
        if (!this.slotsPorDia[fecha]) this.slotsPorDia[fecha] = [];
        let existing = this.slotsPorDia[fecha].find(s => s.time === hora);

        const slotUpdate = {
            ocupado: true,
            is_reserva_start: data.is_reserva_start !== undefined ? data.is_reserva_start : true,
            is_reserva_continuation: data.is_reserva_continuation || false,
            is_reserva_end: data.is_reserva_end !== undefined ? data.is_reserva_end : true,
            hora_inicio_reserva: data.hora_inicio_reserva || hora,
            hora_fin_reserva: data.hora_fin_reserva || this.addMinutesToTime(data.hora_inicio_reserva || hora, 60),
            duracion_total_min: data.duracion_total_min || 60,
            reserva_id: data.reserva_id || data.id,
            pack_id: data.pack_id || data.id,
            jugador_id: data.jugador_id,
            jugador_nombre: data.jugador_nombre || data.nombre_jugador || 'Alumno',
            jugador_foto: this.getFotoUrl(data),
            reserva_tipo: data.pack_nombre || data.tipo || data.reserva_tipo || 'Clase',
            tipo: data.tipo || 'individual',
            club_id: data.club_id,
            club_nombre: data.club_nombre,
            cancha_id: data.cancha_id,
            cancha_nombre: data.cancha_nombre,
            requiere_cancha: data.requiere_cancha || (!data.cancha_id && data.club_permite_canchas),
            malla_id: data.malla_id,
            clase_id: data.clase_id,
            malla_nombre: data.malla_nombre,
            clase_titulo: data.clase_titulo,
            clase_objetivo: data.clase_objetivo,
            clase_calentamiento: data.clase_calentamiento,
            clase_drills: data.clase_drills,
            inscritos: data.inscritos || [],
            capacidad_maxima: data.capacidad_maxima || 6,
            cupos_ocupados: data.cupos_ocupados || (data.inscritos ? data.inscritos.length : 1)
        };

        if (existing) {
            Object.assign(existing, slotUpdate);
        } else {
            this.slotsPorDia[fecha].push({
                fecha_inicio: `${fecha} ${hora}:00`,
                time: hora,
                ...slotUpdate
            });
        }
    }

    // Genera la lista final de slots de 30 minutos para el día seleccionado,
    // garantizando que todos los bloques de 30 minutos existan sin depender de disponibilidad.
    actualizarSlotsVisibles() {
        const slotsExistentes = this.slotsPorDia[this.diaSeleccionado] || [];
        const resultado: any[] = [];

        this.hours.forEach(hour => {
            // Filtrar según periodo del día
            if (this.filtroPeriodo === 'manana' && hour >= '13:00') return;
            if (this.filtroPeriodo === 'tarde' && (hour < '13:00' || hour >= '18:00')) return;
            if (this.filtroPeriodo === 'noche' && hour < '18:00') return;

            const ocupadoSlot = slotsExistentes.find(s => s.time === hour);
            if (ocupadoSlot) {
                // Si el entrenador filtró por club, solo filtrar si la reserva tiene club explícito distinto
                if (this.selectedClubId && ocupadoSlot.club_id && Number(ocupadoSlot.club_id) !== Number(this.selectedClubId)) {
                    // Se muestra con indicador de otro club
                    resultado.push({ ...ocupadoSlot, otroClub: true });
                } else {
                    resultado.push(ocupadoSlot);
                }
            } else {
                // Bloque libre cada 30 minutos listo para ser agendado por el entrenador
                const esPublico = this.disponibilidadPublicaSet.has(`${this.diaSeleccionado}_${hour}`);
                resultado.push({
                    fecha_inicio: `${this.diaSeleccionado} ${hour}:00`,
                    time: hour,
                    ocupado: false,
                    is_virtual: true,
                    is_publico: esPublico,
                    club_id: this.selectedClubId || 1
                });
            }
        });

        this.slotsDisponibles = resultado;
    }

    onDiaChange(dateStr: string) {
        this.diaSeleccionado = dateStr;
        this.actualizarSlotsVisibles();
    }

    setFiltroPeriodo(periodo: 'todos' | 'manana' | 'tarde' | 'noche') {
        this.filtroPeriodo = periodo;
        this.actualizarSlotsVisibles();
    }

    onClubFilterChange(clubId: number | null) {
        this.selectedClubId = clubId;
        if (clubId) {
            localStorage.setItem('selectedClubId', String(clubId));
        }
        this.actualizarSlotsVisibles();
    }

    getReservasCount(dateStr: string): number {
        const slots = this.slotsPorDia[dateStr];
        if (!slots) return 0;
        return slots.filter((s: any) => s.ocupado && (s.is_reserva_start || !s.is_reserva_continuation)).length;
    }

    // --- ACCIÓN: SELECCIONAR SLOT PARA AGENDAR O VER DETALLE ---
    seleccionarSlot(slot: any) {
        if (slot.ocupado) {
            const effectiveHour = slot.hora_inicio_reserva || slot.time;
            this.selectedSlot = { slot, dateStr: this.diaSeleccionado, hour: effectiveHour };
            
            // Asignar club actual de la reserva
            let cId = Number(slot.club_id || 0);
            if (!cId && slot.club_nombre && this.clubesDisponibles.length > 0) {
                const found = this.clubesDisponibles.find(c => c.nombre?.toLowerCase().trim() === slot.club_nombre?.toLowerCase().trim());
                if (found) cId = Number(found.id);
            }
            if (!cId && this.clubesDisponibles.length > 0) {
                cId = Number(this.clubesDisponibles[0].id);
            }
            this.selectedClubId = cId;
            this.selectedCanchaId = slot.cancha_id ? Number(slot.cancha_id) : null;
            this.participantesGrupo = slot.inscritos || [];
            this.showAssignCourtInline = false;
            this.isEditingDetail = false;

            if (this.selectedClubId) {
                this.cargarCanchasDisponibles();
            }
            this.isDetailModalOpen = true;
        } else {
            // Abrir formulario de agendamiento para este horario de 30 minutos
            this.selectedSlot = { slot, dateStr: this.diaSeleccionado, hour: slot.time };
            this.resetBookingState();

            if (slot.club_id) {
                this.selectedClubId = Number(slot.club_id);
            } else if (!this.selectedClubId && this.clubesDisponibles.length > 0) {
                this.selectedClubId = Number(this.clubesDisponibles[0].id);
            }
            this.cargarCanchasDisponibles();

            this.isBookingModalOpen = true;
        }
    }

    // --- CANCHAS DISPONIBLES ---
    cargarCanchasDisponibles(): void {
        if (!this.selectedClubId || !this.selectedSlot) {
            this.canchasDisponibles = [];
            this.selectedCanchaId = null;
            return;
        }

        this.cargandoCanchas = true;
        const fecha = this.selectedSlot.dateStr;
        const hIni = this.selectedSlot.hour;
        const hFin = this.getHoraFin(hIni, this.duracionMinutos);

        this.entrenamientoService.getCanchasDisponibles(this.selectedClubId, fecha, hIni, hFin).subscribe({
            next: (canchas: any[]) => {
                this.canchasDisponibles = canchas || [];
                this.cargandoCanchas = false;

                if (this.selectedSlot?.slot?.cancha_id) {
                    this.selectedCanchaId = Number(this.selectedSlot.slot.cancha_id);
                } else {
                    const freeCourt = this.canchasDisponibles.find(c => c.disponible);
                    this.selectedCanchaId = freeCourt ? freeCourt.id : (this.canchasDisponibles.length > 0 ? this.canchasDisponibles[0].id : null);
                }
            },
            error: (err) => {
                console.error('Error cargando canchas disponibles:', err);
                this.cargandoCanchas = false;
                this.canchasDisponibles = [];
            }
        });
    }

    asignarCanchaAReserva(canchaId: any) {
        if (!this.selectedSlot?.slot) return;
        const resId = this.selectedSlot.slot.reserva_id || this.selectedSlot.slot.id;
        if (!resId) return;

        const targetCanchaId = canchaId ? Number(canchaId) : 0;
        this.isLoading = true;

        this.entrenamientoService.asignarCancha({
            reserva_id: resId,
            cancha_id: targetCanchaId
        }).subscribe({
            next: (res: any) => {
                this.isLoading = false;
                this.mostrarToast(res.message || 'Cancha asignada con éxito');
                const canchaObj = this.canchasDisponibles.find(c => c.id == targetCanchaId);
                this.selectedSlot.slot.cancha_id = targetCanchaId > 0 ? targetCanchaId : null;
                this.selectedSlot.slot.cancha_nombre = canchaObj?.nombre || '';
                this.selectedSlot.slot.requiere_cancha = targetCanchaId === 0;
                this.showAssignCourtInline = false;
                this.loadDisponibilidad();
            },
            error: () => {
                this.isLoading = false;
                // Fallback a updateReservaTecnica
                this.entrenamientoService.updateReservaTecnica({
                    reserva_id: resId,
                    cancha_id: targetCanchaId
                }).subscribe({
                    next: () => {
                        this.mostrarToast('Cancha actualizada');
                        this.selectedSlot.slot.cancha_id = targetCanchaId > 0 ? targetCanchaId : null;
                        this.showAssignCourtInline = false;
                        this.loadDisponibilidad();
                    },
                    error: () => this.mostrarToast('No se pudo asignar la cancha')
                });
            }
        });
    }

    getSelectedClubNombre(): string {
        if (!this.selectedClubId) return 'Seleccionar Club';
        const found = this.clubesDisponibles.find(c => Number(c.id) === Number(this.selectedClubId));
        return found ? found.nombre : 'Club Seleccionado';
    }

    getCanchasLibresCount(): number {
        return (this.canchasDisponibles || []).filter(c => c.disponible).length;
    }

    onSelectCancha(ca: any) {
        if (!ca.disponible) {
            this.mostrarToast(`Aviso: ${ca.nombre} figura ocupada en este horario.`);
        }
        this.selectedCanchaId = ca.id;
    }

    onClubChangeModal() {
        this.selectedCanchaId = null;
        this.cargarCanchasDisponibles();
    }

    // --- REGLAS DE PACKS Y MODALIDADES ---
    packMatchesTipo(p: any, type: string): boolean {
        if (!p) return false;
        const name = (p.pack_nombre || p.nombre || p.titulo || p.pack_nombres || '').toLowerCase();
        const rawTipo = (p.tipo || p.pack_tipo || p.reserva_tipo || p.tipo_reserva || '').toLowerCase();
        const combined = rawTipo + ' ' + name;

        const personas = Number(p.cantidad_personas || (combined.includes('duo') ? 2 : combined.includes('trio') ? 3 : (combined.includes('grupal') ? 4 : 1)));
        const capMax = Number(p.capacidad_maxima || (p.cantidad_personas ? personas : (combined.includes('grupal') ? 6 : personas)));

        if (type === 'individual') {
            return personas === 1 && !combined.includes('duo') && !combined.includes('trio') && !combined.includes('grupal') && !combined.includes('multi');
        } else if (type === 'multijugador') {
            return (personas >= 2 && personas <= 3) || combined.includes('duo') || combined.includes('trio') || combined.includes('multi');
        } else if (type === 'grupal') {
            return personas >= 4 || capMax >= 4 || combined.includes('grupal');
        }
        return true;
    }

    getTipoLabel(tipo: string): string {
        if (tipo === 'individual') return 'Individual';
        if (tipo === 'multijugador') return 'Multi (2-4)';
        if (tipo === 'grupal') return 'Grupal (4-6)';
        return tipo;
    }

    get maxAlumnos(): number {
        if (this.tipoClaseSeleccionado === 'multijugador') return 4;
        if (this.tipoClaseSeleccionado === 'grupal') return 6;
        return 1;
    }

    get alumnosPacksConCredito(): any[] {
        return (this.alumnosPacks || [])
            .map(p => {
                const total = Number(p.sesiones_totales || p.sesiones || 0);
                const reservadas = Number(p.sesiones_reservadas || 0);
                p._disponibles = total - reservadas;
                if (p.sesiones_restantes === undefined) p.sesiones_restantes = total - Number(p.sesiones_usadas || 0);
                return p;
            })
            .filter(p => p._disponibles > 0 && this.packMatchesTipo(p, this.tipoClaseSeleccionado));
    }

    actualizarPacksParaTipo() {
        if (!this.packsDisponibles) return;
        this.packsParaTipoList = this.packsDisponibles.filter(p => this.packMatchesTipo(p, this.tipoClaseSeleccionado));
    }

    get alumnosFiltrados(): any[] {
        if (!this.filtroAlumnos || this.filtroAlumnos.trim().length === 0) {
            return this.alumnos.slice(0, 15);
        }
        const f = this.filtroAlumnos.toLowerCase();
        return this.alumnos.filter(a =>
            (a.jugador_nombre || '').toLowerCase().includes(f) ||
            (a.pack_nombre || '').toLowerCase().includes(f)
        );
    }

    onTipoClaseChange() {
        this.alumnosSeleccionados = [];
        this.alumnoSeleccionado = null;
        this.packAAsignar = null;
        this.alumnosPacks = [];
        this.mostrarSelectorPackManual = false;
        this.packGrupalSeleccionado = null;
        this.actualizarPacksParaTipo();

        if (this.tipoClaseSeleccionado === 'grupal') {
            this.loadPacksGrupales();
        }
    }

    loadPacksGrupales() {
        this.entrenamientoService.getPacks(this.entrenadorId).subscribe({
            next: (res: any[]) => {
                this.packsGrupalesDisponibles = (res || []).filter(p => (p.tipo === 'grupal' || p.tipo === 'pack_grupal') && Number(p.activo) === 1);
            }
        });
    }

    onPackGrupalChange() {
        if (this.packGrupalSeleccionado) {
            const cat = (this.packGrupalSeleccionado.categoria || '').toLowerCase();
            if (cat.includes('adulto')) {
                this.categoriaFiltro = 'adulto';
            } else if (cat.includes('menor')) {
                this.categoriaFiltro = 'menor';
            }
            this.onCategoriaChange();
        }
    }

    // --- SELECCIÓN DE ALUMNOS ---
    toggleAlumnoSeleccion(alumno: any) {
        if (this.tipoClaseSeleccionado === 'individual') {
            this.alumnoSeleccionado = alumno;
            this.alumnosSeleccionados = [alumno];
        } else {
            const idx = this.alumnosSeleccionados.findIndex(a => (a.jugador_id || a.id) === (alumno.jugador_id || alumno.id));
            if (idx >= 0) {
                this.alumnosSeleccionados.splice(idx, 1);
            } else if (this.alumnosSeleccionados.length < this.maxAlumnos) {
                this.alumnosSeleccionados.push(alumno);
            }
            this.alumnoSeleccionado = this.alumnosSeleccionados[0] || null;
        }

        this.packAAsignar = null;
        this.mostrarSelectorPackManual = false;

        if (this.alumnoSeleccionado) {
            this.cargarPacksAlumno(this.alumnoSeleccionado.jugador_id || this.alumnoSeleccionado.id, this.alumnoSeleccionado);
        }
    }

    isAlumnoSelected(alumno: any): boolean {
        return this.alumnosSeleccionados.some(a => (a.jugador_id || a.id) === (alumno.jugador_id || alumno.id));
    }

    cargarPacksAlumno(jugadorId: number, targetAlumno?: any) {
        this.cargandoPacks = true;
        this.entrenamientoService.getPacksAlumno(jugadorId).subscribe({
            next: (res: any) => {
                const rawPacks = Array.isArray(res) ? res : (res.data || res.packs || []);
                const target = targetAlumno || this.alumnoSeleccionado;

                if (target) {
                    const matching = rawPacks.filter((p: any) => this.packMatchesTipo(p, this.tipoClaseSeleccionado));
                    if (matching.length > 0) {
                        const best = matching.sort((a: any, b: any) => (b.sesiones_restantes || 0) - (a.sesiones_restantes || 0))[0];
                        target.pack_nombre = best.pack_nombre || best.nombre;
                        const total = Number(best.sesiones_totales || best.sesiones || 0);
                        const reservadas = Number(best.sesiones_reservadas || 0);
                        target.creditos_reales = total - reservadas;
                        target.sesiones_restantes = Number(best.sesiones_restantes || 0);
                        target.pack_id = best.pack_id || best.id;
                        target.pack_jugador_id = best.id || best.pack_jugador_id;
                    } else {
                        target.creditos_reales = 0;
                        target.sesiones_restantes = 0;
                        target.pack_nombre = 'Sin pack ' + this.getTipoLabel(this.tipoClaseSeleccionado);
                    }
                }

                if (this.alumnosSeleccionados.length > 0 && target === this.alumnosSeleccionados[0]) {
                    this.alumnosPacks = rawPacks;
                }

                this.cargandoPacks = false;
                // Si no tiene créditos en esta modalidad, activar selector de pack nuevo por conveniencia
                if (this.alumnosPacksConCredito.length === 0 && (target?.creditos_reales || 0) <= 0) {
                    this.mostrarSelectorPackManual = true;
                }
            },
            error: () => this.cargandoPacks = false
        });
    }

    onPackAlumnoToggle() {
        if (!this.alumnoSeleccionado) return;
        const pack = this.alumnosPacks.find(p => (p.id || p.pack_jugador_id) == this.alumnoSeleccionado.pack_jugador_id);
        if (pack) {
            this.alumnoSeleccionado.pack_id = pack.pack_id;
            this.alumnoSeleccionado.pack_nombre = pack.pack_nombre || pack.nombre;
            this.alumnoSeleccionado.sesiones_restantes = pack.sesiones_restantes;
        }
    }

    togglePackManual() {
        this.mostrarSelectorPackManual = !this.mostrarSelectorPackManual;
        if (!this.mostrarSelectorPackManual) {
            this.packAAsignar = null;
        }
    }

    // --- PLANIFICACIÓN TÉCNICA (MALLAS) ---
    setCategoriaFiltro(cat: 'todos' | 'adulto' | 'menor') {
        this.categoriaFiltro = cat;
        this.onCategoriaChange();
    }

    getSelectedMallaNombre(): string {
        if (!this.planificacionId) return 'Selecciona la Malla';
        const found = this.mallas?.find(m => m.id == this.planificacionId);
        return found ? found.nombre : 'Malla seleccionada';
    }

    getSelectedClaseNombre(): string {
        if (!this.claseMallaId) return 'Seleccionar Sesión / Drills';
        const found = this.clasesDisponibles?.find(c => c.id == this.claseMallaId);
        return found ? `Sesión ${found.sesion_numero}: ${found.titulo}` : 'Sesión seleccionada';
    }

    filtrarMallas() {
        if (this.categoriaFiltro === 'todos') {
            this.mallasFiltradas = this.mallas;
        } else {
            this.mallasFiltradas = this.mallas.filter(m => (m.publico || '').toLowerCase().includes(this.categoriaFiltro));
        }
    }

    onCategoriaChange() {
        this.planificacionId = null;
        this.claseMallaId = null;
        this.clasesDisponibles = [];
        this.contenidoClase = '';
        this.filtrarMallas();
    }

    onMallaChange() {
        this.clasesDisponibles = [];
        if (!this.isEditingDetail) {
            this.claseMallaId = null;
            this.contenidoClase = '';
        }
        if (!this.planificacionId) return;

        this.isLoading = true;
        this.entrenamientoService.getMallaById(this.planificacionId).subscribe({
            next: (res: any) => {
                this.clasesDisponibles = res.clases || [];
                this.isLoading = false;
                if (this.isEditingDetail && this.claseMallaId) {
                    this.onClaseChange();
                }
            },
            error: () => this.isLoading = false
        });
    }

    onClaseChange() {
        const clase = this.clasesDisponibles.find(c => c.id == this.claseMallaId);
        this.selectedClaseToPreview = clase || null;
        if (clase) {
            this.contenidoClase = `OBJETIVO: ${clase.objetivo || 'N/A'}\nDRILLS: ${clase.drills || 'N/A'}`;
        } else {
            this.contenidoClase = '';
        }
    }

    // --- RESET STATE ---
    resetBookingState() {
        this.tipoClaseSeleccionado = 'individual';
        this.duracionMinutos = 60; // Base: 1 hora predeterminada
        this.alumnoSeleccionado = null;
        this.alumnosSeleccionados = [];
        this.planificacionId = null;
        this.claseMallaId = null;
        this.packAAsignar = null;
        this.mostrarSelectorPackManual = false;
        this.recurrencia = 1;
        this.filtroAlumnos = '';
        this.alumnosPacks = [];
        this.actualizarPacksParaTipo();
        this.onCategoriaChange();
    }

    cerrarModal() {
        this.isBookingModalOpen = false;
        this.isDetailModalOpen = false;
        this.isEditingDetail = false;
        this.showAssignCourtInline = false;
        this.selectedSlot = null;
        this.alumnoSeleccionado = null;
        this.alumnosSeleccionados = [];
        this.planificacionId = null;
        this.claseMallaId = null;
        this.packAAsignar = null;
    }

    // --- AGENDAR / CONFIRMAR RESERVA (PARIDAD CON WEB) ---
    async confirmarAgendamiento() {
        if (this.tipoClaseSeleccionado === 'individual') {
            if (!this.alumnoSeleccionado || !this.selectedSlot) {
                this.mostrarToast('Por favor selecciona un alumno');
                return;
            }
        } else if (this.tipoClaseSeleccionado === 'multijugador') {
            if (this.alumnosSeleccionados.length === 0 || !this.selectedSlot) {
                this.mostrarToast('Selecciona al menos un alumno para la clase');
                return;
            }
        } else if (this.tipoClaseSeleccionado === 'grupal') {
            if (!this.selectedSlot) return;
        }

        // Caso Grupal
        if (this.tipoClaseSeleccionado === 'grupal') {
            this.ejecutarAgendamientoGrupal();
            return;
        }

        // Validaciones de Pack
        if (this.mostrarSelectorPackManual && !this.packAAsignar) {
            this.mostrarToast('⚠️ Activaste la asignación de un pack nuevo pero no seleccionaste ninguno.');
            return;
        }

        const requiereNuevoPack = this.tipoClaseSeleccionado === 'individual'
            ? (this.alumnosPacksConCredito.length === 0 && (this.alumnoSeleccionado?.creditos_reales || 0) <= 0)
            : (this.alumnosPacksConCredito.length === 0);

        if (requiereNuevoPack && !this.packAAsignar) {
            this.mostrarToast('⚠️ El alumno no tiene saldo disponible. Selecciona un pack nuevo para asignarle.');
            return;
        }

        const loading = await this.loadingCtrl.create({ message: 'Agendando clase...' });
        await loading.present();

        const primerJugador = this.tipoClaseSeleccionado === 'individual'
            ? this.alumnoSeleccionado
            : this.alumnosSeleccionados[0];
        const jugadorIds = this.alumnosSeleccionados.map(a => a.jugador_id || a.id);

        const needsPack = this.packAAsignar ? true : false;

        const obsPack = (needsPack && this.packAAsignar && primerJugador)
            ? this.entrenamientoService.insertPack({
                pack_id: this.packAAsignar.id || this.packAAsignar.pack_id,
                jugador_id: primerJugador.jugador_id || primerJugador.id,
                estado_pago: 'pendiente',
                metodo_pago: 'manual_entrenador'
            })
            : new Observable(obs => {
                obs.next({ success: true, pack_jugador_id: primerJugador?.pack_jugador_id || 0 });
                obs.complete();
            });

        obsPack.subscribe({
            next: (resP: any) => {
                let fId: any = 0;
                let fJugadorId: any = 0;

                // 1. Pack nuevo asignado
                if (this.packAAsignar) {
                    fId = this.packAAsignar.id || this.packAAsignar.pack_id || 0;
                    fJugadorId = resP.pack_jugador_id || 0;
                }
                // 2. Pack con crédito activo
                else if (this.alumnosPacksConCredito.length > 0) {
                    let best = this.alumnosPacksConCredito.find(p => String(p.id || p.pack_jugador_id) === String(primerJugador.pack_jugador_id));
                    if (!best) best = this.alumnosPacksConCredito[0];
                    fId = best.pack_id || best.id_pack || best.id || 0;
                    fJugadorId = best.id || best.pack_jugador_id || best.pack_id || fId || 0;
                    if (fId === fJugadorId && best.pack_id) fId = best.pack_id;
                }
                // 3. Extracción de alumno
                else if (primerJugador) {
                    const keys = ['pack_id', 'id_pack', 'pack_jugador_id', 'id_pack_jugador'];
                    for (const k of keys) {
                        const val = primerJugador[k];
                        if (val && String(val) !== '0') {
                            fId = val;
                            break;
                        }
                    }
                    fJugadorId = primerJugador.pack_jugador_id || fId || 0;
                }

                const payloadReserva: any = {
                    entrenador_id: Number(this.entrenadorId),
                    pack_id: Number(fId),
                    pack_jugador_id: Number(fJugadorId),
                    fecha: this.selectedSlot.dateStr,
                    hora_inicio: this.selectedSlot.hour,
                    hora_fin: this.getHoraFin(this.selectedSlot.hour, this.duracionMinutos),
                    jugador_id: Number(primerJugador.jugador_id || primerJugador.id),
                    jugador_nombre: primerJugador.jugador_nombre || 'Alumno',
                    estado: 'reservado',
                    recurrencia: Number(this.recurrencia || 1),
                    tipo: this.tipoClaseSeleccionado,
                    club_id: Number(this.selectedClubId || this.selectedSlot.slot?.club_id || 1),
                    cancha_id: Number(this.selectedCanchaId || 0),
                    malla_id: Number(this.planificacionId || 0),
                    clase_id: Number(this.claseMallaId || 0),
                    clase_titulo: this.selectedClaseToPreview?.titulo || ''
                };

                if (this.tipoClaseSeleccionado !== 'individual' && jugadorIds.length > 1) {
                    payloadReserva.jugador_ids = jugadorIds;
                    payloadReserva.jugador_nombre = this.alumnosSeleccionados.map(a => a.jugador_nombre).join(', ');
                }

                this.entrenamientoService.crearReserva(payloadReserva).subscribe({
                    next: () => {
                        this.notificarReserva(payloadReserva, fId);

                        if (this.planificacionId && this.claseMallaId) {
                            this.entrenamientoService.asignarMalla({
                                jugador_id: Number(primerJugador.jugador_id || primerJugador.id),
                                malla_id: Number(this.planificacionId),
                                entrenador_id: Number(this.entrenadorId)
                            }).subscribe(() => this.postAgendamiento(loading));
                        } else {
                            this.postAgendamiento(loading);
                        }
                    },
                    error: (err) => {
                        loading.dismiss();
                        this.mostrarToast(err.error?.error || 'Error al agendar la reserva');
                    }
                });
            },
            error: (err) => {
                loading.dismiss();
                this.mostrarToast(err.error?.error || 'Error al procesar el pack');
            }
        });
    }

    async ejecutarAgendamientoGrupal() {
        if (!this.packGrupalSeleccionado && !this.packAAsignar) {
            this.mostrarToast('Selecciona un Pack Grupal (ej. Padel Warriors) para crear el entrenamiento.');
            return;
        }

        const template = this.packGrupalSeleccionado || this.packAAsignar;
        const packIdFinal = Number(template.id || template.pack_id);

        const loading = await this.loadingCtrl.create({ message: 'Creando sesión grupal...' });
        await loading.present();

        const payloadReserva: any = {
            entrenador_id: Number(this.entrenadorId),
            pack_id: packIdFinal,
            pack_jugador_id: 0,
            fecha: this.selectedSlot.dateStr,
            hora_inicio: this.selectedSlot.hour,
            hora_fin: this.getHoraFin(this.selectedSlot.hour, this.duracionMinutos),
            jugador_id: 0,
            jugador_nombre: 'Clase Abierta / Grupal',
            estado: 'reservado',
            recurrencia: Number(this.recurrencia || 1),
            tipo: 'grupal',
            reserva_tipo: 'pack_grupal',
            club_id: Number(this.selectedClubId || this.selectedSlot.slot?.club_id || 1),
            cancha_id: Number(this.selectedCanchaId || 0),
            malla_id: Number(this.planificacionId || 0),
            clase_id: Number(this.claseMallaId || 0),
            clase_titulo: this.selectedClaseToPreview?.titulo || ''
        };

        if (this.alumnosSeleccionados.length > 0) {
            payloadReserva.jugador_ids = this.alumnosSeleccionados.map(a => a.jugador_id || a.id);
            payloadReserva.jugador_nombre = this.alumnosSeleccionados.map(a => a.jugador_nombre).join(', ');
            payloadReserva.jugador_id = Number(this.alumnosSeleccionados[0].jugador_id || this.alumnosSeleccionados[0].id);
        }

        this.entrenamientoService.crearReserva(payloadReserva).subscribe({
            next: () => {
                this.notificarReserva(payloadReserva, packIdFinal);
                this.postAgendamiento(loading);
            },
            error: (err) => {
                loading.dismiss();
                this.mostrarToast(err.error?.error || 'Error al agendar clase grupal');
            }
        });
    }

    private notificarReserva(payloadReserva: any, packId: number) {
        try {
            const packNombre = this.packsDisponibles?.find(p => p.id == packId)?.nombre || 'Entrenamiento';
            const fecha = payloadReserva.fecha;
            const hora = payloadReserva.hora_inicio;
            const coachId = Number(this.entrenadorId);

            const targets = (payloadReserva.jugador_ids && payloadReserva.jugador_ids.length > 0)
                ? payloadReserva.jugador_ids
                : (payloadReserva.jugador_id ? [payloadReserva.jugador_id] : []);

            targets.forEach((jId: number) => {
                if (jId > 0) {
                    this.notificationService.notificarReservaCreada(jId, packNombre, fecha, hora);
                    this.notificationService.programarRecordatorio(jId, packNombre, fecha, hora);
                }
            });

            if (coachId > 0) {
                const alumnoNombreStr = payloadReserva.jugador_nombre || 'Alumno';
                this.notificationService.notificarReservaACoach(coachId, alumnoNombreStr, fecha, hora);
            }
        } catch (e) {
            console.error('Error enviando notificaciones:', e);
        }
    }

    private postAgendamiento(loading: any) {
        loading.dismiss();
        this.mostrarToast('✅ ¡Clase agendada exitosamente!');
        this.cerrarModal();
        this.loadDisponibilidad();
        this.loadBasics();
    }

    // --- ACCIONES EN MODAL DE DETALLE ---
    async confirmarCancelacion() {
        const resId = this.selectedSlot?.slot?.reserva_id || this.selectedSlot?.slot?.id;
        if (!resId) return;

        const alert = await this.alertCtrl.create({
            header: 'Cancelar Clase',
            message: '¿Deseas cancelar TODA la clase y liberar el horario?',
            buttons: [
                { text: 'Atrás', role: 'cancel' },
                {
                    text: 'Confirmar Cancelación',
                    role: 'destructive',
                    handler: () => {
                        this.entrenamientoService.cancelarReserva(resId).subscribe({
                            next: () => {
                                this.mostrarToast('Clase cancelada exitosamente');
                                this.cerrarModal();
                                this.loadDisponibilidad();
                            },
                            error: () => this.mostrarToast('Error al cancelar la clase')
                        });
                    }
                }
            ]
        });
        await alert.present();
    }

    async quitarJugador(p: any) {
        const resId = this.selectedSlot?.slot?.reserva_id || this.selectedSlot?.slot?.id;
        if (!resId) return;

        const alert = await this.alertCtrl.create({
            header: 'Quitar Alumno',
            message: `¿Deseas quitar a ${p.nombre || p.jugador_nombre} de esta clase?`,
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Quitar',
                    role: 'destructive',
                    handler: () => {
                        this.entrenamientoService.cancelarReserva(resId, p.id || p.jugador_id).subscribe({
                            next: () => {
                                this.mostrarToast('Alumno removido de la sesión');
                                this.participantesGrupo = this.participantesGrupo.filter(x => (x.id || x.jugador_id) !== (p.id || p.jugador_id));
                                if (this.participantesGrupo.length === 0) {
                                    this.cerrarModal();
                                    this.loadDisponibilidad();
                                }
                            },
                            error: () => this.mostrarToast('Error al remover alumno')
                        });
                    }
                }
            ]
        });
        await alert.present();
    }

    searchPlayersMini() {
        if (this.searchQueryMini.length < 2) {
            this.searchResultsMini = [];
            return;
        }
        this.isSearchingMini = true;
        this.entrenamientoService.searchAlumnos(this.searchQueryMini).subscribe({
            next: (res) => {
                this.searchResultsMini = res || [];
                this.isSearchingMini = false;
            },
            error: () => this.isSearchingMini = false
        });
    }

    async addJugadorManual(player: any) {
        const resId = this.selectedSlot?.slot?.reserva_id || this.selectedSlot?.slot?.id;
        if (!resId) return;

        const loading = await this.loadingCtrl.create({ message: 'Agregando jugador...' });
        await loading.present();

        this.entrenamientoService.addJugadorAReserva(resId, player.id).subscribe({
            next: (res: any) => {
                loading.dismiss();
                if (res.success || res.status) {
                    this.mostrarToast('✅ Jugador agregado a la clase');
                    this.searchQueryMini = '';
                    this.searchResultsMini = [];
                    if (!this.selectedSlot.slot.inscritos) this.selectedSlot.slot.inscritos = [];
                    this.selectedSlot.slot.inscritos.push({
                        id: player.id,
                        nombre: player.nombre,
                        foto: player.foto_perfil
                    });
                    this.participantesGrupo = [...this.selectedSlot.slot.inscritos];
                    this.loadDisponibilidad();
                } else {
                    this.mostrarToast(res.error || 'No se pudo agregar al jugador');
                }
            },
            error: () => {
                loading.dismiss();
                this.mostrarToast('Error de conexión');
            }
        });
    }

    enableDetailEdit() {
        this.isEditingDetail = true;
        const s = this.selectedSlot?.slot;
        this.planificacionId = s?.malla_id ? Number(s.malla_id) : null;
        this.claseMallaId = s?.clase_id ? Number(s.clase_id) : null;
        if (this.planificacionId) {
            this.onMallaChange();
        }
    }

    async saveTechnicalDetail() {
        const resId = this.selectedSlot?.slot?.reserva_id || this.selectedSlot?.slot?.id;
        if (!resId) return;

        const loading = await this.loadingCtrl.create({ message: 'Actualizando planificación...' });
        await loading.present();

        const payload = {
            reserva_id: resId,
            malla_id: this.planificacionId,
            clase_id: this.claseMallaId,
            clase_titulo: this.clasesDisponibles.find(c => c.id == this.claseMallaId)?.titulo || null
        };

        this.entrenamientoService.updateReservaTecnica(payload).subscribe({
            next: () => {
                loading.dismiss();
                this.mostrarToast('Planificación actualizada con éxito');
                this.isEditingDetail = false;
                this.loadDisponibilidad();
                this.cerrarModal();
            },
            error: () => {
                loading.dismiss();
                this.mostrarToast('Error al actualizar');
            }
        });
    }

    // --- HELPERS ---
    extractDate(dStr: string) { return dStr ? dStr.split(' ')[0] : ''; }
    extractTime(dStr: string) { return dStr ? dStr.split(' ')[1].slice(0, 5) : ''; }
    formatDate(date: Date): string {
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    }

    addMinutesToTime(timeStr: string, minutes: number): string {
        if (!timeStr) return '08:00';
        const parts = timeStr.split(':').map(Number);
        const total = parts[0] * 60 + (parts[1] || 0) + minutes;
        const h = Math.floor(total / 60) % 24;
        const m = total % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }

    getHoraFin(horaInicio: string, duracionMin?: number): string {
        const d = (duracionMin !== undefined && duracionMin !== null) ? duracionMin : (this.duracionMinutos || 60);
        return this.addMinutesToTime(horaInicio, d);
    }

    async mostrarToast(msg: string) {
        const toast = await this.toastCtrl.create({ message: msg, duration: 2500, position: 'top', mode: 'ios' });
        toast.present();
    }

    goBack() {
        this.router.navigate(['/entrenador-home']);
    }

    getFotoUrl(data: any): string {
        if (!data) return '';
        let foto = data.jugador_foto || data.foto_perfil || data.foto || data.foto_jugador || (data.inscritos && data.inscritos[0] ? data.inscritos[0].foto : null) || data.jugador_imagen;
        const nombre = data.jugador_nombre || data.nombre_jugador || data.nombre || 'Alumno';

        if (!foto || foto.includes('placeholder') || foto.includes('imagen_defecto') || String(foto).includes('null') || String(foto).trim() === '') {
            return `https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}&background=ccff00&color=000&length=2&rounded=true&bold=true&size=128`;
        }

        if (foto.startsWith('http') || foto.startsWith('data:')) {
            return foto;
        }

        let cleanPath = foto.startsWith('/') ? foto.substring(1) : foto;
        cleanPath = cleanPath.replace(/^prd\//, '').replace(/^dev\//, '');
        if (!cleanPath.includes('/')) {
            cleanPath = `uploads/perfiles/${cleanPath}`;
        }
        const base = (environment.apiUrl || 'https://api.padelmanager.cl/prd').replace(/\/$/, '');
        return `${base}/${cleanPath}`;
    }

    onImgError(event: any, data?: any): void {
        if (event && event.target) {
            const nombre = data ? (data.jugador_nombre || data.nombre_jugador || data.nombre || 'Alumno') : 'Alumno';
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}&background=ccff00&color=000&length=2&rounded=true&bold=true&size=128`;
            if (event.target.src !== avatarUrl && !event.target.src.includes('ui-avatars.com')) {
                event.target.src = avatarUrl;
            }
        }
    }
}

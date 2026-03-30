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
    IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonSearchbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    chevronBackOutline, calendarOutline, timeOutline, checkmarkCircleOutline,
    closeOutline, personCircleOutline, addCircleOutline, trashOutline, createOutline
} from 'ionicons/icons';
import { environment } from 'src/environments/environment';

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
        IonButtons, IonSearchbar
    ]
})
export class EntrenadorAgendarPage implements OnInit {
    @ViewChild('bookingModal') bookingModal!: IonModal;
    @ViewChild('detailModal') detailModal!: IonModal;

    entrenadorId = Number(localStorage.getItem('userId'));
    isLoading = false;

    // Calendar
    diasAgenda: Date[] = [];
    diaSeleccionado: string = '';
    slotsDisponibles: any[] = [];
    cargandoHorarios: boolean = false;
    slotsPorDia: { [key: string]: any[] } = {};
    
    // Club Filter
    clubesDisponibles: any[] = [];
    selectedClubId: number | null = null;
    
    // Data
    alumnos: any[] = [];
    filtroAlumnos: string = '';
    packsDisponibles: any[] = [];
    mallas: any[] = [];

    // Booking Modal
    isBookingModalOpen = false;
    selectedSlot: any = null;
    recurrencia: number = 1;

    tipoClaseSeleccionado: 'individual' | 'multijugador' | 'grupal' = 'individual';
    alumnosSeleccionados: any[] = [];
    alumnoSeleccionado: any = null;
    mostrarOpcionPack = false;
    packAAsignar: any = null;

    planificacionId: number | null = null;
    claseMallaId: number | null = null;
    categoriaFiltro: 'adulto' | 'menor' | 'todos' = 'todos';
    mallasFiltradas: any[] = [];
    clasesDisponibles: any[] = [];
    contenidoClase: string = '';

    // Detail Modal
    isDetailModalOpen = false;
    isEditingDetail = false;

    get maxAlumnos(): number {
        if (this.tipoClaseSeleccionado === 'multijugador') return 4;
        if (this.tipoClaseSeleccionado === 'grupal') return 6;
        return 1;
    }

    get alumnosFiltrados() {
        if (!this.filtroAlumnos) return this.alumnos;
        const f = this.filtroAlumnos.toLowerCase();
        return this.alumnos.filter(a =>
            (a.jugador_nombre || '').toLowerCase().includes(f) ||
            (a.pack_nombre || '').toLowerCase().includes(f)
        );
    }

    get packsParaTipo(): any[] {
        const cant = this.alumnosSeleccionados.length || 1;
        if (this.tipoClaseSeleccionado === 'individual') {
            return this.packsDisponibles.filter(p => Number(p.cantidad_personas || 1) === 1);
        }
        if (this.tipoClaseSeleccionado === 'multijugador') {
            return this.packsDisponibles.filter(p => {
                const pers = Number(p.cantidad_personas || 1);
                return pers >= 2 && pers <= 4 && pers >= cant;
            });
        }
        if (this.tipoClaseSeleccionado === 'grupal') {
            return this.packsDisponibles.filter(p => {
                const tipo = (p.tipo || '').toLowerCase();
                const pers = Number(p.cantidad_personas || 1);
                const cap = Number(p.capacidad_maxima || pers);
                return tipo.includes('grupal') || cap >= 4 || pers >= 5;
            });
        }
        return this.packsDisponibles;
    }

    constructor(
        private router: Router,
        private entrenamientoService: EntrenamientoService,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController
    ) {
        addIcons({
            chevronBackOutline, calendarOutline, timeOutline, checkmarkCircleOutline,
            closeOutline, personCircleOutline, addCircleOutline, trashOutline, createOutline
        });
    }

    ngOnInit() {
        this.generarDias();
        this.loadBasics();
        this.loadDisponibilidad();
    }

    generarDias() {
        const today = new Date();
        this.diasAgenda = [];
        for (let i = 0; i < 7; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            this.diasAgenda.push(d);
        }
        this.diaSeleccionado = this.formatDate(this.diasAgenda[0]);
    }

    loadBasics() {
        this.entrenamientoService.getMisAlumnos(this.entrenadorId).subscribe(res => {
            this.alumnos = res.map(a => {
                let foto = a.jugador_foto;
                if (!foto || foto.includes('placeholder') || foto.includes('imagen_defecto')) {
                    foto = `https://ui-avatars.com/api/?name=${encodeURIComponent(a.jugador_nombre)}&background=ccff00&color=000&length=2&rounded=true&bold=true&size=128`;
                }
                return { ...a, jugador_foto: foto, pack_nombre: a.pack_nombres || a.pack_nombre };
            });
        });

        this.entrenamientoService.getPacks(this.entrenadorId).subscribe(res => this.packsDisponibles = res);
        this.entrenamientoService.getMallas(this.entrenadorId).subscribe(res => {
            this.mallas = res;
            this.filtrarMallas();
        });
    }

    loadDisponibilidad() {
        this.cargandoHorarios = true;
        forkJoin({
            dispo: this.entrenamientoService.getDisponibilidadEntrenador(this.entrenadorId),
            agenda: this.entrenamientoService.getReservasEntrenador(this.entrenadorId)
        }).subscribe({
            next: (res: any) => {
                this.slotsPorDia = {};
                this.clubesDisponibles = [];
                const clubMap = new Map();

                res.dispo.forEach((s: any) => {
                    if (s.club_id && !clubMap.has(s.club_id)) {
                        clubMap.set(s.club_id, { id: s.club_id, nombre: s.club_nombre });
                    }
                    const fecha = this.extractDate(s.fecha_inicio);
                    if (!this.slotsPorDia[fecha]) this.slotsPorDia[fecha] = [];
                    this.slotsPorDia[fecha].push({ ...s, time: this.extractTime(s.fecha_inicio) });
                });

                this.clubesDisponibles = Array.from(clubMap.values());
                if (this.clubesDisponibles.length > 0 && !this.selectedClubId) {
                    this.selectedClubId = this.clubesDisponibles[0].id;
                }

                this.mergeAgenda(res.agenda);
                this.actualizarSlotsVisibles();
                this.cargandoHorarios = false;
            },
            error: (err) => {
                this.cargandoHorarios = false;
                this.mostrarToast('Error al cargar agenda');
            }
        });
    }

    mergeAgenda(agendaData: any) {
        if (!agendaData) return;
        const all = Array.isArray(agendaData) ? agendaData : [
            ...(agendaData.reservas_tradicionales || []),
            ...(agendaData.packs_grupales || [])
        ];
        all.forEach((a: any) => {
            const fecha = a.fecha || this.extractDate(a.fecha_inicio);
            const hora = (a.hora_inicio || this.extractTime(a.fecha_inicio)).slice(0, 5);
            if (!this.slotsPorDia[fecha]) this.slotsPorDia[fecha] = [];
            let existing = this.slotsPorDia[fecha].find(s => s.time === hora);
            
            const ocupadoData = {
                ocupado: true,
                reserva_id: a.reserva_id || a.id,
                jugador_nombre: a.jugador_nombre || a.nombre_jugador,
                reserva_tipo: a.pack_nombre || a.tipo,
                club_id: a.club_id,
                club_nombre: a.club_nombre,
                malla_id: a.malla_id,
                clase_id: a.clase_id,
                malla_nombre: a.malla_nombre,
                clase_titulo: a.clase_titulo,
                clase_objetivo: a.clase_objetivo,
                clase_calentamiento: a.clase_calentamiento,
                clase_drills: a.clase_drills
            };

            if (existing) {
                Object.assign(existing, ocupadoData);
            } else {
                this.slotsPorDia[fecha].push({
                    fecha_inicio: `${fecha} ${hora}:00`,
                    time: hora,
                    ...ocupadoData
                });
            }
        });
    }

    onDiaChange(event: any) {
        this.diaSeleccionado = event.detail.value;
        this.actualizarSlotsVisibles();
    }

    onClubChange() {
        this.actualizarSlotsVisibles();
    }

    actualizarSlotsVisibles() {
        let slots = this.slotsPorDia[this.diaSeleccionado] || [];
        if (this.selectedClubId) {
            slots = slots.filter(s => Number(s.club_id) === Number(this.selectedClubId) || s.ocupado);
        }
        this.slotsDisponibles = slots.sort((a, b) => a.time.localeCompare(b.time));
    }

    seleccionarSlot(slot: any) {
        this.selectedSlot = { slot, dateStr: this.diaSeleccionado, hour: slot.time };
        if (slot.ocupado) {
            this.isDetailModalOpen = true;
            this.isEditingDetail = false;
        } else {
            this.resetBookingState();
            this.isBookingModalOpen = true;
        }
    }

    resetBookingState() {
        this.tipoClaseSeleccionado = 'individual';
        this.alumnoSeleccionado = null;
        this.alumnosSeleccionados = [];
        this.planificacionId = null;
        this.claseMallaId = null;
        this.packAAsignar = null;
        this.recurrencia = 1;
        this.filtroAlumnos = '';
        this.onCategoriaChange();
    }

    cerrarModal() {
        this.isBookingModalOpen = false;
        this.isDetailModalOpen = false;
    }

    toggleAlumnoSeleccion(alumno: any) {
        if (this.tipoClaseSeleccionado === 'individual') {
            this.alumnoSeleccionado = alumno;
            this.alumnosSeleccionados = [alumno];
            this.mostrarOpcionPack = (alumno.sesiones_restantes || 0) <= 0;
            this.packAAsignar = null;
        } else {
            const idx = this.alumnosSeleccionados.findIndex(a => a.jugador_id === alumno.jugador_id);
            if (idx >= 0) {
                this.alumnosSeleccionados.splice(idx, 1);
            } else if (this.alumnosSeleccionados.length < this.maxAlumnos) {
                this.alumnosSeleccionados.push(alumno);
            }
            this.alumnoSeleccionado = this.alumnosSeleccionados[0] || null;
            this.mostrarOpcionPack = true; // Always need pack for multijugador/grupal conceptually? 
        }
    }

    isAlumnoSelected(alumno: any): boolean {
        return this.alumnosSeleccionados.some(a => a.jugador_id === alumno.jugador_id);
    }

    onTipoClaseChange() {
        this.alumnosSeleccionados = [];
        this.alumnoSeleccionado = null;
        this.packAAsignar = null;
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
        this.claseMallaId = null;
        this.contenidoClase = '';
        if (!this.planificacionId) return;
        
        this.isLoading = true;
        // Adding getMallaById manually below since it's missing in service. Let's just use what's available or rely on the backend.
        // Actually, we added getMallaById to EntrenamientoService... wait no, we only added some.
        // Let's implement it.
        const headers = (this.entrenamientoService as any).getHeaders();
        fetch(`${environment.apiUrl}/mallas/get_mallas.php?id=${this.planificacionId}`, {
            headers: headers
        }).then(res => res.json()).then(res => {
            this.clasesDisponibles = res.clases || [];
            this.isLoading = false;
        }).catch(() => this.isLoading = false);
    }

    onClaseChange() {
        const clase = this.clasesDisponibles.find(c => c.id == this.claseMallaId);
        if (clase) {
            this.contenidoClase = `OBJETIVO: ${clase.objetivo || 'N/A'}\nDRILLS: ${clase.drills || 'N/A'}`;
        } else {
            this.contenidoClase = '';
        }
    }

    async confirmarAgendamiento() {
        const obsPack = (this.mostrarOpcionPack && this.packAAsignar)
            ? this.entrenamientoService.insertPack({
                pack_id: this.packAAsignar.id || this.packAAsignar.pack_id,
                jugador_id: this.alumnoSeleccionado.jugador_id,
                estado_pago: 'pendiente',
                metodo_pago: 'manual_entrenador',
                precio_pagado: 0
              })
            : new Observable(obs => {
                obs.next({ success: true, pack_jugador_id: this.alumnoSeleccionado?.pack_jugador_id });
                obs.complete();
              });

        const loading = await this.loadingCtrl.create({ message: 'Agendando...' });
        await loading.present();

        obsPack.subscribe({
            next: (resP: any) => {
                const payloadReserva: any = {
                    entrenador_id: this.entrenadorId,
                    pack_id: (this.packAAsignar ? (this.packAAsignar.id || this.packAAsignar.pack_id) : (this.alumnoSeleccionado?.pack_id || 0)) || null,
                    pack_jugador_id: resP.pack_jugador_id || null,
                    fecha: this.selectedSlot.dateStr,
                    hora_inicio: this.selectedSlot.hour,
                    hora_fin: this.getHoraFin(this.selectedSlot.hour),
                    jugador_id: this.alumnoSeleccionado.jugador_id,
                    estado: 'reservado',
                    recurrencia: this.recurrencia,
                    tipo: this.tipoClaseSeleccionado,
                    club_id: this.selectedSlot.slot.club_id || this.selectedClubId,
                    malla_id: this.planificacionId,
                    clase_id: this.claseMallaId,
                    clase_titulo: this.clasesDisponibles.find(c => c.id == this.claseMallaId)?.titulo || null
                };

                if (this.tipoClaseSeleccionado !== 'individual' && this.alumnosSeleccionados.length > 1) {
                    payloadReserva.jugador_ids = this.alumnosSeleccionados.map(a => a.jugador_id);
                    payloadReserva.jugador_nombre = this.alumnosSeleccionados.map(a => a.jugador_nombre).join(', ');
                }

                this.entrenamientoService.crearReserva(payloadReserva).subscribe({
                    next: () => {
                        if (this.planificacionId && this.claseMallaId) {
                            this.entrenamientoService.asignarMalla({
                                jugador_id: this.alumnoSeleccionado.jugador_id,
                                malla_id: this.planificacionId,
                                entrenador_id: this.entrenadorId
                            }).subscribe(() => this.postAgendamiento(loading));
                        } else {
                            this.postAgendamiento(loading);
                        }
                    },
                    error: (err) => {
                        loading.dismiss();
                        this.mostrarToast(err.error?.error || 'Error al agendar reserva');
                    }
                });
            },
            error: () => {
                loading.dismiss();
                this.mostrarToast('Error al asignar el pack');
            }
        });
    }

    private postAgendamiento(loading: any) {
        loading.dismiss();
        this.mostrarToast('✅ Clase agendada exitosamente');
        this.cerrarModal();
        this.loadDisponibilidad();
        this.loadBasics();
    }

    async confirmarCancelacion() {
        const resId = this.selectedSlot?.slot?.reserva_id;
        if (!resId) return;

        const alert = await this.alertCtrl.create({
            header: 'Cancelar Clase',
            message: `¿Deseas cancelar la clase de ${this.selectedSlot.slot.jugador_nombre}?`,
            buttons: [
                { text: 'Atrás', role: 'cancel' },
                {
                    text: 'Cancelar Clase',
                    handler: () => {
                        this.entrenamientoService.cancelarReserva(resId).subscribe({
                            next: () => {
                                this.mostrarToast('Clase cancelada');
                                this.cerrarModal();
                                this.loadDisponibilidad();
                            },
                            error: () => this.mostrarToast('Error cancelando')
                        });
                    }
                }
            ]
        });
        await alert.present();
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
        if (!this.selectedSlot?.slot?.reserva_id) return;
        const loading = await this.loadingCtrl.create({ message: 'Actualizando...' });
        await loading.present();

        const payload = {
            reserva_id: this.selectedSlot.slot.reserva_id,
            malla_id: this.planificacionId,
            clase_id: this.claseMallaId,
            clase_titulo: this.clasesDisponibles.find(c => c.id == this.claseMallaId)?.titulo || null
        };

        this.entrenamientoService.updateReservaTecnica(payload).subscribe({
            next: () => {
                loading.dismiss();
                this.mostrarToast('Planificación actualizada');
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

    extractDate(dStr: string) { return dStr ? dStr.split(' ')[0] : ''; }
    extractTime(dStr: string) { return dStr ? dStr.split(' ')[1].slice(0, 5) : ''; }
    formatDate(date: Date): string { return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`; }
    
    getHoraFin(horaInicio: string): string {
        const [h, m] = horaInicio.split(':').map(Number);
        const date = new Date();
        date.setHours(h + 1, m);
        return date.toTimeString().slice(0, 5);
    }

    async mostrarToast(msg: string) {
        const toast = await this.toastCtrl.create({ message: msg, duration: 2500, position: 'top' });
        toast.present();
    }

    goBack() {
        this.router.navigate(['/entrenador-home']);
    }
}

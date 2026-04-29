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
    chevronBackOutline, calendarOutline, timeOutline, checkmarkCircleOutline,
    closeOutline, personCircleOutline, addCircleOutline, trashOutline, createOutline, addOutline
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
        IonButtons, IonSearchbar, IonCheckbox
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

    // Manual Player Search (Group)
    searchQueryMini: string = '';
    searchResultsMini: any[] = [];
    isSearchingMini: boolean = false;
    participantesGrupo: any[] = [];

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

    get alumnosPacksConCredito(): any[] {
        return (this.alumnosPacks || [])
            .map(p => {
                const reservadas = Number(p.sesiones_reservadas || 0);
                const restantes = Number(p.sesiones_restantes || 0);
                p._disponibles = restantes - reservadas;
                return p;
            })
            .filter(p => Number(p.sesiones_restantes || 0) > 0);
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
        if (this.tipoClaseSeleccionado === 'individual') {
            return this.packsDisponibles.filter(p => {
                const tipo = (p.tipo || '').toLowerCase();
                const personas = Number(p.cantidad_personas || 1);
                const capMax = Number(p.capacidad_maxima || personas);
                return tipo !== 'grupal' && tipo !== 'pack_grupal' && personas < 2 && capMax < 4;
            });
        } else if (this.tipoClaseSeleccionado === 'multijugador') {
            return this.packsDisponibles.filter(p => {
                const tipo = (p.tipo || '').toLowerCase();
                const personas = Number(p.cantidad_personas || 1);
                const capMax = Number(p.capacidad_maxima || personas);
                return (personas > 1 && personas < 4) || (capMax >= 2 && capMax < 4) || tipo === 'duo' || tipo === 'trio' || tipo === 'multijugador';
            });
        } else {
            return this.packsDisponibles.filter(p => {
                const tipo = (p.tipo || '').toLowerCase();
                const personas = Number(p.cantidad_personas || 1);
                const capMax = Number(p.capacidad_maxima || personas);
                return tipo === 'grupal' || tipo === 'pack_grupal' || capMax >= 4 || personas >= 5;
            });
        }
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
            closeOutline, personCircleOutline, addCircleOutline, trashOutline, createOutline, addOutline
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
        for (let i = 0; i < 14; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            this.diasAgenda.push(d);
        }
        this.diaSeleccionado = this.formatDate(this.diasAgenda[0]);
    }

    loadBasics() {
        this.entrenamientoService.getAlumnosGlobales(this.entrenadorId).subscribe({
            next: (res: any[]) => {
                const uniqueAlumnos = new Map();
                (res || []).forEach((a: any) => {
                    if (!uniqueAlumnos.has(a.jugador_id)) {
                        let foto = this.getFotoUrl(a);
                        
                        const restantes = Number(a.sesiones_restantes || 0);
                        const reservadas = Number(a.sesiones_reservadas || 0);
                        
                        let pNombre = a.pack_nombre || (a.pack_nombres && !a.pack_nombres.includes(',') ? a.pack_nombres : 'Cargando pack...');

                        uniqueAlumnos.set(a.jugador_id, { 
                            ...a, 
                            jugador_foto: foto, 
                            pack_nombre: pNombre,
                            sesiones_restantes: restantes,
                            sesiones_reservadas: reservadas,
                            creditos_reales: Number(a.creditos_reales || 0)
                        });
                    }
                });
                this.alumnos = Array.from(uniqueAlumnos.values());
            },
            error: (err: any) => console.error('Error loading students:', err)
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
        
        // El API /entrenador/get_agenda.php retorna { reservas_tradicionales, packs_grupales }
        const reservas = agendaData.reservas_tradicionales || [];
        reservas.forEach((a: any) => {
            const fecha = a.fecha || this.extractDate(a.fecha_inicio);
            const rawHora = a.hora_inicio || this.extractTime(a.fecha_inicio) || '08:00:00';
            const hora = rawHora.slice(0, 5);
            this.applyToSlot(fecha, hora, a);
        });

        const templates = agendaData.packs_grupales || [];
        templates.forEach((t: any) => {
            const rawHora = t.hora_inicio || '08:00:00';
            const hora = rawHora.slice(0, 5);
            
            if (t.fecha) {
                // Specific date session
                this.applyToSlot(t.fecha, hora, {
                    ...t,
                    reserva_id: t.pack_id,
                    reserva_tipo: 'Entrenamiento Grupal',
                    jugador_nombre: t.jugador_nombre || 'Abierto para inscripción'
                });
            } else {
                // Recurring template
                this.diasAgenda.forEach(date => {
                    const dayIndex = date.getDay(); // 0 (Sun) - 6 (Sat)
                    const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase();
                    const dayRef = (t.dia_semana != null) ? t.dia_semana.toString().toLowerCase() : '';
                    
                    const daysMap = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
                    if (dayRef === dayIndex.toString() || dayRef === dayName || dayRef === daysMap[dayIndex]) {
                        this.applyToSlot(this.formatDate(date), hora, {
                            ...t,
                            reserva_id: t.pack_id,
                            reserva_tipo: 'Entrenamiento Grupal (Recurrente)',
                            jugador_nombre: 'Clase Grupal'
                        });
                    }
                });
            }
        });
    }

    applyToSlot(fecha: string, hora: string, data: any) {
        if (!this.slotsPorDia[fecha]) this.slotsPorDia[fecha] = [];
        let existing = this.slotsPorDia[fecha].find(s => s.time === hora);
        
        const ocupadoData = {
            ocupado: true,
            reserva_id: data.reserva_id || data.id,
            jugador_nombre: data.jugador_nombre || data.nombre_jugador,
            jugador_foto: this.getFotoUrl(data),
            reserva_tipo: data.pack_nombre || data.tipo,
            club_id: data.club_id,
            club_nombre: data.club_nombre,
            malla_id: data.malla_id,
            clase_id: data.clase_id,
            malla_nombre: data.malla_nombre,
            clase_titulo: data.clase_titulo,
            clase_objetivo: data.clase_objetivo,
            clase_calentamiento: data.clase_calentamiento,
            clase_drills: data.clase_drills
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
            this.participantesGrupo = slot.inscritos || [];
        } else {
            this.resetBookingState();
            this.isBookingModalOpen = true;
        }
    }

    searchPlayersMini() {
        if (this.searchQueryMini.length < 3) {
            this.searchResultsMini = [];
            return;
        }
        this.isSearchingMini = true;
        this.entrenamientoService.searchAlumnos(this.searchQueryMini).subscribe({
            next: (res) => {
                this.searchResultsMini = res;
                this.isSearchingMini = false;
            },
            error: () => this.isSearchingMini = false
        });
    }

    async addJugadorManual(player: any) {
        if (!this.selectedSlot?.slot?.reserva_id) return;
        
        const loading = await this.loadingCtrl.create({ message: 'Agregando jugador...' });
        await loading.present();

        this.entrenamientoService.addJugadorAPack(this.selectedSlot.slot.reserva_id, player.id).subscribe({
            next: (res: any) => {
                loading.dismiss();
                if (res.success) {
                    this.mostrarToast('✅ Jugador agregado al grupo');
                    this.searchQueryMini = '';
                    this.searchResultsMini = [];
                    // Refresh current participants
                    if (!this.selectedSlot.slot.inscritos) this.selectedSlot.slot.inscritos = [];
                    this.selectedSlot.slot.inscritos.push({
                        nombre: player.nombre,
                        foto: player.foto_perfil
                    });
                    this.participantesGrupo = [...this.selectedSlot.slot.inscritos];
                } else {
                    this.mostrarToast(res.error || 'No se pudo agregar al jugador');
                }
            },
            error: (err) => {
                loading.dismiss();
                this.mostrarToast('Error de conexión');
            }
        });
    }

    resetBookingState() {
        this.tipoClaseSeleccionado = 'individual';
        this.alumnoSeleccionado = null;
        this.alumnosSeleccionados = [];
        this.planificacionId = null;
        this.claseMallaId = null;
        this.packAAsignar = null;
        this.mostrarSelectorPackManual = false;
        this.recurrencia = 1;
        this.filtroAlumnos = '';
        this.onCategoriaChange();
    }

    cerrarModal() {
        this.isBookingModalOpen = false;
        this.isDetailModalOpen = false;
        this.isEditingDetail = false;
        this.selectedSlot = null;
        this.alumnoSeleccionado = null;
        this.alumnosSeleccionados = [];
        this.planificacionId = null;
        this.claseMallaId = null;
        this.packAAsignar = null;
        this.mostrarOpcionPack = false;
    }

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
        this.alumnosPacks = [];
        
        if (this.alumnoSeleccionado) {
            this.cargarPacksAlumno(this.alumnoSeleccionado.jugador_id || this.alumnoSeleccionado.id);
        }
    }

    cargarPacksAlumno(jugadorId: number) {
        this.cargandoPacks = true;
        this.entrenamientoService.getPacksAlumno(jugadorId).subscribe({
            next: (res: any) => {
                // Ensure calculating _disponibles for each pack consistently with the getter
                const rawPacks = Array.isArray(res) ? res : (res.data || res.packs || []);
                this.alumnosPacks = rawPacks.map((p: any) => {
                    const totales = Number(p.sesiones_totales || p.sesiones || 0);
                    const reservadas = Number(p.sesiones_reservadas || 0);
                    const restantes = p.sesiones_restantes !== undefined ? Number(p.sesiones_restantes) : (totales - reservadas);
                    p._disponibles = restantes - reservadas;
                    p.sesiones_restantes = restantes; // Standardize field name
                    return p;
                });
                
                if (this.alumnosPacksConCredito.length > 0 && this.alumnoSeleccionado) {
                    const activePack = this.alumnosPacksConCredito[0];
                    this.alumnoSeleccionado.pack_id = activePack.pack_id;
                    this.alumnoSeleccionado.pack_jugador_id = activePack.id || activePack.pack_jugador_id;
                    this.alumnoSeleccionado.sesiones_restantes = activePack.sesiones_restantes;
                    this.alumnoSeleccionado.pack_nombre = activePack.pack_nombre || activePack.nombre;
                } else if (this.alumnoSeleccionado) {
                    this.alumnoSeleccionado.sesiones_restantes = 0;
                    this.alumnoSeleccionado.pack_nombre = 'Sin Crédito Activo';
                }
                
                this.cargandoPacks = false;
                this.mostrarOpcionPack = this.alumnosPacksConCredito.length === 0 && (this.alumnoSeleccionado?.creditos_reales || 0) <= 0;
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

    isAlumnoSelected(alumno: any): boolean {
        return this.alumnosSeleccionados.some(a => (a.jugador_id || a.id) === (alumno.jugador_id || alumno.id));
    }

    onTipoClaseChange() {
        this.alumnosSeleccionados = [];
        this.alumnoSeleccionado = null;
        this.packAAsignar = null;
        this.mostrarSelectorPackManual = false;
        this.packGrupalSeleccionado = null;

        if (this.tipoClaseSeleccionado === 'grupal') {
            this.loadPacksGrupales();
        }
    }

    loadPacksGrupales() {
        this.entrenamientoService.getPacks(this.entrenadorId).subscribe({
            next: (res: any[]) => {
                this.packsGrupalesDisponibles = res.filter(p => p.tipo === 'grupal' && Number(p.activo) === 1);
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

    togglePackManual() {
        this.mostrarSelectorPackManual = !this.mostrarSelectorPackManual;
        if (!this.mostrarSelectorPackManual) {
            this.packAAsignar = null;
        }
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
        this.entrenamientoService.getMallaById(this.planificacionId).subscribe({
            next: (res: any) => {
                this.clasesDisponibles = res.clases || [];
                this.isLoading = false;
            },
            error: () => this.isLoading = false
        });
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
        if (this.tipoClaseSeleccionado === 'individual') {
            if (!this.alumnoSeleccionado || !this.selectedSlot) return;
        } else if (this.tipoClaseSeleccionado === 'multijugador') {
            if (this.alumnosSeleccionados.length === 0 || !this.selectedSlot) return;
        } else if (this.tipoClaseSeleccionado === 'grupal') {
            if (!this.selectedSlot) return;
        }

        if (this.mostrarSelectorPackManual && !this.packAAsignar) {
            this.mostrarToast('Atención: Seleccionaste un pack nuevo, pero no escogiste ninguno.');
            return;
        }

        const requiereNuevoPack = this.tipoClaseSeleccionado === 'individual' 
            ? (this.alumnosPacksConCredito.length === 0 && (this.alumnoSeleccionado?.creditos_reales || 0) <= 0)
            : (this.alumnosPacksConCredito.length === 0);

        if (requiereNuevoPack && !this.packAAsignar) {
            this.mostrarToast('Sin Saldo: Selecciona un pack nuevo para asignarle.');
            return;
        }

        const loading = await this.loadingCtrl.create({ message: 'Agendando...' });
        await loading.present();

        const primerJugador = this.alumnoSeleccionado;
        const jugadorIds = this.alumnosSeleccionados.map(a => a.jugador_id || a.id);

        const needsPack = this.packAAsignar || requiereNuevoPack;

        const obsPack = (needsPack && this.packAAsignar)
            ? this.entrenamientoService.insertPack({
                pack_id: this.packAAsignar.id || this.packAAsignar.pack_id,
                jugador_id: primerJugador.jugador_id || primerJugador.id,
                estado_pago: 'pendiente',
                metodo_pago: 'manual_entrenador'
              })
            : new Observable(obs => {
                let packIdSafe = primerJugador?.pack_jugador_id;
                if (this.alumnosPacksConCredito.length > 0) {
                    const fallback = this.alumnosPacksConCredito[0];
                    packIdSafe = fallback.id || fallback.pack_jugador_id;
                }
                obs.next({ success: true, pack_jugador_id: packIdSafe });
                obs.complete();
              });

        obsPack.subscribe({
            next: async (resP: any) => {
                let fId: any = 0;
                let fJugadorId: any = 0;

                // 0. Match from GROUP template if selected
                if (this.tipoClaseSeleccionado === 'grupal' && this.packGrupalSeleccionado) {
                    fId = this.packGrupalSeleccionado.id || this.packGrupalSeleccionado.pack_id || 0;
                    fJugadorId = 0;
                }
                // 1. Match from NEW pack assignment
                else if (this.packAAsignar) {
                    fId = this.packAAsignar.id || this.packAAsignar.pack_id || 0;
                    fJugadorId = resP.pack_jugador_id || 0;
                }
                // 2. Match from loaded packs with credits
                else if (this.alumnosPacksConCredito.length > 0) {
                    let best = this.alumnosPacksConCredito.find(p => String(p.id || p.pack_jugador_id) === String(primerJugador.pack_jugador_id));
                    if (!best) best = this.alumnosPacksConCredito[0];
                    fId = best.pack_id || best.id_pack || best.id || 0;
                    fJugadorId = best.id || best.pack_jugador_id || best.pack_id || fId || 0;
                    if (fId === fJugadorId && best.pack_id) fId = best.pack_id;
                }
                // 3. Speculative Detection from student object (EXHAUSTIVE SYNC WITH WEB)
                else if (primerJugador) {
                    const keys = ['pack_id', 'id_pack', 'idPack', 'pack_ids', 'pack_jugador_id', 'id_pack_jugador', 'id'];
                    for(const k of keys) {
                        const val = primerJugador[k];
                        if (val && String(val) !== '0' && String(val).length > 0) {
                            if (k === 'id' && Number(val) === Number(primerJugador.jugador_id || primerJugador.id)) continue;
                            fId = String(val).includes(',') ? val.split(',')[0].trim() : val;
                            break;
                        }
                    }
                    if (!fId || fId === 0) {
                        for(const k in primerJugador) {
                            if (k.toLowerCase().includes('id') && !k.toLowerCase().includes('jugador') && !k.toLowerCase().includes('usuario')) {
                                const val = primerJugador[k];
                                if (val && !isNaN(Number(val)) && Number(val) > 0 && Number(val) !== Number(primerJugador.jugador_id || primerJugador.id)) {
                                    fId = val;
                                    break;
                                }
                            }
                        }
                    }
                    fJugadorId = primerJugador.pack_jugador_id || primerJugador.id_pack_jugador || fId || 0;

                    // Fallback List By Name Match
                    if ((!fId || fId === 0) && primerJugador.pack_nombre && (primerJugador.creditos_reales > 0 || primerJugador.sesiones_restantes > 0)) {
                        const foundInCatalog = (this.packsDisponibles || []).find((p: any) => (p.nombre || p.titulo) === primerJugador.pack_nombre);
                        if (foundInCatalog) {
                            fId = foundInCatalog.id || foundInCatalog.pack_id || 0;
                            fJugadorId = fId;
                        }
                    }
                }

                if (!fId || Number(fId) === 0) {
                    if (!this.packAAsignar) {
                        loading.dismiss();
                        this.mostrarToast(`Error: No se detectó un identificador de Pack válido.`);
                        return;
                    }
                }

                const payloadReserva: any = {
                    entrenador_id: String(this.entrenadorId),
                    pack_id: String(fId),
                    pack_jugador_id: String(fJugadorId),
                    fecha: this.selectedSlot.dateStr,
                    hora_inicio: this.selectedSlot.hour,
                    hora_fin: this.getHoraFin(this.selectedSlot.hour),
                    jugador_id: primerJugador ? String(primerJugador.jugador_id || primerJugador.id) : '0',
                    jugador_nombre: primerJugador ? (primerJugador.jugador_nombre || 'Alumno') : 'Clase Abierta',
                    estado: 'reservado',
                    recurrencia: String(this.recurrencia || 1),
                    tipo: this.tipoClaseSeleccionado,
                    club_id: String(this.selectedSlot.slot.club_id || this.selectedClubId || 1),
                    malla_id: String(this.planificacionId || 0),
                    clase_id: String(this.claseMallaId || 0),
                    clase_titulo: this.clasesDisponibles.find(c => c.id == this.claseMallaId)?.titulo || ''
                };

                if (this.tipoClaseSeleccionado !== 'individual' && jugadorIds.length > 1) {
                    payloadReserva.jugador_ids = jugadorIds;
                    payloadReserva.jugador_nombre = this.alumnosSeleccionados.map(a => a.jugador_nombre).join(', ');
                }

                this.entrenamientoService.crearReserva(payloadReserva).subscribe({
                    next: () => {
                        if (this.planificacionId && this.claseMallaId) {
                            this.entrenamientoService.asignarMalla({
                                jugador_id: primerJugador.jugador_id || primerJugador.id,
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
                this.mostrarToast('Error al procesar el pack');
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
        return `${(h + 1).toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }

    async mostrarToast(msg: string) {
        const toast = await this.toastCtrl.create({ message: msg, duration: 2500, position: 'top' });
        toast.present();
    }

    goBack() {
        this.router.navigate(['/entrenador-home']);
    }

    getFotoUrl(data: any): string {
        if (!data) return '';
        let foto = data.jugador_foto || data.foto_perfil || data.foto || data.foto_jugador || (data.inscritos && data.inscritos[0] ? data.inscritos[0].foto : null) || data.jugador_imagen;
        
        if (!foto || foto.includes('placeholder') || foto.includes('imagen_defecto') || String(foto).includes('null')) {
            const nombre = data.jugador_nombre || data.nombre_jugador || data.nombre || 'U';
            return `https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}&background=ccff00&color=000&length=2&rounded=true&bold=true&size=128`;
        }
        
        if (foto.startsWith('http') || foto.startsWith('data:')) {
            return foto;
        }
        
        return `https://api.padelmanager.cl/prd/${foto}`;
    }
}

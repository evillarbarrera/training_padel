import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonIcon,
    IonFab,
    IonFabButton,
    IonSpinner,
    IonSegment,
    IonSegmentButton,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { addIcons } from 'ionicons';
import {
    searchOutline, peopleOutline, statsChartOutline, analyticsOutline,
    chevronBackOutline, calendarOutline, addCircleOutline, timeOutline,
    checkmarkCircleOutline, closeOutline, personCircleOutline, checkmarkCircle
} from 'ionicons/icons';
import { AlertController, LoadingController, ToastController } from '@ionic/angular/standalone';

@Component({
    selector: 'app-entrenador-agendar',
    templateUrl: './entrenador-agendar.page.html',
    styleUrls: ['./entrenador-agendar.page.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        IonContent,
        IonButton,
        IonInput,
        IonItem,
        IonLabel,
        IonIcon,
        IonFab,
        IonFabButton,
        IonSpinner,
        IonSegment,
        IonSegmentButton,
        IonSearchbar,
        IonSelect,
        IonSelectOption,
        IonModal,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons
    ]
})
export class EntrenadorAgendarPage implements OnInit {

    entrenadorId = Number(localStorage.getItem('userId'));
    isLoading = false;

    // Paso 1: Alumnos
    alumnos: any[] = [];
    filtroAlumnos: string = '';
    alumnoSeleccionado: any = null;
    isModalOpen: boolean = false;
    paginaActual: number = 1;
    elementosPorPagina: number = 4; // logic to control modal

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.calcularElementosPorPagina();
    }

    private calcularElementosPorPagina() {
        if (window.innerWidth >= 768) {
            this.elementosPorPagina = 9999;
            return;
        }
        // En móvil/tablet, restar altura de buscador, cabecera aprox 250px
        const alturaDisponible = window.innerHeight - 250;
        const filas = Math.max(2, Math.floor(alturaDisponible / 80)); // ion-item aprox 80px
        this.elementosPorPagina = filas;
    }

    // Paso 2: Recurrencia
    recurrencia: number = 1;

    // Paso 2.5: Club
    clubesDisponibles: any[] = [];
    selectedClubId: number | null = null;

    // Paso 3: Horarios
    horariosDisponibles: any[] = [];
    cargandoHorarios: boolean = false;
    diasAgenda: string[] = [];
    diaSeleccionado: string = '';
    horariosPorDia: any = {};
    tramoSeleccionado: 'manana' | 'tarde' | 'noche' = 'manana';

    constructor(
        private router: Router,
        private entrenamientoService: EntrenamientoService,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController
    ) {
        addIcons({
            searchOutline, peopleOutline, statsChartOutline, analyticsOutline,
            chevronBackOutline, calendarOutline, addCircleOutline, timeOutline,
            checkmarkCircleOutline, closeOutline, personCircleOutline
        });
    }

    ngOnInit() {
        this.calcularElementosPorPagina();
        this.cargarAlumnos();
    }

    cargarAlumnos() {
        this.isLoading = true;
        this.entrenamientoService.getMisAlumnos(this.entrenadorId).subscribe({
            next: (res: any[]) => {
                this.alumnos = res
                    .filter(a => (a.sesiones_restantes || 0) > 0)
                    .map(a => {
                        let foto = a.jugador_foto;
                        // Logic from AlumnosPage
                        if (!foto || foto.includes('placeholder') || foto.includes('imagen_defecto')) {
                            foto = `https://ui-avatars.com/api/?name=${encodeURIComponent(a.jugador_nombre)}&background=ccff00&color=000&length=2&rounded=true&bold=true&size=128`;
                        }
                        return {
                            ...a,
                            jugador_foto: foto
                        };
                    });
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error loading students:', err);
                this.isLoading = false;
            }
        });
    }

    get alumnosFiltrados() {
        if (!this.filtroAlumnos) return this.alumnos;
        const f = this.filtroAlumnos.toLowerCase();
        return this.alumnos.filter(a =>
            (a.jugador_nombre || '').toLowerCase().includes(f) ||
            (a.pack_nombre || '').toLowerCase().includes(f)
        );
    }

    get alumnosPaginados() {
        const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
        return this.alumnosFiltrados.slice(inicio, inicio + this.elementosPorPagina);
    }

    get totalPaginas() {
        return Math.ceil(this.alumnosFiltrados.length / this.elementosPorPagina);
    }

    cambiarPagina(delta: number) {
        const nuevaPagina = this.paginaActual + delta;
        if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas) {
            this.paginaActual = nuevaPagina;
        }
    }

    seleccionarAlumno(alumno: any) {
        console.log('Selected student:', alumno);
        this.alumnoSeleccionado = alumno;
        this.isModalOpen = true; // Open modal
        // Pass pack_id if the student data has it
        this.cargarDisponibilidadCoach(alumno.pack_id);
    }

    cerrarModal() {
        this.isModalOpen = false;
        this.alumnoSeleccionado = null;
        this.diaSeleccionado = ''; // Reset state
        this.horariosPorDia = {};
        this.horariosDisponibles = [];
        this.selectedClubId = null;
        this.clubesDisponibles = [];
    }

    onClubChange() {
        if (this.horariosDisponibles.length > 0) {
            this.organizarHorarios(this.horariosDisponibles);
        }
    }

    cargarDisponibilidadCoach(packId?: number) {
        this.cargandoHorarios = true;
        console.log('Fetching availability and agenda for trainer:', this.entrenadorId);

        // Fetch both availability and actual reservations to cross-check occupancy
        import('rxjs').then(({ forkJoin }) => {
            forkJoin({
                disponibilidad: this.entrenamientoService.getDisponibilidadEntrenador(this.entrenadorId, packId),
                reservas: this.entrenamientoService.getReservasEntrenador(this.entrenadorId)
            }).subscribe({
                next: (res) => {
                    console.log('Availability received:', res.disponibilidad);
                    console.log('Reservations received:', res.reservas);

                    const disponibilidad = res.disponibilidad;
                    const resData: any = res.reservas;

                    // The API returns { reservas_tradicionales: [], packs_grupales: [] }
                    // Handle both the object format and a flat array format just in case
                    const allReservas = Array.isArray(resData) ? resData : [
                        ...(resData?.reservas_tradicionales || []),
                        ...(resData?.packs_grupales || [])
                    ];

                    // Cross-check: Mark availability slots as occupied if there's a reservation
                    const availabilityMapeada = disponibilidad.map((slot: any) => {
                        const start = slot.fecha_inicio || slot.hora_inicio;
                        if (!start) return slot;

                        const isBooked = allReservas.some((r: any) => {
                            const rStart = r.fecha_inicio || (r.fecha && r.hora_inicio ? `${r.fecha} ${r.hora_inicio}` : r.hora_inicio);
                            return rStart === start;
                        });

                        return {
                            ...slot,
                            ocupado: slot.ocupado == 1 || isBooked ? 1 : 0
                        };
                    });

                    // Extraer clubes únicos
                    const clubMap = new Map();
                    availabilityMapeada.forEach((slot: any) => {
                        if (slot.club_id && !clubMap.has(slot.club_id)) {
                            clubMap.set(slot.club_id, {
                                id: slot.club_id,
                                nombre: slot.club_nombre,
                                direccion: slot.club_direccion
                            });
                        }
                    });
                    this.clubesDisponibles = Array.from(clubMap.values());

                    if (this.clubesDisponibles.length > 0 && !this.selectedClubId) {
                        this.selectedClubId = this.clubesDisponibles[0].id; // auto-select
                    }

                    this.horariosDisponibles = availabilityMapeada;
                    this.organizarHorarios(availabilityMapeada);
                    this.cargandoHorarios = false;
                },
                error: (err) => {
                    console.error('Error loading agenda:', err);
                    this.cargandoHorarios = false;
                    this.mostrarToast('Error al sincronizar agenda');
                }
            });
        });
    }

    organizarHorarios(horarios: any[]) {
        if (!horarios || !Array.isArray(horarios)) {
            console.warn('Invalid horarios format:', horarios);
            this.horariosPorDia = {};
            this.diasAgenda = [];
            return;
        }

        console.log('Starting to organize', horarios.length, 'slots');
        this.horariosPorDia = {};
        const diasSet = new Set<string>();

        horarios.forEach(h => {
            // Filtrar por club si hay alguno seleccionado
            if (this.selectedClubId && Number(h.club_id) !== Number(this.selectedClubId)) {
                return;
            }

            // Adapted for fecha_inicio and fecha_fin as seen in logs
            const startStr = h.fecha_inicio || h.hora_inicio;
            const endStr = h.fecha_fin || h.hora_fin;

            if (!startStr) return;

            try {
                // Ensure date format compatibility (Standardizing to T separator for iOS/Safari)
                const dateInicio = new Date(startStr.replace(' ', 'T'));
                let dateFin: Date;

                if (endStr) {
                    dateFin = new Date(endStr.replace(' ', 'T'));
                } else {
                    dateFin = new Date(dateInicio.getTime() + 60 * 60 * 1000); // +1 hour
                }

                if (isNaN(dateInicio.getTime())) {
                    console.warn('Invalid date detected for slot:', h);
                    return;
                }

                // Get date part for grouping (YYYY-MM-DD)
                const fechaS = startStr.split(' ')[0];
                diasSet.add(fechaS);

                if (!this.horariosPorDia[fechaS]) {
                    this.horariosPorDia[fechaS] = { manana: [], tarde: [], noche: [] };
                }

                const hObj = {
                    ...h,
                    dateInicio,
                    dateFin,
                    fecha: fechaS
                };

                const hora = dateInicio.getHours();
                if (hora < 12) this.horariosPorDia[fechaS].manana.push(hObj);
                else if (hora < 18) this.horariosPorDia[fechaS].tarde.push(hObj);
                else this.horariosPorDia[fechaS].noche.push(hObj);
            } catch (e) {
                console.error('Error processing slot:', h, e);
            }
        });

        this.diasAgenda = Array.from(diasSet).sort();
        console.log('Successfully organized days:', this.diasAgenda);

        if (this.diasAgenda.length > 0) {
            // Ensure first day is selected
            if (!this.diaSeleccionado || !this.diasAgenda.includes(this.diaSeleccionado)) {
                this.diaSeleccionado = this.diasAgenda[0];
            }
            this.actualizarTramoAutomatico();
        }
    }

    actualizarTramoAutomatico() {
        if (!this.diaSeleccionado || !this.horariosPorDia[this.diaSeleccionado]) return;

        const tramos = ['manana', 'tarde', 'noche'] as const;
        for (const t of tramos) {
            if (this.horariosPorDia[this.diaSeleccionado][t].length > 0) {
                this.tramoSeleccionado = t;
                break;
            }
        }
    }

    async seleccionarHorario(bloque: any) {
        if (bloque.ocupado) return;

        const alert = await this.alertCtrl.create({
            header: 'Confirmar Agendamiento',
            message: `¿Agendar clase para ${this.alumnoSeleccionado.jugador_nombre} el ${bloque.fecha} a las ${bloque.dateInicio.toTimeString().slice(0, 5)}?`,
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Confirmar',
                    handler: () => this.ejecutarAgendamiento(bloque)
                }
            ]
        });
        await alert.present();
    }

    async ejecutarAgendamiento(bloque: any) {
        const loading = await this.loadingCtrl.create({ message: 'Agendando...' });
        await loading.present();

        const payload = {
            entrenador_id: this.entrenadorId,
            pack_id: this.alumnoSeleccionado.pack_id,
            pack_jugador_id: this.alumnoSeleccionado.pack_jugador_id,
            club_id: bloque.club_id || this.selectedClubId,
            fecha: bloque.fecha,
            hora_inicio: bloque.dateInicio.toTimeString().slice(0, 5),
            hora_fin: bloque.dateFin.toTimeString().slice(0, 5),
            jugador_id: this.alumnoSeleccionado.jugador_id,
            estado: 'reservado',
            recurrencia: this.recurrencia,
            tipo: 'individual',
            cantidad_personas: 1
        };

        this.entrenamientoService.crearReserva(payload).subscribe({
            next: () => {
                loading.dismiss();
                this.mostrarToast('✅ Clase agendada exitosamente');
                this.router.navigate(['/entrenador-entrenamientos']);
            },
            error: (err) => {
                loading.dismiss();
                console.error('Error reserving:', err);
                const msg = err.error?.error || 'Error al agendar la clase';
                this.alertCtrl.create({ header: 'Conflicto de Horario', message: msg, buttons: ['OK'] }).then(a => a.present());
            }
        });
    }

    async mostrarToast(msg: string) {
        const toast = await this.toastCtrl.create({ message: msg, duration: 2500, position: 'top' });
        toast.present();
    }

    goBack() {
        this.router.navigate(['/entrenador-home']);
    }

    getInitials(name: string): string {
        if (!name) return '';
        const names = name.split(' ');
        let initials = names[0].substring(0, 1).toUpperCase();
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    }
}

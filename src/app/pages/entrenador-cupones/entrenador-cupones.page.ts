import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { addIcons } from 'ionicons';
import {
    chevronBackOutline, addOutline, trashOutline, createOutline,
    giftOutline, calendarOutline, personOutline, cubeOutline, closeOutline,
    checkmarkCircleOutline, alertCircleOutline, searchOutline, chevronDownOutline,
    addCircleOutline, chevronForwardOutline
} from 'ionicons/icons';

@Component({
    selector: 'app-entrenador-cupones',
    templateUrl: './entrenador-cupones.page.html',
    styleUrls: ['./entrenador-cupones.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IonicModule]
})
export class EntrenadorCuponesPage implements OnInit {
    cupones: any[] = [];
    isLoading = false;
    modalOpen = false;
    isSaving = false;
    entrenadorId: number = 0;

    alumnos: any[] = [];
    alumnosFiltrados: any[] = [];
    searchTermAlumno: string = '';
    packs: any[] = [];
    private searchSubject = new Subject<string>();
    isSearchingAlumno = false;

    nuevoCupon: any = {
        id: null,
        codigo: '',
        tipo_descuento: 'porcentaje',
        valor: 0,
        fecha_inicio: null,
        fecha_fin: null,
        jugador_id: null,
        pack_id: null,
        uso_maximo: null
    };

    // Pagination
    paginatedCupones: any[] = [];
    pageSize: number = 6;
    currentPage: number = 1;
    totalPages: number = 1;
    pages: number[] = [];

    @HostListener('window:resize', ['$event'])
    onResize(event?: any) {
        this.calculatePageSize();
    }

    constructor(
        private entrenamientoService: EntrenamientoService,
        private router: Router,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController
    ) {
        addIcons({
            chevronBackOutline, addOutline, trashOutline, createOutline,
            giftOutline, calendarOutline, personOutline, cubeOutline, closeOutline,
            checkmarkCircleOutline, alertCircleOutline, searchOutline,
            chevronDownOutline, addCircleOutline, chevronForwardOutline
        });

        // Setup remote search
        this.searchSubject.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            switchMap(term => {
                if (!term.trim()) {
                    this.isSearchingAlumno = false;
                    return [[]];
                }
                this.isSearchingAlumno = true;
                return this.entrenamientoService.searchAlumnos(term);
            })
        ).subscribe({
            next: (results) => {
                this.alumnosFiltrados = results;
                this.isSearchingAlumno = false;
            },
            error: () => {
                this.isSearchingAlumno = false;
            }
        });
    }

    ngOnInit() {
        this.entrenadorId = Number(localStorage.getItem('userId'));
        if (!this.entrenadorId) {
            this.router.navigate(['/login']);
            return;
        }
        this.calculatePageSize();
        this.loadCupones();
        this.loadAlumnos();
        this.loadPacks();
    }

    private calculatePageSize() {
        if (window.innerWidth >= 992) {
            this.pageSize = 12; // Desktop
        } else if (window.innerWidth >= 768) {
            this.pageSize = 8; // Tablet
        } else {
            this.pageSize = 5; // Mobile
        }
        this.updatePagination();
    }

    loadCupones() {
        this.isLoading = true;
        this.entrenamientoService.getCupones(this.entrenadorId).subscribe({
            next: (res) => {
                this.cupones = res;
                this.updatePagination();
                this.isLoading = false;
            },
            error: () => this.isLoading = false
        });
    }

    updatePagination() {
        this.totalPages = Math.ceil(this.cupones.length / this.pageSize) || 1;
        if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;

        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.paginatedCupones = this.cupones.slice(start, end);

        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    setPage(page: number) {
        this.currentPage = page;
        this.updatePagination();
    }

    loadAlumnos() {
        this.entrenamientoService.getMisAlumnos(this.entrenadorId).subscribe(res => {
            this.alumnos = res;
            this.alumnosFiltrados = res;
        });
    }

    filterAlumnos(event: any) {
        const term = event.target.value || '';
        this.searchTermAlumno = term;
        if (!term) {
            this.alumnosFiltrados = this.alumnos;
            return;
        }
        this.searchSubject.next(term);
    }

    seleccionarAlumno(alumno: any) {
        // Support both id/nombre and jugador_id/jugador_nombre styles
        this.nuevoCupon.jugador_id = alumno.id || alumno.jugador_id;
        this.searchTermAlumno = alumno.nombre || alumno.jugador_nombre;
        this.alumnosFiltrados = []; // Hide list
    }

    loadPacks() {
        this.entrenamientoService.getMisPacks(this.entrenadorId).subscribe(res => this.packs = res);
    }

    abrirModal(cupon: any = null) {
        if (cupon) {
            this.nuevoCupon = { ...cupon };
            const alumno = this.alumnos.find(a => a.id == cupon.jugador_id);
            this.searchTermAlumno = alumno ? alumno.nombre : '';
        } else {
            this.nuevoCupon = {
                id: null,
                entrenador_id: this.entrenadorId,
                codigo: '',
                tipo_descuento: 'porcentaje',
                valor: 0,
                fecha_inicio: null,
                fecha_fin: null,
                jugador_id: null,
                pack_id: null,
                uso_maximo: null
            };
            this.searchTermAlumno = '';
        }
        this.alumnosFiltrados = this.alumnos;
        this.modalOpen = true;
    }

    cerrarModal() {
        this.modalOpen = false;
    }

    async guardarCupon() {
        if (!this.nuevoCupon.codigo || this.nuevoCupon.valor <= 0) {
            const alert = await this.alertCtrl.create({
                header: 'Datos incompletos',
                message: 'Por favor ingresa un código y un valor válido.',
                buttons: ['OK']
            });
            await alert.present();
            return;
        }

        this.isSaving = true;
        const loading = await this.loadingCtrl.create({ message: 'Guardando...' });
        await loading.present();

        this.nuevoCupon.entrenador_id = this.entrenadorId;
        this.entrenamientoService.saveCupon(this.nuevoCupon).subscribe({
            next: () => {
                loading.dismiss();
                this.isSaving = false;
                this.modalOpen = false;
                this.loadCupones();
            },
            error: () => {
                loading.dismiss();
                this.isSaving = false;
            }
        });
    }

    async eliminarCupon(id: number) {
        const alert = await this.alertCtrl.create({
            header: 'Eliminar Cupón',
            message: '¿Estás seguro de que deseas eliminar este cupón?',
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: () => {
                        this.entrenamientoService.deleteCupon({ id, entrenador_id: this.entrenadorId }).subscribe(() => {
                            this.loadCupones();
                        });
                    }
                }
            ]
        });
        await alert.present();
    }

    goBack() {
        this.router.navigate(['/entrenador-home']);
    }

    handleRefresh(event: any) {
        this.isLoading = true;
        this.entrenamientoService.getCupones(this.entrenadorId).subscribe({
            next: (res) => {
                this.cupones = res;
                this.updatePagination();
                this.isLoading = false;
                event.target.complete();
            },
            error: () => {
                this.isLoading = false;
                event.target.complete();
            }
        });
    }

    isExpired(fechaFin: string): boolean {
        if (!fechaFin) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const end = new Date(fechaFin);
        return end < today;
    }
}

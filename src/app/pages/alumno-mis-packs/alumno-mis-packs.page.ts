import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PackAlumnoService } from '../../services/pack_alumno.service';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import {
    ticketOutline,
    peopleOutline,
    addCircleOutline,
    chevronBackOutline,
    mailOutline,
    personAddOutline,
    checkmarkCircleOutline
} from 'ionicons/icons';

@Component({
    selector: 'app-alumno-mis-packs',
    templateUrl: './alumno-mis-packs.page.html',
    styleUrls: ['./alumno-mis-packs.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class AlumnoMisPacksPage implements OnInit {
    userId: number = 0;
    jugadorNombre = localStorage.getItem('nombre') || 'Usuario';
    jugadorFoto = localStorage.getItem('foto_perfil') || '';
    fotoPerfil = localStorage.getItem('foto_perfil') || '';

    // Packs data
    allPacks: any[] = [];
    packsActivos: any[] = [];
    packsHistorial: any[] = [];

    // View state
    vistaActual: 'activos' | 'historial' = 'activos';
    isLoading: boolean = true;

    // Pagination
    paginaActual: number = 1;
    itemsPorPagina: number = 3;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.calcularItemsPorPagina();
    }

    private calcularItemsPorPagina() {
        if (window.innerWidth >= 768) {
            this.itemsPorPagina = 9999;
            return;
        }
        // En móvil/tablet, restar altura de tabs, nav, segmento
        const alturaDisponible = window.innerHeight - 300;
        const filas = Math.max(2, Math.floor(alturaDisponible / 160)); // Card height aprox 160
        const columnas = window.innerWidth > 768 ? 2 : 1;
        this.itemsPorPagina = filas * columnas;
    }

    // Modal Invitación
    showModalInvitacion: boolean = false;
    selectedPack: any = null;
    emailInvitado: string = '';

    constructor(
        private packService: PackAlumnoService,
        private mysqlService: MysqlService,
        private router: Router,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController
    ) {
        addIcons({
            ticketOutline,
            peopleOutline,
            addCircleOutline,
            chevronBackOutline,
            mailOutline,
            personAddOutline,
            checkmarkCircleOutline
        });
    }

    ngOnInit() {
        this.userId = Number(localStorage.getItem('userId'));
        if (!this.userId) {
            this.router.navigate(['/login']);
            return;
        }
        this.calcularItemsPorPagina();
        this.loadProfile();
        this.loadPacks();
    }

    ionViewWillEnter() {
        const savedFoto = localStorage.getItem('userFoto') || localStorage.getItem('foto_perfil');
        if (savedFoto) {
            this.fotoPerfil = this.getProfileImage(savedFoto);
            this.jugadorFoto = this.fotoPerfil;
        }
        this.loadProfile();
        this.loadPacks();
    }

    loadProfile() {
        this.mysqlService.getPerfil(this.userId).subscribe({
            next: (res) => {
                if (res.success) {
                    this.jugadorNombre = res.user.nombre;
                    const rawFoto = res.user.foto_perfil || res.user.foto;
                    if (rawFoto) {
                        localStorage.setItem('userFoto', rawFoto);
                        localStorage.setItem('foto_perfil', rawFoto);
                        this.fotoPerfil = this.getProfileImage(rawFoto);
                        this.jugadorFoto = this.fotoPerfil;
                    }
                }
            }
        });
    }

    loadPacks(event?: any) {
        this.isLoading = true;
        this.packService.getMisPacks(this.userId).subscribe({
            next: (res: any) => {
                this.allPacks = res.data || [];

                // Filtrar por estado de uso
                this.packsActivos = this.allPacks.filter(p => Number(p.sesiones_usadas) < Number(p.sesiones_totales));
                this.packsHistorial = this.allPacks.filter(p => Number(p.sesiones_usadas) >= Number(p.sesiones_totales));

                this.isLoading = false;
                this.paginaActual = 1; // Reset pagination
                if (event) event.target.complete();
            },
            error: (err) => {
                console.error('Error cargando packs:', err);
                this.isLoading = false;
                this.mostrarToast('Error al cargar tus packs', 'danger');
                if (event) event.target.complete();
            }
        });
    }

    handleRefresh(event: any) {
        this.loadPacks(event);
        this.loadProfile();
    }

    get packsVisibles() {
        const source = this.vistaActual === 'activos' ? this.packsActivos : this.packsHistorial;
        if (!source) return [];
        const start = (this.paginaActual - 1) * this.itemsPorPagina;
        return source.slice(start, start + this.itemsPorPagina);
    }

    get totalPaginas() {
        const source = this.vistaActual === 'activos' ? this.packsActivos : this.packsHistorial;
        return Math.ceil(source.length / this.itemsPorPagina);
    }

    cambiarPagina(delta: number) {
        this.paginaActual += delta;
    }

    onSegmentChange(event: any) {
        this.vistaActual = event.detail.value;
        this.paginaActual = 1;
    }

    abrirModalInvitacion(pack: any) {
        this.selectedPack = pack;
        this.emailInvitado = '';
        this.showModalInvitacion = true;
    }

    cerrarModal() {
        this.showModalInvitacion = false;
        this.selectedPack = null;
    }

    enviarInvitacion() {
        if (!this.emailInvitado || !this.emailInvitado.includes('@')) {
            this.mostrarToast('Ingresa un email válido', 'warning');
            return;
        }

        this.packService.invitarJugador(this.selectedPack.pack_jugador_id, this.emailInvitado).subscribe({
            next: (res: any) => {
                this.mostrarToast('✅ Invitación enviada con éxito', 'success');
                this.cerrarModal();
                this.loadPacks(); // Recargar para ver al nuevo miembro
            },
            error: (err) => {
                console.error('Error al invitar:', err);
                const msg = err.error?.error || 'No se pudo enviar la invitación';
                this.mostrarToast('❌ ' + msg, 'danger');
            }
        });
    }

    async mostrarToast(mensaje: string, color: string = 'primary') {
        const toast = await this.toastCtrl.create({
            message: mensaje,
            duration: 2500,
            position: 'bottom',
            color: color
        });
        toast.present();
    }

    irAComprar() {
        this.router.navigate(['/pack-alumno']);
    }

    goBack() {
        this.router.navigate(['/jugador-home']);
    }

    getProfileImage(url: any): string {
        if (!url || url === 'null' || url === 'undefined' || typeof url !== 'string') {
            return 'assets/avatar.png';
        }
        const cleanUrl = url.trim();
        if (!cleanUrl || cleanUrl === '' || cleanUrl.includes('imagen_defecto') || cleanUrl.includes('default_avatar')) {
            return 'assets/avatar.png';
        }
        if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://') || cleanUrl.startsWith('data:image')) {
            return cleanUrl;
        }
        if (cleanUrl.startsWith('assets/')) {
            return cleanUrl;
        }

        const path = cleanUrl.startsWith('/') ? cleanUrl.substring(1) : cleanUrl;
        if (path.startsWith('prd/') || path.startsWith('api_training/')) {
            return `https://api.padelmanager.cl/${path}`;
        }
        if (path.startsWith('uploads/')) {
            return `https://api.padelmanager.cl/${path}`;
        }
        return `https://api.padelmanager.cl/api_training/${path}`;
    }

    onImgError(event: any) {
        if (event && event.target) {
            const currentSrc: string = event.target.src || '';
            if (currentSrc.includes('api.padelmanager.cl/uploads/')) {
                event.target.src = currentSrc.replace('api.padelmanager.cl/uploads/', 'api.padelmanager.cl/api_training/uploads/');
            } else if (currentSrc.includes('/api_training/uploads/')) {
                event.target.src = currentSrc.replace('/api_training/uploads/', '/prd/uploads/');
            } else {
                event.target.src = 'assets/avatar.png';
            }
        }
    }
}

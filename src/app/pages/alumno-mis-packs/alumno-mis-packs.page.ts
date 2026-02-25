import { Component, OnInit } from '@angular/core';
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
    jugadorNombre: string = '';
    jugadorFoto: string | null = null;

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
        this.loadProfile();
        this.loadPacks();
    }

    ionViewWillEnter() {
        this.loadPacks();
    }

    loadProfile() {
        this.mysqlService.getPerfil(this.userId).subscribe({
            next: (res) => {
                if (res.success) {
                    this.jugadorNombre = res.user.nombre;
                    this.jugadorFoto = res.user.foto_perfil || res.user.foto || null;
                }
            }
        });
    }

    loadPacks() {
        this.isLoading = true;
        this.packService.getMisPacks(this.userId).subscribe({
            next: (res: any) => {
                this.allPacks = res.data || [];

                // Filtrar por estado de uso
                this.packsActivos = this.allPacks.filter(p => Number(p.sesiones_usadas) < Number(p.sesiones_totales));
                this.packsHistorial = this.allPacks.filter(p => Number(p.sesiones_usadas) >= Number(p.sesiones_totales));

                this.isLoading = false;
                this.paginaActual = 1; // Reset pagination
            },
            error: (err) => {
                console.error('Error cargando packs:', err);
                this.isLoading = false;
                this.mostrarToast('Error al cargar tus packs', 'danger');
            }
        });
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
}

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
    packs: any[] = [];
    isLoading: boolean = true;

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
                this.packs = res.data || [];
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error cargando packs:', err);
                this.isLoading = false;
                this.mostrarToast('Error al cargar tus packs', 'danger');
            }
        });
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

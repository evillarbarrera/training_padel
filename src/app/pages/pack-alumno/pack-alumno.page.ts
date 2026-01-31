import { Component, OnInit } from '@angular/core';
import { PackAlumnoService } from '../../services/pack_alumno.service';
import { PacksService } from '../../services/pack.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { ConfirmarPackModal } from '../../modals/confirmar-pack.modal';

import {
  IonicModule,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonToggle,
  IonRange,
  IonSpinner
} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline, locationOutline, mapOutline, globeOutline, funnelOutline, personCircleOutline } from 'ionicons/icons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-pack-alumno',
  templateUrl: './pack-alumno.page.html',
  styleUrls: ['./pack-alumno.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class PackAlumnoPage implements OnInit {

  packs: any[] = [];
  packsFiltrados: any[] = [];
  entrenadores: any[] = [];
  selectedEntrenador: number | null = null;
  displayedPacks: any[] = [];
  page = 1;
  pageSize = 10;

  packsPaginados: any[] = [];
  totalPages: number[] = [];

  // Geolocation
  useLocation = true;
  userLat: number | null = null;
  userLng: number | null = null;
  searchRadius = 50; // Default 50km
  isLoadingLocation = false;



  constructor(private modalCtrl: ModalController,
    private packsAlumno: PackAlumnoService,
    private packsService: PacksService,
    private router: Router,
    private alertCtrl: AlertController,
    private route: ActivatedRoute
  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      chevronBackOutline,
      logOutOutline,
      locationOutline,
      mapOutline,
      globeOutline,
      funnelOutline,
      personCircleOutline
    });
  }

  ngOnInit() {
    this.getCurrentLocation();
    this.checkPaymentStatus();
  }

  checkPaymentStatus() {
    this.route.queryParams.subscribe(params => {
      const status = params['status'];
      if (status === 'success') {
        this.mostrarCompraExitosa();
        // Clean URL
        this.router.navigate([], {
          queryParams: { 'status': null },
          queryParamsHandling: 'merge'
        });
      } else if (status === 'error_db' || status === 'error_token') {
        this.mostrarError();
      } else if (status === 'cancelled') {
        // Optional: Show cancelled message
      }
    });

  }

  // ... existing code ...

  async confirmarCompra(pack: any) {
    const jugadorId = Number(localStorage.getItem('userId'));

    const payload = {
      pack_id: Number(pack.id),
      jugador_id: jugadorId,
      amount: pack.precio,
      origin: 'https://padelmanager.cl/pack-alumno'
    };

    const loading = await this.alertCtrl.create({
      header: 'Procesando...',
      message: 'Redirigiendo a Webpay (Simulado)',
      backdropDismiss: false
    });
    await loading.present();

    this.packsAlumno.initTransaction(payload).subscribe({
      next: (res: any) => {
        loading.dismiss();
        if (res.token && res.url) {
          // For Mobile Mock, we can use GET for simplicity or Form.
          // Form is better but GET works with our Mock Bank.
          window.location.href = `${res.url}?token_ws=${res.token}`;
        } else {
          this.mostrarError();
        }
      },
      error: err => {
        loading.dismiss();
        console.error(err);
        this.mostrarError();
      }
    });
  }

  cargarEntrenadores() {
    const map = new Map();

    this.packs.forEach(p => {
      if (!map.has(p.entrenador_id)) {
        map.set(p.entrenador_id, {
          id: p.entrenador_id,
          nombre: p.entrenador_nombre
        });
      }
    });

    this.entrenadores = Array.from(map.values());
  }

  toggleLocation() {
    this.useLocation = !this.useLocation;
    if (this.useLocation) {
      this.getCurrentLocation();
    } else {
      this.userLat = null;
      this.userLng = null;
      this.cargarPacks(); // Reload all
    }
  }

  getCurrentLocation() {
    if (!navigator.geolocation) {
      this.alertCtrl.create({
        header: 'Error',
        message: 'Geolocalización no soportada.',
        buttons: ['OK']
      }).then(a => a.present());
      this.useLocation = false;
      return;
    }

    this.isLoadingLocation = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.userLat = pos.coords.latitude;
        this.userLng = pos.coords.longitude;
        this.isLoadingLocation = false;
        this.cargarPacks();
      },
      (err) => {
        console.error('Location error:', err);
        this.alertCtrl.create({
          header: 'Error',
          message: 'No se pudo obtener ubicación. Verifica permisos.',
          buttons: ['OK']
        }).then(a => a.present());
        this.isLoadingLocation = false;
        this.useLocation = false;
      }
    );
  }

  onRadiusChange(event: any) {
    this.searchRadius = Number(event.detail.value);
    if (this.useLocation && this.userLat && this.userLng) {
      this.cargarPacks();
    }
  }

  cargarPacks() {
    const lat = (this.useLocation && this.userLat) ? this.userLat : undefined;
    const lng = (this.useLocation && this.userLng) ? this.userLng : undefined;
    const rad = (this.useLocation) ? this.searchRadius : undefined;

    this.packsService.getAllPacks(lat, lng, rad).subscribe({
      next: (res: any) => {

        this.packs = res,
          this.cargarEntrenadores();
        this.packsFiltrados = [...this.packs];
        this.buildPagination();
        this.setPage(this.page)
      },
      error: err => console.error(err)
    });
  }

  buildPagination() {
    const pagesCount = Math.ceil(this.packs.length / this.pageSize);
    this.totalPages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  }

  setPage(page: number) {
    this.page = page;

    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.packsPaginados = this.packs.slice(start, end);
  }


  filtrarPacks() {
    let filtrados = [...this.packs];

    // Filtrar por entrenador
    if (this.selectedEntrenador) {
      filtrados = filtrados.filter(
        p => p.entrenador_id === this.selectedEntrenador
      );
    }

    this.packsFiltrados = filtrados;
    this.page = 1;
    this.actualizarPaginacion();
  }

  getEstadoGrupal(pack: any): string {
    if (pack.tipo !== 'grupal') return '';
    return pack.estado_grupo || 'pendiente';
  }

  getCuposDisplay(pack: any): string {
    if (pack.tipo !== 'grupal') return '';
    if (pack.estado_grupo === 'activo') {
      return `${pack.cupos_ocupados}/${pack.capacidad_maxima}`;
    }
    return `${pack.cupos_ocupados}/${pack.capacidad_minima}`;
  }

  getEstadoBadge(pack: any): string {
    if (pack.tipo !== 'grupal') return '';
    if (pack.cupos_ocupados >= pack.capacidad_maxima) {
      return '🔴'; // Completo
    }
    if (pack.estado_grupo === 'activo') {
      return '🟢'; // Activo
    }
    return '🟡'; // Pendiente
  }

  isPackCompleto(pack: any): boolean {
    return pack.tipo === 'grupal' && pack.cupos_ocupados >= pack.capacidad_maxima;
  }

  isPackGrupal(pack: any): boolean {
    return pack.tipo === 'grupal';
  }

  actualizarPaginacion() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.packsPaginados = this.packsFiltrados.slice(start, end);
  }



  goToHome() {
    this.router.navigate(['/jugador-home']);
  }

  goToAgenda() {
    this.router.navigate(['/jugador-agenda']);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  volver() {
    this.router.navigate(['/jugador-home']); // o la ruta correcta
  }



  async comprarPack(pack: any) {
    // Si es pack grupal, usar inscripción grupal
    if (pack.tipo === 'grupal') {
      return this.inscribirseGrupal(pack);
    }

    // Si es individual, usar proceso normal
    const modal = await this.modalCtrl.create({
      component: ConfirmarPackModal,
      componentProps: { pack }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data?.confirmar) {
      this.confirmarCompra(pack);
    }
  }

  async inscribirseGrupal(pack: any) {
    const jugadorId = Number(localStorage.getItem('userId'));

    try {
      const result = await this.packsAlumno.inscribirseGrupal(pack.id, jugadorId).toPromise();

      let mensaje = 'Te has inscrito correctamente al entrenamiento grupal.';

      if (result.estado_grupo === 'activo') {
        const duracion = result.cupos_ocupados >= 5 ? '120 minutos' : '90 minutos';
        mensaje += `\n\nEl entrenamiento se ha ACTIVADO con ${result.cupos_ocupados} jugadores.\nDuración: ${duracion}`;
      } else {
        mensaje += `\n\nFaltan ${pack.capacidad_minima - result.cupos_ocupados} jugadores para activarse.`;
      }

      const alert = await this.alertCtrl.create({
        header: 'Inscripción realizada',
        message: mensaje,
        buttons: ['OK']
      });

      await alert.present();
      this.cargarPacks(); // Recargar para actualizar cupos
    } catch (err: any) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: err.error?.error || 'No se pudo completar la inscripción',
        buttons: ['OK']
      });

      await alert.present();
    }
  }




  async mostrarCompraExitosa() {
    const alert = await this.alertCtrl.create({
      header: 'Compra registrada',
      message: 'El pack fue asignado correctamente. Coordina el pago directamente con el profesor.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async mostrarError() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'No se pudo registrar la compra. Intenta nuevamente.',
      buttons: ['OK']
    });

    await alert.present();
  }


}
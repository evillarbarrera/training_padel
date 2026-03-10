import { Component, OnInit, HostListener } from '@angular/core';
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
import { NotificationService } from '../../services/notification.service';

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
  useLocation = false;
  userLat: number | null = null;
  userLng: number | null = null;
  searchRadius = 50; // Default 50km
  isLoadingLocation = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calcularPageSize();
  }

  private calcularPageSize() {
    if (window.innerWidth >= 768) {
      this.pageSize = 9999;
      return;
    }
    // Restamos filtros, cabecera... aprox 350px
    const alturaDisponible = window.innerHeight - 350;
    const filas = Math.max(2, Math.floor(alturaDisponible / 160));
    const columnas = window.innerWidth > 768 ? 2 : 1;
    this.pageSize = filas * columnas;
  }


  constructor(private modalCtrl: ModalController,
    private packsAlumno: PackAlumnoService,
    private packsService: PacksService,
    private router: Router,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private notificationService: NotificationService
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
    this.calcularPageSize();
    // this.getCurrentLocation(); // Location disabled by request
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

  async confirmarCompra(pack: any, cuponId: number | null = null, precioFinal: number | null = null) {
    if (pack.transbank_activo == 1 || pack.transbank_activo == '1') {
      this.iniciarPagoTransbank(pack, cuponId, precioFinal);
    } else {
      this.comprarManual(pack, cuponId, precioFinal);
    }
  }

  async iniciarPagoTransbank(pack: any, cuponId: number | null = null, precioFinal: number | null = null) {
    const jugadorId = Number(localStorage.getItem('userId'));

    const payload = {
      pack_id: Number(pack.id),
      jugador_id: jugadorId,
      amount: precioFinal || pack.precio,
      cupon_id: cuponId,
      origin: window.location.origin + window.location.pathname
    };

    const loading = await this.alertCtrl.create({
      header: 'Procesando...',
      message: 'Redirigiendo a pasarela de pago...',
      backdropDismiss: false
    });
    await loading.present();

    this.packsAlumno.initTransaction(payload).subscribe({
      next: (res: any) => {
        loading.dismiss();
        if (res.token && res.url) {
          const separator = res.url.includes('?') ? '&' : '?';
          window.location.href = `${res.url}${separator}token_ws=${res.token}`;
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

  async comprarManual(pack: any, cuponId: number | null = null, precioFinal: number | null = null) {
    const loader = await this.alertCtrl.create({
      header: 'Procesando...',
      message: 'Activando pack...',
      backdropDismiss: false
    });
    await loader.present();

    const payload = {
      pack_id: Number(pack.id),
      jugador_id: Number(localStorage.getItem('userId')),
      cupon_id: cuponId,
      precio_pagado: precioFinal || pack.precio
    };

    this.packsAlumno.insertPackAlumno(payload).subscribe({
      next: (res: any) => {
        loader.dismiss();
        this.notificationService.notificarPackContratado(payload.jugador_id, pack.nombre);
        this.alertCtrl.create({
          header: '¡Éxito!',
          message: 'Pack activado correctamente. Coordina el pago directamente con tu profesor.',
          buttons: ['OK']
        }).then(a => a.present());
        this.cargarPacks();
      },
      error: (err) => {
        loader.dismiss();
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
    this.useLocation = false;
    this.userLat = null;
    this.userLng = null;
    this.cargarPacks();
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
      this.confirmarCompra(pack, data.cupon_id || null, data.precio_final || null);
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
      // Notification
      this.notificationService.notificarPackContratado(jugadorId, pack.nombre);
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
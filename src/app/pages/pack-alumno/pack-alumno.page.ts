import { Component, OnInit } from '@angular/core';
import { PackAlumnoService } from '../../services/pack_alumno.service';
import { PacksService } from '../../services/pack.service';
import { Router } from '@angular/router';
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
  IonIcon
} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline } from 'ionicons/icons';
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
  pageSize = 6;

  packsPaginados: any[] = [];
  totalPages: number[] = [];
  


  constructor(private modalCtrl: ModalController,
              private packsAlumno: PackAlumnoService, 
              private packsService: PacksService,
              private router: Router,
              private alertCtrl: AlertController
            ) {
    addIcons({
        settingsOutline,
        homeOutline,
        calendarOutline,
         chevronBackOutline,
        logOutOutline});
    }

  ngOnInit() {
    this.cargarPacks();

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

  cargarPacks() {
     this.packsService.getAllPacks().subscribe({
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
    if (this.selectedEntrenador) {
        this.packsFiltrados = this.packs.filter(
          p => p.entrenador_id === this.selectedEntrenador
        );
      } else {
        this.packsFiltrados = [...this.packs];
      }

      this.page = 1;
      this.actualizarPaginacion();
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


  confirmarCompra(pack: any) {
      const jugadorId = Number(localStorage.getItem('userId'));

      const payload = {
        pack_id: Number(pack.id),
        jugador_id: jugadorId,
        sesiones_usadas: 0,
        fecha_inicio: new Date().toISOString().split('T')[0],
        fecha_fin: null
      };

      console.log('PAYLOAD ENVIADO:', payload);

      this.packsAlumno.insertPackAlumno(payload).subscribe({
        next: () => {
          this.mostrarCompraExitosa();
        },
        error: err => {
          console.error(err);
          this.mostrarError();
        }
      });
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
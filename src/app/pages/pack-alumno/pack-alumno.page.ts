import { Component, OnInit } from '@angular/core';
import { PackAlumnoService } from '../../services/pack_alumno.service';
import { PacksService } from '../../services/pack.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  


  constructor(private packsAlumno: PackAlumnoService, 
              private packsService: PacksService,
              private router: Router) {}

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

    // get totalPages(): number {
    //   return Math.ceil(this.packsFiltrados.length / this.pageSize);
    // }


  comprarPack(pack: any) {
    // Guardar pack o redirigir a proceso de compra
    console.log('Comprar pack:', pack);
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
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonList,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonIcon,
  IonFab,
  IonFabButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-entrenador-packs',
  templateUrl: './entrenador-packs.page.html',
  styleUrls: ['./entrenador-packs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    // Ionic standalone components
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonItem,
    IonList,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonIcon,
    IonFab,
    IonFabButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class EntrenadorPacksPage implements OnInit {

  packs: any[] = [];
  filtered: any[] = [];
  filtro: string = '';
  searchText: string = '';
  filterUbicacion: string = '';
  packsFiltrados: any[] = [];

  constructor(private location: Location) {}

  ngOnInit() {
    this.cargarPacks();
  }

  cargarPacks() {
    // aquí luego conectamos Firestore
    this.packs = [
      { nombre: 'Pack 4 clases', precio: 40000, cantidad: 4, ubicacion: 'Rancagua', descripcion: 'Entrenamientos básicos' },
      { nombre: 'Pack 8 clases', precio: 70000, cantidad: 8, ubicacion: 'Machalí', descripcion: 'Entrenamientos avanzados' },
    ];
    this.filtered = [...this.packs];
  }

  filtrar() {
    this.filtered = this.packs.filter(p =>
      p.nombre.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.filterUbicacion ? p.ubicacion === this.filterUbicacion : true)
    );
  }

  goCreate() {
    console.log("Ir a crear pack");
  }

  goEdit(id: string) {
    console.log("Ir a editar pack", id);
}

  goBack() {
    this.location.back();
  }

}

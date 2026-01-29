import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  settingsOutline, homeOutline, calendarOutline, logOutOutline,
  albumsOutline, barbellOutline, personOutline, close,
  calendarNumberOutline, trophyOutline, barChartOutline
} from 'ionicons/icons';
import { ActionSheetController } from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';

@Component({
  selector: 'app-jugador-home',
  templateUrl: './jugador-home.page.html',
  styleUrls: ['./jugador-home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton
  ]
})
export class JugadorHomePage implements OnInit {

  jugadorNombre = "...";

  // Datos de Packs
  clasesPagadas = 0;
  clasesReservadas = 0;
  clasesDisponibles = 0;
  packsDetalle: any[] = [];

  constructor(
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private mysqlService: MysqlService
  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      logOutOutline,
      albumsOutline,
      barbellOutline,
      personOutline,
      close,
      calendarNumberOutline,
      trophyOutline,
      barChartOutline
    });
  }

  ngOnInit() {
    this.cargarStats();
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que la vista va a entrar (al navegar desde otras páginas)
    this.cargarStats();
  }

  cargarStats() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }

    this.mysqlService.getHomeStats(userId).subscribe({
      next: (res) => {
        this.jugadorNombre = res.nombre;

        // Datos de Packs
        if (res.estadisticas.packs) {
          this.clasesPagadas = res.estadisticas.packs.pagadas;
          this.clasesReservadas = res.estadisticas.packs.reservadas;
          this.clasesDisponibles = res.estadisticas.packs.disponibles;
          this.packsDetalle = res.estadisticas.packs.detalle || [];
        }
      },
      error: (err) => {
        console.error('Error al cargar estadísticas:', err);
      }
    });
  }

  agendar() {
    this.router.navigate(['/jugador-reservas']);
  }

  comprarPack() {
    this.router.navigate(['/pack-alumno']);
  }

  misHabilidades() {
    console.log('Navigating to Mis Habilidades...');
    this.router.navigate(['/mis-habilidades']);
  }

  goToHome() {
    this.router.navigate(['/jugador-home']);
  }

  goToAgenda() {
    this.router.navigate(['/jugador-reservas']);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  goToPackAlumno() {
    this.router.navigate(['/pack-alumno']);
  }

  async openSettings() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ajustes del Jugador',
      buttons: [
        {
          text: 'Mi Perfil',
          icon: 'person-outline',
          handler: () => {
            this.router.navigate(['/perfil']);
          }
        },
        {
          text: 'Mis Reservas',
          icon: 'calendar-number-outline',
          handler: () => {
            this.router.navigate(['/jugador-calendario']);
          }
        },
        {
          text: 'Cerrar sesión',
          icon: 'log-out-outline',
          role: 'destructive',
          handler: () => {
            this.logout();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}

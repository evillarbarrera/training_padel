import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline } from 'ionicons/icons';
import { ActionSheetController } from '@ionic/angular';




@Component({
  selector: 'app-jugador-home',
  templateUrl: './jugador-home.page.html',
  styleUrls: ['./jugador-home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton
  ]
})
export class JugadorHomePage implements OnInit {

  constructor(private router: Router,    private actionSheetCtrl: ActionSheetController,) {     
        addIcons({
          settingsOutline,
          homeOutline,
          calendarOutline,
          logOutOutline});
        }

  ngOnInit() {
  }

  jugadorNombre = "Emmanuel";

  entrenamientosRealizados = 12;
  entrenamientosPendientes = 3;
  totalMes = 15;

  agendar() {
    // Navegar a la pantalla de agenda
  }

  comprarPack() {
    // Navegar a packs
  }

  misHabilidades() {
    // Navegar habilidades
  }

  // Navegar a la página principal del jugador
  goToHome() {
    this.router.navigate(['/jugador-home']); // o la ruta que tengas de inicio
  }

  // Navegar a la agenda
  goToAgenda() {
   
  }

  // Cerrar sesión
  logout() {
    // Limpiar localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    // Redirigir al login
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
            this.router.navigate(['/perfil-jugador']);
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

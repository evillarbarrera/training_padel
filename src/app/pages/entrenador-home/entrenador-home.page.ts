import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonModule } from '@angular/common';
import { ActionSheetController } from '@ionic/angular';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-entrenador-home',
  standalone: true,
  imports: [CommonModule, IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton],
  templateUrl: './entrenador-home.page.html',
  styleUrls: ['./entrenador-home.page.scss']
})
export class EntrenadorHomePage {

  constructor(
    
    private router: Router,
    private authService: AuthService,
    private actionSheetCtrl: ActionSheetController,
    
  ) {
    addIcons({
        settingsOutline,
        homeOutline,
        calendarOutline,
        logOutOutline});
    }

  goToPacks() {
    this.router.navigate(['/entrenador-packs']);
  }

  goToAgenda() {
    this.router.navigate(['/entrenador-agenda']);
  }

  goToAlumnos() {
    this.router.navigate(['/alumnos']);
  }

  goToConfig() {
    this.router.navigate(['/entrenador-config']);
  }

  async logout() {
    // Limpiar token y userId del localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    await this.authService.logout
    this.router.navigate(['/login']);
  }

  goToHome() {
  this.router.navigate(['/entrenador-home']);
}

  async openSettings() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ajustes del Entrenador',
      buttons: [
        {
          text: 'Mi Perfil',
          icon: 'person-outline',
          handler: () => {
            this.router.navigate(['/perfil-profesor']);
          }
        },
        {
          text: 'Horarios disponibles',
          icon: 'time-outline',
          handler: () => {
            this.router.navigate(['/disponibilidad-entrenador']);
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

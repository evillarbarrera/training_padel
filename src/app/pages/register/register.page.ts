import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MysqlService } from '../../services/mysql.service';


import { IonContent, IonIcon, IonButton, IonInput, IonItem, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonContent, IonIcon, IonButton, IonInput, IonItem, IonSelect, IonSelectOption, FormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email = '';
  password = '';
  nombre = '';
  rol: 'jugador' | 'entrenador' = 'jugador'; // valor por defecto

  constructor(
    private router: Router,
    private mysqlService: MysqlService,
    private alertCtrl: AlertController
  ) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  register() {
    this.mysqlService.register(this.nombre, this.email, this.password, this.rol)
      .subscribe({
        next: async (res) => {
          if (res.success) {
            await this.presentAlert('Éxito', 'Usuario registrado con éxito');
            this.router.navigate(['/login']);
          } else {
            this.presentAlert('Error', res.message || 'Error desconocido');
          }
        },
        error: (err) => {
          console.error('Error en registro:', err);
          const msg = err.error?.error || err.error?.message || 'Error conectando al servidor';
          this.presentAlert('Error', msg);
        }
      });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
      cssClass: 'custom-alert'  // opcional para estilizar
    });

    await alert.present();
  }


}

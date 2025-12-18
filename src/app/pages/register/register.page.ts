import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email = '';
  password = '';
  nombre = '';
  rol: 'jugador' | 'entrenador' = 'jugador'; // valor por defecto

  constructor(private router: Router, private authService: AuthService, private alertCtrl: AlertController) {}

  goToLogin() {
  this.router.navigate(['/login']);
}

  async register() {
    try {
      const userCredential = await this.authService.register(this.email, this.password, this.nombre, this.rol);
      //alert('Usuario registrado con éxito');
      await this.presentAlert('Éxito', 'Usuario registrado con éxito');
      this.router.navigate(['/login']);
    } catch (err: any) {
      alert(err.message);
    }
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

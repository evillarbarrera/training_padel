import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MysqlService } from 'src/app/services/mysql.service';
import { Usuario } from '../../../model/usuario.model';
import { ToastController } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],   
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router,private mysql: MysqlService, private toastCtrl: ToastController,private http: HttpClient) {}

async showError(message: string) {
  const toast = await this.toastCtrl.create({
    message,
    duration: 2500,
    position: 'bottom',
    color: 'danger',
    icon: 'alert-circle-outline'
  });
  await toast.present();
}



  // Se ejecuta **solo cuando el usuario hace click en el botón**
async login() {
  this.mysql.login(this.email, this.password).subscribe({
    next: async (res) => {
      if (!res.success) {
        this.showError('Usuario o contraseña incorrectos');
        return;
      }

      localStorage.setItem('usuario', JSON.stringify(res.usuario));

      if (res.usuario.rol === 'entrenador') {
        this.router.navigateByUrl('/entrenador');
      } else {
        this.router.navigateByUrl('/jugador');
      }
    },
    error: () => this.showError('Error de conexión')
  });
}




  goToRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {

}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { MysqlService } from '../../services/mysql.service';

@Component({
  selector: 'app-jugador-progreso',
  templateUrl: './jugador-progreso.page.html',
  styleUrls: ['./jugador-progreso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonFab, IonFabButton, CommonModule, FormsModule]
})
export class JugadorProgresoPage implements OnInit {
  jugadorNombre = "...";
  fotoPerfil = "";

  constructor(private navCtrl: NavController, private mysqlService: MysqlService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) return;

    this.mysqlService.getPerfil(userId).subscribe({
      next: (res: any) => {
        if (res) {
          const userData = res.user || res;
          this.jugadorNombre = userData.nombre || 'Usuario';

          const p1 = userData.foto_perfil;
          const p2 = userData.foto;
          const p3 = userData.link_foto;
          let fotoRaw = p1 || p2 || p3;

          if (fotoRaw && fotoRaw.length > 5 && !fotoRaw.includes('imagen_defecto')) {
            this.fotoPerfil = fotoRaw.startsWith('http') ? fotoRaw : `https://api.padelmanager.cl/${fotoRaw.startsWith('/') ? fotoRaw.substring(1) : fotoRaw}`;
          } else {
            this.fotoPerfil = 'assets/avatar.png';
          }
        }
      }
    });
  }

  goBack() {
    this.navCtrl.back();
  }
}

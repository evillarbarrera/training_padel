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

          this.fotoPerfil = this.getProfileImage(fotoRaw);
        }
      }
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  getProfileImage(url: any): string {
    if (!url || url === 'null' || url === 'undefined' || typeof url !== 'string') {
      return 'assets/avatar.png';
    }
    const cleanUrl = url.trim();
    if (!cleanUrl || cleanUrl === '' || cleanUrl.includes('imagen_defecto') || cleanUrl.includes('default_avatar')) {
      return 'assets/avatar.png';
    }
    if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://') || cleanUrl.startsWith('data:image')) {
      return cleanUrl;
    }
    if (cleanUrl.startsWith('assets/')) {
      return cleanUrl;
    }

    const path = cleanUrl.startsWith('/') ? cleanUrl.substring(1) : cleanUrl;
    if (path.startsWith('prd/') || path.startsWith('api_training/')) {
      return `https://api.padelmanager.cl/${path}`;
    }
    if (path.startsWith('uploads/')) {
      return `https://api.padelmanager.cl/${path}`;
    }
    return `https://api.padelmanager.cl/api_training/${path}`;
  }

  onImgError(event: any) {
    if (event && event.target) {
      const currentSrc: string = event.target.src || '';
      if (currentSrc.includes('api.padelmanager.cl/uploads/')) {
        event.target.src = currentSrc.replace('api.padelmanager.cl/uploads/', 'api.padelmanager.cl/api_training/uploads/');
      } else if (currentSrc.includes('/api_training/uploads/')) {
        event.target.src = currentSrc.replace('/api_training/uploads/', '/prd/uploads/');
      } else {
        event.target.src = 'assets/avatar.png';
      }
    }
  }
}

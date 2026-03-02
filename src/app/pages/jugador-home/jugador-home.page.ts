import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonRefresher,
  IonRefresherContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  settingsOutline, homeOutline, calendarOutline, logOutOutline,
  albumsOutline, barbellOutline, personOutline, close,
  calendarNumberOutline, trophyOutline, barChartOutline,
  sparklesOutline, videocamOutline
} from 'ionicons/icons';
import { ActionSheetController, LoadingController } from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ViewChild, ElementRef } from '@angular/core';

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
    IonButton,
    IonRefresher,
    IonRefresherContent
  ]
})
export class JugadorHomePage implements OnInit {

  jugadorNombre = "...";
  fotoPerfil = "";

  // Datos de Packs
  clasesPagadas = 0;
  clasesReservadas = 0;
  clasesDisponibles = 0;
  clasesGrupales = 0;
  packsDetalle: any[] = [];
  proximaClase: any = null;
  isDev = !environment.production && environment.showSocialFeatures;

  // AI Analysis states
  @ViewChild('videoInput') videoInput!: ElementRef;
  aiResult: any = null;

  constructor(
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    private mysqlService: MysqlService,

    private http: HttpClient
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
      barChartOutline,
      sparklesOutline,
      videocamOutline
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

        // Try to get photo from stats first
        if (res.foto_perfil) {
          const foto = res.foto_perfil;
          this.fotoPerfil = foto.startsWith('http') ? foto : `https://api.padelmanager.cl/${foto}`;
        }

        // Datos de Packs
        if (res.estadisticas.packs) {
          this.clasesPagadas = res.estadisticas.packs.pagadas;
          this.clasesReservadas = res.estadisticas.packs.reservadas;
          this.clasesDisponibles = res.estadisticas.packs.disponibles;
          this.clasesGrupales = res.estadisticas.packs.grupales || 0;
          this.packsDetalle = res.estadisticas.packs.detalle || [];
        }

        if (res.prox_clase) {
          this.proximaClase = res.prox_clase;
        } else {
          this.proximaClase = null;
        }
      },
      error: (err) => {
        console.error('Error al cargar estadísticas:', err);
      }
    });

    // Double check with profile endpoint
    this.mysqlService.getPerfil(userId).subscribe({
      next: (res) => {
        if (res.success && res.user.foto_perfil) {
          const foto = res.user.foto_perfil;
          this.fotoPerfil = foto.startsWith('http') ? foto : `https://api.padelmanager.cl/${foto}`;
        }
      }
    });
  }

  handleRefresh(event: any) {
    this.cargarStats();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  getSaldoPercent(): number {
    if (this.clasesPagadas === 0) return 0;
    const pct = (this.clasesDisponibles / this.clasesPagadas) * 100;
    return Math.min(100, Math.max(0, pct));
  }

  agendar() {
    this.router.navigate(['/jugador-reservas']);
  }

  comprarPack() {
    this.router.navigate(['/pack-alumno']);
  }

  misHabilidades() {
    this.router.navigate(['/mis-habilidades']);
  }

  analizarVideo() {
    this.videoInput.nativeElement.click();
  }

  async onVideoSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const loading = await this.loadingCtrl.create({
      message: 'Gemini analizando técnica (esto puede tardar 1 min)...',
      spinner: 'dots',
      mode: 'ios',
      cssClass: 'ai-loading-custom'
    });
    await loading.present();

    // Prepare form data
    const formData = new FormData();
    formData.append('video', file);

    // Call our new backend proxy
    this.http.post<any>('https://api.padelmanager.cl/ia/gemini_analyze.php', formData)
      .subscribe({
        next: (res) => {
          loading.dismiss();
          if (res.success) {
            this.aiResult = res.analysis;
          }
        },
        error: (err) => {
          loading.dismiss();
          console.error('AI Analysis Error:', err);
        }
      });
  }

  goToHome() {
    this.router.navigate(['/jugador-home']);
  }

  goToAgenda() {
    this.router.navigate(['/jugador-reservas'], { queryParams: { view: 'agendar' } });
  }

  goToMisClases() {
    this.router.navigate(['/jugador-reservas'], { queryParams: { view: 'mis-entrenamientos' } });
  }

  logout() {
    console.log('Logging out player...');
    localStorage.clear();
    this.ngZone.run(() => {
      this.router.navigate(['/login'], { replaceUrl: true });
    });
  }

  goToMisPacks() {
    this.router.navigate(['/alumno-mis-packs']);
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

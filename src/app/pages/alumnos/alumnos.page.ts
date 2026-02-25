import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonIcon,
  IonBadge,
  IonFab,
  IonFabButton,
  IonSpinner,
  IonSegment,
  IonSegmentButton,
  IonRefresher,
  IonRefresherContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import {
  searchOutline, peopleOutline, statsChartOutline, analyticsOutline,
  chevronBackOutline, chevronForwardOutline, calendarOutline, addCircleOutline, timeOutline, checkmarkCircleOutline, closeOutline, videocamOutline
} from 'ionicons/icons';
import { AlertController, LoadingController, ToastController } from '@ionic/angular/standalone';
import { EvaluacionService } from '../../services/evaluacion.service';
import { NotificationService } from '../../services/notification.service';

interface AlumnoApi {
  jugador_id: number;
  jugador_nombre: string;
  pack_nombre: string | null;
  sesiones_pendientes: number;
  sesiones_reservadas: number;
  activo: number;
}

@Component({
  selector: 'app-alumnos',
  standalone: true,
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonIcon,
    IonBadge,
    IonFab,
    IonFabButton,
    IonSegment,
    IonSegmentButton,
    IonRefresher,
    IonRefresherContent,
    IonSpinner
  ],
})
export class AlumnosPage implements OnInit {

  private _filtro: string = '';
  get filtro(): string {
    return this._filtro;
  }
  set filtro(value: string) {
    this._filtro = value;
    this.paginaActual = 1; // Reset to first page on search
  }
  mostrarSoloActivos: boolean = false;

  alumnos: {
    id: number;
    nombre: string;
    pack: string | null;
    pagadas: number;
    pendientes: number;
    reservadas: number;
    grupales: number;
    activo: number;
    foto: string;
  }[] = [];


  constructor(
    private router: Router,
    private http: HttpClient,
    private mysqlService: MysqlService, // Injected here
    private entrenamientoService: EntrenamientoService,
    private evaluacionService: EvaluacionService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private notificationService: NotificationService
  ) {
    addIcons({
      searchOutline, peopleOutline, statsChartOutline, analyticsOutline, videocamOutline,
      chevronBackOutline, chevronForwardOutline, calendarOutline, addCircleOutline, timeOutline,
      checkmarkCircleOutline, closeOutline
    });
  }

  // Booking Modal State
  showBookingModal: boolean = false;
  selectedAlumno: any = null;
  horariosDisponibles: any[] = [];
  cargandoHorarios: boolean = false;
  diasAgenda: string[] = [];
  diaSeleccionado: string = '';
  horariosPorDia: any = {};
  tramoSeleccionado: 'manana' | 'tarde' | 'noche' = 'manana';
  entrenadorId = Number(localStorage.getItem('userId'));

  ngOnInit() {
    this.cargarAlumnos();
  }

  cargarAlumnos(event?: any) {
    const profesorId = localStorage.getItem('userId');

    this.http.get<any[]>(
      `https://api.padelmanager.cl/alumno/get_alumno.php?entrenador_id=${profesorId}`,
      {
        headers: {
          Authorization: 'Bearer ' + btoa('1|padel_academy')
        }
      }
    ).subscribe({
      next: (res: any[]) => {
        console.log('API Response Alumnos:', res); // Log entire response
        if (!res) {
          this.alumnos = [];
          if (event) event.target.complete();
          return;
        }

        this.alumnos = res.map((a: any) => {
          // Debugging - Remove after fixing
          console.log(`Checking photo for ${a.jugador_nombre}:`, {
            foto_perfil: a.foto_perfil,
            foto: a.foto
          });

          // Priority cleanup and validation of photo fields
          const p1 = a.foto_perfil && String(a.foto_perfil).length > 5 ? a.foto_perfil : null;
          const p2 = a.foto && String(a.foto).length > 5 ? a.foto : null;
          let fotoRaw = p1 || p2;
          let fotoUrl = "";

          if (fotoRaw && !fotoRaw.includes('imagen_defecto')) {
            if (!fotoRaw.startsWith('http')) {
              const cleanPath = fotoRaw.startsWith('/') ? fotoRaw.substring(1) : fotoRaw;
              fotoUrl = `https://api.padelmanager.cl/${cleanPath}`;
            } else {
              fotoUrl = fotoRaw;
            }
          } else {
            fotoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(a.jugador_nombre)}&background=ccff00&color=000`;
          }

          console.log(`Final URL for ${a.jugador_nombre}:`, fotoUrl);

          return {
            id: a.jugador_id,
            nombre: a.jugador_nombre,
            pack: a.pack_nombres,
            pagadas: Number(a.sesiones_pagadas),
            pendientes: Number(a.sesiones_pendientes || 0),
            reservadas: Number(a.sesiones_reservadas || 0),
            grupales: Number(a.sesiones_grupales || 0),
            activo: 1,
            foto: fotoUrl
          };
        });

        // Fetch detailed profile for missing photos
        this.alumnos.forEach((alumno, index) => {
          // Only fetch if fallback was used (contains ui-avatars) or force update
          if (alumno.foto.includes('ui-avatars')) {
            this.mysqlService.getPerfil(alumno.id).subscribe({
              next: (profile: any) => {
                const p = profile.user || profile; // Handle potential wrapper
                let updatedFoto = p.foto_perfil || p.link_foto;

                if (updatedFoto && typeof updatedFoto === 'string' && !updatedFoto.includes('imagen_defecto') && updatedFoto.length > 0) {
                  if (!updatedFoto.startsWith('http')) {
                    const cleanPath = updatedFoto.startsWith('/') ? updatedFoto.substring(1) : updatedFoto;
                    updatedFoto = `https://api.padelmanager.cl/${cleanPath}`;
                  }
                  // Update view
                  this.alumnos[index].foto = updatedFoto;
                }
              },
              error: (err) => console.warn(`Error fetching photo for ${alumno.nombre}`, err)
            });
          }
        });
        if (event) event.target.complete();
      },
      error: (err: any) => {
        console.error('Error cargando alumnos', err);
        if (event) event.target.complete();
      }
    });
  }

  handleRefresh(event: any) {
    this.cargarAlumnos(event);
  }

  verProgreso(alumnoId: number) {
    this.router.navigate(['/mis-habilidades', alumnoId]);
  }

  evaluar(alumnoId: number) {
    this.router.navigate(['/evaluar', alumnoId]);
  }

  // Pagination
  paginaActual: number = 1;
  elementosPorPagina: number = 3;

  get alumnosFiltrados() {
    const cleanFilter = this.filtro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return this.alumnos.filter(alumno => {
      const cleanNombre = (alumno.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      const coincideNombre = cleanNombre.includes(cleanFilter);

      const coincideActivo = this.mostrarSoloActivos
        ? alumno.activo === 1
        : true;

      return coincideNombre && coincideActivo;
    });
  }

  get alumnosPaginados() {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    return this.alumnosFiltrados.slice(inicio, inicio + this.elementosPorPagina);
  }

  get totalPaginas() {
    return Math.ceil(this.alumnosFiltrados.length / this.elementosPorPagina);
  }

  cambiarPagina(delta: number) {
    const nuevaPagina = this.paginaActual + delta;
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas) {
      this.paginaActual = nuevaPagina;
    }
  }

  agendar(alumno: any) {
    this.selectedAlumno = alumno;
    this.showBookingModal = true;
    this.cargarDisponibilidadCoach();
  }

  cargarDisponibilidadCoach() {
    this.cargandoHorarios = true;
    this.entrenamientoService.getDisponibilidadEntrenador(this.entrenadorId).subscribe({
      next: (res: any[]) => {
        this.horariosDisponibles = res;
        this.organizarHorarios(res);
        this.cargandoHorarios = false;
      },
      error: (err) => {
        console.error('Error cargando disponibilidad coaching:', err);
        this.cargandoHorarios = false;
      }
    });
  }

  organizarHorarios(horarios: any[]) {
    this.horariosPorDia = {};
    const diasSet = new Set<string>();

    horarios.forEach(h => {
      const fechaS = h.fecha;
      diasSet.add(fechaS);

      if (!this.horariosPorDia[fechaS]) {
        this.horariosPorDia[fechaS] = { manana: [], tarde: [], noche: [] };
      }

      // Parse hour from string "HH:MM:SS" or "HH:MM"
      const horaStr = String(h.hora_inicio);
      const hora = parseInt(horaStr.split(':')[0], 10);

      if (hora < 12) this.horariosPorDia[fechaS].manana.push(h);
      else if (hora < 18) this.horariosPorDia[fechaS].tarde.push(h);
      else this.horariosPorDia[fechaS].noche.push(h);
    });

    this.diasAgenda = Array.from(diasSet).sort();
    if (this.diasAgenda.length > 0) {
      this.diaSeleccionado = this.diasAgenda[0];
    }
  }

  async seleccionarHorario(bloque: any) {
    if (bloque.ocupado) return;

    // Use string slicing directly
    const horaInicioFormatted = String(bloque.hora_inicio).slice(0, 5);

    const alert = await this.alertCtrl.create({
      header: 'Confirmar Agendamiento',
      message: `¿Agendar clase para ${this.selectedAlumno.nombre} el ${bloque.fecha} a las ${horaInicioFormatted}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Confirmar',
          handler: () => this.ejecutarAgendamiento(bloque)
        }
      ]
    });
    await alert.present();
  }

  async ejecutarAgendamiento(bloque: any) {
    const loading = await this.loadingCtrl.create({ message: 'Agendando...' });
    await loading.present();

    // Necesitamos el pack_id del alumno. 
    // Usaremos el getEntrenadorPorJugador para obtener sus packs activos con este coach
    this.entrenamientoService.getEntrenadorPorJugador(this.selectedAlumno.id).subscribe({
      next: (res: any[]) => {
        const packActivo = res.find(p => Number(p.sesiones_restantes) > 0);

        if (!packActivo) {
          loading.dismiss();
          this.mostrarToast('❌ El alumno no tiene créditos disponibles para este entrenador');
          return;
        }

        const payload = {
          entrenador_id: this.entrenadorId,
          pack_id: packActivo.pack_id,
          pack_jugador_id: packActivo.pack_jugador_id,
          fecha: bloque.fecha,
          hora_inicio: String(bloque.hora_inicio).slice(0, 5),
          hora_fin: String(bloque.hora_fin).slice(0, 5),
          jugador_id: this.selectedAlumno.id,
          estado: 'reservado',
          tipo: 'individual',
          cantidad_personas: 1
        };

        this.entrenamientoService.crearReserva(payload).subscribe({
          next: () => {
            loading.dismiss();

            // Notifications
            this.notificationService.notificarReservaCreada(this.selectedAlumno.id, packActivo.pack_nombre || 'Entrenamiento', payload.fecha, payload.hora_inicio);
            this.notificationService.programarRecordatorio(this.selectedAlumno.id, packActivo.pack_nombre || 'Entrenamiento', payload.fecha, payload.hora_inicio);

            this.showBookingModal = false;
            this.mostrarToast('✅ Clase agendada exitosamente');
            this.cargarAlumnos(); // Refresh stats
          },
          error: (err) => {
            loading.dismiss();
            console.error('Error reserving:', err);
            this.mostrarToast('❌ Error al agendar la clase');
          }
        });
      },
      error: () => {
        loading.dismiss();
        this.mostrarToast('❌ Error al verificar créditos del alumno');
      }
    });
  }

  async mostrarToast(msg: string) {
    const toast = await this.toastCtrl.create({ message: msg, duration: 2500, position: 'top' });
    toast.present();
  }

  goToHome() {
    this.router.navigate(['/entrenador-home']);
  }

  async subirVideo(alumnoId: number) {
    const alert = await this.alertCtrl.create({
      header: 'Subir Video',
      subHeader: 'Requisitos del archivo',
      message: '• Formato: MP4, MOV, AVI o WMV\n• Tamaño máximo: 20MB\n• Nota: Se recomiendan videos cortos.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Seleccionar',
          handler: () => {
            const input = document.getElementById(`videoInput-${alumnoId}`) as HTMLInputElement;
            if (input) {
              input.click();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async onVideoSelected(event: any, alumnoId: number) {
    const file = event.target.files?.[0];
    if (!file) return;

    // Video Validation
    const allowedExtensions = ['mp4', 'mov', 'avi', 'wmv'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      this.mostrarToast('❌ Formato no permitido. Use MP4 o MOV.');
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      this.mostrarToast('❌ El video supera los 20MB permitidos.');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Subiendo video...',
      cssClass: 'custom-loading'
    });
    await loading.present();

    const formData = new FormData();
    formData.append('video', file);
    formData.append('jugador_id', alumnoId.toString());
    formData.append('entrenador_id', this.entrenadorId.toString());
    formData.append('titulo', 'Video de entrenamiento');
    formData.append('comentario', '');

    this.evaluacionService.uploadVideo(formData).subscribe({
      next: (res) => {
        loading.dismiss();
        this.mostrarToast('✅ Video subido correctamente');
        // Reset input
        event.target.value = '';
      },
      error: (err) => {
        loading.dismiss();
        console.error('Error subiendo video:', err);
        const detail = err.error?.error || 'Error de conexión';
        this.mostrarToast(`❌ Error al subir: ${detail}`);
        event.target.value = '';
      }
    });
  }

  getInitials(name: string): string {
    if (!name) return '??';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }
}

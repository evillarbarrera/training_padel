import { Component, OnInit, HostListener } from '@angular/core';
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
  chevronBackOutline, chevronForwardOutline, calendarOutline, addCircleOutline, timeOutline, checkmarkCircleOutline, closeOutline, videocamOutline, personAddOutline, mailOutline
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
      checkmarkCircleOutline, closeOutline, personAddOutline, mailOutline
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

  // Creación de Alumno Modal State
  isCreatingAlumno: boolean = false;
  nuevoAlumno = { nombre: '', email: '' };

  // Pagination
  paginaActual: number = 1;
  elementosPorPagina: number = 5; // Default

  @HostListener('window:resize')
  onResize() {
    this.calcularElementosPorPagina();
  }

  private calcularElementosPorPagina() {
    if (window.innerWidth >= 768) {
      this.elementosPorPagina = 9999;
      return;
    }
    // Restamos el header y filtros (aprox 200px)
    const availableHeight = window.innerHeight - 200;

    // Altura aprox de cada tarjeta (List Item) en Alumnos es 80-100px.
    const cardHeight = 90;

    // Cuántas caben en la pantalla
    const filas = Math.max(3, Math.floor(availableHeight / cardHeight)); // min 3

    // Si estamos en tablet portrait, puede que queramos más ancho pero sigamos con lista vertical
    const columnas = 1; // En ionic list view suele ser 1 columna

    this.elementosPorPagina = filas * columnas;
    console.log(`Paginación dinámica: ${this.elementosPorPagina} items (${filas}x${columnas})`);
  }

  ngOnInit() {
    this.calcularElementosPorPagina();
    this.cargarAlumnos();
  }

  cargarAlumnos(event?: any) {
    const profesorId = localStorage.getItem('userId');

    this.mysqlService.getAlumnos(Number(profesorId)).subscribe({
      next: (res: any[]) => {
        console.log('API Response Alumnos:', res); // Log entire response
        if (!res) {
          this.alumnos = [];
          if (event) event.target.complete();
          return;
        }

        this.alumnos = res.map((a: any) => {
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
          if (alumno.foto.includes('ui-avatars')) {
            this.mysqlService.getPerfil(alumno.id).subscribe({
              next: (profile: any) => {
                const p = profile.user || profile;
                let updatedFoto = p.foto_perfil || p.link_foto;

                if (updatedFoto && typeof updatedFoto === 'string' && !updatedFoto.includes('imagen_defecto') && updatedFoto.length > 0) {
                  if (!updatedFoto.startsWith('http')) {
                    const cleanPath = updatedFoto.startsWith('/') ? updatedFoto.substring(1) : updatedFoto;
                    updatedFoto = `https://api.padelmanager.cl/${cleanPath}`;
                  }
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

  get alumnosFiltrados() {
    const cleanFilter = this.filtro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return this.alumnos.filter(alumno => {
      const cleanNombre = (alumno.nombre || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const coincideNombre = cleanNombre.includes(cleanFilter);
      const coincideActivo = this.mostrarSoloActivos ? alumno.activo === 1 : true;
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
    const horaInicioFormatted = String(bloque.hora_inicio).slice(0, 5);
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Agendamiento',
      message: `¿Agendar clase para ${this.selectedAlumno.nombre} el ${bloque.fecha} a las ${horaInicioFormatted}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Confirmar', handler: () => this.ejecutarAgendamiento(bloque) }
      ]
    });
    await alert.present();
  }

  async ejecutarAgendamiento(bloque: any) {
    const loading = await this.loadingCtrl.create({ message: 'Agendando...' });
    await loading.present();

    this.entrenamientoService.getEntrenadorPorJugador(this.selectedAlumno.id).subscribe({
      next: (res: any[]) => {
        const packActivo = res.find(p => Number(p.sesiones_restantes) > 0);
        if (!packActivo) {
          loading.dismiss();
          this.mostrarToast('❌ El alumno no tiene créditos disponibles');
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
            this.notificationService.notificarReservaCreada(this.selectedAlumno.id, packActivo.pack_nombre || 'Entrenamiento', payload.fecha, payload.hora_inicio);
            this.showBookingModal = false;
            this.mostrarToast('✅ Clase agendada exitosamente');
            this.cargarAlumnos();
          },
          error: (err) => {
            loading.dismiss();
            const msg = err.error?.error || 'Error al agendar la clase';
            this.alertCtrl.create({ header: 'Error', message: msg, buttons: ['OK'] }).then(a => a.present());
          }
        });
      },
      error: () => {
        loading.dismiss();
        this.mostrarToast('❌ Error al verificar créditos');
      }
    });
  }

  async mostrarToast(msg: string) {
    const toast = await this.toastCtrl.create({ message: msg, duration: 2500, position: 'top' });
    toast.present();
  }

  // --- REGISTRO DE ALUMNO ---
  mostrarModalCrear() {
    this.isCreatingAlumno = true;
    this.nuevoAlumno = { nombre: '', email: '' };
  }

  cerrarModalCrear() {
    this.isCreatingAlumno = false;
  }

  async crearAlumno() {
    if (!this.nuevoAlumno.nombre || !this.nuevoAlumno.email) {
      this.mostrarToast('Por favor completa todos los campos');
      return;
    }

    const loading = await this.loadingCtrl.create({ message: 'Registrando alumno y enviando correo...' });
    await loading.present();

    this.mysqlService.crearAlumno({
      ...this.nuevoAlumno,
      entrenador_id: this.entrenadorId
    }).subscribe({
      next: (res) => {
        loading.dismiss();
        if (res.success) {
          const mailMsg = res.mail_sent ? 'y se ha enviado el correo de bienvenida.' : 'pero falló el envío del correo (verificar la configuración SMTP).';
          this.mostrarToast(`✅ Alumno registrado con éxito ${mailMsg}`);
          this.cerrarModalCrear();
          this.cargarAlumnos();
        } else {
          this.mostrarToast(`❌ Error: ${res.message || 'Error desconocido'}`);
        }
      },
      error: (err) => {
        loading.dismiss();
        const msg = err.error?.error || 'Error al intentar crear al alumno';
        this.mostrarToast(`❌ ${msg}`);
      }
    });
  }

  goToHome() {
    this.router.navigate(['/entrenador-home']);
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

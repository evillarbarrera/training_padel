import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
  IonFabButton,
  IonBadge,
  IonSpinner,
  IonButton,
  IonFab,
  IonFooter,
  IonAlert
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  timeOutline,
  personOutline,
  fitnessOutline,
  closeCircleOutline
} from 'ionicons/icons';
import { AlertController, ToastController } from '@ionic/angular/standalone';

interface DiaAgenda {
  nombre: string;
  fecha: string;
  diaNumero: number; // Guardar el getDay() correcto aquí
  data: any[];
}

@Component({
  selector: 'app-entrenador-entrenamientos',
  templateUrl: './entrenador-entrenamientos.page.html',
  styleUrls: ['./entrenador-entrenamientos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonIcon,
    IonFabButton,
    IonBadge,
    IonSpinner,
    IonButton,
    IonFab
  ]
})
export class EntrenadorEntrenamientosPage implements OnInit {

  dias: DiaAgenda[] = [];
  diaSeleccionado: string = '';
  cargando: boolean = true;
  entrenadorId = Number(localStorage.getItem('userId'));

  constructor(
    private mysqlService: MysqlService,
    private notificationService: NotificationService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    addIcons({
      chevronBackOutline,
      timeOutline,
      personOutline,
      fitnessOutline,
      closeCircleOutline
    });

  }

  ngOnInit() {
    this.generarFechas();
    this.cargarAgenda();
  }

  generarFechas() {
    const nombresDias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const hoy = new Date();

    for (let i = 0; i < 6; i++) {
      const fecha = new Date();
      fecha.setDate(hoy.getDate() + i);

      // Formato local YYYY-MM-DD
      const y = fecha.getFullYear();
      const m = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const d = fecha.getDate().toString().padStart(2, '0');
      const fechaStr = `${y}-${m}-${d}`;

      const diaNumero = fecha.getDay(); // 0 (Sun) to 6 (Sat)

      this.dias.push({
        nombre: i === 0 ? 'Hoy' : nombresDias[diaNumero],
        fecha: fechaStr,
        diaNumero: diaNumero, // Guardar para luego
        data: []
      });
    }
    this.diaSeleccionado = this.dias[0].fecha;
  }

  cargarAgenda() {
    this.cargando = true;
    this.mysqlService.getEntrenadorAgenda(this.entrenadorId).subscribe({
      next: (res: any) => {
        // res ahora tiene estructura: {reservas_tradicionales: [], packs_grupales: []}
        const todasReservas: any[] = [];

        // Agregar reservas tradicionales
        if (res.reservas_tradicionales && Array.isArray(res.reservas_tradicionales)) {
          todasReservas.push(...res.reservas_tradicionales);
        }

        // Agregar packs grupales
        if (res.packs_grupales && Array.isArray(res.packs_grupales)) {
          const packsGrupalesMapeados = res.packs_grupales.map((pack: any) => ({
            ...pack,
            reserva_id: pack.id || pack.pack_id, // Puede ser id o pack_id
            fecha: null, // Los packs grupales no tienen fecha específica, son recurrentes
            tipo: 'grupal',
            estado: pack.estado_grupo
          }));
          todasReservas.push(...packsGrupalesMapeados);
        }



        // Distribuir en días
        this.dias.forEach(dia => {
          const diaBDFormato = dia.diaNumero; // 0-6 en formato correcto

          // 1. Obtener reservas específicas para este día (fecha exacta)
          const reservasDia = todasReservas
            .filter(r => r.tipo !== 'grupal' && r.fecha === dia.fecha)
            .map(r => {
              const inscritos = r.inscritos || [];
              const jugadores = inscritos.map((ins: any) => {
                let foto = ins.foto;
                if (foto && foto.length > 5 && !foto.includes('imagen_defecto')) {
                  if (!foto.startsWith('http')) {
                    const cleanPath = foto.startsWith('/') ? foto.substring(1) : foto;
                    foto = `https://api.padelmanager.cl/${cleanPath}`;
                  }
                } else {
                  foto = `https://ui-avatars.com/api/?name=${encodeURIComponent(ins.nombre)}&background=ccff00&color=000`;
                }
                return {
                  nombre: ins.nombre,
                  foto: foto
                };
              });

              return {
                ...r,
                jugadores: jugadores
              };
            });

          // 2. Obtener templates grupales para este día de la semana
          // (Filtrar aquellos que ya tengan una reserva específica creada a la misma hora)
          const templatesDia = todasReservas.filter(r =>
            r.tipo === 'grupal' &&
            Number(r.dia_semana) === diaBDFormato &&
            !reservasDia.some(res => res.hora_inicio === r.hora_inicio)
          ).map(r => {
            const inscritos = r.inscritos || [];
            const jugadores = inscritos.map((ins: any) => {
              let foto = ins.foto;
              if (foto && foto.length > 5 && !foto.includes('imagen_defecto')) {
                if (!foto.startsWith('http')) {
                  const cleanPath = foto.startsWith('/') ? foto.substring(1) : foto;
                  foto = `https://api.padelmanager.cl/${cleanPath}`;
                }
              } else {
                foto = `https://ui-avatars.com/api/?name=${encodeURIComponent(ins.nombre)}&background=ccff00&color=000`;
              }
              return {
                nombre: ins.nombre,
                foto: foto
              };
            });
            return { ...r, jugadores };
          });

          dia.data = [...reservasDia, ...templatesDia];

          // Ordenar por hora
          dia.data.sort((a, b) => (a.hora_inicio || '').localeCompare(b.hora_inicio || ''));
        });


        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar agenda:', err);
        this.cargando = false;
      }
    });
  }

  get agendaActual(): any[] {
    const dia = this.dias.find(d => d.fecha === this.diaSeleccionado);
    return dia ? dia.data : [];
  }

  goBack() {
    this.router.navigate(['/entrenador-home']);
  }

  async confirmarCancelacion(item: any) {
    const alert = await this.alertCtrl.create({
      header: 'Cancelar Entrenamiento',
      message: '¿Estás seguro de que deseas cancelar este entrenamiento? Esta acción liberará el horario.',
      buttons: [
        {
          text: 'No, mantener',
          role: 'cancel'
        },
        {
          text: 'Sí, cancelar',
          role: 'destructive',
          handler: () => {
            this.ejecutarCancelacion(item);
          }
        }
      ]
    });

    await alert.present();
  }

  ejecutarCancelacion(item: any) {
    this.mysqlService.cancelarReserva(item.reserva_id).subscribe({
      next: async () => {
        // TODO: Enviar notificación al alumno (cuando el backend esté configurado)
        // const alumnoId = item.alumno_id;
        // const packNombre = item.pack_nombre || item.nombre_pack || 'Entrenamiento';
        // const fecha = item.fecha || new Date().toISOString().split('T')[0];
        // this.notificationService.sendCancelationNotification(alumnoId, packNombre, fecha);

        const toast = await this.toastCtrl.create({
          message: '✅ Entrenamiento cancelado y horario liberado',
          duration: 2000,
          color: 'dark'
        });
        toast.present();
        this.cargarAgenda(); // Recargar para actualizar lista
      },
      error: (err) => {
        console.error('Error al cancelar:', err);
      }
    });
  }

  getEstadoText(item: any): string {
    return item.tipo === 'grupal' ? (item.estado_grupo || 'desconocido') : (item.estado || 'desconocido');
  }

}

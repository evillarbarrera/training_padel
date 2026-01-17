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
    console.log('Entrenador ID cargado:', this.entrenadorId);
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
      const fechaStr = fecha.toISOString().split('T')[0];
      const diaNumero = fecha.getDay(); // Guardar aquí en zona LOCAL

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
        
        console.log('Datos cargados:', { reservas_tradicionales: res.reservas_tradicionales, packs_grupales: res.packs_grupales, todos: todasReservas });
        
        // Distribuir en días por fecha (solo reservas tradicionales tienen fecha)
        this.dias.forEach(dia => {
          // Usar el diaNumero guardado en zona LOCAL, no recalcularlo
          const diaBDFormato = dia.diaNumero; // 0-6 en formato correcto
          
          dia.data = todasReservas.filter(r => {
            if (r.tipo === 'grupal') {
              // Los packs grupales usan formato BD 0-6
              const match = diaBDFormato === r.dia_semana;
              if (!match) {
                console.log(`Pack "${r.pack_nombre}" (dia_semana=${r.dia_semana}) NO MATCH con ${dia.nombre}`);
              } else {
                console.log(`Pack "${r.pack_nombre}" (dia_semana=${r.dia_semana}) ✓ MATCH con ${dia.nombre}`);
              }
              return match;
            } else {
              // Las reservas tradicionales por fecha exacta
              return r.fecha === dia.fecha;
            }
          });
        });
        
        console.log('Días con datos:', this.dias);
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

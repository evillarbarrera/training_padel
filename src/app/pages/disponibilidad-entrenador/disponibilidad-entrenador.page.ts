import { Component } from '@angular/core';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToggle,
  IonButton,
  ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorarioModalComponent } from '../../components/horario-modal/horario-modal.component';
import { EntrenamientoService } from '../../services/entrenamiento.service';


@Component({
  selector: 'app-disponibilidad-entrenador',
  standalone: true,
  templateUrl: './disponibilidad-entrenador.page.html',
  styleUrls: ['./disponibilidad-entrenador.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToggle,
    IonButton,
    HorarioModalComponent
  ]
})
export class DisponibilidadEntrenadorPage {

  ngOnInit() {
    this.getSemanaSiguiente();
  }

  entrenador_id = Number(localStorage.getItem('userId'));

  clubes = [
    { id: 1, nombre: 'Win Padel' },
    { id: 2, nombre: 'Malloa Padel' }
  ];

  diasMap: any = {
  'Lunes': 1,
  'Martes': 2,
  'Miércoles': 3,
  'Jueves': 4,
  'Viernes': 5,
  'Sábado': 6,
  'Domingo': 7
};

  dias: any[] = [];
  semanaActual: string = '';

  constructor(private modalCtrl: ModalController, private entrenamientoService: EntrenamientoService) {}

  async abrirHorario(dia: any) {
    const modal = await this.modalCtrl.create({
      component: HorarioModalComponent,
      componentProps: {
        dia,
        clubes: this.clubes
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data) {
      dia.hora_inicio = data.hora_inicio;
      dia.hora_fin = data.hora_fin;
      dia.club_id = data.club_id;
      dia.club_nombre = data.club_nombre;
    }
  }
guardarDisponibilidad() {
  const payload = this.dias
    .filter(d => d.activo && d.club_id)
    .map(d => {
      const fecha = d.fecha;
      const horaInicio = d.hora_inicio.split('T')[1].split(':').slice(0, 2).join(':');
      const horaFin = d.hora_fin;

      const fechaInicio = `${fecha} ${horaInicio}:00`;
      const fechaFin = `${fecha} ${horaFin}:00`;

      return {
        profesor_id: this.entrenador_id,
        fecha_inicio: fechaInicio,
        fecha_fin: fechaFin,
        club_id: d.club_id,
        activo: 1
      };
    });

  console.log('Disponibilidad a guardar:', payload);

  this.entrenamientoService.addDisponibilidad(payload).subscribe({
    next: (res: any) => console.log('OK', res),
    error: (err: any) => console.error('ERROR', err)
  });
}


  getSemanaSiguienteActual() {
    const hoy = new Date();
    const diaActual = hoy.getDay(); 
    const diffLunes = diaActual === 0 ? -6 : 1 - diaActual;
    const lunes = new Date(hoy);
    lunes.setDate(hoy.getDate() + diffLunes + 7);
    this.dias = this.obtenerDiasSemana(lunes);
  }

  getSemanaActual() {
    if (!this.dias || this.dias.length === 0) {
      return '';
    }
    const lunes = new Date(this.dias[0].fecha);
    const domingo = new Date(this.dias[6].fecha);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return `del ${lunes.toLocaleDateString('es-ES', options)} al ${domingo.toLocaleDateString('es-ES', options)}`;
  }

  getSemanaSiguiente() {
    if (!this.dias || this.dias.length === 0) {
        this.getSemanaSiguienteActual();
        return;
      }
      const lunes = new Date(this.dias[0].fecha);
      lunes.setDate(lunes.getDate() + 7);
      this.dias = this.obtenerDiasSemana(lunes);
  }

  duplicarSemanaAnterior() {
    const lunes = new Date(this.dias[0].fecha);
      lunes.setDate(lunes.getDate() - 7);
      this.dias = this.obtenerDiasSemana(lunes, true);
  }



  anteriorSemana() {
    const lunes = new Date(this.dias[0].fecha);
    lunes.setDate(lunes.getDate() - 7);
    this.dias = this.obtenerDiasSemana(lunes);
  }

  get getSemanaAnterior() {
    if (!this.dias || this.dias.length === 0) {
        return;
      }
      const lunes = new Date(this.dias[0].fecha);
      lunes.setDate(lunes.getDate() - 7);
      this.dias = this.obtenerDiasSemana(lunes);
  }

  formatFecha(fecha: Date) {
    return fecha.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  obtenerDiasSemana(lunes: Date, duplicar: boolean = false): any[] {
    const diasSemana = [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ];

    this.dias = diasSemana.map((nombre, index) => {
      const fecha = new Date(lunes);
      fecha.setDate(lunes.getDate() + index);

      if (duplicar) {
        const diaAnterior = this.dias.find(d => d.nombre === nombre && d.fecha === fecha.toISOString().split('T')[0]);
        return {
          nombre,
          fecha: fecha.toISOString().split('T')[0],
          activo: diaAnterior ? diaAnterior.activo : false,
          hora_inicio: diaAnterior ? diaAnterior.hora_inicio : 'en 07:00',
          hora_fin: diaAnterior ? diaAnterior.hora_fin : '21:00',
          club_id: diaAnterior ? diaAnterior.club_id : null,
          club_nombre: diaAnterior ? diaAnterior.club_nombre : ''
        };
      } else {
        return {
          nombre,
          fecha: fecha.toISOString().split('T')[0],
          activo: false,
          hora_inicio: '07:00',
          hora_fin: '21:00',
          club_id: null,
          club_nombre: ''
        };
      }
    });
    return this.dias;
  }

}

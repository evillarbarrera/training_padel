import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MysqlService } from '../../services/mysql.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, calendarOutline, personOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-jugador-calendario',
  templateUrl: './jugador-calendario.page.html',
  styleUrls: ['./jugador-calendario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JugadorCalendarioPage implements OnInit {
  reservasIndividuales: any[] = [];
  entrenamientosGrupales: any[] = [];
  cargando = true;
  tipoVista: 'proximas' | 'historial' = 'proximas';

  constructor(
    private mysqlService: MysqlService,
    private router: Router
  ) {
    addIcons({ chevronBackOutline, calendarOutline, personOutline, timeOutline });
  }

  ngOnInit() {
    this.cargarReservas();
  }

  get reservasFiltradas() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Combinar ambas arrays
    const todasReservas = [...this.reservasIndividuales, ...this.entrenamientosGrupales];

    return todasReservas.filter(reserva => {
      // Para entrenamientos individuales (tienen 'fecha')
      if (reserva.fecha) {
        const fechaReserva = new Date(reserva.fecha + 'T00:00:00');
        if (this.tipoVista === 'proximas') {
          return fechaReserva >= hoy;
        } else {
          return fechaReserva < hoy;
        }
      }
      // Para entrenamientos grupales (solo tienen dia_semana, considerar siempre como proximas)
      return this.tipoVista === 'proximas';
    });
  }

  cargarReservas() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }

    this.mysqlService.getReservasJugador(userId).subscribe({
      next: (res: any) => {
        this.reservasIndividuales = res.reservas_individuales || [];
        this.entrenamientosGrupales = res.entrenamientos_grupales || [];
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar reservas:', err);
        this.cargando = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/jugador-home']);
  }
}

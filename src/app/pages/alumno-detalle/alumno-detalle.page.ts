import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonChip,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/angular/standalone';

import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.page.html',
  styleUrls: ['./alumno-detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonChip,
    IonFab,
    IonFabButton,
    IonIcon,
  ]
})
export class AlumnoDetallePage implements OnInit, AfterViewInit {

  alumnoId: string | null = null;
  chart: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.alumnoId = this.route.snapshot.paramMap.get('id');
  }

  ngAfterViewInit() {
    this.crearGraficoRadar();
  }

  crearGraficoRadar() {
    const ctx: any = document.getElementById('radarChart');

    this.chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Volea',
          'Smash',
          'Bandeja',
          'Defensa',
          'Fuerza',
          'Control',
          'Velocidad'
        ],
        datasets: [
          {
            label: 'Puntuación',
            data: [80, 90, 75, 85, 95, 70, 88],
            fill: true,
         
            borderColor: 'black',
            pointBackgroundColor: 'black'
          }
        ]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            suggestedMax: 100,
            angleLines: { color: '#5ed684ff' },
            grid: { color: '#bbb' },
            pointLabels: { color: '#000', font: { size: 12 } }
          }
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['/alumnos']);
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonContent,
    IonButton, IonIcon,
    IonSegment, IonSegmentButton, IonLabel,
    IonFab, IonFabButton
} from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { EvaluacionService } from '../../services/evaluacion.service';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import { arrowBackOutline, analyticsOutline, chevronBackOutline } from 'ionicons/icons';

Chart.register(...registerables);

@Component({
    selector: 'app-mis-habilidades',
    templateUrl: './mis-habilidades.page.html',
    styleUrls: ['./mis-habilidades.page.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        IonContent,
        IonButton, IonIcon,
        IonSegment, IonSegmentButton, IonLabel,
        IonFab, IonFabButton
    ]
})

// ... (imports remain the same)

export class MisHabilidadesPage implements OnInit {
    radarChart: any;
    lineChart: any;
    isLoading = true;
    userId: number | null = null;
    hasData = false;
    jugadorFoto: string | null = null;
    jugadorNombre: string = '';

    // Segment State
    selectedTab: string = 'radar';

    // Stored Data for Re-rendering
    storedLineLabels: string[] = [];
    storedLineData: number[] = [];
    storedRadarLabels: string[] = [];
    storedRadarData: number[] = [];

    videos: any[] = [];

    constructor(
        private evaluacionService: EvaluacionService,
        private mysqlService: MysqlService,
        private router: Router,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef
    ) {
        addIcons({ arrowBackOutline, analyticsOutline, chevronBackOutline });
    }

    ngOnInit() {
        // Check for route param 'id'
        const routeId = this.route.snapshot.paramMap.get('id');

        if (routeId) {
            this.userId = Number(routeId);
            // Don't load local storage user if viewing another user
            this.jugadorNombre = 'Cargando...';
        } else {
            this.userId = Number(localStorage.getItem('userId'));
            // Try to get from local storage initially
            const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
            if (user) {
                this.jugadorFoto = user.foto_perfil || null;
                this.jugadorNombre = user.nombre || 'Jugador';
            }
        }
    }

    ionViewWillEnter() {
        if (this.userId) {
            this.loadUserProfile();
            this.loadEvaluaciones();
            this.loadVideos();
        } else {
            console.warn('No User ID found');
            this.isLoading = false;
        }
    }

    loadUserProfile() {
        this.mysqlService.getPerfil(this.userId!).subscribe({
            next: (res) => {
                if (res) {
                    this.jugadorNombre = res.nombre || 'Jugador';
                    this.jugadorFoto = res.foto_perfil || res.link_foto || null; // Check both possible fields
                    this.cdr.detectChanges();
                }
            },
            error: (err) => console.error('Error loading profile:', err)
        });
    }

    loadEvaluaciones() {
        console.log('Loading evaluaciones for user:', this.userId);
        this.evaluacionService.getEvaluaciones(this.userId!).subscribe({
            next: (data) => {
                console.log('Evaluaciones received:', data);
                if (data && data.length > 0) {
                    // Sort by date ascending
                    const sorted = data.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

                    // Store Line Data
                    this.storedLineLabels = sorted.map(e => {
                        const d = new Date(e.fecha);
                        return `${d.getDate()}/${d.getMonth() + 1}`;
                    });
                    this.storedLineData = sorted.map(e => Number(e.promedio_general));

                    // Store Radar Data
                    const latest = sorted[sorted.length - 1];
                    if (latest && latest.scores) {
                        this.storedRadarLabels = Object.keys(latest.scores);
                        this.storedRadarData = this.storedRadarLabels.map(key => {
                            const s = latest.scores[key];
                            if (s && typeof s === 'object') {
                                return (Number(s.tecnica) + Number(s.control) + Number(s.direccion) + Number(s.decision)) / 4;
                            }
                            return 0;
                        });

                        this.hasData = true;
                        this.cdr.detectChanges(); // Force DOM update to ensure *ngIf renders containers

                        // Initial Render
                        setTimeout(() => this.renderCurrentTab(), 100);
                    }
                } else {
                    this.hasData = false;
                }
                this.isLoading = false;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Error loading evaluaciones:', err);
                this.isLoading = false;
                this.cdr.detectChanges();
            }
        });
    }

    segmentChanged(ev: any) {
        this.selectedTab = ev.detail.value;
        this.cdr.detectChanges(); // Force update for *ngIf switch
        setTimeout(() => this.renderCurrentTab(), 100);
    }

    renderCurrentTab() {
        if (!this.hasData) return;

        console.log('Rendering tab:', this.selectedTab);
        if (this.selectedTab === 'radar') {
            this.renderRadarChart(this.storedRadarLabels, this.storedRadarData);
        } else {
            this.renderLineChart(this.storedLineLabels, this.storedLineData);
        }
    }

    renderLineChart(labels: string[], data: number[]) {
        const canvas = document.getElementById('progressLineChart') as HTMLCanvasElement;
        console.log('Line Chart Canvas:', canvas);
        if (!canvas) {
            console.error('Canvas element progressLineChart not found!');
            return;
        }

        if (this.lineChart) this.lineChart.destroy();

        this.lineChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Promedio General',
                    data: data,
                    borderColor: '#ccff00',
                    backgroundColor: 'rgba(204, 255, 0, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#111',
                    pointBorderColor: '#ccff00',
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#111',
                        titleColor: '#ccff00',
                        bodyColor: '#fff',
                        padding: 10,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10,
                        grid: { color: '#f0f0f0' },
                        ticks: { color: '#666', font: { weight: 'bold' } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#666' }
                    }
                }
            }
        });
    }

    renderRadarChart(labels: string[], data: number[]) {
        const ctx = document.getElementById('skillRadarChart') as HTMLCanvasElement;
        console.log('Radar Chart Canvas:', ctx);

        if (!ctx) {
            console.error('Canvas element skillRadarChart not found!');
            return;
        }

        if (this.radarChart) this.radarChart.destroy();

        this.radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Habilidades',
                    data: data,
                    fill: true,
                    backgroundColor: 'rgba(204, 255, 0, 0.2)',
                    borderColor: '#ccff00', // Neon Green border
                    borderWidth: 3,
                    pointBackgroundColor: '#111', // Black points
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#ccff00',
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: { borderWidth: 3 }
                },
                scales: {
                    r: {
                        angleLines: { color: '#eee' }, // Light Grey
                        grid: { color: '#f0f0f0' },    // Light Grey
                        suggestedMin: 0,
                        suggestedMax: 10,
                        pointLabels: {
                            font: { size: 12, weight: 'bold', family: "'Inter', sans-serif" },
                            color: '#444', // Dark Text
                            padding: 10
                        },
                        ticks: {
                            backdropColor: 'transparent',
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    loadVideos() {
        if (!this.userId) return;
        this.evaluacionService.getVideos(this.userId).subscribe({
            next: (vids) => {
                this.videos = vids || [];
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Error loading videos:', err)
        });
    }

    goBack() {
        // Intelligent back navigation
        if (this.route.snapshot.paramMap.get('id')) {
            this.router.navigate(['/alumnos']);
        } else {
            this.router.navigate(['/jugador-home']);
        }
    }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonContent,
    IonButton, IonIcon,
    IonSegment, IonSegmentButton, IonLabel,
    IonFab, IonFabButton,
    IonList, IonItem, IonBadge, IonSpinner,
    IonRefresher, IonRefresherContent,
    IonModal, IonSelect, IonSelectOption,
    AlertController, LoadingController
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { EvaluacionService } from '../../services/evaluacion.service';
import { MysqlService } from '../../services/mysql.service';
import { environment } from '../../../environments/environment';
import { addIcons } from 'ionicons';
import { arrowBackOutline, analyticsOutline, chevronBackOutline, informationCircleOutline, sparklesOutline, sparkles, videocamOutline, close, cloudUploadOutline, videocamOffOutline, trashOutline, trash } from 'ionicons/icons';

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
        IonFab, IonFabButton,
        IonList, IonItem, IonBadge, IonSpinner,
        IonRefresher, IonRefresherContent, IonModal,
        IonSelect, IonSelectOption
    ]
})

// ... (imports remain the same)

export class MisHabilidadesPage implements OnInit {
    radarChart: any;
    hasData = false;
    isLoading = true;
    jugadorFoto: string | null = null;
    jugadorNombre: string = '';
    userId: number | null = null;

    // Averages calculation properties
    avgTecnico: number = 0;
    avgTactico: number = 0;
    avgFisico: number = 0;
    avgMental: number = 0;
    finalScore: number = 0;

    // Segment State
    selectedTab: string = 'radar';
    selectedGraphTab: string = 'resumen';

    // Stored Data for Re-rendering
    storedLineLabels: string[] = [];
    storedLineData: number[] = [];
    
    // Resumen
    resumenChart: any;
    
    // Tecnico
    storedRadarLabels: string[] = [];
    storedRadarData: number[] = [];
    tecnicoChart: any;

    tacticoData: number[] = [];
    tacticoLabels1: string[] = [];
    tacticoData1: number[] = [];
    tacticoChart1: any;
    tacticoLabels2: string[] = [];
    tacticoData2: number[] = [];
    tacticoChart2: any;

    // Fisico
    fisicoLabels: string[] = [];
    fisicoData: number[] = [];
    fisicoChart: any;

    // Mental
    mentalLabels: string[] = [];
    mentalData: number[] = [];
    mentalChart: any;

    detailedScores: any = null;

    videos: any[] = [];
    aiResults: { [key: number]: any } = {};
    aiActiveResult: any = null;
    isAnalyzing: { [key: number]: boolean } = {};

    isEntrenadorView: boolean = false;
    entrenadorId: number | null = null;

    // Player Coach Selector
    coaches: { id: number, nombre: string }[] = [];
    selectedCoachId: number | 'all' = 'all';

    // Video Tab State
    selectedVideoTab: string = 'clases';
    activeCategory: string = 'Todos';
    availableCategories: string[] = ['Todos'];
    videoInputPersonal!: any;

    // Premium Modal State
    isStrokeModalOpen: boolean = false;
    activeStroke: any = null;


    constructor(
        private evaluacionService: EvaluacionService,
        private mysqlService: MysqlService,
        private router: Router,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private http: HttpClient
    ) {
        addIcons({ arrowBackOutline, analyticsOutline, chevronBackOutline, informationCircleOutline, sparklesOutline, sparkles, videocamOutline, close, 'cloud-upload-outline': cloudUploadOutline, 'videocam-off-outline': videocamOffOutline, 'trash-outline': trashOutline, trash });
    }

    verDetallePremium(golpe: string) {
        const detail = this.detailedScores[golpe];
        if (!detail) return;

        this.activeStroke = {
            name: golpe,
            comentario: detail.comentario,
            metrics: [
                { name: 'Técnica', value: detail.tecnica || 0 },
                { name: 'Control', value: detail.control || 0 },
                { name: 'Dirección', value: detail.direccion || 0 },
                { name: 'Decisión', value: detail.decision || 0 }
            ]
        };
        this.isStrokeModalOpen = true;
    }

    getScoreClass(val: number) {
        if (val >= 8) return 'score-high';
        if (val >= 5) return 'score-mid';
        return 'score-low';
    }


    ngOnInit() {
        // Check for route param 'id'
        const routeId = this.route.snapshot.paramMap.get('id');

        if (routeId) {
            this.userId = Number(routeId);
            this.isEntrenadorView = true;
            this.entrenadorId = Number(localStorage.getItem('userId'));
            this.jugadorNombre = 'Cargando...';
            this.selectedVideoTab = 'clases';
        } else {
            this.userId = Number(localStorage.getItem('userId'));
            this.isEntrenadorView = false;
            this.jugadorNombre = '...';
            this.jugadorFoto = '';
        }
    }

    ionViewWillEnter() {
        if (this.userId) {
            this.handleRefresh(null);
        } else {
            console.warn('No User ID found');
            this.isLoading = false;
        }
    }

    handleRefresh(event: any) {
        if (this.userId) {
            this.loadUserProfile();
            this.loadEvaluaciones(this.entrenadorId || undefined, event);
            this.loadVideos(this.entrenadorId || undefined);
        }
    }

    loadUserProfile() {
        this.mysqlService.getPerfil(this.userId!).subscribe({
            next: (res) => {
                if (res) {
                    console.log('Profile Data received:', res);

                    // Handle wrapped response (res.user) or direct response
                    const userData = res.user || res;
                    console.log('User Data:', userData);

                    this.jugadorNombre = userData.nombre || 'Jugador';

                    let foto = userData.foto_perfil || userData.link_foto;

                    // Relaxed validation
                    if (foto && typeof foto === 'string' && foto.trim().length > 0 && !foto.includes('imagen_defecto')) {
                        if (!foto.startsWith('http')) {
                            // Ensure no double slash if path starts with /
                            const cleanPath = foto.startsWith('/') ? foto.substring(1) : foto;
                            this.jugadorFoto = `${environment.apiUrl.replace('/api_training_dev','')}/${cleanPath}`;
                        } else {
                            this.jugadorFoto = foto;
                        }
                    } else {
                        console.warn('Invalid photo path or default found:', foto);
                        this.jugadorFoto = 'assets/avatar.png';
                    }
                    console.log('Final Jugador Foto:', this.jugadorFoto);

                    this.cdr.detectChanges();
                }
            },
            error: (err) => console.error('Error loading profile:', err)
        });
    }

    loadEvaluaciones(entrenadorId?: number, event?: any) {
        console.log('Loading evaluaciones for user:', this.userId, 'filtered by coach:', entrenadorId);
        this.evaluacionService.getEvaluaciones(this.userId!, entrenadorId).subscribe({
            next: (data) => {
                console.log('Evaluaciones received:', data);
                // Extract coaches from unfiltered data on first load
                if (!entrenadorId && data && data.length > 0) {
                    this.extractCoaches(data);
                }
                if (data && data.length > 0) {
                    // Sort by date ascending
                    const sorted = data.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

                    // Store Line Data
                    this.storedLineLabels = sorted.map(e => {
                        const d = new Date(e.fecha);
                        return `${d.getDate()}/${d.getMonth() + 1}`;
                    });
                    this.storedLineData = sorted.map(e => Number(e.promedio_general || 0));

                    // Store Radar Data
                    const latest = sorted[sorted.length - 1];
                    let scores = latest.scores;

                    // Handle if scores is a JSON string
                    if (typeof scores === 'string') {
                        try {
                            scores = JSON.parse(scores);
                        } catch (e) {
                            console.error('Error parsing scores JSON:', e);
                            scores = {};
                        }
                    }
                    if (scores && Object.keys(scores).length > 0) {
                        this.detailedScores = scores;
                        // Extract numeric scores for categories
                        const tecnico = scores.tecnico || scores;
                        const tactico = scores.tactico || {};
                        const fisico = scores.fisico || {};
                        const mental = scores.mental || {};

                        this.storedRadarLabels = Object.keys(tecnico);
                        this.storedRadarData = this.storedRadarLabels.map(key => {
                            const s = tecnico[key];
                            if (s && typeof s === 'object') {
                                return (Number(s.tecnica || 0) + Number(s.control || 0) + Number(s.direccion || 0) + Number(s.decision || 0)) / 4;
                            }
                            return Number(s || 0);
                        });

                        // Calculate averages for scoreboard
                        const avg = (arr: number[]) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
                        
                        // Technical AVG
                        this.avgTecnico = avg(this.storedRadarData.filter(v => v > 0)) || 0;
                        const tacticoKeys = Object.keys(tactico);
                        let rawTacticoLabels = Object.keys(tactico);
                        if (rawTacticoLabels.length === 0) {
                            rawTacticoLabels = [
                                'Posicionamiento fondo', 'Posicionamiento red', 'Decisiones fondo', 'Decisiones red', 
                                'Golpes aéreos', 'Intenciones fondo', 'Intenciones red', 'Globo vs Abajo', 
                                'Volea Bloqueo vs Plana', 'Volea Plana vs Cortada', 'Botar globo vs Remate Def', 
                                'Remate Def vs Bandeja/Vibora', 'Remate Def vs Ofensivo', 'Bajada Pared vs Globo'
                            ];
                        }
                        
                        if (rawTacticoLabels.length > 5) {
                            const half = Math.ceil(rawTacticoLabels.length / 2);
                            this.tacticoLabels1 = rawTacticoLabels.slice(0, half);
                            this.tacticoData1 = this.tacticoLabels1.map(k => typeof tactico[k] === 'object' ? Number(tactico[k]?.valor || 0) : Number(tactico[k] || 0));
                            
                            this.tacticoLabels2 = rawTacticoLabels.slice(half);
                            this.tacticoData2 = this.tacticoLabels2.map(k => typeof tactico[k] === 'object' ? Number(tactico[k]?.valor || 0) : Number(tactico[k] || 0));
                        } else {
                            this.tacticoLabels1 = rawTacticoLabels;
                            this.tacticoData1 = rawTacticoLabels.map(k => typeof tactico[k] === 'object' ? Number(tactico[k]?.valor || 0) : Number(tactico[k] || 0));
                            this.tacticoLabels2 = [];
                            this.tacticoData2 = [];
                        }
                        this.tacticoData = rawTacticoLabels.map(k => typeof tactico[k] === 'object' ? Number(tactico[k]?.valor || 0) : Number(tactico[k] || 0));
                        this.avgTactico = avg(this.tacticoData.filter(v => v > 0)) || 0;

                        // Physical AVG & Data
                        const fisicoKeys = Object.keys(fisico);
                        if (fisicoKeys.length > 0) {
                            this.fisicoLabels = fisicoKeys;
                            this.fisicoData = this.fisicoLabels.map(k => Number(fisico[k].valor || 0));
                        } else {
                            this.fisicoLabels = ['Fuerza', 'Velocidad', 'Resistencia', 'Movilidad'];
                            this.fisicoData = [0, 0, 0, 0];
                        }
                        this.avgFisico = avg(this.fisicoData.filter(v => v > 0)) || 0;

                        // Mental AVG & Data
                        const mentalKeys = Object.keys(mental);
                        if (mentalKeys.length > 0) {
                            this.mentalLabels = mentalKeys;
                            this.mentalData = this.mentalLabels.map(k => Number(mental[k].valor || 0));
                        } else {
                            this.mentalLabels = ['Concentración', 'Actitud', 'Confianza', 'Resiliencia'];
                            this.mentalData = [0, 0, 0, 0];
                        }
                        this.avgMental = avg(this.mentalData.filter(v => v > 0)) || 0;

                        // Final Score (Weighted average of the 4 categories)
                        const activeCategories = [this.avgTecnico, this.avgTactico, this.avgFisico, this.avgMental].filter(v => v > 0);
                        this.finalScore = activeCategories.length > 0 
                            ? activeCategories.reduce((a, b) => a + b, 0) / activeCategories.length 
                            : 0;

                        this.hasData = true;
                        this.cdr.detectChanges(); // Force DOM update

                        // Initial Render with retry
                        setTimeout(() => this.renderCurrentTab(), 100);
                    } else {
                        console.warn('Latest evaluation has no valid scores object/string');
                        this.hasData = false;
                    }
                } else {
                    this.hasData = false;
                }
                this.isLoading = false;
                if (event) event.target.complete();
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Error loading evaluaciones:', err);
                this.isLoading = false;
                if (event) event.target.complete();
                this.cdr.detectChanges();
            }
        });
    }

    extractCoaches(evaluaciones: any[]) {
        const coachMap = new Map<number, string>();
        evaluaciones.forEach(e => {
            if (e.entrenador_id && e.entrenador) {
                coachMap.set(Number(e.entrenador_id), e.entrenador);
            }
        });
        this.coaches = Array.from(coachMap.entries()).map(([id, nombre]) => ({ id, nombre }));
    }

    onCoachChange(ev: any) {
        this.selectedCoachId = ev.detail?.value ?? ev;
        const filterId = this.selectedCoachId === 'all' ? undefined : Number(this.selectedCoachId);
        this.isLoading = true;
        this.hasData = false;
        this.loadEvaluaciones(filterId);
        this.loadVideos(filterId);
    }

    selectCoachTab(id: number | 'all') {
        this.selectedCoachId = id;
        const filterId = id === 'all' ? undefined : Number(id);
        this.isLoading = true;
        this.hasData = false;
        this.loadEvaluaciones(filterId);
        this.loadVideos(filterId);
    }

    segmentChanged(ev: any) {
        this.selectedTab = ev.detail.value;
        this.cdr.detectChanges();
        setTimeout(() => this.renderCurrentTab(), 100);
    }

    segmentGraphChanged(event: any) {
        this.selectedGraphTab = event.detail.value;
        this.cdr.detectChanges();
        setTimeout(() => this.renderCurrentTab(), 100);
    }

    renderCurrentTab() {
        if (!this.hasData) return;

        console.log('Rendering tab:', this.selectedTab);
        // Add a small delay/retry mechanism if canvas is not found immediately
        const attemptRender = (retries = 3) => {
            if (this.selectedTab === 'radar') {
                const canvasId = this.selectedGraphTab === 'tactico' ? 'tacticoRadarChart1' : this.selectedGraphTab + 'RadarChart';
                const canvas = document.getElementById(canvasId);

                if (!canvas) {
                    if (retries > 0) {
                        setTimeout(() => attemptRender(retries - 1), 100);
                    }
                    return;
                }

                if (this.selectedGraphTab === 'resumen') {
                    const resumenLabels = ['Técnico', 'Táctico', 'Físico', 'Mental'];
                    const resumenData = [this.avgTecnico, this.avgTactico, this.avgFisico, this.avgMental];
                    this.resumenChart = this.renderRadarChart('resumenRadarChart', this.resumenChart, resumenLabels, resumenData, '#ccff00');
                } else if (this.selectedGraphTab === 'tecnico' && this.storedRadarLabels.length) {
                    this.tecnicoChart = this.renderRadarChart('tecnicoRadarChart', this.tecnicoChart, this.storedRadarLabels, this.storedRadarData, '#ccff00');
                } else if (this.selectedGraphTab === 'tactico' && (this.tacticoLabels1.length || this.tacticoLabels2.length)) {
                    this.tacticoChart1 = this.renderRadarChart('tacticoRadarChart1', this.tacticoChart1, this.tacticoLabels1, this.tacticoData1, '#00e0ff');
                    setTimeout(() => {
                        this.tacticoChart2 = this.renderRadarChart('tacticoRadarChart2', this.tacticoChart2, this.tacticoLabels2, this.tacticoData2, '#00e0ff');
                    }, 50);
                } else if (this.selectedGraphTab === 'fisico' && this.fisicoLabels.length) {
                    this.fisicoChart = this.renderRadarChart('fisicoRadarChart', this.fisicoChart, this.fisicoLabels, this.fisicoData, '#ff3366');
                } else if (this.selectedGraphTab === 'mental' && this.mentalLabels.length) {
                    this.mentalChart = this.renderRadarChart('mentalRadarChart', this.mentalChart, this.mentalLabels, this.mentalData, '#ffaa00');
                }
            }
        };

        attemptRender();
    }

    formatRadarLabels(labels: string[]): any[] {
        return labels.map(label => {
            if (label.length > 15 && label.includes(' ')) {
                const words = label.split(' ');
                const mid = Math.ceil(words.length / 2);
                return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
            }
            return label;
        });
    }

    renderRadarChart(canvasId: string, chartInstance: any, labels: string[], data: number[], color: string) {
        const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
        if (!ctx) return chartInstance;

        if (chartInstance) chartInstance.destroy();

        // Convert HEX to RGBA for background
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const rgba = `rgba(${r}, ${g}, ${b}, 0.2)`;

        const formattedLabels = this.formatRadarLabels(labels);

        return new Chart(ctx, {
            type: 'radar',
            data: {
                labels: formattedLabels,
                datasets: [{
                    label: 'Puntuación',
                    data: data,
                    fill: true,
                    backgroundColor: rgba,
                    borderColor: color,
                    borderWidth: 3,
                    pointBackgroundColor: '#111',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: color,
                    pointRadius: 5
                }]
            },
            options: {
                layout: { padding: 25 },
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
                            font: { size: 10, weight: 'bold', family: "'Inter', sans-serif" },
                            color: '#444', // Dark Text
                            padding: 8
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

    get filteredVideos() {
        return this.videos.filter(v => {
            // Role/Tab filter
            let matchType = false;
            if (this.isEntrenadorView) {
                matchType = !v.tipo || v.tipo === 'clase';
            } else {
                if (this.selectedVideoTab === 'clases') {
                    matchType = !v.tipo || v.tipo === 'clase';
                } else {
                    matchType = v.tipo === 'personal';
                }
            }

            if (!matchType) return false;

            // Category filter
            if (this.activeCategory === 'Todos') return true;
            return v.categoria === this.activeCategory;
        });
    }

    setCategory(cat: string) {
        this.activeCategory = cat;
    }

    segmentVideoChanged(event: any) {
        this.selectedVideoTab = event.detail.value;
    }

    async subirVideoPersonal() {
        const categories = [
            'General', 'Derecha', 'Reves', 'Volea de Derecha', 'Volea de Reves', 'Bandeja', 'Vibora',
            'Rulo', 'Remate', 'Salida de Pared', 'Globo', 'Saque', 'Resto'
        ];

        const catAlert = await this.alertCtrl.create({
            header: '¿Qué golpe es?',
            inputs: categories.map(cat => ({
                type: 'radio',
                label: cat,
                value: cat,
                checked: cat === 'General'
            })),
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Siguiente',
                    handler: (categoria) => {
                        this.pedirDetallesVideo(categoria, 'personal');
                    }
                }
            ],
            cssClass: 'nike-alert'
        });
        await catAlert.present();
    }

    async subirVideoCoach() {
        const categories = [
            'General', 'Derecha', 'Reves', 'Volea de Derecha', 'Volea de Reves', 'Bandeja', 'Vibora',
            'Rulo', 'Remate', 'Salida de Pared', 'Globo', 'Saque', 'Resto'
        ];

        const catAlert = await this.alertCtrl.create({
            header: 'Categoría / Golpe',
            subHeader: 'Selecciona el golpe del alumno',
            inputs: categories.map(cat => ({
                type: 'radio',
                label: cat,
                value: cat,
                checked: cat === 'General'
            })),
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Siguiente',
                    handler: (categoria) => {
                        this.pedirDetallesVideo(categoria, 'clase');
                    }
                }
            ],
            cssClass: 'nike-alert'
        });
        await catAlert.present();
    }

    async pedirDetallesVideo(categoria: string, tipo: 'personal' | 'clase') {
        const alert = await this.alertCtrl.create({
            header: tipo === 'personal' ? 'Subir Video Personal' : 'Subir Video de Clase',
            subHeader: `Categoría: ${categoria}`,
            inputs: [
                {
                    name: 'titulo',
                    type: 'text',
                    placeholder: 'Ej: Práctica de Slide',
                    label: 'Título'
                },
                {
                    name: 'comentario',
                    type: 'textarea',
                    placeholder: 'Comentarios adicionales...',
                    label: 'Comentario'
                }
            ],
            buttons: [
                { text: 'Atrás', role: 'cancel' },
                {
                    text: 'Seleccionar Archivo',
                    handler: (data) => {
                        if (!data.titulo && tipo === 'personal') {
                            alert.message = 'El título es obligatorio';
                            return false;
                        }
                        const input = document.createElement('input');
                        input.type = 'file';
                        input.accept = 'video/*';
                        input.onchange = (e) => {
                            if (tipo === 'personal') {
                                this.onPersonalVideoSelected(e, data.titulo, categoria, data.comentario);
                            } else {
                                this.onCoachVideoSelected(e, data.titulo, categoria, data.comentario);
                            }
                        };
                        input.click();
                        return true;
                    }
                }
            ],
            cssClass: 'nike-alert'
        });
        await alert.present();
    }



    async onPersonalVideoSelected(event: any, titulo: string, categoria: string, comentario: string) {
        const file = event.target.files[0];
        if (!file) return;

        if (!this.userId) {
            alert('Error: No se pudo identificar al usuario. Por favor, re-inicia sesión.');
            return;
        }

        const loading = await this.loadingCtrl.create({
            message: 'Subiendo video personal...',
            spinner: 'dots',
            mode: 'ios'
        });
        await loading.present();

        const formData = new FormData();
        formData.append('video', file);
        formData.append('jugador_id', this.userId.toString());
        formData.append('tipo', 'personal');
        formData.append('categoria', categoria);
        formData.append('titulo', titulo);
        formData.append('comentario', comentario || '');

        this.evaluacionService.uploadVideo(formData).subscribe({
            next: (res) => {
                loading.dismiss();
                if (res.success) {
                    this.loadVideos();
                    this.selectedVideoTab = 'personales';
                }
            },
            error: (err) => {
                loading.dismiss();
                console.error(err);
                const msg = err.error?.error || 'Error al conectar con el servidor';
                alert('Error al subir video: ' + msg);
            }
        });
    }



    async onCoachVideoSelected(event: any, titulo: string, categoria: string, comentario: string) {
        const file = event.target.files?.[0];
        if (!file) return;

        if (file.size > 20 * 1024 * 1024) {
            alert('❌ El video supera los 20MB permitidos.');
            return;
        }

        const loading = await this.loadingCtrl.create({
            message: 'Subiendo video...',
            spinner: 'dots',
            mode: 'ios'
        });
        await loading.present();

        const formData = new FormData();
        formData.append('video', file);
        formData.append('jugador_id', this.userId!.toString());
        formData.append('entrenador_id', this.entrenadorId!.toString());
        formData.append('tipo', 'clase');
        formData.append('categoria', categoria);
        formData.append('titulo', titulo || 'Video de entrenamiento');
        formData.append('comentario', comentario || '');

        this.evaluacionService.uploadVideo(formData).subscribe({
            next: (res) => {
                loading.dismiss();
                if (res.success) {
                    this.loadVideos();
                }
            },
            error: (err) => {
                loading.dismiss();
                alert('Error al subir video: ' + (err.error?.error || 'Error de conexión'));
            }
        });
    }

    loadVideos(entrenadorId?: number) {
        if (!this.userId) return;
        this.evaluacionService.getVideos(this.userId, entrenadorId).subscribe({
            next: (vids) => {
                console.log('VIDEOS FROM API:', vids);
                this.videos = (vids || []).map((v: any) => {
                    let url = v.video_url || '';
                    if (url && !url.startsWith('http')) {
                        const cleanPath = url.startsWith('/') ? url.substring(1) : url;
                        url = `${environment.apiUrl.replace('/api_training_dev','')}/${cleanPath}`;
                    }

                    // Cross-device sync: check if DB already has the report
                    if (v.ai_report) {
                        try {
                            const parsed = typeof v.ai_report === 'string' ? JSON.parse(v.ai_report) : v.ai_report;
                            this.aiResults[v.id] = parsed;
                        } catch (e) {
                            console.error('Error parsing backend ai_report', e);
                        }
                    } else {
                        const saved = localStorage.getItem(`ai_report_${v.id}`);
                        if (saved) this.aiResults[v.id] = JSON.parse(saved);
                    }

                    return { ...v, video_url: url };
                });

                // Persistence
                // This block is now redundant as the map function handles persistence logic
                // this.videos.forEach(v => {
                //     if (localStorage.getItem(`ai_report_${v.id}`)) {
                //         this.aiResults[v.id] = JSON.parse(localStorage.getItem(`ai_report_${v.id}`)!);
                //     }
                // });
                console.log('Final Processed Videos:', this.videos);

                // Extract available categories
                const catsSet = new Set<string>();
                catsSet.add('Todos');
                this.videos.forEach(v => {
                    if (v.categoria) catsSet.add(v.categoria);
                });
                this.availableCategories = Array.from(catsSet);

                this.cdr.detectChanges();
            },
            error: (err) => console.error('Error loading videos:', err)
        });
    }

    async analizarVideo(vid: any) {
        this.isAnalyzing[vid.id] = true;
        this.cdr.detectChanges();

        const loading = await this.loadingCtrl.create({
            message: 'Gemini analizando técnica (esto puede tardar 1 min)...',
            spinner: 'dots',
            mode: 'ios',
            cssClass: 'ai-loading-custom'
        });
        await loading.present();

        const formData = new FormData();
        formData.append('video_id', vid.id);
        formData.append('video_url', vid.video_url);

        this.http.post<any>(`${environment.apiUrl}/ia/gemini_analyze.php`, formData)
            .subscribe({
                next: (res) => {
                    this.isAnalyzing[vid.id] = false;
                    loading.dismiss();
                    if (res.success) {
                        this.aiResults[vid.id] = res.analysis;
                        localStorage.setItem(`ai_report_${vid.id}`, JSON.stringify(res.analysis));
                        this.cdr.detectChanges();
                    } else {
                        alert('Error: ' + (res.error || 'Intente nuevamente'));
                    }
                },
                error: (err) => {
                    this.isAnalyzing[vid.id] = false;
                    loading.dismiss();
                    console.error('AI Analysis Error:', err);
                    alert('Error de conexión con el servidor de IA.');
                }
            });
    }

    verReporte(vid: any) {
        this.aiActiveResult = this.aiResults[vid.id];
    }

    goBack() {
        // Intelligent back navigation
        if (this.route.snapshot.paramMap.get('id')) {
            this.router.navigate(['/alumnos']);
        } else {
            this.router.navigate(['/jugador-home']);
        }
    }

    async confirmarEliminarVideo(vid: any) {
        const alert = await this.alertCtrl.create({
            header: 'Eliminar Video',
            message: '¿Estás seguro de que deseas eliminar este video permanentemente?',
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: () => {
                        this.ejecutarEliminarVideo(vid.id);
                    }
                }
            ],
            cssClass: 'nike-alert'
        });
        await alert.present();
    }

    async ejecutarEliminarVideo(videoId: number) {
        const loading = await this.loadingCtrl.create({
            message: 'Eliminando video...',
            spinner: 'dots',
            mode: 'ios'
        });
        await loading.present();

        this.evaluacionService.deleteVideo(videoId).subscribe({
            next: (res) => {
                loading.dismiss();
                if (res.success) {
                    this.videos = this.videos.filter(v => v.id !== videoId);
                    this.cdr.detectChanges();
                } else {
                    alert('Error: ' + (res.error || 'No se pudo eliminar'));
                }
            },
            error: (err) => {
                loading.dismiss();
                console.error('Delete error:', err);
                alert('Error de conexión al eliminar');
            }
        });
    }
}

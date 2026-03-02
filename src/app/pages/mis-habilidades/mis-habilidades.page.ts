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
    AlertController, LoadingController
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { EvaluacionService } from '../../services/evaluacion.service';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import { arrowBackOutline, analyticsOutline, chevronBackOutline, informationCircleOutline, sparklesOutline, sparkles, videocamOutline, close, cloudUploadOutline, videocamOffOutline } from 'ionicons/icons';

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
        IonRefresher, IonRefresherContent
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
    detailedScores: any = null;

    videos: any[] = [];
    aiResults: { [key: number]: any } = {};
    aiActiveResult: any = null;
    isAnalyzing: { [key: number]: boolean } = {};

    isEntrenadorView: boolean = false;
    entrenadorId: number | null = null;

    // Video Tab State
    selectedVideoTab: string = 'clases';
    videoInputPersonal!: any;

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
        addIcons({ arrowBackOutline, analyticsOutline, chevronBackOutline, informationCircleOutline, sparklesOutline, sparkles, videocamOutline, close, 'cloud-upload-outline': cloudUploadOutline, 'videocam-off-outline': videocamOffOutline });
    }

    async verDetalleGolpe(golpe: string) {
        const detail = this.detailedScores[golpe];
        if (!detail) return;

        let message = '';

        if (detail.comentario) {
            message += `💡 FEEDBACK:\n"${detail.comentario}"\n\n`;
        } else {
            message += `💡 SIN COMENTARIOS ESPECÍFICOS\n\n`;
        }

        message += `📊 PUNTUACIONES:\n` +
            `• Técnica: ${detail.tecnica || 0}/10\n` +
            `• Control: ${detail.control || 0}/10\n` +
            `• Dirección: ${detail.direccion || 0}/10\n` +
            `• Decisión: ${detail.decision || 0}/10`;

        const alert = await this.alertCtrl.create({
            header: `Detalle: ${golpe}`,
            message: message,
            buttons: ['Cerrar'],
            cssClass: 'nike-alert'
        });

        await alert.present();
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
            this.loadEvaluaciones(event);
            this.loadVideos();
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
                            this.jugadorFoto = `https://api.padelmanager.cl/${cleanPath}`;
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

    loadEvaluaciones(event?: any) {
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
                    this.detailedScores = scores;

                    if (scores && typeof scores === 'object') {
                        this.storedRadarLabels = Object.keys(scores);
                        this.storedRadarData = this.storedRadarLabels.map(key => {
                            const s = scores[key];
                            // Check for nested structure or direct value
                            if (s && typeof s === 'object') {
                                return (Number(s.tecnica || 0) + Number(s.control || 0) + Number(s.direccion || 0) + Number(s.decision || 0)) / 4;
                            }
                            return Number(s || 0);
                        });

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

    segmentChanged(ev: any) {
        this.selectedTab = ev.detail.value;
        this.cdr.detectChanges();
        setTimeout(() => this.renderCurrentTab(), 100);
    }

    renderCurrentTab() {
        if (!this.hasData) return;

        console.log('Rendering tab:', this.selectedTab);
        // Add a small delay/retry mechanism if canvas is not found immediately
        const attemptRender = (retries = 3) => {
            let canvasId = this.selectedTab === 'radar' ? 'skillRadarChart' : 'progressLineChart';
            const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

            if (!canvas) {
                if (retries > 0) {
                    console.log(`Canvas ${canvasId} not found, retrying... (${retries})`);
                    setTimeout(() => attemptRender(retries - 1), 100);
                } else {
                    console.error(`Canvas ${canvasId} still not found after retries`);
                }
                return;
            }

            if (this.selectedTab === 'radar') {
                this.renderRadarChart(this.storedRadarLabels, this.storedRadarData);
            } else {
                this.renderLineChart(this.storedLineLabels, this.storedLineData);
            }
        };

        attemptRender();
    }

    renderLineChart(labels: string[], data: number[]) {
        const canvas = document.getElementById('progressLineChart') as HTMLCanvasElement;
        if (!canvas) return;

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
        if (!ctx) return;

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

    get filteredVideos() {
        return this.videos.filter(v => {
            if (this.isEntrenadorView) {
                return !v.tipo || v.tipo === 'clase';
            } else {
                if (this.selectedVideoTab === 'clases') {
                    return !v.tipo || v.tipo === 'clase';
                } else {
                    return v.tipo === 'personal';
                }
            }
        });
    }

    segmentVideoChanged(event: any) {
        this.selectedVideoTab = event.detail.value;
    }

    async subirVideoPersonal() {
        const alert = await this.alertCtrl.create({
            header: 'Subir Video Personal',
            subHeader: 'Añade detalles para tu análisis',
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
                    placeholder: '¿Qué quieres que la IA analice?',
                    label: 'Comentario'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Seleccionar Video',
                    handler: (data) => {
                        if (!data.titulo) {
                            alert.message = 'El título es obligatorio';
                            return false;
                        }
                        this.abrirSelectorVideo(data.titulo, data.comentario);
                        return true;
                    }
                }
            ],
            cssClass: 'nike-alert'
        });

        await alert.present();
    }

    abrirSelectorVideo(titulo: string, comentario: string) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'video/*';
        input.onchange = (e) => this.onPersonalVideoSelected(e, titulo, comentario);
        input.click();
    }

    async onPersonalVideoSelected(event: any, titulo: string, comentario: string) {
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

    async subirVideoCoach() {
        const alert = await this.alertCtrl.create({
            header: 'Subir Video de Clase',
            subHeader: 'Añade detalles para el análisis',
            inputs: [
                {
                    name: 'titulo',
                    type: 'text',
                    placeholder: 'Ej: Práctica de Volea',
                    label: 'Título'
                },
                {
                    name: 'comentario',
                    type: 'textarea',
                    placeholder: '¿Alguna nota sobre este video?',
                    label: 'Comentario'
                }
            ],
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Siguiente: Seleccionar Archivo',
                    handler: (data) => {
                        const input = document.createElement('input');
                        input.type = 'file';
                        input.accept = 'video/*';
                        input.onchange = (e) => this.onCoachVideoSelected(e, data.titulo, data.comentario);
                        input.click();
                    }
                }
            ],
            cssClass: 'nike-alert'
        });
        await alert.present();
    }

    async onCoachVideoSelected(event: any, titulo: string, comentario: string) {
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
        formData.append('categoria', 'General');
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

    loadVideos() {
        if (!this.userId) return;
        this.evaluacionService.getVideos(this.userId).subscribe({
            next: (vids) => {
                console.log('VIDEOS FROM API:', vids);
                this.videos = (vids || []).map((v: any) => {
                    let url = v.video_url || '';
                    if (url && !url.startsWith('http')) {
                        const cleanPath = url.startsWith('/') ? url.substring(1) : url;
                        url = `https://api.padelmanager.cl/${cleanPath}`;
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

        this.http.post<any>('https://api.padelmanager.cl/ia/gemini_analyze.php', formData)
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
}

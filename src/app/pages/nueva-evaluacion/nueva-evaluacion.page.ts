import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import {
    IonContent, IonFab, IonFabButton, IonIcon,
    IonAccordionGroup, IonAccordion, IonItem, IonLabel,
    IonRange, IonTextarea, IonInput, IonButton,
    IonSegment, IonSegmentButton
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { EvaluacionService } from '../../services/evaluacion.service';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import { add, remove, caretDownCircle, chevronBackOutline, checkmarkOutline } from 'ionicons/icons';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-nueva-evaluacion',
    templateUrl: './nueva-evaluacion.page.html',
    styleUrls: ['./nueva-evaluacion.page.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        IonContent, IonFab, IonFabButton, IonIcon,
        IonAccordionGroup, IonAccordion, IonItem, IonLabel,
        IonRange, IonTextarea, IonInput, IonButton,
        IonSegment, IonSegmentButton
    ]
})
export class NuevaEvaluacionPage implements OnInit {
    jugadorId: number = 0;
    entrenadorId: number = 0;
    comentarios: string = '';
    alumnoNombre: string = 'Alumno';
    alumnoFoto: string | null = null;

    selectedTab: string = 'tecnico';

    // ========== TÉCNICO ==========
    golpes = [
        'Derecha', 'Reves', 'Volea de Derecha', 'Volea de Reves', 'Bandeja', 'Vibora',
        'Rulo', 'Remate', 'Salida de Pared', 'Globo', 'Saque', 'Resto'
    ];
    evaluationData: any = {};

    // ========== TÁCTICO ==========
    tacticoIndicadores = [
        { key: 'Posición', nombre: 'Posición en cancha' },
        { key: 'Estrategia', nombre: 'Estrategia de juego' },
        { key: 'Lectura', nombre: 'Lectura de la bola' },
        { key: 'Ritmo', nombre: 'Control de ritmo' },
        { key: 'Anticipación', nombre: 'Anticipación' },
        { key: 'Consistencia', nombre: 'Consistencia táctica' }
    ];
    tacticoData: any = {};

    // ========== FÍSICO ==========
    fisicoIndicadores = [
        { key: 'Fuerza', nombre: 'Fuerza' },
        { key: 'Velocidad', nombre: 'Velocidad' },
        { key: 'Resistencia', nombre: 'Resistencia' },
        { key: 'Movilidad', nombre: 'Movilidad' }
    ];
    fisicoData: any = {};

    // ========== MENTAL ==========
    mentalIndicadores = [
        { key: 'Concentración', nombre: 'Concentración' },
        { key: 'Actitud', nombre: 'Actitud' },
        { key: 'Confianza', nombre: 'Confianza' },
        { key: 'Resiliencia', nombre: 'Resiliencia' }
    ];
    mentalData: any = {};

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private evaluacionService: EvaluacionService,
        private mysqlService: MysqlService,
        private notificationService: NotificationService
    ) {
        addIcons({ add, remove, 'caret-down-circle': caretDownCircle, chevronBackOutline, checkmarkOutline });
    }

    ngOnInit() {
        this.jugadorId = Number(this.route.snapshot.paramMap.get('id'));
        this.entrenadorId = Number(localStorage.getItem('userId'));

        // Init Técnico
        this.golpes.forEach(golpe => {
            this.evaluationData[golpe] = {
                tecnica: 1,
                control: 1,
                direccion: 1,
                decision: 1,
                comentario: ''
            };
        });

        // Init Táctico
        this.tacticoIndicadores.forEach(i => {
            this.tacticoData[i.key] = { valor: 1 };
        });

        // Init Físico
        this.fisicoIndicadores.forEach(i => {
            this.fisicoData[i.key] = { valor: 1 };
        });

        // Init Mental
        this.mentalIndicadores.forEach(i => {
            this.mentalData[i.key] = { valor: 1 };
        });

        this.cargarAlumno();
        this.cargarUltimaEvaluacion();
    }

    tabChanged(ev: any) {
        this.selectedTab = ev.detail.value;
    }

    // ========== Helpers for simple indicators ==========
    incrementSimple(dataObj: any, key: string) {
        if (dataObj[key].valor < 10) dataObj[key].valor++;
    }

    decrementSimple(dataObj: any, key: string) {
        if (dataObj[key].valor > 1) dataObj[key].valor--;
    }

    getGolpeAvg(golpe: string): string {
        const d = this.evaluationData[golpe];
        const avg = (d.tecnica + d.control + d.direccion + d.decision) / 4;
        return avg.toFixed(1);
    }

    // ========== Load Previous ==========
    cargarUltimaEvaluacion() {
        if (!this.jugadorId) return;

        this.evaluacionService.getEvaluaciones(this.jugadorId).subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                    const sorted = data.sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
                    const latest = sorted[0];

                    if (latest && latest.scores) {
                        let scores = latest.scores;
                        if (typeof scores === 'string') {
                            try { scores = JSON.parse(scores); } catch (e) { scores = null; }
                        }

                        if (scores) {
                            // Técnico (can be scores.tecnico or directly at root level)
                            const tecnico = scores.tecnico || scores;
                            this.golpes.forEach(golpe => {
                                const prevScore = tecnico[golpe] || tecnico[golpe.toLowerCase()];
                                if (prevScore) {
                                    this.evaluationData[golpe] = {
                                        tecnica: Number(prevScore.tecnica) || 1,
                                        control: Number(prevScore.control) || 1,
                                        direccion: Number(prevScore.direccion) || 1,
                                        decision: Number(prevScore.decision) || 1,
                                        comentario: ''
                                    };
                                }
                            });

                            // Táctico
                            const tactico = scores.tactico || {};
                            this.tacticoIndicadores.forEach(i => {
                                const val = tactico[i.key];
                                if (val) {
                                    this.tacticoData[i.key] = {
                                        valor: typeof val === 'object' ? Number(val.valor || 1) : Number(val || 1)
                                    };
                                }
                            });

                            // Físico
                            const fisico = scores.fisico || {};
                            this.fisicoIndicadores.forEach(i => {
                                const val = fisico[i.key];
                                if (val) {
                                    this.fisicoData[i.key] = {
                                        valor: typeof val === 'object' ? Number(val.valor || 1) : Number(val || 1)
                                    };
                                }
                            });

                            // Mental
                            const mental = scores.mental || {};
                            this.mentalIndicadores.forEach(i => {
                                const val = mental[i.key];
                                if (val) {
                                    this.mentalData[i.key] = {
                                        valor: typeof val === 'object' ? Number(val.valor || 1) : Number(val || 1)
                                    };
                                }
                            });

                            console.log('Evaluación previa cargada (ID ' + latest.id + ')');
                        }
                    }
                }
            },
            error: (err) => console.error('Error cargando evaluación previa:', err)
        });
    }

    cargarAlumno() {
        this.mysqlService.getPerfil(this.jugadorId).subscribe({
            next: (res) => {
                if (res) {
                    const userData = res.user || res;
                    this.alumnoNombre = userData.nombre || 'Alumno';

                    let foto = userData.foto_perfil || userData.link_foto || userData.foto;
                    let fotoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(this.alumnoNombre)}&background=ccff00&color=000`;

                    if (foto && typeof foto === 'string' && foto.trim().length > 0 && !foto.includes('imagen_defecto')) {
                        if (!foto.startsWith('http')) {
                            const cleanPath = foto.startsWith('/') ? foto.substring(1) : foto;
                            fotoUrl = `https://api.padelmanager.cl/${cleanPath}`;
                        } else {
                            fotoUrl = foto;
                        }
                    }
                    this.alumnoFoto = fotoUrl;
                }
            },
            error: (err) => console.error('Error cargando perfil:', err)
        });
    }

    increment(golpe: string, metric: string) {
        if (this.evaluationData[golpe][metric] < 10) {
            this.evaluationData[golpe][metric]++;
        }
    }

    decrement(golpe: string, metric: string) {
        if (this.evaluationData[golpe][metric] > 1) {
            this.evaluationData[golpe][metric]--;
        }
    }

    async guardarEvaluacion() {
        const alert = await this.alertCtrl.create({
            header: 'Confirmar',
            message: '¿Guardar esta evaluación?',
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Guardar',
                    handler: () => this.submit()
                }
            ]
        });
        await alert.present();
    }

    goBack() {
        this.navCtrl.back();
    }

    async submit() {
        const loading = await this.loadingCtrl.create({
            message: 'Guardando evaluación...',
            spinner: 'crescent',
            duration: 5000
        });
        await loading.present();

        const payload = {
            jugador_id: this.jugadorId,
            entrenador_id: this.entrenadorId,
            scores: {
                tecnico: this.evaluationData,
                tactico: this.tacticoData,
                fisico: this.fisicoData,
                mental: this.mentalData
            },
            comentarios: this.comentarios
        };

        this.evaluacionService.crearEvaluacion(payload).subscribe({
            next: async () => {
                await loading.dismiss();
                this.notificationService.notificarEvaluacionGenerada(this.jugadorId);

                const alert = await this.alertCtrl.create({ header: 'Éxito', message: 'Evaluación guardada', buttons: ['OK'] });
                await alert.present();
                this.navCtrl.back();
            },
            error: async (err) => {
                await loading.dismiss();
                console.error(err);
                const alert = await this.alertCtrl.create({ header: 'Error', message: 'No se pudo guardar', buttons: ['OK'] });
                await alert.present();
            }
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import {
    IonContent, IonFab, IonFabButton, IonIcon,
    IonAccordionGroup, IonAccordion, IonItem, IonLabel,
    IonRange, IonTextarea, IonInput, IonButton
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
        IonRange, IonTextarea, IonInput, IonButton
    ]
})
export class NuevaEvaluacionPage implements OnInit {
    jugadorId: number = 0;
    entrenadorId: number = 0;
    comentarios: string = '';
    alumnoNombre: string = 'Alumno';
    alumnoFoto: string | null = null;

    golpes = [
        'Derecha', 'Reves', 'Volea de Derecha', 'Volea de Reves', 'Bandeja', 'Vibora',
        'Rulo', 'Remate', 'Salida de Pared', 'Globo', 'Saque', 'Resto'
    ];

    evaluationData: any = {};

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController, // Injected
        private evaluacionService: EvaluacionService,
        private mysqlService: MysqlService,
        private notificationService: NotificationService
    ) {
        addIcons({ add, remove, 'caret-down-circle': caretDownCircle, chevronBackOutline, checkmarkOutline });
    }

    ngOnInit() {
        this.jugadorId = Number(this.route.snapshot.paramMap.get('id'));
        this.entrenadorId = Number(localStorage.getItem('userId'));

        // Inicializar con valores por defecto
        this.golpes.forEach(golpe => {
            this.evaluationData[golpe] = {
                tecnica: 1,
                control: 1,
                direccion: 1,
                decision: 1,
                comentario: ''
            };
        });

        this.cargarAlumno();
        this.cargarUltimaEvaluacion();
    }

    cargarUltimaEvaluacion() {
        if (!this.jugadorId) return;

        this.evaluacionService.getEvaluaciones(this.jugadorId).subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                    // Ordenar por ID descendente para obtener la última evaluación absoluta
                    const sorted = data.sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
                    const latest = sorted[0];

                    if (latest && latest.scores) {
                        let scores = latest.scores;
                        if (typeof scores === 'string') {
                            try {
                                scores = JSON.parse(scores);
                            } catch (e) {
                                console.error('Error parseando scores previo:', e);
                                scores = null;
                            }
                        }

                        if (scores) {
                            // Fusionar puntajes previos en la estructura actual
                            this.golpes.forEach(golpe => {
                                const prevScore = scores[golpe] || scores[golpe.toLowerCase()]; // Fallback por si acaso
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
                    let fotoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(this.alumnoNombre)}&background=ccff00&color=000`; // Default fallback

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
            duration: 5000 // Timeout safety
        });
        await loading.present();

        const payload = {
            jugador_id: this.jugadorId,
            entrenador_id: this.entrenadorId,
            scores: this.evaluationData,
            comentarios: this.comentarios
        };

        this.evaluacionService.crearEvaluacion(payload).subscribe({
            next: async () => {
                await loading.dismiss();
                // Send Notification
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

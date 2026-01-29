import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
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
        'Derecha', 'Reves', 'Voleas', 'Bandeja', 'Vibora',
        'Remate', 'Salida de Pared', 'Globo', 'Saque', 'Resto'
    ];

    evaluationData: any = {};

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private alertCtrl: AlertController,
        private evaluacionService: EvaluacionService,
        private mysqlService: MysqlService
    ) {
        addIcons({ add, remove, 'caret-down-circle': caretDownCircle, chevronBackOutline, checkmarkOutline });
    }

    ngOnInit() {
        this.jugadorId = Number(this.route.snapshot.paramMap.get('id'));
        this.entrenadorId = Number(localStorage.getItem('userId'));

        this.golpes.forEach(golpe => {
            this.evaluationData[golpe] = {
                tecnica: 5,
                control: 5,
                direccion: 5,
                decision: 5
            };
        });

        this.cargarAlumno();
    }

    cargarAlumno() {
        this.mysqlService.getPerfil(this.jugadorId).subscribe({
            next: (res) => {
                if (res) {
                    this.alumnoNombre = res.nombre || 'Alumno';
                    this.alumnoFoto = res.foto_perfil || res.link_foto || null;
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

    submit() {
        const payload = {
            jugador_id: this.jugadorId,
            entrenador_id: this.entrenadorId,
            scores: this.evaluationData,
            comentarios: this.comentarios
        };

        this.evaluacionService.crearEvaluacion(payload).subscribe({
            next: async () => {
                const alert = await this.alertCtrl.create({ header: 'Éxito', message: 'Evaluación guardada', buttons: ['OK'] });
                await alert.present();
                this.navCtrl.back();
            },
            error: async (err) => {
                console.error(err);
                const alert = await this.alertCtrl.create({ header: 'Error', message: 'No se pudo guardar', buttons: ['OK'] });
                await alert.present();
            }
        });
    }
}

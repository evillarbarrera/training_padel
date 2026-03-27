import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonSpinner,
  AlertController,
  ToastController,
  IonFab,
  IonFabButton,
  NavController
} from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import {
  addCircleOutline, starOutline, checkmarkCircleOutline, openOutline,
  warningOutline, cardOutline, calendarOutline, trendingUpOutline,
  shieldCheckmarkOutline, diamondOutline, chevronBackOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-entrenador-mi-plan',
  templateUrl: './entrenador-mi-plan.page.html',
  styleUrls: ['./entrenador-mi-plan.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonSpinner,
    CommonModule,
    FormsModule,
    IonFab,
    IonFabButton
  ]
})
export class EntrenadorMiPlanPage implements OnInit {
  sub: any = null;
  plans: any[] = [];
  loading = true;
  error = false;
  coachId: number = 0;

  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    addIcons({
      addCircleOutline, starOutline, checkmarkCircleOutline, openOutline,
      warningOutline, cardOutline, calendarOutline, trendingUpOutline,
      shieldCheckmarkOutline, diamondOutline, chevronBackOutline
    });
  }

  ngOnInit() {
    this.coachId = Number(localStorage.getItem('userId'));
    this.loadSubscription();
    this.loadPlansData();
  }

  loadSubscription() {
    this.loading = true;
    const token = localStorage.getItem('token');
    
    this.http.get<any>(`${environment.apiUrl}/subscriptions/get_subscription_status.php?coach_id=${this.coachId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-Authorization': `Bearer ${token}`
      }
    }).subscribe({
      next: (res) => {
        this.sub = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar la suscripción:', err);
        this.sub = { status: 'inactive' };
        this.loading = false;
      }
    });
  }

  loadPlansData() {
    const token = localStorage.getItem('token');
    this.http.get<any[]>(`${environment.apiUrl}/subscriptions/get_plans.php`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-Authorization': `Bearer ${token}`
      }
    }).subscribe({
      next: (res) => {
        this.plans = res;
      },
      error: (err) => {
        console.error('Error al cargar planes:', err);
      }
    });
  }

  async gestionarPlan() {
    if (this.plans.length === 0) {
      await this.showToast('Cargando planes...', 'warning');
      return;
    }

    const inputs: any[] = this.plans.map((p) => ({
      name: 'planId',
      type: 'radio',
      label: `${p.name} ($${Number(p.price_clp).toLocaleString()} CLP)`,
      value: p.id,
      checked: this.sub?.plan_id == p.id
    }));

    const alert = await this.alertCtrl.create({
      header: 'CAMBIAR MI PLAN 💎',
      message: 'Selecciona el nuevo plan para tu academia:',
      inputs: inputs,
      cssClass: 'custom-alert-nike',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Actualizar',
          handler: (selectedPlanId) => {
            if (selectedPlanId) {
              this.cambiarPlan(selectedPlanId);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async cambiarPlan(planId: number) {
    this.loading = true;
    const token = localStorage.getItem('token');
    
    this.http.post<any>(`${environment.apiUrl}/subscriptions/update_subscription.php`, {
      coach_id: this.coachId,
      plan_id: planId
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-Authorization': `Bearer ${token}`
      }
    }).subscribe({
      next: async (res) => {
        this.loading = false;
        if (res.success) {
          await this.showToast('¡Plan Actualizado Correctamente! 💎', 'success');
          this.loadSubscription();
        } else {
          await this.showToast(res.message || 'Error al cambiar de plan', 'danger');
        }
      },
      error: async (err) => {
        this.loading = false;
        await this.showToast('Error de conexión. Inténtalo más tarde.', 'danger');
      }
    });
  }

  async cambiarTarjeta() {
    const alert = await this.alertCtrl.create({
      header: 'VINCULAR TARJETA 💳',
      subHeader: 'Portal Seguro (SSL)',
      inputs: [
        { name: 'name', type: 'text', placeholder: 'Nombre titular' },
        { name: 'num', type: 'number', placeholder: '0000 0000 0000 0000 (16 dígitos)', attributes: { maxlength: 16 } },
        { name: 'exp', type: 'text', placeholder: 'Expiración (MM/YY)', attributes: { maxlength: 5 } },
        { name: 'cvv', type: 'number', placeholder: 'CVV (***)', attributes: { maxlength: 4 } }
      ],
      cssClass: 'custom-alert-nike',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Vincular Tarjeta',
          handler: async (data) => {
            if (!data.name || !data.num) {
              await this.showToast('Por favor completa los datos', 'warning');
              return false;
            }
            const lastFour = data.num.toString().slice(-4) || '4242';
            this.confirmarVinculacion(lastFour);
            return true;
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmarVinculacion(lastFour: string) {
    this.loading = true;
    setTimeout(async () => {
      this.loading = false;
      await this.showToast(`Tarjeta terminada en **** ${lastFour} vinculada correctamente⚡`, 'success');
      if (this.sub) this.sub.card_last_four = lastFour;
    }, 1500);
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color: color,
      position: 'bottom',
      mode: 'ios'
    });
    await toast.present();
  }

  goBack() {
    this.navCtrl.back();
  }
}

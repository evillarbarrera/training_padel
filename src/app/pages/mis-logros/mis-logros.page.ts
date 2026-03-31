import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonIcon,
  IonButton,
  IonRefresher,
  IonRefresherContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline, ribbonOutline, lockClosedOutline,
  checkmarkCircle, chevronForwardOutline
} from 'ionicons/icons';
import { MysqlService } from '../../services/mysql.service';

@Component({
  selector: 'app-mis-logros',
  templateUrl: './mis-logros.page.html',
  styleUrls: ['./mis-logros.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonIcon,
    IonButton,
    IonRefresher,
    IonRefresherContent
  ]
})
export class MisLogrosPage implements OnInit {

  logros: any[] = [];
  desbloqueados = 0;
  total = 0;
  porcentaje = 0;

  categorias = [
    { key: 'constancia', label: 'Constancia', icon: '🔥' },
    { key: 'progreso',   label: 'Progreso',   icon: '📈' },
    { key: 'ia',         label: 'IA & Video',  icon: '🤖' }
  ];

  constructor(
    private router: Router,
    private mysqlService: MysqlService
  ) {
    addIcons({
      arrowBackOutline,
      ribbonOutline,
      lockClosedOutline,
      checkmarkCircle,
      chevronForwardOutline
    });
  }

  ngOnInit() {
    this.loadLogros();
  }

  loadLogros() {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) return;

    this.mysqlService.getLogros(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.logros = res.logros || [];
          this.desbloqueados = res.desbloqueados || 0;
          this.total = res.total || 0;
          this.porcentaje = res.porcentaje || 0;
        }
      }
    });
  }

  getByCategoria(cat: string): any[] {
    return this.logros.filter(l => l.categoria === cat);
  }

  getUnlockedCount(cat: string): number {
    return this.logros.filter(l => l.categoria === cat && l.desbloqueado).length;
  }

  getProgressPercent(logro: any): number {
    if (logro.desbloqueado) return 100;
    if (!logro.progreso_requerido) return 0;
    return Math.min(100, Math.round((logro.progreso_actual / logro.progreso_requerido) * 100));
  }

  handleRefresh(event: any) {
    this.loadLogros();
    setTimeout(() => event.target.complete(), 1000);
  }

  goBack() {
    this.router.navigate(['/jugador-home']);
  }
}

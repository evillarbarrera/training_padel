import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padel-loader',
  templateUrl: './padel-loader.component.html',
  styleUrls: ['./padel-loader.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PadelLoaderComponent implements OnInit, OnDestroy {
  @Input() message?: string;
  @Input() overlay: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  phrases: string[] = [
    '🎾 Ajustando la bandeja al cristal...',
    '🎾 Buscando el remate por 3...',
    '🎾 Preparando el globo defensivo...',
    '🎾 Calentando motores en la pista...',
    '🎾 Consultando disponibilidad de pistas...',
    '🎾 Cargando tus mejores estadísticas...',
    '🎾 Entrando a la zona de juego...',
    '🎾 Ajustando la empuñadura Continental...',
    '🎾 Sincronizando datos del club...'
  ];

  currentPhraseIndex = 0;
  currentPhrase = '';
  private intervalId: any;

  ngOnInit() {
    this.currentPhrase = this.message || this.phrases[0];
    if (!this.message) {
      this.intervalId = setInterval(() => {
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
        this.currentPhrase = this.phrases[this.currentPhraseIndex];
      }, 2400);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

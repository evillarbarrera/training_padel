import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entrenador-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './entrenador-home.page.html',
  styleUrls: ['./entrenador-home.page.scss'],
})
export class EntrenadorHomePage {

  constructor(private router: Router,
    private authService: AuthService
  ) {}

  goToPacks() {
    this.router.navigate(['/entrenador-packs']);
  }

  goToAgenda() {
    this.router.navigate(['/entrenador-agenda']);
  }

  goToAlumnos() {
    this.router.navigate(['/alumnos']);
  }

  goToConfig() {
    this.router.navigate(['/entrenador-config']);
  }

  async logout() {
    await this.authService.logout
    this.router.navigate(['/login']);
  }
  
}

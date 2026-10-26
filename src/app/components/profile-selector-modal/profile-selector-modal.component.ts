import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  businessOutline,
  tennisballOutline,
  trophyOutline,
  personOutline,
  chevronForwardOutline,
  closeOutline,
  swapHorizontalOutline,
  sparklesOutline,
  checkmarkCircle
} from 'ionicons/icons';

export interface UserProfileOption {
  key: 'administrador_club' | 'staff_club' | 'entrenador' | 'jugador';
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: string;
  colorTheme: 'volt' | 'blue' | 'purple' | 'emerald';
  clubId?: number | null;
  clubNombre?: string;
  route: string;
}

@Component({
  selector: 'app-profile-selector-modal',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './profile-selector-modal.component.html',
  styleUrls: ['./profile-selector-modal.component.scss']
})
export class ProfileSelectorModalComponent implements OnInit {
  @Input() profiles: any[] = [];
  @Input() allowCancel: boolean = true;
  @Input() currentRole: string = '';

  normalizedOptions: UserProfileOption[] = [];

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) {
    addIcons({
      businessOutline,
      tennisballOutline,
      trophyOutline,
      personOutline,
      chevronForwardOutline,
      closeOutline,
      swapHorizontalOutline,
      sparklesOutline,
      checkmarkCircle
    });
  }

  ngOnInit() {
    this.buildOptions();
  }

  buildOptions() {
    // Si no se pasaron profiles por prop, intentar cargarlos de localStorage
    if (!this.profiles || this.profiles.length === 0) {
      try {
        const stored = localStorage.getItem('availableProfiles');
        if (stored) {
          this.profiles = JSON.parse(stored);
        }
      } catch (e) {
        this.profiles = [];
      }
    }

    if (!this.currentRole) {
      this.currentRole = localStorage.getItem('userRole') || '';
    }

    const options: UserProfileOption[] = [];
    const addedKeys = new Set<string>();

    // 1. Detectar Administrador o Staff de Club
    const adminProfiles = (this.profiles || []).filter(p =>
      p.rol === 'administrador_club' || p.rol === 'staff_club' || p.rol === 'administrador'
    );

    if (adminProfiles.length > 0) {
      const firstAdmin = adminProfiles[0];
      const clubName = firstAdmin.club_nombre && firstAdmin.club_nombre !== 'Perfil Administrador'
        ? firstAdmin.club_nombre
        : 'Administración de Club';

      options.push({
        key: 'administrador_club',
        title: clubName,
        subtitle: 'Panel Operativo de Club',
        description: 'Control de pistas, agenda en vivo, caja POS y torneos.',
        badge: 'GESTIÓN & CLUB',
        icon: 'business-outline',
        colorTheme: 'volt',
        clubId: firstAdmin.club_id,
        clubNombre: firstAdmin.club_nombre,
        route: '/club-admin-home'
      });
      addedKeys.add('administrador_club');
    }

    // 2. Detectar Entrenador Pro
    const hasCoach = (this.profiles || []).some(p => p.rol === 'entrenador');
    if (hasCoach) {
      options.push({
        key: 'entrenador',
        title: 'Entrenador Pro',
        subtitle: 'Academia & Alumnos',
        description: 'Gestión de alumnos, agenda de clases, packs y disponibilidad.',
        badge: 'COACHING',
        icon: 'tennisball-outline',
        colorTheme: 'purple',
        route: '/entrenador-home'
      });
      addedKeys.add('entrenador');
    }

    // 3. Detectar Jugador (Solo si tiene perfil de jugador activo)
    const hasPlayer = (this.profiles || []).some(p => p.rol === 'jugador');
    if (hasPlayer) {
      options.push({
        key: 'jugador',
        title: 'Jugador',
        subtitle: 'Comunidad & Partidos',
        description: 'Reservar pistas, unirse a partidos, ver ranking y progreso.',
        badge: 'COMUNIDAD',
        icon: 'trophy-outline',
        colorTheme: 'emerald',
        route: '/jugador-home'
      });
      addedKeys.add('jugador');
    }

    this.normalizedOptions = options;
  }

  selectProfile(option: UserProfileOption) {
    localStorage.setItem('userRole', option.key);
    if (option.clubId) {
      localStorage.setItem('selectedClubId', option.clubId.toString());
    }

    this.modalCtrl.dismiss({ selected: option.key, option }, 'confirm');
    this.router.navigate([option.route]);
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}

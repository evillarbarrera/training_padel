import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redirige al login
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'jugador-home',
    loadComponent: () => import('./pages/jugador-home/jugador-home.page').then(m => m.JugadorHomePage)
  },
  {
    path: 'jugador-calendario',
    loadComponent: () => import('./pages/jugador-calendario/jugador-calendario.page').then(m => m.JugadorCalendarioPage)
  },
  {
    path: 'jugador-reservas',
    loadComponent: () => import('./pages/jugador-reservas/jugador-reservas.page').then(m => m.JugadorReservasPage)
  },
  {
    path: 'jugador-progreso',
    loadComponent: () => import('./pages/jugador-progreso/jugador-progreso.page').then(m => m.JugadorProgresoPage)
  },
  {
    path: 'entrenador-home',
    loadComponent: () => import('./pages/entrenador-home/entrenador-home.page').then(m => m.EntrenadorHomePage)
  },
  {
    path: 'entrenador-packs',
    loadComponent: () => import('./pages/entrenador-packs/entrenador-packs.page').then(m => m.EntrenadorPacksPage)
  },
  {
    path: 'entrenador-entrenamientos',
    loadComponent: () => import('./pages/entrenador-entrenamientos/entrenador-entrenamientos.page').then(m => m.EntrenadorEntrenamientosPage)
  },
  {
    path: 'alumnos',
    loadComponent: () => import('./pages/alumnos/alumnos.page').then(m => m.AlumnosPage)
  },
  {
    path: 'alumno/:id',
    loadComponent: () => import('./pages/alumno-detalle/alumno-detalle.page').then(m => m.AlumnoDetallePage)
  },
  {
    path: 'entrenador-agenda',
    loadComponent: () => import('./pages/entrenador-agenda/entrenador-agenda.page').then(m => m.EntrenadorAgendaPage)
  },
  {
    path: 'evaluar/:id',
    loadComponent: () => import('./pages/nueva-evaluacion/nueva-evaluacion.page').then(m => m.NuevaEvaluacionPage)
  },
  {
    path: 'pack-alumno',
    loadComponent: () => import('./pages/pack-alumno/pack-alumno.page').then(m => m.PackAlumnoPage)
  },
  {
    path: 'alumno-mis-packs',
    loadComponent: () => import('./pages/alumno-mis-packs/alumno-mis-packs.page').then(m => m.AlumnoMisPacksPage)
  },
  {
    path: 'disponibilidad-entrenador',
    loadComponent: () => import('./pages/disponibilidad-entrenador/disponibilidad-entrenador.page').then(m => m.DisponibilidadEntrenadorPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage)
  },
  {
    path: 'mis-habilidades',
    loadComponent: () => import('./pages/mis-habilidades/mis-habilidades.page').then(m => m.MisHabilidadesPage)
  },
  {
    path: 'mis-habilidades/:id',
    loadComponent: () => import('./pages/mis-habilidades/mis-habilidades.page').then(m => m.MisHabilidadesPage)
  },
];

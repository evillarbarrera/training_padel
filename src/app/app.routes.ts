import { Routes } from '@angular/router';

export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' }, // redirige al login
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'jugador-home',
    loadComponent: () => import('./pages/jugador-home/jugador-home.page').then( m => m.JugadorHomePage)
  },
  {
    path: 'jugador-reservas',
    loadComponent: () => import('./pages/jugador-reservas/jugador-reservas.page').then( m => m.JugadorReservasPage)
  },
  {
    path: 'jugador-progreso',
    loadComponent: () => import('./pages/jugador-progreso/jugador-progreso.page').then( m => m.JugadorProgresoPage)
  },
  {
    path: 'entrenador-home',
    loadComponent: () => import('./pages/entrenador-home/entrenador-home.page').then( m => m.EntrenadorHomePage)
  },
  {
    path: 'entrenador-packs',
    loadComponent: () => import('./pages/entrenador-packs/entrenador-packs.page').then( m => m.EntrenadorPacksPage)
  },
  {
    path: 'entrenador-entrenamientos',
    loadComponent: () => import('./pages/entrenador-entrenamientos/entrenador-entrenamientos.page').then( m => m.EntrenadorEntrenamientosPage)
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
    loadComponent: () => import('./pages/entrenador-agenda/entrenador-agenda.page').then( m => m.EntrenadorAgendaPage)
  },
  {
    path: 'pack-alumno',
    loadComponent: () => import('./pages/pack-alumno/pack-alumno.page').then( m => m.PackAlumnoPage)
  },
];

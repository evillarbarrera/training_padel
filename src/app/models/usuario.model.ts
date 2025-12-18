export interface Usuario {
  id: number;
  nombre: string;
  usuario: string;
  password: string;
  rol: 'entrenador' | 'jugador';
}

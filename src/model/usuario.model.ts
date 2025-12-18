export interface Usuario {
  id: number;
  usuario: string;
  password: string;
  rol: 'entrenador' | 'alumno';
}

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'X-Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

  getUser() {
    return this.http.get<any[]>(`${this.api}/get_user.php`, { headers: this.getHeaders() });
  }

  login(usuario: string, password: string) {
    return this.http.post<any>(`${this.api}/auth/login.php`, {
      usuario,
      password
    });
  }

  register(nombre: string, email: string, password: string, rol: string) {
    return this.http.post<any>(`${this.api}/auth/register.php`, {
      nombre,
      email,
      password,
      rol
    }, { headers: this.getHeaders() });
  }

  googleCheck(email: string) {
    return this.http.post<any>(`${this.api}/auth/google_auth.php`, { email }, { headers: this.getHeaders() });
  }

  appleCheck(email: string, appleUser: string) {
    return this.http.post<any>(`${this.api}/auth/apple_auth.php`, { email, user: appleUser }, { headers: this.getHeaders() });
  }

  googleRegister(nombre: string, email: string, rol: string) {
    return this.http.post<any>(`${this.api}/auth/google_register.php`, {
      nombre,
      email,
      rol
    }, { headers: this.getHeaders() });
  }

  getReservasJugador(jugadorId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/alumno/get_reservas.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }

  getEntrenamientosGrupales(jugadorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/alumno/get_entrenamientos_grupales.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }

  getHomeStats(jugadorId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/alumno/get_home_stats.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }

  checkPendientesEntrenador(jugadorId: number, entrenadorId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/alumno/check_pendientes_entrenador.php?jugador_id=${jugadorId}&entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }

  getDailyTipAI(): Observable<any> {
    return this.http.get<any>(`${this.api}/ia/get_tip_frontend.php`, { headers: this.getHeaders() });
  }

  getEntrenadorAgenda(entrenadorId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/entrenador/get_agenda.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }

  getPacksGrupalesEntrenador(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/entrenador/get_packs_grupales.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }

  cancelarReserva(reservaId: number): Observable<any> {
    return this.http.post<any>(`${this.api}/entrenador/cancelar_reserva.php`, { reserva_id: reservaId }, { headers: this.getHeaders() });
  }

  cancelarReservaJugador(reservaId: number, jugadorId: number): Observable<any> {
    const payload = {
      reserva_id: reservaId,
      jugador_id: jugadorId
    };
    return this.http.post<any>(
      `${this.api}/alumno/cancelar_reserva.php`,
      JSON.stringify(payload),
      { headers: this.getHeaders() }
    );
  }

  getPerfil(userId: number) {
    return this.http.get<any>(`${this.api}/user/get_perfil.php?user_id=${userId}`, { headers: this.getHeaders() });
  }

  updatePerfil(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/user/update_perfil.php`, data, { headers: this.getHeaders() });
  }

  subirFoto(userId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('user_id', userId.toString());
    formData.append('foto', file);

    const token = localStorage.getItem('token');
    
    const uploadHeaders = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'X-Authorization': token ? `Bearer ${token}` : ''
    });

    return this.http.post<any>(`${this.api}/user/subir_foto.php`, formData, {
      headers: uploadHeaders
    });
  }

  inscribirseGrupal(packId: number, jugadorId: number): Observable<any> {
    return this.http.post<any>(
      `${this.api}/packs/inscribir_grupal.php`,
      { pack_id: packId, jugador_id: jugadorId },
      { headers: this.getHeaders() }
    );
  }

  cancelarInscripcionGrupal(inscripcionId: number, jugadorId: number): Observable<any> {
    return this.http.post<any>(
      `${this.api}/alumno/cancelar_inscripcion_grupal.php`,
      { inscripcion_id: inscripcionId, jugador_id: jugadorId },
      { headers: this.getHeaders() }
    );
  }

  getInscripcionesGrupales(packId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/packs/get_inscripciones_grupales.php?pack_id=${packId}`,
      { headers: this.getHeaders() }
    );
  }

  guardarTokenFCM(userId: number, token: string): Observable<any> {
    return this.http.post<any>(
      `${this.api}/notifications/notificaciones.php?action=guardar_token`,
      { user_id: userId, token },
      { headers: this.getHeaders() }
    );
  }

  enviarNotificacion(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/notifications/notificaciones.php?action=enviar`,
      data,
      { headers: this.getHeaders() }
    );
  }

  programarRecordatorio(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/notifications/notificaciones.php?action=programar_recordatorio`,
      data,
      { headers: this.getHeaders() }
    );
  }

  notificarHorariosDisponibles(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/notifications/notificaciones.php?action=horarios_nuevos`,
      data,
      { headers: this.getHeaders() }
    );
  }

  getAllPacks(entrenadorId?: number): Observable<any[]> {
    let url = `${this.api}/packs/get_all_packs.php`;
    if (entrenadorId) {
      url += `?entrenador_id=${entrenadorId}`;
    }
    return this.http.get<any[]>(url, { headers: this.getHeaders() });
  }

  recoverPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.api}/auth/recover-password.php`, { email }, { headers: this.getHeaders() });
  }

  getAlumnos(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/alumno/get_alumno.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }

  crearAlumno(data: { nombre: string, email: string, entrenador_id: number }): Observable<any> {
    return this.http.post(`${this.api}/alumno/create_alumno.php`, data, {
      headers: this.getHeaders()
    });
  }

  getLogros(jugadorId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/logros/get_logros.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
  }
}

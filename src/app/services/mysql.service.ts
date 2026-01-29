import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  private api = 'http://api.lamatek.cl';
  private token = btoa('1|padel_academy');

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any[]>(`${this.api}/get_user.php`, { headers: this.headers });
  }

  login(usuario: string, password: string) {
    return this.http.post<any>(`${this.api}/login.php`, {
      usuario,
      password
    });
  }

  register(nombre: string, email: string, password: string, rol: string) {
    return this.http.post<any>(`${this.api}/register.php`, {
      nombre,
      email,
      password,
      rol
    }, { headers: this.headers });
  }

  googleCheck(email: string) {
    return this.http.post<any>(`${this.api}/google_auth.php`, { email }, { headers: this.headers });
  }

  googleRegister(nombre: string, email: string, rol: string) {
    return this.http.post<any>(`${this.api}/google_register.php`, {
      nombre,
      email,
      rol
    }, { headers: this.headers });
  }

  getReservasJugador(jugadorId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/alumno/get_reservas.php?jugador_id=${jugadorId}`, { headers: this.headers });
  }

  getEntrenamientosGrupales(jugadorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/alumno/get_entrenamientos_grupales.php?jugador_id=${jugadorId}`, { headers: this.headers });
  }

  getHomeStats(jugadorId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/alumno/get_home_stats.php?jugador_id=${jugadorId}`, { headers: this.headers });
  }

  getEntrenadorAgenda(entrenadorId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/entrenador/get_agenda.php?entrenador_id=${entrenadorId}`, { headers: this.headers });
  }

  getPacksGrupalesEntrenador(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/entrenador/get_packs_grupales.php?entrenador_id=${entrenadorId}`, { headers: this.headers });
  }

  cancelarReserva(reservaId: number): Observable<any> {
    return this.http.post<any>(`${this.api}/entrenador/cancelar_reserva.php`, { reserva_id: reservaId }, { headers: this.headers });
  }

  cancelarReservaJugador(reservaId: number, jugadorId: number): Observable<any> {
    const payload = { 
      reserva_id: reservaId, 
      jugador_id: jugadorId 
    };
    return this.http.post<any>(
      `${this.api}/alumno/cancelar_reserva.php`, 
      JSON.stringify(payload), 
      { headers: this.headers }
    );
  }

  getPerfil(userId: number) {
    return this.http.get<any>(`${this.api}/get_perfil.php?user_id=${userId}`, { headers: this.headers });
  }

  updatePerfil(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/update_perfil.php`, data, { headers: this.headers });
  }

  subirFoto(userId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('user_id', userId.toString());
    formData.append('foto', file);

    // Para FormData NO usamos 'Content-Type': 'application/json'
    const uploadHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.post<any>(`${this.api}/subir_foto.php`, formData, {
      headers: uploadHeaders
    });
  }

  // Métodos para packs grupales
  inscribirseGrupal(packId: number, jugadorId: number): Observable<any> {
    return this.http.post<any>(
      `${this.api}/packs/inscribir_grupal.php`,
      { pack_id: packId, jugador_id: jugadorId },
      { headers: this.headers }
    );
  }

  cancelarInscripcionGrupal(inscripcionId: number): Observable<any> {
    return this.http.post<any>(
      `${this.api}/packs/cancelar_inscripcion_grupal.php`,
      { inscripcion_id: inscripcionId },
      { headers: this.headers }
    );
  }

  getInscripcionesGrupales(packId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/packs/get_inscripciones_grupales.php?pack_id=${packId}`,
      { headers: this.headers }
    );
  }

  // ===== NOTIFICACIONES =====
  
  guardarTokenFCM(userId: number, token: string): Observable<any> {
    return this.http.post<any>(
      `${this.api}/notificaciones.php?action=guardar_token`,
      { user_id: userId, token },
      { headers: this.headers }
    );
  }

  enviarNotificacion(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/notificaciones.php?action=enviar`,
      data,
      { headers: this.headers }
    );
  }

  programarRecordatorio(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/notificaciones.php?action=programar_recordatorio`,
      data,
      { headers: this.headers }
    );
  }

  notificarHorariosDisponibles(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/notificaciones.php?action=horarios_nuevos`,
      data,
      { headers: this.headers }
    );
  }
}

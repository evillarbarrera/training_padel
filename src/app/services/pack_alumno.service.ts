import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackAlumnoService {

  private apiUrl = `${environment.apiUrl}/alumno`;

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

  insertPackAlumno(data: any) {
    return this.http.post(
      `${this.apiUrl}/insert_pack.php`,
      data,
      { headers: this.getHeaders() }
    );
  }

  initTransaction(data: any): Observable<any> {
    const paymentUrl = this.apiUrl.replace('/alumno', '/pagos');
    return this.http.post(`${paymentUrl}/init_transaction.php`, data, {
      headers: this.getHeaders()
    });
  }

  getAlumnosProfesor(entrenador_id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_alumno.php?entrenador_id=${entrenador_id}`, { headers: this.getHeaders() });
  }

  inscribirseGrupal(packId: number, jugadorId: number): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/inscribir_grupal.php`,
      { pack_id: packId, jugador_id: jugadorId },
      { headers: this.getHeaders() }
    );
  }

  // --- CORRECCIÓN SEGURIDAD: Usar ruta /alumno/ y enviar jugador_id ---
  cancelarInscripcionGrupal(inscripcionId: number, jugadorId: number): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/cancelar_inscripcion_grupal.php`,
      { inscripcion_id: inscripcionId, jugador_id: jugadorId },
      { headers: this.getHeaders() }
    );
  }

  getInscripcionesGrupales(packId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl.replace('/alumno', '')}/packs/get_inscripciones_grupales.php?pack_id=${packId}`,
      { headers: this.getHeaders() }
    );
  }

  getMisPacks(jugadorId: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/get_mis_packs_alumno.php?jugador_id=${jugadorId}`,
      { headers: this.getHeaders() }
    );
  }

  invitarJugador(packJugadoresId: number, emailInvitado: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/invitar_jugador_pack.php`,
      { pack_jugadores_id: packJugadoresId, email_invitado: emailInvitado },
      { headers: this.getHeaders() }
    );
  }

}

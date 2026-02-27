import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EntrenamientoService {

  private api = 'https://api.padelmanager.cl';
  private token = btoa('1|padel_academy');

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getPacksJugador() {
    return this.http.get<any[]>(`${this.api}/packs/jugador`);
  }

  getHorariosProfesor(profesorId: number) {
    return this.http.get<any[]>(`${this.api}/profesores/${profesorId}/horarios`);
  }

  agendarEntrenamiento(data: any) {
    return this.http.post(`${this.api}/entrenamientos/agendar`, data);
  }

  addDisponibilidad(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/disponibilidad/add.php`, data, { headers: this.headers });
  }

  getEntrenadorPorJugador(jugadorId: number) {
    return this.http.get<any>(
      `${this.api}/alumno/get_pack.php?jugador_id=${jugadorId}&t=${new Date().getTime()}`, { headers: this.headers }
    );
  }

  getDisponibilidadEntrenador(entrenadorId: number, packId?: number, clubId?: number) {
    let url = `${this.api}/entrenador/get_disponibilidad.php?entrenador_id=${entrenadorId}`;
    if (packId) {
      url += `&pack_id=${packId}`;
    }
    if (clubId) {
      url += `&club_id=${clubId}`;
    }
    return this.http.get<any[]>(url, { headers: this.headers });
  }

  crearReserva(payload: any): Observable<any> {
    return this.http.post(
      `${this.api}/disponibilidad/reservas.php`, payload, { headers: this.headers }
    );
  }


  getDisponibilidad(entrenadorId: number, clubId?: number): Observable<any[]> {
    let url = `${this.api}/disponibilidad/get.php?entrenador_id=${entrenadorId}`;
    if (clubId) url += `&club_id=${clubId}`;
    return this.http.get<any[]>(url, { headers: this.headers });
  }

  getReservasEntrenador(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/entrenador/get_agenda.php?entrenador_id=${entrenadorId}`,
      { headers: this.headers }
    );
  }

  syncDisponibilidad(payload: { crear: any[]; eliminar: any[] }): Observable<any> {
    return this.http.post<any>(
      `${this.api}/disponibilidad/sync.php`,
      payload,
      { headers: this.headers }
    );
  }

  getMisAlumnos(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/entrenador/get_mis_alumnos.php?entrenador_id=${entrenadorId}`,
      { headers: this.headers }
    );
  }

  getDefaultConfig(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/disponibilidad/get_config.php?entrenador_id=${entrenadorId}`,
      { headers: this.headers }
    );
  }

  saveDefaultConfig(payload: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/disponibilidad/save_config.php`,
      payload,
      { headers: this.headers }
    );
  }

  applyDefaultConfig(payload: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/disponibilidad/apply_config.php`,
      payload,
      { headers: this.headers }
    );
  }

  getDashboardStats(entrenadorId: number): Observable<any> {
    return this.http.get<any>(
      `${this.api}/entrenador/get_dashboard_stats.php?entrenador_id=${entrenadorId}`,
      { headers: this.headers }
    );
  }

  getClubes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/clubes/get_clubes.php`, { headers: this.headers });
  }

  addClub(payload: any): Observable<any> {
    return this.http.post<any>(`${this.api}/clubes/add_club.php`, payload, { headers: this.headers });
  }

  migrateAvailability(entrenadorId: number, clubId: number): Observable<any> {
    const payload = { entrenador_id: entrenadorId, club_id: clubId };
    return this.http.post<any>(`${this.api}/disponibilidad/migrate_to_club.php`, payload, { headers: this.headers });
  }
}

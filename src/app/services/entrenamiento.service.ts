import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EntrenamientoService {

  private api = environment.apiUrl;
  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

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
    return this.http.post<any>(`${this.api}/disponibilidad/add.php`, data, { headers: this.getHeaders() });
  }

  getEntrenadorPorJugador(jugadorId: number) {
    return this.http.get<any>(
      `${this.api}/alumno/get_pack.php?jugador_id=${jugadorId}&t=${new Date().getTime()}`, { headers: this.getHeaders() }
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
    return this.http.get<any[]>(url, { headers: this.getHeaders() });
  }

  crearReserva(payload: any): Observable<any> {
    return this.http.post(
      `${this.api}/disponibilidad/reservas.php`, payload, { headers: this.getHeaders() }
    );
  }


  getDisponibilidad(entrenadorId: number, clubId?: number): Observable<any[]> {
    let url = `${this.api}/disponibilidad/get.php?entrenador_id=${entrenadorId}`;
    if (clubId) url += `&club_id=${clubId}`;
    return this.http.get<any[]>(url, { headers: this.getHeaders() });
  }

  getReservasEntrenador(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/entrenador/get_agenda.php?entrenador_id=${entrenadorId}`,
      { headers: this.getHeaders() }
    );
  }

  syncDisponibilidad(payload: { crear: any[]; eliminar: any[] }): Observable<any> {
    return this.http.post<any>(
      `${this.api}/disponibilidad/sync.php`,
      payload,
      { headers: this.getHeaders() }
    );
  }

  getMisAlumnos(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/entrenador/get_mis_alumnos.php?entrenador_id=${entrenadorId}`,
      { headers: this.getHeaders() }
    );
  }

  getDefaultConfig(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/disponibilidad/get_config.php?entrenador_id=${entrenadorId}`,
      { headers: this.getHeaders() }
    );
  }

  saveDefaultConfig(payload: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/disponibilidad/save_config.php`,
      payload,
      { headers: this.getHeaders() }
    );
  }

  applyDefaultConfig(payload: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/disponibilidad/apply_config.php`,
      payload,
      { headers: this.getHeaders() }
    );
  }

  getDashboardStats(entrenadorId: number): Observable<any> {
    return this.http.get<any>(
      `${this.api}/entrenador/get_dashboard_stats.php?entrenador_id=${entrenadorId}`,
      { headers: this.getHeaders() }
    );
  }

  getClubes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/clubes/get_clubes.php`, { headers: this.getHeaders() });
  }

  addClub(payload: any): Observable<any> {
    return this.http.post<any>(`${this.api}/clubes/add_club.php`, payload, { headers: this.getHeaders() });
  }

  migrateAvailability(entrenadorId: number, clubId: number): Observable<any> {
    const payload = { entrenador_id: entrenadorId, club_id: clubId };
    return this.http.post<any>(`${this.api}/disponibilidad/migrate_to_club.php`, payload, { headers: this.getHeaders() });
  }

  // --- CUPONES ---
  getCupones(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/entrenador/get_cupones.php?entrenador_id=${entrenadorId}`,
      { headers: this.getHeaders() }
    );
  }

  saveCupon(payload: any): Observable<any> {
    return this.http.post<any>(
      `${this.api}/entrenador/save_cupon.php`,
      payload,
      { headers: this.getHeaders() }
    );
  }

  deleteCupon(payload: { id: number; entrenador_id: number }): Observable<any> {
    return this.http.post<any>(
      `${this.api}/entrenador/delete_cupon.php`,
      payload,
      { headers: this.getHeaders() }
    );
  }

  validateCupon(codigo: string, entrenadorId: number, jugadorId?: number, packId?: number): Observable<any> {
    let url = `${this.api}/packs/validate_cupon.php?codigo=${codigo}&entrenador_id=${entrenadorId}`;
    if (jugadorId) url += `&jugador_id=${jugadorId}`;
    if (packId) url += `&pack_id=${packId}`;
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  getMisPacks(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/packs/get_mis_packs.php?entrenador_id=${entrenadorId}`,
      { headers: this.getHeaders() }
    );
  }

  searchAlumnos(term: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/user/get_users.php?rol=jugador&search=${term}&limit=10`,
      { headers: this.getHeaders() }
    );
  }

  // --- MALLAS Y SEGUIMIENTO ---
  getMallas(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/mallas/get_mallas.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }

  asignarMalla(data: { jugador_id: number, malla_id: number, entrenador_id: number }): Observable<any> {
    return this.http.post(`${this.api}/mallas/asignar_malla.php`, data, { headers: this.getHeaders() });
  }

  // --- PACKS DEL ENTRENADOR ---
  getPacks(entrenadorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/alumno/get_pack.php?entrenador_id=${entrenadorId}`, { headers: this.getHeaders() });
  }

  insertPack(data: any): Observable<any> {
    return this.http.post(`${this.api}/alumno/insert_pack.php`, data, { headers: this.getHeaders() });
  }

  cancelarReserva(reservaId: number): Observable<any> {
    return this.http.post(`${this.api}/disponibilidad/cancelar_reserva.php`, { id: reservaId }, { headers: this.getHeaders() });
  }

  updateReservaTecnica(payload: any): Observable<any> {
    return this.http.post(`${this.api}/disponibilidad/update_reserva_tecnica.php`, payload, {
      headers: this.getHeaders()
    });
  }
}



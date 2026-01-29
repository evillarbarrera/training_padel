import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackAlumnoService {

  private apiUrl = 'http://api.lamatek.cl/alumno';

  private token = btoa('1|padel_academy');

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  insertPackAlumno(data: any) {
    return this.http.post(
      `${this.apiUrl}/insert_pack.php`,
      data,
      { headers: this.headers }
    );
  }

  initTransaction(data: any): Observable<any> {
    const paymentUrl = this.apiUrl.replace('/alumno', '/pagos');
    return this.http.post(`${paymentUrl}/init_transaction.php`, data, {
      headers: this.headers
    });
  }

  getAlumnosProfesor(entrenador_id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_alumno.php?entrenador_id=${entrenador_id}`, { headers: this.headers });
  }

  inscribirseGrupal(packId: number, jugadorId: number): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl.replace('/alumno', '')}/packs/inscribir_grupal.php`,
      { pack_id: packId, jugador_id: jugadorId },
      { headers: this.headers }
    );
  }

  cancelarInscripcionGrupal(inscripcionId: number): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl.replace('/alumno', '')}/packs/cancelar_inscripcion_grupal.php`,
      { inscripcion_id: inscripcionId },
      { headers: this.headers }
    );
  }

  getInscripcionesGrupales(packId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl.replace('/alumno', '')}/packs/get_inscripciones_grupales.php?pack_id=${packId}`,
      { headers: this.headers }
    );
  }

}

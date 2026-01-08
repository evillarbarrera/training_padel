import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EntrenamientoService {

  private api = 'http://api.rojasrefrigeracion.cl';
  private token = btoa('1|padel_academy');
  
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

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
    return this.http.post<any>(`${this.api}/disponibilidad/add.php`, data, {  headers: this.headers  });
  }

  getEntrenadorPorJugador(jugadorId: number) {

    return this.http.get<any>(
      `${this.api}/alumno/get_pack.php?jugador_id=${jugadorId}`,{ headers: this.headers}
    );
  }


}

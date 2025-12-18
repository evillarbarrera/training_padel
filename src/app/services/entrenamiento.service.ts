import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EntrenamientoService {

  private api = 'https://tu-backend.com/api';

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
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackAlumnoService {

private apiUrl = 'http://api.rojasrefrigeracion.cl/alumno';

  private token = btoa('1|padel_academy');

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });
  
  constructor(private http: HttpClient) {}

  insertPackAlumno(data: any) {
    return this.http.post(
      `${this.apiUrl}/insert_pack.php`,
      data,
      { headers: this.headers } 
    );

  }

    getAlumnosProfesor(entrenador_id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_alumno.php?entrenador_id=${entrenador_id}`, { headers: this.headers} );
  }

}

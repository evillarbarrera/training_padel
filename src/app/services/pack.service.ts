import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  private apiUrl = 'https://api.padelmanager.cl/packs';
  // Token en Base64
  private token = btoa('1|padel_academy');

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }


  getMisPacks(): Observable<any> {
    const userId = Number(localStorage.getItem('userId')); // recupera ID guardado

    return this.http.get(`${this.apiUrl}/get_mis_packs.php?entrenador_id=${userId}`, { headers: this.headers });
  }

  getAllPacks(lat?: number, lng?: number, rad?: number): Observable<any> {
    let url = `${this.apiUrl}/get_all_packs.php`;
    const params = [];
    if (lat) params.push(`lat=${lat}`);
    if (lng) params.push(`lng=${lng}`);
    if (rad) params.push(`rad=${rad}`);

    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }

    return this.http.get(url, { headers: this.headers });
  }


  crearPack(pack: any): Observable<any> {
    const userId = Number(localStorage.getItem('userId')); // recupera ID guardado

    const packConId = { ...pack, entrenador_id: userId };
    return this.http.post<any>(`${this.apiUrl}/create_pack.php`, packConId, { headers: this.headers });
  }

  // Editar pack
  editarPack(pack: any): Observable<any> {
    const userId = Number(localStorage.getItem('userId')); // recupera ID guardado

    const packConId = { ...pack, entrenador_id: userId };
    return this.http.post(`${this.apiUrl}/editar_pack.php`, packConId, { headers: this.headers });
  }

  // Eliminar pack
  eliminarPack(id: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/eliminar_pack.php`,
      { id },
      { headers: this.headers }
    );
  }

}

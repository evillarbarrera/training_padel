import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  private apiUrl = `${environment.apiUrl}/packs`;
  // Token en Base64
  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }


  getMisPacks(): Observable<any> {
    const userId = Number(localStorage.getItem('userId')); // recupera ID guardado

    return this.http.get(`${this.apiUrl}/get_mis_packs.php?entrenador_id=${userId}`, { headers: this.getHeaders() });
  }

  getAllPacks(lat?: number, lng?: number, rad?: number, region?: string, comuna?: string): Observable<any> {
    let url = `${this.apiUrl}/get_all_packs.php`;
    const params = [];
    if (lat) params.push(`lat=${lat}`);
    if (lng) params.push(`lng=${lng}`);
    if (rad) params.push(`rad=${rad}`);
    if (region) params.push(`region=${region}`);
    if (comuna) params.push(`comuna=${comuna}`);

    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }

    return this.http.get(url, { headers: this.getHeaders() });
  }


  crearPack(pack: any): Observable<any> {
    const userId = Number(localStorage.getItem('userId')); // recupera ID guardado

    const packConId = { ...pack, entrenador_id: userId };
    return this.http.post<any>(`${this.apiUrl}/create_pack.php`, packConId, { headers: this.getHeaders() });
  }

  // Editar pack
  editarPack(pack: any): Observable<any> {
    const userId = Number(localStorage.getItem('userId')); // recupera ID guardado

    const packConId = { ...pack, entrenador_id: userId };
    return this.http.post(`${this.apiUrl}/editar_pack.php`, packConId, { headers: this.getHeaders() });
  }

  // Eliminar pack
  eliminarPack(id: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/eliminar_pack.php`,
      { id },
      { headers: this.getHeaders() }
    );
  }

}

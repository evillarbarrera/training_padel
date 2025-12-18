import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  private apiUrl = 'http://api.rojasrefrigeracion.cl/packs';
  // Token en Base64
  private token = btoa('1|padel_academy');
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) {}

  getMisPacks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_mis_packs.php`, { headers: this.headers });
  }

  crearPack(pack: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create_pack.php`, pack, { headers: this.headers });
  }
}

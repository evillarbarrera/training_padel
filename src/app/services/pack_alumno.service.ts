import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackAlumnoService {

  private apiUrl = 'http://api.rojasrefrigeracion.cl/packs';
  // Token en Base64
  private token = btoa('1|padel_academy');
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) {}


}

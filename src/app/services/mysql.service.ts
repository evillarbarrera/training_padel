import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  private api = 'http://api.rojasrefrigeracion.cl/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      `${this.api}/get_users.php`
    );
  }
}

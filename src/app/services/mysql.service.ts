import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  private api = 'http://api.rojasrefrigeracion.cl';

  constructor(private http: HttpClient) {}

  // getUsers(): Observable<Usuario[]> {
  //   return this.http.get<Usuario[]>(
  //     `${this.api}/get_users.php`
  //   );
  // }

   getUser() {
    const token = localStorage.getItem('token');

    return this.http.get<any[]>(`${this.api}/get_user.php`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

 login(usuario: string, password: string) {
    return this.http.post<any>(`${this.api}/login.php`, {
      usuario,
      password
    });
  }
}

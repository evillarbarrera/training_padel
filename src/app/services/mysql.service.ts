import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  private api = 'http://c2701752.ferozo.com/public_api';
  private API_KEY = 'Javi3008';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.api}/login.php`,
      { email, password },
      {
        headers: {
          'X-API-KEY': this.API_KEY
        }
      }
    );
  }
}

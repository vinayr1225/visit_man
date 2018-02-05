import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LoginService {

  loginUrl = 'http://localhost:8080/employee/login';

  constructor(private http: HttpClient) {
  }

  isAuthorized(username: String, password: String): Observable<Boolean> {
    const urlWithPram = `${this.loginUrl}/?username=${username}&password=${password}`;
    return this.http.get<Boolean>(urlWithPram);
  }
}

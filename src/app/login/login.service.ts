import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {Employee} from '../model/employee';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class LoginService {

  loginUrl = 'http://localhost:8080/employee/login';
  serverError: Boolean;
  isAuth: Boolean;
  username: String;


  constructor(private http: HttpClient) {
    this.serverError = false;
  }

  isAuthorized(employee: Employee): Observable<Boolean> {
    this.username = employee.username;

    return this.http.post<Boolean>(this.loginUrl, employee, httpOptions)
      .pipe(
        tap(isAuth => this.isAuth = isAuth)
      );
  }


}

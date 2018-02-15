import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VisitorHistory} from '../model/visitor-history';
import {VisitorSchedule} from '../model/visitor-schedule';
import {VisitorHistoryId} from '../model/visitor-history-id';
import {LoginService} from '../login/login.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class ArrivedService {

  // baseUrl = 'http://localhost:8080/?username=${username}/arrived';
  baseUrl: string;
  loginService: LoginService;
  username: String;

  constructor(private http: HttpClient,
              loginService: LoginService) {
    this.loginService = loginService;

    if (loginService.isAuth === true) {
      this.username = loginService.username;
    }
    this.baseUrl = 'http://localhost:8080/' + this.username + '/arrived';
  }

  findArrivedList(): Observable<VisitorHistory[]> {
    return this.http.get<VisitorHistory[]>(this.baseUrl);
  }

  markAsleaved(visitorHistoryId: VisitorHistoryId): Observable<VisitorHistoryId> {
    return this.http.post<VisitorHistoryId>(this.baseUrl, visitorHistoryId, httpOptions);
  }

}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {VisitorSchedule} from '../model/visitor-schedule';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VisitorHistory} from '../model/visitor-history';
import {tap} from 'rxjs/operators';
import {LoginService} from '../login/login.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class PendingService {

  // baseUrl = 'http://localhost:8080/${username}/pending';
  // isArrivedUrl = 'http://localhost:8080/${username}/pending/isArrived'
  baseUrl: string;
  isArrivedUrl: string;
  loginService: LoginService;
  username: String;

  constructor(private http: HttpClient,
              loginService: LoginService) {
    this.loginService = loginService;

    if (loginService.isAuth === true) {
      this.username = loginService.username;
    }
    this.baseUrl = 'http://localhost:8080/' + this.username + '/pending';
    this.isArrivedUrl = 'http://localhost:8080/${username}/pending/isArrived';
  }

  findPendingList(): Observable<VisitorSchedule[]> {
    return this.http.get<VisitorSchedule[]>(this.baseUrl);
  }

  markAsArived(visitorHistory: VisitorHistory): Observable<VisitorHistory> {
    return this.http.post<VisitorHistory>(this.isArrivedUrl, visitorHistory, httpOptions);
  }

}

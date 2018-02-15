import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {VisitorSchedule} from '../model/visitor-schedule';
import {VisitorHistory} from '../model/visitor-history';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login/login.service';

@Injectable()
export class HistoryService {

  // baseUrl = 'http://localhost:8080/${username}/history';
  baseUrl: string;
  loginService: LoginService;
  username: String;

  constructor(private http: HttpClient,
              loginService: LoginService) {
    this.loginService = loginService;

    if (loginService.isAuth === true) {
      this.username = loginService.username;
    }
    this.baseUrl = 'http://localhost:8080/' + this.username + '/history';
  }


  findHistoryList(): Observable<VisitorHistory[]> {
    return this.http.get<VisitorHistory[]>(this.baseUrl);
  }


}

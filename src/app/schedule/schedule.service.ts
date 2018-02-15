import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {VisitorInfo} from '../model/visitor-info';
import {VisitorSchedule} from '../model/visitor-schedule';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {LoginService} from '../login/login.service';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class ScheduleService {


  //
  // baseUrl = 'http://localhost:8080/?username=${this.username}/schedule/';
  // pendingListUrl = 'http://localhost:8080/${this.username}/schedule/pending-list';

  baseUrl: string;
  pendingListUrl: string;

  loginService: LoginService;
  username: String;

  constructor(private http: HttpClient,
              loginService: LoginService) {
    this.loginService = loginService;

    if (loginService.isAuth === true) {
      this.username = loginService.username;
    }

    this.baseUrl = 'http://localhost:8080/' + this.username + '/schedule/';
    this.pendingListUrl = 'http://localhost:8080/' + this.username + '/schedule/pending-list';
  }

  findPendingList(): Observable<VisitorSchedule[]> {
    return this.http.get<VisitorSchedule[]>(this.pendingListUrl);
  }

  saveSchedule(visitorSchedule: VisitorSchedule): Observable<VisitorSchedule> {
    return this.http.post<VisitorSchedule>(this.baseUrl, visitorSchedule, httpOptions);
  }

  deleteSchedule(visitorSchedule: VisitorSchedule): Observable<{}> {
    const urlWithPram = `${this.baseUrl}/delete`;
    return this.http.post<{}>(urlWithPram, visitorSchedule, httpOptions);
  }

  findVisitorInfo(id: String): Observable<VisitorInfo> {
    if (id === '') {
      return of(undefined);
    }
    const updUrl = `${this.baseUrl}/?id=${id}`;
    return this.http.get<VisitorInfo>(updUrl)
      .pipe(
        catchError(this.handleError<VisitorInfo>(null))
      );
  }


  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {



      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

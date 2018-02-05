import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {VisitorInfo} from '../model/visitor-info';
import {VisitorSchedule} from '../model/visitor-schedule';
import {catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class ScheduleService {


  baseUrl = 'http://localhost:8080/dil/schedule';
  pendingListUrl = 'http://localhost:8080/dil/schedule/pending-list';


  constructor(private http: HttpClient) {
  }

  findPendingList(): Observable<VisitorSchedule[]> {
    return this.http.get<VisitorSchedule[]>(this.pendingListUrl)
      .pipe(tap(pendingList => console.log(pendingList)));
  }

  saveSchedule(visitorSchedule: VisitorSchedule): Observable<VisitorSchedule> {
    return this.http.post<VisitorSchedule>(this.baseUrl, visitorSchedule, httpOptions);
  }

  deleteSchedule(visitorSchedule: VisitorSchedule): Observable<{}> {
    const urlWithPram = `${this.baseUrl}/delete`;
    return this.http.post<{}>(urlWithPram, visitorSchedule, httpOptions);
  }

  findVisitorInfoes(id: String): Observable<VisitorInfo> {
    if (!id.trim()) {
      // if not search term, return empty hero array.
      return of(null);
    }
    return this.http.get<VisitorInfo>(`${this.baseUrl}/?id=${id}`).pipe(
      tap(visitor => console.log('found visitor ' + visitor)),
      catchError(this.handleError<VisitorInfo>(null))
    );
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

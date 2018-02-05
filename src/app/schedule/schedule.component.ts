import {Component, NgModule, OnInit} from '@angular/core';
import {ScheduleService} from './schedule.service';
import {VisitorInfo} from '../model/visitor-info';
import {VisitorSchedule} from '../model/visitor-schedule';
import {NgForm} from '@angular/forms';
import {VisitorScheduleId} from '../model/visitor-schedule-id';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {  debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


  daterangepickerModel: Date[];
  pendingList: Array<VisitorSchedule>;
  visitorInfoObs$: Observable<VisitorInfo>;
  visitorSchedule: VisitorSchedule;
  private visitorInfo: VisitorInfo;
  private visitorScheduleId: VisitorScheduleId;
  private searchTerms = new Subject<string>();

  constructor(public scheduleService: ScheduleService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.getPendingList();

    this.visitorInfoObs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.scheduleService.findVisitorInfoes(term)),
    );


  }

  getPendingList() {
    this.scheduleService.findPendingList()
      .subscribe(pendingList => this.pendingList = pendingList);
    console.log(this.pendingList);
  }

  sendVisitorSchedule(scheduleForm: NgForm) {


    this.visitorInfo = new VisitorInfo(
      scheduleForm.value.visitorId,
      scheduleForm.value.name,
      scheduleForm.value.organization);

    this.visitorScheduleId = new VisitorScheduleId(
      scheduleForm.value.scheduleDate[0],
      scheduleForm.value.visitorId

    );

    this.visitorSchedule = new VisitorSchedule(
      this.visitorInfo,
      this.visitorScheduleId,
      scheduleForm.value.purpose,
      scheduleForm.value.scheduleDate[1]);

    // console.log(this.visitorSchedule);
    this.scheduleService.saveSchedule(this.visitorSchedule).subscribe();

  }
  removeSchedule(visitorSchedule: VisitorSchedule) {
    console.log(visitorSchedule);
    this.scheduleService.deleteSchedule(visitorSchedule).subscribe();
    // this.getPendingList();
  }

  // getVisitorInfo(id: String) {
  //   this.scheduleService.findVisitorInfo(id)
  //     .subscribe(data => this.visitorInfo = {...data});
  //   console.log(this.visitorInfo.name);
  // }



}

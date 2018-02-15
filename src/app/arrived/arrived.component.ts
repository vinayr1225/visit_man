import {Component, OnInit} from '@angular/core';
import {ArrivedService} from './arrived.service';
import {VisitorSchedule} from '../model/visitor-schedule';
import {VisitorHistory} from '../model/visitor-history';
import {VisitorHistoryId} from '../model/visitor-history-id';
import {VisitorInfo} from '../model/visitor-info';
import {VisitorScheduleId} from '../model/visitor-schedule-id';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-arrived',
  templateUrl: './arrived.component.html',
  styleUrls: ['./arrived.component.css']
})
export class ArrivedComponent implements OnInit {

  private arrivedService: ArrivedService;
  private arrivedList: Array<VisitorHistory>;
  private currentVisitorHistory: VisitorHistory = Object();

  constructor(arrivedService: ArrivedService) {
    this.arrivedService = arrivedService;
  }

  ngOnInit() {
    this.getArrivedList();
    this.currentVisitorHistory.passno = 1;
    this.currentVisitorHistory.visitorHistoryId = new VisitorHistoryId(1,
      new VisitorScheduleId(new Date(), ''));
    this.currentVisitorHistory.visitorSchedule = new VisitorSchedule(
      new VisitorInfo('', '', ''),
      new VisitorScheduleId(new Date(), ''),
      '',
      new Employee('', '', '', '', '', 1, ''),
      new Date());

  }

  getArrivedList() {
    this.arrivedService.findArrivedList()
      .subscribe(arrivedList => this.arrivedList = arrivedList);

  }


  // markAsLeaved()

  markAsLeaved(visitorHistoryId: VisitorHistoryId) {
    this.arrivedService.markAsleaved(visitorHistoryId)
      .subscribe();
  }

  selectVisitorHistory(history) {
    this.currentVisitorHistory = history;
  }
}

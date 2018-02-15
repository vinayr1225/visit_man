import {Component, OnInit} from '@angular/core';
import {PendingService} from './pending.service';
import {VisitorSchedule} from '../model/visitor-schedule';
import {VisitorHistory} from '../model/visitor-history';
import {VisitorHistoryId} from '../model/visitor-history-id';
import {NgModel} from '@angular/forms';
import {VisitorInfo} from '../model/visitor-info';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  pendingList: Array<VisitorSchedule>;

  private pendingService: PendingService;
  private visitorHistory: VisitorHistory;
  private visitorHistoryId: VisitorHistoryId;

  currentVisitorSchedule: VisitorSchedule = Object();




  constructor(pendingService: PendingService) {
    this.pendingService = pendingService;


  }

  ngOnInit() {
    this.getPendingList();
    this.currentVisitorSchedule.visitorInfo = new VisitorInfo('', '', '');
  }

  getPendingList() {
    this.pendingService.findPendingList()
      .subscribe(pendingList => this.pendingList = pendingList);

  }

  markAsArrived(schedule: VisitorSchedule, passNoInput: NgModel) {

    this.visitorHistoryId = new VisitorHistoryId(Date.now(), schedule.visitorScheduleId);
    this.visitorHistory = new VisitorHistory(null, passNoInput.value, this.visitorHistoryId, schedule);

    this.pendingService.markAsArived(this.visitorHistory)
      .subscribe();
  }
  selectVisitorSchedule(currentVisitorSchedule: VisitorSchedule) {

    this.currentVisitorSchedule = currentVisitorSchedule;
  }
}

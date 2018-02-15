import { Component, OnInit } from '@angular/core';
import {HistoryService} from './history.service';
import {VisitorHistory} from '../model/visitor-history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private historyservice: HistoryService;
  private historyList: Array<VisitorHistory>;

  constructor(historyservice: HistoryService) {
    this.historyservice = historyservice;
  }

  ngOnInit() {
    this.getHistoryList();
  }

  getHistoryList() {
    this.historyservice.findHistoryList()
      .subscribe(historyList => this.historyList = historyList);

  }

}

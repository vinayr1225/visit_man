import {VisitorHistoryId} from './visitor-history-id';
import {VisitorSchedule} from './visitor-schedule';

export class VisitorHistory {
  public leavingDateTime: Date;

  public passno: number;

  public visitorHistoryId: VisitorHistoryId;
  public visitorSchedule: VisitorSchedule;
  constructor(leavingDateTime: Date,
              passno: number,
              visitorHistoryId: VisitorHistoryId,
              visitorSchedule: VisitorSchedule) {

    this.leavingDateTime = leavingDateTime;
    this.passno = passno;
    this.visitorHistoryId = visitorHistoryId;
    this.visitorSchedule = visitorSchedule;

  }
}

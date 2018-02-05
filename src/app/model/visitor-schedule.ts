import {VisitorInfo} from './visitor-info';
import {VisitorScheduleId} from './visitor-schedule-id';


export class VisitorSchedule {


  public visitorInfo: VisitorInfo;

  public visitorScheduleId: VisitorScheduleId;

  public purpose: String;

  public scheduleEndDate: Date;

  constructor(visitorInfo: VisitorInfo,
              visitorScheduleId: VisitorScheduleId,
              purpose: String,
              scheduleEndDate: Date) {

    this.visitorInfo = visitorInfo;
    this.visitorScheduleId = visitorScheduleId;
    this.purpose = purpose;
    this.scheduleEndDate = scheduleEndDate;

  }
}

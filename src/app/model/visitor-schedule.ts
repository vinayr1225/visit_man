import {VisitorInfo} from './visitor-info';
import {VisitorScheduleId} from './visitor-schedule-id';
import {Employee} from './employee';


export class VisitorSchedule {


  public visitorInfo: VisitorInfo;

  public visitorScheduleId: VisitorScheduleId;

  public purpose: String;

  public employee: Employee;

  public scheduleEndDate: Date;


  constructor(visitorInfo: VisitorInfo,
              visitorScheduleId: VisitorScheduleId,
              purpose: String,
              employee: Employee,
              scheduleEndDate: Date) {

    this.visitorInfo = visitorInfo;
    this.visitorScheduleId = visitorScheduleId;
    this.purpose = purpose;
    this.employee = employee;
    this.scheduleEndDate = scheduleEndDate;

  }
}

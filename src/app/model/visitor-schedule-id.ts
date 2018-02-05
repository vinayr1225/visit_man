export class VisitorScheduleId {
  public scheduleStartDate: Date;
  public  visitorId: String;

  constructor(scheduleStartDate: Date,
              visitorId: String) {

    this.visitorId = visitorId;
    this.scheduleStartDate = scheduleStartDate;

  }
}


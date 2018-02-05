import {VisitorScheduleId} from './visitor-schedule-id';

export class VisitorHistoryId {

  public arrivedDateTime: Date;

  public visitorScheduleId: VisitorScheduleId;

  constructor(arrivedDateTime: Date,
              visitorScheduleId: VisitorScheduleId) {

    this.arrivedDateTime = arrivedDateTime;
    this.visitorScheduleId = visitorScheduleId;

  }
}

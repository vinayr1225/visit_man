import {VisitorScheduleId} from './visitor-schedule-id';

export class VisitorHistoryId {

  public arrivedDateTime: number;

  public visitorScheduleId: VisitorScheduleId;

  constructor(arrivedDateTime: number,
              visitorScheduleId: VisitorScheduleId) {

    this.arrivedDateTime = arrivedDateTime;
    this.visitorScheduleId = visitorScheduleId;

  }
}

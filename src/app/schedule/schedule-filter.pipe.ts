import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'scheduleFilter'
})
export class ScheduleFilterPipe implements PipeTransform {

  transform(pendingList: any, search: any): any {
    if (pendingList === undefined) {
      return [];
    }
    if (search === undefined) {
      return pendingList;
    }
    return pendingList.filter(schedule =>
      schedule.visitorInfo.visitorId.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        schedule.visitorInfo.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
  }

}

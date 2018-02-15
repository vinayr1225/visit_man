import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrivedFilter'
})
export class ArrivedFilterPipe implements PipeTransform {

  transform(arrivedList: any, search: any): any {
    if (arrivedList === undefined) {
      return [];
    }
    if (search === undefined) {
      return arrivedList;
    }
    return arrivedList.filter(schedule =>
      schedule.visitorSchedule.visitorInfo.visitorId.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      schedule.visitorSchedule.visitorInfo.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

  }

}

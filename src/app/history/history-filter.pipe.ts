import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'historyFilter'
})
export class HistoryFilterPipe implements PipeTransform {

  transform(historyList: any, search: any): any {
    if (historyList === undefined) {
      return [];
    }
    if (search === undefined) {
      return historyList;
    }
    return historyList.filter(history =>
      history.visitorSchedule.visitorInfo.visitorId.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      history.visitorSchedule.visitorInfo.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

  }

}

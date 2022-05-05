import { Injectable } from '@angular/core';
import { TimeDescriptor } from 'src/app/shared/classes/time-descriptor';
import { TimeInterval } from 'src/app/shared/classes/time-interval';
import { TimeServiceModel } from 'src/app/shared/models/time-service-model';
import { TimeCounterService } from '../prod/time-counter.service';

@Injectable({
  providedIn: 'root',
})
export class TimeMockService extends TimeServiceModel {
  constructor() {
    super();
  }

  public getTimes(): Promise<Array<TimeInterval[]>> {
    return new Promise((resolve) => {
      const thirtyFiveMinutes = 60 * 60000;
      const twentyFiveMinutes = 25 * 60000;

      let ti1 = new TimeInterval();

      ti1.start = new Date();
      ti1.stop = new Date(new Date().getTime() + thirtyFiveMinutes);

      let ti2 = new TimeInterval();

      ti2.start = new Date();
      ti2.stop = new Date(new Date().getTime() + twentyFiveMinutes);

      // const times: TimeInterval[]  = [ti1, ti2];

      resolve([[ti1], [ti2]]);
    });
  }

  //blank because these are simply Rest Calls or something

  public startDriving() {}

  public stopDriving() {}

  public startPause() {}

  public stopPause() {}
}

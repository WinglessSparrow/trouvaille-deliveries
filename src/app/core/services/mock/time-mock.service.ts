import { Injectable } from '@angular/core';
import { TimeDescriptor } from 'src/app/shared/classes/time-descriptor';
import { TimeServiceModel } from 'src/app/shared/models/time-service-model';
import { TimeCounterService } from '../prod/time-counter.service';

@Injectable({
  providedIn: 'root',
})
export class TimeMockService extends TimeServiceModel {
  constructor(private timer: TimeCounterService) {
    super();
  }

  public getTimes(): Promise<TimeDescriptor> {
    return new Promise((resolve) => {
      let td = new TimeDescriptor();
      td.timeStart = new Date();
      resolve(td);
    });
  }

  public startDriving() {
    this.timer.addWorkInterval();
  }

  public stopDriving() {
    this.timer.concludeWorkInterval();
  }

  public startPause() {
    this.timer.addPauseInterval();
  }

  public stopPause() {
    this.timer.concludePauseInterval();
  }
}

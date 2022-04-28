import { Injectable } from '@angular/core';
import { TimeDescriptor } from 'src/app/shared/classes/time-descriptor';
import { TimeServiceModel } from 'src/app/shared/models/time-service-model';
import { TimeStateMachineService } from '../prod/time-state-machine.service';

@Injectable({
  providedIn: 'root',
})
export class TimeMockService extends TimeServiceModel {
  constructor(timeState: TimeStateMachineService) {
    super(timeState);
  }

  public getTimes(): Promise<TimeDescriptor> {
    return new Promise((resolve) => {
      let td = new TimeDescriptor();
      td.timeStart = new Date();
      resolve(td);
    });
  }

  public startDriving() {
    if (this._timeDescriptors.timeStart == undefined) {
      this._timeDescriptors.timeStart = new Date();
    }
  }

  public stopDriving() {}

  public startPause() {}

  public stopPause() {}
}

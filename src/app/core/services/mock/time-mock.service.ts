import { Injectable } from '@angular/core';
import { TimeServiceModel } from 'src/app/shared/models/time-service-model';

@Injectable({
  providedIn: 'root',
})
export class TimeMockService extends TimeServiceModel {
  constructor() {
    super();
  }

  public sendWorkingTimes() {}

  public startWorking() {}
}

import { Injectable } from '@angular/core';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';

@Injectable({
  providedIn: 'root',
})
export class TimeMockService extends ITimeManager {
  constructor() {
    super();
  }

  public sendWorkingTimes() {}

  public startWorking() {}
}

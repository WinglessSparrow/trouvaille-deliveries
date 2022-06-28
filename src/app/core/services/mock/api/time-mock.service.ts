import { Injectable } from '@angular/core';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class TimeMockService extends ITimeManager {
  constructor(private loading: LoadingService) {
    super();
  }

  public sendWorkingTimes() {
    this.loading.startLoading('Sending Working Times');
    setTimeout(() => {
      this.loading.stopLoading();
    }, 500);
  }

  public startWorking() {}
}

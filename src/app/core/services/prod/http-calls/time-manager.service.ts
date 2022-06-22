import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkingTimeDescriptor } from 'src/app/shared/classes/models/general/working-time-descriptor';
import { APIUrls } from 'src/app/shared/classes/utility/api-urls';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';

@Injectable({
  providedIn: 'root',
})
export class TimeManagerService extends ITimeManager {
  constructor(private http: HttpClient) {
    super();
  }

  public async sendWorkingTimes(workingTimes: WorkingTimeDescriptor) {
    await this.http
      .post(APIUrls.SEND_TIME, workingTimes.parseToIWorkingTime())
      .toPromise();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { GlobalResponseModel } from 'src/app/shared/classes/models/back-end-communication/global-response-model';
import { IDeliveriesManager } from 'src/app/shared/interfaces/services-interfaces/i-deliveries-manager';

@Injectable({
  providedIn: 'root',
})
export class DeliveriesManagerService extends IDeliveriesManager {
  constructor(private http: HttpClient) {
    super();
  }

  public getAllPackages(): Promise<Delivery[]> {
    throw new Error('Method not implemented.');
  }

  public countPackages(): Promise<number> {
    return new Promise((resolve) => {
      this.http
        .get<GlobalResponseModel<number>>(
          'https://td.vvjm.dev/api/deliveries/count'
        )
        .toPromise()
        .then((val) => {
          resolve(val.data[0]);
        });
    });
  }
  
  public changeState(newDelivery: Delivery) {
    throw new Error('Method not implemented.');
  }
}

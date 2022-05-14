import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { GlobalResponseModel } from 'src/app/shared/classes/back-end-communication/global-response-model';
import { DeliveriesManagerModel } from 'src/app/shared/models/deliveries-manager-model';

@Injectable({
  providedIn: 'root',
})
export class DeliveryManagerService extends DeliveriesManagerModel {
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

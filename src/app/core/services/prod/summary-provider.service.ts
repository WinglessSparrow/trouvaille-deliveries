import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { DeliveryState } from '../../state/deliveries/deliveries.state';

@Injectable({
  providedIn: 'root',
})
export class SummaryProviderService {
  constructor(private store: Store) {}

  public getSummary(): Array<[string, string]> {
    //TODO, make it make sense
    let deliveries = this.store.selectSnapshot(DeliveryState.getDeliveries);

    let summaryData: Array<[string, string]> = new Array();
    summaryData.push(['All Deliveries', deliveries.length + '']);
    summaryData.push(['In Car', this.allInCar(deliveries)]);
    summaryData.push(['Delivered', '0:32']);
    summaryData.push(['Driving Time', '2/4']);
    summaryData.push(['Pause Time', '10/11']);
    return summaryData;
  }

  private allInCar(deliveries: Delivery[]): string {
    let retVal: string =
      deliveries.filter((del: Delivery) => {
        return (
          del.state != DeliveryStates.IN_CENTRAL &&
          del.state != DeliveryStates.REQUESTED_PICKUP
        );
      }).length + '';

    retVal += '/' + deliveries.length;

    return retVal;
  }
}

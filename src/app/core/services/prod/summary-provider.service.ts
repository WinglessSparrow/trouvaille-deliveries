import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfigValidator } from '@ngxs/store/src/internal/config-validator';
import { Observable, ReplaySubject } from 'rxjs';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { DeliveryState } from '../../state/deliveries/deliveries.state';

@Injectable({
  providedIn: 'root',
})
export class SummaryProviderService {
  private _deliveries$: Observable<Delivery[]>;
  private _summary: ReplaySubject<Array<[string, string]>> = new ReplaySubject(
    1
  );

  constructor(store: Store) {
    this._deliveries$ = store.select(DeliveryState.getDeliveries);
    this._deliveries$.subscribe((deliveries) => this.updateSummary(deliveries));
  }

  public updateSummary(deliveries: Delivery[]) {
    let summaryData: Array<[string, string]> = new Array<[string, string]>();
    summaryData.push(['All Deliveries', deliveries.length + '']);
    summaryData.push(['To Load', this.toLoad(deliveries)]);
    summaryData.push(['In Car', this.allInCar(deliveries)]);
    summaryData.push(['Delivered', this.deliverySummary(deliveries)]);
    summaryData.push(['Pick Up', this.pickUp(deliveries)]);
    summaryData.push(['Canceled', this.canceled(deliveries)]);

    this._summary.next(summaryData);
  }

  public get summary(): Observable<Array<[string, string]>> {
    return this._summary.asObservable();
  }

  private canceled(deliveries: Delivery[]): string {
    const canceled = deliveries.filter((val) => {
      return (
        val.state === DeliveryStates.PICKUP_FAILED ||
        val.state === DeliveryStates.ADDRESS_NOT_FOUND ||
        val.state === DeliveryStates.DELIVERY_FAILED
      );
    }).length;

    return `${canceled}`;
  }

  private pickUp(deliveries: Delivery[]): string {
    const toPickUp = deliveries.filter((val) => {
      return (
        val.state === DeliveryStates.REQUESTED_PICKUP ||
        val.state === DeliveryStates.PICKED_UP
      );
    }).length;

    const pickedUp = deliveries.filter(
      (val) => val.state === DeliveryStates.PICKED_UP
    ).length;

    return `${pickedUp}/${toPickUp}`;
  }

  private toLoad(deliveries: Delivery[]): string {
    return (
      deliveries.filter((val) => val.state === DeliveryStates.IN_CENTRAL)
        .length + ''
    );
  }

  private allInCar(deliveries: Delivery[]): string {
    let retVal: string =
      deliveries.filter((val: Delivery) => {
        const truth =
          val.state != DeliveryStates.IN_CENTRAL &&
          val.state != DeliveryStates.REQUESTED_PICKUP &&
          val.state != DeliveryStates.DELIVERED;

        return truth;
      }).length + '';

    return retVal;
  }

  private deliverySummary(deliveries: Delivery[]): string {
    const allToDeliver = deliveries.filter((val) => {
      return (
        val.state === DeliveryStates.IN_CAR ||
        val.state === DeliveryStates.IN_CENTRAL ||
        val.state === DeliveryStates.DELIVERED
      );
    }).length;

    const delivered = deliveries.filter(
      (val) => val.state == DeliveryStates.DELIVERED
    ).length;

    return `${delivered}/${allToDeliver}`;
  }
}

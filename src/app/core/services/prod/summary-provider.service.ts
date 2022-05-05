import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { DeliveryState } from '../../state/deliveries/deliveries.state';
import { TimeCounterService } from './time-counter.service';

@Injectable({
  providedIn: 'root',
})
export class SummaryProviderService {
  private _deliveries$: Observable<Delivery[]>;
  private _summary: ReplaySubject<Array<[string, string]>> = new ReplaySubject(
    1
  );

  constructor(store: Store, private time: TimeCounterService) {
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

    //TODO make some observable magic to make it trigger updateSummary to renew the time Data
    summaryData.push(['Driving Time', this.getTime(this.time.workingTime)]);
    summaryData.push(['Pause Time', this.getTime(this.time.pauseTime)]);

    this._summary.next(summaryData);
  }

  public get summary(): Observable<Array<[string, string]>> {
    return this._summary.asObservable();
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

  private getTime(timeObs: Observable<string>) {
    let time: string;
    const subscription = timeObs.subscribe((val) => {
      time = val;
    });
    subscription.unsubscribe();
    return time.split('|')[0];
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
        val.state === DeliveryStates.REQUESTED_PICKUP ||
        val.state === DeliveryStates.PICKED_UP
      );
    }).length;

    const delivered = deliveries.filter(
      (val) => val.state == DeliveryStates.DELIVERED
    ).length;

    return `${delivered}/${allToDeliver}`;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';

@Injectable({
  providedIn: 'root',
})
export class DeliveryStateMachineService {
  constructor() {}

  private _currState: BehaviorSubject<DeliveryStates[]> = new BehaviorSubject<
    DeliveryStates[]
  >([]);
  private _predefinedStates = new Map<DeliveryStates, DeliveryStates[]>([
    [
      DeliveryStates.IN_CAR,
      [
        DeliveryStates.ADDRESS_NOT_FOUND,
        DeliveryStates.DELIVERY_FAILED,
        DeliveryStates.DELIVERED,
      ],
    ],
    [DeliveryStates.IN_CENTRAL, [DeliveryStates.IN_CAR]],
    [
      DeliveryStates.REQUESTED_PICKUP,
      [DeliveryStates.PICKUP_FAILED, DeliveryStates.PICKED_UP],
    ],
    [DeliveryStates.DELIVERY_FAILED, [DeliveryStates.IN_CENTRAL]],
    [DeliveryStates.ADDRESS_NOT_FOUND, [DeliveryStates.IN_CENTRAL]],
    [DeliveryStates.DELIVERED, [DeliveryStates.IN_CAR]],
    [DeliveryStates.PICKUP_FAILED, [DeliveryStates.REQUESTED_PICKUP]],
    [DeliveryStates.PICKED_UP, [DeliveryStates.REQUESTED_PICKUP]],
  ]);

  public nextState(state: DeliveryStates) {
    this._currState.next(this._predefinedStates.get(state));
  }

  public getCurrStateObservable(): Observable<DeliveryStates[]> {
    return this._currState.asObservable();
  }
}

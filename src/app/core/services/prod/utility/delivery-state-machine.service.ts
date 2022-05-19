import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';

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
    [
      DeliveryStates.REQUESTED_PICKUP,
      [
        DeliveryStates.PICKUP_FAILED,
        DeliveryStates.PICKED_UP,
        DeliveryStates.ADDRESS_NOT_FOUND,
      ],
    ],
    [DeliveryStates.IN_CENTRAL, [DeliveryStates.IN_CAR]],
    [DeliveryStates.DELIVERY_FAILED, []],
    [DeliveryStates.ADDRESS_NOT_FOUND, []],
    [DeliveryStates.DELIVERED, []],
    [DeliveryStates.PICKUP_FAILED, []],
    [DeliveryStates.PICKED_UP, []],
  ]);

  public nextState(state: DeliveryStates) {
    this._currState.next(this._predefinedStates.get(state));
  }

  public getCurrStateObservable(): Observable<DeliveryStates[]> {
    return this._currState.asObservable();
  }
}

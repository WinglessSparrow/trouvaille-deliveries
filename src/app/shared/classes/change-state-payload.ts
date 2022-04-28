import { DeliveryStates } from '../models/delivery-states';
import { Delivery } from './back-end-communication/delivery';

export class ChangeStatePayload {
  private _state: DeliveryStates;
  private _delivery: Delivery;

  constructor(_state: DeliveryStates, _delivery: Delivery) {
    this._state = _state;
    this._delivery = _delivery;
  }

  public get state(): DeliveryStates {
    return this._state;
  }

  public get delivery(): Delivery {
    return this._delivery;
  }
}

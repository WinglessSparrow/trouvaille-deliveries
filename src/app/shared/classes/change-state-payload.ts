import { DeliveryStates } from '../models/delivery-states';
import { Delivery } from './back-end-communication/delivery';

export class ChangeStatePayload {
  private _nextState: DeliveryStates;
  private _originalDelivery: Delivery;

  constructor(_state: DeliveryStates, _delivery: Delivery) {
    this._nextState = _state;
    this._originalDelivery = _delivery;
  }

  public get nextState(): DeliveryStates {
    return this._nextState;
  }

  public get originalDelivery(): Delivery {
    return this._originalDelivery;
  }
}

import { PackageStates } from '../models/package-states';
import { Delivery } from './back-end-communication/delivery';

export class ChangeStatePayload {
  private _state: PackageStates;
  private _delivery: Delivery;

  constructor(_state: PackageStates, _delivery: Delivery) {
    this._state = _state;
    this._delivery = _delivery;
  }

  public get state(): PackageStates {
    return this._state;
  }

  public get delivery(): Delivery {
    return this._delivery;
  }
}

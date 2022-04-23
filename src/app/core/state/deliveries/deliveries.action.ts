import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { PackageStates } from 'src/app/shared/models/package-states';

export class ChangeState {
  static readonly type = '[DELIVERY] ChangeState';

  constructor(public payload: ChangeStatePayload) {}
}

export class InitDeliveriesState {
  static readonly type = '[DELIVERY] InitState';

  constructor() {}
}

export class ChangeStatePayload {
  private _state: PackageStates;
  private _delivery: Delivery;

  public get state(): PackageStates {
    return this._state;
  }

  public get delivery(): Delivery {
    return this._delivery;
  }
}

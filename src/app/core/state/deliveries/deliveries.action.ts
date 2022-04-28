import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { ChangeStatePayload } from 'src/app/shared/classes/change-state-payload';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';

export class ChangeDeliveryState {
  static readonly type = '[DELIVERY] ChangeState';

  constructor(public payload: ChangeStatePayload) {}
}

export class InitDeliveriesState {
  static readonly type = '[DELIVERY] InitDeliveriesState';

  constructor() {}
}

export class ClearDeliveries {
  static readonly type = '[DELIVERY] ClearDeliveries';

  constructor() {}
}

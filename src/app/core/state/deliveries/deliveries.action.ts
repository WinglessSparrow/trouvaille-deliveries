import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';

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

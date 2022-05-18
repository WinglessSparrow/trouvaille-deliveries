import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';

export class ChangeDeliveryState {
  static readonly type = '[DELIVERY] ChangeState';

  constructor(public payload: ChangeStatePayload) {}
}

export class InitRouteData {
  static readonly type = '[DELIVERY] InitDeliveriesState';

  constructor() {}
}

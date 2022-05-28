import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';

export class ChangeDeliveryState {
  static readonly type = '[ROUTE_DATA] ChangeState';

  constructor(public payload: ChangeStatePayload) {}
}

export class InitRouteData {
  static readonly type = '[ROUTE_DATA] InitData';

  constructor() {}
}

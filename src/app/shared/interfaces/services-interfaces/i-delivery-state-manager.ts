import { ChangeStatePayload } from '../../classes/models/general/change-state-payload';

export abstract class IDeliveryStateManager {
  abstract changeState(newState: ChangeStatePayload): Promise<boolean>;
}

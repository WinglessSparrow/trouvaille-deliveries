import { ChangeStatePayload } from '../../classes/models/general/change-state-payload';

export abstract class IStateManager {
  abstract changeState(newState: ChangeStatePayload): Promise<boolean>;
}

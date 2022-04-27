import { ChangeStatePayload } from '../classes/change-state-payload';

export abstract class StateManagerModel {
  abstract changeState(newState: ChangeStatePayload): Promise<boolean>;
}

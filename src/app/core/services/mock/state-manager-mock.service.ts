import { Injectable } from '@angular/core';
import { ChangeStatePayload } from 'src/app/shared/classes/change-state-payload';
import { StateManagerModel } from 'src/app/shared/models/state-manager-model';

@Injectable({
  providedIn: 'root',
})
export class StateManagerMockService extends StateManagerModel {
  constructor() {
    super();
  }

  changeState(newState: ChangeStatePayload): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}

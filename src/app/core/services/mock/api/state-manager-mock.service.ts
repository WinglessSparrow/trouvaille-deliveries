import { Injectable } from '@angular/core';
import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';
import { IStateManager } from 'src/app/shared/interfaces/services-interfaces/i-state-manager';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class StateManagerMockService extends IStateManager {
  constructor(private loading: LoadingService) {
    super();
  }

  changeState(newState: ChangeStatePayload): Promise<boolean> {
    this.loading.startLoading(
      `changing state from ${newState.originalDelivery.state} to ${newState.nextState}`
    );

    return new Promise((resolve) =>
      setTimeout(() => {
        this.loading.stopLoading();
        resolve(true);
      }, 500)
    );
  }
}

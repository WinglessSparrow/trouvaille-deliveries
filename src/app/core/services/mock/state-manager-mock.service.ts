import { Injectable } from '@angular/core';
import { ChangeStatePayload } from 'src/app/shared/classes/change-state-payload';
import { StateManagerModel } from 'src/app/shared/models/state-manager-model';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class StateManagerMockService extends StateManagerModel {
  constructor(private loading: LoadingService) {
    super();
  }

  changeState(newState: ChangeStatePayload): Promise<boolean> {
    this.loading.startLoading('changing state');

    return new Promise((resolve) =>
      setTimeout(() => {
        this.loading.stopLoading();
        resolve(true);
      }, 500)
    );
  }
}

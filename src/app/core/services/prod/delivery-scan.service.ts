import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { ChangeStatePayload } from 'src/app/shared/classes/change-state-payload';
import { DeliveryStateParsingHelper } from 'src/app/shared/classes/delivery-state-parsing-helper ';
import { Pages } from 'src/app/shared/classes/pages';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { StateManagerModel } from 'src/app/shared/models/state-manager-model';
import { ChangeDeliveryState } from '../../state/deliveries/deliveries.action';
import { DeliveryState } from '../../state/deliveries/deliveries.state';

@Injectable({
  providedIn: 'root',
})
export class DeliveryScanService {
  constructor(
    private store: Store,
    private route: Router,
    private stateManager: StateManagerModel
  ) {}

  public handleId(id: string) {
    const delivery = this.store.selectSnapshot(DeliveryState.getDelivery(id));

    if (delivery != undefined) {
      if (
        delivery.state == DeliveryStates.IN_CENTRAL ||
        delivery.state == DeliveryStates.REQUESTED_PICKUP
      ) {
        const newState = DeliveryStateParsingHelper.getOppositeOfState(
          delivery.state
        );

        this.store.dispatch(
          new ChangeDeliveryState(new ChangeStatePayload(newState, delivery))
        );
        //TODO Modal for notification
      } else {
        this.route.navigateByUrl(
          `${Pages.DeliveryInfo}/${delivery.idDelivery}`
        );
      }
    } else {
      throw Error('The code is not a valid Delivery ID');
    }
  }
}

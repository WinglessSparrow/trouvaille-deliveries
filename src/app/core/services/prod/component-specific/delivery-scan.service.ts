import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChangeDeliveryState } from 'src/app/core/state/deliveries/deliveries.action';
import { DeliveryState } from 'src/app/core/state/deliveries/deliveries.state';
import { ChangeStatePayload } from 'src/app/shared/classes/change-state-payload';
import { DeliveryStateParsingHelper } from 'src/app/shared/classes/delivery-state-parsing-helper ';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';

@Injectable({
  providedIn: 'root',
})
export class DeliveryScanService {
  constructor(private store: Store) {}

  /**
   *
   * @param id delivery id
   * @returns info if it should be routing after the idHandle
   */
  public handleId(id: string): boolean {
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

        return false;
      } else {
        return true;
      }
    } else {
      return null;
    }
  }
}

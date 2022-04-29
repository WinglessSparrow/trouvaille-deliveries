import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { StateClass } from '@ngxs/store/internals';
import produce, { immerable } from 'immer';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { ChangeStatePayload } from 'src/app/shared/classes/change-state-payload';
import { DeliveriesManagerModel } from 'src/app/shared/models/deliveries-manager-model';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { StateManagerModel } from 'src/app/shared/models/state-manager-model';

import {
  ChangeDeliveryState,
  ClearDeliveries,
  InitDeliveriesState,
} from './deliveries.action';

export class DeliveryStateModel {
  [immerable] = true;

  deliveries: Delivery[];
}

@State<DeliveryStateModel>({
  name: 'deliveries',
  defaults: {
    [immerable]: true,
    deliveries: [],
  },
})
@Injectable()
export class DeliveryState {
  //TODO getting packages from getter Service

  constructor(
    private deliveryManager: DeliveriesManagerModel,
    private deliveryStateManger: StateManagerModel
  ) {}

  @Selector()
  static getDeliveries(state: DeliveryStateModel) {
    return state.deliveries;
  }

  @Selector()
  static getDeliveriesToLoad(state: any) {
    return state.deliveries
      .filter(
        (delivery: Delivery) => delivery.state === DeliveryStates.IN_CENTRAL
      )
      .sort((del1: Delivery, del2: Delivery) => {
        if (del1.index > del2.index) {
          return 1;
        } else if (del1.index < del2.index) {
          return -1;
        }
        return 0;
      });
  }

  static getDelivery(id: string) {
    return createSelector([DeliveryState], (state: DeliveryStateModel) => {
      return state.deliveries.find((val) => val.idDelivery === id);
    });
  }

  @Action(InitDeliveriesState)
  async initState({ setState }: StateContext<DeliveryStateModel>) {
    const deliveriesTemp = await this.deliveryManager.getAllPackages();

    let newState = new DeliveryStateModel();
    newState.deliveries = deliveriesTemp;
    setState(newState);
  }

  @Action(ClearDeliveries)
  async clearDeliveries({ setState }: StateContext<DeliveryStateModel>) {
    let newState = new DeliveryStateModel();
    newState.deliveries = [];

    setState(newState);
  }

  @Action(ChangeDeliveryState)
  async changeDeliveryState(
    { setState, getState }: StateContext<DeliveryStateModel>,
    payload: ChangeDeliveryState
  ) {
    const tempPayload = payload.payload;
    const newState = produce(getState(), (draft: DeliveryStateModel) => {
      const temp = draft.deliveries.find(
        (val) => tempPayload.delivery.idDelivery === val.idDelivery
      );
      temp.state = tempPayload.state;
    });

    const success = await this.deliveryStateManger.changeState(tempPayload);

    if (success) {
      setState(newState);
    } else {
      throw Error(
        `Illegal Delivery State Change from ${
          getState().deliveries.find(
            (val) => tempPayload.delivery.idDelivery === val.idDelivery
          ).state
        } to ${payload.payload.state}`
      );
    }
  }
}

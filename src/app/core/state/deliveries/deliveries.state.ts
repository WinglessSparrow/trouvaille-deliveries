import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import produce from 'immer';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { DeliveriesManagerModel } from 'src/app/shared/models/deliveries-manager-model';

import {
  ChangeState,
  ClearDeliveries,
  InitDeliveriesState,
} from './deliveries.action';

export class DeliveryStateModel {
  deliveries: Delivery[];
}

@State<DeliveryStateModel>({
  name: 'deliveries',
  defaults: {
    deliveries: [],
  },
})
@Injectable()
export class DeliveryState {
  //TODO getting packages from getter Service

  constructor(private deliverManager: DeliveriesManagerModel) {}

  @Selector()
  static getDeliveries(state: DeliveryStateModel) {
    return state.deliveries;
  }

  static getDelivery(id: string) {
    return createSelector([DeliveryState], (state: DeliveryStateModel) => {
      return state.deliveries.find((val) => val.id === id);
    });
  }

  @Action(ChangeState)
  changeState(
    { getState }: StateContext<DeliveryStateModel>,
    { payload }: ChangeState
  ) {
    const newState = produce(getState(), (draft: DeliveryStateModel) => {
      //TODO Set new state (check with StateMachine), call a http or smth
      //deliveryManager.sendState() idk
    });
  }

  @Action(InitDeliveriesState)
  async initState({ setState }: StateContext<DeliveryStateModel>) {
    const deliveriesTemp = await this.deliverManager.getAllPackages();

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
}

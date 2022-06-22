import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  NgxsOnInit,
  Selector,
  State,
  StateContext,
  Store,
} from '@ngxs/store';
import produce, { immerable } from 'immer';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { RouteData } from 'src/app/shared/classes/models/back-end-communication/route-data';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { IDeliveryStateManager } from 'src/app/shared/interfaces/services-interfaces/i-delivery-state-manager';
import { IRouteRetriever } from 'src/app/shared/interfaces/services-interfaces/i-route-retriever';
import { ChangeDeliveryState, InitRouteData } from './route-data.action';
import { Storage } from '@capacitor/storage';
import { SetToken } from '../token/token.action';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';

export class RouteDataStateModel {
  [immerable] = true;

  routeData: RouteData;
}

@State<RouteDataStateModel>({
  name: 'routeData',
  defaults: {
    [immerable]: true,
    routeData: null,
  },
})
@Injectable()
export class RouteDataState {
  //TODO getting packages from getter Service

  constructor(
    private deliveryStateManger: IDeliveryStateManager,
    private routeData: IRouteRetriever
  ) {}

  @Selector()
  static getRoute(state: RouteDataStateModel) {
    return state.routeData;
  }

  @Selector()
  static getDeliveries(state: RouteDataStateModel) {
    return state.routeData.packages;
  }

  @Selector()
  static getDeliveriesToLoad(state: RouteDataStateModel) {
    return state.routeData.packages
      .filter(
        (delivery: Delivery) =>
          delivery.currentState === DeliveryStates.IN_CENTRAL
      )
      .sort((del1: Delivery, del2: Delivery) => del2.position - del1.position);
  }

  static getDelivery(id: string) {
    return createSelector([RouteDataState], (state: RouteDataStateModel) => {
      return state.routeData.packages.find((val) => val.iddelivery === id);
    });
  }

  @Action(InitRouteData)
  async initState({ setState }: StateContext<RouteDataStateModel>) {
    let newState = new RouteDataStateModel();
    newState.routeData = await this.routeData.retrieveRoute();

    setState(newState);
  }

  @Action(ChangeDeliveryState)
  async changeDeliveryState(
    { setState, getState }: StateContext<RouteDataStateModel>,
    payload: ChangeDeliveryState
  ) {
    const tempPayload = payload.payload;
    const newState = produce(getState(), (draft: RouteDataStateModel) => {
      const temp = draft.routeData.packages.find(
        (val) => tempPayload.originalDelivery.iddelivery === val.iddelivery
      );
      temp.currentState = tempPayload.nextState;
    });

    const success = await this.deliveryStateManger.changeState(tempPayload);

    if (success) {
      setState(newState);
    }
  }
}

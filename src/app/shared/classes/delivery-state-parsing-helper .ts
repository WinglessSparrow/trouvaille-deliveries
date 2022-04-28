import { DeliveryStates } from '../models/delivery-states';

export class DeliveryStateParsingHelper {
  static getColorFromState(state: DeliveryStates): string {
    let retVal: string = 'purple';
    switch (state) {
      case DeliveryStates.IN_CENTRAL:
        retVal = 'cyan';
        break;
      case DeliveryStates.DELIVERED:
      case DeliveryStates.PICKED_UP:
        retVal = 'green';
        break;
      case DeliveryStates.REQUESTED_PICKUP:
      case DeliveryStates.IN_CAR:
        retVal = 'yellow';
        break;
      case DeliveryStates.DELIVERY_FAILED:
      case DeliveryStates.PICKUP_FAILED:
      case DeliveryStates.ADDRESS_NOT_FOUND:
        retVal = 'red';
        break;
    }
    return retVal;
  }

  static getOppositeOfState(state: DeliveryStates): DeliveryStates {
    //TODO maybe put it as part of state machine, idk.

    let newState: DeliveryStates;
    switch (state) {
      case DeliveryStates.IN_CENTRAL:
        newState = DeliveryStates.IN_CAR;
        break;
      case DeliveryStates.REQUESTED_PICKUP:
        newState = DeliveryStates.PICKED_UP;
        break;
      case DeliveryStates.IN_CAR:
      case DeliveryStates.PICKED_UP:
      case DeliveryStates.DELIVERED:
      case DeliveryStates.DELIVERY_FAILED:
      case DeliveryStates.PICKUP_FAILED:
      case DeliveryStates.ADDRESS_NOT_FOUND:
      default:
        newState = state;
        break;
    }

    return newState;
  }
}

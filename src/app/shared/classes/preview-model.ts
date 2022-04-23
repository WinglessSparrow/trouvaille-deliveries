import { PackageStates } from '../models/package-states';

export class PreviewModel {
  static getColorFromState(state: PackageStates): string {
    let retVal: string = 'purple';
    switch (state) {
      case PackageStates.Delivered:

      case PackageStates.PickedUp:
        retVal = 'green';
        break;
      case PackageStates.ToBePickedUp:
      case PackageStates.InDelivery:
        retVal = 'yellow';
        break;
      case PackageStates.DeliveryNotPossible:
      case PackageStates.PickUpNotPossible:
      case PackageStates.AddressNotIdentifiable:
        retVal = 'red';
        break;
    }
    return retVal;
  }
}

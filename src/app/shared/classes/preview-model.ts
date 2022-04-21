import { PackageStates } from '../models/package-states';

export class PreviewModel {
  private _name: string;
  private _address: string;
  private _state: PackageStates;

  constructor(_name: string, _address: string, _state: PackageStates) {
    this._name = _name;
    this._address = _address;
    this._state = _state;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter address
   * @return {string}
   */
  public get address(): string {
    return this._address;
  }

  /**
   * Getter state
   * @return {PackageStates}
   */
  public get state(): PackageStates {
    return this._state;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter address
   * @param {string} value
   */
  public set address(value: string) {
    this._address = value;
  }

  /**
   * Setter state
   * @param {PackageStates} value
   */
  public set state(value: PackageStates) {
    this._state = value;
  }

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

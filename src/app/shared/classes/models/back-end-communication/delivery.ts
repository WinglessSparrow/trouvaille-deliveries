import { immerable } from 'immer';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { IDelivery } from '../../../interfaces/back-end-communication/i-delivery';
import { Address } from './address';
import { Customer } from './customer';

export class Delivery implements IDelivery {
  [immerable] = true;

  private _position: number;

  private _packageid: number;
  private _iddelivery: string;

  private _customer: Customer;

  private _dstAddress: Address;
  private _srcAddress: Address;

  private _currentState: DeliveryStates;

  private _weight: number;
  private _height: number;
  private _width: number;
  private _depth: number;
  private _price: number;

  constructor(data: IDelivery) {
    Object.assign(this, data);
    this._dstAddress = new Address(data.dstAddress);
    this._srcAddress = new Address(data.srcAddress);
    this._customer = new Customer(data.customer);
    this._currentState = DeliveryStates[data.currentState];
  }

  /**
   * Getter position
   * @return {number}
   */
  public get position(): number {
    return this._position;
  }

  /**
   * Getter packageid
   * @return {number}
   */
  public get packageid(): number {
    return this._packageid;
  }

  /**
   * Getter iddelivery
   * @return {string}
   */
  public get iddelivery(): string {
    return this._iddelivery;
  }

  /**
   * Getter customer
   * @return {Customer}
   */
  public get customer(): Customer {
    return this._customer;
  }

  /**
   * Getter dstAddress
   * @return {Address}
   */
  public get dstAddress(): Address {
    return this._dstAddress;
  }

  /**
   * Getter srcAddress
   * @return {Address}
   */
  public get srcAddress(): Address {
    return this._srcAddress;
  }

  /**
   * Getter state
   * @return {DeliveryStates}
   */
  public get currentState(): DeliveryStates {
    return this._currentState;
  }

  /**
   * Getter weight
   * @return {number}
   */
  public get weight(): number {
    return this._weight;
  }

  /**
   * Getter height
   * @return {number}
   */
  public get height(): number {
    return this._height;
  }

  /**
   * Getter width
   * @return {number}
   */
  public get width(): number {
    return this._width;
  }

  /**
   * Getter depth
   * @return {number}
   */
  public get depth(): number {
    return this._depth;
  }

  /**
   * Getter price
   * @return {number}
   */
  public get price(): number {
    return this._price;
  }

  /**
   * Setter position
   * @param {number} value
   */
  public set position(value: number) {
    this._position = value;
  }

  /**
   * Setter packageid
   * @param {number} value
   */
  public set packageid(value: number) {
    this._packageid = value;
  }

  /**
   * Setter iddelivery
   * @param {string} value
   */
  public set iddelivery(value: string) {
    this._iddelivery = value;
  }

  /**
   * Setter customer
   * @param {Customer} value
   */
  public set customer(value: Customer) {
    this._customer = value;
  }

  /**
   * Setter dstAddress
   * @param {Address} value
   */
  public set dstAddress(value: Address) {
    this._dstAddress = value;
  }

  /**
   * Setter srcAddress
   * @param {Address} value
   */
  public set srcAddress(value: Address) {
    this._srcAddress = value;
  }

  /**
   * Setter state
   * @param {DeliveryStates} value
   */
  public set currentState(value: DeliveryStates) {
    this._currentState = value;
  }

  /**
   * Setter weight
   * @param {number} value
   */
  public set weight(value: number) {
    this._weight = value;
  }

  /**
   * Setter height
   * @param {number} value
   */
  public set height(value: number) {
    this._height = value;
  }

  /**
   * Setter width
   * @param {number} value
   */
  public set width(value: number) {
    this._width = value;
  }

  /**
   * Setter depth
   * @param {number} value
   */
  public set depth(value: number) {
    this._depth = value;
  }

  /**
   * Setter price
   * @param {number} value
   */
  public set price(value: number) {
    this._price = value;
  }
}

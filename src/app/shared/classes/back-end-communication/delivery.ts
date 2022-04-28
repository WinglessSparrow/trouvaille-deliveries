import { immerable } from 'immer';
import { DeliveryStates } from '../../models/delivery-states';
import { Address } from './address';
import { Customer } from './customer';

export class Delivery {
  [immerable] = true;

  private _index: number;

  private _customer: Customer;

  private _dstAddress: Address;
  private _srcAddress: Address;

  private _idDelivery: string;
  private _idPickUp: string;
  private _idReturn: string;

  private _state: DeliveryStates;

  private _weight: number;
  private _height: number;
  private _width: number;
  private _depth: number;
  private _price: number;

  private externTrackingNumber: string;

  constructor(val: any) {
    Object.assign(this, val);
  }

  /**
   * Getter index
   * @return {number}
   */
  public get index(): number {
    return this._index;
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
   * Getter idDelivery
   * @return {string}
   */
  public get idDelivery(): string {
    return this._idDelivery;
  }

  /**
   * Getter idPickUp
   * @return {string}
   */
  public get idPickUp(): string {
    return this._idPickUp;
  }

  /**
   * Getter idReturn
   * @return {string}
   */
  public get idReturn(): string {
    return this._idReturn;
  }

  /**
   * Getter state
   * @return {DeliveryStates}
   */
  public get state(): DeliveryStates {
    return this._state;
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
   * Getter $externTrackingNumber
   * @return {string}
   */
  public get $externTrackingNumber(): string {
    return this.externTrackingNumber;
  }

  /**
   * Setter index
   * @param {number} value
   */
  public set index(value: number) {
    this._index = value;
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
   * Setter idDelivery
   * @param {string} value
   */
  public set idDelivery(value: string) {
    this._idDelivery = value;
  }

  /**
   * Setter idPickUp
   * @param {string} value
   */
  public set idPickUp(value: string) {
    this._idPickUp = value;
  }

  /**
   * Setter idReturn
   * @param {string} value
   */
  public set idReturn(value: string) {
    this._idReturn = value;
  }

  /**
   * Setter state
   * @param {DeliveryStates} value
   */
  public set state(value: DeliveryStates) {
    this._state = value;
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

  /**
   * Setter $externTrackingNumber
   * @param {string} value
   */
  public set $externTrackingNumber(value: string) {
    this.externTrackingNumber = value;
  }
}

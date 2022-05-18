import { immerable } from 'immer';
import { IAddress } from '../../../interfaces/back-end-communication/i-address';

export class Address implements IAddress {
  [immerable] = true;

  private _zipcode: number;
  private _streetname: string;
  private _streetnumber: number;
  private _city: string;
  private _country: string;

  constructor(data: IAddress) {
    Object.assign(this, data);
  }

  public get address(): string {
    return `${this._streetname} ${this._streetnumber}, ${this._zipcode} ${this._city}`;
  }

  public get internationalAddress(): string {
    return `${this._streetname} ${this._streetnumber}, ${this._zipcode} ${this._city}, ${this._country}`;
  }

  /**
   * Getter zipcode
   * @return {number}
   */
  public get zipcode(): number {
    return this._zipcode;
  }

  /**
   * Getter streetName
   * @return {string}
   */
  public get streetname(): string {
    return this._streetname;
  }

  /**
   * Getter streetNumber
   * @return {number}
   */
  public get streetnumber(): number {
    return this._streetnumber;
  }

  /**
   * Getter city
   * @return {string}
   */
  public get city(): string {
    return this._city;
  }

  /**
   * Getter country
   * @return {string}
   */
  public get country(): string {
    return this._country;
  }

  /**
   * Setter zipcode
   * @param {number} value
   */
  public set zipcode(value: number) {
    this._zipcode = value;
  }

  /**
   * Setter streetName
   * @param {string} value
   */
  public set streetname(value: string) {
    this._streetname = value;
  }

  /**
   * Setter streetNumber
   * @param {number} value
   */
  public set streetnumber(value: number) {
    this._streetnumber = value;
  }

  /**
   * Setter city
   * @param {string} value
   */
  public set city(value: string) {
    this._city = value;
  }

  /**
   * Setter country
   * @param {string} value
   */
  public set country(value: string) {
    this._country = value;
  }
}

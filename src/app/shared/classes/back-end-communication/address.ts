import { immerable } from 'immer';

export class Address {
  [immerable] = true;

  private _zipcode: number;
  private _streetName: string;
  private _streetNumber: number;
  private _city: string;
  private _country: string;

  constructor(val: any) {
    Object.assign(this, val);
  }

  public get address(): string {
    return `${this._streetName} ${this._streetNumber}, ${this._zipcode} ${this._city}`;
  }

  public get internationalAddress(): string {
    return `${this._streetName} ${this._streetNumber}, ${this._zipcode} ${this._city}, ${this._country}`;
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
  public get streetName(): string {
    return this._streetName;
  }

  /**
   * Getter streetNumber
   * @return {number}
   */
  public get streetNumber(): number {
    return this._streetNumber;
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
  public set streetName(value: string) {
    this._streetName = value;
  }

  /**
   * Setter streetNumber
   * @param {number} value
   */
  public set streetNumber(value: number) {
    this._streetNumber = value;
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

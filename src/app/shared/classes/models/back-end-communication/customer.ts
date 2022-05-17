import { immerable } from 'immer';

export class Customer {
  [immerable] = true;

  private _idCustomer: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;

  constructor(val: any) {
    Object.assign(this, val);
  }

  /**
   * Getter name
   * @return {string}
   */

  public getName(): string {
    return this._firstName + ' ' + this._lastName;
  }

  public get name(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Getter idCustomer
   * @return {string}
   */
  public get idCustomer(): string {
    return this._idCustomer;
  }

  /**
   * Getter firstName
   * @return {string}
   */
  public get firstName(): string {
    return this._firstName;
  }

  /**
   * Getter lastName
   * @return {string}
   */
  public get lastName(): string {
    return this._lastName;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Setter idCustomer
   * @param {string} value
   */
  public set idCustomer(value: string) {
    this._idCustomer = value;
  }

  /**
   * Setter firstName
   * @param {string} value
   */
  public set firstName(value: string) {
    this._firstName = value;
  }

  /**
   * Setter lastName
   * @param {string} value
   */
  public set lastName(value: string) {
    this._lastName = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }
}

import { immerable } from 'immer';
import { ICustomer } from '../../../interfaces/back-end-communication/i-customer';

export class Customer implements ICustomer {
  [immerable] = true;

  private _firstname: string;
  private _lastname: string;
  private _email: string;

  constructor(data: ICustomer) {
    Object.assign(this, data);
  }

  public get name(): string {
    return `${this._firstname} ${this._lastname}`;
  }

  /**
   * Getter firstname
   * @return {string}
   */
  public get firstname(): string {
    return this._firstname;
  }

  /**
   * Getter lastname
   * @return {string}
   */
  public get lastname(): string {
    return this._lastname;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Setter firstname
   * @param {string} value
   */
  public set firstname(value: string) {
    this._firstname = value;
  }

  /**
   * Setter lastname
   * @param {string} value
   */
  public set lastname(value: string) {
    this._lastname = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }
}

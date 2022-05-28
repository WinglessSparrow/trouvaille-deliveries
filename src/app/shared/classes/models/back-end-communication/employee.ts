import { IEmployee } from 'src/app/shared/interfaces/back-end-communication/i-employee';

export class Employee implements IEmployee {
  private _idEmployee: string;
  private _firstName: string;
  private _lastName: string;
  private _birthday: string;

  constructor(employee: IEmployee) {
    Object.assign(this, employee);
  }

  /**
   * Getter fullName
   * @returns {string}
   */
  public get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Getter idemployee
   * @return {string}
   */
  public get idemployee(): string {
    return this._idEmployee;
  }

  /**
   * Getter firstname
   * @return {string}
   */
  public get firstname(): string {
    return this._firstName;
  }

  /**
   * Getter lastname
   * @return {string}
   */
  public get lastname(): string {
    return this._lastName;
  }

  /**
   * Getter birthday
   * @return {string}
   */
  public get birthday(): string {
    return this._birthday;
  }

  /**
   * Setter idemployee
   * @param {string} value
   */
  public set idemployee(value: string) {
    this._idEmployee = value;
  }

  /**
   * Setter firstname
   * @param {string} value
   */
  public set firstname(value: string) {
    this._firstName = value;
  }

  /**
   * Setter lastname
   * @param {string} value
   */
  public set lastname(value: string) {
    this._lastName = value;
  }

  /**
   * Setter birthday
   * @param {string} value
   */
  public set birthday(value: string) {
    this._birthday = value;
  }
}

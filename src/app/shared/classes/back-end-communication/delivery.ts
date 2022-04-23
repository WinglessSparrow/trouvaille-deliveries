import { PackageStates } from '../../models/package-states';
import { Package } from './package';
import { Person } from './Person';

export class Delivery {
  private _index: number;
  private _id: string;

  private _package: Package;

  private _recipient: Person;
  private _sender: Person;

  private _state: PackageStates;

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
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter package
   * @return {Package}
   */
  public get package(): Package {
    return this._package;
  }

  /**
   * Getter recipient
   * @return {Person}
   */
  public get recipient(): Person {
    return this._recipient;
  }

  /**
   * Getter sender
   * @return {Person}
   */
  public get sender(): Person {
    return this._sender;
  }

  /**
   * Getter state
   * @return {PackageStates}
   */
  public get state(): PackageStates {
    return this._state;
  }

  /**
   * Setter index
   * @param {number} value
   */
  public set index(value: number) {
    this._index = value;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter package
   * @param {Package} value
   */
  public set package(value: Package) {
    this._package = value;
  }

  /**
   * Setter recipient
   * @param {Person} value
   */
  public set recipient(value: Person) {
    this._recipient = value;
  }

  /**
   * Setter sender
   * @param {Person} value
   */
  public set sender(value: Person) {
    this._sender = value;
  }

  /**
   * Setter state
   * @param {PackageStates} value
   */
  public set state(value: PackageStates) {
    this._state = value;
  }
}

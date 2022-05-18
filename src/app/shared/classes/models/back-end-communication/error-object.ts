import { IErrorObject } from 'src/app/shared/interfaces/back-end-communication/i-error-object';

export class ErrorObject implements IErrorObject {
  private _timestamp: Date;
  private _status: string;
  private _error: string;
  private _message: string;
  private _path: string;

  constructor(data: IErrorObject) {
    Object.assign(this, data);
    this._timestamp = new Date(data.timestamp);
  }

  /**
   * Getter timestamp
   * @return {Date}
   */
  public get timestamp(): string {
    return this._timestamp.toUTCString();
  }

  /**
   * Getter status
   * @return {string}
   */
  public get status(): string {
    return this._status;
  }

  /**
   * Getter error
   * @return {string}
   */
  public get error(): string {
    return this._error;
  }

  /**
   * Getter message
   * @return {string}
   */
  public get message(): string {
    return this._message;
  }

  /**
   * Getter path
   * @return {string}
   */
  public get path(): string {
    return this._path;
  }

  /**
   * Setter timestamp
   * @param {Date} value
   */
  public set timestamp(value: string) {
    this._timestamp = new Date(value);
  }

  /**
   * Setter status
   * @param {string} value
   */
  public set status(value: string) {
    this._status = value;
  }

  /**
   * Setter error
   * @param {string} value
   */
  public set error(value: string) {
    this._error = value;
  }

  /**
   * Setter message
   * @param {string} value
   */
  public set message(value: string) {
    this._message = value;
  }

  /**
   * Setter path
   * @param {string} value
   */
  public set path(value: string) {
    this._path = value;
  }
}

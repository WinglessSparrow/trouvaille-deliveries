import { IGlobalResponseModel } from '../../../interfaces/back-end-communication/i-global-response-model';
import { ErrorObject } from './error-object';

export class GlobalResponseModel<T> implements IGlobalResponseModel<T> {
  private _hasError: boolean;
  private _error: ErrorObject;
  private _hasWarnings: boolean;
  private _warnings: string[];
  private _data: Array<T> = [];

  constructor(data: IGlobalResponseModel<T>) {
    Object.assign(this, data);
    // for(let entry of data.data){
    //   this._data.push(new T(entry));
    // }
  }

  /**
   * Getter hasError
   * @return {boolean}
   */
  public get hasError(): boolean {
    return this._hasError;
  }

  /**
   * Getter error
   * @return {ErrorObject}
   */
  public get error(): ErrorObject {
    return this._error;
  }

  /**
   * Getter hasWarnings
   * @return {boolean}
   */
  public get hasWarnings(): boolean {
    return this._hasWarnings;
  }

  /**
   * Getter warnings
   * @return {string[]}
   */
  public get warnings(): string[] {
    return this._warnings;
  }

  /**
   * Getter data
   * @return {Array<T>}
   */
  public get data(): Array<T> {
    return this._data;
  }

  /**
   * Setter hasError
   * @param {boolean} value
   */
  public set hasError(value: boolean) {
    this._hasError = value;
  }

  /**
   * Setter error
   * @param {ErrorObject} value
   */
  public set error(value: ErrorObject) {
    this._error = value;
  }

  /**
   * Setter hasWarnings
   * @param {boolean} value
   */
  public set hasWarnings(value: boolean) {
    this._hasWarnings = value;
  }

  /**
   * Setter warnings
   * @param {string[]} value
   */
  public set warnings(value: string[]) {
    this._warnings = value;
  }

  /**
   * Setter data
   * @param {Array<T>} value
   */
  public set data(value: Array<T>) {
    this._data = value;
  }
}

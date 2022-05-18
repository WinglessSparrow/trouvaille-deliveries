import { ITokenResponse } from '../../../interfaces/back-end-communication/i-token-response';

export class TokenResponse implements ITokenResponse {
  private _token: string;
  private _email: string;
  private _expirationDate: string;

  constructor(data: ITokenResponse) {
    Object.assign(this, data);
  }

  /**
   * Getter token
   * @return {string}
   */
  public get token(): string {
    return this._token;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter expirationDate
   * @return {string}
   */
  public get expirationDate(): string {
    return this._expirationDate;
  }

  /**
   * Setter token
   * @param {string} value
   */
  public set token(value: string) {
    this._token = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter expirationDate
   * @param {string} value
   */
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
}

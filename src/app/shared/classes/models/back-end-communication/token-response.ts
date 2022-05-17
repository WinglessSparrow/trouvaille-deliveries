export class TokenResponse {
  private _token: string;
  private _email: string;
  private _expirationDate: string;
  private _authorities: any;

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
   * Getter authorities
   * @return {any}
   */
  public get authorities(): any {
    return this._authorities;
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

  /**
   * Setter authorities
   * @param {any} value
   */
  public set authorities(value: any) {
    this._authorities = value;
  }
}

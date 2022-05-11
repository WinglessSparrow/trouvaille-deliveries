import { HttpErrorResponse } from '@angular/common/http';
import { ModalContext } from '../../models/data-models/modal-context';

/*
one might say, wrapping the same data twice is stupid.
you are stupid.
fuck off.
(bfr, I need to send this object without HttpErrorResponse as well)
*/

export class HttpModalContext extends ModalContext {
  private _httpStatus: number;
  private _message: string;
  private _url: string;

  constructor(httpStatus: number, message: string, url: string) {
    super();
    this._httpStatus = httpStatus;
    this._message = message;
    this._url = url;
  }

  public static fromHttpError(response: HttpErrorResponse): HttpModalContext {
    return new HttpModalContext(
      response.status,
      response.statusText,
      response.url
    );
  }

  /**
   * Getter httpStatus
   * @return {number}
   */
  public get httpStatus(): number {
    return this._httpStatus;
  }

  /**
   * Getter message
   * @return {string}
   */
  public get message(): string {
    return this._message;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Setter httpStatus
   * @param {number} value
   */
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }

  /**
   * Setter message
   * @param {string} value
   */
  public set message(value: string) {
    this._message = value;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string) {
    this._url = value;
  }
}

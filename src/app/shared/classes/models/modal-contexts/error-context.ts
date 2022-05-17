import { Callback } from '@ngxs/store/src/internal/internals';
import { ModalContext } from '../../../interfaces/abstract-classes/modal-context';

export enum ErrorType {
  BUG,
  ERROR,
  NOTIFICATION,
}

export class ErrorContext extends ModalContext {
  private _header: string;
  private _description: string;
  private _handler: Callback;
  private _buttonName: string;
  private _type: ErrorType;

  constructor(
    header: string,
    description: string,
    buttonName: string,
    handler: Callback,
    type: ErrorType = ErrorType.BUG
  ) {
    super();
    this._type = type;
    this._header = header;
    this._description = description;
    this._handler = handler;
    this._buttonName = buttonName;
  }

  /**
   * Getter header
   * @return {string}
   */
  public get header(): string {
    return this._header;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter handler
   * @return {Function}
   */
  public get handler(): Callback {
    return this._handler;
  }

  /**
   * Getter buttonName
   * @return {string}
   */
  public get buttonName(): string {
    return this._buttonName;
  }

  /**
   * Getter type
   * @return {ErrorType}
   */
  public get type(): ErrorType {
    return this._type;
  }

  /**
   * Setter type
   * @param {ErrorType} value
   */
  public set type(value: ErrorType) {
    this._type = value;
  }
}

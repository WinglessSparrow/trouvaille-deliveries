import { Callback } from '@ngxs/store/src/internal/internals';
import { ModalContext } from '../models/data-models/modal-context';


export class ErrorContext extends ModalContext {
  private _header: string;
  private _description: string;
  private _handler: Callback;
  private _buttonName: string;

  constructor(
    header: string,
    description: string,
    buttonName: string,
    handler: Callback
  ) {
    super();
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
}

import { Callback } from '@ngxs/store/src/internal/internals';
import { ModalContext } from 'src/app/shared/interfaces/abstract-classes/modal-context';

export class DialogContext extends ModalContext {
  private _header: string;
  private _text: string;

  private _opt1Callback: Callback;
  private _opt2Callback: Callback;

  private _btn1Name: string;
  private _btn2Name: string;

  constructor(
    header: string,
    text: string,
    opt1Callback: Callback,
    opt2Callback: Callback,
    btn1Name: string = 'yes',
    btn2Name: string = 'no'
  ) {
    super();

    this._header = header;
    this._text = text;
    this._opt1Callback = opt1Callback;
    this._opt2Callback = opt2Callback;
    this._btn1Name = btn1Name;
    this._btn2Name = btn2Name;
  }

  /**
   * Getter header
   * @return {string}
   */
  public get header(): string {
    return this._header;
  }

  /**
   * Setter header
   * @param {string} value
   */
  public set header(value: string) {
    this._header = value;
  }

  /**
   * Getter text
   * @return {string}
   */
  public get text(): string {
    return this._text;
  }

  /**
   * Setter text
   * @param {string} value
   */
  public set text(value: string) {
    this._text = value;
  }

  /**
   * Getter opt1Callback
   * @return {Callback}
   */
  public get opt1Callback(): Callback {
    return this._opt1Callback;
  }

  /**
   * Setter opt1Callback
   * @param {Callback} value
   */
  public set opt1Callback(value: Callback) {
    this._opt1Callback = value;
  }

  /**
   * Getter opt2Callback
   * @return {Callback}
   */
  public get opt2Callback(): Callback {
    return this._opt2Callback;
  }

  /**
   * Setter opt2Callback
   * @param {Callback} value
   */
  public set opt2Callback(value: Callback) {
    this._opt2Callback = value;
  }

  /**
   * Getter btn1Name
   * @return {string}
   */
  public get btn1Name(): string {
    return this._btn1Name;
  }

  /**
   * Setter btn1Name
   * @param {string} value
   */
  public set btn1Name(value: string) {
    this._btn1Name = value;
  }

  /**
   * Getter btn2Name
   * @return {string}
   */
  public get btn2Name(): string {
    return this._btn2Name;
  }

  /**
   * Setter btn2Name
   * @param {string} value
   */
  public set btn2Name(value: string) {
    this._btn2Name = value;
  }
}

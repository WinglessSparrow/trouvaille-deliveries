import { ModalContext } from '../models/data-models/modal-context';

export class LoadingContext extends ModalContext {
  private _name: string;
  //TODO maybe more data, an ?optional? observable that counts up? maybe?

  constructor(name: string) {
    super();
    this._name = name;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }
}

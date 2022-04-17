import { Observable } from 'rxjs';

export class PageDescriptor {
  private _route: string;
  private _name: string;

  constructor(_route: string, _name: string) {
    this._route = _route;
    this._name = _name;
  }

  public get route(): string {
    return this._route;
  }

  public get name(): string {
    return this._name;
  }
}

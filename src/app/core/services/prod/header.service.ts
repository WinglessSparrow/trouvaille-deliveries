import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerText$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Header'
  );
  private _isActive: boolean = false;

  public get isActive(): boolean {
    return this._isActive;
  }

  public set isActive(value: boolean) {
    this._isActive = value;
  }

  public get headerText(): BehaviorSubject<string> {
    return this.headerText$;
  }

  public set headerText(value: BehaviorSubject<string>) {
    this.headerText$ = value;
  }

  constructor() {}
}

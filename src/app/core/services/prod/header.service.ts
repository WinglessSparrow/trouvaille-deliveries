import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _headerText: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Home'
  );
  private _isActive: boolean = false;

  constructor() {}

  public activate() {
    this._isActive = true;
  }

  public deactivate() {
    this._isActive = false;
  }

  public set headerText(value: string) {
    this._headerText.next(value);
  }

  public getTextObservable(): Observable<string> {
    return this._headerText.asObservable();
  }

  /**
   * Getter isActive
   * @return {boolean }
   */
  public get isActive(): boolean {
    return this._isActive;
  }
}

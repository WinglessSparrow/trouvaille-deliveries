import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _headerText$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Home'
  );
  private _isActive: boolean = false;
  private _isMenu$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  public activate() {
    this._isActive = true;
  }

  public deactivate() {
    this._isActive = false;
  }

  public set headerText(value: string) {
    this._headerText$.next(value);
  }

  public getTextObservable(): Observable<string> {
    return this._headerText$.asObservable();
  }

  public menuOff() {
    this._isMenu$.next(false);
  }

  public menuOn() {
    this._isMenu$.next(true);
  }

  /**
   * Getter isActive
   * @return {boolean }
   */
  public get isActive(): boolean {
    return this._isActive;
  }

  /**
   * Getter isMenu$
   * @return {BehaviorSubject<boolean> }
   */
  public get isMenu$(): Observable<boolean> {
    return this._isMenu$.asObservable();
  }
}

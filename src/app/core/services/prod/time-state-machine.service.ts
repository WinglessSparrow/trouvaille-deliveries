import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeStateMachineService {
  constructor() {}

  private _currState: BehaviorSubject<TimeStates> =
    new BehaviorSubject<TimeStates>(TimeStates.NotDrive);

  //this is perfectly fine
  public changeState(state: TimeStates) {
    var change: boolean = false;
    const currState = this._currState.value;

    if (state != currState) {
      switch (currState) {
        case TimeStates.Drive:
          change = state == TimeStates.NotDrive || state == TimeStates.Pause;
          break;
        case TimeStates.NotDrive:
          change = state == TimeStates.Drive;
          break;
        case TimeStates.Pause:
          change = state == TimeStates.Drive;
          break;
      }
    }

    if (change) {
      this._currState.next(state);
    } else {
      console.log(
        `Cannot change from ${currState.toString()} to ${state.toString()}`
      );
    }
  }

  /**
   * Getter currState
   * @return {Observable<TimeStates> }
   */
  public get currState(): Observable<TimeStates> {
    return this._currState.asObservable();
  }
}

export enum TimeStates {
  Drive,
  Pause,
  NotDrive,
}

import { BehaviorSubject, Observable } from 'rxjs';
import {
  TimeStateMachineService,
  TimeStates,
} from 'src/app/core/services/prod/time-state-machine.service';
import { TimeDescriptor } from '../classes/time-descriptor';

export abstract class TimeServiceModel {
  private _maxPause: number = 0.45;
  private _maxWork: number = 8.0;

  private _timeWorked: BehaviorSubject<string> = new BehaviorSubject<string>(
    '/'
  );
  private _timePaused: BehaviorSubject<string> = new BehaviorSubject<string>(
    '/'
  );

  protected _timeDescriptors: TimeDescriptor;
  private _state: TimeStates;

  constructor(private timeState: TimeStateMachineService) {
    this.initTimes();

    timeState.currState.subscribe((state) => {
      this._state = state;
      this.calcTimes();
    });
  }

  public get timeWorked(): Observable<string> {
    return this._timeWorked.asObservable();
  }

  public get timePaused(): Observable<string> {
    return this._timePaused.asObservable();
  }

  public async initTimes() {
    this._timeDescriptors = await this.getTimes();
    this._timePaused.next(`0 / ${this._maxPause}`);
    this._timeWorked.next(`0 / ${this._maxWork}`);
  }

  public calcTimes() {
    let timeWorked;
    let timePaused;

    switch (this._state) {
      case TimeStates.Drive:
        timeWorked =
          new Date().getTime() - this._timeDescriptors.timeStart.getTime();
        if (timeWorked > this._maxWork) {
          this.timeState.changeState(TimeStates.NotDrive);
          throw Error('Working for too long');
        }

        timePaused =
          this._timeDescriptors.timePauseStop.getTime() -
          this._timeDescriptors.timePauseStart.getTime();

        this._timeWorked.next(`${timeWorked} / ${this._maxWork}`);
        this._timePaused.next(`${timePaused} / ${this._maxPause}`);

        break;
      case TimeStates.Pause:
        timeWorked =
          this._timeDescriptors.timePauseStart.getTime() -
          this._timeDescriptors.timeStart.getTime();
        timePaused =
          new Date().getTime() - this._timeDescriptors.timePauseStart.getTime();

        this._timeWorked.next(`${timeWorked} / ${this._maxWork}`);
        this._timePaused.next(`${timePaused} / ${this._maxPause}`);

        break;
      case TimeStates.NotDrive:
        timeWorked =
          this._timeDescriptors.timeStop.getTime() -
          this._timeDescriptors.timeStart.getTime();
        timePaused =
          this._timeDescriptors.timePauseStop.getTime() -
          this._timeDescriptors.timePauseStart.getTime();

        this._timeWorked.next(`${timeWorked} / ${this._maxWork}`);
        this._timePaused.next(`${timePaused} / ${this._maxPause}`);
        break;
      default:
        break;
    }
  }

  //FIXME Date should be some kind of a complex Object or smth
  public abstract getTimes(): Promise<TimeDescriptor>;
  public abstract startDriving();
  public abstract stopDriving();
  public abstract startPause();
  public abstract stopPause();
}

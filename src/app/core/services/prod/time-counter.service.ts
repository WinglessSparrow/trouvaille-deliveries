import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import { TimeInterval } from 'src/app/shared/classes/time-interval';
import { TimeServiceModel } from 'src/app/shared/models/time-service-model';

@Injectable({
  providedIn: 'root',
})
export class TimeCounterService {
  private readonly THIRTY_SECONDS: number = 30000;
  private readonly MAX: number = 2.88e7;
  private readonly MAX_STRING: string = this.convertMsToHMS(this.MAX);
  private readonly MAX_PAUSE: number = 0.45;
  private readonly MAX_PAUSE_STRING: string = this.convertMsToHMS(
    this.MAX_PAUSE
  );

  private _workingTime: BehaviorSubject<string> = new BehaviorSubject<string>(
    `00:00 | ${this.MAX_STRING}`
  );
  private _pauseTime: BehaviorSubject<string> = new BehaviorSubject<string>(
    `00:00 | ${this.MAX_PAUSE_STRING}`
  );

  private _workingIntervals: TimeInterval[] = [];
  private _pauseIntervals: TimeInterval[] = [];

  private isRunning: boolean = false;

  constructor(private timeService: TimeServiceModel) {}

  public async init() {
    if (!this.isRunning) {
      const alreadyDoneIntervals = await this.timeService.getTimes();

      this._workingIntervals = alreadyDoneIntervals[0];
      this._pauseIntervals = alreadyDoneIntervals[1];

      this.isRunning = true;

      this.calcTime();

      setInterval(() => {
        this.calcTime();
      }, this.THIRTY_SECONDS);
    }
  }

  public addPauseInterval() {
    this.timeService.startPause();
    this._pauseIntervals.push(new TimeInterval());
  }

  public concludePauseInterval() {
    this.timeService.stopPause();
    this._pauseIntervals[this._pauseIntervals.length - 1].concludeInterval();
  }

  public addWorkInterval() {
    this.timeService.startDriving();
    this._workingIntervals.push(new TimeInterval());
  }

  public concludeWorkInterval() {
    this.timeService.stopDriving();
    this._workingIntervals[
      this._workingIntervals.length - 1
    ].concludeInterval();
  }

  public calcTime() {
    let workingTime: number = this._workingIntervals.reduce(
      (sum, val) => val.calculatedTime + sum,
      0
    );
    const pauseTime: number = this._pauseIntervals.reduce(
      (sum, val) => val.calculatedTime + sum,
      0
    );

    //subtracting pause time
    workingTime -= pauseTime;

    this._workingTime.next(
      `${this.convertMsToHMS(workingTime)} | ${this.MAX_STRING}`
    );
    this._pauseTime.next(
      `${this.convertMsToHMS(pauseTime)} | ${this.MAX_PAUSE_STRING}`
    );
  }

  public get workingTime(): Observable<string> {
    return this._workingTime.asObservable();
  }

  public get pauseTime(): Observable<string> {
    return this._pauseTime.asObservable();
  }

  //thank you very much: https://bobbyhadz.com/blog/javascript-convert-milliseconds-to-hours-and-minutes
  private padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  private convertMsToHMS(milliseconds, addSeconds: boolean = false) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;

    minutes = minutes % 60;

    hours = hours % 24;

    let ret = `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;

    ret += addSeconds ? `:${this.padTo2Digits(seconds)}` : '';

    return ret;
  }
}

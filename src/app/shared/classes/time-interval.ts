export class TimeInterval {
  private _start: Date;
  private _stop: Date;
  private _calculatedTime: number = null;
  private _isRunning: boolean = false;

  constructor() {
    this._isRunning = true;
    this._start = new Date();
  }

  public concludeInterval() {
    this._isRunning = false;
    this._stop = new Date();
    this.resolveInterval();
  }

  public resolveInterval() {
    if (this._isRunning) {
      this._calculatedTime = new Date().getTime() - this._start.getTime();
    } else {
      this._calculatedTime = this._stop.getTime() - this._start.getTime();
    }
  }

  /**
   * Getter start
   * @return {Date}
   */
  public get start(): Date {
    return this._start;
  }

  /**
   * Getter stop
   * @return {Date}
   */
  public get stop(): Date {
    return this._stop;
  }

  /**
   * Getter calculatedTime
   * @return {number}
   */
  public get calculatedTime(): number {
    if (this._isRunning || this._calculatedTime == null) this.resolveInterval();
    return this._calculatedTime;
  }

  /**
   * Getter $isRunning
   * @return {boolean }
   */
  public get isRunning(): boolean {
    return this._isRunning;
  }

  /**
   * Setter start
   * @param {Date} value
   */
  public set start(value: Date) {
    this._start = value;
  }

  /**
   * Setter stop
   * @param {Date} value
   */
  public set stop(value: Date) {
    this._stop = value;
  }

  /**
   * Setter $isRunning
   * @param {boolean } value
   */
  public set isRunning(value: boolean) {
    this._isRunning = value;
  }
}

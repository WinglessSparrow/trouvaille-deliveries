export class TimeDescriptor {
  private _timeStart: Date;
  private _timeStop: Date;
  private _timePauseStart: Date;
  private _timePauseStop: Date;

  /**
   * Getter timeStart
   * @return {Date}
   */
  public get timeStart(): Date {
    return this._timeStart;
  }

  /**
   * Getter timeStop
   * @return {Date}
   */
  public get timeStop(): Date {
    return this._timeStop;
  }

  /**
   * Getter timePauseStart
   * @return {Date}
   */
  public get timePauseStart(): Date {
    return this._timePauseStart;
  }

  /**
   * Getter timePauseStop
   * @return {Date}
   */
  public get timePauseStop(): Date {
    return this._timePauseStop;
  }

  /**
   * Setter timeStart
   * @param {Date} value
   */
  public set timeStart(value: Date) {
    this._timeStart = value;
  }

  /**
   * Setter timeStop
   * @param {Date} value
   */
  public set timeStop(value: Date) {
    this._timeStop = value;
  }

  /**
   * Setter timePauseStart
   * @param {Date} value
   */
  public set timePauseStart(value: Date) {
    this._timePauseStart = value;
  }

  /**
   * Setter timePauseStop
   * @param {Date} value
   */
  public set timePauseStop(value: Date) {
    this._timePauseStop = value;
  }
}

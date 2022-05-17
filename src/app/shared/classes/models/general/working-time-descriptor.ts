export class WorkingTimeDescriptor {
  public static readonly WORK_FROM: number = 0;
  public static readonly WORK_TO: number = 1;
  public static readonly BREAK_FROM: number = 2;
  public static readonly BREAK_TO: number = 3;

  private _workingTimeFrom: Date;
  private _workingTimeTo: Date;
  private _breakTimeFrom: Date;
  private _breakTimeTo: Date;

  private _dates: Date[];

  constructor(dates: Date[]) {
    this._dates = dates;
    this._workingTimeFrom = dates[WorkingTimeDescriptor.WORK_FROM];
    this._workingTimeTo = dates[WorkingTimeDescriptor.WORK_TO];
    this._breakTimeFrom = dates[WorkingTimeDescriptor.BREAK_FROM];
    this._breakTimeTo = dates[WorkingTimeDescriptor.BREAK_TO];
  }

  /**
   * Getter workingTimeFrom
   * @return {Date}
   */
  public get workingTimeFrom(): Date {
    return this._workingTimeFrom;
  }

  /**
   * Getter workingTimeTo
   * @return {Date}
   */
  public get workingTimeTo(): Date {
    return this._workingTimeTo;
  }

  /**
   * Getter breakTimeFrom
   * @return {Date}
   */
  public get breakTimeFrom(): Date {
    return this._breakTimeFrom;
  }

  /**
   * Getter breakTimeTo
   * @return {Date}
   */
  public get breakTimeTo(): Date {
    return this._breakTimeTo;
  }

  /**
   * Getter dates
   * @return {Date[]}
   */
  public get dates(): Date[] {
    return this._dates;
  }

  /**
   * Setter workingTimeFrom
   * @param {Date} value
   */
  public set workingTimeFrom(value: Date) {
    this._workingTimeFrom = value;
  }

  /**
   * Setter workingTimeTo
   * @param {Date} value
   */
  public set workingTimeTo(value: Date) {
    this._workingTimeTo = value;
  }

  /**
   * Setter breakTimeFrom
   * @param {Date} value
   */
  public set breakTimeFrom(value: Date) {
    this._breakTimeFrom = value;
  }

  /**
   * Setter breakTimeTo
   * @param {Date} value
   */
  public set breakTimeTo(value: Date) {
    this._breakTimeTo = value;
  }

  /**
   * Setter dates
   * @param {Date[]} value
   */
  public set dates(value: Date[]) {
    this._dates = value;
  }
}

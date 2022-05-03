export class MapNode {
  private _index: number;
  private _latitude: number;
  private _longitude: number;

  constructor(_index: number, _latitude: number, _longitude: number) {
    this._index = _index;
    this._latitude = _latitude;
    this._longitude = _longitude;
  }

  /**
   * Getter index
   * @return {number}
   */
  public get index(): number {
    return this._index;
  }

  /**
   * Getter latitude
   * @return {number}
   */
  public get latitude(): number {
    return this._latitude;
  }

  /**
   * Getter longitude
   * @return {number}
   */
  public get longitude(): number {
    return this._longitude;
  }

  /**
   * Setter index
   * @param {number} value
   */
  public set index(value: number) {
    this._index = value;
  }

  /**
   * Setter latitude
   * @param {number} value
   */
  public set latitude(value: number) {
    this._latitude = value;
  }

  /**
   * Setter longitude
   * @param {number} value
   */
  public set longitude(value: number) {
    this._longitude = value;
  }
}

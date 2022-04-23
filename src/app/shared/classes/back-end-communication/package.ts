export class Package {
  private _id: string;
  private _weight: number;
  private _height: number;
  private _width: number;
  private _depth: number;

  private _price: number;

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter weight
   * @return {number}
   */
  public get weight(): number {
    return this._weight;
  }

  /**
   * Getter height
   * @return {number}
   */
  public get height(): number {
    return this._height;
  }

  /**
   * Getter width
   * @return {number}
   */
  public get width(): number {
    return this._width;
  }

  /**
   * Getter depth
   * @return {number}
   */
  public get depth(): number {
    return this._depth;
  }

  /**
   * Getter price
   * @return {number}
   */
  public get price(): number {
    return this._price;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter weight
   * @param {number} value
   */
  public set weight(value: number) {
    this._weight = value;
  }

  /**
   * Setter height
   * @param {number} value
   */
  public set height(value: number) {
    this._height = value;
  }

  /**
   * Setter width
   * @param {number} value
   */
  public set width(value: number) {
    this._width = value;
  }

  /**
   * Setter depth
   * @param {number} value
   */
  public set depth(value: number) {
    this._depth = value;
  }

  /**
   * Setter price
   * @param {number} value
   */
  public set price(value: number) {
    this._price = value;
  }
}

export class Package {
  private _packageId: number;
  private _idDelivery: string;
  private _idPickup: number;
  private _weight: number;
  private _height: number;
  private _idNode: number;
  private _idReturn: number;
  private _width: number;
  private _depth: number;
  private _sourceIdAddress: number;
  private _destinationIdAddress: number;
  private _priority: number;
  private _price: number;
  private _returnIdAddress: number;
  private _externTrackingNumber: string;

  /**
   * Getter packageId
   * @return {number}
   */
  public get packageId(): number {
    return this._packageId;
  }

  /**
   * Getter idDelivery
   * @return {string}
   */
  public get idDelivery(): string {
    return this._idDelivery;
  }

  /**
   * Getter idPickup
   * @return {number}
   */
  public get idPickup(): number {
    return this._idPickup;
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
   * Getter idNode
   * @return {number}
   */
  public get idNode(): number {
    return this._idNode;
  }

  /**
   * Getter idReturn
   * @return {number}
   */
  public get idReturn(): number {
    return this._idReturn;
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
   * Getter sourceIdAddress
   * @return {number}
   */
  public get sourceIdAddress(): number {
    return this._sourceIdAddress;
  }

  /**
   * Getter destinationIdAddress
   * @return {number}
   */
  public get destinationIdAddress(): number {
    return this._destinationIdAddress;
  }

  /**
   * Getter priority
   * @return {number}
   */
  public get priority(): number {
    return this._priority;
  }

  /**
   * Getter price
   * @return {number}
   */
  public get price(): number {
    return this._price;
  }

  /**
   * Getter returnIdAddress
   * @return {number}
   */
  public get returnIdAddress(): number {
    return this._returnIdAddress;
  }

  /**
   * Getter externTrackingNumber
   * @return {string}
   */
  public get externTrackingNumber(): string {
    return this._externTrackingNumber;
  }

  /**
   * Setter packageId
   * @param {number} value
   */
  public set packageId(value: number) {
    this._packageId = value;
  }

  /**
   * Setter idDelivery
   * @param {string} value
   */
  public set idDelivery(value: string) {
    this._idDelivery = value;
  }

  /**
   * Setter idPickup
   * @param {number} value
   */
  public set idPickup(value: number) {
    this._idPickup = value;
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
   * Setter idNode
   * @param {number} value
   */
  public set idNode(value: number) {
    this._idNode = value;
  }

  /**
   * Setter idReturn
   * @param {number} value
   */
  public set idReturn(value: number) {
    this._idReturn = value;
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
   * Setter sourceIdAddress
   * @param {number} value
   */
  public set sourceIdAddress(value: number) {
    this._sourceIdAddress = value;
  }

  /**
   * Setter destinationIdAddress
   * @param {number} value
   */
  public set destinationIdAddress(value: number) {
    this._destinationIdAddress = value;
  }

  /**
   * Setter priority
   * @param {number} value
   */
  public set priority(value: number) {
    this._priority = value;
  }

  /**
   * Setter price
   * @param {number} value
   */
  public set price(value: number) {
    this._price = value;
  }

  /**
   * Setter returnIdAddress
   * @param {number} value
   */
  public set returnIdAddress(value: number) {
    this._returnIdAddress = value;
  }

  /**
   * Setter externTrackingNumber
   * @param {string} value
   */
  public set externTrackingNumber(value: string) {
    this._externTrackingNumber = value;
  }
}

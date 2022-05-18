import { immerable } from 'immer';
import { IMapNode } from '../../../interfaces/back-end-communication/i-map-node';

export class MapNode implements IMapNode{
  [immerable] = true;

  private _position: number;
  private _latitude: number;
  private _longitude: number;

  constructor(data: IMapNode){
    this._position = data.position;
    this._latitude = data.latitude;
    this._longitude = data.longitude;
  }

  /**
   * Getter index
   * @return {number}
   */
  public get position(): number {
    return this._position;
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
  public set position(value: number) {
    this._position = value;
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

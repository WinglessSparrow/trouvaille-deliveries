import { Delivery } from './delivery';
import { IMapNode } from '../../../interfaces/back-end-communication/i-map-node';
import { IRouteData } from '../../../interfaces/back-end-communication/i-route-data';
import { MapNode } from './map-node';

export class RouteData implements IRouteData {
  private _idroute: number;
  private _idvehicle: number;
  private _narrowpass: number;
  private _nodes: MapNode[] = [];
  private _packages: Delivery[] = [];

  constructor(data: IRouteData) {
    this._idroute = data.idroute;
    this._idvehicle = data.idvehicle;
    this._narrowpass = data.narrowpass;

    for (let node of data.nodes) {
      this._nodes.push(new MapNode(node));
    }

    for(let delivery of data.packages){
        this._packages.push(new Delivery(delivery));
    }
  }

  /**
   * Getter idroute
   * @return {number}
   */
  public get idroute(): number {
    return this._idroute;
  }

  /**
   * Getter idvehicle
   * @return {number}
   */
  public get idvehicle(): number {
    return this._idvehicle;
  }

  /**
   * Getter narrowpass
   * @return {number}
   */
  public get narrowpass(): number {
    return this._narrowpass;
  }

  /**
   * Getter nodes
   * @return {MapNode[]}
   */
  public get nodes(): MapNode[] {
    return this._nodes;
  }

  /**
   * Getter packages
   * @return {Delivery[]}
   */
  public get packages(): Delivery[] {
    return this._packages;
  }

  /**
   * Setter idroute
   * @param {number} value
   */
  public set idroute(value: number) {
    this._idroute = value;
  }

  /**
   * Setter idvehicle
   * @param {number} value
   */
  public set idvehicle(value: number) {
    this._idvehicle = value;
  }

  /**
   * Setter narrowpass
   * @param {number} value
   */
  public set narrowpass(value: number) {
    this._narrowpass = value;
  }

  /**
   * Setter nodes
   * @param {MapNode[]} value
   */
  public set nodes(value: MapNode[]) {
    this._nodes = value;
  }

  /**
   * Setter packages
   * @param {Delivery[]} value
   */
  public set packages(value: Delivery[]) {
    this._packages = value;
  }
}

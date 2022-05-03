import { Delivery } from '../back-end-communication/delivery';
import { MapNode } from '../back-end-communication/map-node';

export class NodeDeliveryMapping {
  public readonly DELIVERY = 0;
  public readonly MAP_NODE = 1;

  private _mapping: Map<number, [Delivery, MapNode]> = new Map<
    number,
    [Delivery, MapNode]
  >();

  //TODO maybe add needs a boolean return val for correct Error Throw;
  public add(newPair: [Delivery, MapNode]) {
    this._mapping.set(newPair[this.DELIVERY].index, newPair);
  }

  public getAllDeliveries(): Delivery[] {
    debugger;

    const temp = [...this._mapping.values()];

    const map = temp.map((val) => {
      return val[this.DELIVERY];
    });

    return [...this._mapping.values()].map((val) => {
      return val[this.DELIVERY];
    });
  }

  public getDelivery(index: number): Delivery {
    return this._mapping[index][this.DELIVERY];
  }

  public getMapNode(index: number): MapNode {
    return this._mapping[index][this.MAP_NODE];
  }

  public getPair(index: number): [Delivery, MapNode] {
    return this._mapping[index];
  }

  public getAllPairs(): Array<[Delivery, MapNode]> {
    return [...this._mapping.values()];
  }

  /**
   * Setter mapping
   * @param {Map<number, [Delivery, MapNode]>} value
   */
  public set mapping(value: Map<number, [Delivery, MapNode]>) {
    this._mapping = value;
  }
}

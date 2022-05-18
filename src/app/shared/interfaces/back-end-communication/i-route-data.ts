import { Delivery } from '../../classes/models/back-end-communication/delivery';
import { IDelivery } from './i-delivery';
import { IMapNode } from './i-map-node';
import { MapNode } from '../../classes/models/back-end-communication/map-node';

export interface IRouteData {
  idroute: number;
  idvehicle: number;
  narrowpass: number;
  nodes: IMapNode[];
  packages: IDelivery[];
}

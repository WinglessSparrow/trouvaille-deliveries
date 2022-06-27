import { IDelivery } from './i-delivery';
import { IMapNode } from './i-map-node';

export interface IRouteData {
  idroute: number;
  idvehicle: number;
  narrowpass: number;
  nodes: IMapNode[];
  packages: IDelivery[];
  depoLat: number;
  depoLng: number;
}

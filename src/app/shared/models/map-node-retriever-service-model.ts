import { MapNode } from '../classes/back-end-communication/map-node';

export abstract class MapNodesRetrieverServiceModel {
  abstract getMapNodes(): Promise<MapNode[]>;
}

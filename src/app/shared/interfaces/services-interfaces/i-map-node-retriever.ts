import { MapNode } from '../../classes/models/back-end-communication/map-node';

export abstract class IMapNodesRetriever {
  abstract getMapNodes(): Promise<MapNode[]>;
}

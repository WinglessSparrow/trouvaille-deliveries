import { MapNode } from '../classes/back-end-communication/map-node';

export abstract class MapWaypointsServiceModel {
  //TODO finish the interface
  //TODO create different ways of using the map

  abstract getWaypoints(): Promise<L.LatLng[]>;
  abstract getNextWaypoint(): L.LatLng[];
  //   abstract
}

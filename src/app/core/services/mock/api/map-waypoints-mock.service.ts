import { Injectable } from '@angular/core';
import { MapNode } from 'src/app/shared/classes/models/back-end-communication/map-node';
import { IMapNodesRetriever } from 'src/app/shared/interfaces/services-interfaces/i-map-node-retriever';

@Injectable({
  providedIn: 'root',
})
export class MapWaypointsMockService extends IMapNodesRetriever {
  private _wayPoints: MapNode[] = [
    // new MapNode(0, 48.004143, 7.823216),
    // new MapNode(1, 48.007432, 7.821252),
    // new MapNode(2, 48.016931, 7.840815),
    // new MapNode(3, 48.017389, 7.841782),
    // new MapNode(4, 48.029197, 7.836235),
    // new MapNode(5, 48.035572, 7.801798),
    // new MapNode(6, 48.025669, 7.787756),
    // new MapNode(7, 48.018323, 7.775134),
    // new MapNode(8, 48.018353, 7.715134),
  ];

  constructor() {
    super();
  }

  getMapNodes(): Promise<MapNode[]> {
    return new Promise((resolve) => {
      resolve(this._wayPoints);
    });
  }
}

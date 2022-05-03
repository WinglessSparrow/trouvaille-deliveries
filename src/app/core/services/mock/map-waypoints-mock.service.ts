import { Injectable } from '@angular/core';
import { extend, LatLng, Map } from 'leaflet';
import { MapNode } from 'src/app/shared/classes/back-end-communication/map-node';
import { MapNodesRetrieverServiceModel } from 'src/app/shared/models/map-node-retriever-service-model';

@Injectable({
  providedIn: 'root',
})
export class MapWaypointsMockService extends MapNodesRetrieverServiceModel {
  private _wayPoints: MapNode[] = [
    new MapNode(0, 53.089901, 7.878095),
    new MapNode(1, 53.195338, 10.076827),
    new MapNode(2, 52.451825, 13.330952),
    new MapNode(3, 52.772032, 16.321228),
    new MapNode(4, 53.24796, 18.69586),
    new MapNode(5, 50.425144, 19.575353),
    new MapNode(6, 49.463662, 14.914039),
    new MapNode(7, 48.463662, 13.914039),
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

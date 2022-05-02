import { Injectable } from '@angular/core';
import { extend, LatLng } from 'leaflet';
import { MapWaypointsServiceModel } from 'src/app/shared/models/map-waypoints-service-model';

@Injectable({
  providedIn: 'root',
})
export class MapWaypointsMockService extends MapWaypointsServiceModel {
  private _wayPoints: LatLng[] = [
    new LatLng(53.089901, 7.878095),
    new LatLng(53.195338, 10.076827),
    new LatLng(52.451825, 13.330952),
    new LatLng(52.772032, 16.321228),
    new LatLng(53.24796, 18.69586),
    new LatLng(50.425144, 19.575353),
    new LatLng(49.463662, 14.914039),
  ];

  constructor() {
    super();
  }

  getWaypoints(): Promise<LatLng[]> {
    return new Promise((resolve) => {
      resolve(this._wayPoints);
    });
  }
}

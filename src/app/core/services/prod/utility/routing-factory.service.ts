import { Injectable } from '@angular/core';
import { Icon, IconOptions, Marker, Routing } from 'leaflet';
import { MapRoutingManagerService } from './map-routing-manager.service';

@Injectable({
  providedIn: 'root',
})
export class RoutingFactoryService {
  private readonly _blueIcon: Icon = new Icon<IconOptions>({
    iconUrl: '../../../assets/map/map-marker-blue.png',
    shadowUrl: '../../../assets/map/map-marker-shadow.png',
    iconSize: [20, 32],
    shadowSize: [20, 21],
    iconAnchor: [12, 31],
    shadowAnchor: [0, 20],
  });

  private readonly _orangeIcon: Icon = new Icon<IconOptions>({
    iconUrl: '../../../assets/map/map-marker-orange.png',
    shadowUrl: '../../../assets/map/map-marker-shadow.png',
    iconSize: [20, 32],
    shadowSize: [20, 21],
    iconAnchor: [12, 31],
    shadowAnchor: [0, 20],
  });

  private readonly _purpleIcon: Icon = new Icon<IconOptions>({
    iconUrl: '../../../assets/map/map-marker-purple.png',
    shadowUrl: '../../../assets/map/map-marker-shadow.png',
    iconSize: [20, 32],
    shadowSize: [20, 21],
    iconAnchor: [12, 31],
    shadowAnchor: [0, 20],
  });

  private readonly _plan: Routing.Plan = new Routing.Plan(null, {
    draggableWaypoints: true,
    createMarker: (idx, wp, numWp) => {
      if (idx == this.routingManager.posNode) {
        return new Marker(wp.latLng, { icon: this._purpleIcon });
      }

      if (this.routingManager.isDone) {
        return new Marker(wp.latLng, { icon: this._orangeIcon });
      }

      return new Marker(wp.latLng, { icon: this._blueIcon });
    },
  });

  private _controller: Routing.Control = new Routing.Control({
    router: Routing.osrmv1({
      serviceUrl: 'https://td.vvjm.dev/osrm/route/v1',
    }),
    fitSelectedRoutes: false,
    show: false,
    plan: this._plan,
    addWaypoints: false,
    lineOptions: {
      extendToWaypoints: false,
      missingRouteTolerance: 0,
      styles: [{ color: '#0066ff' }],
    },
  });

  constructor(private routingManager: MapRoutingManagerService) {}

  public get controller(): Routing.Control {
    return this._controller;
  }
}

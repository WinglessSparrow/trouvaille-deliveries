import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MapFactoryService } from '../../services/prod/map-factory.service';
import {
  MapRoutingManagerService,
  RoutingMode,
} from '../../services/prod/map-routing-manager.service';
import { RoutingFactoryService } from '../../services/prod/routing-factory.service';

//TODO Geolocation getter loop

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  private _map: L.Map;

  constructor(
    private routingManager: MapRoutingManagerService,
    private routingFactory: RoutingFactoryService,
    private mapFactory: MapFactoryService
  ) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    this._map = this.mapFactory.getMap();

    this.routingManager.controls = this.routingFactory.controller;
    this.routingFactory.controller.addTo(this._map);

    await this.routingManager.initRoute(RoutingMode.ALL_NODES);
  }

  zoomIn() {
    this._map.setZoom(this._map.getZoom() + 1);
  }

  zoomOut() {
    this._map.setZoom(this._map.getZoom() - 1);
  }

  async center() {
    let posOp: PositionOptions = { enableHighAccuracy: true };
    let pos = await Geolocation.getCurrentPosition(posOp);

    this._map.panTo(new L.LatLng(pos.coords.latitude, pos.coords.longitude));
  }

  reload() {
    //TODO implement
  }
}

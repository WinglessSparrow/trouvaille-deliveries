import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { LabelLength } from 'src/app/shared/components/trou-label/trou-label.component';
import { MapFactoryService } from '../../services/prod/utility/map-factory.service';
import {
  MapRoutingManagerService,
  RoutingMode
} from '../../services/prod/utility/map-routing-manager.service';
import { RoutingFactoryService } from '../../services/prod/utility/routing-factory.service';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  private _map: L.Map;
  selectedMode: RoutingMode = RoutingMode.ALL_NODES;
  routingModes = Object.values(RoutingMode);
  labelLength = LabelLength;
  sHidden: boolean;

  static selectHidden: boolean = false;

  constructor(
    private routingManager: MapRoutingManagerService,
    private routingFactory: RoutingFactoryService,
    private mapFactory: MapFactoryService
  ) {}

  ngOnInit() {
    //angular is retarded, so one must bind static shit to non static shit
    this.sHidden = MapViewComponent.selectHidden;
  }

  async ngAfterViewInit() {
    this._map = this.mapFactory.getMap();

    this.routingManager.controls = this.routingFactory.controller;
    this.routingFactory.controller.addTo(this._map);

    await this.routingManager.initRoute();
  }

  toggleSelect() {
    MapViewComponent.selectHidden = !MapViewComponent.selectHidden;
    this.sHidden = MapViewComponent.selectHidden;
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

  async reload() {
    await this.routingManager.initRoute();
  }

  async onChangeSelect() {
    this.routingManager.mode = this.selectedMode;
    await this.routingManager.initRoute();
  }
}

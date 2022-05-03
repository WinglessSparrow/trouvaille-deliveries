import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import 'leaflet-routing-machine';
import { MapNodesRetrieverServiceModel } from 'src/app/shared/models/map-node-retriever-service-model';
import { MapRoutingManagerService } from '../../services/prod/map-routing-manager.service';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  private _map: L.Map;
  private _controls: L.Routing.Control;

  private initMap() {
    this._map = L.map('map', {
      center: [49.821594, 9.695208],
      zoom: 3,
      zoomControl: false,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this._map);
  }

  // private async initRouting() {
  //   this._controls.setWaypoints(await this.mapService.getMapNodes());
  //   this._controls.setWaypoints(await this.mapService.getMapNodes());
  // }

  constructor(private routingManager: MapRoutingManagerService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();

    this._controls = L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `http://router.project-osrm.org/route/v1/`,
      }),
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: true,
    }).addTo(this._map);

    this.routingManager.controls = this._controls;

    this.routingManager.initRoute();
  }

  zoomIn() {
    this._map.setZoom(this._map.getZoom() + 1);
  }

  zoomOut() {
    this._map.setZoom(this._map.getZoom() - 1);
  }

  async center() {
    //FIXME not precise enough!! maybe a problem with the browser << idk
    let posOp: PositionOptions = { enableHighAccuracy: true };
    let pos = await Geolocation.getCurrentPosition(posOp);

    this._map.panTo(new L.LatLng(pos.coords.latitude, pos.coords.longitude));
    L.marker(new L.LatLng(pos.coords.latitude, pos.coords.longitude)).addTo(
      this._map
    );
  }

  reload() {
    //TODO implement
  }
}

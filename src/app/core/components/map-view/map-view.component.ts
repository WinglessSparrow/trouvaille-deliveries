import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import 'leaflet-routing-machine';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  private _map;

  private initMap() {
    this._map = L.map('map', {
      center: [39.8282, -98.5795],
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

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();

    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `http://router.project-osrm.org/route/v1/`,
      }),
      showAlternatives: true,
      fitSelectedRoutes: false,
      show: false,
      // routeWhileDragging: true,
      waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
    }).addTo(this._map);
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

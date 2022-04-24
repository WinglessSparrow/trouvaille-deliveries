import { Component, OnInit } from '@angular/core';
import * as leaf from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  private _map;

  private initMap() {
    this._map = leaf.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
      zoomControl: false,
    });

    const tiles = leaf.tileLayer(
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
  }

  //TODO Implement 4 map control Methods

  zoomIn() {
    this._map.setZoom(this._map.getZoom() + 1);
  }

  zoomOut() {
    this._map.setZoom(this._map.getZoom() - 1);
  }

  async center() {
    //TODO not precise enough!! maybe a problem with the browser << idk
    let posOp: PositionOptions = { enableHighAccuracy: true };
    let pos = await Geolocation.getCurrentPosition(posOp);

    // this._map.panTo(new leaf.LatLng(pos.coords.latitude, pos.coords.longitude));
    new leaf.marker(
      new leaf.LatLng(pos.coords.latitude, pos.coords.longitude)
    ).addTo(this._map);
  }

  reload() {}
}

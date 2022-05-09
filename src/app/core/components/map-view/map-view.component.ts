import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import { Routing } from 'leaflet';
import 'leaflet-routing-machine';
import { MapRoutingManagerService } from '../../services/prod/map-routing-manager.service';

//TODO REFACTOR!!!
//TODO Geolocation getter loop

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  private _map: L.Map;
  private _controls: Routing.Control;

  private initMap() {
    this._map = L.map('map', {
      center: [49.821594, 9.695208],
      zoom: 4,
      zoomControl: false,
      // dragging: false,
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

  constructor(private routingManager: MapRoutingManagerService) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    this.initMap();

    var LeafIcon: L.Icon = new L.Icon<L.IconOptions>({
      // options: {
      iconUrl: '../../../assets/map/map-marker-blue.png',
      shadowUrl: '../../../assets/map/map-marker-shadow.png',
      iconSize: [20, 32],
      shadowSize: [20, 21],
      iconAnchor: [12, 31],
      shadowAnchor: [0, 20],
      //   shadowUrl: null,
      //   iconSize: [38, 95],
      //   shadowSize: [50, 64],
      //   iconAnchor: [22, 94],
      //   shadowAnchor: [4, 62],
      //   popupAnchor: [-3, -76],
      // },
    });

    var LeafIconPrpl: L.Icon = new L.Icon<L.IconOptions>({
      // options: {
      iconUrl: '../../../assets/map/map-marker-purple.png',
      shadowUrl: '../../../assets/map/map-marker-shadow.png',
      iconSize: [20, 32],
      shadowSize: [20, 21],
      iconAnchor: [12, 31],
      shadowAnchor: [0, 20],
      //   shadowUrl: null,
      //   iconSize: [38, 95],
      //   shadowSize: [50, 64],
      //   iconAnchor: [22, 94],
      //   shadowAnchor: [4, 62],
      //   popupAnchor: [-3, -76],
      // },
    });

    const plan = new Routing.Plan(null, {
      draggableWaypoints: false,
      createMarker: (idx, wp, numWp) => {
        // debugger;
        if (idx == this.routingManager.currNode) {
          return new L.Marker(wp.latLng, { icon: LeafIconPrpl });
        }
        return new L.Marker(wp.latLng, { icon: LeafIcon });
      },
    });

    this._controls = Routing.control({
      router: Routing.osrmv1({
        serviceUrl: `http://router.project-osrm.org/route/v1/`,
      }),
      fitSelectedRoutes: false,
      show: false,
      plan: plan,
      addWaypoints: false,
      lineOptions: {
        extendToWaypoints: false,
        missingRouteTolerance: 0,
        styles: [{ color: '#0066ff' }],
      },
    }).addTo(this._map);

    this.routingManager.controls = this._controls;

    await this.routingManager.initRoute();
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

    var LeafIcon: L.Icon = new L.Icon<L.IconOptions>({
      // options: {
      iconUrl: '../../../assets/map/map-marker-blue.png',
      shadowUrl: '../../../assets/map/map-marker-shadow.png',
      iconSize: [20, 32],
      shadowSize: [20, 21],
      iconAnchor: [12, 31],
      shadowAnchor: [0, 20],
    });

    this._map.panTo(new L.LatLng(pos.coords.latitude, pos.coords.longitude));
    // L.marker(new L.LatLng(pos.coords.latitude, pos.coords.longitude), {
    //   icon: LeafIcon,
    // }).addTo(this._map);
  }

  reload() {
    //TODO implement
  }
}

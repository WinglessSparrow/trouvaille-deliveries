import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Select } from '@ngxs/store';
import { LatLng, Routing } from 'leaflet';
import { Subject } from 'rxjs';
import { RouteDataState } from 'src/app/core/store/route-data/route-data.state';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { MapNode } from 'src/app/shared/classes/models/back-end-communication/map-node';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { RouteData } from 'src/app/shared/classes/models/back-end-communication/route-data';

@Injectable({
  providedIn: 'root',
})
export class MapRoutingManagerService {
  private _markersChanged: Subject<void> = new Subject<void>();

  private _controls: Routing.Control;

  private _deliveries: Delivery[];
  private _nodes: MapNode[];
  private _currNode: number = 0;
  private _posNode: number = 0;
  private _mode: RoutingMode = RoutingMode.ALL_NODES;

  @Select(RouteDataState.getRoute) routeData$;

  constructor() {
    this.routeData$.subscribe((data: RouteData) => {
      if (data != null) {
        this._deliveries = data.packages;
        this._nodes = data.nodes;
        this._currNode = this.findCurrentDeliveryIndex();
        this._markersChanged.next();
      }
      this.renewRoute();
    });

    setInterval(() => {
      this.renewRoute();
    }, 60000);
  }

  public async getCurrentPosition(): Promise<LatLng> {
    let posOp: PositionOptions = { enableHighAccuracy: true };
    let pos = await Geolocation.getCurrentPosition(posOp);

    return new LatLng(pos.coords.latitude, pos.coords.longitude);
  }

  public async insertCurrentPosition(waypoints: LatLng[]): Promise<LatLng[]> {
    const currPos = await this.getCurrentPosition();
    this._posNode = this._currNode;

    return [
      ...waypoints.slice(0, this._currNode),
      currPos,
      ...waypoints.slice(this._currNode),
    ];
  }

  public async renewRoute() {
    if (
      this._nodes != null &&
      this._deliveries != null &&
      this._controls != null
    ) {
      let waypoints: LatLng[] = await this.getWaypoints(this._mode);
      this._controls.setWaypoints(waypoints);
    }
  }

  public getCurrentPrevNextDeliveries(): Delivery[] {
    let retArr: Delivery[];

    if (this._currNode != null && this._deliveries != null) {
      retArr = [];

      const idxPrev = this._currNode - 1;
      const idxNext = this.findNextDeliveryIndex();

      retArr.push(idxPrev > 0 ? this._deliveries[idxPrev] : null);

      retArr.push(this._deliveries[this._currNode]);

      retArr.push(idxNext != null ? this._deliveries[idxNext] : null);
    } else {
      //no more current Deliveries
      retArr = [null, null, null];
    }

    return retArr;
  }

  private async getWaypoints(mode: RoutingMode): Promise<LatLng[]> {
    let waypoints: LatLng[];

    //TODO should create option class over some interface or smth
    switch (mode) {
      case RoutingMode.ALL_NODES:
        waypoints = this._nodes.map((node) => {
          return new LatLng(node.latitude, node.longitude);
        });

        if (this._currNode != null) {
          waypoints = await this.insertCurrentPosition(waypoints);
        }
        break;
      case RoutingMode.ONLY_NEXT:
        waypoints = this._nodes
          .filter((node) => {
            return (
              this._deliveries[node.position].currentState ===
                DeliveryStates.IN_CAR ||
              this._deliveries[node.position].currentState ===
                DeliveryStates.REQUESTED_PICKUP
            );
          })
          .map((node) => {
            return new LatLng(node.latitude, node.longitude);
          });

        waypoints = [await this.getCurrentPosition(), ...waypoints];
        this._posNode = 0;
        break;
      default:
        console.log('tf?');
        waypoints = [];
        break;
    }

    return waypoints;
  }

  private findCurrentDeliveryIndex(): number {
    const delivery = this._deliveries.find((val) => {
      return (
        val.currentState === DeliveryStates.REQUESTED_PICKUP ||
        val.currentState === DeliveryStates.IN_CAR
      );
    });
    return delivery != null ? delivery.position : null;
  }

  private findNextDeliveryIndex(): number {
    const temp = this._deliveries.find((val) => {
      return (
        (val.currentState === DeliveryStates.IN_CAR ||
          val.currentState === DeliveryStates.REQUESTED_PICKUP) &&
        val.position > this._currNode
      );
    });

    return temp != null ? temp.position : null;
  }

  public set controls(controls: Routing.Control) {
    this._controls = controls;
  }

  public get markerChanges() {
    return this._markersChanged.asObservable();
  }

  /**
   * Getter currNode
   * @return {number }
   */
  public get currNode(): number {
    return this._currNode;
  }

  /**
   * Getter posNode
   * @return {number }
   */
  public get posNode(): number {
    return this._posNode;
  }

  public set mode(mode: RoutingMode) {
    this._mode = mode;
  }
}

export enum RoutingMode {
  ALL_NODES = 'All Nodes',
  ONLY_NEXT = 'Just the Relevant',
}

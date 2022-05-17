import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Store } from '@ngxs/store';
import { LatLng, Routing } from 'leaflet';
import { Subject } from 'rxjs';
import { DeliveryState } from 'src/app/core/state/deliveries/deliveries.state';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { MapNode } from 'src/app/shared/classes/back-end-communication/map-node';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { MapNodesRetrieverServiceModel } from 'src/app/shared/models/map-node-retriever-service-model';

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

  constructor(store: Store, mapNodesRetriever: MapNodesRetrieverServiceModel) {
    store.select(DeliveryState.getDeliveries).subscribe((val) => {
      this._deliveries = val;
      this._currNode = this.findCurrentDeliveryIndex();

      mapNodesRetriever.getMapNodes().then((nodes) => {
        this._nodes = nodes;
        this._markersChanged.next();
      });
    });

    setInterval(() => {
      this.initRoute();
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

  public async initRoute() {
    let waypoints: LatLng[] = await this.getWaypoints(this._mode);
    this._controls.setWaypoints(waypoints);
  }

  public getCurrentPrevNextDeliveries(): Delivery[] {
    let retArr: Delivery[];

    if (this._currNode != null) {
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
              this._deliveries[node.index].state === DeliveryStates.IN_CAR ||
              this._deliveries[node.index].state ===
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
        val.state === DeliveryStates.REQUESTED_PICKUP ||
        val.state === DeliveryStates.IN_CAR
      );
    });
    return delivery != null ? delivery.position : null;
  }

  private findNextDeliveryIndex(): number {
    const temp = this._deliveries.find((val) => {
      // debugger;
      return (
        (val.state === DeliveryStates.IN_CAR ||
          val.state === DeliveryStates.REQUESTED_PICKUP) &&
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

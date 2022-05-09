import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Store } from '@ngxs/store';
import { LatLng, Routing } from 'leaflet';
import { Subject } from 'rxjs';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { MapNode } from 'src/app/shared/classes/back-end-communication/map-node';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { MapNodesRetrieverServiceModel } from 'src/app/shared/models/map-node-retriever-service-model';
import { DeliveryState } from '../../state/deliveries/deliveries.state';

@Injectable({
  providedIn: 'root',
})
export class MapRoutingManagerService {
  private _markersChanged: Subject<void> = new Subject<void>();

  private _controls: Routing.Control;

  private _deliveries: Delivery[];
  private _nodes: MapNode[];
  private _currNode: number = 0;

  constructor(store: Store, mapNodesRetriever: MapNodesRetrieverServiceModel) {
    store.select(DeliveryState.getDeliveries).subscribe((val) => {
      this._deliveries = val;
      this._currNode = this.findCurrentDeliveryIndex();

      mapNodesRetriever.getMapNodes().then((nodes) => {
        this._nodes = nodes;
        this._markersChanged.next();
      });
    });
  }

  public async getCurrentPosition(): Promise<LatLng> {
    let posOp: PositionOptions = { enableHighAccuracy: true };
    let pos = await Geolocation.getCurrentPosition(posOp);

    return new LatLng(pos.coords.latitude, pos.coords.longitude);
  }

  public async insertCurrentPosition(waypoints: LatLng[]): Promise<LatLng[]> {
    const currPos = await this.getCurrentPosition();

    return [
      ...waypoints.slice(0, this._currNode),
      currPos,
      ...waypoints.slice(this._currNode),
    ];
  }

  public async initRoute() {
    let waypoints: LatLng[] = this._nodes.map((node) => {
      return new LatLng(node.latitude, node.longitude);
    });

    if (this._currNode != null) {
      waypoints = await this.insertCurrentPosition(waypoints);
    }
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

  private findCurrentDeliveryIndex(): number {
    const delivery = this._deliveries.find((val) => {
      return (
        val.state === DeliveryStates.REQUESTED_PICKUP ||
        val.state === DeliveryStates.IN_CAR
      );
    });
    return delivery != null ? delivery.index : null;
  }

  private findNextDeliveryIndex(): number {
    const temp = this._deliveries.find((val) => {
      // debugger;
      return (
        (val.state === DeliveryStates.IN_CAR ||
          val.state === DeliveryStates.REQUESTED_PICKUP) &&
        val.index > this._currNode
      );
    });

    return temp != null ? temp.index : null;
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
}

export enum RoutingMode {
  NARROW,
  ALL_NODES,
}

import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { LatLng, Routing } from 'leaflet';
import { Subject } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { MapNode } from 'src/app/shared/classes/back-end-communication/map-node';
import { NodeDeliveryMapping } from 'src/app/shared/classes/map-routing/node-delivery-mapping';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { MapNodesRetrieverServiceModel } from 'src/app/shared/models/map-node-retriever-service-model';
import { DeliveryState } from '../../state/deliveries/deliveries.state';
import { MapNodeDeliveryMapperService } from './map-node-delivery-mapper.service';

@Injectable({
  providedIn: 'root',
})
export class MapRoutingManagerService {
  private _mapping: NodeDeliveryMapping;
  private _markersChanged: Subject<void> = new Subject<void>();

  private _controls: Routing.Control;

  private _deliveries: Delivery[];
  private _nodes: MapNode[];
  private _currNode: number = 0;

  constructor(store: Store, mapNodesRetriever: MapNodesRetrieverServiceModel) {
    store.select(DeliveryState.getDeliveries).subscribe((val) => {
      // debugger;
      this._deliveries = val;
      mapNodesRetriever.getMapNodes().then((nodes) => {
        // debugger;
        this._nodes = nodes;
        this.initRoute();
        this._markersChanged.next();
      });

      this._currNode = this.findCurrentDeliveryIndex();
      // debugger;
    });
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

  public initRoute() {
    // const pairs = this._mapping.getAllPairs();
    // const waypoints: LatLng[] = pairs.map((pair) => {
    //   return new LatLng(pair[1].latitude, pair[1].longitude);
    // });
    // this._controls.setWaypoints(waypoints);
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
}

export enum RoutingMode {
  NARROW,
  ALL_NODES,
}

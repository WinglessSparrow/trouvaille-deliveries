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
      this._deliveries = val;
      mapNodesRetriever.getMapNodes().then((nodes) => {
        this._nodes = nodes;
        this.initRoute();
        this._markersChanged.next();
      });
    });

    this._currNode = this.findCurrentDeliveryIndex();
  }

  private findCurrentDeliveryIndex(): number {
    debugger;

    return this._deliveries.find((val) => {
      return (
        val.state === (DeliveryStates.REQUESTED_PICKUP || DeliveryStates.IN_CAR)
      );
    }).index;
  }

  public initRoute() {
    // const pairs = this._mapping.getAllPairs();
    // const waypoints: LatLng[] = pairs.map((pair) => {
    //   return new LatLng(pair[1].latitude, pair[1].longitude);
    // });
    // this._controls.setWaypoints(waypoints);
  }

  public getCurrentPrevNextDelivery(): Delivery[] {
    // return this._mapping
    //   .getAllDeliveries()
    //FIXME search next node to DELIVER or PICKUP not just any next node
    //FIXME account if there is it's the last or smth.
    debugger;
    return this._deliveries.slice(this._currNode - 2, this.findIdxNext());
  }

  private findIdxNext(): number {
    return this._deliveries.slice(this._currNode).find((val) => {
      return (
        val.state === (DeliveryStates.REQUESTED_PICKUP || DeliveryStates.IN_CAR)
      );
    }).index;
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

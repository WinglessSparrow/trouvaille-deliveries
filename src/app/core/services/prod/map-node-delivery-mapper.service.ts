import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, ReplaySubject } from 'rxjs';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { NodeDeliveryMapping } from 'src/app/shared/classes/map-routing/node-delivery-mapping';
import { MapNodesRetrieverServiceModel } from 'src/app/shared/models/map-node-retriever-service-model';
import { DeliveryState } from '../../state/deliveries/deliveries.state';

@Injectable({
  providedIn: 'root',
})
export class MapNodeDeliveryMapperService {
  @Select(DeliveryState.getDeliveries) _deliveries$: Observable<Delivery[]>;
  private _mapping: ReplaySubject<NodeDeliveryMapping> =
    new ReplaySubject<NodeDeliveryMapping>(1);

  constructor(
    private mapNodesRetriever: MapNodesRetrieverServiceModel,
    store: Store
  ) {
    store
      .select(DeliveryState.getDeliveries)
      .subscribe((val) => this.mapNodesToDeliveries(val));
  }

  private mapNodesToDeliveries(deliveries: Delivery[]) {
    let mapping = new NodeDeliveryMapping();

    this.mapNodesRetriever.getMapNodes().then((nodes) => {
      // debugger;
      deliveries.forEach((delivery) => {
        // debugger;
        const node = nodes.find((node) => node.index == delivery.index);
        mapping.add([delivery, node]);
      });
    });

    this._mapping.next(mapping);
  }

  public get mapping(): Observable<NodeDeliveryMapping> {
    return this._mapping.asObservable();
  }
}

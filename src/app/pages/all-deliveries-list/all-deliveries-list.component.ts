import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { InitDeliveriesState } from 'src/app/core/state/deliveries/deliveries.action';
import { DeliveryState } from 'src/app/core/state/deliveries/deliveries.state';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { PreviewModel } from 'src/app/shared/classes/preview-model';
import { PackageStates } from 'src/app/shared/models/package-states';

@Component({
  selector: 'all-deliveries-list',
  templateUrl: './all-deliveries-list.component.html',
  styleUrls: ['./all-deliveries-list.component.scss'],
})
export class AllDeliveriesListComponent implements OnInit {
  //TODO make up some way to notify the user in case a new delivery is coming in

  @Select(DeliveryState.getDeliveries) deliveries$: Observable<Delivery[]>;

  constructor(private store: Store) {}

  ngOnInit() {}
}

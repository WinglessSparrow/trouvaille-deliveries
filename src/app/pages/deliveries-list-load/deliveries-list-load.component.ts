import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { DeliveryState } from 'src/app/core/state/deliveries/deliveries.state';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';

@Component({
  selector: 'deliveries-list-load',
  templateUrl: './deliveries-list-load.component.html',
  styleUrls: ['./deliveries-list-load.component.scss'],
})
export class DeliveriesListLoadComponent implements OnInit {
  @Select(DeliveryState.getDeliveriesToLoad) deliveries$: Observable<
    Delivery[]
  >;

  constructor() {}

  ngOnInit() {}
}

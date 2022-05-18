import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { RouteDataState } from 'src/app/core/store/route-data/route-data.state';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';

@Component({
  selector: 'deliveries-list-load',
  templateUrl: './deliveries-list-load.component.html',
  styleUrls: ['./deliveries-list-load.component.scss'],
})
export class DeliveriesListLoadComponent implements OnInit {
  @Select(RouteDataState.getDeliveriesToLoad) deliveries$: Observable<
    Delivery[]
  >;

  constructor() {}

  ngOnInit() {}
}

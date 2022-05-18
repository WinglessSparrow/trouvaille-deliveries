import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RouteDataState } from 'src/app/core/store/route-data/route-data.state';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';

@Component({
  selector: 'all-deliveries-list',
  templateUrl: './all-deliveries-list.component.html',
  styleUrls: ['./all-deliveries-list.component.scss'],
})
export class AllDeliveriesListComponent implements OnInit {
  //TODO make up some way to notify the user in case a new delivery is coming in

  @Select(RouteDataState.getDeliveries) deliveries$: Observable<Delivery[]>;

  constructor() {}

  ngOnInit() {}
}

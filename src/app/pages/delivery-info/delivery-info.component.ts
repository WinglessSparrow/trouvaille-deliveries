import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { DeliveryInfoService } from 'src/app/core/services/prod/delivery-info.service';
import { HeaderService } from 'src/app/core/services/prod/header.service';
import { DeliveryState } from 'src/app/core/state/deliveries/deliveries.state';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';

@Component({
  selector: 'delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
})
export class DeliveryInfoComponent implements OnInit, OnDestroy {
  deliverySubscription: Subscription;
  delivery: Delivery;

  constructor(
    private header: HeaderService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.header.menuOff();

    const id = this.route.snapshot.paramMap.get('id');

    const delivery$ = this.store.select(DeliveryState.getDelivery(id));
    this.deliverySubscription = delivery$.subscribe((val) => {
      this.delivery = val;
    });
  }

  ngOnDestroy() {
    this.deliverySubscription.unsubscribe();
    this.header.menuOn();
  }
}

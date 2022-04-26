import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/core/services/prod/header.service';
import { DeliveryState } from 'src/app/core/state/deliveries/deliveries.state';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { LabelLength } from 'src/app/shared/components/trou-label/trou-label.component';
import { PackageStates } from 'src/app/shared/models/package-states';

@Component({
  selector: 'delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
})
export class DeliveryInfoComponent implements OnInit, OnDestroy {
  deliverySubscription: Subscription;
  delivery: Delivery;

  public labelLength = LabelLength;

  constructor(
    private header: HeaderService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.header.menuOff();

    // const id = this.route.snapshot.paramMap.get('id');

    // const delivery$ = this.store.select(DeliveryState.getDelivery(id));
    // this.deliverySubscription = delivery$.subscribe((val) => {
    //   this.delivery = val;
    // });

    this.delivery = new Delivery({
      index: 11,
      id: '0-21831kod092i1-d',
      recipient: {
        name: 'Huila Morzovyi',
        address: 'ottenhofener Str 10',
      },
      state: PackageStates.AddressNotIdentifiable,
    });
  }

  ngOnDestroy() {
    this.deliverySubscription.unsubscribe();
    this.header.menuOn();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/core/services/prod/header.service';
import { ChangeDeliveryState } from 'src/app/core/state/deliveries/deliveries.action';
import { DeliveryState } from 'src/app/core/state/deliveries/deliveries.state';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { Customer } from 'src/app/shared/classes/back-end-communication/customer';
import { ChangeStatePayload } from 'src/app/shared/classes/change-state-payload';
import { LabelLength } from 'src/app/shared/components/trou-label/trou-label.component';
import { PackageStates } from 'src/app/shared/models/package-states';

@Component({
  selector: 'delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
})
export class DeliveryInfoComponent implements OnInit, OnDestroy {
  public labelLength = LabelLength;
  public delivery: Delivery;

  private deliverySubscription: Subscription;
  private id: string;

  constructor(
    private header: HeaderService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.header.menuOff();

    this.id = this.route.snapshot.paramMap.get('id');

    this.renewState();
  }

  renewState() {
    const delivery$ = this.store.select(DeliveryState.getDelivery(this.id));
    this.deliverySubscription = delivery$.subscribe((val) => {
      this.delivery = val;
    });
  }

  stateChanged(event: PackageStates) {
    console.log(event);

    this.store.dispatch(
      new ChangeDeliveryState(new ChangeStatePayload(event, this.delivery))
    );
  }

  ngOnDestroy() {
    this.deliverySubscription.unsubscribe();
    this.header.menuOn();
  }
}

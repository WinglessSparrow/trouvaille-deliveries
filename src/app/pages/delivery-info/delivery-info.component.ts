import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/core/services/prod/component-specific/header.service';
import { ChangeDeliveryState } from 'src/app/core/store/route-data/route-data.action';
import { RouteDataState } from 'src/app/core/store/route-data/route-data.state';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';
import { LabelLength } from 'src/app/shared/components/trou-label/trou-label.component';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';

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
    const delivery$ = this.store.select(RouteDataState.getDelivery(this.id));
    this.deliverySubscription = delivery$.subscribe((val) => {
      this.delivery = val;
    });
  }

  stateChanged(event: DeliveryStates) {
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

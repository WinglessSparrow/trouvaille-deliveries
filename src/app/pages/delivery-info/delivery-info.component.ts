import {
  Component, OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Store
} from '@ngxs/store';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/core/services/prod/component-specific/header.service';
import { RouteDataState } from 'src/app/core/store/route-data/route-data.state';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { LabelLength } from 'src/app/shared/components/trou-label/trou-label.component';

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

    this.initState();
  }

  initState() {
    this.deliverySubscription = this.store
      .select(RouteDataState.getDelivery(this.id))
      .subscribe((val) => {
        this.delivery = val;
      });
  }

  ngOnDestroy() {
    this.deliverySubscription.unsubscribe();
    this.header.menuOn();
  }
}

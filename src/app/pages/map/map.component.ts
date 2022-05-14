import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeliveryInfoService } from 'src/app/core/services/prod/delivery-info.service';
import {
  MapRoutingManagerService,
  RoutingMode,
} from 'src/app/core/services/prod/map-routing-manager.service';
import { NavigationService } from 'src/app/core/services/prod/navigation.service';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { Pages } from 'src/app/shared/classes/pages';
import { ButtonType } from 'src/app/shared/components/trou-btn/trou-btn.component';
import {
  LabelLength,
  LabelTextSize,
  LabelType,
} from 'src/app/shared/components/trou-label/trou-label.component';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  currDelivery: Delivery = null;
  nextDelivery: Delivery = null;

  labelTypes = LabelType;
  textSizes = LabelTextSize;
  btnType = ButtonType;
  labelLength = LabelLength;
  routingModes = Object.values(RoutingMode);

  subscription: Subscription;

  selectedMode: RoutingMode = RoutingMode.ALL_NODES;

  constructor(
    private navigation: NavigationService,
    private routingManager: MapRoutingManagerService,
    private deliveryRouter: DeliveryInfoService
  ) {}

  ngOnInit() {
    this.setAddress();
    this.subscription = this.routingManager.markerChanges.subscribe(() =>
      this.setAddress()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onChangeSelect() {
    this.routingManager.mode = this.selectedMode;
    await this.routingManager.initRoute();
  }

  setAddress() {
    const deliveries = this.routingManager.getCurrentPrevNextDeliveries();
    this.currDelivery = deliveries[1];
    this.nextDelivery = deliveries[2];
  }

  goToNextDelivery() {
    this.deliveryRouter.routeToDelivery(this.currDelivery.idDelivery);
  }
  goToCurrentDelivery() {
    this.deliveryRouter.routeToDelivery(this.nextDelivery.idDelivery);
  }

  goToDeliveryScan() {
    this.navigation.navigate(Pages.ScanDelivery);
  }
}

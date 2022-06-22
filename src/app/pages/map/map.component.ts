import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeliveryInfoService } from 'src/app/core/services/prod/component-specific/delivery-info.service';
import { NavigationService } from 'src/app/core/services/prod/component-specific/navigation.service';
import {
  MapRoutingManagerService,
  RoutingMode,
} from 'src/app/core/services/prod/utility/map-routing-manager.service';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { ButtonType } from 'src/app/shared/components/trou-btn/trou-btn.component';
import {
  LabelLength,
  LabelTextSize,
  LabelType,
} from 'src/app/shared/components/trou-label/trou-label.component';
import { Pages } from 'src/app/shared/interfaces/enums/pages';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  currDelivery: Delivery = null;
  nextDelivery: Delivery = null;

  labelTypes = LabelType;
  textSizes = LabelTextSize;
  btnType = ButtonType;
  labelLength = LabelLength;
  routingModes = Object.values(RoutingMode);

  routeManagerSub: Subscription;

  constructor(
    private navigation: NavigationService,
    private routingManager: MapRoutingManagerService,
    private deliveryRouter: DeliveryInfoService
  ) {
    this.routeManagerSub = this.routingManager.markerChanges.subscribe(() =>
      this.setAddress()
    );
  }

  async ngOnInit() {
    this.setAddress();
  }

  setAddress() {
    const deliveries = this.routingManager.getCurrentPrevNextDeliveries();
    this.currDelivery = deliveries[1];
    this.nextDelivery = deliveries[2];
  }

  goToCurrentDelivery() {
    this.deliveryRouter.routeToDelivery(this.currDelivery.iddelivery);
  }

  goToDeliveryScan() {
    this.navigation.navigate(Pages.ScanDelivery);
  }
}

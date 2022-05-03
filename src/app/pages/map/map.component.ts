import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MapRoutingManagerService } from 'src/app/core/services/prod/map-routing-manager.service';
import { NavigationService } from 'src/app/core/services/prod/navigation.service';
import { Pages } from 'src/app/shared/classes/pages';
import { ButtonType } from 'src/app/shared/components/trou-btn/trou-btn.component';
import {
  LabelTextSize,
  LabelType,
} from 'src/app/shared/components/trou-label/trou-label.component';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  currAddress: string = '';
  nextAddress: string = '';

  labelTypes = LabelType;
  textSizes = LabelTextSize;
  btnType = ButtonType;

  subscription: Subscription;

  constructor(
    private navigation: NavigationService,
    private routingManager: MapRoutingManagerService
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

  setAddress() {
    const deliveries = this.routingManager.getCurrentPrevNextDelivery();
    this.currAddress = deliveries[1].dstAddress.address;
    this.nextAddress = deliveries[2].dstAddress.address;
  }

  goToNextDelivery() {
    //TODO Implement goToNextDelivery
  }
  goToCurrentDelivery() {
    //TODO Implement goToCurrentDelivery
  }
  goToDeliveryScan() {
    this.navigation.navigate(Pages.ScanDelivery);
  }
}

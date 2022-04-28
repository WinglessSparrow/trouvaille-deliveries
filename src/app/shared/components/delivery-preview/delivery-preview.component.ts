import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryInfoService } from 'src/app/core/services/prod/delivery-info.service';
import { Delivery } from '../../classes/back-end-communication/delivery';

import { DeliveryStateParsingHelper } from '../../classes/delivery-state-parsing-helper ';

@Component({
  selector: 'delivery-preview',
  templateUrl: './delivery-preview.component.html',
  styleUrls: ['./delivery-preview.component.scss'],
})
export class DeliveryPreviewComponent implements OnInit {
  @HostBinding('style.--ball-color') color: string = 'blue';

  @Input() delivery: Delivery;

  constructor(private deliveryService: DeliveryInfoService) {}

  ngOnInit() {
    this.color = DeliveryStateParsingHelper.getColorFromState(this.delivery.state);
  }

  goToDelivery() {
    this.deliveryService.routeToDelivery(this.delivery.idDelivery);
  }
}

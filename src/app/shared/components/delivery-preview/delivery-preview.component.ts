import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DeliveryInfoService } from 'src/app/core/services/prod/component-specific/delivery-info.service';
import { Delivery } from '../../classes/models/back-end-communication/delivery';
import { DeliveryStateParsingHelper } from '../../classes/utility/delivery-state-parsing-helper ';


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
    this.color = DeliveryStateParsingHelper.getColorFromState(this.delivery.currentState);
  }

  goToDelivery() {
    this.deliveryService.routeToDelivery(this.delivery.iddelivery);
  }
}

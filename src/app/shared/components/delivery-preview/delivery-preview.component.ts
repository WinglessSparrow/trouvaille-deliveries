import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Delivery } from '../../classes/back-end-communication/delivery';

import { PreviewModel } from '../../classes/preview-model';

@Component({
  selector: 'delivery-preview',
  templateUrl: './delivery-preview.component.html',
  styleUrls: ['./delivery-preview.component.scss'],
})
export class DeliveryPreviewComponent implements OnInit {
  @HostBinding('style.--ball-color') color: string = 'blue';

  @Input() data: Delivery;

  constructor() {}

  ngOnInit() {
    this.color = PreviewModel.getColorFromState(this.data.state);
  }
}

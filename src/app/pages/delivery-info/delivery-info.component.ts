import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/prod/header.service';

@Component({
  selector: 'delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
})
export class DeliveryInfoComponent implements OnInit, OnDestroy {
  constructor(private header: HeaderService) {}

  ngOnInit() {
    this.header.menuOff();
  }
  ngOnDestroy() {
    this.header.menuOn();
  }
}

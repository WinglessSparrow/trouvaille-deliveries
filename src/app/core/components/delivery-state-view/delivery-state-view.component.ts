import { Component, OnInit } from '@angular/core';
import { PackageStates } from 'src/app/shared/models/package-states';

@Component({
  selector: 'delivery-state-view',
  templateUrl: './delivery-state-view.component.html',
  styleUrls: ['./delivery-state-view.component.scss'],
})
export class DeliveryStateViewComponent implements OnInit {
  currState: PackageStates = PackageStates.Delivered;
  states = Object.values(PackageStates);

  constructor() {}

  ngOnInit() {}
}

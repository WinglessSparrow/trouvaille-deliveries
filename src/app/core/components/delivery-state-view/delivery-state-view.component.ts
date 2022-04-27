import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Delivery } from 'src/app/shared/classes/back-end-communication/delivery';
import { PackageStates } from 'src/app/shared/models/package-states';

@Component({
  selector: 'delivery-state-view',
  templateUrl: './delivery-state-view.component.html',
  styleUrls: ['./delivery-state-view.component.scss'],
})
export class DeliveryStateViewComponent implements OnInit {
  @Input() currState: PackageStates;
  @Output() stateChanged: EventEmitter<PackageStates> =
    new EventEmitter<PackageStates>();
  states = Object.values(PackageStates);

  constructor() {}

  ngOnInit() {}

  public onNewState(event: PackageStates) {
    this.stateChanged.emit(event);
  }
}

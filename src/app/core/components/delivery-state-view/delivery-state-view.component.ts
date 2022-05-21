import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { DeliveryStateMachineService } from '../../services/prod/utility/delivery-state-machine.service';

@Component({
  selector: 'delivery-state-view',
  templateUrl: './delivery-state-view.component.html',
  styleUrls: ['./delivery-state-view.component.scss'],
  providers: [DeliveryStateMachineService],
})
export class DeliveryStateViewComponent implements OnInit {
  @Input() currDelivery: Delivery;
  @Output() stateChanged: EventEmitter<Delivery> =
    new EventEmitter<Delivery>();
  states = Object.values(DeliveryStates);

  constructor(public stateMachine: DeliveryStateMachineService) {}

  ngOnInit() {
    this.stateMachine.nextState(this.currDelivery.currentState);
  }

  public onNewState(event: Delivery) {
    this.stateMachine.nextState(event.currentState);
    this.stateChanged.emit(event);
  }
}

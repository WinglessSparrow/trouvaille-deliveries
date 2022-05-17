import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { DeliveryStateMachineService } from '../../services/prod/utility/delivery-state-machine.service';

@Component({
  selector: 'delivery-state-view',
  templateUrl: './delivery-state-view.component.html',
  styleUrls: ['./delivery-state-view.component.scss'],
  providers: [DeliveryStateMachineService],
})
export class DeliveryStateViewComponent implements OnInit {
  @Input() currState: DeliveryStates;
  @Output() stateChanged: EventEmitter<DeliveryStates> =
    new EventEmitter<DeliveryStates>();
  states = Object.values(DeliveryStates);

  constructor(public stateMachine: DeliveryStateMachineService) {}

  ngOnInit() {
    this.stateMachine.nextState(this.currState);
  }

  public onNewState(event: DeliveryStates) {
    this.stateMachine.nextState(event);
    this.stateChanged.emit(event);
  }
}

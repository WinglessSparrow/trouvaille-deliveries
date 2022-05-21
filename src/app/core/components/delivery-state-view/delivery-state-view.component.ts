import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { DeliveryStateMachineService } from '../../services/prod/utility/delivery-state-machine.service';

@Component({
  selector: 'delivery-state-view',
  templateUrl: './delivery-state-view.component.html',
  styleUrls: ['./delivery-state-view.component.scss'],
  providers: [DeliveryStateMachineService],
})
export class DeliveryStateViewComponent implements OnInit, OnChanges {
  @Input() currDelivery: Delivery;
  @Output() stateChanged: EventEmitter<Delivery> = new EventEmitter<Delivery>();

  states = Object.values(DeliveryStates);
  form: FormGroup;

  constructor(
    public stateMachine: DeliveryStateMachineService,
    private fb: FormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if (this.form != null) {
      this.form.controls['deliveryState'].setValue(
        this.currDelivery.currentState
      );
    }
  }

  ngOnInit() {
    this.stateMachine.nextState(this.currDelivery.currentState);
    this.form = this.fb.group({
      deliveryState: [this.currDelivery.currentState],
    });

    this.form.valueChanges.subscribe((val) => {
      const f = val;
      debugger;
    });
  }

  public onNewState(event: Delivery) {
    this.stateMachine.nextState(event.currentState);
    this.stateChanged.emit(event);
  }
}

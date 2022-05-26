import {
  Component, Input, OnInit
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { DeliveryStateMachineService } from '../../services/prod/utility/delivery-state-machine.service';
import { ChangeDeliveryState } from '../../store/route-data/route-data.action';

@Component({
  selector: 'delivery-state-view',
  templateUrl: './delivery-state-view.component.html',
  styleUrls: ['./delivery-state-view.component.scss'],
  providers: [DeliveryStateMachineService],
})
export class DeliveryStateViewComponent implements OnInit {
  @Input() currDelivery: Delivery;

  states = Object.values(DeliveryStates);
  form: FormGroup;

  private isSameValue: boolean = false;

  constructor(
    public stateMachine: DeliveryStateMachineService,
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit() {
    this.stateMachine.nextState(this.currDelivery.currentState);
    this.form = this.fb.group({
      deliveryState: [this.currDelivery.currentState],
    });

    this.form.valueChanges.subscribe((val) => {
      //parsing to enum
      const nextDelState: DeliveryStates = val.deliveryState as DeliveryStates;
      //renew state machine
      this.stateMachine.nextState(nextDelState);

      //check for blank reset
      if (!this.isSameValue) {
        this.isSameValue = true;
        this.store
          .dispatch(
            new ChangeDeliveryState(
              new ChangeStatePayload(nextDelState, this.currDelivery)
            )
          )
          .subscribe(() => {
            this.form.controls['deliveryState'].setValue(
              this.currDelivery.currentState
            );
          });
      } else {
        this.isSameValue = false;
      }
    });
  }
}

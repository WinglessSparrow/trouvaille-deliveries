import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { never_used } from 'immer/dist/internal';
import { Subscription } from 'rxjs';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { Pages } from 'src/app/shared/interfaces/enums/pages';
import { ModalService } from '../../services/prod/component-specific/modal.service';
import { NavigationService } from '../../services/prod/component-specific/navigation.service';
import { DeliveryStateMachineService } from '../../services/prod/utility/delivery-state-machine.service';
import { ChangeDeliveryState } from '../../store/route-data/route-data.action';

@Component({
  selector: 'delivery-state-view',
  templateUrl: './delivery-state-view.component.html',
  styleUrls: ['./delivery-state-view.component.scss'],
  providers: [DeliveryStateMachineService],
})
export class DeliveryStateViewComponent implements OnInit, OnDestroy {
  @Input() currDelivery: Delivery;

  states = Object.values(DeliveryStates);
  form: FormGroup;

  private isSameValue: boolean = false;
  private formSub: Subscription;

  constructor(
    public stateMachine: DeliveryStateMachineService,
    private fb: FormBuilder,
    private store: Store,
    private modal: ModalService,
    private nav: NavigationService
  ) {}

  ngOnInit() {
    this.stateMachine.nextState(this.currDelivery.currentState);
    this.form = this.fb.group({
      deliveryState: [this.currDelivery.currentState],
    });

    this.formSub = this.form.valueChanges.subscribe((val) => {
      if (!this.isSameValue) {
        this.isSameValue = true;
        //parsing to enum
        const nextDelState: DeliveryStates =
          val.deliveryState as DeliveryStates;
        //renew state machine
        this.stateMachine.nextState(nextDelState);

        this.modal
          .openYesNoDialog(
            'State Change',
            `Change state from "${this.currDelivery.currentState}" to "${nextDelState}"?`
          )
          .subscribe((yes) => {
            if (yes) {
              this.renewDeliveryState(nextDelState);
              //new set is not set, so the next call is not blank
              this.isSameValue = false;

              //automatically return if coming from map
              if (this.nav.currSelected.route == Pages.Map) {
                this.nav.select(this.nav.currSelected);
                this.nav.navigateToSelected();
              }
            } else {
              //reset
              this.form.controls['deliveryState'].setValue(
                this.currDelivery.currentState
              );
              this.stateMachine.nextState(this.currDelivery.currentState);
            }
          });
      } else {
        this.isSameValue = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }

  renewDeliveryState(nextDelState: DeliveryStates) {
    this.store.dispatch(
      new ChangeDeliveryState(
        new ChangeStatePayload(nextDelState, this.currDelivery)
      )
    );
  }
}

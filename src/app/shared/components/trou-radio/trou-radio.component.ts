import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ModalService } from 'src/app/core/services/prod/component-specific/modal.service';
import { Delivery } from '../../classes/models/back-end-communication/delivery';
import { DeliveryStateParsingHelper } from '../../classes/utility/delivery-state-parsing-helper ';
import { DeliveryStates } from '../../interfaces/enums/delivery-states';

@Component({
  selector: 'trou-radio',
  templateUrl: './trou-radio.component.html',
  styleUrls: ['./trou-radio.component.scss'],
})
export class TrouRadioComponent implements OnInit, OnDestroy {
  @HostBinding('style.--ball-color') color: string = 'blue';

  @Input() parentForm: FormGroup;
  @Input() name: string;
  @Input() value: DeliveryStates;
  @Input() activeParameters: Observable<DeliveryStates[]> = new Observable<
    DeliveryStates[]
  >();
  @Input() model: Delivery;
  @Output() modelChange: EventEmitter<Delivery> =
    new EventEmitter<Delivery>();

  isChecked: boolean = false;

  isActive = true;
  subscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.color = DeliveryStateParsingHelper.getColorFromState(this.value);

    this.subscription = this.activeParameters.subscribe((val) => {
      this.isActive = val?.some((valIn) => {
        return valIn == this.name;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

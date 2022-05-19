import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DeliveryStateParsingHelper } from '../../classes/utility/delivery-state-parsing-helper ';
import { DeliveryStates } from '../../interfaces/enums/delivery-states';

@Component({
  selector: 'trou-radio',
  templateUrl: './trou-radio.component.html',
  styleUrls: ['./trou-radio.component.scss'],
})
export class TrouRadioComponent implements OnInit, OnDestroy {
  @HostBinding('style.--ball-color') color: string = 'blue';

  @Input() name: string;
  @Input() value: DeliveryStates;
  @Input() activeParameters: Observable<DeliveryStates[]> = new Observable<
    DeliveryStates[]
  >();
  @Input() model: DeliveryStates;
  @Output() modelChange: EventEmitter<DeliveryStates> =
    new EventEmitter<DeliveryStates>();

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

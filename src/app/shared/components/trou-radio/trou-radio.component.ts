import {
  Component, HostBinding,
  Input, OnDestroy,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  @Input() parentForm: FormGroup;
  @Input() name: string;
  @Input() value: DeliveryStates;
  @Input() activeParameters: Observable<DeliveryStates[]> = new Observable<
    DeliveryStates[]
  >();

  isChecked: boolean = false;

  isActive = true;
  activeParametersSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.color = DeliveryStateParsingHelper.getColorFromState(this.value);

    this.activeParametersSub = this.activeParameters.subscribe((val) => {
      this.isActive = val?.some((valIn) => {
        return valIn == this.name;
      });
    });
  }

  ngOnDestroy() {
    this.activeParametersSub.unsubscribe();
  }
}

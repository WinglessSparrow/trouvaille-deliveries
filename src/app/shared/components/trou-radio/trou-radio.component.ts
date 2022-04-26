import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PreviewModel } from '../../classes/preview-model';
import { PackageStates } from '../../models/package-states';

@Component({
  selector: 'trou-radio',
  templateUrl: './trou-radio.component.html',
  styleUrls: ['./trou-radio.component.scss'],
})
export class TrouRadioComponent implements OnInit {
  @HostBinding('style.--ball-color') color: string = 'blue';

  @Input() name: string;
  @Input() value: PackageStates;
  @Input() isActive: boolean = true;
  @Input() model: PackageStates;
  @Output() modelChange: EventEmitter<PackageStates> =
    new EventEmitter<PackageStates>();

  constructor() {}

  ngOnInit() {
    this.color = PreviewModel.getColorFromState(this.value);
  }
}

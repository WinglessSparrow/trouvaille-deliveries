import { Component, Input, OnInit } from '@angular/core';
import {
  LabelLength,
  LabelTextSize,
  LabelType,
} from '../../../shared/components/trou-label/trou-label.component';

@Component({
  selector: 'home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.scss'],
})
export class HomeSummaryComponent implements OnInit {
  @Input() data: Array<[string, string]>;

  public length = LabelLength;
  public labelType = LabelType;
  public labelTextSize = LabelTextSize;

  constructor() {}

  ngOnInit() {}
}

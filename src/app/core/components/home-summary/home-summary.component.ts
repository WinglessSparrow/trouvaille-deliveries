import { Component, Input, OnInit } from '@angular/core';
import { LabelLength, LabelType } from '../trou-label/trou-label.component';

@Component({
  selector: 'home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.scss'],
})
export class HomeSummaryComponent implements OnInit {
  @Input() data: Array<[string, string]>;

  public length = LabelLength;
  public labelType = LabelType;

  constructor() {}

  ngOnInit() {}
}

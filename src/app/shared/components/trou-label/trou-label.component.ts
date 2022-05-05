import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum LabelLength {
  half = 'half',
  default = 'threeThirds',
  full = 'full',
}

export enum Position {
  middle = 'middle',
  left = 'left',
  right = 'right',
}

export enum LabelType {
  default = '',
  centered = 'centered',
  rightHand = 'right-hand',
  numeric = 'numeric',
  link = 'link',
}

export enum LabelTextSize {
  big = 'big',
  default = '',
  medium = 'medium',
  small = 'small',
}

@Component({
  selector: 'trou-label',
  templateUrl: './trou-label.component.html',
  styleUrls: ['./trou-label.component.scss'],
})
export class TrouLabelComponent implements OnInit {
  @Input() text: string = '';
  @Input() secondText: string = '';
  @Input() position = Position.left;
  @Input() type: LabelType = LabelType.default;
  @Input() length: LabelLength = LabelLength.default;
  @Input() textSize: LabelTextSize = LabelTextSize.default;
  @Input() disabled: boolean = false;

  @Output() btnClick: EventEmitter<any> = new EventEmitter<any>();

  positions = Position;
  labelType = LabelType;
  labelLength = LabelLength;

  constructor() {}

  ngOnInit() {}
}

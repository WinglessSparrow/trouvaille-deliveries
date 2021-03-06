import { Component, Input, OnInit } from '@angular/core';

export enum ButtonType {
  warning = 'warning',
  default = 'default',
  contrast = 'contrast',
}

@Component({
  selector: 'trou-btn',
  templateUrl: './trou-btn.component.html',
  styleUrls: ['./trou-btn.component.scss'],
})
export class TrouBtnComponent implements OnInit {
  @Input() type: ButtonType = ButtonType.default;
  @Input() disabled: boolean = false;
  @Input() isSubmit: boolean = false;

  constructor() {}

  ngOnInit() {}
}

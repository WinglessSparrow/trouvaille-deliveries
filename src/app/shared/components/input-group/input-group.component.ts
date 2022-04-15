import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputGroupComponent implements OnInit {
  @Input() name: string;
  @Input() type: string = 'text';
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}

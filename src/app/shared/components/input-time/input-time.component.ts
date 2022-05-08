import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss'],
})
export class InputTimeComponent implements OnInit {
  @Input() inputName: string;
  @Input() parentForm: FormGroup;

  constructor() {}

  ngOnInit() {}
}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-time-interval',
  templateUrl: './input-time-interval.component.html',
  styleUrls: ['./input-time-interval.component.scss'],
})
export class InputTimeIntervalComponent implements OnInit {
  @Input() inputName: string;
  @Input() title: string = 'title';
  @Input() parentForm: FormGroup;

  nameFrom: string;
  nameTo: string;

  constructor() {}

  ngOnInit() {
    this.nameFrom = `${this.inputName}From` 
    this.nameTo = `${this.inputName}To` 
  }
}

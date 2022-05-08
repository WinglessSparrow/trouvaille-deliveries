import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss'],
})
export class InputTimeComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}
}

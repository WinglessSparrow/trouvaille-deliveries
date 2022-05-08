import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-time-interval',
  templateUrl: './input-time-interval.component.html',
  styleUrls: ['./input-time-interval.component.scss'],
})
export class InputTimeIntervalComponent implements OnInit {
  @Input() name: string;
  @Input() title: string = 'title';

  constructor() {}

  ngOnInit() {}
}

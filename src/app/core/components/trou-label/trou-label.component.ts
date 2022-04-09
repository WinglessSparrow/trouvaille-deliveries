import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trou-label',
  templateUrl: './trou-label.component.html',
  styleUrls: ['./trou-label.component.scss'],
})
export class TrouLabelComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit() {}
}

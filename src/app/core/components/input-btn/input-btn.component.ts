import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-btn',
  templateUrl: './input-btn.component.html',
  styleUrls: ['./input-btn.component.scss'],
})
export class InputBtnComponent implements OnInit {
  @Input() name: string;
  @Input() type: string = 'text';
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}

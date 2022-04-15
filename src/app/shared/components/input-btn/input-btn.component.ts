import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'input-btn',
  templateUrl: './input-btn.component.html',
  styleUrls: ['./input-btn.component.scss'],
})
export class InputBtnComponent implements OnInit {
  @Input() name: string;
  @Input() type: string = 'text';
  @Input() label: string;

  @Output() clickBtn: EventEmitter<string> = new EventEmitter<string>();
  value: string = '';

  constructor() {}

  clickInvoke() {
    this.clickBtn.emit(this.value);
  }

  ngOnInit() {}
}

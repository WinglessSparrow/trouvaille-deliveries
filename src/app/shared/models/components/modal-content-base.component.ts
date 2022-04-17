import { Component, OnInit } from '@angular/core';
import { ModalContext } from '../data-models/modal-context';

@Component({
  selector: 'modal-content-base',
  template: '',
})
export abstract class ModalContentBase implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  abstract setContext(context: ModalContext);
}

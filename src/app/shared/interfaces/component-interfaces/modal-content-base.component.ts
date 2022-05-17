import { Component, OnInit } from '@angular/core';
import { ModalContext } from '../abstract-classes/modal-context';

@Component({
  selector: 'modal-content-base',
  template: '',
})
export abstract class ModalContentBase implements OnInit {
  public context: ModalContext;

  constructor() {}

  ngOnInit(): void {}

  abstract setContext(context: ModalContext);
}

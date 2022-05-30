import { Component, OnInit } from '@angular/core';
import { LoadingContext } from '../../../classes/models/modal-contexts/loading-context';
import { ModalContext } from '../../../interfaces/abstract-classes/modal-context';
import { ModalContentBase } from '../../../interfaces/component-interfaces/modal-content-base.component';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent extends ModalContentBase implements OnInit {
  header: string;

  constructor() {
    super();
  }

  ngOnInit() {}

  setContext(context: ModalContext) {
    if (context instanceof LoadingContext) {
      this.header = context.name;
    }
  }
}

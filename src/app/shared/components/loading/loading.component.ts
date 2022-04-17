import { Component, OnInit } from '@angular/core';
import { LoadingContext } from '../../classes/loading-context';
import { ModalContentBase } from '../../models/components/modal-content-base.component';
import { ModalContext } from '../../models/data-models/modal-context';

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

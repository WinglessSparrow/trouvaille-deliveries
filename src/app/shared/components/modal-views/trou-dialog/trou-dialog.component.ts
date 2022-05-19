import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/prod/component-specific/modal.service';
import { DialogContext } from 'src/app/shared/classes/models/modal-contexts/dialog-context';
import { ModalContext } from 'src/app/shared/interfaces/abstract-classes/modal-context';
import { ModalContentBase } from 'src/app/shared/interfaces/component-interfaces/modal-content-base.component';

@Component({
  selector: 'trou-dialog',
  templateUrl: './trou-dialog.component.html',
  styleUrls: ['./trou-dialog.component.scss'],
})
export class TrouDialogComponent extends ModalContentBase implements OnInit {
  public context: DialogContext;

  constructor(private modal: ModalService) {
    super();
  }

  ngOnInit() {}

  setContext(context: ModalContext) {
    if (context instanceof DialogContext) {
      this.context = context;
    }
  }

  opt1() {
    this.context.opt1Callback();
    this.modal.close();
  }

  opt2() {
    this.context.opt2Callback();
    this.modal.close();
  }
}

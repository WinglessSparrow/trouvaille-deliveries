import { Component, OnInit } from '@angular/core';
import {
    ErrorContext,
    ErrorType
} from '../../../classes/models/modal-contexts/error-context';
import { ModalContext } from '../../../interfaces/abstract-classes/modal-context';
import { ModalContentBase } from '../../../interfaces/component-interfaces/modal-content-base.component';
import { ButtonType } from '../../trou-btn/trou-btn.component';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent extends ModalContentBase implements OnInit {
  public context: ErrorContext;

  btnTypes = ButtonType;
  errorTypes = ErrorType;

  constructor() {
    super();
  }

  setContext(context: ModalContext) {
    if (context instanceof ErrorContext) {
      this.context = context;
    }
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import {
  ErrorContext,
  ErrorType
} from '../../../classes/modal-contexts/error-context';
import { ModalContentBase } from '../../../models/components/modal-content-base.component';
import { ModalContext } from '../../../models/data-models/modal-context';
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
    } else {
      //TODO THROW an Error with correct contex
      //carefull here, because this might lead to a circular error throwing
    }
  }

  ngOnInit() {}
}

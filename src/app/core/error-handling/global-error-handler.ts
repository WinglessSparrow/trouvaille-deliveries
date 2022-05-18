import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorContext } from 'src/app/shared/classes/models/modal-contexts/error-context';
import { HttpModalContext } from 'src/app/shared/classes/models/modal-contexts/http-context';
import { ErrorComponent } from 'src/app/shared/components/modal-views/error/error.component';
import { HttpComponent } from 'src/app/shared/components/modal-views/http/http.component';
import { ModalService } from '../services/prod/component-specific/modal.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private modalService: ModalService) {}

  handleError(error: any): void {
    // debugger;
    var context: ErrorContext;
    // if ('rejection' in error) {
    // error = error.rejection;
    if (error instanceof HttpErrorResponse) {
      // debugger;
      this.modalService.openModal(
        HttpComponent,
        HttpModalContext.fromHttpError(error)
      );
      return;
    }
    context = new ErrorContext(
      'Client Side Error',
      error?.message,
      'got ya',
      () => {
        this.modalService.close();
      }
    );

    this.modalService.openModal(ErrorComponent, context);
    // } else {
    // this.modalService.openBugModal(error?.stack, error?.message);
    // }

    console.error('Error from global error handler', error);
  }
}

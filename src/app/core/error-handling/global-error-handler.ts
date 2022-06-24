import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorContext } from 'src/app/shared/classes/models/modal-contexts/error-context';
import { HttpModalContext } from 'src/app/shared/classes/models/modal-contexts/http-context';
import { ErrorComponent } from 'src/app/shared/components/modal-views/error/error.component';
import { HttpComponent } from 'src/app/shared/components/modal-views/http/http.component';
import { IGlobalResponseModel } from 'src/app/shared/interfaces/back-end-communication/i-global-response-model';
import { ModalService } from '../services/prod/component-specific/modal.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private modalService: ModalService) {}

  handleHttpError(response: IGlobalResponseModel<any>, status: number) {
    setTimeout(() => {
      this.modalService.openModal(
        HttpComponent,
        new HttpModalContext(
          status,
          response.error.message,
          response.error.path
        )
      );
    }, 200);
  }

  handleError(error: any): void {
    var context: ErrorContext;
    if (error instanceof HttpErrorResponse) {
      console.error('Error from global error handler', error);
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

    console.error('Error from global error handler', error);
  }
}

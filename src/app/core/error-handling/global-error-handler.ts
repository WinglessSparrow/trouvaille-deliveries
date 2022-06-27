import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ErrorContext } from 'src/app/shared/classes/models/modal-contexts/error-context';
import { HttpModalContext } from 'src/app/shared/classes/models/modal-contexts/http-context';
import { ErrorComponent } from 'src/app/shared/components/modal-views/error/error.component';
import { HttpComponent } from 'src/app/shared/components/modal-views/http/http.component';
import { IGlobalResponseModel } from 'src/app/shared/interfaces/back-end-communication/i-global-response-model';
import { Pages } from 'src/app/shared/interfaces/enums/pages';
import { ModalService } from '../services/prod/component-specific/modal.service';
import { ClearToken } from '../store/token/token.action';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private modalService: ModalService,
    private store: Store,
    private router: Router
  ) {}

  handleHttpError(response: IGlobalResponseModel<any>, status: number) {
    if (response.hasError) {
      this.modalService.openModal(
        HttpComponent,
        new HttpModalContext(
          status,
          response.error.message,
          response.error.path
        )
      );
    } else {
      throw Error(
        'Error Response doe not contain Error, the backend should set it!'
      );
    }
  }

  handleError(error: any): void {
    var context: ErrorContext;
    if (error instanceof HttpErrorResponse) {
      console.error('Error from global error handler', error);
      this.handleHttpError(error.error, error.status);
      return;
    }
    context = new ErrorContext(
      'Client Side Error',
      error?.message,
      'got ya',
      () => {
        this.modalService.close();
        this.store.dispatch([ClearToken]);
        this.router.navigateByUrl('/' + Pages.Login);
      }
    );

    this.modalService.openModal(ErrorComponent, context);

    console.error('Error from global error handler', error);
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ErrorContext } from 'src/app/shared/classes/error-context';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { ModalService } from '../services/prod/modal.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private modalService: ModalService) {}

  handleError(error: any): void {
    var context: ErrorContext;
    //TODO whatever nonsense Object the server is going to send back must be accounted for!
    //TODO different callback on different bullshit happening
    //FIXME so far there is only a simple "close modal present"
    if ('rejection' in error) {
      // if (error instanceof HttpErrorResponse) {
      // }
      error = error.rejection;
      context = new ErrorContext(error.name, error.message, 'got ya', () => {
        this.modalService.close();
      });
    } else {
      context = new ErrorContext(
        'Client Side Error',
        error?.message,
        'got ya',
        () => {
          this.modalService.close();
        }
      );
    }

    this.modalService.openModal(ErrorComponent, context);

    console.error('Error from global error handler', error);
  }
}

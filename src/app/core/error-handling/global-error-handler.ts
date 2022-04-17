import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ErrorContext } from 'src/app/shared/classes/error-context';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { ModalService } from '../services/prod/modal.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private modalService: ModalService) {}

  handleError(error: any): void {
    // debugger;
    // Check if it's an error from an HTTP response
    // if (!(error instanceof HttpErrorResponse)) {
    //   error = error.rejection; // get the error object
    // }
    // this.zone.run(
    //   () => {
    //     // this.mService.open();
    //   }
    //   // this.errorDialogService.openDialog(
    //   //   error?.message || 'Undefined client error',
    //   //   error?.status
    //   // )
    // );
    this.modalService.openModal(
      ErrorComponent,
      new ErrorContext('test', 'test', 'test', () => {
        this.modalService.close();
      })
    );

    console.error('Error from global error handler', error);
  }
}

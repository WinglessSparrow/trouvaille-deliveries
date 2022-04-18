import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.loadingDialogService.openDialog();
    //TODO Map HTTP Methods to... well, human readable representation
    this.loadingService.startLoading('name');
    return next.handle(req).pipe(
      finalize(() => {
        //TODO make it work god damn it!
        // setTimeout(() => {
        this.loadingService.stopLoading();
        // }, 2000);
      })
    ) as Observable<HttpEvent<any>>;
  }
}

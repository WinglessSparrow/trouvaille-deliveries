import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.loadingDialogService.openDialog();
    return next
      .handle(req)
      .pipe
      //   finalize(() => {
      //TODO make it work god damn it!
      //   })
      () as Observable<HttpEvent<any>>;
  }
}

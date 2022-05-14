import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { TokenState } from '../state/token/token.state';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService, private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot(TokenState.getToken);

    req.headers.set('Authorization', token);

    // this.loadingDialogService.openDialog();
    //TODO Map HTTP Methods to... well, human readable representation
    this.loadingService.startLoading('Requesting Data');
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

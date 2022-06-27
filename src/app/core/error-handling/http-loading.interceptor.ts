import {
  HttpContextToken,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, timeout } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { TokenState } from '../store/token/token.state';

export const BYPASS_LOG = new HttpContextToken(() => false);

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService, private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot(TokenState.getToken);

    const modifiedRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    if (req.context.get(BYPASS_LOG) === true) return next.handle(modifiedRequest);

    this.loadingService.startLoading('Requesting Data');

    return next.handle(modifiedRequest).pipe(
      timeout(3000),
      finalize(() => {
        this.loadingService.stopLoading();
      })
    ) as Observable<HttpEvent<any>>;
  }
}

import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate, Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TokenState } from 'src/app/core/store/token/token.state';
import { Pages } from '../classes/pages';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  @Select(TokenState.getToken) token$: Observable<string>;

  private _token: string;

  constructor(private router: Router) {}

  canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let result: boolean;

    this.token$
      .subscribe((val) => {
        result = val != '';
      })
      .unsubscribe();

    if (result) {
      return true;
    } else {
      return this.router.parseUrl('/' + Pages.Login);
    }
  }
}

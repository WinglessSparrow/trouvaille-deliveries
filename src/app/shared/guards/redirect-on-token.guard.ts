import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { Pages } from '../interfaces/enums/pages';

@Injectable({
  providedIn: 'root',
})
export class RedirectOnTokenGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const token = (await Storage.get({ key: 'token' })).value;

    // debugger;

    if (token) {
      this.router.navigateByUrl('/' + Pages.Home);
      return new Promise<boolean>((resolve) => resolve(false));
    }

    return new Promise<boolean>((resolve) => resolve(true));
  }
}

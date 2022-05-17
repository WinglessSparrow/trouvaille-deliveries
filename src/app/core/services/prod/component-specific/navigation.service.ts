import { Injectable, NgZone, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavButtonComponent } from 'src/app/core/components/nav-button/nav-button.component';
import { Pages } from 'src/app/shared/interfaces/enums/pages';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _isShown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _currSelected: NavButtonComponent;
  private _buttons: QueryList<NavButtonComponent>;

  constructor(
    private route: Router,
    private header: HeaderService,
    private zone: NgZone
  ) {}

  public set buttons(value: QueryList<NavButtonComponent>) {
    //setting the button to the current page
    this._buttons = value;
    const currRoute = this.route.url.split('/')[1];

    if (currRoute === '' || currRoute === '/' + Pages.CarScanner) {
      this._currSelected = this._buttons.find((btn) => {
        return btn.route === Pages.Home;
      });
    } else {
      //this ensure that you stay in the same tab after reload
      this._currSelected = this._buttons.find((btn) => {
        return btn.route === currRoute;
      });
    }

    this.select(this._currSelected);
  }

  public navigate(page: Pages) {
    const btn = this._buttons.find((btn) => {
      return btn.route === page;
    });

    if (btn != undefined) {
      this.select(btn);
      this.navigateToSelected();
    } else {
      this.route.navigateByUrl('/' + page);
    }
  }

  public select(curr: NavButtonComponent) {
    this.zone.run(() => {
      this._currSelected?.off();

      this._currSelected = curr;

      //FIXME better way of setting header name, because some pages don't have a page descriptor
      this.header.headerText = this._currSelected?.text;

      this._currSelected?.on();

      this.close();
    });
  }

  public navigateToSelected() {
    this.route.navigateByUrl('/' + this._currSelected.route);
  }

  public open() {
    this.zone.run(() => {
      this._isShown.next(true);
    });
  }

  public close() {
    this.zone.run(() => {
      this._isShown.next(false);
    });
  }

  public get isShown(): BehaviorSubject<boolean> {
    return this._isShown;
  }

  /**
   * Getter currSelected
   * @return {NavButtonComponent}
   */
  public get currSelected(): NavButtonComponent {
    return this._currSelected;
  }
}

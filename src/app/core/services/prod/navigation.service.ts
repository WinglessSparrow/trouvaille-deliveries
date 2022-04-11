import { Injectable, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { is } from 'immer/dist/internal';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageDescriptor } from 'src/app/shared/classes/pageDesciptor';
import { Pages } from 'src/app/shared/classes/pages';
import { NavButtonComponent } from '../../components/nav-button/nav-button.component';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _isShown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _currSelected: PageDescriptor;
  private _buttons: QueryList<NavButtonComponent>;

  constructor(private route: Router, private header: HeaderService) {}

  public set buttons(value: QueryList<NavButtonComponent>) {
    this._buttons = value;
    const tempBtn = this._buttons.find((btn) => {
      return btn.route === Pages.Home;
    });

    this._currSelected = new PageDescriptor(tempBtn.route, tempBtn.text);
    this.changeButtonState(true);
  }

  select(curr: PageDescriptor) {
    this.changeButtonState(false);

    this._currSelected = curr;

    this.changeButtonState(true);

    this.route.navigateByUrl('/' + this._currSelected.route);

    this.header.headerText.next(this._currSelected.name);

    this.close();
  }

  changeButtonState(isChosen: boolean) {
    const btn = this._buttons.find((btn) => {
      return btn.text === this._currSelected.name;
    });
    if (btn != null || btn != undefined) btn.isChosen = isChosen;
  }

  open() {
    this._isShown.next(true);
  }

  close() {
    this._isShown.next(false);
  }

  public get isShown(): BehaviorSubject<boolean> {
    return this._isShown;
  }
}

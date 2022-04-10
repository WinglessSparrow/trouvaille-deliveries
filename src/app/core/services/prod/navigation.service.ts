import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageDescriptor } from 'src/app/shared/classes/pageDesciptor';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _isShown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _currSelected: PageDescriptor;

  constructor(private route: Router, private header: HeaderService) {}

  select(curr: PageDescriptor) {
    this._currSelected = curr;

    this.route.navigateByUrl('/' + this._currSelected.route);

    this.header.headerText.next(this._currSelected.name);

    this.close();
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

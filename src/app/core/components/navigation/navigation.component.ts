import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { GestureController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Pages } from 'src/app/shared/interfaces/enums/pages';
import { NavigationService } from '../../services/prod/component-specific/navigation.service';
import { ClearToken } from '../../store/token/token.action';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ContentChildren(NavButtonComponent) buttons: QueryList<NavButtonComponent>;
  @ViewChild('upperContainer', { read: ElementRef }) private menu: ElementRef;
  @ViewChild('invisibleSidebar', { read: ElementRef })
  private sidebar: ElementRef;

  isOpen$: Observable<boolean> = new Observable();

  constructor(
    public nav: NavigationService,
    private gestureCtrl: GestureController,
    private store: Store,
    private router: Router
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.nav.buttons = this.buttons;
    }, 200);

    this.swipeClose();
    this.swipeOpen();
  }

  logout() {
    this.store.dispatch(ClearToken);
    this.nav.close();
    this.router.navigateByUrl('/' + Pages.Login);
  }

  swipeClose() {
    // debugger;
    const menu = this.menu;
    let posX;

    const gesture = this.gestureCtrl.create({
      el: menu.nativeElement,
      gestureName: 'swipeClose',
      onStart: (ev) => {
        posX = ev.currentX;
      },
      onEnd: (ev) => {
        const delta = posX - ev.currentX;

        if (delta > 100) {
          this.nav.close();
        }
      },
    });

    gesture.enable(true);
  }

  swipeOpen() {
    const sidebar = this.sidebar;
    let posX;

    const gesture = this.gestureCtrl.create({
      el: sidebar.nativeElement,
      gestureName: 'swipeOpen',
      onStart: (ev) => {
        posX = ev.currentX;
      },
      onEnd: (ev) => {
        const delta = ev.currentX - posX;

        if (delta > 100) {
          this.nav.open();
        }
      },
    });

    gesture.enable(true);
  }

  ngOnInit() {
    this.isOpen$ = this.nav.isShown.asObservable();
  }

  close() {
    this.nav.close();
  }
}

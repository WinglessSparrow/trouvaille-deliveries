import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { GestureController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { NavigationService } from '../../services/prod/navigation.service';
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
    private gestureCtrl: GestureController
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.nav.buttons = this.buttons;
    }, 200);

    this.swipeClose();
    this.swipeOpen();
  }

  swipeClose() {
    // debugger;
    const menu = this.menu;
    let posX;

    const gesture = this.gestureCtrl.create({
      el: menu.nativeElement,
      gestureName: 'swipeClose',
      onStart: (ev) => {
        console.log(ev);
        posX = ev.currentX;
      },
      onEnd: (ev) => {
        console.log(ev);
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
        console.log(ev);
        posX = ev.currentX;
      },
      onEnd: (ev) => {
        console.log(ev);
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

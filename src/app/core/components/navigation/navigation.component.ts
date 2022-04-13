import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PageDescriptor } from 'src/app/shared/classes/pageDesciptor';
import { NavigationService } from '../../services/prod/navigation.service';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @ContentChildren(NavButtonComponent) buttons: QueryList<NavButtonComponent>;

  isOpen: Observable<boolean> = new Observable();

  constructor(public nav: NavigationService) {}

  ngAfterViewInit() {
    this.nav.buttons = this.buttons;
  }

  ngOnInit() {
    this.isOpen = this.nav.isShown.asObservable();
  }

  close() {
    this.nav.close();
  }
}

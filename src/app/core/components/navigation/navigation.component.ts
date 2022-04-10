import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../../services/prod/navigation.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isOpen: Observable<boolean> = new Observable();

  constructor(public nav: NavigationService) {}

  ngOnInit() {
    this.isOpen = this.nav.isShown.asObservable();
  }

  close() {
    this.nav.close();
  }
}

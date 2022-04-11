import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageDescriptor } from 'src/app/shared/classes/pageDesciptor';
import { NavigationService } from '../../services/prod/navigation.service';

@Component({
  selector: 'nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  @Input() text: string;
  @Input() route: string;
  isChosen: boolean = false;

  constructor(private nav: NavigationService) {}

  ngOnInit() {}

  navigate() {
    this.nav.select(new PageDescriptor(this.route, this.text));
  }
}

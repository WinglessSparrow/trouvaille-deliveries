import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../../services/prod/component-specific/navigation.service';

@Component({
  selector: 'nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  @Input() text: string;
  @Input() route: string;
  isChosen: boolean;

  constructor(private nav: NavigationService) {}

  ngOnInit() {}

  async navigate() {
    await this.nav.select(this);
    this.nav.navigateToSelected();
  }

  on() {
    this.isChosen = true;
  }

  off() {
    this.isChosen = false;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from '../../services/prod/header.service';
import { NavigationService } from '../../services/prod/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Input() isConnected: boolean = true;
  @Output() changeIsConnected = new EventEmitter<boolean>();

  @Output() toggleMenuEvent = new EventEmitter();

  text: Observable<string> = new Observable();

  constructor(
    public headerService: HeaderService,
    private nav: NavigationService
  ) {}

  //TODO check connection to the server

  ngOnInit() {
    this.text = this.headerService.headerText.asObservable();
  }

  openMenu() {
    this.nav.open();
  }
}

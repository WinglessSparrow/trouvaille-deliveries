import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectionServiceModel } from 'src/app/shared/models/connection-service-model';
import { HeaderService } from '../../services/prod/header.service';
import { NavigationService } from '../../services/prod/navigation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Output() changeIsConnected = new EventEmitter<boolean>();
  @Output() toggleMenuEvent = new EventEmitter();

  isConnected: boolean = true;
  text$: Observable<string> = new Observable();
  isMenu$: Observable<boolean> = new Observable();

  constructor(
    public headerService: HeaderService,
    private nav: NavigationService,
    connection: ConnectionServiceModel,
    private loc: Location
  ) {
    connection
      .getConnectionStatus()
      .subscribe((val) => this.connectionStatusChanged(val));
    this.isMenu$ = headerService.isMenu$;
  }

  ngOnInit() {
    this.text$ = this.headerService.getTextObservable();
  }

  connectionStatusChanged(val: boolean) {
    this.isConnected = val;

    console.log('new connection Value: ' + val);
    if (!val) {
      console.log('Connection lost');
      //TODO show Modal on Connection los
    }
  }

  openMenu() {
    this.nav.open();
  }

  goBack() {
    //TODO prompt and shit
    this.nav.select(this.nav.currSelected);
    this.nav.navigateToSelected();
  }
}

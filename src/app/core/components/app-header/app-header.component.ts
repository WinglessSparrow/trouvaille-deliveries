import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionServiceModel } from 'src/app/shared/models/connection-service-model';
import { HeaderService } from '../../services/prod/header.service';
import { NavigationService } from '../../services/prod/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Output() changeIsConnected = new EventEmitter<boolean>();
  @Output() toggleMenuEvent = new EventEmitter();

  isConnected: Observable<boolean> = new Observable();
  text: Observable<string> = new Observable();

  constructor(
    public headerService: HeaderService,
    private nav: NavigationService,
    connection: ConnectionServiceModel
  ) {
    this.isConnected = connection.getConnectionStatus();
    this.isConnected.subscribe((val) => this.connectionStatusChanged(val));
  }

  ngOnInit() {
    this.text = this.headerService.headerText.asObservable();
  }

  connectionStatusChanged(val: boolean) {
    console.log('new connection Value: ' + val);
    if (!val) {
      console.log('Connection lost');
      //TODO show Modal on Connection los
    }
  }

  openMenu() {
    this.nav.open();
  }
}

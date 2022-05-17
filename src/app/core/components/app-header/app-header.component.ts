import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IConnection } from 'src/app/shared/interfaces/services-interfaces/i-connection';
import { HeaderService } from '../../services/prod/component-specific/header.service';
import { NavigationService } from '../../services/prod/component-specific/navigation.service';

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
    connection: IConnection
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

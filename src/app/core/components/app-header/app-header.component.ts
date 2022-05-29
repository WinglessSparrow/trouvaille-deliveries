import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IConnection } from 'src/app/shared/interfaces/services-interfaces/i-connection';
import { HeaderService } from '../../services/prod/component-specific/header.service';
import { NavigationService } from '../../services/prod/component-specific/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  @Output() changeIsConnected = new EventEmitter<boolean>();
  @Output() toggleMenuEvent = new EventEmitter();

  isConnected: boolean = true;

  text$: Observable<string> = new Observable();
  isMenu$: Observable<boolean> = new Observable();

  private connectionSub: Subscription;

  constructor(
    public headerService: HeaderService,
    private nav: NavigationService,
    private connection: IConnection
  ) {}

  ngOnDestroy(): void {
    this.connectionSub.unsubscribe();
  }

  ngOnInit() {
    this.connectionSub = this.connection
      .getConnectionStatus()
      .subscribe((val) => this.connectionStatusChanged(val));

    this.isMenu$ = this.headerService.isMenu$;
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

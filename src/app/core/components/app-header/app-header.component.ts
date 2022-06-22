import {
  Component,
  EventEmitter, OnInit,
  Output
} from '@angular/core';
import { Network } from '@capacitor/network';
import { Observable } from 'rxjs';
import { HeaderService } from '../../services/prod/component-specific/header.service';
import { ModalService } from '../../services/prod/component-specific/modal.service';
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
    private modal: ModalService
  ) {}

  ngOnInit() {
    this.isMenu$ = this.headerService.isMenu$;
    this.text$ = this.headerService.getTextObservable();

    Network.addListener('networkStatusChange', (status) =>
      this.connectionStatusChanged(status.connected)
    );
  }

  connectionStatusChanged(val: boolean) {
    this.isConnected = val;

    if (!val) {
      this.modal.openErrorModal(
        'Connection to the Internet has been lost, App can not function properly without the internet Connectivity',
        'Connection Lost'
      );
    }
  }

  openMenu() {
    this.nav.open();
  }

  goBack() {
    this.nav.select(this.nav.currSelected);
    this.nav.navigateToSelected();
  }
}

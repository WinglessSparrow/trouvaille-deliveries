import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeaderService } from './core/services/prod/component-specific/header.service';
import { ModalService } from './core/services/prod/component-specific/modal.service';
import { TokenState } from './core/store/token/token.state';
import { PageDescriptor } from './shared/classes/models/general/pageDescriptor';
import { Pages } from './shared/interfaces/enums/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(+100%)' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public pages = [
    new PageDescriptor(Pages.Home, 'Home'),
    new PageDescriptor(Pages.Map, 'Map'),
    new PageDescriptor(Pages.ScanDelivery, 'Scan Delivery'),
    new PageDescriptor(Pages.AllDeliveries, 'All Deliveries'),
    new PageDescriptor(Pages.DeliveriesToLoad, 'Loading Order'),
    new PageDescriptor(Pages.Time, 'Time'),
  ];

  isModalOpen$: Observable<boolean> = new Observable();
  @Select(TokenState.getToken) $token;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private modal: ModalService,
    private platform: Platform,
    private store: Store
  ) {
    this.$token.subscribe((val) => {
      if (val != null || !environment.production) {
        // store.dispatch(new InitRouteData());
      }
    });
  }

  ngOnInit() {
    if (!(this.platform.is('mobileweb') || this.platform.is('desktop'))) {
      StatusBar.setOverlaysWebView({ overlay: true });
      StatusBar.setStyle({ style: Style.Light });
    }

    this.isModalOpen$ = this.modal.modalActive;

    //FIXME move to header service (headerRootingService) or component
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;

        if (url === '/carScanner' || url === '/') {
          this.headerService.deactivate();
        } else {
          this.headerService.activate();
        }
      }
    });
  }
}

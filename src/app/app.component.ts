import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Observable } from 'rxjs';
import { HeaderService } from './core/services/prod/header.service';
import { ModalService } from './core/services/prod/modal.service';
import { PageDescriptor } from './shared/classes/pageDescriptor';
import { Pages } from './shared/classes/pages';

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
export class AppComponent {
  public pages = [
    new PageDescriptor(Pages.Home, 'Home'),
    new PageDescriptor(Pages.Map, 'Map'),
    new PageDescriptor(Pages.ScanDelivery, 'Scan Delivery'),
    new PageDescriptor(Pages.AllDeliveries, 'All Deliveries'),
    new PageDescriptor(Pages.DeliveriesToLoad, 'Loading Order'),
    new PageDescriptor(Pages.Time, 'Time'),
  ];

  isModalOpen$: Observable<boolean> = new Observable();

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private modal: ModalService
  ) {}

  async ngOnInit() {
    // async () => {
    await StatusBar.hide();
    await StatusBar.setOverlaysWebView({ overlay: true });
    // };

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

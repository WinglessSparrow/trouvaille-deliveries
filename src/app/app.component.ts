import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { HeaderService } from './core/services/prod/header.service';
import { PageDescriptor } from './shared/classes/pageDesciptor';
import { Pages } from './shared/classes/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
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

  //TODO move to header service (headerRootingService) or component
  constructor(private router: Router, private headerService: HeaderService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;

        console.log('Routing to: ' + url);

        if (url === '/carScanner' || url === '/') {
          this.headerService.deactivate();
        } else {
          this.headerService.activate();
        }
      }
    });
  }
}

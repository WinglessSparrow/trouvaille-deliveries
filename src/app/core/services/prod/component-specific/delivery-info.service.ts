import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from 'src/app/shared/interfaces/enums/pages';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root',
})
export class DeliveryInfoService {
  constructor(private router: Router, private header: HeaderService) {}

  public routeToDelivery(id: string) {
    this.header.headerText = 'Delivery Info';
    this.router.navigateByUrl(`${Pages.DeliveryInfo}/${id}`);
  }
}

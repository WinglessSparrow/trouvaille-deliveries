import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/core/services/prod/navigation.service';
import { Pages } from 'src/app/shared/classes/pages';
import { ButtonType } from 'src/app/shared/components/trou-btn/trou-btn.component';
import {
  LabelTextSize,
  LabelType,
} from 'src/app/shared/components/trou-label/trou-label.component';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  currAddress: string = 'Ottenhofener str 13 77815 Bühl';
  nextAddress: string = 'Ottenhofener str 14';

  labelTypes = LabelType;
  textSizes = LabelTextSize;
  btnType = ButtonType;

  constructor(private navigation: NavigationService, private router: Router) {
    //TODO Map logic and stuff, maybe even a custom Map view (I hope not)
    //TODO Map with leaflet: https://leafletjs.com/SlavaUkraini/index.html
  }

  ngOnInit() {}

  goToNextDelivery() {
    //TODO Implement goToNextDelivery
  }
  goToCurrentDelivery() {
    //TODO Implement goToCurrentDelivery
  }
  goToDeliveryScan() {
    this.navigation.navigate(Pages.ScanDelivery);
  }
}

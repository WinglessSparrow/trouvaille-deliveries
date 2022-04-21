import { Component, OnInit } from '@angular/core';
import { PreviewModel } from 'src/app/shared/classes/preview-model';
import { PackageStates } from 'src/app/shared/models/package-states';

@Component({
  selector: 'all-deliveries-list',
  templateUrl: './all-deliveries-list.component.html',
  styleUrls: ['./all-deliveries-list.component.scss'],
})
export class AllDeliveriesListComponent implements OnInit {
  //TODO Make it disappear in a wonderfull service
  //TODO make up some way to notify the user in case a new delivery is coming in
  data: PreviewModel[] = [
    new PreviewModel(
      'Very Long Name',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.AddressNotIdentifiable
    ),
    new PreviewModel(
      'short name',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.Delivered
    ),
    new PreviewModel(
      'Holo th wise wolf',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.InDelivery
    ),
    new PreviewModel(
      'Higashikata Jouske',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.PickedUp
    ),
    new PreviewModel(
      'Mister Twister',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.PickUpNotPossible
    ),
    new PreviewModel(
      'Mister Twister',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.DeliveryNotPossible
    ),
    new PreviewModel(
      'Johnatan Joestar',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.ToBePickedUp
    ),
    new PreviewModel(
      'Mister Twister',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.InDelivery
    ),
    new PreviewModel(
      'Speedwagon Foundation',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.Delivered
    ),
    new PreviewModel(
      'Mister Twister 2',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.AddressNotIdentifiable
    ),
    new PreviewModel(
      'Mister Twister Huister',
      'Ottenhofener str 13, 77815, Bühl',
      PackageStates.InDelivery
    ),
  ];

  constructor() {}

  ngOnInit() {}
}

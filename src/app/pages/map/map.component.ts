import { Component, OnInit } from '@angular/core';
import { LabelType } from 'src/app/shared/components/trou-label/trou-label.component';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  currAddress: string = 'Ottenhofener str 13 77815 Bühl';
  nextAddress: string = 'Ottenhofener str 14';

  labelTypes = LabelType;

  constructor() {}

  ngOnInit() {}
}

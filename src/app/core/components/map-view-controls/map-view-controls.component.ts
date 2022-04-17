import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'map-view-controls',
  templateUrl: './map-view-controls.component.html',
  styleUrls: ['./map-view-controls.component.scss'],
})
export class MapViewControlsComponent implements OnInit {
  @Output() zoomIn: EventEmitter<any> = new EventEmitter<any>();
  @Output() zoomOut: EventEmitter<any> = new EventEmitter<any>();
  @Output() center: EventEmitter<any> = new EventEmitter<any>();
  @Output() reload: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}

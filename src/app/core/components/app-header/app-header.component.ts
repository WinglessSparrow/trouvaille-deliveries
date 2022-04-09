import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Input() isActive: boolean;
  @Output() changeIsActive = new EventEmitter<boolean>();

  @Input() isConnected: boolean = true;
  @Output() changeIsConnected = new EventEmitter<boolean>();

  @Output() toggleMenuEvent = new EventEmitter();

  @Input() text: string = 'Header';

  constructor() {}

  //TODO check connection to the server
  //TODO open menu

  ngOnInit() {}

  toggleMenu() {}
}

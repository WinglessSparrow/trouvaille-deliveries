import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ModalService } from 'src/app/core/services/prod/modal.service';
import {
  ClearDeliveries,
  InitDeliveriesState,
} from 'src/app/core/state/deliveries/deliveries.action';
import {
  LabelTextSize,
  LabelType,
  Position,
} from 'src/app/shared/components/trou-label/trou-label.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //TODO service for Summary retrieval
  //TODO service for user data Retrieval
  summaryData: Array<[string, string]> = new Array();
  userName: string = 'Hello Mister Twister';

  public positions = Position;
  public labelTypes = LabelType;

  constructor(private router: Router, private store: Store) {
    //FIXME Temp data
    this.summaryData.push(['test', '13']);
    this.summaryData.push(['test1', '98/100']);
    this.summaryData.push(['test2', '1/12']);
    this.summaryData.push(['test3', '0:45']);
    this.summaryData.push(['test4', '0:32']);
    this.summaryData.push(['test5', '2/4']);
    this.summaryData.push(['test6', '10/11']);
  }

  ngOnInit() {
    this.store.dispatch(new InitDeliveriesState());
  }

  ngAfterViewInit() {
    // this.modalService.openModal(LoadingComponent, new LoadingContext('Test'));
  }

  back() {
    this.store.dispatch(new ClearDeliveries());
    this.router.navigateByUrl('/carScanner');
  }

  reportProblem() {
    //TODO implement function
  }
}

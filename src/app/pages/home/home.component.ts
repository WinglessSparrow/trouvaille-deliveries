import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ModalService } from 'src/app/core/services/prod/modal.service';
import { SummaryProviderService } from 'src/app/core/services/prod/summary-provider.service';
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

  constructor(
    private router: Router,
    private store: Store,
    private summaryProvider: SummaryProviderService
  ) {
    this.summaryData = this.summaryProvider.getSummary();
  }

  ngOnInit() {
    this.store.dispatch(new InitDeliveriesState());
    //DEBUG
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ModalService } from 'src/app/core/services/prod/modal.service';
import { ClearDeliveries } from 'src/app/core/state/deliveries/deliveries.action';
import {
  LabelType,
  LabelPosition,
} from 'src/app/shared/components/trou-label/trou-label.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: string = 'Hello Mister Twister';

  public positions = LabelPosition;
  public labelTypes = LabelType;

  constructor(
    private router: Router,
    private store: Store,
    private http: HttpClient
  ) {}

  ngOnInit() {
    //TODO set user name
  }

  ngAfterViewInit() {}

  back() {
    this.store.dispatch(new ClearDeliveries());
    this.router.navigateByUrl('/carScanner');
  }

  reportProblem() {
    this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
  }
}

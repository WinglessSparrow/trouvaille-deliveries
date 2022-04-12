import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LabelType,
  Position,
} from 'src/app/core/components/trou-label/trou-label.component';

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

  constructor(private router: Router) {
    this.summaryData.push(['test', '13']);
    this.summaryData.push(['test1', '98/100']);
    this.summaryData.push(['test2', '1/12']);
    this.summaryData.push(['test3', '0:45']);
    this.summaryData.push(['test4', '0:32']);
    this.summaryData.push(['test5', '2/4']);
    this.summaryData.push(['test6', '10/11']);
  }

  ngOnInit() {}

  logOut() {
    this.router.navigateByUrl('/carScanner');
  }

  reportProblem(){
    //TODO
  }
}

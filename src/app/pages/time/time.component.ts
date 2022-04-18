import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TimeStateMachineService,
  TimeStates,
} from 'src/app/core/services/prod/time-state-machine.service';
import { LabelType } from 'src/app/shared/components/trou-label/trou-label.component';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  constructor(private stateMachine: TimeStateMachineService) {}

  // drivingBegin: Date;
  // drivingEnd: Date;
  // pauseBegin: Date;
  // pauseEnd: Date;

  state: Observable<TimeStates> = new Observable<TimeStates>();

  isPauseStop: boolean = false;

  labelType = LabelType;
  timeStates = TimeStates;

  ngOnInit() {
    this.state = this.stateMachine.currState;
    this.state.subscribe(() => {});
  }

  //TODO getting time through time-service-model
  //TODO calculating time every ~30 seconds (ONLY WHEN VIEW IS SHOWN) and when it shows
  startDriving() {
    this.stateMachine.changeState(TimeStates.Drive);
  }
  stopDriving() {
    this.stateMachine.changeState(TimeStates.NotDrive);
  }
  startPause() {
    this.stateMachine.changeState(TimeStates.Pause);
  }
  stopPause() {
    this.stateMachine.changeState(TimeStates.Drive);
  }
}

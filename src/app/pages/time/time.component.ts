import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeCounterService } from 'src/app/core/services/prod/time-counter.service';
import {
  TimeStateMachineService,
  TimeStates,
} from 'src/app/core/services/prod/time-state-machine.service';
import { LabelType } from 'src/app/shared/components/trou-label/trou-label.component';
import { TimeServiceModel } from 'src/app/shared/models/time-service-model';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  constructor(
    private stateMachine: TimeStateMachineService,
    public timer: TimeCounterService
  ) {}

  state: Observable<TimeStates> = new Observable<TimeStates>();
  today: string;

  labelType = LabelType;
  timeStates = TimeStates;

  ngOnInit() {
    this.state = this.stateMachine.currState;
    this.timer.calcTime();
    this.today = new Date().toLocaleDateString();
  }

  startDriving() {
    this.stateMachine.changeState(TimeStates.Drive);
    this.timer.addWorkInterval();
  }
  stopDriving() {
    this.stateMachine.changeState(TimeStates.NotDrive);
    this.timer.concludeWorkInterval();
  }
  startPause() {
    this.stateMachine.changeState(TimeStates.Pause);
    this.timer.addPauseInterval();
  }
  stopPause() {
    this.stateMachine.changeState(TimeStates.Drive);
    this.timer.concludePauseInterval();
  }
  reset() {
    this.timer.calcTime();
  }
}

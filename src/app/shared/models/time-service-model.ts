import { BehaviorSubject, Observable } from 'rxjs';
import {
  TimeStateMachineService,
  TimeStates,
} from 'src/app/core/services/prod/time-state-machine.service';
import { TimeDescriptor } from '../classes/time-descriptor';
import { TimeInterval } from '../classes/time-interval';

export abstract class TimeServiceModel {
  //FIXME Date should be some kind of a complex Object or smth
  public abstract getTimes(): Promise<Array<TimeInterval[]>>;
  public abstract startDriving();
  public abstract stopDriving();
  public abstract startPause();
  public abstract stopPause();
}

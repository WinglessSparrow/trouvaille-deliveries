import { WorkingTimeDescriptor } from './working-time-descriptor';

export abstract class TimeServiceModel {
  public abstract sendWorkingTimes(workingTimes: WorkingTimeDescriptor);
  public abstract startWorking();
}

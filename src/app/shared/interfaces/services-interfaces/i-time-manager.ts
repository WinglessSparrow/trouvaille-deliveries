import { WorkingTimeDescriptor } from '../../classes/models/general/working-time-descriptor';

export abstract class ITimeManager {
  public abstract sendWorkingTimes(workingTimes: WorkingTimeDescriptor);
  public abstract startWorking();
}

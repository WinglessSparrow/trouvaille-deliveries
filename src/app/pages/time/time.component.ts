import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/prod/component-specific/modal.service';
import { RouteDataState } from 'src/app/core/store/route-data/route-data.state';
import { WorkingTimeDescriptor } from 'src/app/shared/classes/models/general/working-time-descriptor';
import { LabelType } from 'src/app/shared/components/trou-label/trou-label.component';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';
import { ITimeManager } from 'src/app/shared/interfaces/services-interfaces/i-time-manager';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit, OnDestroy {
  form: FormGroup;
  today: string;
  timeWorked: string = '-- hrs | --min';
  timeBreak: string = '-- hrs | --min';

  labelType = LabelType;

  private formSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private timeService: ITimeManager,
    private store: Store,
    private modal: ModalService
  ) {
    this.form = this.fb.group({
      workingFrom: ['', Validators.required],
      workingTo: ['', Validators.required],
      breakFrom: ['', Validators.required],
      breakTo: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.today = new Date().toLocaleDateString();

    this.formSub = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.calcTime();
      }
    });
  }

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }

  //FIXME should prbly move a bunch of this logic somewhere

  public async validateAndConfirmTime(event: Event) {
    event.preventDefault();

    const isValid: boolean = this.form.valid;
    const canSendTime: boolean = this.areDeliveriesDone();
    const timesMakeSense: boolean = this.sanityCheckTimes();

    if (isValid && canSendTime && timesMakeSense) {
      await this.confirmTime();
    } else {
      if (!isValid) {
        this.modal.openNotificationModal(
          'Invalid Form',
          'Please fill in all the times'
        );
      }

      if (!canSendTime) {
        this.modal.openNotificationModal(
          'There are still Deliveries in an unfinished state!',
          'Deliveries Pending'
        );
      }

      if (!timesMakeSense) {
        this.modal.openNotificationModal(
          'The Times are malformed, the pause is longer than the working time! Did you mix up the input fields?',
          'Malformed Times'
        );
      }
    }
  }

  private calcBreakAndWorkingMS(): [number, number] {
    const dates = this.getDatesFromTime(this.form.value);

    const breakMs = +dates[3] - +dates[2];
    const workMs = +dates[1] - +dates[0] - breakMs;

    return [breakMs, workMs];
  }

  private calcTime() {
    const workBreakMs: [number, number] = this.calcBreakAndWorkingMS();

    const breakMs: number = workBreakMs[0];
    const workMs: number = workBreakMs[1];

    this.timeWorked = this.getHrsMinDiff(workMs);
    this.timeBreak = this.getHrsMinDiff(breakMs);
  }

  private getHrsMinDiff(workingMs: number): string {
    const workingHrs = Math.floor(workingMs / 1000 / 60 / 60);
    const workingMins = Math.floor(workingMs / 1000 / 60) - workingHrs * 60;
    return `${workingHrs} hrs | ${workingMins} min`;
  }

  private async confirmTime() {
    const dates = this.getDatesFromTime(this.form.value);
    this.timeService.sendWorkingTimes(new WorkingTimeDescriptor(dates));
  }

  private sanityCheckTimes(): boolean {
    /*
     * checks if break times are smaller then the working times
     */
    let ret: boolean = false;

    const workBreakMs: [number, number] = this.calcBreakAndWorkingMS();

    const breakMs: number = workBreakMs[0];
    const workMs: number = workBreakMs[1];

    ret = breakMs < workMs;

    return ret;
  }

  private areDeliveriesDone(): boolean {
    /*
     * if no deliveries found with IN_CAR or REQUESTED_PICKUP or IN_CENTRAL
     * there are still deliveries pending
     */
    return (
      this.store
        .selectSnapshot(RouteDataState.getDeliveries)
        .find(
          (val) =>
            val.currentState === DeliveryStates.IN_CAR ||
            val.currentState === DeliveryStates.REQUESTED_PICKUP ||
            val.currentState === DeliveryStates.IN_CENTRAL
        ) == null
    );
  }

  private getDatesFromTime(formValues: any): Array<Date> {
    let dateArr: Array<Date> = new Array<Date>();

    dateArr.push(
      this.insertNewTimeIntoDate(new Date(), formValues.workingFrom)
    );
    dateArr.push(this.insertNewTimeIntoDate(new Date(), formValues.workingTo));
    dateArr.push(this.insertNewTimeIntoDate(new Date(), formValues.breakFrom));
    dateArr.push(this.insertNewTimeIntoDate(new Date(), formValues.breakTo));

    return dateArr;
  }

  private insertNewTimeIntoDate(date: Date, time: string): Date {
    const TIME_IDX = 4;

    let dateArr = date.toString().split(' ');

    dateArr[TIME_IDX] = time + ':00';

    return new Date(dateArr.join(' '));
  }
}

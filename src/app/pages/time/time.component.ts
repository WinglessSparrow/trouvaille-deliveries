import { Component, DebugEventListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ModalService } from 'src/app/core/services/prod/modal.service';
import { DeliveryState } from 'src/app/core/state/deliveries/deliveries.state';
import { ErrorContext } from 'src/app/shared/classes/error-context';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { LabelType } from 'src/app/shared/components/trou-label/trou-label.component';
import { DeliveryStates } from 'src/app/shared/models/delivery-states';
import { TimeServiceModel } from 'src/app/shared/models/time-service-model';
import { WorkingTimeDescriptor } from 'src/app/shared/models/working-time-descriptor';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  form: FormGroup;
  today: string;
  timeWorked: string = '-- hrs | --min';
  timeBreak: string = '-- hrs | --min';

  labelType = LabelType;

  constructor(
    private fb: FormBuilder,
    private timeService: TimeServiceModel,
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

    this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.calcTime();
      }
    });
  }

  //FIXME should prbly move a bunch of this logic somewhere

  public async validateAndConfirmTime(event: Event) {
    event.preventDefault();

    const isValid: boolean = this.form.valid;
    const canSendTime: boolean = this.areDeliveriesDone();

    if (isValid && canSendTime) {
      await this.confirmTime();
    } else {
      if (!isValid) {
        this.modal.openErrorModal('Form Invalid', 'Please fill out the form');
      }

      if (!canSendTime) {
        this.modal.openErrorModal(
          'Deliveries Error',
          'There are still Deliveries Pending'
        );
      }
    }
  }

  private calcTime() {
    const dates = this.getDatesFromTime(this.form.value);

    const breakMs = +dates[3] - +dates[2];
    const workMs = +dates[1] - +dates[0] - breakMs;

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

  private areDeliveriesDone(): boolean {
    /*
     * if no deliveries found with IN_CAR or REQUESTED_PICKUP or IN_CENTRAL
     * there are still deliveries pending
     */
    return (
      this.store
        .selectSnapshot(DeliveryState.getDeliveries)
        .find(
          (val) =>
            val.state === DeliveryStates.IN_CAR ||
            val.state === DeliveryStates.REQUESTED_PICKUP ||
            val.state === DeliveryStates.IN_CENTRAL
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

import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Actions,
  ofActionCompleted,
  ofActionDispatched,
  Store,
} from '@ngxs/store';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { HeaderService } from 'src/app/core/services/prod/component-specific/header.service';
import { ChangeDeliveryState } from 'src/app/core/store/route-data/route-data.action';
import { RouteDataState } from 'src/app/core/store/route-data/route-data.state';
import { Delivery } from 'src/app/shared/classes/models/back-end-communication/delivery';
import { ChangeStatePayload } from 'src/app/shared/classes/models/general/change-state-payload';
import { LabelLength } from 'src/app/shared/components/trou-label/trou-label.component';
import { DeliveryStates } from 'src/app/shared/interfaces/enums/delivery-states';

@Component({
  selector: 'delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
})
export class DeliveryInfoComponent implements OnInit, OnDestroy {
  public labelLength = LabelLength;
  public delivery: Delivery;

  private deliverySubscription: Subscription;
  private actionSubscription: Subscription;
  private id: string;

  constructor(
    private header: HeaderService,
    private route: ActivatedRoute,
    private store: Store,
    private actions$: Actions
  ) {}

  ngOnInit() {
    this.header.menuOff();

    this.id = this.route.snapshot.paramMap.get('id');

    this.renewState();

    this.actionSubscription = this.actions$
      .pipe(ofActionCompleted(ChangeDeliveryState))
      .subscribe(() => {
        setTimeout(() => {
          debugger;
          this.delivery = this.store.selectSnapshot(
            RouteDataState.getDelivery(this.id)
          );
        }, 500);
      });

    // setTimeout(() => {
    //   console.log('changing');
    //   this.delivery = new Delivery({
    //     currentState: DeliveryStates.PICKUP_FAILED,
    //     customer: null,
    //     depth: 1,
    //     dstAddress: null,
    //     height: 1,
    //     iddelivery: '1',
    //     packageid: 1,
    //     position: 1,
    //     price: 1,
    //     srcAddress: null,
    //     weight: 1,
    //     width: 1,
    //   });
    // }, 2000);
  }

  renewState() {
    const delivery$ = this.store.select(RouteDataState.getDelivery(this.id));
    this.deliverySubscription = delivery$.subscribe((val) => {
      this.delivery = val;
    });
  }

  stateChanged(event: Delivery) {
    this.store.dispatch(
      new ChangeDeliveryState(
        new ChangeStatePayload(event.currentState, this.delivery)
      )
    );
  }

  ngOnDestroy() {
    this.deliverySubscription.unsubscribe();
    this.actionSubscription.unsubscribe();
    this.header.menuOn();
  }
}

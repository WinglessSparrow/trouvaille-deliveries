import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {
    LabelLength,
    LabelTextSize,
    LabelType
} from '../../../shared/components/trou-label/trou-label.component';
import { SummaryProviderService } from '../../services/prod/summary-provider.service';

@Component({
  selector: 'home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.scss'],
})
export class HomeSummaryComponent implements OnInit {
  // @Input() data: Array<[string, string]>;
  summaryData$: Observable<Array<[string, string]>>;

  public length = LabelLength;
  public labelType = LabelType;
  public labelTextSize = LabelTextSize;

  constructor(private summaryProvider: SummaryProviderService) {}

  ngOnInit() {
    this.summaryData$ = this.summaryProvider.summary;
  }
}

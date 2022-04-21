import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { PreviewModel } from '../../classes/preview-model';
import { PackageStates } from '../../models/package-states';

@Component({
  selector: 'package-preview',
  templateUrl: './package-preview.component.html',
  styleUrls: ['./package-preview.component.scss'],
})
export class PackagePreviewComponent implements OnInit {
  @HostBinding('style.--ball-color') color: string = 'blue';

  @Input() data: PreviewModel;

  constructor() {}

  ngOnInit() {
    this.color = PreviewModel.getColorFromState(this.data.state);
  }
}

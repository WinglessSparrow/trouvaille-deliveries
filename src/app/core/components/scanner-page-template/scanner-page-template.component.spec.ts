import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScannerPageTemplateComponent } from './scanner-page-template.component';

describe('ScannerPageTemplateComponent', () => {
  let component: ScannerPageTemplateComponent;
  let fixture: ComponentFixture<ScannerPageTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerPageTemplateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScannerPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

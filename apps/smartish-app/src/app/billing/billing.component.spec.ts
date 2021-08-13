import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartishNgRxTestingModule } from '@briebug/smartish-ngrx';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { BillingComponent } from './billing.component';

describe('BillingComponent', () => {
  let component: BillingComponent;
  let fixture: ComponentFixture<BillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingComponent],
      imports: [
        SharedModule,
        MaterialModule,
        SmartishNgRxTestingModule.forRoot({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

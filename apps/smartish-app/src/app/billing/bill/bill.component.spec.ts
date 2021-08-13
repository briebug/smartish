import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartishNgRxTestingModule } from '@briebug/smartish-ngrx';
import { MaterialModule } from '../../material/material.module';

import { BillComponent } from './bill.component';

describe('BillComponent', () => {
  let component: BillComponent;
  let fixture: ComponentFixture<BillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillComponent],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        SmartishNgRxTestingModule.forRoot({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

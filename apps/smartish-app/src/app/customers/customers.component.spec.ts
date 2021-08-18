import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartishNgRxTestingModule } from '@briebug/ngrx-smartish';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { Customer } from './+state/customer';
import { CustomersState } from './+state/reducer';
import { selectAllCustomers } from './+state/selectors';

import { CustomersComponent } from './customers.component';

const customer = {
  id: '1',
  firstName: 'baker',
  lastName: 'mayfield',
  email: 'em@il.com',
  phone: '123-456-7890',
  address: {
    addressLine1: '76 Lou Groza Blvd',
    city: 'Berea',
    state: 'OH',
    zip: 44017,
  },
  totalOrders: 1,
  totalSpent: 100.0,
} as Customer;
describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersComponent],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        SharedModule,
        SmartishNgRxTestingModule.forRoot({
          initialState: { customers: [customer] } as CustomersState,
          // selectors: [{ selector: selectAllCustomers, value: [customer] }],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

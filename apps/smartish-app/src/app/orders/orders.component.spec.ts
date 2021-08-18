import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgRxSmartishTestingModule } from '@briebug/ngrx-smartish';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { Order } from './+state/order';
import { OrdersState } from './+state/reducer';
import { selectAllOrders } from './+state/selectors';

import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        SharedModule,
        NgRxSmartishTestingModule.forRoot<OrdersState>({
          initialState: {
            orders: [],
            isLoading: false,
            selectedId: null,
            pagination: null,
            error: null,
          },
          selectors: [{ selector: selectAllOrders, value: [] }],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

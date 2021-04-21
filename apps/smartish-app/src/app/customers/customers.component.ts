import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Paginator } from 'apps/smartish-app/src/app/interfaces';
import { updateCustomerPagination } from './+state/actions';
import { Customer } from './+state/customer';
import {
  selectAllCustomers,
  selectCustomerPaginator,
} from './+state/selectors';

type CustomerColumnKeys = keyof Customer;

@Component({
  selector: 'smartish-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  customers$ = this.store.select(selectAllCustomers);
  displayedColumns: CustomerColumnKeys[] = [
    'email',
    'totalOrders',
    'totalSpent',
  ];
  paginator$ = this.store.select(selectCustomerPaginator);

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateCustomerPagination({ pagination }));
  }
}

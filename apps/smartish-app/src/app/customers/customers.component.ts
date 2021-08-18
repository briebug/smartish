import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
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
  customers$ = selectAllCustomers;
  displayedColumns: CustomerColumnKeys[] = [
    'email',
    'totalOrders',
    'totalSpent',
  ];
  paginator$ = selectCustomerPaginator;
  updatePagination = smartDispatch(updateCustomerPagination);
}

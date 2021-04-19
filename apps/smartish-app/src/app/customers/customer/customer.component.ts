import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCustomer } from '../+state/actions';
import { Customer } from '../+state/customer';
import { selectCustomer } from '../+state/selectors';

@Component({
  selector: 'smartish-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  customer$ = this.store.select(selectCustomer);

  constructor(private readonly store: Store) {}

  save(customer: Customer): void {
    this.store.dispatch(updateCustomer({ customer }));
  }
}

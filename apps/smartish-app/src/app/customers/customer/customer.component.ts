import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/smartish-ngrx';
import { updateCustomer } from '../+state/actions';
import { selectCustomer } from '../+state/selectors';

@Component({
  selector: 'smartish-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  customer$ = selectCustomer;
  save = smartDispatch(updateCustomer);
}

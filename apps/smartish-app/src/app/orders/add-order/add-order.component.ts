import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addOrder } from '../+state/actions';
import { Order } from '../+state/order';
import { AddOrderForm } from './add-order.form';

@Component({
  selector: 'smartish-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent {
  form = new AddOrderForm();

  constructor(private readonly store: Store) {}

  save(): void {
    this.store.dispatch(addOrder({ order: this.form.value as Order }));
  }
}

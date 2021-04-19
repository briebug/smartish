import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteOrder, updateOrder } from '../+state/actions';
import { Order } from '../+state/order';
import { selectOrder } from '../+state/selectors';

@Component({
  selector: 'smartish-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  order$ = this.store.select(selectOrder);

  constructor(private readonly store: Store) {}

  save(order: Order): void {
    this.store.dispatch(updateOrder({ order }));
  }

  delete(order: Order): void {
    this.store.dispatch(deleteOrder({ order }));
  }
}

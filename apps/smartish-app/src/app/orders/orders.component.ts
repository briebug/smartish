import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Paginator } from '../interfaces';
import { updateOrderPagination } from './+state/actions';
import { Order } from './+state/order';
import { selectAllOrders, selectOrderPaginator } from './+state/selectors';

type OrderColumnKeys = keyof Order;

@Component({
  selector: 'smartish-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders$ = this.store.select(selectAllOrders);
  displayedColumns: OrderColumnKeys[] = [
    'id',
    'date',
    'customer',
    'total',
    'payment',
    'fulfillment',
    'items',
  ];

  paginator$ = this.store.select(selectOrderPaginator);

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateOrderPagination({ pagination }));
  }
}

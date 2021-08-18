import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
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
  orders$ = selectAllOrders;
  displayedColumns: OrderColumnKeys[] = [
    'id',
    'date',
    'customer',
    'total',
    'payment',
    'fulfillment',
    'items',
  ];
  paginator$ = selectOrderPaginator;
  updatePagination = smartDispatch(updateOrderPagination);
}

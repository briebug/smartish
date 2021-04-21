import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Paginator } from '../interfaces';
import { ShippingInvoice } from './+state/shipping-invoice';
import {
  selectAllShippings,
  selectShippingPaginator,
} from './+state/selectors';
import { updateShippingPagination } from './+state/actions';

type ShippingInvoiceColumnKeys = keyof ShippingInvoice;

@Component({
  selector: 'smartish-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  shippings$ = this.store.select(selectAllShippings);
  paginator$ = this.store.select(selectShippingPaginator);
  displayedColumns: ShippingInvoiceColumnKeys[] = [
    'id',
    'to',
    'date',
    'status',
    'amount',
  ];

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateShippingPagination({ pagination }));
  }
}

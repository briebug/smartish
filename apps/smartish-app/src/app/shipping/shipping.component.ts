import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/smartish-ngrx';
import { updateShippingPagination } from './+state/actions';
import {
  selectAllShippings,
  selectShippingPaginator,
} from './+state/selectors';
import { ShippingInvoice } from './+state/shipping-invoice';

type ShippingInvoiceColumnKeys = keyof ShippingInvoice;

@Component({
  selector: 'smartish-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  shippings$ = selectAllShippings;
  paginator$ = selectShippingPaginator;
  displayedColumns: ShippingInvoiceColumnKeys[] = [
    'id',
    'to',
    'date',
    'status',
    'amount',
  ];
  updatePagination = smartDispatch(updateShippingPagination);
}

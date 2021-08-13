import { createAction, props } from '@ngrx/store';
import { Paginator } from 'apps/smartish-app/src/app/interfaces';
import { ShippingInvoice } from './shipping-invoice';

export const setSelectedShippingInvoiceId = createAction(
  '[ROUTED TO SHIPPING INVOICE] Sets Shipping Invoice Id',
  props<{ selectedId: string }>()
);

export const getShippingInvoices = createAction(
  '[SHIPPING PAGE] Get All Shipping Invoices'
);

export const getShippingInvoicesSuccess = createAction(
  '[SHIPPING API] Get All Shipping Invoices Success',
  props<{ shipping: ShippingInvoice[] }>()
);

export const getShippingInvoicesFailed = createAction(
  '[SHIPPING API] Get All Shipping Invoices Failed',
  props<{ error: string }>()
);

export const updateShippingInvoice = createAction(
  '[SHIPMENT PAGE] Update Shiping Invoice',
  props<{ invoice: ShippingInvoice }>()
);

export const updateShippingInvoiceSuccess = createAction(
  '[SHIPPING API] Update Shipping Success',
  props<{ invoice: ShippingInvoice }>()
);

export const updateShippingInvoiceFailed = createAction(
  '[SHIPPING API] Update Shipping Failed',
  props<{ error: string }>()
);

export const updateShippingPagination = createAction(
  '[SHIPPING PAGE] Update Pagination Event',
  props<{ pagination: Paginator }>()
);

export const testAction = createAction(
  '[SHIPPING PAGE] Does this work propless'
);

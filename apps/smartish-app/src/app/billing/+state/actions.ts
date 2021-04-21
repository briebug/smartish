import { createAction, props } from '@ngrx/store';
import { Paginator } from '../../interfaces';
import { BillingInvoice } from './billing-invoice';

export const setSelectedBillingInvoiceId = createAction(
  '[ROUTED TO BILLING INVOICE] Sets Billing Invoice ID',
  props<{ selectedId: string }>()
);

export const getBillingInvoices = createAction(
  '[BILLING PAGE] Get All Billing Invoices'
);

export const getBillingInvoicesSuccess = createAction(
  '[BILLING API] Get All Billing Invoices Success',
  props<{ billings: BillingInvoice[] }>()
);

export const getBillingInvoicesFailed = createAction(
  '[BILLING API] Get All Billing Invoices Failed',
  props<{ error: string }>()
);

export const updateBillingInvoice = createAction(
  '[BILLING PAGE] Update Billing Invoice',
  props<{ invoice: BillingInvoice }>()
);

export const updateBillingInvoiceSuccess = createAction(
  '[BILLING API] Update Billing Success',
  props<{ invoice: BillingInvoice }>()
);

export const updateBillingInvoiceFailed = createAction(
  '[BILLING API] Update Billing Failed',
  props<{ error: string }>()
);

export const updateBillingPagination = createAction(
  '[BILLING PAGE] Update Pagination Event',
  props<{ pagination: Paginator }>()
);

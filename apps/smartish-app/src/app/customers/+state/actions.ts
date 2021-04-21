import { createAction, props } from '@ngrx/store';
import { Paginator } from 'apps/smartish-app/src/app/interfaces';
import { Customer } from './customer';

export const setSelectedCustomerId = createAction(
  '[ROUTED TO CUSTOMER] Sets Customer Id',
  props<{ selectedId: string }>()
);

export const getCustomers = createAction('[CUSTOMERS PAGE] Get All Customers');

export const getCustomersSuccess = createAction(
  '[CUSTOMER API] Get All Customers Success',
  props<{ customers: Customer[] }>()
);

export const getCustomersFailed = createAction(
  '[CUSTOMER API] Get All Customers Failed',
  props<{ error: string }>()
);

export const updateCustomer = createAction(
  '[CUSTOMER PAGE] Update Customer',
  props<{ customer: Customer }>()
);

export const updateCustomerSuccess = createAction(
  '[CUSTOMER API] Update Customer Success',
  props<{ customer: Customer }>()
);

export const updateCustomerFailed = createAction(
  '[CUSTOMER API] Update Customer Failed',
  props<{ error: string }>()
);

export const updateCustomerPagination = createAction(
  '[CUSTOMER PAGE] Update Pagination Event',
  props<{ pagination: Paginator }>()
);

import { Action, createReducer, on } from '@ngrx/store';
import { BaseState, Paginator } from 'apps/smartish-app/src/app/interfaces';
import {
  getShippingInvoices,
  getShippingInvoicesFailed,
  getShippingInvoicesSuccess,
  setSelectedShippingInvoiceId,
  updateShippingInvoice,
  updateShippingInvoiceFailed,
  updateShippingInvoiceSuccess,
  updateShippingPagination,
} from './actions';
import { ShippingInvoice } from './shipping-invoice';

export const SHIPPING_FEATURE = 'shipping';

export interface ShippingState extends BaseState {
  [SHIPPING_FEATURE]: ShippingInvoice[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: ShippingState = {
  [SHIPPING_FEATURE]: [],
  isLoading: false,
  pagination: {
    pageIndex: 0,
    length: 1,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};

const reducer = createReducer(
  initialState,
  on(setSelectedShippingInvoiceId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(updateShippingPagination, (state, { pagination }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      ...pagination,
    },
  })),
  on(getShippingInvoices, (state) => ({ ...state, isLoading: true })),
  on(getShippingInvoicesSuccess, (state, { shipping }) => ({
    ...state,
    shipping,
    isLoading: false,
    error: '',
    pagination: {
      ...state.pagination,
      length: shipping.length,
    },
  })),
  on(getShippingInvoicesFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(updateShippingInvoice, (state, { invoice }) => ({
    ...state,
    isLoading: true,
  })),
  on(updateShippingInvoiceSuccess, (state, { invoice }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(updateShippingInvoiceFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function shippingReducer(
  state = initialState,
  action: Action
): ShippingState {
  return reducer(state, action);
}

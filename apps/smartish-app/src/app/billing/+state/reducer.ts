import { Action, createReducer, on } from '@ngrx/store';
import { Paginator } from '../../interfaces';
import { BaseState } from '../../interfaces/base-state';
import {
  getBillingInvoices,
  getBillingInvoicesFailed,
  getBillingInvoicesSuccess,
  setSelectedBillingInvoiceId,
  updateBillingInvoice,
  updateBillingInvoiceFailed,
  updateBillingInvoiceSuccess,
  updateBillingPagination,
} from './actions';
import { BillingInvoice } from './billing-invoice';

export const BILLINGS_FEATURE = 'billings';

export interface BillingsState extends BaseState {
  [BILLINGS_FEATURE]: BillingInvoice[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: BillingsState = {
  [BILLINGS_FEATURE]: [],
  isLoading: false,
  pagination: {
    pageIndex: 0,
    length: 0,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};

const reducer = createReducer(
  initialState,
  on(setSelectedBillingInvoiceId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(updateBillingPagination, (state, { pagination }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      ...pagination,
    },
  })),
  on(getBillingInvoices, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getBillingInvoicesSuccess, (state, { billings }) => ({
    ...state,
    billings,
    isLoading: false,
    error: '',
    pagination: {
      ...state.pagination,
      length: billings.length,
    },
  })),
  on(updateBillingInvoice, (state, { invoice }) => ({
    ...state,
    isLoading: true,
  })),
  on(updateBillingInvoiceSuccess, (state, { invoice }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(
    updateBillingInvoiceFailed,
    getBillingInvoicesFailed,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })
  )
);

export function billingsReducer(
  state = initialState,
  action: Action
): BillingsState {
  return reducer(state, action);
}

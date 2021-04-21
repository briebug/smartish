import { Action, createReducer, on } from '@ngrx/store';
import { BaseState, Paginator } from 'apps/smartish-app/src/app/interfaces';
import {
  getCustomers,
  getCustomersFailed,
  getCustomersSuccess,
  setSelectedCustomerId,
  updateCustomer,
  updateCustomerFailed,
  updateCustomerPagination,
  updateCustomerSuccess,
} from './actions';
import { Customer } from './customer';

export const CUSTOMERS_FEATURE = 'customers';

export interface CustomersState extends BaseState {
  [CUSTOMERS_FEATURE]: Customer[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: CustomersState = {
  [CUSTOMERS_FEATURE]: [],
  pagination: {
    pageIndex: 0,
    length: 1,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
  isLoading: false,
};

const reducer = createReducer(
  initialState,
  on(setSelectedCustomerId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(updateCustomerPagination, (state, { pagination }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      ...pagination,
    },
  })),
  on(getCustomers, (state) => ({ ...state, isLoading: true })),
  on(getCustomersSuccess, (state, { customers }) => ({
    ...state,
    customers,
    isLoading: false,
    error: '',
    pagination: {
      ...state.pagination,
      length: customers.length,
    },
  })),
  on(getCustomersFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(updateCustomer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(updateCustomerSuccess, (state, { customer }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(updateCustomerFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function customersReducer(
  state = initialState,
  action: Action
): CustomersState {
  return reducer(state, action);
}

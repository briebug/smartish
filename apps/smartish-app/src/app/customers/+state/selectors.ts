import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomersState, CUSTOMERS_FEATURE } from './reducer';

const customersFeatureSelector = createFeatureSelector<CustomersState>(
  CUSTOMERS_FEATURE
);

export const selectCustomersIsLoading = createSelector(
  customersFeatureSelector,
  (state) => state.isLoading
);

export const selectCustomersError = createSelector(
  customersFeatureSelector,
  (state) => state.error
);

export const selectAllCustomers = createSelector(
  customersFeatureSelector,
  (state) => state[CUSTOMERS_FEATURE]
);

export const selectCustomerPaginator = createSelector(
  customersFeatureSelector,
  (state) => state.pagination
);

export const selectCustomer = createSelector(
  customersFeatureSelector,
  (state) =>
    state[CUSTOMERS_FEATURE].find(
      (customer) => customer.id === state.selectedId
    )
);

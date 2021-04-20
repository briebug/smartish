import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BillingsState, BILLINGS_FEATURE } from './reducer';

const billingFeatureSelector = createFeatureSelector<BillingsState>(
  BILLINGS_FEATURE
);

export const selectBillingIsLoading = createSelector(
  billingFeatureSelector,
  (state) => state?.isLoading
);

export const selectBillingError = createSelector(
  billingFeatureSelector,
  (state) => state?.error
);

export const selectAllBillings = createSelector(
  billingFeatureSelector,
  (state) => state[BILLINGS_FEATURE]
);

export const selectBillingPaginator = createSelector(
  billingFeatureSelector,
  (state) => state.pagination
);

export const selectBill = createSelector(billingFeatureSelector, (state) =>
  state[BILLINGS_FEATURE].find((bill) => bill.id === state.selectedId)
);

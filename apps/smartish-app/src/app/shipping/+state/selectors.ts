import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShippingState, SHIPPING_FEATURE } from './reducer';

const shippingFeatureSelector = createFeatureSelector<ShippingState>(
  SHIPPING_FEATURE
);

export const selectShippingIsLoading = createSelector(
  shippingFeatureSelector,
  (state) => state.isLoading
);

export const selectShippingError = createSelector(
  shippingFeatureSelector,
  (state) => state.error
);

export const selectAllShippings = createSelector(
  shippingFeatureSelector,
  (state) => state[SHIPPING_FEATURE]
);

export const selectShippingPaginator = createSelector(
  shippingFeatureSelector,
  (state) => state.pagination
);

export const selectShipment = createSelector(shippingFeatureSelector, (state) =>
  state[SHIPPING_FEATURE].find((shipment) => shipment.id === state.selectedId)
);

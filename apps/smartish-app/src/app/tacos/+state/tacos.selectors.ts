import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TacoState, TACO_FEATURE_KEY } from './tacos.reducer';

const selectTacoFeatureKey = createFeatureSelector<TacoState>(TACO_FEATURE_KEY);

export const selectTacos = createSelector(
  selectTacoFeatureKey,
  (state) => state.tacos
);

export const selectQuantity = createSelector(
  selectTacoFeatureKey,
  (state) => state.quantity
);

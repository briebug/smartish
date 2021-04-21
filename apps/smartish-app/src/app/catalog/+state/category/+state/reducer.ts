import { Action, createReducer } from '@ngrx/store';
import { BaseState } from 'apps/smartish-app/src/app/interfaces/base-state';
import { Category } from '../category';

export const CATEGORY_FEATURE_SLICE = 'category';

export interface CategoryState extends BaseState {
  [CATEGORY_FEATURE_SLICE]: Category[];
  selectedIds: string[];
}

const initialState: CategoryState = {
  [CATEGORY_FEATURE_SLICE]: [],
  selectedIds: [],
  isLoading: false,
};

const reducer = createReducer(initialState);

export function categoryReducer(
  state = initialState,
  action: Action
): CategoryState {
  return reducer(state, action);
}

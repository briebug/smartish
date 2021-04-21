import { ActionReducerMap } from '@ngrx/store';
import {
  categoryReducer,
  CategoryState,
  CATEGORY_FEATURE_SLICE,
} from './category/+state/reducer';
import {
  productReducer,
  ProductState,
  PRODUCT_FEATURE_SLICE,
} from './product/+state/reducer';

export const CATALOG_FEATURE = 'catalog';

export interface CatalogState {
  [PRODUCT_FEATURE_SLICE]: ProductState;
  [CATEGORY_FEATURE_SLICE]: CategoryState;
}

export const reducer: ActionReducerMap<CatalogState> = {
  [PRODUCT_FEATURE_SLICE]: productReducer,
  [CATEGORY_FEATURE_SLICE]: categoryReducer,
};

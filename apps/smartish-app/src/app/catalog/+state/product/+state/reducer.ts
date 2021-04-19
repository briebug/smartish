import { Action, createReducer, on } from '@ngrx/store';
import { BaseState, Paginator } from 'apps/smartish-app/src/app/interfaces';
import { Product } from '../product';
import {
  deleteProduct,
  deleteProductFailed,
  deleteProductSuccess,
  getProducts,
  getProductsFailed,
  getProductsSuccess,
  saveProduct,
  saveProductFailed,
  saveProductSuccess,
  setSelectedProductId,
  updateProduct,
  updateProductFailed,
  updateProductPagination,
  updateProductSuccess,
} from './actions';

export const PRODUCT_FEATURE_SLICE = 'product';

export interface ProductState extends BaseState {
  [PRODUCT_FEATURE_SLICE]: Product[];
  selectedId?: string;
  pagination: Paginator;
}

export const productInitialState: ProductState = {
  [PRODUCT_FEATURE_SLICE]: [],
  pagination: {
    pageIndex: 0,
    length: 2,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
  isLoading: false,
};

const reducer = createReducer(
  productInitialState,
  on(setSelectedProductId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(updateProductPagination, (state, { pagination }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      ...pagination,
    },
  })),
  on(getProducts, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getProductsSuccess, (state, { products }) => ({
    ...state,
    product: products,
    isLoading: false,
    error: '',
    pagination: {
      ...state.pagination,
      length: products.length,
    },
  })),
  on(getProductsFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(updateProduct, saveProduct, deleteProduct, (state, { product }) => ({
    ...state,
    isLoading: true,
  })),
  on(saveProductSuccess, (state, { product }) => ({
    ...state,
    product: [...state[PRODUCT_FEATURE_SLICE], product],
    isLoading: false,
    error: '',
  })),
  on(updateProductSuccess, (state, { product }) => ({
    ...state,
    product: [
      ...state[PRODUCT_FEATURE_SLICE].map((p) =>
        p.sku === product.sku ? product : p
      ),
    ],
    isLoading: false,
    error: '',
  })),
  on(deleteProductSuccess, (state, { product }) => ({
    ...state,
    product: [
      ...state[PRODUCT_FEATURE_SLICE].filter((p) => p.id !== product.id),
    ],
    isLoading: false,
    error: '',
  })),
  on(
    updateProductFailed,
    saveProductFailed,
    deleteProductFailed,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })
  )
);

export function productReducer(
  state = productInitialState,
  action: Action
): ProductState {
  return reducer(state, action);
}

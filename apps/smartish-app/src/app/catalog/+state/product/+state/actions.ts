import { createAction, props } from '@ngrx/store';
import { Paginator } from 'apps/smartish-app/src/app/interfaces';
import { Product } from '../product';

export const setSelectedProductId = createAction(
  '[ROUTED TO PRODUCT] Sets Product Id',
  props<{ selectedId: string }>()
);

export const getProducts = createAction('[CATALOG PAGE] Get All Products');

export const getProductsSuccess = createAction(
  '[PRODUCT API] Get All Products Success',
  props<{ products: Product[] }>()
);

export const getProductsFailed = createAction(
  '[PRODUCT API] Get All Products Failed',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[PRODUCT PAGE] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[PRODUCT API] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailed = createAction(
  '[PRODUCT API] Update Product Failed',
  props<{ error: string }>()
);

export const saveProduct = createAction(
  '[PRODUCT PAGE] Save Product From Form',
  props<{ product: Product }>()
);

export const saveProductSuccess = createAction(
  '[PRODUCT API] Save Product Success',
  props<{ product: Product }>()
);

export const saveProductFailed = createAction(
  '[PRODUCT API] Save Product Failed',
  props<{ error: string }>()
);

export const updateProductPagination = createAction(
  '[PRODUCT PAGE] Update Pagination Event',
  props<{ pagination: Paginator }>()
);

export const deleteProduct = createAction(
  '[PRODUCT PAGE] Delete Product Button Clicked',
  props<{ product: Product }>()
);

export const deleteProductSuccess = createAction(
  '[PRODUCT API] Delete Product Success',
  props<{ product: Product }>()
);

export const deleteProductFailed = createAction(
  '[PRODUCT API] Delete Product Failed',
  props<{ error: string }>()
);

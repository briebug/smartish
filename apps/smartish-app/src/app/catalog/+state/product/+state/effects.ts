import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import {
  extractVerifiedParameter,
  routeEqualsPath,
  routeIncludesPath,
} from 'apps/smartish-app/src/app/operators';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ProductService } from '../product.service';
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
  updateProductSuccess,
} from './actions';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {}

  getProductsWhenRoutedToCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeEqualsPath('/catalog'),
      map(() => getProducts())
    )
  );

  getAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      exhaustMap(() =>
        this.productService.loadAll().pipe(
          map((products) => getProductsSuccess({ products })),
          catchError((error) => of(getProductsFailed({ error })))
        )
      )
    )
  );

  setSelectedProductFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeIncludesPath('/catalog'),
      extractVerifiedParameter('productId'),
      map((selectedId) => setSelectedProductId({ selectedId }))
    )
  );

  productPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      map((action) => action.product),
      exhaustMap((product) =>
        this.productService.update(product).pipe(
          map((product) => updateProductSuccess({ product })),
          catchError((error) => of(updateProductFailed({ error })))
        )
      )
    )
  );

  addProductPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveProduct),
      map((action) => action.product),
      exhaustMap((product) =>
        this.productService.create(product).pipe(
          map((product) => saveProductSuccess({ product })),
          catchError((error) => of(saveProductFailed({ error })))
        )
      )
    )
  );

  productPageDeleteButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      map((action) => action.product.id),
      exhaustMap((productId) =>
        this.productService.delete(productId).pipe(
          map((product) => deleteProductSuccess({ product })),
          catchError((error) => of(deleteProductFailed({ error })))
        )
      )
    )
  );
}

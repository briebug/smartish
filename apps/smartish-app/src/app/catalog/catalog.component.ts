import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Paginator } from '../interfaces';
import {
  selectAllProducts,
  selectProductPaginator,
} from './+state/product/+state/selectors';
import { updateProductPagination } from './+state/product/+state/actions';
import { Product } from './+state/product/product';

type CatalogColumnKeys = keyof Product;

@Component({
  selector: 'smartish-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  catalog$ = this.store.select(selectAllProducts);
  paginator$ = this.store.select(selectProductPaginator);
  displayedColumns: CatalogColumnKeys[] = [
    'name',
    'status',
    'inventory',
    'category',
  ];

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateProductPagination({ pagination }));
  }
}

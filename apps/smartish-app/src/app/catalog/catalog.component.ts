import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Paginator } from '../interfaces';
import {
  selectAllProducts,
  selectProductPaginator,
} from './+state/product/+state/selectors';
import { updateProductPagination } from './+state/product/+state/actions';
import { Product } from './+state/product/product';
import { smartDispatch } from '@briebug/ngrx-smartish';

type CatalogColumnKeys = keyof Product;

@Component({
  selector: 'smartish-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  catalog$ = selectAllProducts;
  paginator$ = selectProductPaginator;
  displayedColumns: CatalogColumnKeys[] = [
    'name',
    'status',
    'inventory',
    'category',
  ];
  updatePagination = smartDispatch(updateProductPagination);
}

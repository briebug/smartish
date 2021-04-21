import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteProduct, updateProduct } from '../+state/product/+state/actions';
import { selectProduct, selectSizes } from '../+state/product/+state/selectors';
import { Product } from '../+state/product/product';

@Component({
  selector: 'smartish-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$ = this.store.select(selectProduct);
  sizes$ = this.store.select(selectSizes);

  constructor(private readonly store: Store) {}

  save(product: Product): void {
    this.store.dispatch(updateProduct({ product }));
  }

  delete(product: Product): void {
    this.store.dispatch(deleteProduct({ product }));
  }
}

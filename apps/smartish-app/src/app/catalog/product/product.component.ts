import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { deleteProduct, updateProduct } from '../+state/product/+state/actions';
import { selectProduct } from '../+state/product/+state/selectors';

@Component({
  selector: 'smartish-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$ = selectProduct;
  save = smartDispatch(updateProduct);
  delete = smartDispatch(deleteProduct);
}

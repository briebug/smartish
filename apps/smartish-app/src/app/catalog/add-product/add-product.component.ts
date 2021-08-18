import { Component, OnInit } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { Store } from '@ngrx/store';
import { saveProduct } from '../+state/product/+state/actions';
import { Product } from '../+state/product/product';
import { AddProductForm } from './add-product.form';

@Component({
  selector: 'smartish-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  form = new AddProductForm();
  save = smartDispatch(saveProduct);
}

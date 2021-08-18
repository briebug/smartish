import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { addOrder } from '../+state/actions';
import { AddOrderForm } from './add-order.form';

@Component({
  selector: 'smartish-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent {
  form = new AddOrderForm();
  save = smartDispatch(addOrder);
}

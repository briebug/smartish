import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/smartish-ngrx';
import { decrement, increment } from '../+state/tacos.actions';
import { selectQuantity } from '../+state/tacos.selectors';

@Component({
  selector: 'smartish-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  increment = smartDispatch(increment);
  decrement = smartDispatch(decrement);

  selectors = { selectQuantity };
}

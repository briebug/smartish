import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { deleteOrder, updateOrder } from '../+state/actions';
import { selectOrder } from '../+state/selectors';

@Component({
  selector: 'smartish-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  order$ = selectOrder;
  save = smartDispatch(updateOrder);
  delete = smartDispatch(deleteOrder);
}

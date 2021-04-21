import { createAction, props } from '@ngrx/store';
import { Paginator } from 'apps/smartish-app/src/app/interfaces';
import { Order } from './order';

export const setSelectedOrderId = createAction(
  '[ROUTED TO ORDER] Sets Order Id',
  props<{ selectedId: string }>()
);

export const getOrders = createAction('[ORDERS PAGE] Get All Orders');

export const getOrdersSuccess = createAction(
  '[ORDERS API] Get All Orders Success',
  props<{ orders: Order[] }>()
);

export const getOrdersFailed = createAction(
  '[ORDERS API] Get All Orders Failed',
  props<{ error: string }>()
);

export const updateOrder = createAction(
  '[ORDER PAGE] Update Order',
  props<{ order: Order }>()
);

export const updateOrderSuccess = createAction(
  '[ORDER API] Update Order Success',
  props<{ order: Order }>()
);

export const updateOrderFailed = createAction(
  '[ORDER API] Update Order Failed',
  props<{ error: string }>()
);

export const updateOrderPagination = createAction(
  '[ORDER PAGE] Update Pagination Event',
  props<{ pagination: Paginator }>()
);

export const addOrder = createAction(
  '[ADD ORDER PAGE] Add Order',
  props<{ order: Order }>()
);

export const addOrderSuccess = createAction(
  '[ORDER API] Add Order Sucess',
  props<{ order: Order }>()
);

export const addOrderFailed = createAction(
  '[ORDER API] Add Order Failed',
  props<{ error: string }>()
);

export const deleteOrder = createAction(
  '[ORDER PAGE] Delete Order Button Clicked',
  props<{ order: Order }>()
);

export const deleteOrderSuccess = createAction(
  '[ORDER API] Delete Order Success',
  props<{ order: Order }>()
);

export const deleteOrderFailed = createAction(
  '[ORDER API] Delete Order Failed',
  props<{ error: string }>()
);

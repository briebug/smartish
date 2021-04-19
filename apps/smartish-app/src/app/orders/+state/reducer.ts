import { Action, createReducer, on } from '@ngrx/store';
import { BaseState, Paginator } from 'apps/smartish-app/src/app/interfaces';
import {
  addOrder,
  addOrderFailed,
  addOrderSuccess,
  deleteOrder,
  deleteOrderFailed,
  deleteOrderSuccess,
  getOrders,
  getOrdersFailed,
  getOrdersSuccess,
  setSelectedOrderId,
  updateOrder,
  updateOrderFailed,
  updateOrderPagination,
  updateOrderSuccess,
} from './actions';
import { Order } from './order';

export const ORDERS_FEATURE = 'orders';

export interface OrdersState extends BaseState {
  [ORDERS_FEATURE]: Order[];
  selectedId?: string;
  pagination: Paginator;
}

const initialState: OrdersState = {
  [ORDERS_FEATURE]: [],
  isLoading: false,
  pagination: {
    pageIndex: 0,
    length: 2,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};

const reducer = createReducer(
  initialState,
  on(setSelectedOrderId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(updateOrderPagination, (state, { pagination }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      ...pagination,
    },
  })),
  on(getOrders, updateOrder, addOrder, deleteOrder, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    isLoading: false,
    error: '',
    pagination: {
      ...state.pagination,
      length: orders.length,
    },
  })),
  on(updateOrderSuccess, (state, { order }) => ({
    ...state,
    isLoading: false,
    error: '',
  })),
  on(addOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state[ORDERS_FEATURE], order],
    isLoading: false,
    error: '',
  })),
  on(deleteOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state[ORDERS_FEATURE].filter((o) => o.id !== order.id)],
    isLoading: false,
    error: '',
  })),
  on(
    getOrdersFailed,
    updateOrderFailed,
    addOrderFailed,
    deleteOrderFailed,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })
  )
);

export function ordersReducer(
  state = initialState,
  action: Action
): OrdersState {
  return reducer(state, action);
}

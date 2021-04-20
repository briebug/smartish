import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  selectBillingError,
  selectBillingIsLoading,
} from './billing/+state/selectors';
import {
  selectAllProducts,
  selectProductError,
  selectProductIsLoading,
} from './catalog/+state/product/+state/selectors';
import {
  selectAllCustomers,
  selectCustomersError,
  selectCustomersIsLoading,
} from './customers/+state/selectors';
import {
  selectAllOrders,
  selectOrdersError,
  selectOrdersIsLoading,
} from './orders/+state/selectors';
import {
  selectShippingError,
  selectShippingIsLoading,
} from './shipping/+state/selectors';

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectProductIsLoading,
  selectCustomersIsLoading,
  selectOrdersIsLoading,
  selectBillingIsLoading,
  selectShippingIsLoading,
  (
    productIsLoading: boolean,
    customersIsLoading: boolean,
    ordersIsLoading: boolean,
    billingIsLoading: boolean,
    shippingIsLoading: boolean
  ) =>
    productIsLoading ||
    customersIsLoading ||
    ordersIsLoading ||
    billingIsLoading ||
    shippingIsLoading
);

export const selectError: MemoizedSelector<object, string> = createSelector(
  selectProductError,
  selectCustomersError,
  selectOrdersError,
  selectBillingError,
  selectShippingError,
  (
    productError: string,
    customersError: string,
    ordersError: string,
    billingError: string,
    shippingError: string
  ) =>
    productError ||
    customersError ||
    ordersError ||
    billingError ||
    shippingError
);

export const selectDashboardPreviews = createSelector(
  selectAllOrders,
  selectAllCustomers,
  selectAllProducts,
  (orders, customers, products) => [
    {
      title: 'Orders',
      subtitle: 'Today',
      total: orders.length,
      url: '/orders',
    },
    {
      title: 'Customers',
      subtitle: 'Today',
      total: customers.length,
      url: '/customers',
    },
    {
      title: 'Products',
      subtitle: 'Today',
      total: products.length,
      url: '/products',
    },
  ]
);

import { createSelector } from '@ngrx/store';
import { selectAllProducts } from '../catalog/+state/product/+state/selectors';
import { selectAllCustomers } from '../customers/+state/selectors';
import { selectAllOrders } from '../orders/+state/selectors';

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

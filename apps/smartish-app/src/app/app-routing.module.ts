import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'billing',
    loadChildren: () =>
      import('./billing/billing.module').then((m) => m.BillingModule),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'shipping',
    loadChildren: () =>
      import('./shipping/shipping.module').then((m) => m.ShippingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

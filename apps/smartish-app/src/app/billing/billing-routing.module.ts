import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { BillingComponent } from './billing.component';

const routes: Routes = [
  {
    path: '',
    component: BillingComponent,
  },
  {
    path: ':billingId',
    component: BillComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BillingStateModule } from './+state/billing-state.module';
import { BillComponent } from './bill/bill.component';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';

@NgModule({
  declarations: [BillingComponent, BillComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    BillingStateModule,
    SharedModule,
    MaterialModule,
  ],
})
export class BillingModule {}

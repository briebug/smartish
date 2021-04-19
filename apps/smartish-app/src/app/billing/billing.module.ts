import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillComponent } from './bill/bill.component';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { BillingStateModule } from './billing-state.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [BillingComponent, BillComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    BillingStateModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
  ],
})
export class BillingModule {}

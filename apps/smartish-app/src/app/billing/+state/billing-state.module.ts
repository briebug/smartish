import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BillingsEffects } from './effects';
import { billingsReducer, BILLINGS_FEATURE } from './reducer';
import { BillingService } from '../billing.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StoreModule.forFeature(BILLINGS_FEATURE, billingsReducer),
    EffectsModule.forFeature([BillingsEffects]),
  ],
  providers: [BillingService],
})
export class BillingStateModule {}

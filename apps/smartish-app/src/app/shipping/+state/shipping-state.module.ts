import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingService } from '../shipping.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { shippingReducer, SHIPPING_FEATURE } from './reducer';
import { ShippingEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SHIPPING_FEATURE, shippingReducer),
    EffectsModule.forFeature([ShippingEffects]),
  ],
  providers: [ShippingService],
})
export class ShippingStateModule {}

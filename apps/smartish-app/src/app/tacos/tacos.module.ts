import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartishNgRxPipesModule } from '@briebug/smartish-ngrx';
import { StoreModule } from '@ngrx/store';
import { TACO_FEATURE_KEY, reducer } from './+state/tacos.reducer';
import { TacosComponent } from './tacos.component';
import { QuantityComponent } from './quantity/quantity.component';

@NgModule({
  declarations: [TacosComponent, QuantityComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(TACO_FEATURE_KEY, reducer),
    SmartishNgRxPipesModule,
  ],
  exports: [TacosComponent, QuantityComponent],
})
export class TacosModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CATALOG_FEATURE, reducer } from './reducer';
import { ProductService } from './product/product.service';
import { CategoryService } from './category/category.service';
import { ProductEffects } from './product/+state/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(CATALOG_FEATURE, reducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [CategoryService, ProductService],
})
export class CatalogStateModule {}

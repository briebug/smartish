import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmartishNgRxPipesModule } from '@briebug/smartish-ngrx';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CatalogStateModule } from './+state/catalog-state.module';
import { AddProductComponent } from './add-product/add-product.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [CatalogComponent, AddProductComponent, ProductComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CatalogStateModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SmartishNgRxPipesModule,
  ],
})
export class CatalogModule {}

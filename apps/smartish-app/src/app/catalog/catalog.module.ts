import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { CatalogStateModule } from './+state/catalog-state.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CatalogComponent, AddProductComponent, ProductComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CatalogStateModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CatalogModule {}

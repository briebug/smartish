import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CatalogComponent } from './catalog.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'product/add',
    component: AddProductComponent,
    pathMatch: 'full',
  },
  {
    path: ':productId',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}

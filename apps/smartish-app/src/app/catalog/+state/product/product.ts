import { Category } from '../category/category';
import { Product as IProduct } from 'apps/smartish-app/src/app/interfaces';

export interface Product extends IProduct {
  id?: string;
  inventory?: string;
  category?: Category;
}

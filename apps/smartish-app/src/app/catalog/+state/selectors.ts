import { createFeatureSelector } from '@ngrx/store';
import { CatalogState, CATALOG_FEATURE } from './reducer';

export const catalogFeatureSelector = createFeatureSelector<CatalogState>(
  CATALOG_FEATURE
);

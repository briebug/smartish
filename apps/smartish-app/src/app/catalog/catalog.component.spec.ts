import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartishNgRxTestingModule } from '@briebug/ngrx-smartish';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import {
  productInitialState,
  ProductState,
} from './+state/product/+state/reducer';

import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogComponent],
      imports: [
        SharedModule,
        MaterialModule,
        SmartishNgRxTestingModule.forRoot<ProductState>({
          initialState: productInitialState,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

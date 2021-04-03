import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartishNgRxPipesTestingModule } from '@briebug/smartish-ngrx';

import { QuantityComponent } from './quantity.component';

describe('QuantityComponent', () => {
  let component: QuantityComponent;
  let fixture: ComponentFixture<QuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuantityComponent],
      imports: [SmartishNgRxPipesTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

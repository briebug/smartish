import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  SmartishNgRxPipesTestingModule,
  SmartishNgRxTestingModule,
} from '@briebug/smartish-ngrx';

import { TacosComponent } from './tacos.component';

describe('TacosComponent', () => {
  let component: TacosComponent;
  let fixture: ComponentFixture<TacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TacosComponent],
      imports: [
        SmartishNgRxTestingModule.forRoot(),
        SmartishNgRxPipesTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

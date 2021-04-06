import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SmartishNgRxTestingModule } from '@briebug/smartish-ngrx';
import { AppComponent } from './app.component';
import { QuantityComponent } from './tacos/quantity/quantity.component';
import { TacosComponent } from './tacos/tacos.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TacosComponent, QuantityComponent],
      imports: [SmartishNgRxTestingModule.forRoot({}), ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

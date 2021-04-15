import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartishNgRxTestingModule } from '@briebug/smartish-ngrx';
import { MockStore, MockStoreConfig } from '@ngrx/store/testing';
import { Taco } from './+state/tacos.models';
import { TacoState } from './+state/tacos.reducer';
import { selectTacos } from './+state/tacos.selectors';
import { take } from 'rxjs/operators';

import { TacosComponent } from './tacos.component';

describe('TacosComponent', () => {
  let component: TacosComponent;
  let fixture: ComponentFixture<TacosComponent>;
  let store: MockStore;

  const tacos = [
    { meat: 'Beef', shell: 'Chalupa', toppings: ['Cheese', 'Tomato'] },
    {
      meat: 'Chicken',
      shell: 'Dorito Locos',
      toppings: ['Lettuce', 'Cheese', 'Guacamole', 'Hot Sauce'],
    },
  ] as Taco[];

  const config = {
    initialState: { tacos: [] },
    selectors: [
      {
        selector: selectTacos,
        value: tacos,
      },
    ],
  } as MockStoreConfig<TacoState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TacosComponent],
      imports: [SmartishNgRxTestingModule.forRoot(config)],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select tacos from store', () => {
    // arrange
    const expected = tacos;

    // act
    component.tacos$.pipe(take(1)).subscribe((actual) => {
      // assert
      expect(actual).toEqual(expected);
    });
  });
});

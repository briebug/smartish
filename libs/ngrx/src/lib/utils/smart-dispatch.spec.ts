import { TestBed } from '@angular/core/testing';
import { createAction } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { InjectorLocator } from '../injector-locator/injector-locator';
import { SmartishNgRxTestingModule } from '../ngrx-testing.module';
import { SmartishNgRxModule } from '../ngrx.module';
import { smartDispatch } from './smart-dispatch';

describe('smartDispatch', () => {
  let store: MockStore;
  let action = createAction('TEST');
  let injectorLocator: InjectorLocator;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartishNgRxTestingModule.forRoot()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    injectorLocator = TestBed.inject(InjectorLocator);
  });
  it('can create an instance', () => {
    // act
    const actual = smartDispatch(action);

    // assert
    expect(actual).toBeTruthy();
  });

  it('has a reference to InjectorLocator', () => {
    expect(injectorLocator).toBeTruthy();
  });

  it('calls store.dispatch', () => {
    // arrange
    spyOn(store, 'dispatch');
    const expected = smartDispatch(action);

    // act
    expected();

    // assert
    expect(store.dispatch).toHaveBeenCalledWith(action());
  });
});

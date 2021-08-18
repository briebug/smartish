import { TestBed } from '@angular/core/testing';
import { createSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SmartSelectPipe } from './smart-select.pipe';

describe('SelectorPipe', () => {
  let store: MockStore;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartSelectPipe],
      providers: [provideMockStore({ initialState })],
    });

    store = TestBed.inject(MockStore);
  });
  it('create an instance', () => {
    const pipe = new SmartSelectPipe(store);
    expect(pipe).toBeTruthy();
  });

  it('should dispatch to store the given MemoizedSelector', () => {
    // arrange
    const pipe = new SmartSelectPipe(store);
    const state = () => null;
    const selector = createSelector(state, (state) => state);
    spyOn(store, 'select');

    // act
    pipe.transform(selector);

    // assert
    expect(store.select).toHaveBeenCalledWith(selector);
  });
});

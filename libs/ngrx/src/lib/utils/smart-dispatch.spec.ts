import { TestBed } from '@angular/core/testing';
import { createAction } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { SmartishNgRxTestingModule } from '../ngrx-testing.module';
import { smartDispatch } from './smart-dispatch';

describe('smartDispatch', () => {
  let store: MockStore;
  let action = createAction('TEST');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartishNgRxTestingModule.forRoot()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });
  it('can create an instance', () => {
    // act
    const actual = smartDispatch(action);

    // assert
    expect(actual).toBeTruthy();
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

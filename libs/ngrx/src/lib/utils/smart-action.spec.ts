import { TestBed } from '@angular/core/testing';
import { ActionCreator, createAction, props } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SmartishNgRxModule } from '../ngrx.module';
import { smartAction } from './smart-action';
import { smartDispatch } from './smart-dispatch';

describe('smartAction', () => {
  let store: MockStore;
  let action = createAction('TEST', props<{ name: string }>());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartishNgRxModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  it('can create an instance', () => {
    // arrange
    // act
    const actual = smartAction(action);

    // assert
    expect(actual).toBeTruthy();
  });

  it('returns object with dispatch method', () => {
    // arrange
    const actual = (action: ActionCreator) => smartAction(action);

    // act
    const expected = actual(action);

    // assert
    expect(expected.dispatch).toBeTruthy();
  });

  it('dispatches action after calling smartAction.dispatch', () => {
    // arrange
    //   const mySmartAction = smartAction(action);
    //   spyOn(mySmartAction(action), 'dispatch');
    //   // act
    //   mySmartAction(action);
    //   // assert
    //   expect(store).toHaveBeenCalledWith(action({ name: 'test' }));
  });
});

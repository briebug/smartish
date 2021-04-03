import { ActionCreator, Creator, Store } from '@ngrx/store';
import { FunctionWithParametersType } from '@ngrx/store/src/models';
import { InjectorLocator } from '../injector-locator/injector-locator';

export const smartDispatch = <
  T extends string = string,
  C extends Creator = Creator,
  P extends any[] = any[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  R extends object = object
>(
  action: ActionCreator<T, C>
): FunctionWithParametersType<P, R> => {
  const dispatch = (...args: P): R => {
    const store = (InjectorLocator as any)._injector.get(Store);

    return store.dispatch(action(args));
  };
  return dispatch;
};

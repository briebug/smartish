import { ActionCreator, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { InjectorLocator } from '../injector-locator/injector-locator';
import { SMARTISH_STORE_TOKEN } from '../token';

export const smartDispatch = <T extends string, P extends object>(
  action:
    | ActionCreator<T, () => TypedAction<T>>
    | ActionCreator<T, (props: P) => P & TypedAction<T>>
) => (args?: P) => {
  const store = (InjectorLocator as any)['_injector'].get(
    SMARTISH_STORE_TOKEN
  ) as Store<any>;
  store.dispatch(action(args) as TypedAction<T>);
};

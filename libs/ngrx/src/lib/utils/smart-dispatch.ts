import { SMARTISH_STORE_TOKEN } from '@briebug/smartish-ngrx';
import { ActionCreator, Creator, Store } from '@ngrx/store';
import {
  FunctionWithParametersType,
  TypedAction,
} from '@ngrx/store/src/models';
import { InjectorLocator } from '../injector-locator/injector-locator';

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

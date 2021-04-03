import { ActionCreator, Creator } from '@ngrx/store';
import { FunctionWithParametersType } from '@ngrx/store/src/models';
import { smartDispatch } from './smart-dispatch';

export interface DispachableAction<P extends unknown[], R = void> {
  dispatch: FunctionWithParametersType<P, R>;
}

export const smartAction = <
  T extends string = string,
  C extends Creator = Creator,
  P extends any[] = any[],
  R extends object = object
>(
  action: ActionCreator<T, C>
): ActionCreator<T, C> & DispachableAction<P, R> => {
  return { ...action, dispatch: smartDispatch(action) };
};

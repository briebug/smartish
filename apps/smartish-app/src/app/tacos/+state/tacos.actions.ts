import { createAction, props } from '@ngrx/store';
import { Taco } from './tacos.models';

export const tacoAction = createAction(
  '[Taco Component] dispatching using NgRxSmartish Component Abstract Class'
);

export const increment = createAction('[QUANTITY COMPONENT] Increment');

export const decrement = createAction('[QUANTITY COMPONENT] Decrement');

export const addTaco = createAction(
  '[APP COMPONENT] Add Taco',
  props<{ taco: Taco }>()
);

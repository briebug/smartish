import { Action, createReducer, on } from '@ngrx/store';
import { addTaco, decrement, increment } from './tacos.actions';
import { Taco } from './tacos.models';

export const TACO_FEATURE_KEY = 'tacos';

export interface TacoState {
  [TACO_FEATURE_KEY]: Taco[];
  quantity: number;
  isLoading: boolean;
  error: string;
}

export const initialState: TacoState = {
  [TACO_FEATURE_KEY]: [
    {
      shell: 'Dorito Locos',
      meat: 'Steak',
      toppings: [
        'Cheese',
        'Guacamole',
        'Guacamole',
        'Hot Sauce',
        'Tomato',
        'Lettuce',
      ],
    },
  ],
  quantity: 0,
  isLoading: false,
  error: '',
};

const tacoReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    quantity: state.quantity + 1,
  })),
  on(decrement, (state) => ({
    ...state,
    quantity: state.quantity - 1,
  })),
  on(addTaco, (state, { taco }) => ({
    ...state,
    tacos: [...state.tacos, taco],
  }))
);

export function reducer(state = initialState, action: Action): TacoState {
  return tacoReducer(state, action);
}

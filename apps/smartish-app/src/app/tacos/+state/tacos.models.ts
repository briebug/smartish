export type Shell = 'Hard' | 'Soft' | 'Dorito Locos' | 'Chalupa';
export type Meat = 'Chicken' | 'Beef' | 'Pork' | 'Steak';
export type Toppings =
  | 'Lettuce'
  | 'Tomato'
  | 'Hot Sauce'
  | 'Cheese'
  | 'Source Cream'
  | 'Guacamole';

export interface Taco {
  shell: Shell;
  meat: Meat;
  toppings: Toppings[];
}

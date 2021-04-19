import { Person } from './person';

export interface Customer extends Person {
  id: string;
  totalOrders: number;
  totalSpent: number;
}

import { Person } from './person';

export interface Invoice {
  id: string;
  date: Date;
  amount: number;
  to: Person;
}

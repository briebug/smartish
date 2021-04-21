import { Customer } from 'apps/smartish-app/src/app/interfaces';

export type Payment = 'Paid' | 'Unpaid' | 'Refunded';
export type Fulfillment = 'Fulfilled' | 'Unfulfilled';

export interface Order {
  id: string;
  date: Date;
  customer: Customer;
  total: number;
  payment: Payment;
  fulfillment: Fulfillment;
  items: number;
}

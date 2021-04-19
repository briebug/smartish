import { Address } from './address';

export interface Person {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: Address;
}

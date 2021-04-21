import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Address } from './address';

@Entity()
export class Person {
  @ObjectIdColumn() id: number;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() phone: string;
  @Column() email: string;
  @Column() address: Address;
}

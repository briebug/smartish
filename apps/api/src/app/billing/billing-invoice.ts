import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Person } from 'apps/api/src/app/shared/entities';

@Entity()
export class BillingInvoice {
  @ObjectIdColumn() id: number;
  @Column() date: Date;
  @Column() amount: number;
  @Column() to: Person;
}

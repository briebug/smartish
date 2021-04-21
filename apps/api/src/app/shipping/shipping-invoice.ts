import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from 'apps/api/src/app/shared/entities';

@Entity()
export class ShippingInvoice {
  @PrimaryGeneratedColumn() id: string;

  @Column() date: Date;

  @Column() amount: number;

  @Column() to: Person;
}

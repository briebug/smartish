import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from 'apps/api/src/app/shared/entities';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn() id: number;

  @Column() firstName: string;

  @Column() lastName: string;

  @Column() phone: string;

  @Column() email: string;

  @Column() address: Address;
}

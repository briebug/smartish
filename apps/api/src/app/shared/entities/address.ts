import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Address {
  @ObjectIdColumn() id: number;
  @Column() addressLine1: string;
  @Column() addressLine2?: string;
  @Column() city: string;
  @Column() state: string;
  @Column() zip: number;
}

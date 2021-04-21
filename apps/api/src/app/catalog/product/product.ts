import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Photo, Size, Status } from 'apps/api/src/app/shared/entities';

@Entity()
export class Product {
  @ObjectIdColumn() id: string;

  @Column() name: string;

  @Column() sku: string;

  @Column() size: Size;

  @Column() quantity: number;

  @Column({ default: 'Inactive' }) status: Status;

  @Column() description: string;

  @Column() photos: Photo[];
}

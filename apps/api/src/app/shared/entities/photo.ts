import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Photo {
  @ObjectIdColumn() id: string;
  @Column() source: string;
  @Column() title: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class CatEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    name: 'name',
    nullable: true,
  })
  name: string;

  @Column({
    type: 'smallint',
    name: 'age',
    nullable: true,
  })
  age: number;

  @Column({
    type: 'text',
    name: 'type',
    nullable: true,
  })
  type: string;
}

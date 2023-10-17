import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('radio')
export class RadioEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cover: string;
}

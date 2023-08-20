import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}

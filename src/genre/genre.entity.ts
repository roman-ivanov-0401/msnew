import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('podcaster')
export class PodcasterEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  avatar: string;
}

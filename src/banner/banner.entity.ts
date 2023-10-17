import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('banner')
export class BannerEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cover: string;
}

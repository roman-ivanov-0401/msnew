import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserSchema {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  avatar: string;

  @Column()
  password: string;
}

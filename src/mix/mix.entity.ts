import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { TrackEntity } from '../track/track.entity';

@Entity('mix')
export class MixEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => TrackEntity)
  tracks: TrackEntity[];
}

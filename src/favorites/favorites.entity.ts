import { Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { TrackEntity } from '../track/track.entity';

@Entity('favorites')
export class FavoritesEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToMany(() => TrackEntity)
  tracks: TrackEntity[];
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TrackEntity } from '../track/track.entity';
import { GenreEntity } from '../genre/genre.entity';
import { CommentEntity } from '../comment/comment.entity';
import { ArtistEntity } from '../artist/artist.entity';

@Entity('single')
export class SingleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cover: string;

  @Column()
  duration: number;

  @Column()
  year: number;

  @Column()
  listens: number;

  @ManyToMany(() => ArtistEntity)
  @JoinTable()
  authors: ArtistEntity[];

  @ManyToOne(() => TrackEntity, (track) => track.single)
  tracks: TrackEntity;

  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.ep)
  comments: CommentEntity[];
}

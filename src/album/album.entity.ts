import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { GenreEntity } from '../genre/genre.entity';
import { CommentEntity } from '../comment/comment.entity';
import { TrackEntity } from '../track/track.entity';
import { ArtistEntity } from '../artist/artist.entity';

@Entity('album')
export class AlbumEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cover: string;

  @ManyToMany(() => ArtistEntity)
  @JoinTable()
  authors: ArtistEntity[];

  @Column()
  duration: number;

  @Column()
  year: number;

  @Column()
  listens: number;

  @OneToMany(() => TrackEntity, (track) => track.album)
  tracks: TrackEntity[];

  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.album)
  comments: CommentEntity[];
}

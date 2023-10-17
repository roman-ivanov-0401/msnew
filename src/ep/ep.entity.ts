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

@Entity('ep')
export class EPEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cover: string;

  @ManyToMany(() => ArtistEntity)
  @JoinTable()
  authors: ArtistEntity[];

  @ManyToOne(() => TrackEntity, (track) => track.single)
  tracks: TrackEntity[];

  @Column()
  duration: number;

  @Column()
  year: number;

  @Column()
  listens: number;

  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.ep)
  comments: CommentEntity[];
}

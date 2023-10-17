import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { AlbumEntity } from '../album/album.entity';
import { ArtistEntity } from '../artist/artist.entity';
import { EPEntity } from '../ep/ep.entity';
import { SingleEntity } from '../single/single.entity';

@Entity('track')
export class TrackEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  lyrics: string;

  @ManyToMany(() => ArtistEntity)
  feats: ArtistEntity[];

  @Column()
  listens: string;

  @ManyToOne(() => AlbumEntity, (album) => album.tracks)
  album: AlbumEntity;

  @ManyToOne(() => EPEntity, (ep) => ep.tracks)
  ep: EPEntity;

  @ManyToOne(() => SingleEntity, (single) => single.tracks)
  single: SingleEntity;
}

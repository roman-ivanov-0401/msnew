import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { AlbumEntity } from '../album/album.entity';
import { EPEntity } from '../ep/ep.entity';
import { SingleEntity } from '../single/single.entity';

@Entity('artist')
export class ArtistEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @ManyToMany(() => AlbumEntity)
  @JoinTable()
  albums: AlbumEntity[];

  @ManyToMany(() => EPEntity)
  @JoinTable()
  eps: EPEntity[];

  @ManyToMany(() => SingleEntity)
  @JoinTable()
  singles: SingleEntity[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AlbumEntity } from '../album/album.entity';
import { EPEntity } from '../ep/ep.entity';
import { SingleEntity } from '../single/single.entity';
import { ArtistEntity } from '../artist/artist.entity';
import { PodcastEntity } from '../podcast/podcast.entity';
import { PodcasterEntity } from '../podcaster/podcaster.entity';
import { RadioEntity } from '../radio/radio.entity';
import { MixEntity } from '../mix/mix.entity';
import { FavoritesEntity } from '../favorites/favorites.entity';

@Entity('library')
export class LibraryEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToMany(() => AlbumEntity)
  @JoinTable()
  albums: AlbumEntity[];

  @ManyToMany(() => EPEntity)
  @JoinTable()
  eps: EPEntity[];

  @ManyToMany(() => SingleEntity)
  @JoinTable()
  singles: SingleEntity[];

  @OneToOne(() => FavoritesEntity)
  @JoinColumn()
  favorites: FavoritesEntity;

  @ManyToMany(() => ArtistEntity)
  @JoinTable()
  follows: ArtistEntity[];

  @ManyToMany(() => PodcastEntity)
  @JoinTable()
  podcasts: PodcastEntity[];

  @ManyToMany(() => PodcasterEntity)
  @JoinTable()
  podcasters: PodcasterEntity[];

  @ManyToMany(() => RadioEntity)
  @JoinTable()
  stations: RadioEntity[];

  @ManyToMany(() => MixEntity)
  @JoinTable()
  mixes: MixEntity;
}

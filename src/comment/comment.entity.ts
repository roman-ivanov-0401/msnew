import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AlbumEntity } from '../album/album.entity';
import { EPEntity } from '../ep/ep.entity';
import { SingleEntity } from '../single/single.entity';
import { PodcastEntity } from '../podcast/podcast.entity';
import { PlaylistEntity } from '../playlist/playlist.entity';
import { ArticleEntity } from '../article/article.entity';

@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => AlbumEntity, (album) => album.comments)
  album: AlbumEntity;

  @ManyToOne(() => EPEntity, (ep) => ep.comments)
  ep: EPEntity;

  @ManyToOne(() => SingleEntity, (single) => single.comments)
  single: SingleEntity;

  @ManyToOne(() => PodcastEntity, (podcast) => podcast.comments)
  podcast: PodcastEntity;

  @ManyToOne(() => PlaylistEntity, (playlist) => playlist.comments)
  playlist: PlaylistEntity;

  @ManyToOne(() => ArticleEntity, (article) => article.comments)
  article: ArticleEntity;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ArticleEntity } from '../article/article.entity';
import { PlaylistEntity } from '../playlist/playlist.entity';
import { LibraryEntity } from '../library/library.entity';

@Entity('user')
export class UserEntity {
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

  @OneToMany(() => PlaylistEntity, (playlist) => playlist.author)
  playlists: PlaylistEntity[];

  @OneToMany(() => ArticleEntity, (article) => article.author)
  articles: ArticleEntity[];

  @OneToOne(() => LibraryEntity)
  @JoinColumn()
  library: LibraryEntity;
}

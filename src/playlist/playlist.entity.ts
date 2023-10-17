import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { CommentEntity } from '../comment/comment.entity';

@Entity('playlist')
export class PlaylistEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cover: string;

  @ManyToOne(() => UserEntity, (user) => user.playlists)
  author: UserEntity;

  @Column()
  listens: number;

  @Column()
  tracks: string;

  @OneToMany(() => CommentEntity, (comment) => comment.ep)
  comments: CommentEntity[];
}

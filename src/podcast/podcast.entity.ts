import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';

@Entity('podcast')
export class PodcastEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  file: string;

  @Column()
  cover: string;

  @Column()
  listens: string;

  @OneToMany(() => CommentEntity, (comment) => comment.ep)
  comments: CommentEntity[];
}

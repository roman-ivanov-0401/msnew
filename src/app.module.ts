import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GenreModule } from './genre/genre.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LibraryModule } from './library/library.module';
import { AlbumModule } from './album/album.module';
import { EpModule } from './ep/ep.module';
import { SingleModule } from './single/single.module';
import { TrackModule } from './track/track.module';
import { CommentModule } from './comment/comment.module';
import { ArtistModule } from './artist/artist.module';
import { RadioModule } from './radio/radio.module';
import { PodcasterModule } from './podcaster/podcaster.module';
import { PodcastModule } from './podcast/podcast.module';
import { ArticleModule } from './article/article.module';
import { PlaylistModule } from './playlist/playlist.module';
import { FavoritesModule } from './favorites/favorites.module';
import { BannerModule } from './banner/banner.module';
import { MixModule } from './mix/mix.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GenreModule,
    UserModule,
    AuthModule,
    LibraryModule,
    AlbumModule,
    EpModule,
    SingleModule,
    TrackModule,
    CommentModule,
    ArtistModule,
    RadioModule,
    PodcasterModule,
    PodcastModule,
    ArticleModule,
    PlaylistModule,
    FavoritesModule,
    BannerModule,
    MixModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

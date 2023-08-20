import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './genre.entity';
import { ObjectId, Repository } from 'typeorm';
import { GenreDto } from './genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  getAll(): Promise<Genre[]> {
    try {
      return this.genreRepository.find();
    } catch (e) {
      throw new HttpException(
        'Something wrong with db:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getById(id: string): Promise<Genre> {
    try {
      return this.genreRepository.findOne({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new HttpException(
        'Something wrong with db:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async post(dto: GenreDto): Promise<Genre> {
    try {
      const newGenre = this.genreRepository.create({ name: dto.name });
      return this.genreRepository.save(newGenre);
    } catch (e) {
      throw new HttpException(
        'Something wrong with db:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async put(id: string, dto: GenreDto) {
    try {
      return this.genreRepository.update({ id }, { ...dto });
    } catch (e) {
      throw new HttpException(
        'Something wrong with db:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteById(id: ObjectId) {
    try {
      return this.genreRepository.delete(id);
    } catch (e) {
      throw new HttpException(
        'Something wrong with db:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

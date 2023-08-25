import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreEntity } from './genre.entity';
import { ObjectId, Repository } from 'typeorm';
import { GenreDto } from './genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private genreRepository: Repository<GenreEntity>,
  ) {}

  getAll(): Promise<GenreEntity[]> {
    try {
      return this.genreRepository.find();
    } catch (e) {
      throw new HttpException(
        'Something wrong with db:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getById(id: string): Promise<GenreEntity> {
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

  async post(dto: GenreDto): Promise<GenreEntity> {
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
      await this.genreRepository.update({ id }, { ...dto });
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

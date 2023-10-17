import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { PostUserDto, PutUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  getUser(id: string): Promise<UserEntity> {
    try {
      return this.userRepository.findOne({ where: { id } });
    } catch (e) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  create(dto: PostUserDto): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create(dto);
      return this.userRepository.save(newUser);
    } catch {
      throw new HttpException(
        'Something went wrong:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, dto: PutUserDto): Promise<UserEntity> {
    try {
      await this.userRepository.update({ id }, dto);
      return this.userRepository.findOne({ where: { id } });
    } catch {
      throw new HttpException(
        'Something went wrong:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: string) {
    try {
      const user = this.userRepository.findOne({ where: { id } });
      await this.userRepository.delete({ id });
      return user;
    } catch {
      throw new HttpException(
        'Something went wrong:(',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

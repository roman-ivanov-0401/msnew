import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSchema } from './user.entity';
import { Repository } from 'typeorm';
import { PostUserDto, PutUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserSchema)
    private userRepository: Repository<UserSchema>,
  ) {}

  getUser(id: string): Promise<UserSchema> {
    try {
      return this.userRepository.findOne({ where: { id } });
    } catch (e) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  create(dto: PostUserDto): Promise<UserSchema> {
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

  async update(id: string, dto: PutUserDto): Promise<UserSchema> {
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

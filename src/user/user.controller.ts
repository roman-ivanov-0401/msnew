import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { PostUserDto, PutUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  postUser(@Body() dto: PostUserDto) {
    return this.userService.create(dto);
  }

  @Put(':id')
  putUser(@Param('id') id: string, @Body() dto: PutUserDto) {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}

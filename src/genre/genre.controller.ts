import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreDto } from './genre.dto';
import { ObjectId } from 'typeorm';

@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}
  @Get('all')
  getAll() {
    return this.genreService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.genreService.getById(id);
  }

  @Post()
  post(@Body() dto: GenreDto) {
    return this.genreService.post(dto);
  }

  @Put(':id')
  put(@Param('id') id: string, @Body() dto: GenreDto) {
    return this.genreService.put(id, dto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: ObjectId) {
    return this.genreService.deleteById(id);
  }
}

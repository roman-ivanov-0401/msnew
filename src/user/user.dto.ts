import { IsOptional, IsString, MinLength } from 'class-validator';
export class PostUserDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  @MinLength(8)
  password: string;
}

export class PutUserDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  surname: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  password: string;
}

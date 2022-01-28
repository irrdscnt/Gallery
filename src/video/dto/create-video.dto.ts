import { Contains, IsEnum, IsOptional, Length } from 'class-validator';
import { VideoCategory } from '../enum';

export class CreateVideoDto {
  id?: number;

  @Length(2, 30)
  name: string;

  @IsEnum(VideoCategory)
  category: VideoCategory;

  @Contains('https://')
  url: string;

  @IsOptional()
  @Length(0, 100)
  description: string;
}

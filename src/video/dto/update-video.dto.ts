import { Contains, IsEnum, IsOptional, Length } from 'class-validator';
import { VideoCategory } from '../enum';

export class UpdateVideoDto {
  @IsOptional()
  @Length(2, 30)
  name: string;

  @IsOptional()
  @IsEnum(VideoCategory)
  category: VideoCategory;

  @IsOptional()
  @Contains('https://')
  url: string;

  @IsOptional()
  @Length(0, 100)
  description: string;
}

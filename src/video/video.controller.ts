import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateVideoDto, UpdateVideoDto } from './dto';
import { IVideo } from './interface';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly service: VideoService) {}

  @Get()
  async findAll(): Promise<IVideo[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<IVideo> {
    return await this.service.findOne(+id);
  }

  @Post()
  async create(@Body() dto: CreateVideoDto): Promise<IVideo> {
    return await this.service.create(dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number): Promise<void> {
    return await this.service.delete(+id);
  }

  @Put(':id')
  async edit(@Param('id') id: number, @Body() dto: UpdateVideoDto) {
    return await this.service.update(+id, dto);
  }
}

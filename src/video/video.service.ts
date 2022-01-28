import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVideoDto, UpdateVideoDto } from './dto';
import { VideoCategory } from './enum';
import { IVideo } from './interface';

@Injectable()
export class VideoService {
  private DataBase: IVideo[];
  constructor() {
    this.DataBase = [
      {
        id: 1,
        name: 'Timelapse of the future',
        category: VideoCategory.Science,
        url: 'https://www.youtube.com/watch?v=uD4izuDMUQA',
        description: '',
      },
      {
        id: 2,
        name: 'Linkin Park- Burn It down',
        category: VideoCategory.MusicVideo,
        url: 'https://www.youtube.com/watch?v=dxytyRy-O1k',
        description: '',
      },
      {
        id: 3,
        name: 'Jokers pencil trick scene',
        category: VideoCategory.MovieScene,
        url: 'https://www.youtube.com/watch?v=votcOf5cYCM',
        description: '',
      },
    ];
  }

  async findAll(): Promise<IVideo[]> {
    return this.DataBase;
  }

  async findOne(id: number): Promise<IVideo> {
    const video = this.DataBase.find((video: IVideo) => video.id == id);
    if (!video) {
      throw new NotFoundException();
    }
    return video;
  }

  async create(dto: CreateVideoDto): Promise<IVideo> {
    const exist = this.DataBase.find((video) => video.url === dto.url);
    if (exist) {
      throw new ConflictException('Video already exist');
    }
    dto.id = this.DataBase.length + 1;
    this.DataBase.push(dto);
    return dto;
  }

  async update(id: number, dto: UpdateVideoDto): Promise<IVideo> {
    const video = await this.findOne(id);
    Object.assign(video, dto);
    return video;
  }

  async delete(id: number): Promise<void> {
    const video = await this.findOne(id);
    const videoIndex = this.DataBase.indexOf(video);
    this.DataBase.splice(videoIndex, 1);
  }
}

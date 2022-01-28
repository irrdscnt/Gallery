import { Module } from '@nestjs/common';
import { ImageModule } from './image/image.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [ImageModule, VideoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

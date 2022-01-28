import { VideoCategory } from '../enum';

export interface IVideo {
  id?: number;
  name: string;
  category: VideoCategory;
  url: string;
  description: string;
}

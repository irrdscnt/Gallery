import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { IImage } from './interface/image.interface';

@Injectable()
export class ImageService {
    private DB:IImage[]
    constructor() {
        this.DB=[
            { id: 1, name: 'Hatiko', url: 'https://bit.ly/3fF431Z', description: '' },
            { id: 2, name: 'My hero academia', url: 'https://bit.ly/3Ae5HRK', description: '' },
            { id: 3, name: 'Macbook air M1', url: 'https://bit.ly/3IqLCKV', description: '' },

        ]
    }

    async findAll():Promise<IImage[]>{
        return this.DB
    } 

    async findOne(id:number):Promise<IImage> {
        const image= this.DB.find((image:IImage) => image.id == id);
        if(!image){
            throw new NotFoundException
            //HttpStatus.NOT_FOUND
            //throw new HttpException('Image is not defined',HttpStatus.NOT_FOUND)
        }
        return image
    }

    async create(dto:CreateImageDto):Promise<IImage>{
        const exist=this.DB.find(image=>image.url===dto.url)
        if (exist){
            throw new ConflictException('Image already exist')
        }
        dto.id=this.DB.length+1
        this.DB.push(dto)
        return dto
    }
}
 


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateTextDto } from './dto/create_text_dto';
import { Text } from './texts.model';

@Injectable()
export class TextsService {

    constructor(@InjectModel(Text) private textRepository: typeof Text,
                private fileService: FilesService) {}

    async create(dto: CreateTextDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        const text = await this.textRepository.create(
            {...dto, image: fileName});
        return text;
    }
}

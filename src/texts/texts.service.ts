import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTextDto } from './dto/create_text_dto';
import { Text } from './texts.model';

@Injectable()
export class TextsService {

    constructor(@InjectModel(Text) private textRepository: typeof Text) {}

    async create(dto: CreateTextDto, image: any) {
        const fileName = 'new_file'
        const text = await this.textRepository.create(
            {...dto, image: fileName})
        return text;
    }
}

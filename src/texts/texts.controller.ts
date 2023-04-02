import { Body, Controller, Post, UploadedFile } from '@nestjs/common';
import { CreateTextDto } from './dto/create_text_dto';
import { TextsService } from './texts.service';

@Controller('texts')
export class TextsController {

    constructor (private textService: TextsService) {}

    @Post()
    createText(@Body() dto:CreateTextDto,
                @UploadedFile() image) {
        this.textService.create(dto, image)
    }
}
